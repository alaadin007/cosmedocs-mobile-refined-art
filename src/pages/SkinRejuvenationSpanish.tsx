import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';

export default function SkinRejuvenationSpanish() {
  const canonical = "https://www.cosmedocs.com/es/tratamientos/rejuvenecimiento-piel/";
  const bg = "bg-[#F5F5F3]"; const textH = "text-gray-900"; const textBody = "text-gray-600"; const textMuted = "text-gray-400"; const goldText = "text-[#C9A050]"; const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Rejuvenecimiento de la Piel Londres | Tratamientos Cutáneos | Harley Street | CosmeDocs</title>
        <meta name="description" content="Tratamientos de rejuvenecimiento cutáneo en Londres. Profhilo, polinucleótidos, microneedling y peelings químicos. Médicos GMC en Harley Street." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/skin-rejuvenation/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/skin-rejuvenation/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/rajeunissement-peau/" />
        <link rel="alternate" hrefLang="es" href={canonical} />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/skin-rejuvenation/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/skin-rejuvenation/" />
        <meta property="og:title" content="Rejuvenecimiento Piel Londres | CosmeDocs" />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content="es_ES" />
        <meta name="keywords" content="rejuvenecimiento piel Londres, Profhilo, polinucleótidos, microneedling, peeling químico, Harley Street" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs", "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } })}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} /></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6"><Breadcrumb items={[{ label: 'Tratamientos', path: '/es/' }]} currentPage="Rejuvenecimiento Piel" variant="light" /></div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200"><MapPin className="h-4 w-4 text-[#C9A050]" />8-10 Harley Street, Londres W1G 9PF</div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>Rejuvenecimiento<span className={`block font-semibold ${goldText}`}>de la Piel</span></h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>Tratamientos avanzados para mejorar la calidad, textura y luminosidad de tu piel — desde el interior.</p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>Nuestra filosofía se basa en estimular los mecanismos naturales de regeneración cutánea con tratamientos científicamente validados.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">Reservar <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Registrados en GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +17 años</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> Nota 4.9</span>
                </motion.div>
              </div>
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-14">
            <section>
              <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Nuestros <span className={`${goldText} font-light`}>tratamientos</span></h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Profhilo", desc: "Bioestimulador que mejora la hidratación y elasticidad de la piel.", price: "Desde £350" },
                  { title: "Polinucleótidos", desc: "Estimula la regeneración celular y mejora la calidad cutánea.", price: "Desde £350" },
                  { title: "Microneedling", desc: "Estimula la producción de colágeno para mejorar textura y cicatrices.", price: "Desde £250" },
                  { title: "Peelings químicos", desc: "Elimina las capas superficiales para revelar una piel más luminosa.", price: "Desde £150" },
                  { title: "HydraFacial", desc: "Limpieza profunda e hidratación intensa en una sola sesión.", price: "Desde £200" },
                  { title: "PRP Vampire Facial", desc: "Utiliza tus propias plaquetas para estimular la regeneración.", price: "Desde £350" },
                ].map(item => (
                  <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-1">
                      <p className={`text-sm font-medium ${textH}`}>{item.title}</p>
                      <span className={`text-xs font-medium ${goldText}`}>{item.price}</span>
                    </div>
                    <p className={`text-xs ${textBody} font-light`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Preguntas <span className={`${goldText} font-light`}>frecuentes</span></h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  { q: "¿Qué tratamiento me conviene?", a: "Depende del estado de tu piel y tus objetivos. Nuestros médicos evalúan tu piel en consulta." },
                  { q: "¿Cuántas sesiones necesito?", a: "Variable. Profhilo necesita 2 sesiones, microneedling puede requerir 3-6." },
                  { q: "¿Se pueden combinar tratamientos?", a: "Sí, muchos pacientes se benefician de protocolos personalizados que combinan varios tratamientos." },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                    <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                    <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>Comienza <span className={goldText}>tu camino</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>Nuestros médicos evalúan tu piel y diseñan un plan personalizado.</p>
            <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">Reservar <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </section>
      </div>
    </>
  );
}
