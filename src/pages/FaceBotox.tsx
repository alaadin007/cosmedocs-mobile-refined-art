import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from '@/utils/seo';
import { Clock, Award, Calendar, MapPin, CheckCircle, Star, ArrowRight, Shield, Heart, Check, Activity, Syringe, GraduationCap, Stethoscope, MessageCircle, Sparkles, Building, Users, Phone } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';
import BotoxSidebar from '@/components/botox/BotoxSidebar';

export default function FaceBotox() {
  const seoData = generateSEOMetadata(
    "Botox | Anti-Wrinkle Treatment Guide | Cosmedocs Harley Street",
    "Complete guide to Botox. Learn what Botox is, how it works, treatment areas, results timeline, and how to choose the right clinic. Doctor-led care at Harley Street.",
    "/treatments/botox/"
  );

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "image": ["https://www.cosmedocs.co.uk/default-og-image.jpg"],
    "url": "https://www.cosmedocs.co.uk",
    "telephone": "+44 20 3733 3227",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 20 3733 3227",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "10:00", "closes": "16:00" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Botox and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "Botox (botulinum toxin type A) is a purified protein that temporarily relaxes targeted facial muscles by blocking nerve signals. This reduces the appearance of dynamic wrinkles caused by repeated facial expressions. The treatment has been safely used for over 30 years in both medical and cosmetic applications." } },
      { "@type": "Question", "name": "Who is a suitable candidate for Botox?", "acceptedAnswer": { "@type": "Answer", "text": "Botox is suitable for adults aged 18 and over. It works well for those in their mid-20s to 30s seeking preventative treatment, as well as those with established lines seeking corrective treatment. Botox is not recommended during pregnancy or breastfeeding." } },
      { "@type": "Question", "name": "How long do Botox results last?", "acceptedAnswer": { "@type": "Answer", "text": "Botox results typically last 3-6 months. Initial effects appear within 3-5 days, with full results visible at 10-14 days. Duration varies based on individual metabolism, treatment area, and dosage used." } },
      { "@type": "Question", "name": "What is the difference between Botox and fillers?", "acceptedAnswer": { "@type": "Answer", "text": "Botox relaxes muscles to reduce dynamic wrinkles (lines that appear with movement). Dermal fillers add volume to restore lost facial fullness and soften static lines. Many patients benefit from combining both treatments for comprehensive facial rejuvenation." } },
      { "@type": "Question", "name": "How do I choose a Botox clinic in London?", "acceptedAnswer": { "@type": "Answer", "text": "Look for doctor-led clinics with qualified medical practitioners, transparent pricing, proper consultation processes, and strong patient reviews. Check for CQC registration and ensure practitioners have specific training in facial aesthetics." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "Upper Face", areas: ["Forehead Lines", "Frown Lines (Glabella)", "Crow's Feet", "Brow Lift"], description: "The most common Botox treatment areas, addressing lines caused by facial expressions." },
    { title: "Mid & Lower Face", areas: ["Bunny Lines", "Lip Flip", "Gummy Smile", "Chin Dimpling"], description: "Refined treatments for the nose, lips, and chin areas." },
    { title: "Jawline & Neck", areas: ["Masseter (Jaw Slimming)", "Nefertiti Lift", "Platysmal Bands"], description: "Contouring and lifting treatments for the lower face and neck." },
    { title: "Specialist", areas: ["Trap Tox (Shoulders)", "Hyperhidrosis", "Migraines"], description: "Therapeutic and body applications beyond cosmetic use." }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="keywords" content="botox london, botox in london, london botox, botox london harley street, botox in harley street, baby botox london, botox clinic london, best botox london, best botox in london, botox cost london, how much does botox cost, botulinum toxin injections, anti-wrinkle injections london, cosmetic botox, preventative botox, botox for men, facial rejuvenation london" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-black overflow-x-hidden">
        {/* Breadcrumbs — Standard position under header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }]} currentPage="Botox" />
        </div>

        {/* ═══════════════════════════════════════════
            HERO — Two-column, homepage style
        ═══════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-4">
          {/* Flowing gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,160,80,0.12) 0%, rgba(201,160,80,0.04) 40%, transparent 70%)' }}
              animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(201,160,80,0.06) 50%, transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left — Content */}
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/70 mb-6 border border-white/10">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, London W1G 9PF
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.1] tracking-tight">
                    The art of
                    <span className="block font-semibold text-[#C9A050]">invisible anti-wrinkle</span>
                  </h1>

                  <p className="text-lg md:text-xl text-white/60 mb-4 max-w-xl leading-relaxed font-light">
                    Your comprehensive guide to Botox. Understanding how it works, what to expect, and achieving results so natural they're undetectable.
                  </p>
                  <p className="text-base text-white/50 mb-10 max-w-xl leading-relaxed font-light">
                    At CosmeDocs, anti-wrinkle treatments are practised with restraint and precision. GMC-registered doctors deliver subtle, doctor-led care designed to refresh — never overwhelm. Since 2007, we've focused on natural results that look effortless, not obvious.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                    className="group bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20"
                  >
                    Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium border border-white/20"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Ask AI Doctor
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-16 flex flex-wrap gap-8 text-sm text-white/50">
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> GMC Registered</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> 17+ Years</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> 4.9 Rating</span>
                </motion.div>
              </div>

              {/* Right — Concentric gold circles + floating elements */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  {/* Concentric circles — matching reference */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[420px] h-[420px] rounded-full border border-[#C9A050]/10" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[340px] h-[340px] rounded-full border border-[#C9A050]/15" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[260px] h-[260px] rounded-full border border-[#C9A050]/20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#C9A050]/15 to-[#C9A050]/5" />
                  </div>

                  {/* Floating "Trusted Clinic" badge */}
                  <motion.div
                    className="absolute top-8 right-0 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/30 border border-white/10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A050] flex items-center justify-center"><Star className="h-5 w-5 text-black fill-black" /></div>
                      <div>
                        <div className="text-sm font-semibold text-white">Trusted Clinic</div>
                        <div className="text-xs text-white/60">Since 2007</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Review teaser card */}
                  <motion.div
                    className="absolute bottom-16 -left-4 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl shadow-black/30 border border-white/10 max-w-[300px]"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-xs font-bold">E</div>
                      <div>
                        <div className="text-sm font-medium text-white">Emma T.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">"My friends keep asking what skincare I'm using because I look so refreshed but no one can tell I've had anything done!"</p>
                    <Link to="/testimonials" className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-2 hover:underline">More real experiences</Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MAIN CONTENT — Two-column layout
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* LEFT — Educational Content */}
            <div className="space-y-16">
              {/* Quick Nav */}
              <nav className="flex flex-wrap gap-3 text-sm">
                {["What is Botox?", "How It Works", "Treatment Areas", "Who Is Suitable?", "Results", "Choosing a Clinic", "FAQs"].map((label) => (
                  <a key={label} href={`#${label.toLowerCase().replace(/[^a-z]+/g, '-')}`} className="text-white/40 hover:text-[#C9A050] transition-colors">
                    {label}
                  </a>
                ))}
              </nav>

              {/* What is Botox */}
              <section id="what-is-botox-">
                <SectionHeading>What is Botox?</SectionHeading>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/70 text-lg mb-6">
                    Botox is the brand name for botulinum toxin type A, a purified protein derived from
                    the bacterium <em>Clostridium botulinum</em>. When injected in controlled, tiny doses,
                    it temporarily relaxes targeted muscles by blocking nerve signals.
                  </p>
                  <p className="text-white/60 mb-6">
                    Originally developed for medical conditions like muscle spasms and crossed eyes,
                    Botox gained <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">FDA approval</a> for
                    cosmetic use in 2002. Today, it's the world's most popular non-surgical aesthetic treatment.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Key Facts</h3>
                    <ul className="space-y-3 text-white/60">
                      {["Over 30 years of clinical use with an excellent safety record", "Approved by the FDA, MHRA, and regulatory bodies worldwide", "Treatment takes 10-20 minutes with no downtime", "Effects are temporary and fully reversible"].map((fact) => (
                        <li key={fact} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#C9A050] mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-white/60">
                    The term "Botox" is often used generically, but several brands exist including
                    Azzalure, Bocouture, and Dysport. At Cosmedocs, we use premium, licensed products
                    to ensure consistent, predictable results.
                  </p>
                </div>
              </section>

              {/* How It Works */}
              <section id="how-it-works">
                <SectionHeading>How Botox Works</SectionHeading>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { step: "1", title: "Injection", desc: "Small amounts are precisely injected into targeted muscles using ultra-fine needles." },
                    { step: "2", title: "Nerve Block", desc: "Botox blocks the release of acetylcholine, preventing nerve signals from reaching muscles." },
                    { step: "3", title: "Muscle Relaxation", desc: "Targeted muscles relax, smoothing overlying skin and reducing wrinkle appearance." },
                  ].map((s) => (
                    <div key={s.step} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                      <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold text-[#C9A050]">{s.step}</span>
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                      <p className="text-white/50 text-sm">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 mb-4">
                  Dynamic wrinkles form from repeated muscle contractions over years — think of the
                  lines that appear when you frown or squint. By temporarily relaxing these muscles,
                  Botox softens existing lines and prevents new ones from forming.
                </p>
                <p className="text-white/60">
                  The key to natural results lies in precise dosing and placement. A skilled practitioner
                  relaxes the muscles causing wrinkles whilst preserving natural facial expression.
                </p>
              </section>

              {/* Treatment Areas */}
              <section id="treatment-areas">
                <SectionHeading>Botox Treatment Areas</SectionHeading>
                <p className="text-white/60 mb-8">
                  Botox can address various areas of the face and body. Each area requires different techniques and dosing for optimal results.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {treatmentAreaCards.map((card) => (
                    <div key={card.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#C9A050]/30 transition-colors">
                      <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-white/50 text-sm mb-3">{card.description}</p>
                      <ul className="space-y-1.5">
                        {card.areas.map((area) => (
                          <li key={area} className="flex items-center gap-2 text-sm text-white/60">
                            <Check className="w-3.5 h-3.5 text-[#C9A050]" /> {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { label: "Jaw Slimming", to: "/treatments/masseter-botox/" },
                    { label: "Lip Flip", to: "/treatments/lip-flip/" },
                    { label: "Oily Skin Botox", to: "/treatments/oily-skin-botox/" },
                  ].map((link) => (
                    <Link key={link.label} to={link.to} className="px-4 py-2 bg-white/5 hover:bg-[#C9A050]/10 border border-white/10 hover:border-[#C9A050]/30 rounded-full text-sm text-white/60 hover:text-[#C9A050] transition-all">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>

              {/* Who is Suitable */}
              <section id="who-is-suitable-">
                <SectionHeading>Who is Suitable for Botox?</SectionHeading>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#C9A050]/20 rounded-full p-2"><Sparkles className="w-5 h-5 text-[#C9A050]" /></div>
                      <h3 className="text-lg font-semibold text-white">Preventative Botox</h3>
                    </div>
                    <p className="text-white/60 text-sm mb-3">For those in their mid-20s to early 30s with minimal lines. Prevents wrinkles from forming by stopping repetitive muscle movements before they create permanent creases.</p>
                    <p className="text-xs text-white/40"><strong className="text-[#C9A050]">Best for:</strong> Those noticing early dynamic lines with facial expressions.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#C9A050]/20 rounded-full p-2"><Activity className="w-5 h-5 text-[#C9A050]" /></div>
                      <h3 className="text-lg font-semibold text-white">Corrective Botox</h3>
                    </div>
                    <p className="text-white/60 text-sm mb-3">For established lines and wrinkles at rest. Softens existing creases and prevents them from deepening further. May be combined with other treatments.</p>
                    <p className="text-xs text-white/40"><strong className="text-[#C9A050]">Best for:</strong> Those with visible lines at rest seeking to refresh their appearance.</p>
                  </div>
                </div>

                {/* Age ranges */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Age Considerations</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { age: "20s-30s", text: "Preventative treatment. Low doses to slow early dynamic lines. Focus on preserving natural expression." },
                      { age: "40s-50s", text: "Corrective treatment. Moderate doses to soften established lines. Often combined with fillers for volume." },
                      { age: "60s+", text: "Part of comprehensive rejuvenation. Works alongside other treatments to refresh appearance naturally." },
                    ].map((a) => (
                      <div key={a.age}>
                        <p className="text-[#C9A050] font-semibold mb-2">{a.age}</p>
                        <p className="text-white/50 text-sm">{a.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Botox for Men */}
              <section>
                <SectionHeading>Botox for Men</SectionHeading>
                <p className="text-white/60 mb-6">
                  Male Botox treatments have seen significant growth. Men typically seek treatment to maintain a
                  competitive professional appearance whilst looking refreshed, not "done."
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Higher Dosage Required", desc: "Men typically have larger, stronger facial muscles requiring 25-40% more product for equivalent results." },
                      { title: "Masculine Aesthetics", desc: "Treatment is tailored to preserve masculine features — strong brows, defined forehead — whilst reducing lines." },
                      { title: "Different Goals", desc: "Most men want to look less tired or stressed, not younger. Subtle treatment achieves this naturally." },
                      { title: "Discreet Results", desc: "The goal is undetectable improvement — colleagues notice you look better, not that you've had treatment." },
                    ].map((item) => (
                      <div key={item.title}>
                        <p className="text-[#C9A050] font-medium mb-1 text-sm">{item.title}</p>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Results Timeline */}
              <section id="results">
                <SectionHeading>Results Timeline & Longevity</SectionHeading>
                <div className="space-y-5 mb-8">
                  {[
                    { icon: <Clock className="w-5 h-5 text-[#C9A050]" />, title: "Days 1-3: Onset", desc: "Initial effects begin. You may notice subtle changes in muscle movement. Some patients experience mild redness at injection sites." },
                    { icon: <Activity className="w-5 h-5 text-[#C9A050]" />, title: "Days 7-14: Peak Effect", desc: "Full results become visible. Lines are smoothed and treated muscles are relaxed. Optimal time for a follow-up assessment." },
                    { icon: <Calendar className="w-5 h-5 text-[#C9A050]" />, title: "Months 3-6: Duration", desc: "Results typically last 3-6 months. Duration varies by individual metabolism, treatment area, and lifestyle factors." },
                  ].map((t) => (
                    <div key={t.title} className="flex items-start gap-4">
                      <div className="bg-[#C9A050]/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">{t.icon}</div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">{t.title}</h3>
                        <p className="text-white/50 text-sm">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-white mb-3">Factors Affecting Duration</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-white/50">
                    {[
                      { label: "Metabolism", desc: "Faster metabolism may reduce longevity" },
                      { label: "Treatment area", desc: "High-movement areas may wear faster" },
                      { label: "Dosage", desc: "Higher doses may last longer" },
                      { label: "Consistency", desc: "Regular treatments often extend duration" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C9A050] mt-0.5" />
                        <span><strong className="text-white/70">{f.label}:</strong> {f.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Botox vs Fillers */}
              <section>
                <SectionHeading>How Botox Fits Into Facial Rejuvenation</SectionHeading>
                <p className="text-white/60 mb-6">
                  Understanding the difference between Botox and <Link to="/treatments/dermal-fillers/" className="text-[#C9A050] hover:underline">dermal fillers</Link> helps
                  you make informed decisions about your treatment plan.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">Botox</h3>
                    <p className="text-[#C9A050] text-sm mb-3">Relaxes muscles → Reduces dynamic wrinkles</p>
                    <ul className="space-y-1.5 text-white/50 text-sm">
                      <li>• Lines that appear with expression</li>
                      <li>• Forehead, frown lines, crow's feet</li>
                      <li>• Preventative treatment</li>
                      <li>• Results last 3-6 months</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">Dermal Fillers</h3>
                    <p className="text-[#C9A050] text-sm mb-3">Adds volume → Restores lost fullness</p>
                    <ul className="space-y-1.5 text-white/50 text-sm">
                      <li>• Lines present at rest</li>
                      <li>• Cheeks, lips, nasolabial folds</li>
                      <li>• Volume restoration</li>
                      <li>• Results last 6-18 months</li>
                    </ul>
                  </div>
                </div>
                <Link to="/treatments/dermal-fillers/" className="inline-flex items-center gap-2 text-[#C9A050] hover:underline text-sm font-medium">
                  Learn about Dermal Fillers <ArrowRight className="w-4 h-4" />
                </Link>
              </section>

              {/* Choosing a Clinic */}
              <section id="choosing-a-clinic">
                <SectionHeading>Choosing a Botox Clinic</SectionHeading>
                <p className="text-white/60 mb-6">
                  With countless clinics offering Botox, knowing what to look for ensures you receive safe, effective treatment.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: <Stethoscope className="w-5 h-5 text-[#C9A050]" />, title: "Doctor-Led Care", desc: "Ensure treatments are performed or supervised by qualified medical professionals with comprehensive training in facial anatomy." },
                    { icon: <Building className="w-5 h-5 text-[#C9A050]" />, title: "Clinic Credentials", desc: "Look for CQC registration, professional memberships, and established reputation." },
                    { icon: <Users className="w-5 h-5 text-[#C9A050]" />, title: "Consultation Process", desc: "A thorough consultation should assess your concerns, explain options, and set realistic expectations." },
                    { icon: <Star className="w-5 h-5 text-[#C9A050]" />, title: "Reviews & Results", desc: "Check verified reviews and before/after galleries. Consistent positive feedback indicates reliable practitioners." },
                  ].map((c) => (
                    <div key={c.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">{c.icon}<h3 className="text-base font-semibold text-white">{c.title}</h3></div>
                      <p className="text-white/50 text-sm">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Safety */}
              <section>
                <SectionHeading>Safety, Regulation & Your Consultation</SectionHeading>
                <p className="text-white/60 mb-6">
                  Botox has an excellent safety profile when administered by trained medical professionals.
                  It's approved by the <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">FDA</a>,
                  MHRA, and regulatory bodies worldwide, with over 30 years of clinical use.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Shield className="w-4 h-4 text-[#C9A050]" /> UK Regulations</h3>
                    <ul className="space-y-1.5 text-white/50 text-sm">
                      <li>• Botox is a prescription-only medicine (POM)</li>
                      <li>• Must be prescribed by a doctor, nurse prescriber, or dentist</li>
                      <li>• Face-to-face consultation required</li>
                      <li>• Clinics must be CQC registered</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Heart className="w-4 h-4 text-[#C9A050]" /> During Your Consultation</h3>
                    <ul className="space-y-1.5 text-white/50 text-sm">
                      <li>• Full medical history review</li>
                      <li>• Discussion of concerns and goals</li>
                      <li>• Explanation of treatment options</li>
                      <li>• Realistic expectations set</li>
                      <li>• Informed consent obtained</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">Contraindications</h3>
                  <p className="text-white/40 text-sm mb-2">Botox is not suitable if you:</p>
                  <ul className="grid md:grid-cols-2 gap-1.5 text-white/50 text-sm">
                    <li>• Are pregnant or breastfeeding</li>
                    <li>• Have a neuromuscular disorder</li>
                    <li>• Have infection at the injection site</li>
                    <li>• Are allergic to botulinum toxin</li>
                  </ul>
                </div>
              </section>

              {/* Preparation & Aftercare */}
              <section>
                <SectionHeading>Preparation & Aftercare</SectionHeading>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-3">Before Treatment</h3>
                    <ul className="space-y-2 text-white/50 text-sm">
                      {["Avoid blood thinners (aspirin, ibuprofen) for 7 days", "Limit alcohol 24-48 hours before", "Arrive with clean, makeup-free skin", "Inform practitioner of all medications"].map((t) => (
                        <li key={t} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C9A050] mt-0.5" /><span>{t}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-3">After Treatment</h3>
                    <ul className="space-y-2 text-white/50 text-sm">
                      {["Stay upright for 4 hours post-treatment", "Avoid touching or rubbing treated areas", "Skip exercise, saunas, and alcohol for 24 hours", "Avoid facials and massages for 2 weeks"].map((t) => (
                        <li key={t} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C9A050] mt-0.5" /><span>{t}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Before & After — Case Study Teaser */}
              <section>
                <SectionHeading>Before & After</SectionHeading>
                <p className="text-white/60 mb-6">
                  A complex forehead case demonstrating precision micro-dosing. This patient presented with asymmetric frontalis contraction and uneven brow positioning — challenges that require careful dose calculation relative to muscle size and strength.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="relative rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="/images/before-after/botox-forehead-before.jpeg"
                      alt="Forehead wrinkles before Botox treatment showing asymmetric frontalis contraction"
                      className="w-full aspect-[4/3] object-cover object-top"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">Before</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="/images/before-after/botox-forehead-topup.jpeg"
                      alt="Forehead one week after initial Botox injection before micro top-up adjustment"
                      className="w-full aspect-[4/3] object-cover object-top"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">After 1 Week</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="/images/before-after/botox-forehead-after.jpeg"
                      alt="Final result after Botox micro top-up showing smooth forehead with natural expression"
                      className="w-full aspect-[4/3] object-cover object-top"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-[#C9A050] text-xs px-2 py-1 rounded-full">Final Result</span>
                  </div>
                </div>
                <p className="text-white/40 text-xs mb-4">
                  After the initial treatment, a micro top-up was performed at one week to fine-tune symmetry. This level of precision — predicting underlying muscle size and strength to calibrate dose-to-muscle ratio — develops through years of practice and thousands of patients. Individual results may vary.
                </p>
                <Link
                  to="/before-after/botox/"
                  className="inline-flex items-center gap-2 text-[#C9A050] hover:underline text-sm font-medium"
                >
                  View full Botox before &amp; after results <ArrowRight className="w-4 h-4" />
                </Link>
              </section>

              {/* Beyond Botox — Synergistic Treatment */}
              <section>
                <SectionHeading>Beyond Botox: Treating Lines That Won't Rest</SectionHeading>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/70 text-lg mb-6">
                    We don't just stop at Botox. Over the last 15 years, we've developed synergistic treatment methods that go further — turning static lines (those visible at rest) back into dynamic ones that only appear with movement.
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                    <p className="text-[#C9A050] font-semibold text-sm uppercase tracking-wider mb-3">The Problem</p>
                    <p className="text-white/60 mb-4">
                      Deep lines that have been etched into the skin over years don't fully disappear with Botox alone. Botox relaxes the muscle, so lines improve — but at rest, those creases remain visible. They've become scars in the skin itself.
                    </p>
                    <p className="text-[#C9A050] font-semibold text-sm uppercase tracking-wider mb-3">Our Approach</p>
                    <p className="text-white/60">
                      By combining Botox with targeted treatments like <strong className="text-white/80">Polynucleotides</strong>, <strong className="text-white/80">dermal fillers</strong>, and <strong className="text-white/80">skin boosters</strong>, we treat the line itself — not just the muscle causing it. Think of deep lines like scars or dental cavities: they need to be <em>filled</em>, not overfilled. We use hyaluronic acid in micro-millilitres, placed very superficially, to restore the skin's surface without creating bulk or lumpiness.
                    </p>
                  </div>

                  {/* Embedded Video — Crow's Feet Filler Technique */}
                  <div className="rounded-xl overflow-hidden border border-white/10 mb-6">
                    <div className="aspect-video bg-black/50 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Syringe className="h-10 w-10 text-[#C9A050]/50 mx-auto mb-3" />
                        <p className="text-white/50 text-sm mb-1">Crow's Feet Dermal Filler Technique</p>
                        <p className="text-white/30 text-xs">Video coming soon — superficial filler placement for static lines</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white/5">
                      <p className="text-white/50 text-xs">
                        Watch how we use micro-millilitres of hyaluronic acid to fill crow's feet lines superficially — treating them like fine scars rather than overfilling for a lumpy result.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-xl p-6 mb-6">
                    <p className="text-[#C9A050] font-semibold text-sm uppercase tracking-wider mb-3">The Benefits</p>
                    <ul className="space-y-3 text-white/60">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/80">Lower Botox doses</strong> — you don't need aggressive dosing when the lines are being treated from multiple angles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/80">Natural results</strong> — less Botox means more natural movement whilst still achieving smooth skin at rest</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/80">Improved skin quality</strong> — polynucleotides and skin boosters regenerate the skin itself, not just mask the problem</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/80">Cost-effective long term</strong> — less frequent Botox sessions, better results at rest, and healthier skin overall</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-white/60 mb-4">
                    This synergistic approach is something we've refined over 15 years and thousands of patients. Every face is different — which is why we discuss your specific combination plan during consultation.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://med.as.me/harleystreet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-6 py-3 text-sm font-medium transition-all duration-300"
                    >
                      Book a Consultation <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                      className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:bg-white/10 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300"
                    >
                      <Sparkles className="w-4 h-4 text-[#C9A050]" /> Ask Our AI
                    </button>
                  </div>
                </div>
              </section>

              {/* Why Choose Cosmedocs */}
              <section>
                <SectionHeading>Why Choose Cosmedocs?</SectionHeading>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { icon: <Award className="w-5 h-5" />, title: "Experience", desc: "2M+ treatments since 2007" },
                    { icon: <GraduationCap className="w-5 h-5" />, title: "Training", desc: "HSI trainers" },
                    { icon: <Shield className="w-5 h-5" />, title: "Quality", desc: "FDA-approved products" },
                    { icon: <Sparkles className="w-5 h-5" />, title: "Philosophy", desc: "Invisible art" },
                    { icon: <Stethoscope className="w-5 h-5" />, title: "Doctor-Led", desc: "Qualified doctors" },
                  ].map((w) => (
                    <div key={w.title} className="text-center">
                      <div className="bg-[#C9A050]/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-[#C9A050]">{w.icon}</div>
                      <h3 className="text-sm font-semibold text-white mb-1">{w.title}</h3>
                      <p className="text-white/50 text-xs">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs">
                <SectionHeading>Frequently Asked Questions</SectionHeading>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    { v: "what-is", q: "What exactly is Botox?", a: "Botox is a brand name for botulinum toxin type A, a purified protein that temporarily relaxes targeted muscles. It has been safely used for over 30 years in both medical and cosmetic applications." },
                    { v: "pain", q: "Does Botox hurt?", a: "Most patients describe Botox injections as a minor pinch. We use ultra-fine needles and can apply numbing cream if desired. The procedure is quick, typically completed in 10-20 minutes." },
                    { v: "safe", q: "Is Botox safe?", a: "When administered by qualified medical professionals, Botox has an excellent safety record. It is approved by regulatory bodies worldwide and has been used clinically for over three decades." },
                    { v: "results", q: "When will I see results?", a: "Initial effects typically appear within 3-5 days, with full results visible at 10-14 days. Results generally last 3-6 months, depending on individual factors." },
                    { v: "natural", q: "Will I look frozen or unnatural?", a: "Not with skilled practitioners. The goal is to relax muscles enough to reduce wrinkles whilst maintaining natural facial expression. The 'frozen' look comes from over-treatment, which we avoid." },
                    { v: "suitable", q: "Who is Botox suitable for?", a: "Botox is suitable for adults aged 18+ seeking to reduce or prevent facial lines. It works well for preventative treatment in your 20s-30s and corrective treatment for established lines." },
                    { v: "difference", q: "What is the difference between Botox and fillers?", a: "Botox relaxes muscles to reduce dynamic wrinkles (lines with movement). Fillers add volume to restore lost fullness and soften static lines. They treat different concerns and are often used together." },
                  ].map((faq) => (
                    <AccordionItem key={faq.v} value={faq.v} className="border-white/10">
                      <AccordionTrigger className="text-white hover:text-[#C9A050] text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-white/60">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-6 text-center">
                  <Link to="/botox-faqs" className="inline-flex items-center gap-2 text-[#C9A050] hover:underline text-sm font-medium">
                    View all Botox FAQs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>
            </div>

            {/* RIGHT — Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <BotoxSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            FULL-WIDTH CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">
                Your Consultation <span className="text-[#C9A050]">Begins Here</span>
              </h2>
              <p className="text-white/60 mb-8">Considered care from Harley Street doctors</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  <Phone className="w-4 h-4 mr-2" /> 0333 055 1503
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500/50 text-green-400 hover:bg-green-500 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.open('https://wa.me/447535076003', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Pricing (shown below content on small screens) */}
        <section className="lg:hidden py-12 px-4 bg-black">
          <BotoxSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Botox London - Complete Guide to Anti-Wrinkle Treatment</h2>
          <p>
            Botox London is the most popular non-surgical cosmetic treatment in the UK. This comprehensive guide covers
            everything you need to know about anti-wrinkle injections, from how botulinum toxin works to choosing the
            right clinic. Cosmedocs on Harley Street has been providing doctor-led Botox treatments since 2007, with
            over 1 million procedures performed. Our approach focuses on natural results that enhance your appearance
            without looking "done." Whether you're considering preventative Botox in your 20s or seeking corrective
            treatment for established lines, understanding the science and selecting qualified practitioners is essential.
            Botox works by temporarily relaxing targeted facial muscles, reducing dynamic wrinkles caused by repeated
            expressions. Results typically appear within 3-5 days, with full effects visible at 10-14 days, lasting
            3-6 months. Popular treatment areas include forehead lines, frown lines, crow's feet, and lower face
            applications. The procedure takes just 10-20 minutes with no downtime, making it convenient for busy
            lifestyles. Our aesthetics is invisible art. Bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
}

/* ─── Shared sub-component ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
      {children}
    </h2>
  );
}
