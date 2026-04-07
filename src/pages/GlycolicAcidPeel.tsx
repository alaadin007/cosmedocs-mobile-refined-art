import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ChemicalPeelSidebar from "@/components/skin-rejuvenation/ChemicalPeelSidebar";

const GlycolicAcidPeel = () => {
  const seoData = generateSEOMetadata(
    "Glycolic Acid Peel London | AHA Peel From £100 | Cosmedocs Harley Street",
    "Medical-grade glycolic acid peel for fine lines, dullness, sun damage & uneven texture. The smallest AHA molecule for maximum penetration. Enhanced with retinol & antioxidants. From £100.",
    "/treatments/chemical-peels/glycolic-acid-peel/"
  );

  const faqs = [
    { question: "What makes glycolic acid different from other AHAs?", answer: "Glycolic acid has the smallest molecular weight of all alpha hydroxy acids (76.05 g/mol), which means it penetrates the skin more deeply and rapidly than lactic, mandelic, or citric acid. This superior penetration makes it the most effective AHA for stimulating collagen synthesis, improving skin texture, and treating photodamage." },
    { question: "What concentration of glycolic acid do you use?", answer: "At CosmeDocs, we use pharmaceutical-grade glycolic acid at concentrations between 20–70%, depending on your skin type, concern severity, and treatment history. First-time patients typically start at lower concentrations, progressing upward in subsequent sessions as the skin acclimatises." },
    { question: "How many glycolic acid peel sessions do I need?", answer: "For optimal results, we recommend 4–6 sessions spaced 2–4 weeks apart. Maintenance peels every 6–8 weeks can sustain the improvement. Your practitioner will design a personalised treatment plan during consultation." },
    { question: "Is glycolic acid safe for darker skin tones?", answer: "Yes, when used at appropriate concentrations by experienced practitioners. For Fitzpatrick IV–VI skin types, we often combine glycolic acid with mandelic acid (which has a larger molecule and slower penetration) to reduce the risk of post-inflammatory hyperpigmentation whilst maintaining efficacy." },
    { question: "What supporting ingredients do you use with glycolic acid peels?", answer: "We enhance glycolic acid peels with retinol (pre-treatment to accelerate cell turnover), azelaic acid (anti-inflammatory and brightening), mandelic acid (for darker skin types), vitamin C (antioxidant protection), glutathione (free radical neutralisation), and kojic acid (pigment inhibition)." },
    { question: "How much does a glycolic acid peel cost?", answer: "Glycolic acid peels start from £100 per session at our Harley Street clinic. Course packages of 4–6 sessions are available at reduced rates." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/chemical-peels/glycolic-acid-peel/" data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/chemical-peels/glycolic-acid-peel/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "Glycolic Acid Peel", "alternateName": ["AHA Peel", "Alpha Hydroxy Acid Peel", "Glycolic Peel"], "description": "Medical-grade alpha hydroxy acid peel using glycolic acid — the smallest AHA molecule — to resurface skin, reduce fine lines, and treat sun damage.", "url": "https://www.cosmedocs.com/treatments/chemical-peels/glycolic-acid-peel/", "procedureType": "NoninvasiveProcedure" },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
              { "@type": "ListItem", "position": 2, "name": "Chemical Peels", "item": "https://www.cosmedocs.com/treatments/chemical-peels/" },
              { "@type": "ListItem", "position": 3, "name": "Glycolic Acid Peel", "item": "https://www.cosmedocs.com/treatments/chemical-peels/glycolic-acid-peel/" }
            ]}
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }, { label: 'Chemical Peels', path: '/treatments/chemical-peels/' }]} currentPage="Glycolic Acid Peel" />
            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Glycolic Acid <span className="text-[#C9A050] font-light">Peel</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mb-3">
                  The gold standard AHA with the smallest molecular size — delivering maximum penetration for brighter, smoother, more youthful skin.
                </p>
                <p className="text-sm text-white/30 font-extralight">AHA (Alpha Hydroxy Acid) · Water-Soluble · Derived from Sugar Cane</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />20–40 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £100</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is a <span className="text-[#C9A050] font-light">Glycolic Acid Peel?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="text-white/50 text-sm leading-relaxed font-light space-y-4">
                    <p>Glycolic acid is an alpha hydroxy acid (AHA) derived from sugar cane. It has the <strong className="text-white/70">smallest molecular weight of all AHAs</strong> (76.05 g/mol), which allows it to penetrate the stratum corneum more effectively than any other water-soluble acid. This superior penetration is why glycolic acid is widely regarded as the gold standard AHA in clinical dermatology.</p>
                    <p>The peel works by disrupting the ionic bonds between corneocytes (dead skin cells) in the outer epidermis, accelerating desquamation and revealing fresher, healthier skin beneath. At higher concentrations, glycolic acid penetrates into the papillary dermis, stimulating fibroblast activity and new collagen and glycosaminoglycan synthesis — addressing fine lines, photo-ageing, and textural irregularities at a structural level.</p>
                    <p>At CosmeDocs Harley Street, we use pharmaceutical-grade glycolic acid at concentrations from 20% to 70%, combined with supporting active ingredients to maximise efficacy and minimise irritation.</p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Supporting <span className="text-[#C9A050] font-light">Ingredients</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {[
                      { name: "Retinol (Vitamin A)", desc: "Used in pre-treatment protocols to thin the stratum corneum and accelerate cell turnover, allowing glycolic acid to penetrate more uniformly. Post-peel, retinol supports ongoing collagen synthesis." },
                      { name: "Mandelic Acid", desc: "A larger-molecule AHA blended with glycolic acid for patients with darker skin tones. The combination provides effective exfoliation with a reduced risk of post-inflammatory hyperpigmentation." },
                      { name: "Azelaic Acid", desc: "Added for its anti-inflammatory and tyrosinase-inhibiting properties. Particularly effective when treating melasma or resistant hyperpigmentation alongside glycolic resurfacing." },
                      { name: "Vitamin C (L-Ascorbic Acid)", desc: "A potent antioxidant applied post-peel to neutralise free radicals, support collagen cross-linking, and brighten the complexion. Enhances the anti-ageing benefits of glycolic acid." },
                      { name: "Kojic Acid & Glutathione", desc: "Melanin-inhibiting agents that complement glycolic acid's exfoliating action to address stubborn pigmentation, age spots, and uneven skin tone." },
                      { name: "Pyruvic Acid", desc: "A keto acid adjunct that provides deeper penetration and sebum regulation. Used in combination peels for patients with both texture concerns and mild oiliness." },
                    ].map(ing => (
                      <div key={ing.name} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-1">{ing.name}</p>
                        <p className="text-white/45 text-xs font-light leading-relaxed">{ing.desc}</p>
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
                        <li>• Fine lines and early wrinkles</li>
                        <li>• Dull, lacklustre complexion</li>
                        <li>• Sun damage and photo-ageing</li>
                        <li>• Uneven skin texture and tone</li>
                        <li>• Hyperpigmentation and age spots</li>
                        <li>• Mild acne scarring</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Very sensitive or reactive skin</li>
                        <li>• Active eczema or psoriasis</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Recent isotretinoin use (within 6 months)</li>
                        <li>• Sunburned or recently lasered skin</li>
                        <li>• Active herpes simplex (cold sores)</li>
                      </ul>
                    </div>
                  </div>
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

              <section>
                <h3 className="text-lg font-light text-white/60 mb-4">Other Peel Types</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Chemical Peels Hub", path: "/treatments/chemical-peels/" },
                    { label: "Salicylic Acid Peel", path: "/treatments/chemical-peels/salicylic-acid-peel/" },
                    { label: "Lactic Acid Peel", path: "/treatments/chemical-peels/lactic-acid-peel/" },
                    { label: "TCA Peel", path: "/treatments/chemical-peels/tca-peel/" },
                    { label: "Peel to Reveal", path: "/peel-to-reveal/" },
                  ].map(link => (
                    <Link key={link.path} to={link.path} className="text-xs text-white/30 hover:text-[#C9A050] border border-white/[0.08] rounded-full px-3 py-1.5 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            </div>
            <aside className="hidden lg:block"><div className="sticky top-24"><ChemicalPeelSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Brighter Skin <span className="text-[#C9A050]">Awaits</span></h2>
              <p className="text-white/60 mb-8 font-light">Book a glycolic acid peel consultation at Harley Street. Our aesthetics is invisible art.</p>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><ChemicalPeelSidebar /></section>

        <section className="py-16 px-4 bg-black border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extralight text-white/30 mb-6">Glycolic Acid Peel London — Clinical Guide</h2>
            <div className="text-white/20 text-xs leading-relaxed font-light space-y-3 columns-1 md:columns-2 gap-8">
              <p>Glycolic acid (hydroxyacetic acid, C₂H₄O₃) is the simplest alpha hydroxy acid. Derived from sugar cane, it has been used in clinical dermatology for over three decades, with extensive peer-reviewed evidence supporting its efficacy in treating photo-ageing, melasma, acne, and textural irregularities.</p>
              <p>The mechanism of action involves disruption of the calcium-dependent ionic bonds between corneocytes in the stratum corneum, leading to accelerated desquamation. At concentrations above 50%, glycolic acid penetrates beyond the epidermis into the papillary dermis, where it stimulates fibroblast proliferation and increases production of collagen types I and III, hyaluronic acid, and elastin fibres.</p>
              <p>CosmeDocs enhances glycolic acid peels with a multi-active protocol. Pre-treatment retinol priming thins the stratum corneum for uniform acid penetration. Mandelic acid is co-formulated for Fitzpatrick IV–VI patients to reduce melanocyte stimulation risk. Post-peel antioxidant application — vitamin C, glutathione, and kojic acid — protects newly exposed skin from UV-induced free radical damage and accelerates the brightening response.</p>
              <p>Our Peel to Reveal cocktail incorporates glycolic acid alongside lactic, salicylic, and TCA acids with azelaic acid, pyruvic acid, and botanical extracts, creating a comprehensive single-session resurfacing treatment customised by the clinician. Bold, natural, always your way.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GlycolicAcidPeel;
