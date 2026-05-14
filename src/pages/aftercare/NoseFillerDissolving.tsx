import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowRight, Info, Images, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REASONS = [
  { title: "Filler creep along the bridge", body: "Old, repeated bridge filler can spread laterally and widen the nose — the opposite of what the patient originally wanted. Selective dissolving restores a defined dorsum." },
  { title: "Tip heaviness or 'rounding'", body: "Filler placed in the tip without proper structural support can drift inferiorly and round off the projection. Dissolving and re-treating with a thread or PCL-supported approach is often the right answer." },
  { title: "Shape no longer flatters", body: "Faces change. Filler that suited the patient at 28 may not suit them at 35. We dissolve to baseline and decide together whether to re-treat or refer for surgical rhinoplasty." },
  { title: "Vascular event (emergency)", body: "The nose is the highest-risk facial zone for vascular occlusion. Sudden blanching, severe pain or any vision change requires hyaluronidase within hours. We hold emergency appointments daily." },
];

const FAQ = [
  { q: "Can old nose filler be dissolved?", a: "Yes — provided it is hyaluronic acid. Hyalase breaks it down within 24–48 hours. Permanent fillers (silicone, PMMA, Bio-Alcamid) cannot be dissolved this way and require surgical assessment." },
  { q: "Will my nose look worse after dissolving?", a: "For the first 3–5 days the nose looks slightly deflated as the filler and saline carrier clear. By week 1 you see your true baseline shape. Most patients are surprised by how unchanged their underlying nose actually is." },
  { q: "How much does it cost to dissolve nose filler?", a: "From £250 per session at Cosmedocs, including the mandatory patch test. Older or thicker filler sometimes needs two sessions, two weeks apart." },
  { q: "When can I have new nose filler after dissolving?", a: "Minimum two weeks. Six weeks is ideal so you can see your true baseline and plan a clean, structured re-treatment from scratch." },
  { q: "Can hyaluronidase damage my own tissue?", a: "It briefly affects your skin's natural hyaluronic acid, which your body replenishes within days. There is no lasting effect on healthy tissue at the doses used clinically." },
  { q: "Why is the nose considered higher risk?", a: "The blood supply to the nose connects with vessels supplying the eye. A misplaced filler in this zone can theoretically cause sight loss. Doctor-led, cannula-based technique with on-site Hyalase reduces this risk dramatically." },
];

export default function NoseFillerDissolving() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <Helmet>
        <title>Dissolving Nose Filler — Hyalase London | Cosmedocs</title>
        <meta name="description" content="Dissolve old, migrated or unflattering nose filler with hyaluronidase. Doctor-led at Cosmedocs London with on-site emergency Hyalase for vascular events. Patch-tested, evidence-led." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/dermal-fillers/nose/dissolving/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link><span>/</span>
              <Link to="/treatments/dermal-fillers/nose/" className="hover:text-white/70">Nose Filler</Link><span>/</span>
              <span className="text-white/60">Dissolving</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <ShieldCheck className="w-3 h-3" /> Doctor-led · Hyalase
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Dissolving nose filler —{" "}
                <span className="text-[#C9A050]">elective and emergency.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 font-light leading-relaxed">
                The nose is the highest-stakes filler zone on the face — both for shape and for safety. We dissolve old filler, reset to baseline, and only re-treat if it is the right call for your face today.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">See examples of corrected cases.</strong>{" "}
              <Link to="/before-after/dermal-fillers/nose/" className="text-[#C9A050] underline underline-offset-2 inline-flex items-center gap-1">
                <Images className="w-3.5 h-3.5" /> Nose filler before &amp; after gallery
              </Link>{" "}
              — including dissolving and re-treatment cases.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">When dissolving is the right answer</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {REASONS.map((r) => (
                <div key={r.title} className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
                  <h3 className="font-medium text-[#C9A050]">{r.title}</h3>
                  <p className="mt-2 text-sm text-white/70 font-light leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-10 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-red-500/30 bg-red-500/[0.04] p-5 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-white/80 leading-relaxed">
              <strong className="text-white">Vascular emergency?</strong> Sudden severe pain, blanching, mottled skin or any vision change after recent nose filler is a medical emergency. Contact us immediately or attend A&amp;E. We carry emergency Hyalase on-site at Harley Street.
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Reset, then refine</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extralight">Book a dissolving consultation</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform">
                Book dissolving consult <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/treatments/dermal-fillers/nose/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Nose filler main page →</Link>
              <Link to="/treatments/dermal-fillers/nose/aftercare/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Aftercare &amp; recovery →</Link>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Common dissolving questions</h2>
            <Accordion type="single" collapsible className="mt-5 space-y-2">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`q${i}`} className="border border-white/10 rounded-xl bg-white/[0.02] px-4">
                  <AccordionTrigger className="text-left font-light text-white/85 hover:no-underline py-3 text-sm">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-white/65 text-sm font-light leading-relaxed pb-4">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
}
