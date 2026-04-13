import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, MapPin, Phone } from 'lucide-react';

const canonical = 'https://www.cosmedocs.com/de/';

const treatments = [
  { label: 'Botox', icon: '💉', link: '/de/behandlungen/botox/' },
  { label: 'Dermal Filler', icon: '✨', link: '/de/behandlungen/hyaluronsaeure/' },
  { label: 'Lippenunterspritzung', icon: '👄', link: '/de/behandlungen/lippenunterspritzung/' },
  { label: 'Kinnlinie Filler', icon: '🔷', link: '/de/behandlungen/kinnlinie-filler/' },
  { label: 'Kinn Filler', icon: '◆', link: '/de/behandlungen/kinn-filler/' },
  { label: 'Augenringe Filler', icon: '👁', link: '/de/behandlungen/augenringe-filler/' },
  { label: 'Hautverjüngung', icon: '🌟', link: '/de/behandlungen/hautverjuengung/' },
];

const trustReasons = [
  { icon: Shield, title: 'Über 17 Jahre Erfahrung', desc: 'Seit 2007 an der Harley Street, mit über 1 Million durchgeführten Injektionen.' },
  { icon: Award, title: 'GMC-registrierte Ärzte', desc: 'Alle Behandlungen werden von erfahrenen, registrierten Ärzten durchgeführt.' },
  { icon: Users, title: 'Natürliche Ergebnisse', desc: 'Unsere Ästhetik ist unsichtbare Kunst — mutig, natürlich, immer Ihr Weg.' },
  { icon: Star, title: '5-Sterne Bewertung', desc: 'Tausende zufriedene Patienten teilen ihre echten Erfahrungen.' },
];

const hreflangLinks = [
  { hreflang: 'en-gb', href: 'https://www.cosmedocs.com/' },
  { hreflang: 'x-default', href: 'https://www.cosmedocs.com/' },
  { hreflang: 'ar', href: 'https://www.cosmedocs.com/ar/' },
  { hreflang: 'fr', href: 'https://www.cosmedocs.com/fr/' },
  { hreflang: 'es', href: 'https://www.cosmedocs.com/es/' },
  { hreflang: 'zh', href: 'https://www.cosmedocs.com/zh/' },
  { hreflang: 'ja', href: 'https://www.cosmedocs.com/ja/' },
  { hreflang: 'de', href: 'https://www.cosmedocs.com/de/' },
];

export default function HomepageGerman() {
  return (
    <>
      <Helmet>
        <title>Cosmedocs London | Ästhetische Medizin | Harley Street</title>
        <meta name="description" content="Ästhetische Klinik an der Harley Street von Dr. Ahmed Haq. Botox, Filler & Hautbehandlungen. Unsichtbare Kunst — Mutig — Natürlich — Immer Ihr Weg." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Cosmedocs",
            url: canonical,
            description: "Ästhetische Klinik Harley Street London für deutschsprachige Patienten",
            address: { "@type": "PostalAddress", streetAddress: "10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            telephone: "+44 20 3733 3227",
            availableLanguage: ["en", "de", "ar", "fr", "es", "zh", "ja"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative py-20 md:py-32 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/10">
              <span className="text-sm text-[#C9A050]">Cosmedocs · Harley Street · London</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Harley Street London<br />
              <span className="text-[#C9A050]">Ästhetische Medizin</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              Unsere Ästhetik ist unsichtbare Kunst. Mutig, natürlich, immer Ihr Weg.
            </p>
            <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
              Ästhetische Medizin bei Cosmedocs ist minimal. Ruhig, nicht laut. Unsichtbar, nicht übertrieben.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/de/behandlungen/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Behandlungen entdecken <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/de/kontakt/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Beratung buchen
              </Link>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            Unsere <span className="text-[#C9A050]">Behandlungen</span>
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
            Warum <span className="text-[#C9A050]">Cosmedocs</span> wählen
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
              <span className="text-white/60 text-sm">10 Harley Street, London W1G 9PF</span>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">Beratungstermin vereinbaren</h2>
            <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">Beratungen finden auf Englisch statt mit klaren, verständlichen Erklärungen. Viele unserer Patienten verbinden ihren London-Besuch mit einer Behandlung.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/de/kontakt/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Kontakt <Phone className="w-4 h-4" />
              </Link>
              <Link to="/de/preise/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>Cosmedocs ästhetische Klinik Harley Street London für deutschsprachige Patienten seit 2007. Botox, Dermal Filler, Masseter Botox, Wadenverschlankung, HA Makeover. Über 1 Million Injektionen. Arztgeleitete ästhetische Medizin mit natürlichen Ergebnissen.</p>
        </div>
      </div>
    </>
  );
}
