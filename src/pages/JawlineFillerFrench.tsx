import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import JawlineFillerSidebar from '@/components/jawline/JawlineFillerSidebar';

export default function JawlineFillerFrench() {
  const canonical = "https://www.cosmedocs.com/fr/traitements/filler-machoire/";
  const faqs = [
    { q: "Combien coûte le filler mâchoire ?", a: "Chez CosmeDocs, le filler mâchoire commence à £350 pour 1 ml, £650 pour 2 ml, et le package Natural HD Jawline à £950." },
    { q: "Combien de temps durent les résultats ?", a: "Les résultats durent généralement 15 à 18 mois, ce qui en fait l'un des fillers les plus durables." },
    { q: "Est-ce douloureux ?", a: "La plupart des patients ressentent un inconfort minimal. Nous utilisons un anesthésique local et les fillers contiennent de la lidocaïne." },
    { q: "Quel est le temps de récupération ?", a: "La récupération est minimale — la plupart des patients reprennent le travail immédiatement. Un léger gonflement possible pendant 24-48 heures." },
    { q: "Peut-on combiner menton et mâchoire ?", a: "Absolument. Les traitements du menton et de la mâchoire fonctionnent magnifiquement ensemble pour un embellissement complet du bas du visage." },
    { q: "Le filler peut-il être dissous ?", a: "Oui, les fillers d'acide hyaluronique peuvent être dissous avec la hyaluronidase si nécessaire." },
  ];

  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const goldText = "text-[#C9A050]";

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Filler Mâchoire Londres | Sculpture Jawline | Harley Street | CosmeDocs</title>
        <meta name="description" content="Filler mâchoire par médecins dès £350. Définissez et sculptez votre mâchoire à notre clinique Harley Street. Résultats naturels depuis 2007." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="fr" href={canonical} />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-mandibula/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <meta property="og:title" content="Filler Mâchoire Londres | CosmeDocs" />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "Filler Mâchoire", "alternateName": "Jawline Filler", "url": canonical, "procedureType": "NoninvasiveProcedure" },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
          ]
        })}</script>
      </Helmet>

      <div className="bg-[#F5F5F3] overflow-x-hidden min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-[#F5F5F3] pt-0 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Traitements', path: '/fr/' }, { label: 'Acide Hyaluronique', path: '/fr/traitements/acide-hyaluronique/' }]} currentPage="Filler Mâchoire" variant="light" />
            <div className="pt-12 pb-4 text-center">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-stone-800 leading-[1.1] tracking-tight mb-6">
                  Filler <span className="text-[#C9A050] font-light">Mâchoire</span>
                </h1>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-extralight max-w-2xl mx-auto">
                  Définissez, contourez et sculptez votre mâchoire avec un filler de précision — pour un bas du visage plus net et plus équilibré.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Par médecins</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30–45 min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Depuis 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className={`${textBody} text-sm leading-relaxed font-light space-y-4`}>
                    <p>Une mâchoire définie est souvent décrite comme le cadre du visage — apportant structure, équilibre et un aspect plus jeune. Avec l'âge, la résorption osseuse et la descente des tissus mous créent un bas du visage plus doux et moins défini.</p>
                    <p>Chez CosmeDocs, nos médecins utilisent des fillers HA denses et structurels spécifiquement formulés pour l'embellissement de la mâchoire, offrant un soutien et une projection supérieurs tout en maintenant un mouvement naturel.</p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Ce que le filler mâchoire <span className={`${goldText} font-light`}>peut obtenir</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    {["Définition des angles de la mâchoire", "Sculpture d'une mâchoire plus large", "Correction des bajoues précoces", "Équilibrage de l'asymétrie", "Amélioration du profil", "Restauration de la structure juvénile"].map(item => (
                      <div key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                        <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${textBody} font-light`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>1 ml vs <span className={`${goldText} font-light`}>2 ml</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">1 ml — Amélioration subtile</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• Idéal pour les premiers patients</li>
                        <li>• Définition naturelle et subtile</li>
                        <li>• À partir de £350</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-stone-700 mb-3">2 ml — Sculpture prononcée</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• Sculpture plus visible</li>
                        <li>• Angles de mâchoire plus forts</li>
                        <li>• À partir de £650</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Questions <span className={`${goldText} font-light`}>Fréquentes</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                        <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                        <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>

              <section className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className={`text-2xl font-extralight ${textH} mb-4`}>Réservez <span className={goldText}>Votre Consultation</span></h2>
                <p className={`${textBody} text-sm font-light mb-6`}>Chaque traitement commence par une évaluation faciale complète. Nos médecins discuteront de vos préoccupations et recommanderont un plan personnalisé.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">Prendre rendez-vous <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                  <Link to="/fr/traitements/acide-hyaluronique/"><Button variant="ghost" className="border border-gray-300 text-gray-600 hover:text-gray-900 rounded-full px-8 py-5 text-base">Tous les fillers</Button></Link>
                </div>
              </section>
            </div>
            <div className="hidden lg:block"><JawlineFillerSidebar /></div>
          </div>
        </div>

        <div className="sr-only">
          <h2>Filler Mâchoire à Londres — CosmeDocs Harley Street</h2>
          <p>Filler mâchoire par médecins inscrits au GMC à Harley Street. Notre esthétique est un art invisible — audacieux, naturel, toujours à votre image.</p>
        </div>
      </div>
    </>
  );
}
