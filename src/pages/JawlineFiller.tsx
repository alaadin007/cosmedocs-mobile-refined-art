import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight, Heart } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import JawlineFillerSidebar from "@/components/jawline/JawlineFillerSidebar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import jawlineGallery2 from "@/assets/jawline-gallery-2.jpg";
import jawIllustration from "@/assets/jaw-profile-illustration.png";

const JawlineFiller = () => {
  const faqs = [
    {
      question: "How much do jawline fillers cost?",
      answer: "At CosmeDocs, 1ml jawline filler costs £350, 2ml costs £650, and our Natural HD Jawline Package is £950. The consultation fee (£50) is deducted from treatment if you proceed. Final cost depends on your specific requirements and desired results."
    },
    {
      question: "How long do jawline fillers last?",
      answer: "Results typically last 15–18 months, making them longer-lasting than most facial fillers. Longevity depends on factors like metabolism, lifestyle, and the specific filler used. The jawline area has less muscle movement, which helps extend durability."
    },
    {
      question: "Does jawline filler hurt?",
      answer: "Most patients experience minimal discomfort. We use local anaesthetic and the fillers contain lidocaine for additional comfort. The jaw area has fewer nerve endings than other facial areas, making treatment well-tolerated."
    },
    {
      question: "What's the recovery time?",
      answer: "Recovery is minimal — most patients return to work immediately. You may experience mild swelling or redness for 24–48 hours. Full recovery typically occurs within 2–7 days with no significant downtime."
    },
    {
      question: "Can jawline filler help with jowls?",
      answer: "Yes, jawline filler is highly effective for addressing jowls. Pre-jowl filler treatments can significantly improve sagging and create better jaw definition, reducing the appearance of early jowl formation whilst enhancing overall jawline structure."
    },
    {
      question: "Can I combine chin and jawline filler?",
      answer: "Absolutely. Chin and jawline filler treatments work beautifully together for comprehensive lower face enhancement. Combining them creates balanced proportions and harmonious facial definition."
    },
    {
      question: "What is the 1ml vs 2ml difference?",
      answer: "1ml provides subtle enhancement — ideal for first-time patients seeking natural definition. 2ml delivers more pronounced sculpting with stronger jaw angles. Our doctors will recommend the optimal volume during your consultation based on your anatomy and goals."
    },
    {
      question: "Can jawline filler be reversed?",
      answer: "Yes, hyaluronic acid fillers used in jawline treatments can be dissolved with hyaluronidase if needed. This provides flexibility and peace of mind that surgical jaw enhancement cannot offer."
    },
    {
      question: "What aftercare is required?",
      answer: "Avoid touching the treated area for 6 hours, sleep with head elevated for the first few days, avoid hot showers and saunas for several days, refrain from heavy exercise for 48 hours, and avoid alcohol and coffee immediately after treatment."
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
        
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2387",
          bestRating: "5",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
      },
      {
        "@type": "MedicalProcedure",
        name: "Jawline Filler Treatment",
        alternateName: "Jaw Filler",
        description: "Non-surgical jawline enhancement using premium hyaluronic acid dermal fillers for definition, contouring, and jowl correction.",
        url: "https://www.cosmedocs.com/treatments/jawline-filler/",
        procedureType: "NoninvasiveProcedure",
        bodyLocation: "Jawline, mandibular border",
        followup: "Results last 15–18 months. Review appointment recommended at 2 weeks.",
        howPerformed: "Premium hyaluronic acid filler strategically placed along the mandibular border using needle or cannula technique for precise definition and structural support.",
      },
      {
        "@type": "Offer",
        name: "Jawline Filler Treatment",
        priceCurrency: "GBP",
        price: "350",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          price: "350",
          description: "1ml jawline filler from £350; Natural HD Package £950",
        },
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
          { "@type": "ListItem", position: 4, name: "Jawline Filler", item: "https://www.cosmedocs.com/treatments/jawline-filler/" },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Jawline Filler Treatment | Harley Street Doctors</title>
        <meta name="description" content="Doctor-led jawline filler from £350. Define, contour, and sculpt your jawline at our Harley Street clinic. Natural results since 2007." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <meta property="og:title" content="Jawline Filler Treatment | Harley Street Doctors" />
        <meta property="og:description" content="Doctor-led jawline filler from £350. Define, contour, and sculpt your jawline at our Harley Street clinic." />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <meta property="og:type" content="website" />
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
              currentPage="Jawline Filler"
            />

            <div className="flex items-center justify-between pt-12 pb-4">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Jawline{" "}
                    <span className="text-[#C9A050] font-light">Filler</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                    Define, contour, and sculpt your jawline with precision dermal filler — for a sharper, more balanced lower face.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Doctor-Led
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    30–45 Min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Since 2007
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Harley Street
                  </span>
                </motion.div>
              </div>

              {/* Jaw illustration */}
              <motion.div
                className="hidden lg:block flex-shrink-0 w-[280px] h-[320px] relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle at 50% 45%, rgba(201, 160, 80, 0.1) 0%, transparent 60%)' }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={jawIllustration}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(201,160,80,0.15)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
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
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className="text-white/45 text-sm leading-relaxed font-light space-y-4">
                    <p>
                      A defined jawline is often described as the frame of the face — providing structure, balance, and a more youthful appearance. As we age, bone resorption and soft tissue descent create a softer, less defined lower face. Jawline filler restores this lost structure using premium hyaluronic acid dermal fillers.
                    </p>
                    <p>
                      At CosmeDocs, our doctors use dense, structural-grade HA fillers specifically formulated for jawline enhancement. These provide superior support and projection whilst maintaining natural movement and flexibility.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* What Can It Improve */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Jawline Filler Can <span className="text-[#C9A050] font-light">Improve</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Jawline filler addresses a range of concerns from weak definition and jowl formation to facial asymmetry and age-related volume loss.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      {[
                        "Weak or undefined jawlines lacking natural structure",
                        "Age-related volume loss causing jowl formation",
                        "Round or soft face shapes seeking more angular contours",
                        "Asymmetrical jawlines requiring balance correction",
                        "Pre-jowl sulcus creating shadows along the jaw border",
                        "Double chin appearance through improved contouring",
                        "Mandibular border irregularities and unevenness",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why the Chin Matters for Jawline */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Why the Chin Is Important for <span className="text-[#C9A050] font-light">Jawline Results</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-4">
                    Many patients focus on the jawline, but the chin is essential for creating a balanced lower face.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    If the chin is short or set back, jawline filler alone may appear heavy or less defined. By supporting the chin, we can create a more continuous and natural contour from the front of the face to the jawline.
                  </p>

                  {/* How Much Filler */}
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 mb-6">
                    <h3 className="text-lg font-light text-white mb-3">
                      How Much Filler <span className="text-[#C9A050]">Might Be Needed?</span>
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed font-light mb-4">
                      The amount of filler depends on your facial structure and goals. Typical ranges:
                    </p>
                    <ul className="space-y-3 text-white/45 text-sm font-light mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/60">Chin only:</strong> 0.5 – 3 ml</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/60">Jawline only:</strong> 2 – 4 ml</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/60">Chin and jawline combined:</strong> 3 – 8 ml</span>
                      </li>
                    </ul>
                    <p className="text-white/40 text-xs font-light italic">
                      Men often require slightly higher volumes to achieve stronger definition.
                    </p>
                  </div>

                  {/* CTA to Chin Filler */}
                  <Link
                    to="/treatments/chin-filler/"
                    className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:underline font-medium"
                  >
                    Considering chin enhancement as well? View our Chin Filler page to learn how both treatments work together
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Jawline Filler <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Specialised hyaluronic acid filler is strategically placed along the mandibular border to create definition, structure, and improved lower face contour. The procedure takes 30–45 minutes.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Our doctors use dense, cohesive HA gel formulations specifically designed for structural areas. These fillers feature a thicker consistency compared to standard facial fillers, providing superior projection and support along the jaw border.
                      </p>
                      <p>
                        Treatment begins with a comprehensive facial assessment to evaluate your bone structure, skin quality, and aesthetic goals. The filler is then placed at precise points along the mandibular border using needle or cannula technique, building definition incrementally.
                      </p>
                      <p>
                        Many patients combine jawline filler with{" "}
                        <Link to="/treatments/chin-filler/" className="text-[#C9A050] hover:underline">chin filler</Link>{" "}
                        for comprehensive lower face enhancement, creating balanced proportions and harmonious facial definition.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 1ml vs 2ml */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    1ml vs 2ml: <span className="text-[#C9A050] font-light">Choosing Your Volume</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Just 1ml — about 1/5 of a teaspoon — can make a noticeable difference for subtle definition. 2ml provides more pronounced sculpting with stronger jaw angles.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-5 mt-3">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/70 font-medium text-xs uppercase tracking-wider mb-2">1ml — Subtle Enhancement</p>
                        <p className="text-white/45 text-sm font-light leading-relaxed">
                          Ideal for first-time patients and those seeking natural definition. Softens the transition between jaw and chin, adds gentle contour without dramatic change.
                        </p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/70 font-medium text-xs uppercase tracking-wider mb-2">2ml — Defined Sculpting</p>
                        <p className="text-white/45 text-sm font-light leading-relaxed">
                          Creates stronger jaw angles and visible structural enhancement. Ideal for patients wanting a more sculpted, angular profile with pronounced definition.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                      <p className="text-white/40 text-xs leading-relaxed font-light">
                        <strong className="text-[#C9A050]/80">Not sure?</strong> Our doctors will assess your facial anatomy and recommend the optimal volume during your consultation.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Video */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Watch: <span className="text-[#C9A050] font-light">Treatment Explained</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    See the jawline filler treatment process and understand what to expect during your appointment.
                  </p>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Y3gCG1n2ioo"
                      title="Jawline Filler Treatment at CosmeDocs"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </section>

              {/* Who Is Suitable */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Am I <span className="text-[#C9A050] font-light">Suitable?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">May Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Weak or undefined jawline</li>
                        <li>• Age-related jowl formation</li>
                        <li>• Round or soft face shape</li>
                        <li>• Asymmetrical jaw structure</li>
                        <li>• Desire for enhanced lower face definition</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Significant skin laxity requiring surgery</li>
                        <li>• Active infection near the jaw area</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Allergy to hyaluronic acid or lidocaine</li>
                        <li>• Unrealistic expectations about outcomes</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Real Results: Single B&A Preview */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Real Results: <span className="text-[#C9A050] font-light">Jawline Filler Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Below is an example of jawline filler used to restore lower face definition and enhance jaw contour. 
                    Strategic placement creates a sharper, more sculpted jawline while maintaining natural facial balance and proportion.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-3">
                    <img
                      src={jawlineGallery2}
                      alt="Before and after jawline filler showing lower face rejuvenation and enhanced jaw contour"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                  <p className="text-white/30 text-xs font-light italic mb-6">
                    All images show real patients treated by our doctors at our Harley Street clinic. Individual results vary depending on facial structure and treatment plan.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/jawline/"
                    className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
                  >
                    View real jawline filler before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-white/30 text-xs font-light mt-2">
                    Includes subtle definition, jowl correction, and comprehensive jawline sculpting cases.
                  </p>
                </motion.div>
              </section>

              {/* How Long Results Last */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Long Do <span className="text-[#C9A050] font-light">Results Last?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Jawline filler results typically last 15–18 months — longer than most facial filler areas due to reduced muscle movement along the mandibular border.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Clinical research demonstrates impressive longevity for jawline fillers, with studies showing positive outcomes lasting beyond 48 weeks, particularly with advanced filler formulations and appropriate retreatment schedules.
                      </p>
                      <p>
                        Many patients find that maintenance treatments require progressively smaller volumes over time as the filler integrates with existing tissue and stimulates natural collagen production around the injection sites.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Aftercare & <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Minimal downtime. Most patients return to normal activities immediately. Mild swelling typically resolves within 24–48 hours.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      {[
                        "Avoid touching the treated area for 6 hours",
                        "Sleep with head slightly elevated for the first few days",
                        "Avoid hot showers, saunas, and swimming for several days",
                        "Refrain from heavy exercise for 48 hours",
                        "Avoid alcohol, coffee, and fish oil immediately after treatment",
                        "Contact us if you experience unusual pain or prolonged swelling",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Safety & Expertise */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Safety & <span className="text-[#C9A050] font-light">Expertise</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        All jawline treatments at CosmeDocs are performed exclusively by GMC-registered doctors with advanced anatomical knowledge — established on Harley Street since 2007.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Dr Ahmed Haq, Founder and Medical Director, has contributed to technique development in aesthetic medicine and is an active educator at the{" "}
                        <a href="https://www.harleystreetinstitute.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">
                          Harley Street Institute
                        </a>. Our doctors take a conservative, anatomy-led approach to every treatment.
                      </p>
                      <p>
                        We use only premium, CE-marked hyaluronic acid fillers from established manufacturers. The jawline area requires specialist knowledge of the facial vasculature and mandibular anatomy for safe, effective results.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Why <span className="text-[#C9A050] font-light">CosmeDocs?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "Doctor-led — all treatments by GMC-registered doctors",
                      "Harley Street, London — established 2007",
                      "Over 1 million treatments performed",
                      "Conservative philosophy — safety and subtlety first",
                      "Premium FDA-approved dermal fillers only",
                      "Our aesthetics is invisible art"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Frequently Asked{" "}
                    <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-2">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-5">
                        <AccordionTrigger className="text-sm text-white/80 font-light hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm font-light leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>

            </div>

            {/* RIGHT — Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <JawlineFillerSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* ═══════ FULL-WIDTH CTA ═══════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">
                Considering Jawline <span className="text-[#C9A050]">Filler?</span>
              </h2>
              <p className="text-white/60 mb-8 font-light">
                A consultation with our doctors will help you understand what improvements are achievable
                and whether this treatment is right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                    Speak to a Doctor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-black">
          <JawlineFillerSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <article>
            <h2>Jawline Filler Treatment London — Harley Street Doctors</h2>
            <p>
              CosmeDocs offers doctor-led jawline filler treatment at our Harley Street clinic in London. Using premium hyaluronic acid dermal fillers, our GMC-registered doctors create natural-looking jawline definition, contour enhancement, and jowl correction. Jawline filler is one of the most impactful non-surgical facial treatments, addressing age-related volume loss, weak jaw structure, and facial asymmetry. Our doctors — Dr Ahmed Haq and Dr Hena — have been performing jawline enhancement treatments since 2007, with over one million aesthetic procedures performed. The treatment takes 30–45 minutes, results last 15–18 months, and recovery is minimal. Our invisible art philosophy ensures subtle, natural enhancement that speaks without saying a word.
            </p>
            <h3>Jawline Filler Pricing at CosmeDocs</h3>
            <p>
              1ml jawline filler from £350 for subtle definition. 2ml jawline filler from £650 for pronounced sculpting. Natural HD Jawline Package at £950 for comprehensive jawline transformation. All prices include consultation and aftercare support. The consultation fee of £50 is deducted from treatment cost if you proceed.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default JawlineFiller;
