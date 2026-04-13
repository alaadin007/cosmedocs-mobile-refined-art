import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const canonical = 'https://www.cosmedocs.com/de/preise/';

const botoxPrices = [
  { name: '1 Bereich', price: '£275' }, { name: '2 Bereiche', price: '£325' }, { name: '3 Bereiche', price: '£350' },
  { name: 'Masseter Botox', price: '£350' }, { name: 'Nefertiti Lift', price: '£350' },
  { name: 'Trap Botox', price: '£450' }, { name: 'Wadenverschlankung', price: '£750' },
];
const fillerPrices = [
  { name: 'Lippenfiller 1ml', price: '£350' }, { name: 'Kinnlinie Filler', price: '£450' },
  { name: 'Kinn Filler', price: '£400' }, { name: 'Augenringe Filler', price: '£450' },
  { name: 'Nasen-Filler', price: '£450' }, { name: 'PCL-Fäden (Nase)', price: '£950' },
  { name: 'HA Makeover', price: '£1.200+' },
];
const skinPrices = [
  { name: 'Profhilo', price: '£350' }, { name: 'Polynukleotide', price: '£300' },
  { name: 'Chemisches Peeling', price: '£200' }, { name: 'Microneedling', price: '£250' },
  { name: 'PRP', price: '£350' }, { name: 'HydraFacial', price: '£200' },
];

export default function PricesGerman() {
  return (
    <>
      <Helmet>
        <title>Preisliste | Cosmedocs Harley Street London</title>
        <meta name="description" content="Transparente Preise für alle ästhetischen Behandlungen. Botox ab £275, Lippenfiller ab £350. Keine versteckten Kosten." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="py-16 md:py-24 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-[#C9A050]">Preisliste</span></h1>
          <p className="text-lg text-white/60">Transparente Preise — keine versteckten Kosten</p>
        </section>
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <Tabs defaultValue="botox" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 rounded-xl p-1 mb-8">
              <TabsTrigger value="botox" className="data-[state=active]:bg-[#C9A050] data-[state=active]:text-black rounded-lg text-sm">Botox</TabsTrigger>
              <TabsTrigger value="fillers" className="data-[state=active]:bg-[#C9A050] data-[state=active]:text-black rounded-lg text-sm">Filler</TabsTrigger>
              <TabsTrigger value="skin" className="data-[state=active]:bg-[#C9A050] data-[state=active]:text-black rounded-lg text-sm">Haut</TabsTrigger>
            </TabsList>
            <TabsContent value="botox"><PriceList items={botoxPrices} /></TabsContent>
            <TabsContent value="fillers"><PriceList items={fillerPrices} /></TabsContent>
            <TabsContent value="skin"><PriceList items={skinPrices} /></TabsContent>
          </Tabs>
          <p className="text-xs text-white/30 text-center mt-8">Preise sind Richtwerte. Der endgültige Preis wird in der Beratung festgelegt.</p>
        </div>

        {/* Pricing Guide */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <h2 className="text-2xl font-light text-center mb-6">Was Sie über unsere <span className="text-[#C9A050]">Preise</span> wissen sollten</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              Bei Cosmedocs legen wir großen Wert auf transparente und nachvollziehbare Preisgestaltung. Es gibt keine versteckten Kosten. Unsere angegebenen Preise umfassen die Beratung, die Behandlung selbst und die Nachsorge. Sollte ein zusätzliches Follow-up erforderlich sein, informieren wir Sie im Voraus.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Im Vergleich zu deutschen Kliniken bietet die Harley Street ein hervorragendes Preis-Leistungs-Verhältnis. Botox-Behandlungen beginnen bei £275 (ca. €320), Lippenfiller bei £350 (ca. €410). Dies sind ausgesprochen faire Preise für eine arztgeleitete Klinik auf der Harley Street — einer der renommiertesten Adressen für ästhetische Medizin weltweit.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Die Kosten einer Behandlung hängen von der Menge des verwendeten Produkts, der Anzahl der behandelten Bereiche und Ihren individuellen Zielen ab. In der Beratung erstellen wir einen Behandlungsplan, der auch Ihr Budget berücksichtigt. Viele Patienten beginnen mit den wirkungsvollsten ein bis zwei Behandlungen und erweitern ihren Plan schrittweise.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Das HA Makeover ist unser umfassendes Gesichtsverjüngungsprogramm mit Hyaluronsäure. Durch die gleichzeitige Behandlung mehrerer Bereiche erzielen wir harmonischere Ergebnisse als bei Einzelbehandlungen. Dieser ganzheitliche Ansatz ist besonders bei internationalen Patienten beliebt, die das Maximum aus einem einzigen Besuch herausholen möchten.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Masseter Botox zur Kieferschlankung und Profhilo zur Hautverjüngung gehören zu unseren beliebtesten Behandlungen bei deutschsprachigen Patienten. Beide Verfahren erfordern keine Ausfallzeit und liefern subtile, natürlich wirkende Ergebnisse — ganz im Sinne unserer Philosophie der unsichtbaren Kunst. Fragen zu Zahlungsmöglichkeiten und Kombinationsrabatten beantworten wir gerne in der Beratung.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

function PriceList({ items }: { items: { name: string; price: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map(item => (
        <Card key={item.name} className="bg-white/[0.03] border-white/[0.06]">
          <CardContent className="flex items-center justify-between p-4">
            <span className="text-sm text-white/80">{item.name}</span>
            <span className="text-sm font-semibold text-[#C9A050]">{item.price}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
