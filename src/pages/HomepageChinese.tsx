import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Users, Star, MapPin, Phone } from 'lucide-react';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';
import { Button } from '@/components/ui/button';

const hreflangLinks = generateHreflangLinks('homepage');
const canonical = getCanonicalUrl('zh', 'homepage');

const treatments = [
  { label: '肉毒杆菌', icon: '💉', link: '/zh/treatments/botox/' },
  { label: '玻尿酸填充', icon: '✨', link: '/zh/treatments/dermal-fillers/' },
  { label: '丰唇', icon: '👄', link: '/zh/treatments/lip-fillers/' },
  { label: '下颌线填充', icon: '🔷', link: '/zh/treatments/jawline-filler/' },
  { label: '下巴填充', icon: '◆', link: '/zh/treatments/chin-filler/' },
  { label: '泪沟填充', icon: '👁', link: '/zh/treatments/tear-trough-filler/' },
  { label: '皮肤焕活', icon: '🌟', link: '/zh/treatments/skin-rejuvenation/' },
];

const trustReasons = [
  { icon: Shield, title: '17年以上经验', desc: '自2007年起在哈利街执业，超过100万次注射。' },
  { icon: Award, title: 'GMC注册医生', desc: '所有治疗均由GMC注册且经验丰富的美容医生进行。' },
  { icon: Users, title: '自然效果', desc: '我们的美学是隐形的艺术 — 大胆、自然、始终如你所愿。' },
  { icon: Star, title: '5星好评', desc: '数千名满意患者对我们的真实评价。' },
];

export default function HomepageChinese() {
  return (
    <>
      <Helmet>
        <title>Cosmedocs 伦敦 | 哈利街美容医学诊所</title>
        <meta name="description" content="哈利街美容诊所，由Ahmed Haq医生主导。肉毒杆菌、填充剂和皮肤治疗。隐形艺术 — 大胆 — 自然 — 始终如你所愿。" data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://www.cosmedocs.com/#organization",
            name: "Cosmedocs",
            url: "https://www.cosmedocs.com/zh/",
            description: "哈利街美容医学诊所，由Ahmed Haq医生主导。",
            address: { "@type": "PostalAddress", streetAddress: "8-10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            telephone: "+442071234567",
            medicalSpecialty: "Dermatology",
            availableLanguage: ["en", "zh", "ar", "fr", "es"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative py-20 md:py-32 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/10">
              <span className="text-sm text-[#C9A050]">Cosmedocs · 哈利街 · 伦敦</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              伦敦哈利街<br />
              <span className="text-[#C9A050]">美容医学</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              我们的美学是隐形的艺术。大胆、自然、始终如你所愿。
            </p>
            <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
              Cosmedocs的美容医学是低调的、安静的、隐形的。这是无需言语的蜕变。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/zh/treatments/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                探索治疗 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/zh/contact/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                预约咨询
              </Link>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            我们的<span className="text-[#C9A050]">治疗项目</span>
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
            为什么选择<span className="text-[#C9A050]"> Cosmedocs</span>
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
              <span className="text-white/60 text-sm">8-10 Harley Street, London W1G 9PF</span>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">准备好预约了吗？</h2>
            <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">我们的团队会说普通话和广东话。预约免费咨询，了解最适合您的治疗方案。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/zh/contact/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                联系我们 <Phone className="w-4 h-4" />
              </Link>
              <Link to="/zh/prices/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                查看价格
              </Link>
            </div>
          </div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>
            Cosmedocs是伦敦哈利街领先的美容诊所，由Ahmed Haq医生创立于2007年。我们提供全面的美容治疗，包括肉毒杆菌注射、玻尿酸皮肤填充剂、皮肤焕活治疗、激光治疗和整形手术。所有治疗均由GMC注册医生进行。我们为中文患者提供普通话和广东话服务。
          </p>
        </div>
      </div>
    </>
  );
}
