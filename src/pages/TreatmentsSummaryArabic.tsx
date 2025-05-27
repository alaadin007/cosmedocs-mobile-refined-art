
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "../App";

export default function TreatmentsSummaryArabic() {
  const seoData = generateSEOMetadata(
    "ملخص العلاجات التجميلية - عيادة كوزميدوكس لندن",
    "دليل شامل لجميع العلاجات التجميلية المتقدمة في عيادة كوزميدوكس لندن. البوتوكس، الفيلر، تجديد البشرة، وعلاجات طبية متخصصة. احجز استشارتك اليوم.",
    "/treatments-summary-arabic"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="عيادة تجميل لندن، البوتوكس، الفيلر، تجديد البشرة، علاجات تجميلية، هارلي ستريت، كوزميدوكس، عمليات تجميل، علاج طبي تجميلي، السعودية، الإمارات، دبي، الكويت" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "كوزميدوكس - عيادة الطب التجميلي",
              "alternateName": "Cosmedocs London",
              "url": "https://cosmedocs.com/treatments-summary-arabic",
              "logo": "https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png",
              "description": "عيادة رائدة في مجال الطب التجميلي في لندن هارلي ستريت، نقدم أحدث العلاجات التجميلية للمرضى من الشرق الأوسط",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8-10 Harley Street",
                "addressLocality": "London",
                "postalCode": "W1G 9PF",
                "addressCountry": "UK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.5174,
                "longitude": -0.1478
              },
              "medicalSpecialty": [
                "علاج البوتوكس",
                "حقن الفيلر",
                "تجديد البشرة",
                "العلاج الطبي التجميلي"
              ],
              "areaServed": ["السعودية", "الإمارات", "الكويت", "قطر", "البحرين", "عمان"],
              "priceRange": "£££"
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-container py-20"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              دليل العلاجات التجميلية الشامل
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف أحدث العلاجات التجميلية في عيادة كوزميدوكس لندن هارلي ستريت - الخيار الأول للمرضى من المملكة العربية السعودية ودولة الإمارات العربية المتحدة
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none text-right">
                <h2 className="text-3xl font-bold text-black mb-6">لماذا تختار كوزميدوكس لندن؟</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  منذ عام 2007، تقدم عيادة كوزميدوكس في هارلي ستريت بلندن أرقى العلاجات التجميلية لأكثر من مليون مريض. نحن نفهم احتياجات المرضى من المنطقة العربية ونقدم خدمات متخصصة تلبي أعلى معايير الجودة والأمان. فريقنا من الأطباء المختصين يضمن لك الحصول على أفضل النتائج الطبيعية المظهر.
                </p>

                <h3 className="text-2xl font-bold text-black mb-4">علاجات الوجه المتقدمة</h3>
                
                <p className="text-gray-700 mb-4">
                  نقدم مجموعة شاملة من علاجات الوجه التي تهدف إلى تجديد شباب البشرة واستعادة نضارتها الطبيعية. من أبرز علاجاتنا:
                </p>

                <h4 className="text-xl font-semibold text-black mb-3">حقن البوتوكس</h4>
                <p className="text-gray-700 mb-4">
                  البوتوكس هو العلاج الأمثل للتخلص من التجاعيد الديناميكية، خاصة في منطقة الجبهة وحول العينين. نستخدم أحدث التقنيات لضمان نتائج طبيعية تدوم لفترة طويلة. العلاج آمن وفعال، ولا يتطلب فترة نقاهة طويلة.
                </p>

                <h4 className="text-xl font-semibold text-black mb-3">
                  <Link to="/dermal-filler-makeover" className="text-black hover:text-gray-700">
                    حقن الفيلر التجميلية
                  </Link>
                </h4>
                <p className="text-gray-700 mb-4">
                  الفيلر يعيد الحجم المفقود للوجه ويملأ الخطوط والتجاعيد العميقة. نستخدم أجود أنواع حمض الهيالورونيك لتحقيق نتائج طبيعية ومتناسقة. يمكن استخدام الفيلر لتحسين شكل الشفاه، رفع الخدود، وتحديد خط الفك.
                </p>

                <h3 className="text-2xl font-bold text-black mb-4">العلاجات الطبية المتخصصة</h3>
                
                <p className="text-gray-700 mb-4">
                  نقدم أيضاً علاجات طبية متخصصة تلبي احتياجات المرضى الخاصة، مع الحفاظ على أعلى معايير الخصوصية والأمان:
                </p>

                <h4 className="text-xl font-semibold text-black mb-3">
                  <Link to="/medical-anal-bleaching" className="text-black hover:text-gray-700">
                    العلاج الطبي لتفتيح المناطق الحساسة
                  </Link>
                </h4>
                <p className="text-gray-700 mb-4">
                  علاج طبي متقدم وآمن لتفتيح المناطق الحساسة باستخدام أحدث التقنيات الطبية. يتم تنفيذ العلاج في بيئة طبية معقمة تحت إشراف أطباء مختصين، مع ضمان الخصوصية التامة والنتائج المرضية.
                </p>

                <h3 className="text-2xl font-bold text-black mb-4">علاجات تجديد البشرة</h3>
                
                <p className="text-gray-700 mb-4">
                  نوفر أحدث تقنيات تجديد البشرة التي تعمل على تحسين ملمس البشرة ولونها، بما في ذلك علاجات الليزر، التقشير الكيميائي، والعلاجات الضوئية. هذه العلاجات فعالة في علاج آثار حب الشباب، التصبغات، والخطوط الدقيقة.
                </p>

                <h3 className="text-2xl font-bold text-black mb-4">لماذا يختارنا المرضى من الشرق الأوسط؟</h3>
                
                <p className="text-gray-700 mb-4">
                  نفهم الثقافة العربية واحتياجات المرضى من المملكة العربية السعودية، دولة الإمارات العربية المتحدة، والكويت. نقدم:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>استشارات مجانية مع أطباء متخصصين</li>
                  <li>خطط علاج مخصصة حسب احتياجاتك</li>
                  <li>أحدث التقنيات والمعدات الطبية</li>
                  <li>بيئة مريحة وآمنة في قلب لندن</li>
                  <li>متابعة طبية شاملة بعد العلاج</li>
                  <li>مرافق راقية في هارلي ستريت الشهير</li>
                </ul>

                <h3 className="text-2xl font-bold text-black mb-4">سلامة المرضى أولويتنا</h3>
                
                <p className="text-gray-700 mb-4">
                  نضع سلامة مرضانا في المقدمة دائماً. جميع إجراءاتنا تتم وفقاً لأعلى المعايير الطبية البريطانية، ونستخدم فقط المنتجات المعتمدة من هيئة الأدوية البريطانية. فريقنا الطبي يخضع لتدريب مستمر لضمان تقديم أفضل رعاية ممكنة.
                </p>

                <h3 className="text-2xl font-bold text-black mb-4">احجز استشارتك اليوم</h3>
                
                <p className="text-gray-700 mb-6">
                  لا تتردد في التواصل معنا لحجز استشارة مجانية. سنكون سعداء لمناقشة احتياجاتك ووضع خطة علاج مناسبة لك. نرحب بالمرضى من جميع أنحاء الشرق الأوسط ونقدم خدمات ترجمة عند الحاجة.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-black mb-3">معلومات مهمة للمرضى الدوليين</h4>
                  <p className="text-gray-700 mb-2">
                    نساعد المرضى من خارج المملكة المتحدة في ترتيب زيارتهم، بما في ذلك:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>تنسيق المواعيد حسب جدول سفرك</li>
                    <li>توصيات للإقامة القريبة من العيادة</li>
                    <li>معلومات عن التأشيرات الطبية</li>
                    <li>خدمات النقل من وإلى المطار</li>
                  </ul>
                </div>

                {/* Hidden SEO Content */}
                <div className="hidden">
                  <h4>محتوى إضافي للسيو</h4>
                  <p>
                    عيادة كوزميدوكس في لندن هارلي ستريت تقدم أفضل العلاجات التجميلية للمرضى من المملكة العربية السعودية والإمارات العربية المتحدة. نحن متخصصون في البوتوكس، الفيلر، تجديد البشرة، والعلاجات الطبية المتقدمة. خبرة أكثر من 15 عام في مجال الطب التجميلي مع أكثر من مليون حقنة آمنة. أطباؤنا معتمدون من الجمعية البريطانية للطب التجميلي ويستخدمون أحدث التقنيات المتاحة. نوفر بيئة آمنة ومريحة مع احترام كامل للخصوصية والثقافة العربية. العيادة تقع في قلب هارلي ستريت الطبي في لندن، المنطقة الأكثر شهرة للعلاجات الطبية في أوروبا. نرحب بالمرضى من الرياض، جدة، الدمام، دبي، أبوظبي، الشارقة، الكويت، الدوحة، والمنامة. استشارات مجانية متاحة عبر الهاتف أو الفيديو كول. نقدم خططاً علاجية مخصصة لكل مريض حسب احتياجاته الفردية. جميع المنتجات المستخدمة معتمدة من هيئة الأدوية البريطانية ومن أفضل الشركات العالمية. النتائج طبيعية ومضمونة مع متابعة طبية شاملة بعد العلاج.
                  </p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-bold text-black mb-4">العلاجات المتوفرة</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/dermal-filler-makeover" className="text-black hover:text-gray-700 font-medium">
                      → مكياج الفيلر التجميلي
                    </Link>
                  </li>
                  <li>
                    <Link to="/medical-anal-bleaching" className="text-black hover:text-gray-700 font-medium">
                      → العلاج الطبي لتفتيح المناطق الحساسة
                    </Link>
                  </li>
                  <li>
                    <Link to="/treatments" className="text-black hover:text-gray-700 font-medium">
                      → جميع العلاجات
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-black hover:text-gray-700 font-medium">
                      → احجز استشارة مجانية
                    </Link>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-black text-white rounded-lg text-center">
                  <h4 className="font-bold mb-2">احجز الآن</h4>
                  <p className="text-sm mb-3">استشارة مجانية</p>
                  <a 
                    href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-colors"
                  >
                    احجز موعدك
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
