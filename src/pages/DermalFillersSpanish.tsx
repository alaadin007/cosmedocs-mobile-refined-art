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

export default function DermalFillersSpanish() {
  const canonical = "https://www.cosmedocs.com/es/rellenos-dermicos/";

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
    "contactPoint": { "@type": "ContactPoint", "telephone": "+44 20 3733 3227", "contactType": "customer service", "availableLanguage": ["Spanish", "English"] }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "¿Son seguros los rellenos dérmicos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, cuando son administrados por profesionales médicos cualificados. En CosmeDocs, todos los tratamientos son realizados por médicos registrados en el GMC utilizando rellenos de ácido hialurónico aprobados por la FDA. Son biocompatibles y pueden disolverse con hialuronidasa si es necesario." } },
      { "@type": "Question", "name": "¿Quién es candidato para rellenos dérmicos?", "acceptedAnswer": { "@type": "Answer", "text": "La mayoría de los adultos sanos mayores de 18 años son candidatos adecuados. Durante su consulta, nuestros médicos evalúan su historial médico, el estado de su piel, la anatomía facial y sus objetivos estéticos para determinar la idoneidad." } },
      { "@type": "Question", "name": "¿Cuánto duran los rellenos dérmicos?", "acceptedAnswer": { "@type": "Answer", "text": "Los resultados suelen durar de 12 a 18 meses dependiendo de la zona tratada, el producto utilizado y el metabolismo individual. Los rellenos de labios duran de 6 a 12 meses, mientras que los de pómulos y mandíbula pueden durar hasta 18 meses." } },
      { "@type": "Question", "name": "¿Cuál es la diferencia entre rellenos y Botox?", "acceptedAnswer": { "@type": "Answer", "text": "Los rellenos dérmicos añaden volumen para restaurar la plenitud perdida y suavizar las líneas estáticas. El Botox relaja los músculos para reducir las arrugas dinámicas causadas por las expresiones faciales. Muchos pacientes se benefician de combinar ambos tratamientos." } },
      { "@type": "Question", "name": "¿Son reversibles los rellenos dérmicos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, los rellenos de ácido hialurónico pueden disolverse usando una enzima llamada hialuronidasa. Esto proporciona una medida de seguridad importante y permite ajustes si es necesario." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "Labios", areas: ["Aumento de volumen", "Definición del contorno", "Arco de Cupido", "Voluminización natural"], description: "El tratamiento de relleno más popular, desde una definición sutil hasta un volumen más pronunciado." },
    { title: "Tercio medio", areas: ["Volumen de pómulos", "Ojeras hundidas", "Sienes hundidas", "Surcos nasogenianos"], description: "Restaurar el soporte del tercio medio y tratar la pérdida de volumen que contribuye al envejecimiento." },
    { title: "Tercio inferior", areas: ["Definición de mandíbula", "Proyección de mentón", "Líneas de marioneta", "Soporte de papada"], description: "Contorneo estructural para un tercio inferior más definido y equilibrado." },
    { title: "Especializado", areas: ["Rinoplastia sin cirugía", "Alisado de frente", "Rejuvenecimiento de lóbulos", "Rejuvenecimiento de manos"], description: "Tratamientos dirigidos para preocupaciones y refinamientos específicos." }
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
        <html lang="es" />
        <title>Rellenos Dérmicos | Tratamiento Facial por Médicos | Cosmedocs Harley Street Londres</title>
        <meta name="description" content="Guía completa de rellenos dérmicos en Londres. Conozca los tratamientos con ácido hialurónico, las zonas de tratamiento y nuestro enfoque facial integral. Atención médica en Harley Street." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/dermal-fillers/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/fillers/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/rellenos-dermicos/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <meta property="og:title" content="Rellenos Dérmicos | Tratamiento Facial por Médicos | Cosmedocs Harley Street" />
        <meta property="og:description" content="Guía completa de rellenos dérmicos en Londres. Tratamientos con ácido hialurónico por médicos en Harley Street." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.cosmedocs.com/default-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="rellenos dérmicos Londres, rellenos Harley Street, rellenos labios Londres, rellenos pómulos, relleno mandíbula, relleno ojeras, ácido hialurónico, rellenos faciales, mejores rellenos Londres" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Tratamientos', path: '/treatments' }]} currentPage="Rellenos Dérmicos" variant="light" />
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
                    El arte de la
                    <span className={`block font-semibold ${goldText}`}>restauración invisible</span>
                  </h1>

                  <p className="text-sm text-[#C9A050]/60 tracking-widest uppercase mb-4 font-light">NATURAL · RESULTADOS DURADEROS</p>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    Su guía completa de rellenos dérmicos. Entender el ácido hialurónico, cómo restaura el volumen, y lograr resultados tan naturales que son indetectables.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    En CosmeDocs, los rellenos se colocan con precisión y moderación. Médicos registrados en el GMC evalúan su rostro como un todo, restaurando el equilibrio — sin alterar nunca la identidad. Desde 2007, nuestra filosofía es el arte invisible.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/harleystreet', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6 text-base font-medium transition-all duration-300">
                    Reservar consulta <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="ghost" onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))} className={`${textBody} hover:text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium border ${cardBorder}`}>
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Preguntar a la IA
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Registrado en GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> 17+ años</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> Valoración 4.9</span>
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
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowFillerEs)" />
                      <defs><radialGradient id="centreGlowFillerEs" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor="#C9A050" stopOpacity="0.15" /><stop offset="100%" stopColor="#C9A050" stopOpacity="0" /></radialGradient></defs>
                    </svg>
                  </div>

                  <motion.div className={`absolute top-8 right-0 ${cardBg} backdrop-blur-sm rounded-2xl p-4 shadow-xl border ${cardBorder}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A050] flex items-center justify-center"><Star className="h-5 w-5 text-white fill-white" /></div>
                      <div><div className={`text-sm font-semibold ${textH}`}>Clínica de confianza</div><div className={`text-xs ${textMuted}`}>Desde 2007</div></div>
                    </div>
                  </motion.div>

                  <motion.div className={`absolute top-[45%] -right-2 ${cardBg} backdrop-blur-sm rounded-2xl p-4 shadow-xl border ${cardBorder} w-[240px]`} animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Droplets className="w-4 h-4 text-[#C9A050]" />
                      <span className="text-xs font-semibold text-[#C9A050] uppercase tracking-wider">ÁCIDO HIALURÓNICO</span>
                    </div>
                    <p className={`text-[11px] ${textBody} leading-relaxed mb-2`}>Una sustancia presente de forma natural en la piel que retiene la humedad y proporciona soporte estructural.</p>
                    <div className={`flex items-center gap-3 text-[10px] ${textMuted}`}>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> Biocompatible</span>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> Reversible</span>
                    </div>
                  </motion.div>

                  <motion.div className={`absolute bottom-16 -left-4 ${cardBg} backdrop-blur-sm rounded-2xl p-5 shadow-xl border ${cardBorder} max-w-[300px]`} animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">M</div>
                      <div><div className={`text-sm font-medium ${textH}`}>María L.</div><div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div></div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"Todos dicen que me veo increíble pero no pueden decir por qué. Esa es la señal de un trabajo verdaderamente excelente."</p>
                    <Link to="/testimonials" className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-2 hover:underline">Más experiencias reales</Link>
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

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>¿Qué son los <span className={`${goldText} font-light`}>rellenos dérmicos?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>Los rellenos dérmicos son tratamientos inyectables fabricados más comúnmente con ácido hialurónico — una sustancia presente de forma natural en la piel que ayuda a retener la hidratación, el volumen y la elasticidad. Con la edad, el rostro pierde soporte estructural — el hueso retrocede, las almohadillas de grasa se desplazan y la piel se adelgaza. Los rellenos restauran este volumen perdido, levantan los tejidos caídos y suavizan las líneas — sin cirugía.</p>
                  }>
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <p className={`text-xs font-medium ${textH} mb-4`}>Lo que los rellenos pueden tratar</p>
                        <ul className="space-y-2">
                          {["Restaurar la pérdida de volumen relacionada con la edad en pómulos, sienes y labios", "Mejorar las proporciones y simetría facial", "Soportar tejidos caídos y levantar la papada", "Suavizar líneas estáticas y surcos nasogenianos", "Realzar contornos naturales — mandíbula, mentón, labios"].map((fact) => (
                            <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                          ))}
                        </ul>
                      </div>
                      <p>En CosmeDocs, los rellenos nunca se usan para «rellenar líneas a ciegas». Se colocan estratégicamente para apoyar el rostro como un todo, respetando la anatomía individual y la expresión natural.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Cómo funcionan los <span className={`${goldText} font-light`}>rellenos dérmicos</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { step: "1", title: "Evaluación", desc: "Su médico analiza la anatomía facial, la estructura ósea y los patrones de pérdida de volumen para crear un plan de tratamiento personalizado." },
                        { step: "2", title: "Inyección", desc: "El gel de ácido hialurónico se coloca con precisión usando cánulas o agujas finas a profundidades específicas para restaurar o realzar el volumen." },
                        { step: "3", title: "Integración", desc: "El relleno se integra con los tejidos circundantes, atrayendo humedad y proporcionando soporte y estructura de aspecto natural." },
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
                      <p>A diferencia del Botox que relaja los músculos, los rellenos dérmicos añaden volumen físicamente bajo la superficie de la piel. El ácido hialurónico en los rellenos es biocompatible — trabaja con su cuerpo, no contra él.</p>
                      <p>Los rellenos premium vienen en diferentes viscosidades — geles más espesos para soporte estructural (mandíbula, mentón), geles medios para volumen (pómulos), y geles más suaves para zonas delicadas (labios, ojeras). Elegir el producto correcto para cada zona es crucial para resultados naturales.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Zonas de <span className={`${goldText} font-light`}>tratamiento</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className={`${textBody} text-sm leading-relaxed font-light mb-6`}>Cada zona del rostro tiene una anatomía única, patrones de envejecimiento y requisitos específicos. Nuestros médicos adaptan la elección del producto, la profundidad de colocación y el volumen a cada zona individual.</p>
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
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Un enfoque <span className={`${goldText} font-light`}>facial integral</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>El envejecimiento facial no ocurre de forma aislada. Las líneas, pliegues y hundimientos son a menudo el resultado de cambios estructurales en otras partes del rostro. Por eso nuestros médicos adoptan un enfoque facial integral — evaluando cómo interactúan las diferentes regiones, y cómo restaurar el soporte en una zona puede mejorar naturalmente otra.</p>
                  }>
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <p className={`text-xs font-medium ${textH} mb-4`}>Este enfoque:</p>
                        <ul className="space-y-2">
                          {["Reduce el riesgo de sobrellenar cualquier zona individual", "Produce resultados más naturales y equilibrados", "Preserva el movimiento facial y las expresiones", "Ofrece resultados más duraderos con menos producto"].map((item) => (
                            <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-[#C9A050]/60 italic font-light">Nuestro objetivo no es la corrección obvia — es la restauración sutil.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Results Timeline */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Cronología de <span className={`${goldText} font-light`}>resultados</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <div className="space-y-4">
                      {[
                        { title: "Día 1: Inmediato", desc: "Mejora visible de inmediato. Algo de hinchazón es normal y esperada — se resuelve en 48-72 horas." },
                        { title: "Semanas 2-4: Estabilizado", desc: "La hinchazón se ha resuelto completamente. El relleno se ha integrado con los tejidos e hidratado. Es cuando ve el resultado real." },
                        { title: "Meses 12-18: Duración", desc: "Los resultados suelen durar 12-18 meses dependiendo de la zona, el producto utilizado y el metabolismo individual." },
                      ].map((t) => (
                        <div key={t.title} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                          <div><p className={`text-xs font-medium ${textH} mb-0.5`}>{t.title}</p><p className={`${textMuted} text-xs font-light`}>{t.desc}</p></div>
                        </div>
                      ))}
                    </div>
                  }>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>Duración por zona</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "Labios", desc: "6-12 meses (zona de mucho movimiento)" },
                          { label: "Pómulos", desc: "12-18 meses" },
                          { label: "Mandíbula y mentón", desc: "12-18 meses" },
                          { label: "Ojeras", desc: "12-18 meses (poco movimiento)" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span><strong className={`${textBody}`}>{f.label}:</strong> {f.desc}</span></div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Fillers vs Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Los rellenos en el <span className={`${goldText} font-light`}>rejuvenecimiento facial</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>Entender la diferencia entre los rellenos dérmicos y el <Link to="/es/tratamientos/botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">Botox</Link> le ayuda a tomar decisiones informadas sobre su plan de tratamiento.</p>
                  }>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                          <p className="text-sm font-medium text-[#C9A050]/80 mb-3">Rellenos dérmicos</p>
                          <p className="text-[#C9A050]/50 text-xs mb-3 font-light">Añaden volumen → Restauran la plenitud perdida</p>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Líneas presentes en reposo (líneas estáticas)</li>
                            <li>• Pómulos, labios, mandíbula, surcos nasogenianos</li>
                            <li>• Restauración de volumen y contorneo</li>
                            <li>• Resultados de 6 a 18 meses</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                          <p className={`text-sm font-medium ${textBody} mb-3`}>Botox</p>
                          <p className={`${textMuted} text-xs mb-3 font-light`}>Relaja los músculos → Reduce las arrugas dinámicas</p>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Líneas que aparecen con las expresiones</li>
                            <li>• Frente, entrecejo, patas de gallo</li>
                            <li>• Tratamiento preventivo</li>
                            <li>• Resultados de 3 a 6 meses</li>
                          </ul>
                        </div>
                      </div>
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>Muchos pacientes se benefician de un enfoque combinado. El Botox trata las arrugas de expresión dinámicas mientras los rellenos restauran el volumen perdido — juntos, crean un rejuvenecimiento facial completo.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Safety */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Seguridad y <span className={`${goldText} font-light`}>su consulta</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>Los rellenos de ácido hialurónico tienen un excelente perfil de seguridad. Son biocompatibles, temporales y — lo más importante — completamente reversibles usando una enzima llamada hialuronidasa.</p>
                  }>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}`}>Perfil de seguridad</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Productos aprobados por FDA y CE</li>
                            <li>• Biocompatibles — trabajan con su cuerpo</li>
                            <li>• Completamente reversibles con hialuronidasa</li>
                            <li>• Temporales — absorbidos naturalmente con el tiempo</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}`}>Durante su consulta</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Evaluación facial completa e historial médico</li>
                            <li>• Discusión de preocupaciones y objetivos</li>
                            <li>• Consejos honestos — decimos no cuando es apropiado</li>
                            <li>• Expectativas realistas establecidas</li>
                            <li>• Consentimiento informado obtenido</li>
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
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>El mito de la <span className={`${goldText} font-light`}>migración del relleno</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>La «migración del relleno» es una de las preocupaciones más repetidas en estética — pero es en gran medida un concepto erróneo. El relleno de ácido hialurónico, cuando se coloca correctamente por un profesional experimentado, se integra con los tejidos circundantes y permanece precisamente donde se inyectó.</p>
                  }>
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>Lo que a menudo se etiqueta como migración es típicamente el resultado de una mala técnica de inyección — relleno colocado demasiado superficialmente, en volúmenes excesivos, o en el plano tisular incorrecto.</p>
                      <div className={`${cardBg} border-l-2 border-[#C9A050] rounded-r-xl p-6`}>
                        <blockquote className={`${textBody} text-xs italic leading-relaxed mb-4`}>"La migración es un problema de técnica, no un problema de producto. Cuando el relleno se coloca a la profundidad correcta, en el plano tisular adecuado, con volúmenes apropiados — simplemente no migra."</blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">AH</div>
                          <div><p className={`${textH} font-medium text-xs`}>Dr. Ahmed Haq</p><p className={`${textMuted} text-[10px]`}>Director médico, CosmeDocs</p></div>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Preparation & Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Preparación y <span className={`${goldText} font-light`}>cuidados posteriores</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>Antes del tratamiento</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["Evitar anticoagulantes (aspirina, ibuprofeno) durante 7 días", "Limitar el alcohol 24-48 horas antes", "Informar al profesional de todos los medicamentos", "Evitar trabajo dental 2 semanas antes/después"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>Después del tratamiento</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["Evitar tocar o presionar las zonas tratadas durante 6 horas", "Evitar ejercicio intenso durante 24-48 horas", "Evitar saunas, baños de vapor y calor extremo", "Dormir ligeramente elevado la primera noche"].map((t) => (
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
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Resultados <span className={`${goldText} font-light`}>antes y después</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/dermal-fillers/full-face-filler-before-after-preview.jpg" alt="Resultados de rellenos dérmicos faciales antes y después" className="w-full h-auto object-contain" loading="lazy" />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>Todas las imágenes muestran pacientes reales tratados por nuestros médicos en nuestra clínica de Harley Street. Los resultados varían según la anatomía facial y el plan de tratamiento.</p>
                  <Link to="/before-after/dermal-fillers/" className="inline-flex items-center gap-2 text-[#C9A050]/70 hover:text-[#C9A050] text-xs font-light transition-colors">
                    Ver galería completa antes y después → <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </section>

              {/* Why Choose Cosmedocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>¿Por qué elegir <span className={`${goldText} font-light`}>CosmeDocs?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "Experiencia", desc: "1M+ inyecciones desde 2007" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "Formación", desc: "Formadores HSI" },
                      { icon: <Shield className="w-4 h-4" />, title: "Calidad", desc: "Productos HA premium" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "Filosofía", desc: "Arte invisible" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "Médicos", desc: "Médicos cualificados" },
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
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>Preguntas <span className={`${goldText} font-light`}>frecuentes</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "safe", q: "¿Son seguros los rellenos dérmicos?", a: "Sí, cuando son administrados por profesionales médicos cualificados. En CosmeDocs, todos los tratamientos son realizados por médicos registrados en el GMC utilizando rellenos de ácido hialurónico aprobados por la FDA. Son biocompatibles y pueden disolverse con hialuronidasa si es necesario." },
                      { v: "suitable", q: "¿Quién es candidato para rellenos dérmicos?", a: "La mayoría de los adultos sanos mayores de 18 años son candidatos adecuados. Durante su consulta, nuestros médicos evalúan su historial médico, el estado de su piel, la anatomía facial y sus objetivos estéticos para determinar la idoneidad." },
                      { v: "last", q: "¿Cuánto duran los rellenos dérmicos?", a: "Los resultados suelen durar de 12 a 18 meses dependiendo de la zona tratada, el producto utilizado y el metabolismo individual. Los rellenos de labios duran de 6 a 12 meses, mientras que los de pómulos y mandíbula pueden durar hasta 18 meses." },
                      { v: "pain", q: "¿Duelen los rellenos dérmicos?", a: "La mayoría de los pacientes describen la sensación como una molestia leve más que dolor. Utilizamos crema anestésica tópica y la mayoría de los rellenos contienen lidocaína para mayor comodidad. El tratamiento es bien tolerado." },
                      { v: "natural", q: "¿Se verán naturales los rellenos?", a: "Con un profesional experimentado, absolutamente. El aspecto «sobrellenado» resulta de una mala técnica o volúmenes excesivos. Nuestro enfoque prioriza resultados sutiles y equilibrados que realzan en lugar de alterar su apariencia." },
                      { v: "combine", q: "¿Se pueden combinar rellenos con Botox?", a: "Sí, muchos pacientes se benefician de combinar ambos. Los rellenos restauran el volumen y la estructura mientras el Botox trata las arrugas de expresión dinámicas. Su médico le aconsejará el mejor enfoque durante la consulta." },
                      { v: "reverse", q: "¿Son reversibles los rellenos dérmicos?", a: "Sí, los rellenos de ácido hialurónico pueden disolverse usando una enzima llamada hialuronidasa. Esto proporciona una medida de seguridad importante y permite ajustes si es necesario." },
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
              <h2 className={`text-3xl font-light mb-4 ${textH}`}>Su consulta <span className={`${goldText}`}>comienza aquí</span></h2>
              <p className={`${textBody} mb-8`}>Atención cuidadosa de los médicos de Harley Street</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6" onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}>Reservar consulta</Button>
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
