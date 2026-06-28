import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smile,
  Eye,
  Zap,
  Sun,
  Wand2,
  Droplets,
  Leaf,
  Sparkles,
  Flame,
  Layers,
  Heart,
  Snowflake,
} from "lucide-react";

type Satellite = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type DecadeKey = "20s" | "30s" | "40s" | "50s";

const decades: Record<
  DecadeKey,
  { headline: string; subline: string; satellites: Satellite[] }
> = {
  "20s": {
    headline: "Prevention, glow, and one quiet refinement.",
    subline:
      "Skin is at its peak. The work is protecting it — and softening one feature you've always thought about.",
    satellites: [
      { label: "Lip Fillers", href: "/treatments/lip-fillers/", icon: Heart },
      { label: "HydraFacial", href: "/treatments/hydrafacial/", icon: Droplets },
      { label: "Acne Peels", href: "/treatments/chemical-peels/", icon: Flame },
      { label: "Profhilo", href: "/treatments/profhilo/", icon: Sparkles },
      { label: "Microneedling", href: "/treatments/microneedling/", icon: Layers },
      { label: "Skincare", href: "/treatments/prescription-skincare/", icon: Leaf },
      { label: "Baby Botox", href: "/treatments/botox/", icon: Snowflake },
    ],
  },
  "30s": {
    headline: "Prejuvenation — hold the line, quietly.",
    subline:
      "First fine lines. First volume shifts. The decade where small, well-timed work delays the bigger decisions.",
    satellites: [
      { label: "Botox", href: "/treatments/botox/", icon: Snowflake },
      { label: "Tear Trough", href: "/treatments/tear-trough-filler/", icon: Eye },
      { label: "Lip Fillers", href: "/treatments/lip-fillers/", icon: Heart },
      { label: "Profhilo", href: "/treatments/profhilo/", icon: Sparkles },
      { label: "Polynucleotides", href: "/treatments/polynucleotides/", icon: Leaf },
      { label: "Cheek Filler", href: "/treatments/cheek-filler/", icon: Smile },
      { label: "Resurfacing", href: "/treatments/chemical-peels/", icon: Sun },
    ],
  },
  "40s": {
    headline: "Restore structure.",
    subline:
      "Volume migrates, skin loosens, the jawline softens. This decade is about rebuilding architecture — not chasing wrinkles.",
    satellites: [
      { label: "Cheek Filler", href: "/treatments/cheek-filler/", icon: Smile },
      { label: "Tear Trough", href: "/treatments/tear-trough-filler/", icon: Eye },
      { label: "RF Microneedling", href: "/treatments/morpheus8/", icon: Zap },
      { label: "Profhilo", href: "/treatments/profhilo/", icon: Droplets },
      { label: "Jawline", href: "/treatments/jawline-filler/", icon: Wand2 },
      { label: "Resurfacing", href: "/treatments/chemical-peels/", icon: Sun },
      { label: "Polynucleotides", href: "/treatments/polynucleotides/", icon: Leaf },
    ],
  },
  "50s": {
    headline: "Lift, tighten, regenerate.",
    subline:
      "The decade for combination care — fibre-lift, threads, and regenerative skin work that compounds month over month.",
    satellites: [
      { label: "HA Makeover", href: "/treatments/ha-makeover/", icon: Sparkles },
      { label: "Endolaser", href: "/treatments/endolaser/", icon: Zap },
      { label: "PDO Threads", href: "/treatments/pdo-threads/", icon: Wand2 },
      { label: "Polynucleotides", href: "/treatments/polynucleotides/", icon: Leaf },
      { label: "Tear Trough", href: "/treatments/tear-trough-filler/", icon: Eye },
      { label: "Jawline", href: "/treatments/jawline-filler/", icon: Smile },
      { label: "Resurfacing", href: "/treatments/chemical-peels/", icon: Sun },
    ],
  },
};

const DecadeConstellation = () => {
  const [active, setActive] = useState<DecadeKey>("40s");
  const data = decades[active];

  // Radial layout: 7 satellites around a centre
  // Use percentages of container for responsiveness
  return (
    <section className="relative py-20 md:py-28 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] mb-4">
          — By Your Decade
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] tracking-tight">
          What your skin asks for{" "}
          <span className="italic text-white/40">in your {active}.</span>
        </h2>
        <p className="mt-5 max-w-xl text-white/55 font-light leading-relaxed">
          Tap a decade. The treatments most relevant to it fan out — slide
          across, tap any to meet the doctor.
        </p>

        {/* Decade tabs */}
        <div className="mt-10 flex flex-wrap gap-3">
          {(Object.keys(decades) as DecadeKey[]).map((d) => (
            <button
              key={d}
              onClick={() => setActive(d)}
              className={`px-7 py-3 rounded-full text-base tracking-wide transition-all duration-300 border ${
                active === d
                  ? "bg-[#C9A050] text-black border-[#C9A050] shadow-[0_0_40px_-10px_rgba(201,160,80,0.6)]"
                  : "bg-transparent text-white/70 border-white/15 hover:border-[#C9A050]/50 hover:text-white"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Constellation */}
        <div className="relative mt-14 mx-auto aspect-square max-w-[640px] w-full">
          {/* Ambient gold glow */}
          <div
            className="absolute inset-[15%] rounded-full opacity-60 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(201,160,80,0.35) 0%, transparent 65%)",
              filter: "blur(40px)",
            }}
          />

          {/* SVG connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {data.satellites.map((_, i) => {
              const angle = (i / data.satellites.length) * Math.PI * 2 - Math.PI / 2;
              const r = 38;
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="#C9A050"
                  strokeOpacity="0.25"
                  strokeWidth="0.15"
                  strokeDasharray="0.6 0.6"
                />
              );
            })}
          </svg>

          {/* Centre node */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-[#C9A050] flex flex-col items-center justify-center shadow-[0_0_80px_-10px_rgba(201,160,80,0.7)]"
            >
              <span className="font-serif text-3xl md:text-5xl text-black leading-none">
                {active}
              </span>
              <span className="mt-1 text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-black/70">
                Your Decade
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Satellites */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {data.satellites.map((s, i) => {
                const angle =
                  (i / data.satellites.length) * Math.PI * 2 - Math.PI / 2;
                const r = 38; // % from centre
                const x = 50 + Math.cos(angle) * r;
                const y = 50 + Math.sin(angle) * r;
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <Link
                      to={s.href}
                      className="group flex flex-col items-center gap-2"
                    >
                      <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black border border-[#C9A050]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#C9A050] group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(201,160,80,0.6)]">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#C9A050]" />
                      </span>
                      <span className="text-[11px] md:text-xs text-white/80 text-center max-w-[80px] leading-tight">
                        {s.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Headline strip under constellation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-14 text-center max-w-2xl mx-auto"
          >
            <p className="font-serif text-2xl md:text-3xl text-white font-light leading-snug">
              {data.headline}
            </p>
            <p className="mt-4 text-white/55 font-light leading-relaxed">
              {data.subline}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DecadeConstellation;
