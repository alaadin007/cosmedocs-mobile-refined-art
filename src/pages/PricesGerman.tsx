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
