import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Calculator, X } from "lucide-react";

/**
 * Botox price builder — dark luxe bento popup.
 * - Main areas (Frown, Forehead, Crow's feet): 1 area £175, 2 areas £275, 3 areas £350
 * - Small add-ons: £50 each
 * - Neck / lower face: £150 each
 */

type Area = { id: string; label: string; sub?: string };

const MAIN_AREAS: Area[] = [
  { id: "frown", label: "Frown", sub: "Between brows" },
  { id: "forehead", label: "Forehead", sub: "Horizontal lines" },
  { id: "crows", label: "Crow's Feet", sub: "Periorbital" },
];

const SMALL_ADDONS: Area[] = [
  { id: "lip-flip", label: "Lip Flip" },
  { id: "chin", label: "Chin Dimples" },
  { id: "bunny", label: "Bunny Lines" },
  { id: "gummy", label: "Gummy Smile" },
  { id: "nasal", label: "Nasal Flare" },
];

const LARGE_ADDONS: Area[] = [
  { id: "nefertiti", label: "Nefertiti Neck Lift" },
  { id: "turkey", label: "Turkey Neck Bands" },
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

  const toggle = (id: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  const total = useMemo(() => {
    const m = MAIN_TIERS[Math.min(main.length, 3)] ?? 0;
    return m + small.length * SMALL_PRICE + large.length * LARGE_PRICE;
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
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          Botox Price <span className="text-[#C9A050]">Calculator</span>
        </h2>
        <p className="text-white/60 mt-4 text-sm max-w-xl mx-auto">
          Tap the areas you'd like treated. Your indicative price updates live.
          Final dosing is confirmed by your doctor at consultation.
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#D9B060] text-black rounded-full px-7 py-3 font-medium text-sm transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Open price calculator
            </button>
          </DialogTrigger>

          <DialogContent
            className="max-w-2xl w-[calc(100%-1.5rem)] p-0 gap-0 bg-[#1A1A1A] border border-[#C9A050]/20 rounded-3xl overflow-hidden shadow-2xl shadow-black [&>button.absolute]:hidden"
          >
            <VisuallyHidden>
              <DialogTitle>Botox price calculator</DialogTitle>
              <DialogDescription>
                Select treatment areas to see an indicative price.
              </DialogDescription>
            </VisuallyHidden>

            {/* Header */}
            <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-[#C9A050]/10 flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-[#C9A050] text-[10px] font-medium tracking-[0.22em] uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Invisible Art. Quiet, never loud.
                </p>
                <h3
                  className="text-[#F5F1E8] text-2xl sm:text-3xl font-light tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  Price Calculator
                </h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#F5F1E8]/40 hover:text-[#C9A050] transition-colors mt-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[65vh] overflow-y-auto px-6 sm:px-8 py-6 space-y-7">
              {/* Main areas */}
              <div>
                <SectionLabel>Main Treatment Areas</SectionLabel>
                <div className="grid grid-cols-3 gap-3">
                  {MAIN_AREAS.map((a) => (
                    <MainTile
                      key={a.id}
                      area={a}
                      active={main.includes(a.id)}
                      onClick={() => toggle(a.id, main, setMain)}
                    />
                  ))}
                </div>
                <p className="mt-3 text-[#F5F1E8]/40 text-[11px] italic text-left">
                  Tiered: 1 area £175 · 2 areas £275 · 3 areas £350
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                {/* Add-ons */}
                <div>
                  <SectionLabel>Add-ons (£50)</SectionLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {SMALL_ADDONS.map((a) => (
                      <Chip
                        key={a.id}
                        label={a.label}
                        active={small.includes(a.id)}
                        onClick={() => toggle(a.id, small, setSmall)}
                      />
                    ))}
                  </div>
                </div>

                {/* Specialised */}
                <div>
                  <SectionLabel>Specialised (£150)</SectionLabel>
                  <div className="flex flex-col gap-2">
                    {LARGE_ADDONS.map((a) => (
                      <Chip
                        key={a.id}
                        label={a.label}
                        active={large.includes(a.id)}
                        onClick={() => toggle(a.id, large, setLarge)}
                        block
                      />
                    ))}
                  </div>
                </div>
              </div>

              {(small.length > 0 || large.length > 0) && main.length === 0 && (
                <p className="text-[11px] text-[#C9A050]/80 -mt-2">
                  Add-on pricing applies alongside a main-area treatment.
                </p>
              )}
            </div>

            {/* Footer / CTA */}
            <div className="px-6 sm:px-8 py-6 bg-[#0A0A0A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#C9A050]/10">
              <div className="text-left">
                <p
                  className="text-[#F5F1E8]/40 text-[10px] font-bold tracking-[0.22em] uppercase"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Estimated Total
                </p>
                <p
                  className="text-[#F5F1E8] text-3xl font-light mt-1 tabular-nums"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  £{total.toFixed(2)}
                </p>
              </div>
              <a
                href={ACUITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A050] hover:bg-[#D9B060] text-[#0A0A0A] px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all active:scale-95 shadow-lg shadow-[#C9A050]/10 text-center"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                Book a Consultation
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h4
    className="text-[#F5F1E8]/40 text-[10px] font-bold tracking-[0.22em] uppercase mb-4 text-left"
    style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
  >
    {children}
  </h4>
);

const MainTile = ({
  area,
  active,
  onClick,
}: {
  area: Area;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`relative group flex flex-col justify-between aspect-square p-3 sm:p-4 rounded-xl border text-left transition-all active:scale-[0.98] ${
      active
        ? "border-[#C9A050]/60 bg-[#C9A050]/10"
        : "border-white/5 bg-white/5 hover:border-white/20"
    }`}
  >
    <span
      aria-hidden
      className={`w-2 h-2 rounded-full transition-all ${
        active
          ? "bg-[#C9A050] shadow-[0_0_8px_rgba(201,160,80,0.7)]"
          : "border border-white/25"
      }`}
    />
    <div>
      <span
        className="text-[#F5F1E8] text-xs sm:text-sm font-medium block leading-tight"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {area.label}
      </span>
      {area.sub && (
        <span className="text-[#F5F1E8]/40 text-[10px] block mt-0.5">
          {area.sub}
        </span>
      )}
    </div>
  </button>
);

const Chip = ({
  label,
  active,
  onClick,
  block,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  block?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`p-3 rounded-lg border text-left text-[13px] transition-colors active:scale-[0.98] ${
      active
        ? "border-[#C9A050]/60 bg-[#C9A050]/10 text-[#F5F1E8]"
        : "border-white/5 bg-white/5 text-[#F5F1E8]/80 hover:border-[#C9A050]/30 hover:text-[#F5F1E8]"
    } ${block ? "w-full" : ""}`}
    style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
  >
    {label}
  </button>
);

export default BotoxPriceBuilder;
