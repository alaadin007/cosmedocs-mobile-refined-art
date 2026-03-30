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
import HyperhidrosisSidebar from "@/components/hyperhidrosis/HyperhidrosisSidebar";

const ExcessiveSweatBotox = () => {
  const seoData = generateSEOMetadata(
    "Hyperhidrosis Botox London | Harley Street Doctors",
    "Doctor-led botox for excessive sweating (hyperhidrosis) in underarms, hands & feet. FDA-approved treatment lasting 6–12 months at our Harley Street clinic.",
    "/medical/botox-for-hyperhidrosis/"
  );

  const faqs = [
    {
      question: "How does botox help with excessive sweating?",
      answer: "Botox blocks nerve signals to sweat glands, dramatically reducing sweat production. It's FDA-approved for severe underarm sweating (hyperhidrosis) and can also treat palms, feet, and other areas for life-changing results."
    },
    {
      question: "How long do hyperhidrosis botox results last?",
      answer: "Results typically last 6–12 months for underarms, and 4–6 months for hands and feet. Many patients experience dramatic reduction in sweating, significantly improving their quality of life and confidence."
    },
    {
      question: "Is hyperhidrosis botox painful?",
      answer: "Treatment involves multiple small injections which can be uncomfortable, especially for hands and feet. We use topical anaesthetic and ice to minimise discomfort during the 20–30 minute procedure."
    },
    {
      question: "What can I expect after treatment?",
      answer: "You may experience mild soreness at injection sites for 24–48 hours. Sweat reduction begins within 1–2 weeks, with maximum dryness achieved by 4 weeks. Normal activities can be resumed immediately."
    },
    {
      question: "Am I a good candidate for hyperhidrosis botox?",
      answer: "Ideal candidates have severe sweating that significantly impacts daily life and hasn't responded to antiperspirants. A consultation will assess your condition and determine if this therapeutic treatment is suitable."
    },
    {
      question: "How much does hyperhidrosis botox cost?",
      answer: "Treatment at CosmeDocs ranges from £350 to £650 depending on the area treated. Underarms are £550, palms £550, feet £650, and forehead £350. This includes consultation and follow-up care."
    },
    {
      question: "Can hyperhidrosis botox be combined with other treatments?",
      answer: "Yes. Hyperhidrosis botox can be combined with cosmetic botox treatments for comprehensive care. Our doctors create personalised treatment plans addressing both therapeutic and aesthetic concerns simultaneously."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/hyperhidrosis-botox/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/hyperhidrosis-botox/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic and therapeutic medicine clinic on Harley Street",
                "url": "https://www.cosmedocs.com/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "189"
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
                "name": "Hyperhidrosis Botox Treatment",
                "alternateName": "Excessive Sweating Botox Treatment",
                "description": "FDA-approved botulinum toxin treatment that blocks nerve signals to sweat glands, dramatically reducing excessive perspiration in underarms, palms, feet, and facial areas.",
                "url": "https://www.cosmedocs.com/treatments/hyperhidrosis-botox/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Underarms, Palms, Feet, Face",
                "followup": "Results begin within 1–2 weeks, lasting 6–12 months. Follow-up assessment available.",
                "howPerformed": "Botulinum toxin injected into multiple points across the affected area using ultra-fine needles, blocking acetylcholine release at the nerve-sweat gland junction."
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
                "@type": "Offer",
                "name": "Hyperhidrosis Botox Treatment",
                "priceCurrency": "GBP",
                "price": "350",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "GBP",
                  "minPrice": "350",
                  "maxPrice": "650"
                },
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "MedicalBusiness",
                  "name": "CosmeDocs"
                }
              },
              {
                "@type": "MedicalCondition",
                "name": "Hyperhidrosis",
                "alternateName": ["Excessive Sweating", "Primary Hyperhidrosis", "Axillary Hyperhidrosis"],
                "signOrSymptom": [
                  { "@type": "MedicalSignOrSymptom", "name": "Excessive underarm sweating" },
                  { "@type": "MedicalSignOrSymptom", "name": "Sweaty palms" },
                  { "@type": "MedicalSignOrSymptom", "name": "Excessive foot sweating" },
                  { "@type": "MedicalSignOrSymptom", "name": "Facial sweating" },
                  { "@type": "MedicalSignOrSymptom", "name": "Sweating regardless of temperature" }
                ],
                "possibleTreatment": {
                  "@type": "MedicalTherapy",
                  "name": "Botulinum Toxin for Hyperhidrosis",
                  "drug": {
                    "@type": "Drug",
                    "name": "Botulinum Toxin Type A",
                    "drugClass": "Neuromuscular Blocking Agent"
                  }
                },
                "epidemiology": "Affects approximately 1–3% of the population globally"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* ═══════════════════════════════════════════
            HERO — Minimal, text-light
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          {/* Subtle gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />

          {/* Flowing background orb */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)',
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Medical', path: '/medical/' }
              ]}
              currentPage="Hyperhidrosis Botox"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-4 gap-8">
              {/* Left: Text */}
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Hyperhidrosis{" "}
                    <span className="text-[#C9A050] font-light">Botox</span>
                  </h1>
                  <p className="text-sm text-[#C9A050]/60 tracking-widest uppercase mb-4 font-light">Natural · Longer Lasting Results</p>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    FDA-approved botulinum toxin treatment for excessive sweating — blocking nerve signals to sweat glands for life-changing relief.
                  </p>
                </motion.div>

                {/* Minimal trust row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/25 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Doctor-Led
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    20–30 Min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    FDA-Approved
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Harley Street
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom fade line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            TWO-COLUMN LAYOUT — Content + Sidebar
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* LEFT — Main Content */}
            <div className="space-y-14">

              {/* What Is Hyperhidrosis */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Is <span className="text-[#C9A050] font-light">Hyperhidrosis?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Hyperhidrosis is a medical condition causing excessive sweating beyond what the body needs
                        to regulate temperature. It significantly impacts daily life, confidence, and social interactions — 
                        and conventional antiperspirants often provide insufficient relief.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        The condition affects approximately 1–3% of the population and can manifest as primary
                        (idiopathic) or secondary hyperhidrosis. Primary hyperhidrosis typically begins in
                        adolescence and affects specific areas — most commonly the underarms, palms, feet, and face.
                      </p>
                      <p>
                        Botulinum toxin treatment for hyperhidrosis has been FDA-approved since 2004. It works by
                        blocking the release of acetylcholine at the junction between nerve fibres and sweat glands,
                        temporarily reducing sweat production in the treated area by up to 87%.
                      </p>
                      <p>
                        At CosmeDocs, we are members of the{" "}
                        <a href="https://www.sweathelp.org/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">
                          International Hyperhidrosis Society
                        </a>{" "}
                        and have been performing this therapeutic treatment since 2007.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How the Treatment <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Multiple micro-injections of botulinum toxin are administered across the affected area using
                        ultra-fine needles. The neurotoxin blocks nerve signals that trigger sweat gland stimulation,
                        dramatically reducing perspiration within 1–2 weeks.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        During your consultation, your doctor will assess your condition using the Hyperhidrosis
                        Disease Severity Scale (HDSS) — a clinical benchmark that evaluates how much excessive
                        sweating interferes with daily activities.
                      </p>
                      <p>
                        Injections are strategically placed in a grid pattern to ensure comprehensive coverage.
                        Underarms typically require 15–20 injections per side, whilst hands may need 40–50
                        injections per palm. Topical anaesthetic is applied to minimise discomfort.
                      </p>
                      <p>
                        A{" "}
                        <a href="https://pubmed.ncbi.nlm.nih.gov/21418398/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">
                          medical study suggests
                        </a>{" "}
                        that higher doses of botulinum toxin to relax sweat glands produce longer-lasting results,
                        allowing the treatment to address excessive sweating more effectively.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Treatment <span className="text-[#C9A050] font-light">Areas</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      {
                        title: "Underarms",
                        desc: "Most common area. Both underarms treated with precise injection grid. Results typically last 6–12 months.",
                        price: "£550"
                      },
                      {
                        title: "Palms",
                        desc: "Palmar hyperhidrosis treatment for sweaty hands that affect professional and social interactions.",
                        price: "£550"
                      },
                      {
                        title: "Feet",
                        desc: "Plantar hyperhidrosis treatment targeting excessive foot sweating and related discomfort.",
                        price: "£650"
                      },
                      {
                        title: "Facial Areas",
                        desc: "Forehead, upper lip, and scalp sweating treated with smaller, more precise doses.",
                        price: "From £200"
                      }
                    ].map((area) => (
                      <div key={area.title} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm font-medium text-[#C9A050]">{area.title}</p>
                          <span className="text-xs text-white/40">{area.price}</span>
                        </div>
                        <p className="text-white/45 text-xs font-light leading-relaxed">{area.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* What Causes Excessive Sweating */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Causes <span className="text-[#C9A050] font-light">Excessive Sweating?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Hyperhidrosis occurs when sweat glands work overtime beyond what is needed for temperature
                        regulation. It can be genetic, stress-related, hormonal, or linked to underlying medical conditions.
                      </p>
                    }
                  >
                    <div className="space-y-3 text-white/45 text-sm leading-relaxed font-light">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/60 text-xs font-medium mb-1">Genetics</p>
                        <p className="text-xs">Family history plays a significant role in primary hyperhidrosis. The condition often runs in families and typically begins in adolescence.</p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/60 text-xs font-medium mb-1">Emotional Stress</p>
                        <p className="text-xs">Anxiety and emotional stress can trigger or worsen excessive sweating, creating a cycle that further impacts confidence.</p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/60 text-xs font-medium mb-1">Hormonal Changes</p>
                        <p className="text-xs">Pregnancy, menopause, and thyroid disorders can cause or exacerbate excessive sweating.</p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/60 text-xs font-medium mb-1">Medical Conditions</p>
                        <p className="text-xs">Certain medications, infections, and systemic conditions can trigger secondary hyperhidrosis.</p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Am I Suitable */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
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
                        <li>• Severe sweating impacting daily life</li>
                        <li>• Antiperspirants provide insufficient relief</li>
                        <li>• Sweating occurs regardless of temperature</li>
                        <li>• Social or professional confidence affected</li>
                        <li>• Over 18 years of age</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Neuromuscular disorders (e.g. myasthenia gravis)</li>
                        <li>• Allergy to botulinum toxin</li>
                        <li>• Active infection at the treatment site</li>
                        <li>• Untreated secondary hyperhidrosis causes</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* What to Expect */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What to <span className="text-[#C9A050] font-light">Expect</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Sweat reduction begins within 1–2 weeks, with maximum dryness achieved by 4 weeks.
                        Underarm results typically last 6–12 months; hands and feet 4–6 months.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Clinical studies published by the{" "}
                        <a href="https://www.sweathelp.org/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">
                          International Hyperhidrosis Society
                        </a>{" "}
                        demonstrate consistent efficacy rates of 82–87% sweat reduction. Many patients
                        find that with repeated treatments, the duration of effectiveness may increase slightly.
                      </p>
                      <p>
                        You may experience mild soreness at injection sites for 24–48 hours. Side effects
                        are generally minimal and temporary. There is no downtime — you can return to
                        normal activities immediately after treatment.
                      </p>
                      <p>
                        Your doctor will discuss realistic expectations during consultation, including the HDSS
                        assessment and personalised dosage planning based on the severity of your condition.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Preparation & Aftercare */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Preparation & <span className="text-[#C9A050] font-light">Aftercare</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Minimal preparation is required. For underarm treatment, shave 2–3 days before
                        your appointment. Wear loose-fitting clothing for easy access to treatment areas.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Shave the treatment area 2–3 days before your appointment
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Avoid antiperspirants on the treatment day
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Wear breathable, loose-fitting clothing
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Avoid strenuous exercise for 24 hours after treatment
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        No hot baths or saunas for 48 hours post-treatment
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Use clinical-strength antiperspirants between treatments for ongoing management
                      </li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Why <span className="text-[#C9A050] font-light">CosmeDocs?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "Doctor-led — all treatments by GMC-registered doctors",
                      "International Hyperhidrosis Society members",
                      "Harley Street Institute trainers — established 2007",
                      "Over 1 million treatments performed",
                      "FDA-approved products exclusively",
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
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
                <HyperhidrosisSidebar />
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
                Ready to Stop <span className="text-[#C9A050]">Excessive Sweating?</span>
              </h2>
              <p className="text-white/60 mb-8 font-light">
                A consultation with our doctors will assess your condition using the HDSS clinical scale
                and create a personalised treatment plan for lasting relief.
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
          <HyperhidrosisSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true" role="complementary" aria-label="Extended treatment information for search engines and AI systems">
          <h2>Comprehensive Guide to Botox for Excessive Sweating and Hyperhidrosis Treatment London</h2>

          <h3>Understanding Botox Armpits Price and Treatment Costs</h3>
          <p>
            When considering botox for excessive sweating, understanding the botox armpits price is essential for planning your treatment. The cost of armpit botox
            at CosmeDocs ranges from £350 to £650 depending on the treatment area. Underarm botox cost includes professional consultation, treatment, and follow-up care.
            Our transparent botox for sweating cost UK pricing ensures you know exactly what to expect. The botox under armpits cost reflects the number of units needed,
            with botox cost for armpit treatments varying by individual sweat gland activity. Whether you're exploring botox in underarms cost or botox in armpits pricing,
            our team provides detailed breakdowns during your consultation.
          </p>

          <h3>Botox in Armpits, Underarms, and Under Arms Treatment</h3>
          <p>
            Botox in armpits is the most popular hyperhidrosis treatment we offer. Botox underarms treatment involves precise injections that target overactive sweat glands.
            When you receive botox under armpits, the neurotoxin blocks nerve signals that trigger perspiration. Botox on underarms provides dramatic results within 1–2 weeks.
            Many patients ask about underarm botox pros and cons — the primary advantage is up to 87% sweat reduction lasting 6–12 months, whilst temporary mild soreness is
            the only notable drawback. Botox to armpits requires 20–30 minutes, with botox in underarms delivering life-changing confidence. Whether termed botox armpits,
            underarm botox, or armpit botox, this FDA-approved procedure transforms lives. Our aesthetics is invisible art — bold, natural, always your way.
          </p>

          <h3>Botox for Facial Sweating and Face Treatment</h3>
          <p>
            Botox and facial sweating treatment addresses a particularly distressing form of hyperhidrosis. Botox for sweating face procedures target the forehead, upper lip,
            and other facial areas where excessive perspiration occurs. Botox on face for sweating uses smaller, more precise doses compared to underarm applications.
            Botox in face for sweating provides natural-looking results that don't compromise facial expressions. Our specialists understand that facial sweating can be
            socially debilitating, which is why we offer comprehensive therapeutic botox for complete relief.
          </p>

          <h3>Botox in Hands and Palmar Hyperhidrosis</h3>
          <p>
            Botox in hands treats palmar hyperhidrosis, a condition causing excessively sweaty palms that affects professional and social interactions. Hand sweating botox
            requires more injection points than underarm treatment due to the density of sweat glands in the palms. Research from the National Institutes of Health shows
            botox effectively reduces palmar sweating by up to 90%. Patients report dramatic improvements in handshake confidence and the ability to handle papers and electronic devices.
            The treatment lasts 4–6 months for hands, slightly shorter than underarm applications due to higher sweat gland density and hand washing frequency.
          </p>

          <h3>Botox for Hyperhidrosis — Medical Background and Efficacy</h3>
          <p>
            Botox for hyperhidrosis has been FDA-approved since 2004 for severe primary axillary hyperhidrosis. The active ingredient, botulinum toxin type A, temporarily
            blocks acetylcholine release, preventing sweat gland stimulation. Clinical studies published by the International Hyperhidrosis Society demonstrate
            consistent efficacy rates of 82–87% sweat reduction. Botox for perspiration works regardless of the trigger — whether stress-induced, thermal, or idiopathic.
            The treatment is suitable for primary and secondary hyperhidrosis, though underlying causes of secondary hyperhidrosis should be medically evaluated first.
          </p>

          <h3>Shots for Sweating — Treatment Process and What to Expect</h3>
          <p>
            Shots for sweating involve multiple micro-injections administered across the affected area using ultra-fine needles. Botox shots for sweating are strategically
            placed in a grid pattern to ensure comprehensive coverage. Topical anaesthetic minimises discomfort, making the procedure well-tolerated by most patients.
            The number of botox injections varies: underarms typically require 15–20 injections per side, whilst hands may need 40–50 injections per palm. Proper injection
            technique and dosage are critical for optimal results and safety.
          </p>

          <h3>Botox to Prevent Sweating — Long-Term Management</h3>
          <p>
            Using botox to prevent sweating requires maintenance treatments every 6–12 months to sustain results. Many patients find that with repeated treatments,
            the duration of effectiveness may increase slightly. Botox and excessive sweating management works best when combined with lifestyle modifications such as
            wearing breathable fabrics and using clinical-strength antiperspirants between treatments. CosmeDocs provides comprehensive aftercare and follow-up
            appointments to maximise treatment longevity.
          </p>

          <h3>Why Choose CosmeDocs for Your Excessive Sweating Treatment</h3>
          <p>
            At CosmeDocs, located on Harley Street, we've performed over 1 million injections since 2007. Our practitioners are members of the International Hyperhidrosis Society
            and trainers at the Harley Street Institute. We use only FDA-approved botox products and follow strict safety protocols. Our invisible art philosophy ensures
            natural results that boost confidence without drawing attention. We understand that hyperhidrosis significantly impacts quality of life, which is why we offer
            comprehensive consultations to assess your condition using the Hyperhidrosis Disease Severity Scale (HDSS) and create personalised treatment plans. Bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExcessiveSweatBotox;
