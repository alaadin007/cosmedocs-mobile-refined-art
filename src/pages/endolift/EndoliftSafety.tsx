import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle, Sparkles, Info } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  { q: "Is Endolift safe?", a: "Yes — when performed by a doctor trained in intra-tissue laser, on appropriately selected candidates. Endolift® and equivalent Endolaser platforms have a well-documented safety profile in over a decade of published clinical use. Most adverse events are minor and self-limiting (bruising, swelling, transient numbness). Serious complications are rare." },
  { q: "What are the risks of Endolift?", a: "Common: bruising, mild swelling, tenderness, small entry-point marks, temporary numbness. Uncommon: prolonged swelling, hyperpigmentation in darker skin types, lumps in the treated plane. Rare: infection, small thermal burn, neuropraxia (nerve irritation, almost always temporary)." },
  { q: "Is the laser fibre actually inside my skin?", a: "Yes — that's the point. A fibre thinner than a hair is passed through a tiny entry point and runs in the deep dermis or superficial fat. The laser is delivered at the target depth rather than through the skin surface, which is why downtime is shorter than with most resurfacing lasers." },
  { q: "Will I have visible scars?", a: "No. The fibre enters through pinpoint access points that close on their own and are usually invisible within 1–2 weeks." },
  { q: "Who is not a candidate?", a: "Pregnant or breastfeeding patients; active skin infection in the treatment area; uncontrolled diabetes or autoimmune disease; patients on certain photosensitising medications; severe sagging better served by a surgical lift." },
  { q: "Why does the operator matter so much?", a: "Outcomes from intra-tissue laser are operator-dependent — fibre depth, energy delivered, withdrawal speed and pattern all affect both result and safety. A doctor with formal Endolaser training will treat conservatively in vulnerable zones (over the facial nerve, over named vessels) and use lower energy on darker skin types." },
  { q: "What's your safety record?", a: "At Cosmedocs, all Endolaser procedures are performed by a clinician trained as a Lead Trainer for the device at the Harley Street Institute. We have not had a serious adverse event. Minor bruising and swelling are expected; we manage these with a doctor-led aftercare protocol." },
];

export default function EndoliftSafety() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <Helmet>
        <title>Is Endolift Safe? Doctor's Guide to Risks & Side Effects | Cosmedocs</title>
        <meta name="description" content="Is Endolift safe? A doctor's honest guide to side effects, risks, candidacy and why operator training matters more than the brand of the device. London." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/endolift-london/safety/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link><span>/</span>
              <Link to="/treatments/endolift-london/" className="hover:text-white/70">Endolift London</Link><span>/</span>
              <span className="text-white/60">Safety</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <ShieldCheck className="w-3 h-3" /> Safety · 8 min read
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Is Endolift safe? <span className="text-[#C9A050]">A doctor's honest answer.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 font-light leading-relaxed">
                Endolift — and the wider category of <strong className="text-white">intra-tissue laser fibre lifting</strong> — has an excellent safety record when performed by a properly trained doctor on the right patient. The risks are real, knowable, and almost entirely operator-dependent. Here's what we tell every patient before they consent.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trademark + scope disclosure */}
        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">Editorial note.</strong> Endolift® is a registered trademark of Eufoton. At Cosmedocs we deliver an equivalent dual-wavelength intra-tissue laser lifting treatment on a different UKCA &amp; CE-marked platform — we refer to ours as{" "}
              <Link to="/treatments/endolaser/" className="text-[#C9A050] underline underline-offset-2">Endolaser (Laser Fibre Lift)</Link>. The safety principles below apply to the technology category as a whole.
            </p>
          </div>
        </section>

        {/* The five things to ask */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">The five questions that determine whether <em>your</em> treatment will be safe</h2>
            <ol className="mt-6 space-y-4 text-white/75 font-light leading-relaxed text-sm sm:text-base list-decimal pl-5">
              <li><strong className="text-white">Will a doctor perform it, or a non-medical practitioner?</strong> Intra-tissue laser is a regulated medical procedure. In the UK, a GMC-registered doctor with formal training is the safest hands.</li>
              <li><strong className="text-white">How many cases has the operator performed?</strong> Ask for an honest number. Beneath ~50 cases, complication rates are higher.</li>
              <li><strong className="text-white">Is the device UKCA &amp; CE marked?</strong> If not, it should not be in use in the UK or EU. Ours is.</li>
              <li><strong className="text-white">Is there a medical aftercare protocol?</strong> A 24-hour clinical contact, a written do/don't list, and a face-to-face review at week 2 should be standard.</li>
              <li><strong className="text-white">What is the plan if something goes wrong?</strong> The honest clinic will tell you exactly what their bruise/burn/lump pathway is. The dishonest one will pretend there isn't one.</li>
            </ol>
          </div>
        </section>

        {/* Side effects */}
        <section className="px-4 sm:px-6 py-12 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Side effects — what's normal, what isn't</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-[#C9A050] mb-2" />
                <h3 className="font-medium">Expected (resolves on its own)</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/65">
                  <li>· Mild swelling, 5–10 days</li>
                  <li>· Bruising at entry/treatment points</li>
                  <li>· Tightness or pulling sensation, 1–2 weeks</li>
                  <li>· Transient numbness in skin patches</li>
                  <li>· Small pinpoint marks, fade by 14 days</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-[#C9A050] mb-2" />
                <h3 className="font-medium">Call us same day if</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/65">
                  <li>· Sudden one-sided swelling beyond day 7</li>
                  <li>· Spreading redness with fever (possible infection)</li>
                  <li>· Skin blistering, blanching or open wound</li>
                  <li>· Drooping of the lip or eyelid (rare nerve irritation)</li>
                  <li>· Severe, escalating pain rather than tenderness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA to recovery + treatment */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Continue reading</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extralight">Already cleared the safety question?</h3>
            <p className="mt-2 text-white/65 font-light text-sm">See what the next 14 days actually look like, or read the parent treatment page in full.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/treatments/endolift-london/recovery/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform">
                Recovery &amp; aftercare guide <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/treatments/endolift-london/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">
                Endolift London — main page →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Common safety questions</h2>
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
