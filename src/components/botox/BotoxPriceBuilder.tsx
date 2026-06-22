import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, Sparkles } from "lucide-react";

/**
 * Interactive Botox price builder.
 * - Main areas (Frown, Forehead, Crow's feet): 1 area £175, 2 areas £275, 3 areas £350
 * - Small add-on areas (Lip flip, Chin, Bunny lines, Gummy smile, Nasal flare): £50 each
 * - Larger add-on areas (Nefertiti lift, Neck / Turkey neck, Jawline slim): £150 each
 */

type Area = { id: string; label: string };

const MAIN_AREAS: Area[] = [
  { id: "frown", label: "Frown (between brows)" },
  { id: "forehead", label: "Forehead lines" },
  { id: "crows", label: "Crow's feet" },
];

const SMALL_ADDONS: Area[] = [
  { id: "lip-flip", label: "Lip flip / droopy corners" },
  { id: "chin", label: "Chin (pebble chin)" },
  { id: "bunny", label: "Bunny lines" },
  { id: "gummy", label: "Gummy smile" },
  { id: "nasal", label: "Nasal flare" },
];

const LARGE_ADDONS: Area[] = [
  { id: "nefertiti", label: "Nefertiti neck lift" },
  { id: "turkey", label: "Turkey neck bands" },
  { id: "masseter", label: "Jawline slim (masseter)" },
];

const MAIN_TIERS: Record<number, number> = { 0: 0, 1: 175, 2: 275, 3: 350 };
const SMALL_PRICE = 50;
const LARGE_PRICE = 150;

const ACUITY_URL =
  "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

const BotoxPriceBuilder = () => {
  const [main, setMain] = useState<string[]>([]);
  const [small, setSmall] = useState<string[]>([]);
  const [large, setLarge] = useState<string[]>([]);

  const toggle = (
    id: string,
    list: string[],
    setter: (v: string[]) => void
  ) => {
    setter(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  const { mainPrice, smallPrice, largePrice, total } = useMemo(() => {
    const m = MAIN_TIERS[Math.min(main.length, 3)] ?? 0;
    const s = small.length * SMALL_PRICE;
    const l = large.length * LARGE_PRICE;
    return { mainPrice: m, smallPrice: s, largePrice: l, total: m + s + l };
  }, [main, small, large]);

  return (
    <section
      aria-labelledby="botox-price-builder"
      className="py-16 px-4 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-3">
            Build your treatment
          </p>
          <h2
            id="botox-price-builder"
            className="text-3xl md:text-4xl font-light text-white"
          >
            Botox Price <span className="text-[#C9A050]">Calculator</span>
          </h2>
          <p className="text-white/50 mt-3 text-sm max-w-xl mx-auto">
            Choose the areas you'd like treated. Final dosing is confirmed by
            your doctor at consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Selector */}
          <div className="space-y-8">
            <Group
              title="Main areas"
              subtitle="1 area £175 · 2 areas £275 · 3 areas £350"
              areas={MAIN_AREAS}
              selected={main}
              onToggle={(id) => toggle(id, main, setMain)}
            />
            <Group
              title="Small add-on areas"
              subtitle="£50 each (when added to a main area treatment)"
              areas={SMALL_ADDONS}
              selected={small}
              onToggle={(id) => toggle(id, small, setSmall)}
            />
            <Group
              title="Neck & lower face"
              subtitle="£150 each"
              areas={LARGE_ADDONS}
              selected={large}
              onToggle={(id) => toggle(id, large, setLarge)}
            />
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="bg-white/[0.04] border border-[#C9A050]/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#C9A050]" />
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050]">
                  Your selection
                </p>
              </div>

              <Row
                label={`Main areas (${Math.min(main.length, 3)}${
                  main.length > 3 ? " counted" : ""
                })`}
                value={mainPrice}
              />
              <Row
                label={`Small add-ons (${small.length})`}
                value={smallPrice}
              />
              <Row
                label={`Neck / lower face (${large.length})`}
                value={largePrice}
              />

              <div className="mt-4 pt-4 border-t border-white/10 flex items-baseline justify-between">
                <span className="text-white/70 text-sm">Estimated total</span>
                <span className="text-[#C9A050] text-3xl font-light">
                  £{total}
                </span>
              </div>

              {main.length > 3 && (
                <p className="text-[11px] text-white/40 mt-2">
                  Up to 3 main areas are bundled at £350. Extra zones are
                  treated as add-ons in clinic.
                </p>
              )}
              {(small.length > 0 || large.length > 0) && main.length === 0 && (
                <p className="text-[11px] text-amber-300/70 mt-2">
                  Small add-on pricing applies alongside a main-area treatment.
                </p>
              )}

              <a
                href={ACUITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-colors"
              >
                Book a Consultation
              </a>
              <p className="text-[10px] text-white/30 text-center mt-3">
                Invisible art. Quiet, never loud — dosing tailored at review.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const Group = ({
  title,
  subtitle,
  areas,
  selected,
  onToggle,
}: {
  title: string;
  subtitle: string;
  areas: Area[];
  selected: string[];
  onToggle: (id: string) => void;
}) => (
  <div>
    <div className="mb-3">
      <h3 className="text-white text-sm font-medium">{title}</h3>
      <p className="text-white/40 text-xs">{subtitle}</p>
    </div>
    <div className="grid sm:grid-cols-2 gap-2">
      {areas.map((a) => {
        const active = selected.includes(a.id);
        return (
          <button
            key={a.id}
            type="button"
            onClick={() => onToggle(a.id)}
            aria-pressed={active}
            className={`flex items-center justify-between gap-3 text-left px-4 py-3 rounded-xl border transition-all text-sm ${
              active
                ? "border-[#C9A050] bg-[#C9A050]/10 text-white"
                : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/25"
            }`}
          >
            <span>{a.label}</span>
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                active
                  ? "border-[#C9A050] bg-[#C9A050] text-black"
                  : "border-white/30 text-white/30"
              }`}
            >
              {active ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
            </span>
          </button>
        );
      })}
    </div>
  </div>
);

const Row = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center justify-between text-sm py-1.5">
    <span className="text-white/50">{label}</span>
    <span className="text-white/80">£{value}</span>
  </div>
);

export default BotoxPriceBuilder;
