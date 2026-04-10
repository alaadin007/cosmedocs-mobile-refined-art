import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Award, Calendar, MapPin, CheckCircle, Star, ArrowRight, Shield, Heart, Check, Activity, Syringe, GraduationCap, Stethoscope, MessageCircle, Sparkles, Building, Users, Phone, Play, ExternalLink } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import BotoxSidebarLight from '@/components/botox/BotoxSidebarLight';
import crowsFeetThumb from '@/assets/crows-feet-filler-thumb.jpg';

export default function FaceBotoxFrench() {
  const canonical = "https://www.cosmedocs.com/fr/botox/";

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
      "addressLocality": "Londres",
      "addressRegion": "Greater London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 20 3733 3227",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Qu'est-ce que le Botox et comment fonctionne-t-il ?", "acceptedAnswer": { "@type": "Answer", "text": "Le Botox (toxine botulique de type A) est une protéine purifiée qui détend temporairement les muscles faciaux ciblés en bloquant les signaux nerveux. Cela réduit l'apparence des rides dynamiques causées par les expressions faciales répétées. Le traitement est utilisé en toute sécurité depuis plus de 30 ans." } },
      { "@type": "Question", "name": "Qui est un candidat approprié pour le Botox ?", "acceptedAnswer": { "@type": "Answer", "text": "Le Botox convient aux adultes de 18 ans et plus. Il fonctionne bien pour les personnes entre 25 et 30 ans recherchant un traitement préventif, ainsi que pour celles ayant des rides établies nécessitant un traitement correctif. Le Botox n'est pas recommandé pendant la grossesse ou l'allaitement." } },
      { "@type": "Question", "name": "Combien de temps durent les résultats du Botox ?", "acceptedAnswer": { "@type": "Answer", "text": "Les résultats du Botox durent généralement de 3 à 6 mois. Les premiers effets apparaissent en 3 à 5 jours, les résultats complets étant visibles à 10-14 jours." } },
      { "@type": "Question", "name": "Quelle est la différence entre le Botox et les fillers ?", "acceptedAnswer": { "@type": "Answer", "text": "Le Botox détend les muscles pour réduire les rides dynamiques (rides qui apparaissent avec le mouvement). Les fillers ajoutent du volume pour restaurer la plénitude perdue et lisser les rides statiques. De nombreux patients bénéficient de la combinaison des deux traitements." } },
      { "@type": "Question", "name": "Comment choisir une clinique de Botox à Londres ?", "acceptedAnswer": { "@type": "Answer", "text": "Recherchez des cliniques dirigées par des médecins avec des praticiens qualifiés, des tarifs transparents, des processus de consultation appropriés et de bonnes évaluations de patients. Vérifiez l'enregistrement CQC." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "Visage supérieur", areas: ["Rides du front", "Rides du lion (glabelle)", "Pattes d'oie", "Lifting des sourcils"], description: "Les zones de traitement Botox les plus courantes, traitant les rides causées par les expressions faciales." },
    { title: "Visage moyen et inférieur", areas: ["Rides du lapin", "Lip Flip", "Sourire gingival", "Fossettes du menton"], description: "Traitements raffinés pour le nez, les lèvres et le menton." },
    { title: "Mâchoire et cou", areas: ["Masséter (amincissement)", "Lifting Néfertiti", "Bandes platysma"], description: "Traitements de contour et lifting pour le bas du visage et le cou." },
    { title: "Spécialisé", areas: ["Trap Tox (épaules)", "Hyperhidrose", "Migraines"], description: "Applications thérapeutiques et corporelles au-delà de l'usage cosmétique." }
  ];

  const bg = "bg-[#F5F5F3]";
  const cardBg = "bg-white";
  const cardBorder = "border-gray-200";
  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldBg = "bg-[#C9A050]";
  const goldText = "text-[#C9A050]";
  const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Botox | Guide Complet Anti-Rides | Cosmedocs Harley Street Londres</title>
        <meta name="description" content="Guide complet du Botox à Londres. Découvrez ce qu'est le Botox, comment il fonctionne, les zones de traitement et les résultats attendus. Soins médicaux dirigés par des médecins à Harley Street depuis 2007." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/botox/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/botox/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/botox/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/botox/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/botox/" />
        <meta property="og:title" content="Botox | Guide Anti-Rides | Cosmedocs Harley Street" />
        <meta property="og:description" content="Guide complet du Botox à Londres. Soins médicaux dirigés par des médecins inscrits à Harley Street." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.cosmedocs.com/default-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="botox londres, botox harley street, traitement anti-rides londres, injections botox, botox cosmétique, meilleure clinique botox londres, botox préventif, botox pour hommes" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Traitements', path: '/treatments' }]} currentPage="Botox" variant="light" />
        </div>

        {/* HERO */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, rgba(201,160,80,0.02) 40%, transparent 70%)` }} />
            <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(201,160,80,0.04) 50%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left — Content */}
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, Londres W1G 9PF
                  </div>

                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    L'art de l'
                    <span className={`block font-semibold ${goldText}`}>anti-rides invisible</span>
                  </h1>
                  <p className={`text-sm ${goldText}/60 tracking-widest uppercase mb-4 font-light`}>Naturel · Résultats durables</p>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    Votre guide complet du Botox. Comprendre son fonctionnement, à quoi s'attendre, et obtenir des résultats si naturels qu'ils sont indétectables.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    Chez CosmeDocs, les traitements anti-rides sont pratiqués avec retenue et précision. Des médecins inscrits au GMC offrent des soins subtils et dirigés, conçus pour rafraîchir — jamais pour submerger. Depuis 2007, nous nous concentrons sur des résultats naturels qui semblent sans effort, pas évidents.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                    className={`group ${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20`}
                  >
                    Réserver une consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 rounded-full px-8 py-6 text-base font-medium border border-gray-300"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Demander au médecin IA
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Inscrit au GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +17 ans</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> Note 4.9</span>
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
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowLightFr)" />
                      <defs>
                        <radialGradient id="centreGlowLightFr" cx="0.5" cy="0.5" r="0.5">
                          <stop offset="0%" stopColor={gold} stopOpacity="0.12" />
                          <stop offset="100%" stopColor={gold} stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Trusted Clinic badge */}
                  <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${goldBg} flex items-center justify-center`}><Star className="h-5 w-5 text-white fill-white" /></div>
                      <div>
                        <div className={`text-sm font-semibold ${textH}`}>Clinique de confiance</div>
                        <div className={`text-xs ${textMuted}`}>Depuis 2007</div>
                      </div>
                    </div>
                  </div>

                  {/* Invisible Needle infographic */}
                  <div className="absolute top-[45%] -right-2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200 w-[260px]">
                    <div className="flex items-center gap-2 mb-3">
                      <Syringe className="w-4 h-4 text-[#C9A050]" />
                      <span className={`text-xs font-semibold ${goldText} uppercase tracking-wider`}>Aiguille invisible</span>
                    </div>
                    <svg viewBox="0 0 220 80" className="w-full mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="45" cy="38" r="20" stroke={gold} strokeWidth="1.5" fill={gold} fillOpacity="0.1" />
                      <text x="45" y="42" fill={gold} fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">0,20mm</text>
                      <text x="45" y="10" fill="#555" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Aiguille 33G</text>
                      <circle cx="130" cy="38" r="7" stroke="#aaa" strokeWidth="0.8" fill="#aaa" fillOpacity="0.1" />
                      <text x="130" y="41" fill="#888" fontSize="6" fontFamily="sans-serif" textAnchor="middle">0,07</text>
                      <text x="130" y="10" fill="#888" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Cheveu humain</text>
                      <text x="88" y="42" fill="#ccc" fontSize="9" fontFamily="sans-serif" textAnchor="middle">vs</text>
                      <text x="110" y="75" fill="#bbb" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Diamètre en coupe</text>
                    </svg>
                    <p className={`text-[10px] ${textMuted} leading-relaxed`}>La plus petite aiguille du secteur — littéralement invisible. Seulement ~3× plus épaisse qu'un cheveu humain.</p>
                  </div>

                  {/* Review teaser card */}
                  <div className="absolute bottom-16 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-black/5 border border-gray-200 max-w-[300px]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full ${goldBg} flex items-center justify-center text-white text-xs font-bold`}>S</div>
                      <div>
                        <div className={`text-sm font-medium ${textH}`}>Sophie L.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"Mes amies n'arrêtent pas de me demander quel soin de peau j'utilise car j'ai l'air tellement fraîche, mais personne ne se doute que j'ai fait quelque chose !"</p>
                    <Link to="/testimonials" className={`inline-flex items-center gap-1 text-xs ${goldText} mt-2 hover:underline`}>Plus d'expériences réelles</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lazy-section">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            <div className="space-y-14">

              {/* Qu'est-ce que le Botox */}
              <section id="what-is-botox">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Qu'est-ce que le <span className={`${goldText} font-light`}>Botox ?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Le Botox est le nom de marque de la toxine botulique de type A, une protéine purifiée dérivée de la bactérie <em>Clostridium botulinum</em>. Injectée en doses infimes et contrôlées, elle détend temporairement les muscles ciblés en bloquant les signaux nerveux — lissant les rides dynamiques tout en préservant l'expression naturelle.
                      </p>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        Développé à l'origine pour des pathologies médicales comme les spasmes musculaires et le strabisme, le Botox a obtenu l'approbation de la FDA pour un usage cosmétique en 2002. C'est aujourd'hui le traitement esthétique non chirurgical le plus populaire au monde.
                      </p>
                      <ul className="space-y-2">
                        {["Plus de 30 ans d'utilisation clinique avec un excellent profil de sécurité", "Approuvé par la FDA, la MHRA et les organismes réglementaires du monde entier", "Le traitement dure 10 à 20 minutes sans temps d'arrêt", "Les effets sont temporaires et entièrement réversibles"].map((fact) => (
                          <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                        ))}
                      </ul>
                      <p>
                        Le terme « Botox » est souvent utilisé de manière générique, mais plusieurs marques existent dont Azzalure, Bocouture et Dysport. Chez CosmeDocs, nous utilisons des produits haut de gamme et agréés pour garantir des résultats cohérents et prévisibles.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Comment ça fonctionne */}
              <section id="how-it-works">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Comment fonctionne <span className={`${goldText} font-light`}>le Botox</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { step: "1", title: "Injection", desc: "De petites quantités sont injectées avec précision dans les muscles ciblés à l'aide d'aiguilles ultra-fines." },
                            { step: "2", title: "Bloc nerveux", desc: "Le Botox bloque la libération d'acétylcholine, empêchant les signaux nerveux d'atteindre les muscles." },
                            { step: "3", title: "Relaxation", desc: "Les muscles ciblés se détendent, lissant la peau et réduisant l'apparence des rides." },
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
                        Les rides dynamiques se forment par les contractions musculaires répétées au fil des années — pensez aux rides qui apparaissent quand vous froncez les sourcils ou plissez les yeux. En relaxant temporairement ces muscles, le Botox lisse les rides existantes et empêche la formation de nouvelles.
                      </p>
                      <p>
                        La clé de résultats naturels réside dans un dosage et un placement précis. Un praticien expérimenté détend les muscles responsables des rides tout en préservant l'expression faciale naturelle.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Zones de traitement */}
              <section id="treatment-areas">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Zones de <span className={`${goldText} font-light`}>traitement</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className={`${textBody} text-sm leading-relaxed font-light mb-6`}>
                    Le Botox peut traiter différentes zones du visage et du corps. Chaque zone nécessite des techniques et dosages différents pour des résultats optimaux.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {treatmentAreaCards.map((card) => (
                      <div key={card.title} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/70 mb-2`}>{card.title}</p>
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
                      { label: "Amincissement mâchoire", to: "/treatments/masseter-botox/" },
                      { label: "Lip Flip", to: "/treatments/lip-flip/" },
                      { label: "Botox peau grasse", to: "/treatments/oily-skin-botox/" },
                    ].map((link) => (
                      <Link key={link.label} to={link.to} className={`px-4 py-2 ${cardBg} border ${cardBorder} rounded-full text-xs ${textBody} hover:text-[#C9A050] hover:border-[#C9A050]/30 transition-all font-light`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Qui est éligible */}
              <section id="who-is-suitable">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Qui est <span className={`${goldText} font-light`}>éligible ?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>Botox préventif</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>Pour ceux entre 25 et 30 ans avec des rides minimales. Prévient la formation des rides en stoppant les mouvements musculaires répétitifs avant qu'ils ne créent des plis permanents.</p>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>Botox correctif</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>Pour les rides et lignes établies visibles au repos. Lisse les plis existants et empêche leur approfondissement. Peut être combiné avec d'autres traitements.</p>
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-4`}>Considérations selon l'âge</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          {[
                            { age: "20-30 ans", text: "Traitement préventif. Faibles doses pour ralentir les premières rides dynamiques. Accent sur la préservation de l'expression naturelle." },
                            { age: "40-50 ans", text: "Traitement correctif. Doses modérées pour lisser les rides établies. Souvent combiné avec des fillers pour le volume." },
                            { age: "60 ans+", text: "Partie d'un rajeunissement complet. Fonctionne en complément d'autres traitements pour rafraîchir l'apparence naturellement." },
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

              {/* Botox pour hommes */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Botox pour <span className={`${goldText} font-light`}>hommes</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Les traitements Botox pour hommes connaissent une croissance significative. Les hommes cherchent généralement un traitement pour conserver une apparence professionnelle compétitive tout en ayant l'air frais, pas « refait ».
                      </p>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <div className="grid md:grid-cols-2 gap-5">
                        {[
                          { title: "Dosage plus élevé requis", desc: "Les hommes ont généralement des muscles faciaux plus grands et plus forts, nécessitant 25 à 40 % de produit en plus pour des résultats équivalents." },
                          { title: "Esthétique masculine", desc: "Le traitement est adapté pour préserver les traits masculins — sourcils forts, front défini — tout en réduisant les rides." },
                          { title: "Objectifs différents", desc: "La plupart des hommes veulent avoir l'air moins fatigué ou stressé, pas plus jeune. Un traitement subtil y parvient naturellement." },
                          { title: "Résultats discrets", desc: "L'objectif est une amélioration indétectable — les collègues remarquent que vous avez meilleure mine, pas que vous avez fait un traitement." },
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

              {/* Chronologie des résultats */}
              <section id="results">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Chronologie des <span className={`${goldText} font-light`}>résultats</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        {[
                          { title: "Jours 1-3 : Début", desc: "Les premiers effets commencent. Vous pouvez remarquer des changements subtils dans le mouvement musculaire." },
                          { title: "Jours 7-14 : Effet maximal", desc: "Les résultats complets deviennent visibles. Les rides sont lissées et les muscles traités sont détendus." },
                          { title: "Mois 3-6 : Durée", desc: "Les résultats durent généralement de 3 à 6 mois. La durée varie selon le métabolisme, la zone et le mode de vie." },
                        ].map((item) => (
                          <div key={item.title} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                            <div>
                              <p className={`text-xs font-medium ${textH}/60 mb-0.5`}>{item.title}</p>
                              <p className={`${textMuted} text-xs font-light`}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>Facteurs affectant la durée</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "Métabolisme", desc: "Un métabolisme plus rapide peut réduire la longévité" },
                          { label: "Zone de traitement", desc: "Les zones à forte mobilité peuvent s'estomper plus vite" },
                          { label: "Dosage", desc: "Des doses plus élevées peuvent durer plus longtemps" },
                          { label: "Régularité", desc: "Des traitements réguliers prolongent souvent la durée" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" />
                            <span><strong className={`${textBody}`}>{f.label} :</strong> {f.desc}</span>
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
                    Le Botox dans le <span className={`${goldText} font-light`}>rajeunissement facial</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Comprendre la différence entre le Botox et les <Link to="/treatments/dermal-fillers/" className={`${goldText}/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors`}>fillers</Link> vous aide à prendre des décisions éclairées sur votre plan de traitement.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${goldText}/80 mb-3`}>Botox</p>
                        <p className={`${goldText}/50 text-xs mb-3 font-light`}>Détend les muscles → Réduit les rides dynamiques</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Rides qui apparaissent avec l'expression</li>
                          <li>• Front, rides du lion, pattes d'oie</li>
                          <li>• Traitement préventif</li>
                          <li>• Résultats durent 3-6 mois</li>
                        </ul>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/60 mb-3`}>Fillers</p>
                        <p className={`${textMuted} text-xs mb-3 font-light`}>Ajoute du volume → Restaure la plénitude perdue</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Rides présentes au repos</li>
                          <li>• Pommettes, lèvres, sillons nasogéniens</li>
                          <li>• Restauration du volume</li>
                          <li>• Résultats durent 6-18 mois</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to="/treatments/dermal-fillers/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light`}>
                        En savoir plus sur les Fillers <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Sécurité */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Sécurité et <span className={`${goldText} font-light`}>réglementation</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Le Botox présente un excellent profil de sécurité lorsqu'il est administré par des professionnels médicaux formés. Approuvé par la FDA, la MHRA et les organismes réglementaires du monde entier, avec plus de 30 ans d'utilisation clinique.
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>Réglementations UK</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Le Botox est un médicament sur ordonnance (POM)</li>
                            <li>• Doit être prescrit par un médecin, infirmier ou dentiste</li>
                            <li>• Consultation en personne requise</li>
                            <li>• Les cliniques doivent être enregistrées CQC</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>Lors de votre consultation</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Revue complète des antécédents médicaux</li>
                            <li>• Discussion des préoccupations et objectifs</li>
                            <li>• Explication des options de traitement</li>
                            <li>• Définition d'attentes réalistes</li>
                            <li>• Obtention du consentement éclairé</li>
                          </ul>
                        </div>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-xl p-5 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-2`}>Contre-indications</p>
                        <p className={`${textMuted} text-xs font-light mb-2`}>Le Botox ne convient pas si vous :</p>
                        <ul className={`grid md:grid-cols-2 gap-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Êtes enceinte ou allaitez</li>
                          <li>• Avez un trouble neuromusculaire</li>
                          <li>• Avez une infection au site d'injection</li>
                          <li>• Êtes allergique à la toxine botulique</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Préparation & Suivi */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Préparation et <span className={`${goldText} font-light`}>suivi</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>Avant le traitement</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["Évitez les anticoagulants (aspirine, ibuprofène) pendant 7 jours", "Limitez l'alcool 24-48 heures avant", "Venez avec une peau propre sans maquillage", "Informez le praticien de tous vos médicaments"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>Après le traitement</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["Restez debout pendant 4 heures après le traitement", "Évitez de toucher ou frotter les zones traitées", "Pas de sport, sauna ou alcool pendant 24 heures", "Évitez les soins du visage et massages pendant 2 semaines"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Résultats patients */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Résultats <span className={`${goldText} font-light`}>patients réels</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/frown-lines-before-after-preview.jpg" alt="Rides du lion avant et après traitement Botox" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/forehead-lines-before-after-preview.jpg" alt="Rides du front avant et après traitement Botox" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>
                    Toutes les images montrent de vrais patients traités par nos médecins dans notre clinique de Harley Street. Les résultats varient selon l'anatomie faciale et le plan de traitement.
                  </p>
                  <Link to="/before-after/botox/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light transition-colors`}>
                    Voir la galerie complète avant/après Botox → <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </section>

              {/* Pourquoi CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Pourquoi choisir <span className={`${goldText} font-light`}>CosmeDocs ?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "Expérience", desc: "1M+ injections depuis 2007" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "Formation", desc: "Formateurs HSI" },
                      { icon: <Shield className="w-4 h-4" />, title: "Qualité", desc: "Produits approuvés FDA" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "Philosophie", desc: "Art invisible" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "Médecins", desc: "Médecins qualifiés" },
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

              {/* FAQ */}
              <section id="faqs">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Questions <span className={`${goldText} font-light`}>fréquentes</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "what-is", q: "Qu'est-ce que le Botox exactement ?", a: "Le Botox est le nom de marque de la toxine botulique de type A, une protéine purifiée qui détend temporairement les muscles ciblés. Il est utilisé en toute sécurité depuis plus de 30 ans dans des applications médicales et cosmétiques." },
                      { v: "pain", q: "Le Botox fait-il mal ?", a: "La plupart des patients décrivent les injections de Botox comme un léger pincement. Nous utilisons des aiguilles ultra-fines et pouvons appliquer une crème anesthésiante si souhaité. La procédure est rapide, généralement terminée en 10-20 minutes." },
                      { v: "safe", q: "Le Botox est-il sûr ?", a: "Lorsqu'il est administré par des professionnels médicaux qualifiés, le Botox présente un excellent profil de sécurité. Approuvé par les organismes réglementaires du monde entier et utilisé cliniquement depuis plus de trois décennies." },
                      { v: "results", q: "Quand verrai-je les résultats ?", a: "Les premiers effets apparaissent généralement en 3-5 jours, les résultats complets étant visibles à 10-14 jours. Les résultats durent généralement 3 à 6 mois, selon les facteurs individuels." },
                      { v: "natural", q: "Aurai-je l'air figé ou artificiel ?", a: "Pas avec des praticiens qualifiés. L'objectif est de détendre les muscles suffisamment pour réduire les rides tout en maintenant l'expression faciale naturelle. Le look 'figé' résulte d'un traitement excessif, que nous évitons." },
                      { v: "suitable", q: "Le Botox est-il fait pour moi ?", a: "Le Botox convient aux adultes de 18 ans et plus souhaitant réduire ou prévenir les rides faciales. Il fonctionne aussi bien en prévention dès la vingtaine qu'en correction pour les rides établies." },
                      { v: "difference", q: "Quelle différence entre Botox et fillers ?", a: "Le Botox détend les muscles pour réduire les rides dynamiques (rides avec mouvement). Les fillers ajoutent du volume pour restaurer la plénitude et lisser les rides statiques. Ils traitent des préoccupations différentes et sont souvent utilisés ensemble." },
                    ].map((faq) => (
                      <AccordionItem key={faq.v} value={faq.v} className="border-gray-200">
                        <AccordionTrigger className="text-gray-700 hover:text-[#C9A050] text-left text-sm font-light">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-xs font-light">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-3xl font-light mb-4 ${textH}`}>
                Votre consultation <span className={goldText}>commence ici</span>
              </h2>
              <p className={`${textBody} mb-8`}>Des soins attentionnés par les médecins de Harley Street</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className={`${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6`}
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Réserver une consultation
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

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Botox Londres - Guide complet du traitement anti-rides</h2>
          <p>
            Le Botox à Londres est le traitement cosmétique non chirurgical le plus populaire au Royaume-Uni. Ce guide complet couvre tout ce que vous devez savoir sur les injections anti-rides. Cosmedocs à Harley Street propose des traitements Botox dirigés par des médecins depuis 2007, avec plus d'un million de procédures réalisées. Notre esthétique est un art invisible. Audacieux, naturel, toujours à votre image.
          </p>
        </div>
      </div>
    </>
  );
}
