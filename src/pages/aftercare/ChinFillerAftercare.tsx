import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Sparkles, ArrowRight, Info, Images } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TIMELINE = [
  { day: "Day 0", title: "Treatment day", body: "Pinpoint redness on the chin and slight firmness. The new projection is visible immediately. Mild ache as anaesthetic wears off — settles in 2–3 hours. Sleep slightly elevated." },
  { day: "Day 1–3", title: "Mild swelling and possible bruising", body: "Most swelling is limited to the chin pad. Bruising is uncommon with cannula technique but can appear at the entry point under the jawline. Avoid hot showers, hot drinks and alcohol." },
  { day: "Day 4–7", title: "Profile settles", body: "Swelling clears almost completely. Chin and jawline contour you see at day 7 is close to your final result. Make-up, light cardio and skincare resume." },
  { day: "Week 2", title: "Clinical review", body: "Photographs repeated. Any minor asymmetry between left and right is corrected with a small top-up — included in your treatment fee." },
  { day: "Week 4", title: "Final settled result", body: "Filler has fully integrated with the chin pad and along the mandibular border. Compare against your pre-treatment profile photograph." },
  { day: "Month 12–18", title: "Maintenance window", body: "Most chin filler results last 12–18 months. Bony chin projection often holds longer than soft-tissue zones. We review and decide together." },
];

const DOS = [
  "Sleep slightly elevated for 2–3 nights",
  "Cool compress (not ice on bare skin) for the first 24h",
  "Paracetamol if needed; avoid ibuprofen and aspirin for 48h",
  "SPF 50 daily and gentle cleanser",
  "Soft food for the first 24 hours if you feel firmness when chewing",
];

const DONTS = [
  "No firm chin-strap masks or rubbing for 14 days",
  "No exercise, hot yoga, sauna or steam for 48–72 hours",
  "No facials, peels or microneedling on the chin for 4 weeks",
  "No alcohol for 48 hours",
  "No dental cleaning or dental work that involves chin pressure for 7 days",
];

const FAQ = [
  { q: "How long does swelling last after chin filler?", a: "Most swelling settles within 5–7 days. Subtle residual firmness in the chin pad can last 2–3 weeks before the final shape is fully refined." },
  { q: "When can I shave or apply make-up after chin filler?", a: "Light make-up from 24 hours. Wet shaving from 48 hours; electric shaving from day 1 with very gentle pressure. Avoid firm pressure or stretching the skin for the first week." },
  { q: "Will chin filler change how I chew?", a: "Briefly. Some patients notice a 'firm' feeling when biting hard food in the first 48–72 hours as filler integrates. Soft food for 24 hours usually resolves it." },
  { q: "When can I exercise after chin filler?", a: "Light walking from day 2. Cardio and weights from day 5. Hot yoga and sauna at day 7." },
  { q: "Can I sleep on my side?", a: "Sleep on your back for the first 2–3 nights so filler is not displaced. Side-sleeping is fine after 72 hours." },
  { q: "What is the most common mistake post-treatment?", a: "Resting the chin in your hand at a desk. Repeated pressure on freshly placed chin filler is the single most common reason for early asymmetry. Be aware of it for 14 days." },
];

export default function ChinFillerAftercare() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <Helmet>
        <title>Chin Filler Aftercare & Recovery — Day-by-Day | Cosmedocs</title>
        <meta name="description" content="Doctor-written chin filler recovery timeline. Swelling, when to shave, when to exercise, how to sleep — and the do/don't checklist we give every patient at our London clinic." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/chin-filler/aftercare/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link><span>/</span>
              <Link to="/treatments/chin-filler/" className="hover:text-white/70">Chin Filler</Link><span>/</span>
              <span className="text-white/60">Aftercare &amp; Recovery</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <Clock className="w-3 h-3" /> Aftercare · Day-by-day
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Chin filler recovery —{" "}
                <span className="text-[#C9A050]">honest day-by-day timeline.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 font-light leading-relaxed">
                Chin filler is one of the most predictable lower-face treatments — but the result is easily blurred by the small habits we don't notice (resting your face on your hand, side-sleeping). This is the brief our doctors give every patient.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">See the result before you commit.</strong>{" "}
              <Link to="/before-after/dermal-fillers/chin/" className="text-[#C9A050] underline underline-offset-2 inline-flex items-center gap-1">
                <Images className="w-3.5 h-3.5" /> Chin filler before &amp; after gallery
              </Link>{" "}
              — verified Cosmedocs cases shot at week 4.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">The recovery timeline, day by day</h2>
            <ol className="mt-8 relative border-l border-white/10 space-y-6">
              {TIMELINE.map((t) => (
                <li key={t.day} className="pl-6 relative">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#C9A050]" />
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] font-medium">{t.day}</div>
                  <h3 className="mt-1 font-light text-lg">{t.title}</h3>
                  <p className="mt-1 text-white/65 text-sm leading-relaxed font-light">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-12 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">The aftercare checklist we give every patient</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="font-medium text-[#C9A050]">Do</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-white/70 font-light">{DOS.map(d => <li key={d}>· {d}</li>)}</ul>
              </div>
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="font-medium text-[#C9A050]">Don't</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-white/70 font-light">{DONTS.map(d => <li key={d}>· {d}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Plan your treatment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extralight">Researching, reviewing, or ready to book?</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/treatments/chin-filler/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform">
                Chin filler — main page <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/before-after/dermal-fillers/chin/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Before &amp; after gallery →</Link>
              <Link to="/treatments/chin-filler/dissolving/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Dissolving filler →</Link>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Common recovery questions</h2>
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
