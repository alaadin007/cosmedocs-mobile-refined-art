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
import HydraFacialSidebar from "@/components/skin-rejuvenation/HydraFacialSidebar";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";

const HydraFacial = () => {
  const seoData = generateSEOMetadata("HydraFacial London | Cosmedocs Harley Street", "Deep cleanse, exfoliate & hydrate with HydraFacial. Vortex technology for instantly glowing skin. Doctor-led treatments on Harley Street.", "/treatments/hydrafacial/");

  const beforeAfterImages = [
    { src: "/lovable-uploads/38a0f044-da28-413f-afa4-d9f7955797f5.png", alt: "HydraFacial before and after skin texture improvement" },
    { src: "/lovable-uploads/5a0b4122-4a4e-4dfd-90aa-7af725983356.png", alt: "HydraFacial pigmentation treatment before and after" },
    { src: "/lovable-uploads/9f5e369e-f3ac-4643-9470-bb1642025063.png", alt: "HydraFacial skin hydration before and after" },
    { src: "/lovable-uploads/59aa52ad-4a4d-417e-8d44-3d9252fd6180.png", alt: "HydraFacial complexion enhancement before and after" },
  ];

  const treatmentSteps = [
    { step: "01", title: "Detoxification", desc: "Gentle lymphatic drainage to remove toxins and reduce puffiness for firmer, more toned skin." },
    { step: "02", title: "Deep Cleanse", desc: "Vortex cleansing and exfoliation removes dead skin cells while AHAs and BHAs unclog pores." },
    { step: "03", title: "Extract + Hydrate", desc: "Powerful blend of salicylic and glycolic acid removes impurities while boosting collagen production." },
    { step: "04", title: "Boost + Infuse", desc: "Vortex-Fusion technology delivers antioxidants, peptides, and hyaluronic acid deep into skin." },
    { step: "05", title: "Restore + Rejuvenate", desc: "LED light therapy fights bacteria and boosts collagen for a luminous, flawless glow." },
  ];

  const faqs = [
    { question: "What is a HydraFacial?", answer: "HydraFacial is a multi-step facial treatment that uses patented Vortex-Fusion technology to cleanse, extract, and hydrate skin simultaneously. It combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one treatment." },
    { question: "How long does a HydraFacial take?", answer: "A standard HydraFacial takes 30–45 minutes. Our Platinum HydraFacial, which includes additional boosters and LED therapy, takes approximately 60 minutes." },
    { question: "Is there any downtime?", answer: "No downtime at all. You can apply makeup and return to normal activities immediately. Many patients have a HydraFacial during their lunch break." },
    { question: "How often should I have a HydraFacial?", answer: "We recommend monthly HydraFacials for optimal skin maintenance. However, frequency can be adjusted based on your skin concerns and goals." },
    { question: "Is HydraFacial suitable for all skin types?", answer: "Yes, HydraFacial is suitable for all skin types, including sensitive skin. The treatment is customisable, so serums and intensity can be adjusted to your specific needs." },
    { question: "What's the difference between Signature and Platinum?", answer: "The Signature HydraFacial includes the core 5-step process. The Platinum adds targeted boosters for specific concerns (e.g., brightening, anti-ageing), plus LED light therapy for enhanced results." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/hydrafacial/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/hydrafacial/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "HydraFacial Treatment", "description": "Multi-step facial using Vortex-Fusion technology for deep cleansing, exfoliation, and hydration.", "url": "https://www.cosmedocs.com/treatments/hydrafacial/", "procedureType": "NoninvasiveProcedure" },
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }]} currentPage="HydraFacial" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Hydra<span className="text-[#C9A050] font-light">Facial</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Multi-step deep cleansing, exfoliation, and hydration — for immediately visible radiance with zero downtime.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />No Downtime</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30–45 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />All Skin Types</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is a <span className="text-[#C9A050] font-light">HydraFacial?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">HydraFacial is a medical-grade facial treatment that uses patented Vortex-Fusion technology to deeply cleanse, extract impurities, and infuse skin with intensive serums — all in a single session with zero downtime.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>Unlike traditional facials, the HydraFacial uses a unique spiral design tip that creates a vortex effect, dislodging and removing impurities whilst simultaneously delivering hydrating serums deep into the skin.</p>
                      <p>The treatment is fully customisable. Boosters can be added to target specific concerns including fine lines, hyperpigmentation, oily skin, or dehydration — making it suitable for virtually every skin type and concern.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">The 5-Step <span className="text-[#C9A050] font-light">Process</span></h2>
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
                      <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white">Ideal For</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Dull, congested skin</li><li>• Enlarged or blocked pores</li><li>• Uneven skin tone or pigmentation</li><li>• Fine lines and dehydration</li><li>• Pre-event glow</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">Caution</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Active rosacea flare-ups</li><li>• Sunburn or compromised skin barrier</li><li>• Active cold sores</li><li>• Recent chemical peel (within 2 weeks)</li>
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
            <aside className="hidden lg:block"><div className="sticky top-24"><HydraFacialSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Ready for Your <span className="text-[#C9A050]">Glow?</span></h2>
              <p className="text-white/60 mb-8 font-light">Book a HydraFacial and experience the difference immediately.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base w-full sm:w-auto">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><HydraFacialSidebar /></section>

        <div className="sr-only" aria-hidden="true">
          <h2>HydraFacial London — Expert Vortex Facial Treatment at Harley Street</h2>
          <p>CosmeDocs offers HydraFacial treatments at our Harley Street clinic in London. HydraFacial uses patented Vortex-Fusion technology for deep cleansing, exfoliation, extraction, and hydration in one multi-step treatment. Suitable for all skin types including sensitive skin, with zero downtime and immediately visible results. Our aesthetics is invisible art — bold, natural, always your way.</p>
          <h3>HydraFacial Treatment Steps</h3>
          <p>The HydraFacial treatment involves six key steps: deep cleansing to remove surface impurities, gentle acid peel for exfoliation, painless automated extractions using vortex suction technology, hydration infusion with hyaluronic acid serums, antioxidant protection application, and LED light therapy for enhanced results. Each step builds upon the previous one to deliver comprehensive skin improvement in a single 30-45 minute session.</p>
          <h3>HydraFacial Benefits and Skin Concerns</h3>
          <p>HydraFacial effectively addresses multiple skin concerns including dullness, uneven texture, congested pores, fine lines, dehydration, hyperpigmentation, and early signs of ageing. The treatment delivers instant radiance and glow, making it ideal before special events or as part of a regular skincare maintenance programme. Clinical studies demonstrate measurable improvements in skin hydration, pore size, and overall skin quality after treatment.</p>
          <h3>HydraFacial Pricing and Booking</h3>
          <p>HydraFacial at Cosmedocs is available from £175 per session. We offer signature, deluxe, and platinum packages to suit different skin needs and budgets. Our experienced practitioners customise each HydraFacial with targeted boosters and serums selected for your specific skin concerns. Book your HydraFacial consultation at our Harley Street clinic — Cosmedocs has been delivering exceptional skin treatments since 2007.</p>
        </div>
      </div>

      {/* Skin Foundation CTA */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <SkinFoundationCTA variant="general" />
        </div>
      </section>
    </>
  );
};

export default HydraFacial;
