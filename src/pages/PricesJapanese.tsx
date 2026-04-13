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

        {/* Pricing Guide */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <h2 className="text-2xl font-light text-center mb-6">価格について<span className="text-[#C9A050]">知っておくべきこと</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              Cosmedocsでは、すべての治療に対して透明で分かりやすい価格設定を心がけています。隠れた費用はありません。表示価格にはカウンセリング料、施術料、アフターケアが含まれています。追加のフォローアップが必要な場合も、事前にご説明いたします。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              日本の美容クリニックと比較して、ロンドンのハーレーストリートでの治療は非常に競争力のある価格を提供しています。ボトックスは1エリア£275（約50,000円）から、リップフィラーは£350（約63,000円）からご利用いただけます。これはハーレーストリートの医師主導クリニックとしては非常に良心的な価格帯です。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              治療の費用は、使用する製品の量、治療する部位の数、そしてお一人おひとりの目標に基づいて決定されます。カウンセリングでは、予算に合わせた治療プランのご提案も可能です。多くの患者様は、最も効果的な1-2の治療から始め、段階的にプランを拡大されています。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              HA Makeoverは、フィラーを使用した包括的な顔の若返りプログラムです。複数部位を同時に治療することで、個別に治療するよりも調和のとれた結果が得られます。この総合的なアプローチは、特に海外から来院される患者様に好まれています。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              咬筋ボトックスやふくらはぎ痩身ボトックスは、日本人患者様に特に人気の施術です。これらの治療は、顔や体のシルエットを自然に変える効果があり、繰り返しの施術でより持続的な結果が期待できます。初回と2回目以降で必要な単位数が異なる場合があるため、継続的なケアプランについてもご相談ください。
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
