import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';

const hreflangLinks = generateHreflangLinks('treatments');
const canonical = getCanonicalUrl('es', 'treatments');

const treatmentCategories = [
  {
    title: "Botox y Antiarrugas",
    subtitle: "Modulación muscular y prevención",
    description: "Inyecciones antiarrugas de precisión para líneas dinámicas, contorno facial y condiciones médicas. Realizadas por médicos expertos desde 2007.",
    link: "/es/tratamientos/botox/",
    items: ["Frente, entrecejo y patas de gallo", "Lip flip y sonrisa gingival", "Masetero y afinamiento mandibular", "Lifting Nefertiti", "Botox médico (migrañas, sudoración)"],
  },
  {
    title: "Ácido Hialurónico",
    subtitle: "Volumen, estructura y contorno",
    description: "Rellenos de ácido hialurónico para restauración natural del volumen, contorno facial y rejuvenecimiento. Planes de tratamiento personalizados.",
    link: "/es/tratamientos/acido-hialuronico/",
    items: ["Relleno de labios", "Pómulos, mentón y mandíbula", "Rinoplastia sin cirugía", "Ojeras y bolsas", "HA Makeover (rostro completo)"],
  },
  {
    title: "Rejuvenecimiento de la Piel",
    subtitle: "Renovación, luminosidad y reparación",
    description: "Tratamientos cutáneos de grado médico para restaurar la hidratación, estimular el colágeno y refinar la textura.",
    link: "/es/tratamientos/rejuvenecimiento-piel/",
    items: ["Profhilo", "Polinucleótidos", "HydraFacial", "Microneedling y PRP", "Peelings químicos"],
  },
  {
    title: "Tratamientos Láser",
    subtitle: "Terapia de luz de precisión",
    description: "Tratamientos láser avanzados para rejuvenecimiento, corrección pigmentaria, depilación y reducción de cicatrices.",
    link: "/treatments/laser/",
    items: ["Láser CO₂ fraccionado", "Pico Láser", "Depilación láser", "Reducción de cicatrices"],
  },
  {
    title: "Hilos PDO",
    subtitle: "Lifting no quirúrgico",
    description: "Hilos PDO absorbibles para lifting tisular, tensado cutáneo y estimulación del colágeno.",
    link: "/treatments/pdo-threads/",
    items: ["Lifting facial con hilos", "Hilos nasales no quirúrgicos", "Definición mandibular"],
  },
  {
    title: "Botox Médico",
    subtitle: "Aplicaciones terapéuticas",
    description: "Tratamientos con toxina botulínica basados en evidencia para migrañas crónicas, hiperhidrosis y bruxismo.",
    link: "/medical/",
    items: ["Alivio de migrañas", "Sudoración excesiva", "Bruxismo", "Terapia de puntos gatillo"],
  },
  {
    title: "Cirugía Plástica",
    subtitle: "Procedimientos quirúrgicos expertos",
    description: "Cirugía estética integral realizada por cirujanos plásticos cualificados con los más altos estándares de atención.",
    link: "/plastic-surgeon/",
    items: ["Rinoplastia", "Blefaroplastia", "Lifting facial", "Liposucción"],
  },
  {
    title: "Dermatología",
    subtitle: "Salud cutánea médica y estética",
    description: "Servicios de salud cutánea dirigidos por dermatólogos consultores para condiciones médicas y dermatología estética avanzada.",
    link: "/dermatology/",
    items: ["Tratamiento acné y rosácea", "Eliminación de lunares", "Psoriasis y eczema", "Corrección pigmentaria"],
  },
];

const TreatmentsHubSpanish = () => {
  return (
    <>
      <Helmet>
        <title>Tratamientos Estéticos Londres | Cosmedocs Harley Street</title>
        <meta name="description" content="Descubra nuestra gama completa de tratamientos estéticos. Botox, ácido hialurónico, rejuvenecimiento cutáneo, láser y cirugía plástica en Harley Street, Londres." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "@id": "https://www.cosmedocs.com/#organization", name: "Cosmedocs" },
              { "@type": "CollectionPage", "@id": "https://www.cosmedocs.com/es/tratamientos/", name: "Tratamientos Estéticos", inLanguage: "es", description: "Gama completa de tratamientos estéticos en Harley Street, Londres.", isPartOf: { "@id": "https://www.cosmedocs.com/#website" } },
              { "@type": "BreadcrumbList", itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.cosmedocs.com/es/" },
                { "@type": "ListItem", position: 2, name: "Tratamientos", item: "https://www.cosmedocs.com/es/tratamientos/" },
              ]},
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A050]/[0.04] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A050]/[0.03] blur-[100px] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Migas de pan">
              <Link to="/es/" className="hover:text-[#C9A050] transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-white/60">Tratamientos</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">El Arte Estético Invisible</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-6">Tratamientos</h1>
              <p className="text-base sm:text-lg text-white/60 font-extralight leading-relaxed max-w-2xl">
                Desde inyectables de precisión hasta ciencia cutánea avanzada — cada tratamiento en Cosmedocs está diseñado para realzar, nunca exagerar.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
                {["Desde 2007", "Harley Street", "Dirigido por médicos"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" /> {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-10">
                <Link to="/es/precios/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  Guía de precios <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/es/contacto/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  Reservar consulta
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatmentCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link to={cat.link} className="group block bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#C9A050] transition-colors">{cat.title}</h2>
                      <p className="text-xs text-[#C9A050]/70 uppercase tracking-wider mt-1">{cat.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#C9A050] transition-colors mt-1 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-white/50 font-extralight leading-relaxed mb-5">{cat.description}</p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-xs text-[#C9A050] uppercase tracking-[0.2em] mb-3">Precios Transparentes</p>
            <p className="text-2xl sm:text-3xl font-extralight text-white mb-4">Guía Completa de Precios</p>
            <p className="text-sm text-white/50 font-extralight max-w-xl mx-auto mb-6">Consulte nuestra lista de precios completa y transparente. Sin costes ocultos — medicina estética honesta y experta.</p>
            <Link to="/es/precios/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
              Ver todos los precios <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>
            Cosmedocs ofrece una gama completa de tratamientos estéticos en nuestra clínica de Harley Street en Londres. Nuestro portafolio incluye inyecciones antiarrugas con toxina botulínica, rellenos dérmicos de ácido hialurónico para labios, pómulos, mandíbula, mentón y ojeras. Nuestros tratamientos de rejuvenecimiento cutáneo incluyen Profhilo, polinucleótidos, HydraFacial, microneedling con PRP y peelings químicos médicos.
          </p>
        </div>
      </div>
    </>
  );
};

export default TreatmentsHubSpanish;
