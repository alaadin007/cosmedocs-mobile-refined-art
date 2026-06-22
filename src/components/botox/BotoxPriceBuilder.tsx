import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Calculator, X } from "lucide-react";

/**
 * Botox price builder — opens as a clean, high-contrast popup form.
 * - Main areas (Frown, Forehead, Crow's feet): 1 area £175, 2 areas £275, 3 areas £350
 * - Small add-ons (Lip flip, Chin, Bunny lines, Gummy smile, Nasal flare): £50 each
 * - Neck / lower face (Nefertiti, Turkey neck, Masseter slim): £150 each
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
  const [open, setOpen] = useState(false);
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

  const { mainPrice, total } = useMemo(() => {
    const m = MAIN_TIERS[Math.min(main.length, 3)] ?? 0;
    const s = small.length * SMALL_PRICE;
    const l = large.length * LARGE_PRICE;
    return { mainPrice: m, total: m + s + l };
  }, [main, small, large]);

  return (
    <section
      aria-labelledby="botox-price-builder"
      className="py-16 px-4 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-3">
          Build your treatment
        </p>
        <h2
          id="botox-price-builder"
          className="text-3xl md:text-4xl font-light text-white"
        >
          Botox Price <span className="text-[#C9A050]">Calculator</span>
        </h2>
        <p className="text-white/60 mt-4 text-sm max-w-xl mx-auto">
          Tick the areas you'd like treated. Your indicative price updates live.
          Final dosing is confirmed by your doctor at consultation.
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-7 py-3 font-medium text-sm transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Open price calculator
            </button>
          </DialogTrigger>

          <DialogContent
            className="max-w-lg w-[calc(100%-2rem)] p-0 gap-0 bg-white border-0 rounded-2xl overflow-hidden shadow-2xl [&>button.absolute]:hidden"
          >
            {/* Header */}
            <VisuallyHidden>
              <DialogTitle>Botox price calculator</DialogTitle>
              <DialogDescription>Select treatment areas to see an indicative price.</DialogDescription>
            </VisuallyHidden>

            <div className="px-6 pt-6 pb-4 border-b border-neutral-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A050] font-medium">
                    Botox · Cosmedocs
                  </p>
                  <h3 className="text-xl text-neutral-900 font-medium mt-1">
                    Build your treatment
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-neutral-400 hover:text-neutral-900 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="max-h-[60vh] overflow-y-auto px-6 py-5 space-y-6">
              <Group
                title="Main areas"
                hint="1 area £175 · 2 areas £275 · 3 areas £350"
                areas={MAIN_AREAS}
                selected={main}
                onToggle={(id) => toggle(id, main, setMain)}
              />
              <Group
                title="Small add-ons"
                hint="£50 each (with a main area)"
                areas={SMALL_ADDONS}
                selected={small}
                onToggle={(id) => toggle(id, small, setSmall)}
              />
              <Group
                title="Neck & lower face"
                hint="£150 each"
                areas={LARGE_ADDONS}
                selected={large}
                onToggle={(id) => toggle(id, large, setLarge)}
              />
            </div>

            {/* Footer / total */}
            <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-neutral-600 text-sm">Estimated total</span>
                <span className="text-neutral-900 text-2xl font-light">
                  £{total}
                </span>
              </div>
              {(small.length > 0 || large.length > 0) && main.length === 0 && (
                <p className="text-[11px] text-amber-700 mb-3">
                  Add-on pricing applies alongside a main-area treatment.
                </p>
              )}
              <a
                href={ACUITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-neutral-900 hover:bg-black text-white rounded-full py-3 font-medium text-sm transition-colors"
              >
                Book a Consultation
              </a>
              <p className="text-[10px] text-neutral-400 text-center mt-2">
                Invisible art. Quiet, never loud — dosing tailored at review.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const Group = ({
  title,
  hint,
  areas,
  selected,
  onToggle,
}: {
  title: string;
  hint: string;
  areas: Area[];
  selected: string[];
  onToggle: (id: string) => void;
}) => (
  <fieldset>
    <legend className="block mb-2">
      <span className="text-neutral-900 text-sm font-medium">{title}</span>
      <span className="block text-neutral-500 text-xs">{hint}</span>
    </legend>
    <div className="space-y-1.5">
      {areas.map((a) => {
        const active = selected.includes(a.id);
        const inputId = `botox-${a.id}`;
        return (
          <label
            key={a.id}
            htmlFor={inputId}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border cursor-pointer transition-colors text-sm ${
              active
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400"
            }`}
          >
            <input
              id={inputId}
              type="checkbox"
              checked={active}
              onChange={() => onToggle(a.id)}
              className="sr-only"
            />
            <span
              aria-hidden
              className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                active
                  ? "border-white bg-white"
                  : "border-neutral-400 bg-white"
              }`}
            >
              {active && (
                <svg
                  viewBox="0 0 12 12"
                  className="w-3 h-3 text-neutral-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 6.5L5 9l4.5-5.5" />
                </svg>
              )}
            </span>
            <span className="flex-1">{a.label}</span>
          </label>
        );
      })}
    </div>
  </fieldset>
);

export default BotoxPriceBuilder;
