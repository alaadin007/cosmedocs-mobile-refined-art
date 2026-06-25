import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, ArrowRight, CheckCircle, ShieldCheck, BadgeCheck,
  MapPin, Euro, Clock, Info, AlertTriangle,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const FAQ = [
  {
    q: "Is Endolift available in Ireland?",
    a: "Yes. Cosmedocs delivers an Endolift®-equivalent intra-tissue laser treatment in Dublin under the name Endolaser — same dual-wavelength (1470nm + 980nm) clinical principle, performed on a UKCA & CE-marked platform by a doctor trained at the Harley Street Institute in London. It is currently one of the few true intra-tissue laser-fibre lifts offered in Ireland.",
  },
  {
    q: "What is the difference between Endolift and Endolaser?",
    a: "Endolift® is a registered trademark of Eufoton (the original Italian device). Endolaser is the generic clinical term for any intra-tissue laser-fibre treatment using the same wavelengths and technique. At Cosmedocs Dublin we use the term Endolaser because we deliver the treatment on a UKCA & CE-marked equivalent dual-wavelength platform. Indications, mechanism and patient experience are the same.",
  },
  {
    q: "How much does Endolift / Endolaser cost in Dublin?",
    a: "Endolaser in Dublin typically ranges from €2,800 for the lower face, €3,400 for jawline and neck, and €4,800 for full face and neck. Cost reflects the time required and the area treated. A consultation is required to give a precise quote.",
  },
  {
    q: "How long does Endolaser last?",
    a: "Most patients see results lasting 18–24 months from a single treatment, with continued collagen remodelling for up to 12 months after the procedure. Maintenance is typically every 18–24 months.",
  },
  {
    q: "What is the recovery time?",
    a: "Most patients return to work in 2–3 days. Visible swelling resolves in 5–10 days. Bruising under the chin or along the jawline is common and clears within 7–14 days. Final tightening is best appreciated at 8–12 weeks.",
  },
  {
    q: "Endolaser vs HIFU in Dublin — which is better?",
    a: "HIFU (Ultherapy and similar) delivers focused ultrasound through the skin — comfortable, no needles, but operator-dependent and less powerful on the lower face. Endolaser delivers laser energy directly inside the tissue via a fine optical fibre, producing a stronger, more controllable result on jowls, jawline and neck. For meaningful lower-face lifting we recommend Endolaser.",
  },
  {
    q: "Endolaser vs PDO threads in Dublin?",
    a: "PDO threads provide immediate mechanical lift via cogged sutures. Endolaser provides progressive thermal tightening, fat reduction and skin retraction. Threads are best for immediate jawline definition; Endolaser is best for sustained skin quality and contour. They are sometimes combined.",
  },
  {
    q: "Endolaser vs surgical neck lift?",
    a: "Surgical neck lift remains the gold standard for severe laxity, platysmal banding and large fat deposits. Endolaser is for moderate laxity with mild-to-moderate fat — it has shorter downtime, no general anaesthetic, no scars, but a smaller ceiling of correction. We will tell you honestly which one fits you.",
  },
  {
    q: "Who is not a candidate?",
    a: "Endolaser is not suitable during pregnancy or breastfeeding, with active skin infection in the treatment area, with very advanced laxity that requires surgery, or in patients with unrealistic expectations. Candidacy is confirmed at consultation.",
  },
  {
    q: "Do I need to travel to London?",
    a: "No. The Dublin clinic delivers the consultation, treatment and aftercare. Patients who prefer to be treated in London can also be referred to the Harley Street rooms.",
  },
  {
    q: "Is the doctor registered in Ireland?",
    a: "Yes. The treatment is performed by a doctor on the Irish Medical Council register, with additional Endolaser training from the Harley Street Institute in London.",
  },
  {
    q: "Is Endolaser safe?",
    a: "Endolaser has been used safely worldwide for over a decade. The fibre is so fine it leaves no scar. Most common side effects are mild swelling and bruising for 5–10 days. As with any laser procedure, safety is highly operator-dependent — choose a doctor-led clinic with documented training on the device.",
  },
];

const ZONES = [
  { zone: "Lower face & jowls", fibre: "1470nm + 980nm", time: "45–60 min", from: "€2,800" },
  { zone: "Jawline + neck", fibre: "1470nm + 980nm", time: "60–75 min", from: "€3,400" },
  { zone: "Full face + neck", fibre: "1470nm + 980nm", time: "90–120 min", from: "€4,800" },
  { zone: "Submental (double chin only)", fibre: "1470nm", time: "30 min", from: "€1,900" },
  { zone: "Knees / arms / abdomen (body)", fibre: "1470nm + 980nm", time: "60–90 min", from: "€2,400" },
];

export default function EndoliftDublin() {
  const canonical = "https://www.cosmedocs.com/ie/treatments/endolift-dublin/";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Endolift / Endolaser (Intra-tissue Laser Fibre Lift) — Dublin",
    procedureType: "https://schema.org/TherapeuticProcedure",
    bodyLocation: "Lower face, jawline, neck, submental area, body",
    howPerformed:
      "A 1470nm and 980nm dual-wavelength optical fibre is inserted into the subdermal plane under local anaesthesia. Laser energy contracts collagen, reduces small fat pockets and stimulates new collagen for sustained skin tightening — without surgical incisions.",
    url: canonical,
    provider: {
      "@type": "MedicalBusiness",
      name: "Cosmedocs Dublin",
      url: canonical,
      areaServed: { "@type": "Country", name: "Ireland" },
    },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Cosmedocs Dublin — Endolaser",
    url: canonical,
    areaServed: [
      { "@type": "Country", name: "Ireland" },
      { "@type": "City", name: "Dublin" },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Cosmedocs",
      url: "https://www.cosmedocs.com/",
    },
    medicalSpecialty: "CosmeticSurgery",
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Endolaser Dublin — Treatment Pricing",
    itemListElement: ZONES.map((z) => ({
      "@type": "Offer",
      name: `Endolaser — ${z.zone}`,
      priceCurrency: "EUR",
      price: z.from.replace(/[^0-9]/g, ""),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        price: z.from.replace(/[^0-9]/g, ""),
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "Country", name: "Ireland" },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
      { "@type": "ListItem", position: 2, name: "Ireland", item: "https://www.cosmedocs.com/ie/" },
      { "@type": "ListItem", position: 3, name: "Treatments", item: "https://www.cosmedocs.com/ie/treatments/" },
      { "@type": "ListItem", position: 4, name: "Endolift Dublin", item: canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Endolift Dublin (Endolaser) — Laser Fibre Lift Ireland | Cosmedocs</title>
        <meta
          name="description"
          content="Endolift in Dublin — delivered as Endolaser on a UKCA & CE-marked dual-wavelength platform. Doctor-led laser-fibre lift for jowls, jawline, neck and double chin. From €2,800. Trained at Harley Street."
        />
        <link rel="canonical" href={canonical} data-rh="true" />

        {/* hreflang cluster */}
        <link rel="alternate" hrefLang="en-ie" href={canonical} data-rh="true" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/endolift-london/" data-rh="true" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/endolaser/" data-rh="true" />

        {/* Open Graph */}
        <meta property="og:title" content="Endolift Dublin (Endolaser) — Laser Fibre Lift Ireland | Cosmedocs" />
        <meta property="og:description" content="The first doctor-led intra-tissue laser-fibre lift in Dublin. Trained at the Harley Street Institute. From €2,800." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(procedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(offerSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative pt-28 pb-14 overflow-hidden">
          <div aria-hidden className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-[#C9A050]/[0.07] rounded-full blur-3xl" />
          <div aria-hidden className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-[#C9A050]/[0.04] rounded-full blur-3xl" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70">Home</Link>
              <span>/</span>
              <Link to="/ie/" className="hover:text-white/70">Ireland</Link>
              <span>/</span>
              <span className="text-white/60">Endolift Dublin</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-[10px] uppercase tracking-[0.24em] mb-5">
                <Sparkles className="w-3 h-3" /> Dublin · Doctor-led · From €2,800
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1]">
                Endolift in Dublin —{" "}
                <span className="text-[#C9A050]">delivered as Endolaser.</span>
              </h1>

              {/* Speakable lead — AI Overviews target */}
              <p className="mt-5 text-base sm:text-lg text-white/70 font-light leading-relaxed speakable">
                Endolift®, also known generically as <strong className="text-white">Endolaser</strong>, is a doctor-led
                intra-tissue laser-fibre lift that tightens the lower face, jawline and neck without surgery.
                At Cosmedocs Dublin it is performed on a <strong className="text-white">UKCA &amp; CE-marked dual-wavelength platform</strong>
                {" "}(1470nm + 980nm) by a doctor trained at the <strong className="text-white">Harley Street Institute</strong> in London —
                currently one of the few true intra-tissue laser-fibre lifts available in Ireland.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[11px] text-[#C9A050] font-medium uppercase tracking-wide">
                  <BadgeCheck className="w-3.5 h-3.5" /> UKCA &amp; CE Platform
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium uppercase tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5" /> Irish Medical Council Registered
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium uppercase tracking-wide">
                  <MapPin className="w-3.5 h-3.5" /> Dublin
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDITORIAL NOTE — terminology */}
        <section className="px-4 sm:px-6 pb-8">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">Endolift® vs Endolaser — same treatment.</strong> Endolift® is a registered trademark of the Italian device manufacturer Eufoton. Endolaser is the generic clinical term for the same intra-tissue laser-fibre technique using dual 1470nm + 980nm wavelengths. At our Dublin clinic we use the term Endolaser because we deliver it on a UKCA &amp; CE-marked equivalent platform — clinical principle, mechanism and patient experience are identical.
            </p>
          </div>
        </section>

        {/* WHY IT WORKS */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Why intra-tissue laser changed non-surgical lifting</h2>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              Most "tightening" devices in Ireland work from the surface — radiofrequency, HIFU, microneedling. They heat the skin from outside, which is comfortable but limits how much energy actually reaches the deep tissue that holds the face up. Endolaser inverts the problem: a fibre the width of a human hair is introduced under the skin so the energy is delivered <strong className="text-white">directly where the laxity sits</strong>.
            </p>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              The fibre carries two wavelengths working in tandem. The <strong className="text-white">1470nm</strong> wavelength is preferentially absorbed by water and small fat cells — it remodels the subdermal layer and reduces the unwanted fat pockets that blur the jawline and chin. The <strong className="text-white">980nm</strong> wavelength is preferentially absorbed by collagen and connective tissue — it contracts the fibrous septae that anchor the skin envelope to the deeper face. The combined effect is volume reduction <em>and</em> skin retraction in the same pass.
            </p>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              This is why Endolaser produces a result you do not see from fat-dissolving injections or thread lifts alone. It does not just remove fat (which can leave loose skin) and it does not just lift skin (which can leave bulk). It does both, in proportion.
            </p>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="px-4 sm:px-6 py-12 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Who Endolaser is for in Ireland</h2>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              The Irish patient profile we treat most often is the 35–60 year-old professional in Dublin, Cork, Galway or Limerick who has watched the jawline soften, the jowls drop slightly and the neck lose definition — and is not yet ready for surgery. The skin envelope is still good. The laxity is moderate. Skincare and Botox no longer move the needle the way they did at 30.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-[#C9A050] mb-2" />
                <h3 className="font-medium">Excellent candidate</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/65">
                  <li>· Early jowl formation, softening jawline</li>
                  <li>· Submental fullness (double chin) with mild-to-moderate skin laxity</li>
                  <li>· Loss of neck definition without heavy banding</li>
                  <li>· Healthy, stable weight</li>
                  <li>· Realistic expectations of a non-surgical result</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-[#C9A050] mb-2" />
                <h3 className="font-medium">Better suited to surgery or another route</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/65">
                  <li>· Severe laxity with heavy platysmal banding (neck lift)</li>
                  <li>· Very large submental fat pad (surgical lipo ± Endolaser)</li>
                  <li>· Recessed chin without volume support (chin filler / implant first)</li>
                  <li>· Active weight loss (treat once stable)</li>
                  <li>· Pregnancy or breastfeeding</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ZONES + PRICING TABLE */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Treatment zones &amp; transparent pricing</h2>
            <p className="mt-3 text-white/65 font-light text-sm">All prices in euro, VAT included. Final quote confirmed at consultation.</p>

            <div className="mt-6 rounded-xl border border-white/10 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/80">Zone</TableHead>
                    <TableHead className="text-white/80">Fibre</TableHead>
                    <TableHead className="text-white/80 flex items-center gap-1"><Clock className="w-3 h-3" /> Time</TableHead>
                    <TableHead className="text-white/80 text-right">From</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ZONES.map((z) => (
                    <TableRow key={z.zone} className="border-white/10">
                      <TableCell className="font-light text-white/90">{z.zone}</TableCell>
                      <TableCell className="text-white/60 text-sm">{z.fibre}</TableCell>
                      <TableCell className="text-white/60 text-sm">{z.time}</TableCell>
                      <TableCell className="text-right text-[#C9A050] font-light">{z.from}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <p className="mt-4 text-xs text-white/40">
              <Euro className="inline w-3 h-3 mr-1" />
              Pricing reflects single-session, single-zone treatment. Combined zones (e.g. face + neck) are quoted as a package — typically 10–15% lower than the sum of individual zones.
            </p>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="px-4 sm:px-6 py-12 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Endolaser vs other lifting options in Dublin</h2>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              The most honest way to present Endolaser is alongside the alternatives most Irish patients are weighing it against. There is no universally "best" treatment — there is the right treatment for your anatomy, your downtime tolerance and your budget.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { t: "Endolaser vs HIFU (Ultherapy, Sofwave)", b: "HIFU delivers focused ultrasound through the skin — comfortable and needle-free, but the energy is dispersed across the skin envelope and the result on a real jowl is modest. Endolaser delivers energy directly inside the tissue. On the lower face it produces a visibly stronger result, with one trade-off: it is a minor procedure, with bruising, not a lunchtime treatment." },
                { t: "Endolaser vs PDO / cog threads", b: "Threads give an immediate mechanical lift via barbed sutures. Endolaser gives a progressive thermal lift via collagen retraction and fat reduction. Threads are best for someone who wants a same-day change in jawline definition. Endolaser is best for someone who wants sustained skin quality and contour. The two are sometimes combined — threads for shape, Endolaser for skin." },
                { t: "Endolaser vs fat-dissolving injections (Aqualyx, Lemon Bottle)", b: "Fat dissolvers only address fat. In any patient over ~35, removing fat without addressing skin can leave a deflated, loose look. Endolaser addresses both fat and skin in one pass. For a young patient with pure fat and excellent elasticity, injections are cheaper. For anyone with any laxity, Endolaser gives a cleaner result." },
                { t: "Endolaser vs surgical neck lift / lower facelift", b: "Surgery remains the gold standard for advanced laxity, heavy platysmal banding and large fat deposits. It is also a bigger commitment — general anaesthetic, scars, recovery measured in weeks. Endolaser has a much lower ceiling of correction but is the right answer for a large group of patients who are not yet at the surgical threshold." },
                { t: "Endolaser vs RF microneedling (Morpheus8)", b: "RF microneedling heats the dermis via tiny needles delivering radiofrequency. It improves skin quality and produces modest tightening — but its depth of action is limited and it does not melt fat. Endolaser works deeper and addresses contour. For pure skin-quality work, RF microneedling has a role; for lifting and slimming, Endolaser." },
              ].map((c) => (
                <div key={c.t} className="rounded-xl border border-white/10 bg-black/40 p-5">
                  <h3 className="text-base font-medium text-white">{c.t}</h3>
                  <p className="mt-2 text-sm text-white/70 font-light leading-relaxed">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE COSMEDOCS PROTOCOL */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">The Cosmedocs Dublin protocol</h2>
            <ol className="mt-6 space-y-5">
              {[
                { n: "01", t: "Consultation (45 min)", b: "Doctor-led face analysis, candidacy assessment, photography. Honest direction — including telling you when Endolaser is not the right answer for you." },
                { n: "02", t: "Treatment day (60–120 min)", b: "Local anaesthesia. The fibre is introduced via a single entry point per zone — usually behind the ear or under the chin. You are awake, comfortable, and walk out the same day." },
                { n: "03", t: "First 72 hours", b: "Swelling and bruising peak. Cold compress, sleep elevated, no exercise. Most patients return to work in 2–3 days; we will tell you honestly if you should plan more." },
                { n: "04", t: "Weeks 2–6", b: "Swelling resolves. Skin begins to retract visibly. Most patients see meaningful change by week 6." },
                { n: "05", t: "Months 3–6", b: "Peak result. Continued collagen remodelling. Photographs at month 3." },
                { n: "06", t: "Maintenance", b: "A single Endolaser session typically lasts 18–24 months. Most patients top up at 18 months with a lighter treatment." },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <div className="text-[#C9A050] text-sm font-light tracking-widest pt-1 w-8 flex-shrink-0">{s.n}</div>
                  <div>
                    <h3 className="text-base font-medium text-white">{s.t}</h3>
                    <p className="mt-1 text-sm text-white/65 font-light leading-relaxed">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SAFETY + REGULATION */}
        <section className="px-4 sm:px-6 py-12 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Safety, regulation and who is allowed to perform Endolaser in Ireland</h2>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              Endolaser is a medical procedure — not a beauty treatment. Under Irish Medical Council and Department of Health guidance, intra-tissue laser involving subdermal fibre placement and local anaesthesia is a doctor-led procedure. It should not be performed by aesthetic therapists, nurses without prescribing rights, or non-medical practitioners.
            </p>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              At Cosmedocs Dublin the treatment is performed by a doctor on the Irish Medical Council register, with formal training on the device at the Harley Street Institute in London — the European training centre for intra-tissue laser-fibre techniques. The platform used is UKCA &amp; CE-marked. Results, downtime, contraindications and consent are discussed in writing at consultation.
            </p>
            <p className="mt-4 text-white/70 font-light leading-relaxed">
              <strong className="text-white">Two questions to ask any Irish clinic offering "laser facelift" or "Endolaser":</strong> (1) Is the practitioner a registered medical doctor? (2) What specific training have they completed on the dual-wavelength fibre device? An honest clinic will answer both in writing.
            </p>
          </div>
        </section>

        {/* RELATED — INTERNAL LINKING */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Related reading</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                { to: "/treatments/endolift-london/", t: "Endolift London (clinical reference page)" },
                { to: "/treatments/endolaser/", t: "Endolaser — full device explainer" },
                { to: "/treatments/endolift-london/double-chin/", t: "Endolift for double chin" },
                { to: "/treatments/endolift-london/recovery/", t: "Endolift recovery timeline" },
                { to: "/treatments/endolift-london/safety/", t: "Endolift safety profile" },
                { to: "/pdo-threads-vs-hifu/", t: "PDO threads vs HIFU — comparison" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#C9A050]/40 hover:bg-[#C9A050]/[0.04] transition-all flex items-center justify-between gap-3"
                >
                  <span className="text-sm font-light text-white/85">{l.t}</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A050] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-8 text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3" /> Now booking · Dublin
            </div>
            <h3 className="text-2xl sm:text-3xl font-extralight">Your Endolaser consultation in Dublin</h3>
            <p className="mt-3 text-white/65 font-light text-sm max-w-xl mx-auto">
              A 45-minute doctor-led face analysis. You will leave with an honest plan — including whether Endolaser is the right answer for you, or whether another route fits better.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://app.acuityscheduling.com/schedule.php?owner=18866586"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/contact/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-[#C9A050]">
                Ask a question first →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extralight">Common questions — Endolift Dublin</h2>
            <Accordion type="single" collapsible className="mt-5 space-y-2">
              {FAQ.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`q${i}`}
                  className="border border-white/10 rounded-xl bg-white/[0.02] px-4"
                >
                  <AccordionTrigger className="text-left font-light text-white/85 hover:no-underline py-3 text-sm">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/65 text-sm font-light leading-relaxed pb-4">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
}
