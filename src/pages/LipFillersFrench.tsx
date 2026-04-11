import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import LipFillersSidebar from "@/components/lip-fillers/LipFillersSidebar";

const LipFillersFrench = () => {
  const faqs = [
    { question: "Combien de temps durent les injections lèvres ?", answer: "Les résultats durent généralement de 6 à 12 mois selon le produit utilisé, votre métabolisme et le volume injecté. Les traitements de 0,5 ml durent 6 à 9 mois, tandis que les traitements de 1 ml peuvent durer jusqu'à 12 mois." },
    { question: "Combien coûtent les injections lèvres à Londres ?", answer: "Chez CosmeDocs, les injections lèvres commencent à partir de £300 pour 0,5 ml et £350 pour 1 ml. Cela comprend la consultation, l'acide hyaluronique premium et le suivi post-traitement." },
    { question: "Les injections lèvres sont-elles douloureuses ?", answer: "L'inconfort est minimal. Nous appliquons un anesthésique topique avant le traitement et utilisons des fillers contenant de la lidocaïne. La plupart des patients décrivent la sensation comme une légère pression plutôt que de la douleur." },
    { question: "Quelle est la différence entre 0,5 ml et 1 ml ?", answer: "0,5 ml offre une amélioration subtile et naturelle — idéale pour les lèvres fines et les premiers traitements. 1 ml crée un volume plus visible et une forme définie. Votre médecin évaluera l'anatomie de vos lèvres lors de la consultation." },
    { question: "Les injections lèvres peuvent-elles paraître naturelles ?", answer: "Absolument. Notre philosophie d'art invisible garantit des résultats naturels. Nous améliorons la forme et les proportions existantes de vos lèvres plutôt que de créer un aspect artificiel." },
    { question: "Les injections lèvres peuvent-elles être dissoutes ?", answer: "Oui. Les fillers à base d'acide hyaluronique peuvent être dissous en toute sécurité avec de la hyaluronidase si vous n'êtes pas satisfaite des résultats." },
  ];

  return (
    <>
      <Helmet>
        <title>Injection Lèvres Londres | Augmentation Naturelle des Lèvres | Harley Street | CosmeDocs</title>
        <meta name="description" content="Injections lèvres réalisées par des médecins à partir de £300. Augmentation naturelle des lèvres à l'acide hyaluronique premium dans notre clinique de Harley Street. Options 0,5 ml et 1 ml." />
        <link rel="canonical" href="https://www.cosmedocs.com/fr/traitements/injection-levres/" data-rh="true" />
        <meta property="og:title" content="Injection Lèvres Londres | Augmentation Naturelle | CosmeDocs" />
        <meta property="og:description" content="Injections lèvres par des médecins à partir de £300. Résultats naturels à Harley Street." />
        <meta property="og:url" content="https://www.cosmedocs.com/fr/traitements/injection-levres/" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/injection-levres/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-labios/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/lip-fillers/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness", "name": "CosmeDocs",
                "description": "Clinique de médecine esthétique dirigée par des médecins à Harley Street, Londres. Fondée en 2007.",
                "url": "https://www.cosmedocs.com/", "telephone": "+44 20 3733 3227", "priceRange": "££",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB", "addressRegion": "London" },
                "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" }
              },
              {
                "@type": "MedicalProcedure", "name": "Injection Lèvres", "alternateName": "Lip Fillers",
                "description": "Augmentation des lèvres par des médecins utilisant de l'acide hyaluronique premium pour un volume, une forme et une définition naturels.",
                "url": "https://www.cosmedocs.com/fr/traitements/injection-levres/",
                "procedureType": "NoninvasiveProcedure", "bodyLocation": "Lips"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white pt-0 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Traitements', path: '/fr/traitements/' }]} currentPage="Injection Lèvres" />
            <div className="pt-12 pb-4 text-center">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-stone-800 leading-[1.1] tracking-tight mb-6">
                  Injection Lèvres{" "}<span className="text-[#C9A050] font-light">Londres</span>
                </h1>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-extralight max-w-2xl mx-auto">
                  Augmentation des lèvres réalisée par des médecins avec de l'acide hyaluronique premium — volume naturel, forme raffinée et définition subtile adaptés à vos traits.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Médecins qualifiés</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />À partir de £300</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Depuis 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Qu'est-ce que les <span className="text-[#C9A050] font-light">injections lèvres ?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">Les injections lèvres sont des traitements utilisant de l'acide hyaluronique (AH) pour ajouter du volume, de la forme et de la définition aux lèvres. En tant que substance naturellement présente dans le corps, l'AH s'intègre parfaitement aux tissus des lèvres.</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>Contrairement à l'augmentation chirurgicale des lèvres, les fillers injectables sont peu invasifs et ne nécessitent pas d'anesthésie générale. Le traitement dure 30 à 45 minutes et les résultats sont visibles immédiatement.</p>
                      <p>Chez CosmeDocs, nous utilisons exclusivement des fillers à base d'acide hyaluronique approuvés par la FDA, provenant des meilleurs fabricants : Juvederm, Restylane et Teoxane.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Comment fonctionne le <span className="text-[#C9A050] font-light">traitement</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">Votre médecin commence par une évaluation faciale détaillée, discute de vos objectifs et recommande le volume et le produit optimaux. Un anesthésique topique est appliqué avant des injections précises aux points stratégiques des lèvres.</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>À l'aide d'aiguilles fines ou d'une micro-canule, l'acide hyaluronique est soigneusement déposé dans plusieurs zones des lèvres — le bord vermillon, l'arc de Cupidon, le corps des lèvres et les crêtes du philtrum.</p>
                      <p>Le filler contient de la lidocaïne pour un confort supplémentaire. Votre médecin sculpte la forme des lèvres en temps réel, vous permettant de donner votre avis tout au long du processus.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Notre cocktail <span className="text-[#C9A050] font-light">secret</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">Tous les fillers ne se valent pas — et toutes les lèvres non plus. En 20 ans d'injections, nous avons développé une approche cocktail exclusive que la plupart des cliniques n'offrent tout simplement pas.</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>Chaque marque de filler propose plus d'une douzaine de produits, chacun avec une consistance, une élasticité et un poids moléculaire différents. Choisir la bonne <em>combinaison</em> est essentiel.</p>
                      <div className="grid grid-cols-2 gap-3 my-4">
                        {[
                          { label: "AH Suisse", detail: "Support structurel et longévité" },
                          { label: "AH Français", detail: "Hydratation et douceur naturelle" },
                          { label: "Couche volume", detail: "Corps et projection" },
                          { label: "Couche hydratation", detail: "Souplesse et toucher" },
                        ].map((item) => (
                          <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
                            <p className="text-[#C9A050] text-xs font-medium mb-1">{item.label}</p>
                            <p className="text-stone-500 text-[11px]">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                        <p className="text-stone-500 text-xs leading-relaxed font-light">
                          <strong className="text-[#C9A050]">Pourquoi c'est important :</strong> Un seul produit donne une seule texture. Notre approche cocktail superpose plusieurs consistances — du volume là où vous avez besoin de projection, de l'hydratation là où vous avez besoin de douceur. C'est l'art invisible.
                        </p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">0,5 ml vs 1 ml <span className="text-[#C9A050] font-light">injection lèvres</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">0,5 ml — Amélioration subtile</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• Idéal pour les lèvres fines et les débutantes</li>
                        <li>• Résultats durant 6 à 9 mois</li>
                        <li>• £300</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-stone-700 mb-3">1 ml — Amélioration visible</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• Pour les lèvres moyennes à grandes</li>
                        <li>• Résultats durant 9 à 12 mois</li>
                        <li>• £350</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Zones d'amélioration <span className="text-[#C9A050] font-light">des lèvres</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Bord vermillon", "Arc de Cupidon", "Corps des lèvres", "Commissures orales", "Crêtes du philtrum", "Correction de symétrie"].map((area) => (
                      <div key={area} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
                        <p className="text-stone-600 text-xs font-light">{area}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Pourquoi <span className="text-[#C9A050] font-light">CosmeDocs ?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "Dirigé par des médecins — tous les traitements par des médecins inscrits au GMC",
                      "Formateurs du Harley Street Institute — fondé en 2007",
                      "Plus d'un million de traitements réalisés",
                      "Fillers premium approuvés par la FDA exclusivement",
                      "Plans de traitement personnalisés pour chaque patient",
                      "Notre esthétique est un art invisible"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-stone-600 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Questions <span className="text-[#C9A050] font-light">fréquentes</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-stone-50 border border-stone-200 rounded-xl px-5">
                        <AccordionTrigger className="text-stone-700 hover:text-[#C9A050] text-left text-sm font-light py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-stone-500 text-sm font-light pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24"><LipFillersSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-stone-800">Prête pour des lèvres naturelles et <span className="text-[#C9A050]">sublimes ?</span></h2>
              <p className="text-stone-500 mb-8 font-light">Une consultation avec nos médecins évaluera l'anatomie de vos lèvres et créera un plan d'amélioration personnalisé — subtil ou audacieux, toujours naturel.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    Réserver une consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/fr/">
                  <Button variant="ghost" className="border border-stone-300 text-stone-600 hover:text-stone-800 hover:bg-stone-100 px-8 py-5 rounded-full text-base w-full sm:w-auto">Parler à un médecin</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-stone-50"><LipFillersSidebar /></section>
      </div>
    </>
  );
};

export default LipFillersFrench;
