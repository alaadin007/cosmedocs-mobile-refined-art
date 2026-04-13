import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const canonical = 'https://www.cosmedocs.com/ja/treatments/';

const categories = [
  { title: 'ボトックスとアンチエイジング', subtitle: '筋肉調整と予防', desc: '動的なシワ、顔の輪郭形成、医療的適応のためのボトックス注射。2007年から専門医が実施。', link: '/ja/treatments/botox/', items: ['額・眉間・目尻のシワ', 'リップフリップ・ガミースマイル', '咬筋ボトックス（小顔治療）', 'ネフェルティティリフト', '医療ボトックス（偏頭痛・多汗症）'] },
  { title: 'ダーマルフィラー', subtitle: 'ボリューム・構造・彫刻', desc: 'ヒアルロン酸フィラーで自然なボリューム回復と顔の輪郭形成。', link: '/ja/treatments/dermal-fillers/', items: ['リップフィラー', '頬・顎・顎ラインフィラー', '鼻フィラー（非手術鼻整形）', '涙袋フィラー', 'HA Makeover'] },
  { title: '肌の若返り', subtitle: '再生・輝き・修復', desc: 'コラーゲン刺激と肌質改善のための先進医療治療。', link: '/ja/treatments/skin-rejuvenation/', items: ['プロファイロ', 'ポリヌクレオチド', 'ハイドラフェイシャル', 'マイクロニードリング・PRP', 'ケミカルピーリング'] },
  { title: 'レーザー治療', subtitle: '精密な光治療', desc: '肌のリサーフェシング、色素補正、脱毛のための先進レーザー。', link: '/treatments/laser/', items: ['CO₂レーザー', 'ピコレーザー', 'レーザー脱毛', '瘢痕軽減'] },
  { title: 'PDOスレッド', subtitle: '非手術リフト', desc: '組織のリフティング、肌の引き締め、コラーゲン刺激のための吸収性PDOスレッド。', link: '/treatments/pdo-threads/', items: ['ミニフェイスリフト', '顎ライン定義', '首の引き締め'] },
];

export default function TreatmentsHubJapanese() {
  return (
    <>
      <Helmet>
        <title>美容治療 ロンドン | Cosmedocs ハーレーストリート</title>
        <meta name="description" content="医師主導の美容治療の全メニュー。ボトックス、ダーマルフィラー、肌の若返り、レーザー治療。ハーレーストリート。" data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <section className="py-16 md:py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">美容<span className="text-[#C9A050]">治療メニュー</span></h1>
            <p className="text-lg text-white/60 mb-6">医師主導の美容医療 — 2007年からハーレーストリートで</p>
            <p className="text-sm text-white/40 max-w-2xl mx-auto leading-relaxed">
              Cosmedocsは、ボトックス、ダーマルフィラー、肌の若返り、レーザー治療、PDOスレッドなど、幅広い美容治療を提供しています。すべての施術はGMC登録医師が担当し、最新のエビデンスに基づいた安全で効果的な治療を実現しています。
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
                  詳細を見る <ArrowRight className="w-4 h-4" />
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
          <h2 className="text-2xl font-light text-center mb-8">治療を選ぶ<span className="text-[#C9A050]">ガイド</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              美容治療の世界は複雑で、どの治療が自分に合っているか判断するのは容易ではありません。Cosmedocsでは、カウンセリングを通じて一人ひとりの顔の解剖学、肌の状態、美的目標を総合的に評価し、最適な治療プランをご提案しています。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              動的なシワ（表情を作ったときにできるシワ）にはボトックスが最適です。額の横ジワ、眉間の縦ジワ、目尻のシワに高い効果を発揮します。一方、静的なシワ（表情に関係なく常にあるシワ）や、加齢によるボリュームロスにはダーマルフィラーが適しています。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              肌全体の質感改善を求める方には、プロファイロやポリヌクレオチドなどの肌の若返り治療がおすすめです。これらはコラーゲンとエラスチンの生成を促進し、肌のハリ、弾力、輝きを内側から回復させます。マイクロニードリングやケミカルピーリングは、肌のターンオーバーを促進し、ニキビ跡や色素沈着の改善に効果的です。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              顔の輪郭に関するお悩みには、顎ラインフィラー、顎フィラー、頬フィラーなどの構造的フィラーが、メスを使わずにシャープで整った輪郭を実現します。咬筋ボトックスは、エラの張りを軽減する人気の治療で、小顔効果が期待できます。非手術的鼻整形（ノーズフィラー）は、手術をせずに鼻の形を整える画期的な治療です。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              私たちの美学は見えない芸術。大胆、自然、常にあなたらしく。どの治療を選んでも、Cosmedocsは自然で調和のとれた結果を最優先にしています。カウンセリングでお気軽にご相談ください。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
