import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight, ShieldCheck, Syringe, Activity } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import beforeAfterImg from "@/assets/forehead-filler-indentations-before-after.jpg";

const ForeheadFiller = () => {
  const faqs = [
    {
      question: "What causes forehead indentations and hollows?",
      answer: "Forehead indentations are typically caused by congenital bone irregularities, fat pad atrophy with age, trauma (old scars, sports injuries), prolonged Botox use altering frontalis bulk, or skull asymmetry. The bony forehead has a thin soft-tissue envelope, so even subtle contour irregularities cast visible shadows under directional light."
    },
    {
      question: "Why is cannula technique preferred for forehead filler?",
      answer: "A blunt-tip 22G or 25G micro-cannula reduces the risk of intravascular injection into the supratrochlear and supraorbital arteries — branches that anastomose with the ophthalmic artery. Cannula entry through a single port allows broad subgaleal or deep-supraperiosteal distribution with significantly fewer pinpoint bruises than needle technique."
    },
    {
      question: "What type of filler is used in the forehead?",
      answer: "We use a high-viscosity, high-G' hyaluronic acid filler with strong elastic modulus — typically a VYC-20 class (Juvederm Voluma), Restylane Lyft, or Belotero Volume. High G prime resists deformation from frontalis muscle contraction and provides reliable projection over bone. Soft, low-G' fillers migrate and yield disappointing results in this thin-skinned region."
    },
    {
      question: "Which anatomical plane is the filler placed in?",
      answer: "Two safe planes are used: supraperiosteal (directly on the bone, beneath frontalis) for volumetric correction, and subgaleal (between galea aponeurotica and periosteum) for smooth distribution. We avoid the subcutaneous plane, where vessels run and visible lumps are more likely. Bolus depots are placed centrally, with retrograde cannula fans extending laterally."
    },
    {
      question: "How much filler is needed for forehead indentations?",
      answer: "Most patients require 1–3ml. A small isolated indentation may need 0.3–0.5ml. A full forehead contour correction (smoothing multiple indentations and restoring convexity) usually requires 2ml split across both sides. Severe bone irregularities or post-traumatic defects may need staged sessions."
    },
    {
      question: "Is forehead filler safe? What about the supratrochlear artery?",
      answer: "The forehead is a high-risk vascular zone. The supratrochlear, supraorbital, and frontal branch of the superficial temporal arteries all converge here, with anastomoses to the ophthalmic artery — meaning vascular occlusion could theoretically cause visual loss. We mitigate this with deep supraperiosteal placement, blunt cannula, slow low-pressure injection, aspiration, and always having hyaluronidase on-site for emergency dissolution."
    },
    {
      question: "How long do forehead filler results last?",
      answer: "Results in the forehead typically last 18–24 months — longer than in mobile areas such as the lips. The deep supraperiosteal plane has minimal movement, slowing enzymatic breakdown of the hyaluronic acid. Patients with very active frontalis muscles may metabolise it slightly faster."
    },
    {
      question: "Will Botox affect my forehead filler?",
      answer: "Botox and forehead filler work synergistically. Many patients combine the two: filler smooths static indentations and restores bony contour, whilst Botox relaxes the frontalis to soften dynamic lines. We generally place filler first, then add Botox 2 weeks later, or perform both in the same session with cautious dosing."
    },
    {
      question: "Is the procedure painful?",
      answer: "Discomfort is minimal. Topical anaesthetic is applied for 20 minutes prior, and the filler contains lidocaine. The cannula entry point is numbed with a small needle bleb. Most patients report only mild pressure during the procedure, which takes 30–45 minutes."
    },
    {
      question: "What is the recovery time?",
      answer: "Downtime is minimal. Mild swelling and occasional pinpoint bruising at the cannula entry settle within 24–72 hours. You can return to work the same day. Avoid strenuous exercise, alcohol, and saunas for 24 hours, and sleep slightly elevated for 2 nights."
    },
    {
      question: "Can forehead filler be dissolved if I don't like it?",
      answer: "Yes. Hyaluronic acid filler is fully reversible with hyaluronidase, an enzyme that breaks down HA within hours. This is one of the key safety advantages of HA filler over permanent products."
    },
    {
      question: "How much does forehead filler cost in London?",
      answer: "Forehead filler at our Harley Street clinic starts from £450 for 1ml and £750 for 2ml of premium high-G' hyaluronic acid. Consultation is £50 and is deducted from treatment cost if you proceed. Complex post-traumatic cases are quoted individually."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.cosmedocs.com/#clinic",
        name: "CosmeDocs",
        url: "https://www.cosmedocs.com/",
        telephone: "+442071231123",
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Harley Street",
          addressLocality: "London",
          postalCode: "W1G 9PF",
          addressCountry: "GB",
        },
        geo: { "@type": "GeoCoordinates", latitude: 51.5194, longitude: -0.1467 },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2387",
          bestRating: "5",
        },
      },
      {
        "@type": "MedicalProcedure",
        name: "Forehead Filler Treatment for Indentations",
        alternateName: ["Forehead Dermal Filler", "Forehead Contouring Filler", "Forehead Hollows Treatment"],
        description: "Doctor-led correction of forehead indentations, hollows and bony irregularities using high-viscosity, high-G' hyaluronic acid placed via blunt micro-cannula in the supraperiosteal plane.",
        url: "https://www.cosmedocs.com/treatments/forehead-filler/",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Forehead, frontal bone, frontalis region",
        howPerformed: "High-G' hyaluronic acid (VYC-20 class) injected via 22G or 25G blunt micro-cannula into the supraperiosteal or subgaleal plane to smooth indentations, fill hollows and restore convex frontal contour. Aspiration and slow retrograde delivery used to mitigate vascular risk.",
        preparation: "Avoid blood-thinning medications (aspirin, ibuprofen, fish oil, vitamin E) for 5 days. Avoid alcohol and intense exercise for 24 hours prior.",
        followup: "Two-week review appointment included.",
        expectedPrognosis: "Results last 18–24 months. Hyaluronic acid is fully reversible with hyaluronidase.",
        image: "https://www.cosmedocs.com/forehead-filler-before-after.jpg",
      },
      {
        "@type": "Offer",
        name: "Forehead Filler Treatment",
        priceCurrency: "GBP",
        price: "450",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://www.cosmedocs.com/#clinic" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
          { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.cosmedocs.com/treatments/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.com/treatments/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Forehead Filler", item: "https://www.cosmedocs.com/treatments/forehead-filler/" },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Forehead Filler London from £450 | Indentations & Hollows | Harley Street</title>
        <meta name="description" content="Doctor-led forehead filler in London for indentations, hollows & bony irregularities. High-G' hyaluronic acid via blunt cannula. Harley Street. Book a consultation." />
        <meta name="keywords" content="forehead filler London, forehead indentations treatment, forehead hollows filler, forehead contouring, cannula forehead filler, high G prime filler, forehead dermal filler Harley Street" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="Harley Street, London" />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/forehead-filler/" data-rh="true" />
        <meta property="og:title" content="Forehead Filler London | Indentations & Hollows | Cosmedocs" />
        <meta property="og:description" content="Forehead indentation correction with high-G' HA filler placed via micro-cannula. Doctor-led. Harley Street, London." />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/forehead-filler/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content="https://www.cosmedocs.com/forehead-filler-before-after.jpg" />
        <meta property="og:image:alt" content="Before and after forehead filler showing smoothed indentation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forehead Filler London | Indentations & Hollows" />
        <meta name="twitter:description" content="Doctor-led forehead filler with high-G' HA via cannula. Harley Street." />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* ═══════ HERO ═══════ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Dermal Fillers', path: '/treatments/dermal-fillers/' }
              ]}
              currentPage="Forehead Filler"
            />

            <div className="flex items-center justify-between pt-12 pb-4">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Forehead Filler{" "}
                    <span className="text-[#C9A050] font-light">for Indentations</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/45 leading-relaxed font-extralight max-w-xl">
                    Smoothing congenital hollows, bony irregularities and post-traumatic indentations — using high-viscosity, high-G' hyaluronic acid delivered through a blunt micro-cannula by GMC-registered doctors.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/30 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Cannula Technique</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />High G′ Filler</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30–45 Min</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* ═══════ TWO-COLUMN LAYOUT ═══════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* Intro */}
              <section>
                <div className="text-white/55 text-base leading-relaxed font-light space-y-4">
                  <p>
                    The forehead is one of the most defining features of the upper face — and one of the most unforgiving. Because the skin is thin and the soft-tissue envelope minimal, even small indentations, bony depressions or asymmetries cast visible shadows under directional light. Patients often describe a sense that their forehead looks "tired", "uneven", or "dented" without being able to pinpoint why.
                  </p>
                  <p>
                    <strong className="text-white/75 font-normal">Forehead filler</strong> is a precision contouring treatment that uses a <strong className="text-white/75 font-normal">high-viscosity, high-G' hyaluronic acid</strong> placed via a <strong className="text-white/75 font-normal">blunt 22G or 25G micro-cannula</strong> into the supraperiosteal plane. The aim is not volume for its own sake — it is restoration of a smooth, convex frontal contour that catches light evenly. Quiet. Architectural. Invisible to anyone who hasn't seen the before.
                  </p>
                </div>
              </section>

              {/* What Forehead Filler Can Improve */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  What Forehead Filler <span className="text-[#C9A050] font-light">Corrects</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="grid md:grid-cols-2 gap-3 text-white/55 text-sm font-light">
                  {[
                    "Congenital forehead indentations and asymmetry",
                    "Bony irregularities and frontal bossing-related hollows",
                    "Post-traumatic depressions (old scars, sports injuries)",
                    "Lateral forehead hollowing with age-related fat atrophy",
                    "Sloped or recessed forehead contour",
                    "Visible vertical or horizontal grooves at rest",
                    "Asymmetry following long-term Botox use",
                    "Bridging the forehead-to-temple transition",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                      <CheckCircle className="w-4 h-4 text-[#C9A050]/70 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* The Anatomy & Why It's Different */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  The Anatomy: <span className="text-[#C9A050] font-light">Why the Forehead Is Different</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="text-white/55 text-sm leading-relaxed font-light space-y-4">
                  <p>
                    The frontal region sits over the <strong className="text-white/75 font-normal">frontal bone</strong> — a curved bony shield with two paired sinuses behind the brow ridges. Covering it are five anatomical layers: skin, subcutaneous fat, the <strong className="text-white/75 font-normal">frontalis muscle</strong>, the <strong className="text-white/75 font-normal">galea aponeurotica</strong>, and the <strong className="text-white/75 font-normal">loose areolar layer</strong> immediately above the periosteum. The frontalis is unusual: it has no bony origin at its lower end, and inserts directly into the dermis at the brow — every contraction translates into skin movement.
                  </p>
                  <p>
                    Three artery systems supply the area: the <strong className="text-white/75 font-normal">supratrochlear artery</strong> medially, the <strong className="text-white/75 font-normal">supraorbital artery</strong> just lateral to it, and the <strong className="text-white/75 font-normal">frontal branch of the superficial temporal artery</strong> across the lateral forehead. Crucially, the supratrochlear and supraorbital arteries are branches of the <strong className="text-white/75 font-normal">ophthalmic artery</strong> — which means any intravascular filler injected in this zone could, in the worst case, retrograde toward the retina. This is the single most important reason forehead filler must be delivered by an experienced doctor using the safest possible technique.
                  </p>
                </div>
              </section>

              {/* Technique */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Our <span className="text-[#C9A050] font-light">Technique</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />

                <div className="space-y-4">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <h3 className="text-lg text-white font-light mb-2 flex items-center gap-2">
                      <Syringe className="w-4 h-4 text-[#C9A050]" /> 1. Blunt micro-cannula entry
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light">
                      A single entry port is created with a 23G needle, typically just above the lateral brow or at the hairline. A <strong className="text-white/75 font-normal">22G or 25G blunt-tip cannula</strong> is then introduced. Unlike a sharp needle, the rounded tip displaces vessels rather than piercing them — markedly reducing the risk of intravascular cannulation of the supratrochlear or supraorbital arteries.
                    </p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <h3 className="text-lg text-white font-light mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C9A050]" /> 2. Deep supraperiosteal plane
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light">
                      Filler is deposited <strong className="text-white/75 font-normal">on the periosteum, beneath the frontalis muscle</strong>. This deep plane is relatively avascular, supports the filler against bone for predictable projection, and keeps the product away from the superficial vessels of the muscle layer. For broader smoothing we use the <strong className="text-white/75 font-normal">subgaleal plane</strong> between galea and periosteum.
                    </p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <h3 className="text-lg text-white font-light mb-2 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#C9A050]" /> 3. High-G′ HA filler selection
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light">
                      We select a <strong className="text-white/75 font-normal">high-viscosity, high elastic modulus (G prime) hyaluronic acid</strong> — typically VYC-20 class (Juvederm Voluma), Restylane Lyft, or Belotero Volume. High G′ resists deformation from frontalis contraction and provides reliable lift over bone. Soft, low-G′ products migrate, blur the correction and produce disappointing longevity in this thin-skinned region.
                    </p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <h3 className="text-lg text-white font-light mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C9A050]" /> 4. Slow, low-pressure retrograde delivery
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light">
                      Small linear threads (0.05–0.1ml per pass) are laid down on withdrawal of the cannula. Aspiration is performed before each bolus. Low injection pressure further reduces vascular embolisation risk. Bolus depots are placed centrally where the bone is thickest, with retrograde fans extending laterally and superiorly.
                    </p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <h3 className="text-lg text-white font-light mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C9A050]" /> 5. Hyaluronidase on standby
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light">
                      Every clinic room is stocked with <strong className="text-white/75 font-normal">hyaluronidase</strong> for immediate enzymatic dissolution should there be any sign of vascular compromise (blanching, livedo pattern, disproportionate pain, visual disturbance). Our doctors are trained in the protocol from <a href="https://www.saveface.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">Save Face</a> and the JCCP standards for adverse-event management.
                    </p>
                  </div>
                </div>
              </section>

              {/* Real Results */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Real Results: <span className="text-[#C9A050] font-light">Forehead Filler Before & After</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/55 text-sm leading-relaxed font-light mb-6">
                  Below is a real Cosmedocs patient with a visible left-sided forehead indentation. A single session of 1ml of high-G′ hyaluronic acid was placed deep to the frontalis via blunt cannula, restoring an even convex contour that no longer catches shadow.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="block w-full max-w-md mx-auto rounded-xl overflow-hidden border border-white/[0.08] bg-neutral-900 hover:border-[#C9A050]/60 transition-all">
                      <img
                        src={beforeAfterImg}
                        alt="Before and after forehead filler for indentation — Cosmedocs Harley Street"
                        loading="lazy"
                        className="w-full h-auto block"
                      />
                      <p className="text-white/55 text-xs font-light p-3 text-center">Tap to enlarge</p>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl bg-black border border-white/10 p-2">
                    <img src={beforeAfterImg} alt="Forehead filler before and after — full size" className="w-full h-auto rounded-lg" />
                  </DialogContent>
                </Dialog>
                <p className="text-white/30 text-xs font-light italic mt-3">
                  Real Cosmedocs patient. Photographed with informed consent. Individual results vary.
                </p>
              </section>

              {/* Suitability */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Who Is <span className="text-[#C9A050] font-light">Suitable</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                      <p className="text-sm font-medium text-white">May Be Suitable</p>
                    </div>
                    <ul className="space-y-2 text-white/55 text-xs font-light">
                      <li>• Localised forehead indentations or grooves</li>
                      <li>• Bony asymmetry of the frontal bone</li>
                      <li>• Hollowing of the lateral forehead</li>
                      <li>• Post-traumatic depressions</li>
                      <li>• Sloped or recessed frontal contour</li>
                      <li>• Patients already using Botox who want smoother static contour</li>
                    </ul>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-white/40" />
                      <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                    </div>
                    <ul className="space-y-2 text-white/55 text-xs font-light">
                      <li>• Active infection or inflammatory skin lesions in the area</li>
                      <li>• Pregnancy or breastfeeding</li>
                      <li>• History of severe allergy to hyaluronic acid or lidocaine</li>
                      <li>• Bleeding disorders or active anticoagulation</li>
                      <li>• Body dysmorphic concerns — managed in consultation</li>
                      <li>• Recent dermal filler in the area (within 4 weeks)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Safety */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Safety &{" "}
                  <span className="text-[#C9A050] font-light">Risk Mitigation</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="text-white/55 text-sm leading-relaxed font-light space-y-4">
                  <p>
                    The forehead is classified as a <strong className="text-white/75 font-normal">high-risk vascular zone</strong> in the dermal filler safety literature. The principal concerns are intravascular injection of the supratrochlear or supraorbital arteries — with theoretical retrograde flow toward the ophthalmic artery — and tissue ischaemia from external vascular compression. At Cosmedocs we apply a layered mitigation protocol: blunt micro-cannula, supraperiosteal placement, slow low-pressure retrograde technique, aspiration, small bolus sizes, and immediate availability of hyaluronidase, oxygen, GTN paste and full emergency support.
                  </p>
                  <p>
                    All treatments are performed by <strong className="text-white/75 font-normal">GMC-registered doctors</strong>. We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC-required treatments. Our doctors are also trainers at the <a href="https://www.harleystreetinstitute.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">Harley Street Institute</a>, teaching advanced cannula technique to other practitioners.
                  </p>
                </div>
              </section>

              {/* Complementary */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Complementary{" "}
                  <span className="text-[#C9A050] font-light">Treatments</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <ul className="space-y-3 text-white/55 text-sm font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                    <span><Link to="/treatments/botox/" className="text-[#C9A050] hover:underline">Botox</Link> to soften dynamic forehead lines after the static contour has been corrected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                    <span><Link to="/treatments/temple-filler/" className="text-[#C9A050] hover:underline">Temple filler</Link> to bridge the forehead-to-temple transition for a unified upper face</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                    <span><Link to="/treatments/tear-trough-filler/" className="text-[#C9A050] hover:underline">Tear trough filler</Link> for complete periorbital rejuvenation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                    <span><Link to="/treatments/ha-makeover/" className="text-[#C9A050] hover:underline">HA Liquid Facelift</Link> for full-face structural rebalancing in a single staged programme</span>
                  </li>
                </ul>
              </section>

              {/* Aftercare */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Aftercare &{" "}
                  <span className="text-[#C9A050] font-light">Recovery</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="text-white/55 text-sm leading-relaxed font-light space-y-3">
                  <p>Mild swelling and pinpoint bruising at the cannula entry are expected and settle within 24–72 hours.</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Avoid strenuous exercise, alcohol and saunas for 24 hours.</li>
                    <li>Do not massage or apply pressure to the forehead for 2 weeks.</li>
                    <li>Sleep slightly elevated for 2 nights.</li>
                    <li>Avoid facials, microneedling and laser for 2 weeks.</li>
                    <li>Two-week review appointment is included with every treatment.</li>
                  </ul>
                  <p>Final result settles at 2–3 weeks once HA has fully integrated with surrounding tissue.</p>
                </div>
              </section>

              {/* Pricing */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Forehead Filler{" "}
                  <span className="text-[#C9A050] font-light">Pricing</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 space-y-3">
                  {[
                    { tier: "Forehead Filler — 1ml", price: "£450" },
                    { tier: "Forehead Filler — 2ml", price: "£750" },
                    { tier: "Complex / post-traumatic correction", price: "From £950" },
                    { tier: "Consultation (deducted from treatment)", price: "£50" },
                  ].map((row) => (
                    <div key={row.tier} className="flex items-center justify-between text-sm border-b border-white/[0.05] last:border-none pb-2 last:pb-0">
                      <span className="text-white/65 font-light">{row.tier}</span>
                      <span className="text-[#C9A050] font-medium">{row.price}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Why Choose{" "}
                  <span className="text-[#C9A050] font-light">Cosmedocs</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="text-white/55 text-sm leading-relaxed font-light space-y-4">
                  <p>
                    Cosmedocs has performed over 1 million procedures since 2007. Our doctors lead training programmes at the <a href="https://www.harleystreetinstitute.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">Harley Street Institute</a>, with several peer-reviewed publications on advanced facial anatomy and dermal filler safety.
                  </p>
                  <p>
                    Our aesthetic philosophy is <em className="text-white/70 not-italic">invisible art</em> — bold, natural, always your way. Forehead filler is the perfect expression of it: the change is structural, the result is quiet, and the only person who needs to know is you.
                  </p>
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                  Frequently Asked{" "}
                  <span className="text-[#C9A050] font-light">Questions</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-5">
                      <AccordionTrigger className="text-sm text-white/90 font-light hover:no-underline py-4 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/65 text-sm font-light leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-[#C9A050]/10 to-transparent border border-[#C9A050]/30 rounded-2xl p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-extralight text-white mb-3">
                  Your consultation <span className="text-[#C9A050]">begins here</span>
                </h2>
                <p className="text-white/55 text-sm mb-6 max-w-lg mx-auto font-light">
                  A 30-minute doctor-led assessment of your forehead contour, anatomy and goals. No pressure. No upselling.
                </p>
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-7 py-3 font-medium text-sm transition-all"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">At a Glance</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-white/40">Duration</span><span className="text-white/80">30–45 min</span></div>
                    <div className="flex justify-between"><span className="text-white/40">Technique</span><span className="text-white/80">Blunt cannula</span></div>
                    <div className="flex justify-between"><span className="text-white/40">Plane</span><span className="text-white/80">Supraperiosteal</span></div>
                    <div className="flex justify-between"><span className="text-white/40">Product</span><span className="text-white/80">High-G′ HA</span></div>
                    <div className="flex justify-between"><span className="text-white/40">Results last</span><span className="text-white/80">18–24 months</span></div>
                    <div className="flex justify-between"><span className="text-white/40">Recovery</span><span className="text-white/80">24–72 hours</span></div>
                    <div className="flex justify-between"><span className="text-white/40">From</span><span className="text-[#C9A050] font-medium">£450</span></div>
                  </div>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    <strong className="text-[#C9A050] font-medium">Doctor-led, GMC-registered.</strong> Hyaluronidase always on-site. Trained at the Harley Street Institute.
                  </p>
                </div>

                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all"
                >
                  Book Consultation
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 bg-neutral-900">
        <div className="max-w-5xl mx-auto">
          <SkinFoundationCTA variant="anti-ageing" />
        </div>
      </section>
    </>
  );
};

export default ForeheadFiller;
