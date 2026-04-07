import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Snowflake, Zap, Brain, Shield, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from "@/components/Breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function LaserHairRemoval() {
  const seoData = generateSEOMetadata(
    "Laser Hair Removal London | 50% Off First Session | From £15 | Cosmedocs Harley Street",
    "Advanced 3000W triple wavelength laser hair removal with AI skin-matching technology & -2°C cooling. 80-90% permanent reduction. Safe for all skin tones. 50% off first-time clients. Harley Street, London.",
    "/treatments/laser-hair-removal/"
  );

  const pricingFace = [
    { area: "Upper Lip", time: "10 min", price: "£20", course: "£100" },
    { area: "Chin", time: "10 min", price: "£25", course: "£125" },
    { area: "Full Face", time: "25 min", price: "£60", course: "£300" },
    { area: "Neck", time: "15 min", price: "£30", course: "£150" },
  ];

  const pricingBody = [
    { area: "Underarms", time: "15 min", price: "£30", course: "£150" },
    { area: "Half Arms", time: "25 min", price: "£60", course: "£300" },
    { area: "Full Arms", time: "35 min", price: "£80", course: "£400" },
    { area: "Half Legs", time: "30 min", price: "£80", course: "£400" },
    { area: "Full Legs", time: "45 min", price: "£100", course: "£500" },
    { area: "Chest (Men)", time: "30 min", price: "£60", course: "£300" },
    { area: "Full Back (Men)", time: "45 min", price: "£80", course: "£400" },
    { area: "Nipples / Snail Trail", time: "15 min", price: "£50", course: "£250" },
  ];

  const pricingIntimate = [
    { area: "Bikini Line", time: "15 min", price: "£30", course: "£150" },
    { area: "Brazilian", time: "25 min", price: "£60", course: "£300" },
    { area: "Hollywood", time: "30 min", price: "£70", course: "£350" },
    { area: "Buttocks", time: "20 min", price: "£50", course: "£250" },
    { area: "Perianal", time: "15 min", price: "£40", course: "£200" },
  ];

  const pricingPackages = [
    { area: "Full Body", time: "90 min", price: "£150", course: "£750" },
    { area: "Full Body + Face", time: "100 min", price: "£180", course: "£900" },
    { area: "Lower Body (Legs + Bikini)", time: "50 min", price: "£100", course: "£500" },
    { area: "Upper Body (Arms + Underarms + Back)", time: "50 min", price: "£100", course: "£500" },
  ];

  const faqs = [
    {
      question: "Does laser hair removal hurt?",
      answer: "With our -2°C contact cooling technology, most patients describe the sensation as a warm flick — far more comfortable than waxing. The cooling tip numbs the skin on contact, making treatment virtually painless even on sensitive areas."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most patients require 6–8 sessions spaced 4–8 weeks apart, depending on the treatment area and hair growth cycle. Our AI technology optimises settings each session to ensure maximum follicle targeting. Course pricing (5+1 FREE) offers the best value."
    },
    {
      question: "Is it suitable for all skin tones?",
      answer: "Yes. Our triple wavelength system (755nm, 808nm, 1064nm) is specifically designed to treat all skin types safely — from very fair to deep skin tones. The AI automatically calibrates power, pulse width, and wavelength ratio to match your unique skin and hair profile."
    },
    {
      question: "Are results permanent?",
      answer: "Laser hair removal provides 80–90% permanent reduction after a full course. Some fine or hormonal hair may regrow over time and can be addressed with occasional top-up sessions. Results are dramatically superior to shaving, waxing, or IPL."
    },
    {
      question: "What should I do before my appointment?",
      answer: "Shave the treatment area 24 hours before your session. Avoid waxing, plucking, or threading for 4 weeks prior. No fake tan or sun exposure for 2 weeks before treatment. Arrive with clean, product-free skin."
    },
    {
      question: "What happens after treatment?",
      answer: "Mild redness and warmth is normal for a few hours. Avoid sun exposure, hot baths, saunas, and exercise for 24–48 hours. Apply SPF 30+ daily. Hair will shed naturally over 1–3 weeks following treatment."
    },
    {
      question: "Why is the 3000W triple wavelength system superior?",
      answer: "Unlike single-wavelength machines, our 3000W system combines three wavelengths (Alexandrite 755nm, Diode 808nm, Nd:YAG 1064nm) to target hair at different depths and across all skin tones. The high power means faster pulses, shorter sessions, and more effective follicle destruction — all with built-in -2°C cooling for comfort."
    },
    {
      question: "What is a Course (5+1 FREE)?",
      answer: "Our course packages include 5 sessions plus 1 bonus session FREE. This is the most cost-effective way to achieve maximum reduction, as hair grows in cycles and multiple sessions are needed to target all follicles during their active growth phase."
    },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/laser-hair-removal/" data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/laser-hair-removal/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            {
              "@type": "MedicalBusiness",
              "name": "CosmeDocs",
              "url": "https://www.cosmedocs.com/",
              "telephone": "+44 20 3733 3227",
              "priceRange": "££",
              "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" },
              "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "156" }
            },
            {
              "@type": "MedicalProcedure",
              "name": "Laser Hair Removal",
              "alternateName": ["Permanent Hair Removal", "Diode Laser Hair Removal", "Triple Wavelength Laser"],
              "description": "Advanced 3000W triple wavelength laser hair removal with AI skin-matching technology and -2°C contact cooling for virtually painless permanent hair reduction.",
              "url": "https://www.cosmedocs.com/treatments/laser-hair-removal/",
              "procedureType": "NoninvasiveProcedure",
              "howPerformed": "Triple wavelength laser (755nm, 808nm, 1064nm) with AI-powered settings targeting hair follicles during their active growth phase.",
              "preparation": "Shave treatment area 24 hours before. Avoid waxing, plucking, sun exposure, and fake tan for 2-4 weeks prior.",
              "followup": "Apply SPF 30+ daily. Avoid sun, heat treatments, and exercise for 24-48 hours."
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
                { "@type": "ListItem", "position": 2, "name": "Laser Treatments", "item": "https://www.cosmedocs.com/treatments/laser-treatments/" },
                { "@type": "ListItem", "position": 3, "name": "Laser Hair Removal", "item": "https://www.cosmedocs.com/treatments/laser-hair-removal/" }
              ]
            }
          ] })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Laser Treatments', path: '/treatments/laser-treatments/' }]} currentPage="Laser Hair Removal" />
            <div className="pt-12 pb-4 flex flex-col lg:flex-row items-start gap-10">
              <div className="max-w-2xl">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 bg-[#C9A050]/10 border border-[#C9A050]/20 rounded-full px-4 py-1.5 mb-6">
                    <Sparkles className="w-4 h-4 text-[#C9A050]" />
                    <span className="text-[#C9A050] text-sm font-medium">50% Off First-Time Clients</span>
                  </div>
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Laser Hair <span className="text-[#C9A050] font-light">Removal</span>
                  </h1>
                  <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mb-4">
                    London's most advanced 3000W triple wavelength laser with -2°C cooling — virtually painless, safe for all skin tones, 80–90% permanent reduction.
                  </p>
                  <p className="text-sm text-white/30 font-extralight">
                    AI-powered skin matching automatically calibrates power settings to your hair type and skin tone for optimal results every session.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £15</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />-2°C Painless Tech</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />All Skin Tones</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-8">
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20">
                    Book Now — 50% Off <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="space-y-16">

            {/* Technology Section */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                  3000W Triple <span className="text-[#C9A050] font-light">Wavelength</span> Technology
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4 text-white/50 text-sm leading-relaxed font-light">
                    <p>
                      Our advanced laser combines three wavelengths — Alexandrite (755nm), Diode (808nm), and Nd:YAG (1064nm) — in a single handpiece. This means every pulse targets hair at multiple depths simultaneously, delivering faster results across all skin tones.
                    </p>
                    <p>
                      Built-in AI technology analyses your skin and hair type in real time, automatically adjusting power, pulse duration, and wavelength ratio for maximum efficacy and safety. No guesswork — just precision.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center p-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                        <Zap className="w-5 h-5 text-[#C9A050] mx-auto mb-2" />
                        <p className="text-white/70 text-xs font-medium">3000W Power</p>
                      </div>
                      <div className="text-center p-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                        <Snowflake className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                        <p className="text-white/70 text-xs font-medium">-2°C Cooling</p>
                      </div>
                      <div className="text-center p-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                        <Brain className="w-5 h-5 text-[#C9A050] mx-auto mb-2" />
                        <p className="text-white/70 text-xs font-medium">AI Matching</p>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-sm mx-auto">
                    <img
                      src="/images/treatments/laser-triple-wavelength-diagram.jpg"
                      alt="Triple wavelength laser targeting hair follicle — 755nm, 808nm, and 1064nm wavelengths"
                      className="w-full h-auto rounded-2xl border border-white/[0.08]"
                      loading="lazy"
                      width={1024}
                      height={640}
                    />
                    <p className="text-xs text-white/20 mt-2 text-center italic">Three wavelengths targeting hair at every depth</p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Why Laser Over Shaving */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <div className="grid md:grid-cols-[1fr_200px] gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                      Ditch the <span className="text-[#C9A050] font-light">Razor</span> 🪒→✨
                    </h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { bad: "Shaving", issue: "Stubble in 24 hours, razor burn, ingrown hairs" },
                        { bad: "Waxing", issue: "Painful, temporary, grows back coarser" },
                        { bad: "IPL devices", issue: "Low power, slow results, limited skin tones" },
                        { bad: "Threading", issue: "Small areas only, painful, weekly sessions" },
                      ].map((item) => (
                        <div key={item.bad} className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                          <p className="text-white/70 text-sm font-medium mb-1 line-through decoration-red-400/50">{item.bad}</p>
                          <p className="text-white/30 text-xs">{item.issue}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-[#C9A050]/5 rounded-xl border border-[#C9A050]/20">
                      <p className="text-[#C9A050] text-sm font-medium mb-1">✨ Laser Hair Removal</p>
                      <p className="text-white/50 text-xs">80–90% permanent reduction. No ingrown hairs. No stubble. Smooth skin that lasts.</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img
                      src="/images/treatments/ditch-the-razor.jpg"
                      alt="Ditch the razor — celebrate smooth skin with laser hair removal"
                      className="w-full h-auto rounded-2xl"
                      loading="lazy"
                      width={640}
                      height={640}
                    />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Cooling Technology */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <div className="grid md:grid-cols-[160px_1fr] gap-8 items-center">
                  <div className="hidden md:block">
                    <img
                      src="/images/treatments/laser-cooling-tech.jpg"
                      alt="-2°C contact cooling technology for painless laser treatment"
                      className="w-full h-auto rounded-2xl"
                      loading="lazy"
                      width={640}
                      height={640}
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                      -2°C <span className="text-blue-400 font-light">Cooling</span> = Painless
                    </h2>
                    <div className="w-10 h-px bg-blue-400/40 mb-6" />
                    <p className="text-white/50 text-sm leading-relaxed font-light">
                      The integrated sapphire cooling tip maintains -2°C contact with your skin throughout treatment, numbing the area before each pulse fires. Most patients describe the sensation as a warm flick — far more comfortable than waxing. Even sensitive areas like the bikini line and upper lip are manageable.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Pricing Tables */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                  Transparent <span className="text-[#C9A050] font-light">Pricing</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-4" />
                <p className="text-white/40 text-sm mb-2 font-light">Harley Street quality. First-time clients: <span className="text-[#C9A050]">50% off</span> any treatment below.</p>
                <p className="text-white/25 text-xs mb-8">Course = 5 sessions + 1 FREE</p>

                {/* Face & Neck */}
                <div className="mb-10">
                  <h3 className="text-lg font-light text-white/80 mb-4">👄 Face & Neck</h3>
                  <PricingTable items={pricingFace} />
                </div>

                {/* Body */}
                <div className="mb-10">
                  <h3 className="text-lg font-light text-white/80 mb-4">✨ Body Areas</h3>
                  <PricingTable items={pricingBody} />
                </div>

                {/* Intimate */}
                <div className="mb-10">
                  <h3 className="text-lg font-light text-white/80 mb-4">🌟 Intimate Areas</h3>
                  <PricingTable items={pricingIntimate} />
                </div>

                {/* Packages */}
                <div>
                  <h3 className="text-lg font-light text-white/80 mb-4">👑 Value Packages</h3>
                  <PricingTable items={pricingPackages} />
                </div>

                <div className="mt-6 text-center">
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-3 font-medium text-sm transition-all duration-300">
                    Book 50% Off — Takes 1 Minute <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-white/20 text-xs mt-2">*50% off for first-time clients. No code needed.</p>
                </div>
              </motion.div>
            </section>

            {/* Treatment Journey */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                  Your Treatment <span className="text-[#C9A050] font-light">Journey</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-8" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { step: "01", title: "Free Consultation", desc: "Skin assessment, patch test, and personalised plan" },
                    { step: "02", title: "AI Calibration", desc: "Machine matches wavelength and power to your hair and skin" },
                    { step: "03", title: "Treatment", desc: "Fast, painless pulses with -2°C cooling throughout" },
                    { step: "04", title: "Smooth Results", desc: "Hair sheds over 1–3 weeks. Repeat every 4–8 weeks" },
                  ].map((item) => (
                    <div key={item.step} className="p-5 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                      <span className="text-[#C9A050] text-xs font-medium">{item.step}</span>
                      <h3 className="text-white/80 text-sm font-medium mt-2 mb-1">{item.title}</h3>
                      <p className="text-white/30 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Results Timeline */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                  Results <span className="text-[#C9A050] font-light">Timeline</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="space-y-3">
                  {[
                    { session: "Session 1–2", result: "20–30% reduction. Fine hairs begin shedding." },
                    { session: "Session 3–4", result: "50–60% reduction. Noticeably thinner regrowth." },
                    { session: "Session 5–6", result: "70–80% reduction. Patchy, sparse regrowth only." },
                    { session: "Session 6–8+", result: "80–90% permanent reduction. Maintenance only." },
                  ].map((item) => (
                    <div key={item.session} className="flex items-start gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/[0.04]">
                      <span className="text-[#C9A050] text-sm font-medium whitespace-nowrap min-w-[100px]">{item.session}</span>
                      <p className="text-white/50 text-sm font-light">{item.result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Safety */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                  Safe for <span className="text-[#C9A050] font-light">All Skin Tones</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/50 text-sm leading-relaxed font-light mb-4">
                  The triple wavelength system is specifically engineered for Fitzpatrick skin types I–VI. The Nd:YAG 1064nm wavelength safely bypasses melanin in darker skin tones, while the Alexandrite 755nm provides maximum absorption for lighter skin with dark hair. AI calibration ensures the right combination every time.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Fitzpatrick I–VI", "PCOS hair growth", "Hormonal hair", "Ingrown hair relief", "Post-waxing transition"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-xs text-white/50">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Before & After CTA */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <Link to="/before-after/laser-hair-removal/" className="block p-6 bg-white/[0.03] rounded-2xl border border-white/[0.08] hover:border-[#C9A050]/30 transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#C9A050] text-sm font-medium mb-1">Before & After Gallery</p>
                      <p className="text-white/50 text-sm font-light">See real laser hair removal results from our Harley Street clinic</p>
                    </div>
                    <div className="relative">
                      <span className="animate-pulse w-3 h-3 rounded-full bg-[#C9A050] inline-block" />
                      <ArrowRight className="w-5 h-5 text-[#C9A050] ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </section>

            {/* FAQs */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                  Frequently Asked <span className="text-[#C9A050] font-light">Questions</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border border-white/[0.08] rounded-xl px-5 bg-white/[0.02]">
                      <AccordionTrigger className="text-left text-white/80 hover:text-[#C9A050] py-4 text-sm font-light">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-white/40 text-sm leading-relaxed pb-4 font-light">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </section>

            {/* Aftercare */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                  Aftercare <span className="text-[#C9A050] font-light">Tips</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: <Shield className="w-4 h-4" />, tip: "Apply SPF 30+ daily to treated areas" },
                    { icon: <Snowflake className="w-4 h-4" />, tip: "Avoid hot baths, saunas, and steam for 48 hours" },
                    { icon: <Clock className="w-4 h-4" />, tip: "No exercise for 24 hours post-treatment" },
                    { icon: <CheckCircle className="w-4 h-4" />, tip: "Shaving between sessions is fine — no waxing or plucking" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/[0.04]">
                      <div className="text-[#C9A050]/70">{item.icon}</div>
                      <p className="text-white/50 text-sm font-light">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Final CTA */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                className="text-center p-10 bg-gradient-to-b from-[#C9A050]/5 to-transparent rounded-2xl border border-[#C9A050]/10">
                <h2 className="text-3xl font-extralight text-white mb-3">Ready to Ditch the Razor? 🪒→✨</h2>
                <p className="text-white/40 text-sm mb-6">Book online in just 1 minute. Free consultation included.</p>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-10 py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20">
                  Book 50% Off Now <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

function PricingTable({ items }: { items: { area: string; time: string; price: string; course: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-white/[0.06]">
            <TableHead className="text-white/40 text-xs">Area</TableHead>
            <TableHead className="text-white/40 text-xs">Duration</TableHead>
            <TableHead className="text-white/40 text-xs">Per Session</TableHead>
            <TableHead className="text-white/40 text-xs">Course (5+1 FREE)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.area} className="border-white/[0.04] hover:bg-white/[0.02]">
              <TableCell className="text-white/70 text-sm font-light">{item.area}</TableCell>
              <TableCell className="text-white/40 text-sm font-light">{item.time}</TableCell>
              <TableCell className="text-[#C9A050] text-sm font-medium">{item.price}</TableCell>
              <TableCell className="text-white/50 text-sm font-light">{item.course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
