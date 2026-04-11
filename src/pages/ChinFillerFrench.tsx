import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import ChinFillerSidebar from '@/components/chin-filler/ChinFillerSidebar';

export default function ChinFillerFrench() {
  const canonical = "https://www.cosmedocs.com/fr/traitements/filler-menton/";
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
        <title>Filler Menton Londres | Augmentation du Menton | Harley Street | CosmeDocs</title>
        <meta name="description" content="Injection d'acide hyaluronique au menton à Londres. Augmentation et projection du menton sans chirurgie. Médecins inscrits au GMC à Harley Street depuis 2007." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="fr" href={canonical} />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-menton/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/chin-filler/" />
        <meta property="og:title" content="Filler Menton Londres | CosmeDocs Harley Street" />
        <meta property="og:description" content="Augmentation du menton sans chirurgie. Médecins Harley Street depuis 2007." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="keywords" content="filler menton Londres, augmentation menton, injection menton, acide hyaluronique menton, Harley Street" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227",
          "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Combien coûte le filler menton ?", "acceptedAnswer": { "@type": "Answer", "text": "Le filler menton commence à partir de £350 pour 1,2 ml. Le coût varie selon la quantité nécessaire pour atteindre le résultat souhaité." } },
            { "@type": "Question", "name": "Combien de temps durent les résultats ?", "acceptedAnswer": { "@type": "Answer", "text": "Les résultats durent généralement de 12 à 18 mois. Le filler au menton dure plus longtemps que celui des lèvres en raison de la viscosité du produit." } },
            { "@type": "Question", "name": "Le filler menton est-il sûr ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, lorsqu'il est réalisé par des médecins qualifiés utilisant des produits premium. Chez CosmeDocs, toutes les procédures sont effectuées par des praticiens expérimentés." } }
          ]
        })}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6">
              <Breadcrumb items={[{ label: 'Traitements', path: '/fr/' }]} currentPage="Filler Menton" variant="light" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, Londres W1G 9PF
                  </div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    Projection
                    <span className={`block font-semibold ${goldText}`}>du Menton</span>
                  </h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    Le filler menton rétablit l'équilibre facial et améliore le profil de manière naturelle et précise — sans chirurgie.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    Chez CosmeDocs, nous utilisons des techniques précises pour projeter le menton et harmoniser le visage. Notre esthétique est un art invisible.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">
                    Réserver une consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                    ].map((shape, i) => (
                      <path key={i} d={shape.d} stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity={shape.opacity} />
                    ))}
                    <circle cx="250" cy="250" r="60" fill="url(#centreGlowChinFr)" />
                    <defs><radialGradient id="centreGlowChinFr" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor={gold} stopOpacity="0.12" /><stop offset="100%" stopColor={gold} stopOpacity="0" /></radialGradient></defs>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              <div className="space-y-14">
                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Qu'est-ce que le <span className={`${goldText} font-light`}>filler menton ?</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <ExpandableSection preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Le filler menton est une procédure non chirurgicale utilisant l'acide hyaluronique pour améliorer la forme du menton et rétablir l'équilibre facial. Aussi appelé mentoplastie liquide.
                      </p>
                    }>
                      <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                        <p>Le menton joue un rôle central dans l'harmonie du visage et le profil. Un menton faible ou reculé peut faire paraître le nez plus grand et la mâchoire moins définie.</p>
                        <p>Avec un filler haute densité, nos médecins ajoutent de la projection, améliorent la symétrie et créent un meilleur équilibre facial — le tout sans chirurgie avec des résultats immédiats.</p>
                      </div>
                    </ExpandableSection>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Avantages <span className={`${goldText} font-light`}>du filler menton</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Profil amélioré", desc: "Une meilleure projection du menton améliore considérablement le profil." },
                        { title: "Harmonie faciale", desc: "Rétablit les proportions entre le nez, le menton et la mâchoire." },
                        { title: "Sans chirurgie", desc: "Résultats immédiats sans temps de récupération ni anesthésie générale." },
                        { title: "Résultats naturels", desc: "Notre esthétique est un art invisible — audacieux, naturel, toujours à votre image." },
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Tarifs <span className={`${goldText} font-light`}>et prix</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="space-y-3">
                      {[
                        { name: "Filler menton 1,2 ml", price: "À partir de £350" },
                        { name: "Filler menton 2,4 ml", price: "À partir de £650" },
                        { name: "Filler menton 3,6 ml", price: "À partir de £850" },
                        { name: "HA Makeover complet", price: "À partir de £950" },
                      ].map(item => (
                        <div key={item.name} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-5 py-3">
                          <span className={`text-sm ${textH} font-light`}>{item.name}</span>
                          <span className={`text-sm font-medium ${goldText}`}>{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Questions <span className={`${goldText} font-light`}>fréquentes</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <Accordion type="single" collapsible className="space-y-3">
                      {[
                        { q: "Combien coûte le filler menton ?", a: "Le filler menton commence à £350 pour 1,2 ml, £650 pour 2,4 ml et £850 pour 3,6 ml." },
                        { q: "Combien de temps durent les résultats ?", a: "Les résultats durent généralement de 12 à 18 mois selon le produit et le métabolisme individuel." },
                        { q: "Est-ce douloureux ?", a: "L'inconfort est minimal. Nous utilisons un anesthésique topique et le filler contient de la lidocaïne." },
                        { q: "Peut-on combiner avec d'autres traitements ?", a: "Oui, le filler menton s'associe parfaitement avec le filler mâchoire, les lèvres et le Botox." },
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
                <ChinFillerSidebar />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>Commencez <span className={goldText}>votre parcours</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>Chaque traitement commence par une consultation complète avec nos médecins spécialisés.</p>
            <Link to="/contact">
              <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">Réserver <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
