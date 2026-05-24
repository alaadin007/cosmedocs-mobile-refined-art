import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BadgeCheck, Sparkles, Clock, Calendar, Activity, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const CANONICAL = "https://cosmedocs.com/treatments/endolaser-cellulite/";

const faqs = [
  {
    question: "What is Endolaser Cellulite treatment?",
    answer:
      "Endolaser Cellulite is a doctor-led, minimally invasive treatment that addresses the three structural causes of cellulite in a single session: fibrous septae tethering the skin (which create dimples), pockets of herniated fat (which create the orange-peel surface), and laxity of the overlying dermis. A 300–550 micron optical fibre is introduced under local anaesthetic through a 1mm entry point and delivers dual-wavelength laser energy directly beneath the skin — 1470nm to emulsify adipose tissue and release the septae, 980nm to contract the dermis and stimulate neocollagenesis.",
  },
  {
    question: "How is this different from radiofrequency, shockwave or cryolipolysis for cellulite?",
    answer:
      "External treatments (radiofrequency, shockwave, cryolipolysis, mesotherapy) can only deliver energy through the skin barrier, which loses up to 70% of the intended dose before it reaches the fibrous septae. They temporarily smooth the surface but do not release the tethers. Endolaser Cellulite works intra-tissue — the fibre sits beneath the dermis, so 100% of the energy reaches the target. Clinical literature on intra-tissue laser for cellulite (Cellulaze and equivalent 1440/1470nm systems) shows results sustained at 1, 2 and 3 years post-treatment, where external devices typically require repeat sessions every 8–12 weeks.",
  },
  {
    question: "Which areas can be treated?",
    answer:
      "Posterior and lateral thighs (the most common request), buttocks, the banana roll (infragluteal fold), inner thighs, knees, and the lower abdomen. The treatment is best suited to Grade II and Grade III cellulite — visible dimpling at rest, with or without skin laxity. Grade I (only visible when pinched) is usually better managed conservatively.",
  },
  {
    question: "What does the research show?",
    answer:
      "A landmark study by DiBernardo (Aesthetic Surgery Journal, 2011) on intra-tissue laser cellulite treatment reported a 90% patient satisfaction rate at 1 year. A 3-year follow-up by the same author (DiBernardo et al., 2013) confirmed durability — 96% of patients said they would recommend the treatment and dimple count remained significantly reduced. Sasaki & Tevez (2018, Aesthetic Surgery Journal) reported sustained skin contraction of 17% on average. These results are with a single session.",
  },
  {
    question: "Is it surgery?",
    answer:
      "No. There are no scalpels, no general anaesthetic and no scars. A 1mm entry point is created under local anaesthetic, which heals as a fine line that fades within weeks. You walk in and walk out the same day.",
  },
  {
    question: "How long is the recovery?",
    answer:
      "Most patients return to office work within 2–3 days. Mild bruising and a sensation of tightness can last 1–2 weeks. A compression garment is worn for 2 weeks day and night, then daytime only for a further 2 weeks. Strenuous exercise resumes at 3 weeks.",
  },
  {
    question: "When will I see results?",
    answer:
      "Initial smoothing is visible at 4–6 weeks once swelling settles. Full skin contraction and dimple release continues over 3–6 months as collagen remodels around the released septae. Most patients require only one session per area.",
  },
  {
    question: "How long do results last?",
    answer:
      "Published data tracks meaningful results at 3 years, with most patients still happy with the outcome. Cellulite does not return in the same pattern because the fibrous tethers have been physically released — they cannot re-attach in the same way. Weight gain can still create new cellulite over time.",
  },
];

const EndolaserCellulite = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cosmedocs.com/" },
      { "@type": "ListItem", position: 2, name: "Treatments", item: "https://cosmedocs.com/treatments/" },
      { "@type": "ListItem", position: 3, name: "Endolaser Body", item: "https://cosmedocs.com/treatments/endolaser-body/" },
      { "@type": "ListItem", position: 4, name: "Endolaser Cellulite", item: CANONICAL },
    ],
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Endolaser Cellulite — Intra-Tissue Laser Cellulite Treatment",
    procedureType: "https://schema.org/PercutaneousProcedure",
    bodyLocation: ["Thigh", "Buttock", "Banana roll", "Inner thigh", "Knee", "Lower abdomen"],
    howPerformed:
      "Doctor-led intra-tissue laser. A 300–550 micron optical fibre delivering dual-wavelength energy (1470 nm + 980 nm) is introduced through a 1mm entry point under tumescent local anaesthetic. The 1470 nm wavelength emulsifies herniated fat and releases the fibrous septae responsible for cellulite dimples; the 980 nm wavelength contracts and tightens the overlying dermis.",
    preparation: "Doctor-led consultation; cellulite grading; suitability and area mapping; medical history review.",
    followup: "Compression garment for 2 weeks 24/7 then 2 weeks daytime; review at 4–6 weeks; full collagen remodelling at 3–6 months. Single session is standard.",
    url: CANONICAL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Endolaser Cellulite — Intra-Tissue Laser Cellulite Treatment | Cosmedocs Harley Street</title>
        <meta
          name="description"
          content="Doctor-led Endolaser Cellulite treatment at Harley Street. Dual-wavelength intra-tissue laser releases fibrous septae, emulsifies herniated fat and tightens skin in one session. Results sustained at 3 years."
        />
        <link rel="canonical" href={CANONICAL} data-rh="true" />
        <meta property="og:title" content="Endolaser Cellulite — Single-Session Intra-Tissue Treatment · Cosmedocs" />
        <meta property="og:description" content="Dual-wavelength intra-tissue laser. Releases the fibrous tethers that cause cellulite dimples — not just surface smoothing." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(procedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: "Treatments", path: "/treatments/" },
                { label: "Endolaser Body", path: "/treatments/endolaser-body/" },
              ]}
              currentPage="Endolaser Cellulite"
            />

            <div className="pt-12 pb-4 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.24em] mb-5">
                <Sparkles className="w-3 h-3" /> Endo Family · Cellulite
              </span>
              <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                Endolaser <span className="text-[#C9A050] font-light">Cellulite</span>
                <span className="block text-2xl md:text-3xl text-white/55 font-extralight mt-3">
                  Release the tether. Not just the surface.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/45 leading-relaxed font-extralight max-w-2xl">
                Cellulite is a structural problem — fibrous bands tethering the skin from below. External devices smooth the surface but never reach the tethers. Endolaser Cellulite works <em>intra-tissue</em>: the fibre sits beneath the dermis and releases the bands directly. One doctor-led session. Three years of published durability.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[11px] text-[#C9A050] font-medium tracking-wide uppercase">
                  <BadgeCheck className="w-3.5 h-3.5" /> UKCA &amp; CE · Dual-Wavelength
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> Doctor-Led · Local Anaesthetic
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide uppercase">
                  Single Session
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* Why cellulite is hard to treat */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Why most cellulite treatments <span className="text-[#C9A050] font-light">disappoint</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Cellulite is not a fat problem and it is not a skin problem. It is a <em>structural</em> problem with three components: vertically oriented fibrous septae that tether the dermis to the underlying fascia (the dimples), pockets of subcutaneous fat that herniate upward between those tethers (the bumps), and thinning of the dermis itself (the orange-peel surface). Any treatment that addresses only one component will plateau quickly.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  This is the central limitation of every external device on the market. Radiofrequency, shockwave (acoustic wave therapy), focused ultrasound, cryolipolysis, vacuum-roller massage and topical retinoids all deliver their energy or active ingredient <em>through</em> the skin barrier. Up to 70% of the intended dose is lost in transit — the dermis, the hypodermis and the body's own water content absorb and scatter the energy long before it reaches the fibrous septae. The result is a temporary smoothing effect that requires re-treatment every 8–12 weeks indefinitely.
                </p>
                <p className="text-white/60 leading-relaxed font-light">
                  Subcision (manual or motorised, such as Cellfina) does release the septae mechanically — and the results are durable — but it cannot tighten the overlying skin and cannot reduce the herniated fat. Liposuction reduces fat but, infamously, can <em>worsen</em> cellulite by removing volume without releasing the tethers or tightening the skin. Endolaser Cellulite is the only minimally invasive treatment that addresses all three components in one session.
                </p>
              </section>

              {/* How it works */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  How <span className="text-[#C9A050] font-light">Endolaser Cellulite</span> works
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Treatment is performed under tumescent local anaesthetic in our Harley Street consulting suite. The treated area is mapped while you are standing — dimples and depressions are marked individually because they disappear when you lie down. A 1mm entry point is created and a fine optical fibre — between 300 and 550 microns in diameter, comparable to the lead of a mechanical pencil — is introduced beneath the skin.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Two wavelengths are then delivered in sequence. The <span className="text-[#F0D78C]">1470 nm</span> wavelength is preferentially absorbed by water and lipid — it gently emulsifies the herniated adipose pockets and, critically, vaporises the fibrous septae responsible for each dimple. The fibre is passed deliberately beneath each marked dimple until the tether is felt to release.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  The <span className="text-[#F0D78C]">980 nm</span> wavelength is then used in subdermal sweep mode. It is absorbed by the dermal underside, where it triggers immediate Type I collagen contraction and a months-long neocollagenesis response. This is what restores tone to the slack dermis above the released tethers and prevents the surface from looking deflated.
                </p>
                <p className="text-white/60 leading-relaxed font-light">
                  The procedure typically takes 90–120 minutes per region (both thighs, for example, are done in one sitting). You walk out under your own power, in compression garments, and go home the same day.
                </p>
              </section>

              {/* What the research shows */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  What the <span className="text-[#C9A050] font-light">research</span> shows
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Intra-tissue laser cellulite treatment is one of the most rigorously studied procedures in aesthetic medicine. The foundational work was published by Barry DiBernardo in the Aesthetic Surgery Journal in 2011 — a single-session 1440 nm intra-tissue laser study in 57 patients showed dimple-count reduction of 49% and contour-irregularity reduction of 36% at 6 months, with a 90% patient satisfaction rate.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Crucially, DiBernardo and colleagues then followed those patients for three years (DiBernardo, Sasaki, Katz et al., Aesthetic Surgery Journal, 2013). At 3-year follow-up, 96% of patients said they would recommend the treatment to a friend and would have it again themselves. Dimple count and skin smoothness remained significantly improved versus baseline. This is the longest published follow-up for any cellulite treatment of any kind.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Sasaki and Tevez (Aesthetic Surgery Journal, 2018) measured skin contraction objectively using 3D imaging in 25 patients treated with the same intra-tissue laser approach. Mean skin shrinkage was 17% at 6 months and held at 14% at 12 months — figures that no external device has come close to in published peer-reviewed data.
                </p>
                <p className="text-white/60 leading-relaxed font-light">
                  The dual-wavelength 1470 + 980 nm system used at Cosmedocs is the European evolution of this technology, and the same platform is used for the Endolaser facial fibre lift. The 1470 nm wavelength has approximately 40x greater absorption in water than the original 1440 nm — meaning more efficient emulsification with less collateral thermal spread.
                </p>
              </section>

              {/* Suitable areas */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Suitable <span className="text-[#C9A050] font-light">areas</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { area: "Posterior Thighs", note: "The classic cellulite zone" },
                    { area: "Lateral Thighs", note: "Saddlebag dimpling" },
                    { area: "Buttocks", note: "Surface smoothing and lift" },
                    { area: "Banana Roll", note: "Infragluteal fold" },
                    { area: "Inner Thighs", note: "Dimpling + laxity in one" },
                    { area: "Knees", note: "Notoriously hard to treat" },
                    { area: "Lower Abdomen", note: "Mild dimpling and pocketing" },
                  ].map((a) => (
                    <div key={a.area} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                      <p className="text-sm font-medium text-white">{a.area}</p>
                      <p className="text-xs text-white/45 font-light mt-1">{a.note}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/35 text-xs font-light italic mt-4">
                  Best results in Nürnberger-Müller Grade II–III cellulite. Grade I (visible only on pinch) is usually managed conservatively. Grade IV with severe skin laxity may require a combined approach.
                </p>
              </section>

              {/* What to expect */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  What to <span className="text-[#C9A050] font-light">expect</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: <Clock className="w-4 h-4" />, label: "Session", value: "90–120 min" },
                    { icon: <Activity className="w-4 h-4" />, label: "Downtime", value: "2–3 days" },
                    { icon: <Calendar className="w-4 h-4" />, label: "Full result", value: "3–6 months" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#C9A050] mb-2">{s.icon}<span className="text-[10px] uppercase tracking-wider text-white/45">{s.label}</span></div>
                      <p className="text-lg font-light text-white">{s.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/55 leading-relaxed font-light mt-6">
                  Compression garments are worn 24 hours a day for the first two weeks, then daytime only for a further two weeks. Office work resumes at 2–3 days. Light cardio at 10 days. Strenuous lower-body exercise (running, leg-day weights) at 3 weeks. Most patients book the treatment on a Thursday and are presentable by Monday.
                </p>
              </section>

              {/* Doctor-led / authority */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Why <span className="text-[#C9A050] font-light">Cosmedocs</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/60 leading-relaxed font-light mb-3">
                  Endolaser Cellulite at Cosmedocs is performed by the same doctor who serves as <span className="text-[#F0D78C]">Lead Trainer for the device at the Harley Street Institute</span>. We are the only Harley Street clinic offering the UKCA &amp; CE-marked dual-wavelength Endolaser — the more advanced European evolution of the original American intra-tissue cellulite platform.
                </p>
                <p className="text-white/45 text-xs font-light italic">
                  We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
                </p>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Frequently <span className="text-[#C9A050] font-light">asked</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="space-y-4">
                  {faqs.map((f) => (
                    <details key={f.question} className="group bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 open:border-[#C9A050]/30 transition-colors">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <span className="text-white text-base font-light pr-4">{f.question}</span>
                        <span className="text-[#C9A050] text-xl group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="mt-3 text-white/55 text-sm leading-relaxed font-light">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-3">Investment</p>
                <p className="text-3xl font-extralight text-white">From £3,450</p>
                <p className="text-xs text-white/45 font-light mt-2">Per region (both thighs or buttocks), single session. Final fee confirmed at consultation.</p>
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 mt-5 text-sm font-medium transition-all"
                >
                  Book Consultation
                </a>
                <Link
                  to="/contact/"
                  className="block w-full text-center border border-white/15 hover:border-[#C9A050]/40 text-white rounded-full py-3 mt-2 text-sm font-medium transition-all"
                >
                  Ask a question
                </Link>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-3">The Endo Family</p>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/treatments/endolaser/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolaser Fibre Lift <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/endolaser-body/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolaser Body <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/endolift-london/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolift London <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/eyebrow-lift-endolaser/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolaser Brow Lift <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/endo-fibre-lift-duration/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">How long does it last? <ArrowRight className="w-3 h-3" /></Link></li>
                </ul>
              </div>

              <div className="bg-[#C9A050]/[0.04] border border-[#C9A050]/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#C9A050]" />
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050]">Clinical note</p>
                </div>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Our Endolaser is a <strong className="text-white">dual-wavelength (1470 nm + 980 nm)</strong> intra-tissue platform — the more advanced European evolution of single-wavelength Endolift. The second wavelength is what allows us to address both fat <em>and</em> skin tightening in one session.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default EndolaserCellulite;
