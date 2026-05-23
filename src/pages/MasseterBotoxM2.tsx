import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, ShieldCheck, Sparkles, Activity, Syringe } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import masseterAfter2Treatments from "@/assets/before-after/masseter-series/after-2-treatments.jpg";
import masseterOneYearAfter3rd from "@/assets/before-after/masseter-series/one-year-after-3rd.jpg";

const faqs = [
  {
    q: "How long does masseter Botox last?",
    a: "Typically 4–6 months. With repeat sessions the masseter undergoes cumulative atrophy, so most patients move to two maintenance treatments a year, then annual review.",
  },
  {
    q: "Is masseter Botox for jaw slimming or teeth grinding?",
    a: "Both. Cosmetically it softens a square lower face; medically it reduces clenching, jaw tension, TMJ strain and bruxism headaches. The plan is tailored to your priority.",
  },
  {
    q: "How much does masseter Botox cost in London?",
    a: "£350 for female patients and £400 for male patients at our Harley Street clinic. Male masseters are denser and usually need a higher unit dose.",
  },
  {
    q: "Will it affect chewing or my smile?",
    a: "The aim is partial relaxation, not paralysis. Doctor-led placement inside the muscle body preserves normal eating, speech and expression.",
  },
  {
    q: "When will I see jaw slimming?",
    a: "Tension eases within 7–14 days. Visible contour change appears by weeks 3–4 and becomes clearer at weeks 6–12, especially after repeat cycles.",
  },
  {
    q: "What are the side effects?",
    a: "Mild tenderness, small bruises or short-lived chewing fatigue. Rare risks include asymmetry or paradoxical bulging — minimised by anatomical, conservative dosing.",
  },
];

const MasseterBotoxM2 = () => {
  const seo = generateSEOMetadata(
    "Masseter Botox London | Jaw Slimming & Bruxism | Harley Street",
    "Doctor-led masseter Botox in London for jaw slimming, teeth grinding and TMJ tension. £350 female / £400 male. Harley Street clinic, since 2007.",
    "/m2/"
  );

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} data-rh="true" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                name: "CosmeDocs",
                url: "https://www.cosmedocs.com/",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "10 Harley Street",
                  addressLocality: "London",
                  postalCode: "W1G 9PF",
                  addressCountry: "GB",
                },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "243" },
              },
              {
                "@type": "MedicalProcedure",
                name: "Masseter Botox",
                alternateName: ["Jaw Slimming Botox", "Masseter Reduction"],
                description:
                  "Doctor-led masseter Botox treatment for jaw slimming, bruxism, teeth grinding and TMJ tension at CosmeDocs Harley Street.",
                url: "https://www.cosmedocs.com/m2/",
                procedureType: "NoninvasiveProcedure",
                bodyLocation: "Masseter muscle, lower face",
                followup: "Review at 4–6 weeks; maintenance every 4–6 months.",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "Offer",
                name: "Masseter Botox",
                priceCurrency: "GBP",
                price: "350",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "GBP",
                  minPrice: "350",
                  maxPrice: "400",
                },
                availability: "https://schema.org/InStock",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="treatment-page ios-mobile bg-[#F5F5F3] text-[#0a0a0a] min-h-screen">
        {/* ───── Hero ───── */}
        <header className="bg-[#F5F5F3]">
          <div className="tp-container pt-6 pb-2">
            <Breadcrumb
              items={[
                { label: "Treatments", path: "/treatments/" },
                { label: "Botox", path: "/treatments/botox/" },
              ]}
              currentPage="Masseter Botox"
            />
          </div>
          <section className="!pt-4">
            <div className="tp-container">
              <p className="eyebrow">Doctor-led · Harley Street · Since 2007</p>
              <h1 className="font-light">
                Masseter Botox <span className="text-[#C9A050]">London</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[#2a2a2a]">
                A quieter jawline. Less clenching. The same face — refined. Doctor-led masseter Botox for jaw slimming, bruxism and TMJ tension.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="tp-cta">
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/before-after/botox/masseter/"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-[0.95rem] border border-[#0a0a0a]/15 text-[#0a0a0a] text-[15px] font-medium hover:bg-[#0a0a0a]/[0.03] transition"
                >
                  See all before & after
                </Link>
              </div>

              {/* Quick facts */}
              <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "15–20 min" },
                  { icon: <Activity className="w-4 h-4" />, label: "No downtime" },
                  { icon: <Syringe className="w-4 h-4" />, label: "From £350" },
                  { icon: <ShieldCheck className="w-4 h-4" />, label: "Doctor-led" },
                ].map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-2 rounded-2xl bg-white border border-black/[0.06] px-4 py-3 text-[15px]"
                  >
                    <span className="text-[#C9A050]">{f.icon}</span>
                    <span className="text-[#2a2a2a]">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </header>

        {/* ───── His Journey ───── */}
        <section aria-labelledby="journey-heading">
          <div className="tp-container">
            <p className="eyebrow">Real patient · Real timeline</p>
            <h2 id="journey-heading">
              His <span className="text-[#C9A050]">journey</span> — staged, not stripped
            </h2>
            <p className="mt-3 max-w-2xl text-[#2a2a2a]">
              One male patient. Two stages. The same restraint we apply to every face — small, accurate doses that let the masseter soften over time rather than collapse in one go.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <figure className="rounded-2xl overflow-hidden bg-white border border-black/[0.06]">
                <img
                  src={masseterAfter2Treatments}
                  alt="Male patient before and after two sessions of masseter Botox at CosmeDocs Harley Street — visibly reduced jaw width and softer lower-face contour"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <figcaption className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">After 2 treatments</p>
                  <h3 className="!mb-1">Two-session progression</h3>
                  <p className="text-[15px] text-[#2a2a2a]">
                    Baseline to the first visible reduction in lower-face width. Expression and natural smile preserved.
                  </p>
                </figcaption>
              </figure>

              <figure className="rounded-2xl overflow-hidden bg-white border border-black/[0.06]">
                <img
                  src={masseterOneYearAfter3rd}
                  alt="Same male patient one year after a third masseter Botox treatment at CosmeDocs — maintained slimmer jaw and refined lower face"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <figcaption className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">1 year · after 3rd session</p>
                  <h3 className="!mb-1">Cumulative atrophy</h3>
                  <p className="text-[15px] text-[#2a2a2a]">
                    A refined, settled jawline — the result of staged maintenance, not a single oversized treatment.
                  </p>
                </figcaption>
              </figure>
            </div>

            <p className="mt-5 text-[13px] text-[#555]">
              Real CosmeDocs patient. Shared with written consent. Individual results vary.
            </p>
          </div>
        </section>

        {/* ───── What it treats ───── */}
        <section aria-labelledby="treats-heading">
          <div className="tp-container">
            <p className="eyebrow">Dual intent</p>
            <h2 id="treats-heading">
              What masseter Botox <span className="text-[#C9A050]">actually does</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Jaw slimming",
                  body: "Softens a square or wide lower face by reducing masseter bulk. Result: a more oval, balanced jawline — without touching bone or surgery.",
                },
                {
                  title: "Bruxism & TMJ",
                  body: "Eases night-time clenching, jaw fatigue, tension headaches and tooth-grinding damage by quieting the strongest chewing muscle.",
                },
                {
                  title: "Tooth & enamel protection",
                  body: "Lower bite force protects fillings, veneers and natural enamel from chip-and-crack cycles caused by chronic grinding.",
                },
                {
                  title: "Facial harmony",
                  body: "Restores proportion between mid-face, jaw and chin — the foundation of a calm, rested-looking lower third.",
                },
              ].map((b) => (
                <div key={b.title} className="rounded-2xl bg-white border border-black/[0.06] p-5">
                  <h3 className="!mb-1">{b.title}</h3>
                  <p className="text-[15px] text-[#2a2a2a]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Treatment in 3 steps (stepper, no carousel) ───── */}
        <section aria-labelledby="how-heading">
          <div className="tp-container">
            <p className="eyebrow">How it works</p>
            <h2 id="how-heading">
              Three steps. <span className="text-[#C9A050]">No drama.</span>
            </h2>
            <ol className="mt-6 space-y-3">
              {[
                {
                  n: "01",
                  t: "Doctor assessment",
                  d: "Palpation of the masseter at rest and during clenching. Dose is set by muscle volume, density and your goal — not a flat number.",
                },
                {
                  n: "02",
                  t: "Precise placement",
                  d: "Small, deep injections into the safe lower zone of the masseter. 15–20 minutes. Topical numbing if you want it.",
                },
                {
                  n: "03",
                  t: "Settle & review",
                  d: "Tension eases in 1–2 weeks. Slimming appears by weeks 3–12. We review at 4–6 weeks and refine the next session.",
                },
              ].map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl bg-white border border-black/[0.06] p-5 flex gap-4"
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-[#C9A050] text-black grid place-items-center text-[14px] font-semibold">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="!mb-1">{s.t}</h3>
                    <p className="text-[15px] text-[#2a2a2a]">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───── Pricing ───── */}
        <section aria-labelledby="pricing-heading">
          <div className="tp-container">
            <p className="eyebrow">Pricing</p>
            <h2 id="pricing-heading">
              Clear pricing. <span className="text-[#C9A050]">No add-ons.</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">Female</p>
                <p className="text-4xl font-light">£350</p>
                <p className="mt-2 text-[15px] text-[#2a2a2a]">Standard masseter dose. Includes consultation and review.</p>
              </div>
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">Male</p>
                <p className="text-4xl font-light">£400</p>
                <p className="mt-2 text-[15px] text-[#2a2a2a]">Higher unit dose for denser masseter muscle. Includes consultation and review.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── FAQs (native <details>, no JS, no carousel) ───── */}
        <section aria-labelledby="faq-heading">
          <div className="tp-container">
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-heading">
              Honest <span className="text-[#C9A050]">answers</span>
            </h2>
            <div className="mt-6 rounded-2xl bg-white border border-black/[0.06] overflow-hidden divide-y divide-black/[0.06]">
              {faqs.map((f) => (
                <details key={f.q} className="group p-5 open:bg-black/[0.02]">
                  <summary className="flex justify-between items-center gap-4 cursor-pointer list-none">
                    <h3 className="!mb-0 text-[17px] font-medium">{f.q}</h3>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-black/15 grid place-items-center text-[15px] text-[#C9A050] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] text-[#2a2a2a]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Final CTA ───── */}
        <section className="!pt-6 !pb-16">
          <div className="tp-container">
            <div className="rounded-3xl bg-[#0a0a0a] text-white p-8 md:p-12 text-center">
              <Sparkles className="w-6 h-6 text-[#C9A050] mx-auto mb-4" />
              <h2 className="!mb-3 text-white">
                Your consultation <span className="text-[#C9A050]">begins here</span>
              </h2>
              <p className="text-white/70 max-w-xl mx-auto text-[15px]">
                Speak with one of our Harley Street doctors. Honest assessment, no upsell — just a clear plan for your jaw.
              </p>
              <a
                href="https://med.as.me/harleystreet"
                target="_blank"
                rel="noopener noreferrer"
                className="tp-cta mt-6 inline-flex"
              >
                Book at Harley Street <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MasseterBotoxM2;
