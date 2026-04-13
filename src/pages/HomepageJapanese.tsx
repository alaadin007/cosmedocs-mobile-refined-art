import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, MapPin, Phone } from 'lucide-react';

const canonical = 'https://www.cosmedocs.com/ja/';

const treatments = [
  { label: 'ボトックス', icon: '💉', link: '/ja/treatments/botox/' },
  { label: 'ダーマルフィラー', icon: '✨', link: '/ja/treatments/dermal-fillers/' },
  { label: 'リップフィラー', icon: '👄', link: '/ja/treatments/lip-fillers/' },
  { label: '顎ラインフィラー', icon: '🔷', link: '/ja/treatments/jawline-filler/' },
  { label: '顎フィラー', icon: '◆', link: '/ja/treatments/chin-filler/' },
  { label: '涙袋フィラー', icon: '👁', link: '/ja/treatments/tear-trough-filler/' },
  { label: '肌の若返り', icon: '🌟', link: '/ja/treatments/skin-rejuvenation/' },
];

const trustReasons = [
  { icon: Shield, title: '17年以上の実績', desc: '2007年からハーレーストリートで、100万回以上の注入実績。' },
  { icon: Award, title: 'GMC登録医師', desc: 'すべての施術を登録医師が担当。安全性と専門性を保証。' },
  { icon: Users, title: '自然な結果', desc: '私たちの美学は見えない芸術 — 大胆、自然、常にあなたらしく。' },
  { icon: Star, title: '5つ星の評価', desc: '数千人の満足した患者様が実体験を共有しています。' },
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

export default function HomepageJapanese() {
  return (
    <>
      <Helmet>
        <title>Cosmedocs ロンドン | ハーレーストリート美容医学</title>
        <meta name="description" content="ハーレーストリート美容クリニック。ボトックス、フィラー、肌治療。医師主導の自然な結果 — 見えない芸術。2007年から。" data-rh="true" />
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
            description: "ハーレーストリート美容医学クリニック",
            address: { "@type": "PostalAddress", streetAddress: "10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            telephone: "+44 20 3733 3227",
            availableLanguage: ["en", "ja", "ar", "fr", "es", "zh", "de"],
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
              ロンドン ハーレーストリート<br />
              <span className="text-[#C9A050]">美容医学クリニック</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              私たちの美学は見えない芸術。大胆、自然、常にあなたらしく。
            </p>
            <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
              Cosmedocsの美容医療は静かで控えめ。言葉を使わずに語る変化です。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ja/treatments/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                治療を見る <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ja/contact/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                カウンセリングを予約
              </Link>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            <span className="text-[#C9A050]">治療メニュー</span>
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
            なぜ<span className="text-[#C9A050]"> Cosmedocs</span>を選ぶのか
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

        {/* Medical Tourism */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-6">
            日本から<span className="text-[#C9A050]">ロンドンへ</span> — 美容医療ツーリズム
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              日本の美容医療は世界的に高い評価を受けていますが、ロンドンのハーレーストリートは200年以上の医療の歴史を持つ、世界で最も権威ある医療街です。Cosmedocsは2007年の設立以来、東京、大阪、名古屋、福岡など日本各地からお越しの患者様をお迎えしてきました。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              日本人の美的感覚は繊細さと控えめさを重視します。Cosmedocsの「見えない芸術」というフィロソフィーは、まさにこの価値観と一致しています。私たちは過度な変化を避け、あなたの自然な美しさを引き出すことに専念しています。施術後に「何かした？」と聞かれることなく、ただ「最近きれいになったね」と言われる — それが私たちの目指す結果です。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              咬筋ボトックスによる小顔治療は、日本人患者様に特に人気の施術です。エラの張りを自然に軽減し、卵型の輪郭に近づけます。また、ふくらはぎ痩身ボトックスも、すらりとした脚のラインを求める方に支持されています。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              すべての施術はGMC（英国医事評議会）登録医師が担当します。使用する製品はすべてFDAおよびCE認証を取得した安全性の高いものです。カウンセリングは英語で行われますが、医療用語を避けた明確な説明を心がけており、これまで多くの日本人患者様に安心してお受けいただいています。
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-6">
            私たちの<span className="text-[#C9A050]">美学</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              Cosmedocsの美容医療は「見えない芸術」です。大胆でありながら自然。変化を求めながらも、あなたらしさを失わない。それが私たちのフィロソフィーです。美容医療は「やりすぎ」のイメージがつきまといますが、Cosmedocsは静かで控えめなアプローチを大切にしています。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              ボトックスは表情を凍らせるためではなく、自然な若々しさを取り戻すために。フィラーは顔を大きくするためではなく、失われたボリュームを繊細に補うために。肌の若返り治療は、肌本来の再生力を内側から引き出すために。すべての施術に、この哲学が貫かれています。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Dr. Ahmed Haqは17年以上にわたり、100万回以上の注入を実施してきました。この豊富な経験が、一人ひとりの顔の解剖学を深く理解し、個別化された治療プランを提供する基盤となっています。私たちは流行を追うのではなく、あなたの骨格構造、肌質、ライフスタイルに合わせた、長期的に美しい結果を追求します。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              ロンドンへの旅行を計画されている方は、カウンセリングと施術を同日に受けることも可能です。多くの日本人患者様が、ロンドン観光やビジネスと組み合わせて来院されています。プライバシーを重視した完全予約制の環境で、安心してご相談いただけます。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#C9A050]" />
              <span className="text-white/60 text-sm">10 Harley Street, London W1G 9PF</span>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">カウンセリングのご予約</h2>
            <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">カウンセリングは英語で行われますが、明確で分かりやすい説明を心がけています。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ja/contact/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                お問い合わせ <Phone className="w-4 h-4" />
              </Link>
              <Link to="/ja/prices/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                価格を見る
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
