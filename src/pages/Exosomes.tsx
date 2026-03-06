import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, ArrowRight, Star, Clock, Calendar, Activity, Zap, ShieldCheck, Dna } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";

function GlanceStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (<div className="flex items-center gap-3"><div className="text-[#C9A050]/70">{icon}</div><div><p className="text-xs text-white/30">{label}</p><p className="text-sm text-white/70">{value}</p></div></div>);
}

const ExosomesSidebar = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">At a Glance</h3>
      <div className="space-y-4">
        <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="45–60 minutes" />
        <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results" value="Progressive over weeks" />
        <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="Minimal downtime" />
        <GlanceStat icon={<Dna className="w-4 h-4" />} label="Technology" value="Cellular signalling" />
        <GlanceStat icon={<ShieldCheck className="w-4 h-4" />} label="Delivery" value="Topical + microneedling" />
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-sm font-medium text-white/70 mb-3">Treatment Pricing</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm"><span className="text-white/40">Exosome Therapy</span><span className="text-[#C9A050] font-medium">POC</span></div>
        <div className="flex items-center justify-between text-sm"><span className="text-white/40">Consultation</span><span className="text-[#C9A050] font-medium">£50</span></div>
      </div>
      <div className="mt-3 pt-3 border-t border-white/[0.06]"><p className="text-xs text-white/25">Price on consultation — tailored to treatment plan</p></div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-sm font-medium text-white/70 mb-3">Related Treatments</p>
      <div className="space-y-2">
        <Link to="/treatments/polynucleotides/" className="block text-xs text-[#C9A050] hover:underline">Polynucleotides →</Link>
        <Link to="/treatments/microneedling/" className="block text-xs text-[#C9A050] hover:underline">Microneedling →</Link>
        <Link to="/treatments/prp/" className="block text-xs text-[#C9A050] hover:underline">PRP Treatment →</Link>
        <Link to="/treatments/profhilo/" className="block text-xs text-[#C9A050] hover:underline">Profhilo →</Link>
        <Link to="/treatments/skin-rejuvenation/" className="block text-xs text-[#C9A050] hover:underline">All Skin Boosters →</Link>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
      <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20">Book Consultation</a>
    </motion.div>
  </div>
);

const Exosomes = () => {
  const seoData = generateSEOMetadata(
    "Exosome Therapy London | Regenerative Skin Treatment | Harley St",
    "Exosome therapy for skin rejuvenation at Harley Street. Next-generation regenerative treatment using cellular signalling molecules. Doctor-led. Consultation required.",
    "/treatments/exosomes/"
  );

  const faqs = [
    { question: "What are exosomes?", answer: "Exosomes are tiny extracellular vesicles (30–150nm) naturally released by cells. They carry a cargo of growth factors, cytokines, mRNA, and microRNA that act as cellular messengers — instructing target cells to repair, regenerate, and rejuvenate. In aesthetic medicine, exosome therapy harnesses these signalling molecules to stimulate profound skin regeneration at a cellular level." },
    { question: "How do exosomes differ from PRP?", answer: "PRP (Platelet-Rich Plasma) uses growth factors from your own blood platelets. Exosomes contain a much broader and more concentrated range of signalling molecules — including growth factors, cytokines, and genetic material — that can instruct cells more comprehensively. Exosomes represent the next evolution in regenerative aesthetics, offering more targeted and potent cellular communication." },
    { question: "What skin concerns can exosomes treat?", answer: "Exosome therapy addresses a wide range of skin concerns including fine lines, wrinkles, skin laxity, uneven texture, dullness, hyperpigmentation, acne scarring, and overall skin ageing. It is also being explored for hair restoration and wound healing applications." },
    { question: "How are exosomes delivered?", answer: "At CosmeDocs, exosomes are typically delivered through microneedling or mesotherapy injection techniques. Microneedling creates micro-channels in the skin through which the exosome solution is absorbed directly into the dermis. This ensures maximum penetration and efficacy of the signalling molecules." },
    { question: "How many sessions are needed?", answer: "Treatment protocols vary depending on skin concerns and goals. Typically 2–4 sessions spaced 3–4 weeks apart are recommended for optimal results. Your doctor will create a personalised protocol during consultation." },
    { question: "What is the recovery time?", answer: "Recovery is minimal — mild redness similar to microneedling for 24–48 hours. Most patients can resume normal activities the same day. Avoid makeup for 12 hours and direct sun exposure for 48 hours post-treatment." },
    { question: "How much does exosome therapy cost?", answer: "Exosome therapy pricing is provided on consultation as treatment plans are highly personalised based on skin assessment, treatment area, and number of sessions required. Book a consultation (£50, redeemable against treatment) to receive a tailored quote." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/exosomes/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/exosomes/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "telephone": "+44 20 3733 3227", "priceRange": "££", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "addressRegion": "Greater London", "postalCode": "W1G 9PF", "addressCountry": "GB" }, "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" } },
              { "@type": "MedicalProcedure", "name": "Exosome Therapy", "description": "Next-generation regenerative skin treatment using exosome cellular signalling molecules for profound tissue rejuvenation.", "url": "https://www.cosmedocs.com/treatments/exosomes/", "procedureType": "NoninvasiveProcedure", "bodyLocation": "Face, Neck, Scalp" },
              { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black overflow-x-hidden">
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Boosters', path: '/treatments/skin-rejuvenation/' }]} currentPage="Exosomes" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">Exosome Therapy <span className="text-[#C9A050] font-light">London</span></h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">Next-generation regenerative therapy — harnessing cellular signalling molecules to instruct your skin to repair, regenerate, and rejuvenate at the deepest level.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Advanced Regenerative</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Since 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">What Are <span className="text-[#C9A050] font-light">Exosomes?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">Exosomes are nanoscale extracellular vesicles — tiny biological packages (30–150 nanometres) released by cells as part of their natural communication system. They carry a rich cargo of growth factors, cytokines, messenger RNA, and microRNA that instruct recipient cells to perform specific functions: repair damage, produce collagen, reduce inflammation, and regenerate tissue.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>In regenerative aesthetics, exosome therapy represents the frontier of skin rejuvenation. Unlike traditional treatments that stimulate the skin through mechanical damage (microneedling) or chemical signals (growth factors), exosomes deliver comprehensive cellular instructions — essentially reprogramming skin cells to behave as younger, healthier versions of themselves.</p>
                      <p>The exosomes used in aesthetic medicine are typically derived from mesenchymal stem cells (MSCs) and contain over 200 growth factors, 800+ proteins, and numerous signalling molecules. This extraordinary molecular payload far exceeds what PRP or individual growth factor treatments can deliver, making exosomes the most advanced regenerative tool currently available.</p>
                      <p>At CosmeDocs, we position exosome therapy as our most advanced skin rejuvenation treatment — ideal for patients seeking profound cellular-level regeneration beyond what conventional skin boosters can achieve. Our aesthetics is invisible art — transformation at the cellular level that speaks without saying a word.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">How Exosome Therapy <span className="text-[#C9A050] font-light">Works</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">Exosome therapy at CosmeDocs is typically delivered through microneedling — creating micro-channels in the skin through which the exosome solution penetrates deep into the dermis. This dual-action approach combines the collagen-stimulating benefits of microneedling with the profound regenerative effects of exosome signalling.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>Once the exosomes reach the dermal layer, they are absorbed by fibroblasts, keratinocytes, and other skin cells. The signalling molecules within the exosomes then activate multiple regenerative pathways simultaneously — stimulating collagen synthesis, promoting angiogenesis, reducing oxidative stress, and modulating inflammation.</p>
                      <p>This multi-pathway activation is what makes exosomes uniquely powerful. Rather than targeting a single mechanism, they orchestrate a comprehensive regenerative response — similar to how your skin healed rapidly when you were younger.</p>
                      <p>Results are progressive, with initial improvements in skin radiance and texture visible within 1–2 weeks, and continued collagen remodelling over 2–3 months. The cellular-level changes are long-lasting, with many patients reporting sustained improvement for 6–12 months.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Exosomes vs <span className="text-[#C9A050] font-light">Other Regenerative Treatments</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">Exosomes</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• 200+ growth factors</li><li>• Multi-pathway activation</li><li>• Cellular reprogramming</li><li>• Most advanced technology</li><li>• Progressive, lasting results</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <p className="text-sm font-medium text-white/60 mb-3">PRP (Vampire Facial)</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Platelet-derived growth factors</li><li>• Autologous (your own blood)</li><li>• Single pathway stimulation</li><li>• Established technology</li><li>• Results last 6–9 months</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Treatment <span className="text-[#C9A050] font-light">Areas</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Full face rejuvenation", "Neck & décolletage", "Hands", "Scalp (hair restoration)", "Acne scarring", "Post-procedure recovery"].map((area) => (
                      <div key={area} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center"><p className="text-white/55 text-xs font-light">{area}</p></div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Am I <span className="text-[#C9A050] font-light">Suitable?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white/80">Ideal Candidates</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light"><li>• Advanced skin ageing</li><li>• Dull, depleted skin quality</li><li>• Acne scarring</li><li>• Post-procedure skin recovery</li><li>• Hair thinning</li><li>• Patients seeking advanced regenerative options</li></ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/30" /><p className="text-sm font-medium text-white/80">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light"><li>• Active skin infections</li><li>• Pregnancy or breastfeeding</li><li>• Active cancer treatment</li><li>• Autoimmune conditions (assess individually)</li></ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Frequently Asked <span className="text-[#C9A050] font-light">Questions</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-5">
                        <AccordionTrigger className="text-white/70 hover:text-[#C9A050] text-left text-sm font-light py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm font-light pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>
            <aside className="hidden lg:block"><div className="sticky top-24"><ExosomesSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white/85">Ready for <span className="text-[#C9A050]">Next-Generation Rejuvenation?</span></h2>
              <p className="text-white/50 mb-8 font-light">Book a consultation to discover whether exosome therapy is the right advanced regenerative treatment for your skin goals.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"><Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">Book Consultation<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></a>
                <Link to="/treatments/skin-rejuvenation/"><Button variant="ghost" className="border border-white/15 text-white/60 hover:text-white hover:bg-white/5 px-8 py-5 rounded-full text-base w-full sm:w-auto">View All Skin Boosters</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black/95"><ExosomesSidebar /></section>

        <div className="sr-only" aria-hidden="true">
          <h2>Exosome Therapy London | Regenerative Skin Treatment Harley Street</h2>
          <p>CosmeDocs offers exosome therapy in London — next-generation regenerative treatment using cellular signalling molecules containing 200+ growth factors. Exosomes instruct skin cells to repair, regenerate, and rejuvenate at the deepest cellular level. Doctor-led treatments at Harley Street since 2007. Our aesthetics is invisible art.</p>
          <h3>Exosomes vs PRP vs Polynucleotides London</h3>
          <p>Exosomes contain the broadest range of regenerative signalling molecules, activating multiple pathways simultaneously. PRP uses your own platelet growth factors. Polynucleotides stimulate cellular renewal with DNA fragments. Exosomes represent the most advanced option for patients seeking profound skin regeneration beyond conventional treatments.</p>
        </div>
      </div>
    </>
  );
};

export default Exosomes;
