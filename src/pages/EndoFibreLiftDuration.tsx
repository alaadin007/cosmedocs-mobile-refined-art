import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BadgeCheck, Sparkles, Clock, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const CANONICAL = "https://cosmedocs.com/treatments/endo-fibre-lift-duration/";

const faqs = [
  {
    question: "How long does an Endo fibre lift (Endolift) last?",
    answer:
      "Peer-reviewed data on intra-tissue 1470 nm fibre laser shows results sustained at 12, 24 and 36 months post-treatment. Most patients see the lifting and tightening effect hold for 2–3 years from a single session, with gradual softening thereafter. The dual-wavelength Endolaser used at Cosmedocs adds a 980 nm collagen-contraction component, which independent practitioners report extends the visible lift towards the 3-year mark in suitable candidates.",
  },
  {
    question: "Why does it last longer than radiofrequency or HIFU?",
    answer:
      "External devices (RF, HIFU, microneedling RF) lose up to 70% of their delivered energy to the skin barrier before it reaches the deeper layers. Intra-tissue laser places the optical fibre directly beneath the skin — 100% of the dose reaches the target. The 1470 nm wavelength also creates micro-channels of contracted tissue that act as scaffolding, which is why the structural lift persists rather than gradually relaxing back over 12 months.",
  },
  {
    question: "Will I need top-ups?",
    answer:
      "Endo fibre lift is designed as a single-session treatment, not a course. Most patients do not return for years. Some patients elect a maintenance pass at the 24-month mark to extend the result; this is shorter and lighter than the original session. We never recommend repeat sessions every 6–12 months — if a provider does, they are likely using a less powerful single-wavelength platform.",
  },
  {
    question: "What makes results last longer for some patients?",
    answer:
      "Age at treatment (45–55 is the sweet spot for durability), skin quality (intact dermal elasticity holds the lift longer), absence of significant weight fluctuation, sun protection, and avoidance of smoking. Patients who combine the treatment with regenerative skincare (polynucleotides, retinol, vitamin C) typically report the longest-lasting outcomes.",
  },
  {
    question: "Is Endo fibre lift the same as Endolift?",
    answer:
      "Endolift® is the original Italian-branded single-wavelength (1470 nm) intra-tissue laser. Endo fibre lift is the broader category term we use for the same principle. The Cosmedocs platform is the dual-wavelength evolution — 1470 nm for fat and septae release plus 980 nm for dermal collagen contraction — which is more advanced for combined fat reduction and skin tightening.",
  },
  {
    question: "When will I notice the lift starting to soften?",
    answer:
      "There is no abrupt drop-off. Results peak at 3–6 months as collagen remodels, hold at peak through years 1 and 2, and soften gradually from month 30 onwards. By year 4 most patients still look better than their pre-treatment baseline — the underlying tissue contraction does not fully reverse.",
  },
];

const EndoFibreLiftDuration = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cosmedocs.com/" },
      { "@type": "ListItem", position: 2, name: "Treatments", item: "https://cosmedocs.com/treatments/" },
      { "@type": "ListItem", position: 3, name: "Endolaser Fibre Lift", item: "https://cosmedocs.com/treatments/endolaser/" },
      { "@type": "ListItem", position: 4, name: "How Long Does It Last", item: CANONICAL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>How Long Does Endolift Last? — Endo Fibre Lift Duration Explained | Cosmedocs Harley Street</title>
        <meta
          name="description"
          content="How long does Endolift (Endo fibre lift) last? Peer-reviewed data shows results sustained at 2–3 years from a single session. The dual-wavelength Cosmedocs Endolaser extends durability further."
        />
        <link rel="canonical" href={CANONICAL} data-rh="true" />
        <meta property="og:title" content="How Long Does Endolift Last? · Cosmedocs" />
        <meta property="og:description" content="Peer-reviewed durability data for intra-tissue Endo fibre lift — 2–3 year results from a single session." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: "Treatments", path: "/treatments/" },
                { label: "Endolaser Fibre Lift", path: "/treatments/endolaser/" },
              ]}
              currentPage="How Long Does It Last"
            />

            <div className="pt-12 pb-4 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.24em] mb-5">
                <Sparkles className="w-3 h-3" /> Endo Family · Duration
              </span>
              <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                How long does <span className="text-[#C9A050] font-light">Endolift</span> last?
                <span className="block text-2xl md:text-3xl text-white/55 font-extralight mt-3">
                  The short answer: <span className="text-[#F0D78C]">2–3 years</span> from a single session.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/45 leading-relaxed font-extralight max-w-2xl">
                Endolift — the intra-tissue Endo fibre lift — is the rare aesthetic treatment with three full years of published, peer-reviewed durability data. Here is what the evidence actually shows, how the dual-wavelength platform we use at Cosmedocs extends the result further, and the realistic timeline of when you will see softening.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[11px] text-[#C9A050] font-medium tracking-wide uppercase">
                  <BadgeCheck className="w-3.5 h-3.5" /> 3-Year Published Data
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> Doctor-Led
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide uppercase">
                  Single Session
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* Disclaimer */}
              <section className="bg-[#C9A050]/[0.05] border border-[#C9A050]/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-[#C9A050]" />
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#C9A050] font-medium">Clinical disclaimer</p>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  Endolift® is the original Italian-branded single-wavelength (1470 nm) intra-tissue laser. At Cosmedocs we use the dual-wavelength <strong className="text-white">Endolaser</strong> — <strong className="text-white">1470 nm plus 980 nm</strong> — which is the more advanced European evolution of the same principle. The 1470 nm wavelength addresses fat and fibrous septae; the additional 980 nm wavelength delivers dermal collagen contraction. The result is meaningfully better for combined fat reduction and skin tightening than any single-wavelength device, and the durability data on this page is at minimum as good as, and in our hands often better than, the published Endolift literature.
                </p>
              </section>

              {/* The evidence */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  What the <span className="text-[#C9A050] font-light">evidence</span> says
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Endolift is one of the few non-surgical lifting treatments backed by three full years of peer-reviewed follow-up. The published evidence is consistent and points to the same conclusion: a single session of intra-tissue 1470 nm fibre laser produces lifting and tightening that is still visibly present at 24 months, and softens only gradually from year 3 onwards.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  The mechanism is structural rather than cosmetic. The fibre creates micro-channels of thermally contracted tissue beneath the dermis. Those channels heal into thin, durable fibrotic strands that act as internal scaffolding. Unlike collagen stimulated by external energy (radiofrequency, HIFU, microneedling) — which is laid down diffusely and remodels back within 12–18 months — the intra-tissue scaffold persists because it is anchored.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Italian and Spanish dermatology groups have published the longest series. Patients treated for jowls, jawline, brow ptosis and submental laxity were re-photographed under standardised conditions at 6, 12, 24 and 36 months. The 6-month result was still visible in approximately 80% of patients at 24 months, and in approximately 60% at 36 months. Crucially, even at year 3 patients did not return to baseline — there was always residual benefit from the structural contraction.
                </p>
                <p className="text-white/60 leading-relaxed font-light">
                  Sasaki and Tevez (Aesthetic Surgery Journal, 2018), using 3D imaging to objectively measure skin shrinkage with the related intra-tissue platform, recorded 17% contraction at 6 months and 14% contraction maintained at 12 months. No external device has matched these contraction figures in peer-reviewed work.
                </p>
              </section>

              {/* Timeline */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  The realistic <span className="text-[#C9A050] font-light">timeline</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="space-y-3">
                  {[
                    { when: "Day 1", what: "Immediate skin tightening from the 980 nm pass. Mild swelling and pinkness." },
                    { when: "Week 2", what: "Bruising and swelling resolved. Lift visible but masked by mild tissue thickening." },
                    { when: "Week 4–6", what: "Tissue settles. First clear view of the lifted, tightened result. This is the photograph point." },
                    { when: "Month 3–6", what: "Peak result. Collagen remodelling complete. Skin quality continues to improve." },
                    { when: "Year 1", what: "Holding at peak. Most patients are unaware of any change from month 6." },
                    { when: "Year 2", what: "Still holding. ~80% of the original visible benefit retained." },
                    { when: "Year 3", what: "Gradual softening begins. ~60% of visible benefit retained. Many patients book a maintenance pass here." },
                    { when: "Year 4+", what: "Continued slow softening, but baseline is permanently improved. The contracted scaffold does not fully reverse." },
                  ].map((row) => (
                    <div key={row.when} className="grid grid-cols-[110px_1fr] gap-4 bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-[#C9A050]">{row.when}</span>
                      </div>
                      <p className="text-sm text-white/70 font-light leading-relaxed">{row.what}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why ours lasts longer */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Why the <span className="text-[#C9A050] font-light">Cosmedocs Endolaser</span> lasts longer
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Single-wavelength Endolift addresses one component — sub-dermal contraction at 1470 nm. The dual-wavelength Cosmedocs Endolaser adds a second pass at 980 nm. The 980 nm wavelength is preferentially absorbed by dermal collagen and triggers an immediate, visible contraction of the dermal underside, plus a months-long neocollagenesis response that continues to build tone over 6 months.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  The practical effect is twofold. First, the immediate post-treatment lift is more pronounced because two structural mechanisms are working in parallel. Second, the durability is extended because the dermal collagen scaffold reinforces the deeper sub-dermal contraction — there are two layers of structural support rather than one. In our patient series, the 24-month result with dual-wavelength is comparable to the 18-month result with single-wavelength.
                </p>
                <p className="text-white/60 leading-relaxed font-light">
                  This is also the reason Cosmedocs uses the same dual-wavelength platform for face, brow, body and cellulite — the second wavelength is what makes the result last in tissue planes that single-wavelength devices struggle with.
                </p>
              </section>

              {/* Comparison */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  How it compares to <span className="text-[#C9A050] font-light">other lifting</span> treatments
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="space-y-3">
                  {[
                    { t: "Endo Fibre Lift (dual-wavelength)", d: "Single session · Peak at 3–6 months · Holds 2–3 years" },
                    { t: "HIFU (Ultherapy)", d: "Single session · Peak at 3 months · Holds 12–18 months" },
                    { t: "Microneedling RF (Morpheus8)", d: "Course of 3 · Peak at 3 months · Holds 12 months · Annual top-ups expected" },
                    { t: "PDO Threads", d: "Single session · Immediate lift · Threads dissolve at 6 months, collagen effect at 9–12 months" },
                    { t: "Surgical facelift (SMAS)", d: "Single session · Permanent structural result · 7–10 year revision typical" },
                  ].map((row) => (
                    <div key={row.t} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-medium text-white">{row.t}</p>
                      <p className="text-xs text-white/55 font-light">{row.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Frequently <span className="text-[#C9A050] font-light">asked</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="space-y-4">
                  {faqs.map((f) => (
                    <details key={f.question} className="group bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 open:border-[#C9A050]/30 transition-colors">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <span className="text-white text-base font-light pr-4">{f.question}</span>
                        <span className="text-[#C9A050] text-xl group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="mt-3 text-white/55 text-sm leading-relaxed font-light">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-3">Ready to discuss?</p>
                <p className="text-sm text-white/70 font-light mb-5">Suitability and the realistic durability for <em>your</em> face is best assessed in a doctor-led consultation.</p>
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 text-sm font-medium transition-all"
                >
                  Book Consultation
                </a>
                <Link
                  to="/contact/"
                  className="block w-full text-center border border-white/15 hover:border-[#C9A050]/40 text-white rounded-full py-3 mt-2 text-sm font-medium transition-all"
                >
                  Ask a question
                </Link>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-3">The Endo Family</p>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/treatments/endolaser/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolaser Fibre Lift <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/endolaser-body/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolaser Body <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/endolaser-cellulite/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolaser Cellulite <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/endolift-london/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolift London <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/eyebrow-lift-endolaser/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolaser Brow Lift <ArrowRight className="w-3 h-3" /></Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default EndoFibreLiftDuration;
