import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Sparkles, ArrowRight, Info, Images } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TIMELINE = [
  { day: "Day 0", title: "Treatment evening", body: "Mild swelling and pinpoint redness at the entry points. Cool compress 10 min on / 20 off for the first few hours. Sleep on two pillows. No bending forward, no make-up that night." },
  { day: "Day 1–2", title: "Peak swelling", body: "Under-eye fullness and slight puffiness peak around 24–48 hours. Some patients have small bruises at the cannula entry point. Continue cool compresses. Avoid alcohol, salt and hot drinks." },
  { day: "Day 3–5", title: "Swelling settles", body: "Most visible swelling drops by ~70%. Bruises change colour and can be covered with concealer from day 3. Most patients return to work confidently." },
  { day: "Day 7", title: "Filler integrates", body: "The hyaluronic acid begins to integrate with surrounding tissue. Light gym, gentle facials and normal skincare resume." },
  { day: "Week 2", title: "Clinical review", body: "We see you back for a face-to-face review. Photographs are repeated. Any micro-asymmetry is corrected with a small top-up if needed — included in your treatment fee." },
  { day: "Week 4–6", title: "Final settled result", body: "This is the result you compare against your pre-treatment photo. Tyndall (blue tint) and lumps that occasionally appear in this window are addressed at this review." },
];

const DOS = [
  "Sleep elevated for 3 nights",
  "Cool compress (not ice on bare skin) for the first 24 hours",
  "Paracetamol if needed; avoid ibuprofen and aspirin for 48h",
  "Mineral SPF 50 daily and gentle cleanser",
  "Hydrate well, low-salt food for 48 hours",
];

const DONTS = [
  "No alcohol for 48 hours",
  "No exercise, hot yoga, sauna or steam for 48–72 hours",
  "No facials, peels, microneedling for 2 weeks",
  "No firm rubbing or facial massage for 14 days",
  "No flying for 7 days where possible",
];

const FAQ = [
  { q: "How long is the swelling after tear trough filler?", a: "Visible swelling peaks at 24–48 hours and largely settles within 5–7 days. Subtle residual puffiness can last 2–3 weeks before the final shape is set." },
  { q: "When can I wear make-up after tear trough filler?", a: "Light concealer and foundation from 24 hours. Avoid heavy under-eye products applied with pressure for the first 3 days." },
  { q: "Is bruising guaranteed?", a: "About 1 in 3 patients bruise at the cannula entry point on the cheek. We minimise it by avoiding fish oil, vitamin E, high-dose turmeric and alcohol for one week before treatment." },
  { q: "What is the Tyndall effect and will I get it?", a: "A faint blue tint that can occur if filler is placed too superficially under thin under-eye skin. Modern doctor-led tear trough technique using a cannula in the deep medial fat compartment makes this rare. If it occurs, it is fully reversed in minutes with hyaluronidase." },
  { q: "When will I see the final result?", a: "First settled appearance at day 7. Final, photograph-ready result at week 4–6 after the two-week review." },
  { q: "Can I fly after tear trough filler?", a: "Short-haul after 48 hours is fine for most patients. We recommend waiting 5–7 days for long-haul because cabin pressure and fluid retention can prolong puffiness." },
];

export default function TearTroughAftercare() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <Helmet>
        <title>Tear Trough Filler Aftercare & Recovery — Day-by-Day | Cosmedocs</title>
        <meta name="description" content="Doctor-written tear trough filler recovery timeline. Swelling, bruising, when you can wear make-up, fly and exercise — and the do/don't checklist we give every patient at our London clinic." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/tear-trough-filler/aftercare/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link><span>/</span>
              <Link to="/treatments/tear-trough-filler/" className="hover:text-white/70">Tear Trough Filler</Link><span>/</span>
              <span className="text-white/60">Aftercare &amp; Recovery</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <Clock className="w-3 h-3" /> Aftercare · Day-by-day
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Tear trough filler recovery —{" "}
                <span className="text-[#C9A050]">honest day-by-day timeline.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 font-light leading-relaxed">
                Under-eye filler is the most technique-sensitive injection on the face. The recovery is short, but knowing exactly what to expect — swelling, bruising, when to fly — matters. This is the same brief our doctors give every patient.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">See the result before you commit.</strong>{" "}
              <Link to="/before-after/dermal-fillers/tear-trough/" className="text-[#C9A050] underline underline-offset-2 inline-flex items-center gap-1">
                <Images className="w-3.5 h-3.5" /> Tear trough before &amp; after gallery
              </Link>{" "}
              — verified Cosmedocs cases shot at week 4–6.
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
              <Link to="/treatments/tear-trough-filler/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform">
                Tear trough — main page <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/before-after/dermal-fillers/tear-trough/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Before &amp; after gallery →</Link>
              <Link to="/treatments/tear-trough-filler/dissolving/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">Dissolving filler →</Link>
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
