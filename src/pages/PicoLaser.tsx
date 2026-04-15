import React from 'react';
import { Helmet } from 'react-helmet-async';
import FAQSchema from '@/components/seo/FAQSchema';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

export default function PicoLaser() {
  const seoData = generateSEOMetadata(
    "Pico Laser | Pigmentation, Scarring & Tattoo Removal | Cosmedocs Harley Street",
    "Pico laser treatment at Cosmedocs Harley Street for pigmentation, melasma, acne scarring, and tattoo removal. Ultra-short pulse technology with minimal downtime. Doctor-led consultations.",
    "/treatments/pico-laser/"
  );

  const treatsConditions = [
    "Age Spots & Sun Damage", "Melasma", "Post-Inflammatory Hyperpigmentation",
    "Acne Scarring", "Enlarged Pores", "Tattoo Removal",
    "Uneven Skin Tone", "Fine Lines"
  ];

  const benefits = [
    { title: "Ultra-Short Pulses", desc: "Picosecond technology shatters pigment into microscopic particles for faster clearance" },
    { title: "Minimal Downtime", desc: "Most patients experience only mild redness for 24–48 hours after treatment" },
    { title: "Versatile", desc: "Treats pigmentation, scarring, and tattoo ink across multiple skin tones" },
    { title: "Collagen Stimulation", desc: "The photomechanical effect triggers natural collagen remodelling for improved texture" }
  ];

  const faqs = [
    {
      question: "What is Pico laser?",
      answer: "Pico laser delivers energy in ultra-short bursts measured in picoseconds (trillionths of a second). This creates a photomechanical rather than photothermal effect, shattering pigment particles and stimulating collagen without excessive heat damage. This makes it safer across a broader range of skin types."
    },
    {
      question: "How many sessions are needed?",
      answer: "For pigmentation concerns, 2–4 sessions are typically recommended. Acne scarring may require 3–6 sessions. Tattoo removal varies significantly based on ink colour, density, and depth — often requiring 6–12 sessions. Your doctor will outline a realistic treatment plan during consultation."
    },
    {
      question: "Is Pico laser suitable for darker skin tones?",
      answer: "Yes. Because Pico laser relies primarily on a photomechanical effect rather than heat, it carries a lower risk of post-inflammatory hyperpigmentation compared to traditional Q-switched lasers. However, a thorough skin assessment is essential, and your doctor will determine suitability during consultation."
    },
    {
      question: "What does the treatment feel like?",
      answer: "Most patients describe a mild prickling or rubber band sensation during treatment. The speed of picosecond pulses means the sensation is brief. Topical anaesthetic may be applied for more sensitive areas or tattoo removal sessions."
    },
    {
      question: "What is the downtime?",
      answer: "Downtime is minimal. Mild redness and slight swelling may occur for 24–48 hours. For pigmentation treatments, darkening of targeted spots is normal before they flake off naturally over 5–10 days. You can typically return to normal activities the same day."
    },
    {
      question: "Can Pico laser treat melasma?",
      answer: "Pico laser can be used as part of a comprehensive melasma management strategy. Its low-energy toning mode may help reduce pigmentation without triggering rebound hyperpigmentation. However, melasma is a chronic condition and results vary. Your doctor will discuss realistic expectations and complementary approaches."
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
            "name": "Pico Laser Treatment",
            "description": "Ultra-short pulse laser for pigmentation, scarring, and tattoo removal",
            "procedureType": "NoninvasiveProcedure",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "CosmeDocs",
              "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF" }
            }
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />

      <div className="bg-black text-white">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent" />
          <div className="page-container relative z-10 py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <Link to="/treatments/laser-treatments/" className="inline-flex items-center text-[#C9A050] text-sm mb-4 hover:underline">
                ← Laser Treatments
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Pico Laser</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Ultra-short pulse laser technology for pigmentation, acne scarring, and tattoo removal with minimal downtime.
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
              <h2 className="text-3xl font-bold mb-6">What Is Pico Laser?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Pico laser is an advanced laser system that delivers energy in picosecond pulses — a thousand times shorter than traditional nanosecond lasers. This ultra-rapid delivery creates a predominantly photomechanical effect, breaking down pigment particles and stimulating collagen without excessive thermal damage.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                This mechanism makes Pico laser particularly effective for treating stubborn pigmentation, melasma, acne scarring, and tattoo ink across a wider range of skin types than older laser technologies. The reduced heat generation also means less downtime and a lower risk of complications.
              </p>
            </div>
          </div>
        </section>

        {/* What It Treats */}
        <section className="py-20">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-8 text-center">What Pico Laser Treats</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {treatsConditions.map((condition) => (
                <span key={condition} className="px-4 py-2 bg-zinc-900/50 border border-white/10 rounded-full text-sm text-gray-300">{condition}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-accent border-y border-white/10">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
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

        {/* What to Expect */}
        <section className="py-20">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>Your Pico laser journey starts with a thorough consultation where your doctor assesses your skin concern, type, and medical history. A treatment plan is created based on the specific condition being addressed.</p>
                <p>During treatment, you may feel a mild prickling sensation. Sessions typically last 15–30 minutes depending on the area and concern. Topical anaesthetic may be applied for comfort, particularly for tattoo removal.</p>
                <p>Immediately after treatment, mild redness and slight swelling are normal. For pigmentation, treated spots may darken temporarily before naturally shedding over 5–10 days, revealing clearer skin beneath.</p>
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
            <h2 className="text-3xl font-bold mb-6">Discover What Pico Laser Can Do for You</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Book a consultation to discuss your pigmentation, scarring, or tattoo removal goals. Our doctors will assess your skin and recommend the most appropriate Pico laser protocol.
            </p>
            <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-10 py-6 text-lg font-semibold" asChild>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
            </Button>
          </div>
        </section>
      </div>

      <div className="sr-only" aria-hidden="true">
        <p>Pico laser treatment at Cosmedocs Harley Street London delivers ultra-short picosecond pulses for effective treatment of pigmentation melasma age spots sun damage acne scarring enlarged pores and tattoo removal. The photomechanical effect shatters pigment particles into microscopic fragments whilst stimulating natural collagen remodelling. Pico laser is suitable for a broader range of skin types including darker skin tones due to its reduced thermal profile compared to traditional Q-switched lasers. Doctor-led consultations ensure personalised treatment plans with realistic expectations for each patient's specific concern.</p>
      </div>
    </>
  );
}
