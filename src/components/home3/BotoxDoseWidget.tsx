import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Eraser, Pencil } from "lucide-react";
import baseFace from "@/assets/wrinkle-base-face.jpg";

/**
 * BotoxDoseWidget
 * Users can either tap a G0–G3 grade per area, or DRAW their own lines
 * directly on the face. When they draw, we score ink coverage inside each
 * region's bounding box and translate that into a grade automatically.
 */

type AreaKey = "frown" | "forehead" | "crows";

type Area = {
  key: AreaKey;
  label: string;
  short: string;
  baseUnits: number;
  // Bounding boxes in % of canvas (crows has two — left & right eye)
  boxes: { x: number; y: number; w: number; h: number }[];
};

const AREAS: Area[] = [
  {
    key: "forehead",
    label: "Forehead",
    short: "Forehead",
    baseUnits: 10,
    boxes: [{ x: 34, y: 24, w: 32, h: 15 }],
  },
  {
    key: "frown",
    label: "Frown (11s)",
    short: "Frown",
    baseUnits: 20,
    boxes: [{ x: 44, y: 36, w: 12, h: 13 }],
  },
  {
    key: "crows",
    label: "Crow's feet",
    short: "Crow's feet",
    baseUnits: 14,
    boxes: [
      { x: 20, y: 43, w: 14, h: 13 },
      { x: 66, y: 43, w: 14, h: 13 },
    ],
  },
];

const GRADES = [
  { g: 0, label: "G0" },
  { g: 1, label: "G1" },
  { g: 2, label: "G2" },
  { g: 3, label: "G3" },
] as const;

const gradeMult = (g: number) => (g === 0 ? 0 : g === 1 ? 0.55 : g === 2 ? 1 : 1.25);
const doseScalar = (v: number) => 0.6 + (v / 100) * 0.8;

const lineStyle = (g: number) => {
  if (g === 0) return { opacity: 0, width: 0, halo: 0 };
  if (g === 1) return { opacity: 0.22, width: 0.18, halo: 0.55 };
  if (g === 2) return { opacity: 0.42, width: 0.32, halo: 0.9 };
  return { opacity: 0.7, width: 0.5, halo: 1.35 };
};

// Coverage → grade thresholds (fraction of region pixels that are inked)
const coverageToGrade = (frac: number): number => {
  if (frac < 0.004) return 0;
  if (frac < 0.015) return 1;
  if (frac < 0.035) return 2;
  return 3;
};

const BotoxDoseWidget = () => {
  const [grades, setGrades] = useState<Record<AreaKey, number>>({
    frown: 3,
    forehead: 2,
    crows: 2,
  });
  // Which source set the grade — 'draw' hides synthetic overlay for that region
  const [source, setSource] = useState<Record<AreaKey, "button" | "draw">>({
    frown: "button",
    forehead: "button",
    crows: "button",
  });
  const [dose, setDose] = useState(50);
  const [drawMode, setDrawMode] = useState(false);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const lastPtRef = useRef<{ x: number; y: number } | null>(null);

  // Size canvas to its container
  useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      const w = wrapRef.current;
      if (!c || !w) return;
      const rect = w.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      c.width = Math.round(rect.width * dpr);
      c.height = Math.round(rect.height * dpr);
      c.style.width = `${rect.width}px`;
      c.style.height = `${rect.height}px`;
      const ctx = c.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const scoreDrawing = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const W = c.width;
    const H = c.height;

    const nextGrades: Record<AreaKey, number> = { ...grades };
    const nextSource: Record<AreaKey, "button" | "draw"> = { ...source };
    let anyDraw = false;

    for (const a of AREAS) {
      let inked = 0;
      let total = 0;
      for (const b of a.boxes) {
        const x = Math.floor((b.x / 100) * W);
        const y = Math.floor((b.y / 100) * H);
        const w = Math.floor((b.w / 100) * W);
        const h = Math.floor((b.h / 100) * H);
        if (w <= 0 || h <= 0) continue;
        const img = ctx.getImageData(x, y, w, h).data;
        total += w * h;
        for (let i = 3; i < img.length; i += 4) {
          if (img[i] > 40) inked++;
        }
      }
      if (total === 0) continue;
      const frac = inked / total;
      if (frac > 0.001) {
        anyDraw = true;
        nextGrades[a.key] = coverageToGrade(frac);
        nextSource[a.key] = "draw";
      }
    }
    if (anyDraw) {
      setGrades(nextGrades);
      setSource(nextSource);
    }
  }, [grades, source]);

  const getPt = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const c = canvasRef.current!;
    const rect = c.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawMode) return;
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drawingRef.current = true;
    lastPtRef.current = getPt(e);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawMode || !drawingRef.current) return;
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const pt = getPt(e);
    const last = lastPtRef.current ?? pt;
    ctx.strokeStyle = "rgba(38, 22, 12, 0.78)";
    ctx.lineWidth = 1.4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
    lastPtRef.current = pt;
  };

  const onPointerUp = () => {
    if (!drawMode) return;
    drawingRef.current = false;
    lastPtRef.current = null;
    scoreDrawing();
  };

  const clearCanvas = () => {
    const c = canvasRef.current;
    if (c) {
      const ctx = c.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, c.width, c.height);
    }
    drawingRef.current = false;
    setGrades({ frown: 0, forehead: 0, crows: 0 });
    setSource({ frown: "button", forehead: "button", crows: "button" });
  };

  const setGradeManual = (key: AreaKey, g: number) => {
    setGrades((s) => ({ ...s, [key]: g }));
    setSource((s) => ({ ...s, [key]: "button" }));
  };

  const { units, breakdown, anyTreated, hasDeep } = useMemo(() => {
    const scalar = doseScalar(dose);
    let total = 0;
    const bd: { area: string; units: number }[] = [];
    let hasDeep = false;
    for (const a of AREAS) {
      const g = grades[a.key];
      if (g === 3) hasDeep = true;
      const u = Math.round(a.baseUnits * gradeMult(g) * scalar);
      if (u > 0) {
        bd.push({ area: a.short, units: u });
        total += u;
      }
    }
    return { units: total, breakdown: bd, anyTreated: bd.length > 0, hasDeep };
  }, [grades, dose]);

  const { effect, longevity, tone } = useMemo(() => {
    const underdosed = hasDeep && dose < 40;
    if (!anyTreated) return { effect: "Select an area to begin", longevity: "—", tone: "neutral" as const };
    if (underdosed) return { effect: "Softening only — deep lines partially eased", longevity: "≈ 2–3 months", tone: "low" as const };
    if (dose < 34) return { effect: "Whisper — micro-relaxation, expression kept", longevity: "≈ 2.5–3 months", tone: "low" as const };
    if (dose < 67) return { effect: "Signature — natural smoothing, expression intact", longevity: "≈ 3–4 months", tone: "loved" as const };
    return { effect: "Full hold — deeper crease control", longevity: "≈ 4–5 months", tone: "high" as const };
  }, [dose, anyTreated, hasDeep]);

  const doseLabel = dose < 34 ? "Low" : dose < 67 ? "Most loved" : "High";

  // Only render synthetic SVG lines where the user hasn't drawn
  const forehead = source.forehead === "button" ? lineStyle(grades.forehead) : { opacity: 0, width: 0, halo: 0 };
  const frown = source.frown === "button" ? lineStyle(grades.frown) : { opacity: 0, width: 0, halo: 0 };
  const crows = source.crows === "button" ? lineStyle(grades.crows) : { opacity: 0, width: 0, halo: 0 };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-b from-[#141414] to-black border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] flex flex-col">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 w-64 h-64 rounded-full bg-[#C9A050]/15 blur-3xl" />
      <div className="relative z-[1] flex flex-col h-full p-4 sm:p-5">
        {/* Header */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <div>
            <p className="text-[9.5px] uppercase tracking-[0.24em] text-[#C9A050] mb-1">Dose calculator</p>
            <h3 className="font-serif text-lg sm:text-xl leading-[1.05] tracking-tight text-white">Your Botox, mapped.</h3>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setDrawMode((d) => !d)}
              className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.14em] transition ${
                drawMode
                  ? "bg-[#C9A050] text-black border-[#C9A050] shadow-[0_0_10px_rgba(201,160,80,0.5)]"
                  : "border-[#C9A050]/40 bg-[#C9A050]/[0.08] text-[#C9A050] hover:bg-[#C9A050]/[0.16]"
              }`}
              aria-pressed={drawMode}
            >
              <Pencil className="w-3 h-3" /> Draw
            </button>
            <button
              type="button"
              onClick={clearCanvas}
              className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.05] px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-white/70 hover:bg-white/[0.1] transition"
              aria-label="Clear drawing"
            >
              <Eraser className="w-3 h-3" /> Clear
            </button>
          </div>
        </div>

        {/* Face + SVG overlay + drawing canvas */}
        <div
          ref={wrapRef}
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black select-none"
          style={{ aspectRatio: "4 / 5" }}
        >
          <img
            src={baseFace}
            alt="Reference face for wrinkle grading"
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
          <svg
            viewBox="0 0 100 125"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full pointer-events-none mix-blend-multiply"
            aria-hidden
          >
            <defs>
              <filter id="wr-soft" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="0.12" />
              </filter>
              <filter id="wr-halo" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="0.55" />
              </filter>
            </defs>
            <g stroke="#3d2418" fill="none" strokeLinecap="round" filter="url(#wr-halo)">
              <g opacity={forehead.halo * 0.35} strokeWidth={forehead.width * 2.4}>
                <path d="M39 32.8 Q50 30.6 61 32.6" />
                <path d="M37.5 36.6 Q50 34.1 62.5 36.4" />
                <path d="M40 40.4 Q50 38.4 60 40.2" />
              </g>
              <g opacity={frown.halo * 0.4} strokeWidth={frown.width * 2.2}>
                <path d="M48.2 38.5 Q47.9 42 47.7 45.2" />
                <path d="M51.8 38.5 Q52.2 42 52.4 45.2" />
              </g>
              <g opacity={crows.halo * 0.32} strokeWidth={crows.width * 2.4}>
                <path d="M31.2 48.2 Q28.5 47.2 26.4 46.2" />
                <path d="M31.2 50.2 Q28.4 50.1 26 50" />
                <path d="M31.2 52.2 Q28.5 53.2 26.4 54.3" />
                <path d="M68.8 48.2 Q71.5 47.2 73.6 46.2" />
                <path d="M68.8 50.2 Q71.6 50.1 74 50" />
                <path d="M68.8 52.2 Q71.5 53.2 73.6 54.3" />
              </g>
            </g>
            <g stroke="#2a180e" fill="none" strokeLinecap="round" filter="url(#wr-soft)">
              <g opacity={forehead.opacity}>
                <path d="M40 33 Q44 32.4 49 32.6 Q55 32.9 60 33.1" strokeWidth={forehead.width} />
                <path d="M38 36.9 Q44 36.2 50 36.4 Q56 36.7 62 36.9" strokeWidth={forehead.width * 1.05} />
                <path d="M41 40.7 Q46 40.1 51 40.3 Q56 40.5 59 40.6" strokeWidth={forehead.width * 0.9} />
                <path d="M43 38.5 Q47 38.2 51 38.4" strokeWidth={forehead.width * 0.6} opacity="0.6" />
              </g>
              <g opacity={frown.opacity}>
                <path d="M48.3 38.8 Q47.9 41.8 47.6 45" strokeWidth={frown.width} />
                <path d="M48.4 39.6 Q48.1 41.8 47.8 44.5" strokeWidth={frown.width * 0.7} opacity="0.75" />
                <path d="M51.7 38.8 Q52.1 41.8 52.4 45" strokeWidth={frown.width} />
                <path d="M51.6 39.6 Q51.9 41.8 52.2 44.5" strokeWidth={frown.width * 0.7} opacity="0.75" />
              </g>
              <g opacity={crows.opacity}>
                <path d="M31.4 47.8 Q29 47 26.6 46.1" strokeWidth={crows.width} />
                <path d="M31.4 49.5 Q28.8 49.4 26.2 49.3" strokeWidth={crows.width * 1.05} />
                <path d="M31.4 51.2 Q28.9 51.9 26.6 52.6" strokeWidth={crows.width * 0.95} />
                <path d="M31.6 52.6 Q29.6 53.7 27.7 54.7" strokeWidth={crows.width * 0.7} opacity="0.7" />
                <path d="M68.6 47.8 Q71 47 73.4 46.1" strokeWidth={crows.width} />
                <path d="M68.6 49.5 Q71.2 49.4 73.8 49.3" strokeWidth={crows.width * 1.05} />
                <path d="M68.6 51.2 Q71.1 51.9 73.4 52.6" strokeWidth={crows.width * 0.95} />
                <path d="M68.4 52.6 Q70.4 53.7 72.3 54.7" strokeWidth={crows.width * 0.7} opacity="0.7" />
              </g>
            </g>
          </svg>

          {/* Drawing canvas — only captures pointers in draw mode */}
          <canvas
            ref={canvasRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="absolute inset-0 w-full h-full mix-blend-multiply"
            style={{
              pointerEvents: drawMode ? "auto" : "none",
              cursor: drawMode ? "crosshair" : "default",
              touchAction: drawMode ? "none" : "auto",
            }}
          />

          {/* Draw-mode hint */}
          {drawMode && (
            <div className="absolute top-2 left-2 right-2 rounded-md bg-black/60 backdrop-blur px-2 py-1 text-[9.5px] text-white/80 text-center">
              Trace your lines — AI grades each area as you draw.
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-3 py-2 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A050]">Live preview</span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/60">
              F{grades.frown} · Fh{grades.forehead} · C{grades.crows}
            </span>
          </div>
        </div>

        {/* Areas — compact rows */}
        <div className="space-y-1.5 mt-3">
          {AREAS.map((a) => (
            <div key={a.key} className="flex items-center gap-2">
              <span className="text-[10.5px] text-white/80 w-[74px] shrink-0 flex items-center gap-1">
                {a.label}
                {source[a.key] === "draw" && (
                  <span className="text-[8px] uppercase tracking-[0.14em] text-[#C9A050]/80">AI</span>
                )}
              </span>
              <div className="grid grid-cols-4 gap-1 flex-1">
                {GRADES.map((gr) => {
                  const active = grades[a.key] === gr.g;
                  return (
                    <button
                      key={gr.g}
                      type="button"
                      onClick={() => setGradeManual(a.key, gr.g)}
                      className={`py-1 rounded-md text-[10px] font-medium transition ${
                        active
                          ? "bg-[#C9A050] text-black shadow-[0_0_10px_rgba(201,160,80,0.5)]"
                          : "bg-white/[0.06] text-white/70 hover:bg-white/[0.12]"
                      }`}
                      aria-pressed={active}
                    >
                      {gr.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9.5px] uppercase tracking-[0.16em] text-white/55">Strength</span>
            <span className="text-[10px] text-[#C9A050] font-medium">{doseLabel}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={dose}
            onChange={(e) => setDose(parseInt(e.target.value, 10))}
            aria-label="Botox dose strength"
            className="w-full h-1 appearance-none rounded-full bg-gradient-to-r from-white/20 via-[#C9A050]/60 to-white/20 accent-[#C9A050] cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C9A050]
              [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(201,160,80,0.7)]
              [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-[#C9A050] [&::-moz-range-thumb]:border-0"
          />
          <div className="flex justify-between mt-0.5 text-[8.5px] uppercase tracking-[0.12em] text-white/40">
            <span>Low</span>
            <span>Loved</span>
            <span>High</span>
          </div>
        </div>

        {/* Result */}
        <div className="mt-2.5 rounded-xl border border-[#C9A050]/25 bg-gradient-to-b from-[#C9A050]/[0.08] to-transparent px-3 py-2">
          <div className="flex items-baseline justify-between gap-3">
            <div>
              <p className="text-[8.5px] uppercase tracking-[0.2em] text-[#C9A050]">Dose</p>
              <p className="font-serif text-white text-lg leading-none mt-0.5">
                {units > 0 ? units : "—"}
                <span className="text-white/50 text-[10px] font-sans ml-1">units</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-[8.5px] uppercase tracking-[0.2em] text-[#C9A050]">Lasts</p>
              <p className="text-white text-[11px] mt-0.5">{longevity}</p>
            </div>
          </div>
          <p className={`text-[10px] leading-snug mt-1 ${tone === "low" ? "text-white/60" : tone === "high" ? "text-white/85" : "text-white/75"}`}>
            {effect}
          </p>
          {breakdown.length > 0 && (
            <p className="mt-1 text-[9px] text-white/40 leading-snug">
              {breakdown.map((b) => `${b.area} ${b.units}u`).join(" · ")}
            </p>
          )}
          <Link
            to="/treatments/anti-wrinkle-treatment/"
            className="mt-1.5 inline-flex items-center gap-1 text-[10.5px] font-medium text-[#C9A050] hover:text-[#e3c074]"
          >
            Book your assessment <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <p className="mt-1.5 text-[8.5px] text-white/35 leading-snug">
          Guide only. Final dose is decided in-clinic by a doctor.
        </p>
      </div>
    </div>
  );
};

export default BotoxDoseWidget;
