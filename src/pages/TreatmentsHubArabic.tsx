import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';

const hreflangLinks = generateHreflangLinks('treatments');
const canonical = getCanonicalUrl('ar', 'treatments');

interface TreatmentCategory {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  items: string[];
}

const treatmentCategories: TreatmentCategory[] = [
  {
    title: "البوتوكس ومضادات التجاعيد",
    subtitle: "تعديل العضلات والوقاية",
    description: "حقن دقيقة لمضادات التجاعيد للخطوط الديناميكية ونحت الوجه والحالات الطبية. يتم إجراؤها بواسطة أطباء خبراء منذ عام 2007.",
    link: "/ar/treatments/botox/",
    items: ["خطوط الجبهة والعبوس ورجل الغراب", "قلب الشفاه والابتسامة اللثوية", "عضلة الفك وتنحيف الوجه", "رفع نفرتيتي", "البوتوكس الطبي (الصداع النصفي، التعرق)"],
  },
  {
    title: "حقن الفيلر",
    subtitle: "الحجم والبنية والنحت",
    description: "فيلر حمض الهيالورونيك لاستعادة الحجم الطبيعي ونحت الوجه وعكس علامات التقدم في السن. خطط علاج مخصصة لكل وجه.",
    link: "/ar/treatments/dermal-fillers/",
    items: ["فيلر الشفاه", "فيلر الخدود والذقن وخط الفك", "تجميل الأنف بدون جراحة", "فيلر تحت العين", "مكياج HA (الوجه الكامل)"],
  },
  {
    title: "تجديد البشرة",
    subtitle: "التجديد والإشراق والإصلاح",
    description: "علاجات طبية متقدمة لاستعادة الترطيب وتحفيز الكولاجين وتنقية الملمس.",
    link: "/ar/treatments/skin-rejuvenation/",
    items: ["بروفايلو", "البولينوكليوتيدات", "هيدرافيشال", "ميكرونيدلينج وPRP", "التقشير الكيميائي"],
  },
  {
    title: "علاجات الليزر",
    subtitle: "علاج دقيق بالضوء",
    description: "علاجات ليزر متقدمة لتجديد سطح البشرة وتصحيح التصبغ وإزالة الشعر وتقليل الندبات.",
    link: "/treatments/laser/",
    items: ["ليزر CO₂", "بيكو ليزر", "إزالة الشعر بالليزر", "تقليل الندبات"],
  },
  {
    title: "خيوط PDO",
    subtitle: "الشد غير الجراحي",
    description: "خيوط PDO القابلة للامتصاص لشد الأنسجة وشد الجلد وتحفيز الكولاجين.",
    link: "/treatments/pdo-threads/",
    items: ["شد الوجه بالخيوط", "خيوط الأنف غير الجراحية", "تحديد خط الفك"],
  },
  {
    title: "البوتوكس الطبي",
    subtitle: "التطبيقات العلاجية",
    description: "علاجات توكسين البوتولينوم القائمة على الأدلة للحالات الطبية بما في ذلك الصداع النصفي المزمن وفرط التعرق وصرير الأسنان.",
    link: "/medical/",
    items: ["تخفيف الصداع النصفي", "التعرق المفرط", "صرير الأسنان", "العلاج بنقاط الزناد"],
  },
  {
    title: "الجراحة التجميلية",
    subtitle: "إجراءات جراحية متخصصة",
    description: "جراحة تجميلية شاملة يجريها جراحون تجميل مؤهلون بأعلى معايير الرعاية.",
    link: "/plastic-surgeon/",
    items: ["تجميل الأنف", "جراحة الجفون", "شد الوجه", "شفط الدهون"],
  },
  {
    title: "الأمراض الجلدية",
    subtitle: "صحة الجلد الطبية والتجميلية",
    description: "خدمات صحة الجلد بإشراف استشاري أمراض جلدية للحالات الطبية والفحص والأمراض الجلدية التجميلية المتقدمة.",
    link: "/dermatology/",
    items: ["علاج حب الشباب والوردية", "إزالة الشامات والزوائد الجلدية", "الصدفية والأكزيما", "تصحيح التصبغ"],
  },
];

const TreatmentsHubArabic = () => {
  return (
    <>
      <Helmet>
        <title>علاجات التجميل لندن | كوزمي دوكس هارلي ستريت</title>
        <meta name="description" content="اكتشف مجموعتنا الكاملة من العلاجات التجميلية بإشراف الأطباء. البوتوكس، الفيلر، تجديد البشرة، الليزر والجراحة التجميلية في هارلي ستريت، لندن." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://www.cosmedocs.com/#organization",
                name: "Cosmedocs",
                url: "https://www.cosmedocs.com/ar/treatments/",
              },
              {
                "@type": "CollectionPage",
                "@id": "https://www.cosmedocs.com/ar/treatments/",
                name: "علاجات التجميل",
                inLanguage: "ar",
                description: "مجموعة كاملة من العلاجات التجميلية بإشراف الأطباء في هارلي ستريت، لندن.",
                isPartOf: { "@id": "https://www.cosmedocs.com/#website" },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://www.cosmedocs.com/ar/" },
                  { "@type": "ListItem", position: 2, name: "العلاجات", item: "https://www.cosmedocs.com/ar/treatments/" },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <div dir="rtl" className="bg-black text-white min-h-screen">
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A050]/[0.04] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A050]/[0.03] blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="التنقل">
              <Link to="/ar/" className="hover:text-[#C9A050] transition-colors">الرئيسية</Link>
              <span>/</span>
              <span className="text-white/60">العلاجات</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">فن التجميل الخفي</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-6">العلاجات</h1>
              <p className="text-base sm:text-lg text-white/60 font-extralight leading-relaxed max-w-2xl">
                من الحقن الدقيقة إلى علوم البشرة المتقدمة — كل علاج في كوزمي دوكس مصمم للتعزيز وليس المبالغة. استكشف مجموعتنا الكاملة أدناه.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
                {["منذ 2007", "هارلي ستريت", "بإشراف الأطباء"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-10">
                <Link to="/ar/prices/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  دليل الأسعار <ArrowRight className="w-4 h-4 rotate-180" />
                </Link>
                <Link to="/ar/contact/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  حجز استشارة
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatmentCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link to={cat.link} className="group block bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#C9A050] transition-colors">{cat.title}</h2>
                      <p className="text-xs text-[#C9A050]/70 uppercase tracking-wider mt-1">{cat.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#C9A050] transition-colors mt-1 flex-shrink-0 rotate-180" />
                  </div>
                  <p className="text-sm text-white/50 font-extralight leading-relaxed mb-5">{cat.description}</p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-xs text-[#C9A050] uppercase tracking-[0.2em] mb-3">أسعار شفافة</p>
            <p className="text-2xl sm:text-3xl font-extralight text-white mb-4">دليل الأسعار الكامل</p>
            <p className="text-sm text-white/50 font-extralight max-w-xl mx-auto mb-6">اطلع على قائمة الأسعار الكاملة والشفافة لجميع فئات العلاج. بدون تكاليف مخفية.</p>
            <Link to="/ar/prices/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
              عرض جميع الأسعار <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>
            تقدم كوزمي دوكس مجموعة شاملة من العلاجات التجميلية في عيادتنا بشارع هارلي في لندن. تشمل محفظة العلاج لدينا حقن مضادات التجاعيد باستخدام توكسين البوتولينوم للخطوط الديناميكية في الوجه. نحن متخصصون في نحت الوجه المتقدم باستخدام حقن الفيلر الجلدي بما في ذلك فيلر الشفاه وفيلر الخدود وفيلر خط الفك وفيلر الذقن وفيلر تحت العين وتجميل الأنف بدون جراحة. تشمل علاجات تجديد البشرة لدينا بروفايلو والعلاج بالبولينوكليوتيدات وهيدرافيشال والميكرونيدلينج مع PRP والتقشير الكيميائي الطبي.
          </p>
        </div>
      </div>
    </>
  );
};

export default TreatmentsHubArabic;
