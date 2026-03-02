import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles, Zap, Leaf, FlaskConical, Sun, Scissors, Flame } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";

const SkinRejuvenationHub = () => {
  const seoData = generateSEOMetadata(
    "Skin Rejuvenation London | Cosmedocs Harley Street",
    "Advanced skin rejuvenation including Profhilo, polynucleotides, PRP, microneedling & chemical peels. Doctor-led on Harley Street.",
    "/treatments/skin-rejuvenation/"
  );

  const treatments = [
    { title: "Profhilo", description: "Bio-remodelling injectable that hydrates from within and improves skin laxity with high-concentration hyaluronic acid.", link: "/treatments/profhilo/", icon: Droplets },
    { title: "Polynucleotides", description: "Next-generation biostimulator that repairs and regenerates skin at a cellular level for long-lasting quality improvement.", link: "/treatments/polynucleotides/", icon: Sparkles },
    { title: "PRP Vampire Facial", description: "Harnesses your body's own growth factors to stimulate collagen production and natural skin renewal.", link: "/treatments/prp-vampire-facial/", icon: Zap },
    { title: "Microneedling", description: "Controlled micro-injuries trigger the skin's repair response, improving texture, scarring, and overall tone.", link: "/treatments/microneedling/", icon: Leaf },
    { title: "Chemical Peels", description: "Medical-grade exfoliation to resurface skin, address pigmentation, and reveal a brighter, smoother complexion.", link: "/treatments/chemical-peels/", icon: FlaskConical },
    { title: "HydraFacial", description: "Multi-step cleansing, exfoliation, and hydration treatment for immediately visible radiance.", link: "/treatments/hydrafacial/", icon: Sun },
    { title: "PDO Threads", description: "Dissolvable threads placed beneath the skin to lift, tighten, and stimulate natural collagen remodelling.", link: "/treatments/pdo-threads/", icon: Scissors },
    { title: "Fat Dissolving", description: "Injectable treatment to reduce stubborn pockets of fat in targeted areas such as the chin and jawline.", link: "/treatments/fat-dissolving/", icon: Flame }
  ];

  const faqItems = [
    { question: "What is skin rejuvenation?", answer: "Skin rejuvenation encompasses a range of non-surgical treatments designed to improve skin quality, texture, hydration, and firmness. Rather than adding volume or freezing muscles, these treatments work with your skin's own biology to restore a healthier, more radiant complexion from within." },
    { question: "Who is suitable for skin rejuvenation treatments?", answer: "Most adults seeking to improve skin quality, address early signs of ageing, or maintain healthy skin are suitable candidates. During your consultation, our doctors assess your skin type, concerns, and medical history to recommend the most appropriate treatment or combination approach." },
    { question: "Can these treatments be combined?", answer: "Yes, many of our skin rejuvenation treatments complement each other beautifully. For example, Profhilo may be combined with microneedling or chemical peels for comprehensive skin renewal. Your doctor will create a personalised plan based on your goals and skin condition." },
    { question: "How long do results last?", answer: "This varies by treatment. Profhilo results typically last 6–12 months, Polynucleotides offer progressive improvement over several months, and treatments like chemical peels and microneedling benefit from a course of sessions. Your practitioner will advise on maintenance during your consultation." },
    { question: "Is there downtime?", answer: "Most skin rejuvenation treatments involve minimal downtime. Some treatments such as chemical peels or microneedling may cause temporary redness or mild peeling for a few days. Your doctor will explain what to expect before any treatment begins." }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/skin-rejuvenation/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/skin-rejuvenation/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led skin rejuvenation treatments on Harley Street, London",
                "url": "https://www.cosmedocs.com/treatments/skin-rejuvenation/",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" },
                
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosmedocs.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
                  { "@type": "ListItem", "position": 3, "name": "Skin Rejuvenation", "item": "https://www.cosmedocs.com/treatments/skin-rejuvenation/" }
                ]
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
              items={[{ label: 'Treatments', path: '/treatments/' }]}
              currentPage="Skin Rejuvenation"
            />
            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-[#C9A050] text-xs uppercase tracking-widest mb-4 font-medium">Treatment Hub</p>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Skin <span className="text-[#C9A050] font-light">Rejuvenation</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Bio-remodelling, regenerative therapies, and advanced skin quality treatments — doctor-led, science-backed, always natural.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Since 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />1M+ Treatments</span>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* Treatment Grid */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                What Skin Rejuvenation <span className="text-[#C9A050] font-light">Includes</span>
              </h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
              <p className="text-white/40 text-sm font-light max-w-3xl leading-relaxed">
                From injectable bio-remodellers to advanced surface treatments, our skin rejuvenation category brings together the most effective approaches to restoring and maintaining skin health.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {treatments.map((treatment, index) => (
                <motion.div key={treatment.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <Link to={treatment.link}
                    className="group block bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 h-full hover:border-[#C9A050]/30 transition-all duration-300">
                    <div className="bg-[#C9A050]/10 rounded-full w-10 h-10 flex items-center justify-center mb-4 group-hover:bg-[#C9A050]/20 transition-colors">
                      <treatment.icon className="w-5 h-5 text-[#C9A050]" />
                    </div>
                    <h3 className="text-base font-medium mb-2 text-white group-hover:text-[#C9A050] transition-colors">{treatment.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-3 font-light">{treatment.description}</p>
                    <span className="text-[#C9A050] text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Benefits */}
        <section className="py-16 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                Who <span className="text-[#C9A050] font-light">Benefits?</span>
              </h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-8" />
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                  <p className="text-sm font-medium text-[#C9A050] mb-3">Preventative Care</p>
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    Patients in their late twenties and thirties seeking to maintain skin quality, boost hydration, and address early textural changes. Profhilo and HydraFacial are ideal starting points.
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                  <p className="text-sm font-medium text-[#C9A050] mb-3">Restorative Treatment</p>
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    Those experiencing visible signs of skin ageing — loss of firmness, uneven tone, or textural irregularities — may benefit from Polynucleotides, PRP, or PDO threads combined with surface treatments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                Our Approach to <span className="text-[#C9A050] font-light">Skin Health</span>
              </h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
              <ExpandableSection
                preview={
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    At CosmeDocs, skin rejuvenation is not about quick fixes. We take a consultation-led approach, assessing your skin's condition, your lifestyle, and your goals before recommending any treatment.
                  </p>
                }
              >
                <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                  <p>
                    Many of our patients benefit from combining treatments — for example, pairing Profhilo for deep hydration with microneedling for surface renewal. This layered approach addresses skin health at multiple levels, producing results that look and feel natural.
                  </p>
                  <p>
                    Every treatment is performed by experienced, GMC-registered practitioners at our Harley Street clinic. We use only clinically proven products and techniques, ensuring safety and efficacy are never compromised. Our aesthetics is invisible art — bold, natural, always your way.
                  </p>
                </div>
              </ExpandableSection>
            </motion.div>
          </div>
        </section>

        {/* B&A Teaser */}
        <section className="py-16 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">See Real <span className="text-[#C9A050] font-light">Results</span></h2>
              <p className="text-white/40 text-sm mb-6 font-light">View genuine before and after transformations from our skin rejuvenation patients.</p>
              <Link to="/before-after/skin-rejuvenation/"
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#d4af5a] text-sm font-medium transition-colors">
                View Before & After Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
              Frequently Asked <span className="text-[#C9A050] font-light">Questions</span>
            </h2>
            <div className="w-10 h-px bg-[#C9A050]/40 mb-8" />
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-5">
                  <AccordionTrigger className="text-white/70 hover:text-[#C9A050] text-left text-sm font-light py-4">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-white/40 text-sm font-light pb-4">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">
                Start Your Skin <span className="text-[#C9A050]">Journey</span>
              </h2>
              <p className="text-white/60 mb-8 font-light text-sm">
                Book a consultation with our doctors to discover which skin rejuvenation treatment is right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
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

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <p>Skin rejuvenation treatments at CosmeDocs Harley Street London include Profhilo bio-remodelling, Polynucleotide therapy, PRP Vampire Facial, medical-grade microneedling, chemical peels, HydraFacial, PDO thread lifting, and fat dissolving injections. Our experienced doctors specialise in non-surgical skin quality improvement using clinically proven techniques. Whether you seek deep hydration, collagen stimulation, skin tightening, or texture refinement, our consultation-led approach ensures you receive the most appropriate treatment for your skin concerns. CosmeDocs has performed over one million treatments since 2007, establishing our clinic as one of the most experienced aesthetic practices in the United Kingdom. All treatments are carried out by GMC-registered medical professionals in our CQC-registered Harley Street clinic.</p>
        </div>
      </div>
    </>
  );
};

export default SkinRejuvenationHub;
