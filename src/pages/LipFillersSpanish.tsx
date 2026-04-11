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

const LipFillersSpanish = () => {
  const faqs = [
    { question: "¿Cuánto duran los rellenos de labios?", answer: "Los resultados suelen durar de 6 a 12 meses según el producto utilizado, su metabolismo y el volumen inyectado. Los tratamientos de 0,5 ml duran 6–9 meses, mientras que los de 1 ml pueden durar hasta 12 meses." },
    { question: "¿Cuánto cuestan los rellenos de labios en Londres?", answer: "En CosmeDocs, los rellenos de labios comienzan desde £300 por 0,5 ml y £350 por 1 ml. Incluye consulta, ácido hialurónico premium y seguimiento post-tratamiento." },
    { question: "¿Son dolorosos los rellenos de labios?", answer: "La molestia es mínima. Aplicamos anestésico tópico antes del tratamiento y utilizamos fillers con lidocaína. La mayoría de los pacientes describen la sensación como una presión leve." },
    { question: "¿Cuál es la diferencia entre 0,5 ml y 1 ml?", answer: "0,5 ml ofrece una mejora sutil y natural — ideal para labios finos y primeros tratamientos. 1 ml crea un volumen más visible y una forma definida. Su médico evaluará la anatomía de sus labios durante la consulta." },
    { question: "¿Pueden verse naturales los rellenos de labios?", answer: "Absolutamente. Nuestra filosofía de arte invisible garantiza resultados de aspecto natural. Mejoramos la forma y proporciones existentes de sus labios en lugar de crear una apariencia artificial." },
    { question: "¿Se pueden disolver los rellenos de labios?", answer: "Sí. Los fillers de ácido hialurónico pueden disolverse de forma segura con hialuronidasa si no está satisfecha con los resultados." },
  ];

  return (
    <>
      <Helmet>
        <title>Relleno de Labios Londres | Aumento Labial Natural | Harley Street | CosmeDocs</title>
        <meta name="description" content="Relleno de labios realizado por médicos desde £300. Aumento labial natural con ácido hialurónico premium en nuestra clínica de Harley Street. Opciones de 0,5 ml y 1 ml." />
        <link rel="canonical" href="https://www.cosmedocs.com/es/tratamientos/relleno-labios/" data-rh="true" />
        <meta property="og:title" content="Relleno de Labios Londres | Aumento Labial Natural | CosmeDocs" />
        <meta property="og:description" content="Relleno de labios por médicos desde £300. Resultados naturales en Harley Street." />
        <meta property="og:url" content="https://www.cosmedocs.com/es/tratamientos/relleno-labios/" />
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
                "description": "Clínica de medicina estética dirigida por médicos en Harley Street, Londres. Fundada en 2007.",
                "url": "https://www.cosmedocs.com/", "telephone": "+44 20 3733 3227", "priceRange": "££",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB", "addressRegion": "London" },
                "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" }
              },
              {
                "@type": "MedicalProcedure", "name": "Relleno de Labios", "alternateName": "Lip Fillers",
                "description": "Aumento labial realizado por médicos utilizando ácido hialurónico premium para volumen, forma y definición naturales.",
                "url": "https://www.cosmedocs.com/es/tratamientos/relleno-labios/",
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
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white pt-0 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Tratamientos', path: '/es/tratamientos/' }]} currentPage="Relleno de Labios" />
            <div className="pt-12 pb-4 text-center">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-stone-800 leading-[1.1] tracking-tight mb-6">
                  Relleno de Labios{" "}<span className="text-[#C9A050] font-light">Londres</span>
                </h1>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-extralight max-w-2xl mx-auto">
                  Aumento labial realizado por médicos con ácido hialurónico premium — volumen natural, forma refinada y definición sutil adaptados a sus rasgos.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Médicos cualificados</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Desde £300</span>
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
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">¿Qué son los <span className="text-[#C9A050] font-light">rellenos de labios?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">Los rellenos de labios son tratamientos inyectables que utilizan ácido hialurónico (AH) para añadir volumen, forma y definición a los labios. Como sustancia natural del cuerpo, el AH se integra perfectamente con los tejidos labiales.</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>A diferencia del aumento labial quirúrgico, los fillers inyectables son mínimamente invasivos y no requieren anestesia general. El tratamiento dura 30–45 minutos y los resultados son visibles inmediatamente.</p>
                      <p>En CosmeDocs, utilizamos exclusivamente fillers de ácido hialurónico aprobados por la FDA de los mejores fabricantes: Juvederm, Restylane y Teoxane.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Cómo funciona el <span className="text-[#C9A050] font-light">tratamiento</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">Su médico comienza con una evaluación facial detallada, discutiendo sus objetivos y recomendando el volumen y producto óptimos. Se aplica anestésico tópico antes de inyecciones precisas en puntos estratégicos de los labios.</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>Utilizando agujas finas o micro-cánula, el ácido hialurónico se deposita cuidadosamente en múltiples zonas de los labios — el borde bermellón, el arco de Cupido, el cuerpo labial y las crestas del filtrum.</p>
                      <p>El filler contiene lidocaína para mayor comodidad. Su médico esculpe la forma labial en tiempo real, permitiéndole dar su opinión durante todo el proceso.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Nuestro cóctel <span className="text-[#C9A050] font-light">secreto</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">No todos los fillers son iguales — y tampoco todos los labios. En 20 años de inyecciones, hemos desarrollado un enfoque de cóctel exclusivo que la mayoría de las clínicas simplemente no ofrecen.</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>Cada marca de filler ofrece más de una docena de productos, cada uno con diferente consistencia, elasticidad y peso molecular. Elegir la <em>combinación</em> correcta es fundamental.</p>
                      <div className="grid grid-cols-2 gap-3 my-4">
                        {[
                          { label: "AH Suizo", detail: "Soporte estructural y longevidad" },
                          { label: "AH Francés", detail: "Hidratación y suavidad natural" },
                          { label: "Capa de volumen", detail: "Cuerpo y proyección" },
                          { label: "Capa de hidratación", detail: "Flexibilidad y tacto" },
                        ].map((item) => (
                          <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
                            <p className="text-[#C9A050] text-xs font-medium mb-1">{item.label}</p>
                            <p className="text-stone-500 text-[11px]">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                        <p className="text-stone-500 text-xs leading-relaxed font-light">
                          <strong className="text-[#C9A050]">Por qué importa:</strong> Un solo producto de filler le da una textura. Nuestro enfoque de cóctel aplica múltiples capas — volumen donde necesita proyección, hidratación donde necesita suavidad. Eso es el arte invisible.
                        </p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">0,5 ml vs 1 ml <span className="text-[#C9A050] font-light">relleno de labios</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">0,5 ml — Mejora sutil</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• Ideal para labios finos y primeras veces</li>
                        <li>• Resultados de 6 a 9 meses</li>
                        <li>• £300</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-stone-700 mb-3">1 ml — Mejora visible</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• Para labios medianos a grandes</li>
                        <li>• Resultados de 9 a 12 meses</li>
                        <li>• £350</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Zonas de mejora <span className="text-[#C9A050] font-light">labial</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Borde bermellón", "Arco de Cupido", "Cuerpo labial", "Comisuras orales", "Crestas del filtrum", "Corrección de simetría"].map((area) => (
                      <div key={area} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
                        <p className="text-stone-600 text-xs font-light">{area}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Por qué <span className="text-[#C9A050] font-light">CosmeDocs</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "Dirigido por médicos — todos los tratamientos por médicos registrados en el GMC",
                      "Formadores del Harley Street Institute — fundado en 2007",
                      "Más de un millón de tratamientos realizados",
                      "Fillers premium aprobados por la FDA exclusivamente",
                      "Planes de tratamiento personalizados para cada paciente",
                      "Nuestra estética es arte invisible"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-stone-600 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">Preguntas <span className="text-[#C9A050] font-light">frecuentes</span></h2>
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

        <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-stone-800">¿Lista para unos labios naturales y <span className="text-[#C9A050]">hermosos?</span></h2>
              <p className="text-stone-500 mb-8 font-light">Una consulta con nuestros médicos evaluará la anatomía de sus labios y creará un plan de mejora personalizado — sutil o audaz, siempre natural.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    Reservar consulta <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/es/">
                  <Button variant="ghost" className="border border-stone-300 text-stone-600 hover:text-stone-800 hover:bg-stone-100 px-8 py-5 rounded-full text-base w-full sm:w-auto">Hablar con un médico</Button>
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

export default LipFillersSpanish;
