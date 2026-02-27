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
import ChemicalPeelSidebar from "@/components/skin-rejuvenation/ChemicalPeelSidebar";

const ChemicalPeel = () => {
  const seoData = generateSEOMetadata("Chemical Peel London | From £120 | Cosmedocs Harley Street", "Fade hyperpigmentation, acne scars & melasma with medical-grade chemical peels. TCA, glycolic & salicylic treatments from £120 on Harley Street.", "/treatments/chemical-peels/");

  const beforeAfterImages = [
    { src: "/lovable-uploads/3184a1ab-13a8-4518-9753-e9ad278346e6.png", alt: "Chemical peel before and after skin improvement" },
    { src: "/lovable-uploads/d947c958-7a72-47b1-8681-d32aae21773c.png", alt: "Chemical peel skin rejuvenation results" },
    { src: "/lovable-uploads/5f980404-9482-4c99-aa46-8001ce1495c8.png", alt: "Chemical peel eye area treatment results" },
    { src: "/lovable-uploads/5dfb6e21-7126-47d6-850b-d01c94e0988a.png", alt: "Chemical peel profile view results" },
  ];

  const treatmentSteps = [
    { step: "01", title: "Skin Assessment", desc: "Thorough consultation to determine the best peel type and strength for your skin concerns." },
    { step: "02", title: "Pre-Treatment", desc: "Gentle cleansing and preparation of the skin to ensure optimal peel penetration." },
    { step: "03", title: "Acid Application", desc: "Careful application of chemical solution to target areas, monitored for optimal timing." },
    { step: "04", title: "Neutralisation", desc: "Safe neutralisation of acids followed by soothing treatments to calm the skin." },
    { step: "05", title: "Aftercare Plan", desc: "Comprehensive aftercare instructions and products to maximise results and healing." },
  ];

  const faqs = [
    { question: "What types of chemical peels do you offer?", answer: "We offer light peels (glycolic, lactic acid), medium peels (TCA, Jessner), and deep peels. The type recommended depends on your skin concern, type, and desired results. All are assessed during consultation." },
    { question: "How much do chemical peels cost?", answer: "Light peels start from £120, medium peels from £200, and TCA peels from £250. We also offer course packages for better value when multiple sessions are recommended." },
    { question: "How many sessions do I need?", answer: "This depends on your skin concern. Light peels typically benefit from a course of 4–6 sessions spaced 2–4 weeks apart. Medium peels may need 2–3 sessions. Your practitioner will create a personalised plan." },
    { question: "Is there downtime?", answer: "Light peels have minimal downtime — slight redness for a few hours. Medium peels may cause peeling for 3–5 days. Deep peels require 7–14 days of recovery. Your practitioner will advise based on your lifestyle." },
    { question: "Are chemical peels safe for darker skin tones?", answer: "Yes, when performed by experienced practitioners. We carefully select peel types and concentrations appropriate for your skin tone to minimise the risk of post-inflammatory hyperpigmentation." },
    { question: "Can I wear makeup after a chemical peel?", answer: "Wait at least 24 hours for light peels. For medium to deep peels, avoid makeup for longer periods to prevent infection and allow proper healing. Specific guidance is provided at your appointment." },
    { question: "What skin concerns can chemical peels treat?", answer: "Chemical peels effectively treat acne, acne scarring, hyperpigmentation, melasma, sun damage, fine lines, uneven skin tone, enlarged pores, and dull complexion." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/chemical-peels/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/chemical-peels/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "Chemical Peel Treatment", "description": "Medical-grade chemical exfoliation to resurface skin, address pigmentation, and improve texture.", "url": "https://www.cosmedocs.com/treatments/chemical-peels/", "procedureType": "NoninvasiveProcedure" },
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }]} currentPage="Chemical Peels" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Chemical <span className="text-[#C9A050] font-light">Peels</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Medical-grade exfoliation to resurface skin, fade pigmentation, and reveal a brighter, smoother complexion — tailored to your skin type.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />20–45 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £120</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is a <span className="text-[#C9A050] font-light">Chemical Peel?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">A chemical peel uses a controlled acid solution to remove the outer layers of damaged skin, revealing smoother, brighter skin beneath. Different depths of peel address different concerns — from mild dullness to deep scarring and pigmentation.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>At CosmeDocs, we offer a range of medical-grade peels including glycolic acid, salicylic acid, lactic acid, TCA (trichloroacetic acid), and Jessner peels. Each is selected based on your specific skin type, concern, and desired outcome.</p>
                      <p>Chemical peels work by accelerating cell turnover and stimulating collagen production. The result is improved skin texture, reduced pigmentation, diminished fine lines, and a more even, radiant complexion.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Types of <span className="text-[#C9A050] font-light">Peels</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: "Light Peels", desc: "Glycolic and lactic acid peels for mild concerns. No downtime, ideal for maintenance and glow.", price: "From £120" },
                      { title: "Medium Peels", desc: "TCA and Jessner peels for pigmentation, acne scarring, and moderate skin damage.", price: "From £200" },
                      { title: "Deep Peels", desc: "Stronger TCA concentrations for significant sun damage, deep wrinkles, and advanced concerns.", price: "From £250" },
                    ].map(p => (
                      <div key={p.title} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-sm font-medium text-[#C9A050] mb-2">{p.title}</p>
                        <p className="text-white/45 text-xs font-light leading-relaxed mb-3">{p.desc}</p>
                        <p className="text-white/60 text-xs font-medium">{p.price}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">The <span className="text-[#C9A050] font-light">Process</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {treatmentSteps.map(s => (
                      <div key={s.step} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
                        <span className="text-[#C9A050] font-light text-lg min-w-[28px]">{s.step}</span>
                        <div>
                          <p className="text-sm font-medium text-white mb-1">{s.title}</p>
                          <p className="text-white/45 text-xs font-light leading-relaxed">{s.desc}</p>
                        </div>
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
                        <li>• Hyperpigmentation or melasma</li><li>• Acne or acne scarring</li><li>• Dull, uneven skin tone</li><li>• Sun-damaged skin</li><li>• Fine lines and rough texture</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Active eczema or psoriasis</li><li>• Recent isotretinoin use (within 6 months)</li><li>• Pregnancy or breastfeeding</li><li>• Active cold sores or skin infections</li><li>• Recent sun exposure or sunburn</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Before & <span className="text-[#C9A050] font-light">After</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 gap-3">
                    {beforeAfterImages.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900"><img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto block" /></div>
                    ))}
                  </div>
                  <p className="text-xs text-white/30 italic mt-3">Individual results vary. Images show real patients treated at our Harley Street clinic.</p>
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
            <aside className="hidden lg:block"><div className="sticky top-24"><ChemicalPeelSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Ready for Clearer <span className="text-[#C9A050]">Skin?</span></h2>
              <p className="text-white/60 mb-8 font-light">Book a skin assessment to find the right peel for your concerns.</p>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><ChemicalPeelSidebar /></section>

        <div className="sr-only">
          <h2>Chemical Peel London — Medical-Grade Skin Resurfacing at Harley Street</h2>
          <p>CosmeDocs offers medical-grade chemical peels from £120 at our Harley Street clinic. We provide glycolic, salicylic, TCA, and Jessner peels for acne, pigmentation, melasma, sun damage, and skin texture improvement. All treatments are performed by experienced practitioners. Our aesthetics is invisible art — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default ChemicalPeel;
