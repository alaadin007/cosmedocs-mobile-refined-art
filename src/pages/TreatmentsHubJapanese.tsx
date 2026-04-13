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
            <p className="text-lg text-white/60">医師主導の美容医療 — 2007年からハーレーストリートで</p>
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
      </div>
    </>
  );
}
