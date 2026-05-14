import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowRight, Info, Images, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REASONS = [
  { title: "Migration into the cheek", body: "Old or over-volumised tear trough filler can drift outward and downward, creating a permanent 'puffy' or 'baggy' look that the patient mistakes for a worsening eye bag." },
  { title: "Tyndall effect (blue tint)", body: "Filler placed too superficially shows blue through the thin under-eye skin. Hyalase reverses it in minutes." },
  { title: "Lumps or asymmetry", body: "Small visible nodules that didn't soften by week 4–6, or a clear left-vs-right difference, can be selectively dissolved." },
  { title: "Vascular event (emergency)", body: "Sudden blanching, severe pain or vision change after injection requires hyaluronidase within hours. We carry it on-site at every clinic and we accept emergency referrals." },
];

const FAQ = [
  { q: "Can old tear trough filler really be dissolved?", a: "Yes. Hyaluronidase (Hyalase) breaks down hyaluronic-acid filler within 24–48 hours. Some patients need a second pass at two weeks for stubborn deposits, particularly older filler that has fibrosed." },
  { q: "Will dissolving make my under-eyes look worse?", a: "Initially the area can look hollow for 2–3 days while the saline carrier and natural HA clear. By day 7 the under-eye returns to its true baseline — which is often better than the over-filled state." },
  { q: "How much does it cost to dissolve tear trough filler?", a: "From £250 per session at Cosmedocs. A patch test is mandatory before the dissolving session. Two sessions are sometimes needed for older or thicker filler." },
  { q: "How long after dissolving can I have new filler?", a: "We wait a minimum of 2 weeks before re-treating, so all the original filler and any residual hyaluronidase have cleared. Six weeks is ideal if there is no time pressure." },
  { q: "Is hyaluronidase safe?", a: "Hyaluronidase is licensed and has been used for decades. The main risk is allergy (~1 in 1,000), which is why we patch test. It does not affect your own natural hyaluronic acid in any lasting way — your tissue replaces it within days." },
  { q: "What if my filler is non-HA (Radiesse, Sculptra, PMMA)?", a: "Those cannot be dissolved with hyaluronidase. We assess case-by-case — sometimes intralesional steroid or surgical removal is required. We will tell you honestly if dissolving is not the right route." },
];

export default function TearTroughDissolving() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <Helmet>
        <title>Dissolving Tear Trough Filler — Hyalase London | Cosmedocs</title>
        <meta name="description" content="Dissolve old, migrated or lumpy tear trough filler with hyaluronidase at Cosmedocs London. Doctor-led, patch-tested, with emergency Hyalase available on-site for vascular events." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/tear-trough-filler/dissolving/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link><span>/</span>
              <Link to="/treatments/tear-trough-filler/" className="hover:text-white/70">Tear Trough Filler</Link><span>/</span>
              <span className="text-white/60">Dissolving</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <ShieldCheck className="w-3 h-3" /> Doctor-led · Hyalase
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Dissolving tear trough filler —{" "}
                <span className="text-[#C9A050]">elective and emergency.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 font-light leading-relaxed">
                Old under-eye filler is the most common reason patients come to us looking 'tired'. We dissolve, reset, and — only if appropriate — re-treat. We also accept emergency Hyalase referrals from other clinics.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">See examples of corrected cases.</strong>{" "}
              <Link to="/before-after/dermal-fillers/tear-trough/" className="text-[#C9A050] underline underline-offset-2 inline-flex items-center gap-1">
                <Images className="w-3.5 h-3.5" /> Tear trough before &amp; after gallery
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
              <strong className="text-white">Vascular emergency?</strong> If you have sudden severe pain, blanching, mottled skin or any vision change after a recent filler appointment, contact us or attend A&amp;E immediately. We hold emergency Hyalase appointments daily at our Harley Street clinic.
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
              <Link to="/treatments/tear-trough-filler/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Tear trough main page →</Link>
              <Link to="/treatments/tear-trough-filler/aftercare/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Aftercare &amp; recovery →</Link>
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
