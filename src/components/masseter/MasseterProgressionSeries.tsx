import { motion } from "framer-motion";
import pic1 from "@/assets/before-after/masseter-series/1-before-hsi-xl-right.jpg";
import pic2 from "@/assets/before-after/masseter-series/2-after-first-treatment.jpg";
import pic3 from "@/assets/before-after/masseter-series/3-after-second-treatment.jpg";
import pic4 from "@/assets/before-after/masseter-series/4-final-maintained-result.jpg";

export type ProgressionStage = {
  src: string;
  badge: string;
  title: string;
  caption: string;
  alt: string;
  note?: string;
};

export const masseterProgressionStages: ProgressionStage[] = [
  {
    src: pic2,
    badge: "Stage 1 · Baseline",
    title: "Before treatment — asymmetric masseter hypertrophy",
    caption:
      "Right masseter graded XL, left graded Large on the HSI Masseter Scale (Hass Scale of Intensity). Classic male hypertrophy from chronic clenching and grinding — square, heavy lower face with right-sided dominance.",
    alt: "Before masseter Botox — male patient with asymmetric masseter hypertrophy graded XL right and Large left on the HSI Masseter Scale, Cosmedocs Harley Street London",
    note: "HSI Masseter Scale · R: XL · L: L",
  },
  {
    src: pic3,
    badge: "Stage 2 · 3 months post 1st session",
    title: "3 months after first treatment",
    caption:
      "Initial atrophy visible — bulk softened on both sides, asymmetry beginning to even out. Patient already reports reduced morning jaw tension and less audible grinding at night.",
    alt: "Masseter Botox progression — 3 months after first treatment, male patient with softer jawline and reduced muscle bulk, Cosmedocs Harley Street London",
  },
  {
    src: pic1,
    badge: "Stage 3 · 3 months post 2nd session",
    title: "3 months after second treatment",
    caption:
      "Cumulative atrophy compounds the first cycle. Lower face is noticeably leaner, jaw angle softer, right-left symmetry visibly improved. Bruxism symptoms continue to settle.",
    alt: "Masseter Botox progression — 3 months after second treatment showing cumulative jaw slimming and improved symmetry, Cosmedocs Harley Street London",
  },
  {
    src: pic4,
    badge: "Stage 4 · Final · Maintained result",
    title: "3 months after third treatment — final maintained result",
    caption:
      "Stable refined jawline achieved. Maintained with two top-ups per year for the first two years, then once a year thereafter. A subtle, masculine refinement — never hollow, never feminised.",
    alt: "Final maintained result of masseter Botox — refined male jawline maintained twice yearly then annually, Cosmedocs Harley Street London",
  },
];

interface Props {
  variant?: "dark" | "brotox";
  headline?: string;
  intro?: string;
  showBroTeaser?: boolean;
}

const MasseterProgressionSeries = ({
  variant = "dark",
  headline = "The Masseter Botox Progression — An Educative Case Series",
  intro = "Masseter Botox is not a one-shot treatment. Atrophy is cumulative. Below is the four-stage progression of a real male patient at Cosmedocs Harley Street — from baseline asymmetric hypertrophy graded on the HSI Masseter Scale (Hass Scale of Intensity), through three carefully spaced sessions, to a maintained, masculine, refined jawline.",
  showBroTeaser = false,
}: Props) => {
  return (
    <section
      aria-label="Masseter Botox progression case series"
      className="relative py-16 px-4 sm:px-6 border-t border-white/5 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-[#C9A050]/70 tracking-[0.25em] uppercase mb-3">
            Educative Case Series
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight text-white/90 leading-tight mb-4 max-w-3xl">
            {headline.includes("—") ? (
              <>
                {headline.split("—")[0]}—
                <span className="text-[#C9A050] font-light">
                  {headline.split("—")[1]}
                </span>
              </>
            ) : (
              headline
            )}
          </h2>
          <div className="w-12 h-px bg-[#C9A050]/50 mb-6" />
          <p className="text-sm text-white/55 leading-relaxed font-light max-w-3xl mb-6">
            {intro}
          </p>

          {showBroTeaser && (
            <div className="border border-[#C9A050]/20 rounded-2xl p-5 bg-[#C9A050]/[0.03] mb-8 max-w-3xl">
              <p className="text-[11px] text-[#C9A050] tracking-widest uppercase font-medium mb-2">
                Why BroMasseter is technically difficult
              </p>
              <p className="text-sm text-white/65 font-light leading-relaxed">
                Male masseters demand a markedly higher unit dose — strength of dose
                is usually very high. Muscle dynamics differ (denser fibres, stronger
                contraction), and toxin diffusion behaves differently through bulky
                male tissue. Under-dose a male masseter and nothing visibly happens;
                place it wrong and you risk paradoxical bulging or smile asymmetry.
                This is doctor-led territory — not an injector decision.
              </p>
            </div>
          )}

          <p className="text-[11px] text-white/35 tracking-wider uppercase mb-4 hidden md:block">
            Scroll right to follow the progression →
          </p>
        </motion.div>

        {/* Horizontal scrolling series */}
        <div
          className="-mx-4 sm:-mx-6 px-4 sm:px-6 overflow-x-auto overflow-y-hidden pb-4 snap-x scrollbar-hide touch-pan-x overscroll-x-contain"
          style={{ scrollbarWidth: "thin", WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
        >
          <div className="flex gap-5 min-w-min">
            {masseterProgressionStages.map((s, i) => (
              <motion.figure
                key={s.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="snap-start shrink-0 w-[78vw] xs:w-[72vw] sm:w-[60vw] md:w-[44vw] lg:w-[420px] xl:w-[460px] max-w-[460px] rounded-2xl overflow-hidden border border-[#C9A050]/15 bg-gradient-to-b from-[#0a0a0a] to-black flex flex-col"
              >
                <div className={`relative w-full ${i === 0 ? "bg-black" : ""}`}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className={
                      i === 0
                        ? "w-full aspect-[4/5] object-contain bg-black"
                        : "w-full aspect-[4/5] object-cover object-top"
                    }
                  />
                  <span className="absolute top-3 left-3 bg-[#C9A050]/95 text-black text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-medium">
                    {s.badge}
                  </span>
                  {s.note && (
                    <span className="absolute top-3 right-3 bg-black/70 text-[#C9A050] border border-[#C9A050]/40 text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-medium">
                      {s.note}
                    </span>
                  )}
                </div>
                <figcaption className="p-5 space-y-2 flex-1 flex flex-col">
                  <p className="text-[11px] text-[#C9A050]/90 tracking-widest uppercase font-medium">
                    {s.title}
                  </p>
                  <p className="text-sm text-white/65 font-light leading-relaxed">
                    {s.caption}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#C9A050]/15 max-w-3xl">
          <a
            href="/before-after/botox/masseter/"
            className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#e3c074] text-sm font-medium tracking-wide group"
          >
            View full masseter Botox before &amp; after gallery
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="text-xs text-white/45 font-light mt-1.5">
            Includes mild to severe jaw muscle hypertrophy cases.
          </p>
        </div>

        <p className="text-[11px] text-white/35 leading-relaxed font-light max-w-3xl mt-6">
          <strong className="text-white/55">Maintenance protocol:</strong> twice
          yearly for the first two years to lock in atrophy, then once yearly
          thereafter. <strong className="text-white/55">Patient consent:</strong>{" "}
          published with written, informed consent. Real Cosmedocs patient — never
          stock, never AI. Individual results vary.
        </p>
      </div>
    </section>
  );
};

export default MasseterProgressionSeries;
