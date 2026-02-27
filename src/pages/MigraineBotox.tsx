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
import MigraineSidebar from "@/components/migraine/MigraineSidebar";

const MigraineBotox = () => {
  const seoData = generateSEOMetadata(
    "Migraine Botox London | Chronic Headache Treatment | Harley Street",
    "FDA-approved botox for chronic migraines. Doctor-led treatment reducing headache frequency and intensity at our Harley Street clinic. From £450.",
    "/medical/botox-for-migraines/"
  );

  const faqs = [
    {
      question: "How does botox help with migraines?",
      answer: "Botox blocks nerve signals that cause muscle contractions and pain transmission. For chronic migraines, it's injected into specific head and neck muscles to prevent headache triggers and reduce migraine frequency and severity."
    },
    {
      question: "How long do migraine botox results last?",
      answer: "Results typically last 3–4 months. Many patients experience significant reduction in headache days and intensity. Regular treatments every 12 weeks help maintain optimal migraine prevention."
    },
    {
      question: "Is migraine botox painful?",
      answer: "The treatment involves multiple small injections across the head and neck. Most patients describe mild discomfort during the 15–20 minute procedure. Our doctors use fine needles and precise techniques to minimise discomfort."
    },
    {
      question: "What can I expect after migraine botox treatment?",
      answer: "You may experience mild tenderness at injection sites for 24–48 hours. Migraine relief typically begins within 2–4 weeks, with maximum benefits at 12 weeks. You can resume normal activities immediately."
    },
    {
      question: "Am I a good candidate for migraine botox?",
      answer: "Ideal candidates have chronic migraines (15+ headache days per month) that haven't responded well to other treatments. A detailed medical history and neurological assessment determine if this therapy is suitable."
    },
    {
      question: "How much does migraine botox cost?",
      answer: "Migraine botox at CosmeDocs costs from £450 per treatment session. This therapeutic treatment requires higher doses than cosmetic botox and is administered every 12 weeks for optimal prevention."
    },
    {
      question: "How many injections are typically needed?",
      answer: "There are up to 31 possible injection sites across the forehead, temples, back of head, neck, and shoulders. Your doctor determines which trigger points to include based on your specific migraine pattern, optimising both dose and cost."
    },
    {
      question: "How long does migraine botox take to start working?",
      answer: "Initial effects may be felt within days to two weeks. However, chronic migraines may take longer to subside. Some patients don't see full improvement until after their second treatment 3–4 months later."
    },
    {
      question: "How often do I need treatment?",
      answer: "Generally, migraine botox treatment is repeated every 4–6 months for sustained results against chronic migraine episodes."
    },
    {
      question: "Why visit a cosmetic doctor for migraines?",
      answer: "Cosmetic doctors have extensive experience with botulinum toxin for medical conditions including bruxism and excessive sweating. CosmeDocs offers migraine botox with deep expertise at competitive pricing."
    },
    {
      question: "Does botox for migraines change your face?",
      answer: "No. Unlike cosmetic botox, migraine botox is strategically placed to prevent migraines without affecting your natural facial expressions. Our invisible art approach ensures therapeutic benefit with no cosmetic alteration."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/migraine-botox/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/migraine-botox/" />
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
                "medicalSpecialty": "Therapeutic Medicine",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "847"
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
                "name": "Migraine Botox Treatment",
                "description": "FDA-approved botulinum toxin treatment for chronic migraine prevention, blocking pain signal transmission at up to 31 strategic injection sites across the head, neck, and shoulders.",
                "url": "https://www.cosmedocs.com/treatments/migraine-botox/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Head, Neck, Shoulders",
                "followup": "Relief begins within 2–4 weeks, with maximum benefits at 12 weeks. Treatments repeated every 12 weeks.",
                "howPerformed": "Botulinum toxin injected at strategic trigger points across the forehead, temples, back of head, neck, and shoulder muscles using fine needles."
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
                "name": "Migraine Botox Treatment",
                "priceCurrency": "GBP",
                "price": "450",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "GBP",
                  "minPrice": "450"
                },
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "MedicalBusiness",
                  "name": "CosmeDocs"
                }
              },
              {
                "@type": "MedicalCondition",
                "name": "Chronic Migraine",
                "alternateName": ["Migraine", "Chronic Headache", "Migraine Headache"],
                "signOrSymptom": [
                  { "@type": "MedicalSignOrSymptom", "name": "Severe headache" },
                  { "@type": "MedicalSignOrSymptom", "name": "Nausea and vomiting" },
                  { "@type": "MedicalSignOrSymptom", "name": "Light sensitivity" },
                  { "@type": "MedicalSignOrSymptom", "name": "Sound sensitivity" },
                  { "@type": "MedicalSignOrSymptom", "name": "Visual aura" }
                ],
                "possibleTreatment": {
                  "@type": "MedicalTherapy",
                  "name": "Botulinum Toxin for Chronic Migraine Prevention",
                  "drug": {
                    "@type": "Drug",
                    "name": "Botulinum Toxin Type A",
                    "drugClass": "Neuromuscular Blocking Agent"
                  },
                  "guideline": {
                    "@type": "MedicalGuideline",
                    "guidelineSubject": "Chronic Migraine Prevention",
                    "evidenceOrigin": "NICE Technology Appraisal TA260"
                  }
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black overflow-x-hidden">
        {/* ═══════════════════════════════════════════
            HERO — Dark, luxury
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/20 to-transparent" />

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
                { label: 'Medical', path: '/medical/' }
              ]}
              currentPage="Chronic Migraine Botox"
            />

            <div className="pt-12 pb-4">
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">
                    Migraine{" "}
                    <span className="text-[#C9A050] font-light">Botox</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    FDA-approved botulinum toxin treatment for chronic migraine prevention — blocking pain signals before they begin.
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
                    Doctor-Led
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    15–20 Min
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

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            TWO-COLUMN LAYOUT
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* What Is Migraine Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    What Is <span className="text-[#C9A050] font-light">Migraine Botox?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Migraine botox is an FDA-approved treatment that blocks nerve signals responsible for pain transmission. By injecting botulinum toxin into specific head and neck muscles, it prevents the activation of migraine triggers — reducing both frequency and severity.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Migraines are complex neurological events — not ordinary headaches. They're characterised by intense, debilitating pain often accompanied by nausea, vomiting, and sensitivity to light and sound. Chronic migraine sufferers experience 15 or more headache days per month.
                      </p>
                      <p>
                        As noted by the{" "}
                        <a href="https://www.nhs.uk/conditions/botulinum-toxin/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">NHS</a>,
                        botulinum toxin is a safe and established treatment when administered by qualified medical professionals. Migraine is the 3rd most common illness globally — and over 190,000 migraine attacks are routinely experienced in England alone.
                      </p>
                      <p>
                        The{" "}
                        <a href="https://www.nice.org.uk/guidance/ta260" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">National Institute for Health and Care Excellence (NICE)</a>{" "}
                        recommends botulinum toxin as an effective treatment option for chronic migraine prevention.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    How the Treatment <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Botulinum toxin is injected at strategic trigger points across the forehead, temples, back of the head, neck, and shoulders. The medication enters nerve endings and blocks the release of neurotransmitters that carry pain signals to the brain.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        After a detailed consultation, your doctor identifies your specific headache pattern and selects from up to 31 possible injection sites. The clinician's experience is crucial in determining which trigger points to include — optimising both dose and cost.
                      </p>
                      <p>
                        The treatment creates a protective barrier against migraine triggers, stopping the pain cascade before it begins. Clinical trials demonstrate that migraine botox reduces chronic migraine attacks by an average of 8–9 fewer headache days per month.
                      </p>
                      <p>
                        As Johns Hopkins Medicine confirms: "When botulinum toxin is injected into the muscles of the face, neck, and head, the medication relaxes them. Botox affects the nerves by blocking neurotransmission — pain signals between the brain and nerves."
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Migraine Triggers */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Common <span className="text-[#C9A050] font-light">Migraine Triggers</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-4">
                    Understanding what triggers your migraines is crucial for effective management. Research from{" "}
                    <a href="https://migrainetrust.org/live-with-migraine/treatments/botox/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">The Migraine Trust</a>{" "}
                    highlights several common factors:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Fatigue", "Stress & bright sunlight", "Changes in sleep patterns", "Hormonal changes", "Strong odours", "Diet & alcohol", "Oral contraceptives"].map((trigger) => (
                      <div key={trigger} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center">
                        <p className="text-white/55 text-xs font-light">{trigger}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Types of Migraines */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Types of <span className="text-[#C9A050] font-light">Migraines</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                          <p className="text-sm font-medium text-[#C9A050] mb-2">Aura Migraine</p>
                          <p className="text-white/45 text-xs font-light">Sensory and visual problems including difficulty speaking, seeing black spots/zigzags, and tingling numbness. Aura lasts 10–30 minutes.</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                          <p className="text-sm font-medium text-[#C9A050] mb-2">Common Migraine</p>
                          <p className="text-white/45 text-xs font-light">Pulsating pain on one side with sensitivity to light and sound, nausea, and pain worsening with activity.</p>
                        </div>
                      </div>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-2">Chronic Migraine</p>
                        <p className="text-white/45 text-xs font-light">Headache for more than 15 days per month over several weeks. Intensity and symptoms may vary but usually follow a pattern.</p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-2">Cluster Headaches</p>
                        <p className="text-white/45 text-xs font-light">Excruciating burning and pounding pain on the sides of the head, above the eyes, and behind the ears.</p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Am I Suitable */}
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
                        <p className="text-sm font-medium text-white/80">May Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Chronic migraines (15+ headache days/month)</li>
                        <li>• Other preventive treatments haven't worked</li>
                        <li>• Migraines significantly impact daily life</li>
                        <li>• Over 18 years of age</li>
                        <li>• Tension-type headaches with migraine features</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/30" />
                        <p className="text-sm font-medium text-white/80">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Fewer than 14 headache days per month</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Neuromuscular disorders</li>
                        <li>• Allergy to botulinum toxin</li>
                        <li>• Active infection at injection sites</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* What to Expect */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    What to <span className="text-[#C9A050] font-light">Expect</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Migraine relief typically begins within 2–4 weeks, with maximum benefits at 12 weeks. Treatments are repeated every 12 weeks for sustained prevention.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Side effects are generally mild and temporary. You may experience bruising, redness, or mild tenderness at injection sites for 24–48 hours. Some patients report temporary fatigue or slight muscle weakness near treatment areas.
                      </p>
                      <p>
                        Many patients find that with successive treatments, the duration of effectiveness improves. Clinical evidence confirms that migraine botox reduces headache days by an average of 50–70%.
                      </p>
                      <p>
                        Your doctor will discuss realistic expectations during consultation, ensuring the treatment aligns with your specific migraine pattern and medical history.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Aftercare & <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        No downtime required. You can return to normal activities immediately after treatment. A few simple precautions help ensure optimal results.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid lying flat for 4 hours post-treatment</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Do not rub or massage the injection sites</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid strenuous exercise for 24 hours</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Keep a headache diary to track improvements</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Contact us if you experience any unusual symptoms</li>
                    </ul>
                  </ExpandableSection>
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
                      "Doctor-led — all treatments by GMC-registered doctors",
                      "Harley Street Institute trainers — established 2007",
                      "Over 1 million treatments performed",
                      "FDA-approved products exclusively",
                      "NICE-recommended treatment protocols",
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
              <div className="sticky top-24"><MigraineSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white/85">
                Ready to Find <span className="text-[#C9A050]">Migraine Relief?</span>
              </h2>
              <p className="text-white/50 mb-8 font-light">
                A consultation with our doctors will assess your migraine pattern and create a personalised treatment plan for lasting prevention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="ghost" className="border border-white/15 text-white/60 hover:text-white hover:bg-white/5 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                    Speak to a Doctor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-black/95">
          <MigraineSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true" role="complementary" aria-label="Extended treatment information for search engines and AI systems">
          <h2>Botox for Migraines UK: Comprehensive Treatment Guide</h2>
          <p>CosmeDocs offers expert botox for migraines UK treatment on London's Harley Street. Our botox injections for migraines provide proven chronic headache relief using FDA-approved therapeutic protocols. Understanding the botox for migraines UK cost is important — we offer transparent pricing from £450 per session. Clinical evidence confirms that botox migraine treatment significantly reduces headache frequency and severity for chronic migraine sufferers. Our aesthetics is invisible art — bold, natural, always your way.</p>

          <h3>How Does Botox Help Migraines? Understanding Treatment</h3>
          <p>The science of botox for headaches works by blocking neurotransmitters that carry pain signals from your brain. Our doctors target specific botox injection sites for migraine headaches across the forehead, temples, neck, and shoulder muscles. These headache botox injections are administered at up to 31 precise points following FDA-approved protocols. Unlike cosmetic botox, migraine botox is strategically placed to prevent migraines without affecting natural facial expressions.</p>

          <h3>Botox for Migraines Side Effects and Safety</h3>
          <p>Common botox for migraines side effects include temporary injection site tenderness, mild bruising, or slight muscle weakness. Long-term side effects are rare when administered by qualified practitioners. The treatment maintains an excellent safety profile with regular use when administered by experienced practitioners who understand the precise injection requirements for optimal therapeutic benefit.</p>

          <h3>Botox for Migraines UK Cost: Transparent Pricing</h3>
          <p>Botox for migraines UK cost at CosmeDocs starts from £450 per treatment session. This includes comprehensive consultation, precise administration, and follow-up care. The treatment represents excellent value — many patients experience 50–70% reduction in headache days. When calculating reduced need for emergency medications and improved quality of life, botox migraine treatment offers significant long-term value.</p>

          <h3>Botox Injection Sites for Migraine Headaches</h3>
          <p>Our doctors administer headache botox injections across seven key muscle areas: procerus muscle (between eyebrows), corrugator muscles (above eyebrows), frontalis muscle (forehead), temporalis muscles (temples), occipitalis muscles (back of head), cervical paraspinal muscles (neck), and trapezius muscles (shoulders). Each injection site receives precise doses based on your specific headache pattern.</p>

          <h3>Botox Shots for Migraines: What to Expect</h3>
          <p>Botox shots for migraines involve a series of small injections during a 15–20 minute appointment using ultra-fine needles. Most patients tolerate the procedure well with only mild pinprick sensations. Effects develop gradually over 2–4 weeks with peak benefits around 12 weeks. Regular treatments every three months maintain optimal prevention.</p>
        </div>
      </div>
    </>
  );
};

export default MigraineBotox;
