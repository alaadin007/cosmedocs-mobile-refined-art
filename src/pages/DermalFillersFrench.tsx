import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star, Sparkles, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import DermalFillersSidebar from '@/components/dermal-fillers/DermalFillersSidebar';

export default function DermalFillersFrench() {
  const canonical = "https://www.cosmedocs.com/fr/traitements/acide-hyaluronique/";

  const treatmentAreaCards = [
    { title: "Lèvres", areas: ["Augmentation du volume", "Définition du contour", "Arc de Cupidon", "Résultat naturel"], description: "Le traitement de comblement le plus populaire — du subtil au plus visible.", link: "/fr/traitements/injection-levres/" },
    { title: "Milieu du visage", areas: ["Volume des pommettes", "Cernes creux", "Tempes", "Sillons nasogéniens"], description: "Restauration du soutien médio-facial pour un aspect plus jeune.", link: "/treatments/cheek-filler/" },
    { title: "Bas du visage", areas: ["Sculpture de la mâchoire", "Projection du menton", "Plis d'amertume", "Bajoues"], description: "Contour structurel pour un bas du visage plus défini.", link: "/fr/traitements/filler-machoire/" },
    { title: "Traitements spécialisés", areas: ["Rhinoplastie médicale", "Lissage du front", "Rajeunissement des lobes", "Rajeunissement des mains"], description: "Traitements ciblés pour des préoccupations spécifiques." }
  ];

  const bg = "bg-[#F5F5F3]";
  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldText = "text-[#C9A050]";
  const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Acide Hyaluronique Londres | Injections Médecins | Harley Street | CosmeDocs</title>
        <meta name="description" content="Guide complet des injections d'acide hyaluronique à Londres. Découvrez les zones de traitement, les produits utilisés et les protocoles. Médecins inscrits au GMC à Harley Street." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="fr" href={canonical} />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/acido-hialuronico/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <meta property="og:title" content="Acide Hyaluronique Londres | CosmeDocs Harley Street" />
        <meta property="og:description" content="Guide complet des injections d'acide hyaluronique. Médecins Harley Street depuis 2007." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="keywords" content="acide hyaluronique Londres, injections visage, filler Londres, Harley Street, médecine esthétique, comblement rides, rajeunissement visage" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227",
          "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Les injections d'acide hyaluronique sont-elles sûres ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, lorsqu'elles sont réalisées par des médecins qualifiés. Chez CosmeDocs, tous les traitements sont effectués par des médecins inscrits au GMC utilisant des produits approuvés par la FDA." } },
            { "@type": "Question", "name": "Combien de temps durent les résultats ?", "acceptedAnswer": { "@type": "Answer", "text": "Les résultats durent généralement de 12 à 18 mois selon la zone traitée et le produit utilisé." } },
            { "@type": "Question", "name": "Peut-on dissoudre l'acide hyaluronique ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, l'acide hyaluronique peut être dissous en toute sécurité avec la hyaluronidase si nécessaire." } }
          ]
        })}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        {/* HERO */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6">
              <Breadcrumb items={[{ label: 'Traitements', path: '/fr/' }]} currentPage="Acide Hyaluronique" variant="light" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, Londres W1G 9PF
                  </div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    L'Art
                    <span className={`block font-semibold ${goldText}`}>Invisible</span>
                  </h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    Votre guide complet des injections d'acide hyaluronique. Découvrez comment restaurer le volume perdu pour des résultats naturels et indétectables.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    Chez CosmeDocs, chaque injection est réalisée avec précision et retenue. Des médecins inscrits au GMC évaluent l'ensemble de votre visage pour restaurer l'équilibre — jamais pour changer votre identité. Depuis 2007, notre philosophie est l'art invisible.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">
                    Prendre rendez-vous <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="ghost" onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))} className="text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 rounded-full px-8 py-6 text-base font-medium border border-gray-300">
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Consultation IA
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Inscrits au GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +17 ans</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> Note 4.9</span>
                </motion.div>
              </div>
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square flex items-center justify-center">
                  <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none">
                    {[
                      { d: "M250 80 C300 80, 380 150, 380 250 C380 350, 300 420, 250 420 C200 420, 120 350, 120 250 C120 150, 200 80, 250 80", opacity: 0.08 },
                      { d: "M250 120 C285 120, 340 170, 340 250 C340 330, 285 380, 250 380 C215 380, 160 330, 160 250 C160 170, 215 120, 250 120", opacity: 0.1 },
                      { d: "M250 160 C270 160, 310 190, 310 250 C310 310, 270 340, 250 340 C230 340, 190 310, 190 250 C190 190, 230 160, 250 160", opacity: 0.12 },
                    ].map((shape, i) => (
                      <path key={i} d={shape.d} stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity={shape.opacity} />
                    ))}
                    <circle cx="250" cy="250" r="60" fill="url(#centreGlowFillerFr)" />
                    <defs><radialGradient id="centreGlowFillerFr" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor={gold} stopOpacity="0.12" /><stop offset="100%" stopColor={gold} stopOpacity="0" /></radialGradient></defs>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className={`text-3xl md:text-4xl font-light ${textH} mb-3`}>Zones de <span className={goldText}>Traitement</span></h2>
              <div className="w-12 h-px bg-[#C9A050]/40 mx-auto mb-4" />
              <p className={`${textBody} max-w-xl mx-auto text-sm font-light`}>Chaque zone nécessite une expertise spécifique et des produits différents. Nos médecins choisissent le produit optimal pour votre anatomie.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentAreaCards.map((card, i) => (
                <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                  {card.link ? (
                    <Link to={card.link} className="block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#C9A050]/30 transition-all h-full">
                      <h3 className={`text-lg font-medium ${textH} mb-2`}>{card.title}</h3>
                      <p className={`text-xs ${textBody} mb-4 font-light`}>{card.description}</p>
                      <div className="space-y-1.5">{card.areas.map(a => <span key={a} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3 h-3 text-[#C9A050]" />{a}</span>)}</div>
                    </Link>
                  ) : (
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full">
                      <h3 className={`text-lg font-medium ${textH} mb-2`}>{card.title}</h3>
                      <p className={`text-xs ${textBody} mb-4 font-light`}>{card.description}</p>
                      <div className="space-y-1.5">{card.areas.map(a => <span key={a} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3 h-3 text-[#C9A050]" />{a}</span>)}</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              <div className="space-y-14">
                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Qu'est-ce que <span className={`${goldText} font-light`}>l'acide hyaluronique ?</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <ExpandableSection preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        L'acide hyaluronique est une substance naturellement présente dans la peau qui retient l'eau et maintient le volume. Les injections utilisent cette molécule pour restaurer le volume perdu et améliorer les contours du visage.
                      </p>
                    }>
                      <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                        <p>Avec l'âge, le visage perd son volume naturel en raison de la perte de collagène, de graisse et de la résorption osseuse. L'acide hyaluronique restaure ce volume de manière naturelle et précise.</p>
                        <p>Chez CosmeDocs, nous utilisons exclusivement des produits approuvés par la FDA des meilleurs fabricants, dont Juvederm, Restylane et Teoxane.</p>
                      </div>
                    </ExpandableSection>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Pourquoi <span className={`${goldText} font-light`}>CosmeDocs ?</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Médecins uniquement", desc: "Tous les traitements sont réalisés par des médecins inscrits au GMC — jamais des infirmières ou techniciens." },
                        { title: "Produits premium", desc: "Nous utilisons exclusivement de l'acide hyaluronique approuvé des meilleurs fabricants mondiaux." },
                        { title: "Depuis 2007", desc: "Plus de 17 ans d'expérience en médecine esthétique à Harley Street." },
                        { title: "Philosophie naturelle", desc: "Notre esthétique est un art invisible — audacieux, naturel, toujours à votre image." },
                      ].map(item => (
                        <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                          <p className={`text-sm font-medium ${textH} mb-1`}>{item.title}</p>
                          <p className={`text-xs ${textBody} font-light`}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Tarifs <span className={`${goldText} font-light`}>et Prix</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="space-y-3">
                      {[
                        { name: "Injection lèvres 0,5 ml", price: "À partir de £300" },
                        { name: "Injection lèvres 1 ml", price: "À partir de £350" },
                        { name: "Filler mâchoire 1 ml", price: "À partir de £350" },
                        { name: "Filler menton 1,2 ml", price: "À partir de £350" },
                        { name: "Cernes creuses", price: "À partir de £425" },
                        { name: "Filler pommettes", price: "À partir de £350" },
                        { name: "HA Makeover complet", price: "À partir de £950" },
                      ].map(item => (
                        <div key={item.name} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-5 py-3">
                          <span className={`text-sm ${textH} font-light`}>{item.name}</span>
                          <span className={`text-sm font-medium ${goldText}`}>{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className={`text-xs ${textMuted} mt-4 font-light`}>Frais de consultation (£50) déduits si le traitement est effectué le même jour.</p>
                  </motion.div>
                </section>

                {/* FAQs */}
                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Questions <span className={`${goldText} font-light`}>Fréquentes</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <Accordion type="single" collapsible className="space-y-3">
                      {[
                        { q: "Les injections sont-elles sûres ?", a: "Oui, lorsqu'elles sont réalisées par des médecins qualifiés. Chez CosmeDocs, tous les traitements sont effectués par des médecins inscrits au GMC utilisant des produits approuvés. Les produits sont biocompatibles et peuvent être dissous si nécessaire." },
                        { q: "Combien de temps durent les résultats ?", a: "Les résultats durent généralement de 12 à 18 mois selon la zone traitée et le produit utilisé. Les injections labiales durent 6 à 12 mois, tandis que les pommettes et la mâchoire peuvent durer jusqu'à 18 mois." },
                        { q: "Est-ce douloureux ?", a: "L'inconfort est minimal. Nous appliquons un anesthésique topique et utilisons des produits contenant de la lidocaïne. La plupart des patients décrivent une sensation de pression légère." },
                        { q: "Quelle est la différence avec le Botox ?", a: "L'acide hyaluronique ajoute du volume et restaure la plénitude perdue. Le Botox relaxe les muscles pour réduire les rides dynamiques. Beaucoup de patients bénéficient de la combinaison des deux traitements." },
                        { q: "Peut-on dissoudre l'acide hyaluronique ?", a: "Oui, l'acide hyaluronique peut être dissous en toute sécurité avec la hyaluronidase. Cela offre une garantie importante et permet des ajustements si nécessaire." },
                      ].map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                          <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                          <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </section>
              </div>
              <div className="hidden lg:block">
                <DermalFillersSidebar />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>Commencez <span className={goldText}>Votre Parcours</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>Chaque traitement commence par une consultation approfondie. Nos médecins discuteront de vos préoccupations et recommanderont un plan personnalisé.</p>
            <Link to="/contact">
              <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">Prendre rendez-vous <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </section>

        <div className="sr-only">
          <h2>Acide Hyaluronique à Londres — CosmeDocs Harley Street</h2>
          <p>CosmeDocs est une clinique de médecine esthétique dirigée par des médecins à Harley Street, Londres, spécialisée dans les injections d'acide hyaluronique. Notre esthétique est un art invisible — audacieux, naturel, toujours à votre image.</p>
        </div>
      </div>
    </>
  );
}
