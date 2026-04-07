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

const LacticAcidPeel = () => {
  const seoData = generateSEOMetadata(
    "Lactic Acid Peel London | Gentle AHA Peel From £100 | Cosmedocs Harley Street",
    "Gentle lactic acid peel for sensitive skin, mild pigmentation & hydration. The moisturising AHA that exfoliates without drying. Enhanced with azelaic acid & antioxidants. From £100.",
    "/treatments/chemical-peels/lactic-acid-peel/"
  );

  const faqs = [
    { question: "What makes lactic acid different from glycolic acid?", answer: "Lactic acid has a larger molecular weight than glycolic acid (90.08 vs 76.05 g/mol), which means it penetrates more slowly and superficially. This slower penetration makes it significantly gentler — ideal for sensitive, dry, or reactive skin types. Additionally, lactic acid is a natural component of the skin's own moisturising system (NMF), meaning it hydrates as it exfoliates." },
    { question: "Is lactic acid peel suitable for sensitive skin?", answer: "Yes — lactic acid is the AHA of choice for sensitive skin. Its larger molecular size reduces irritation risk, and its humectant properties help maintain skin hydration during the exfoliation process. At CosmeDocs, we further reduce sensitivity risk by combining lactic acid with azelaic acid (anti-inflammatory) and post-peel antioxidants." },
    { question: "Can lactic acid peels treat pigmentation?", answer: "Yes. Lactic acid inhibits tyrosinase — the enzyme responsible for melanin production — making it effective for mild-to-moderate hyperpigmentation and melasma. When combined with azelaic acid, kojic acid, and vitamin C in our protocols, the depigmenting effect is enhanced significantly." },
    { question: "How many sessions do I need?", answer: "We typically recommend 4–6 sessions spaced 2–3 weeks apart for optimal results. Lactic acid peels are cumulative — each session builds upon the last. Maintenance peels every 6–8 weeks help sustain the improvement." },
    { question: "What supporting ingredients do you use?", answer: "We enhance lactic acid peels with azelaic acid (anti-inflammatory, anti-pigmentation), mandelic acid (for dual-AHA exfoliation), retinol (pre-treatment cell turnover), hyaluronic acid (hydration boost), and antioxidants including glutathione and vitamin C for post-peel protection." },
    { question: "How much does a lactic acid peel cost?", answer: "Lactic acid peels start from £100 per session at our Harley Street clinic. Course packages are available for multiple sessions." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/chemical-peels/lactic-acid-peel/" data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/chemical-peels/lactic-acid-peel/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "Lactic Acid Peel", "alternateName": ["Gentle AHA Peel", "Milk Acid Peel", "Lactic Peel"], "description": "Gentle alpha hydroxy acid peel derived from milk that exfoliates whilst hydrating — ideal for sensitive skin, mild pigmentation, and dry complexions.", "url": "https://www.cosmedocs.com/treatments/chemical-peels/lactic-acid-peel/", "procedureType": "NoninvasiveProcedure" },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
              { "@type": "ListItem", "position": 2, "name": "Chemical Peels", "item": "https://www.cosmedocs.com/treatments/chemical-peels/" },
              { "@type": "ListItem", "position": 3, "name": "Lactic Acid Peel", "item": "https://www.cosmedocs.com/treatments/chemical-peels/lactic-acid-peel/" }
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }, { label: 'Chemical Peels', path: '/treatments/chemical-peels/' }]} currentPage="Lactic Acid Peel" />
            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Lactic Acid <span className="text-[#C9A050] font-light">Peel</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mb-3">
                  The gentlest AHA — exfoliates whilst hydrating. Ideal for sensitive skin, mild pigmentation, and first-time peel patients.
                </p>
                <p className="text-sm text-white/30 font-extralight">AHA (Alpha Hydroxy Acid) · Water-Soluble · Derived from Milk</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Skin Specialist-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />20–30 Min</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is a <span className="text-[#C9A050] font-light">Lactic Acid Peel?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="text-white/50 text-sm leading-relaxed font-light space-y-4">
                    <p>Lactic acid is an alpha hydroxy acid (AHA) naturally derived from milk — and it is also a component of your skin's own natural moisturising factor (NMF). This dual identity is what makes lactic acid uniquely gentle: it exfoliates the stratum corneum whilst simultaneously attracting and retaining moisture within the skin.</p>
                    <p>With a larger molecular weight than glycolic acid (90.08 g/mol vs 76.05 g/mol), lactic acid penetrates more slowly and superficially. This is an advantage for sensitive, dry, rosacea-prone, or reactive skin types — providing meaningful exfoliation without the aggressive penetration that can trigger irritation, redness, or post-inflammatory hyperpigmentation.</p>
                    <p>Lactic acid also inhibits tyrosinase, the key enzyme in melanin production, making it effective for mild-to-moderate pigmentation concerns. At CosmeDocs, we use lactic acid as both a standalone peel for sensitive patients and as a component of our multi-acid Peel to Reveal cocktail.</p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Supporting <span className="text-[#C9A050] font-light">Ingredients</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {[
                      { name: "Azelaic Acid", desc: "An anti-inflammatory dicarboxylic acid that reduces redness, inhibits melanin production, and targets rosacea symptoms. Ideal alongside lactic acid for patients with sensitive, pigmentation-prone skin." },
                      { name: "Mandelic Acid", desc: "A large-molecule AHA from almonds that provides gentle, even exfoliation. Combined with lactic acid, it creates a dual-AHA peel safe for Fitzpatrick IV–VI skin types." },
                      { name: "Hyaluronic Acid", desc: "Applied post-peel to amplify lactic acid's natural hydrating effect. Draws moisture into the skin, reducing tightness and accelerating barrier recovery." },
                      { name: "Retinol (Vitamin A)", desc: "Used in pre-peel protocols to gently accelerate cell turnover. At lower concentrations, it primes sensitive skin without over-stimulation." },
                      { name: "Antioxidants (Vitamin C, Glutathione, Kojic Acid)", desc: "Post-peel application to protect against UV-induced free radical damage, enhance brightening, and support the depigmenting action of lactic acid." },
                      { name: "Pyruvic Acid", desc: "A keto acid sometimes blended with lactic acid for patients needing slightly deeper exfoliation without the intensity of glycolic acid. Pyruvic acid converts to lactic acid on the skin, providing a controlled two-phase peel." },
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
                        <li>• Sensitive or reactive skin</li>
                        <li>• Dry, dehydrated complexion</li>
                        <li>• Mild hyperpigmentation</li>
                        <li>• First-time peel patients</li>
                        <li>• Rosacea-prone skin (at low concentrations)</li>
                        <li>• Uneven skin tone</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Milk protein allergy (rare but relevant)</li>
                        <li>• Active flaring eczema or dermatitis</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Recent isotretinoin use</li>
                        <li>• Sunburned or compromised skin barrier</li>
                        <li>• Active infections on treatment area</li>
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
                    { label: "Glycolic Acid Peel", path: "/treatments/chemical-peels/glycolic-acid-peel/" },
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
              <h2 className="text-3xl font-light mb-4 text-white">Gentle <span className="text-[#C9A050]">Renewal</span></h2>
              <p className="text-white/60 mb-8 font-light">Book a consultation for a lactic acid peel tailored to your sensitive skin. Our aesthetics is invisible art.</p>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><ChemicalPeelSidebar /></section>

        <section className="py-16 px-4 bg-black border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extralight text-white/30 mb-6">Lactic Acid Peel London — Clinical Guide</h2>
            <div className="text-white/20 text-xs leading-relaxed font-light space-y-3 columns-1 md:columns-2 gap-8">
              <p>Lactic acid (2-hydroxypropanoic acid, C₃H₆O₃) is a naturally occurring alpha hydroxy acid first isolated from sour milk by Swedish chemist Carl Wilhelm Scheele in 1780. It is also an endogenous component of the skin's natural moisturising factor (NMF), contributing to the stratum corneum's hydration and barrier function.</p>
              <p>The mechanism of action involves disruption of corneodesmosomes — the protein bridges between corneocytes — at the skin surface. Unlike glycolic acid, which penetrates rapidly and deeply due to its smaller molecular weight, lactic acid's larger molecular size (90.08 g/mol) creates a more gradual, superficial exfoliation with inherently lower irritation potential.</p>
              <p>Lactic acid simultaneously functions as a humectant, attracting water molecules from the dermis and the environment into the epidermal layers. This dual exfoliant-humectant action makes it particularly valuable for patients presenting with dry, dehydrated skin alongside textural concerns — a common clinical scenario in mature or hormonally-affected skin.</p>
              <p>At CosmeDocs, lactic acid peels are enhanced with azelaic acid for its anti-inflammatory and depigmenting synergy, mandelic acid for broad-spectrum gentle exfoliation, and post-peel antioxidant protocols (glutathione, ascorbic acid) for oxidative protection. The Peel to Reveal cocktail incorporates lactic acid alongside glycolic, salicylic, and TCA acids for patients requiring comprehensive multi-concern treatment. Bold, natural, always your way.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LacticAcidPeel;
