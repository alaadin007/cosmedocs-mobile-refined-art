import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BadgeCheck, Sparkles, Clock, Calendar, Activity } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import EndolaserSpotlight from "@/components/EndolaserSpotlight";

const CANONICAL = "https://cosmedocs.com/treatments/endolaser-body/";

const faqs = [
  {
    question: "What is Endolaser Body?",
    answer:
      "Endolaser Body is a doctor-led, intra-tissue laser treatment that targets stubborn fat and skin laxity in one session. A fine optical fibre delivers dual-wavelength energy (1470 nm and 980 nm) directly beneath the skin — the 1470 nm wavelength gently emulsifies adipose tissue, while the 980 nm wavelength contracts and tightens the overlying skin.",
  },
  {
    question: "Which areas can be treated?",
    answer:
      "Submental (double chin), jowls and lower face, flanks (love handles), bra-line, inner thigh, knees and small abdominal pockets. The treatment is best suited to discrete, defined zones rather than overall weight loss.",
  },
  {
    question: "Is it surgery?",
    answer:
      "No. Endolaser Body is performed under local anaesthetic via a 1–2 mm entry point. There are no scalpels, no general anaesthetic and no scars. You walk in and walk out the same day.",
  },
  {
    question: "How long is the recovery?",
    answer:
      "Most patients return to normal activities within 2–3 days. Mild swelling and a sensation of tightness can last 1–2 weeks as the tissue contracts. A compression garment may be recommended for the body areas.",
  },
  {
    question: "When will I see results?",
    answer:
      "Initial smoothing and tightening are visible within 4–6 weeks. Full skin contraction continues over 3–6 months as collagen remodels around the treated tissue. Most patients require a single session.",
  },
  {
    question: "How is it different from CoolSculpting or liposuction?",
    answer:
      "CoolSculpting reduces fat but cannot tighten skin and can leave laxity. Liposuction is surgical, requires general anaesthetic and has weeks of downtime. Endolaser Body sits between the two — meaningful fat reduction and meaningful skin tightening, in one minimally invasive session.",
  },
];

const EndolaserBody = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cosmedocs.com/" },
      { "@type": "ListItem", position: 2, name: "Treatments", item: "https://cosmedocs.com/treatments/" },
      { "@type": "ListItem", position: 3, name: "Endolaser Body", item: CANONICAL },
    ],
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Endolaser Body — Fat Reduction & Skin Tightening",
    procedureType: "https://schema.org/PercutaneousProcedure",
    bodyLocation: ["Submental", "Jowls", "Flanks", "Bra-line", "Inner thigh", "Knees", "Abdomen"],
    howPerformed:
      "Doctor-led intra-tissue laser. A fine optical fibre delivering dual-wavelength energy (1470 nm + 980 nm) is introduced through a 1–2 mm entry point under local anaesthetic. The 1470 nm wavelength emulsifies adipose tissue while the 980 nm wavelength contracts and tightens the overlying skin.",
    preparation: "Doctor-led consultation; suitability and area mapping.",
    followup: "Compression garment for body areas; review at 4–6 weeks; full collagen remodelling at 3–6 months.",
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
        <title>Endolaser Body — Fat Reduction & Skin Tightening | Cosmedocs Harley Street</title>
        <meta
          name="description"
          content="Doctor-led Endolaser Body at Harley Street — dual-wavelength intra-tissue laser for fat reduction and skin tightening of jowls, flanks, inner thigh, knees and bra-line. Single session, walk-in walk-out."
        />
        <link rel="canonical" href={CANONICAL} data-rh="true" />
        <meta property="og:title" content="Endolaser Body — Fat & Skin Tightening · Cosmedocs" />
        <meta property="og:description" content="Dual-wavelength intra-tissue laser. Fat reduction and skin tightening in one doctor-led session." />
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
                { label: "Non-Surgical Facelift & Body Contouring", path: "/treatments/non-surgical-facelift/" },
              ]}
              currentPage="Endolaser Body"
            />

            <div className="pt-12 pb-4 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.24em] mb-5">
                <Sparkles className="w-3 h-3" /> New · Endo Family
              </span>
              <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                Endolaser <span className="text-[#C9A050] font-light">Body</span>
                <span className="block text-2xl md:text-3xl text-white/55 font-extralight mt-3">
                  Fat reduction &amp; skin tightening — in one session.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/45 leading-relaxed font-extralight max-w-2xl">
                The same dual-wavelength fibre that lifts the face, applied to the body. The 1470 nm wavelength emulsifies stubborn adipose pockets while the 980 nm wavelength contracts the overlying skin — doctor-led, walk-in walk-out, no scalpels.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[11px] text-[#C9A050] font-medium tracking-wide uppercase">
                  <BadgeCheck className="w-3.5 h-3.5" /> UKCA &amp; CE
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

        {/* Two-column body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">
              {/* How it works */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  How <span className="text-[#C9A050] font-light">Endolaser Body</span> works
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  A 1–2 mm entry point is made under local anaesthetic. A fine optical fibre, the same calibre used for the facial Endolaser, is then introduced beneath the skin and guided through the treatment area in a controlled fan pattern.
                </p>
                <p className="text-white/60 leading-relaxed font-light mb-4">
                  Two wavelengths work in concert. The <span className="text-[#F0D78C]">1470 nm</span> wavelength is absorbed preferentially by water and adipose tissue — it gently emulsifies the fat cells in the treated zone. The <span className="text-[#F0D78C]">980 nm</span> wavelength is absorbed by the dermal underside, where it triggers immediate collagen contraction and a months-long remodelling response.
                </p>
                <p className="text-white/60 leading-relaxed font-light">
                  The result is a treatment that addresses both problems in one visit — meaningful fat reduction and meaningful skin tightening — without the laxity that fat-freezing alone can leave behind, and without the downtime of liposuction.
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
                    { area: "Submental (Double Chin)", note: "Tightens jaw-neck angle" },
                    { area: "Jowls & Lower Face", note: "Combine with facial Endolaser" },
                    { area: "Flanks (Love Handles)", note: "Discrete, defined pockets" },
                    { area: "Bra-line", note: "Soft-tissue laxity & roll" },
                    { area: "Inner Thigh", note: "Tighten and refine" },
                    { area: "Knees", note: "The hardest area to tone" },
                    { area: "Small Abdominal Pockets", note: "Not weight-loss surgery" },
                  ].map((a) => (
                    <div key={a.area} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                      <p className="text-sm font-medium text-white">{a.area}</p>
                      <p className="text-xs text-white/45 font-light mt-1">{a.note}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/35 text-xs font-light italic mt-4">
                  Endolaser Body is a refinement treatment, not a weight-loss procedure. Suitability is confirmed at consultation.
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
                    { icon: <Clock className="w-4 h-4" />, label: "Session", value: "60–90 min" },
                    { icon: <Activity className="w-4 h-4" />, label: "Downtime", value: "2–3 days" },
                    { icon: <Calendar className="w-4 h-4" />, label: "Full result", value: "3–6 months" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#C9A050] mb-2">{s.icon}<span className="text-[10px] uppercase tracking-wider text-white/45">{s.label}</span></div>
                      <p className="text-lg font-light text-white">{s.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Doctor-led / authority */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Why <span className="text-[#C9A050] font-light">Cosmedocs</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/60 leading-relaxed font-light mb-3">
                  Endolaser Body is performed by the same doctor who serves as <span className="text-[#F0D78C]">Lead Trainer for the device at the Harley Street Institute</span>. Cosmedocs is the only Harley Street clinic offering the UKCA &amp; CE-marked dual-wavelength Endolaser.
                </p>
                <p className="text-white/45 text-xs font-light italic">
                  We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
                </p>
              </section>

              {/* Sister treatment cross-link */}
              <EndolaserSpotlight variant="inline" />

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
                <p className="text-3xl font-extralight text-white">From £2,950</p>
                <p className="text-xs text-white/45 font-light mt-2">Per area, single session. Final fee confirmed at consultation.</p>
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
                  <li><Link to="/treatments/endolift-london/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolift London <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/eyebrow-lift-endolaser/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Endolaser Brow Lift <ArrowRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/treatments/non-surgical-facelift/" className="text-white/80 hover:text-[#C9A050] transition-colors inline-flex items-center gap-1.5">Non-Surgical Facelift hub <ArrowRight className="w-3 h-3" /></Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default EndolaserBody;
