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
import ProfhiloSidebar from "@/components/skin-rejuvenation/ProfhiloSidebar";

import profhiloFaceBeforeAfter from "@/assets/profhilo-face-before-after.jpg";
import profhiloNeckBeforeAfter03 from "@/assets/profhilo-neck-before-after-03.jpg";
import profhiloCheekBeforeAfter from "@/assets/profhilo-cheek-before-after.jpg";
import profhiloArmBeforeAfter from "@/assets/profhilo-arm-before-after.jpg";
import profhiloNeckBeforeAfter2 from "@/assets/profhilo-neck-before-after-2.jpg";
import profhiloNeckBeforeAfter02 from "@/assets/profhilo-neck-before-after-02.jpg";
import profhiloInjectionPointsFace from "@/assets/profhilo-injection-points-face.jpg";

const ProfhiloTreatment = () => {
  const seoData = generateSEOMetadata(
    "Profhilo Treatment London | £350 | Cosmedocs Harley Street",
    "Doctor-led Profhilo bio-remodelling from £350. Stimulates collagen and elastin for natural skin rejuvenation. Harley Street clinic since 2007.",
    "/treatments/profhilo/"
  );

  const faqs = [
    { question: "What is Profhilo treatment?", answer: "Profhilo is an advanced skin bio-remodelling therapy that replenishes hyaluronic acid levels in your skin. It stimulates collagen and elastin production, improving overall skin tone and quality over multiple sessions." },
    { question: "How much does Profhilo cost in London?", answer: "At CosmeDocs Harley Street, Profhilo treatment starts from £350 for the first session. Subsequent sessions are £300 and are usually scheduled 4–6 weeks apart for optimal results." },
    { question: "How does Profhilo work?", answer: "Profhilo works in two stages: first hydrating and nourishing your skin, then stimulating the synthesis of new collagen and elastin. The high concentration of hyaluronic acid spreads naturally under the skin to support existing HA layers." },
    { question: "How many sessions do I need?", answer: "Usually, experts recommend at least two treatment sessions performed a month apart. The exact number depends on your age, cosmetic concerns, and desired skin goals." },
    { question: "Are there any side effects?", answer: "Profhilo is very safe with minimal side effects. You may experience slight redness, bruising, and swelling at injection sites, which typically resolve within 1–2 days." },
    { question: "Does Profhilo hurt?", answer: "Like any injectable treatment, you may feel a slight pin prick. We use topical numbing cream to minimise discomfort, and most patients report minimal pain." },
    { question: "How long does Profhilo last?", answer: "The treatment effects may last up to 6–12 months, depending on the patient's age. Results gradually develop as the hyaluronic acid stimulates natural collagen production." },
    { question: "What's the difference between Profhilo and dermal fillers?", answer: "While both contain hyaluronic acid, Profhilo uses non-crosslinked HA for bio-remodelling and hydration, whereas dermal fillers use cross-linked HA to volumise and fill specific areas." },
  ];

  const beforeAfterImages = [
    { src: profhiloFaceBeforeAfter, alt: "Profhilo face treatment before and after results" },
    { src: profhiloNeckBeforeAfter03, alt: "Profhilo neck treatment before and after" },
    { src: profhiloCheekBeforeAfter, alt: "Profhilo cheek treatment before and after" },
    { src: profhiloArmBeforeAfter, alt: "Profhilo arm treatment before and after" },
    { src: profhiloNeckBeforeAfter2, alt: "Profhilo neck and lower face treatment" },
    { src: profhiloNeckBeforeAfter02, alt: "Profhilo neck treatment enhanced skin texture" },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/profhilo/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/profhilo/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" }, "medicalSpecialty": "Aesthetic Medicine" },
              { "@type": "MedicalProcedure", "name": "Profhilo Bio-Remodelling Treatment", "description": "Advanced bio-remodelling treatment using high-concentration hyaluronic acid to stimulate natural collagen and elastin production.", "url": "https://www.cosmedocs.com/treatments/profhilo/", "procedureType": "NoninvasiveProcedure", "bodyLocation": "Face, Neck, Hands" },
              { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }]} currentPage="Profhilo" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Profhilo <span className="text-[#C9A050] font-light">Bio-Remodelling</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Advanced injectable skincare that hydrates from within — stimulating your skin's own collagen and elastin for natural, lasting rejuvenation.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Since 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £350</span>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* Two-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">
              {/* What Is Profhilo */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is <span className="text-[#C9A050] font-light">Profhilo?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Profhilo is a revolutionary injectable skin remodelling treatment containing one of the highest concentrations of hyaluronic acid available — 64mg per session. Unlike <Link to="/treatments/dermal-fillers/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">dermal fillers</Link>, it works beneath the skin's surface to hydrate, lift, and tighten without changing facial contours.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>The treatment is particularly effective for addressing skin laxity, fine lines, crepiness, and dullness on the face, neck, décolletage, hands, arms, and knees.</p>
                      <p>Unlike other skin boosters requiring multiple injection points, Profhilo uses the innovative BAP (Bio Aesthetic Points) technique with just 5 injection points on each side of the face, minimising discomfort whilst ensuring optimal distribution.</p>
                      <p>Clinical studies have demonstrated significant efficacy for improving skin laxity and roughness, making it an evidence-based choice for natural skin rejuvenation.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">How Profhilo <span className="text-[#C9A050] font-light">Works</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Profhilo works in two stages: first deeply hydrating and nourishing your skin, then stimulating the synthesis of new collagen and elastin for lasting structural improvement.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                          <p className="text-sm font-medium text-[#C9A050] mb-3">Stage 1: Hydration</p>
                          <p className="text-white/45 text-xs font-light">High-concentration HA deeply hydrates and nourishes skin layers, spreading evenly beneath the surface for intense moisture retention.</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                          <p className="text-sm font-medium text-[#C9A050] mb-3">Stage 2: Remodelling</p>
                          <p className="text-white/45 text-xs font-light">Stimulates synthesis of four types of collagen (I, III, IV, VII) and elastin fibres for long-term firmness and natural rejuvenation over 4–6 weeks.</p>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Injection Points */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">BAP <span className="text-[#C9A050] font-light">Technique</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-4">
                    <img src={profhiloInjectionPointsFace} alt="Profhilo BAP injection points on face" loading="lazy" className="w-full h-auto block" />
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    The Bio Aesthetic Points technique uses just 5 strategic injection points on each side of the face, ensuring optimal distribution with minimal discomfort. This precision approach is what makes Profhilo unique.
                  </p>
                </motion.div>
              </section>

              {/* Suitability */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Am I <span className="text-[#C9A050] font-light">Suitable?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white">May Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Dull, dehydrated skin lacking radiance</li>
                        <li>• Fine lines and mild skin laxity</li>
                        <li>• Crepey neck or décolletage</li>
                        <li>• Preventative care from age 25+</li>
                        <li>• Wanting improved skin quality without volume</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Expecting volumising or filling effects</li>
                        <li>• Active skin infections</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Known allergy to hyaluronic acid</li>
                        <li>• Autoimmune conditions (case-by-case)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Before & After */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Before & <span className="text-[#C9A050] font-light">After</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {beforeAfterImages.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900">
                        <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto block" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-white/30 italic mt-3">Individual results vary. Results shown after 2 sessions spaced 4 weeks apart.</p>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Aftercare & <span className="text-[#C9A050] font-light">Recovery</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={<p className="text-white/45 text-sm leading-relaxed font-light">Minimal downtime required. Most patients return to normal activities immediately. Small bumps at injection sites resolve within 24–48 hours.</p>}
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      {["Avoid touching the treated area for 6 hours", "No makeup for 24 hours post-treatment", "Avoid intense exercise for 24 hours", "Stay hydrated to support HA absorption", "Avoid extreme heat (saunas, sunbeds) for 48 hours"].map(item => (
                        <li key={item} className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />{item}</li>
                      ))}
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Why <span className="text-[#C9A050] font-light">CosmeDocs?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {["Doctor-led — all treatments by GMC-registered doctors", "Harley Street, London — established 2007", "Over 1 million treatments performed", "BAP technique specialists for optimal results", "Personalised treatment plans for every patient", "Our aesthetics is invisible art"].map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light"><CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Frequently Asked <span className="text-[#C9A050] font-light">Questions</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-5">
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
              <div className="sticky top-24"><ProfhiloSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Considering <span className="text-[#C9A050]">Profhilo?</span></h2>
              <p className="text-white/60 mb-8 font-light">A consultation will help determine whether Profhilo is the right approach for your skin.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all w-full sm:w-auto">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
                </a>
                <Link to="/contact"><Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">Speak to a Doctor</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-black"><ProfhiloSidebar /></section>

        {/* Hidden SEO */}
        <div className="sr-only">
          <h2>Profhilo Treatment London — Expert Bio-Remodelling at Harley Street</h2>
          <p>CosmeDocs offers doctor-led Profhilo bio-remodelling treatments from £350 at our Harley Street clinic in London. Profhilo uses 64mg of high-concentration hyaluronic acid to stimulate collagen and elastin production for natural skin rejuvenation. The BAP technique uses 5 injection points on each side of the face for optimal distribution. Results develop progressively over 4–6 weeks, lasting 6–12 months. Suitable for face, neck, décolletage, hands, and arms. Our aesthetics is invisible art — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default ProfhiloTreatment;
