import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import eyebrowLiftHero from "@/assets/eyebrow-lift-hero.jpg";

const FAQ = [
  {
    q: "What is a non-surgical eyebrow lift with Endolaser?",
    a: "A non-surgical eyebrow lift uses a fine 1470nm Endolaser fibre — finer than a hair — placed under the skin of the lateral brow and temple. The controlled thermal energy contracts the existing collagen for an immediate subtle lift and triggers a sustained collagen-remodelling phase that elevates the tail of the brow over 6–12 weeks. There are no incisions, no sutures and no general anaesthetic.",
  },
  {
    q: "How is the Endolaser brow lift different from Botox brow lift?",
    a: "Botox lifts the brow by relaxing the muscles that pull it down — a chemical effect that lasts 3–4 months. Endolaser lifts the brow physically, by tightening the connective tissue and stimulating new collagen — a structural effect that lasts 18–24 months. Many patients combine the two: Botox for the muscle vector, Endolaser for the soft-tissue scaffold.",
  },
  {
    q: "How long do eyebrow lift results last?",
    a: "Most patients enjoy 18–24 months from a single Endolaser brow lift, with continued collagen remodelling for up to 12 months after treatment. Maintenance every 18–24 months is typical and usually requires fewer passes than the first session.",
  },
  {
    q: "How much does a non-surgical brow lift cost in London?",
    a: "Endolaser brow lift in London is priced from £1,200 at our Harley Street consulting rooms, depending on whether one or both sides are treated and whether it is combined with other facial vectors. The fee includes consultation, local anaesthesia, the procedure and aftercare review.",
  },
  {
    q: "Is the Endolaser brow lift painful?",
    a: "It is performed under local anaesthesia, so most patients describe a warm or tingling sensation rather than pain. A single fibre entry point near the hairline means there is no significant discomfort during or after the procedure.",
  },
  {
    q: "How long is the recovery?",
    a: "Most patients return to work within 24–48 hours. Mild swelling above the brow can last 3–7 days and is easily camouflaged. The lift becomes visible at 4 weeks and reaches its full expression by 8–12 weeks.",
  },
  {
    q: "Who is the ideal candidate?",
    a: "Patients in their late 30s to 60s with a heavy or descending lateral brow, hooded upper eyelids caused by skin laxity rather than excess fat, or asymmetric brow position. It is also useful for younger patients seeking subtle pre-emptive elevation of the brow tail.",
  },
  {
    q: "Endolaser brow lift vs surgical brow lift — which should I choose?",
    a: "Surgery is the right answer for advanced descent, deep forehead furrows or eyelid skin that needs excision. The Endolaser brow lift is the right answer for early-to-moderate descent, asymmetry and heaviness — when patients want a refreshed, lifted look without an operation, scars or two weeks of downtime.",
  },
];

const EyebrowLiftEndolaser = () => {
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
    name: "Non-Surgical Eyebrow Lift (Endolaser Fibre Lift)",
    procedureType: "https://schema.org/TherapeuticProcedure",
    bodyLocation: "Lateral eyebrow, temple, upper periorbital region",
    howPerformed:
      "A fine 1470nm Endolaser optical fibre is introduced through a single micro-entry point near the temporal hairline under local anaesthesia. Pulsed laser energy contracts collagen and remodels the connective scaffold supporting the lateral brow, producing immediate elevation and a sustained 6–12 month collagen response.",
    url: "https://www.cosmedocs.com/treatments/eyebrow-lift-endolaser/",
    provider: {
      "@type": "MedicalBusiness",
      name: "CosmeDocs",
      url: "https://www.cosmedocs.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
      { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.cosmedocs.com/treatments/" },
      { "@type": "ListItem", position: 3, name: "Eyebrow Lift Endolaser", item: "https://www.cosmedocs.com/treatments/eyebrow-lift-endolaser/" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Non-Surgical Eyebrow Lift London | Endolaser Fibre Brow Lift | CosmeDocs</title>
        <meta
          name="description"
          content="Non-surgical eyebrow lift in London using Endolaser fibre technology. A subtle, doctor-led brow elevation at Harley Street — no surgery, no scars, results lasting 18–24 months."
        />
        <link
          rel="canonical"
          href="https://www.cosmedocs.com/treatments/eyebrow-lift-endolaser/"
          data-rh="true"
        />
        <meta property="og:title" content="Non-Surgical Eyebrow Lift — Endolaser Fibre Lift London" />
        <meta
          property="og:description"
          content="Doctor-led Endolaser brow lift at Harley Street. Subtle elevation, no surgery, 18–24 month results."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/eyebrow-lift-endolaser/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(procedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            src="/videos/endoeyes.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A050]/[0.06] rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C9A050]/[0.04] rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/30 mb-8">
              <Link to="/" className="hover:text-white/60">Home</Link>
              <span>/</span>
              <Link to="/treatments/" className="hover:text-white/60">Treatments</Link>
              <span>/</span>
              <span className="text-white/50">Eyebrow Lift Endolaser</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-xs uppercase tracking-wider mb-6">
                  <Sparkles className="w-3 h-3" /> Endolaser · Doctor-Led · Harley Street
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-6">
                  Non-Surgical Eyebrow Lift
                  <span className="block text-[#C9A050] font-light mt-2">Endolaser Fibre Lift, London</span>
                </h1>
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-6">
                  A quiet, structural lift of the lateral brow — performed with a single Endolaser fibre
                  finer than a strand of hair, under local anaesthesia, in our Harley Street consulting rooms.
                  No incisions. No sutures. No two weeks off. Just a refreshed, lifted brow that reads as
                  rested — never operated on.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-6 py-5 rounded-full">
                      Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link to="/treatments/endolaser/">
                    <Button variant="ghost" className="border border-white/15 text-white/70 hover:text-white hover:bg-white/5 px-6 py-5 rounded-full">
                      About the Endolaser
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div
                  className="relative rounded-2xl overflow-hidden ring-1 ring-[#C9A050]/20 shadow-[0_30px_80px_-20px_rgba(201,160,80,0.35)]"
                  style={{ boxShadow: "inset 0 0 60px rgba(201,160,80,0.12)" }}
                >
                  <img
                    src={eyebrowLiftHero}
                    alt="Non-surgical Endolaser eyebrow lift — gold lift vector along the lateral brow"
                    width={1024}
                    height={1024}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Two-col body */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className="flex-1 min-w-0 space-y-12">
              {/* At a glance */}
              <div className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/[0.04]">
                <h2 className="text-lg font-medium text-[#C9A050] mb-4">At a glance</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    ["Best for:", "Heavy or descending lateral brow, hooded upper lid, brow asymmetry"],
                    ["Anaesthesia:", "Local — patient awake and comfortable"],
                    ["Treatment time:", "30–45 minutes for both brows"],
                    ["Downtime:", "24–48 hours; mild swelling 3–7 days"],
                    ["Visible result:", "From 4 weeks; full expression at 8–12 weeks"],
                    ["Lasts:", "18–24 months, with continued collagen remodelling"],
                    ["From:", "£1,200 at Harley Street"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span>
                        <strong className="text-white/90">{k}</strong> {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it is */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">
                  What the Endolaser Brow Lift Actually Is
                </h2>
                <p className="text-sm text-white/65 leading-relaxed mb-4">
                  The non-surgical eyebrow lift is a focused application of <em>Endolaser</em> — an
                  intra-tissue laser delivered through a single sterile optical fibre, finer than a strand of
                  hair. The fibre is introduced through one micro-entry point near the temporal hairline,
                  hidden inside the hair, and advanced under the skin of the lateral brow. As the doctor
                  withdraws the fibre, controlled 1470nm energy is delivered exactly where the brow soft
                  tissue needs to retract.
                </p>
                <p className="text-sm text-white/65 leading-relaxed mb-4">
                  Three biological events happen at once. Existing collagen contracts, producing an
                  immediate subtle elevation. Tiny pockets of pre-septal fat that contribute to brow
                  heaviness are gently liquefied and metabolised. And the surrounding tissue enters a
                  sustained collagen-remodelling phase that continues to lift the tail of the brow for
                  6–12 weeks after treatment. The result is structural, not chemical — a brow that sits
                  higher because the scaffold beneath it is firmer.
                </p>
                <p className="text-sm text-white/65 leading-relaxed">
                  This is the same Endolaser principle we use across the Laser Fibre Lift programme — only
                  miniaturised to a single anatomical unit. One fibre, one entry, one quiet lift.
                </p>
              </div>

              {/* Why patients choose it */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">
                  Why Patients Choose a Non-Surgical Brow Lift
                </h2>
                <p className="text-sm text-white/65 leading-relaxed mb-4">
                  The lateral brow is the first part of the upper face to descend with age. Even
                  three or four millimetres of drop closes the eye, casts a shadow over the lid and adds a
                  decade to the resting expression. Surgery — a temporal or endoscopic brow lift — corrects
                  it definitively, but it requires general anaesthesia, scalp incisions and ten to fourteen
                  days of social downtime. For many patients the descent is real but not yet surgical, and
                  the appetite for an operation is low.
                </p>
                <p className="text-sm text-white/65 leading-relaxed">
                  The Endolaser brow lift fills exactly that gap. It is structural enough to physically
                  elevate the brow tail — which Botox alone cannot do once descent is established — and
                  conservative enough to avoid the operation. Patients leave the clinic the same day, return
                  to work within 48 hours, and watch the lift settle in over the following weeks. The
                  result is quiet, in keeping with our <em>invisible art</em> philosophy: a more open eye,
                  a calmer brow, no announcement.
                </p>
              </div>

              {/* Treatment day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">
                  What Treatment Day Looks Like
                </h2>
                <div className="space-y-3 text-sm text-white/65 leading-relaxed">
                  <p>
                    <strong className="text-white/85">1. Mapping (10 min)</strong> — the doctor marks the
                    lift vectors on the lateral brow and temple, taking photographs and confirming the
                    elevation goal millimetre by millimetre.
                  </p>
                  <p>
                    <strong className="text-white/85">2. Local anaesthesia (10 min)</strong> — the treatment
                    area and the temporal entry point are numbed. You stay fully awake and comfortable.
                  </p>
                  <p>
                    <strong className="text-white/85">3. Endolaser delivery (20–30 min)</strong> — a single
                    Endolaser fibre is introduced through a sub-millimetre entry point hidden in the
                    hairline. Energy is delivered in controlled, low-power passes along the planned vector.
                  </p>
                  <p>
                    <strong className="text-white/85">4. Recovery (5 min)</strong> — a small adhesive
                    dressing is applied at the entry point. You leave the clinic the same day.
                  </p>
                </div>
              </div>

              {/* Recovery */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">
                  Recovery, Honestly
                </h2>
                <p className="text-sm text-white/65 leading-relaxed mb-4">
                  Expect mild swelling above the brow and on the lateral forehead for three to seven days.
                  Faint bruising is possible but uncommon. The single entry point heals with no visible
                  scar in the hairline. Most patients camouflage the area easily and return to work after
                  24–48 hours.
                </p>
                <p className="text-sm text-white/65 leading-relaxed">
                  The lift is progressive. You will notice an immediate subtle elevation as the existing
                  collagen contracts, but the meaningful structural change emerges between weeks four and
                  twelve as new collagen forms. Continued improvement carries on for up to twelve months
                  before the result plateaus and holds for a further 12–18 months.
                </p>
              </div>

              {/* Combinations */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">
                  How the Brow Lift Combines With Other Treatments
                </h2>
                <p className="text-sm text-white/65 leading-relaxed mb-4">
                  The Endolaser brow lift is most powerful when sequenced rather than performed in
                  isolation. The descending brow rarely descends alone — it usually arrives with a tired
                  upper third of the face that benefits from a coordinated, doctor-led plan.
                </p>
                <ul className="space-y-3 text-sm text-white/65">
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A050] shrink-0" />
                    <span>
                      <strong className="text-white/85">Botox brow lift</strong> — relaxes the depressor
                      muscles that pull the brow down, complementing the Endolaser's structural elevation.
                      The two effects are additive, not duplicative.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A050] shrink-0" />
                    <span>
                      <strong className="text-white/85">Temple filler</strong> — re-establishes the bony
                      scaffold the brow sits on. Without temple support, even a perfectly executed brow
                      lift loses some of its lateral projection.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A050] shrink-0" />
                    <span>
                      <strong className="text-white/85">Polynucleotides</strong> for the upper-eyelid skin
                      — improves dermal quality so the lifted brow reveals smoother, brighter eyelid skin
                      beneath it.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A050] shrink-0" />
                    <span>
                      <strong className="text-white/85">Endolaser face & jawline</strong> — when descent
                      affects the lower face as well, treating both in one session gives a coherent,
                      whole-face lift in a single recovery.
                    </span>
                  </li>
                </ul>
              </div>

              {/* CQC */}
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-xs uppercase tracking-wider text-[#C9A050] mb-2">
                  Regulated medical care
                </p>
                <p className="text-sm text-white/65 leading-relaxed">
                  We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required
                  treatments. The Endolaser brow lift is performed by appropriately trained partner
                  clinicians under doctor-led oversight. CosmeDocs has operated from Harley Street since
                  2007.
                </p>
              </div>

              {/* Operator dependency */}
              <div className="border border-amber-500/20 rounded-2xl p-6 bg-amber-500/[0.03]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-2">
                      Operator dependency is real around the eye
                    </h3>
                    <p className="text-sm text-white/65 leading-relaxed">
                      The lateral brow sits over the temporal vessels and the frontal branch of the facial
                      nerve. Endolaser delivered here demands a precise, anatomically informed pass —
                      not a generic laser pass. Always confirm the operator's specific Endolaser training
                      and ask to see brow-lift outcomes from their own hand.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">
                  Common Questions
                </h2>
                <Accordion type="single" collapsible className="border-t border-white/[0.06]">
                  {FAQ.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-white/[0.06]"
                    >
                      <AccordionTrigger className="text-left text-white/85 hover:text-[#C9A050] text-sm font-light">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-white/55 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Cluster */}
              <div className="border-t border-white/[0.06] pt-8">
                <h3 className="text-xs uppercase tracking-wider text-white/40 mb-4">
                  Continue reading — Endolaser cluster
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Endolaser (Laser Fibre Lift) — Overview", path: "/treatments/endolaser/" },
                    { label: "Endolift London", path: "/treatments/endolift-london/" },
                    { label: "Endolift for Double Chin", path: "/treatments/endolift-london/double-chin/" },
                    { label: "Endolift Recovery", path: "/treatments/endolift-london/recovery/" },
                    { label: "Mini Facelifts Hub", path: "/treatments/non-surgical-facelift/" },
                    { label: "Botox Brow Lift", path: "/treatments/botox/" },
                  ].map((l) => (
                    <Link
                      key={l.path}
                      to={l.path}
                      className="flex items-center justify-between border border-white/[0.06] rounded-xl px-4 py-3 hover:border-[#C9A050]/30 hover:bg-white/[0.02] transition-all group"
                    >
                      <span className="text-sm text-white/70 group-hover:text-[#C9A050]">
                        {l.label}
                      </span>
                      <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-[#C9A050]" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="border border-[#C9A050]/30 rounded-2xl p-5 bg-[#C9A050]/[0.04]">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A050] mb-3">
                    Brow lift quick facts
                  </p>
                  <ul className="space-y-2 text-xs text-white/70">
                    {[
                      ["Wavelength", "1470nm"],
                      ["Anaesthesia", "Local"],
                      ["Treatment time", "30–45 min"],
                      ["Downtime", "24–48 hrs"],
                      ["Lasts", "18–24 mo"],
                      ["From", "£1,200"],
                    ].map(([k, v]) => (
                      <li key={k} className="flex justify-between border-b border-white/[0.05] pb-1.5">
                        <span className="text-white/50">{k}</span>
                        <span className="text-white/85">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                  <p className="text-xs text-white/60 leading-relaxed mb-4">
                    Doctor-led consultation establishes whether your brow descent is best addressed by
                    Endolaser, Botox, surgery — or a sequenced combination.
                  </p>
                  <a
                    href="https://med.as.me/harleystreet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full">
                      Book Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-4 text-white/85">
              Your <span className="text-[#C9A050]">consultation begins here</span>
            </h2>
            <p className="text-white/55 mb-8 font-light">
              A 30-minute doctor-led consultation at Harley Street will confirm whether the Endolaser brow
              lift is right for you, and how it should sit within your wider facial plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black px-8 py-5 rounded-full">
                  Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/treatments/endolaser/">
                <Button
                  variant="ghost"
                  className="border border-white/15 text-white/65 hover:text-white hover:bg-white/5 px-8 py-5 rounded-full"
                >
                  Explore the full Endolaser
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EyebrowLiftEndolaser;
