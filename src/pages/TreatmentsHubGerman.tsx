import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const canonical = 'https://www.cosmedocs.com/de/behandlungen/';

const categories = [
  { title: 'Botox & Anti-Aging', subtitle: 'Muskelmodulation & Prävention', desc: 'Präzise Anti-Falten-Injektionen für dynamische Linien, Gesichtskonturierung und medizinische Indikationen. Von Experten seit 2007.', link: '/de/behandlungen/botox/', items: ['Stirn-, Zornes- & Krähenfußfalten', 'Lip Flip & Gummy Smile', 'Masseter Botox (Kieferschlankung)', 'Nefertiti Lift', 'Medizinisches Botox (Migräne, Schwitzen)'] },
  { title: 'Dermal Filler', subtitle: 'Volumen, Struktur & Kontur', desc: 'Hyaluronsäure-Filler für natürliche Volumenwiederherstellung und Gesichtskonturierung.', link: '/de/behandlungen/hyaluronsaeure/', items: ['Lippenunterspritzung', 'Wangen-, Kinn- & Kinnlinienfiller', 'Nasen-Filler (nicht-chirurgisch)', 'Augenringfiller', 'HA Makeover'] },
  { title: 'Hautverjüngung', subtitle: 'Regeneration, Glow & Reparatur', desc: 'Fortschrittliche medizinische Behandlungen für Kollagenstimulation und Hautqualität.', link: '/de/behandlungen/hautverjuengung/', items: ['Profhilo', 'Polynukleotide', 'HydraFacial', 'Microneedling & PRP', 'Chemisches Peeling'] },
  { title: 'Laserbehandlungen', subtitle: 'Präzise Lichttherapie', desc: 'Fortschrittliche Laser für Hautresurfacing, Pigmentkorrektur und Haarentfernung.', link: '/treatments/laser/', items: ['CO₂-Laser', 'Pico-Laser', 'Laser-Haarentfernung', 'Narbenreduktion'] },
  { title: 'PDO-Fäden', subtitle: 'Nicht-chirurgisches Lifting', desc: 'Resorbierbare PDO-Fäden für Gewebelifting, Hautstraffung und Kollagenstimulation.', link: '/treatments/pdo-threads/', items: ['Mini-Facelift', 'Kinnliniendefinition', 'Halsstraffung'] },
];

export default function TreatmentsHubGerman() {
  return (
    <>
      <Helmet>
        <title>Ästhetische Behandlungen London | Cosmedocs Harley Street</title>
        <meta name="description" content="Entdecken Sie unsere arztgeleiteten ästhetischen Behandlungen. Botox, Hyaluronsäure, Hautverjüngung, Laser & plastische Chirurgie an der Harley Street." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <section className="py-16 md:py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Ästhetische <span className="text-[#C9A050]">Behandlungen</span></h1>
            <p className="text-lg text-white/60 mb-6">Arztgeleitete ästhetische Medizin — seit 2007 an der Harley Street</p>
            <p className="text-sm text-white/40 max-w-2xl mx-auto leading-relaxed">
              Cosmedocs bietet ein umfassendes Spektrum ästhetischer Behandlungen: Botox, Hyaluronsäure-Filler, Hautverjüngung, Laserbehandlungen und PDO-Fäden. Alle Eingriffe werden von GMC-registrierten Ärzten durchgeführt und basieren auf den neuesten wissenschaftlichen Erkenntnissen.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 pb-8 space-y-8">
          {categories.map(cat => (
            <div key={cat.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">{cat.title}</h2>
                  <p className="text-xs text-[#C9A050] uppercase tracking-wider">{cat.subtitle}</p>
                </div>
                <Link to={cat.link} className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:underline font-medium whitespace-nowrap">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-sm text-white/50 mb-4">{cat.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cat.items.map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-[#C9A050]">•</span> {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Educational Content */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-light text-center mb-8">Behandlungs<span className="text-[#C9A050]">ratgeber</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              Die Welt der ästhetischen Medizin bietet zahlreiche Möglichkeiten, und die Auswahl der richtigen Behandlung kann herausfordernd sein. Bei Cosmedocs analysieren wir in einer ausführlichen Beratung Ihre individuelle Gesichtsanatomie, Ihren Hautzustand und Ihre ästhetischen Ziele, um einen maßgeschneiderten Behandlungsplan zu erstellen.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Für dynamische Falten — Falten, die durch Muskelbewegung entstehen — ist Botox die optimale Lösung. Es glättet effektiv Stirnfalten, Zornesfalten und Krähenfüße. Statische Falten hingegen, die auch in Ruhe sichtbar sind, sowie altersbedingter Volumenverlust werden am besten mit Hyaluronsäure-Fillern behandelt.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Wenn Sie eine allgemeine Verbesserung Ihrer Hautqualität anstreben, empfehlen sich Behandlungen wie Profhilo oder Polynukleotide. Diese stimulieren die körpereigene Kollagen- und Elastinproduktion und verbessern Elastizität, Festigkeit und den natürlichen Glow der Haut von innen heraus. Microneedling und chemische Peelings beschleunigen die Hauterneuerung und sind besonders wirksam bei Aknenarben und Pigmentflecken.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Für Anliegen rund um die Gesichtskontur bieten strukturelle Filler an Kinnlinie, Kinn und Wangen eine nicht-chirurgische Lösung für definierte, harmonische Proportionen. Masseter Botox reduziert einen ausgeprägten Kiefer und erzielt einen schlankeren Gesichtsumriss. Die nicht-chirurgische Nasenkorrektur mit Filler kann die Nasenform verfeinern — ganz ohne Operation.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Unsere Ästhetik ist unsichtbare Kunst. Mutig, natürlich, immer Ihr Weg. Unabhängig davon, welche Behandlung Sie wählen — bei Cosmedocs stehen natürliche, harmonische Ergebnisse immer an erster Stelle. Vereinbaren Sie eine unverbindliche Beratung und lassen Sie sich persönlich beraten.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
