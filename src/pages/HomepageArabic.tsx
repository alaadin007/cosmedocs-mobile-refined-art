import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, MapPin, Phone } from 'lucide-react';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';

const hreflangLinks = generateHreflangLinks('homepage');
const canonical = getCanonicalUrl('ar', 'homepage');

const treatments = [
  { label: 'البوتوكس', icon: '💉', link: '/ar/treatments/botox/' },
  { label: 'فيلر الجلد', icon: '✨', link: '/ar/treatments/dermal-fillers/' },
  { label: 'فيلر الشفاه', icon: '👄', link: '/ar/treatments/lip-fillers/' },
  { label: 'فيلر خط الفك', icon: '🔷', link: '/ar/treatments/jawline-filler/' },
  { label: 'فيلر الذقن', icon: '◆', link: '/ar/treatments/chin-filler/' },
  { label: 'فيلر تحت العين', icon: '👁', link: '/ar/treatments/tear-trough-filler/' },
  { label: 'تجديد البشرة', icon: '🌟', link: '/ar/treatments/skin-rejuvenation/' },
];

const trustReasons = [
  { icon: Shield, title: 'أكثر من 17 عامًا من الخبرة', desc: 'نعمل في هارلي ستريت منذ عام 2007، مع أكثر من مليون حقنة.' },
  { icon: Award, title: 'أطباء مسجلون في GMC', desc: 'جميع العلاجات يقوم بها أطباء تجميل مسجلون وذوو خبرة.' },
  { icon: Users, title: 'نتائج طبيعية', desc: 'جمالنا فن خفي — جريء، طبيعي، دائمًا على طريقتك.' },
  { icon: Star, title: 'تقييم 5 نجوم', desc: 'آلاف المرضى الراضين يشاركون تجاربهم الحقيقية.' },
];

export default function HomepageArabic() {
  return (
    <>
      <Helmet>
        <title>Cosmedocs لندن | عيادة هارلي ستريت للطب التجميلي</title>
        <meta name="description" content="عيادة تجميلية في هارلي ستريت بقيادة الدكتور أحمد حق. البوتوكس والفيلر وعلاجات البشرة. فن خفي — جريء — طبيعي — دائمًا على طريقتك." data-rh="true" />
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
            url: "https://www.cosmedocs.com/ar/",
            description: "عيادة هارلي ستريت للطب التجميلي بقيادة الدكتور أحمد حق.",
            address: { "@type": "PostalAddress", streetAddress: "8-10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            telephone: "+442071234567",
            medicalSpecialty: "Dermatology",
            availableLanguage: ["en", "ar", "fr", "es", "zh"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white" dir="rtl">
        {/* Hero */}
        <section className="relative py-20 md:py-32 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/10">
              <span className="text-sm text-[#C9A050]" dir="ltr">Cosmedocs · Harley Street · London</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              هارلي ستريت لندن<br />
              <span className="text-[#C9A050]">الطب التجميلي</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              جمالنا فن خفي. جريء، طبيعي، دائمًا على طريقتك.
            </p>
            <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
              الطب التجميلي في كوزميدوكس هادئ وغير مبالغ فيه. إنه تحوّل يتحدث دون أن ينطق بكلمة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ar/treatments/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                اكتشف العلاجات <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link to="/ar/contact/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                احجز استشارة
              </Link>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            <span className="text-[#C9A050]">علاجاتنا</span>
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
            لماذا تختار<span className="text-[#C9A050]"> كوزميدوكس</span>
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
              <span className="text-white/60 text-sm" dir="ltr">8-10 Harley Street, London W1G 9PF</span>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">هل أنت مستعد لحجز موعد؟</h2>
            <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">فريقنا يتحدث العربية. احجز استشارة مجانية لمعرفة العلاج الأنسب لك.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ar/contact/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                اتصل بنا <Phone className="w-4 h-4" />
              </Link>
              <Link to="/ar/prices/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                الأسعار
              </Link>
            </div>
          </div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>
            كوزميدوكس هي عيادة تجميلية رائدة في هارلي ستريت بلندن، أسسها الدكتور أحمد حق منذ عام 2007. نقدم مجموعة شاملة من العلاجات التجميلية تشمل حقن البوتوكس وحشوات الجلد بحمض الهيالورونيك وعلاجات تجديد البشرة والعلاج بالليزر والجراحة التجميلية. جميع العلاجات يقوم بها أطباء مسجلون في GMC. نقدم خدماتنا باللغة العربية للمرضى العرب من الشرق الأوسط والخليج.
          </p>
        </div>
      </div>
    </>
  );
}
