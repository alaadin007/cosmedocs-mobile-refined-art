import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle, AlertTriangle, Info } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  { q: "Does Endolift really work for a double chin?", a: "Yes — for the right anatomy. Endolift / Endolaser is one of the most effective non-surgical options for a double chin that has both fat AND skin laxity. The fibre melts a small volume of submental fat while simultaneously contracting the overlying skin, so you do not end up with the deflated, loose look that can follow fat-only treatments." },
  { q: "Endolift vs fat-dissolving injections (Aqualyx, Lemon Bottle) — which is better?", a: "Different problems. Fat-dissolving injections only address fat. They can leave loose skin behind in patients over ~35. Endolift addresses fat AND skin in one session. For pure fat in someone with excellent skin elasticity, injections are cheaper. For anyone with even mild laxity, Endolift gives a cleaner result." },
  { q: "Endolift vs CoolSculpting / cryolipolysis for the chin?", a: "Cryo can reduce fat but does not tighten skin and is unpredictable around the jawline. Endolift gives a more controlled, doctor-driven result with simultaneous skin contraction." },
  { q: "Endolift vs surgical neck liposuction?", a: "Surgical lipo removes more fat in a single session and may suit patients with very heavy submental fat. Endolift is less invasive, has shorter downtime and tightens skin. The honest answer is anatomy-dependent — we'll tell you which is right at consultation." },
  { q: "How many sessions do I need for my double chin?", a: "Most patients see a strong result from a single session. A second session at 6–9 months is occasionally added for patients with significant fat or laxity." },
  { q: "When will I see the double-chin result?", a: "Visible reduction begins at 4–6 weeks. Peak result at 8–12 weeks. Continued tightening up to 6 months." },
  { q: "Will my chin look weird while I'm healing?", a: "There is some swelling under the chin for 5–10 days that can temporarily make the area look fuller before it improves. Bruising is common. Most patients are presentable at day 5–7." },
  { q: "Am I a candidate?", a: "Best candidates have moderate submental fullness with mild-to-moderate skin laxity, a reasonably defined jawline behind the fullness, and realistic expectations. Severe sagging or platysmal banding is better served by surgical neck lift." },
];

export default function EndoliftDoubleChin() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const procSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Endolift / Endolaser for Submental Fullness (Double Chin)",
    bodyLocation: "Submental area, neck, jawline",
    procedureType: "https://schema.org/TherapeuticProcedure",
    howPerformed: "A 1470/980nm dual-wavelength optical fibre is passed in the subdermal plane of the submental area under local anaesthesia. Laser energy reduces a small volume of fat and contracts skin in a single session.",
    url: "https://www.cosmedocs.com/treatments/endolift-london/double-chin/",
    provider: { "@type": "MedicalBusiness", name: "Cosmedocs", url: "https://www.cosmedocs.com" },
  };

  return (
    <>
      <Helmet>
        <title>Endolift for Double Chin — Submental Fat & Skin in One Session | Cosmedocs</title>
        <meta name="description" content="Endolift / Endolaser for double chin reduction. Doctor-led submental fat melting and skin tightening in one session at our London Harley Street clinic." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/endolift-london/double-chin/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(procSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link><span>/</span>
              <Link to="/treatments/endolift-london/" className="hover:text-white/70">Endolift London</Link><span>/</span>
              <span className="text-white/60">Double Chin</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <Sparkles className="w-3 h-3" /> Indication · Submental fullness
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Endolift for double chin —{" "}
                <span className="text-[#C9A050]">fat and skin, in one session.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 font-light leading-relaxed">
                A double chin is rarely just fat. It's almost always <strong className="text-white">fat plus a degree of skin laxity</strong> — and treating one without the other is why so many "fat-melting" results look deflated. Intra-tissue laser addresses both at the same time, in a single 30–45 minute appointment under local anaesthesia.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">Editorial note.</strong> Endolift® is a trademarked Eufoton device. At Cosmedocs we deliver an equivalent dual-wavelength intra-tissue laser treatment on a UKCA &amp; CE-marked platform, branded{" "}
              <Link to="/treatments/endolaser/" className="text-[#C9A050] underline underline-offset-2">Endolaser (Laser Fibre Lift)</Link>. Clinical principle and indications are the same.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Why intra-tissue laser is well suited to the chin</h2>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              The submental area has a thin, mobile skin envelope sitting on a small but stubborn fat pad, all anchored to fibrous septae running down to the platysma muscle. <strong className="text-white">A surface laser can't reach it. A fat injection won't tighten it. A thread can lift it but won't reduce volume.</strong> An optical fibre placed at the right depth does three things in one pass:
            </p>
            <ul className="mt-4 space-y-2 text-white/70 font-light text-sm sm:text-base list-disc pl-5">
              <li>Reduces a measured volume of submental fat (1470nm)</li>
              <li>Contracts the fibrous septae anchoring the fat (980nm)</li>
              <li>Stimulates new collagen in the dermis above for sustained skin tightening</li>
            </ul>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-12 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Are you a candidate?</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-[#C9A050] mb-2" />
                <h3 className="font-medium">Excellent candidate</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/65">
                  <li>· Moderate submental fullness</li>
                  <li>· Mild-to-moderate skin laxity</li>
                  <li>· Defined underlying jawline</li>
                  <li>· Healthy weight, stable</li>
                  <li>· Realistic expectations</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-[#C9A050] mb-2" />
                <h3 className="font-medium">Better suited to other treatments</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/65">
                  <li>· Severe submental fat (consider surgical lipo)</li>
                  <li>· Heavy platysmal banding (consider neck lift)</li>
                  <li>· Recessed chin (needs filler or implant first)</li>
                  <li>· Active weight loss (treat once weight is stable)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Build your plan</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extralight">Most chin patients also benefit from a <em>chin projection</em> review</h3>
            <p className="mt-2 text-white/65 font-light text-sm">A weak chin makes a small amount of submental fat look like a large double chin. We always assess both at consultation.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/treatments/endolift-london/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform">
                Endolift London main page <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/treatments/chin-filler/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">
                Chin filler →
              </Link>
              <Link to="/treatments/endolift-london/recovery/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">
                Recovery timeline →
              </Link>
              <Link to="/treatments/endolift-alternative/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">
                Endolift® alternative (2G) →
              </Link>
              <Link to="/blog/endolift-second-generation/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">
                The science of 2G →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Common questions about Endolift for double chin</h2>
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
