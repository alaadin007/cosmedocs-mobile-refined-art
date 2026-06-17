import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock } from "lucide-react";

/**
 * Global Special Offers strip — mounts above the Footer on every page.
 *
 * SEO posture (deliberate):
 *  - Rendered as <aside> with aria-label, not <article>, so search engines
 *    do not treat the offer copy as part of the host page's primary topic.
 *    Prevents diluting the topical signal of /blog/, treatment pages, etc.
 *  - No Offer / Product JSON-LD here. Schema for an offer lives on its
 *    dedicated landing page only — site-wide schema duplication is a
 *    well-known way to get penalised.
 *  - All slides in the DOM at all times; rotation is CSS-only. Googlebot
 *    sees every offer without executing JS-driven swaps.
 *  - One canonical destination per offer (no thin duplicate anchor pages).
 *  - No "limited time" structured-data claim, only visible UI copy — safe
 *    under ASA/CAP for aesthetic-medicine promotions.
 */

type Offer = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  priceNow: string;
  priceWas: string;
  badge: string;
  ctaLabel: string;
  ctaHref: string;
};

const ACUITY_URL = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

const offers: Offer[] = [
  {
    id: "pp-glow",
    kicker: "PP · Polynucleotides + Peel",
    title: "The Cosmedocs glow, decoded.",
    description:
      "Think of your skin like a wall. The peel strips away the dull, tired paint — the dead surface layer. The polynucleotides rebuild the plaster underneath: a smoother, healthier foundation, so the new paint (your skin) sits flawlessly and catches the light. Three sessions. Real glow. The honest way.",
    priceNow: "£1,250",
    priceWas: "£1,500+",
    badge: "3 sessions · Limited time",
    ctaLabel: "Book a Consultation",
    ctaHref: ACUITY_URL,
  },
];

export default function SpecialOffersSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  // Auto-rotate every 7s; pause on hover/focus. No-op when only one offer.
  useEffect(() => {
    if (offers.length <= 1) return;
    intervalRef.current = window.setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % offers.length);
    }, 7000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <aside
      aria-label="Current special offers"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocusCapture={() => (pausedRef.current = true)}
      onBlurCapture={() => (pausedRef.current = false)}
      className="relative w-full bg-gradient-to-r from-black via-[#1a140a] to-black border-y border-[#C9A050]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Section eyebrow */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[#C9A050]" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#C9A050] font-medium">
              Current special offers
            </span>
          </div>
          {offers.length > 1 && (
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Offer navigation">
              {offers.map((o, i) => (
                <button
                  key={o.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show offer ${i + 1} of ${offers.length}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-[#C9A050]" : "w-1.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Slider viewport — all slides in DOM, transform-based rotation */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {offers.map((offer) => (
              <article
                key={offer.id}
                className="min-w-full"
                aria-roledescription="special offer"
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-5 md:gap-8 items-center rounded-2xl border border-[#C9A050]/30 bg-gradient-to-br from-black via-[#120e07] to-black p-5 sm:p-6 md:p-8">
                  {/* Copy */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/15 border border-[#C9A050]/40 rounded-full px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-[#C9A050] font-medium">
                        {offer.kicker}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/70">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {offer.badge}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extralight leading-tight text-white">
                      {offer.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-3xl">
                      {offer.description}
                    </p>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-3 justify-between md:justify-center md:text-right md:min-w-[180px] md:border-l md:border-[#C9A050]/20 md:pl-8">
                    <div>
                      <div className="text-[10px] tracking-[0.22em] uppercase text-white/40">
                        Limited offer
                      </div>
                      <div className="flex items-baseline gap-2 md:justify-end mt-1">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-extralight text-[#C9A050]">
                          {offer.priceNow}
                        </span>
                        <span className="text-xs sm:text-sm text-white/40 line-through">
                          {offer.priceWas}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={offer.ctaHref}
                      className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8913F] text-black font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
                      aria-label={`${offer.ctaLabel} — ${offer.title}`}
                    >
                      {offer.ctaLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Discreet trust note */}
        <p className="mt-3 text-[11px] text-white/35 font-light text-center">
          Doctor-led at Cosmedocs Harley Street · Subject to clinical suitability at consultation
        </p>
      </div>
    </aside>
  );
}
