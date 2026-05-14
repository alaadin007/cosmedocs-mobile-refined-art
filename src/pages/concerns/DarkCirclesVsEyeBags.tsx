import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight } from "lucide-react";

export default function DarkCirclesVsEyeBags() {
  const seo = generateSEOMetadata(
    "Dark Circles vs Eye Bags — What's the Difference? | Cosmedocs",
    "Dark circles and eye bags need different treatments. Doctor-led explainer + the right protocol for each. Tear trough filler, polynucleotides, blepharoplasty.",
    "/concerns/dark-circles-vs-eye-bags/"
  );

  const faqs = [
    { q: "Are dark circles the same as eye bags?", a: "No. Dark circles are a colour problem (pigment, vascular shadowing, or hollow casting a shadow). Eye bags are a structural problem (fat herniation or fluid retention creating a bulge). They look similar but need different treatments." },
    { q: "Will tear trough filler fix eye bags?", a: "Only if the 'bag' is actually a hollow casting a shadow. True fat-pad herniation under the eye should not be filled — it usually needs surgical lower blepharoplasty or, in selected cases, polynucleotides for skin quality." },
    { q: "What about pigmented dark circles?", a: "These respond best to a layered protocol: prescription pigment-regulating skincare (hydroquinone, retinoid, vitamin C), occasionally chemical peels, and polynucleotides to thicken the under-eye skin so vascular shadowing is less visible." },
    { q: "How do I know which I have?", a: "Press gently below the eye and look in a mirror. If the shadow disappears with fingertip pressure, it's a hollow (filler may help). If a bulge remains, it's herniated fat (filler will not help). A consultation confirms." },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" data-rh="true" href={seo.canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: seo.title,
          url: seo.canonical,
          mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        })}</script>
      </Helmet>

      <main className="bg-[#F5F5F3] text-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Concerns", href: "/concerns/" }, { label: "Dark Circles vs Eye Bags" }]} />
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Concern · Periorbital</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight leading-[1.05]">
              Dark circles or eye bags?{" "}
              <span className="italic font-light">Different problem, different fix.</span>
            </h1>
            <p className="mt-6 text-lg text-black/65 max-w-2xl font-light leading-relaxed">
              These two terms are used interchangeably online — but in clinic they're <strong>completely different findings</strong> that respond to <strong>completely different treatments</strong>. Filling the wrong one is the most common cause of an "overdone" under-eye result.
            </p>
          </motion.div>
        </section>

        <section className="bg-white border-y border-black/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-6">
            <div className="border border-black/10 rounded-2xl p-6 bg-[#FAFAF8]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A050] font-medium">A colour issue</span>
              <h2 className="mt-2 text-2xl font-light">Dark Circles</h2>
              <p className="mt-3 text-sm text-black/65 leading-relaxed">
                Pigment, vascular shadowing, or a tear trough hollow casting a shadow. The skin <em>looks</em> dark but the under-eye is anatomically flat or sunken.
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider text-black/45">Usually treated with</p>
              <ul className="mt-2 text-sm space-y-1 text-black/70">
                <li>· Tear trough filler (when hollowing)</li>
                <li>· Polynucleotides (skin thickness)</li>
                <li>· Pigment-regulating skincare</li>
              </ul>
            </div>
            <div className="border border-black/10 rounded-2xl p-6 bg-[#FAFAF8]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A050] font-medium">A structural issue</span>
              <h2 className="mt-2 text-2xl font-light">Eye Bags</h2>
              <p className="mt-3 text-sm text-black/65 leading-relaxed">
                Forward herniation of the orbital fat pads or fluid retention. There is a <em>bulge</em> — pinch the area and it stands out.
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider text-black/45">Usually treated with</p>
              <ul className="mt-2 text-sm space-y-1 text-black/70">
                <li>· Lower blepharoplasty (gold standard)</li>
                <li>· Polynucleotides (skin support)</li>
                <li>· <strong>Not</strong> filler in the bag itself</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h2 className="text-3xl sm:text-4xl font-extralight">Choose your pathway</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { t: "Tear Trough Filler", d: "For true hollowing under the eye casting a shadow.", to: "/treatments/tear-trough-filler/" },
              { t: "Polynucleotides", d: "Regenerates and thickens delicate under-eye skin.", to: "/treatments/polynucleotide/" },
              { t: "Lower Blepharoplasty", d: "Surgical correction for true fat-pad herniation.", to: "/treatments/blepharoplasty/" },
            ].map(c => (
              <Link key={c.t} to={c.to} className="group block border border-black/10 rounded-2xl p-6 bg-white hover:border-[#C9A050]/60 transition-colors">
                <h3 className="font-medium text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{c.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium">See protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h2 className="text-3xl font-extralight">Common questions</h2>
          <div className="mt-6 divide-y divide-black/10">
            {faqs.map(f => (
              <details key={f.q} className="py-4 group">
                <summary className="cursor-pointer font-medium list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-[#C9A050] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-black/65 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
