import { Link } from "react-router-dom";
import { Sparkles, BadgeCheck, ShieldCheck, ArrowRight } from "lucide-react";

interface EndolaserSpotlightProps {
  variant?: "full" | "inline";
  className?: string;
}

/**
 * Featured spotlight for the Endolaser (Laser Fibre Lift) page.
 * - "full": homepage / hub band with badges + CTA
 * - "inline": compact in-page callout for related treatment pages
 */
const EndolaserSpotlight = ({ variant = "full", className = "" }: EndolaserSpotlightProps) => {
  if (variant === "inline") {
    return (
      <Link
        to="/treatments/endolaser/"
        className={`group relative block overflow-hidden rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-5 sm:p-6 my-8 hover:border-[#C9A050]/70 transition-all ${className}`}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#C9A050]/10 blur-3xl pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" /> Now featured
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-light text-white">
              Endolaser <span className="text-[#C9A050]">(Laser Fibre Lift)</span>
            </h3>
            <p className="text-sm text-white/60 mt-1">
              The only UKCA &amp; CE-marked dual-wavelength Endolaser at Harley Street. Doctor-led, lead-trainer performed.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A050] whitespace-nowrap">
            Discover <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <section
      aria-labelledby="endolaser-spotlight"
      className={`relative overflow-hidden bg-black py-14 md:py-20 ${className}`}
    >
      {/* Ambient gold glow */}
      <div aria-hidden className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#C9A050]/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#C9A050]/5 blur-3xl" />
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.24em] mb-5">
              <Sparkles className="w-3 h-3" /> Now featured at Cosmedocs
            </div>
            <h2
              id="endolaser-spotlight"
              className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white leading-[1.05] tracking-tight"
            >
              Endolaser{" "}
              <span className="text-[#C9A050] font-light">(Laser Fibre Lift)</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              The dual-wavelength intra-tissue laser that lifts, tightens and refines — without surgery.
              The only UKCA &amp; CE-marked Endolaser at Harley Street, performed by the Lead Trainer
              for this device at the Harley Street Institute.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[11px] text-[#C9A050] font-medium tracking-wide uppercase">
                <BadgeCheck className="w-3.5 h-3.5" /> UKCA &amp; CE
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide uppercase">
                <ShieldCheck className="w-3.5 h-3.5" /> CQC-Registered Partner
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide uppercase">
                Doctor-Led · From £450
              </span>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to="/treatments/endolaser/"
                className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform"
              >
                Discover Endolaser <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/treatments/endolift-london/"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-[#C9A050] transition-colors"
              >
                See the Endolift authority page →
              </Link>
              <Link
                to="/treatments/endolift-alternative/"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-[#C9A050] transition-colors"
              >
                Comparing to Endolift®? See the 2G alternative →
              </Link>
            </div>
          </div>

          {/* Right: stat / proof block */}
          <div className="lg:w-72 flex-shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {[
              { k: "1470 + 980nm", v: "Dual-wavelength laser fibre" },
              { k: "18–24 months", v: "Single-treatment longevity" },
              { k: "2–3 days", v: "Typical downtime" },
              { k: "Lead Trainer", v: "At the Harley Street Institute" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center lg:text-left"
              >
                <div className="text-[#C9A050] text-base sm:text-lg font-light">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/50 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndolaserSpotlight;
