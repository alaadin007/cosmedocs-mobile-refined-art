import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight, Zap, ShieldCheck, BadgeCheck, FileCheck } from "lucide-react";
import endolaserDeviceFull from "@/assets/endolaser-device-full.jpeg";
import endolaserDeviceDetail from "@/assets/endolaser-device-detail.jpeg";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import EndolaserSidebar from "@/components/endolaser/EndolaserSidebar";

const EndolaserLift = () => {
  const seoData = generateSEOMetadata(
    "Laser Fibre Lift (Endolaser) London | Laser Face Lift Harley Street | From £450",
    "Laser Fibre Lift (Endolaser) treatment in London by the Lead Trainer at Harley Street Institute. Non-surgical face lift for jowls, jawline, eyebrow lift & double chin. CQC-registered. From £450.",
    "/treatments/endolaser/"
  );

  const faqs = [
    {
      question: "What is the Laser Fibre Lift (Endolaser) treatment?",
      answer: "The Laser Fibre Lift — also known as Endolaser — is a minimally invasive dual-wavelength laser procedure using 980nm and 1470nm laser fibres inserted beneath the skin. The 980nm wavelength targets fat reduction whilst the 1470nm wavelength delivers precise skin tightening and collagen stimulation. This combined Endolaser approach achieves both fat reduction and skin tightening in a single treatment. At CosmeDocs, we have refined this technique to complement existing volume replacement and deliver targeted, precise results rather than a general all-over approach."
    },
    {
      question: "How long do Laser Fibre Lift results last?",
      answer: "Results from the Laser Fibre Lift typically last 2–3+ years. The treatment stimulates ongoing collagen remodelling which continues to improve skin quality for several months after the procedure. Because the laser creates structural changes within the dermal tissue, the lifting effect is long-lasting and can be maintained with periodic touch-up sessions."
    },
    {
      question: "What is the recovery time for the Laser Fibre Lift?",
      answer: "Most patients experience swelling for 4–5 days on average. The swelling is most noticeable in the first 48 hours and gradually subsides. You can typically return to normal daily activities within 5–7 days. Bruising is usually minimal. We provide comprehensive aftercare guidance to optimise your recovery and final results."
    },
    {
      question: "Does the Laser Fibre Lift dissolve existing fillers?",
      answer: "No. Unlike some energy-based treatments such as HIFU or radiofrequency, the Laser Fibre Lift does not dissolve existing dermal fillers. At CosmeDocs, we have learned to complement the Laser Fibre Lift with strategic volume replacement — tightening skin and reducing excess fat where needed whilst preserving your existing filler work. This combined approach delivers superior results compared to a blind, all-over-the-face laser treatment."
    },
    {
      question: "How much does the Laser Fibre Lift cost?",
      answer: "Laser Fibre Lift pricing at CosmeDocs Harley Street, London: Eyebrow Lift from £450, Jawline/Jowls from £1,250, Cheeks/Nasolabial Folds from £950, and Chin Tightening/Double Chin from £950. A consultation (£50, redeemable against treatment) is required to assess your suitability and create a personalised treatment plan."
    },
    {
      question: "Is the Endolaser (Laser Fibre Lift) better than HIFU or Morpheus8?",
      answer: "The Endolaser Laser Fibre Lift delivers energy directly beneath the skin via a laser fibre, providing more precise and controlled thermal delivery compared to external energy devices like HIFU or Morpheus8. This direct Endolaser approach typically achieves more consistent tightening results with fewer sessions. However, the right treatment depends on your individual anatomy — your doctor will assess which modality or combination is most suitable during consultation."
    },
    {
      question: "What areas can the Laser Fibre Lift treat?",
      answer: "The Laser Fibre Lift is versatile and can treat the eyebrows (brow lift), jowls and jawline (lower face tightening), cheeks and nasolabial folds (mid-face rejuvenation), chin and submental area (double chin reduction), under-eye bags, neck skin laxity, and small pockets of body fat. It is particularly effective for facial skin tightening and contouring."
    },
    {
      question: "Who performs the Laser Fibre Lift treatment at CosmeDocs?",
      answer: "Laser Fibre Lift treatments at CosmeDocs are led by Dr Ahmed Haq, who is the Lead Trainer for this device at the Harley Street Institute. He trains other medical professionals in advanced laser fibre techniques. The treatment is performed in association with our partner clinic PrivaDr, ensuring access to specialist facilities and nursing support."
    },
    {
      question: "Can the Laser Fibre Lift be combined with other treatments?",
      answer: "Absolutely. In fact, combining the Laser Fibre Lift with complementary treatments often produces the best outcomes. It works exceptionally well alongside HA dermal fillers for volume restoration, PDO threads for additional mechanical lifting, and Botox for muscle relaxation. Your doctor will recommend the optimal combination based on your facial assessment."
    },
    {
      question: "Is the Laser Fibre Lift treatment painful?",
      answer: "The procedure is performed under local anaesthetic, so discomfort during treatment is minimal. Most patients describe the sensation as gentle warmth beneath the skin. Post-procedure, you may experience mild tenderness and swelling for 4–5 days, which is managed with standard aftercare protocols and over-the-counter pain relief if needed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/endolaser/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/endolaser/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street, London. Established 2007.",
                "url": "https://www.cosmedocs.com/",
                "telephone": "+44 20 3733 3227",
                "logo": "https://www.cosmedocs.com/logo.png",
                "priceRange": "££",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "addressRegion": "Greater London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 51.5074,
                  "longitude": -0.1278
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+44 20 3733 3227",
                  "contactType": "customer service"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "243"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ]
              },
              {
                "@type": "MedicalProcedure",
                "name": "Laser Fibre Lift London",
                "alternateName": ["Laser Fibre Lift", "Endolaser", "Endolaser Lift", "Laser Face Lift London", "Non-Surgical Facelift London"],
                "description": "Minimally invasive Laser Fibre Lift treatment in London using dual-wavelength 980nm and 1470nm laser fibre technology for face lifting, jowl tightening, jawline contouring, eyebrow lift, and double chin reduction at Harley Street.",
                "url": "https://www.cosmedocs.com/treatments/endolaser/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Face, Chin, Eyes, Jawline, Jowls, Neck",
                "preparation": "Consultation with doctor to assess facial anatomy and create personalised treatment plan. Local anaesthetic administered before procedure.",
                "followup": "Results visible within 2–4 weeks, continuing to improve for 3–6 months. Lasts 2–3+ years. Follow-up at 2–4 weeks post-treatment.",
                "howPerformed": "A dual-wavelength laser fibre (980nm for fat reduction, 1470nm for skin tightening) is inserted beneath the skin through micro-incisions under local anaesthetic. The combined wavelengths simultaneously tighten tissue, stimulate collagen, and reduce fat deposits with precision targeting.",
                "status": "https://schema.org/EventScheduled"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@type": "Service",
                "name": "Laser Fibre Lift London",
                "serviceType": "Non-Surgical Facelift",
                "provider": {
                  "@type": "MedicalBusiness",
                  "name": "CosmeDocs",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "10 Harley Street",
                    "addressLocality": "London",
                    "postalCode": "W1G 9PF",
                    "addressCountry": "GB"
                  }
                },
                "areaServed": {
                  "@type": "City",
                  "name": "London"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Laser Fibre Lift Pricing",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "name": "Laser Fibre Lift Eyebrow Lift",
                      "priceCurrency": "GBP",
                      "price": "450"
                    },
                    {
                      "@type": "Offer",
                      "name": "Laser Fibre Lift Jawline & Jowls",
                      "priceCurrency": "GBP",
                      "price": "1250"
                    },
                    {
                      "@type": "Offer",
                      "name": "Laser Fibre Lift Cheeks & Nasolabial Folds",
                      "priceCurrency": "GBP",
                      "price": "950"
                    },
                    {
                      "@type": "Offer",
                      "name": "Laser Fibre Lift Chin & Double Chin",
                      "priceCurrency": "GBP",
                      "price": "950"
                    }
                  ]
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black overflow-x-hidden">
        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.04) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Mini Facelifts', path: '/treatments/non-surgical-facelift/' }
              ]}
              currentPage="Laser Fibre Lift"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-4 gap-8">
              {/* Left: Text */}
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">
                    Laser Fibre Lift{" "}
                    <span className="text-[#C9A050] font-light">London</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    Minimally invasive endolaser face lift, skin tightening & fat reduction — for the jawline, jowls, chin, eyes and brows. Also known as Endolaser. Performed by the Lead Trainer at the Harley Street Institute.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/25 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Lead Trainer — HSI
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    From £450
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Since 2007
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Harley Street
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    In Association with CQC-Registered PrivaDr Ltd
                  </span>
                </motion.div>
              </div>

              {/* Right: Device images */}
              <motion.div
                className="hidden lg:flex flex-shrink-0 w-[340px] h-[380px] items-center justify-center relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                {/* Full device — main */}
                <motion.img
                  src={endolaserDeviceFull}
                  alt="Laser Fibre Lift device with fibre optic cannula"
                  className="absolute w-[280px] h-auto object-contain drop-shadow-2xl z-10 rounded-lg"
                  style={{ filter: 'brightness(0.85) contrast(1.1)' }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Detail shot — offset behind */}
                <motion.img
                  src={endolaserDeviceDetail}
                  alt="Laser Fibre Lift dual-wavelength detail"
                  className="absolute top-4 right-0 w-[180px] h-auto object-cover rounded-lg opacity-40 z-0"
                  style={{ filter: 'brightness(0.6) contrast(1.2)' }}
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Gold glow behind */}
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 70%)' }} />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </section>


        {/* ═══════════════════════════════════════════
            TWO-COLUMN LAYOUT
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* What Is the Laser Fibre Lift */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    What Is the <span className="text-[#C9A050] font-light">Laser Fibre Lift (Endolaser)?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The Laser Fibre Lift — commonly referred to as Endolaser — is a minimally invasive dual-wavelength laser procedure that delivers controlled thermal energy directly beneath the skin. This endolaser technology combines two laser wavelengths: 980nm for targeted fat reduction and 1470nm for precise skin tightening and collagen stimulation. Unlike external energy devices such as HIFU or Morpheus8, the endolaser fibre is inserted through micro-incisions to directly target the subdermal tissue layer.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        This internal approach means the energy reaches exactly where it is needed — tightening skin from within, stimulating new collagen formation, and liquefying small pockets of unwanted fat. The precision of subdermal laser delivery allows us to treat specific areas of the face and body with remarkable accuracy, achieving lifting and contouring results that external devices simply cannot match.
                      </p>
                      <p>
                        Originally developed for body contouring and small-pocket fat reduction, the Endolaser Laser Fibre Lift has proven exceptionally effective for facial rejuvenation. At CosmeDocs, we have refined the endolaser technique specifically for face lifting, jowl tightening, eyebrow elevation, under-eye bag treatment, and chin contouring — positioning it as the most advanced non-surgical facelift modality in our clinical toolkit.
                      </p>
                      <p>
                        The treatment is performed under local anaesthetic with minimal downtime. Most patients experience 4–5 days of swelling before seeing the lifting and tightening results emerge. Unlike surgical facelifts, there are no visible scars, no general anaesthesia, and the recovery period is measured in days rather than weeks.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why It's Different */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Why the Laser Fibre Lift Is <span className="text-[#C9A050] font-light">Different</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The critical difference between the Laser Fibre Lift and other skin tightening technologies lies in energy delivery. External devices like HIFU, radiofrequency, and Morpheus8 deliver energy from outside the skin and hope it penetrates to the correct depth. The laser fibre is placed directly where the energy is needed.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        This fundamental difference in approach means the Laser Fibre Lift achieves more consistent, predictable results. There is no energy loss through the epidermis, no risk of surface burns, and the thermal effect is concentrated precisely at the tissue plane where collagen remodelling and fat reduction occur.
                      </p>
                      <p>
                        However — and this is crucial — <strong className="text-white/60">it is not just the device that produces the results</strong>. The Laser Fibre Lift is a powerful instrument that requires expert understanding of facial anatomy, tissue planes, and the interplay between skin tightening, volume loss, and structural support. In inexperienced hands, any laser device can produce suboptimal results. In expert hands, the Laser Fibre Lift delivers transformative facial rejuvenation.
                      </p>
                      <p>
                        Dr Ahmed Haq is the Lead Trainer for this device at the Harley Street Institute, training other medical professionals in advanced laser fibre techniques. This level of expertise ensures that every treatment at CosmeDocs is performed with the precision, anatomical knowledge, and clinical judgement that the technology demands.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Laser Fibre Lift <span className="text-[#C9A050] font-light">Treatment Areas</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    The Laser Fibre Lift is exceptionally versatile, treating multiple facial zones with precision. At CosmeDocs, we focus on targeted, area-specific treatment rather than a generalised all-over approach — delivering superior results by addressing each zone's unique anatomy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { area: "Eyebrow Lift", desc: "Elevates drooping brows for a refreshed, open-eyed appearance without surgery. Ideal for hooded upper lids.", price: "£450" },
                      { area: "Jawline & Jowls", desc: "Tightens sagging jowl tissue and redefines the jawline contour. Our most requested Laser Fibre Lift zone.", price: "£1,250" },
                      { area: "Cheeks & Nasolabial Folds", desc: "Lifts mid-face tissue and softens deep nasolabial fold lines from within.", price: "£950" },
                      { area: "Chin & Double Chin", desc: "Reduces submental fat and tightens chin skin for a sharper, more defined profile.", price: "£950" },
                      { area: "Under-Eye Bags", desc: "Treats lower eyelid puffiness by tightening tissue and reducing fat herniation.", price: "POC" },
                      { area: "Body Contouring", desc: "Small pockets of stubborn fat on the body can also be treated with precision laser lipolysis.", price: "POC" },
                    ].map((item) => (
                      <div key={item.area} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-[#C9A050]">{item.area}</p>
                          <span className="text-xs text-[#C9A050]/70 font-medium">{item.price}</span>
                        </div>
                        <p className="text-white/40 text-xs font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    How the Laser Fibre Lift <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The procedure begins with a comprehensive facial assessment where your doctor maps the treatment zones and creates a personalised treatment plan. Local anaesthetic is administered to ensure complete comfort throughout the procedure.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Through tiny micro-incisions (typically 1–2mm), an ultra-thin dual-wavelength laser fibre is guided beneath the skin into the subdermal tissue plane. The system combines two wavelengths working in tandem: 980nm laser energy selectively targets and liquefies fat cells, whilst the 1470nm wavelength delivers precise thermal energy to tighten skin and stimulate new collagen synthesis.
                      </p>
                      <p>
                        This dual-wavelength approach is what sets the Laser Fibre Lift apart — the 980nm wavelength has a high affinity for fat, making it exceptionally effective for contouring and fat reduction, whilst the 1470nm wavelength targets water in tissue, delivering optimal collagen contraction and skin tightening. Both wavelengths work simultaneously, achieving comprehensive rejuvenation in a single pass.
                      </p>
                      <p>
                        Your doctor monitors tissue temperature throughout the procedure using real-time feedback, ensuring consistent and safe energy delivery. The entire treatment takes 45–90 minutes depending on the number of zones treated.
                      </p>
                      <p>
                        Following treatment, the micro-incisions are closed with sterile strips — no sutures required. The body's natural healing response then continues the collagen remodelling process over the following 3–6 months, progressively improving skin tightness and quality.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* The CosmeDocs Approach */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    The CosmeDocs <span className="text-[#C9A050] font-light">Approach</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        At CosmeDocs, we do not perform a general, blind all-over-the-face laser lift. Our approach is strategic, targeted, and integrative — combining the Laser Fibre Lift with complementary modalities to achieve comprehensive facial rejuvenation that respects your existing aesthetic work.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        We have learned to replace volume where it has been lost, tighten skin where it has become lax, and reduce excess fat where it creates heaviness — all within a single treatment strategy. Crucially, the Laser Fibre Lift <strong className="text-white/60">does not dissolve your existing dermal fillers</strong>. This is a significant advantage over some energy-based devices that can compromise previous filler work.
                      </p>
                      <p>
                        Instead, we complement the Laser Fibre Lift with strategic filler placement, creating a multi-modality approach that addresses all dimensions of facial ageing: volume loss, skin laxity, and fat redistribution. This is the invisible art of aesthetic medicine — transformation that speaks without saying a word.
                      </p>
                      <p>
                        The Laser Fibre Lift sits at the top of our four-level non-surgical facelift hierarchy. For patients who have progressed beyond Botox-based lifting (Nefertiti), volume-based lifting (HA Makeover), and mechanical lifting (PDO Threads), the Laser Fibre Lift represents the most advanced non-surgical intervention available — offering results that were previously only achievable through surgical facelifts.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Patient Feedback Videos */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Patient Feedback: <span className="text-[#C9A050] font-light">Right After Treatment</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Real patient testimonials filmed immediately after their Laser Fibre Lift treatment, sharing their experience and initial impressions.
                  </p>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center">
                    <Zap className="w-10 h-10 text-[#C9A050]/30 mx-auto mb-4" />
                    <p className="text-white/40 text-sm font-light">Patient feedback videos coming soon</p>
                    <p className="text-white/25 text-xs font-light mt-2">Landscape and portrait format testimonials will be added here</p>
                  </div>
                </motion.div>
              </section>

              {/* Recovery & Swelling */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Recovery & <span className="text-[#C9A050] font-light">Swelling Timeline</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The average recovery involves 4–5 days of swelling. This is a normal part of the healing process and indicates that the collagen remodelling cascade has been activated. Most patients plan for 5–7 days of social downtime.
                      </p>
                    }
                  >
                    <div className="space-y-3 text-white/45 text-sm leading-relaxed font-light">
                      {[
                        { stage: "Day 1–2", detail: "Moderate swelling begins. The treated areas may feel warm and tender. This is the peak inflammatory response — completely normal and expected." },
                        { stage: "Day 3–4", detail: "Swelling starts to reduce noticeably. Bruising, if present, begins to fade. Most patients feel comfortable returning to desk-based work." },
                        { stage: "Day 5–7", detail: "Swelling largely resolved. Initial tightening results become visible. Micro-incision sites are healing well with minimal visibility." },
                        { stage: "Week 2–4", detail: "Progressive improvement as collagen remodelling accelerates. Skin feels firmer and tighter. Lifting effects become increasingly apparent." },
                        { stage: "Month 1–6", detail: "Continued collagen formation delivers ongoing improvement. Final results establish at 3–6 months post-treatment and last 2–3+ years." },
                      ].map((item) => (
                        <div key={item.stage} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                          <p className="text-white/60 text-xs font-medium mb-1">{item.stage}</p>
                          <p className="text-xs">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Laser Fibre Lift vs Other Treatments */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Laser Fibre Lift vs <span className="text-[#C9A050] font-light">Other Treatments</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">Laser Fibre Lift</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Direct subdermal energy delivery</li>
                        <li>• Dual 980nm + 1470nm laser precision</li>
                        <li>• Results last 2–3+ years</li>
                        <li>• Does not dissolve existing fillers</li>
                        <li>• Treats skin + fat simultaneously</li>
                        <li>• 4–5 days recovery</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <p className="text-sm font-medium text-white/60 mb-3">HIFU / Morpheus8</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• External energy — penetration varies</li>
                        <li>• Less precise depth control</li>
                        <li>• Results last 6–12 months</li>
                        <li>• May affect existing fillers</li>
                        <li>• Primarily skin tightening only</li>
                        <li>• Multiple sessions often required</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                    <p className="text-white/40 text-xs leading-relaxed font-light">
                      <strong className="text-[#C9A050]/80">Doctor's note:</strong> The best treatment is always the one suited to your individual anatomy and goals. During consultation, we assess whether the Laser Fibre Lift, PDO threads, fillers, or a combination approach will deliver the optimal result for your facial structure.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Combination Strategies */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Combination <span className="text-[#C9A050] font-light">Strategies</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The Laser Fibre Lift reaches its full potential when combined with complementary treatments. At CosmeDocs, we have developed multi-modality protocols that address all dimensions of facial ageing in a single treatment plan.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        <strong className="text-white/60">Laser Fibre Lift + HA Fillers:</strong> The Laser Fibre Lift tightens and reduces excess tissue whilst fillers restore lost volume. This combination is particularly effective for patients with both skin laxity and volume depletion — a common presentation in patients aged 45–65.
                      </p>
                      <p>
                        <strong className="text-white/60">Laser Fibre Lift + PDO Threads:</strong> For patients requiring both skin tightening and mechanical lifting, combining the Laser Fibre Lift with PDO threads creates a dual-action lift. The laser addresses skin quality and fat, whilst threads provide immediate structural support.
                      </p>
                      <p>
                        <strong className="text-white/60">Laser Fibre Lift + Botox (Nefertiti):</strong> Combining lower face laser tightening with Nefertiti Botox for platysmal band relaxation creates comprehensive jawline and neck rejuvenation — addressing both skin laxity and muscle-driven ageing.
                      </p>
                      <p>
                        Your doctor will recommend the optimal combination during your consultation, based on a thorough assessment of your facial anatomy, skin quality, volume status, and aesthetic goals.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Suitability */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Am I <span className="text-[#C9A050] font-light">Suitable?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white/80">Ideal Candidates</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Sagging jowls or loss of jawline definition</li>
                        <li>• Drooping eyebrows or hooded upper lids</li>
                        <li>• Double chin or submental fat deposits</li>
                        <li>• Under-eye bags or lower lid puffiness</li>
                        <li>• Deep nasolabial folds with skin laxity</li>
                        <li>• Desire for non-surgical alternative to facelift</li>
                        <li>• Patients who have outgrown Botox/filler-only approaches</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/30" />
                        <p className="text-sm font-medium text-white/80">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Active skin infections in the treatment area</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Severe blood clotting disorders</li>
                        <li>• Unrealistic expectations about non-surgical results</li>
                        <li>• Very advanced skin laxity (surgical facelift may be more appropriate)</li>
                        <li>• Recent facial surgery (within 6 months)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Why <span className="text-[#C9A050] font-light">CosmeDocs?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "Lead Trainer for this laser device at the Harley Street Institute",
                      "Doctor-led — all treatments by GMC-registered doctors",
                      "Targeted approach — not a blind all-over-the-face treatment",
                      "Does not dissolve existing fillers — preserves your aesthetic work",
                      "Performed in association with partner clinic PrivaDr",
                      "Over 1 million treatments performed since 2007",
                      "Multi-modality expertise — combining laser fibre with fillers, threads & Botox",
                      "Our aesthetics is invisible art — bold, natural, always your way"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Aftercare & <span className="text-[#C9A050] font-light">Recovery Guidelines</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Proper aftercare is essential to optimise your Laser Fibre Lift results. Following these guidelines will support healing, minimise downtime, and ensure the best possible outcome from your treatment.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Keep the treated area clean and dry for the first 48 hours</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Apply cold compresses to manage swelling (not directly on skin)</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Sleep with your head elevated for the first 3–5 nights</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid strenuous exercise, saunas, and hot baths for 7–10 days</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Take prescribed anti-inflammatory medication as directed</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Wear SPF 50+ sunscreen once the skin has healed</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Attend your follow-up appointment at 2–4 weeks post-treatment</li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Frequently Asked <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-5">
                        <AccordionTrigger className="text-white/70 hover:text-[#C9A050] text-left text-sm font-light py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm font-light pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24"><EndolaserSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white/85">
                Ready for a <span className="text-[#C9A050]">Mini Facelift?</span>
              </h2>
              <p className="text-white/50 mb-8 font-light">
                A consultation with our doctors will assess your facial anatomy and recommend whether the Laser Fibre Lift, fillers, threads, or a combination approach will deliver the transformation you're looking for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/treatments/non-surgical-facelift/">
                  <Button variant="ghost" className="border border-white/15 text-white/60 hover:text-white hover:bg-white/5 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                    View All Facelift Options
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-black/95">
          <EndolaserSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Endolaser London — Laser Fibre Lift (Endolaser) Non-Surgical Laser Face Lift at Harley Street</h2>
          <p>CosmeDocs is a leading provider of Endolaser Laser Fibre Lift treatment in London, located at 10 Harley Street, W1G 9PF. Our Endolaser procedure — also known as the Laser Fibre Lift — uses dual-wavelength 980nm and 1470nm laser fibre technology for face lifting, jowl tightening, jawline contouring, eyebrow elevation, and double chin reduction. The Endolaser is led by Dr Ahmed Haq, the Lead Trainer for this device at the Harley Street Institute. CosmeDocs has performed over 1 million aesthetic treatments since 2007. Endolaser results last 2–3+ years with minimal downtime. CQC-registered partner clinic. Our aesthetics is invisible art — bold, natural, always your way.</p>

          <h3>Endolaser Cost London — Laser Fibre Lift Pricing 2025</h3>
          <p>How much does the Endolaser Laser Fibre Lift cost in London? At CosmeDocs Harley Street, Endolaser pricing starts from £450 for an Eyebrow Lift. Jawline and Jowl tightening costs £1,250, Cheek and Nasolabial Fold lifting from £950, and Chin tightening or double chin reduction from £950. Endolaser consultation costs £50, fully redeemable against treatment. Our pricing includes local anaesthetic, the procedure, and comprehensive aftercare. Repeat Endolaser sessions after 6 months receive a 50% discount.</p>

          <h3>Endolaser vs HIFU vs Morpheus8 — Which Is Best in London?</h3>
          <p>The Endolaser Laser Fibre Lift delivers laser energy directly beneath the skin via a micro-fibre, achieving more precise and controlled results compared to external devices like HIFU, Morpheus8, and radiofrequency treatments. Key advantages of the Endolaser over HIFU in London: subdermal energy delivery (not transcutaneous), dual-wavelength fat reduction and skin tightening in one session, does not dissolve existing dermal fillers, Endolaser results lasting 2–3+ years versus 6–12 months with HIFU. The Endolaser is considered the gold standard for non-surgical face lifting among London aesthetic clinics.</p>

          <h3>Best Endolaser Clinic London — Why Choose CosmeDocs Harley Street</h3>
          <p>What makes CosmeDocs the best Endolaser clinic in London? Dr Ahmed Haq is the Lead Trainer for the Endolaser device at the Harley Street Institute, training other doctors in advanced Endolaser technique. CosmeDocs uses a targeted, zone-specific Endolaser approach rather than a generalised all-over treatment. The clinic has been established since 2007 with over 243 verified patient reviews averaging 4.9 stars. Endolaser treatments are performed in association with CQC-registered PrivaDr Ltd, ensuring clinical governance and specialist nursing support.</p>

          <h3>Non-Surgical Facelift London — Endolaser Jowl Tightening Without Surgery</h3>
          <p>Looking for a non-surgical facelift in London? The Endolaser Laser Fibre Lift is the most advanced non-surgical face lifting modality available at CosmeDocs. Ideal for sagging jowls, loss of jawline definition, drooping eyebrows, double chin, and under-eye bags. The Endolaser works at the subdermal level to tighten skin, stimulate collagen, and reduce fat — all under local anaesthetic with 4–5 days recovery. Many London patients choose the Endolaser as an alternative to surgical facelift, thread lifts, or HIFU.</p>

          <h3>Endolaser Recovery Time London</h3>
          <p>Endolaser Laser Fibre Lift recovery time: 4–5 days average swelling, peak at 24–48 hours, most patients return to work within 5–7 days. Collagen remodelling continues for 3–6 months after your Endolaser treatment. Final results at 3–6 months, lasting 2–3+ years. Minimal bruising. No visible scarring. No general anaesthetic required.</p>

          <h3>Endolaser Near Me — Central London W1</h3>
          <p>Searching for Endolaser near me in London? CosmeDocs is centrally located at 10 Harley Street, London W1G 9PF — easily accessible from Oxford Circus, Regent's Park, Bond Street, and Baker Street tube stations. We serve Endolaser patients from across London including Mayfair, Marylebone, Kensington, Chelsea, Westminster, Knightsbridge, Notting Hill, Hampstead, Islington, the City of London, Canary Wharf, and surrounding areas. Book your Endolaser consultation today.</p>

          <h3>Endolaser Combination Treatments London</h3>
          <p>The Endolaser Laser Fibre Lift achieves optimal results when combined with complementary treatments. Popular Endolaser combinations at CosmeDocs London: Endolaser with HA dermal fillers for volume restoration, Endolaser with PDO thread lifts for mechanical support, and Endolaser with Nefertiti Botox for platysmal band relaxation and neck rejuvenation. Our multi-modality Endolaser approach addresses skin laxity, volume loss, and fat redistribution in a single comprehensive treatment plan. The Endolaser does not dissolve existing fillers.</p>

          <h3>What Is Endolaser? Endolaser Treatment Explained</h3>
          <p>Endolaser is a minimally invasive laser treatment that uses a thin optical fibre inserted beneath the skin to deliver dual-wavelength laser energy for skin tightening, fat reduction, and collagen stimulation. The term Endolaser refers to the endoscopic laser approach — delivering energy from within (endo) rather than externally. At CosmeDocs, we brand this as the Laser Fibre Lift. Endolaser treatment in London is available for face lifting, jawline contouring, jowl reduction, eyebrow lift, double chin treatment, and body contouring. Endolaser is filler-safe and does not dissolve existing hyaluronic acid fillers.</p>
        </div>
      </div>
    </>
  );
};

export default EndolaserLift;
