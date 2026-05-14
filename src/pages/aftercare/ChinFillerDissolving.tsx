import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowRight, Info, Images, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REASONS = [
  { title: "Over-projection or 'witch chin'", body: "Old or repeated chin filler can over-project the chin point, creating a sharp, witch-like silhouette that ages the lower face. Selective dissolving restores natural projection." },
  { title: "Filler migration into the labiomental fold", body: "Filler that has crept upward into the crease between lip and chin often reads as a 'soft' chin pad. Dissolving in this zone is one of the most rewarding cases we see." },
  { title: "Asymmetry between left and right", body: "Left-vs-right discrepancy that didn't settle by week 6 can be selectively dissolved on the heavier side rather than adding more on the lighter side." },
  { title: "Vascular event (emergency)", body: "Sudden blanching, severe pain or vision change after a recent chin or jawline appointment requires hyaluronidase within hours. We carry it on-site." },
];

const FAQ = [
  { q: "Can old chin filler be dissolved?", a: "Yes — provided it is hyaluronic acid. Hyalase breaks it down within 24–48 hours. Permanent fillers (silicone, PMMA) and biostimulators (Radiesse, Sculptra) cannot be dissolved this way." },
  { q: "Will my chin look weak after dissolving?", a: "For the first week the chin can look slightly less projected as the filler and saline carrier clear. By week 1–2 you see your true bony chin shape — which is often a far better starting point for any re-treatment." },
  { q: "How much does it cost to dissolve chin filler?", a: "From £250 per session at Cosmedocs, including the mandatory patch test. Older or larger volumes sometimes need a second session two weeks later." },
  { q: "When can I have new chin filler after dissolving?", a: "Minimum two weeks. Six weeks is ideal so you can see the true baseline and plan a clean, structured re-treatment." },
  { q: "Is hyaluronidase safe to use in the lower face?", a: "Yes. The chin and jawline are very forgiving zones for Hyalase. The main risk is allergy (~1 in 1,000), which is why we patch test 30 minutes beforehand." },
  { q: "What if I think my filler is biostimulator (Radiesse, Sculptra)?", a: "Bring any records you have. Biostimulators cannot be dissolved with hyaluronidase. Some respond to intralesional steroid; others have to settle on their own. We will be honest about what is and isn't possible." },
];

export default function ChinFillerDissolving() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <Helmet>
        <title>Dissolving Chin Filler — Hyalase London | Cosmedocs</title>
        <meta name="description" content="Dissolve old, over-projected or migrated chin filler with hyaluronidase at Cosmedocs London. Doctor-led, patch-tested, with on-site emergency Hyalase for vascular events." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/chin-filler/dissolving/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link><span>/</span>
              <Link to="/treatments/chin-filler/" className="hover:text-white/70">Chin Filler</Link><span>/</span>
              <span className="text-white/60">Dissolving</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <ShieldCheck className="w-3 h-3" /> Doctor-led · Hyalase
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Dissolving chin filler —{" "}
                <span className="text-[#C9A050]">elective and emergency.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 font-light leading-relaxed">
                Over-filled or migrated chin filler is one of the most common reasons new patients walk into our clinic. We dissolve, reset to bony baseline, and only re-treat if the lower-face balance genuinely needs it.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">See examples of corrected cases.</strong>{" "}
              <Link to="/before-after/dermal-fillers/chin/" className="text-[#C9A050] underline underline-offset-2 inline-flex items-center gap-1">
                <Images className="w-3.5 h-3.5" /> Chin filler before &amp; after gallery
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
              <strong className="text-white">Vascular emergency?</strong> Sudden severe pain, blanching, mottled skin or any vision change after recent chin or jawline filler is a medical emergency. Contact us or attend A&amp;E immediately. We hold emergency Hyalase appointments daily at Harley Street.
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
              <Link to="/treatments/chin-filler/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Chin filler main page →</Link>
              <Link to="/treatments/chin-filler/aftercare/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Aftercare &amp; recovery →</Link>
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
