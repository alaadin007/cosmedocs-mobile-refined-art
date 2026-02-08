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
import BruxismSidebar from "@/components/bruxism/BruxismSidebar";

const BruxismBotox = () => {
  const seoData = generateSEOMetadata(
    "Bruxism Botox London | TMJ Treatment | Harley Street Doctors",
    "Doctor-led botox for bruxism, teeth grinding & TMJ jaw pain. Masseter muscle treatment for lasting relief and jawline slimming at our Harley Street clinic.",
    "/treatments/bruxism-botox/"
  );

  const faqs = [
    {
      question: "How does botox help with bruxism and TMJ?",
      answer: "Botox relaxes the masseter muscles responsible for jaw clenching and teeth grinding. This reduces muscle tension, alleviates TMJ pain, and prevents dental damage whilst creating a slimmer jawline as a cosmetic benefit."
    },
    {
      question: "How long do bruxism botox results last?",
      answer: "Results typically last 4–6 months. The masseter muscles gradually regain strength, requiring maintenance treatments to sustain therapeutic benefits and prevent return of grinding symptoms."
    },
    {
      question: "Is bruxism botox painful?",
      answer: "The treatment involves moderate discomfort due to the thick masseter muscles. Most patients describe it as pressure sensations during injection. The procedure takes 10–15 minutes with our doctors using specialised techniques."
    },
    {
      question: "What can I expect after bruxism botox treatment?",
      answer: "You may experience mild jaw tenderness for 24–48 hours. Grinding reduction begins within 1–2 weeks, with maximum benefits at 4–6 weeks. Jawline slimming becomes noticeable after 6–8 weeks."
    },
    {
      question: "Am I a good candidate for bruxism botox?",
      answer: "Ideal candidates have teeth grinding, jaw clenching, TMJ pain, or enlarged masseter muscles. A consultation will assess your jaw function and determine if this therapeutic treatment is appropriate."
    },
    {
      question: "How much does bruxism botox cost?",
      answer: "Treatment at CosmeDocs costs £350–£450 depending on severity and muscle size. This includes consultation and follow-up care."
    },
    {
      question: "Can bruxism botox be combined with other treatments?",
      answer: "Yes. Bruxism botox can be combined with cosmetic facial botox and dermal fillers for comprehensive aesthetic and therapeutic benefits. Our doctors create personalised treatment plans addressing both concerns."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/treatments/bruxism-botox/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/treatments/bruxism-botox/" />
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
                "url": "https://cosmedocs.co.uk/",
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
                  "ratingValue": "4.8",
                  "reviewCount": "132"
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
                "name": "Bruxism Botox Treatment",
                "alternateName": "TMJ Botox Treatment",
                "description": "Therapeutic botulinum toxin treatment targeting the masseter and temporalis muscles to relieve teeth grinding, jaw clenching, and TMJ disorders.",
                "url": "https://cosmedocs.co.uk/treatments/bruxism-botox/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Masseter muscles, Temporalis muscles",
                "followup": "Results begin within 1–2 weeks, lasting 4–6 months. Follow-up assessment available.",
                "howPerformed": "Botulinum toxin injected into the masseter and/or temporalis muscles to relax overactive jaw muscles and prevent unconscious clenching and grinding."
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
                "name": "Bruxism Botox Treatment",
                "priceCurrency": "GBP",
                "price": "350",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "GBP",
                  "minPrice": "350",
                  "maxPrice": "450"
                },
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "MedicalBusiness",
                  "name": "CosmeDocs"
                }
              },
              {
                "@type": "MedicalCondition",
                "name": "Bruxism",
                "alternateName": ["Teeth Grinding", "TMJ Disorder", "Jaw Clenching"],
                "signOrSymptom": [
                  { "@type": "MedicalSignOrSymptom", "name": "Teeth grinding" },
                  { "@type": "MedicalSignOrSymptom", "name": "Jaw clenching" },
                  { "@type": "MedicalSignOrSymptom", "name": "TMJ pain" },
                  { "@type": "MedicalSignOrSymptom", "name": "Headaches from jaw tension" },
                  { "@type": "MedicalSignOrSymptom", "name": "Dental damage" }
                ],
                "possibleTreatment": {
                  "@type": "MedicalTherapy",
                  "name": "Botulinum Toxin Injection",
                  "drug": {
                    "@type": "Drug",
                    "name": "Botulinum Toxin Type A",
                    "drugClass": "Neuromuscular Blocking Agent"
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
              currentPage="Bruxism / TMJ Botox"
            />

            <div className="pt-12 pb-4">
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">
                    Bruxism{" "}
                    <span className="text-[#C9A050] font-light">& TMJ Botox</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    Therapeutic botulinum toxin to relieve teeth grinding, jaw clenching, and TMJ pain — with the added benefit of jawline refinement.
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
                    10–15 Min
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

              {/* What Is Bruxism */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    What Is <span className="text-[#C9A050] font-light">Bruxism?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Bruxism is a condition characterised by involuntary teeth grinding and jaw clenching — often occurring during sleep. It affects approximately 8–31% of the population and can lead to significant dental damage, jaw pain, and headaches.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Botox for bruxism works by gently relaxing the overactive masseter and temporalis muscles responsible for grinding and clenching. According to{" "}
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3893479/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">research published by the National Institutes of Health</a>,
                        botulinum toxin significantly reduces bruxism symptoms with minimal adverse effects.
                      </p>
                      <p>
                        TMJ (temporomandibular joint) disorders are closely related to bruxism. By reducing strain on the{" "}
                        <Link to="/treatments/masseter-botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">masseter</Link>{" "}
                        and surrounding muscles, this treatment provides both functional relief and subtle aesthetic benefits — naturally slimming the jawline.
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
                        Botulinum toxin is injected into the masseter muscles — and in some cases the temporalis — to reduce their involuntary contractions. The 10–15 minute procedure uses fine needles with minimal discomfort.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        The masseter is the largest and most powerful muscle of mastication. When overactive, it drives clenching and grinding that damages teeth and causes TMJ pain. Botox temporarily weakens this muscle, breaking the cycle of tension.
                      </p>
                      <p>
                        Your doctor assesses your jaw function, muscle size, and symptoms to determine precise injection placement and dosage. In some cases the temporalis muscle — located over the temples — is also treated for comprehensive relief.
                      </p>
                      <p>
                        A{" "}
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5870198/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">clinical study in the Journal of Oral Rehabilitation</a>{" "}
                        demonstrated that botulinum toxin injections significantly reduce bruxism symptoms with minimal adverse effects.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* What Causes Bruxism */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    What Causes <span className="text-[#C9A050] font-light">Bruxism?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Bruxism can be triggered by stress, misaligned teeth, lifestyle habits, or certain medications. Understanding the underlying cause helps guide effective treatment.
                      </p>
                    }
                  >
                    <div className="space-y-3 text-white/45 text-sm leading-relaxed font-light">
                      {[
                        { title: "Stress & Anxiety", desc: "Major contributors leading to involuntary jaw clenching and grinding, especially during sleep." },
                        { title: "Misaligned Teeth", desc: "Can disrupt normal jaw alignment and function, increasing grinding frequency." },
                        { title: "Lifestyle Habits", desc: "Smoking, heavy alcohol consumption, and excessive caffeine intake are known risk factors." },
                        { title: "Medications", desc: "Certain antidepressants and other medications can predispose individuals to bruxism." },
                      ].map((item) => (
                        <div key={item.title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                          <p className="text-white/60 text-xs font-medium mb-1">{item.title}</p>
                          <p className="text-xs">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* What It Helps With */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    TMJ Botox <span className="text-[#C9A050] font-light">Helps With</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Headaches & migraines", "Earaches", "Facial pain",
                      "Neck pain", "Chipped teeth & sensitivity", "Jaw stiffness",
                      "Sleep disturbance", "Shoulder tension", "Chewed tissue"
                    ].map((item) => (
                      <div key={item} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center">
                        <p className="text-white/55 text-xs font-light">{item}</p>
                      </div>
                    ))}
                  </div>
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
                        <li>• Teeth grinding (awake or during sleep)</li>
                        <li>• Jaw clenching causing pain or headaches</li>
                        <li>• TMJ disorder symptoms</li>
                        <li>• Enlarged masseter muscles</li>
                        <li>• Dental damage from grinding</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/30" />
                        <p className="text-sm font-medium text-white/80">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Neuromuscular disorders</li>
                        <li>• Allergy to botulinum toxin</li>
                        <li>• Active infection at the treatment site</li>
                        <li>• Significant jaw misalignment requiring orthodontics</li>
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
                        Grinding reduction begins within 1–2 weeks, with maximum therapeutic benefits at 4–6 weeks. Jawline slimming becomes noticeable after 6–8 weeks as the masseter muscles reduce in size.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Results typically last 4–6 months. Regular maintenance treatments prevent the return of grinding symptoms and progressive muscle reduction may extend intervals between appointments over time.
                      </p>
                      <p>
                        Side effects are generally mild and temporary — you may experience jaw tenderness for 24–48 hours. There is no downtime and you can return to normal activities immediately.
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
                        No downtime required. Avoid excessive chewing (gum, tough foods) for 24 hours and refrain from rubbing the treated area.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid chewing gum for 24 hours post-treatment</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Do not rub or massage the jaw area</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid strenuous exercise for 24 hours</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Continue wearing your night guard if prescribed</li>
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
                      "Harley Street, London — established 2007",
                      "Over 1 million treatments performed",
                      "Therapeutic and aesthetic dual benefits",
                      "Personalised treatment plans for every patient",
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
              <div className="sticky top-24"><BruxismSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white/85">
                Ready to Relieve <span className="text-[#C9A050]">Jaw Tension?</span>
              </h2>
              <p className="text-white/50 mb-8 font-light">
                A consultation with our doctors will assess your jaw function and create a personalised treatment plan for lasting relief.
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
          <BruxismSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true" role="complementary" aria-label="Extended treatment information for search engines and AI systems">
          <h2>Expert Bruxism Botox Treatment London | TMJ Botox | Teeth Grinding Cure</h2>
          <p>CosmeDocs offers professional bruxism botox and TMJ botox treatments for teeth grinding and jaw clenching. Our experienced doctors use advanced botox for teeth grinding and botox for clenched jaw techniques to provide effective relief. Botox and teeth grinding treatment targets the masseter and temporalis muscles, offering a proven bruxism cure and teeth grinding treatment. Located on Harley Street, London, our clinic provides comprehensive jaw assessments and personalised bruxism treatments for optimal results. Our aesthetics is invisible art — bold, natural, always your way.</p>
          <h3>Botox for Jaw Pain & TMJ Treatment London</h3>
          <p>Botox for jaw pain and botox for TMJ (temporomandibular joint disorder) effectively relieves symptoms of clenched jaw and reduces jaw grinding intensity. Our botox TMJ treatment addresses clench jaw symptoms including headaches, facial pain, and dental damage from bruxism teeth wear. Botox to stop teeth grinding works by relaxing overactive jaw muscles, preventing unconscious clenching teeth and teeth clenching behaviours.</p>
          <h3>Understanding Bruxism Signs and Symptoms | Bruxism Teeth Grinding</h3>
          <p>Bruxism signs and symptoms include unconscious grind teeth behaviour, jaw clenching, morning headaches, and teeth grinding symptoms like tooth sensitivity and enamel wear. Bruxism teeth grinding symptoms often present as clenching jaw tension, TMJ pain, and worn dental surfaces from chronic bruxism grinding. Many patients experience symptoms of clenched jaw including facial muscle fatigue, earaches, and disturbed sleep patterns.</p>
          <h3>Bruxism Treatment Options | How I Cured My Bruxism</h3>
          <p>Patients often ask how I cured my bruxism — and teeth grinding botox represents one of the most effective modern bruxism treatments available. Botox jaw clenching therapy targets the masseter muscles responsible for jaw grinding and clenching teeth. This innovative bruxism treatment offers superior results compared to traditional mouth guards for managing bruxismo.</p>
          <h3>Comprehensive Teeth Grinding Treatment & Bruxism Cure</h3>
          <p>Our comprehensive teeth grinding treatment approach combines botox and teeth grinding therapy with lifestyle management strategies. Botox for bruxism provides 4–6 months of relief from jaw teeth grinding and teeth clenching symptoms. The treatment effectively addresses both daytime clenching jaw habits and nocturnal bruxism teeth grinding. As a recognised bruxism cure, this therapy prevents further bruxism teeth damage whilst improving sleep quality.</p>
          <h3>Botox Jaw Clenching Treatment & Bruxism Jawline Benefits</h3>
          <p>Botox jaw clenching treatment offers dual benefits — therapeutic relief and aesthetic bruxism jawline refinement. By relaxing enlarged masseter muscles from chronic grinding teeth, patients achieve a slimmer, more refined jaw contour. This treatment for teeth grinding reduces muscle bulk whilst maintaining natural jaw movement and chewing function.</p>
        </div>
      </div>
    </>
  );
};

export default BruxismBotox;
