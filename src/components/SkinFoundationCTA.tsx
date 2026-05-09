import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import vitaminCImage from "@/assets/revitalise-c20-vitamin-c-serum.png";
import retinolImage from "@/assets/stimulate-re-retinol-cream.png";

export type SkinConcernVariant =
  | "anti-ageing"
  | "uneven-tone"
  | "oily-barrier"
  | "general";

interface SkinFoundationCTAProps {
  variant?: SkinConcernVariant;
  className?: string;
}

const VARIANT_CONFIG: Record<SkinConcernVariant, { eyebrow: string; headline: string; subtext: string }> = {
  "anti-ageing": {
    eyebrow: "Daily Skincare",
    headline: "Keep your results lasting longer",
    subtext: "Two doctor-formulated essentials for between appointments.",
  },
  "uneven-tone": {
    eyebrow: "Daily Skincare",
    headline: "A simple routine for brighter, even skin",
    subtext: "Vitamin C by day, retinol by night.",
  },
  "oily-barrier": {
    eyebrow: "Daily Skincare",
    headline: "Calmer, clearer skin in two steps",
    subtext: "A morning serum and an evening cream — designed to restore balance.",
  },
  "general": {
    eyebrow: "Daily Skincare",
    headline: "Two products. Morning and night.",
    subtext: "Doctor-formulated essentials that make your in-clinic results last.",
  },
};

const SkinFoundationCTA = ({ variant = "general", className = "" }: SkinFoundationCTAProps) => {
  const config = VARIANT_CONFIG[variant];

  return (
    <section className={`bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 rounded-2xl p-6 md:p-8 my-12 ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-[#C9A050] tracking-[0.2em] uppercase text-[10px] mb-2">{config.eyebrow}</p>
        <h3 className="text-xl md:text-2xl font-extralight text-white mb-2">{config.headline}</h3>
        <p className="text-slate-400 text-sm font-light max-w-md mx-auto">{config.subtext}</p>
      </div>

      {/* AM/PM Products */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link to="/shop/vitamin-c-serum/" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
          <img src={vitaminCImage} alt="Revitalise C20 Vitamin C Serum" className="w-14 h-18 object-contain flex-shrink-0" loading="lazy" />
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Sun className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-[10px] text-yellow-400 tracking-wider uppercase">Morning</span>
            </div>
            <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Revitalise C20</p>
            <p className="text-slate-400 text-xs font-light">Vitamin C Serum · £85</p>
          </div>
        </Link>

        <Link to="/shop/retinol-cream/" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
          <img src={retinolImage} alt="Stimulate RE Retinol+ Cream" className="w-14 h-18 object-contain flex-shrink-0" loading="lazy" />
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] text-indigo-400 tracking-wider uppercase">Evening</span>
            </div>
            <p className="text-white text-sm font-medium group-hover:text-[#C9A050] transition-colors">Stimulate RE</p>
            <p className="text-slate-400 text-xs font-light">Retinol+ Night Cream · £65</p>
          </div>
        </Link>
      </div>

      {/* CTA */}
      <div className="text-center mt-6">
        <Link to="/shop/" className="inline-block text-[#C9A050] hover:text-[#E0BC6A] text-xs tracking-[0.15em] uppercase border-b border-[#C9A050]/40 hover:border-[#C9A050] pb-0.5 transition-colors">
          Shop the routine
        </Link>
      </div>
    </section>
  );
};

export default SkinFoundationCTA;
