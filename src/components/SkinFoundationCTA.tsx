import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import vitaminCImage from "@/assets/revitalise-c20-vitamin-c-serum.png";
import retinolImage from "@/assets/stimulate-re-retinol-cream.png";

export type SkinConcernVariant = 
  | "anti-ageing"     // emphasise fibroblast stimulation
  | "uneven-tone"     // emphasise melanocyte regulation
  | "oily-barrier"    // emphasise keratinocyte strengthening
  | "general";        // balanced message

interface SkinFoundationCTAProps {
  variant?: SkinConcernVariant;
  className?: string;
}

const VARIANT_CONFIG: Record<SkinConcernVariant, { headline: string; subtext: string; highlight: string }> = {
  "anti-ageing": {
    headline: "Support Fibroblast Stimulation at Home",
    subtext: "Clinical injectables rebuild structure. Cosmeceuticals protect and maintain it — stimulating collagen, elastin and hyaluronic acid production daily.",
    highlight: "Fibroblasts"
  },
  "uneven-tone": {
    headline: "Regulate Melanocytes for Even Skin Tone",
    subtext: "L-ascorbic acid inhibits tyrosinase to reduce excess melanin production, while retinol accelerates the turnover of pigmented cells.",
    highlight: "Melanocytes"
  },
  "oily-barrier": {
    headline: "Strengthen Your Skin Barrier at Cell Level",
    subtext: "Niacinamide boosts ceramide synthesis in keratinocytes to seal moisture in and regulate sebum. Retinol normalises cell turnover to prevent congestion.",
    highlight: "Keratinocytes"
  },
  "general": {
    headline: "Great Skin Starts at Cell Level",
    subtext: "Target all three essential skin cell types with doctor-formulated cosmeceuticals — the foundation that makes professional treatments last.",
    highlight: "3 Cell Types"
  }
};

const SkinFoundationCTA = ({ variant = "general", className = "" }: SkinFoundationCTAProps) => {
  const config = VARIANT_CONFIG[variant];

  return (
    <section className={`bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 rounded-2xl p-6 md:p-8 my-12 ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-[#C9A050] tracking-[0.2em] uppercase text-[10px] mb-2">The 3-Cell Skin Philosophy</p>
        <h3 className="text-xl md:text-2xl font-extralight text-white mb-2">{config.headline}</h3>
        <p className="text-slate-400 text-sm font-light max-w-lg mx-auto">{config.subtext}</p>
      </div>

      {/* Cell type pills */}
      <div className="flex justify-center gap-3 mb-6">
        {[
          { name: "Keratinocytes", colour: "text-emerald-400 border-emerald-400/30", active: variant === "oily-barrier" || variant === "general" },
          { name: "Melanocytes", colour: "text-purple-400 border-purple-400/30", active: variant === "uneven-tone" || variant === "general" },
          { name: "Fibroblasts", colour: "text-cyan-400 border-cyan-400/30", active: variant === "anti-ageing" || variant === "general" },
        ].map((cell) => (
          <span key={cell.name} className={`text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border ${cell.active ? cell.colour : "text-slate-600 border-slate-700"} transition-colors`}>
            {cell.name}
          </span>
        ))}
      </div>

      {/* AM/PM Products */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* AM — Vitamin C */}
        <Link to="/shop/vitamin-c-serum/" className="group flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-4 transition-colors">
          <img src={vitaminCImage} alt="Revitalise C20 Vitamin C Serum" className="w-14 h-18 object-contain flex-shrink-0" loading="lazy" />
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Sun className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-[10px] text-yellow-400 tracking-wider uppercase">Morning</span>
            </div>
            <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">Revitalise C20</p>
            <p className="text-slate-500 text-xs font-light">20% Vitamin C Serum • £85</p>
          </div>
        </Link>

        {/* PM — Retinol */}
        <Link to="/shop/retinol-cream/" className="group flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-4 transition-colors">
          <img src={retinolImage} alt="Stimulate RE Retinol+ Cream" className="w-14 h-18 object-contain flex-shrink-0" loading="lazy" />
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] text-indigo-400 tracking-wider uppercase">Evening</span>
            </div>
            <p className="text-white text-sm font-medium group-hover:text-[#C9A050] transition-colors">Stimulate RE (Retinol+)</p>
            <p className="text-slate-500 text-xs font-light">Dual Vitamin A Cream • £65</p>
          </div>
        </Link>
      </div>

      {/* Tagline */}
      <p className="text-center text-slate-600 text-[10px] tracking-wider uppercase mt-4">
        Keratinocytes • Melanocytes • Fibroblasts — Harley Street Formulations
      </p>
    </section>
  );
};

export default SkinFoundationCTA;
