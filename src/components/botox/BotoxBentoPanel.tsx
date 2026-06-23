import { useMemo, useState } from "react";

/**
 * Dark luxe bento configurator panel — Botox price builder.
 * Designed to fit inside any container (Dialog, drawer, overlay).
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

const BotoxBentoPanel = ({ compact = false }: { compact?: boolean }) => {
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
    <div className="flex flex-col h-full bg-[#0A0A0A]">
      {!compact && (
        <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-[#C9A050]/10">
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
      )}

      <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-6 space-y-7">
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

      <div className="px-5 sm:px-7 py-5 bg-[#0A0A0A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#C9A050]/10">
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
    </div>
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

export default BotoxBentoPanel;
