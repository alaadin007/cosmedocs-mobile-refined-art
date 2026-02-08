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
import MicroneedlingSidebar from "@/components/skin-rejuvenation/MicroneedlingSidebar";

const Microneedling = () => {
  const seoData = generateSEOMetadata(
    "Microneedling London | From £250 | Cosmedocs Harley Street",
    "Doctor-led microneedling collagen induction therapy from £250. Treat acne scars, fine lines & skin texture. Harley Street clinic, 1M+ treatments since 2007.",
    "/treatments/microneedling/"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/687bbacf-7f97-4101-9c38-74d4bd9ce746.png", alt: "Microneedling 7-day transformation journey showing progressive healing" },
    { src: "/lovable-uploads/e2ca4841-297f-4f7d-808d-cdc8bf831b6e.png", alt: "Microneedling before and after skin texture improvement" },
    { src: "/lovable-uploads/779cf100-48e1-4e15-adbf-19ab9946904e.png", alt: "Combined microneedling and chemical peel treatment results" },
  ];

  const faqs = [
    { question: "What is microneedling and how does it work?", answer: "Microneedling, also known as collagen induction therapy, uses fine medical-grade needles to create controlled micro-injuries in the skin. This triggers your body's natural healing response, stimulating collagen and elastin production for improved texture, tone, and firmness — without any scarring." },
    { question: "How much does microneedling cost?", answer: "At CosmeDocs Harley Street, microneedling starts from £250 per session. We offer course packages of 3 sessions from £650. Combination treatments with PRP are available from £450. Final pricing depends on your personalised treatment plan." },
    { question: "How many sessions do I need?", answer: "Most patients see improvement after one session, but optimal results typically require 3–6 treatments spaced 4–6 weeks apart. The exact number depends on your skin concerns and desired outcomes, which we assess during your consultation." },
    { question: "Is microneedling painful?", answer: "We apply a topical anaesthetic before treatment to minimise discomfort. Most patients describe the sensation as mild — similar to light sandpaper being moved across the skin. Any discomfort subsides quickly after the session." },
    { question: "What's the recovery time?", answer: "Initial redness and mild swelling typically subside within 24–48 hours. Skin may feel slightly sensitive for 2–3 days. Most patients return to normal activities within 24 hours with proper aftercare and sun protection." },
    { question: "How long do results last?", answer: "Microneedling results typically last 3–6 months, with collagen production continuing for several months post-treatment. Maintenance sessions every 4–6 months help sustain improvements. Results for acne scarring can be long-lasting with proper aftercare." },
    { question: "Can microneedling be combined with other treatments?", answer: "Yes, microneedling combines excellently with PRP (platelet-rich plasma) for enhanced collagen stimulation, chemical peels for deeper resurfacing, and targeted skincare serums for amplified results. Your doctor will recommend the best combination for your goals." },
    { question: "Who is not suitable for microneedling?", answer: "Microneedling is not recommended during pregnancy, for those with active acne or infections, open wounds, blood clotting disorders, or certain skin conditions like eczema or psoriasis. Your doctor will assess suitability during consultation." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/treatments/microneedling/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/treatments/microneedling/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "url": "https://www.cosmedocs.co.uk/",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" },
                "medicalSpecialty": "Aesthetic Medicine"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Microneedling Treatment",
                "alternateName": ["Collagen Induction Therapy", "Skin Needling", "Dermal Needling"],
                "description": "Professional medical-grade microneedling using controlled micro-injuries to stimulate collagen and elastin production for skin rejuvenation, acne scar treatment, and texture improvement.",
                "url": "https://www.cosmedocs.co.uk/treatments/microneedling/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Face, Neck, Décolletage, Hands, Body"
              },
              {
                "@type": "Offer",
                "name": "Microneedling Treatment",
                "price": "250",
                "priceCurrency": "GBP",
                "url": "https://www.cosmedocs.co.uk/treatments/microneedling/",
                "availability": "https://schema.org/InStock",
                "seller": { "@type": "MedicalBusiness", "name": "CosmeDocs" }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.question,
                  "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }]}
              currentPage="Microneedling"
            />
            <div className="pt-12 pb-4 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Micro<span className="text-[#C9A050] font-light">needling</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Collagen induction therapy that triggers your skin's natural repair — smoothing texture, fading scars, and restoring radiance from within.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
              >
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />45–60 Min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £250</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Since 2007</span>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* Two-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* What Is Microneedling */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is <span className="text-[#C9A050] font-light">Microneedling?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Microneedling — also known as collagen induction therapy or skin needling — is a minimally invasive treatment that uses fine medical-grade needles to create controlled micro-injuries in the skin. This triggers your body's natural healing response, stimulating collagen and elastin production for smoother, firmer, more radiant skin.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Unlike aggressive resurfacing treatments, microneedling works with your skin's biology. The precise micro-channels created during treatment also enhance absorption of targeted serums and growth factors, amplifying results beyond what either treatment achieves alone.
                      </p>
                      <p>
                        <a href="https://academic.oup.com/bjd/article/192/1/19/7749284" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">Research published in the British Journal of Dermatology</a> supports microneedling as a safe, effective treatment for acne scarring, texture improvement, and skin rejuvenation — making it one of the most evidence-based aesthetic procedures available.
                      </p>
                      <p>
                        At CosmeDocs, we use medical-grade devices with adjustable needle depth, allowing us to precisely target different skin concerns and areas. This precision is what separates professional microneedling from at-home derma rollers.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">How It <span className="text-[#C9A050] font-light">Works</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { step: "01", title: "Micro-Injury", desc: "Fine needles create thousands of controlled micro-channels in the skin's surface, triggering the wound-healing cascade." },
                      { step: "02", title: "Collagen Response", desc: "Your body responds by producing new collagen and elastin fibres over the following 4–6 weeks." },
                      { step: "03", title: "Remodelling", desc: "Skin gradually remodels with improved texture, reduced scarring, and a firmer, more luminous complexion." },
                    ].map(s => (
                      <div key={s.step} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 text-center">
                        <span className="text-[#C9A050] font-light text-lg block mb-2">{s.step}</span>
                        <p className="text-sm font-medium text-white mb-1">{s.title}</p>
                        <p className="text-white/45 text-xs font-light">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* What It Treats */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What It <span className="text-[#C9A050] font-light">Treats</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Acne scars",
                      "Fine lines & wrinkles",
                      "Enlarged pores",
                      "Uneven skin tone",
                      "Stretch marks",
                      "Sun damage",
                      "Hyperpigmentation",
                      "Skin laxity",
                      "Dull complexion",
                    ].map(item => (
                      <div key={item} className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C9A050]/70 flex-shrink-0" />
                        <span className="text-white/50 text-xs font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Treatment Video */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">See the <span className="text-[#C9A050] font-light">Treatment</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/tjbOemp3Dro"
                      title="Microneedling treatment demonstration at CosmeDocs"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full aspect-video"
                    />
                  </div>
                  <p className="text-xs text-white/30 mt-3 font-light">Professional microneedling treatment demonstration at our Harley Street clinic.</p>
                </motion.div>
              </section>

              {/* Results Duration */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Results & <span className="text-[#C9A050] font-light">Duration</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Skin texture, glow, and fine line improvement lasts approximately 3–5 months after a full course. Collagen production continues for up to 6 months post-treatment, meaning results may actually improve before tapering.
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                          <p className="text-sm font-medium text-[#C9A050] mb-3">Progressive Improvement</p>
                          <p className="text-white/45 text-xs font-light leading-relaxed">Collagen and elastin synthesis peaks at 4–6 weeks and continues for up to 6 months. Results compound with each session, delivering progressively better outcomes.</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                          <p className="text-sm font-medium text-[#C9A050] mb-3">Maintenance</p>
                          <p className="text-white/45 text-xs font-light leading-relaxed">A maintenance session every 4–6 months is recommended. For anti-ageing, 2–3 sessions per year sustains collagen levels. Sun protection and good skincare extend results significantly.</p>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
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
                        <li>• Acne scarring or pitted scars</li>
                        <li>• Fine lines and early signs of ageing</li>
                        <li>• Enlarged pores and rough texture</li>
                        <li>• Hyperpigmentation or sun damage</li>
                        <li>• Stretch marks on body</li>
                        <li>• Dull, lacklustre complexion</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Active acne or open wounds</li>
                        <li>• Blood clotting disorders</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Active eczema or psoriasis</li>
                        <li>• Recent isotretinoin use (within 6 months)</li>
                        <li>• Active skin infections or cold sores</li>
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {beforeAfterImages.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900">
                        <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto block" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-white/30 italic mt-3">Individual results vary. Images show real patients treated at our Harley Street clinic.</p>
                </motion.div>
              </section>

              {/* Combination Treatments */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Combination <span className="text-[#C9A050] font-light">Treatments</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: "Microneedling + PRP", desc: "Your own platelet-rich plasma applied during treatment amplifies collagen stimulation and accelerates healing.", link: "/treatments/prp-vampire-facial/" },
                      { title: "Microneedling + Chemical Peel", desc: "Sequential treatment combining surface resurfacing with deeper collagen remodelling for comprehensive results.", link: "/treatments/chemical-peels/" },
                      { title: "Microneedling + Profhilo", desc: "Combine collagen induction with bio-remodelling for dual-action skin quality and hydration improvement.", link: "/treatments/profhilo/" },
                    ].map(c => (
                      <div key={c.title} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-sm font-medium text-[#C9A050] mb-2">{c.title}</p>
                        <p className="text-white/45 text-xs font-light leading-relaxed mb-3">{c.desc}</p>
                        <Link to={c.link} className="text-[#C9A050] text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Aftercare & <span className="text-[#C9A050] font-light">Recovery</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={<p className="text-white/45 text-sm leading-relaxed font-light">Expect mild redness similar to light sunburn for 24–48 hours. Most patients return to normal activities the following day with proper aftercare.</p>}
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      {[
                        "Avoid touching the treated area for 6 hours",
                        "No makeup for 24 hours post-treatment",
                        "Avoid intense exercise and sweating for 24–48 hours",
                        "Apply SPF 50+ daily — sun protection is essential",
                        "Avoid active skincare (retinol, AHAs) for 5–7 days",
                        "Keep skin hydrated with gentle, fragrance-free moisturiser",
                        "Avoid saunas, steam rooms, and hot baths for 48 hours",
                      ].map(item => (
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
                    {[
                      "Doctor-led — all treatments by GMC-registered doctors",
                      "Medical-grade devices with adjustable needle depth",
                      "Harley Street, London — established 2007",
                      "Over 1 million treatments performed",
                      "Personalised treatment plans for every patient",
                      "Our aesthetics is invisible art",
                    ].map(item => (
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

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24"><MicroneedlingSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Considering <span className="text-[#C9A050]">Microneedling?</span></h2>
              <p className="text-white/60 mb-8 font-light text-sm">A consultation will help determine whether microneedling is the right approach for your skin concerns.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all w-full sm:w-auto">
                    Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                    Speak to a Doctor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-black"><MicroneedlingSidebar /></section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Microneedling London — Professional Collagen Induction Therapy at Harley Street</h2>
          <p>CosmeDocs offers doctor-led microneedling treatments from £250 at our Harley Street clinic in London. Microneedling, also known as collagen induction therapy, skin needling, dermal needling, or percutaneous collagen induction therapy, uses medical-grade fine needles to create controlled micro-injuries in the stratum corneum. This minimally invasive needle facial treatment triggers the body's natural wound-healing cascade, stimulating new collagen and elastin production for improved skin texture, tone, and firmness without scarring. Our medical microneedling effectively treats acne scars, fine lines, wrinkles, enlarged pores, stretch marks, sun damage, hyperpigmentation, and skin laxity across face, neck, décolletage, hands, and body. Research published in the British Journal of Dermatology supports microneedling as a safe, effective treatment for acne scarring and skin rejuvenation. Microneedling results typically last 3–6 months with collagen production continuing for up to 6 months post-treatment. Most patients require 3–6 sessions spaced 4–6 weeks apart for optimal results. We offer combination treatments including microneedling with PRP platelet-rich plasma therapy for enhanced collagen stimulation, microneedling with chemical peels for comprehensive resurfacing, and microneedling with Profhilo for dual-action improvement. At CosmeDocs, we use adjustable-depth medical-grade devices for precision targeting of different skin concerns. All treatments are performed by experienced GMC-registered practitioners. Our aesthetics is invisible art — bold, natural, always your way. Over one million treatments performed since 2007.</p>
        </div>
      </div>
    </>
  );
};

export default Microneedling;
