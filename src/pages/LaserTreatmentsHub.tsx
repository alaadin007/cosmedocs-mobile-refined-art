import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sun, Sparkles } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const LaserTreatmentsHub = () => {
  const seoData = generateSEOMetadata(
    "Laser Treatments | Advanced Skin Resurfacing & Hair Removal | Cosmedocs Harley Street",
    "Explore our laser treatments including CO2 laser resurfacing, laser hair removal, and Pico laser for pigmentation and tattoo removal. Doctor-led care on Harley Street, London.",
    "/treatments/laser-treatments/"
  );

  const treatments = [
    {
      title: "CO2 Laser Resurfacing",
      description: "The most powerful skin rejuvenation laser, removing damaged layers to trigger complete cellular renewal and collagen remodelling.",
      link: "/treatments/co2-laser/",
      icon: Zap
    },
    {
      title: "Laser Hair Removal",
      description: "Medical-grade laser technology for long-term hair reduction across the face and body, suitable for a range of skin types.",
      link: "/treatments/laser-hair-removal/",
      icon: Sun
    },
    {
      title: "Pico Laser",
      description: "Ultra-short pulse laser for treating pigmentation, melasma, acne scarring, and tattoo removal with minimal downtime.",
      link: "/treatments/pico-laser/",
      icon: Sparkles
    }
  ];

  const faqItems = [
    {
      question: "What are laser treatments?",
      answer: "Laser treatments use focused light energy to target specific skin concerns. Different laser wavelengths and pulse durations allow us to address everything from deep wrinkles and scarring to unwanted hair and pigmentation, with precision that other methods cannot match."
    },
    {
      question: "Who is suitable for laser treatments?",
      answer: "Suitability depends on the specific laser, your skin type, and your concerns. During your consultation, our doctors assess your skin using the Fitzpatrick scale and review your medical history to recommend the safest and most effective laser option for you."
    },
    {
      question: "Are laser treatments safe?",
      answer: "When performed by experienced, qualified practitioners using appropriate settings, laser treatments have an excellent safety profile. At Cosmedocs, all laser procedures are carried out or supervised by doctors who select the correct parameters for your individual skin type."
    },
    {
      question: "How many sessions are needed?",
      answer: "This varies by treatment. CO2 laser typically requires a single session, whilst laser hair removal usually needs 6–8 sessions for optimal results. Pico laser treatments may require 2–6 sessions depending on the concern being treated. Your doctor will outline a personalised plan."
    },
    {
      question: "Is there downtime?",
      answer: "Downtime varies significantly between laser types. Laser hair removal has virtually no downtime, Pico laser involves mild redness for a day or two, whilst CO2 laser resurfacing requires 7–14 days of healing. Your practitioner will explain exactly what to expect."
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
                "description": "Doctor-led laser treatments on Harley Street, London",
                "url": "https://cosmedocs.co.uk/treatments/laser-treatments/",
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
                  { "@type": "ListItem", "position": 3, "name": "Laser Treatments", "item": "https://cosmedocs.co.uk/treatments/laser-treatments/" }
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />

          <div className="page-container relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-[#C9A050] text-sm uppercase tracking-wider mb-4">Treatment Hub</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Laser Treatments
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                Advanced energy-based skin resurfacing & hair reduction
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                Our aesthetics is invisible art. Laser technology allows us to address concerns at a depth and precision that no other modality can achieve — from complete skin renewal to permanent hair reduction. Doctor-led, evidence-based, always tailored to you.
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

        {/* What Laser Treatments Include */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Laser Treatments Include</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Our laser treatment category brings together high-technology, energy-based therapies that use focused light to target specific skin layers and structures. Each laser type is selected for its unique wavelength and tissue interaction profile.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
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
                    <treatment.icon className="w-8 h-8 text-[#C9A050] mb-4" />
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C9A050] transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    <span className="inline-flex items-center text-[#C9A050] text-sm font-medium">
                      Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Who Are Laser Treatments For?</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Laser treatments may be suitable for individuals looking to address sun damage, acne scarring, fine lines, pigmentation irregularities, or unwanted hair. The right laser depends on your skin type, the depth of concern, and your tolerance for downtime.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  At Cosmedocs, every laser treatment begins with a thorough consultation. Our doctors assess your skin using clinical grading systems and select the appropriate laser technology, wavelength, and settings to match your goals safely.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Whether you're seeking a single transformative procedure like CO2 laser resurfacing or a gradual course of Pico laser sessions, our approach is always consultation-led, evidence-based, and tailored to your individual needs. Bold, natural, always your way.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach to Laser Safety</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Laser treatments demand expertise. The wrong settings on the wrong skin type can cause harm. That's why every laser procedure at Cosmedocs is performed or directly supervised by a doctor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Skin Assessment", desc: "Fitzpatrick typing and clinical evaluation before any laser treatment" },
                { title: "Doctor-Led", desc: "All laser procedures performed or supervised by qualified doctors" },
                { title: "Aftercare", desc: "Comprehensive post-treatment guidance and follow-up included" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-lg font-semibold mb-2 text-[#C9A050]">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 text-lg">Common questions about laser treatments at Cosmedocs</p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border border-white/10 rounded-xl px-6 bg-zinc-900/30">
                    <AccordionTrigger className="text-left text-white hover:text-[#C9A050] py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Before & After Teaser */}
        <section className="py-16 bg-accent border-y border-white/10">
          <div className="page-container text-center">
            <h2 className="text-2xl font-bold mb-4">See Real Results</h2>
            <p className="text-gray-400 mb-6">View before and after galleries for our laser treatments</p>
            <Button variant="outline" className="border-[#C9A050]/30 text-[#C9A050] hover:bg-[#C9A050]/10 rounded-full" asChild>
              <Link to="/before-after/">View Before & After Gallery <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Find the Right Laser Treatment for You</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                A consultation with our doctors will determine which laser technology is best suited to your skin type and concerns. We'll create a personalised treatment plan designed around your goals.
              </p>
              <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-10 py-6 text-lg font-semibold" asChild>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Your Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <p>Laser treatments at Cosmedocs Harley Street London offer advanced energy-based therapies for skin resurfacing, pigmentation correction, scar reduction, and permanent hair removal. Our doctor-led approach ensures every laser procedure is tailored to individual skin types and concerns. CO2 laser resurfacing provides the most powerful single-session skin renewal available, addressing deep wrinkles, sun damage, and skin laxity. Laser hair removal uses medical-grade diode and alexandrite lasers for long-term hair reduction across body and facial areas. Pico laser technology delivers ultra-short pulses to treat melasma, age spots, acne scarring, and tattoo removal with minimal disruption to surrounding tissue. All laser treatments at Cosmedocs are performed in our Harley Street clinic under direct medical supervision, following comprehensive skin assessment and Fitzpatrick typing protocols.</p>
      </div>
    </>
  );
};

export default LaserTreatmentsHub;
