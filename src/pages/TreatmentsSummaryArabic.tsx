
import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PopularTreatments from "@/components/PopularTreatments";
import { generateSEOMetadata } from '@/utils/seo';

const TreatmentsSummaryArabic = () => {
  const seoData = generateSEOMetadata(
    "ملخص العلاجات | Cosmedocs لندن",
    "في عيادة Cosmedocs على شارع هارلي في لندن، نقدم علاجات تجميلية متخصصة بما في ذلك البوتوكس وحشوات الجلد ومحفزات البشرة.",
    "/treatments-summary-arabic"
  );
  
  // Define Arabic treatments with local descriptions
  const arabicTreatments = [
    {
      title: "البوتوكس",
      description: "حقن مكافحة التجاعيد لخطوط الجبهة وأقدام الغراب وخطوط العبوس",
      hasBeforeAfter: false
    },
    {
      title: "حشوات الجلد",
      description: "استعادة الحجم وتعزيز ملامح الوجه. رائد في تجديد الوجه بالكامل",
      hasBeforeAfter: false
    },
    {
      title: "حشوات الشفاه",
      description: "تعزيز طبيعي للشفاه لمظهر أكثر امتلاءً",
      hasBeforeAfter: false
    },
    {
      title: "تجميل الأنف بدون جراحة",
      description: "إعادة تشكيل الأنف بدون عملية جراحية",
      hasBeforeAfter: false
    },
    {
      title: "محفزات البشرة",
      description: "ترطيب عميق وتجديد البشرة",
      hasBeforeAfter: false
    },
    {
      title: "تحسين الذقن وخط الفك",
      description: "تحديد ملامح وجهك",
      hasBeforeAfter: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="العلاجات التجميلية, البوتوكس, حشوات الجلد, لندن, شارع هارلي" />
      </Helmet>
      <div className="bg-black text-white py-24" dir="rtl">
      <div className="page-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">ملخص العلاجات</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            كخبراء حقن ذوي خبرة عالية في لندن منذ عام 2007، نحن متخصصون في إعطاء جرعات عالية من البوتوكس بأمان 
            مما يوفر ديمومة النتائج. لقد طورنا العديد من التقنيات الجديدة مع حشوات الجلد خلال العقد الماضي 
            والتي يتم تدريسها الآن للمختصين دولياً. فريق خبرائنا هم أيضاً مدربون في معهد هارلي ستريت المرموق. 
            ثق بنا للحصول على نتائج آمنة وفعالة وذات مظهر طبيعي.
          </p>
        </div>

        {/* Popular Treatments Section using the new component */}
        <PopularTreatments 
          title="العلاجات الشائعة"
          treatments={arabicTreatments}
          showBeforeAfter={false}
          className="py-0"
        />

        {/* Treatment Categories */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "العلاجات بالحقن",
                items: ["البوتوكس", "حشوات الجلد", "حشوات الشفاه", "تحسين الذقن"],
                description: "علاجات تجميل متخصصة بالحقن"
              },
              {
                title: "نحت ملامح الوجه",
                items: ["تجميل الأنف بدون جراحة", "نحت خط الفك", "حشو الصدغ", "تحسين عظام الوجنتين"],
                description: "نحت دقيق لملامح الوجه"
              },
              {
                title: "علاجات البشرة",
                items: ["محفزات البشرة", "التقشير الكيميائي", "العلاج بالإبر الدقيقة", "علاج PRP"],
                description: "تحسين نسيج البشرة وإشراقها"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full ml-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <div className="bg-accent rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">هل أنت مستعد لاكتشاف جمالك المتقن؟</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              احجز استشارة مع أطبائنا الخبراء وابدأ رحلتك نحو التحول الدقيق والمسيطر عليه.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
              احجز الآن
            </Button>
          </div>
        </section>

        {/* AI Disclaimer */}
        <section className="py-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              إخلاء مسؤولية: تم إنشاء محتوى هذه الصفحة بمساعدة الذكاء الاصطناعي
            </p>
            <p className="text-xs text-gray-600">
              تم إنشاء وترجمة صفحة معلومات العلاجات باللغة العربية هذه بمساعدة الذكاء الاصطناعي. 
              بينما نسعى لضمان الدقة، ننصح بالتشاور مباشرة مع أطبائنا المختصين للحصول على أدق المعلومات 
              والنصائح الشخصية قبل اتخاذ أي قرارات علاجية.
            </p>
          </div>
        </section>

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            كوزميدوكس عيادة التجميل في هارلي ستريت لندن تقدم علاجات طبية تجميلية متخصصة تشمل حقن البوتوكس وحشوات الجلد وحشوات الشفاه وتجميل الأنف بدون جراحة ومحفزات البشرة. منذ تأسيسها عام 2007، أجرت أكثر من مليون حقنة وهي من الرواد في مجال الطب التجميلي في لندن. تقع عيادتنا في هارلي ستريت رقم 10، وتقدم حلول تجميل شخصية باستخدام أحدث التقنيات والمنتجات عالية الجودة. فريقنا المتخصص ملتزم بتقديم نتائج تجميل طبيعية وآمنة وفعالة للعملاء. سواء كنت تبحث عن علاجات مكافحة الشيخوخة أو نحت ملامح الوجه أو تحسين جودة البشرة، يمكننا تقديم الخدمات الأكثر احترافية لك. يرجى الاتصال بنا على 0333 0551 503 أو إرسال بريد إلكتروني إلى info@cosmedocs.com للتواصل معنا وبدء رحلة جمالك. فلسفة العلاج لدينا هي "الفن غير المرئي"، مما يضمن أن كل عميل يحصل على تأثيرات جمال طبيعية تتناسب مع احتياجاته الشخصية.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TreatmentsSummaryArabic;
