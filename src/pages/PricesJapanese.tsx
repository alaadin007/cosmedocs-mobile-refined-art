import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const canonical = 'https://www.cosmedocs.com/ja/prices/';

const botoxPrices = [
  { name: '1エリア', price: '£275' }, { name: '2エリア', price: '£325' }, { name: '3エリア', price: '£350' },
  { name: '咬筋ボトックス', price: '£350' }, { name: 'ネフェルティティリフト', price: '£350' },
  { name: 'トラップボトックス', price: '£450' }, { name: 'ふくらはぎ痩身', price: '£750' },
];
const fillerPrices = [
  { name: 'リップフィラー 1ml', price: '£350' }, { name: '顎ラインフィラー', price: '£450' },
  { name: '顎フィラー', price: '£400' }, { name: '涙袋フィラー', price: '£450' },
  { name: '鼻フィラー', price: '£450' }, { name: 'PCLスレッド（鼻）', price: '£950' },
  { name: 'HA Makeover', price: '£1,200+' },
];
const skinPrices = [
  { name: 'プロファイロ', price: '£350' }, { name: 'ポリヌクレオチド', price: '£300' },
  { name: 'ケミカルピーリング', price: '£200' }, { name: 'マイクロニードリング', price: '£250' },
  { name: 'PRP', price: '£350' }, { name: 'ハイドラフェイシャル', price: '£200' },
];

export default function PricesJapanese() {
  return (
    <>
      <Helmet>
        <title>価格表 | Cosmedocs ハーレーストリート ロンドン</title>
        <meta name="description" content="すべての美容治療の透明な価格。ボトックス£275から、リップフィラー£350から。隠れた費用なし。" data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="py-16 md:py-24 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-[#C9A050]">価格表</span></h1>
          <p className="text-lg text-white/60">透明な価格設定 — 隠れた費用なし</p>
        </section>
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <Tabs defaultValue="botox" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 rounded-xl p-1 mb-8">
              <TabsTrigger value="botox" className="data-[state=active]:bg-[#C9A050] data-[state=active]:text-black rounded-lg text-sm">ボトックス</TabsTrigger>
              <TabsTrigger value="fillers" className="data-[state=active]:bg-[#C9A050] data-[state=active]:text-black rounded-lg text-sm">フィラー</TabsTrigger>
              <TabsTrigger value="skin" className="data-[state=active]:bg-[#C9A050] data-[state=active]:text-black rounded-lg text-sm">肌治療</TabsTrigger>
            </TabsList>
            <TabsContent value="botox"><PriceList items={botoxPrices} /></TabsContent>
            <TabsContent value="fillers"><PriceList items={fillerPrices} /></TabsContent>
            <TabsContent value="skin"><PriceList items={skinPrices} /></TabsContent>
          </Tabs>
          <p className="text-xs text-white/30 text-center mt-8">価格は目安です。最終的な費用はカウンセリングで決定されます。</p>
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
