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

export default function DermalFillersSpanish() {
  const canonical = "https://www.cosmedocs.com/es/tratamientos/acido-hialuronico/";

  const treatmentAreaCards = [
    { title: "Labios", areas: ["Aumento de volumen", "Definición del contorno", "Arco de Cupido", "Resultado natural"], description: "El tratamiento de relleno más popular — de lo sutil a lo más visible.", link: "/es/tratamientos/relleno-labios/" },
    { title: "Zona media", areas: ["Volumen de pómulos", "Ojeras", "Sienes", "Surcos nasogenianos"], description: "Restauración del soporte medio facial para un aspecto más joven.", link: "/treatments/cheek-filler/" },
    { title: "Zona inferior", areas: ["Escultura mandibular", "Proyección del mentón", "Líneas de marioneta", "Papada"], description: "Contorno estructural para un tercio inferior más definido.", link: "/es/tratamientos/relleno-mandibula/" },
    { title: "Tratamientos especializados", areas: ["Rinomodelación", "Alisado de frente", "Rejuvenecimiento de lóbulos", "Rejuvenecimiento de manos"], description: "Tratamientos dirigidos a preocupaciones específicas." }
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
        <html lang="es" />
        <title>Ácido Hialurónico Londres | Rellenos Faciales | Harley Street | CosmeDocs</title>
        <meta name="description" content="Guía completa de rellenos de ácido hialurónico en Londres. Descubre las zonas de tratamiento, productos y protocolos. Médicos registrados en GMC en Harley Street." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/acide-hyaluronique/" />
        <link rel="alternate" hrefLang="es" href={canonical} />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <meta property="og:title" content="Ácido Hialurónico Londres | CosmeDocs Harley Street" />
        <meta property="og:description" content="Guía completa de rellenos faciales. Médicos Harley Street desde 2007." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="keywords" content="ácido hialurónico Londres, rellenos faciales, filler Londres, Harley Street, medicina estética, rejuvenecimiento facial" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227",
          "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Son seguros los rellenos de ácido hialurónico?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, cuando son realizados por médicos cualificados. En CosmeDocs, todos los tratamientos son realizados por médicos registrados en el GMC utilizando productos aprobados por la FDA." } },
            { "@type": "Question", "name": "¿Cuánto duran los resultados?", "acceptedAnswer": { "@type": "Answer", "text": "Los resultados suelen durar de 12 a 18 meses según la zona tratada y el producto utilizado." } },
            { "@type": "Question", "name": "¿Se puede disolver el ácido hialurónico?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, el ácido hialurónico puede disolverse de forma segura con hialuronidasa si es necesario." } }
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
              <Breadcrumb items={[{ label: 'Tratamientos', path: '/es/' }]} currentPage="Ácido Hialurónico" variant="light" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, Londres W1G 9PF
                  </div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    El Arte
                    <span className={`block font-semibold ${goldText}`}>Invisible</span>
                  </h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    Tu guía completa de rellenos de ácido hialurónico. Descubre cómo restaurar el volumen perdido para resultados naturales e indetectables.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    En CosmeDocs, cada inyección se realiza con precisión y moderación. Médicos registrados en el GMC evalúan todo tu rostro para restaurar el equilibrio — nunca para cambiar tu identidad. Desde 2007, nuestra filosofía es el arte invisible.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">
                    Reservar consulta <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="ghost" onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))} className="text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 rounded-full px-8 py-6 text-base font-medium border border-gray-300">
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Consulta IA
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Registrados en GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +17 años</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> Valoración 4.9</span>
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
                    <circle cx="250" cy="250" r="60" fill="url(#centreGlowFillerEs)" />
                    <defs><radialGradient id="centreGlowFillerEs" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor={gold} stopOpacity="0.12" /><stop offset="100%" stopColor={gold} stopOpacity="0" /></radialGradient></defs>
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
              <h2 className={`text-3xl md:text-4xl font-light ${textH} mb-3`}>Zonas de <span className={goldText}>Tratamiento</span></h2>
              <div className="w-12 h-px bg-[#C9A050]/40 mx-auto mb-4" />
              <p className={`${textBody} max-w-xl mx-auto text-sm font-light`}>Cada zona requiere experiencia especializada y productos diferentes. Nuestros médicos seleccionan el producto óptimo para tu anatomía.</p>
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>¿Qué es el <span className={`${goldText} font-light`}>ácido hialurónico?</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <ExpandableSection preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        El ácido hialurónico es una sustancia presente naturalmente en la piel que retiene agua y mantiene el volumen. Las inyecciones utilizan esta molécula para restaurar el volumen perdido y mejorar los contornos faciales.
                      </p>
                    }>
                      <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                        <p>Con la edad, el rostro pierde su volumen natural debido a la pérdida de colágeno, grasa y reabsorción ósea. El ácido hialurónico restaura este volumen de forma natural y precisa.</p>
                        <p>En CosmeDocs, utilizamos exclusivamente productos aprobados por la FDA de los mejores fabricantes, incluyendo Juvederm, Restylane y Teoxane.</p>
                      </div>
                    </ExpandableSection>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>¿Por qué <span className={`${goldText} font-light`}>CosmeDocs?</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Solo médicos", desc: "Todos los tratamientos son realizados por médicos registrados en el GMC — nunca enfermeras o técnicos." },
                        { title: "Productos premium", desc: "Utilizamos exclusivamente ácido hialurónico aprobado de los mejores fabricantes mundiales." },
                        { title: "Desde 2007", desc: "Más de 17 años de experiencia en medicina estética en Harley Street." },
                        { title: "Filosofía natural", desc: "Nuestra estética es un arte invisible — audaz, natural, siempre a tu manera." },
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Precios <span className={`${goldText} font-light`}>y Tarifas</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="space-y-3">
                      {[
                        { name: "Relleno labios 0,5 ml", price: "Desde £300" },
                        { name: "Relleno labios 1 ml", price: "Desde £350" },
                        { name: "Relleno mandíbula 1 ml", price: "Desde £350" },
                        { name: "Relleno mentón 1,2 ml", price: "Desde £350" },
                        { name: "Ojeras", price: "Desde £425" },
                        { name: "Relleno pómulos", price: "Desde £350" },
                        { name: "HA Makeover completo", price: "Desde £950" },
                      ].map(item => (
                        <div key={item.name} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-5 py-3">
                          <span className={`text-sm ${textH} font-light`}>{item.name}</span>
                          <span className={`text-sm font-medium ${goldText}`}>{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className={`text-xs ${textMuted} mt-4 font-light`}>Tarifa de consulta (£50) descontada si el tratamiento se realiza el mismo día.</p>
                  </motion.div>
                </section>

                {/* FAQs */}
                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Preguntas <span className={`${goldText} font-light`}>Frecuentes</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <Accordion type="single" collapsible className="space-y-3">
                      {[
                        { q: "¿Son seguros los rellenos?", a: "Sí, cuando son realizados por médicos cualificados. En CosmeDocs, todos los tratamientos son realizados por médicos registrados en el GMC utilizando productos aprobados por la FDA. Los productos son biocompatibles y pueden disolverse si es necesario." },
                        { q: "¿Cuánto duran los resultados?", a: "Los resultados suelen durar de 12 a 18 meses según la zona tratada y el producto utilizado. Los rellenos labiales duran de 6 a 12 meses, mientras que pómulos y mandíbula pueden durar hasta 18 meses." },
                        { q: "¿Es doloroso?", a: "La molestia es mínima. Aplicamos anestésico tópico y utilizamos productos que contienen lidocaína. La mayoría de pacientes describe una sensación de presión ligera." },
                        { q: "¿Cuál es la diferencia con el Botox?", a: "El ácido hialurónico añade volumen y restaura la plenitud perdida. El Botox relaja los músculos para reducir las arrugas dinámicas. Muchos pacientes se benefician de la combinación de ambos tratamientos." },
                        { q: "¿Se puede disolver el ácido hialurónico?", a: "Sí, el ácido hialurónico puede disolverse de forma segura con hialuronidasa. Esto ofrece una garantía importante y permite ajustes cuando sea necesario." },
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
            <h2 className={`text-3xl font-light ${textH} mb-4`}>Comienza <span className={goldText}>Tu Camino</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>Cada tratamiento comienza con una consulta exhaustiva. Nuestros médicos discutirán tus preocupaciones y recomendarán un plan personalizado.</p>
            <Link to="/contact">
              <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">Reservar consulta <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </section>

        <div className="sr-only">
          <h2>Ácido Hialurónico en Londres — CosmeDocs Harley Street</h2>
          <p>CosmeDocs es una clínica de medicina estética dirigida por médicos en Harley Street, Londres, especializada en inyecciones de ácido hialurónico. Nuestra estética es un arte invisible — audaz, natural, siempre a tu manera.</p>
        </div>
      </div>
    </>
  );
}
