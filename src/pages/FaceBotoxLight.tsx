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
import BotoxSidebarLight from '@/components/botox/BotoxSidebarLight';
import BotoxPriceBuilder from '@/components/botox/BotoxPriceBuilder';

import crowsFeetThumb from '@/assets/crows-feet-filler-thumb.jpg';
import deepStaticLinesImg from '@/assets/botox-deep-static-lines-before-after.jpg';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useT, useLanguage } from '@/i18n/LanguageContext';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';
import type { SupportedLanguage } from '@/i18n/types';

export default function FaceBotoxLight() {
  const t = useT('botox');
  const { language } = useLanguage();
  const hreflangLinks = generateHreflangLinks('botox');
  const canonicalUrl = getCanonicalUrl(language, 'botox');

  const seoData = generateSEOMetadata(
    "Botox London | Doctor-Led Anti-Wrinkle The Procedure | Cosmedocs Harley Street",
    "Botox London at Cosmedocs Harley Street. Doctor-led anti-wrinkle treatment since 2007 — natural, subtle, GMC-registered. Transparent pricing, free consultation.",
    "/treatments/botox/"
  );

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalPractice",
    "name": "Cosmedocs",
    "url": "https://www.cosmedocs.com",
    "telephone": "+44 20 3733 3227",
    "areaServed": [
      { "@type": "City", "name": "London" },
      { "@type": "AdministrativeArea", "name": "Greater London area" }
    ],
    "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1200" }
  };

  const botoxLondonFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does Botox cost in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox in London at Cosmedocs starts from £175 for a single area and £295 for three areas. As an add-on to a filler appointment the price drops to £50 per area. All treatments are doctor-led at our Harley Street clinic."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the best place to get Botox in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cosmedocs is a doctor-led aesthetic clinic on Harley Street, London W1G — practising since 2007 with GMC-registered doctors and over one million procedures performed across the group. Choose a clinic where a registered medical doctor — not a non-medical practitioner — performs every assessment and injection."
        }
      },
      {
        "@type": "Question",
        "name": "Is Botox in London safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When administered by a GMC-registered doctor in a CQC-aligned clinical setting, Botox is one of the most studied and safest aesthetic treatments. Cosmedocs works with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments."
        }
      },
      {
        "@type": "Question",
        "name": "How long does Botox last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients see results last between three and four months. With consistent maintenance, the muscle re-trains and intervals can extend to four to six months."
        }
      }
    ]
  };

  const treatmentAreaCards = [
    { title: "Brow & Forehead", areas: ["Forehead Creases", "Glabellar Lines (Frown)", "Periorbital Lines (Crow's Feet)", "Chemical Brow Lift"], description: "The classic upper-third indications — expression lines that appear when the brow furrows, raises or smiles." },
    { title: "Nose, Lips & Chin", areas: ["Nasal Scrunch Lines (Bunny)", "Lip Flip (Perioral Micro-dose)", "High-Gum Smile Correction", "Chin Cobblestoning"], description: "Micro-dose techniques for the perioral zone — lifting, softening and refining the lower half of the face." },
    { title: "Lower Face Contour", areas: ["Masseter Reduction (Masseter Slimming)", "Nefertiti-Style Neck Lift", "Vertical Platysmal Bands"], description: "Sculpting the jawline and neck — from masseter slimming to Nefertiti-style vertical support." },
    { title: "Specialist", areas: ["Trapezius (Trap-Tox / Shoulder Slimming)", "Hyperhidrosis", "Migraines"], description: "Medical indications the public rarely hears about — from sweat control to migraine and trap-tox off-face uses." }
  ];

  /* ── Colour tokens for light grey & gold theme ── */
  const bg = "bg-[#F5F5F3]";           // warm light grey
  const cardBg = "bg-white";
  const cardBorder = "border-gray-200";
  const textH = "text-gray-900";        // headings
  const textBody = "text-gray-600";     // body
  const textMuted = "text-gray-400";    // muted / labels
  const textLink = "text-[#C9A050]";
  const gold = "#C9A050";
  const goldBg = "bg-[#C9A050]";
  const goldText = "text-[#C9A050]";

  return (
    <>
      <Helmet>
        <title>{t('meta.title', seoData.title)}</title>
        <meta name="description" content={t('meta.description', seoData.description)} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} />
        ))}
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(botoxLondonFaqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden botox-mobile-refine`}>
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: t('breadcrumbThe Procedures', 'The Procedures'), path: '/treatments' }]} currentPage={t('breadcrumbBotox', 'Botox')} variant="light" />
        </div>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-4">
          {/* Soft gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
              style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, rgba(201,160,80,0.02) 40%, transparent 70%)` }} />
            <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(201,160,80,0.04) 50%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left — Content */}
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    {t('heroLocation', '8-10 Harley Street, London W1G 9PF')}
                  </div>

                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    {t('heroTitle1', 'The art of')}
                    <span className={`block font-semibold ${goldText}`}>{t('heroTitle2', 'invisible anti-wrinkle')}</span>
                  </h1>
                  <p className={`text-sm ${goldText}/60 tracking-widest uppercase mb-4 font-light`}>{t('heroTagline', 'Natural · Longer Lasting Your Results')}</p>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    {t('heroDesc', 'Your comprehensive guide to Botox. Understanding how it works, what to expect, and achieving results so natural they\'re undetectable.')}
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    {t('heroSubdesc', 'At CosmeDocs, anti-wrinkle treatments are practised with restraint and precision. GMC-registered doctors deliver subtle, doctor-led care designed to refresh — never overwhelm. Est. 2007, we\'ve focused on natural results that look effortless, not obvious.')}
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                    className={`group ${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20`}
                  >
                    {t('bookConsultation', 'Reserve a Consultation')} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 rounded-full px-8 py-6 text-base font-medium border border-gray-300"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Speak With <span className="text-[#C9A050]">A</span>esthetic <span className="text-[#C9A050]">I</span>ntelligence
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> {t('trustGMC', 'GMC Registered')}</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> {t('trust17Years', '17+ Years')}</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> {t('trustRating', '4.9 Rating')}</span>
                </motion.div>
              </div>

              {/* Right — Wrinkle wave lines */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
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
                      ].map((wave, i) => (
                        <path key={i} d={wave.d} stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity={wave.opacity} />
                      ))}
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowLight)" />
                      <defs>
                        <radialGradient id="centreGlowLight" cx="0.5" cy="0.5" r="0.5">
                          <stop offset="0%" stopColor={gold} stopOpacity="0.12" />
                          <stop offset="100%" stopColor={gold} stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Established Practice badge */}
                  <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${goldBg} flex items-center justify-center`}><Star className="h-5 w-5 text-white fill-white" /></div>
                      <div>
                        <div className={`text-sm font-semibold ${textH}`}>Established Practice</div>
                        <div className={`text-xs ${textMuted}`}>Est. 2007</div>
                      </div>
                    </div>
                  </div>

                  {/* Ultra-Fine Injection infographic */}
                  <div className="absolute top-[45%] -right-2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200 w-[260px]">
                    <div className="flex items-center gap-2 mb-3">
                      <Syringe className="w-4 h-4 text-[#C9A050]" />
                      <span className={`text-xs font-semibold ${goldText} uppercase tracking-wider`}>Ultra-Fine Injection</span>
                    </div>
                    <svg viewBox="0 0 220 80" className="w-full mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="45" cy="38" r="20" stroke={gold} strokeWidth="1.5" fill={gold} fillOpacity="0.1" />
                      <text x="45" y="42" fill={gold} fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">0.20mm</text>
                      <text x="45" y="10" fill="#555" fontSize="8" fontFamily="sans-serif" textAnchor="middle">33G Needle</text>
                      <circle cx="130" cy="38" r="7" stroke="#aaa" strokeWidth="0.8" fill="#aaa" fillOpacity="0.1" />
                      <text x="130" y="41" fill="#888" fontSize="6" fontFamily="sans-serif" textAnchor="middle">0.07</text>
                      <text x="130" y="10" fill="#888" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Human Hair</text>
                      <text x="88" y="42" fill="#ccc" fontSize="9" fontFamily="sans-serif" textAnchor="middle">vs</text>
                      <text x="110" y="75" fill="#bbb" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Cross-sectional diameter</text>
                    </svg>
                    <p className={`text-[10px] ${textMuted} leading-relaxed`}>One of the finest gauges available in aesthetic medicine — barely perceptible, only around three times the width of a strand of hair.</p>
                  </div>

                  {/* Review teaser card */}
                  <div className="absolute bottom-16 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-black/5 border border-gray-200 max-w-[300px]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full ${goldBg} flex items-center justify-center text-white text-xs font-bold`}>E</div>
                      <div>
                        <div className={`text-sm font-medium ${textH}`}>Charlotte R.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"People keep complimenting my skin and asking what routine I've started — nobody has guessed I've had any treatment at all."</p>
                    <Link to="/testimonials" className={`inline-flex items-center gap-1 text-xs ${goldText} mt-2 hover:underline`}>Read verified patient stories</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BOTOX LONDON — Local Authority Block
        ═══════════════════════════════════════════ */}
        <section id="botox-london" aria-labelledby="botox-london-heading" className="relative py-16 px-4 sm:px-6 border-y border-[#C9A050]/15 bg-gradient-to-b from-white via-[#FAF7F0]/40 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={`text-xs ${goldText}/70 tracking-[0.25em] uppercase mb-3 font-light`}>Harley Street · W1G</p>
              <h2 id="botox-london-heading" className={`text-3xl md:text-5xl font-extralight ${textH} mb-4 leading-tight max-w-3xl`}>
                <span className={`${goldText} font-light`}>Botox London</span> — doctor-led on Harley Street since 2007
              </h2>
              <div className="w-12 h-px bg-[#C9A050]/50 mb-8" />
              <p className={`${textBody} text-base md:text-lg leading-relaxed font-light max-w-3xl mb-10`}>
                London has more aesthetic clinics than any other city in the UK — and the largest gap in quality between them. CosmeDocs sits at the medical end of that spectrum: a doctor-led practice on Harley Street, where every Botox consultation, assessment and injection is performed by a GMC-registered doctor — never a nurse-led franchise or non-medical practitioner. The result is the quietest kind of anti-wrinkle treatment in the capital: refined, restrained, invisible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <MapPin className="w-5 h-5 text-[#C9A050]" />,
                  title: "Where we are",
                  body: <>8–10 Harley Street, London W1G 9PF — the historic medical mile in Marylebone, a four-minute walk from Oxford Circus, Bond Street and Regent's Park stations. Easily reached from Mayfair, Soho, Knightsbridge, Chelsea, Kensington, the City and Canary Wharf.</>
                },
                {
                  icon: <Stethoscope className="w-5 h-5 text-[#C9A050]" />,
                  title: "Who treats you",
                  body: <>Every appointment is led by a GMC-registered doctor with aesthetic surgical training. We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments — the standard most London Botox clinics never meet.</>
                },
                {
                  icon: <Award className="w-5 h-5 text-[#C9A050]" />,
                  title: "The Harley Street standard",
                  body: <>A doctor-led practice on London's medical mile since 2007 — GMC-registered, CQC-aligned, and shaped by protocols refined across more than one million procedures group-wide. Quiet, restrained, repeatable results — never overdone.</>
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}
                >
                  <div className="flex items-center gap-2 mb-3">{item.icon}<p className={`text-sm font-medium ${textH}`}>{item.title}</p></div>
                  <p className={`${textBody} text-sm leading-relaxed font-light`}>{item.body}</p>
                </motion.div>
              ))}
            </div>

            {/* London pricing strip */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white border border-[#C9A050]/20 rounded-3xl p-8 md:p-10 shadow-sm mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <p className={`text-xs ${goldText}/70 tracking-widest uppercase mb-2`}>How much does Botox cost in London?</p>
                  <h3 className={`text-2xl md:text-3xl font-extralight ${textH}`}>Transparent <span className={`${goldText} font-light`}>Botox London prices</span></h3>
                </div>
                <Link to="/botox-price-london/" className={`text-sm ${goldText} hover:underline inline-flex items-center gap-1 self-start md:self-auto`}>Full London pricing guide <ArrowRight className="w-3 h-3" /></Link>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { area: "1 Area (Women)", price: "£275" },
                  { area: "2 Zones (Women)", price: "£325" },
                  { area: "3 Zones (Women)", price: "£395" },
                  { area: "3 Zones (Men) — BroTox", price: "£425" }
                ].map((p) => (
                  <div key={p.area} className="border border-gray-200 rounded-2xl p-5">
                    <p className={`text-xs ${textMuted} mb-1`}>{p.area}</p>
                    <p className={`text-2xl font-light ${goldText}`}>{p.price}</p>
                  </div>
                ))}
              </div>
              <p className={`text-xs ${textMuted} mt-6 leading-relaxed font-light`}>
                Add-on Botox from £50 per area when combined with a filler or skin treatment. All prices include the doctor's consultation, follow-up review and any micro-adjustment in the first three weeks.
              </p>
            </motion.div>

            {/* London cluster anchors */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={`text-xs ${goldText}/70 tracking-widest uppercase mb-4`}>Botox London — explore the hub</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Botox prices London", to: "/botox-price-london/" },
                  { label: "Botox cost UK", to: "/botox-cost-uk/" },
                  { label: "Masseter Botox London", to: "/treatments/masseter-botox/" },
                  { label: "Nefertiti-Style Neck Lift London", to: "/treatments/nefertiti-botox-facelift/" },
                  { label: "Bruxism & TMJ Botox", to: "/treatments/bruxism-botox/" },
                  { label: "Trap Tox London", to: "/treatments/trap-botox/" },
                  { label: "Harley Street Injectables", to: "/harley-street-injectables/" },
                  { label: "Botox units explained", to: "/botox-units-explained/" },
                  { label: "How long does Botox last", to: "/how-long-does-botox-last/" },
                  { label: "Cheap vs expensive Botox", to: "/cheap-botox-vs-expensive/" },
                  { label: "Before & after gallery", to: "/before-after/botox/" }
                ].map((link) => (
                  <Link key={link.to} to={link.to} className={`px-4 py-2 bg-white border border-[#C9A050]/20 rounded-full text-xs ${textBody} hover:${goldText} hover:border-[#C9A050]/50 transition-all font-light`}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
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
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Understanding <span className={`${goldText} font-light`}>Anti-Wrinkle Treatment?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Botox is the brand name for botulinum toxin type A, a purified protein derived from
                        the bacterium <em>Clostridium botulinum bacterium</em>. When injected in controlled, tiny doses,
                        it temporarily relaxes targeted muscles by blocking nerve signals — smoothing dynamic
                        wrinkles whilst preserving natural expression.
                      </p>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        Originally developed for medical conditions like muscle spasms and crossed eyes,
                        Botox gained <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className={`${goldText}/70 hover:${goldText} underline underline-offset-2 transition-colors`}>MHRA & FDA approval</a> for
                        cosmetic use in 2002. Today, it's the world's most popular non-surgical aesthetic treatment.
                      </p>
                      <ul className="space-y-2">
                        {["Three decades of clinical evidence with a robust safety record", "Approved by the MHRA in the UK, the FDA in the US and international regulators", "The Procedure takes 10–20 minutes with no downtime", "Fully reversible — effects simply wear off"].map((fact) => (
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
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    The Science of <span className={`${goldText} font-light`}>Works</span>
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
                            <div key={s.step} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 text-center shadow-sm`}>
                              <div className="bg-[#C9A050]/15 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                                <span className={`text-sm font-medium ${goldText}`}>{s.step}</span>
                              </div>
                              <p className={`text-sm font-medium ${textH}/70 mb-1`}>{s.title}</p>
                              <p className={`${textMuted} text-xs font-light`}>{s.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
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

              {/* The Procedure Zones */}
              <section id="treatment-areas">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    The Procedure <span className={`${goldText} font-light`}>Zones</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className={`${textBody} text-sm leading-relaxed font-light mb-6`}>
                    Anti-wrinkle treatment covers a wide anatomical range — each area demands its own dosing map, needle angle and depth for optimal results.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {treatmentAreaCards.map((card) => (
                      <div key={card.title} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                        <h3 className="text-lg font-semibold mb-2" style={{ color: '#111827' }}>{card.title}</h3>
                        <p className={`${textMuted} text-xs font-light mb-3`}>{card.description}</p>
                        <ul className="space-y-1.5">
                          {card.areas.map((area) => (
                            <li key={area} className={`flex items-center gap-2 text-xs ${textBody} font-light`}>
                              <Check className="w-3 h-3 text-[#C9A050]/60" /> {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Masseter Slimming", to: "/treatments/masseter-botox/" },
                      { label: "Lip Flip (Perioral Micro-dose)", to: "/treatments/lip-flip/" },
                      { label: "Micro-Anti-Wrinkle for Oily Skin", to: "/treatments/oily-skin-botox/" },
                    ].map((link) => (
                      <Link key={link.label} to={link.to} className={`px-4 py-2 ${cardBg} border ${cardBorder} rounded-full text-xs ${textBody} hover:${goldText} hover:border-[#C9A050]/30 transition-all font-light`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Who is Suitable */}
              <section id="who-is-suitable">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Who Should Consider <span className={`${goldText} font-light`}>Right for You?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>Early-Onset Prejuvenation</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>Suited to patients typically 26–33 with faint dynamic lines. Slows the etching of new creases by softening the underlying muscle pattern movements before they create permanent creases.</p>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>Established-Line Correction</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>Aimed at settled lines visible even when the face is relaxed. Softens what's already there and prevents further deepening. Often layered wimbined with other treatments.</p>
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-4`}>Age & Suitability</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          {[
                            { age: "20s–30s", text: "Prejuvenation approach — micro-dosed to slow early movement lines while keeping the face fully expressive." },
                            { age: "40s–50s", text: "Restorative approach — measured dosing to relax fixed creases, frequently paired with volumising fillers." },
                            { age: "60s+", text: "Part of comprehensive rejuvenation. Works alongside other treatments to refresh appearance naturally." },
                          ].map((a) => (
                            <div key={a.age}>
                              <p className={`${goldText}/70 font-medium text-xs mb-1`}>{a.age}</p>
                              <p className={`${textMuted} text-xs font-light`}>{a.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Anti-Wrinkle for Men */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Anti-Wrinkle for <span className={`${goldText} font-light`}>Men</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Male Botox treatments have seen significant growth. Men typically seek treatment to maintain a
                        competitive professional appearance whilst looking refreshed, not "done."
                      </p>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <div className="grid md:grid-cols-2 gap-5">
                        {[
                          { title: "Higher Dosing Required", desc: "Male anatomy tends to carry denser, stronger facial musculature — typically requiring 25–40% more toxin unit-for-unit." },
                          { title: "Male Anti-Wrinkle Approach", desc: "The Procedure is tailored to preserve masculine features — strong brows, defined forehead — whilst reducing lines." },
                          { title: "Different Objectives", desc: "The male brief is usually 'less tired, less tense' rather than 'younger' — restraint achieves that better than dose escalation." },
                          { title: "Discreet Your Results", desc: "The benchmark is undetectable — colleagues register that you look sharper, never that you've had work done." },
                        ].map((item) => (
                          <div key={item.title}>
                            <p className={`${goldText}/70 font-medium text-xs mb-1`}>{item.title}</p>
                            <p className={`${textMuted} text-xs font-light`}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Your Results The Procedure Timeline */}
              <section id="results">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Your Results <span className={`${goldText} font-light`}>The Procedure Timeline</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        {[
                          { title: "Days 1–3 · Onset phase", desc: "Early softening appears — most patients notice small shifts in how muscles fire." },
                          { title: "Days 7–14 · Full effect", desc: "Peak result — treated lines settle and the muscles fully quieten." },
                          { title: "Months 3–6 · Longevity window", desc: "Your Results typically last 3–6 months. Duration varies by metabolism, area, and lifestyle." },
                        ].map((t) => (
                          <div key={t.title} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                            <div>
                              <p className={`text-xs font-medium ${textH}/60 mb-0.5`}>{t.title}</p>
                              <p className={`${textMuted} text-xs font-light`}>{t.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>What Changes How Long It Lasts</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "Metabolism", desc: "A quicker metabolism tends to shorten longevity" },
                          { label: "The Procedure area", desc: "High-movement zones (like the forehead) fade sooner" },
                          { label: "Dosage", desc: "Larger doses generally give a longer window" },
                          { label: "Consistency", desc: "Repeat treatments typically extend interval times" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" />
                            <span><strong className={`${textBody}`}>{f.label}:</strong> {f.desc}</span>
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
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    The Science of Fits Into <span className={`${goldText} font-light`}>Full-Face Rejuvenation</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Knowing where anti-wrinkle ends and <Link to="/treatments/dermal-fillers/" className={`${goldText}/70 hover:${goldText} underline underline-offset-2 transition-colors`}>dermal fillers begin</Link> helps
                        you make informed decisions about your treatment plan.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${goldText}/80 mb-3`}>Botox</p>
                        <p className={`${goldText}/50 text-xs mb-3 font-light`}>Quietens movement → smooths expression lines</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Creases only visible on movement</li>
                          <li>• Glabella, forehead, periorbital creases</li>
                          <li>• Early-onset use</li>
                          <li>• Your Duration: three to six months</li>
                        </ul>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/60 mb-3`}>Dermal Fillers</p>
                        <p className={`${textMuted} text-xs mb-3 font-light`}>Rebuilds volume → replaces lost structure</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Static creases at rest</li>
                          <li>• Cheeks, perioral zone, nasolabial folds</li>
                          <li>• Structural volumising</li>
                          <li>• Your Duration: six to eighteen months</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to="/treatments/dermal-fillers/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:${goldText} text-xs font-light`}>
                        Explore Dermal Fillers <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Selecting the Right Practice */}
              <section id="choosing-a-clinic">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Selecting the Right <span className={`${goldText} font-light`}>Practice</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        London is saturated with providers — the criteria below help you separate a medical practice from a franchise, and qualified practitioners.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: <Stethoscope className="w-4 h-4 text-[#C9A050]/60" />, title: "Every Step Doctor-Led", desc: "Insist that a GMC-registered doctor performs — or directly supervises — every assessment and injection, with formal training in facial anatomy." },
                        { icon: <Building className="w-4 h-4 text-[#C9A050]/60" />, title: "How to Vet a Practice", desc: "Prioritise CQC-registered premises, membership of recognised medical bodies and a decade-plus reputation over social-media popularity." },
                        { icon: <Users className="w-4 h-4 text-[#C9A050]/60" />, title: "Consultation Journey", desc: "Expect a proper consultation that reviews your history, maps your options and calibrates expectations before any needle appears." },
                        { icon: <Star className="w-4 h-4 text-[#C9A050]/60" />, title: "Outcomes & Feedback", desc: "Cross-reference independent review platforms and real before/after galleries — patterns matter more than any single testimonial." },
                      ].map((c) => (
                        <div key={c.title} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-2">{c.icon}<p className={`text-xs font-medium ${textH}/60`}>{c.title}</p></div>
                          <p className={`${textMuted} text-xs font-light`}>{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* UK Framework & UK Framework */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    UK Framework & <span className={`${goldText} font-light`}>UK Framework</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Botox has an excellent safety profile when administered by trained medical professionals.
                        It's approved by the FDA, MHRA, and regulatory bodies worldwide, with over 30 years of clinical use.
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>UK UK Frameworks</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Anti-wrinkle toxin is a prescription-only medicine in the UK</li>
                            <li>• Prescribing is restricted to doctors, nurse prescribers or dentists</li>
                            <li>• A face-to-face consultation is legally required</li>
                            <li>• Practices performing regulated activities must hold CQC registration</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>Inside Your Appointment</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Complete health screen</li>
                            <li>• Aesthetic goals discussion</li>
                            <li>• Walkthrough of options</li>
                            <li>• Expectation-setting agreed</li>
                            <li>• Informed consent signed</li>
                          </ul>
                        </div>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-xl p-5 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-2`}>When Botox Is Not Advised</p>
                        <p className={`${textMuted} text-xs font-light mb-2`}>Botox is not recommended for anyone who:</p>
                        <ul className={`grid md:grid-cols-2 gap-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Is pregnant or breastfeeding</li>
                          <li>• Lives with a neuromuscular condition</li>
                          <li>• Presents with active infection at the injection site</li>
                          <li>• Has a known botulinum toxin allergy</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Getting Ready & Post-Treatment Care */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Getting Ready & <span className={`${goldText} font-light`}>Post-Treatment Care</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        A few simple steps before and after your appointment keep results clean and recovery quick. Tap below to read the full checklist.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-3`}>Before The Procedure</p>
                        <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                          {["Pause aspirin, ibuprofen and other blood-thinners for a week", "Skip alcohol for one to two days beforehand", "Come with a bare, cleansed face", "Disclose every medication and supplement you take"].map((t) => (
                            <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-3`}>After The Procedure</p>
                        <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                          {["Remain upright for the first four hours afterwards", "Keep hands off the injection zones", "No gym, sauna or alcohol for 24 hours", "Delay facials and facial massage for a fortnight"].map((t) => (
                            <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Verified Patient Your Results */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Verified Patient <span className={`${goldText} font-light`}>Your Results</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-1 gap-4 mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/frown-lines-before-after-preview.jpg" alt="Glabellar frown lines before and after Cosmedocs anti-wrinkle treatment" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/forehead-lines-before-after-preview.jpg" alt="Forehead creases before and after Cosmedocs anti-wrinkle treatment" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>
                    All images show real patients treated by our doctors at our Harley Street clinic. Your Results vary depending on facial anatomy and treatment plan.
                  </p>
                  <Link to="/before-after/botox/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:${goldText} text-xs font-light transition-colors`}>
                    Browse the complete Botox before &amp; after archive → <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </section>

              {/* Beyond Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Past the Injection: <span className={`${goldText} font-light`}>Persistent Lines at Rest</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Botox alone rarely tells the full story. Over 15+ years we've refined combination protocols that layer complementary modalities — turning static lines (those visible at rest) back into dynamic ones that only appear with movement.
                      </p>
                    }
                  >
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`${goldText}/60 font-medium text-xs uppercase tracking-wider mb-3`}>The Challenge</p>
                        <p className={`${textMuted} text-xs font-light mb-4`}>
                          Deep lines that have been etched into the skin over years don't fully disappear with Botox alone. Botox relaxes the muscle, so lines improve — but at rest, those creases remain visible.
                        </p>
                        <p className={`${goldText}/60 font-medium text-xs uppercase tracking-wider mb-3`}>The Cosmedocs Approach</p>
                        <p className={`${textMuted} text-xs font-light`}>
                          By pairing anti-wrinkle with focused adjuncts such as <strong className={`${textBody}`}>Polynucleotide skin regeneration</strong>, <strong className={`${textBody}`}>dermal fillers begin</strong>, and <strong className={`${textBody}`}>skin boosters</strong>, we treat the line itself — not just the muscle causing it.
                        </p>
                      </div>

                      {/* Video Thumbnail */}
                      <a href="https://www.instagram.com/reel/DBrvvuQOESh/" target="_blank" rel="noopener noreferrer"
                        className={`group flex items-center gap-4 rounded-xl border ${cardBorder} ${cardBg} hover:bg-gray-50 p-3 transition-all duration-300 hover:border-[#C9A050]/30 shadow-sm`}>
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={crowsFeetThumb} alt="Periorbital line-fill demonstration" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/15 transition-colors">
                            <Play className="w-5 h-5 text-white fill-white/80" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`${textH}/60 text-xs font-medium mb-0.5 group-hover:${goldText} transition-colors`}>Periorbital Lines (Crow's Feet) Filler Technique</p>
                          <p className={`${textMuted} text-[10px] leading-relaxed font-light`}>See how micro-droplets of hyaluronic acid are laid superficially to erase fine lines.</p>
                        </div>
                        <ExternalLink className={`w-3 h-3 ${textMuted} group-hover:${goldText} flex-shrink-0 transition-colors`} />
                      </a>

                      <div className="bg-[#C9A050]/5 border border-[#C9A050]/20 rounded-xl p-5">
                        <ul className="space-y-2">
                          {[
                            { bold: "Micro-dosed anti-wrinkle", desc: "— multi-angle treatment removes the need for aggressive single-modality dosing" },
                            { bold: "Understated, natural outcomes", desc: "— smaller Botox doses deliver more natural movement while smoothing skin at rest" },
                            { bold: "Better baseline skin quality", desc: "— regenerative options like polynucleotides and skin boosters rebuild dermal quality" },
                            { bold: "Better value over the long term", desc: "— fewer clinic visits, longer-lasting outcomes and healthier baseline skin" },
                          ].map((item) => (
                            <li key={item.bold} className={`flex items-start gap-2 text-xs ${textMuted} font-light`}>
                              <CheckCircle className="w-3 h-3 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                              <span><strong className={`${textBody}`}>{item.bold}</strong> {item.desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 ${goldBg} hover:bg-[#B8924A] text-white rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300`}>
                          Reserve Your Appointment <ArrowRight className="w-3 h-3" />
                        </a>
                        <button onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                          className={`inline-flex items-center gap-2 border ${cardBorder} ${textBody} hover:${textH} hover:bg-gray-100 rounded-full px-5 py-2.5 text-xs font-light transition-all duration-300`}>
                          <Sparkles className="w-3 h-3 text-[#C9A050]/60" /> Speak With AI
                        </button>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why Patients Choose Cosmedocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Why Patients Choose <span className={`${goldText} font-light`}>Cosmedocs for Anti-Wrinkle Treatment?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "Experience", desc: "Over one million procedures group-wide since 2007" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "Training", desc: "Harley Street Institute trainers" },
                      { icon: <Shield className="w-4 h-4" />, title: "Quality", desc: "MHRA & FDA-approved products" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "Philosophy", desc: "Aesthetics without a signature" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "Doctor-Led", desc: "GMC-registered doctors" },
                    ].map((w) => (
                      <div key={w.title} className="text-center">
                        <div className="bg-[#C9A050]/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-[#C9A050]/60">{w.icon}</div>
                        <p className={`text-xs font-medium ${textH}/60 mb-0.5`}>{w.title}</p>
                        <p className={`${textMuted} text-[10px] font-light`}>{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section id="faqs">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Common Patient <span className={`${goldText} font-light`}>Enquiries</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "what-is", q: "What actually is Anti-Wrinkle Treatment?", a: "Botox is the trade name for botulinum toxin A — a purified neuroprotein that briefly quietens specific muscles. It has been safely used for over 30 years in both medical and cosmetic applications." },
                      { v: "pain", q: "Is Botox painful?", a: "Most patients describe the sensation as a brief pin-prick. Ultra-fine 33G needles and topical numbing keep discomfort minimal if required. The procedure is quick, typically completed in 10–20 minutes." },
                      { v: "safe", q: "How safe is Anti-Wrinkle Treatment?", a: "In the hands of GMC-registered doctors, Botox carries one of the strongest safety profiles in aesthetic medicine, endorsed by regulatory bodies worldwide and has been used clinically for over three decades." },
                      { v: "results", q: "How soon will results show?", a: "Initial effects typically appear within 3–5 days, with full results visible at 10–14 days. Your Results generally last 3–6 months, depending on individual factors." },
                      { v: "natural", q: "Will I look frozen or expressionless?", a: "Not in experienced medical hands. The aim is measured relaxation — smooth at rest, still expressive on movement — never frozen expression. The 'frozen' look comes from over-treatment, which we avoid." },
                      { v: "suitable", q: "Who's a good candidate for Anti-Wrinkle Treatment?", a: "Botox is suitable for adults aged 18+ seeking to reduce or prevent facial lines. It works well for preventative treatment in your 20s–30s and corrective treatment for established lines." },
                      { v: "difference", q: "Botox vs dermal fillers — what's the real difference?", a: "Anti-wrinkle injections quieten movement to smooth expression lines; fillers rebuild volume where tissue has thinned soften static lines. They treat different concerns and are often used together." },
                    ].map((faq) => (
                      <AccordionItem key={faq.v} value={faq.v} className="border-gray-200">
                        <AccordionTrigger className="text-gray-700 hover:text-[#C9A050] text-left text-sm font-light">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-xs font-light">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <Link to="/botox-faqs/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:${goldText} text-xs font-light transition-colors`}>
                      See the full Botox FAQ <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link to="/botox-cost-uk/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:${goldText} text-xs font-light transition-colors`}>
                      How our Botox pricing is structured <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              </section>
            </div>

            {/* RIGHT — Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <BotoxSidebarLight />
              </div>
            </aside>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            FULL-WIDTH CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-3xl font-light mb-4 ${textH}`}>
                Your Appointment <span className={goldText}>Starts Here</span>
              </h2>
              <p className={`${textBody} mb-8`}>Measured care from Harley Street doctors</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className={`${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6`}
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Reserve a Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  <Phone className="w-4 h-4 mr-2" /> 0333 055 1503
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500/50 text-green-600 hover:bg-green-500 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.open('https://wa.me/447535076003', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Pricing */}
        <section className="lg:hidden py-12 px-4 bg-white">
          <BotoxSidebarLight />
        </section>

        {/* ═══════════════════════════════════════════
            BOTOX LONDON — VISIBLE SEO CONTENT
        ═══════════════════════════════════════════ */}
        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">Harley Street · London W1G</p>
            <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-6 leading-tight`}>
              Botox in London — Harley Street since 2007
            </h2>
            <p className={`text-base ${textBody} font-light leading-relaxed mb-6`}>
              A doctor-led practice on the UK's most established medical address. GMC-registered doctors, a quiet and restrained approach, and protocols refined across more than one million procedures group-wide.
            </p>

            <ExpandableSection
              preview={
                <p className={`text-sm ${textMuted} font-light leading-relaxed`}>
                  Read the full London Botox guide — what to expect, pricing context, deep-line clinical notes and the most asked questions.
                </p>
              }
            >
              <div className="mt-6 space-y-6">
                <p className={`text-base ${textBody} font-light leading-relaxed`}>
                  Cosmedocs is a doctor-led aesthetic clinic on Harley Street, the UK's most established address for medical aesthetics. Our London team — all GMC-registered doctors — has delivered anti-wrinkle treatment to discerning patients since 2007. Across the wider group we have performed over one million procedures, refining a quiet, restrained approach that prizes natural movement over a frozen finish.
                </p>
                <p className={`text-base ${textBody} font-light leading-relaxed`}>
                  For Londoners weighing up where to have Botox, the question is rarely about the molecule — every UK clinic uses the same regulated botulinum toxin. The variable is the hand, the eye, and the medical training behind the syringe. Our doctors assess your facial anatomy, expression patterns and skin quality before deciding dose, depth and dilution. The result is anti-wrinkle treatment so subtle it is invisible — exactly as our motto intends.
                </p>
                <p className={`text-sm ${textMuted} font-light leading-relaxed`}>
                  London Botox prices vary widely — from £99 high-street rooms to £600 boutique injectors. Cosmedocs sits deliberately in the middle, with transparent doctor-led pricing and no consultation fee. The aim is value through expertise, not the lowest possible headline.
                </p>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="bg-[#F5F5F3] p-6 rounded-2xl border border-gray-100">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">From</p>
                    <p className="text-3xl font-light text-gray-900 mb-1">£175</p>
                    <p className="text-sm text-gray-600 font-light">Single area, doctor-led</p>
                  </div>
                  <div className="bg-[#F5F5F3] p-6 rounded-2xl border border-gray-100">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Three areas</p>
                    <p className="text-3xl font-light text-gray-900 mb-1">£295</p>
                    <p className="text-sm text-gray-600 font-light">Most popular package</p>
                  </div>
                  <div className="bg-[#F5F5F3] p-6 rounded-2xl border border-gray-100">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Add-on</p>
                    <p className="text-3xl font-light text-gray-900 mb-1">£50</p>
                    <p className="text-sm text-gray-600 font-light">Per area with filler appointment</p>
                  </div>
                </div>

                {/* Deep static lines clinical note */}
                <div className="p-6 bg-[#FAFAF8] border border-gray-200 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        aria-label="Enlarge clinical image — deep static line treatment"
                        className="shrink-0 group relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200 hover:border-[#C9A050]/60 transition-all"
                      >
                        <img
                          src={deepStaticLinesImg}
                          alt="Cosmedocs Botox patient — deep static forehead lines combined with skin needling, before and after"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute bottom-1 right-1 text-[9px] uppercase tracking-widest bg-black/60 text-white px-1.5 py-0.5 rounded">Tap to enlarge</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-0 bg-black border-none">
                      <img
                        src={deepStaticLinesImg}
                        alt="Cosmedocs Botox patient — deep static forehead lines, combined treatment, before and after"
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-2 font-light">A note on deep static lines</p>
                    <p className="text-sm text-gray-700 leading-relaxed font-light">
                      Deep static lines — those etched into the skin even at rest — may require additional treatment alongside Anti-Wrinkle for quicker resolution. The patient pictured had been having Anti-Wrinkle for some time; combining anti-wrinkle treatment with skin needling, polynucleotides or resurfacing accelerates softening of the line itself. Botox quiets the muscle; the etched line above it often needs its own course of work.
                    </p>
                  </div>
                </div>

                <h3 className={`text-2xl font-light ${textH} pt-2`}>Frequently asked questions about Botox in London</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="cost" className="border-gray-200">
                    <AccordionTrigger className="text-left text-base font-light text-gray-900 hover:text-[#C9A050]">How much does Botox cost in London?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 font-light leading-relaxed">
                      At Cosmedocs Harley Street, Botox in London starts from £175 for a single area and £295 for three areas. Booked alongside a filler appointment, additional Botox areas are £50 each. All pricing is doctor-led — there is no upcharge for seeing a registered doctor rather than a non-medical practitioner.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="best" className="border-gray-200">
                    <AccordionTrigger className="text-left text-base font-light text-gray-900 hover:text-[#C9A050]">Where is the best place to get Botox in London?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 font-light leading-relaxed">
                      Look for three things: a GMC-registered medical doctor performing the assessment and injection, a clinic with a long track record on Harley Street or another established medical address, and a transparent pricing structure with no hidden consultation fees. Cosmedocs has practised on Harley Street since 2007 and offers complimentary doctor consultations.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="safe" className="border-gray-200">
                    <AccordionTrigger className="text-left text-base font-light text-gray-900 hover:text-[#C9A050]">Is Botox in London safe?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 font-light leading-relaxed">
                      Botox is one of the most extensively studied medications in modern medicine. Safety in London hinges on practitioner training and clinic standards. We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments. Every patient is assessed by a GMC-registered doctor before any product is drawn.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duration" className="border-gray-200">
                    <AccordionTrigger className="text-left text-base font-light text-gray-900 hover:text-[#C9A050]">How long does Botox last?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 font-light leading-relaxed">
                      Most patients enjoy results for three to four months. With consistent maintenance, the treated muscle re-trains and intervals can extend comfortably to four to six months — a quieter, more economical maintenance pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="natural" className="border-gray-200">
                    <AccordionTrigger className="text-left text-base font-light text-gray-900 hover:text-[#C9A050]">Will my Botox look natural?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 font-light leading-relaxed">
                      Our aesthetics is invisible art — bold, natural, always your way. Cosmedocs doctors are trained to dose conservatively, preserve expression and place product with anatomical precision. The intent is refreshment, not a frozen brow. If you prefer a more pronounced result, that is a conversation, not a default.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-3">
                  <Link to="/treatments/anti-wrinkle-treatment/" className="text-sm text-[#C9A050] hover:underline">Anti-wrinkle treatment explained →</Link>
                  <span className="text-gray-300">·</span>
                  <Link to="/harley-street-injectables/" className="text-sm text-[#C9A050] hover:underline">Harley Street injectables →</Link>
                  <span className="text-gray-300">·</span>
                  <Link to="/treatments/botox/cost/" className="text-sm text-[#C9A050] hover:underline">Full pricing →</Link>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </section>

        <BotoxPriceBuilder />
      </div>
    </>
  );
}

