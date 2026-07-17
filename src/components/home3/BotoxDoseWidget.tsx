import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import wrinkleG1 from "@/assets/wrinkle-grade-g1.jpg";
import wrinkleG2 from "@/assets/wrinkle-grade-g2.jpg";
import wrinkleG3 from "@/assets/wrinkle-grade-g3.jpg";

const GRADE_IMAGES = [
  { g: 1, src: wrinkleG1, label: "G1 · Faint", desc: "Whisper-fine expression lines only when animated. Skin at rest looks smooth." },
  { g: 2, src: wrinkleG2, label: "G2 · Moderate", desc: "Clear dynamic lines on the forehead, 11s and crow's feet. Beginning to etch." },
  { g: 3, src: wrinkleG3, label: "G3 · Deep", desc: "Static creases visible at rest — set into the skin even without expression." },
] as const;

/**
 * BotoxDoseWidget
 * Interactive dose estimator matching the SpotlightCard shape/dimensions.
 * - User grades each upper-face area (G0–G3)
 * - Slider chooses dose intensity: Low · Most-loved · High
 * - Widget returns estimated total units, effect character, and longevity
 *
 * All figures are typical clinical ranges used at Cosmedocs and are for
 * education only — final dose is set in-clinic by a doctor.
 */

type Area = {
  key: "frown" | "forehead" | "crows";
  label: string;
  short: string;
  baseUnits: number; // typical "most-loved" dose at grade 2
};

const AREAS: Area[] = [
  { key: "frown", label: "Frown (11s)", short: "Frown", baseUnits: 20 },
  { key: "forehead", label: "Forehead lines", short: "Forehead", baseUnits: 10 },
  { key: "crows", label: "Crow's feet", short: "Crow's feet", baseUnits: 14 },
];

const GRADES = [
  { g: 0, label: "G0", hint: "None" },
  { g: 1, label: "G1", hint: "Faint" },
  { g: 2, label: "G2", hint: "Moderate" },
  { g: 3, label: "G3", hint: "Deep" },
] as const;

// Grade multiplier (G0 = no treatment)
const gradeMult = (g: number) => (g === 0 ? 0 : g === 1 ? 0.55 : g === 2 ? 1 : 1.25);

// Slider 0..100 → dose scalar
const doseScalar = (v: number) => 0.6 + (v / 100) * 0.8; // 0.6 low, 1.0 loved, 1.4 high

const BotoxDoseWidget = () => {
  const [grades, setGrades] = useState<Record<Area["key"], number>>({
    frown: 2,
    forehead: 1,
    crows: 1,
  });
  const [dose, setDose] = useState(50); // 0 low – 50 loved – 100 high
  const [flipped, setFlipped] = useState(false);
  const [refGrade, setRefGrade] = useState<1 | 2 | 3>(2);

  const { units, breakdown, anyTreated, hasDeep } = useMemo(() => {
    const scalar = doseScalar(dose);
    let total = 0;
    const bd: { area: string; units: number; grade: number }[] = [];
    let hasDeep = false;
    for (const a of AREAS) {
      const g = grades[a.key];
      if (g === 3) hasDeep = true;
      const u = Math.round(a.baseUnits * gradeMult(g) * scalar);
      if (u > 0) {
        bd.push({ area: a.short, units: u, grade: g });
        total += u;
      }
    }
    return { units: total, breakdown: bd, anyTreated: bd.length > 0, hasDeep };
  }, [grades, dose]);

  // Longevity + effect character
  const { effect, longevity, tone } = useMemo(() => {
    // Under-dosing a deep line = shorter, softer result
    const underdosed = hasDeep && dose < 40;
    if (!anyTreated) {
      return { effect: "Select an area to begin", longevity: "—", tone: "neutral" as const };
    }
    if (underdosed) {
      return {
        effect: "Softening only — deep lines partially eased",
        longevity: "≈ 2–3 months",
        tone: "low" as const,
      };
    }
    if (dose < 34) {
      return {
        effect: "Whisper — micro-relaxation, full expression kept",
        longevity: "≈ 2.5–3 months",
        tone: "low" as const,
      };
    }
    if (dose < 67) {
      return {
        effect: "Signature — natural smoothing, expression intact",
        longevity: "≈ 3–4 months",
        tone: "loved" as const,
      };
    }
    return {
      effect: "Full hold — deeper crease control, cleaner surface",
      longevity: "≈ 4–5 months",
      tone: "high" as const,
    };
  }, [dose, anyTreated, hasDeep]);

  const doseLabel = dose < 34 ? "Low" : dose < 67 ? "Most loved" : "High";

  const activeRef = GRADE_IMAGES.find((r) => r.g === refGrade)!;

  return (
    <div className="relative h-full w-full" style={{ perspective: "1600px" }}>
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
      {/* FRONT */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[28px] bg-gradient-to-b from-[#141414] to-black border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] flex flex-col"
        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
      >
        {/* subtle gold glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 w-64 h-64 rounded-full bg-[#C9A050]/15 blur-3xl"
        />
      <div className="relative z-[1] flex flex-col h-full p-5 sm:p-6">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-1.5">
              Dose calculator
            </p>
            <h3 className="font-serif text-xl sm:text-2xl leading-[1.1] tracking-tight text-white">
              Your Botox, mapped.
            </h3>
            <p className="mt-1.5 text-[11.5px] text-white/60 leading-snug">
              Grade each area, then choose your strength.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setFlipped(true)}
            className="shrink-0 inline-flex items-center gap-1 rounded-full border border-[#C9A050]/40 bg-[#C9A050]/[0.08] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] text-[#C9A050] hover:bg-[#C9A050]/[0.16] transition"
            aria-label="See wrinkle grade reference"
          >
            <RefreshCw className="w-3 h-3" /> See grades
          </button>
        </div>

        {/* Areas */}
        <div className="space-y-2.5 mb-3">
          {AREAS.map((a) => (
            <div key={a.key}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-white/85">{a.label}</span>
                <span className="text-[10px] text-white/45">
                  {GRADES.find((x) => x.g === grades[a.key])?.hint}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {GRADES.map((gr) => {
                  const active = grades[a.key] === gr.g;
                  return (
                    <button
                      key={gr.g}
                      type="button"
                      onClick={() =>
                        setGrades((s) => ({ ...s, [a.key]: gr.g }))
                      }
                      className={`py-1.5 rounded-lg text-[11px] font-medium transition ${
                        active
                          ? "bg-[#C9A050] text-black shadow-[0_0_16px_rgba(201,160,80,0.5)]"
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
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">
              Strength
            </span>
            <span className="text-[11px] text-[#C9A050] font-medium">{doseLabel}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={dose}
            onChange={(e) => setDose(parseInt(e.target.value, 10))}
            aria-label="Botox dose strength"
            className="w-full h-1.5 appearance-none rounded-full bg-gradient-to-r from-white/20 via-[#C9A050]/60 to-white/20 accent-[#C9A050] cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C9A050]
              [&::-webkit-slider-thumb]:shadow-[0_0_14px_rgba(201,160,80,0.7)]
              [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-[#C9A050] [&::-moz-range-thumb]:border-0"
          />
          <div className="flex justify-between mt-1 text-[9.5px] uppercase tracking-[0.14em] text-white/40">
            <span>Low</span>
            <span>Most loved</span>
            <span>High</span>
          </div>
        </div>

        {/* Result */}
        <div className="mt-auto rounded-2xl border border-[#C9A050]/25 bg-gradient-to-b from-[#C9A050]/[0.08] to-transparent p-3.5">
          <div className="flex items-baseline justify-between gap-3 mb-1">
            <div>
              <p className="text-[9.5px] uppercase tracking-[0.22em] text-[#C9A050]">
                Estimated dose
              </p>
              <p className="font-serif text-white text-2xl leading-none mt-1">
                {units > 0 ? `${units}` : "—"}
                <span className="text-white/50 text-sm font-sans ml-1">units</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9.5px] uppercase tracking-[0.22em] text-[#C9A050]">
                Longevity
              </p>
              <p className="text-white text-sm mt-1">{longevity}</p>
            </div>
          </div>
          <p
            className={`text-[11.5px] leading-snug mt-1.5 ${
              tone === "low"
                ? "text-white/60"
                : tone === "high"
                ? "text-white/85"
                : "text-white/75"
            }`}
          >
            {effect}
          </p>
          {breakdown.length > 0 && (
            <p className="mt-2 text-[10px] text-white/40 leading-snug">
              {breakdown.map((b) => `${b.area} ${b.units}u`).join(" · ")}
            </p>
          )}
          <Link
            to="/treatments/anti-wrinkle-treatment/"
            className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-medium text-[#C9A050] hover:text-[#e3c074]"
          >
            Book your assessment <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="mt-2 text-[9.5px] text-white/35 leading-snug">
          Guide only. Final dose is decided in-clinic by a doctor.
        </p>
      </div>
      </div>
      {/* END FRONT */}

      {/* BACK */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[28px] bg-gradient-to-b from-[#141414] to-black border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] flex flex-col"
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <div className="relative z-[1] flex flex-col h-full p-5 sm:p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-1.5">
                Grade reference
              </p>
              <h3 className="font-serif text-xl sm:text-2xl leading-[1.1] tracking-tight text-white">
                How deep is deep?
              </h3>
              <p className="mt-1.5 text-[11.5px] text-white/60 leading-snug">
                Match your own lines to a grade. Tap G1 · G2 · G3 to compare.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="shrink-0 inline-flex items-center gap-1 rounded-full border border-[#C9A050]/40 bg-[#C9A050]/[0.08] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] text-[#C9A050] hover:bg-[#C9A050]/[0.16] transition"
              aria-label="Back to dose calculator"
            >
              <RefreshCw className="w-3 h-3" /> Calculator
            </button>
          </div>

          {/* Image */}
          <div className="relative flex-1 min-h-0 rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              key={activeRef.src}
              src={activeRef.src}
              alt={`Wrinkle severity ${activeRef.label}`}
              loading="lazy"
              width={768}
              height={768}
              className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A050] mb-0.5">
                {activeRef.label}
              </p>
              <p className="text-[11.5px] text-white/85 leading-snug">
                {activeRef.desc}
              </p>
            </div>
          </div>

          {/* Grade selector */}
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {GRADE_IMAGES.map((r) => {
              const active = refGrade === r.g;
              return (
                <button
                  key={r.g}
                  type="button"
                  onClick={() => setRefGrade(r.g as 1 | 2 | 3)}
                  className={`py-2 rounded-lg text-[11px] font-medium transition ${
                    active
                      ? "bg-[#C9A050] text-black shadow-[0_0_16px_rgba(201,160,80,0.5)]"
                      : "bg-white/[0.06] text-white/70 hover:bg-white/[0.12]"
                  }`}
                  aria-pressed={active}
                >
                  G{r.g}
                </button>
              );
            })}
          </div>

          <p className="mt-2 text-[9.5px] text-white/35 leading-snug">
            Reference imagery. Individual anatomy varies — assessed in-clinic.
          </p>
        </div>
      </div>
      {/* END BACK */}
      </div>
    </div>
  );
};

export default BotoxDoseWidget;
