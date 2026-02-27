import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import PRPSidebar from "@/components/skin-rejuvenation/PRPSidebar";

const PRPTreatment = () => {
  const seoData = generateSEOMetadata("PRP Treatment London | Vampire Facial | Cosmedocs Harley Street", "Doctor-led PRP treatments for skin rejuvenation, hair restoration, and natural healing. Vampire facial using your own growth factors on Harley Street.", "/treatments/prp-vampire-facial/");

  const faqs = [
    { question: "What is PRP treatment and how does it work?", answer: "PRP (Platelet-Rich Plasma) uses your own blood platelets to stimulate healing and regeneration. Blood is drawn, processed in a centrifuge to concentrate platelets, then injected into treatment areas to promote natural healing and tissue regeneration." },
    { question: "How safe is PRP treatment?", answer: "PRP has an excellent safety profile since it uses your own blood components, reducing the risk of allergic reactions. You may experience mild soreness and bruising at injection sites, which is normal." },
    { question: "How many sessions do I need?", answer: "Most patients require 3 sessions for optimal results. Facial treatments are spaced 4–6 weeks apart. Hair treatments typically need 3 sessions with 4–8 week intervals. Maintenance may be needed every 6–12 months." },
    { question: "Is PRP treatment painful?", answer: "PRP treatment is designed to be comfortable. We apply numbing agents to minimise discomfort. While you may feel slight discomfort in sensitive areas, it's generally well-tolerated." },
    { question: "How long do results last?", answer: "Results typically become visible within a few weeks and continue improving for 2–6 months. Effects can last around 18 months for skin treatments. Regular maintenance sessions help sustain results." },
    { question: "Can PRP help with hair loss?", answer: "Yes, PRP is highly effective for hair restoration. It stimulates dormant hair follicles, promotes new blood vessel growth, and encourages natural hair growth. Results are typically visible within 3 weeks with full potential reached in 3 months." },
  ];

  const treatmentTypes = [
    { title: "PRP Facial (Vampire Facial)", desc: "Uses your body's natural healing abilities to restore facial youthfulness, increase skin thickness, improve texture and reduce wrinkles." },
    { title: "PRP Hair Treatment", desc: "Stimulates hair follicles and promotes development of new blood vessels for natural hair growth. Effective for thinning hair and early hair loss." },
    { title: "PRP Intimate Rejuvenation", desc: "Non-surgical O-Shot procedure for women's intimate wellness, addressing sensitivity and comfort concerns." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/prp-vampire-facial/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/prp-vampire-facial/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "PRP Treatment (Vampire Facial)", "description": "Platelet-Rich Plasma therapy using your own blood for skin rejuvenation and hair restoration.", "url": "https://www.cosmedocs.com/treatments/prp-vampire-facial/", "procedureType": "NoninvasiveProcedure" },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
          ] })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }]} currentPage="PRP Treatment" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  PRP <span className="text-[#C9A050] font-light">Vampire Facial</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Harness your body's own growth factors for natural skin rejuvenation and hair restoration — using concentrated platelet-rich plasma.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />45–60 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Your Own Blood</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is <span className="text-[#C9A050] font-light">PRP?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">PRP (Platelet-Rich Plasma) therapy uses a concentrated preparation of your own blood platelets to stimulate natural healing and regeneration. Your blood is drawn, processed, and the growth-factor-rich plasma is re-injected into treatment areas.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>Platelets contain powerful growth factors that promote new cell growth, collagen production, and tissue repair. When concentrated and injected, they accelerate your body's natural healing response.</p>
                      <p>Research from the National Institutes of Health confirms PRP's effectiveness in tissue regeneration. This treatment delivers comprehensive restoration by accelerating regeneration across skin, hair follicles, and connective tissue.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Treatment <span className="text-[#C9A050] font-light">Types</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {treatmentTypes.map(t => (
                      <div key={t.title} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-sm font-medium text-[#C9A050] mb-2">{t.title}</p>
                        <p className="text-white/45 text-xs font-light leading-relaxed">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">How the Procedure <span className="text-[#C9A050] font-light">Works</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { step: "01", title: "Blood Draw", desc: "A small sample of blood is drawn from your arm, similar to a routine blood test." },
                      { step: "02", title: "Processing", desc: "Blood is placed in a centrifuge to separate and concentrate the platelet-rich plasma." },
                      { step: "03", title: "Treatment", desc: "Concentrated PRP is injected or applied to the treatment area using microneedling." },
                    ].map(s => (
                      <div key={s.step} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 text-center">
                        <span className="text-[#C9A050] font-light text-lg block mb-2">{s.step}</span>
                        <p className="text-sm font-medium text-white mb-1">{s.title}</p>
                        <p className="text-white/45 text-xs font-light">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Am I <span className="text-[#C9A050] font-light">Suitable?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white">May Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Fine lines and early signs of ageing</li><li>• Dull skin needing rejuvenation</li><li>• Hair thinning or early hair loss</li><li>• Acne scarring and skin imperfections</li><li>• Dark under-eye circles</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Blood disorders or clotting conditions</li><li>• Active skin infections</li><li>• Pregnancy or breastfeeding</li><li>• Anticoagulant medication</li><li>• Cancer or immunosuppression</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Why <span className="text-[#C9A050] font-light">CosmeDocs?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {["Doctor-led — all treatments by GMC-registered doctors", "Harley Street, London — established 2007", "Over 1 million treatments performed", "100% natural — uses your own blood", "Our aesthetics is invisible art"].map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light"><CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Frequently Asked <span className="text-[#C9A050] font-light">Questions</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`} className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-5">
                        <AccordionTrigger className="text-white/70 hover:text-[#C9A050] text-left text-sm font-light py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm font-light pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>
            <aside className="hidden lg:block"><div className="sticky top-24"><PRPSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Considering <span className="text-[#C9A050]">PRP?</span></h2>
              <p className="text-white/60 mb-8 font-light">A consultation will help determine whether PRP therapy is right for your goals.</p>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><PRPSidebar /></section>

        <div className="sr-only" aria-hidden="true">
          <h2>PRP Treatment London — Vampire Facial and Hair Restoration at Harley Street</h2>
          <p>CosmeDocs offers doctor-led PRP treatments for skin rejuvenation and hair restoration at our Harley Street clinic in London. PRP (platelet-rich plasma) therapy uses your own concentrated blood platelets to stimulate natural healing, collagen production, and tissue regeneration. This autologous treatment harnesses your body's own growth factors for safe, natural results with minimal risk of allergic reaction.</p>
          <h3>How PRP Treatment Works</h3>
          <p>PRP therapy begins with a simple blood draw, which is then processed in a centrifuge to separate and concentrate the platelet-rich plasma. This concentrated plasma, containing growth factors and cytokines, is then injected into the treatment area to stimulate cellular renewal. For facial rejuvenation (vampire facial), PRP may be combined with microneedling to enhance absorption and results. For hair restoration, PRP is injected directly into the scalp to nourish hair follicles and promote growth.</p>
          <h3>PRP Treatment Benefits and Results</h3>
          <p>PRP treatment benefits include improved skin texture and tone, reduced fine lines, enhanced collagen production, hair growth stimulation, and overall skin radiance. Results develop gradually over 2-4 weeks as the growth factors stimulate natural healing processes. A course of 3-4 treatments spaced 4-6 weeks apart is typically recommended for optimal outcomes. Our aesthetics is invisible art — bold, natural, always your way.</p>
          <h3>PRP Treatment Cost and Booking</h3>
          <p>PRP treatment at Cosmedocs Harley Street is available from £450 per session. Our GMC-registered doctors perform all PRP procedures, ensuring the highest standards of safety and efficacy. Book your consultation to discuss whether PRP therapy is suitable for your skin concerns or hair loss. Cosmedocs has been delivering exceptional aesthetic results since 2007 with over one million treatments performed.</p>
        </div>
      </div>
    </>
  );
};

export default PRPTreatment;
