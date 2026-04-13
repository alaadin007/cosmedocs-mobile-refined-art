import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, MapPin, Phone } from 'lucide-react';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';

const hreflangLinks = generateHreflangLinks('homepage');
const canonical = getCanonicalUrl('fr', 'homepage');

const treatments = [
  { label: 'Botox', icon: '💉', link: '/fr/traitements/botox/' },
  { label: 'Acide hyaluronique', icon: '✨', link: '/fr/traitements/acide-hyaluronique/' },
  { label: 'Injection lèvres', icon: '👄', link: '/fr/traitements/injection-levres/' },
  { label: 'Filler mâchoire', icon: '🔷', link: '/fr/traitements/filler-machoire/' },
  { label: 'Filler menton', icon: '◆', link: '/fr/traitements/filler-menton/' },
  { label: 'Cernes creuses', icon: '👁', link: '/fr/traitements/cernes-creuses/' },
  { label: 'Rajeunissement', icon: '🌟', link: '/fr/traitements/rajeunissement-peau/' },
];

const trustReasons = [
  { icon: Shield, title: 'Plus de 17 ans d\'expérience', desc: 'Établis à Harley Street depuis 2007, avec plus d\'un million d\'injections réalisées.' },
  { icon: Award, title: 'Médecins inscrits au GMC', desc: 'Tous les traitements sont réalisés par des médecins esthétiques inscrits et expérimentés.' },
  { icon: Users, title: 'Résultats naturels', desc: 'Notre esthétique est un art invisible — audacieux, naturel, toujours à votre image.' },
  { icon: Star, title: 'Noté 5 étoiles', desc: 'Des milliers de patients satisfaits partagent leurs expériences authentiques.' },
];

export default function HomepageFrench() {
  return (
    <>
      <Helmet>
        <title>Cosmedocs Londres | Clinique de Médecine Esthétique Harley Street</title>
        <meta name="description" content="Clinique esthétique à Harley Street dirigée par le Dr Ahmed Haq. Botox, fillers et soins de la peau. Un art invisible — audacieux — naturel — toujours à votre image." data-rh="true" />
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
            url: "https://www.cosmedocs.com/fr/",
            description: "Clinique de médecine esthétique à Harley Street, dirigée par le Dr Ahmed Haq.",
            address: { "@type": "PostalAddress", streetAddress: "8-10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            telephone: "+442071234567",
            medicalSpecialty: "Dermatology",
            availableLanguage: ["en", "fr", "ar", "es", "zh"],
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
              <span className="text-[#C9A050]">Médecine Esthétique</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              Notre esthétique est un art invisible. Audacieux, naturel, toujours à votre image.
            </p>
            <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
              La médecine esthétique de Cosmedocs est discrète, subtile, invisible. C'est une transformation qui parle — sans dire un mot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/fr/traitements/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Découvrir les traitements <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/fr/contact/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            Nos <span className="text-[#C9A050]">traitements</span>
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
            Pourquoi choisir<span className="text-[#C9A050]"> Cosmedocs</span>
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
            <h2 className="text-2xl font-light text-white mb-4">Prêt à prendre rendez-vous ?</h2>
            <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">Notre équipe parle français. Réservez une consultation gratuite pour découvrir le traitement adapté à vos besoins.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/fr/contact/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Nous contacter <Phone className="w-4 h-4" />
              </Link>
              <Link to="/fr/tarifs/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>
            Cosmedocs est une clinique esthétique de premier plan à Harley Street, Londres, fondée par le Dr Ahmed Haq en 2007. Nous proposons une gamme complète de traitements esthétiques : injections de botox, comblement à l'acide hyaluronique, rajeunissement cutané, traitements laser et chirurgie esthétique. Tous les traitements sont réalisés par des médecins inscrits au GMC. Nous accueillons les patients francophones avec un service en français.
          </p>
        </div>
      </div>
    </>
  );
}
