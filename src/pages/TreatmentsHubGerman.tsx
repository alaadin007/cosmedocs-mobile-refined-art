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
            <p className="text-lg text-white/60">Arztgeleitete ästhetische Medizin — seit 2007 an der Harley Street</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 pb-20 space-y-8">
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
      </div>
    </>
  );
}
