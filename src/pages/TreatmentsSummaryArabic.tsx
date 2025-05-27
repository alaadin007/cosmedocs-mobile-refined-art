
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "../App";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

export default function TreatmentsSummaryArabic() {
  const seoData = generateSEOMetadata(
    "ملخص العلاجات التجميلية - عيادة كوزميدوكس لندن",
    "دليل شامل لجميع العلاجات التجميلية المتقدمة في عيادة كوزميدوكس لندن. البوتوكس، الفيلر، تجديد البشرة، وعلاجات طبية متخصصة. احجز استشارتك اليوم.",
    "/treatments-summary-arabic"
  );

  // Before/after image arrays for each treatment
  const botoxBeforeAfterImages = [
    { 
      src: "/lovable-uploads/36b15e21-1905-49d8-b920-68bc23b235c5.png", 
      alt: "البوتوكس قبل العلاج", 
      caption: "نتائج علاج البوتوكس - قبل وبعد العلاج لإزالة التجاعيد من الجبهة ومنطقة العينين" 
    }
  ];
  
  const dermalFillerBeforeAfterImages = [
    { 
      src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png", 
      alt: "الفيلر قبل العلاج", 
      caption: "نتائج حقن الفيلر - تحسين شكل الوجه واستعادة الحجم المفقود" 
    }
  ];
  
  const lipFillerBeforeAfterImages = [
    { 
      src: "/lovable-uploads/984ff472-7676-48a9-a57e-c23ca2592741.png", 
      alt: "فيلر الشفاه قبل العلاج", 
      caption: "نتائج فيلر الشفاه - تحسين شكل وحجم الشفاه بطريقة طبيعية" 
    }
  ];
  
  const noseJobBeforeAfterImages = [
    { 
      src: "/lovable-uploads/8fc7a776-c255-4ca9-a8d9-573f4083b7f1.png", 
      alt: "تجميل الأنف بدون جراحة قبل العلاج", 
      caption: "نتائج تجميل الأنف بدون جراحة - تحسين شكل الأنف بالفيلر" 
    }
  ];
  
  const skinBoosterBeforeAfterImages = [
    { 
      src: "/lovable-uploads/0146916c-8864-4889-b0d5-b330859a2c85.png", 
      alt: "منشطات البشرة قبل العلاج", 
      caption: "نتائج منشطات البشرة - ترطيب عميق وتجديد للبشرة" 
    }
  ];
  
  const chinAndJawlineEnhancementImages = [
    { 
      src: "/lovable-uploads/1c08600a-b561-48ca-ae0a-246717da30a7.png", 
      alt: "تحسين الذقن وخط الفك قبل العلاج", 
      caption: "نتائج تحسين الذقن وخط الفك - تحديد ملامح الوجه" 
    }
  ];

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

                <h3 className="text-2xl font-bold text-black mb-6">العلاجات الشائعة - النتائج قبل وبعد</h3>

                <Accordion type="single" collapsible className="w-full mb-8">
                  <AccordionItem value="botox" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">البوتوكس - علاج التجاعيد</span>
                        <BeforeAfterImageViewer 
                          images={botoxBeforeAfterImages}
                          triggerLabel="شاهد النتائج"
                          title="نتائج البوتوكس"
                          description="النتائج المحققة بعلاجات البوتوكس المتقدمة"
                          className="mr-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          البوتوكس هو العلاج الأمثل للتخلص من التجاعيد الديناميكية، خاصة في منطقة الجبهة وحول العينين والخطوط بين الحاجبين. يعمل البوتوكس على إرخاء العضلات المسؤولة عن تكوين التجاعيد، مما يؤدي إلى ظهور بشرة أكثر نعومة وشباباً.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li>يستغرق العلاج 10-15 دقيقة فقط</li>
                          <li>النتائج تظهر خلال 3-7 أيام</li>
                          <li>يدوم التأثير من 4-6 أشهر</li>
                          <li>لا توجد فترة نقاهة مطلوبة</li>
                          <li>آمن وفعال مع خبراء معتمدين</li>
                        </ul>
                        <p className="text-gray-700">
                          نستخدم في كوزميدوكس أفضل أنواع البوتوكس المعتمدة عالمياً، ويقوم أطباؤنا المختصون بحقن دقيق يضمن الحصول على نتائج طبيعية تحافظ على تعابير الوجه الطبيعية.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="dermal-fillers" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">الفيلر التجميلي - استعادة الحجم</span>
                        <BeforeAfterImageViewer 
                          images={dermalFillerBeforeAfterImages}
                          triggerLabel="شاهد النتائج"
                          title="نتائج الفيلر التجميلي"
                          description="النتائج المحققة بعلاجات الفيلر المتقدمة"
                          className="mr-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          <Link to="/dermal-filler-makeover" className="text-black hover:text-gray-700 font-medium">
                            الفيلر التجميلي
                          </Link> يعيد الحجم المفقود للوجه ويملأ الخطوط والتجاعيد العميقة. نستخدم أجود أنواع حمض الهيالورونيك الطبيعي لتحقيق نتائج فورية وطبيعية تدوم لفترة طويلة.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">مناطق العلاج:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>الخدود وتحت العينين</li>
                              <li>الطيات الأنفية الشفهية</li>
                              <li>حول الفم والذقن</li>
                              <li>خط الفك والصدغين</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">المزايا:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>نتائج فورية وطبيعية</li>
                              <li>يدوم من 12-18 شهر</li>
                              <li>قابل للعكس إذا لزم الأمر</li>
                              <li>تحفيز إنتاج الكولاجين</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          فريقنا في كوزميدوكس متخصص في تقنية "التجديد الشامل للوجه" التي تعيد التوازن الطبيعي لملامح الوجه وتحقق مظهراً شاباً ومنتعشاً.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lip-fillers" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">فيلر الشفاه - تحسين طبيعي</span>
                        <BeforeAfterImageViewer 
                          images={lipFillerBeforeAfterImages}
                          triggerLabel="شاهد النتائج"
                          title="نتائج فيلر الشفاه"
                          description="النتائج المحققة بعلاجات فيلر الشفاه المتقدمة"
                          className="mr-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          فيلر الشفاه يحسن شكل وحجم الشفاه بطريقة طبيعية ومتناسقة. نستخدم تقنيات حديثة تضمن الحصول على شفاه ممتلئة وجذابة مع الحفاظ على الشكل الطبيعي.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">أنواع العلاج:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>زيادة حجم الشفاه</li>
                              <li>تحديد حواف الشفاه</li>
                              <li>تصحيح عدم التناسق</li>
                              <li>إزالة التجاعيد حول الفم</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">التقنيات المستخدمة:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>تقنية النقاط المتعددة</li>
                              <li>التدليك الفوري</li>
                              <li>استخدام الكانيولا الآمنة</li>
                              <li>تخدير موضعي للراحة</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          نركز في كوزميدوكس على تحقيق نتائج تتناسب مع ملامح وجهك الطبيعية، مع ضمان الحصول على شفاه جميلة وطبيعية المظهر.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nose-job" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">تجميل الأنف بدون جراحة</span>
                        <BeforeAfterImageViewer 
                          images={noseJobBeforeAfterImages}
                          triggerLabel="شاهد النتائج"
                          title="نتائج تجميل الأنف بدون جراحة"
                          description="النتائج المحققة بتجميل الأنف بالفيلر"
                          className="mr-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          تجميل الأنف بدون جراحة هو إجراء سريع وآمن يحسن شكل الأنف باستخدام الفيلر. يمكن من خلاله تصحيح المشاكل البسيطة والحصول على أنف أكثر تناسقاً دون الحاجة لعملية جراحية.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">المشاكل التي يعالجها:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>النتوءات الصغيرة في جسر الأنف</li>
                              <li>تحسين شكل طرف الأنف</li>
                              <li>رفع طرف الأنف المتدلي</li>
                              <li>تصحيح عدم التناسق</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">مزايا العلاج:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>بدون جراحة أو تخدير عام</li>
                              <li>النتائج فورية</li>
                              <li>العودة للحياة الطبيعية فوراً</li>
                              <li>قابل للتعديل أو الإزالة</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          يتطلب هذا الإجراء خبرة عالية ودقة في الحقن، وهذا ما يميز أطباء كوزميدوكس الذين يتمتعون بسنوات من الخبرة في هذا المجال المتخصص.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="skin-boosters" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">منشطات البشرة - ترطيب عميق</span>
                        <BeforeAfterImageViewer 
                          images={skinBoosterBeforeAfterImages}
                          triggerLabel="شاهد النتائج"
                          title="نتائج منشطات البشرة"
                          description="النتائج المحققة بعلاجات منشطات البشرة"
                          className="mr-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          منشطات البشرة توفر ترطيباً عميقاً وتجديداً للبشرة من الداخل. تحقن كميات صغيرة من حمض الهيالورونيك المخفف في طبقات البشرة السطحية لتحسين ملمسها ونعومتها وإشراقها.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">فوائد العلاج:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>ترطيب عميق وطويل الأمد</li>
                              <li>تحسين ملمس البشرة ونعومتها</li>
                              <li>زيادة إشراق البشرة</li>
                              <li>تحفيز إنتاج الكولاجين الطبيعي</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">المناطق المناسبة:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>الوجه بالكامل</li>
                              <li>الرقبة والصدر</li>
                              <li>اليدين</li>
                              <li>المناطق الحساسة</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          يُنصح بعمل سلسلة من 2-3 جلسات للحصول على أفضل النتائج، مع جلسات متابعة كل 6-9 أشهر للحفاظ على النتائج المحققة.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="chin-jawline" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">تحسين الذقن وخط الفك</span>
                        <BeforeAfterImageViewer 
                          images={chinAndJawlineEnhancementImages}
                          triggerLabel="شاهد النتائج"
                          title="نتائج تحسين الذقن وخط الفك"
                          description="النتائج المحققة بتحسين الذقن وخط الفك"
                          className="mr-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          تحسين الذقن وخط الفك يحدد ملامح الوجه ويعطي مظهراً أكثر قوة وجاذبية. يستخدم الفيلر لإضافة الحجم والتحديد، بينما يستخدم البوتوكس لشد وتحديد خط الفك.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">تحسين الذقن:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>إضافة الحجم للذقن الصغير</li>
                              <li>تحسين نسب الوجه</li>
                              <li>تصحيح عدم التناسق</li>
                              <li>تحديد الذقن المزدوج</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">تحديد خط الفك:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>شد وتحديد خط الفك</li>
                              <li>تقليل علامات الشيخوخة</li>
                              <li>تحسين شكل الوجه البيضاوي</li>
                              <li>إضافة الحزم والجاذبية</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          هذا العلاج يحتاج إلى خبرة عالية في فهم تشريح الوجه وتحقيق التوازن بين جميع ملامح الوجه للحصول على نتيجة طبيعية ومتناسقة.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

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

                <h3 className="text-2xl font-bold text-black mb-4">فلسفة العلاج في كوزميدوكس</h3>
                
                <p className="text-gray-700 mb-4">
                  نؤمن في كوزميدوكس بأن أفضل العلاجات التجميلية هي التي لا يلاحظها أحد. نركز على تحقيق نتائج طبيعية تبرز جمالك الطبيعي دون المبالغة أو الإفراط. فلسفتنا تقوم على ثلاثة محاور أساسية:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-black mb-2">01. تنظيف البشرة</h4>
                    <p className="text-sm text-gray-700">معالجة اللون غير المتجانس، التصبغات، المسام، والملمس للحصول على أساس مثالي.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-black mb-2">02. التجاعيد الحركية</h4>
                    <p className="text-sm text-gray-700">استهداف التجاعيد الديناميكية مع الحفاظ على التعابير الطبيعية والحركة.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-black mb-2">03. فقدان الحجم والترهل</h4>
                    <p className="text-sm text-gray-700">استعادة الخطوط الشبابية من خلال معالجة فقدان الحجم الهيكلي وترهل الجلد.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">لماذا يختارنا المرضى من الشرق الأوسط؟</h3>
                
                <p className="text-gray-700 mb-4">
                  نفهم الثقافة العربية واحتياجات المرضى من المملكة العربية السعودية، دولة الإمارات العربية المتحدة، والكويت. نقدم:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>استشارات مجانية مع أطباء متخصصين يتحدثون العربية</li>
                  <li>خطط علاج مخصصة حسب احتياجاتك وطبيعة بشرتك</li>
                  <li>أحدث التقنيات والمعدات الطبية المعتمدة عالمياً</li>
                  <li>بيئة مريحة وآمنة في قلب لندن الطبي</li>
                  <li>متابعة طبية شاملة بعد العلاج عبر الهاتف أو الفيديو</li>
                  <li>مرافق راقية في هارلي ستريت الشهير</li>
                  <li>احترام كامل للخصوصية والثقافة العربية</li>
                  <li>خدمات ترجمة متوفرة عند الحاجة</li>
                </ul>

                <h3 className="text-2xl font-bold text-black mb-4">تقنيات متقدمة وآمنة</h3>
                
                <p className="text-gray-700 mb-4">
                  نستخدم في كوزميدوكس أحدث التقنيات والمعدات الطبية لضمان الحصول على أفضل النتائج:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">تقنيات الحقن المتقدمة:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>الحقن بالكانيولا المرنة لتقليل الكدمات</li>
                      <li>تقنية النقاط المتعددة للتوزيع المتجانس</li>
                      <li>التبريد الفوري لتقليل الألم</li>
                      <li>التدليك الطبي لتحقيق النتيجة المثالية</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">معايير السلامة:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>منتجات معتمدة من هيئة الأدوية البريطانية</li>
                      <li>بيئة معقمة وفقاً لأعلى المعايير</li>
                      <li>فريق طبي معتمد ومدرب بانتظام</li>
                      <li>بروتوكولات صارمة لضمان سلامة المرضى</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">خدمات ما بعد العلاج</h3>
                
                <p className="text-gray-700 mb-4">
                  رعايتنا لك لا تنتهي بانتهاء جلسة العلاج. نقدم خدمات متابعة شاملة تشمل:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>مكالمات متابعة خلال 24-48 ساعة من العلاج</li>
                  <li>استشارات مجانية عبر الهاتف أو الفيديو</li>
                  <li>تعليمات مفصلة للعناية بالبشرة بعد العلاج</li>
                  <li>جدولة المواعيد المستقبلية حسب الحاجة</li>
                  <li>خدمة طوارئ على مدار 24 ساعة</li>
                  <li>نصائح للحفاظ على النتائج لأطول فترة ممكنة</li>
                </ul>

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
                    <li>ترجمة التقارير الطبية عند الحاجة</li>
                    <li>تنسيق مع أطبائك في بلدك الأصلي</li>
                  </ul>
                </div>

                {/* Hidden SEO Content */}
                <div className="hidden">
                  <h4>محتوى إضافي للسيو</h4>
                  <p>
                    عيادة كوزميدوكس في لندن هارلي ستريت تقدم أفضل العلاجات التجميلية للمرضى من المملكة العربية السعودية والإمارات العربية المتحدة والكويت وقطر والبحرين وعمان. نحن متخصصون في البوتوكس، الفيلر، تجديد البشرة، فيلر الشفاه، تجميل الأنف بدون جراحة، منشطات البشرة، تحسين الذقن وخط الفك، والعلاجات الطبية المتقدمة. خبرة أكثر من 15 عام في مجال الطب التجميلي مع أكثر من مليون حقنة آمنة. أطباؤنا معتمدون من الجمعية البريطانية للطب التجميلي ويستخدمون أحدث التقنيات المتاحة. نوفر بيئة آمنة ومريحة مع احترام كامل للخصوصية والثقافة العربية. العيادة تقع في قلب هارلي ستريت الطبي في لندن، المنطقة الأكثر شهرة للعلاجات الطبية في أوروبا. نرحب بالمرضى من الرياض، جدة، الدمام، مكة، المدينة، الطائف، دبي، أبوظبي، الشارقة، عجمان، العين، الكويت، الدوحة، المنامة، مسقط. استشارات مجانية متاحة عبر الهاتف أو الفيديو كول. نقدم خططاً علاجية مخصصة لكل مريض حسب احتياجاته الفردية وطبيعة بشرته. جميع المنتجات المستخدمة معتمدة من هيئة الأدوية البريطانية ومن أفضل الشركات العالمية مثل Allergan وGalderma وMerz. النتائج طبيعية ومضمونة مع متابعة طبية شاملة بعد العلاج. علاجات البوتوكس تشمل الجبهة، حول العينين، بين الحاجبين، وحقن التعرق الزائد. علاجات الفيلر تشمل الخدود، تحت العينين، الشفاه، الذقن، الأنف، وخط الفك. نقدم أيضاً علاجات متخصصة للمناطق الحساسة مع ضمان الخصوصية التامة. فريقنا الطبي يتكون من أطباء معتمدين ومدربين على أعلى مستوى في مجال الطب التجميلي. نستخدم أحدث التقنيات في الحقن بما في ذلك الكانيولا المرنة والتبريد الفوري لتقليل الألم والكدمات. جميع العلاجات تتم في بيئة طبية معقمة وفقاً لأعلى المعايير الدولية.
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

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">اتصل بنا</h4>
                  <p className="text-sm text-gray-700 mb-2">للاستفسار أو حجز موعد:</p>
                  <p className="text-sm font-medium text-black">هاتف: +44 20 7636 8845</p>
                  <p className="text-sm text-gray-700 mt-1">العنوان: 8-10 هارلي ستريت، لندن</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
