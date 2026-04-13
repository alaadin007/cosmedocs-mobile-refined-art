import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from '@/utils/seo';
import { Clock, Award, Calendar, MapPin, CheckCircle, Star, ArrowRight, Shield, Heart, Check, Activity, Syringe, GraduationCap, Stethoscope, MessageCircle, Sparkles, Building, Users, Phone, Play, ExternalLink } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import BotoxSidebar from '@/components/botox/BotoxSidebar';
import crowsFeetThumb from '@/assets/crows-feet-filler-thumb.jpg';

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
    "image": ["https://www.cosmedocs.com/default-og-image.jpg"],
    "url": "https://www.cosmedocs.com",
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
            <div
              className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,160,80,0.12) 0%, rgba(201,160,80,0.04) 40%, transparent 70%)' }}
            />
            <div
              className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(201,160,80,0.06) 50%, transparent 70%)' }}
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
                  <p className="text-sm text-[#C9A050]/60 tracking-widest uppercase mb-4 font-light">Natural · Longer Lasting Results</p>

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

              {/* Right — Wrinkle wave lines + floating elements */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  {/* Wrinkle wave SVG lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[
                        { d: "M50 250 Q125 210, 200 250 T350 250 T500 250", opacity: 0.08 },
                        { d: "M30 210 Q130 165, 220 210 T370 210 T490 210", opacity: 0.1 },
                        { d: "M30 290 Q130 335, 220 290 T370 290 T490 290", opacity: 0.1 },
                        { d: "M40 170 Q140 120, 230 170 T380 170 T480 170", opacity: 0.12 },
                        { d: "M40 330 Q140 380, 230 330 T380 330 T480 330", opacity: 0.12 },
                        { d: "M60 130 Q160 80, 250 130 T400 130 T500 130", opacity: 0.07 },
                        { d: "M60 370 Q160 420, 250 370 T400 370 T500 370", opacity: 0.07 },
                        { d: "M80 95 Q180 50, 260 95 T420 95 T520 95", opacity: 0.05 },
                        { d: "M80 405 Q180 450, 260 405 T420 405 T520 405", opacity: 0.05 },
                      ].map((wave, i) => (
                        <path key={i} d={wave.d} stroke="#C9A050" strokeWidth="1.5" strokeLinecap="round" opacity={wave.opacity} />
                      ))}
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlow)" />
                      <defs>
                        <radialGradient id="centreGlow" cx="0.5" cy="0.5" r="0.5">
                          <stop offset="0%" stopColor="#C9A050" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#C9A050" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Trusted Clinic badge */}
                  <div className="absolute top-8 right-0 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/30 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A050] flex items-center justify-center"><Star className="h-5 w-5 text-black fill-black" /></div>
                      <div>
                        <div className="text-sm font-semibold text-white">Trusted Clinic</div>
                        <div className="text-xs text-white/60">Since 2007</div>
                      </div>
                    </div>
                  </div>

                  {/* Invisible Needle infographic */}
                  <div className="absolute top-[45%] -right-2 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/30 border border-white/10 w-[260px]">
                    <div className="flex items-center gap-2 mb-3">
                      <Syringe className="w-4 h-4 text-[#C9A050]" />
                      <span className="text-xs font-semibold text-[#C9A050] uppercase tracking-wider">Invisible Needle</span>
                    </div>
                    <svg viewBox="0 0 220 80" className="w-full mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="45" cy="38" r="20" stroke="#C9A050" strokeWidth="1.5" fill="#C9A050" fillOpacity="0.1" />
                      <text x="45" y="42" fill="#C9A050" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">0.20mm</text>
                      <text x="45" y="10" fill="white" fillOpacity="0.6" fontSize="8" fontFamily="sans-serif" textAnchor="middle">33G Needle</text>
                      <line x1="45" y1="14" x2="45" y2="17" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
                      <circle cx="130" cy="38" r="7" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" fill="white" fillOpacity="0.05" />
                      <text x="130" y="41" fill="white" fillOpacity="0.5" fontSize="6" fontFamily="sans-serif" textAnchor="middle">0.07</text>
                      <text x="130" y="10" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Human Hair</text>
                      <line x1="130" y1="14" x2="130" y2="30" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
                      <text x="88" y="42" fill="white" fillOpacity="0.2" fontSize="9" fontFamily="sans-serif" textAnchor="middle">vs</text>
                      <text x="110" y="75" fill="white" fillOpacity="0.2" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Cross-section diameter</text>
                    </svg>
                    <p className="text-[10px] text-white/40 leading-relaxed">The tiniest needle in the industry — literally invisible. Only ~3× thicker than a human hair.</p>
                  </div>

                  {/* Review teaser card */}
                  <div className="absolute bottom-16 -left-4 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl shadow-black/30 border border-white/10 max-w-[300px]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-xs font-bold">E</div>
                      <div>
                        <div className="text-sm font-medium text-white">Emma T.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">"My friends keep asking what skincare I'm using because I look so refreshed but no one can tell I've had anything done!"</p>
                    <Link to="/testimonials" className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-2 hover:underline">More real experiences</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MAIN CONTENT — Two-column layout
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lazy-section">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* LEFT — Educational Content */}
            <div className="space-y-14">

              {/* What is Botox */}
              <section id="what-is-botox">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Is <span className="text-[#C9A050] font-light">Botox?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Botox is the brand name for botulinum toxin type A, a purified protein derived from
                        the bacterium <em>Clostridium botulinum</em>. When injected in controlled, tiny doses,
                        it temporarily relaxes targeted muscles by blocking nerve signals — smoothing dynamic
                        wrinkles whilst preserving natural expression.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Originally developed for medical conditions like muscle spasms and crossed eyes,
                        Botox gained <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">FDA approval</a> for
                        cosmetic use in 2002. Today, it's the world's most popular non-surgical aesthetic treatment.
                      </p>
                      <ul className="space-y-2">
                        {["Over 30 years of clinical use with an excellent safety record", "Approved by the FDA, MHRA, and regulatory bodies worldwide", "Treatment takes 10–20 minutes with no downtime", "Effects are temporary and fully reversible"].map((fact) => (
                          <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                        ))}
                      </ul>
                      <p>
                        The term "Botox" is often used generically, but several brands exist including
                        Azzalure, Bocouture, and Dysport. At CosmeDocs, we use premium, licensed products
                        to ensure consistent, predictable results.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section id="how-it-works">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Botox <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { step: "1", title: "Injection", desc: "Small amounts are precisely injected into targeted muscles using ultra-fine needles." },
                            { step: "2", title: "Nerve Block", desc: "Botox blocks the release of acetylcholine, preventing nerve signals from reaching muscles." },
                            { step: "3", title: "Relaxation", desc: "Targeted muscles relax, smoothing overlying skin and reducing wrinkle appearance." },
                          ].map((s) => (
                            <div key={s.step} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 text-center">
                              <div className="bg-[#C9A050]/15 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                                <span className="text-sm font-medium text-[#C9A050]">{s.step}</span>
                              </div>
                              <p className="text-sm font-medium text-white/70 mb-1">{s.title}</p>
                              <p className="text-white/40 text-xs font-light">{s.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Dynamic wrinkles form from repeated muscle contractions over years — think of the
                        lines that appear when you frown or squint. By temporarily relaxing these muscles,
                        Botox softens existing lines and prevents new ones from forming.
                      </p>
                      <p>
                        The key to natural results lies in precise dosing and placement. A skilled practitioner
                        relaxes the muscles causing wrinkles whilst preserving natural facial expression.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section id="treatment-areas">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Treatment <span className="text-[#C9A050] font-light">Areas</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Botox can address various areas of the face and body. Each area requires different techniques and dosing for optimal results.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {treatmentAreaCards.map((card) => (
                      <div key={card.title} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
                        <p className="text-sm font-medium text-white/70 mb-2">{card.title}</p>
                        <p className="text-white/35 text-xs font-light mb-3">{card.description}</p>
                        <ul className="space-y-1.5">
                          {card.areas.map((area) => (
                            <li key={area} className="flex items-center gap-2 text-xs text-white/45 font-light">
                              <Check className="w-3 h-3 text-[#C9A050]/60" /> {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Jaw Slimming", to: "/treatments/masseter-botox/" },
                      { label: "Lip Flip", to: "/treatments/lip-flip/" },
                      { label: "Oily Skin Botox", to: "/treatments/oily-skin-botox/" },
                    ].map((link) => (
                      <Link key={link.label} to={link.to} className="px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full text-xs text-white/45 hover:text-[#C9A050] hover:border-[#C9A050]/30 transition-all font-light">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Who is Suitable */}
              <section id="who-is-suitable">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Who Is <span className="text-[#C9A050] font-light">Suitable?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-[#C9A050]/60" />
                            <p className="text-sm font-medium text-white/70">Preventative Botox</p>
                          </div>
                          <p className="text-white/45 text-xs leading-relaxed font-light">For those in their mid-20s to early 30s with minimal lines. Prevents wrinkles from forming by stopping repetitive muscle movements before they create permanent creases.</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-[#C9A050]/60" />
                            <p className="text-sm font-medium text-white/70">Corrective Botox</p>
                          </div>
                          <p className="text-white/45 text-xs leading-relaxed font-light">For established lines and wrinkles at rest. Softens existing creases and prevents them from deepening further. May be combined with other treatments.</p>
                        </div>
                      </div>
                    }
                  >
                    <div className="space-y-5 text-white/45 text-sm leading-relaxed font-light">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-xs font-medium text-white/60 mb-4">Age Considerations</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          {[
                            { age: "20s–30s", text: "Preventative treatment. Low doses to slow early dynamic lines. Focus on preserving natural expression." },
                            { age: "40s–50s", text: "Corrective treatment. Moderate doses to soften established lines. Often combined with fillers for volume." },
                            { age: "60s+", text: "Part of comprehensive rejuvenation. Works alongside other treatments to refresh appearance naturally." },
                          ].map((a) => (
                            <div key={a.age}>
                              <p className="text-[#C9A050]/70 font-medium text-xs mb-1">{a.age}</p>
                              <p className="text-white/40 text-xs font-light">{a.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Botox for Men */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Botox for <span className="text-[#C9A050] font-light">Men</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Male Botox treatments have seen significant growth. Men typically seek treatment to maintain a
                        competitive professional appearance whilst looking refreshed, not "done."
                      </p>
                    }
                  >
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-5">
                        {[
                          { title: "Higher Dosage Required", desc: "Men typically have larger, stronger facial muscles requiring 25–40% more product for equivalent results." },
                          { title: "Masculine Aesthetics", desc: "Treatment is tailored to preserve masculine features — strong brows, defined forehead — whilst reducing lines." },
                          { title: "Different Goals", desc: "Most men want to look less tired or stressed, not younger. Subtle treatment achieves this naturally." },
                          { title: "Discreet Results", desc: "The goal is undetectable improvement — colleagues notice you look better, not that you've had treatment." },
                        ].map((item) => (
                          <div key={item.title}>
                            <p className="text-[#C9A050]/70 font-medium text-xs mb-1">{item.title}</p>
                            <p className="text-white/40 text-xs font-light">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Results Timeline */}
              <section id="results">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Results <span className="text-[#C9A050] font-light">Timeline</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        {[
                          { title: "Days 1–3: Onset", desc: "Initial effects begin. You may notice subtle changes in muscle movement." },
                          { title: "Days 7–14: Peak Effect", desc: "Full results become visible. Lines are smoothed and treated muscles are relaxed." },
                          { title: "Months 3–6: Duration", desc: "Results typically last 3–6 months. Duration varies by metabolism, area, and lifestyle." },
                        ].map((t) => (
                          <div key={t.title} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-medium text-white/60 mb-0.5">{t.title}</p>
                              <p className="text-white/40 text-xs font-light">{t.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <p className="text-xs font-medium text-white/60 mb-3">Factors Affecting Duration</p>
                      <div className="grid md:grid-cols-2 gap-3 text-xs text-white/40 font-light">
                        {[
                          { label: "Metabolism", desc: "Faster metabolism may reduce longevity" },
                          { label: "Treatment area", desc: "High-movement areas may wear faster" },
                          { label: "Dosage", desc: "Higher doses may last longer" },
                          { label: "Consistency", desc: "Regular treatments often extend duration" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" />
                            <span><strong className="text-white/55">{f.label}:</strong> {f.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Botox vs Fillers */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Botox Fits Into <span className="text-[#C9A050] font-light">Facial Rejuvenation</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Understanding the difference between Botox and <Link to="/treatments/dermal-fillers/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">dermal fillers</Link> helps
                        you make informed decisions about your treatment plan.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-sm font-medium text-[#C9A050]/80 mb-3">Botox</p>
                        <p className="text-[#C9A050]/50 text-xs mb-3 font-light">Relaxes muscles → Reduces dynamic wrinkles</p>
                        <ul className="space-y-1.5 text-white/40 text-xs font-light">
                          <li>• Lines that appear with expression</li>
                          <li>• Forehead, frown lines, crow's feet</li>
                          <li>• Preventative treatment</li>
                          <li>• Results last 3–6 months</li>
                        </ul>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-sm font-medium text-white/60 mb-3">Dermal Fillers</p>
                        <p className="text-white/35 text-xs mb-3 font-light">Adds volume → Restores lost fullness</p>
                        <ul className="space-y-1.5 text-white/40 text-xs font-light">
                          <li>• Lines present at rest</li>
                          <li>• Cheeks, lips, nasolabial folds</li>
                          <li>• Volume restoration</li>
                          <li>• Results last 6–18 months</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to="/treatments/dermal-fillers/" className="inline-flex items-center gap-2 text-[#C9A050]/70 hover:text-[#C9A050] text-xs font-light">
                        Learn about Dermal Fillers <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Choosing a Clinic */}
              <section id="choosing-a-clinic">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Choosing a <span className="text-[#C9A050] font-light">Clinic</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        With countless clinics offering Botox, knowing what to look for ensures you receive safe, effective treatment from qualified practitioners.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: <Stethoscope className="w-4 h-4 text-[#C9A050]/60" />, title: "Doctor-Led Care", desc: "Ensure treatments are performed or supervised by qualified medical professionals with comprehensive training in facial anatomy." },
                        { icon: <Building className="w-4 h-4 text-[#C9A050]/60" />, title: "Clinic Credentials", desc: "Look for CQC registration, professional memberships, and established reputation." },
                        { icon: <Users className="w-4 h-4 text-[#C9A050]/60" />, title: "Consultation Process", desc: "A thorough consultation should assess your concerns, explain options, and set realistic expectations." },
                        { icon: <Star className="w-4 h-4 text-[#C9A050]/60" />, title: "Reviews & Results", desc: "Check verified reviews and before/after galleries. Consistent positive feedback indicates reliable practitioners." },
                      ].map((c) => (
                        <div key={c.title} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
                          <div className="flex items-center gap-2 mb-2">{c.icon}<p className="text-xs font-medium text-white/60">{c.title}</p></div>
                          <p className="text-white/40 text-xs font-light">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Safety & Regulation */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Safety & <span className="text-[#C9A050] font-light">Regulation</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Botox has an excellent safety profile when administered by trained medical professionals.
                        It's approved by the <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">FDA</a>,
                        MHRA, and regulatory bodies worldwide, with over 30 years of clinical use.
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className="text-xs font-medium text-white/60">UK Regulations</p></div>
                          <ul className="space-y-1.5 text-white/40 text-xs font-light">
                            <li>• Botox is a prescription-only medicine (POM)</li>
                            <li>• Must be prescribed by a doctor, nurse prescriber, or dentist</li>
                            <li>• Face-to-face consultation required</li>
                            <li>• Clinics must be CQC registered</li>
                          </ul>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className="text-xs font-medium text-white/60">During Your Consultation</p></div>
                          <ul className="space-y-1.5 text-white/40 text-xs font-light">
                            <li>• Full medical history review</li>
                            <li>• Discussion of concerns and goals</li>
                            <li>• Explanation of treatment options</li>
                            <li>• Realistic expectations set</li>
                            <li>• Informed consent obtained</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <p className="text-xs font-medium text-white/60 mb-2">Contraindications</p>
                        <p className="text-white/35 text-xs font-light mb-2">Botox is not suitable if you:</p>
                        <ul className="grid md:grid-cols-2 gap-1.5 text-white/40 text-xs font-light">
                          <li>• Are pregnant or breastfeeding</li>
                          <li>• Have a neuromuscular disorder</li>
                          <li>• Have infection at the injection site</li>
                          <li>• Are allergic to botulinum toxin</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Preparation & Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Preparation & <span className="text-[#C9A050] font-light">Aftercare</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
                      <p className="text-xs font-medium text-white/60 mb-3">Before Treatment</p>
                      <ul className="space-y-2 text-white/40 text-xs font-light">
                        {["Avoid blood thinners (aspirin, ibuprofen) for 7 days", "Limit alcohol 24–48 hours before", "Arrive with clean, makeup-free skin", "Inform practitioner of all medications"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
                      <p className="text-xs font-medium text-white/60 mb-3">After Treatment</p>
                      <ul className="space-y-2 text-white/40 text-xs font-light">
                        {["Stay upright for 4 hours post-treatment", "Avoid touching or rubbing treated areas", "Skip exercise, saunas, and alcohol for 24 hours", "Avoid facials and massages for 2 weeks"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Real Patient Results */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Real Patient <span className="text-[#C9A050] font-light">Results</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                      <img
                        src="/images/before-after/botox/frown-lines-before-after-preview.jpg"
                        alt="Frown lines before and after Botox treatment"
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                      <img
                        src="/images/before-after/botox/forehead-lines-before-after-preview.jpg"
                        alt="Forehead lines before and after Botox treatment"
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-white/35 text-xs mb-5 font-light">
                    All images show real patients treated by our doctors at our Harley Street clinic. Results vary depending on facial anatomy and treatment plan.
                  </p>
                  <Link
                    to="/before-after/botox/"
                    className="inline-flex items-center gap-2 text-[#C9A050]/70 hover:text-[#C9A050] text-xs font-light transition-colors"
                  >
                    View full Botox before &amp; after gallery → <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </section>

              {/* Beyond Botox — Synergistic Treatment */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Beyond Botox: <span className="text-[#C9A050] font-light">Lines That Won't Rest</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        We don't just stop at Botox. Over the last 15 years, we've developed synergistic treatment methods that go further — turning static lines (those visible at rest) back into dynamic ones that only appear with movement.
                      </p>
                    }
                  >
                    <div className="space-y-5 text-white/45 text-sm leading-relaxed font-light">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                        <p className="text-[#C9A050]/60 font-medium text-xs uppercase tracking-wider mb-3">The Problem</p>
                        <p className="text-white/40 text-xs font-light mb-4">
                          Deep lines that have been etched into the skin over years don't fully disappear with Botox alone. Botox relaxes the muscle, so lines improve — but at rest, those creases remain visible. They've become scars in the skin itself.
                        </p>
                        <p className="text-[#C9A050]/60 font-medium text-xs uppercase tracking-wider mb-3">Our Approach</p>
                        <p className="text-white/40 text-xs font-light">
                          By combining Botox with targeted treatments like <strong className="text-white/55">Polynucleotides</strong>, <strong className="text-white/55">dermal fillers</strong>, and <strong className="text-white/55">skin boosters</strong>, we treat the line itself — not just the muscle causing it.
                        </p>
                      </div>

                      {/* Video Thumbnail */}
                      <a
                        href="https://www.instagram.com/reel/DBrvvuQOESh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] p-3 transition-all duration-300 hover:border-[#C9A050]/30"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={crowsFeetThumb} alt="Crow's feet filler technique" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <Play className="w-5 h-5 text-white fill-white/80" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/60 text-xs font-medium mb-0.5 group-hover:text-[#C9A050] transition-colors">Crow's Feet Filler Technique</p>
                          <p className="text-white/35 text-[10px] leading-relaxed font-light">Watch micro-millilitres of hyaluronic acid placed superficially to fill lines.</p>
                        </div>
                        <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-[#C9A050] flex-shrink-0 transition-colors" />
                      </a>

                      <div className="bg-[#C9A050]/5 border border-[#C9A050]/20 rounded-xl p-5">
                        <ul className="space-y-2">
                          {[
                            { bold: "Lower Botox doses", desc: "— you don't need aggressive dosing when lines are treated from multiple angles" },
                            { bold: "Natural results", desc: "— less Botox means more natural movement whilst achieving smooth skin at rest" },
                            { bold: "Improved skin quality", desc: "— polynucleotides and skin boosters regenerate the skin itself" },
                            { bold: "Cost-effective long term", desc: "— less frequent sessions, better results, healthier skin overall" },
                          ].map((item) => (
                            <li key={item.bold} className="flex items-start gap-2 text-xs text-white/40 font-light">
                              <CheckCircle className="w-3 h-3 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                              <span><strong className="text-white/55">{item.bold}</strong> {item.desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://med.as.me/harleystreet"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300"
                        >
                          Book a Consultation <ArrowRight className="w-3 h-3" />
                        </a>
                        <button
                          onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                          className="inline-flex items-center gap-2 border border-white/[0.15] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-full px-5 py-2.5 text-xs font-light transition-all duration-300"
                        >
                          <Sparkles className="w-3 h-3 text-[#C9A050]/60" /> Ask Our AI
                        </button>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why Choose Cosmedocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Why Choose <span className="text-[#C9A050] font-light">CosmeDocs?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "Experience", desc: "1M+ injections since 2007" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "Training", desc: "HSI trainers" },
                      { icon: <Shield className="w-4 h-4" />, title: "Quality", desc: "FDA-approved products" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "Philosophy", desc: "Invisible art" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "Doctor-Led", desc: "Qualified doctors" },
                    ].map((w) => (
                      <div key={w.title} className="text-center">
                        <div className="bg-[#C9A050]/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-[#C9A050]/60">{w.icon}</div>
                        <p className="text-xs font-medium text-white/60 mb-0.5">{w.title}</p>
                        <p className="text-white/35 text-[10px] font-light">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section id="faqs">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Frequently Asked <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "what-is", q: "What exactly is Botox?", a: "Botox is a brand name for botulinum toxin type A, a purified protein that temporarily relaxes targeted muscles. It has been safely used for over 30 years in both medical and cosmetic applications." },
                      { v: "pain", q: "Does Botox hurt?", a: "Most patients describe Botox injections as a minor pinch. We use ultra-fine needles and can apply numbing cream if desired. The procedure is quick, typically completed in 10–20 minutes." },
                      { v: "safe", q: "Is Botox safe?", a: "When administered by qualified medical professionals, Botox has an excellent safety record. It is approved by regulatory bodies worldwide and has been used clinically for over three decades." },
                      { v: "results", q: "When will I see results?", a: "Initial effects typically appear within 3–5 days, with full results visible at 10–14 days. Results generally last 3–6 months, depending on individual factors." },
                      { v: "natural", q: "Will I look frozen or unnatural?", a: "Not with skilled practitioners. The goal is to relax muscles enough to reduce wrinkles whilst maintaining natural facial expression. The 'frozen' look comes from over-treatment, which we avoid." },
                      { v: "suitable", q: "Who is Botox suitable for?", a: "Botox is suitable for adults aged 18+ seeking to reduce or prevent facial lines. It works well for preventative treatment in your 20s–30s and corrective treatment for established lines." },
                      { v: "difference", q: "What is the difference between Botox and fillers?", a: "Botox relaxes muscles to reduce dynamic wrinkles (lines with movement). Fillers add volume to restore lost fullness and soften static lines. They treat different concerns and are often used together." },
                    ].map((faq) => (
                      <AccordionItem key={faq.v} value={faq.v} className="border-white/[0.08]">
                        <AccordionTrigger className="text-white/70 hover:text-[#C9A050] text-left text-sm font-light">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-white/40 text-xs font-light">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <Link to="/botox-faqs/" className="inline-flex items-center gap-2 text-[#C9A050]/70 hover:text-[#C9A050] text-xs font-light transition-colors">
                      View all Botox FAQs <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link to="/botox-cost-uk/" className="inline-flex items-center gap-2 text-[#C9A050]/70 hover:text-[#C9A050] text-xs font-light transition-colors">
                      Botox pricing explained <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
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
import SkinFoundationCTA from "@/components/SkinFoundationCTA";

