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

const SalicylicAcidPeel = () => {
  const seoData = generateSEOMetadata(
    "Salicylic Acid Peel London | BHA Peel From £100 | Cosmedocs Harley Street",
    "Fat-soluble salicylic acid peel for acne, oily skin & blackheads. The only BHA peel that penetrates deep into pores. Enhanced with mandelic acid & azelaic acid. From £100.",
    "/treatments/chemical-peels/salicylic-acid-peel/"
  );

  const faqs = [
    { question: "Why is salicylic acid fat-soluble and why does that matter?", answer: "Salicylic acid is the only beta hydroxy acid (BHA) used in chemical peels. Unlike AHAs (glycolic, lactic) which are water-soluble, salicylic acid is lipophilic — meaning it dissolves in fat and oil. This unique property allows it to penetrate through the sebum that lines your pores, reaching deep into the follicular unit to dissolve plugs, kill bacteria, and reduce inflammation from within. AHAs can only work on the skin surface." },
    { question: "What skin types is a salicylic acid peel best for?", answer: "Salicylic acid peels are ideal for oily, acne-prone, and congested skin. They are particularly effective for patients with blackheads, whiteheads, inflammatory acne, and enlarged pores. Because of its anti-inflammatory properties, it is also suitable for rosacea-prone skin when used at lower concentrations." },
    { question: "How much does a salicylic acid peel cost?", answer: "Salicylic acid peels at CosmeDocs start from £100 per session. We recommend a course of 4–6 sessions spaced 2–3 weeks apart for optimal results. Course packages are available for better value." },
    { question: "How does salicylic acid compare to glycolic acid?", answer: "Glycolic acid (AHA) is water-soluble and works on the skin surface — excellent for texture, fine lines, and dullness. Salicylic acid (BHA) is fat-soluble and works within the pore — making it the superior choice for acne, oiliness, and congestion. At CosmeDocs, we often combine both in our Peel to Reveal cocktail for comprehensive results." },
    { question: "What supporting ingredients do you use with salicylic acid peels?", answer: "We enhance salicylic acid peels with mandelic acid (gentle exfoliation for darker skin tones), azelaic acid (anti-inflammatory, targets post-acne marks), tea tree oil (natural antibacterial), and antioxidants including vitamin C and glutathione to protect and brighten newly revealed skin." },
    { question: "Is there downtime after a salicylic acid peel?", answer: "Downtime is minimal — typically 1–3 days of mild peeling and slight redness. Most patients return to work the same day. Gentle flaking may occur from day 2–3 as the skin renews. SPF is essential during the healing period." },
    { question: "Can salicylic acid peels help with acne scarring?", answer: "Yes. Salicylic acid peels address active acne and prevent new breakouts, which is the first step in scar management. For established acne scarring, we may combine salicylic acid with TCA or recommend our Peel to Reveal cocktail for enhanced collagen stimulation." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/chemical-peels/salicylic-acid-peel/" data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/chemical-peels/salicylic-acid-peel/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "Salicylic Acid Peel", "alternateName": ["BHA Peel", "Beta Hydroxy Acid Peel", "Salicylic Peel"], "description": "Fat-soluble beta hydroxy acid peel that penetrates into pores to treat acne, oiliness, blackheads, and congestion.", "url": "https://www.cosmedocs.com/treatments/chemical-peels/salicylic-acid-peel/", "procedureType": "NoninvasiveProcedure", "bodyLocation": "Face" },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
              { "@type": "ListItem", "position": 2, "name": "Chemical Peels", "item": "https://www.cosmedocs.com/treatments/chemical-peels/" },
              { "@type": "ListItem", "position": 3, "name": "Salicylic Acid Peel", "item": "https://www.cosmedocs.com/treatments/chemical-peels/salicylic-acid-peel/" }
            ]}
          ] })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }, { label: 'Chemical Peels', path: '/treatments/chemical-peels/' }]} currentPage="Salicylic Acid Peel" />
            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Salicylic Acid <span className="text-[#C9A050] font-light">Peel</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mb-3">
                  The only fat-soluble peel that penetrates deep into pores — dissolving sebum, clearing acne, and refining oily skin from within.
                </p>
                <p className="text-sm text-white/30 font-extralight">BHA (Beta Hydroxy Acid) · Lipophilic · Oil-Soluble Exfoliation</p>
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

              {/* What is Salicylic Acid */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is a <span className="text-[#C9A050] font-light">Salicylic Acid Peel?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="text-white/50 text-sm leading-relaxed font-light space-y-4">
                    <p>Salicylic acid is a beta hydroxy acid (BHA) derived from willow bark — and it is the <strong className="text-white/70">only BHA used in chemical peels</strong>. What makes salicylic acid fundamentally different from all other peeling agents is its <strong className="text-white/70">lipophilicity</strong> — it is fat-soluble.</p>
                    <p>This fat solubility is clinically significant. While alpha hydroxy acids (AHAs) like glycolic and lactic acid are water-soluble and can only act on the skin surface, salicylic acid dissolves in the natural oils (sebum) that line your pores. This allows it to penetrate deep into the follicular unit — past the sebum plug, into the pore lining itself — where it dissolves the oil, keratin, and debris that cause blackheads, whiteheads, and inflammatory acne.</p>
                    <p>In pharmacological terms, salicylic acid is both keratolytic (breaks down keratin bonds between dead skin cells) and comedolytic (dissolves comedones — the plugs that block pores). It also possesses inherent anti-inflammatory properties, reducing redness and swelling associated with acne lesions. This combination of oil-soluble penetration, keratolysis, and anti-inflammation makes salicylic acid the gold standard peel for oily, acne-prone skin.</p>
                  </div>
                </motion.div>
              </section>

              {/* Pore Diagram */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">How Salicylic Acid <span className="text-[#C9A050] font-light">Cleans Your Pores</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/40 text-sm font-light mb-6">A clinical diagram showing the three-stage process: clogged pore → BHA penetration and exfoliation → clear, refined pore.</p>
                  <div className="max-w-xl rounded-2xl overflow-hidden border border-white/[0.08]">
                    <img
                      src="/images/treatments/salicylic-acid-pore-diagram.jpg"
                      alt="Salicylic acid BHA pore cleaning diagram showing sebum plug dissolution, P. acnes bacteria reduction, fat-soluble exfoliation and clear pore result"
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-xs text-white/20 font-light mt-3 text-center">Clogged pore → Salicylic acid (BHA) fat-soluble penetration → Exfoliation & bacterial reduction → Clear pore</p>
                </motion.div>
              </section>

              {/* Fat Solubility Deep Dive */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Fat Solubility — <span className="text-[#C9A050] font-light">Why It Matters</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="text-white/50 text-sm leading-relaxed font-light space-y-4">
                    <p>The concept of lipophilicity is central to understanding why salicylic acid outperforms AHAs for certain skin concerns. Human sebum is a complex mixture of triglycerides, wax esters, squalene, and free fatty acids. It coats the inside of every pore and forms the "glue" that holds dead skin cells together within the follicular canal.</p>
                    <p>Water-soluble acids cannot pass through this lipid barrier. They are effective at the epidermal surface — loosening intercellular bonds and promoting superficial exfoliation — but they cannot reach the root cause of comedonal and inflammatory acne deep within the pore.</p>
                    <p>Salicylic acid, being fat-soluble, dissolves directly into the sebum. It travels down the pore, dispersing through the lipid-rich environment, breaking apart the keratin plugs and dissolving the sebaceous material that feeds P. acnes bacteria. This intra-follicular action is why dermatologists worldwide regard salicylic acid as the first-line chemical peel for acne vulgaris.</p>
                    <p>At CosmeDocs, we use pharmaceutical-grade salicylic acid at concentrations between 10–30%, calibrated to your skin's sensitivity, Fitzpatrick type, and acne severity. The peel is self-neutralising — meaning it stops working once it has penetrated to its target depth — adding an inherent safety mechanism.</p>
                  </div>
                </motion.div>
              </section>

              {/* Supporting Ingredients */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Supporting <span className="text-[#C9A050] font-light">Ingredients</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/40 text-sm font-light mb-6">We enhance every salicylic acid peel with clinically proven active ingredients to amplify results and protect your skin.</p>
                  <div className="space-y-3">
                    {[
                      { name: "Mandelic Acid", desc: "A larger-molecule AHA derived from almonds. Its slower penetration makes it gentler and particularly suitable for darker skin tones (Fitzpatrick IV–VI). Combined with salicylic acid, it provides dual-action exfoliation — surface and intra-pore." },
                      { name: "Azelaic Acid", desc: "A dicarboxylic acid with anti-inflammatory, anti-bacterial, and anti-melanogenic properties. It targets post-inflammatory hyperpigmentation (the dark marks left by acne) and inhibits tyrosinase to prevent further pigment production." },
                      { name: "Tea Tree Oil", desc: "A natural antimicrobial that complements salicylic acid's antibacterial action. Studies show tea tree oil reduces acne lesion count comparably to benzoyl peroxide but with fewer side effects." },
                      { name: "Pyruvic Acid", desc: "A keto acid that converts to lactic acid on the skin. Offers enhanced penetration and sebum-regulating properties, making it an excellent adjunct for oily, acne-prone skin." },
                      { name: "Retinol (Pre-Treatment)", desc: "Used in pre-peel protocols to accelerate cell turnover and thin the stratum corneum, allowing the salicylic acid to penetrate more evenly and effectively." },
                      { name: "Antioxidants (Glutathione, Vitamin C)", desc: "Applied post-peel to neutralise free radicals generated during the exfoliation process, reduce inflammation, and protect newly revealed skin from oxidative damage." },
                    ].map(ing => (
                      <div key={ing.name} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-1">{ing.name}</p>
                        <p className="text-white/45 text-xs font-light leading-relaxed">{ing.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Suitability */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Am I <span className="text-[#C9A050] font-light">Suitable?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white">Ideal For</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Active acne (comedonal and inflammatory)</li>
                        <li>• Oily, sebum-overproducing skin</li>
                        <li>• Blackheads, whiteheads, and congestion</li>
                        <li>• Enlarged pores</li>
                        <li>• Post-acne hyperpigmentation</li>
                        <li>• Rosacea (at lower concentrations)</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Aspirin/salicylate allergy</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Active eczema or dermatitis on treatment area</li>
                        <li>• Recent isotretinoin use (within 6 months)</li>
                        <li>• Open wounds or active infections</li>
                        <li>• Recent sunburn or laser treatment</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
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

              {/* Internal Links */}
              <section>
                <h3 className="text-lg font-light text-white/60 mb-4">Other Peel Types</h3>
                <p className="text-sm text-[#C9A050] font-light mb-4">Peel to Reveal — our signature cocktail peel — from £150</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Skin Peels Hub", path: "/treatments/chemical-peels/" },
                    { label: "Glycolic Acid Peel", path: "/treatments/chemical-peels/glycolic-acid-peel/" },
                    { label: "Lactic Acid Peel", path: "/treatments/chemical-peels/lactic-acid-peel/" },
                    { label: "TCA Peel", path: "/treatments/chemical-peels/tca-peel/" },
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

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Clear Skin <span className="text-[#C9A050]">Starts Here</span></h2>
              <p className="text-white/60 mb-8 font-light">Book a skin assessment to find out if a salicylic acid peel is right for your concerns.</p>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><ChemicalPeelSidebar /></section>

        {/* Visible SEO Content */}
        <section className="py-16 px-4 bg-black border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extralight text-white/30 mb-6">Salicylic Acid Peel London — Clinical Guide</h2>
            <div className="text-white/20 text-xs leading-relaxed font-light space-y-3 columns-1 md:columns-2 gap-8">
              <p>Salicylic acid (2-hydroxybenzoic acid) is classified as a beta hydroxy acid with the molecular formula C₇H₆O₃. Its lipophilic character — the ability to dissolve in lipids rather than water — is what distinguishes it from every alpha hydroxy acid used in dermatology. This fat solubility allows salicylic acid to partition into the sebaceous lipid environment within the pilosebaceous unit, reaching the site of comedone formation and bacterial colonisation.</p>
              <p>Clinical studies have demonstrated that salicylic acid peels at 20–30% concentration significantly reduce acne lesion counts, sebum production, and pore diameter within 4–6 sessions. The acid's inherent anti-inflammatory mechanism — inhibition of prostaglandin synthesis via cyclooxygenase pathway modulation — reduces erythema and swelling without systemic effects.</p>
              <p>At CosmeDocs Harley Street, salicylic acid peels are enhanced with supporting active ingredients including mandelic acid for gentle dual-acid exfoliation, azelaic acid for its melanogenesis-inhibiting properties, pyruvic acid for enhanced keratolysis, and post-peel antioxidant cocktails (glutathione, ascorbic acid) for oxidative protection. Our clinicians assess each patient's Fitzpatrick skin type, acne grade (Leeds classification), and sebum production before selecting the optimal concentration and supporting agent combination.</p>
              <p>The Peel to Reveal cocktail integrates salicylic acid into a multi-acid fusion alongside glycolic, lactic, and TCA acids — creating a customisable treatment that addresses acne alongside pigmentation, texture, and ageing concerns simultaneously. Our aesthetics is invisible art — bold, natural, always your way.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SalicylicAcidPeel;
