import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight, Droplets, Sparkles, Layers, ShieldCheck } from "lucide-react";

const faqs = [
  { q: "What actually causes dark circles?", a: "Three things, often together. Pigmentation (melanin in the under-eye skin), vascular shadowing (thin skin showing the muscle and vessels beneath as a blue–purple cast), and structural hollowing (the tear trough casting a shadow). Each one needs a different treatment — which is why a single-treatment approach rarely fully clears them." },
  { q: "Will tear trough filler alone fix my dark circles?", a: "Only if the cause is purely hollowing. For pigmented or vascular dark circles, filler does not address the colour problem and can sometimes make it look worse by reflecting light through translucent skin. A diagnostic consultation determines which protocol fits." },
  { q: "What is the Under-Eye Reset protocol?", a: "A three-session combination programme designed for pigmented and vascular dark circles: a brightening medical peel, microneedling with our prescription brightening cocktail, plus polynucleotides and exosomes to thicken and regenerate under-eye skin. £1,500 for the full course of 3 sessions." },
  { q: "Can I combine the Under-Eye Reset with tear trough filler?", a: "Yes — and we often do, when hollowing and pigmentation coexist. Filler restores the structural shadow, the Reset protocol corrects the colour and skin quality. Sequencing matters; we plan it at consultation." },
  { q: "How long until I see results?", a: "Visible brightening after session two (around week 6). Full result settles 8–12 weeks after the third session, as polynucleotides and exosomes complete their regenerative cycle." },
];

export default function DarkCircles() {
  const seo = generateSEOMetadata(
    "Dark Circles Treatment London | Cosmedocs Harley Street",
    "Doctor-led dark circle treatment in London. Three causes, three protocols — including the Under-Eye Reset (peel + microneedling + polynucleotides + exosomes, £1,500 / 3 sessions).",
    "/concerns/dark-circles/"
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: seo.title,
    url: seo.canonical,
    about: { "@type": "MedicalCondition", name: "Periorbital hyperpigmentation (dark circles)" },
    mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" data-rh="true" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main className="bg-[#F5F5F3] text-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Concerns", href: "/concerns/" }, { label: "Dark Circles" }]} />
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Concern · Periorbital</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight leading-[1.05]">
              Dark circles. <span className="italic font-light">Diagnosed first, treated properly.</span>
            </h1>
            <p className="mt-6 text-lg text-black/65 max-w-2xl font-light leading-relaxed">
              Most dark circles aren't one problem — they're three overlapping problems. <strong>Pigmentation, vascular shadowing, and structural hollowing</strong>. Treating the wrong one is why over-the-counter creams and even single-treatment clinic visits rarely deliver. We diagnose what you actually have, then match the right protocol.
            </p>
            <p className="mt-4 text-sm text-black/45 italic">Aesthetics by Cosmedocs — invisible art.</p>
          </motion.div>
        </section>

        {/* Three causes */}
        <section className="bg-white border-y border-black/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <h2 className="text-2xl sm:text-3xl font-extralight">The three causes</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {[
                { icon: <Layers className="w-5 h-5" />, t: "Pigmentation", d: "Excess melanin in the under-eye skin — common in Mediterranean, South Asian, Middle Eastern and Afro-Caribbean skin. Brown, not blue.", fix: "Under-Eye Reset Protocol" },
                { icon: <Droplets className="w-5 h-5" />, t: "Vascular shadowing", d: "Thin, translucent skin showing the underlying muscle and vessels as a blue–purple cast. Worse with fatigue, dehydration, allergies.", fix: "Under-Eye Reset Protocol" },
                { icon: <Sparkles className="w-5 h-5" />, t: "Structural hollowing", d: "Tear trough volume loss creates a shadow — the skin colour is normal, but the dip casts dark. Press gently and the 'dark circle' lightens.", fix: "Tear trough filler" },
              ].map(c => (
                <div key={c.t} className="border border-black/10 rounded-2xl p-6 bg-[#FAFAF8]">
                  <div className="text-[#C9A050]">{c.icon}</div>
                  <h3 className="mt-3 text-xl font-light">{c.t}</h3>
                  <p className="mt-2 text-sm text-black/65 leading-relaxed">{c.d}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-black/40">Best treated with</p>
                  <p className="mt-1 text-sm font-medium text-[#C9A050]">{c.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Protocols */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h2 className="text-3xl sm:text-4xl font-extralight">Choose your pathway</h2>
          <p className="mt-3 text-black/55 max-w-2xl">Selected at consultation after a clinical assessment under daylight-balanced lighting.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <Link to="/treatments/under-eye-reset/" className="group block border border-[#C9A050]/40 rounded-2xl p-7 bg-gradient-to-br from-[#FAF6EE] to-white hover:border-[#C9A050] transition-colors">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A050] font-medium">Flagship protocol</span>
              <h3 className="mt-2 text-2xl font-light">The Under-Eye Reset</h3>
              <p className="mt-3 text-sm text-black/65 leading-relaxed">
                Brightening medical peel + microneedling with prescription brightening cocktail + polynucleotides + exosomes. The full aesthetic-medicine response to pigmented and vascular dark circles.
              </p>
              <p className="mt-4 text-lg font-light"><span className="text-[#C9A050]">£1,500</span> <span className="text-sm text-black/50">/ 3 sessions</span></p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium">See protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>

            <Link to="/treatments/tear-trough-filler/" className="group block border border-black/10 rounded-2xl p-7 bg-white hover:border-[#C9A050]/60 transition-colors">
              <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 font-medium">For hollowing only</span>
              <h3 className="mt-2 text-2xl font-light">Tear Trough Filler</h3>
              <p className="mt-3 text-sm text-black/65 leading-relaxed">
                If the dark circle is a shadow from volume loss — not a colour problem — hyaluronic acid filler restores the contour and the shadow disappears with it.
              </p>
              <p className="mt-4 text-sm text-black/55">From £450</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium">See protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>

          <div className="mt-5 border border-black/10 rounded-2xl p-6 bg-white">
            <p className="text-sm text-black/65 leading-relaxed">
              <strong>Combined cases</strong> — when hollowing coexists with pigmentation (very common over 35), we sequence both: filler first to restore structure, then the Under-Eye Reset for skin quality. Planned at consultation.
            </p>
          </div>
        </section>

        {/* Trust */}
        <section className="bg-white border-t border-black/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, t: "Doctor-led diagnosis", d: "Every dark-circle consultation is performed by a GMC-registered doctor — not an injector." },
              { icon: <Sparkles className="w-5 h-5" />, t: "Truth-first protocols", d: "If a treatment won't work for your pattern, we'll tell you. Pigmentation cases are not sold filler." },
              { icon: <Layers className="w-5 h-5" />, t: "Harley Street since 2007", d: "Nineteen years of periorbital aesthetics. Over a million treatments performed across the group." },
            ].map(t => (
              <div key={t.t}>
                <div className="text-[#C9A050]">{t.icon}</div>
                <h3 className="mt-3 font-medium">{t.t}</h3>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{t.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h2 className="text-3xl font-extralight">Common questions</h2>
          <div className="mt-6 divide-y divide-black/10">
            {faqs.map(f => (
              <details key={f.q} className="py-4 group">
                <summary className="cursor-pointer font-medium list-none flex justify-between items-center gap-4">
                  {f.q}
                  <span className="text-[#C9A050] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-black/65 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0a0a] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
            <p className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Your consultation begins here</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extralight">Find out which kind of dark circle you actually have.</h2>
            <p className="mt-4 text-white/55 max-w-xl mx-auto">A 30-minute clinical assessment under daylight-balanced lighting — and a written protocol you can take away.</p>
            <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-7 py-3 text-sm font-medium transition-colors">
              Book a consultation
            </a>
          </div>
        </section>

        {/* Hidden SEO context */}
        <div className="sr-only" aria-hidden="false">
          <h2>Dark circles treatment London — Cosmedocs Harley Street</h2>
          <p>Dark circles under eyes treatment in London at Cosmedocs Harley Street since 2007. We treat periorbital hyperpigmentation, vascular dark circles, melanin-pigmented under-eye skin, and tear trough hollowing. Our Under-Eye Reset protocol combines a brightening medical peel, microneedling with a prescription brightening cocktail (tranexamic acid, vitamin C, kojic acid, niacinamide), polynucleotides for under-eye skin regeneration, and exosomes for dark circles — three sessions for £1,500. Suitable for pigmented dark circles in South Asian, Middle Eastern, Mediterranean and Afro-Caribbean skin, and for blue–purple vascular dark circles. For structural hollowing we offer tear trough filler. Doctor-led assessment, GMC-registered injectors, 10 Harley Street, London W1G 9PF. Related searches: exosomes dark circles London, polynucleotides under eyes, pigmentation under eyes treatment, dark circles peel London, microneedling dark circles, dark eye circle treatment Harley Street.</p>
        </div>
      </main>
    </>
  );
}
