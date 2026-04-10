import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Award, Calendar, MapPin, CheckCircle, Star, ArrowRight, Shield, Heart, Check, Activity, Syringe, GraduationCap, Stethoscope, MessageCircle, Sparkles, Building, Users, Phone, Play, ExternalLink } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import BotoxSidebarLight from '@/components/botox/BotoxSidebarLight';
import crowsFeetThumb from '@/assets/crows-feet-filler-thumb.jpg';

export default function FaceBotoxSpanish() {
  const canonical = "https://www.cosmedocs.com/es/botox/";

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "image": ["https://www.cosmedocs.com/default-og-image.jpg"],
    "url": "https://www.cosmedocs.com",
    "telephone": "+44 20 3733 3227",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "Londres",
      "addressRegion": "Greater London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 20 3733 3227",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "¿Qué es el Bótox y cómo funciona?", "acceptedAnswer": { "@type": "Answer", "text": "El Bótox (toxina botulínica tipo A) es una proteína purificada que relaja temporalmente los músculos faciales objetivo al bloquear las señales nerviosas. Esto reduce la apariencia de las arrugas dinámicas causadas por expresiones faciales repetidas. El tratamiento se usa de forma segura desde hace más de 30 años." } },
      { "@type": "Question", "name": "¿Quién es candidato adecuado para el Bótox?", "acceptedAnswer": { "@type": "Answer", "text": "El Bótox es adecuado para adultos mayores de 18 años. Funciona bien para quienes están entre los 25 y 30 años buscando tratamiento preventivo, así como para quienes tienen líneas establecidas buscando tratamiento correctivo. No se recomienda durante el embarazo o la lactancia." } },
      { "@type": "Question", "name": "¿Cuánto duran los resultados del Bótox?", "acceptedAnswer": { "@type": "Answer", "text": "Los resultados del Bótox suelen durar de 3 a 6 meses. Los efectos iniciales aparecen en 3-5 días, con resultados completos visibles a los 10-14 días." } },
      { "@type": "Question", "name": "¿Cuál es la diferencia entre Bótox y rellenos?", "acceptedAnswer": { "@type": "Answer", "text": "El Bótox relaja los músculos para reducir las arrugas dinámicas (líneas que aparecen con el movimiento). Los rellenos añaden volumen para restaurar la plenitud perdida y suavizar las líneas estáticas. Muchos pacientes se benefician de combinar ambos tratamientos." } },
      { "@type": "Question", "name": "¿Cómo elegir una clínica de Bótox en Londres?", "acceptedAnswer": { "@type": "Answer", "text": "Busque clínicas dirigidas por médicos con profesionales cualificados, precios transparentes, procesos de consulta adecuados y buenas evaluaciones de pacientes. Verifique el registro CQC." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "Cara superior", areas: ["Líneas de la frente", "Líneas del entrecejo (glabela)", "Patas de gallo", "Elevación de cejas"], description: "Las zonas de tratamiento con Bótox más comunes, abordando las líneas causadas por expresiones faciales." },
    { title: "Cara media e inferior", areas: ["Arrugas de conejo", "Lip Flip", "Sonrisa gingival", "Hoyuelos del mentón"], description: "Tratamientos refinados para la zona de la nariz, labios y mentón." },
    { title: "Mandíbula y cuello", areas: ["Masetero (adelgazamiento)", "Lifting Nefertiti", "Bandas platismales"], description: "Tratamientos de contorno y lifting para la parte inferior del rostro y el cuello." },
    { title: "Especializado", areas: ["Trap Tox (hombros)", "Hiperhidrosis", "Migrañas"], description: "Aplicaciones terapéuticas y corporales más allá del uso cosmético." }
  ];

  const bg = "bg-[#F5F5F3]";
  const cardBg = "bg-white";
  const cardBorder = "border-gray-200";
  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldBg = "bg-[#C9A050]";
  const goldText = "text-[#C9A050]";
  const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Bótox | Guía Completa Antiarrugas | Cosmedocs Harley Street Londres</title>
        <meta name="description" content="Guía completa del Bótox en Londres. Descubre qué es el Bótox, cómo funciona, zonas de tratamiento y resultados esperados. Atención médica dirigida por médicos en Harley Street desde 2007." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/botox/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/botox/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/botox/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/botox/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/botox/" />
        <meta property="og:title" content="Bótox | Guía Antiarrugas | Cosmedocs Harley Street" />
        <meta property="og:description" content="Guía completa del Bótox en Londres. Atención médica dirigida por médicos registrados en Harley Street." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.cosmedocs.com/default-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="bótox londres, bótox harley street, tratamiento antiarrugas londres, inyecciones bótox, bótox cosmético, mejor clínica bótox londres, bótox preventivo, bótox para hombres" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Tratamientos', path: '/treatments' }]} currentPage="Bótox" variant="light" />
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
                    El arte de lo
                    <span className={`block font-semibold ${goldText}`}>antiarrugas invisible</span>
                  </h1>
                  <p className={`text-sm ${goldText}/60 tracking-widest uppercase mb-4 font-light`}>Natural · Resultados duraderos</p>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    Tu guía completa del Bótox. Entender cómo funciona, qué esperar y conseguir resultados tan naturales que son indetectables.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    En CosmeDocs, los tratamientos antiarrugas se practican con mesura y precisión. Médicos registrados en el GMC ofrecen cuidados sutiles y dirigidos, diseñados para refrescar — nunca para abrumar. Desde 2007, nos enfocamos en resultados naturales que parecen sin esfuerzo, no obvios.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                    className={`group ${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20`}
                  >
                    Reservar consulta <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 rounded-full px-8 py-6 text-base font-medium border border-gray-300"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Preguntar al médico IA
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Registrado en GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +17 años</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> Valoración 4.9</span>
                </motion.div>
              </div>

              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[
                        { d: "M50 250 Q125 210, 200 250 T350 250 T500 250", opacity: 0.08 },
                        { d: "M30 210 Q130 165, 220 210 T370 210 T490 210", opacity: 0.1 },
                        { d: "M30 290 Q130 335, 220 290 T370 290 T490 290", opacity: 0.1 },
                        { d: "M40 170 Q140 120, 230 170 T380 170 T480 170", opacity: 0.12 },
                        { d: "M40 330 Q140 380, 230 330 T380 330 T480 330", opacity: 0.12 },
                        { d: "M60 130 Q160 80, 250 130 T400 130 T500 130", opacity: 0.07 },
                        { d: "M60 370 Q160 420, 250 370 T400 370 T500 370", opacity: 0.07 },
                      ].map((wave, i) => (
                        <path key={i} d={wave.d} stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity={wave.opacity} />
                      ))}
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowLightEs)" />
                      <defs>
                        <radialGradient id="centreGlowLightEs" cx="0.5" cy="0.5" r="0.5">
                          <stop offset="0%" stopColor={gold} stopOpacity="0.12" />
                          <stop offset="100%" stopColor={gold} stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${goldBg} flex items-center justify-center`}><Star className="h-5 w-5 text-white fill-white" /></div>
                      <div>
                        <div className={`text-sm font-semibold ${textH}`}>Clínica de confianza</div>
                        <div className={`text-xs ${textMuted}`}>Desde 2007</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[45%] -right-2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200 w-[260px]">
                    <div className="flex items-center gap-2 mb-3">
                      <Syringe className="w-4 h-4 text-[#C9A050]" />
                      <span className={`text-xs font-semibold ${goldText} uppercase tracking-wider`}>Aguja invisible</span>
                    </div>
                    <svg viewBox="0 0 220 80" className="w-full mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="45" cy="38" r="20" stroke={gold} strokeWidth="1.5" fill={gold} fillOpacity="0.1" />
                      <text x="45" y="42" fill={gold} fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">0,20mm</text>
                      <text x="45" y="10" fill="#555" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Aguja 33G</text>
                      <circle cx="130" cy="38" r="7" stroke="#aaa" strokeWidth="0.8" fill="#aaa" fillOpacity="0.1" />
                      <text x="130" y="41" fill="#888" fontSize="6" fontFamily="sans-serif" textAnchor="middle">0,07</text>
                      <text x="130" y="10" fill="#888" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Cabello humano</text>
                      <text x="88" y="42" fill="#ccc" fontSize="9" fontFamily="sans-serif" textAnchor="middle">vs</text>
                      <text x="110" y="75" fill="#bbb" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Diámetro en sección</text>
                    </svg>
                    <p className={`text-[10px] ${textMuted} leading-relaxed`}>La aguja más pequeña del sector — literalmente invisible. Solo ~3× más gruesa que un cabello humano.</p>
                  </div>

                  <div className="absolute bottom-16 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-black/5 border border-gray-200 max-w-[300px]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full ${goldBg} flex items-center justify-center text-white text-xs font-bold`}>M</div>
                      <div>
                        <div className={`text-sm font-medium ${textH}`}>María L.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"Mis amigas no paran de preguntarme qué tratamiento de piel uso porque me ven muy fresca, ¡pero nadie se da cuenta de que me he hecho algo!"</p>
                    <Link to="/testimonials" className={`inline-flex items-center gap-1 text-xs ${goldText} mt-2 hover:underline`}>Más experiencias reales</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lazy-section">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            <div className="space-y-14">

              {/* ¿Qué es el Bótox? */}
              <section id="what-is-botox">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    ¿Qué es el <span className={`${goldText} font-light`}>Bótox?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        El Bótox es el nombre comercial de la toxina botulínica tipo A, una proteína purificada derivada de la bacteria <em>Clostridium botulinum</em>. Inyectada en dosis pequeñas y controladas, relaja temporalmente los músculos objetivo al bloquear las señales nerviosas — suavizando las arrugas dinámicas mientras preserva la expresión natural.
                      </p>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        Desarrollado originalmente para afecciones médicas como espasmos musculares y estrabismo, el Bótox recibió la aprobación de la FDA para uso cosmético en 2002. Hoy es el tratamiento estético no quirúrgico más popular del mundo.
                      </p>
                      <ul className="space-y-2">
                        {["Más de 30 años de uso clínico con un excelente historial de seguridad", "Aprobado por la FDA, MHRA y organismos reguladores de todo el mundo", "El tratamiento dura de 10 a 20 minutos sin tiempo de recuperación", "Los efectos son temporales y completamente reversibles"].map((fact) => (
                          <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                        ))}
                      </ul>
                      <p>
                        El término «Bótox» se usa a menudo de forma genérica, pero existen varias marcas como Azzalure, Bocouture y Dysport. En CosmeDocs, usamos productos premium y autorizados para garantizar resultados consistentes y predecibles.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Cómo funciona */}
              <section id="how-it-works">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Cómo funciona <span className={`${goldText} font-light`}>el Bótox</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { step: "1", title: "Inyección", desc: "Se inyectan pequeñas cantidades con precisión en los músculos objetivo usando agujas ultrafinas." },
                            { step: "2", title: "Bloqueo nervioso", desc: "El Bótox bloquea la liberación de acetilcolina, impidiendo que las señales nerviosas lleguen a los músculos." },
                            { step: "3", title: "Relajación", desc: "Los músculos objetivo se relajan, alisando la piel y reduciendo la apariencia de las arrugas." },
                          ].map((s) => (
                            <div key={s.step} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 text-center shadow-sm`}>
                              <div className="bg-[#C9A050]/15 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                                <span className={`text-sm font-medium ${goldText}`}>{s.step}</span>
                              </div>
                              <p className={`text-sm font-medium ${textH}/70 mb-1`}>{s.title}</p>
                              <p className={`${textMuted} text-xs font-light`}>{s.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        Las arrugas dinámicas se forman por las contracciones musculares repetidas a lo largo de los años — piensa en las líneas que aparecen al fruncir el ceño o entrecerrar los ojos. Al relajar temporalmente estos músculos, el Bótox suaviza las líneas existentes y previene la formación de nuevas.
                      </p>
                      <p>
                        La clave para resultados naturales reside en la dosificación y colocación precisas. Un profesional experimentado relaja los músculos que causan las arrugas mientras preserva la expresión facial natural.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Zonas de tratamiento */}
              <section id="treatment-areas">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Zonas de <span className={`${goldText} font-light`}>tratamiento</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className={`${textBody} text-sm leading-relaxed font-light mb-6`}>
                    El Bótox puede tratar varias zonas del rostro y cuerpo. Cada zona requiere técnicas y dosis diferentes para resultados óptimos.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {treatmentAreaCards.map((card) => (
                      <div key={card.title} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/70 mb-2`}>{card.title}</p>
                        <p className={`${textMuted} text-xs font-light mb-3`}>{card.description}</p>
                        <ul className="space-y-1.5">
                          {card.areas.map((area) => (
                            <li key={area} className={`flex items-center gap-2 text-xs ${textBody} font-light`}>
                              <Check className="w-3 h-3 text-[#C9A050]/60" /> {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Adelgazamiento mandíbula", to: "/treatments/masseter-botox/" },
                      { label: "Lip Flip", to: "/treatments/lip-flip/" },
                      { label: "Bótox piel grasa", to: "/treatments/oily-skin-botox/" },
                    ].map((link) => (
                      <Link key={link.label} to={link.to} className={`px-4 py-2 ${cardBg} border ${cardBorder} rounded-full text-xs ${textBody} hover:text-[#C9A050] hover:border-[#C9A050]/30 transition-all font-light`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* ¿Quién es adecuado? */}
              <section id="who-is-suitable">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    ¿Quién es <span className={`${goldText} font-light`}>adecuado?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>Bótox preventivo</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>Para quienes están entre los 25 y 30 años con líneas mínimas. Previene la formación de arrugas deteniendo los movimientos musculares repetitivos antes de que creen pliegues permanentes.</p>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>Bótox correctivo</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>Para líneas y arrugas establecidas visibles en reposo. Suaviza los pliegues existentes y evita que se profundicen más. Puede combinarse con otros tratamientos.</p>
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-4`}>Consideraciones por edad</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          {[
                            { age: "20-30 años", text: "Tratamiento preventivo. Dosis bajas para frenar las primeras líneas dinámicas. Enfoque en preservar la expresión natural." },
                            { age: "40-50 años", text: "Tratamiento correctivo. Dosis moderadas para suavizar líneas establecidas. A menudo combinado con rellenos para volumen." },
                            { age: "60+ años", text: "Parte de un rejuvenecimiento integral. Funciona junto a otros tratamientos para refrescar la apariencia de forma natural." },
                          ].map((a) => (
                            <div key={a.age}>
                              <p className={`${goldText}/70 font-medium text-xs mb-1`}>{a.age}</p>
                              <p className={`${textMuted} text-xs font-light`}>{a.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Bótox para hombres */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Bótox para <span className={`${goldText} font-light`}>hombres</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Los tratamientos de Bótox para hombres han experimentado un crecimiento significativo. Los hombres suelen buscar tratamiento para mantener una apariencia profesional competitiva, luciendo fresco, no «retocado».
                      </p>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <div className="grid md:grid-cols-2 gap-5">
                        {[
                          { title: "Mayor dosis requerida", desc: "Los hombres suelen tener músculos faciales más grandes y fuertes que requieren un 25-40% más de producto para resultados equivalentes." },
                          { title: "Estética masculina", desc: "El tratamiento se adapta para preservar los rasgos masculinos — cejas fuertes, frente definida — mientras reduce las líneas." },
                          { title: "Objetivos diferentes", desc: "La mayoría de los hombres quieren lucir menos cansados o estresados, no más jóvenes. Un tratamiento sutil lo logra de forma natural." },
                          { title: "Resultados discretos", desc: "El objetivo es una mejora indetectable — los compañeros notan que te ves mejor, no que te has hecho un tratamiento." },
                        ].map((item) => (
                          <div key={item.title}>
                            <p className={`${goldText}/70 font-medium text-xs mb-1`}>{item.title}</p>
                            <p className={`${textMuted} text-xs font-light`}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Cronología de resultados */}
              <section id="results">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Cronología de <span className={`${goldText} font-light`}>resultados</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        {[
                          { title: "Días 1-3: Inicio", desc: "Los primeros efectos comienzan. Puedes notar cambios sutiles en el movimiento muscular." },
                          { title: "Días 7-14: Efecto máximo", desc: "Los resultados completos se hacen visibles. Las líneas se suavizan y los músculos tratados están relajados." },
                          { title: "Meses 3-6: Duración", desc: "Los resultados suelen durar de 3 a 6 meses. La duración varía según el metabolismo, la zona y el estilo de vida." },
                        ].map((item) => (
                          <div key={item.title} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                            <div>
                              <p className={`text-xs font-medium ${textH}/60 mb-0.5`}>{item.title}</p>
                              <p className={`${textMuted} text-xs font-light`}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>Factores que afectan la duración</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "Metabolismo", desc: "Un metabolismo más rápido puede reducir la duración" },
                          { label: "Zona de tratamiento", desc: "Las zonas de mayor movimiento pueden desvanecerse más rápido" },
                          { label: "Dosis", desc: "Dosis más altas pueden durar más" },
                          { label: "Regularidad", desc: "Los tratamientos regulares a menudo prolongan la duración" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" />
                            <span><strong className={`${textBody}`}>{f.label}:</strong> {f.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Bótox vs Rellenos */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    El Bótox en el <span className={`${goldText} font-light`}>rejuvenecimiento facial</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Entender la diferencia entre el Bótox y los <Link to="/treatments/dermal-fillers/" className={`${goldText}/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors`}>rellenos dérmicos</Link> te ayuda a tomar decisiones informadas sobre tu plan de tratamiento.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${goldText}/80 mb-3`}>Bótox</p>
                        <p className={`${goldText}/50 text-xs mb-3 font-light`}>Relaja músculos → Reduce arrugas dinámicas</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Líneas que aparecen con la expresión</li>
                          <li>• Frente, entrecejo, patas de gallo</li>
                          <li>• Tratamiento preventivo</li>
                          <li>• Resultados duran 3-6 meses</li>
                        </ul>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/60 mb-3`}>Rellenos dérmicos</p>
                        <p className={`${textMuted} text-xs mb-3 font-light`}>Añade volumen → Restaura plenitud perdida</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Líneas presentes en reposo</li>
                          <li>• Pómulos, labios, surcos nasogenianos</li>
                          <li>• Restauración de volumen</li>
                          <li>• Resultados duran 6-18 meses</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to="/treatments/dermal-fillers/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light`}>
                        Saber más sobre rellenos <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Seguridad */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Seguridad y <span className={`${goldText} font-light`}>regulación</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        El Bótox tiene un excelente perfil de seguridad cuando es administrado por profesionales médicos formados. Aprobado por la FDA, MHRA y organismos reguladores de todo el mundo, con más de 30 años de uso clínico.
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>Regulaciones UK</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• El Bótox es un medicamento con receta (POM)</li>
                            <li>• Debe ser prescrito por médico, enfermero o dentista</li>
                            <li>• Consulta presencial requerida</li>
                            <li>• Las clínicas deben estar registradas en CQC</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>Durante tu consulta</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Revisión completa del historial médico</li>
                            <li>• Discusión de preocupaciones y objetivos</li>
                            <li>• Explicación de opciones de tratamiento</li>
                            <li>• Establecimiento de expectativas realistas</li>
                            <li>• Obtención de consentimiento informado</li>
                          </ul>
                        </div>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-xl p-5 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-2`}>Contraindicaciones</p>
                        <p className={`${textMuted} text-xs font-light mb-2`}>El Bótox no es adecuado si:</p>
                        <ul className={`grid md:grid-cols-2 gap-1.5 ${textMuted} text-xs font-light`}>
                          <li>• Estás embarazada o en período de lactancia</li>
                          <li>• Tienes un trastorno neuromuscular</li>
                          <li>• Tienes infección en el sitio de inyección</li>
                          <li>• Eres alérgico/a a la toxina botulínica</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Preparación y cuidados */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Preparación y <span className={`${goldText} font-light`}>cuidados posteriores</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>Antes del tratamiento</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["Evitar anticoagulantes (aspirina, ibuprofeno) durante 7 días", "Limitar el alcohol 24-48 horas antes", "Acudir con la piel limpia y sin maquillaje", "Informar al profesional de todos los medicamentos"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>Después del tratamiento</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["Permanecer erguido durante 4 horas después del tratamiento", "Evitar tocar o frotar las zonas tratadas", "Sin ejercicio, sauna ni alcohol durante 24 horas", "Evitar tratamientos faciales y masajes durante 2 semanas"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Resultados reales */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Resultados <span className={`${goldText} font-light`}>reales de pacientes</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/frown-lines-before-after-preview.jpg" alt="Líneas del entrecejo antes y después del tratamiento con Bótox" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/forehead-lines-before-after-preview.jpg" alt="Líneas de la frente antes y después del tratamiento con Bótox" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>
                    Todas las imágenes muestran pacientes reales tratados por nuestros médicos en nuestra clínica de Harley Street. Los resultados varían según la anatomía facial y el plan de tratamiento.
                  </p>
                  <Link to="/before-after/botox/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light transition-colors`}>
                    Ver galería completa antes/después de Bótox → <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </section>

              {/* Por qué CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    ¿Por qué elegir <span className={`${goldText} font-light`}>CosmeDocs?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "Experiencia", desc: "1M+ inyecciones desde 2007" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "Formación", desc: "Formadores HSI" },
                      { icon: <Shield className="w-4 h-4" />, title: "Calidad", desc: "Productos aprobados FDA" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "Filosofía", desc: "Arte invisible" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "Médicos", desc: "Médicos cualificados" },
                    ].map((w) => (
                      <div key={w.title} className="text-center">
                        <div className="bg-[#C9A050]/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-[#C9A050]/60">{w.icon}</div>
                        <p className={`text-xs font-medium ${textH}/60 mb-0.5`}>{w.title}</p>
                        <p className={`${textMuted} text-[10px] font-light`}>{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* FAQ */}
              <section id="faqs">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Preguntas <span className={`${goldText} font-light`}>frecuentes</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "what-is", q: "¿Qué es exactamente el Bótox?", a: "El Bótox es el nombre comercial de la toxina botulínica tipo A, una proteína purificada que relaja temporalmente los músculos objetivo. Se usa de forma segura desde hace más de 30 años en aplicaciones médicas y cosméticas." },
                      { v: "pain", q: "¿Duele el Bótox?", a: "La mayoría de los pacientes describen las inyecciones de Bótox como un ligero pellizco. Usamos agujas ultrafinas y podemos aplicar crema anestésica si lo deseas. El procedimiento es rápido, generalmente se completa en 10-20 minutos." },
                      { v: "safe", q: "¿Es seguro el Bótox?", a: "Cuando lo administran profesionales médicos cualificados, el Bótox tiene un excelente historial de seguridad. Aprobado por organismos reguladores de todo el mundo y usado clínicamente durante más de tres décadas." },
                      { v: "results", q: "¿Cuándo veré los resultados?", a: "Los primeros efectos suelen aparecer en 3-5 días, con resultados completos visibles a los 10-14 días. Los resultados generalmente duran de 3 a 6 meses, según factores individuales." },
                      { v: "natural", q: "¿Me veré congelado/a o artificial?", a: "No con profesionales cualificados. El objetivo es relajar los músculos lo suficiente para reducir las arrugas manteniendo la expresión facial natural. El look «congelado» resulta del sobretratamiento, que evitamos." },
                      { v: "suitable", q: "¿El Bótox es para mí?", a: "El Bótox es adecuado para adultos mayores de 18 años que buscan reducir o prevenir las líneas faciales. Funciona bien tanto para prevención en los 20-30 como para corrección de líneas establecidas." },
                      { v: "difference", q: "¿Cuál es la diferencia entre Bótox y rellenos?", a: "El Bótox relaja los músculos para reducir las arrugas dinámicas (líneas con movimiento). Los rellenos añaden volumen para restaurar plenitud y suavizar líneas estáticas. Tratan diferentes preocupaciones y a menudo se usan juntos." },
                    ].map((faq) => (
                      <AccordionItem key={faq.v} value={faq.v} className="border-gray-200">
                        <AccordionTrigger className="text-gray-700 hover:text-[#C9A050] text-left text-sm font-light">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-xs font-light">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <BotoxSidebarLight />
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-3xl font-light mb-4 ${textH}`}>
                Tu consulta <span className={goldText}>empieza aquí</span>
              </h2>
              <p className={`${textBody} mb-8`}>Atención cuidadosa de los médicos de Harley Street</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className={`${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6`}
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Reservar consulta
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  <Phone className="w-4 h-4 mr-2" /> 0333 055 1503
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500/50 text-green-600 hover:bg-green-500 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.open('https://wa.me/447535076003', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Pricing */}
        <section className="lg:hidden py-12 px-4 bg-white">
          <BotoxSidebarLight />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Bótox Londres - Guía completa del tratamiento antiarrugas</h2>
          <p>
            El Bótox en Londres es el tratamiento cosmético no quirúrgico más popular en el Reino Unido. Esta guía completa cubre todo lo que necesitas saber sobre las inyecciones antiarrugas. Cosmedocs en Harley Street ofrece tratamientos de Bótox dirigidos por médicos desde 2007, con más de un millón de procedimientos realizados. Nuestra estética es arte invisible. Audaz, natural, siempre a tu manera.
          </p>
        </div>
      </div>
    </>
  );
}
