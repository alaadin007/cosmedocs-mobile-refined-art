import { Helmet } from "react-helmet-async";
import MedicalArticleSchema from '@/components/seo/MedicalArticleSchema';
import { Link } from "react-router-dom";
import { AlertTriangle, MapPin, Syringe, ShieldCheck, Stethoscope, Award, ArrowRight, CheckCircle2, XCircle, Train } from "lucide-react";

const CANONICAL = "https://www.cosmedocs.co.uk/treatments/masseter-botox-near-me/";

const faqs = [
  {
    q: "Is searching 'masseter botox near me' actually a good idea?",
    a: "For most aesthetic treatments, local convenience is reasonable. For masseter Botox it isn't. The masseter is a deep, multi-zone muscle layered against the parotid gland, the risorius and the buccal branch of the facial nerve. Inaccurate placement causes an asymmetric smile, hollowing under the cheek, paradoxical bulging, or simply no effect. Patients should filter on dosing experience and anatomical expertise, not postcode."
  },
  {
    q: "How many units of Botox does a masseter actually need?",
    a: "An adequately dosed masseter typically requires 25–50 units per side (Bocouture / Botox / Azzalure equivalent), placed across 3–5 injection points and at the correct depth. Under-dosing — common in 'near me' generalist clinics — produces no slimming and patients wrongly conclude the treatment doesn't work. See our full breakdown on the Masseter Botox Units & Dosage page."
  },
  {
    q: "What can go wrong with an inexperienced masseter injector?",
    a: "The four most common preventable complications are: (1) asymmetric smile from anterior placement into the risorius zone, (2) sunken cheek appearance from over-atrophy without volumetric planning, (3) paradoxical bulging from injecting too superficially and missing the deep belly, and (4) failure of effect from under-dosing. All four are predictable consequences of injector inexperience, not of the molecule itself."
  },
  {
    q: "Why is London the right destination for masseter Botox, even if you don't live there?",
    a: "Masseter Botox is one of the most over-promoted, under-trained treatments in UK aesthetics. London — and specifically Harley Street — concentrates the doctors who perform this treatment at volume, train others on it, and audit outcomes longitudinally. We routinely treat patients who travel in from Birmingham, Manchester, Leeds, Bristol, Edinburgh, Cardiff and Belfast. A 90-minute train journey once every 4–6 months is the right trade-off for a predictable result."
  },
  {
    q: "How long does masseter Botox last and how often do I need to travel?",
    a: "After 2–3 properly dosed sessions, most patients move to a 6-monthly maintenance interval. The first year usually requires 3 sessions to establish atrophy; from year two, twice a year is typical. That means most travelling patients visit Cosmedocs Harley Street two to three times in year one, and twice a year thereafter."
  },
  {
    q: "What does masseter Botox cost at Cosmedocs?",
    a: "Masseter Botox at Cosmedocs Harley Street is priced per the units required for your anatomy, not as a 'one-size' package. Standalone treatment from £325; as an add-on to another anti-wrinkle area, from £50. Consultation £50, redeemable against treatment. All treatments are doctor-led and performed in association with our CQC-registered partner clinic PrivaDr."
  },
  {
    q: "Do I need a face-to-face consultation first?",
    a: "Yes. Masseter Botox requires palpation of the muscle while you clench, mapping of the safe zone, and screening for parafunction (bruxism, jaw clicking, TMJ pain). This cannot be done by photo. Out-of-town patients usually combine consultation and first treatment in a single visit, with a complimentary review at week 4."
  }
];

export default function MasseterBotoxNearMe() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Masseter Botox",
    alternateName: ["Masseter Botulinum Toxin", "Jaw Slimming Botox", "Masseter Reduction"],
    procedureType: "https://schema.org/PercutaneousProcedure",
    bodyLocation: "Masseter muscle, lower face",
    howPerformed: "25–50 units of botulinum toxin (type A) delivered across 3–5 injection points into the deep belly of the masseter muscle, performed by a doctor with masseter-specific dosing experience.",
    preparation: "Face-to-face consultation, palpation of the masseter, screening for bruxism and TMJ involvement.",
    followup: "Complimentary review at week 4. Maintenance every 4–6 months.",
    url: CANONICAL
  };

  return (
    <div className="min-h-screen bg-black text-white treatment-page">
      <Helmet>
        <title>Masseter Botox Near Me? Why Proximity Is the Wrong Filter | Cosmedocs Harley Street</title>
        <meta
          name="description"
          content="Searching 'masseter Botox near me' is the wrong question. Masseter Botox is a high-skill, multi-zone, dose-dependent treatment. Doctor-led at Cosmedocs Harley Street — we treat patients travelling in from across the UK."
        />
        <link rel="canonical" href={CANONICAL} data-rh="true" />
        <meta property="og:title" content="Masseter Botox Near Me? The Honest Answer" />
        <meta property="og:description" content="Why dosing and anatomical experience matter more than postcode for masseter Botox. Doctor-led at Cosmedocs Harley Street." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6">
        <div aria-hidden className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#C9A050]/10 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#C9A050]/5 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.24em] mb-6">
            <AlertTriangle className="w-3 h-3" /> An honest answer
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight leading-[1.05] tracking-tight">
            "Masseter Botox <span className="text-[#C9A050] font-light">Near Me</span>"
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-white/60 font-extralight block mt-4">
              is the wrong question to ask.
            </span>
          </h1>
          <p className="mt-8 text-base sm:text-lg text-white/65 font-light leading-relaxed max-w-2xl mx-auto">
            Most aesthetic treatments tolerate convenience. Masseter Botox does not. It is a deep, multi-zone, dose-dependent treatment with four well-documented failure modes — every one of them caused by inexperience, not by the molecule. Filter on dosing expertise, not on postcode.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://med.as.me/harleystreet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-6 py-3 rounded-full hover:scale-[1.03] transition-transform"
            >
              Book a doctor-led consultation <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/masseter-botox-units-dosage/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-[#C9A050] transition-colors"
            >
              See the dosing breakdown →
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 md:py-16 px-4 sm:px-6 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto space-y-6 text-white/75 font-light leading-relaxed text-lg">
          <p>
            If you've typed <em>"masseter Botox near me"</em> into Google, you are almost certainly being shown a list of clinics filtered by distance. That is a reasonable filter for a haircut, a manicure, or even an anti-wrinkle treatment in the forehead. It is the wrong filter for masseter Botox.
          </p>
          <p>
            The masseter is the strongest muscle in the human body by weight. It is layered — superficial and deep bellies — and sits directly against the parotid gland, the buccal branch of the facial nerve, and the risorius and zygomaticus smile muscles. Inject in the wrong zone, at the wrong depth, with the wrong dose, and the consequences are visible. Patients arrive at our Harley Street clinic every week with one of four predictable problems: an asymmetric smile, hollowed cheeks, a paradoxical bulge when they bite down, or no result at all. Each of these is a competence problem, not a product problem.
          </p>
          <p>
            This page exists to do something most clinic websites refuse to do: tell you that the closest option is rarely the right one. We treat patients who travel in from Manchester, Birmingham, Edinburgh, Bristol, Cardiff and Belfast precisely because they were under-treated locally first. Here is the framework you should use instead.
          </p>
        </div>
      </section>

      {/* FOUR FAILURE MODES */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A050] mb-3">The four failure modes</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight">
              What actually goes wrong with <span className="text-[#C9A050]">"near me"</span> masseter Botox
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto font-light">
              Each is a predictable, anatomical consequence of an injector who treats the masseter the same way they treat a glabella.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                t: "1. Asymmetric Smile",
                d: "Botox migrates anteriorly into the risorius and zygomaticus, paralysing the smile lift on one side. Lasts the full 3–4 months of toxin activity. Caused by injecting the anterior masseter border without respecting the safety triangle.",
                icon: <XCircle className="w-5 h-5" />
              },
              {
                t: "2. Hollow / Sunken Cheek",
                d: "Aggressive masseter atrophy without volumetric planning leaves the lower mid-face looking gaunt, especially in slim patients. The masseter is structural — you cannot just shrink it without thinking about volume restoration above it.",
                icon: <XCircle className="w-5 h-5" />
              },
              {
                t: "3. Paradoxical Bulging",
                d: "Injecting too superficially weakens only the surface fibres. The deep belly compensates by hypertrophy, and the jaw looks more square when the patient clenches — the exact opposite of the intended result.",
                icon: <XCircle className="w-5 h-5" />
              },
              {
                t: "4. Total Failure of Effect",
                d: "The most common outcome of all. Under-dosed at 10–20 units per side instead of the 25–50 units the muscle actually needs. Patient wrongly concludes 'masseter Botox doesn't work on me.' It does. The dose didn't.",
                icon: <XCircle className="w-5 h-5" />
              }
            ].map((f) => (
              <div key={f.t} className="bg-black border border-white/[0.08] rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[#C9A050] mt-0.5">{f.icon}</span>
                  <h3 className="text-xl font-light text-white">{f.t}</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-light">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOSING */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A050] mb-3">The dose problem</p>
              <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight">
                The single biggest reason masseter Botox <span className="text-[#C9A050]">"doesn't work"</span>
              </h2>
              <p className="mt-5 text-white/65 leading-relaxed font-light">
                A well-developed masseter is a thick, fan-shaped muscle. To produce visible slimming, the toxin needs to reach the <strong className="text-white/85 font-normal">deep belly</strong> at sufficient density to reduce its mass over 6–12 weeks. The international dosing literature converges on 25–50 units per side, divided across 3–5 injection points, at the correct depth.
              </p>
              <p className="mt-4 text-white/65 leading-relaxed font-light">
                A "near me" generalist clinic, charging £150 for "masseter Botox", almost always uses 10–20 units per side. That is enough toxin to feel something at week 2, and not enough to atrophy the muscle. The patient is then told the treatment "doesn't work on them." It does. The dose didn't.
              </p>
              <Link
                to="/masseter-botox-units-dosage/"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#C9A050] hover:underline"
              >
                See the full units & dosing breakdown <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "10–20", v: "Units / side — typical 'near me' clinic", red: true },
                { k: "25–50", v: "Units / side — clinically adequate dose" },
                { k: "3–5", v: "Injection points required" },
                { k: "Deep belly", v: "Required injection depth" },
                { k: "6–12 weeks", v: "Time to visible atrophy" },
                { k: "4–6 months", v: "Maintenance interval" }
              ].map((s) => (
                <div
                  key={s.k}
                  className={`rounded-xl p-4 text-center ${s.red ? "border border-red-500/30 bg-red-500/5" : "border border-[#C9A050]/25 bg-[#C9A050]/[0.04]"}`}
                >
                  <div className={`text-lg font-light ${s.red ? "text-red-400" : "text-[#C9A050]"}`}>{s.k}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 mt-1 leading-tight">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS OF EXPERTISE */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A050] mb-3">The right filter</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight">
              What to look for instead of <span className="text-[#C9A050]">"near me"</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { t: "A doctor — not a generalist — performing the injection.", d: "The masseter sits against motor nerve branches. Anatomical training matters. Cosmedocs is doctor-led, with GMC-registered clinicians treating every patient." },
              { t: "Volume — they should perform masseter Botox weekly, not occasionally.", d: "Pattern recognition is what prevents the four failure modes. Ask the clinic how many masseters they treat per week, and how many they have treated lifetime." },
              { t: "A documented dosing protocol, not a flat 'package' price.", d: "If a clinic prices masseter Botox as a fixed £150 'one-size' package, they are not dosing to anatomy. Real clinics dose to muscle mass." },
              { t: "Face-to-face palpation during the consultation.", d: "A doctor should ask you to clench, then palpate the muscle in three places to map the safe zone. If they do not, the treatment is being injected to a template, not to you." },
              { t: "A bruxism / TMJ screen.", d: "Up to 40% of patients seeking 'jaw slimming' are actually clenchers. Treating the bruxism in parallel changes the outcome. A clinic that doesn't ask about jaw pain is missing half the picture." },
              { t: "A clear plan for the first 12 months, not a single appointment.", d: "Establishing atrophy takes 2–3 sessions in year one. A clinic that doesn't tell you this is setting you up to be disappointed at week 6." }
            ].map((item) => (
              <div key={item.t} className="flex gap-4 bg-black border border-white/[0.08] rounded-2xl p-5">
                <CheckCircle2 className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base sm:text-lg font-light text-white">{item.t}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mt-1 font-light">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LONDON */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050]/10 border border-[#C9A050]/30 text-[#C9A050] text-[10px] font-bold uppercase tracking-[0.24em] mb-5">
            <MapPin className="w-3 h-3" /> Why London
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight">
            Why Harley Street is the <span className="text-[#C9A050]">de facto national centre</span> for masseter Botox
          </h2>
          <p className="mt-6 text-white/65 max-w-2xl mx-auto leading-relaxed font-light">
            Cosmedocs at 10 Harley Street, London W1G 9PF, sits inside the highest density of aesthetic medical specialists in the United Kingdom. Our masseter Botox volume — both cosmetic jaw slimming and medical bruxism management — is materially higher than the average UK aesthetic clinic. Dr Ahmed Haq is the Lead Trainer at the Harley Street Institute, training other doctors in advanced jaw-line, masseter and lower-face technique. That training role is what travelling patients are buying access to.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
            {[
              { icon: <Stethoscope className="w-5 h-5" />, t: "Doctor-led only", d: "Every masseter Botox treatment at Cosmedocs is performed by a GMC-registered doctor — no delegated injectors." },
              { icon: <Award className="w-5 h-5" />, t: "Lead trainer", d: "Dr Ahmed Haq trains other doctors in masseter, jawline and lower-face technique at the Harley Street Institute." },
              { icon: <ShieldCheck className="w-5 h-5" />, t: "CQC partner clinic", d: "We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments." }
            ].map((c) => (
              <div key={c.t} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
                <div className="text-[#C9A050] mb-2">{c.icon}</div>
                <h3 className="text-base font-light text-white">{c.t}</h3>
                <p className="text-xs text-white/55 mt-1 leading-relaxed font-light">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL IN */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.24em] mb-5">
              <Train className="w-3 h-3" /> Travelling-in patients
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight">
              We treat patients from <span className="text-[#C9A050]">across the UK</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto font-light">
              Once a year, twice a year, a four-hour round trip. The result is the difference.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { city: "Manchester", time: "2h 10m via Euston" },
              { city: "Birmingham", time: "1h 22m via Euston" },
              { city: "Leeds", time: "2h 15m via King's Cross" },
              { city: "Bristol", time: "1h 40m via Paddington" },
              { city: "Edinburgh", time: "4h 20m via King's Cross" },
              { city: "Cardiff", time: "1h 50m via Paddington" },
              { city: "Liverpool", time: "2h 10m via Euston" },
              { city: "Belfast", time: "75-min flight" }
            ].map((c) => (
              <div key={c.city} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="text-[#C9A050] text-base font-light">{c.city}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/45 mt-1">{c.time}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/50 text-center font-light max-w-2xl mx-auto">
            Out-of-town patients usually combine consultation and treatment in a single morning visit, with a complimentary week-4 review by video. After the first year, most travel in twice a year for maintenance.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A050] mb-3">Honest pricing</p>
            <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight">
              Priced to your <span className="text-[#C9A050]">anatomy</span>, not to a package
            </h2>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-white font-light">Masseter Botox — Standalone</p>
                <p className="text-xs text-white/45 mt-0.5">25–50 units per side, dosed to anatomy</p>
              </div>
              <p className="text-[#C9A050] text-lg font-light">from £325</p>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-white font-light">Masseter Botox — Add-on</p>
                <p className="text-xs text-white/45 mt-0.5">When combined with another anti-wrinkle area</p>
              </div>
              <p className="text-[#C9A050] text-lg font-light">from £50</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-light">Doctor-led consultation</p>
                <p className="text-xs text-white/45 mt-0.5">Redeemable against treatment</p>
              </div>
              <p className="text-[#C9A050] text-lg font-light">£50</p>
            </div>
          </div>

          <p className="mt-5 text-xs text-white/40 text-center">
            We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A050] mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight">
              "Masseter Botox near me" — <span className="text-[#C9A050]">the honest answers</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-black border border-white/[0.08] rounded-2xl p-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-light text-white">{f.q}</h3>
                  <span className="text-[#C9A050] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/60 leading-relaxed font-light">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CLUSTER */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A050] mb-5">Continue reading</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/treatments/masseter-botox/" className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/75 hover:border-[#C9A050] hover:text-[#C9A050] transition-colors">Masseter Botox — Main Treatment</Link>
            <Link to="/masseter-botox-units-dosage/" className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/75 hover:border-[#C9A050] hover:text-[#C9A050] transition-colors">Units &amp; Dosage</Link>
            <Link to="/medical/" className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/75 hover:border-[#C9A050] hover:text-[#C9A050] transition-colors">Bruxism — Medical Botox</Link>
            <Link to="/before-after/botox/masseter/" className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/75 hover:border-[#C9A050] hover:text-[#C9A050] transition-colors">Real Before &amp; After</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-[#0a0805] border-t border-[#C9A050]/20">
        <div className="max-w-3xl mx-auto text-center">
          <Syringe className="w-8 h-8 text-[#C9A050] mx-auto mb-5" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight">
            Your consultation <span className="text-[#C9A050]">begins here</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-xl mx-auto leading-relaxed font-light">
            Doctor-led. Anatomy-mapped. Dosed to your muscle, not to a template. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
          <a
            href="https://med.as.me/harleystreet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-7 py-3.5 rounded-full hover:scale-[1.03] transition-transform mt-7"
          >
            Book at Cosmedocs Harley Street <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
