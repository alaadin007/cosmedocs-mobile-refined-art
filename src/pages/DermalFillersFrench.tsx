import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Award, Calendar, MapPin, CheckCircle, Star, ArrowRight, Shield, Heart, Check, Activity, Syringe, GraduationCap, Stethoscope, MessageCircle, Sparkles, Building, Users, Phone, Droplets } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import DermalFillersSidebar from '@/components/dermal-fillers/DermalFillersSidebar';

export default function DermalFillersFrench() {
  const canonical = "https://www.cosmedocs.com/fr/fillers/";

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "image": ["https://www.cosmedocs.com/default-og-image.jpg"],
    "url": "https://www.cosmedocs.com",
    "telephone": "+44 20 3733 3227",
    "priceRange": "££",
    "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "addressRegion": "Greater London", "postalCode": "W1G 9PF", "addressCountry": "GB" },
    "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
    "contactPoint": { "@type": "ContactPoint", "telephone": "+44 20 3733 3227", "contactType": "customer service", "availableLanguage": ["French", "English"] }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Les fillers dermiques sont-ils sûrs ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, lorsqu'ils sont administrés par des professionnels médicaux qualifiés. Chez CosmeDocs, tous les traitements sont réalisés par des médecins inscrits au GMC utilisant des fillers à l'acide hyaluronique approuvés par la FDA. Ils sont biocompatibles et peuvent être dissous avec la hyaluronidase si nécessaire." } },
      { "@type": "Question", "name": "Qui peut bénéficier de fillers dermiques ?", "acceptedAnswer": { "@type": "Answer", "text": "La plupart des adultes en bonne santé de plus de 18 ans sont des candidats appropriés. Lors de votre consultation, nos médecins évaluent votre historique médical, l'état de votre peau, l'anatomie de votre visage et vos objectifs esthétiques." } },
      { "@type": "Question", "name": "Combien de temps durent les fillers dermiques ?", "acceptedAnswer": { "@type": "Answer", "text": "Les résultats durent généralement 12 à 18 mois selon la zone traitée, le produit utilisé et le métabolisme individuel. Les fillers des lèvres durent 6 à 12 mois, tandis que ceux des joues et de la mâchoire peuvent durer jusqu'à 18 mois." } },
      { "@type": "Question", "name": "Quelle est la différence entre les fillers et le Botox ?", "acceptedAnswer": { "@type": "Answer", "text": "Les fillers dermiques ajoutent du volume pour restaurer la plénitude perdue et lisser les lignes statiques. Le Botox détend les muscles pour réduire les rides dynamiques causées par les expressions faciales. De nombreux patients bénéficient de la combinaison des deux traitements." } },
      { "@type": "Question", "name": "Les fillers dermiques sont-ils réversibles ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, les fillers à l'acide hyaluronique peuvent être dissous à l'aide d'une enzyme appelée hyaluronidase. Cela constitue une mesure de sécurité importante et permet des ajustements si nécessaire." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "Lèvres", areas: ["Augmentation du volume", "Définition du contour", "Arc de Cupidon", "Repulpage naturel"], description: "Le traitement de filler le plus populaire, de la définition subtile au volume plus prononcé." },
    { title: "Milieu du visage", areas: ["Volume des joues", "Cernes creux", "Tempes creuses", "Sillons nasogéniens"], description: "Restaurer le soutien du milieu du visage et traiter la perte de volume contribuant au vieillissement." },
    { title: "Bas du visage", areas: ["Définition de la mâchoire", "Projection du menton", "Plis d'amertume", "Soutien des bajoues"], description: "Contouring structurel pour un bas du visage plus défini et équilibré." },
    { title: "Spécialisé", areas: ["Rhinoplastie médicale", "Lissage du front", "Rajeunissement des lobes", "Rajeunissement des mains"], description: "Traitements ciblés pour des préoccupations et affinements spécifiques." }
  ];

  const bg = "bg-[#F5F5F3]";
  const cardBg = "bg-white";
  const cardBorder = "border-gray-200";
  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldText = "text-[#C9A050]";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Fillers Dermiques | Traitement Facial par Médecins | Cosmedocs Harley Street Londres</title>
        <meta name="description" content="Guide complet des fillers dermiques à Londres. Découvrez les traitements à l'acide hyaluronique, les zones de traitement et notre approche globale du visage. Soins médicaux à Harley Street." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/dermal-fillers/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/fillers/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/rellenos-dermicos/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <meta property="og:title" content="Fillers Dermiques | Traitement Facial par Médecins | Cosmedocs Harley Street" />
        <meta property="og:description" content="Guide complet des fillers dermiques à Londres. Traitements à l'acide hyaluronique par médecins à Harley Street." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.cosmedocs.com/default-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="fillers dermiques Londres, fillers Harley Street, fillers lèvres Londres, fillers joues, filler mâchoire, filler cernes, acide hyaluronique, fillers visage, meilleurs fillers Londres" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Traitements', path: '/treatments' }]} currentPage="Fillers Dermiques" variant="light" />
        </div>

        {/* HERO */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, rgba(201,160,80,0.02) 40%, transparent 70%)` }} />
            <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(201,160,80,0.04) 50%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, Londres W1G 9PF
                  </div>

                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    L'art de la
                    <span className={`block font-semibold ${goldText}`}>restauration invisible</span>
                  </h1>

                  <p className="text-sm text-[#C9A050]/60 tracking-widest uppercase mb-4 font-light">NATUREL · RÉSULTATS DURABLES</p>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    Votre guide complet des fillers dermiques. Comprendre l'acide hyaluronique, comment il restaure le volume, et obtenir des résultats si naturels qu'ils sont indétectables.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    Chez CosmeDocs, les fillers sont placés avec précision et retenue. Des médecins inscrits au GMC évaluent votre visage dans son ensemble, restaurant l'équilibre — sans jamais altérer l'identité. Depuis 2007, notre philosophie est l'art invisible.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/harleystreet', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6 text-base font-medium transition-all duration-300">
                    Réserver une consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="ghost" onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))} className={`${textBody} hover:text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium border ${cardBorder}`}>
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Demander à l'IA
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Inscrit au GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> 17+ ans</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> Note 4.9</span>
                </motion.div>
              </div>

              {/* Hero visual */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[
                        { d: "M250 80 C300 80, 380 150, 380 250 C380 350, 300 420, 250 420 C200 420, 120 350, 120 250 C120 150, 200 80, 250 80", opacity: 0.08, delay: 0 },
                        { d: "M250 120 C285 120, 340 170, 340 250 C340 330, 285 380, 250 380 C215 380, 160 330, 160 250 C160 170, 215 120, 250 120", opacity: 0.1, delay: 0.5 },
                        { d: "M250 160 C270 160, 310 190, 310 250 C310 310, 270 340, 250 340 C230 340, 190 310, 190 250 C190 190, 230 160, 250 160", opacity: 0.12, delay: 1 },
                        { d: "M250 200 C260 200, 280 215, 280 250 C280 285, 260 300, 250 300 C240 300, 220 285, 220 250 C220 215, 240 200, 250 200", opacity: 0.15, delay: 1.5 },
                      ].map((shape, i) => (
                        <motion.path key={i} d={shape.d} stroke="#C9A050" strokeWidth="1.5" strokeLinecap="round" opacity={shape.opacity}
                          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: shape.opacity }} transition={{ duration: 2.5, delay: shape.delay * 0.3, ease: "easeOut" }} />
                      ))}
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowFillerFr)" />
                      <defs><radialGradient id="centreGlowFillerFr" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor="#C9A050" stopOpacity="0.15" /><stop offset="100%" stopColor="#C9A050" stopOpacity="0" /></radialGradient></defs>
                    </svg>
                  </div>

                  <motion.div className={`absolute top-8 right-0 ${cardBg} backdrop-blur-sm rounded-2xl p-4 shadow-xl border ${cardBorder}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A050] flex items-center justify-center"><Star className="h-5 w-5 text-white fill-white" /></div>
                      <div><div className={`text-sm font-semibold ${textH}`}>Clinique de confiance</div><div className={`text-xs ${textMuted}`}>Depuis 2007</div></div>
                    </div>
                  </motion.div>

                  <motion.div className={`absolute top-[45%] -right-2 ${cardBg} backdrop-blur-sm rounded-2xl p-4 shadow-xl border ${cardBorder} w-[240px]`} animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Droplets className="w-4 h-4 text-[#C9A050]" />
                      <span className="text-xs font-semibold text-[#C9A050] uppercase tracking-wider">ACIDE HYALURONIQUE</span>
                    </div>
                    <p className={`text-[11px] ${textBody} leading-relaxed mb-2`}>Une substance naturellement présente dans la peau qui retient l'humidité et fournit un soutien structurel.</p>
                    <div className={`flex items-center gap-3 text-[10px] ${textMuted}`}>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> Biocompatible</span>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> Réversible</span>
                    </div>
                  </motion.div>

                  <motion.div className={`absolute bottom-16 -left-4 ${cardBg} backdrop-blur-sm rounded-2xl p-5 shadow-xl border ${cardBorder} max-w-[300px]`} animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">S</div>
                      <div><div className={`text-sm font-medium ${textH}`}>Sophie L.</div><div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div></div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"Tout le monde dit que j'ai l'air incroyable mais personne ne peut dire pourquoi. C'est le signe d'un travail vraiment excellent."</p>
                    <Link to="/testimonials" className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-2 hover:underline">Plus d'expériences réelles</Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            <div className="space-y-14">

              {/* What Are Dermal Fillers */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Que sont les <span className={`${goldText} font-light`}>fillers dermiques ?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>Les fillers dermiques sont des traitements injectables le plus souvent composés d'acide hyaluronique — une substance naturellement présente dans la peau qui aide à retenir l'hydratation, le volume et l'élasticité. Avec l'âge, le visage perd son soutien structurel — l'os recule, les coussinets graisseux se déplacent et la peau s'amincit. Les fillers restaurent ce volume perdu, soulèvent les tissus affaissés et lissent les lignes — sans chirurgie.</p>
                  }>
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <p className={`text-xs font-medium ${textH} mb-4`}>Ce que les fillers peuvent traiter</p>
                        <ul className="space-y-2">
                          {["Restaurer la perte de volume liée à l'âge dans les joues, tempes et lèvres", "Améliorer les proportions et la symétrie du visage", "Soutenir les tissus affaissés et lifter les bajoues", "Lisser les lignes statiques et les sillons nasogéniens", "Rehausser les contours naturels — mâchoire, menton, lèvres"].map((fact) => (
                            <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                          ))}
                        </ul>
                      </div>
                      <p>Chez CosmeDocs, les fillers ne sont jamais utilisés pour « combler les lignes à l'aveugle ». Ils sont placés stratégiquement pour soutenir le visage dans son ensemble, en respectant l'anatomie individuelle et l'expression naturelle.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How They Work */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Comment fonctionnent les <span className={`${goldText} font-light`}>fillers dermiques</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { step: "1", title: "Évaluation", desc: "Votre médecin analyse l'anatomie faciale, la structure osseuse et les schémas de perte de volume pour créer un plan de traitement sur mesure." },
                        { step: "2", title: "Injection", desc: "Le gel d'acide hyaluronique est placé avec précision à l'aide de canules ou d'aiguilles fines à des profondeurs spécifiques pour restaurer ou rehausser le volume." },
                        { step: "3", title: "Intégration", desc: "Le filler s'intègre aux tissus environnants, attirant l'humidité et fournissant un soutien et une structure d'apparence naturelle." },
                      ].map((s) => (
                        <div key={s.step} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 text-center`}>
                          <div className="bg-[#C9A050]/15 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3"><span className="text-sm font-medium text-[#C9A050]">{s.step}</span></div>
                          <p className={`text-sm font-medium ${textH} mb-1`}>{s.title}</p>
                          <p className={`${textBody} text-xs font-light`}>{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  }>
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>Contrairement au Botox qui détend les muscles, les fillers dermiques ajoutent physiquement du volume sous la surface de la peau. L'acide hyaluronique dans les fillers est biocompatible — il travaille avec votre corps, pas contre lui.</p>
                      <p>Les fillers premium existent en différentes viscosités — des gels plus épais pour le soutien structurel (mâchoire, menton), des gels moyens pour le volume (joues), et des gels plus souples pour les zones délicates (lèvres, cernes). Choisir le bon produit pour chaque zone est crucial pour des résultats naturels.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Zones de <span className={`${goldText} font-light`}>traitement</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className={`${textBody} text-sm leading-relaxed font-light mb-6`}>Chaque zone du visage possède une anatomie unique, des schémas de vieillissement et des exigences spécifiques. Nos médecins adaptent le choix du produit, la profondeur de placement et le volume à chaque zone individuelle.</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {treatmentAreaCards.map((card) => (
                      <div key={card.title} className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                        <p className={`text-sm font-medium ${textH} mb-2`}>{card.title}</p>
                        <p className={`${textMuted} text-xs font-light mb-3`}>{card.description}</p>
                        <ul className="space-y-1.5">
                          {card.areas.map((area) => (
                            <li key={area} className={`flex items-center gap-2 text-xs ${textBody} font-light`}><Check className="w-3 h-3 text-[#C9A050]/60" /> {area}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Full-Face Approach */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Une approche <span className={`${goldText} font-light`}>globale du visage</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>Le vieillissement facial ne se produit pas de manière isolée. Les lignes, plis et creux sont souvent le résultat de changements structurels ailleurs dans le visage. C'est pourquoi nos médecins adoptent une approche globale — évaluant comment les différentes régions interagissent, et comment restaurer le soutien dans une zone peut naturellement améliorer une autre.</p>
                  }>
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <p className={`text-xs font-medium ${textH} mb-4`}>Cette approche :</p>
                        <ul className="space-y-2">
                          {["Réduit le risque de sur-remplissage d'une zone unique", "Produit des résultats plus naturels et équilibrés", "Préserve le mouvement facial et les expressions", "Offre des résultats plus durables avec moins de produit"].map((item) => (
                            <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-[#C9A050]/60 italic font-light">Notre objectif n'est pas la correction évidente — c'est la restauration subtile.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Results Timeline */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Chronologie des <span className={`${goldText} font-light`}>résultats</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <div className="space-y-4">
                      {[
                        { title: "Jour 1 : Immédiat", desc: "Amélioration visible immédiatement. Un léger gonflement est normal et attendu — il se résorbe en 48 à 72 heures." },
                        { title: "Semaines 2-4 : Stabilisé", desc: "Le gonflement est complètement résorbé. Le filler s'est intégré aux tissus et hydraté. C'est à ce moment que vous voyez le vrai résultat." },
                        { title: "Mois 12-18 : Durée", desc: "Les résultats durent généralement 12 à 18 mois selon la zone, le produit utilisé et le métabolisme individuel." },
                      ].map((t) => (
                        <div key={t.title} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                          <div><p className={`text-xs font-medium ${textH} mb-0.5`}>{t.title}</p><p className={`${textMuted} text-xs font-light`}>{t.desc}</p></div>
                        </div>
                      ))}
                    </div>
                  }>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>Durée par zone</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "Lèvres", desc: "6-12 mois (zone très mobile)" },
                          { label: "Joues", desc: "12-18 mois" },
                          { label: "Mâchoire et menton", desc: "12-18 mois" },
                          { label: "Cernes", desc: "12-18 mois (faible mobilité)" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span><strong className={`${textBody}`}>{f.label} :</strong> {f.desc}</span></div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Fillers vs Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Les fillers dans le <span className={`${goldText} font-light`}>rajeunissement facial</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>Comprendre la différence entre les fillers dermiques et le <Link to="/fr/traitements/botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">Botox</Link> vous aide à prendre des décisions éclairées sur votre plan de traitement.</p>
                  }>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                          <p className="text-sm font-medium text-[#C9A050]/80 mb-3">Fillers dermiques</p>
                          <p className="text-[#C9A050]/50 text-xs mb-3 font-light">Ajoutent du volume → Restaurent la plénitude perdue</p>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Lignes présentes au repos (lignes statiques)</li>
                            <li>• Joues, lèvres, mâchoire, sillons nasogéniens</li>
                            <li>• Restauration de volume et contouring</li>
                            <li>• Résultats de 6 à 18 mois</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                          <p className={`text-sm font-medium ${textBody} mb-3`}>Botox</p>
                          <p className={`${textMuted} text-xs mb-3 font-light`}>Détend les muscles → Réduit les rides dynamiques</p>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Lignes apparaissant avec les expressions</li>
                            <li>• Front, rides du lion, pattes d'oie</li>
                            <li>• Traitement préventif</li>
                            <li>• Résultats de 3 à 6 mois</li>
                          </ul>
                        </div>
                      </div>
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>De nombreux patients bénéficient d'une approche combinée. Le Botox traite les rides d'expression dynamiques tandis que les fillers restaurent le volume perdu — ensemble, ils créent un rajeunissement facial complet.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Safety */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Sécurité et <span className={`${goldText} font-light`}>votre consultation</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>Les fillers à l'acide hyaluronique ont un excellent profil de sécurité. Ils sont biocompatibles, temporaires et — point important — entièrement réversibles grâce à une enzyme appelée hyaluronidase.</p>
                  }>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}`}>Profil de sécurité</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Produits approuvés FDA et CE</li>
                            <li>• Biocompatibles — travaillent avec votre corps</li>
                            <li>• Entièrement réversibles avec la hyaluronidase</li>
                            <li>• Temporaires — absorbés naturellement avec le temps</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}`}>Pendant votre consultation</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Évaluation faciale complète et historique médical</li>
                            <li>• Discussion des préoccupations et objectifs</li>
                            <li>• Conseils honnêtes — nous disons non quand c'est approprié</li>
                            <li>• Attentes réalistes établies</li>
                            <li>• Consentement éclairé obtenu</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Filler Migration Myth */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Le mythe de la <span className={`${goldText} font-light`}>migration du filler</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>La « migration du filler » est l'une des préoccupations les plus répétées en esthétique — mais c'est en grande partie un malentendu. Le filler à l'acide hyaluronique, lorsqu'il est placé correctement par un praticien expérimenté, s'intègre aux tissus environnants et reste précisément là où il a été injecté.</p>
                  }>
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>Ce qui est souvent qualifié de migration est généralement le résultat d'une mauvaise technique d'injection — du filler placé trop superficiellement, en volumes excessifs, ou dans le mauvais plan tissulaire.</p>
                      <div className={`${cardBg} border-l-2 border-[#C9A050] rounded-r-xl p-6`}>
                        <blockquote className={`${textBody} text-xs italic leading-relaxed mb-4`}>"La migration est un problème de technique, pas un problème de produit. Lorsque le filler est placé à la bonne profondeur, dans le bon plan tissulaire, avec des volumes appropriés — il ne migre tout simplement pas."</blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">AH</div>
                          <div><p className={`${textH} font-medium text-xs`}>Dr Ahmed Haq</p><p className={`${textMuted} text-[10px]`}>Directeur médical, CosmeDocs</p></div>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Preparation & Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Préparation et <span className={`${goldText} font-light`}>soins post-traitement</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>Avant le traitement</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["Éviter les anticoagulants (aspirine, ibuprofène) pendant 7 jours", "Limiter l'alcool 24 à 48 heures avant", "Informer le praticien de tous les médicaments", "Éviter les soins dentaires 2 semaines avant/après"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>Après le traitement</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["Éviter de toucher ou presser les zones traitées pendant 6 heures", "Éviter l'exercice intense pendant 24 à 48 heures", "Éviter les saunas, hammams et chaleur extrême", "Dormir légèrement surélevé la première nuit"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Before & After */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Résultats fillers <span className={`${goldText} font-light`}>avant et après</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/dermal-fillers/full-face-filler-before-after-preview.jpg" alt="Résultats avant et après des fillers dermiques pour le visage complet" className="w-full h-auto object-contain" loading="lazy" />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>Toutes les images montrent de vrais patients traités par nos médecins dans notre clinique de Harley Street. Les résultats varient selon l'anatomie faciale et le plan de traitement.</p>
                  <Link to="/before-after/dermal-fillers/" className="inline-flex items-center gap-2 text-[#C9A050]/70 hover:text-[#C9A050] text-xs font-light transition-colors">
                    Voir la galerie complète avant et après → <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </section>

              {/* Why Choose Cosmedocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Pourquoi choisir <span className={`${goldText} font-light`}>CosmeDocs ?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "Expérience", desc: "1M+ injections depuis 2007" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "Formation", desc: "Formateurs HSI" },
                      { icon: <Shield className="w-4 h-4" />, title: "Qualité", desc: "Produits HA premium" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "Philosophie", desc: "Art invisible" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "Médecins", desc: "Médecins qualifiés" },
                    ].map((w) => (
                      <div key={w.title} className="text-center">
                        <div className="bg-[#C9A050]/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-[#C9A050]/60">{w.icon}</div>
                        <p className={`text-xs font-medium ${textH} mb-0.5`}>{w.title}</p>
                        <p className={`${textMuted} text-[10px] font-light`}>{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Questions <span className={`${goldText} font-light`}>fréquentes</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "safe", q: "Les fillers dermiques sont-ils sûrs ?", a: "Oui, lorsqu'ils sont administrés par des professionnels médicaux qualifiés. Chez CosmeDocs, tous les traitements sont réalisés par des médecins inscrits au GMC utilisant des fillers à l'acide hyaluronique approuvés par la FDA. Ils sont biocompatibles et peuvent être dissous avec la hyaluronidase si nécessaire." },
                      { v: "suitable", q: "Qui peut bénéficier de fillers dermiques ?", a: "La plupart des adultes en bonne santé de plus de 18 ans sont des candidats appropriés. Lors de votre consultation, nos médecins évaluent votre historique médical, l'état de votre peau, l'anatomie de votre visage et vos objectifs esthétiques." },
                      { v: "last", q: "Combien de temps durent les fillers dermiques ?", a: "Les résultats durent généralement 12 à 18 mois selon la zone traitée, le produit utilisé et le métabolisme individuel. Les fillers des lèvres durent 6 à 12 mois, tandis que ceux des joues et de la mâchoire peuvent durer jusqu'à 18 mois." },
                      { v: "pain", q: "Les fillers dermiques font-ils mal ?", a: "La plupart des patients décrivent la sensation comme un léger inconfort plutôt qu'une douleur. Nous utilisons une crème anesthésiante topique et la plupart des fillers contiennent de la lidocaïne pour le confort. Le traitement est bien toléré." },
                      { v: "natural", q: "Les fillers auront-ils un aspect naturel ?", a: "Avec un praticien expérimenté, absolument. L'aspect « sur-rempli » résulte d'une mauvaise technique ou de volumes excessifs. Notre approche privilégie des résultats subtils et équilibrés qui rehaussent plutôt qu'altèrent votre apparence." },
                      { v: "combine", q: "Peut-on combiner fillers et Botox ?", a: "Oui, de nombreux patients bénéficient de la combinaison des deux. Les fillers restaurent le volume et la structure tandis que le Botox traite les rides d'expression dynamiques. Votre médecin vous conseillera la meilleure approche lors de la consultation." },
                      { v: "reverse", q: "Les fillers dermiques sont-ils réversibles ?", a: "Oui, les fillers à l'acide hyaluronique peuvent être dissous à l'aide d'une enzyme appelée hyaluronidase. Cela constitue une mesure de sécurité importante et permet des ajustements si nécessaire." },
                    ].map((faq) => (
                      <AccordionItem key={faq.v} value={faq.v} className="border-gray-200">
                        <AccordionTrigger className={`${textH} hover:text-[#C9A050] text-left text-sm font-light`}>{faq.q}</AccordionTrigger>
                        <AccordionContent className={`${textBody} text-xs font-light`}>{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24"><DermalFillersSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-[#F5F5F3]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-3xl font-light mb-4 ${textH}`}>Votre consultation <span className={`${goldText}`}>commence ici</span></h2>
              <p className={`${textBody} mb-8`}>Des soins attentionnés par les médecins de Harley Street</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6" onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}>Réserver une consultation</Button>
                <Button variant="outline" className={`border-gray-300 ${textH} hover:bg-gray-200 rounded-full px-8 py-6`} onClick={() => window.location.href = 'tel:03330551503'}><Phone className="w-4 h-4 mr-2" /> 0333 055 1503</Button>
                <Button variant="outline" className="border-green-500/50 text-green-600 hover:bg-green-500 hover:text-white rounded-full px-8 py-6" onClick={() => window.open('https://wa.me/447535076003', '_blank')}><MessageCircle className="w-4 h-4 mr-2" /> WhatsApp</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-white">
          <DermalFillersSidebar />
        </section>
      </div>
    </>
  );
}
