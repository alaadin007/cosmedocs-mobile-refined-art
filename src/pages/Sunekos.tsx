import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight, Star, Clock, Calendar, Activity, Zap, ShieldCheck } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";

function GlanceStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#C9A050]/70">{icon}</div>
      <div>
        <p className="text-xs text-white/30">{label}</p>
        <p className="text-sm text-white/70">{value}</p>
      </div>
    </div>
  );
}

const SunekosSidebar = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">At a Glance</h3>
      <div className="space-y-4">
        <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="30 minutes" />
        <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="6–9 months" />
        <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="Minimal downtime" />
        <GlanceStat icon={<Zap className="w-4 h-4" />} label="Sessions" value="3–4 recommended" />
        <GlanceStat icon={<ShieldCheck className="w-4 h-4" />} label="Product" value="Patented HA + amino acids" />
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-sm font-medium text-white/70 mb-3">Treatment Pricing</p>
      <div className="space-y-2">
        {[{ tier: "Sunekos 200", price: "£275" }, { tier: "Course of 3", price: "£750" }, { tier: "Consultation", price: "£50" }].map((item) => (
          <div key={item.tier} className="flex items-center justify-between text-sm">
            <span className="text-white/40">{item.tier}</span>
            <span className="text-[#C9A050] font-medium">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-white/[0.06]"><p className="text-xs text-white/25">Consultation fee deducted from treatment cost</p></div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-sm font-medium text-white/70 mb-3">Related Skin Boosters</p>
      <div className="space-y-2">
        <Link to="/treatments/polynucleotides/" className="block text-xs text-[#C9A050] hover:underline">Polynucleotides →</Link>
        <Link to="/treatments/profhilo/" className="block text-xs text-[#C9A050] hover:underline">Profhilo →</Link>
        <Link to="/treatments/jalupro/" className="block text-xs text-[#C9A050] hover:underline">Jalupro →</Link>
        <Link to="/treatments/lumi-eyes/" className="block text-xs text-[#C9A050] hover:underline">Lumi Eyes →</Link>
        <Link to="/treatments/skin-rejuvenation/" className="block text-xs text-[#C9A050] hover:underline">All Skin Boosters →</Link>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">R</div>
        <div><p className="text-sm font-medium text-white/80">Rachel</p><div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />))}</div></div>
      </div>
      <p className="text-sm text-white/45 leading-relaxed italic">"After three sessions my skin looks so much more hydrated and plump. The fine lines around my eyes have really softened. Best skin booster I've tried."</p>
      <Link to="/testimonials" className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline">Real experiences. Real outcomes.<ArrowRight className="w-3 h-3" /></Link>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
      <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20">Book Consultation</a>
    </motion.div>
  </div>
);

const Sunekos = () => {
  const seoData = generateSEOMetadata(
    "Sunekos 200 London | Bio-Revitalising Skin Booster | Harley St",
    "Sunekos 200 bio-revitalising treatment at Harley Street. Patented amino acid and hyaluronic acid formula to regenerate the extracellular matrix. From £275.",
    "/treatments/sunekos/"
  );

  const faqs = [
    { question: "What is Sunekos 200?", answer: "Sunekos 200 is a patented injectable treatment combining a specific sequence of amino acids with hyaluronic acid. Unlike traditional skin boosters that simply hydrate, Sunekos is designed to regenerate the extracellular matrix (ECM) — the structural framework of your skin. This stimulates natural production of both collagen and elastin, restoring skin quality from within." },
    { question: "How does Sunekos differ from Profhilo?", answer: "Whilst Profhilo uses high-concentration hyaluronic acid for bio-remodelling and tissue hydration, Sunekos targets the extracellular matrix with its unique amino acid formula. Profhilo primarily addresses skin laxity and hydration, whereas Sunekos focuses on regenerating the structural components of skin — collagen and elastin. They can be used complementarily for comprehensive skin rejuvenation." },
    { question: "How many Sunekos sessions do I need?", answer: "A typical Sunekos protocol involves 3–4 sessions spaced 7–10 days apart. Results are progressive, with optimal improvement visible 2–4 weeks after completing the course. Maintenance sessions every 6–9 months help sustain the regenerative benefits." },
    { question: "What areas can Sunekos treat?", answer: "Sunekos is versatile and can treat the face, neck, décolletage, hands, and periorbital area (around the eyes). It is particularly effective for areas showing early signs of ageing, crepey skin, fine lines, and loss of skin elasticity." },
    { question: "Is Sunekos treatment painful?", answer: "Discomfort is minimal. The treatment involves multiple small injections using fine needles. Topical anaesthetic can be applied beforehand for sensitive areas. Most patients describe the sensation as mild and tolerable, similar to other skin booster treatments." },
    { question: "What is the recovery time?", answer: "There is minimal downtime. You may experience mild redness, slight swelling, or small injection marks for 24–48 hours. Most patients return to normal activities immediately. Avoid makeup for 12 hours and strenuous exercise for 24 hours post-treatment." },
    { question: "How much does Sunekos cost?", answer: "Sunekos 200 at CosmeDocs is £275 per session. A course of 3 sessions is available at £750. The consultation fee (£50) is deducted from your treatment cost if you proceed." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/sunekos/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/sunekos/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "telephone": "+44 20 3733 3227", "priceRange": "££", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "addressRegion": "Greater London", "postalCode": "W1G 9PF", "addressCountry": "GB" }, "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" } },
              { "@type": "MedicalProcedure", "name": "Sunekos 200 Treatment", "description": "Bio-revitalising injectable treatment using patented amino acid and hyaluronic acid formula to regenerate the extracellular matrix.", "url": "https://www.cosmedocs.com/treatments/sunekos/", "procedureType": "NoninvasiveProcedure", "bodyLocation": "Face, Neck, Hands, Periorbital" },
              { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) },
              { "@type": "Offer", "name": "Sunekos 200", "priceCurrency": "GBP", "price": "275", "availability": "https://schema.org/InStock", "seller": { "@type": "MedicalBusiness", "name": "CosmeDocs" } }
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Boosters', path: '/treatments/skin-rejuvenation/' }]} currentPage="Sunekos 200" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">Sunekos 200 <span className="text-[#C9A050] font-light">London</span></h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">The patented bio-revitalising formula — amino acids and hyaluronic acid working together to regenerate your skin's extracellular matrix from within.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £275</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">What Is <span className="text-[#C9A050] font-light">Sunekos 200?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">Sunekos 200 is a unique, patented injectable treatment that combines a specific physiological sequence of amino acids with non-cross-linked hyaluronic acid. Unlike traditional dermal fillers or skin boosters, Sunekos is specifically designed to regenerate the extracellular matrix (ECM) — the structural scaffolding that gives skin its firmness, elasticity, and youthful quality.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>The extracellular matrix is composed primarily of collagen, elastin, and glycosaminoglycans. As we age, the ECM degrades — leading to fine lines, wrinkles, skin laxity, and loss of volume. Sunekos works at a cellular level, stimulating fibroblasts to produce new collagen and elastin, effectively rebuilding the skin's foundation.</p>
                      <p>Developed by Italian pharmaceutical company Professional Derma, Sunekos holds a patent for its specific amino acid formulation. The six amino acids (glycine, L-proline, L-leucine, L-lysine, L-valine, and L-alanine) are combined in precise ratios that have been clinically demonstrated to stimulate ECM regeneration — a mechanism distinct from simple hydration or volume replacement.</p>
                      <p>At CosmeDocs, we use Sunekos as part of our comprehensive skin rejuvenation portfolio, often recommending it for patients seeking genuine skin quality improvement rather than temporary hydration. Our aesthetics is invisible art — transformation that speaks without saying a word.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">How Sunekos <span className="text-[#C9A050] font-light">Works</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">Sunekos is injected into the dermis using a series of micro-injections across the treatment area. The amino acids and hyaluronic acid work synergistically — the HA provides immediate hydration whilst the amino acids activate fibroblasts to produce new collagen type I, collagen type III, and elastin.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>The treatment protocol typically involves 3–4 sessions spaced 7–10 days apart. This phased approach allows progressive ECM regeneration, with each session building upon the previous one. Results become increasingly visible as new collagen and elastin fibres mature.</p>
                      <p>Unlike cross-linked hyaluronic acid fillers that physically occupy space, Sunekos stimulates your own biology to restore skin quality. The non-cross-linked HA component is rapidly integrated into the tissue, providing an optimal environment for the amino acids to exert their regenerative effect.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Treatment <span className="text-[#C9A050] font-light">Areas</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Full face", "Periorbital (around eyes)", "Neck & décolletage", "Hands", "Inner arms", "Knees"].map((area) => (
                      <div key={area} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center"><p className="text-white/55 text-xs font-light">{area}</p></div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Sunekos vs <span className="text-[#C9A050] font-light">Other Skin Boosters</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">Sunekos 200</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• ECM regeneration (collagen + elastin)</li>
                        <li>• Patented amino acid formula</li>
                        <li>• Targets skin structure</li>
                        <li>• 3–4 sessions protocol</li>
                        <li>• Results last 6–9 months</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <p className="text-sm font-medium text-white/60 mb-3">Profhilo</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Bio-remodelling via high-conc HA</li>
                        <li>• Primarily hydration + laxity</li>
                        <li>• 5-point injection technique</li>
                        <li>• 2 sessions protocol</li>
                        <li>• Results last 6–12 months</li>
                      </ul>
                    </div>
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
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Early signs of skin ageing</li><li>• Fine lines and crepey skin</li><li>• Loss of skin elasticity</li><li>• Dull, dehydrated complexion</li><li>• Dark circles and periorbital ageing</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/30" /><p className="text-sm font-medium text-white/80">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Active skin infections</li><li>• Pregnancy or breastfeeding</li><li>• Allergy to amino acids or HA</li><li>• Autoimmune conditions (assess)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Why <span className="text-[#C9A050] font-light">CosmeDocs?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {["Doctor-led — all treatments by GMC-registered doctors", "Harley Street Institute trainers — established 2007", "Over 1 million treatments performed", "Comprehensive skin booster portfolio", "Personalised treatment plans for every patient", "Our aesthetics is invisible art"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light"><CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />{item}</li>
                    ))}
                  </ul>
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
            <aside className="hidden lg:block"><div className="sticky top-24"><SunekosSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white/85">Ready to <span className="text-[#C9A050]">Regenerate Your Skin?</span></h2>
              <p className="text-white/50 mb-8 font-light">A consultation with our doctors will assess your skin quality and recommend whether Sunekos, Profhilo, polynucleotides, or a combination approach will deliver the best results.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"><Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">Book Consultation<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></a>
                <Link to="/treatments/skin-rejuvenation/"><Button variant="ghost" className="border border-white/15 text-white/60 hover:text-white hover:bg-white/5 px-8 py-5 rounded-full text-base w-full sm:w-auto">View All Skin Boosters</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black/95"><SunekosSidebar /></section>

        <div className="sr-only" aria-hidden="true">
          <h2>Sunekos 200 London | Bio-Revitalising Skin Treatment Harley Street</h2>
          <p>CosmeDocs offers Sunekos 200 bio-revitalising treatment in London. This patented injectable combines amino acids with hyaluronic acid to regenerate the extracellular matrix, stimulating natural collagen and elastin production. From £275 per session at our Harley Street clinic. Our aesthetics is invisible art — bold, natural, always your way.</p>
          <h3>Sunekos vs Profhilo vs Polynucleotides London</h3>
          <p>Understanding the difference between Sunekos, Profhilo, and polynucleotides is essential for choosing the right skin booster. Sunekos regenerates the extracellular matrix with its patented amino acid formula. Profhilo bio-remodels with high-concentration hyaluronic acid. Polynucleotides stimulate cellular renewal using DNA fragments. At CosmeDocs, our doctors assess your skin quality and recommend the optimal treatment or combination.</p>
          <h3>Sunekos Cost London | How Much Is Sunekos Treatment?</h3>
          <p>Sunekos 200 costs £275 per session at CosmeDocs Harley Street. A course of 3 sessions is £750. The recommended protocol is 3–4 sessions spaced 7–10 days apart for optimal ECM regeneration. Results last 6–9 months with maintenance sessions recommended.</p>
        </div>
      </div>
    </>
  );
};

export default Sunekos;
