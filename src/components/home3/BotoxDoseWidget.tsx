import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import baseFace from "@/assets/wrinkle-base-face.jpg";

/**
 * BotoxDoseWidget
 * Front card = one full-face portrait with SVG line overlays that intensify
 * per area (frown, forehead, crow's feet) based on the user's grade selection.
 * G0 hides the lines completely; G1–G3 progressively increase opacity + width.
 */

type Area = {
  key: "frown" | "forehead" | "crows";
  label: string;
  short: string;
  baseUnits: number;
};

const AREAS: Area[] = [
  { key: "frown", label: "Frown (11s)", short: "Frown", baseUnits: 20 },
  { key: "forehead", label: "Forehead", short: "Forehead", baseUnits: 10 },
  { key: "crows", label: "Crow's feet", short: "Crow's feet", baseUnits: 14 },
];

const GRADES = [
  { g: 0, label: "G0" },
  { g: 1, label: "G1" },
  { g: 2, label: "G2" },
  { g: 3, label: "G3" },
] as const;

const gradeMult = (g: number) => (g === 0 ? 0 : g === 1 ? 0.55 : g === 2 ? 1 : 1.25);
const doseScalar = (v: number) => 0.6 + (v / 100) * 0.8;

// Per-grade line rendering strength — thin, feathered, layered
const lineStyle = (g: number) => {
  if (g === 0) return { opacity: 0, width: 0, halo: 0 };
  if (g === 1) return { opacity: 0.22, width: 0.18, halo: 0.55 };
  if (g === 2) return { opacity: 0.42, width: 0.32, halo: 0.9 };
  return { opacity: 0.7, width: 0.5, halo: 1.35 };
};

const BotoxDoseWidget = () => {
  const [grades, setGrades] = useState<Record<Area["key"], number>>({
    frown: 3,
    forehead: 2,
    crows: 2,
  });
  const [dose, setDose] = useState(50);

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

  const frown = lineStyle(grades.frown);
  const forehead = lineStyle(grades.forehead);
  const crows = lineStyle(grades.crows);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-b from-[#141414] to-black border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 w-64 h-64 rounded-full bg-[#C9A050]/15 blur-3xl"
      />
      <div className="relative z-[1] flex flex-col h-full p-4 sm:p-5">
        {/* Header */}
        <div className="mb-2">
          <p className="text-[9.5px] uppercase tracking-[0.24em] text-[#C9A050] mb-1">
            Dose calculator
          </p>
          <h3 className="font-serif text-lg sm:text-xl leading-[1.05] tracking-tight text-white">
            Your Botox, mapped.
          </h3>
        </div>

        {/* Face + SVG overlay */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black" style={{ aspectRatio: "4 / 5" }}>
          <img
            src={baseFace}
            alt="Reference face for wrinkle grading"
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover"
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

            {/* soft halo layer (broad shadow under crease) */}
            <g stroke="#3d2418" fill="none" strokeLinecap="round" filter="url(#wr-halo)">
              <g opacity={forehead.halo * 0.35} strokeWidth={forehead.width * 2.4}>
                <path d="M39 32.8 Q50 30.6 61 32.6" />
                <path d="M37.5 36.6 Q50 34.1 62.5 36.4" />
                <path d="M40 40.4 Q50 38.4 60 40.2" />
              </g>
              <g opacity={frown.halo * 0.4} strokeWidth={frown.width * 2.2}>
                <path d="M48.2 44.5 Q47.9 49 47.7 52.6" />
                <path d="M51.8 44.5 Q52.2 49 52.4 52.6" />
              </g>
              <g opacity={crows.halo * 0.32} strokeWidth={crows.width * 2.4}>
                <path d="M31.2 55.2 Q28.5 54.2 26.4 53.2" />
                <path d="M31.2 57.2 Q28.4 57.1 26 57" />
                <path d="M31.2 59.2 Q28.5 60.2 26.4 61.3" />
                <path d="M68.8 55.2 Q71.5 54.2 73.6 53.2" />
                <path d="M68.8 57.2 Q71.6 57.1 74 57" />
                <path d="M68.8 59.2 Q71.5 60.2 73.6 61.3" />
              </g>
            </g>

            {/* fine crease strokes on top */}
            <g stroke="#2a180e" fill="none" strokeLinecap="round" filter="url(#wr-soft)">
              {/* Forehead — three subtly wavy horizontals of varied length */}
              <g opacity={forehead.opacity}>
                <path d="M40 33 Q44 32.4 49 32.6 Q55 32.9 60 33.1" strokeWidth={forehead.width} />
                <path d="M38 36.9 Q44 36.2 50 36.4 Q56 36.7 62 36.9" strokeWidth={forehead.width * 1.05} />
                <path d="M41 40.7 Q46 40.1 51 40.3 Q56 40.5 59 40.6" strokeWidth={forehead.width * 0.9} />
                {/* faint short accessory line */}
                <path d="M43 38.5 Q47 38.2 51 38.4" strokeWidth={forehead.width * 0.6} opacity="0.6" />
              </g>
              {/* Frown — 11s with slight curvature, tapered by using two overlaid strokes */}
              <g opacity={frown.opacity}>
                <path d="M48.3 44.8 Q47.9 48.6 47.6 52.4" strokeWidth={frown.width} />
                <path d="M48.4 45.6 Q48.1 48.6 47.8 51.6" strokeWidth={frown.width * 0.7} opacity="0.75" />
                <path d="M51.7 44.8 Q52.1 48.6 52.4 52.4" strokeWidth={frown.width} />
                <path d="M51.6 45.6 Q51.9 48.6 52.2 51.6" strokeWidth={frown.width * 0.7} opacity="0.75" />
              </g>
              {/* Crow's feet — fine fan of uneven length lines from outer canthus */}
              <g opacity={crows.opacity}>
                {/* Left eye */}
                <path d="M31.4 54.8 Q29 54 26.6 53.1" strokeWidth={crows.width} />
                <path d="M31.4 56.5 Q28.8 56.4 26.2 56.3" strokeWidth={crows.width * 1.05} />
                <path d="M31.4 58.2 Q28.9 58.9 26.6 59.6" strokeWidth={crows.width * 0.95} />
                <path d="M31.6 59.6 Q29.6 60.7 27.7 61.7" strokeWidth={crows.width * 0.7} opacity="0.7" />
                {/* Right eye */}
                <path d="M68.6 54.8 Q71 54 73.4 53.1" strokeWidth={crows.width} />
                <path d="M68.6 56.5 Q71.2 56.4 73.8 56.3" strokeWidth={crows.width * 1.05} />
                <path d="M68.6 58.2 Q71.1 58.9 73.4 59.6" strokeWidth={crows.width * 0.95} />
                <path d="M68.4 59.6 Q70.4 60.7 72.3 61.7" strokeWidth={crows.width * 0.7} opacity="0.7" />
              </g>
            </g>
          </svg>
          {/* Bottom label chip */}
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
              <span className="text-[10.5px] text-white/80 w-[74px] shrink-0">{a.label}</span>
              <div className="grid grid-cols-4 gap-1 flex-1">
                {GRADES.map((gr) => {
                  const active = grades[a.key] === gr.g;
                  return (
                    <button
                      key={gr.g}
                      type="button"
                      onClick={() => setGrades((s) => ({ ...s, [a.key]: gr.g }))}
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
