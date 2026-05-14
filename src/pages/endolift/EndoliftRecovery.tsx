import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Sparkles, ArrowRight, Info } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const TIMELINE = [
  { day: "Day 0", title: "Treatment day", body: "Pinpoint entry marks. Local anaesthesia wears off in 2–3 hours. Mild burning warmth is normal. Cool compresses 10 min on / 20 off for the first evening. Sleep slightly elevated." },
  { day: "Day 1–2", title: "Peak swelling", body: "Most patients are recognisably swollen, especially under the jawline and chin. Bruising may appear. Continue cool compresses. Sleep elevated. No alcohol, no exercise, no facials." },
  { day: "Day 3–5", title: "Swelling settles, bruises develop", body: "Visible swelling reduces by ~60%. Bruises change colour (purple → green → yellow). Most patients return to work or social life with light makeup. Avoid heat, saunas, hot yoga." },
  { day: "Day 7", title: "Most swelling gone", body: "Skin may feel tight and slightly hard in the treated zone — that's collagen contracting and is the desired effect. Gentle facial massage is OK from day 7 only if your doctor approves." },
  { day: "Week 2", title: "Clinical review", body: "Face-to-face review at the clinic. Photographs repeated. Any persistent lumps are addressed manually. Make-up, exercise, facials all back to normal." },
  { day: "Week 4–6", title: "First visible tightening", body: "Patients begin to notice a tighter jawline and softer jowl line. This is early collagen — the bigger change is still ahead." },
  { day: "Week 8–12", title: "Peak result", body: "Maximum tightening from a single session. Photographs at this point are the ones to compare against your pre-treatment baseline." },
  { day: "Month 6+", title: "Continued remodelling", body: "Slow continued improvement up to 12 months. Result holds for 18–24 months on average before maintenance is considered." },
];

const DOS = [
  "Sleep with two pillows for the first 3 nights",
  "Cool compresses (not ice directly on skin) for the first 24h",
  "Paracetamol if needed; avoid ibuprofen and aspirin for 48h",
  "Gentle cleanser, SPF 50 daily, mineral if possible",
  "Eat soft, anti-inflammatory food; hydrate well",
];

const DONTS = [
  "No alcohol for 48 hours",
  "No exercise, hot yoga, sauna or steam for 7 days",
  "No facials, peels, microneedling for 4 weeks",
  "No flying for 7 days where possible",
  "No firm facial massage until day 14 unless instructed",
];

const FAQ = [
  { q: "When can I go back to work after Endolift?", a: "Most patients return to a desk job at 48–72 hours. Public-facing roles often prefer to wait until day 5–7 when bruising can be covered with light makeup." },
  { q: "When can I exercise after Endolift?", a: "Light walking is fine from day 2. Cardio, weights and hot yoga should wait 7–10 days. Heavy exertion in the first week increases swelling and bruising." },
  { q: "How long does swelling last after Endolift?", a: "Most visible swelling settles within 5–10 days. Subtle residual swelling can persist for 2–3 weeks, especially under the jawline." },
  { q: "When will I see the final result?", a: "First visible tightening at week 4–6. Peak result at week 8–12. Continued subtle remodelling up to 12 months." },
  { q: "Is bruising guaranteed?", a: "Most patients have at least some bruising at entry points or along the treatment line. We minimise it by avoiding blood-thinning supplements (fish oil, vitamin E, high-dose turmeric) for one week before treatment." },
  { q: "Can I fly after Endolift?", a: "We recommend waiting 7 days. Cabin pressure and prolonged immobility can worsen swelling and increase bruise resorption time." },
  { q: "Can I have facials or skincare treatments after Endolift?", a: "Wait 4 weeks before any active treatment (peels, microneedling, lasers). Bland skincare, gentle cleansing and SPF are encouraged from day 3." },
];

export default function EndoliftRecovery() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <Helmet>
        <title>Endolift Recovery & Aftercare — Day-by-Day Timeline | Cosmedocs</title>
        <meta name="description" content="Endolift recovery timeline by a London doctor. Day-by-day swelling, bruising, what to avoid, when you'll see results — and the do/don't checklist we give every patient." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/endolift-london/recovery/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link><span>/</span>
              <Link to="/treatments/endolift-london/" className="hover:text-white/70">Endolift London</Link><span>/</span>
              <span className="text-white/60">Recovery &amp; Aftercare</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <Clock className="w-3 h-3" /> Aftercare · Day-by-day
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Endolift recovery &amp; aftercare —{" "}
                <span className="text-[#C9A050]">a real day-by-day timeline.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 font-light leading-relaxed">
                Every patient asks the same three questions: <em>how swollen will I look, how soon can I go back to work,</em> and <em>when will I actually see the result?</em> Here's the honest answer, written by the doctors who manage your aftercare.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">Editorial note.</strong> This timeline reflects our experience with{" "}
              <Link to="/treatments/endolaser/" className="text-[#C9A050] underline underline-offset-2">Endolaser (Laser Fibre Lift)</Link> — Cosmedocs uses a dual-wavelength UKCA &amp; CE-marked platform rather than the trademarked Endolift® device. The recovery profile of the technology category is essentially the same.
            </p>
          </div>
        </section>

        {/* Timeline */}
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

        {/* Do / Dont */}
        <section className="px-4 sm:px-6 py-12 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">The aftercare checklist we give every patient</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="font-medium text-[#C9A050]">Do</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-white/70 font-light">
                  {DOS.map(d => <li key={d}>· {d}</li>)}
                </ul>
              </div>
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="font-medium text-[#C9A050]">Don't</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-white/70 font-light">
                  {DONTS.map(d => <li key={d}>· {d}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Plan your treatment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extralight">Ready to schedule, or still researching?</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/treatments/endolift-london/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform">
                Endolift London — main page <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/treatments/endolift-london/safety/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">
                Safety &amp; risks →
              </Link>
              <Link to="/treatments/endolift-london/double-chin/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">
                For double chin →
              </Link>
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
