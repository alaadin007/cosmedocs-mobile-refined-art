import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DosageSidebar from "@/components/dosage/DosageSidebar";
import endolaserBaJawline from "@/assets/endolaser-ba-jawline-neck.jpg";

const FAQ = [
  { q: "Is Endolift safe?", a: "Endolift is a CE-marked, minimally invasive laser fibre lift that has been performed safely worldwide for over a decade. The optical fibre is so fine it leaves no scar. The most common side effects are mild swelling and bruising for 5–10 days. As with any laser procedure, results and safety depend heavily on the operator's training." },
  { q: "What is Endolift?", a: "Endolift is an Endolaser (intra-tissue laser) treatment that uses a 1470nm or dual-wavelength optical fibre inserted under the skin to tighten lax tissue, melt small fat pockets, and stimulate collagen — without surgical incisions. It is sometimes called a 'laser fibre lift' or non-surgical endo-laser." },
  { q: "How long does Endolift last?", a: "Most patients see results lasting 18–24 months from a single treatment, with continued collagen remodelling for up to 12 months after the procedure. Maintenance every 18 months is typical." },
  { q: "How long is recovery from Endolift?", a: "Most patients return to work in 2–3 days. Visible swelling resolves within 5–10 days. Tightening is progressive and best appreciated at 8–12 weeks." },
  { q: "Endolift vs HIFU — which is better?", a: "Both target laxity. Endolift works by direct intra-tissue thermal action via an optical fibre — more powerful, more controllable, but operator-dependent. HIFU is non-invasive ultrasound delivered through the skin, more comfortable but less precise. For jowls, neck and lower-face contouring, Endolift typically produces a stronger result." },
  { q: "Endolift vs PDO Threads — which is right for me?", a: "Threads provide immediate mechanical lift via cogged sutures. Endolift provides progressive thermal tightening and fat reduction. Both have their place — threads for definition and immediate change, Endolift for resurfacing and sustained skin retraction. They are sometimes combined." },
  { q: "Does Endolift hurt?", a: "Endolift is performed under local anaesthesia. Most patients describe a warm or tingling sensation rather than pain. Some discomfort is normal during fibre insertion but is well-controlled." },
  { q: "Who is not a candidate for Endolift?", a: "Pregnant or breastfeeding patients, those with active skin infection in the treatment zone, and those with very advanced laxity that requires surgical lifting. Consultation establishes candidacy." },
  { q: "How much does Endolift cost in London?", a: "Endolift in London typically ranges from £2,500 for the lower face up to £4,500 for full face and neck. Cost reflects the complexity of the area and the time required by the operating doctor." },
  { q: "Is Endolift available in London?", a: "Yes — CosmeDocs offers Endolaser treatment from our Harley Street consulting rooms, with the procedure performed by appropriately trained partner clinicians. Consultation is required to confirm candidacy." },
];

const EndoliftLondon = () => {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "MedicalProcedure", name: "Endolift (Endolaser Fibre Lift) — London", procedureType: "https://schema.org/TherapeuticProcedure", bodyLocation: "Lower face, jawline, neck, jowls", howPerformed: "A 1470nm optical fibre is inserted into the subdermal layer under local anaesthesia. Pulsed laser energy tightens collagen, retracts skin and reduces small fat pockets without surgical incisions.", url: "https://www.cosmedocs.com/treatments/endolift-london/", provider: { "@type": "MedicalBusiness", name: "CosmeDocs", url: "https://www.cosmedocs.com" } };

  return (
    <>
      <Helmet>
        <title>Endolift London | Endolaser Fibre Lift Harley Street | CosmeDocs</title>
        <meta name="description" content="Endolift London — non-surgical Endolaser fibre lift for jowls, jawline and neck. Doctor-led at Harley Street. CE-marked technology, minimally invasive, 18–24 month results." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/endolift-london/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: "Before and after Endolift laser fibre lift — jawline and neck, London",
          description: "Clinical before-and-after photograph showing jawline and neck tightening following Endolift (1470nm Endolaser) treatment at Cosmedocs Harley Street London. Published with patient consent; individual results vary.",
          contentUrl: "https://www.cosmedocs.com/assets/endolaser-ba-jawline-neck.jpg",
          representativeOfPage: false,
          creditText: "Cosmedocs · Harley Street",
          copyrightNotice: "© Cosmedocs",
          acquireLicensePage: "https://www.cosmedocs.com/contact/",
          creator: { "@type": "Organization", name: "Cosmedocs" },
          copyrightHolder: { "@type": "Organization", name: "Cosmedocs" }
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A050]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C9A050]/3 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
                  <Link to="/" className="hover:text-white/60">Home</Link>
                  <span>/</span>
                  <Link to="/treatments/" className="hover:text-white/60">Treatments</Link>
                  <span>/</span>
                  <span className="text-white/50">Endolift London</span>
                </nav>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-xs uppercase tracking-wider mb-6">
                  <Sparkles className="w-3 h-3" /> Endolaser • Doctor-Led
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-6">
                  Endolift London: <span className="text-[#C9A050]">The Non-Surgical Laser Fibre Lift</span>
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 uppercase tracking-wider mb-6">
                  {["Harley Street", "1470nm Endolaser", "Doctor-Led", "18–24 mo Results"].map((item) => (
                    <div key={item} className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C9A050]" /><span>{item}</span></div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  Endolift is an <strong className="text-white/90">intra-tissue laser fibre treatment</strong> that tightens skin, defines the jawline and reduces small fat pockets without surgical incisions. A fine optical fibre — finer than a strand of hair — delivers controlled 1470nm energy beneath the skin. Recovery is days, not weeks. Results last 18–24 months. At CosmeDocs we deliver Endolaser from our Harley Street consulting rooms, doctor-led from consultation to follow-up.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 min-w-0 space-y-14">

              {/* Sub-cluster nav */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { t: "Is Endolift safe?", d: "Risks, side effects, candidacy.", to: "/treatments/endolift-london/safety/" },
                  { t: "Recovery & aftercare", d: "Day-by-day timeline + checklist.", to: "/treatments/endolift-london/recovery/" },
                  { t: "Endolift for double chin", d: "Submental fat + skin in one session.", to: "/treatments/endolift-london/double-chin/" },
                  { t: "How long does Endolift last?", d: "Duration, maintenance & longevity.", to: "/treatments/endolift-london/duration/" },
                  { t: "Endolaser for the body", d: "Arms, abdomen, knees & inner thighs.", to: "/treatments/endolaser-body/" },
                  { t: "Endolaser for cellulite", d: "Subdermal smoothing on thighs & buttocks.", to: "/treatments/endolaser-cellulite/" },
                  { t: "Endolift® alternative (2G)", d: "Dual-wavelength evolution — 980nm + 1470nm.", to: "/treatments/endolift-alternative/" },
                  { t: "Laser Fibre Lift vs Endolift®", d: "Head-to-head clinical comparison.", to: "/treatments/laser-fibre-lift-vs-endolift/" },
                  { t: "Better than Endolift®?", d: "The 2G science, explained.", to: "/blog/better-than-endolift/" },
                ].map((c) => (
                  <Link key={c.t} to={c.to} className="group block border border-[#C9A050]/25 rounded-xl bg-[#C9A050]/[0.04] hover:border-[#C9A050]/60 transition-colors p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#C9A050]">In this cluster</div>
                    <div className="mt-1 text-sm font-medium text-white">{c.t}</div>
                    <div className="mt-1 text-xs text-white/55 leading-relaxed">{c.d}</div>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs text-[#C9A050]">Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></div>
                  </Link>
                ))}
              </div>

              <div className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/[0.04]">
                <h2 className="text-lg font-medium text-[#C9A050] mb-4">At a glance</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    ["Best for:", "Jowls, jawline, neck laxity, lower-face definition"],
                    ["Anaesthesia:", "Local — patient is awake and comfortable"],
                    ["Treatment time:", "45–90 minutes depending on areas"],
                    ["Downtime:", "2–3 days off work; visible swelling 5–10 days"],
                    ["Visible results:", "From 4 weeks; full result at 8–12 weeks"],
                    ["Lasts:", "18–24 months, with continued collagen remodelling"],
                    ["From:", "£2,500 lower face / £4,500 full face & neck"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" /><span><strong className="text-white/90">{k}</strong> {v}</span></li>
                  ))}
                </ul>
              </div>

              {/* What it is */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">What Endolift Actually Is</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Endolift is a brand name for a class of treatments more accurately called <em>Endolaser</em> — meaning intra-tissue laser. A sterile single-use optical fibre, around the diameter of a hair, is introduced under the skin through a tiny entry point. As the doctor advances and withdraws the fibre, controlled 1470nm laser energy is delivered directly into the subdermal layer.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Three biological effects happen simultaneously: collagen contracts and tightens immediately; small fat pockets are gently liquefied and metabolised; and the surrounding tissue enters a sustained collagen remodelling phase that continues for 6–12 months. The result is a progressive lift, sharper definition along the jawline, and tighter skin texture — all without surgical incisions, sutures, or general anaesthesia.
                </p>
              </div>

              {/* Wavelengths */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Why 1470nm — and Why Wavelength Matters</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  1470nm is the wavelength preferentially absorbed by water and lipids in subdermal tissue. It produces precise thermal action with a narrow zone of effect, which is exactly what the operator needs to retract skin and reduce fat without injuring overlying structures. Some advanced Endolaser platforms combine 1470nm with a second wavelength (typically 980nm) for differential effects in the same pass — what we describe as a <em>dual-wavelength Endolaser</em>.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  This precision is what separates Endolift from older non-invasive devices: the laser is delivered <em>inside</em> the tissue you want to change, not transmitted through the skin to reach it.
                </p>
              </div>

              {/* Candidacy */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Who Endolift Is For</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  The ideal candidate is a patient in their late 30s through 60s with mild-to-moderate skin laxity, early jowling, soft jawline definition, or a "double chin" that is more skin-and-fat than purely fat. Endolift is also appropriate for some younger patients with hereditary submental fullness who want jaw definition without surgery.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Endolift is <em>not</em> a substitute for facelift surgery in patients with advanced laxity. In consultation we are honest: if surgery would give you a meaningfully better result, we will tell you and refer you appropriately.
                </p>
              </div>

              {/* Comparison */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Endolift vs Threads vs HIFU vs Mini-Facelift</h2>
                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-white/[0.08]">
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Treatment</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Mechanism</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Lasts</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Downtime</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Endolift", "Intra-tissue laser tightening + fat melt", "18–24 months", "2–3 days"],
                        ["PDO Threads", "Mechanical lift via cogged sutures", "12–18 months", "3–5 days"],
                        ["HIFU", "Transcutaneous focused ultrasound", "9–12 months", "None"],
                        ["Mini-Facelift", "Surgical SMAS lifting", "5–10 years", "10–14 days"],
                      ].map(([a, b, c, d]) => (
                        <TableRow key={a} className="border-b border-white/[0.04]">
                          <TableCell className="text-sm text-white/70">{a}</TableCell>
                          <TableCell className="text-sm text-white/50">{b}</TableCell>
                          <TableCell className="text-sm text-white/50">{c}</TableCell>
                          <TableCell className="text-sm text-white/50">{d}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Procedure walkthrough */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">What the Treatment Day Looks Like</h2>
                <div className="space-y-3 text-sm text-white/60 leading-relaxed">
                  <p><strong className="text-white/80">1. Consultation & marking (15 min)</strong> — the doctor maps treatment vectors and confirms your goals.</p>
                  <p><strong className="text-white/80">2. Local anaesthesia (10 min)</strong> — the treatment area is numbed; you stay awake.</p>
                  <p><strong className="text-white/80">3. Endolaser delivery (45–60 min)</strong> — a fine fibre is introduced through one or two micro-entry points; controlled energy is delivered along planned vectors.</p>
                  <p><strong className="text-white/80">4. Recovery (10 min)</strong> — small dressings applied; you go home the same day.</p>
                </div>
              </div>

              {/* Recovery */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Recovery, Honestly</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  Expect mild swelling and possible bruising for 5–10 days. Most patients return to work within 48–72 hours; visible signs are usually camouflageable with light makeup after day 4. The skin can feel firm and slightly tender for two weeks. Tightening is progressive: you will see visible change at four weeks and the full result at 8–12 weeks, with continued improvement for up to 12 months.
                </p>
              </div>

              {/* CQC */}
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-xs uppercase tracking-wider text-[#C9A050] mb-2">Regulated medical care</p>
                <p className="text-sm text-white/60 leading-relaxed">
                  We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments. Endolift is performed by appropriately trained partner clinicians under doctor-led oversight. CosmeDocs has operated from Harley Street since 2007.
                </p>
              </div>

              {/* Warning */}
              <div className="border border-amber-500/20 rounded-2xl p-6 bg-amber-500/[0.03]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-2">Operator dependency is real</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Endolaser is a powerful intra-tissue laser. In trained hands it produces beautiful, sustained results. In untrained hands the same energy can cause uneven fat loss, contour irregularities or thermal injury. Always confirm who will perform the procedure and what their training in Endolaser specifically — not just generic laser — looks like.
                    </p>
                  </div>
                </div>
              </div>

              {/* Before & After */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-3">Before & After</h2>
                <p className="text-sm text-white/50 font-light leading-relaxed mb-4">
                  Jawline and neck tightening following Endolift — subtle, natural redefinition. Individual results vary.
                </p>
                <figure className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
                  <img
                    src={endolaserBaJawline}
                    alt="Before and after Endolift laser fibre lift — jawline and neck, Cosmedocs Harley Street London"
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <figcaption className="px-5 py-3 text-xs text-white/50 font-light space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <span>Left: before · Right: after Endolift</span>
                      <span className="text-[#C9A050]/70">Cosmedocs · Harley Street</span>
                    </div>
                    <p className="text-[11px] text-white/40 leading-relaxed border-t border-white/[0.06] pt-2">
                      <strong className="text-white/60">Individual results disclaimer:</strong> results vary between patients and depend on anatomy, age, lifestyle and aftercare. Images shown are of a single patient and are not a guarantee of outcome.
                      <span className="block mt-1"><strong className="text-white/60">Patient consent:</strong> these clinical photographs are published with the patient's written, informed consent for educational and marketing purposes. No images are shared without explicit consent.</span>
                    </p>
                  </figcaption>
                </figure>
              </div>

              {/* FAQ */}
              <div>

                <h2 className="text-2xl font-extralight text-white mb-4">Common Questions</h2>
                <Accordion type="single" collapsible className="border-t border-white/[0.06]">
                  {FAQ.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/[0.06]">
                      <AccordionTrigger className="text-left text-white/80 hover:text-[#C9A050] text-sm font-light">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-sm text-white/50 leading-relaxed">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Internal cluster */}
              <div className="border-t border-white/[0.06] pt-8">
                <h3 className="text-xs uppercase tracking-wider text-white/40 mb-4">Continue reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Endolaser Brow Lift (Non-Surgical)", path: "/treatments/eyebrow-lift-endolaser/" },
                    { label: "PDO Threads — Cogged & Mono", path: "/non-surgical-facelift/" },
                    { label: "Liquid Facelift (8/11-Point Lift)", path: "/ha-makeover/" },
                    { label: "Mini Facelifts Hub", path: "/non-surgical-facelift-hub/" },
                    { label: "Skin Rejuvenation Hub", path: "/skin-rejuvenation/" },
                  ].map((l) => (
                    <Link key={l.path} to={l.path} className="flex items-center justify-between border border-white/[0.06] rounded-xl px-4 py-3 hover:border-[#C9A050]/30 hover:bg-white/[0.02] transition-all group">
                      <span className="text-sm text-white/70 group-hover:text-[#C9A050]">{l.label}</span>
                      <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-[#C9A050]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <DosageSidebar
                  title="Endolift Quick Facts"
                  rows={[
                    { area: "Wavelength", value: "1470nm" },
                    { area: "Anaesthesia", value: "Local" },
                    { area: "Treatment time", value: "45–90 min" },
                    { area: "Downtime", value: "2–3 days" },
                    { area: "Lasts", value: "18–24 mo" },
                    { area: "Lower face from", value: "£2,500" },
                    { area: "Full face & neck", value: "£4,500" },
                  ]}
                  concepts={[
                    "1470nm intra-tissue laser action",
                    "Why dual-wavelength matters",
                    "Endolift vs HIFU vs Threads",
                    "When surgery is the better option",
                    "Operator training as a safety factor",
                  ]}
                  related={[
                    { label: "PDO Threads / Non-Surgical Facelift", path: "/non-surgical-facelift/" },
                    { label: "Mini Facelifts Hub", path: "/non-surgical-facelift-hub/" },
                    { label: "Liquid Facelift", path: "/ha-makeover/" },
                    { label: "Skin Rejuvenation", path: "/skin-rejuvenation/" },
                    { label: "About CosmeDocs", path: "/about-us/" },
                  ]}
                />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default EndoliftLondon;
