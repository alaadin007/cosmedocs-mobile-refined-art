import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  canonicalPath: string;
  primaryCta: ReactNode;
  stickyCta: ReactNode;
  aboveFold?: ReactNode;
}

const trustBadges = [
  "GMC-registered doctors",
  "CQC-registered clinic",
  "Established 2007",
  "Harley Street, London",
  "CE & UKCA approved device",
];

const faqs = [
  {
    q: "Is it painful?",
    a: "The area is fully numbed with local anaesthetic before treatment. Most patients describe the sensation as warmth and mild pressure — comfortable throughout.",
  },
  {
    q: "How long do results last?",
    a: "Skin tightening and contour improvements typically last 18–24 months, with new collagen continuing to remodel for up to 6 months post-treatment.",
  },
  {
    q: "Who performs it?",
    a: "The treatment is doctor-performed only, by GMC-registered doctors trained in laser fibre lift technique.",
  },
  {
    q: "What's the downtime?",
    a: "Minimal. Mild swelling or bruising for 3–7 days. Most patients return to normal activity the next day and social plans within a week.",
  },
  {
    q: "Am I a candidate?",
    a: "Best suited to adults with mild-to-moderate submental fullness, early jowling, or loss of jawline definition. Suitability is confirmed at your consultation.",
  },
];

const EndolaserLandingShared = ({ canonicalPath, primaryCta, stickyCta, aboveFold }: Props) => {
  return (
    <div className="treatment-page ios-mobile bg-black text-white min-h-screen pb-24 md:pb-0">
      <Helmet>
        <title>Endolaser Double Chin & Jawline — £750 Model Price | Cosmedocs Harley Street</title>
        <meta
          name="description"
          content="Non-surgical laser fibre lift for the double chin and jawline. Doctor-led on Harley Street. £750 model treatment price available."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`https://www.cosmedocs.com${canonicalPath}`} />
      </Helmet>

      {/* HERO */}
      <section className="pt-10 md:pt-16">
        <div className="tp-container">
          <div className="max-w-3xl">
            <p className="eyebrow">Doctor-Led · Harley Street</p>
            <h1 className="text-white">
              Endolaser Double Chin & Jawline Treatment
              <span className="block mt-2 text-[#C9A050]">£750 Model Price</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg">
              Non-surgical laser fibre lift, doctor-led, on Harley Street. Bold • Natural • Always Your Way.
            </p>
            <div className="mt-8">{primaryCta}</div>
          </div>

          {aboveFold && <div className="mt-10">{aboveFold}</div>}
        </div>
      </section>

      {/* EXPLAINER */}
      <section>
        <div className="tp-container tp-prose">
          <p className="eyebrow">The Treatment</p>
          <h2 className="text-white">XL Laser · Fibre Lift Under the Skin</h2>
          <p className="text-white/80">
            A minimally invasive laser fibre lift. A hair-thin optical fibre is placed just beneath the skin
            under local anaesthetic. Precisely tuned laser energy is delivered from the inside out —
            simultaneously tightening skin, remodelling collagen and reducing pockets of stubborn fat
            beneath the chin and along the jawline.
          </p>
          <p className="text-white/80 mt-4">
            No scalpels. No general anaesthetic. Doctor-performed in a single session, with minimal downtime
            and a natural, gradual refinement over the following weeks — invisible art, quietly done.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section>
        <div className="tp-container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 text-center">
            {trustBadges.map((b) => (
              <div
                key={b}
                className="border border-[#C9A050]/30 rounded-lg px-3 py-4 text-xs md:text-sm text-white/85"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL PRICE CALLOUT */}
      <section>
        <div className="tp-container">
          <div className="max-w-3xl mx-auto border border-[#C9A050] rounded-2xl p-6 md:p-10 bg-[#C9A050]/5">
            <p className="eyebrow">About the £750 Model Price</p>
            <h2 className="text-white">A model-treatment rate, in exchange for teaching footage</h2>
            <p className="text-white/85 mt-4">
              The £750 rate is a model-treatment price. In exchange, photographs and/or video of the
              treatment may be used for medical training and education purposes — with your written consent.
            </p>
            <p className="text-white/75 mt-3">
              Prefer complete privacy? Full-price treatment is available with no photography and standard
              discretion — just let us know at consultation.
            </p>
            <div className="mt-6">{primaryCta}</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="tp-container">
          <p className="eyebrow text-center">How It Works</p>
          <h2 className="text-white text-center">Three simple steps</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { n: "01", t: "Consultation", d: "A doctor-led assessment of your jawline, chin and skin quality. Suitability confirmed and expectations set." },
              { n: "02", t: "Treatment", d: "Local anaesthetic, then the laser fibre is placed and worked precisely under the skin. Around 45–60 minutes." },
              { n: "03", t: "Results", d: "Refinement visible within 2–4 weeks, continuing to improve for up to 6 months as new collagen forms." },
            ].map((s) => (
              <div key={s.n} className="border border-white/10 rounded-2xl p-6">
                <div className="text-[#C9A050] text-sm tracking-[0.28em]">{s.n}</div>
                <h3 className="text-white mt-2">{s.t}</h3>
                <p className="text-white/75 mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="tp-container tp-prose">
          <p className="eyebrow">FAQ</p>
          <h2 className="text-white">Common questions</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-white/10 pb-5">
                <h3 className="text-white">{f.q}</h3>
                <p className="text-white/75 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">{primaryCta}</div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section>
        <div className="tp-container">
          <p className="text-xs text-white/50 text-center max-w-2xl mx-auto">
            Results vary from patient to patient. Suitability, expected outcomes and any risks are confirmed
            at your consultation with a GMC-registered doctor. Cosmedocs · Harley Street, London ·
            Established 2007.
          </p>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="tp-sticky-cta">{stickyCta}</div>
    </div>
  );
};

export default EndolaserLandingShared;
