import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ArrowRight, Calendar, Syringe, Heart, Shield, MapPin, Eye, Smile, Sparkles, Award, Users, Star, Check, Stethoscope, GraduationCap, Building, Phone, MessageCircle, Activity, Droplets } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import DermalFillersSidebar from '@/components/dermal-fillers/DermalFillersSidebar';

export default function DermalFillers() {
  const seoData = generateSEOMetadata(
    "Dermal Fillers | Doctor-Led Facial Enhancement | Cosmedocs Harley Street",
    "Complete guide to dermal fillers. Understand hyaluronic acid treatments, treatment areas, who is suitable, and our full-face approach. Doctor-led care at Harley Street.",
    "/treatments/dermal-fillers/"
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
      { "@type": "Question", "name": "Are dermal fillers safe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when administered by qualified medical professionals. At CosmeDocs, all treatments are performed by GMC-registered doctors using FDA-approved, premium hyaluronic acid fillers. These are biocompatible and can be dissolved with hyaluronidase if needed." } },
      { "@type": "Question", "name": "Who is suitable for dermal filler treatment?", "acceptedAnswer": { "@type": "Answer", "text": "Most healthy adults over 18 are suitable candidates. During your consultation, our doctors assess your medical history, skin condition, facial anatomy, and aesthetic goals to determine suitability." } },
      { "@type": "Question", "name": "How long do dermal fillers last?", "acceptedAnswer": { "@type": "Answer", "text": "Results typically last 12-18 months depending on the treatment area, product used, and individual metabolism. Lip fillers tend to last 6-12 months, while cheek and jawline fillers can last up to 18 months." } },
      { "@type": "Question", "name": "What is the difference between fillers and Botox?", "acceptedAnswer": { "@type": "Answer", "text": "Dermal fillers add volume to restore lost fullness and soften static lines. Botox relaxes muscles to reduce dynamic wrinkles caused by facial expressions. Many patients benefit from combining both treatments." } },
      { "@type": "Question", "name": "Can dermal fillers be reversed?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, hyaluronic acid fillers can be dissolved using an enzyme called hyaluronidase. This provides an important safety measure and allows adjustments if needed." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "Lips", areas: ["Volume Enhancement", "Shape Definition", "Cupid's Bow", "Natural Plumping"], description: "The most popular filler treatment, from subtle definition to fuller volume.", link: "/treatments/lip-fillers/" },
    { title: "Mid-Face", areas: ["Cheek Volume", "Tear Trough", "Temple Hollowing", "Nasolabial Folds"], description: "Restoring mid-face support and addressing volume loss that contributes to an aged appearance.", link: "/treatments/cheek-filler/" },
    { title: "Lower Face", areas: ["Jawline Definition", "Chin Projection", "Marionette Lines", "Jowl Support"], description: "Structural contouring for a more defined, balanced lower face.", link: "/treatments/jawline-filler/" },
    { title: "Specialist", areas: ["Non-Surgical Nose Job", "Forehead Smoothing", "Ear Lobe Rejuvenation", "Hand Rejuvenation"], description: "Targeted treatments for specific concerns and refinements." }
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
        <meta name="keywords" content="dermal fillers london, dermal fillers harley street, lip fillers london, cheek fillers london, jawline filler, tear trough filler, hyaluronic acid fillers, facial fillers, non surgical facelift, dermal filler cost, face fillers london, best dermal fillers london, natural fillers" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-black overflow-x-hidden">
        {/* ═══════════════════════════════════════════
            HERO — Two-column, matching Botox style
        ═══════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
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
            {/* Breadcrumbs */}
            <div className="mb-6">
              <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }]} currentPage="Dermal Fillers" />
            </div>

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
                    <span className="block font-semibold text-[#C9A050]">invisible restoration</span>
                  </h1>

                  <p className="text-lg md:text-xl text-white/60 mb-4 max-w-xl leading-relaxed font-light">
                    Your comprehensive guide to dermal fillers. Understanding hyaluronic acid, how it restores volume, and achieving results so natural they're undetectable.
                  </p>
                  <p className="text-base text-white/50 mb-10 max-w-xl leading-relaxed font-light">
                    At CosmeDocs, fillers are placed with precision and restraint. GMC-registered doctors assess your face as a whole, restoring balance — never altering identity. Since 2007, our philosophy has been invisible art.
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

              {/* Right — Flowing droplet SVG art + floating elements */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  {/* HA droplet / volume SVG art */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Flowing organic shapes — representing volume restoration */}
                      {[
                        { d: "M250 80 C300 80, 380 150, 380 250 C380 350, 300 420, 250 420 C200 420, 120 350, 120 250 C120 150, 200 80, 250 80", opacity: 0.08, delay: 0 },
                        { d: "M250 120 C285 120, 340 170, 340 250 C340 330, 285 380, 250 380 C215 380, 160 330, 160 250 C160 170, 215 120, 250 120", opacity: 0.1, delay: 0.5 },
                        { d: "M250 160 C270 160, 310 190, 310 250 C310 310, 270 340, 250 340 C230 340, 190 310, 190 250 C190 190, 230 160, 250 160", opacity: 0.12, delay: 1 },
                        { d: "M250 200 C260 200, 280 215, 280 250 C280 285, 260 300, 250 300 C240 300, 220 285, 220 250 C220 215, 240 200, 250 200", opacity: 0.15, delay: 1.5 },
                      ].map((shape, i) => (
                        <motion.path
                          key={i}
                          d={shape.d}
                          stroke="#C9A050"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity={shape.opacity}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: shape.opacity }}
                          transition={{ duration: 2.5, delay: shape.delay * 0.3, ease: "easeOut" }}
                        />
                      ))}
                      {/* Flowing lines from centre — representing filler placement */}
                      {[
                        { d: "M250 250 Q200 180, 130 160", opacity: 0.06, delay: 2 },
                        { d: "M250 250 Q300 180, 370 160", opacity: 0.06, delay: 2.3 },
                        { d: "M250 250 Q180 280, 100 320", opacity: 0.06, delay: 2.6 },
                        { d: "M250 250 Q320 280, 400 320", opacity: 0.06, delay: 2.9 },
                        { d: "M250 250 Q250 320, 250 420", opacity: 0.05, delay: 3.2 },
                      ].map((line, i) => (
                        <motion.path
                          key={`line-${i}`}
                          d={line.d}
                          stroke="#C9A050"
                          strokeWidth="1"
                          strokeLinecap="round"
                          opacity={line.opacity}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: line.opacity }}
                          transition={{ duration: 2, delay: line.delay * 0.3, ease: "easeOut" }}
                        />
                      ))}
                      {/* Centre glow */}
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowFiller)" />
                      <defs>
                        <radialGradient id="centreGlowFiller" cx="0.5" cy="0.5" r="0.5">
                          <stop offset="0%" stopColor="#C9A050" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#C9A050" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
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

                  {/* Floating "Hyaluronic Acid" info badge */}
                  <motion.div
                    className="absolute top-[45%] -right-2 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/30 border border-white/10 w-[240px]"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Droplets className="w-4 h-4 text-[#C9A050]" />
                      <span className="text-xs font-semibold text-[#C9A050] uppercase tracking-wider">Hyaluronic Acid</span>
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed mb-2">
                      A naturally occurring substance in skin that retains moisture and provides structural support.
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-white/40">
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> Biocompatible</span>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> Reversible</span>
                    </div>
                  </motion.div>

                  {/* Review teaser card */}
                  <motion.div
                    className="absolute bottom-16 -left-4 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl shadow-black/30 border border-white/10 max-w-[300px]"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-xs font-bold">J</div>
                      <div>
                        <div className="text-sm font-medium text-white">Jessica K.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">"Everyone says I look amazing but they can't put their finger on why. That's the sign of truly excellent work."</p>
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
                {["What Are Fillers?", "How They Work", "Treatment Areas", "Full-Face Approach", "Who Is Suitable?", "Results", "Choosing a Clinic", "FAQs"].map((label) => (
                  <a key={label} href={`#${label.toLowerCase().replace(/[^a-z]+/g, '-')}`} className="text-white/40 hover:text-[#C9A050] transition-colors">
                    {label}
                  </a>
                ))}
              </nav>

              {/* What Are Dermal Fillers */}
              <section id="what-are-fillers-">
                <SectionHeading>What Are Dermal Fillers?</SectionHeading>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/70 text-lg mb-6">
                    Dermal fillers are injectable treatments most commonly made from hyaluronic acid — a substance naturally found in the skin that helps retain hydration, volume, and elasticity.
                  </p>
                  <p className="text-white/60 mb-6">
                    As we age, the face loses structural support — bone recedes, fat pads shift, and skin becomes thinner. Dermal fillers work by restoring this lost volume, lifting sagging tissues, and softening lines — without surgery.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">What Fillers Can Address</h3>
                    <ul className="space-y-3 text-white/60">
                      {["Restore age-related volume loss in cheeks, temples, and lips", "Improve facial proportions and symmetry", "Support sagging tissues and lift jowls", "Soften static lines and nasolabial folds", "Enhance natural contours — jawline, chin, lips"].map((fact) => (
                        <li key={fact} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#C9A050] mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-white/60">
                    At CosmeDocs, dermal fillers are never used to "fill lines blindly." They are placed strategically to support the face as a whole, respecting individual anatomy and natural expression.
                  </p>
                </div>
              </section>

              {/* How They Work */}
              <section id="how-they-work">
                <SectionHeading>How Dermal Fillers Work</SectionHeading>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { step: "1", title: "Assessment", desc: "Your doctor analyses facial anatomy, bone structure, and volume loss patterns to create a bespoke treatment plan." },
                    { step: "2", title: "Injection", desc: "Hyaluronic acid gel is precisely placed using cannulae or fine needles at specific depths to restore or enhance volume." },
                    { step: "3", title: "Integration", desc: "The filler integrates with surrounding tissue, drawing moisture and providing natural-looking support and structure." },
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
                  Unlike Botox which relaxes muscles, dermal fillers physically add volume beneath the skin's surface. The hyaluronic acid in fillers is biocompatible — meaning it works with your body, not against it.
                </p>
                <p className="text-white/60">
                  Premium fillers come in different viscosities — thicker gels for structural support (jawline, chin), medium gels for volume (cheeks), and softer gels for delicate areas (lips, tear troughs). Choosing the right product for each area is crucial for natural results.
                </p>
              </section>

              {/* Treatment Areas */}
              <section id="treatment-areas">
                <SectionHeading>Dermal Filler Treatment Areas</SectionHeading>
                <p className="text-white/60 mb-8">
                  Each area of the face has unique anatomy, ageing patterns, and requirements. Our doctors tailor product choice, placement depth, and volume to each individual area.
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
                      {card.link && (
                        <Link to={card.link} className="inline-flex items-center gap-1 text-[#C9A050] text-sm mt-3 hover:underline font-medium">
                          Learn more <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { label: "Lip Fillers", to: "/treatments/lip-fillers/" },
                    { label: "Jawline Filler", to: "/treatments/jawline-filler/" },
                    { label: "Cheek Filler", to: "/treatments/cheek-filler/" },
                    { label: "Chin Filler", to: "/treatments/chin-filler/" },
                    { label: "Tear Trough", to: "/treatments/tear-trough-filler/" },
                    { label: "Temple Filler", to: "/treatments/temple-filler/" },
                  ].map((link) => (
                    <Link key={link.label} to={link.to} className="px-4 py-2 bg-white/5 hover:bg-[#C9A050]/10 border border-white/10 hover:border-[#C9A050]/30 rounded-full text-sm text-white/60 hover:text-[#C9A050] transition-all">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>

              {/* Full-Face Approach */}
              <section id="full-face-approach">
                <SectionHeading>A Full-Face Approach to Dermal Fillers</SectionHeading>
                <p className="text-white/70 text-lg mb-6">
                  Facial ageing does not occur in isolation. Lines, folds, and hollowing are often the result of structural changes elsewhere in the face.
                </p>
                <p className="text-white/60 mb-6">
                  That's why our doctors adopt a full-face approach. Rather than treating a single line or area in isolation, we assess how different regions interact — and how restoring support in one area can naturally improve another.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <p className="text-white font-medium mb-4">This approach:</p>
                  <ul className="space-y-3 text-white/60">
                    {["Reduces the risk of overfilling any single area", "Produces more natural, balanced results", "Preserves facial movement and expression", "Delivers longer-lasting outcomes with less product"].map((item) => (
                      <li key={item} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#C9A050] mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <p className="text-[#C9A050] font-medium italic">
                  Our goal is not obvious correction — it's subtle restoration.
                </p>
              </section>

              {/* Who Is Suitable */}
              <section id="who-is-suitable-">
                <SectionHeading>Who Is Suitable for Dermal Fillers?</SectionHeading>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#C9A050]/20 rounded-full p-2"><Sparkles className="w-5 h-5 text-[#C9A050]" /></div>
                      <h3 className="text-lg font-semibold text-white">Enhancement</h3>
                    </div>
                    <p className="text-white/60 text-sm mb-3">For those seeking to enhance facial features — lip volume, cheek definition, jawline contouring — regardless of age.</p>
                    <p className="text-xs text-white/40"><strong className="text-[#C9A050]">Best for:</strong> Those wanting to improve specific features naturally.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#C9A050]/20 rounded-full p-2"><Activity className="w-5 h-5 text-[#C9A050]" /></div>
                      <h3 className="text-lg font-semibold text-white">Restoration</h3>
                    </div>
                    <p className="text-white/60 text-sm mb-3">For age-related volume loss — hollow cheeks, deep nasolabial folds, thinning lips, temple hollowing. Restoring what time has taken.</p>
                    <p className="text-xs text-white/40"><strong className="text-[#C9A050]">Best for:</strong> Those noticing volume loss and wanting a refreshed appearance.</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Age Considerations</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { age: "20s-30s", text: "Enhancement-focused. Lip definition, chin projection, or subtle cheek contour. Light volumes, natural results." },
                      { age: "40s-50s", text: "Volume restoration begins. Mid-face support, nasolabial folds, jawline definition. Often combined with Botox." },
                      { age: "60s+", text: "Comprehensive restoration. Multiple areas benefit from structural support. Part of a wider rejuvenation approach." },
                    ].map((a) => (
                      <div key={a.age}>
                        <p className="text-[#C9A050] font-semibold mb-2">{a.age}</p>
                        <p className="text-white/50 text-sm">{a.text}</p>
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
                    { icon: <Syringe className="w-5 h-5 text-[#C9A050]" />, title: "Day 1: Immediate", desc: "Visible improvement straight away. Some swelling is normal and expected — this settles within 48-72 hours." },
                    { icon: <Activity className="w-5 h-5 text-[#C9A050]" />, title: "Weeks 2-4: Settled", desc: "Swelling fully resolved. The filler has integrated with tissue and hydrated. This is when you see the true result." },
                    { icon: <Calendar className="w-5 h-5 text-[#C9A050]" />, title: "Months 12-18: Duration", desc: "Results typically last 12-18 months depending on the area, product used, and individual metabolism." },
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
                  <h3 className="text-sm font-semibold text-white mb-3">Duration by Area</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-white/50">
                    {[
                      { label: "Lips", desc: "6-12 months (high movement area)" },
                      { label: "Cheeks", desc: "12-18 months" },
                      { label: "Jawline & chin", desc: "12-18 months" },
                      { label: "Tear troughs", desc: "12-18 months (low movement)" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C9A050] mt-0.5" />
                        <span><strong className="text-white/70">{f.label}:</strong> {f.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Fillers vs Botox */}
              <section>
                <SectionHeading>How Fillers Fit Into Facial Rejuvenation</SectionHeading>
                <p className="text-white/60 mb-6">
                  Understanding the difference between dermal fillers and <Link to="/treatments/botox/" className="text-[#C9A050] hover:underline">Botox</Link> helps you make informed decisions about your treatment plan.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">Dermal Fillers</h3>
                    <p className="text-[#C9A050] text-sm mb-3">Adds volume → Restores lost fullness</p>
                    <ul className="space-y-1.5 text-white/50 text-sm">
                      <li>• Lines present at rest (static lines)</li>
                      <li>• Cheeks, lips, jawline, nasolabial folds</li>
                      <li>• Volume restoration & contouring</li>
                      <li>• Results last 6-18 months</li>
                    </ul>
                  </div>
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
                </div>
                <p className="text-white/60 mb-4">
                  Many patients benefit from a combined approach. Botox addresses dynamic lines whilst fillers restore lost volume — together, they create comprehensive facial rejuvenation.
                </p>
                <Link to="/treatments/botox/" className="inline-flex items-center gap-2 text-[#C9A050] hover:underline text-sm font-medium">
                  Learn about Botox <ArrowRight className="w-4 h-4" />
                </Link>
              </section>

              {/* Choosing a Clinic */}
              <section id="choosing-a-clinic">
                <SectionHeading>Choosing a Filler Clinic</SectionHeading>
                <p className="text-white/60 mb-6">
                  Dermal fillers require deep understanding of facial anatomy. The difference between natural results and overfilled outcomes comes down to practitioner skill.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: <Stethoscope className="w-5 h-5 text-[#C9A050]" />, title: "Doctor-Led Care", desc: "Ensure treatments are performed by qualified medical professionals with comprehensive training in facial anatomy and injection techniques." },
                    { icon: <Building className="w-5 h-5 text-[#C9A050]" />, title: "Clinic Credentials", desc: "Look for CQC registration, professional memberships, and an established reputation for natural results." },
                    { icon: <Users className="w-5 h-5 text-[#C9A050]" />, title: "Full-Face Assessment", desc: "A good practitioner assesses the whole face, not just the area you point to. Context matters for natural outcomes." },
                    { icon: <Star className="w-5 h-5 text-[#C9A050]" />, title: "Reviews & Results", desc: "Check verified reviews and before/after galleries. Look for natural, subtle results — not overfilled faces." },
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
                <SectionHeading>Safety, Risks & Your Consultation</SectionHeading>
                <p className="text-white/60 mb-6">
                  Hyaluronic acid fillers have an excellent safety profile. They are biocompatible, temporary, and — importantly — fully reversible using an enzyme called hyaluronidase.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Shield className="w-4 h-4 text-[#C9A050]" /> Safety Profile</h3>
                    <ul className="space-y-1.5 text-white/50 text-sm">
                      <li>• FDA and CE approved products</li>
                      <li>• Biocompatible — works with your body</li>
                      <li>• Fully reversible with hyaluronidase</li>
                      <li>• Temporary — naturally absorbed over time</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Heart className="w-4 h-4 text-[#C9A050]" /> During Your Consultation</h3>
                    <ul className="space-y-1.5 text-white/50 text-sm">
                      <li>• Full facial assessment and medical history</li>
                      <li>• Discussion of concerns and goals</li>
                      <li>• Honest advice — we say no when appropriate</li>
                      <li>• Realistic expectations set</li>
                      <li>• Informed consent obtained</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">Contraindications</h3>
                  <p className="text-white/40 text-sm mb-2">Dermal fillers may not be suitable if you:</p>
                  <ul className="grid md:grid-cols-2 gap-1.5 text-white/50 text-sm">
                    <li>• Are pregnant or breastfeeding</li>
                    <li>• Have active skin infection at the site</li>
                    <li>• Have certain autoimmune conditions</li>
                    <li>• Have a history of severe allergies</li>
                  </ul>
                </div>
              </section>

              {/* Filler Migration Myth */}
              <section>
                <SectionHeading>The Filler Migration Myth</SectionHeading>
                <p className="text-white/70 text-lg mb-4">
                  "Filler migration" is one of the most commonly repeated concerns in aesthetics — but it's largely a misconception.
                </p>
                <p className="text-white/60 mb-6">
                  Hyaluronic acid filler, when placed correctly by an experienced practitioner, integrates with the surrounding tissue and stays precisely where it's injected. It does not "wander" through the face.
                </p>
                <p className="text-white/60 mb-6">
                  What's often labelled as migration is typically the result of poor injection technique — filler placed too superficially, in excessive volumes, or in the wrong tissue plane. When product is deposited incorrectly, it can spread beyond the intended area, creating an unnatural appearance that gets blamed on the filler itself rather than the method of placement.
                </p>

                {/* Dr. Quote */}
                <div className="bg-white/5 border-l-2 border-[#C9A050] rounded-r-xl p-6 mb-6">
                  <blockquote className="text-white/80 text-base italic leading-relaxed mb-4">
                    "Migration is a technique problem, not a product problem. When filler is placed at the correct depth, in the right tissue plane, with appropriate volumes — it simply doesn't migrate. What patients see on social media and attribute to migration is almost always the result of poor placement or overfilling. With proper anatomical knowledge and restraint, this concern is entirely avoidable."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-sm font-bold">AH</div>
                    <div>
                      <p className="text-white font-medium text-sm">Dr. Ahmed Haq</p>
                      <p className="text-white/50 text-xs">Medical Director, CosmeDocs</p>
                    </div>
                  </div>
                </div>

                <p className="text-white/60 mb-4">
                  At CosmeDocs, every injection is guided by deep anatomical understanding. Our doctors use precise cannula and needle techniques, selecting the correct product viscosity and depth for each area — ensuring filler stays exactly where it's intended.
                </p>
                <p className="text-white/50 text-sm">
                  This is why choosing a qualified, experienced doctor-led clinic matters. Technique is the single greatest factor in achieving safe, natural, long-lasting results.
                </p>
              </section>

              {/* Preparation & Aftercare */}
              <section>
                <SectionHeading>Preparation & Aftercare</SectionHeading>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-3">Before Treatment</h3>
                    <ul className="space-y-2 text-white/50 text-sm">
                      {["Avoid blood thinners (aspirin, ibuprofen) for 7 days", "Limit alcohol 24-48 hours before", "Inform practitioner of all medications", "Avoid dental work 2 weeks before/after"].map((t) => (
                        <li key={t} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C9A050] mt-0.5" /><span>{t}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white mb-3">After Treatment</h3>
                    <ul className="space-y-2 text-white/50 text-sm">
                      {["Avoid touching or pressing treated areas for 6 hours", "Skip intense exercise for 24-48 hours", "Avoid saunas, steam rooms, and extreme heat", "Sleep slightly elevated the first night"].map((t) => (
                        <li key={t} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C9A050] mt-0.5" /><span>{t}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Dermal Filler Before & After Results */}
              <section>
                <SectionHeading>Dermal Filler Before & After Results</SectionHeading>
                <div className="mb-5">
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="/images/before-after/dermal-fillers/full-face-filler-before-after-preview.jpg"
                      alt="Full-face dermal filler before and after showing facial rejuvenation"
                      className="w-full aspect-[16/9] object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="text-white/40 text-xs mb-5">
                  All images show real patients treated by our doctors at our Harley Street clinic. Results vary depending on facial anatomy and treatment plan.
                </p>
                <Link
                  to="/before-after/dermal-fillers/"
                  className="inline-flex items-center gap-2 text-[#C9A050] hover:underline text-sm font-medium"
                >
                  View full dermal filler before &amp; after gallery → <ArrowRight className="w-4 h-4" />
                </Link>
              </section>

              {/* Why Choose Cosmedocs */}
              <section>
                <SectionHeading>Why Choose Cosmedocs?</SectionHeading>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { icon: <Award className="w-5 h-5" />, title: "Experience", desc: "2M+ treatments since 2007" },
                    { icon: <GraduationCap className="w-5 h-5" />, title: "Training", desc: "HSI trainers" },
                    { icon: <Shield className="w-5 h-5" />, title: "Quality", desc: "Premium HA products" },
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
                    { v: "safe", q: "Are dermal fillers safe?", a: "Yes, when administered by qualified medical professionals. At CosmeDocs, all treatments are performed by GMC-registered doctors using FDA-approved, premium hyaluronic acid fillers. These are biocompatible and can be dissolved with hyaluronidase if needed." },
                    { v: "suitable", q: "Who is suitable for dermal filler treatment?", a: "Most healthy adults over 18 are suitable candidates. During your consultation, our doctors assess your medical history, skin condition, facial anatomy, and aesthetic goals to determine suitability." },
                    { v: "last", q: "How long do dermal fillers last?", a: "Results typically last 12-18 months depending on the treatment area, product used, and individual metabolism. Lip fillers tend to last 6-12 months, while cheek and jawline fillers can last up to 18 months." },
                    { v: "pain", q: "Do dermal fillers hurt?", a: "Most patients describe the sensation as mild discomfort rather than pain. We use topical numbing cream and most fillers contain lidocaine for comfort. Treatment is well-tolerated." },
                    { v: "natural", q: "Will fillers look natural?", a: "With an experienced practitioner, absolutely. The 'overfilled' look comes from poor technique or excessive volume. Our approach prioritises subtle, balanced results that enhance rather than alter your appearance." },
                    { v: "combine", q: "Can dermal fillers be combined with Botox?", a: "Yes, many patients benefit from combining both. Fillers restore volume and structure whilst Botox addresses dynamic expression lines. Your doctor will advise on the best approach during consultation." },
                    { v: "reverse", q: "Can dermal fillers be reversed?", a: "Yes, hyaluronic acid fillers can be dissolved using an enzyme called hyaluronidase. This provides an important safety measure and allows adjustments if needed." },
                  ].map((faq) => (
                    <AccordionItem key={faq.v} value={faq.v} className="border-white/10">
                      <AccordionTrigger className="text-white hover:text-[#C9A050] text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-white/60">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* RIGHT — Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <DermalFillersSidebar />
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
          <DermalFillersSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Dermal Fillers London - Complete Guide to Facial Enhancement</h2>
          <p>
            Dermal fillers London at CosmeDocs Harley Street. Doctor-led hyaluronic acid filler treatments for lips,
            cheeks, jawline, chin, tear trough, and temples. GMC-registered doctors providing natural-looking facial
            rejuvenation since 2007 with over 2 million procedures performed. Our full-face approach ensures balanced,
            subtle results that enhance your appearance without altering your identity. Premium hyaluronic acid products
            including Juvederm and Restylane range. Treatments include lip fillers, cheek fillers, jawline filler,
            chin filler, tear trough filler, temple filler, non-surgical nose job, nasolabial fold treatment, and
            marionette line correction. All fillers are biocompatible and fully reversible with hyaluronidase.
            Our aesthetics is invisible art. Bold, natural, always your way. Consultation-led approach with honest
            advice and realistic expectations. CQC registered clinic in London's medical district.
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
