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
import TrapBotoxSidebar from "@/components/trap-botox/TrapBotoxSidebar";

const TrapBotox = () => {
  const seoData = generateSEOMetadata(
    "Trap Botox London | Shoulder Slimming | Harley St",
    "Doctor-led trap botox (TrapTox) for shoulder slimming, neck elongation & chronic tension relief. Also known as Barbie Botox. From £350 at Harley Street.",
    "/treatments/trap-botox/"
  );

  const faqs = [
    {
      question: "What is trap botox and how does it work?",
      answer: "Trap botox — also called TrapTox or Barbie Botox — involves injecting botulinum toxin into the trapezius muscles to reduce their bulk. This slims the shoulders, elongates the neck, and relieves chronic tension, creating a more elegant upper-body silhouette."
    },
    {
      question: "How long does trap botox last?",
      answer: "Results typically last 4–6 months. With regular treatments, the trapezius muscles may become progressively smaller, potentially extending duration between sessions over time."
    },
    {
      question: "When will I see trap botox results?",
      answer: "Initial effects may be noticed within 1–2 weeks. Full shoulder slimming and muscle reduction becomes visible at 4–6 weeks as the muscle gradually relaxes and atrophies."
    },
    {
      question: "Is trap botox painful?",
      answer: "The treatment involves multiple small injections using fine needles. Most patients experience mild discomfort similar to standard botox. No anaesthetic is usually required, though numbing cream can be applied."
    },
    {
      question: "What is the difference between trap botox and full Barbie Botox?",
      answer: "Standard trap botox targets the upper trapezius muscles for shoulder slimming. Full Barbie Botox is a more comprehensive treatment using higher doses across the entire trapezius muscle for maximum shoulder reduction and neck elongation."
    },
    {
      question: "Can trap botox help with neck and shoulder pain?",
      answer: "Yes. Trap botox is highly effective for chronic shoulder tension, 'tech neck', stress-related muscle tightness, and tension headaches originating from the trapezius. Many patients seek treatment for pain relief alongside cosmetic slimming."
    },
    {
      question: "How much does trap botox cost?",
      answer: "Trap botox at CosmeDocs starts from £350 for standard treatment. Full Barbie Botox (comprehensive shoulder reduction) is £450. All prices include consultation and aftercare."
    },
    {
      question: "Who is a good candidate for trap botox?",
      answer: "Ideal candidates have well-developed or bulky trapezius muscles and desire slimmer shoulders, a longer-looking neck, or relief from chronic tension. Your doctor will assess muscle size and discuss realistic expectations during consultation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/treatments/trap-botox/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/treatments/trap-botox/" />
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
                "name": "Trap Botox (TrapTox / Barbie Botox)",
                "alternateName": ["Trapezius Botox", "TrapTox", "Barbie Botox", "Shoulder Slimming Botox"],
                "description": "Botulinum toxin injection into the trapezius muscles for shoulder slimming, neck elongation, and chronic tension relief.",
                "url": "https://cosmedocs.co.uk/treatments/trap-botox/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Trapezius Muscles (Shoulders/Neck)",
                "followup": "Results visible in 1–2 weeks, full effect at 4–6 weeks, lasting 4–6 months.",
                "howPerformed": "Botulinum toxin injected at multiple strategic points within the trapezius muscles to reduce bulk and relieve tension."
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
              currentPage="Trap Botox"
            />

            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Trap{" "}
                  <span className="text-[#C9A050] font-light">Botox</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Shoulder slimming and neck elongation through targeted trapezius muscle reduction — elegance refined, tension released.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
              >
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />15–20 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Also: TrapTox</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £350</span>
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

              {/* What Is Trap Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Is <span className="text-[#C9A050] font-light">Trap Botox?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Trap botox — also known as TrapTox or Barbie Botox — involves injecting botulinum toxin into the trapezius muscles. These large, diamond-shaped muscles extend from the base of your neck across your shoulders and upper back. When overdeveloped or chronically tense, they create a bulky, 'hunched' appearance.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        By relaxing the overactive trapezius fibres, trap botox produces a dual benefit: aesthetic shoulder slimming with an elongated, graceful neckline, and therapeutic relief from chronic neck and shoulder tension.
                      </p>
                      <p>
                        The treatment has surged in popularity for its ability to address 'tech neck' — the strain caused by prolonged desk work, phone use, and screen time that leads to chronically tight, enlarged trapezius muscles.
                      </p>
                      <p>
                        Research published in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12091602/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">Plastic and Reconstructive Surgery</a> has demonstrated the efficacy and safety of botulinum toxin for trapezius muscle reduction.
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
                        The treatment takes 15–20 minutes. Your doctor maps the trapezius muscles and administers botulinum toxin at multiple strategic points across the upper fibres. The toxin blocks nerve signals, causing the muscle to gradually relax and reduce in size.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        During consultation, your doctor assesses your muscle bulk, tension patterns, and aesthetic goals. Standard trap botox targets the upper trapezius; full Barbie Botox covers a wider area for maximum shoulder reduction.
                      </p>
                      <p>
                        Fine needles deliver precise doses at each injection site. No anaesthesia is typically needed, though topical numbing cream can be applied. You can return to normal activities immediately.
                      </p>
                      <p>
                        Results develop gradually: initial relaxation within 1–2 weeks, visible slimming at 3–4 weeks, and peak effect at 4–6 weeks as the muscle adapts.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Benefits */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Benefits of <span className="text-[#C9A050] font-light">Trap Botox</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">Aesthetic Benefits</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Slims bulky or muscular shoulders</li>
                        <li>• Elongates the neckline</li>
                        <li>• Creates a more elegant, graceful profile</li>
                        <li>• Refines the neck-to-shoulder contour</li>
                        <li>• Improves posture appearance</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Heart className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">Therapeutic Benefits</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Relieves chronic shoulder and neck tension</li>
                        <li>• Reduces tension headaches</li>
                        <li>• Alleviates 'tech neck' strain</li>
                        <li>• Improves range of motion</li>
                        <li>• Helps with stress-related muscle tightness</li>
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
                        <li>• Bulky or overdeveloped shoulder muscles</li>
                        <li>• Chronic neck and shoulder tension</li>
                        <li>• 'Tech neck' from prolonged desk work</li>
                        <li>• Desire for slimmer, more feminine shoulders</li>
                        <li>• Tension headaches from muscle strain</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Shoulder width caused by bone structure</li>
                        <li>• Active infection at injection site</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Allergy to botulinum toxin</li>
                        <li>• Neuromuscular disorders (e.g. myasthenia gravis)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Results */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Results & <span className="text-[#C9A050] font-light">Expectations</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Shoulder slimming results become visible at 3–4 weeks, with peak effect at 4–6 weeks. Results typically last 4–6 months. Many patients find their muscles become progressively smaller with regular treatments.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Tension relief is often noticed within the first 1–2 weeks as the muscle begins to relax. The cosmetic slimming effect follows as the muscle gradually atrophies from reduced activity.
                      </p>
                      <p>
                        The transformation is particularly noticeable in clothing — off-shoulder tops, sleeveless dresses, and formal wear sit more elegantly on the frame. Posture often improves as muscle tension releases.
                      </p>
                      <p>
                        With consistent treatment (2–3 sessions per year), many patients find the trapezius muscle adapts and remains slimmer between sessions, potentially extending the interval between appointments.
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
                        No downtime required. You can return to work and daily activities immediately. Avoid heavy upper-body exercise for 24–48 hours.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid heavy weightlifting for 48 hours post-treatment</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Do not massage or apply pressure to the treated area</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Stay upright for 4 hours after treatment</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Apply ice if mild bruising or swelling occurs</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Gentle neck stretches may be resumed after 48 hours</li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Trap Botox vs Full Barbie Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Trap Botox vs <span className="text-[#C9A050] font-light">Full Barbie Botox</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">Standard Trap Botox — £350</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Targets upper trapezius fibres</li>
                        <li>• Moderate shoulder slimming</li>
                        <li>• Effective tension relief</li>
                        <li>• Ideal for first-time patients</li>
                        <li>• Subtle, natural reduction</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <p className="text-sm font-medium text-white/60 mb-3">Full Barbie Botox — £450</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Comprehensive trapezius coverage</li>
                        <li>• Maximum shoulder reduction</li>
                        <li>• Enhanced neck elongation</li>
                        <li>• Higher dose for greater effect</li>
                        <li>• Dramatic, visible transformation</li>
                      </ul>
                    </div>
                  </div>
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
                      "Precise dosing based on individual muscle assessment",
                      "Conservative approach — natural-looking results",
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
                <TrapBotoxSidebar />
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
                Ready for Slimmer <span className="text-[#C9A050]">Shoulders?</span>
              </h2>
              <p className="text-white/60 mb-8 font-light">
                A consultation with our doctors will assess your trapezius muscles and recommend the ideal treatment — standard trap botox or full Barbie Botox.
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
          <TrapBotoxSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Trap Botox London — Expert Shoulder Slimming & TrapTox at Harley Street</h2>
          <p>
            CosmeDocs offers doctor-led trap botox treatments for shoulder slimming and chronic tension relief at our Harley Street clinic. Trap botox, also known as TrapTox, Barbie Botox, or trapezius botox, uses precise botulinum toxin injections to reduce the trapezius muscle bulk. This creates slimmer shoulders, an elongated neckline, and relieves chronic shoulder and neck tension. Our GMC-registered doctors have performed over 1 million treatments since 2007.
          </p>
          <h3>What Is Trap Botox and How Does It Work?</h3>
          <p>
            Trap botox involves injecting botulinum toxin into the trapezius muscles — the large muscles extending from the neck across the shoulders and upper back. Botox in traps blocks nerve signals causing overactivity, leading to gradual muscle relaxation and reduction. Trap botox before and after results show dramatic shoulder slimming and neck elongation within 4–6 weeks. Trapezius botox is effective for both aesthetic enhancement and therapeutic pain relief.
          </p>
          <h3>Trap Botox vs Barbie Botox</h3>
          <p>
            Standard trap botox targets the upper trapezius fibres for moderate shoulder slimming from £350. Full Barbie Botox provides comprehensive shoulder reduction at £450, using higher doses across the entire trapezius for maximum effect. Both treatments include consultation, premium products, and aftercare. Your doctor will recommend the optimal approach during your assessment.
          </p>
          <h3>Trap Botox for Shoulder and Neck Tension</h3>
          <p>
            Trap botox is highly effective for chronic shoulder tension, tech neck, stress-related muscle tightness, and trapezius muscle pain. Botox in trap muscles relieves tension headaches and improves posture by relaxing chronically contracted fibres. Many patients combine trap botox with migraine botox for comprehensive upper-body tension management. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrapBotox;
