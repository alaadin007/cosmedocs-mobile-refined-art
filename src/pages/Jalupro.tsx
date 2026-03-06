import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, ArrowRight, Star, Clock, Calendar, Activity, Zap, ShieldCheck } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";

function GlanceStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (<div className="flex items-center gap-3"><div className="text-[#C9A050]/70">{icon}</div><div><p className="text-xs text-white/30">{label}</p><p className="text-sm text-white/70">{value}</p></div></div>);
}

const JaluproSidebar = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">At a Glance</h3>
      <div className="space-y-4">
        <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="30 minutes" />
        <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="6–9 months" />
        <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="Minimal downtime" />
        <GlanceStat icon={<Zap className="w-4 h-4" />} label="Sessions" value="2–3 recommended" />
        <GlanceStat icon={<ShieldCheck className="w-4 h-4" />} label="Product" value="Amino acids + HA" />
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-sm font-medium text-white/70 mb-3">Treatment Pricing</p>
      <div className="space-y-2">
        {[{ tier: "Jalupro", price: "£275" }, { tier: "Course of 3", price: "£750" }, { tier: "Consultation", price: "£50" }].map((item) => (
          <div key={item.tier} className="flex items-center justify-between text-sm"><span className="text-white/40">{item.tier}</span><span className="text-[#C9A050] font-medium">{item.price}</span></div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-white/[0.06]"><p className="text-xs text-white/25">Consultation fee deducted from treatment cost</p></div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <p className="text-sm font-medium text-white/70 mb-3">Related Skin Boosters</p>
      <div className="space-y-2">
        <Link to="/treatments/sunekos/" className="block text-xs text-[#C9A050] hover:underline">Sunekos 200 →</Link>
        <Link to="/treatments/polynucleotides/" className="block text-xs text-[#C9A050] hover:underline">Polynucleotides →</Link>
        <Link to="/treatments/profhilo/" className="block text-xs text-[#C9A050] hover:underline">Profhilo →</Link>
        <Link to="/treatments/lumi-eyes/" className="block text-xs text-[#C9A050] hover:underline">Lumi Eyes →</Link>
        <Link to="/treatments/skin-rejuvenation/" className="block text-xs text-[#C9A050] hover:underline">All Skin Boosters →</Link>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
      <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20">Book Consultation</a>
    </motion.div>
  </div>
);

const Jalupro = () => {
  const seoData = generateSEOMetadata(
    "Jalupro London | Amino Acid Skin Booster | Harley Street",
    "Jalupro bio-revitalising treatment at Harley Street. Amino acid complex that stimulates fibroblasts and repairs damaged tissue for tighter, brighter skin. From £275.",
    "/treatments/jalupro/"
  );

  const faqs = [
    { question: "What is Jalupro?", answer: "Jalupro is a bio-revitalising injectable treatment containing a complex of amino acids (glycine, L-proline, L-lysine, and L-leucine) combined with hyaluronic acid. It stimulates fibroblast activity to produce new collagen and elastin, improving skin texture, firmness, and radiance. It is particularly effective for skin that has suffered damage from sun exposure, ageing, or scarring." },
    { question: "How does Jalupro differ from Sunekos?", answer: "Both Jalupro and Sunekos use amino acid complexes, but their formulations and mechanisms differ. Jalupro focuses on stimulating fibroblast activity and tissue repair, making it particularly effective for damaged or scarred skin. Sunekos targets the broader extracellular matrix regeneration. Your doctor will recommend which is most appropriate based on your skin assessment." },
    { question: "What areas can Jalupro treat?", answer: "Jalupro can be used across the face, neck, décolletage, hands, and areas with acne scarring or stretch marks. It is particularly effective for improving skin texture, reducing fine lines, and brightening dull or sun-damaged complexions." },
    { question: "How many sessions are needed?", answer: "A typical Jalupro protocol involves 2–3 sessions spaced 2–4 weeks apart. Results are progressive, with optimal improvement visible after completing the course. Maintenance sessions every 6–9 months sustain the benefits." },
    { question: "What is the recovery time?", answer: "Minimal downtime. You may experience mild redness and small injection marks for 24–48 hours. Most patients return to normal activities immediately. Avoid makeup for 12 hours post-treatment." },
    { question: "How much does Jalupro cost?", answer: "Jalupro at CosmeDocs is £275 per session. A course of 3 sessions is available at £750. The consultation fee (£50) is deducted from your treatment cost if you proceed." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/jalupro/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/jalupro/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "telephone": "+44 20 3733 3227", "priceRange": "££", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "addressRegion": "Greater London", "postalCode": "W1G 9PF", "addressCountry": "GB" }, "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" } },
              { "@type": "MedicalProcedure", "name": "Jalupro Treatment", "description": "Bio-revitalising amino acid injectable treatment that stimulates fibroblasts and repairs damaged tissue.", "url": "https://www.cosmedocs.com/treatments/jalupro/", "procedureType": "NoninvasiveProcedure", "bodyLocation": "Face, Neck, Hands" },
              { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) },
              { "@type": "Offer", "name": "Jalupro Treatment", "priceCurrency": "GBP", "price": "275", "availability": "https://schema.org/InStock", "seller": { "@type": "MedicalBusiness", "name": "CosmeDocs" } }
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
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Boosters', path: '/treatments/skin-rejuvenation/' }]} currentPage="Jalupro" />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">Jalupro <span className="text-[#C9A050] font-light">London</span></h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">The amino acid powerhouse — stimulating fibroblasts to repair damaged tissue, tighten skin, and restore a brighter, more youthful complexion.</p>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">What Is <span className="text-[#C9A050] font-light">Jalupro?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={<p className="text-white/45 text-sm leading-relaxed font-light">Jalupro is a bio-revitalising injectable treatment that harnesses a powerful complex of amino acids — glycine, L-proline, L-lysine, and L-leucine — combined with hyaluronic acid. This formulation specifically targets fibroblasts, the cells responsible for producing collagen and elastin, stimulating them to repair and regenerate damaged tissue.</p>}>
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>What makes Jalupro particularly effective is its ability to address skin that has been damaged by environmental factors, sun exposure, acne scarring, or the natural ageing process. The amino acid complex acts as building blocks for new protein synthesis, whilst the hyaluronic acid provides an optimal hydration environment for cellular repair.</p>
                      <p>Originally developed for medical skin repair, Jalupro has become increasingly popular in aesthetic medicine for its ability to improve skin texture, reduce fine lines, brighten dull complexions, and address early scarring. At CosmeDocs, we use Jalupro as part of our comprehensive skin booster portfolio, selecting it when tissue repair and fibroblast stimulation are the primary goals.</p>
                      <p>The treatment is suitable for all skin types and Fitzpatrick classifications, making it a versatile option for our diverse patient population at Harley Street. Our aesthetics is invisible art — subtle, quiet transformation that restores your skin's natural vitality.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">Key <span className="text-[#C9A050] font-light">Benefits</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Skin tightening", "Improved texture", "Scar reduction", "Brightened complexion", "Fine line reduction", "Deep hydration"].map((benefit) => (
                      <div key={benefit} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center"><p className="text-white/55 text-xs font-light">{benefit}</p></div>
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
                      <ul className="space-y-2 text-white/45 text-xs font-light"><li>• Dull, tired-looking skin</li><li>• Sun-damaged skin</li><li>• Fine lines and wrinkles</li><li>• Acne scarring</li><li>• Loss of skin elasticity</li><li>• All skin types</li></ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/30" /><p className="text-sm font-medium text-white/80">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light"><li>• Active skin infections</li><li>• Pregnancy or breastfeeding</li><li>• Known allergies to ingredients</li><li>• Keloid scarring tendency</li></ul>
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
            <aside className="hidden lg:block"><div className="sticky top-24"><JaluproSidebar /></div></aside>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white/85">Ready to <span className="text-[#C9A050]">Repair & Rejuvenate?</span></h2>
              <p className="text-white/50 mb-8 font-light">Book a consultation to assess your skin and discover whether Jalupro is the right bio-revitaliser for your goals.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"><Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">Book Consultation<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></a>
                <Link to="/treatments/skin-rejuvenation/"><Button variant="ghost" className="border border-white/15 text-white/60 hover:text-white hover:bg-white/5 px-8 py-5 rounded-full text-base w-full sm:w-auto">View All Skin Boosters</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black/95"><JaluproSidebar /></section>

        <div className="sr-only" aria-hidden="true">
          <h2>Jalupro London | Amino Acid Skin Booster Treatment Harley Street</h2>
          <p>CosmeDocs offers Jalupro bio-revitalising treatment in London. This amino acid powerhouse stimulates fibroblasts to repair damaged tissue, tighten skin, reduce scars, and brighten complexions. From £275 per session. Doctor-led treatments at our Harley Street clinic since 2007. Our aesthetics is invisible art.</p>
          <h3>Jalupro vs Sunekos vs Profhilo London</h3>
          <p>Jalupro focuses on fibroblast stimulation and tissue repair using its amino acid complex. Sunekos targets broader ECM regeneration. Profhilo bio-remodels with high-concentration HA. Each serves different skin concerns — our doctors assess which is most suitable during your consultation.</p>
        </div>
      </div>
    </>
  );
};

export default Jalupro;
