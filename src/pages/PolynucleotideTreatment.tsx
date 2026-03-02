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
import PolynucleotideSidebar from "@/components/skin-rejuvenation/PolynucleotideSidebar";

const PolynucleotideTreatment = () => {
  const seoData = generateSEOMetadata("Polynucleotide Treatment London | Cosmedocs Harley Street", "Doctor-led polynucleotide therapy for skin regeneration, under-eye rejuvenation & hair restoration. Advanced DNA repair treatment on Harley Street.", "/treatments/polynucleotides/");

  const beforeAfterImages = [
    { src: "/lovable-uploads/dd86f9a2-6530-4c94-8776-c6ede86882bb.png", alt: "Polynucleotide lip rejuvenation before and after" },
    { src: "/lovable-uploads/e328b8fe-f278-418a-b7d5-fa2992d038e0.png", alt: "Polynucleotide under-eye treatment before and after" },
    { src: "/lovable-uploads/7bef47b3-8c8f-42e2-b301-cff179a7c8bf.png", alt: "Polynucleotide eyebrow area treatment before and after" },
    { src: "/lovable-uploads/159173ee-5192-416f-af16-0b7d13fce18d.png", alt: "Polynucleotide scalp hair restoration before and after" },
  ];

  const faqs = [
    { question: "How much does polynucleotide treatment cost?", answer: "At CosmeDocs Harley Street, polynucleotide treatments start from £350 per session. A course of 3 sessions is recommended for optimal results. Cost depends on the treatment area and your specific goals." },
    { question: "How long do results last?", answer: "Results typically last 6–9 months and continue improving over time. Regular maintenance sessions can help sustain your natural transformation." },
    { question: "Is polynucleotide treatment safe?", answer: "Yes, polynucleotide treatment is very safe when performed by experienced practitioners. It uses biocompatible DNA fragments naturally found in the body, minimising the risk of allergic reactions." },
    { question: "What areas can be treated?", answer: "Polynucleotides can treat the under-eye area, face, neck, décolletage, hands, and scalp. They're particularly effective for dark circles, fine lines, skin texture improvement, and hair loss." },
    { question: "How many sessions are needed?", answer: "While improvements can be seen after one session, we recommend 3 sessions spaced 3 weeks apart for optimal and lasting results." },
    { question: "Can polynucleotides help with hair loss?", answer: "Yes, polynucleotide therapy is highly effective for hair restoration. It stimulates follicle regeneration, improves scalp health, and promotes natural hair growth." },
    { question: "How does it differ from Profhilo?", answer: "While both improve skin quality, polynucleotides work at a cellular DNA level to repair and regenerate tissue, whereas Profhilo uses hyaluronic acid for hydration and bio-remodelling. They can be combined for comprehensive results." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/polynucleotides/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/polynucleotides/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "Polynucleotide Treatment", "description": "Advanced DNA repair therapy using PDRN to stimulate cellular regeneration for skin rejuvenation and hair restoration.", "url": "https://www.cosmedocs.com/treatments/polynucleotides/", "procedureType": "NoninvasiveProcedure" },
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }]} currentPage="Polynucleotides" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Polynucleotide <span className="text-[#C9A050] font-light">Therapy</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Next-generation DNA repair therapy that regenerates skin at a cellular level — for lasting quality improvement from within.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />20–30 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Since 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £350</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Are <span className="text-[#C9A050] font-light">Polynucleotides?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">Polynucleotides (PDRN) are purified DNA fragments derived from salmon or trout DNA. When injected, they stimulate cellular repair, boost collagen synthesis, and enhance skin regeneration at a fundamental level.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>Unlike hyaluronic acid treatments that primarily hydrate, polynucleotides work by activating your skin's own repair mechanisms. They promote fibroblast activity, improve blood flow, and reduce inflammation — addressing the root causes of skin ageing rather than just its symptoms.</p>
                      <p>This makes polynucleotide therapy particularly effective for patients who want genuine skin regeneration — not just temporary hydration or volumisation. Results develop progressively and continue improving for months after treatment.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Treatment <span className="text-[#C9A050] font-light">Areas</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      { title: "Under Eyes & Dark Circles", desc: "Reduces hollowing, dark circles, and crepey skin around the delicate eye area." },
                      { title: "Face & Neck", desc: "Improves overall skin quality, texture, and firmness for natural rejuvenation." },
                      { title: "Scalp & Hair", desc: "Stimulates hair follicle regeneration and promotes natural hair growth." },
                      { title: "Hands & Décolletage", desc: "Addresses thinning skin, age spots, and loss of elasticity in exposed areas." },
                    ].map(area => (
                      <div key={area.title} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-sm font-medium text-[#C9A050] mb-2">{area.title}</p>
                        <p className="text-white/45 text-xs font-light leading-relaxed">{area.desc}</p>
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
                        <li>• Dark circles and under-eye hollowing</li><li>• Fine lines and skin laxity</li><li>• Dull, tired-looking skin</li><li>• Hair thinning or early hair loss</li><li>• Sun-damaged or ageing skin</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Known fish allergy (salmon-derived PDRN)</li><li>• Active skin infections</li><li>• Pregnancy or breastfeeding</li><li>• Autoimmune conditions</li>
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
                      <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900">
                        <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto block" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-white/30 italic mt-3">Individual results vary. Images show real patients treated at our Harley Street clinic.</p>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Why <span className="text-[#C9A050] font-light">CosmeDocs?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {["Doctor-led — all treatments by GMC-registered doctors", "Harley Street, London — established 2007", "Over 1 million treatments performed", "Advanced regenerative medicine expertise", "Personalised treatment plans", "Our aesthetics is invisible art"].map(item => (
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
            <aside className="hidden lg:block"><div className="sticky top-24"><PolynucleotideSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Considering <span className="text-[#C9A050]">Polynucleotides?</span></h2>
              <p className="text-white/60 mb-8 font-light">A consultation will help determine whether polynucleotide therapy is right for you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base w-full sm:w-auto">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
                </a>
                <Link to="/contact"><Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">Speak to a Doctor</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><PolynucleotideSidebar /></section>

        <div className="sr-only" aria-hidden="true">
          <h2>Polynucleotide Treatment London — Advanced DNA Repair Therapy at Harley Street</h2>
          <p>CosmeDocs offers doctor-led polynucleotide treatments for skin regeneration, under-eye rejuvenation, and hair restoration at our Harley Street clinic. Polynucleotide therapy uses purified DNA fragments (PDRN) to stimulate cellular repair, boost collagen synthesis, and enhance skin quality from within. Results develop progressively over 2-3 months as the biological repair cascade activates fibroblasts and promotes new collagen formation.</p>
          <h3>How Polynucleotides Work</h3>
          <p>Polynucleotides are purified DNA fragments derived from salmon or trout DNA. When injected into the skin, they act as biological scaffolding that stimulates fibroblast activity, promotes angiogenesis (new blood vessel formation), and activates the skin's natural repair mechanisms. Unlike traditional hyaluronic acid fillers that add volume, polynucleotides work at a cellular level to genuinely regenerate skin quality, improving texture, elasticity, hydration, and overall radiance from within.</p>
          <h3>Polynucleotide Treatment Areas and Applications</h3>
          <p>Polynucleotide therapy is particularly effective for under-eye rejuvenation (treating dark circles and crepey skin), facial skin quality improvement, neck and décolletage rejuvenation, hand rejuvenation, and scalp treatments for hair thinning. The treatment is ideal for patients seeking genuine skin quality improvement rather than volumising effects, making it a perfect complement to other aesthetic treatments.</p>
          <h3>Polynucleotide Treatment Cost and Course</h3>
          <p>Polynucleotide treatment at Cosmedocs is available from £450 per session. A course of 2-3 treatments spaced 3-4 weeks apart is typically recommended for optimal results, with maintenance sessions every 6-12 months. Our GMC-registered doctors assess your skin quality and concerns during consultation to recommend the most appropriate treatment protocol. Our aesthetics is invisible art — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default PolynucleotideTreatment;
