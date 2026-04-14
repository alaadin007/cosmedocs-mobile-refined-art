import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Shield, Award, Star, Clock, Gem, Target, CheckCircle, Sparkles } from 'lucide-react';

const treatments = [
  {
    title: 'HA Makeover — تجديد الوجه الكامل',
    desc: 'خطة شاملة بحمض الهيالورونيك لإعادة التوازن الطبيعي للوجه — لا نفخ، لا مبالغة. تعديلات بالمليمتر تصنع فرقاً هائلاً في التناسق والحيوية.',
    icon: Sparkles,
    duration: 'جلسة واحدة — 90 دقيقة',
    price: 'من £1,250',
  },
  {
    title: 'البوتوكس الدقيق — Baby Botox',
    desc: 'جرعات مصغرة تُحافظ على التعبير الطبيعي وتُزيل التجاعيد الدقيقة. لا تجميد، لا فقدان لحركة الوجه — فقط بشرة مسترخية وأكثر نعومة.',
    icon: Target,
    duration: '20 دقيقة',
    price: 'من £350',
  },
  {
    title: 'فيلر الشفاه الطبيعي',
    desc: 'ترطيب وتحسين تدريجي بدون مبالغة. نركز على تعريف حدود الشفاه وتحسين النسبة بين الشفة العليا والسفلى بدقة المليمتر.',
    icon: Gem,
    duration: '30 دقيقة',
    price: 'من £350',
  },
  {
    title: 'نحت خط الفك والذقن',
    desc: 'تحسين زاوية الفك وإبراز الذقن باستخدام فيلر متقدم. نتائج هندسية دقيقة تُبرز البنية العظمية الطبيعية للوجه العربي.',
    icon: Target,
    duration: '45 دقيقة',
    price: 'من £350',
  },
  {
    title: 'Profhilo — ترطيب عميق',
    desc: 'حقن حمض الهيالورونيك النقي لتحفيز الكولاجين والإيلاستين. بشرة مشرقة من الداخل — بدون فيلر، بدون تغيير في الشكل.',
    icon: Sparkles,
    duration: 'جلستان بفاصل 4 أسابيع',
    price: 'من £350',
  },
  {
    title: 'علاج تحت العين',
    desc: 'معالجة الهالات الداكنة والتجاويف تحت العين بتقنيات دقيقة ومنتجات مختارة بعناية. تحسين يُلاحظ لكن لا يُكتشف.',
    icon: Target,
    duration: '30 دقيقة',
    price: 'من £450',
  },
];

const whyLondon = [
  {
    icon: Shield,
    title: 'منتجات أصلية 100%',
    desc: 'نستخدم حصرياً Allergan Botox و Juvederm — منتجات أصلية بترخيص كامل. لا بدائل رخيصة، لا منتجات مجهولة المصدر. جودة هارلي ستريت تبدأ من المنتج.',
  },
  {
    icon: Award,
    title: 'أطباء متخصصون — ليس ممرضات',
    desc: 'جميع العلاجات يقوم بها أطباء مسجلون في GMC ومتخصصون في الطب التجميلي. أكثر من 17 عاماً من الخبرة وأكثر من مليون حقنة.',
  },
  {
    icon: Target,
    title: 'دقة المليمتر',
    desc: 'فلسفتنا تقوم على التعديلات الدقيقة. مليمتر واحد في مكان صحيح يصنع فرقاً أكبر من مل كامل في مكان خاطئ. هذا هو الفرق بين التجميل العادي والفن الطبي.',
  },
  {
    icon: Star,
    title: 'نتائج غير قابلة للاكتشاف',
    desc: 'جمالنا فن خفي — التحوّل يتحدث دون أن ينطق بكلمة. ستلاحظ الفرق لكن لن يعرف أحد السبب. هذا هو معيار النجاح عندنا.',
  },
];

const comparisonData = [
  { treatment: 'Botox 3 Areas', gulf: '$800–$1,200', london: '£350' },
  { treatment: 'Lip Filler 1ml', gulf: '$700–$1,200', london: '£350' },
  { treatment: 'Jawline + Chin', gulf: '$1,500–$2,500', london: 'من £700' },
  { treatment: 'HA Makeover', gulf: '$3,000–$5,000', london: 'من £1,250' },
  { treatment: 'Profhilo', gulf: '$600–$1,000', london: '£350' },
  { treatment: 'Tear Trough', gulf: '$800–$1,500', london: 'من £450' },
];

export default function LondonSummerAestheticsArabic() {
  return (
    <>
      <Helmet>
        <title>تجميل الصيف في لندن | Cosmedocs هارلي ستريت — للزائرين العرب</title>
        <meta name="description" content="استمتعي بعلاجات تجميلية فاخرة في هارلي ستريت خلال زيارتك للندن. بوتوكس وفيلر بأيدي أطباء متخصصين — جودة عالمية بأسعار تنافسية. جمالنا فن خفي." data-rh="true" />
        <link rel="canonical" href="https://www.cosmedocs.com/ar/london-summer-aesthetics/" data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Cosmedocs — London Summer Aesthetics",
            url: "https://www.cosmedocs.com/ar/london-summer-aesthetics/",
            description: "عيادة هارلي ستريت للطب التجميلي — علاجات فاخرة للزائرين العرب في لندن",
            address: { "@type": "PostalAddress", streetAddress: "8-10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            telephone: "+442071234567",
            areaServed: ["SA", "AE", "KW", "QA", "BH", "OM", "JO", "LB", "EG"],
            availableLanguage: ["en", "ar"],
            geo: { "@type": "GeoCoordinates", latitude: "51.5188", longitude: "-0.1477" },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white" dir="rtl">

        {/* Hero */}
        <section className="relative py-24 md:py-36 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C9A050 0%, transparent 50%), radial-gradient(circle at 70% 60%, #C9A050 0%, transparent 50%)' }} />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-5 py-2 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/10">
              <span className="text-sm text-[#C9A050]" dir="ltr">Cosmedocs · Harley Street · Summer 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              صيفك في لندن<br />
              <span className="text-[#C9A050]">تجميلك في هارلي ستريت</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              تعديلات بالمليمتر تصنع فرقاً هائلاً. جمالنا فن خفي — جريء، طبيعي، دائمًا على طريقتك.
            </p>
            <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
              خلال زيارتك للندن هذا الصيف، استمتعي بعلاجات تجميلية بمستوى عالمي في أعرق عيادة في هارلي ستريت. أطباء متخصصون، منتجات أصلية، ونتائج لا تُكتشف.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ar/contact/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
                احجزي موعدك الآن <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <a href="https://wa.me/442071234567?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AA%D8%AC%D9%85%D9%8A%D9%84%D9%8A%D8%A9%20%D8%AE%D9%84%D8%A7%D9%84%20%D8%B2%D9%8A%D8%A7%D8%B1%D8%AA%D9%8A%20%D9%84%D9%84%D9%86%D8%AF%D9%86" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
                تواصلي عبر واتساب <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy: Millimeter Precision */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              فلسفة <span className="text-[#C9A050]">المليمتر</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              في Cosmedocs، لا نؤمن بالمبالغة. نؤمن بأن مليمتراً واحداً في المكان الصحيح يصنع فرقاً أكبر من مل كامل في المكان الخاطئ. هذا ليس مجرد شعار — إنه فلسفة طبية قائمة على 17 عاماً من الخبرة وأكثر من مليون حقنة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#C9A050] mb-2">1mm</div>
              <p className="text-sm text-white/60">التعديل الذي يغيّر كل شيء في زاوية الفك — بدون تغيير ملامحك</p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#C9A050] mb-2">0.1ml</div>
              <p className="text-sm text-white/60">كمية الفيلر الدقيقة التي تحدد الفرق بين "مبالغ فيه" و"مثالي"</p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#C9A050] mb-2">17+</div>
              <p className="text-sm text-white/60">عاماً من الخبرة في هارلي ستريت تصنع هذه الدقة</p>
            </div>
          </div>
        </section>

        {/* Why Cosmedocs London */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            لماذا <span className="text-[#C9A050]">لندن أفضل</span> من عيادات الخليج؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyLondon.map(item => (
              <div key={item.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex gap-4">
                <item.icon className="w-8 h-8 text-[#C9A050] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Treatment Bundles */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light mb-3">
              <span className="text-[#C9A050]">باقات الصيف</span> — علاجات مصممة للزائرين
            </h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              خطط علاجية مكثفة يمكن إتمامها خلال زيارتك القصيرة للندن — بدون تنازل عن الجودة أو السلامة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatments.map(t => (
              <div key={t.title} className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#C9A050]/30 rounded-2xl p-6 transition-all duration-300">
                <t.icon className="w-6 h-6 text-[#C9A050] mb-3" />
                <h3 className="text-white font-medium mb-2 text-sm">{t.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">{t.desc}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40 flex items-center gap-1"><Clock className="w-3 h-3" /> {t.duration}</span>
                  <span className="text-[#C9A050] font-medium">{t.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Price Comparison */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-8">
            مقارنة <span className="text-[#C9A050]">الأسعار</span>
          </h2>
          <p className="text-center text-sm text-white/50 mb-8 max-w-lg mx-auto">
            جودة هارلي ستريت بأسعار أقل من عيادات الخليج — مع منتجات أصلية وأطباء متخصصين.
          </p>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden" dir="ltr">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left p-4 text-white/60 font-medium">Treatment</th>
                  <th className="text-center p-4 text-white/60 font-medium">Gulf Clinics</th>
                  <th className="text-center p-4 text-[#C9A050] font-medium">Cosmedocs London</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.04]">
                    <td className="p-4 text-white/80">{row.treatment}</td>
                    <td className="p-4 text-center text-white/40 line-through">{row.gulf}</td>
                    <td className="p-4 text-center text-[#C9A050] font-medium">{row.london}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Product Quality */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-light text-center mb-8">
              جودة <span className="text-[#C9A050]">المنتجات</span> — بدون تنازل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#C9A050] font-medium mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> ما نستخدمه
                </h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex gap-2"><span className="text-[#C9A050]">✓</span> Allergan Botox — المعيار الذهبي العالمي</li>
                  <li className="flex gap-2"><span className="text-[#C9A050]">✓</span> Juvederm Ultra & Voluma — فيلر بأعلى معايير السلامة</li>
                  <li className="flex gap-2"><span className="text-[#C9A050]">✓</span> Profhilo — حمض هيالورونيك نقي بتركيز 64mg</li>
                  <li className="flex gap-2"><span className="text-[#C9A050]">✓</span> منتجات مرخصة من MHRA البريطانية</li>
                  <li className="flex gap-2"><span className="text-[#C9A050]">✓</span> كل أمبولة تُفتح أمام المريض</li>
                </ul>
              </div>
              <div>
                <h3 className="text-red-400 font-medium mb-3 flex items-center gap-2">
                  ✕ ما لا نستخدمه أبداً
                </h3>
                <ul className="space-y-3 text-sm text-white/40">
                  <li className="flex gap-2"><span className="text-red-400">✕</span> بدائل رخيصة غير مرخصة</li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> منتجات مجهولة المصدر</li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> بوتوكس مخفف بشكل مفرط</li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> فيلر بأسعار "رخيصة جداً لتكون حقيقية"</li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> علاجات بدون إشراف طبي مباشر</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Your Visit */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
            <span className="text-[#C9A050]">خططي لزيارتك</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="text-[#C9A050] text-xl font-bold mb-3">📍</div>
              <h3 className="text-white font-medium mb-2">الموقع</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                8-10 هارلي ستريت، لندن W1G 9PF — قلب المنطقة الطبية الأعرق في العالم. على بعد دقائق من أكسفورد ستريت وماي فير والحدائق الملكية. يمكنك الجمع بين التسوق الفاخر والعلاج التجميلي في يوم واحد.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="text-[#C9A050] text-xl font-bold mb-3">🏨</div>
              <h3 className="text-white font-medium mb-2">الإقامة القريبة</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                فنادق فاخرة على بعد خطوات: The Langham, The Dorchester, Claridge's, The Connaught. جميعها على بعد أقل من 10 دقائق بالسيارة من عيادتنا في هارلي ستريت.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="text-[#C9A050] text-xl font-bold mb-3">✈️</div>
              <h3 className="text-white font-medium mb-2">نصائح السفر</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                معظم علاجاتنا لا تحتاج فترة تعافي. يمكنك السفر بالطائرة بعد 24 ساعة من البوتوكس و48 ساعة من الفيلر. ننصح بتحديد الموعد في بداية زيارتك.
              </p>
            </div>
          </div>
        </section>

        {/* Experience & Discretion */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light mb-6">
              تجربة <span className="text-[#C9A050]">هادئة وخاصة</span>
            </h2>
            <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              نفهم أن الخصوصية أولوية قصوى لمرضانا من الخليج. عيادتنا في هارلي ستريت مصممة لتوفير تجربة هادئة ومحترمة بالكامل. لا صور، لا ضجة، لا ضغط. الاستشارة طبية بحتة — مخصصة لك وحدك.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C9A050]" /> خصوصية تامة</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C9A050]" /> احترام ثقافي كامل</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C9A050]" /> لا ضغط للعلاج</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C9A050]" /> شرح طبي مفصل</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-[#C9A050]/20 rounded-2xl p-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#C9A050]" />
              <span className="text-white/60 text-sm" dir="ltr">8-10 Harley Street, London W1G 9PF</span>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">صيفك في لندن يستحق الأفضل</h2>
            <p className="text-sm text-white/50 mb-6 max-w-lg mx-auto">
              احجزي استشارتك المجانية الآن واستمتعي بتجربة تجميلية على مستوى عالمي. فريقنا الطبي جاهز لخدمتك بأعلى معايير الجودة والخصوصية.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ar/contact/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
                احجزي الآن <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <a href="https://wa.me/442071234567?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
                واتساب <Phone className="w-4 h-4" />
              </a>
              <Link to="/ar/prices/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
                الأسعار
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-xs text-white/30 leading-relaxed space-y-4">
            <h2 className="text-sm text-white/40 font-medium">عيادة تجميل للزائرين العرب في لندن — Cosmedocs هارلي ستريت</h2>
            <p>
              تُعد عيادة Cosmedocs في هارلي ستريت بلندن واحدة من أبرز العيادات التجميلية في المملكة المتحدة، وتتميز بخبرة تمتد لأكثر من 17 عاماً في مجال الطب التجميلي غير الجراحي. تأسست العيادة عام 2007 على يد الدكتور أحمد حق، وقد أجرت منذ ذلك الحين أكثر من مليون عملية حقن تجميلية، مما يجعلها من الرواد في هذا المجال على مستوى أوروبا. تقع العيادة في قلب المنطقة الطبية الأعرق في لندن، وتستقبل سنوياً مئات المرضى من دول الخليج العربي والشرق الأوسط، خاصة خلال فصل الصيف عندما يتدفق الزوار العرب إلى لندن للتسوق والسياحة.
            </p>
            <p>
              ما يميز Cosmedocs هو فلسفة "المليمتر" في العلاج التجميلي — حيث نؤمن أن التعديلات الدقيقة بالمليمتر في الأماكن الصحيحة تحقق نتائج أفضل بكثير من الحقن الكبيرة في الأماكن الخاطئة. هذه الفلسفة تضمن نتائج طبيعية وغير قابلة للاكتشاف، وهو ما يبحث عنه معظم المرضى العرب الذين يقدرون الأناقة الهادئة والجمال الخفي. نستخدم حصرياً منتجات أصلية مرخصة من أشهر العلامات التجارية العالمية مثل Allergan Botox و Juvederm، ولا نقبل أي بدائل أو منتجات مجهولة المصدر.
            </p>
            <p>
              تشمل خدماتنا التجميلية: حقن البوتوكس لخطوط الجبهة والعبوس وحول العينين، فيلر الشفاه الطبيعي بدون مبالغة، نحت خط الفك والذقن باستخدام فيلر الهيالورونيك، علاج الهالات الداكنة تحت العين، تجديد الوجه الكامل باستخدام تقنية HA Makeover الحصرية، وعلاجات تحفيز الكولاجين مثل Profhilo والبولينوكليوتيدات. كل هذه العلاجات يقوم بها أطباء متخصصون مسجلون في مجلس الأطباء البريطاني GMC، وليس ممرضات أو فنيين.
            </p>
            <p>
              بالنسبة للزائرين من السعودية والإمارات والكويت وقطر والبحرين وعمان والأردن ولبنان ومصر، تقدم Cosmedocs تجربة تجميلية فاخرة تجمع بين الخبرة البريطانية العريقة والاحترام الكامل للثقافة والخصوصية. العيادة قريبة من أفخم فنادق لندن ومناطق التسوق الراقية، مما يتيح للزائرات الجمع بين التسوق في هارودز ونايتسبريدج والعناية بالبشرة في هارلي ستريت خلال رحلة واحدة. نحن نفهم احتياجات البشرة العربية ونقدم خططاً علاجية مخصصة تأخذ بعين الاعتبار بنية الوجه العربي وخصائص البشرة السمراء وقابلية التصبغ.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="text-center py-6 text-xs text-white/20 px-4">
          تم إنشاء هذه الصفحة بمساعدة الذكاء الاصطناعي. ننصح بالتشاور مباشرة مع أطبائنا المختصين.
        </div>
      </div>
    </>
  );
}
