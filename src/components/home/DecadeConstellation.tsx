import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  Smile,
  Eye,
  Zap,
  Sun,
  Wand2,
  Droplets,
  Leaf,
  Sparkles,
  Layers,
  Heart,
  Snowflake,
  Flame,
} from "lucide-react";

type LinkRef = { label: string; href: string };

type Satellite = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  blurb: string;
  related?: LinkRef[];
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
      { label: "Lip Fillers", href: "/treatments/lip-fillers/", icon: Heart, blurb: "Soft 0.5–1ml refinement to define shape without volume drift.", related: [{ label: "0.5ml vs 1ml guide", href: "/lip-filler-0.5ml-vs-1ml/" }] },
      { label: "HydraFacial", href: "/treatments/hydrafacial/", icon: Droplets, blurb: "Three-step cleanse, exfoliation and hydration — your monthly reset." },
      { label: "Acne Peels", href: "/treatments/chemical-peels/", icon: Flame, blurb: "Salicylic and lactic acid protocols for breakout-prone 20s skin." },
      { label: "Profhilo", href: "/treatments/profhilo/", icon: Sparkles, blurb: "Pure HA bio-remodelling. Two sessions, six weeks apart." },
      { label: "Microneedling", href: "/treatments/microneedling/", icon: Layers, blurb: "Collagen induction for tone, texture and early scarring." },
      { label: "Skincare", href: "/treatments/prescription-skincare/", icon: Leaf, blurb: "A daily regime built on three actives: vitamin C in the morning, SPF on top, retinol at night.", related: [{ label: "Vitamin C serum guide", href: "/blog/vitamin-c-serum-benefits/" }, { label: "Retinol night routine", href: "/treatments/prescription-skincare/" }] },
      { label: "Baby Botox", href: "/treatments/botox/", icon: Snowflake, blurb: "Micro-dosing to soften early dynamic lines — prevention, not freeze." },
      { label: "Tear Trough", href: "/treatments/tear-trough-filler/", icon: Eye, blurb: "For genetic hollows. One careful pass, often once every 18 months." },
    ],
  },
  "30s": {
    headline: "Prejuvenation — hold the line, quietly.",
    subline:
      "First fine lines. First volume shifts. The decade where small, well-timed work delays the bigger decisions.",
    satellites: [
      { label: "Botox", href: "/treatments/botox/", icon: Snowflake, blurb: "Forehead, glabella, crow's feet — dosed to relax, not erase." },
      { label: "Tear Trough", href: "/treatments/tear-trough-filler/", icon: Eye, blurb: "Brightens the lower lid junction with a single fine cannula pass." },
      { label: "Lip Fillers", href: "/treatments/lip-fillers/", icon: Heart, blurb: "Hydration-led, never overfilled. The 'did she?' kind." },
      { label: "Profhilo", href: "/treatments/profhilo/", icon: Sparkles, blurb: "Bio-remodelling HA — quality of skin, not quantity of volume." },
      { label: "Polynucleotides", href: "/treatments/polynucleotides/", icon: Leaf, blurb: "Salmon-DNA regeneration for thin under-eye and neck skin." },
      { label: "Cheek Filler", href: "/treatments/cheek-filler/", icon: Smile, blurb: "1ml zygomatic support — quiet structure, not Instagram cheekbones." },
      { label: "Resurfacing", href: "/treatments/chemical-peels/", icon: Sun, blurb: "Medium-depth peels for pigment, texture and early fine lines." },
      { label: "Skincare", href: "/treatments/prescription-skincare/", icon: Leaf, blurb: "Prescription-strength retinoid + antioxidant + SPF — the trio that does the heavy lifting.", related: [{ label: "Vitamin C", href: "/blog/vitamin-c-serum-benefits/" }, { label: "Retinol", href: "/treatments/prescription-skincare/" }] },
    ],
  },
  "40s": {
    headline: "Restore structure.",
    subline:
      "Volume migrates, skin loosens, the jawline softens. This decade is about rebuilding architecture — not chasing wrinkles.",
    satellites: [
      { label: "Cheek Filler", href: "/treatments/cheek-filler/", icon: Smile, blurb: "2–4ml zygomatic rebuild to lift the midface and soften nasolabial." },
      { label: "Tear Trough", href: "/treatments/tear-trough-filler/", icon: Eye, blurb: "Often combined with cheek support for a true under-eye reset." },
      { label: "RF Microneedling", href: "/treatments/morpheus8/", icon: Zap, blurb: "Morpheus8 for skin tightening at 2–3mm on cheeks and lower face." },
      { label: "Profhilo", href: "/treatments/profhilo/", icon: Droplets, blurb: "Maintains hydration and bounce as natural HA production drops." },
      { label: "Jawline", href: "/treatments/jawline-filler/", icon: Wand2, blurb: "Filler at gonial angle to redefine the mandibular border." },
      { label: "Resurfacing", href: "/treatments/chemical-peels/", icon: Sun, blurb: "TCA or layered peels for sun damage and uneven pigment." },
      { label: "Polynucleotides", href: "/treatments/polynucleotides/", icon: Leaf, blurb: "Regenerates skin quality where filler alone can't help." },
      { label: "Skincare", href: "/treatments/prescription-skincare/", icon: Leaf, blurb: "Retinoid + peptide night cream + brightening vitamin C every morning.", related: [{ label: "Vitamin C", href: "/blog/vitamin-c-serum-benefits/" }, { label: "Retinol", href: "/treatments/prescription-skincare/" }] },
    ],
  },
  "50s": {
    headline: "Lift, tighten, regenerate.",
    subline:
      "The decade for combination care — fibre-lift, threads, and regenerative skin work that compounds month over month.",
    satellites: [
      { label: "HA Makeover", href: "/treatments/ha-makeover/", icon: Sparkles, blurb: "8-point and 11-point full-face balancing in a single appointment." },
      { label: "Endolaser", href: "/treatments/endolaser/", icon: Zap, blurb: "Sub-dermal fibre-lift — collagen contraction without surgery." },
      { label: "PDO Threads", href: "/treatments/pdo-threads/", icon: Wand2, blurb: "Cog threads for jawline lift, mono threads for skin quality." },
      { label: "Polynucleotides", href: "/treatments/polynucleotides/", icon: Leaf, blurb: "DNA-fragment regeneration — particularly powerful for crepey skin." },
      { label: "Tear Trough", href: "/treatments/tear-trough-filler/", icon: Eye, blurb: "Conservative correction, often paired with cheek and brow support." },
      { label: "Jawline", href: "/treatments/jawline-filler/", icon: Smile, blurb: "Filler + threads + Endolaser for a true mandibular reset." },
      { label: "Resurfacing", href: "/treatments/chemical-peels/", icon: Sun, blurb: "Layered peels for crepiness, pigment and surface rejuvenation." },
      { label: "Skincare", href: "/treatments/prescription-skincare/", icon: Leaf, blurb: "Retinoid (low-irritation), growth-factor serum, vitamin C, SPF.", related: [{ label: "Vitamin C", href: "/blog/vitamin-c-serum-benefits/" }, { label: "Retinol", href: "/treatments/prescription-skincare/" }] },
    ],
  },
};

const DecadeConstellation = () => {
  const [active, setActive] = useState<DecadeKey>("40s");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const data = decades[active];
  const openSatellite = openIdx !== null ? data.satellites[openIdx] : null;

  return (
    <section className="relative py-20 md:py-28 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] mb-4">
          — By Your Decade
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] tracking-tight">
          What your skin asks for{" "}
          <span className="italic text-white/40">in your {active}.</span>
        </h2>
        <p className="mt-5 max-w-xl text-white/55 font-light leading-relaxed">
          Tap a decade, then tap any treatment to read more before opening its full page.
        </p>

        {/* Decade tabs */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {(Object.keys(decades) as DecadeKey[]).map((d) => (
            <button
              key={d}
              onClick={() => { setActive(d); setOpenIdx(null); }}
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
        <div className="relative mt-14 aspect-square w-full max-w-[640px] mx-auto">
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
            preserveAspectRatio="xMidYMid meet"
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
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26%] aspect-square rounded-full bg-[#C9A050] flex flex-col items-center justify-center shadow-[0_0_80px_-10px_rgba(201,160,80,0.7)]"
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
                const r = 38;
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
                    <button
                      onClick={() => setOpenIdx(i)}
                      className="group flex flex-col items-center gap-2 focus:outline-none"
                      aria-label={`Open ${s.label} details`}
                    >
                      <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black border border-[#C9A050]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#C9A050] group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(201,160,80,0.6)]">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#C9A050]" />
                      </span>
                      <span className="text-[11px] md:text-xs text-white/80 text-center max-w-[80px] leading-tight">
                        {s.label}
                      </span>
                    </button>
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
            className="mt-14 max-w-2xl mx-auto"
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

      {/* Treatment quick-read modal */}
      <AnimatePresence>
        {openSatellite && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-[#C9A050]/30 rounded-2xl p-8 md:p-10 shadow-[0_0_80px_-10px_rgba(201,160,80,0.4)]"
            >
              <button
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C9A050]/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-12 rounded-full bg-black border border-[#C9A050]/40 flex items-center justify-center">
                  <openSatellite.icon className="w-5 h-5 text-[#C9A050]" />
                </span>
                <div className="text-left">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050]">In Your {active}</p>
                  <h3 className="font-serif text-2xl text-white font-light">{openSatellite.label}</h3>
                </div>
              </div>

              <p className="text-white/75 leading-relaxed font-light text-base text-left">
                {openSatellite.blurb}
              </p>

              {openSatellite.related && openSatellite.related.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10 text-left">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">Read more</p>
                  <ul className="space-y-2">
                    {openSatellite.related.map((r) => (
                      <li key={r.href}>
                        <Link
                          to={r.href}
                          onClick={() => setOpenIdx(null)}
                          className="text-[#C9A050] hover:text-[#e0c078] underline underline-offset-4 decoration-[#C9A050]/40 hover:decoration-[#C9A050] transition-colors"
                        >
                          {r.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                to={openSatellite.href}
                onClick={() => setOpenIdx(null)}
                className="mt-8 inline-flex w-full items-center justify-center bg-[#C9A050] hover:bg-[#B8913F] text-black px-6 py-3.5 rounded-full font-medium transition-colors"
              >
                Open {openSatellite.label} page
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DecadeConstellation;
