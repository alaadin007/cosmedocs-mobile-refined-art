import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, ArrowRight, Star, Clock, Calendar, Activity, Eye, ShieldCheck } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";

function GlanceStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (<div className="flex items-center gap-3"><div className="text-[#C9A050]/70">{icon}</div><div><p className="text-xs text-white/30">{label}</p><p className="text-sm text-white/70">{value}</p></div></div>);
}

const LumiEyesSidebar = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">At a Glance</h3>
      <div className="space-y-4">
        <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="20–30 minutes" />
        <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="6–9 months" />
        <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="Minimal downtime" />
        <GlanceStat icon={<Eye className="w-4 h-4" />} label="Target" value="Under-eye area" />
        <GlanceStat icon={<ShieldCheck className="w-4 h-4" />} label="Product" value="Polynucleotide-based" />
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-sm font-medium text-white/70 mb-3">Treatment Pricing</p>
      <div className="space-y-2">
        {[{ tier: "Lumi Eyes", price: "£250" }, { tier: "Course of 3", price: "£650" }, { tier: "Consultation", price: "£50" }].map((item) => (
          <div key={item.tier} className="flex items-center justify-between text-sm"><span className="text-white/40">{item.tier}</span><span className="text-[#C9A050] font-medium">{item.price}</span></div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-white/[0.06]"><p className="text-xs text-white/25">Consultation fee deducted from treatment cost</p></div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-sm font-medium text-white/70 mb-3">Related Treatments</p>
      <div className="space-y-2">
        <Link to="/treatments/tear-trough-filler/" className="block text-xs text-[#C9A050] hover:underline">Tear Trough Filler →</Link>
        <Link to="/treatments/polynucleotides/" className="block text-xs text-[#C9A050] hover:underline">Polynucleotides →</Link>
        <Link to="/treatments/profhilo/" className="block text-xs text-[#C9A050] hover:underline">Profhilo →</Link>
        <Link to="/treatments/skin-rejuvenation/" className="block text-xs text-[#C9A050] hover:underline">All Skin Boosters →</Link>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">L</div>
        <div><p className="text-sm font-medium text-white/80">Laura</p><div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />))}</div></div>
      </div>
      <p className="text-sm text-white/45 leading-relaxed italic">"My under-eye area looks so much brighter and less puffy. People keep asking if I've been on holiday. The dark circles have really diminished after just two sessions."</p>
      <Link to="/testimonials" className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline">Real experiences. Real outcomes.<ArrowRight className="w-3 h-3" /></Link>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
      <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20">Book Consultation</a>
    </motion.div>
  </div>
);

const LumiEyes = () => {
  const seoData = generateSEOMetadata(
    "Lumi Eyes London | Under-Eye Rejuvenation | Harley Street",
    "Lumi Eyes polynucleotide treatment for under-eye rejuvenation at Harley Street. Reduces dark circles, puffiness & fine lines. Doctor-led. From £250.",
    "/treatments/lumi-eyes/"
  );

  const faqs = [
    { question: "What is Lumi Eyes?", answer: "Lumi Eyes is a specialised polynucleotide-based injectable treatment designed specifically for the delicate periorbital (under-eye) area. It contains highly purified polynucleotides derived from salmon DNA that stimulate cellular regeneration, improve microcirculation, and promote tissue repair in the thin skin beneath the eyes — reducing dark circles, puffiness, and fine lines." },
    { question: "How does Lumi Eyes differ from tear trough filler?", answer: "Tear trough filler uses hyaluronic acid to physically fill the hollow beneath the eye, creating immediate volume restoration. Lumi Eyes works differently — it regenerates the tissue quality itself by stimulating collagen production, improving microcirculation (which reduces dark circles), and strengthening the delicate periorbital skin. They can be complementary treatments." },
    { question: "How many sessions do I need?", answer: "Most patients benefit from 2–3 sessions spaced 3–4 weeks apart. Results are progressive as the polynucleotides stimulate ongoing tissue regeneration. Maintenance sessions every 6–9 months help sustain the rejuvenating effects." },
    { question: "Is the treatment painful?", answer: "The under-eye area is sensitive, so topical anaesthetic cream is applied 20–30 minutes before treatment. The injections use ultra-fine needles, and most patients report only mild, momentary discomfort. The entire treatment takes just 20–30 minutes." },
    { question: "What is the recovery time?", answer: "Minimal downtime. Mild swelling and potential bruising around the eyes may occur for 24–72 hours. Most patients can resume normal activities immediately but should avoid makeup around the eyes for 12 hours and strenuous exercise for 24 hours." },
    { question: "How much does Lumi Eyes cost?", answer: "Lumi Eyes at CosmeDocs is £250 per session. A course of 3 sessions is available at £650. The consultation fee (£50) is deducted from your treatment cost if you proceed." },
    { question: "Who is suitable for Lumi Eyes?", answer: "Lumi Eyes is ideal for patients with dark circles, under-eye puffiness, fine lines around the eyes, crepey periorbital skin, and early hollowing. It is not suitable during pregnancy, breastfeeding, or for patients with active infections in the treatment area." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/lumi-eyes/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/lumi-eyes/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "telephone": "+44 20 3733 3227", "priceRange": "££", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "addressRegion": "Greater London", "postalCode": "W1G 9PF", "addressCountry": "GB" }, "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" } },
              { "@type": "MedicalProcedure", "name": "Lumi Eyes Treatment", "description": "Specialised polynucleotide injectable for under-eye rejuvenation, reducing dark circles and puffiness.", "url": "https://www.cosmedocs.com/treatments/lumi-eyes/", "procedureType": "NoninvasiveProcedure", "bodyLocation": "Periorbital area" },
              { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) },
              { "@type": "Offer", "name": "Lumi Eyes", "priceCurrency": "GBP", "price": "250", "availability": "https://schema.org/InStock", "seller": { "@type": "MedicalBusiness", "name": "CosmeDocs" } }
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Boosters', path: '/treatments/skin-rejuvenation/' }]} currentPage="Lumi Eyes" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">Lumi Eyes <span className="text-[#C9A050] font-light">London</span></h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">Goodbye, tired eyes — specialised polynucleotide treatment for the delicate under-eye area, reducing dark circles, puffiness, and fine lines from within.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £250</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">What Is <span className="text-[#C9A050] font-light">Lumi Eyes?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">Lumi Eyes is a next-generation polynucleotide-based injectable treatment specifically formulated for the delicate periorbital area. The skin around the eyes is the thinnest on the face — just 0.5mm thick — making it particularly vulnerable to ageing, fatigue, and environmental damage. Lumi Eyes addresses this with highly purified polynucleotides that stimulate cellular renewal at this critical zone.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>Derived from salmon DNA (PDRN — polydeoxyribonucleotide), Lumi Eyes works by activating the A2A purinergic receptor pathway, which stimulates fibroblast proliferation, promotes angiogenesis (new blood vessel formation), and accelerates tissue repair. This addresses the root causes of dark circles — poor microcirculation and thin, damaged skin — rather than simply concealing them.</p>
                      <p>The treatment also stimulates new collagen and elastin production in the periorbital area, reducing fine lines (crow's feet), improving skin texture, and creating a more youthful, rested appearance. Unlike tear trough fillers which add volume, Lumi Eyes regenerates the tissue itself — a fundamentally different approach to under-eye rejuvenation.</p>
                      <p>At CosmeDocs, we often recommend Lumi Eyes as a standalone under-eye treatment or as a complement to tear trough filler for comprehensive periorbital rejuvenation. Our aesthetics is invisible art — you look rested, refreshed, and naturally you.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">What Lumi Eyes <span className="text-[#C9A050] font-light">Treats</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Dark circles", "Under-eye puffiness", "Fine lines (crow's feet)", "Crepey under-eye skin", "Periorbital hollowing", "Tired, fatigued appearance"].map((concern) => (
                      <div key={concern} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center"><p className="text-white/55 text-xs font-light">{concern}</p></div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Lumi Eyes vs <span className="text-[#C9A050] font-light">Tear Trough Filler</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">Lumi Eyes</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Regenerates periorbital tissue</li><li>• Improves microcirculation</li><li>• Reduces dark circles at source</li><li>• No volume addition</li><li>• 2–3 sessions, £250 each</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <p className="text-sm font-medium text-white/60 mb-3">Tear Trough Filler</p>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Fills hollow under-eye area</li><li>• Immediate volume restoration</li><li>• Conceals dark circles with volume</li><li>• Single session treatment</li><li>• £425 per session</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                    <p className="text-white/40 text-xs leading-relaxed font-light"><strong className="text-[#C9A050]/80">Combined approach:</strong> For patients with both hollowing and skin quality concerns, combining Lumi Eyes with <Link to="/treatments/tear-trough-filler/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2">tear trough filler</Link> delivers comprehensive periorbital rejuvenation.</p>
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
                      <ul className="space-y-2 text-white/45 text-xs font-light"><li>• Persistent dark circles</li><li>• Under-eye puffiness</li><li>• Fine lines around eyes</li><li>• Thin, crepey periorbital skin</li><li>• Tired, fatigued appearance</li></ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/30" /><p className="text-sm font-medium text-white/80">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light"><li>• Active eye infections</li><li>• Pregnancy or breastfeeding</li><li>• Fish allergy (salmon DNA)</li><li>• Severe periorbital hollowing (filler may be better)</li></ul>
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
            <aside className="hidden lg:block"><div className="sticky top-24"><LumiEyesSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white/85">Ready to <span className="text-[#C9A050]">Brighten Your Eyes?</span></h2>
              <p className="text-white/50 mb-8 font-light">Book a consultation to assess your under-eye area and discover whether Lumi Eyes is the right treatment for your concerns.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"><Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">Book Consultation<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></a>
                <Link to="/treatments/skin-rejuvenation/"><Button variant="ghost" className="border border-white/15 text-white/60 hover:text-white hover:bg-white/5 px-8 py-5 rounded-full text-base w-full sm:w-auto">View All Skin Boosters</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black/95"><LumiEyesSidebar /></section>

        <div className="sr-only" aria-hidden="true">
          <h2>Lumi Eyes London | Under-Eye Dark Circle Treatment Harley Street</h2>
          <p>CosmeDocs offers Lumi Eyes polynucleotide treatment in London for under-eye rejuvenation. This specialised injectable reduces dark circles, puffiness, and fine lines by regenerating periorbital tissue and improving microcirculation. From £250 per session. Doctor-led treatments at Harley Street since 2007.</p>
          <h3>Lumi Eyes vs Tear Trough Filler London</h3>
          <p>Lumi Eyes regenerates under-eye tissue using polynucleotides whilst tear trough filler physically fills hollows with hyaluronic acid. They address different aspects of periorbital ageing and can be combined for comprehensive results. Our doctors assess which approach is most suitable during consultation.</p>
        </div>
      </div>
    </>
  );
};

export default LumiEyes;
