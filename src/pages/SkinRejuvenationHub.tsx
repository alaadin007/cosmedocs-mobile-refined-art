import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles, Zap, Leaf, FlaskConical, Sun, Scissors, Flame } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const SkinRejuvenationHub = () => {
  const seoData = generateSEOMetadata(
    "Skin Rejuvenation | Bio-Remodelling & Skin Quality | Cosmedocs Harley Street",
    "Explore our skin rejuvenation treatments including Profhilo, Polynucleotides, PRP, Microneedling, Chemical Peels, HydraFacial, PDO Threads, and fat dissolving. Doctor-led care on Harley Street.",
    "/treatments/skin-rejuvenation/"
  );

  const treatments = [
    {
      title: "Profhilo",
      description: "Bio-remodelling injectable that hydrates from within and improves skin laxity with high-concentration hyaluronic acid.",
      link: "/treatments/profhilo/",
      icon: Droplets
    },
    {
      title: "Polynucleotides",
      description: "Next-generation biostimulator that repairs and regenerates skin at a cellular level for long-lasting quality improvement.",
      link: "/treatments/polynucleotides/",
      icon: Sparkles
    },
    {
      title: "PRP Vampire Facial",
      description: "Harnesses your body's own growth factors to stimulate collagen production and natural skin renewal.",
      link: "/treatments/prp-vampire-facial/",
      icon: Zap
    },
    {
      title: "Microneedling",
      description: "Controlled micro-injuries trigger the skin's repair response, improving texture, scarring, and overall tone.",
      link: "/treatments/microneedling/",
      icon: Leaf
    },
    {
      title: "Chemical Peels",
      description: "Medical-grade exfoliation to resurface skin, address pigmentation, and reveal a brighter, smoother complexion.",
      link: "/treatments/chemical-peels/",
      icon: FlaskConical
    },
    {
      title: "HydraFacial",
      description: "Multi-step cleansing, exfoliation, and hydration treatment for immediately visible radiance.",
      link: "/treatments/hydrafacial/",
      icon: Sun
    },
    {
      title: "PDO Threads",
      description: "Dissolvable threads placed beneath the skin to lift, tighten, and stimulate natural collagen remodelling.",
      link: "/treatments/pdo-threads/",
      icon: Scissors
    },
    {
      title: "Fat Dissolving",
      description: "Injectable treatment to reduce stubborn pockets of fat in targeted areas such as the chin and jawline.",
      link: "/treatments/fat-dissolving/",
      icon: Flame
    }
  ];

  const faqItems = [
    {
      question: "What is skin rejuvenation?",
      answer: "Skin rejuvenation encompasses a range of non-surgical treatments designed to improve skin quality, texture, hydration, and firmness. Rather than adding volume or freezing muscles, these treatments work with your skin's own biology to restore a healthier, more radiant complexion from within."
    },
    {
      question: "Who is suitable for skin rejuvenation treatments?",
      answer: "Most adults seeking to improve skin quality, address early signs of ageing, or maintain healthy skin are suitable candidates. During your consultation, our doctors assess your skin type, concerns, and medical history to recommend the most appropriate treatment or combination approach."
    },
    {
      question: "Can these treatments be combined?",
      answer: "Yes, many of our skin rejuvenation treatments complement each other beautifully. For example, Profhilo may be combined with microneedling or chemical peels for comprehensive skin renewal. Your doctor will create a personalised plan based on your goals and skin condition."
    },
    {
      question: "How long do results last?",
      answer: "This varies by treatment. Profhilo results typically last 6–12 months, Polynucleotides offer progressive improvement over several months, and treatments like chemical peels and microneedling benefit from a course of sessions. Your practitioner will advise on maintenance during your consultation."
    },
    {
      question: "Is there downtime?",
      answer: "Most skin rejuvenation treatments involve minimal downtime. Some treatments such as chemical peels or microneedling may cause temporary redness or mild peeling for a few days. Your doctor will explain what to expect before any treatment begins."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led skin rejuvenation treatments on Harley Street, London",
                "url": "https://cosmedocs.co.uk/treatments/skin-rejuvenation/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "medicalSpecialty": "Aesthetic Medicine"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cosmedocs.co.uk/" },
                  { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://cosmedocs.co.uk/treatments/" },
                  { "@type": "ListItem", "position": 3, "name": "Skin Rejuvenation", "item": "https://cosmedocs.co.uk/treatments/skin-rejuvenation/" }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

          <div className="page-container relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-[#C9A050] text-sm uppercase tracking-wider mb-4">Treatment Hub</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Skin Rejuvenation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                Bio-remodelling & advanced skin quality treatments
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                Our aesthetics is invisible art. Skin rejuvenation goes beyond the surface — stimulating your skin's own repair mechanisms to restore hydration, elasticity, and radiance from within. Doctor-led, science-backed, always natural.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-8 py-6 text-lg font-semibold" asChild>
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/treatments/">View All Treatments</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Skin Rejuvenation Includes */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Skin Rejuvenation Includes</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                From injectable bio-remodellers to advanced surface treatments, our skin rejuvenation category brings together the most effective approaches to restoring and maintaining skin health. Each treatment addresses different layers and mechanisms of skin ageing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={treatment.link}
                    className="group block bg-zinc-900/50 border border-white/10 rounded-2xl p-6 h-full hover:border-[#C9A050]/30 transition-all duration-300 hover:bg-zinc-800/50"
                  >
                    <div className="bg-[#C9A050]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[#C9A050]/20 transition-colors">
                      <treatment.icon className="w-6 h-6 text-[#C9A050]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#C9A050] transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    <span className="text-[#C9A050] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="py-20">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who Benefits from Skin Rejuvenation?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[#C9A050]">Preventative Care</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Patients in their late twenties and thirties seeking to maintain skin quality, boost hydration, and address early textural changes before they become more established. Treatments like Profhilo and HydraFacial are ideal starting points.
                    </p>
                  </div>
                  <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[#C9A050]">Restorative Treatment</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Those experiencing visible signs of skin ageing — loss of firmness, uneven tone, textural irregularities, or volume loss — may benefit from deeper interventions such as Polynucleotides, PRP, or PDO threads combined with surface treatments.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Approach to Skin Health</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    At CosmeDocs, skin rejuvenation is not about quick fixes. We take a consultation-led approach, assessing your skin's condition, your lifestyle, and your goals before recommending any treatment. Our doctors understand that healthy, radiant skin requires the right treatment at the right time.
                  </p>
                  <p>
                    Many of our patients benefit from combining treatments — for example, pairing Profhilo for deep hydration with microneedling for surface renewal. This layered approach addresses skin health at multiple levels, producing results that look and feel natural.
                  </p>
                  <p>
                    Every treatment is performed by experienced, GMC-registered practitioners at our Harley Street clinic. We use only clinically proven products and techniques, ensuring safety and efficacy are never compromised.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Teaser */}
        <section className="py-16">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">See Real Results</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                View genuine before and after transformations from our skin rejuvenation patients.
              </p>
              <Button variant="outline" className="border-[#C9A050]/30 text-[#C9A050] hover:bg-[#C9A050]/10 rounded-full px-8" asChild>
                <Link to="/before-after/skin-rejuvenation/">
                  View Before & After Gallery <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border border-white/10 rounded-xl px-6 bg-zinc-900/30">
                    <AccordionTrigger className="text-white hover:text-[#C9A050] text-left py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Skin Journey</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Book a consultation with our doctors to discover which skin rejuvenation treatment is right for you. Every plan is personalised to your skin's unique needs.
              </p>
              <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-10 py-6 text-lg font-semibold" asChild>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
              </Button>
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
