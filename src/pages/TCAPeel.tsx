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

const TCAPeel = () => {
  const seoData = generateSEOMetadata(
    "TCA Peel London | Trichloroacetic Acid Peel From £100 | Cosmedocs Harley Street",
    "Medical-grade TCA peel for deep scarring, pigmentation & sun damage. Medium-to-deep resurfacing with retinol pre-treatment & antioxidant recovery. From £100 at Harley Street.",
    "/treatments/chemical-peels/tca-peel/"
  );

  const faqs = [
    { question: "What is a TCA peel?", answer: "TCA (trichloroacetic acid) is a medium-to-deep chemical peel that penetrates beyond the epidermis into the papillary dermis. It causes controlled protein denaturation — coagulating the damaged upper skin layers so they peel away over 5–10 days, revealing restructured, smoother skin beneath with new collagen formation." },
    { question: "What skin concerns does TCA treat?", answer: "TCA peels are particularly effective for deep acne scarring, resistant hyperpigmentation, melasma, significant sun damage (photoageing), deep wrinkles, and pre-cancerous actinic keratoses. They deliver more dramatic results than superficial AHA/BHA peels." },
    { question: "How much does a TCA peel cost?", answer: "TCA peels at CosmeDocs start from £100 per session. The exact cost depends on the treatment area and concentration used. Many patients require only 1–3 sessions for significant improvement." },
    { question: "What is the downtime for a TCA peel?", answer: "TCA peels require 5–10 days of downtime. You will experience redness, tightness, and significant peeling/flaking as the damaged skin sheds. Social downtime of at least one week is recommended. Your practitioner will provide a detailed recovery timeline." },
    { question: "What supporting ingredients do you use with TCA?", answer: "TCA peels at CosmeDocs include retinol pre-treatment (2–4 weeks prior to thin the stratum corneum), azelaic acid (to reduce post-inflammatory pigmentation risk), and post-peel antioxidant recovery with glutathione, vitamin C, and hyaluronic acid. Mandelic acid may be used in the pre-peel protocol for darker skin tones." },
    { question: "Is TCA safe for darker skin tones?", answer: "TCA peels carry a higher risk of post-inflammatory hyperpigmentation in Fitzpatrick IV–VI skin types. At CosmeDocs, we mitigate this risk with careful pre-treatment protocols (retinol, mandelic acid priming), conservative concentrations, and azelaic acid support. Not all darker skin types are suitable — a thorough consultation is essential." },
    { question: "How does TCA compare to glycolic and salicylic acid peels?", answer: "TCA operates at a deeper level than AHA/BHA peels. Glycolic and salicylic acid primarily affect the epidermis, whilst TCA penetrates into the dermis. This deeper action produces more dramatic results but requires longer recovery. For many patients, our Peel to Reveal cocktail — which includes TCA alongside other acids — offers a balanced approach." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/chemical-peels/tca-peel/" data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/chemical-peels/tca-peel/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "TCA Peel", "alternateName": ["Trichloroacetic Acid Peel", "TCA Chemical Peel", "Medium Depth Peel"], "description": "Medical-grade trichloroacetic acid peel for deep skin resurfacing — targeting acne scarring, resistant pigmentation, and significant photoageing.", "url": "https://www.cosmedocs.com/treatments/chemical-peels/tca-peel/", "procedureType": "NoninvasiveProcedure" },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
              { "@type": "ListItem", "position": 2, "name": "Chemical Peels", "item": "https://www.cosmedocs.com/treatments/chemical-peels/" },
              { "@type": "ListItem", "position": 3, "name": "TCA Peel", "item": "https://www.cosmedocs.com/treatments/chemical-peels/tca-peel/" }
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }, { label: 'Chemical Peels', path: '/treatments/chemical-peels/' }]} currentPage="TCA Peel" />
            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  TCA <span className="text-[#C9A050] font-light">Peel</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mb-3">
                  Medium-to-deep resurfacing for significant scarring, resistant pigmentation, and advanced photoageing — delivering the most dramatic results of any chemical peel.
                </p>
                <p className="text-sm text-white/30 font-extralight">Trichloroacetic Acid · Medium-Deep Peel · Dermal Remodelling</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30–45 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £250</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is a <span className="text-[#C9A050] font-light">TCA Peel?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="text-white/50 text-sm leading-relaxed font-light space-y-4">
                    <p>TCA (trichloroacetic acid) is a medium-to-deep chemical peel that works by causing controlled protein denaturation — coagulating the proteins in the epidermis and upper dermis to induce a structured wound healing response. As the treated layers peel away over 5–10 days, new skin forms with increased collagen, improved elastin architecture, and more uniform melanin distribution.</p>
                    <p>TCA peels penetrate deeper than AHAs (glycolic, lactic acid) and BHAs (salicylic acid), reaching the papillary dermis at concentrations of 20–35%. This deeper action makes TCA the peel of choice for significant acne scarring, deep wrinkles, sun damage, resistant melasma, and pre-cancerous actinic keratoses.</p>
                    <p>At CosmeDocs, TCA peels are never performed in isolation. We employ a comprehensive multi-phase protocol: retinol pre-treatment to optimise the skin for peeling, careful concentration selection based on Fitzpatrick skin type and concern severity, and a post-peel recovery programme including antioxidants, barrier repair agents, and strict sun protection.</p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Supporting <span className="text-[#C9A050] font-light">Ingredients</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {[
                      { name: "Retinol (Pre-Treatment — 2–4 Weeks Prior)", desc: "Essential for TCA preparation. Retinol accelerates epidermal cell turnover, thins the stratum corneum, and ensures uniform acid penetration. This pre-treatment phase is critical for even results and reduced complication risk." },
                      { name: "Azelaic Acid", desc: "Incorporated pre- and post-peel to suppress melanocyte hyperactivity. Particularly important for patients at risk of post-inflammatory hyperpigmentation, azelaic acid reduces pigment deposition during the healing phase." },
                      { name: "Mandelic Acid (Pre-Treatment for Darker Skin)", desc: "For Fitzpatrick IV–VI patients, mandelic acid is used in the weeks preceding a TCA peel to gently acclimatise the skin to acid exfoliation, reducing the risk of uneven pigment response." },
                      { name: "Glutathione & Vitamin C (Post-Peel Recovery)", desc: "Powerful antioxidants applied during the recovery phase to neutralise free radicals generated by the controlled wound healing process, accelerate collagen synthesis, and brighten newly forming skin." },
                      { name: "Hyaluronic Acid (Barrier Recovery)", desc: "Deep hydration support during the peeling and recovery phase. Maintains skin moisture, reduces tightness, and supports optimal barrier reformation." },
                      { name: "Pyruvic Acid (Combination Protocols)", desc: "Sometimes combined with TCA at lower concentrations for a modulated multi-depth peel. Pyruvic acid provides an intermediate penetration layer, creating a smoother gradient of exfoliation." },
                    ].map(ing => (
                      <div key={ing.name} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-1">{ing.name}</p>
                        <p className="text-white/45 text-xs font-light leading-relaxed">{ing.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Recovery Timeline */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Recovery <span className="text-[#C9A050] font-light">Timeline</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {[
                      { day: "Day 1–2", desc: "Skin feels tight, warm, and appears red or bronzed. Mild swelling possible. Apply prescribed moisturiser and avoid water on the face." },
                      { day: "Day 3–5", desc: "Peeling begins — often starting around the mouth and chin. Do not pick or pull the peeling skin. Allow it to shed naturally." },
                      { day: "Day 5–7", desc: "Active peeling continues. New, pink skin is revealed beneath. This new skin is highly sensitive — strict SPF 50+ is essential." },
                      { day: "Day 7–10", desc: "Peeling subsides. Redness fades progressively. Most patients are socially presentable by day 7–10 with light makeup." },
                      { day: "Week 2–4", desc: "Collagen remodelling continues beneath the surface. Skin texture, tone, and pigmentation continue improving for 4–8 weeks post-peel." },
                    ].map(stage => (
                      <div key={stage.day} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
                        <span className="text-[#C9A050] font-light text-sm min-w-[70px]">{stage.day}</span>
                        <p className="text-white/45 text-xs font-light leading-relaxed">{stage.desc}</p>
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
                        <li>• Deep acne scarring (ice-pick, boxcar)</li>
                        <li>• Resistant hyperpigmentation and melasma</li>
                        <li>• Significant sun damage and photoageing</li>
                        <li>• Deep wrinkles and textural irregularities</li>
                        <li>• Actinic keratoses (pre-cancerous lesions)</li>
                        <li>• Patients wanting dramatic, single-session results</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Very dark skin types (Fitzpatrick V–VI) without pre-treatment</li>
                        <li>• History of keloid or hypertrophic scarring</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Recent isotretinoin use (within 6–12 months)</li>
                        <li>• Active infections, eczema, or psoriasis</li>
                        <li>• Patients unable to commit to 7–10 days downtime</li>
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
                    { label: "Lactic Acid Peel", path: "/treatments/chemical-peels/lactic-acid-peel/" },
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
              <h2 className="text-3xl font-light mb-4 text-white">Deep <span className="text-[#C9A050]">Renewal</span></h2>
              <p className="text-white/60 mb-8 font-light">Book a TCA peel consultation at Harley Street for dramatic skin transformation.</p>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><ChemicalPeelSidebar /></section>

        <section className="py-16 px-4 bg-black border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extralight text-white/30 mb-6">TCA Peel London — Clinical Guide</h2>
            <div className="text-white/20 text-xs leading-relaxed font-light space-y-3 columns-1 md:columns-2 gap-8">
              <p>Trichloroacetic acid (Cl₃CCOOH) is a halogenated derivative of acetic acid that has been used in dermatology since the 1880s. At concentrations of 10–35%, TCA causes epidermal and upper dermal coagulative necrosis — a controlled chemical cauterisation that triggers a structured wound healing cascade including inflammation, re-epithelialisation, and neocollagenesis.</p>
              <p>The depth of TCA penetration is concentration-dependent and technique-dependent (number of coats, application pressure, and skin preparation). At 15–20%, TCA produces a superficial-to-medium peel reaching the papillary dermis. At 25–35%, it achieves medium-depth penetration into the upper reticular dermis, stimulating type I and III collagen synthesis and glycosaminoglycan deposition over the following 4–8 weeks.</p>
              <p>CosmeDocs TCA protocols incorporate a mandatory retinol pre-treatment phase (typically 0.5–1% retinol for 2–4 weeks) to accelerate epidermal turnover and ensure uniform acid penetration. Azelaic acid is prescribed concurrently for patients at risk of post-inflammatory hyperpigmentation. Post-peel recovery includes glutathione and ascorbic acid application, ceramide-based barrier repair, and strict SPF 50+ photoprotection for a minimum of 4 weeks.</p>
              <p>For patients seeking comprehensive renewal without the full intensity of a standalone TCA peel, our Peel to Reveal cocktail incorporates TCA at lower concentrations alongside glycolic, lactic, salicylic, mandelic, and azelaic acids — creating a multi-depth, multi-mechanism peel customised by the clinician. Our aesthetics is invisible art — bold, natural, always your way.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TCAPeel;
