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

        <div className="sr-only" aria-hidden="true">
          <p>Cosmedocs ロンドン ハーレーストリート 日本人患者 美容クリニック 2007年設立。ボトックス、ダーマルフィラー、咬筋ボトックス小顔治療、ふくらはぎ痩身、HA Makeover若返り。100万回以上の注入実績。医師主導の美容医療で自然な結果。</p>
        </div>
      </div>
    </>
  );
}
