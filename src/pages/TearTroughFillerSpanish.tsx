import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import TearTroughFillerSidebar from '@/components/tear-trough/TearTroughFillerSidebar';

export default function TearTroughFillerSpanish() {
  const canonical = "https://www.cosmedocs.com/es/tratamientos/ojeras/";
  const bg = "bg-[#F5F5F3]"; const textH = "text-gray-900"; const textBody = "text-gray-600"; const textMuted = "text-gray-400"; const goldText = "text-[#C9A050]"; const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Ojeras Londres | Relleno Bajo los Ojos | Harley Street | CosmeDocs</title>
        <meta name="description" content="Tratamiento de ojeras en Londres con ácido hialurónico. Técnica cánula para máxima seguridad. Médicos registrados en GMC en Harley Street." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/tear-trough-filler/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/tear-trough-filler/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/cernes-creuses/" />
        <link rel="alternate" hrefLang="es" href={canonical} />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/tear-trough-filler/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/tear-trough-filler/" />
        <meta property="og:title" content="Ojeras Londres | CosmeDocs Harley Street" />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="keywords" content="ojeras Londres, relleno bajo los ojos, ácido hialurónico ojeras, Harley Street" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs", "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "¿Qué es el relleno de ojeras?", "acceptedAnswer": { "@type": "Answer", "text": "Es un tratamiento no quirúrgico con ácido hialurónico para restaurar volumen bajo los ojos, reducir ojeras y atenuar la hinchazón." } },
          { "@type": "Question", "name": "¿Cuánto cuesta?", "acceptedAnswer": { "@type": "Answer", "text": "El relleno bajo los ojos comienza desde £425. El tratamiento con polinucleótidos desde £450 por sesión." } },
          { "@type": "Question", "name": "¿Cuánto duran los resultados?", "acceptedAnswer": { "@type": "Answer", "text": "Los resultados suelen durar de 12 a 18 meses según factores individuales." } }
        ] })}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} /></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6"><Breadcrumb items={[{ label: 'Tratamientos', path: '/es/' }]} currentPage="Ojeras" variant="light" /></div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200"><MapPin className="h-4 w-4 text-[#C9A050]" />8-10 Harley Street, Londres W1G 9PF</div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>Tratamiento<span className={`block font-semibold ${goldText}`}>de Ojeras</span></h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>Tratamiento de ojeras y hundimiento bajo los ojos con inyecciones precisas que restauran el volumen y la luminosidad de la mirada.</p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>La zona bajo los ojos es una de las más delicadas del rostro. En CosmeDocs utilizamos la técnica cánula para máxima seguridad y precisión.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">Reservar consulta <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              <div className="space-y-14">
                <section>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Tratamiento de <span className={`${goldText} font-light`}>ojeras</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                    <p>El surco lagrimal es uno de los primeros signos de cansancio y envejecimiento. La pérdida de volumen en esta zona crea sombras que dan un aspecto cansado.</p>
                    <p>Utilizamos un relleno ligero especialmente adaptado a esta zona delicada, con técnica cánula para minimizar hematomas y garantizar resultados naturales y seguros.</p>
                  </div>
                </section>
                <section>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Precios <span className={`${goldText} font-light`}>y coste</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {[{ name: "Relleno bajo los ojos", price: "Desde £425" }, { name: "Polinucleótidos bajo los ojos", price: "Desde £450" }, { name: "Tratamiento combinado", price: "Desde £750" }].map(item => (
                      <div key={item.name} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-5 py-3">
                        <span className={`text-sm ${textH} font-light`}>{item.name}</span>
                        <span className={`text-sm font-medium ${goldText}`}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>Preguntas <span className={`${goldText} font-light`}>frecuentes</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {[
                      { q: "¿Es doloroso?", a: "La mayoría de los pacientes experimentan poco o ningún dolor gracias a las técnicas avanzadas y anestésico tópico." },
                      { q: "¿Cuál es el tiempo de recuperación?", a: "La recuperación es rápida con resultados inmediatos. Puede haber una ligera hinchazón durante unos días." },
                      { q: "¿Quién es buen candidato?", a: "Personas con ojeras genéticas, pérdida de volumen bajo los ojos o signos tempranos de envejecimiento." },
                      { q: "¿Se puede combinar con otros tratamientos?", a: "Sí, funciona bien con Botox para patas de gallo y relleno de pómulos." },
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                        <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                        <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              </div>
              <div className="hidden lg:block"><TearTroughFillerSidebar /></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>Comienza <span className={goldText}>tu camino</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>Cada tratamiento comienza con una consulta completa para evaluar la zona bajo los ojos.</p>
            <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">Reservar <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </section>
      </div>
    </>
  );
}
