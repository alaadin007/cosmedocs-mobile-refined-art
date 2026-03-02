import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import PDOThreadsSidebar from "@/components/pdo-threads/PDOThreadsSidebar";
import threadLiftImage1 from '@/assets/thread-lift-before-after-1.jpg';
import pdoThreadsImage from '@/assets/pdo-threads-before-after.jpg';
import threadLiftImage2 from '@/assets/thread-lift-before-after-2.png';
import pdoThreadLiftImage from '@/assets/pdo-thread-lift-before-after.jpg';

const beforeAfterImages = [
  {
    src: threadLiftImage1,
    alt: "PDO thread lift before and after — combination treatment with skin rejuvenation",
  },
  {
    src: pdoThreadsImage,
    alt: "PDO thread face lift transformation performed in London",
  },
  {
    src: "/images/treatments/pdo-threads/pdo-threads-ba-new.jpg",
    alt: "PDO thread lift before and after showing natural facial lifting and tightening",
  },
  {
    src: threadLiftImage2,
    alt: "PDO thread lift before and after — final results once swelling settles",
  },
  {
    src: pdoThreadLiftImage,
    alt: "Natural lifting and tightening results with PDO cog threads",
  },
];

export function ThreadFaceLift() {
  const seoData = generateSEOMetadata(
    "PDO Thread Lift London | Non-Surgical Face Lift | Harley St",
    "Doctor-led PDO thread lift for non-surgical facial lifting and tightening. Cog threads, mono threads, and combination treatments at our Harley Street clinic. Results last up to 2 years.",
    "/treatments/pdo-threads/"
  );

  const faqs = [
    {
      question: "What are PDO threads and how do they work?",
      answer: "PDO (polydioxanone) threads are medical-grade dissolvable sutures inserted beneath the skin. They physically lift sagging tissue and stimulate your body's natural collagen production. The threads dissolve over 6–9 months, but the collagen remodelling continues for up to 2–3 years."
    },
    {
      question: "What is the difference between mono threads and cog threads?",
      answer: "Mono threads are smooth threads that stimulate collagen and improve skin texture and tightness. Cog threads have barbs or hooks that grip the tissue and provide an immediate mechanical lift. Most thread lift treatments use cog threads for lifting areas like the jawline and mid-face, and mono threads for skin quality improvement."
    },
    {
      question: "How long do PDO thread lift results last?",
      answer: "The threads dissolve over 6–9 months, but the collagen stimulation they trigger provides lasting structural improvement for 12–24 months. Some patients see continued benefit for up to 3 years. Results vary depending on age, skin quality, and the type of threads used."
    },
    {
      question: "Is a PDO thread lift painful?",
      answer: "The procedure is performed under local anaesthetic, so discomfort is minimal during treatment. You may experience mild soreness, tightness, or tenderness for a few days afterwards, which is manageable with over-the-counter pain relief."
    },
    {
      question: "What is the recovery time for a thread lift?",
      answer: "Most patients return to work within 1–3 days. Full recovery takes about one week. During this time, you should avoid strenuous exercise, facial massage, and sleeping on your face. Mild swelling and bruising are common but resolve within 5–7 days."
    },
    {
      question: "Who is a good candidate for PDO threads?",
      answer: "Ideal candidates are aged 30–65 with mild to moderate skin laxity who want facial lifting without surgery. PDO threads work best for patients with early signs of sagging around the jawline, mid-face, or neck. A consultation will determine your suitability."
    },
    {
      question: "Can PDO threads be combined with other treatments?",
      answer: "Yes. PDO threads are often combined with dermal fillers for volume restoration, Profhilo for skin quality, or Botox for dynamic lines. This combination approach — sometimes called an HA Makeover — provides comprehensive facial rejuvenation."
    },
    {
      question: "How much does a PDO thread lift cost?",
      answer: "Mono threads start from £350, cog threads from £850, and a full thread lift from £1,500. The exact cost depends on the number and type of threads required, which is determined during consultation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/pdo-threads/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/pdo-threads/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://www.cosmedocs.com/#organization",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://www.cosmedocs.com/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
                ]
              },
              {
                "@type": "MedicalProcedure",
                "name": "PDO Thread Lift",
                "alternateName": ["Thread Face Lift", "PDO Threading", "Non-Surgical Face Lift", "Cog Thread Lift"],
                "description": "Non-surgical facial lifting using dissolvable PDO threads that physically lift sagging tissue and stimulate collagen production for lasting rejuvenation.",
                "url": "https://www.cosmedocs.com/treatments/pdo-threads/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Face, Jawline, Mid-face, Neck",
                "followup": "Results visible immediately, improving over 2–3 months. Threads dissolve over 6–9 months with collagen remodelling lasting 12–24 months.",
                "howPerformed": "Medical-grade PDO threads inserted beneath the skin using fine needles or cannulae under local anaesthetic. Cog threads provide mechanical lift; mono threads stimulate collagen.",
                "provider": { "@id": "https://www.cosmedocs.com/#organization" }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 left-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'HA Makeover', path: '/treatments/ha-makeover/' }
              ]}
              currentPage="PDO Threads"
            />

            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  PDO Thread{" "}
                  <span className="text-[#C9A050] font-light">Lift</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Non-surgical facial lifting using dissolvable threads that lift, tighten, and stimulate your body's own collagen — structure restored, naturally.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
              >
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30–60 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Local Anaesthetic</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Lasts 12–24 Months</span>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            TWO-COLUMN LAYOUT
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* LEFT — Main Content */}
            <div className="space-y-14">

              {/* What Are PDO Threads */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Are <span className="text-[#C9A050] font-light">PDO Threads?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        PDO (polydioxanone) threads are medical-grade dissolvable sutures placed beneath the skin to lift sagging tissue and stimulate natural collagen production. They've been used safely in surgery for decades and are now one of the most effective non-surgical lifting treatments available.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Unlike <Link to="/treatments/dermal-fillers/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">dermal fillers</Link> which restore volume, or <Link to="/treatments/botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">Botox</Link> which relaxes muscles, PDO threads work mechanically — physically repositioning tissue whilst triggering a healing response that builds new collagen and elastin.
                      </p>
                      <p>
                        The threads dissolve naturally over 6–9 months, but the structural collagen they stimulate continues to provide support for 12–24 months or longer. This makes PDO threads a uniquely effective bridge between injectable treatments and surgical intervention.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Thread Types — Mono vs Cog */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Mono Threads vs <span className="text-[#C9A050] font-light">Cog Threads</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                          <p className="text-sm font-medium text-[#C9A050] mb-3">Mono Threads</p>
                          <ul className="space-y-2 text-white/45 text-xs font-light">
                            <li>• Smooth, fine threads</li>
                            <li>• Stimulate collagen production</li>
                            <li>• Improve skin texture and tightness</li>
                            <li>• Ideal for skin quality improvement</li>
                          </ul>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                          <p className="text-sm font-medium text-white/60 mb-3">Cog Threads</p>
                          <ul className="space-y-2 text-white/45 text-xs font-light">
                            <li>• Barbed threads that grip tissue</li>
                            <li>• Provide immediate mechanical lift</li>
                            <li>• Best for jawline, mid-face, jowls</li>
                            <li>• Stronger, longer-lasting results</li>
                          </ul>
                        </div>
                      </div>
                    }
                  >
                    <div className="mt-4 space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Most thread lift treatments combine both types strategically — cog threads for structural lifting in areas like the jawline and cheeks, and mono threads for overall skin tightening and texture refinement.
                      </p>
                      {/* Cog thread close-up image */}
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden">
                        <img
                          src="/images/treatments/pdo-threads/pdo-cog-thread-close-up.jpg"
                          alt="Close-up of a PDO cog thread being inserted beneath the skin — showing the fine barbed suture used for tissue lifting"
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                        <div className="px-5 py-3 border-t border-white/[0.06]">
                          <p className="text-white/40 text-xs font-light">
                            A PDO cog thread during insertion — the fine barbed suture anchors into tissue to provide mechanical lift
                          </p>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How the Procedure <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <ul className="space-y-3 text-white/45 text-sm font-light">
                        <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Detailed facial assessment and treatment planning</li>
                        <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Local anaesthetic applied to the treatment area</li>
                        <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Threads inserted using fine needles or cannulae</li>
                      </ul>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Threads positioned and adjusted for optimal lift</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Immediate visible lifting — results refine over 2–3 months</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Procedure takes 30–60 minutes depending on the treatment area</li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Treatment <span className="text-[#C9A050] font-light">Areas</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">Face & Jawline</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Jowl lifting and jawline definition</li>
                        <li>• Mid-face and cheek lifting</li>
                        <li>• Brow lift</li>
                        <li>• Nasolabial fold reduction</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">Neck & Décolletage</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Neck tightening and crepey skin</li>
                        <li>• Jawline-to-neck contour</li>
                        <li>• Skin laxity improvement</li>
                        <li>• Collagen stimulation</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Am I Suitable */}
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
                        <li>• Mild to moderate skin laxity</li>
                        <li>• Early jowling or sagging jawline</li>
                        <li>• Desire for non-surgical lifting</li>
                        <li>• Aged 30–65 with reasonable skin quality</li>
                        <li>• Looking for a natural, refreshed appearance</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Severe skin laxity (surgical facelift may be better)</li>
                        <li>• Active skin infection at treatment site</li>
                        <li>• Blood clotting disorders</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Autoimmune conditions</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Before & After */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    PDO Thread Lift <span className="text-[#C9A050] font-light">Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Results are visible immediately after treatment, with continued improvement over 2–3 months as collagen production increases and swelling settles. Individual results vary depending on age, skin quality, and the number of threads used.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {beforeAfterImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-white/25 text-xs mt-4 font-light italic">
                    All images show real patients treated at CosmeDocs. Results vary per individual. Images shown with consistent positioning and lighting.
                  </p>
                </motion.div>
              </section>

              {/* Results & Expectations */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Results & <span className="text-[#C9A050] font-light">Expectations</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Lifting is visible immediately after treatment. Over the following 2–3 months, results continue to improve as collagen production increases and the tissue adapts to its new position.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        The threads dissolve naturally over 6–9 months, but the collagen framework they create provides structural support for 12–24 months. Some patients see continued benefit for up to 3 years.
                      </p>
                      <p>
                        Results depend on your age, skin quality, degree of laxity, and the number and type of threads used. Your doctor will give you a realistic assessment of what to expect during consultation.
                      </p>
                      <p>
                        PDO threads are particularly effective when combined with other treatments such as <Link to="/treatments/dermal-fillers/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">dermal fillers</Link> for volume or <Link to="/treatments/profhilo/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">Profhilo</Link> for skin hydration and quality.
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
                        Most patients return to normal activities within 1–3 days. Mild swelling and bruising are common but resolve within a week.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid strenuous exercise for 1–2 weeks</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Sleep on your back for the first week</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Do not massage or apply pressure to the treated area</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid facials, saunas, and extreme heat for 2 weeks</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Apply ice if swelling or bruising occurs</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />A follow-up assessment is typically scheduled at 2 weeks</li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Risks */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Risks & <span className="text-[#C9A050] font-light">Considerations</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        PDO threads have been used safely in medicine for decades. However, like all procedures, there are potential risks that your doctor will discuss during consultation.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />Mild swelling and bruising (common, resolves in 5–7 days)</li>
                      <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />Temporary tightness or pulling sensation</li>
                      <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />Dimpling at insertion points (usually temporary)</li>
                      <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />Infection (rare, mitigated by sterile technique)</li>
                      <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />Thread migration or palpability (rare with experienced injectors)</li>
                    </ul>
                    <p className="text-white/35 text-xs mt-4 font-light">
                      These risks are significantly reduced when the procedure is performed by experienced, qualified doctors. At CosmeDocs, all thread lifts are doctor-led.
                    </p>
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
                      "Doctor-led — all thread lifts by GMC-registered doctors",
                      "Harley Street, London — established 2007",
                      "Over 1 million treatments performed",
                      "Premium PDO threads from leading manufacturers",
                      "Combination approach — threads, fillers, and skin treatments",
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

              {/* PrivaDr Partnership */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className="bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-2xl p-6">
                    <p className="text-sm font-medium text-[#C9A050] mb-3">In Partnership with PrivaDr</p>
                    <p className="text-white/50 text-sm leading-relaxed font-light mb-3">
                      Our PDO thread lift service is delivered in collaboration with <strong className="text-white/70">PrivaDr</strong>, a CQC-registered clinic. This partnership ensures every thread lift procedure is carried out in a fully regulated clinical environment, meeting the highest standards of patient safety and care.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-white/30 tracking-wide uppercase">
                      <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />CQC Registered</span>
                      <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                      <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Regulated Care</span>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Frequently Asked <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-5"
                      >
                        <AccordionTrigger className="text-white/70 hover:text-[#C9A050] text-left text-sm font-light py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm font-light pb-4">
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
                <PDOThreadsSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            FULL-WIDTH CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">
                Considering a Thread <span className="text-[#C9A050]">Lift?</span>
              </h2>
              <p className="text-white/60 mb-8 font-light">
                A consultation with our doctors will assess your skin laxity and recommend whether threads, fillers, or a combination approach is right for you.
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
          <PDOThreadsSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>PDO Thread Lift London — Non-Surgical Face Lift at Harley Street</h2>
          <p>
            CosmeDocs offers doctor-led PDO thread lift treatments for non-surgical facial lifting and tightening at our Harley Street clinic in London. PDO threads, also known as polydioxanone threads, are medical-grade dissolvable sutures that physically lift sagging tissue whilst stimulating natural collagen production. Our GMC-registered doctors use premium cog threads and mono threads for jawline lifting, mid-face rejuvenation, and neck tightening. Over 1 million treatments performed since 2007.
          </p>
          <h3>How PDO Thread Lifts Work</h3>
          <p>
            PDO thread lift treatments use dissolvable medical threads inserted beneath the skin to reposition sagging tissue and stimulate collagen. Cog threads have barbs that grip tissue for immediate mechanical lifting, while mono threads stimulate collagen for skin tightening and texture improvement. Threads dissolve over 6–9 months but collagen remodelling continues for 12–24 months. PDO thread lift before and after results show visible lifting of jowls, jawline definition, and mid-face rejuvenation.
          </p>
          <h3>PDO Thread Lift Suitability and Safety</h3>
          <p>
            PDO threads are suitable for patients aged 30–65 with mild to moderate skin laxity. Thread face lift procedures are performed under local anaesthetic with minimal downtime. Recovery typically takes 3–7 days. PDO threads can be combined with dermal fillers, Profhilo, and Botox for comprehensive facial rejuvenation — known as an HA Makeover. Thread lift cost starts from £350 for mono threads and £850 for cog threads. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
}

export default ThreadFaceLift;
