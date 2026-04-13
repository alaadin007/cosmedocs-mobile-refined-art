import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, MapPin, Phone } from 'lucide-react';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';

const hreflangLinks = generateHreflangLinks('homepage');
const canonical = getCanonicalUrl('es', 'homepage');

const treatments = [
  { label: 'Bótox', icon: '💉', link: '/es/tratamientos/botox/' },
  { label: 'Rellenos dérmicos', icon: '✨', link: '/es/tratamientos/rellenos-dermicos/' },
  { label: 'Relleno de labios', icon: '👄', link: '/es/tratamientos/relleno-labios/' },
  { label: 'Relleno mandíbula', icon: '🔷', link: '/es/tratamientos/relleno-mandibula/' },
  { label: 'Relleno de mentón', icon: '◆', link: '/es/tratamientos/relleno-menton/' },
  { label: 'Ojeras hundidas', icon: '👁', link: '/es/tratamientos/ojeras-hundidas/' },
  { label: 'Rejuvenecimiento', icon: '🌟', link: '/es/tratamientos/rejuvenecimiento-piel/' },
];

const trustReasons = [
  { icon: Shield, title: 'Más de 17 años de experiencia', desc: 'En Harley Street desde 2007, con más de un millón de inyecciones realizadas.' },
  { icon: Award, title: 'Médicos registrados en el GMC', desc: 'Todos los tratamientos los realizan médicos estéticos registrados y experimentados.' },
  { icon: Users, title: 'Resultados naturales', desc: 'Nuestra estética es arte invisible — audaz, natural, siempre a tu manera.' },
  { icon: Star, title: 'Valoración de 5 estrellas', desc: 'Miles de pacientes satisfechos comparten sus experiencias reales.' },
];

export default function HomepageSpanish() {
  return (
    <>
      <Helmet>
        <title>Cosmedocs Londres | Clínica de Medicina Estética en Harley Street</title>
        <meta name="description" content="Clínica estética en Harley Street dirigida por el Dr. Ahmed Haq. Bótox, rellenos dérmicos y tratamientos de piel. Arte invisible — audaz — natural — siempre a tu manera." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://www.cosmedocs.com/#organization",
            name: "Cosmedocs",
            url: "https://www.cosmedocs.com/es/",
            description: "Clínica de medicina estética en Harley Street, dirigida por el Dr. Ahmed Haq.",
            address: { "@type": "PostalAddress", streetAddress: "8-10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            telephone: "+442071234567",
            medicalSpecialty: "Dermatology",
            availableLanguage: ["en", "es", "ar", "fr", "zh"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative py-20 md:py-32 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/10">
              <span className="text-sm text-[#C9A050]">Cosmedocs · Harley Street · Londres</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Harley Street Londres<br />
              <span className="text-[#C9A050]">Medicina Estética</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              Nuestra estética es arte invisible. Audaz, natural, siempre a tu manera.
            </p>
            <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
              La medicina estética de Cosmedocs es discreta, sutil, invisible. Es una transformación que habla — sin decir una palabra.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/es/tratamientos/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Descubrir tratamientos <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/es/contacto/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Pedir cita
              </Link>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            Nuestros <span className="text-[#C9A050]">tratamientos</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {treatments.map(t => (
              <Link key={t.link} to={t.link} className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#C9A050]/30 rounded-2xl p-5 text-center transition-all duration-300">
                <span className="text-2xl mb-2 block">{t.icon}</span>
                <span className="text-sm text-white/80 group-hover:text-[#C9A050] transition-colors">{t.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            Por qué elegir<span className="text-[#C9A050]"> Cosmedocs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustReasons.map(r => (
              <div key={r.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex gap-4">
                <r.icon className="w-8 h-8 text-[#C9A050] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-1">{r.title}</h3>
                  <p className="text-sm text-white/50">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#C9A050]" />
              <span className="text-white/60 text-sm">8-10 Harley Street, London W1G 9PF</span>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">¿Listo para reservar?</h2>
            <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">Nuestro equipo habla español. Reserve una consulta gratuita para descubrir el tratamiento ideal para usted.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/es/contacto/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Contáctenos <Phone className="w-4 h-4" />
              </Link>
              <Link to="/es/precios/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Ver precios
              </Link>
            </div>
          </div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>
            Cosmedocs es una clínica estética líder en Harley Street, Londres, fundada por el Dr. Ahmed Haq en 2007. Ofrecemos una gama completa de tratamientos estéticos: inyecciones de bótox, rellenos dérmicos con ácido hialurónico, rejuvenecimiento cutáneo, tratamientos láser y cirugía estética. Todos los tratamientos los realizan médicos registrados en el GMC. Atendemos a pacientes hispanohablantes con servicio en español.
          </p>
        </div>
      </div>
    </>
  );
}
