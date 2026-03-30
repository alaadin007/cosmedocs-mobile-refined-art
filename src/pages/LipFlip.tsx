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
import LipFlipSidebar from "@/components/lip-flip/LipFlipSidebar";
import lipIllustration from "@/assets/lip-profile-illustration.png";

const LipFlip = () => {
  const seoData = generateSEOMetadata(
    "Lip Flip Botox London | Harley Street Doctors",
    "Doctor-led lip flip botox for subtle upper lip enhancement without filler. Natural results using precise muscle relaxation at our Harley Street clinic.",
    "/treatments/lip-flip/"
  );

  const faqs = [
    {
      question: "What is a lip flip and how does it work?",
      answer: "A lip flip uses a small amount of botulinum toxin injected into the orbicularis oris muscle along the upper lip border. This relaxes the muscle, allowing the lip to gently roll outward and reveal more of the pink lip tissue — creating the appearance of a fuller upper lip without adding volume."
    },
    {
      question: "How long does a lip flip take to work?",
      answer: "Results begin appearing within 3–7 days, with full effects visible by day 10–14. The gradual onset ensures a natural-looking enhancement."
    },
    {
      question: "How long does a lip flip last?",
      answer: "Results typically last 2–3 months. Because the lips are a high-movement area, the effect wears off slightly faster than Botox in other facial areas. Regular maintenance appointments can sustain results."
    },
    {
      question: "What's the difference between a lip flip and lip filler?",
      answer: "A lip flip uses Botox to relax muscles and reveal more of your existing lip tissue — no volume is added. Lip fillers use hyaluronic acid to physically add volume and shape. They serve different purposes and can be combined for comprehensive enhancement."
    },
    {
      question: "Is a lip flip painful?",
      answer: "Most patients describe it as a very mild pinch. The procedure uses a fine needle with only a few injection points along the upper lip border. Topical anaesthetic can be applied if preferred."
    },
    {
      question: "Can a lip flip help with smoker's lines?",
      answer: "Yes. By relaxing the orbicularis oris muscle, a lip flip can soften the appearance of vertical lip lines (perioral lines) that form around the mouth. It's often combined with other treatments for optimal results."
    },
    {
      question: "How much does a lip flip cost?",
      answer: "A lip flip at CosmeDocs is £175. This includes consultation, treatment, and aftercare guidance. Pricing is available on our pricing page."
    },
    {
      question: "What is the aftercare for a lip flip?",
      answer: "Avoid straws, excessive lip movement, and lying flat for 4 hours post-treatment. Apply ice if needed for mild swelling. Avoid makeup on the treatment area for 24 hours. Full aftercare instructions are provided at your appointment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/lip-flip/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/lip-flip/" />
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
                "url": "https://www.cosmedocs.com/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                
              },
              {
                "@type": "MedicalProcedure",
                "name": "Lip Flip Botox Treatment",
                "description": "Non-invasive lip enhancement using botulinum toxin to relax upper lip muscles, revealing more lip tissue for a subtly fuller appearance without added volume.",
                "url": "https://www.cosmedocs.com/treatments/lip-flip/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Upper Lip",
                "followup": "Results visible in 3–7 days, lasting 2–3 months. Follow-up assessment available.",
                "howPerformed": "Botulinum toxin injected into the orbicularis oris muscle at strategic points along the upper lip border."
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
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Botox Treatments', path: '/treatments/botox/' }
              ]}
              currentPage="Lip Flip Botox"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-4 gap-8">
              {/* Mobile: Lip illustration above text */}
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
                  src={lipIllustration}
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
                    Lip Flip{" "}
                    <span className="text-[#C9A050] font-light">Botox</span>
                  </h1>
                  <p className="text-sm text-[#C9A050]/60 tracking-widest uppercase mb-4 font-light">Natural · Longer Lasting Results</p>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    Subtle upper lip enhancement using precise muscle relaxation — revealing more of your natural lip without adding volume.
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

              {/* Right: Lip illustration — desktop */}
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
                  src={lipIllustration}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(201,160,80,0.15)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
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

              {/* What Is a Lip Flip */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Is a <span className="text-[#C9A050] font-light">Lip Flip?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        A lip flip uses a small amount of botulinum toxin injected into the upper lip muscle to gently relax it.
                        This allows the lip to roll subtly outward, revealing more of the pink lip tissue and creating the
                        appearance of a fuller upper lip — without adding any volume.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Unlike <Link to="/treatments/dermal-fillers/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">lip fillers</Link>,
                        which physically augment the lip with hyaluronic acid, the lip flip works purely through muscle relaxation.
                        The orbicularis oris muscle — which circles the mouth and causes the lip to curl inward — is gently
                        relaxed at precise points along the upper lip border.
                      </p>
                      <p>
                        The result is a subtle, natural enhancement that accentuates the Cupid's bow and reveals more of
                        your existing lip shape. It's ideal for patients who want a noticeable but understated improvement,
                        or who wish to try lip enhancement before committing to filler.
                      </p>
                      <p>
                        Our doctors assess each patient's lip anatomy, muscle strength, and aesthetic goals to determine
                        the optimal placement and dosage — typically 4–6 units of botulinum toxin.
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
                    How the Procedure <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The procedure takes just 10–15 minutes. Using a fine needle, small doses of botulinum toxin are
                        placed at 2–4 strategic injection points along the upper lip border.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        During your consultation, your doctor will assess your lip anatomy and discuss your goals.
                        The injection sites are carefully selected to target the orbicularis oris muscle whilst
                        maintaining natural lip mobility and expression.
                      </p>
                      <p>
                        The treatment is well-tolerated by most patients, with only a mild pinch sensation. Topical
                        anaesthetic can be applied if preferred. You can return to normal activities immediately — there
                        is no downtime.
                      </p>
                      <p>
                        Results develop gradually over 3–7 days, with the full effect visible by day 10–14. This gradual
                        onset ensures a natural-looking enhancement rather than an abrupt change.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Lip Flip vs Lip Filler */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Lip Flip vs <span className="text-[#C9A050] font-light">Lip Filler</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        A lip flip relaxes muscle to reveal more lip tissue. Lip filler adds physical volume with
                        hyaluronic acid. They serve different purposes and can be combined for comprehensive enhancement.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-5 mt-2">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-sm font-medium text-[#C9A050] mb-3">Lip Flip (Botox)</p>
                        <ul className="space-y-2 text-white/45 text-xs font-light">
                          <li>• Relaxes muscles — no volume added</li>
                          <li>• 10-minute procedure</li>
                          <li>• Results last 2–3 months</li>
                          <li>• £175</li>
                          <li>• Subtle, natural enhancement</li>
                          <li>• Ideal first step for lip enhancement</li>
                        </ul>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-sm font-medium text-white/60 mb-3">Lip Filler (HA)</p>
                        <ul className="space-y-2 text-white/45 text-xs font-light">
                          <li>• Adds hyaluronic acid volume</li>
                          <li>• 30–45 minute procedure</li>
                          <li>• Results last 6–12 months</li>
                          <li>• From £300</li>
                          <li>• Subtle to dramatic options</li>
                          <li>• Shapes and defines lip contour</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                      <p className="text-white/40 text-xs leading-relaxed font-light">
                        <strong className="text-[#C9A050]/80">Combined approach:</strong> Many patients achieve optimal
                        results by combining both — the lip flip for upper lip muscle relaxation alongside filler for
                        volume and definition. Your doctor will advise the best approach during consultation.
                      </p>
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
                        <li>• Thin upper lip that curls inward when smiling</li>
                        <li>• Desire for subtle, natural enhancement</li>
                        <li>• First-time lip enhancement patients</li>
                        <li>• Smoker's lines around the mouth</li>
                        <li>• Wanting to "test" lip enhancement before filler</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Expecting dramatic volume increase</li>
                        <li>• Active cold sores or lip infections</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Allergy to botulinum toxin</li>
                        <li>• Neuromuscular disorders</li>
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
                        Results appear gradually over 3–7 days, with full effect by day 10–14. The enhancement lasts
                        2–3 months before a maintenance appointment is needed.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Because the lips are a high-movement area, Botox tends to metabolise faster here than in other
                        facial areas such as the forehead. Most patients schedule maintenance every 2–3 months for
                        consistent results.
                      </p>
                      <p>
                        Side effects are generally minimal and temporary. You may experience mild swelling, slight
                        numbness (resolving within hours), or brief difficulty with precise lip movements such as
                        drinking through a straw. Asymmetry is rare and easily corrected.
                      </p>
                      <p>
                        Your doctor will discuss realistic expectations during consultation, ensuring the treatment
                        aligns with your aesthetic goals.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Aftercare & <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        No downtime required. You can return to normal activities immediately after treatment.
                        A few simple precautions help ensure optimal results.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Avoid straws and excessive lip pursing for 24 hours
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Do not lie flat for 4 hours post-treatment
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Avoid makeup on the injection area for 24 hours
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Apply ice if mild swelling occurs
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Contact us if you experience any unusual symptoms
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
                      "Harley Street, London — established 2007",
                      "Over 1 million treatments performed",
                      "Conservative philosophy — safety and subtlety first",
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
                <LipFlipSidebar />
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
                Considering a <span className="text-[#C9A050]">Lip Flip?</span>
              </h2>
              <p className="text-white/60 mb-8 font-light">
                A consultation with our doctors will help you understand whether a lip flip, lip filler,
                or a combined approach is right for you.
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
          <LipFlipSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Lip Flip Botox London — Expert Upper Lip Enhancement at Harley Street</h2>
          <p>
            CosmeDocs offers doctor-led lip flip botox treatments for natural upper lip enhancement at our Harley
            Street clinic in London. The lip flip procedure uses precise botulinum toxin injections into the
            orbicularis oris muscle to relax the upper lip, revealing more pink lip tissue for a subtly fuller
            appearance without adding volume. Our GMC-registered doctors have been performing lip enhancement
            treatments since 2007.
          </p>
          <h3>What Is a Lip Flip and How Does It Work?</h3>
          <p>
            A lip flip uses botox injections in the upper lip to relax the orbicularis oris muscle. This muscle
            relaxation technique allows more of the pink lip tissue to show, creating the illusion of fuller lips
            without adding volume through dermal fillers. The botox lip flip procedure targets specific injection
            points along the top lip border. Lip flip results begin appearing within 3-7 days, with full effects
            visible by day 10-14. Results typically last 2-3 months.
          </p>
          <h3>Lip Flip vs Lip Filler Comparison</h3>
          <p>
            A lip flip uses botox on lips to relax muscles and reveal more of your existing lip, whilst lip fillers
            add hyaluronic acid volume. Lip flip and filler combinations can provide comprehensive results. The lip
            flip cost is £175 at CosmeDocs. Many patients achieve optimal results by combining both treatments for
            complete lip enhancement. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
          <h3>Lip Flip Aftercare and Recovery</h3>
          <p>
            Lip flip aftercare involves avoiding straws, excessive lip movement, and lying down for 4 hours
            post-treatment. Apply ice if needed for mild swelling. The lip flip procedure recovery is minimal with
            immediate return to activities. Avoid makeup on the treatment area for 24 hours and follow all aftercare
            instructions provided.
          </p>
          <h4>Lip Flip Injection Points and Sites</h4>
          <p>
            Lip flip injection points are strategically placed along the upper lip border, targeting the orbicularis
            oris muscle. The lip flip injection sites typically include 2-4 points across the top lip, where to
            inject botox for lip flip depends on your specific lip anatomy. Our expert doctors precisely determine
            the optimal injection sites for natural results. The typical dosage is 4-6 units of botulinum toxin.
          </p>
          <h4>Can Lip Flip Help with Smoker's Lines?</h4>
          <p>
            Yes, lip flip for smokers lines can reduce perioral wrinkles by relaxing the muscles causing lip curl
            and vertical lip lines. Botox for lip lines works together with the flip technique to smooth vertical
            lines whilst enhancing the upper lip appearance. This is particularly effective when combined with other
            perioral rejuvenation treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default LipFlip;
