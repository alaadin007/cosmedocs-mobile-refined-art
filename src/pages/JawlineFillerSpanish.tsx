import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import JawlineFillerSidebar from '@/components/jawline/JawlineFillerSidebar';

export default function JawlineFillerSpanish() {
  const canonical = "https://www.cosmedocs.com/es/tratamientos/relleno-mandibula/";
  const faqs = [
    { q: "¿Cuánto cuesta el relleno de mandíbula?", a: "En CosmeDocs, el relleno de mandíbula empieza en £350 por 1 ml, £650 por 2 ml, y el paquete Natural HD Jawline cuesta £950." },
    { q: "¿Cuánto duran los resultados?", a: "Los resultados suelen durar de 15 a 18 meses, lo que los convierte en uno de los rellenos más duraderos." },
    { q: "¿Es doloroso?", a: "La mayoría de pacientes experimenta una molestia mínima. Utilizamos anestésico local y los fillers contienen lidocaína." },
    { q: "¿Cuál es el tiempo de recuperación?", a: "La recuperación es mínima — la mayoría de pacientes vuelve al trabajo inmediatamente. Posible hinchazón leve durante 24-48 horas." },
    { q: "¿Se puede combinar mentón y mandíbula?", a: "Absolutamente. Los tratamientos de mentón y mandíbula funcionan maravillosamente juntos para una mejora integral del tercio inferior." },
    { q: "¿Se puede disolver el relleno?", a: "Sí, los rellenos de ácido hialurónico pueden disolverse con hialuronidasa si es necesario." },
  ];
  const textH = "text-gray-900"; const textBody = "text-gray-600"; const goldText = "text-[#C9A050]";

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Relleno Mandíbula Londres | Escultura Jawline | Harley Street | CosmeDocs</title>
        <meta name="description" content="Relleno de mandíbula por médicos desde £350. Define y esculpe tu línea mandibular en nuestra clínica de Harley Street. Resultados naturales desde 2007." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/filler-machoire/" />
        <link rel="alternate" hrefLang="es" href={canonical} />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <meta property="og:title" content="Relleno Mandíbula Londres | CosmeDocs" />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@graph": [
          { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
          { "@type": "MedicalProcedure", "name": "Relleno Mandíbula", "alternateName": "Jawline Filler", "url": canonical, "procedureType": "NoninvasiveProcedure" },
          { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
        ] })}</script>
      </Helmet>

      <div className="bg-[#F5F5F3] overflow-x-hidden min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-[#F5F5F3] pt-0 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Tratamientos', path: '/es/' }, { label: 'Ácido Hialurónico', path: '/es/tratamientos/acido-hialuronico/' }]} currentPage="Relleno Mandíbula" variant="light" />
            <div className="pt-12 pb-4 text-center">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-stone-800 leading-[1.1] tracking-tight mb-6">Relleno <span className="text-[#C9A050] font-light">Mandíbula</span></h1>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-extralight max-w-2xl mx-auto">Define, contornea y esculpe tu mandíbula con relleno de precisión — para un tercio inferior más nítido y equilibrado.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Por médicos</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30–45 min</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Desde 2007</span>
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
                    <p>Una mandíbula definida se describe a menudo como el marco del rostro — proporcionando estructura, equilibrio y un aspecto más joven. Con la edad, la reabsorción ósea y el descenso de tejidos blandos crean un tercio inferior más suave.</p>
                    <p>En CosmeDocs, nuestros médicos utilizan fillers HA densos y estructurales específicamente formulados para la mejora mandibular, ofreciendo soporte y proyección superiores.</p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Qué puede lograr <span className={`${goldText} font-light`}>el relleno mandibular</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    {["Definición de ángulos mandibulares", "Escultura de mandíbula más ancha", "Corrección de papada temprana", "Equilibrio de asimetrías", "Mejora del perfil", "Restauración de estructura juvenil"].map(item => (
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
                      <p className="text-sm font-medium text-[#C9A050] mb-3">1 ml — Mejora sutil</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light"><li>• Ideal para primeras veces</li><li>• Definición natural y sutil</li><li>• Desde £350</li></ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-stone-700 mb-3">2 ml — Escultura pronunciada</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light"><li>• Escultura más visible</li><li>• Ángulos más marcados</li><li>• Desde £650</li></ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Preguntas <span className={`${goldText} font-light`}>Frecuentes</span></h2>
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
                <h2 className={`text-2xl font-extralight ${textH} mb-4`}>Reserva <span className={goldText}>Tu Consulta</span></h2>
                <p className={`${textBody} text-sm font-light mb-6`}>Cada tratamiento comienza con una evaluación facial completa.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">Reservar consulta <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                  <Link to="/es/tratamientos/acido-hialuronico/"><Button variant="ghost" className="border border-gray-300 text-gray-600 hover:text-gray-900 rounded-full px-8 py-5 text-base">Todos los rellenos</Button></Link>
                </div>
              </section>
            </div>
            <div className="hidden lg:block"><JawlineFillerSidebar /></div>
          </div>
        </div>
        <div className="sr-only"><h2>Relleno Mandíbula en Londres — CosmeDocs Harley Street</h2><p>Nuestra estética es un arte invisible — audaz, natural, siempre a tu manera.</p></div>
      </div>
    </>
  );
}
