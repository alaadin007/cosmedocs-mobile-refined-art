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
import CalfBotoxSidebar from "@/components/calf-botox/CalfBotoxSidebar";

const beforeAfterImages = [
  {
    src: "/images/treatments/calf-botox/calf-botox-result-1.jpg",
    alt: "Calf reduction Botox before and after showing slimmer calf contours",
  },
  {
    src: "/images/treatments/calf-botox/calf-botox-result-2.jpg",
    alt: "Calf Botox results comparison — reduced gastrocnemius bulk",
  },
  {
    src: "/images/treatments/calf-botox/calf-botox-result-3.jpg",
    alt: "Calf slimming Botox before and after showing proportionate lower legs",
  },
  {
    src: "/images/treatments/calf-botox/calf-botox-result-4.jpg",
    alt: "Calf reduction treatment results showing refined leg silhouette",
  },
  {
    src: "/images/treatments/calf-botox/calf-botox-result-5.jpg",
    alt: "Non-surgical calf slimming results with Botox treatment",
  },
];

const CalfSlimmingBotox = () => {
  const seoData = generateSEOMetadata(
    "Calf Reduction Botox London | Non-Surgical Calf Slimming",
    "Doctor-led calf reduction Botox at Harley Street. Slim bulky calves non-surgically by relaxing the gastrocnemius muscle. Anatomy-led dosing for natural, proportionate results.",
    "/treatments/calf-slimming-botox/"
  );

  const faqs = [
    {
      question: "What is calf reduction Botox?",
      answer: "Calf reduction Botox uses botulinum toxin to partially relax the gastrocnemius muscle, gradually reducing its bulk and creating a slimmer, more contoured lower leg without surgery."
    },
    {
      question: "Does calf Botox affect walking or strength?",
      answer: "When performed correctly by experienced injectors, calf reduction Botox does not affect normal walking or daily movement. Doses are carefully calibrated to relax only part of the muscle, preserving functional strength."
    },
    {
      question: "How long do results last?",
      answer: "Results typically last 4–6 months. Repeat treatments help maintain a slimmer calf profile, and over time some patients require lower doses. Muscle size gradually returns if treatment is stopped."
    },
    {
      question: "When will I see results?",
      answer: "Early softening occurs at 2–4 weeks, visible slimming at 6–10 weeks, with peak results around 3 months as the muscle gradually reduces in size."
    },
    {
      question: "Who is not suitable for calf Botox?",
      answer: "Calf Botox is not suitable for patients whose calf size is primarily due to fat or swelling rather than muscle bulk. This is assessed during consultation. Pregnancy, breastfeeding, and neuromuscular disorders are also contraindications."
    },
    {
      question: "How much does calf reduction Botox cost?",
      answer: "Pricing depends on muscle size, number of units required, and desired degree of slimming. A personalised treatment plan and exact cost are provided after consultation."
    },
    {
      question: "Is the treatment painful?",
      answer: "The procedure involves multiple small injections using fine needles. Most patients experience mild discomfort. Topical numbing cream can be applied if preferred."
    },
    {
      question: "Can I exercise after calf Botox?",
      answer: "Avoid heavy lower-body exercise for 48 hours post-treatment. Walking is unaffected, and most patients return to normal activity the same day."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/calf-slimming-botox/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/calf-slimming-botox/" />
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
                "description": "Doctor-led aesthetic medicine clinic on Harley Street, London. Specialists in calf reduction Botox and advanced aesthetic treatments.",
                "url": "https://www.cosmedocs.com/",
                "logo": "https://www.cosmedocs.com/cosmedocs-logo.png",
                "image": ["https://www.cosmedocs.com/cosmedocs-logo.png"],
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
                "telephone": "+44 20 3733 3227",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+44 20 3733 3227",
                  "contactType": "customer service",
                  "availableLanguage": ["English"]
                },
                
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "156",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "MedicalProcedure",
                "name": "Calf Reduction Botox",
                "alternateName": ["Calf Slimming Botox", "Calf Botox", "Non-Surgical Calf Reduction", "Gastrocnemius Botox"],
                "description": "Non-surgical calf reduction using botulinum toxin to partially relax the gastrocnemius muscle, creating slimmer, more proportionate lower legs.",
                "url": "https://www.cosmedocs.com/treatments/calf-slimming-botox/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Gastrocnemius Muscle (Calf)",
                "followup": "Early softening at 2–4 weeks, visible slimming at 6–10 weeks, peak result around 3 months. Lasts 4–6 months.",
                "howPerformed": "Botulinum toxin injected at multiple strategic points within the gastrocnemius muscle to gradually reduce bulk and create a slimmer calf profile.",
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
                { label: 'Botox Treatments', path: '/treatments/botox/' }
              ]}
              currentPage="Calf Reduction Botox"
            />

            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Calf Reduction{" "}
                  <span className="text-[#C9A050] font-light">Botox</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Non-surgical calf slimming through targeted muscle reduction — proportionate, refined, and contoured over time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
              >
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />20–30 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />No Downtime</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Results: 6–10 Weeks</span>
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

              {/* Intro */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className="text-white/45 text-sm leading-relaxed font-light space-y-4">
                    <p>
                      Calf reduction Botox is a non-surgical treatment designed to slim and soften bulky calf muscles caused by muscle overactivity rather than fat. By carefully relaxing the gastrocnemius muscle, the lower legs appear more proportionate, refined, and contoured over time — without surgery or downtime.
                    </p>
                    <p>
                      At CosmeDocs on Harley Street, calf Botox is performed by experienced doctors using precise, anatomy-led dosing to ensure natural movement, safe muscle function, and balanced aesthetic results.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* What Is Calf Reduction Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Is Calf Reduction <span className="text-[#C9A050] font-light">Botox?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Calf reduction Botox uses botulinum toxin to partially relax the calf muscles, particularly the gastrocnemius, which can become enlarged due to genetics, exercise, or habitual muscle use.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>Unlike fat reduction treatments, calf Botox works by:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                          Reducing muscle bulk gradually
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                          Softening calf shape rather than freezing movement
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                          Creating a slimmer lower leg profile over several weeks
                        </li>
                      </ul>
                      <p>Results are subtle, progressive, and tailored to your anatomy.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Who Is Suitable */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Who Is Calf Botox <span className="text-[#C9A050] font-light">Suitable For?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">May Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Calves appear bulky despite low body fat</li>
                        <li>• Muscle size increases significantly when standing or flexing</li>
                        <li>• Calves look disproportionate to thighs or ankles</li>
                        <li>• You want calf slimming without surgery</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Calf size primarily due to fat or swelling</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Neuromuscular disorders</li>
                        <li>• Allergy to botulinum toxin</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Before & After */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Calf Reduction Botox <span className="text-[#C9A050] font-light">Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Because calf Botox works by gradually reducing muscle activity, results develop over time rather than instantly. Early softening occurs at 2–4 weeks, visible slimming at 6–10 weeks, with peak results around 3 months.
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
                    Limited image sets are normal for body Botox treatments due to positioning and muscle variability. Results shown with consistent stance and lighting.
                  </p>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How the Treatment <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <ul className="space-y-3 text-white/45 text-sm font-light">
                        <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Detailed assessment of calf anatomy and muscle dominance</li>
                        <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Marking of injection points while standing and relaxed</li>
                        <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Precise Botox placement into targeted muscle areas</li>
                      </ul>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Short in-clinic procedure (around 20–30 minutes)</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Walking is unaffected — most patients return to normal activity the same day</li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Does It Affect Walking */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Does Calf Botox Affect <span className="text-[#C9A050] font-light">Walking?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="text-white/45 text-sm leading-relaxed font-light space-y-4">
                    <p>
                      When performed correctly, calf reduction Botox does not affect normal walking or daily movement. At CosmeDocs:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Doses are carefully calibrated
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Only part of the muscle is relaxed
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Functional strength is preserved
                      </li>
                    </ul>
                    <p>
                      This is why calf Botox should only be performed by experienced medical injectors with a deep understanding of lower-limb anatomy.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Results Duration */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Long Do <span className="text-[#C9A050] font-light">Results Last?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3 text-white/45 text-sm font-light">
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Results typically last 4–6 months</li>
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Repeat treatments help maintain a slimmer calf profile</li>
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Over time, some patients require lower doses</li>
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Muscle size gradually returns if treatment is stopped</li>
                  </ul>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Aftercare & <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3 text-white/45 text-sm font-light">
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />No downtime — return to daily activities immediately</li>
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid heavy lower-body exercise for 48 hours</li>
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Do not massage the treated area</li>
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Stay upright for 4 hours after treatment</li>
                    <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Apply ice if mild bruising or swelling occurs</li>
                  </ul>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Why Choose <span className="text-[#C9A050] font-light">CosmeDocs?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "Doctor-led clinic on Harley Street",
                      "Advanced experience with body and muscle Botox",
                      "Conservative, anatomy-first approach",
                      "Natural, proportionate results — never over-treated",
                      "Honest assessment of suitability",
                      "Our aesthetics is invisible art"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/30 text-xs mt-4 font-light">
                    Calf Botox is a specialist procedure — not a standard cosmetic injection.
                  </p>
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
                <CalfBotoxSidebar />
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
                Considering Calf <span className="text-[#C9A050]">Slimming?</span>
              </h2>
              <p className="text-white/60 mb-4 font-light">
                A consultation is essential to determine whether muscle-based slimming is right for you.
              </p>
              <p className="text-white/40 text-sm mb-8 font-light">
                📍 Harley Street, London · 📅 Doctor-led assessment and treatment
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
          <CalfBotoxSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Calf Reduction Botox London — Non-Surgical Calf Slimming at Harley Street</h2>
          <p>
            CosmeDocs offers doctor-led calf reduction Botox treatments at our Harley Street clinic in London. Calf Botox, also known as calf slimming Botox or gastrocnemius Botox, uses precise botulinum toxin injections to reduce bulky calf muscles non-surgically. This treatment creates slimmer, more proportionate lower legs without affecting walking or daily function. Our GMC-registered doctors use anatomy-led dosing with a conservative approach for natural results.
          </p>
          <h3>How Calf Reduction Botox Works</h3>
          <p>
            Calf reduction Botox works by partially relaxing the gastrocnemius muscle — the primary muscle responsible for calf bulk. Botulinum toxin blocks nerve signals to the muscle, causing gradual reduction in size over 6–10 weeks. Unlike fat reduction treatments, calf Botox specifically targets muscle overactivity. Results are subtle and progressive, with peak slimming visible around 3 months. Treatment takes 20–30 minutes with no downtime.
          </p>
          <h3>Calf Botox Suitability and Safety</h3>
          <p>
            Calf Botox is suitable for patients whose calf bulk is caused by muscle rather than fat. It is not appropriate for swelling-related or fat-related calf size. When performed by experienced injectors, calf Botox preserves functional strength and does not affect walking. Doses are carefully calibrated based on individual anatomy. Results last 4–6 months, with repeat treatments maintaining a slimmer profile. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default CalfSlimmingBotox;
