import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import jawIllustration from "@/assets/jaw-profile-illustration.png";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import MasseterSidebar from "@/components/masseter/MasseterSidebar";

const MasseterBotox = () => {
  const seoData = generateSEOMetadata(
    "Masseter Botox | Jaw Slimming & Bruxism | Harley St",
    "Doctor-led masseter botox for jaw slimming, teeth grinding relief & facial contouring. Dual cosmetic and medical benefits from £350 at our Harley Street clinic.",
    "/treatments/masseter-botox/"
  );

  const faqs = [
    {
      question: "How long does masseter botox last?",
      answer: "Masseter botox typically lasts 4–6 months. Larger masseter muscles may need three sessions in the first year, two in the second, and fewer afterwards. Results appear within 1–2 weeks. We recommend maintenance 2–3 times per year for sustained jaw slimming."
    },
    {
      question: "What are masseter botox side effects?",
      answer: "Side effects are generally minimal — slight bruising, redness, or temporary muscle weakness during chewing. Serious complications like asymmetry are rare (less than 0.5%). Proper aftercare includes avoiding strenuous exercise for 24 hours."
    },
    {
      question: "Am I the right candidate for jaw reduction botox?",
      answer: "You may benefit if you have masseter hypertrophy from teeth grinding, desire jawline slimming, want to reduce jaw pain and tension, need TMJ symptom relief, or experience frequent tension headaches. A consultation will confirm suitability."
    },
    {
      question: "Does jawline botox hurt?",
      answer: "Most patients describe a mild pinch. We apply skin-numbing agents before injecting and use very fine needles. Slight soreness immediately after usually subsides quickly, with or without icing."
    },
    {
      question: "What if I do not like the results?",
      answer: "Masseter botox naturally wears off within 4–6 months, and your jawline will gradually return to its previous shape. There is no instant reversal, but the temporary nature ensures you can reassess before further treatment."
    },
    {
      question: "Will I have problems chewing after jaw botox?",
      answer: "No. The treatment partially relaxes the masseter muscle — it does not eliminate function. You may notice slight fatigue when chewing for the first week, but this subsides. Speech and eating are not affected."
    },
    {
      question: "What is the difference between jaw botox and jawline fillers?",
      answer: "Jaw botox relaxes overactive chewing muscles to slim the jaw. Jawline fillers add volume and definition to the bone contour. Botox slims, fillers sculpt. Many patients benefit from combining both for optimal facial balance."
    },
    {
      question: "How much is masseter botox?",
      answer: "Masseter botox at CosmeDocs is £350 for both sides. This includes consultation, precise dosing (25–45 units per side depending on muscle mass), premium products, and aftercare. Consultation fee is redeemable against treatment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/treatments/masseter-botox/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/treatments/masseter-botox/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://cosmedocs.co.uk/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "medicalSpecialty": "Aesthetic Medicine",
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
                ]
              },
              {
                "@type": "MedicalProcedure",
                "name": "Masseter Botox Treatment",
                "description": "Botulinum toxin injection into the masseter muscles for jaw slimming and bruxism relief. Dual cosmetic and medical benefits.",
                "url": "https://cosmedocs.co.uk/treatments/masseter-botox/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Masseter Muscle (Jaw)",
                "followup": "Results visible in 1–2 weeks, lasting 4–6 months. Follow-up assessment included.",
                "howPerformed": "Botulinum toxin injected into the masseter muscles at strategic points to reduce muscle size and activity."
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
            HERO — Minimal, text-light
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
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Botox Treatments', path: '/treatments/botox/' }
              ]}
              currentPage="Masseter Botox"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-4 gap-8">
              {/* Mobile: Jaw illustration above text */}
              <motion.div
                className="lg:hidden w-[180px] h-[180px] relative mx-auto"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 50% 45%, rgba(201, 160, 80, 0.12) 0%, transparent 60%)',
                  }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={jawIllustration}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(201,160,80,0.15)]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Left: Text */}
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Masseter{" "}
                    <span className="text-[#C9A050] font-light">Botox</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    Jaw slimming and bruxism relief through precise muscle reduction — dual cosmetic and medical benefits in one treatment.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/25 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />15–20 Min</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Since 2007</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £350</span>
                </motion.div>
              </div>

              {/* Right: Jaw illustration — desktop */}
              <motion.div
                className="hidden lg:block flex-shrink-0 w-[280px] h-[320px] relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 50% 45%, rgba(201, 160, 80, 0.1) 0%, transparent 60%)',
                  }}
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

        {/* ═══════════════════════════════════════════
            TWO-COLUMN LAYOUT — Content + Sidebar
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* LEFT — Main Content */}
            <div className="space-y-14">

              {/* What Is Masseter Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Is <span className="text-[#C9A050] font-light">Masseter Botox?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Masseter botox — also known as jawline slimming botox — uses botulinum toxin to relax the masseter muscles on each side of the jaw. This reduces muscle bulk, slimming a square jawline whilst simultaneously relieving teeth grinding, TMJ pain, and jaw tension.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        The masseter is the powerful muscle responsible for chewing — and one of the strongest in the body. When overworked through bruxism (teeth grinding), stress clenching, or habitual gum chewing, it can hypertrophy (enlarge), creating a wide, square jawline and causing chronic pain.
                      </p>
                      <p>
                        By injecting small doses of botulinum toxin into the enlarged muscle, we interrupt the nerve signals driving overactivity. The muscle gradually reduces in size over 2–6 weeks, producing both cosmetic jaw slimming and medical relief from grinding-related symptoms.
                      </p>
                      <p>
                        Clinical studies, including research published in the <a href="https://academic.oup.com/asj/advance-article/doi/10.1093/asj/sjaf167/8239609" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">Aesthetic Surgery Journal</a>, confirm that masseter botox is generally safe with no significant effect on bone density after repeated treatments.
                      </p>
                      <p>
                        Treatment can be combined with <Link to="/treatments/dermal-fillers/jawline/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">jawline fillers</Link> or <Link to="/treatments/dermal-fillers/chin/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">chin filler</Link> for comprehensive lower-face contouring.
                      </p>
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
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The procedure takes 15–20 minutes. Your doctor assesses your masseter muscle size by palpation, then administers precise doses of botulinum toxin — typically 25–45 units per side — into strategic points within the muscle.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        During consultation, your doctor evaluates your jaw anatomy, muscle bulk, bite function, and aesthetic goals. The masseter is assessed while you clench — you should feel it contract prominently at the jaw angle.
                      </p>
                      <p>
                        A muscle graded as 'XL' typically presents with the lower face appearing wider than the upper face — the opposite of the 'triangle of youth'. Treatment dosage is calibrated to your individual muscle mass.
                      </p>
                      <p>
                        Fine needles deliver the toxin at multiple injection points within the muscle body. Topical numbing cream is applied if preferred. You can return to normal activities immediately — there is no downtime.
                      </p>
                      <p>
                        Results develop over 1–2 weeks as the muscle gradually relaxes, with peak slimming visible at 4–6 weeks. The jawline transitions from square to more oval or V-shaped.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Cosmetic vs Medical Benefits */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Dual <span className="text-[#C9A050] font-light">Benefits</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">Cosmetic Benefits</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Slims a wide or square jawline</li>
                        <li>• Creates a V-shaped facial contour</li>
                        <li>• Corrects facial asymmetry</li>
                        <li>• Softens masculine jawline features</li>
                        <li>• Enhances overall facial balance</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Heart className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">Medical Benefits</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Relieves bruxism (teeth grinding)</li>
                        <li>• Reduces TMJ-related jaw pain</li>
                        <li>• Alleviates tension headaches</li>
                        <li>• Prevents dental damage from clenching</li>
                        <li>• Reduces jaw muscle spasms</li>
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
                        <li>• Wide or square jawline you wish to slim</li>
                        <li>• Teeth grinding or jaw clenching (bruxism)</li>
                        <li>• TMJ pain or jaw tension</li>
                        <li>• Facial asymmetry from muscle imbalance</li>
                        <li>• Tension headaches originating from jaw</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Jaw width caused by bone structure, not muscle</li>
                        <li>• Active skin infection at injection site</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Allergy to botulinum toxin</li>
                        <li>• Neuromuscular disorders</li>
                      </ul>
                    </div>
                  </div>
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
                        Jaw slimming results appear within 1–2 weeks, with peak effect at 4–6 weeks as the muscle gradually atrophies. Results last 4–6 months, with many patients needing fewer sessions over time.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Most patients notice three stages: initial relaxation (week 1–2), visible slimming (week 3–4), and peak contour (week 4–6). The jawline transitions from a square or wide shape to a softer, more oval silhouette.
                      </p>
                      <p>
                        With regular maintenance (2–3 treatments per year), many patients find the muscle adapts and requires progressively lower doses. Some report lasting results of 6+ months after 2–3 years of treatment.
                      </p>
                      <p>
                        Teeth grinding relief and pain reduction may be noticed even earlier — often within 7–10 days of treatment.
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
                        No downtime required. You can return to work and normal activities immediately. A few simple precautions help ensure optimal results.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid strenuous exercise for 24 hours</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Do not massage or rub the treated area</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid excessive chewing (e.g. gum) for 48 hours</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Stay upright for 4 hours post-treatment</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Apply ice if mild bruising or swelling occurs</li>
                    </ul>
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
                      "Personalised dosing based on muscle assessment",
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
                <MasseterSidebar />
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
                Ready for a Slimmer <span className="text-[#C9A050]">Jawline?</span>
              </h2>
              <p className="text-white/60 mb-8 font-light">
                A consultation with our doctors will assess your jaw anatomy, discuss your goals, and recommend the optimal treatment plan.
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
          <MasseterSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Masseter Botox — Expert Jaw Slimming & Bruxism Treatment at Harley Street</h2>
          <p>
            CosmeDocs offers doctor-led masseter botox treatments for jaw slimming and bruxism relief at our Harley Street clinic in London. Masseter botox, also known as jawline slimming botox, jaw botox, or jawline botox, uses precise botulinum toxin injections to reduce the masseter muscle size. This creates a slimmer, more V-shaped facial contour whilst simultaneously relieving teeth grinding, TMJ pain, and jaw tension. Our GMC-registered doctors have been performing masseter botox treatments since 2007, with over 1 million injections performed.
          </p>
          <h3>How Does Masseter Botox Work for Jaw Slimming?</h3>
          <p>
            Masseter botox works by temporarily relaxing the masseter muscle through chemodenervation. The botulinum toxin blocks nerve signals to the overactive jaw muscle, causing it to gradually reduce in size over 2–6 weeks. This botox facial slimming technique reshapes the jawline from square to oval. Botox for masseter muscle uses 25–45 units per side depending on muscle mass. Masseter botox before and after results show dramatic jaw contouring and facial slimming within 4–6 weeks.
          </p>
          <h3>Masseter Botox for Bruxism and TMJ Relief</h3>
          <p>
            Masseter botox for bruxism effectively treats teeth grinding by relaxing the overactive jaw muscle. Masseter botox for TMJ symptoms reduces jaw pain, tension headaches, and prevents dental damage from chronic clenching. Many patients seek masseter botox for teeth grinding relief alongside cosmetic jaw slimming benefits. Our doctors assess each patient's grinding patterns and muscle tension to determine optimal dosing.
          </p>
          <h3>Masseter Botox Cost and Pricing</h3>
          <p>
            Masseter botox cost at CosmeDocs is £350 for both sides. Our masseter botox price includes comprehensive consultation, precise dosing, premium botox products, and aftercare support. How much is masseter botox UK? At £350, our masseter botox pricing represents excellent value with no hidden fees. Consultation fee is redeemable against treatment if you proceed on the same day.
          </p>
          <h4>Masseter Botox Side Effects and Aftercare</h4>
          <p>
            Masseter botox side effects are generally minimal. Common masseter botox aftercare concerns include slight bruising, redness, or temporary chewing fatigue. Serious side effects are rare. Proper masseter botox aftercare includes avoiding exercise for 24 hours and not massaging the area. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default MasseterBotox;
