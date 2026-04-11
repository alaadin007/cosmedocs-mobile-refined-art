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

export default function ChinFillerSpanish() {
  const canonical = "https://www.cosmedocs.com/es/tratamientos/relleno-menton/";
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
        <title>Relleno de Mentón Londres | Aumento de Mentón | Harley Street | CosmeDocs</title>
        <meta name="description" content="Relleno de mentón con ácido hialurónico en Londres. Aumento y proyección del mentón sin cirugía. Médicos registrados en GMC en Harley Street desde 2007." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/filler-menton/" />
        <link rel="alternate" hrefLang="es" href={canonical} />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/chin-filler/" />
        <meta property="og:title" content="Relleno de Mentón Londres | CosmeDocs Harley Street" />
        <meta property="og:description" content="Aumento de mentón sin cirugía. Médicos Harley Street desde 2007." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="keywords" content="relleno mentón Londres, aumento mentón, ácido hialurónico mentón, Harley Street, medicina estética" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227",
          "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Cuánto cuesta el relleno de mentón?", "acceptedAnswer": { "@type": "Answer", "text": "El relleno de mentón comienza desde £350 por 1,2 ml. El coste varía según la cantidad necesaria." } },
            { "@type": "Question", "name": "¿Cuánto duran los resultados?", "acceptedAnswer": { "@type": "Answer", "text": "Los resultados suelen durar de 12 a 18 meses. El relleno en el mentón dura más que en los labios." } },
            { "@type": "Question", "name": "¿Es seguro el relleno de mentón?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, cuando es realizado por médicos cualificados con productos premium. En CosmeDocs todos los procedimientos son realizados por profesionales experimentados." } }
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
              <Breadcrumb items={[{ label: 'Tratamientos', path: '/es/' }]} currentPage="Relleno de Mentón" variant="light" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, Londres W1G 9PF
                  </div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    Proyección
                    <span className={`block font-semibold ${goldText}`}>del Mentón</span>
                  </h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    El relleno de mentón restaura el equilibrio facial y mejora el perfil de forma natural y precisa — sin cirugía.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    En CosmeDocs, utilizamos técnicas precisas para proyectar el mentón y armonizar el rostro. Nuestra estética es un arte invisible.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">
                    Reservar consulta <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Registrados en GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +17 años</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> Nota 4.9</span>
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
                    <circle cx="250" cy="250" r="60" fill="url(#centreGlowChinEs)" />
                    <defs><radialGradient id="centreGlowChinEs" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor={gold} stopOpacity="0.12" /><stop offset="100%" stopColor={gold} stopOpacity="0" /></radialGradient></defs>
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>¿Qué es el <span className={`${goldText} font-light`}>relleno de mentón?</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <ExpandableSection preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        El relleno de mentón es un procedimiento no quirúrgico que utiliza ácido hialurónico para mejorar la forma del mentón y restaurar el equilibrio facial. También conocido como mentoplastia líquida.
                      </p>
                    }>
                      <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                        <p>El mentón juega un papel fundamental en la armonía facial y el perfil lateral. Un mentón débil puede hacer que la nariz parezca más grande y la mandíbula menos definida.</p>
                        <p>Con relleno de alta densidad, nuestros médicos añaden proyección, mejoran la simetría y crean un mejor equilibrio facial — todo sin cirugía y con resultados inmediatos.</p>
                      </div>
                    </ExpandableSection>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Beneficios <span className={`${goldText} font-light`}>del relleno</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Perfil mejorado", desc: "Mayor proyección del mentón mejora notablemente el perfil lateral." },
                        { title: "Armonía facial", desc: "Restaura las proporciones entre nariz, mentón y mandíbula." },
                        { title: "Sin cirugía", desc: "Resultados inmediatos sin tiempo de recuperación ni anestesia general." },
                        { title: "Resultados naturales", desc: "Nuestra estética es un arte invisible — audaz, natural, siempre a tu medida." },
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Precios <span className={`${goldText} font-light`}>y coste</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="space-y-3">
                      {[
                        { name: "Relleno mentón 1,2 ml", price: "Desde £350" },
                        { name: "Relleno mentón 2,4 ml", price: "Desde £650" },
                        { name: "Relleno mentón 3,6 ml", price: "Desde £850" },
                        { name: "HA Makeover completo", price: "Desde £950" },
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Preguntas <span className={`${goldText} font-light`}>frecuentes</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <Accordion type="single" collapsible className="space-y-3">
                      {[
                        { q: "¿Cuánto cuesta el relleno de mentón?", a: "El relleno de mentón comienza desde £350 por 1,2 ml, £650 por 2,4 ml y £850 por 3,6 ml." },
                        { q: "¿Cuánto duran los resultados?", a: "Los resultados suelen durar de 12 a 18 meses según el producto y el metabolismo individual." },
                        { q: "¿Es doloroso?", a: "La molestia es mínima. Utilizamos anestésico tópico y el relleno contiene lidocaína." },
                        { q: "¿Se puede combinar con otros tratamientos?", a: "Sí, el relleno de mentón se combina perfectamente con mandíbula, labios y Botox." },
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
            <h2 className={`text-3xl font-light ${textH} mb-4`}>Comienza <span className={goldText}>tu camino</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>Cada tratamiento comienza con una consulta completa con nuestros médicos especializados.</p>
            <Link to="/contact">
              <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">Reservar <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
