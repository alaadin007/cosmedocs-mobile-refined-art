import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import portrait from "@/assets/endolaser-landing-portrait.jpg";

interface Props {
  canonicalPath: string;
  primaryCta: ReactNode;
  stickyCta: ReactNode;
  bubbleCta: ReactNode;
  bubbleText?: string;
  aboveFold?: ReactNode;
}

const GOLD = "#D4A24E";

const trustBadges = ["UKCA APPROVED", "CE MARKED", "CQC-REGISTERED PARTNER"];

const statRow = [
  "LEAD TRAINER — HSI",
  "£750 MODEL PRICE",
  "SINCE 2007",
  "HARLEY STREET",
];

const faqs = [
  { q: "Is it painful?", a: "The area is fully numbed with local anaesthetic before treatment. Most patients describe the sensation as warmth and mild pressure — comfortable throughout." },
  { q: "How long do results last?", a: "Skin tightening and contour improvements typically last 18–24 months, with new collagen continuing to remodel for up to 6 months post-treatment." },
  { q: "Who performs it?", a: "The treatment is doctor-performed only, by GMC-registered doctors trained in laser fibre lift technique." },
  { q: "What's the downtime?", a: "Minimal. Mild swelling or bruising for 3–7 days. Most patients return to normal activity the next day and social plans within a week." },
  { q: "Am I a candidate?", a: "Best suited to adults with mild-to-moderate submental fullness, early jowling, or loss of jawline definition. Suitability is confirmed at your consultation." },
];

const Check = () => (
  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke={GOLD} strokeWidth="2.5" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Portrait with animated gold jawline glow */
const HeroPortrait = () => (
  <div className="relative w-full max-w-md mx-auto lg:mx-0">
    <div className="relative overflow-hidden rounded-3xl border border-[#D4A24E]/20 shadow-[0_30px_80px_-30px_rgba(212,162,78,0.35)]">
      <img
        src={portrait}
        alt="Profile view highlighting the jawline and neck contour treated by XL Endolaser laser fibre lift"
        width={1024}
        height={1280}
        className="w-full h-auto block"
        fetchPriority="high"
      />
      {/* Jawline tracing SVG */}
      <svg
        viewBox="0 0 1024 1280"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <filter id="jawGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Approximate jawline path from chin up toward ear */}
        <path
          d="M175,720 C 260,760 360,760 470,735 C 600,705 720,640 785,545"
          fill="none"
          stroke={GOLD}
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#jawGlow)"
          className="jaw-trace"
        />
      </svg>
    </div>
    <style>{`
      .jaw-trace{
        stroke-dasharray: 900;
        stroke-dashoffset: 900;
        animation: jawDraw 4.5s ease-in-out infinite;
        opacity: .95;
      }
      @keyframes jawDraw {
        0%   { stroke-dashoffset: 900; opacity: 0; }
        15%  { opacity: 1; }
        60%  { stroke-dashoffset: 0; opacity: 1; }
        85%  { stroke-dashoffset: 0; opacity: .4; }
        100% { stroke-dashoffset: 0; opacity: 0; }
      }
      @media (prefers-reduced-motion: reduce) {
        .jaw-trace { animation: none; stroke-dashoffset: 0; opacity: .85; }
      }
      .gold-glow {
        color: ${GOLD};
        text-shadow: 0 0 24px rgba(212,162,78,0.55), 0 0 60px rgba(212,162,78,0.25);
      }
      .bubble-pop {
        animation: bubbleIn .6s ease-out .8s both, bubbleFloat 4s ease-in-out 1.5s infinite;
      }
      @keyframes bubbleIn { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      @keyframes bubbleFloat { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-6px) } }
    `}</style>
  </div>
);

const MinimalHeader = () => (
  <header className="relative z-40 border-b border-white/5">
    <div className="tp-container flex items-center justify-between py-5">
      <a href="/" className="leading-tight">
        <div className="text-white tracking-[0.32em] text-lg md:text-xl font-light">COSMEDOCS</div>
        <div className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] mt-0.5">
          HARLEY STREET DOCTORS · SINCE 2007
        </div>
      </a>
      <a
        href="tel:+442071188000"
        className="text-xs md:text-sm text-[#D4A24E] tracking-[0.18em] border border-[#D4A24E]/40 hover:border-[#D4A24E] rounded-full px-4 py-2"
      >
        CALL US
      </a>
    </div>
  </header>
);

const EndolaserLandingShared = ({
  canonicalPath,
  primaryCta,
  stickyCta,
  bubbleCta,
  bubbleText = "One-session lift, no scars — want the details?",
  aboveFold,
}: Props) => {
  return (
    <div className="ios-mobile bg-black text-white min-h-screen pb-28 md:pb-0 relative overflow-hidden">
      <Helmet>
        <title>XL Endolaser (Laser Fibre Lift) London — £750 Model Price | Cosmedocs</title>
        <meta
          name="description"
          content="XL Endolaser — dual-wavelength laser fibre lift for jawline, jowls and chin. Doctor-led on Harley Street. £750 model treatment price available."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`https://www.cosmedocs.com${canonicalPath}`} />
      </Helmet>

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#D4A24E]/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#D4A24E]/5 blur-[140px]" />

      <MinimalHeader />

      {/* HERO */}
      <section className="relative pt-10 md:pt-16">
        <div className="tp-container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-[#D4A24E]/80 tracking-[0.32em] text-xs md:text-sm">
              DOCTOR-LED · HARLEY STREET
            </p>
            <h1 className="mt-5 text-white font-light leading-[1.05] text-4xl md:text-6xl">
              XL Endolaser<br />
              <span className="gold-glow italic font-serif">(Laser Fibre Lift)</span>
              <span className="block text-white/85 text-2xl md:text-3xl mt-3 tracking-wide">London</span>
            </h1>
            <p className="mt-6 text-white/75 text-base md:text-lg max-w-lg">
              Dual-wavelength (980nm + 1470nm) laser fibre lift for the jawline, jowls and chin.
              Minimally invasive. One session. No scars. Doctor-led.
            </p>

            <div className="mt-8">{primaryCta}</div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              {trustBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-2 text-[11px] md:text-xs text-white/80 tracking-[0.22em]">
                  <Check />
                  {b}
                </span>
              ))}
            </div>

            {/* Stat row */}
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[10px] md:text-xs text-[#D4A24E]/70 tracking-[0.22em] list-none p-0">
              {statRow.map((s) => (
                <li key={s} className="whitespace-nowrap">{s}</li>
              ))}
            </ul>
          </div>

          <HeroPortrait />
        </div>

        {aboveFold && <div className="tp-container mt-14">{aboveFold}</div>}
      </section>

      {/* EXPLAINER */}
      <section className="mt-16 md:mt-24">
        <div className="tp-container max-w-3xl">
          <p className="text-[#D4A24E]/80 tracking-[0.28em] text-xs">THE TREATMENT</p>
          <h2 className="text-white font-light text-3xl md:text-4xl mt-3">
            A <span className="gold-glow">laser fibre</span>, worked from the inside out
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed">
            A hair-thin optical fibre is placed just beneath the skin under local anaesthetic.
            Two precisely tuned wavelengths — 980nm and 1470nm — deliver energy simultaneously:
            one tightens skin and stimulates collagen, the other gently reduces stubborn fat
            beneath the chin and along the jawline.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            No scalpels. No general anaesthetic. Doctor-performed in a single session, with
            minimal downtime and a natural, gradual refinement over the following weeks —
            invisible art, quietly done.
          </p>
        </div>
      </section>

      {/* MODEL PRICE CALLOUT */}
      <section className="mt-16 md:mt-24">
        <div className="tp-container">
          <div className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12 border border-[#D4A24E]/50 bg-gradient-to-br from-[#D4A24E]/[0.08] to-transparent">
            <p className="text-[#D4A24E] tracking-[0.28em] text-xs">£750 MODEL TREATMENT PRICE</p>
            <h2 className="text-white font-light text-2xl md:text-3xl mt-3">
              A model rate, in exchange for teaching footage
            </h2>
            <p className="text-white/85 mt-4 leading-relaxed">
              £750 Model Treatment Price — in exchange for this rate, treatment photos/footage may
              be used for training purposes.
            </p>
            <p className="text-white/70 mt-3 leading-relaxed">
              Ask about full-price options if you'd prefer not to be photographed.
            </p>
            <div className="mt-7">{primaryCta}</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-16 md:mt-24">
        <div className="tp-container">
          <p className="text-[#D4A24E]/80 tracking-[0.28em] text-xs text-center">HOW IT WORKS</p>
          <h2 className="text-white font-light text-3xl md:text-4xl text-center mt-3">Three simple steps</h2>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-10">
            {[
              { n: "01", t: "Consultation", d: "Doctor-led assessment of your jawline, chin and skin quality. Suitability confirmed, expectations set." },
              { n: "02", t: "Treatment", d: "Local anaesthetic, then the laser fibre is worked precisely under the skin. 45–60 minutes." },
              { n: "03", t: "Results", d: "Refinement visible within 2–4 weeks, continuing to improve for up to 6 months as new collagen forms." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] hover:border-[#D4A24E]/40 transition-colors">
                <div className="text-[#D4A24E] text-xs tracking-[0.32em]">{s.n}</div>
                <h3 className="text-white text-xl font-light mt-3">{s.t}</h3>
                <p className="text-white/70 mt-2 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16 md:mt-24">
        <div className="tp-container max-w-3xl">
          <p className="text-[#D4A24E]/80 tracking-[0.28em] text-xs">FAQ</p>
          <h2 className="text-white font-light text-3xl md:text-4xl mt-3">Common questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-white/10 pb-5">
                <h3 className="text-white text-lg font-light">{f.q}</h3>
                <p className="text-white/70 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">{primaryCta}</div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mt-16 md:mt-20">
        <div className="tp-container">
          <p className="text-[11px] text-white/45 text-center max-w-2xl mx-auto leading-relaxed">
            Results vary from patient to patient. Suitability, expected outcomes and any risks are
            confirmed at your consultation with a GMC-registered doctor. Cosmedocs · Harley Street,
            London · Established 2007.
          </p>
        </div>
      </section>

      {/* FLOATING CHAT BUBBLE (desktop) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40 max-w-xs bubble-pop">
        <div className="rounded-2xl bg-[#111] border border-[#D4A24E]/40 shadow-[0_20px_60px_-15px_rgba(212,162,78,0.4)] p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D4A24E]/15 border border-[#D4A24E]/40 flex items-center justify-center flex-shrink-0">
              <span className="text-[#D4A24E] text-sm">✦</span>
            </div>
            <p className="text-white/90 text-sm leading-snug">{bubbleText}</p>
          </div>
          <div className="mt-3">{bubbleCta}</div>
        </div>
      </div>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-gradient-to-t from-black via-black/95 to-black/70 border-t border-[#D4A24E]/20">
        {stickyCta}
      </div>
    </div>
  );
};

export default EndolaserLandingShared;
