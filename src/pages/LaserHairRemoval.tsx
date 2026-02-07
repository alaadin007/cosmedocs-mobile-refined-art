import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, CheckCircle, Clock, Shield, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

export default function LaserHairRemoval() {
  const seoData = generateSEOMetadata(
    "Laser Hair Removal | Medical-Grade Hair Reduction | Cosmedocs Harley Street",
    "Medical-grade laser hair removal at Cosmedocs Harley Street. Long-term hair reduction for face and body using advanced diode laser technology. Doctor-led consultations with personalised treatment plans.",
    "/treatments/laser-hair-removal/"
  );

  const treatedAreas = [
    "Upper Lip", "Chin", "Jawline", "Neck", "Underarms", "Arms",
    "Bikini Line", "Brazilian", "Legs (Full)", "Legs (Lower)",
    "Back", "Chest", "Shoulders", "Stomach"
  ];

  const benefits = [
    { title: "Long-Term Reduction", desc: "Progressive hair reduction with each session, targeting follicles during active growth phase" },
    { title: "Precision", desc: "Targets dark, coarse hair whilst leaving surrounding skin undamaged" },
    { title: "Speed", desc: "Large areas like legs or back can be treated efficiently in a single session" },
    { title: "Reduced Ingrown Hairs", desc: "Eliminates the cycle of shaving, waxing, and ingrown hair formation" }
  ];

  const faqs = [
    {
      question: "How does laser hair removal work?",
      answer: "The laser emits a concentrated beam of light that is absorbed by the melanin (pigment) in hair follicles. This light energy converts to heat, damaging the follicle and inhibiting future hair growth. Because hair grows in cycles, multiple sessions are needed to target all follicles during their active growth phase."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most patients require 6–8 sessions spaced 4–8 weeks apart, depending on the treatment area and individual hair growth patterns. Some areas may need occasional maintenance sessions thereafter. Your practitioner will outline a realistic timeline during your consultation."
    },
    {
      question: "Is it suitable for all skin types?",
      answer: "Modern laser technology can treat a range of skin types, though the best results are typically seen in patients with a contrast between hair colour and skin tone. During your consultation, our doctors assess your Fitzpatrick skin type and select appropriate laser settings to ensure safety and efficacy."
    },
    {
      question: "Does it hurt?",
      answer: "Most patients describe the sensation as a mild rubber band snap. Discomfort varies by area — more sensitive zones like the bikini line may feel more intense. Cooling technology integrated into the laser handpiece helps minimise discomfort during treatment."
    },
    {
      question: "What aftercare is needed?",
      answer: "Avoid sun exposure, fake tan, and heat treatments (saunas, hot baths) for 48 hours after treatment. Apply SPF 30+ daily to treated areas. Avoid waxing or plucking between sessions — shaving is permitted. Your practitioner will provide full aftercare instructions."
    },
    {
      question: "Are results permanent?",
      answer: "Laser hair removal provides long-term hair reduction rather than permanent removal. After a full course, most patients experience 70–90% reduction in hair growth. Some fine or hormonal hair may regrow over time and can be addressed with occasional maintenance sessions."
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Laser Hair Removal",
            "description": "Medical-grade laser hair removal for long-term hair reduction",
            "procedureType": "NoninvasiveProcedure",
            "body": { "@type": "AnatomicalStructure", "name": "Skin and hair follicles" },
            "provider": {
              "@type": "MedicalBusiness",
              "name": "CosmeDocs",
              "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF" }
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
          <div className="page-container relative z-10 py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <Link to="/treatments/laser-treatments/" className="inline-flex items-center text-[#C9A050] text-sm mb-4 hover:underline">
                ← Laser Treatments
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Laser Hair Removal</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Medical-grade laser technology for long-term hair reduction across the face and body. Precise, effective, and tailored to your skin type.
              </p>
              <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-8 py-6 text-lg font-semibold" asChild>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What Is Laser Hair Removal?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Laser hair removal is a medical aesthetic procedure that uses concentrated light energy to target and disable hair follicles. The laser selectively heats melanin within the hair shaft, damaging the follicle's ability to produce new hair without affecting the surrounding skin.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                At Cosmedocs, we use advanced diode laser systems that incorporate built-in cooling technology for patient comfort. Each session progressively reduces hair density, with most patients achieving significant, long-lasting reduction after a full course of treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Laser Hair Removal</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C9A050] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{b.title}</h3>
                    <p className="text-gray-400 text-sm">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-8 text-center">Treatment Areas</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {treatedAreas.map((area) => (
                <span key={area} className="px-4 py-2 bg-zinc-900/50 border border-white/10 rounded-full text-sm text-gray-300">{area}</span>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>Your journey begins with a consultation where our practitioners assess your skin type, hair colour, and treatment goals. A patch test may be performed to confirm appropriate laser settings.</p>
                <p>During treatment, the laser handpiece is passed over the skin in a systematic pattern. Most patients describe a mild snapping sensation accompanied by a cooling burst. Treatment duration varies from 15 minutes for small areas to 60 minutes for larger zones.</p>
                <p>After treatment, mild redness and warmth in the treated area is normal and typically subsides within a few hours. Results become progressively visible with each session as hair density decreases.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border border-white/10 rounded-xl px-6 bg-zinc-900/30">
                    <AccordionTrigger className="text-left text-white hover:text-[#C9A050] py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-400 leading-relaxed pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="page-container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Hair-Free Journey?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Book a consultation to discuss your goals and receive a personalised laser hair removal plan tailored to your skin type and treatment areas.
            </p>
            <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-10 py-6 text-lg font-semibold" asChild>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
            </Button>
          </div>
        </section>
      </div>

      <div className="sr-only" aria-hidden="true">
        <p>Laser hair removal at Cosmedocs Harley Street London uses medical-grade diode laser technology for long-term hair reduction across face and body areas including upper lip chin underarms bikini legs back and chest. Our doctor-led consultations ensure appropriate Fitzpatrick skin typing and laser parameter selection for safe effective treatment. Most patients achieve 70 to 90 percent hair reduction after 6 to 8 sessions. Cosmedocs laser hair removal is suitable for a range of skin types with built-in cooling technology for patient comfort during treatment.</p>
      </div>
    </>
  );
}
