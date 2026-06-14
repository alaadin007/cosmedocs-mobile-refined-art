import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const faqs = [
  { q: "What's actually in the £1,500 / 3-session protocol?", a: "Each of the three sessions (spaced 3–4 weeks apart) layers four modalities: (1) a brightening medical peel to lift pigmented surface cells, (2) microneedling driving our prescription brightening cocktail — tranexamic acid, vitamin C, kojic acid, niacinamide — into the upper dermis, (3) polynucleotides to regenerate and thicken delicate under-eye skin, (4) exosomes for cellular signalling and accelerated repair." },
  { q: "Who is this for?", a: "Patients with pigmented dark circles (brown discolouration, common in South Asian, Mediterranean, Middle Eastern and Afro-Caribbean skin) or vascular dark circles (blue–purple cast from thin skin). For pure structural hollowing — a shadow that disappears when you press the area — tear trough filler is the right protocol instead." },
  { q: "When do I see results?", a: "Visible brightening typically appears after session two (around week 6). The full result — improved skin thickness, reduced pigment, less vascular show-through — settles 8 to 12 weeks after session three as polynucleotides and exosomes complete their regenerative cycle." },
  { q: "Is there downtime?", a: "Plan a quiet evening after each session. Mild redness and pinpoint marks settle within 24–48 hours. Most patients return to work the next day. Sun protection (SPF 50) for 2 weeks after each session is essential — UV reactivates pigment." },
  { q: "How long do results last?", a: "Pigmentation correction is durable when paired with daily SPF and pigment-regulating skincare. Polynucleotide and exosome regeneration lasts 9–12 months; a single top-up session annually maintains the result. We provide a written maintenance plan." },
  { q: "Can I combine it with tear trough filler?", a: "Yes. When hollowing and pigmentation coexist (very common over 35), we sequence filler first to restore structure, then run the Under-Eye Reset for colour and skin quality. Planned in a single consultation." },
];

export default function UnderEyeReset() {
  const seo = generateSEOMetadata(
    "The Under-Eye Reset — Dark Circle Treatment | £1,500 / 3 Sessions",
    "Doctor-led 3-session protocol for pigmented and vascular dark circles at Cosmedocs Harley Street. Brightening peel + microneedling + polynucleotides + exosomes. £1,500 total.",
    "/treatments/under-eye-reset/"
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "@id": seo.canonical + "#procedure",
        name: "The Under-Eye Reset Protocol",
        procedureType: "https://schema.org/TherapeuticProcedure",
        bodyLocation: "Periorbital region",
        howPerformed: "Three sessions spaced 3–4 weeks apart, each combining a brightening medical peel, microneedling with prescription brightening cocktail, polynucleotides and exosomes.",
        preparation: "Daily SPF 50 for 2 weeks pre-treatment. Discontinue retinoids 5 days prior.",
        followup: "SPF 50 daily, brightening skincare, optional annual maintenance session.",
      },
      {
        "@type": "Offer",
        "@id": seo.canonical + "#offer",
        name: "Under-Eye Reset — full 3-session course",
        price: "1500",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: seo.canonical,
      },
      {
        "@type": "MedicalWebPage",
        name: seo.title,
        url: seo.canonical,
        mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      },
    ],
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

      <main className="bg-neutral-950 text-white treatment-page">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments/" }, { label: "The Under-Eye Reset" }]} />
        </div>

        {/* Hero */}
        <section className="relative pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,160,80,0.4) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[#C9A050] text-[11px] uppercase tracking-[0.25em] font-medium mb-4">Flagship protocol · Doctor-led since 2007</p>
              <h1 className="text-4xl md:text-6xl font-extralight leading-[1.05] mb-6">
                The Under-Eye Reset.
                <span className="block italic text-white/70 mt-2">For dark circles that creams can't reach.</span>
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                The full force of aesthetic medicine — a brightening peel, microneedling with our prescription cocktail, polynucleotides and exosomes — combined in one structured three-session protocol.
              </p>
              <div className="mt-8 inline-flex items-baseline gap-3 border border-[#C9A050]/30 rounded-full px-6 py-2.5 bg-[#C9A050]/5">
                <span className="text-2xl font-light text-[#C9A050]">£1,500</span>
                <span className="text-sm text-white/60">/ full course of 3 sessions</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Top answer */}
        <section className="pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="border-l-2 border-[#C9A050] pl-5 py-2">
              <p className="text-white/85 text-[17px] md:text-lg leading-relaxed font-light">
                The Under-Eye Reset is a three-session, four-modality combination protocol that addresses pigmented and vascular dark circles by lifting surface pigment, driving brightening actives into the dermis, and regenerating the under-eye skin itself. £1,500 for the full course at Cosmedocs Harley Street.
              </p>
            </div>
          </div>
        </section>

        {/* The four layers */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-extralight mb-8">What's in each session</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { n: "01", t: "Brightening medical peel", d: "A targeted under-eye peel lifts pigmented surface cells and primes the skin for active delivery. Calibrated to periorbital skin — gentler than a standard facial peel, more effective than a cosmetic enzyme treatment." },
                { n: "02", t: "Microneedling + Rx brightening cocktail", d: "Microchannels carry our prescription cocktail — tranexamic acid, vitamin C, kojic acid, niacinamide — into the upper dermis where pigmented melanosomes live. Topical creams stop at the stratum corneum; this doesn't." },
                { n: "03", t: "Polynucleotides", d: "DNA fragments that signal fibroblasts to rebuild collagen and thicken the delicate under-eye skin. Thicker skin reduces vascular show-through — the blue–purple cast literally fades because there is more skin in the way." },
                { n: "04", t: "Exosomes", d: "Cellular messengers that accelerate the regenerative cascade. Recent additions to the aesthetic-medicine toolkit, exosomes amplify the polynucleotide response and improve skin clarity in the weeks after each session." },
              ].map(s => (
                <motion.div key={s.n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.02]">
                  <p className="text-[#C9A050] text-xs tracking-[0.2em] font-medium">{s.n}</p>
                  <h3 className="mt-2 text-lg font-light text-white">{s.t}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Protocol timeline */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-extralight mb-8">Your 12-week journey</h2>
            <ol className="space-y-5">
              {[
                { w: "Week 0", t: "Consultation + Session 1", d: "Diagnostic assessment under daylight-balanced lighting. First full protocol session same-day if suitable." },
                { w: "Week 4", t: "Session 2", d: "Skin response reviewed. Cocktail concentrations and peel depth adjusted to your pigmentation pattern." },
                { w: "Week 8", t: "Session 3", d: "Final layered session — visible brightening already present from session two consolidates." },
                { w: "Week 12+", t: "Full result + maintenance plan", d: "Result settles. Written maintenance plan: SPF 50 daily, brightening skincare, optional annual top-up." },
              ].map(s => (
                <li key={s.w} className="flex gap-4">
                  <div className="shrink-0 w-20 text-[11px] uppercase tracking-[0.18em] text-[#C9A050] pt-1">{s.w}</div>
                  <div className="border-l border-white/[0.08] pl-5">
                    <h3 className="text-base font-medium text-white">{s.t}</h3>
                    <p className="mt-1 text-sm text-white/60 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-white/[0.03] border border-[#C9A050]/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5"><Sparkles className="w-4 h-4 text-[#C9A050]" /><h2 className="text-lg font-light">Investment</h2></div>
              <div className="divide-y divide-white/[0.06]">
                <div className="flex items-center justify-between py-3 text-sm"><span className="text-white/70">Full course — 3 sessions, all modalities</span><span className="text-[#C9A050] font-medium">£1,500</span></div>
                <div className="flex items-center justify-between py-3 text-sm"><span className="text-white/70">Annual maintenance top-up (1 session)</span><span className="text-[#C9A050] font-medium">£550</span></div>
                <div className="flex items-center justify-between py-3 text-sm"><span className="text-white/70">Add tear trough filler (if hollowing also present)</span><span className="text-[#C9A050] font-medium">From £450</span></div>
              </div>
              <p className="text-xs text-white/40 mt-5">Includes consultation, all four modalities at each session and a complimentary 2-week review after session 3. A £50 consultation fee applies and is fully redeemed against treatment on the day.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-extralight mb-6">Frequently asked</h2>
            <div className="space-y-4">
              {faqs.map(f => (
                <div key={f.q} className="border border-white/[0.07] rounded-xl p-5 bg-white/[0.02]">
                  <h3 className="text-[15px] font-medium text-white mb-2 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A050] mt-1 shrink-0" />{f.q}</h3>
                  <p className="text-white/60 text-sm leading-relaxed pl-6">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Related</p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { l: "Dark Circles — diagnostic hub", p: "/concerns/dark-circles/" },
                { l: "Tear Trough Filler", p: "/treatments/tear-trough-filler/" },
                { l: "Polynucleotides", p: "/treatments/polynucleotide/" },
                { l: "Exosomes", p: "/treatments/exosomes/" },
                { l: "Microneedling", p: "/treatments/microneedling/" },
                { l: "Dark Circles vs Eye Bags", p: "/concerns/dark-circles-vs-eye-bags/" },
              ].map(l => (
                <Link key={l.p} to={l.p} className="text-white/55 hover:text-[#C9A050] text-sm border border-white/[0.08] hover:border-[#C9A050]/30 rounded-full px-4 py-1.5 transition-colors">{l.l}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Your consultation begins here</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extralight">Reset what creams cannot reach.</h2>
            <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-7 py-3 text-sm font-medium transition-colors">
              Book a consultation <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-5 text-xs text-white/30">10 Harley Street, London W1G 9PF — Aesthetics by Cosmedocs, invisible art.</p>
          </div>
        </section>
      </main>
    </>
  );
}
