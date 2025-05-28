
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "../App";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TreatmentsSummaryArabic() {
  const seoData = generateSEOMetadata(
    "دليل شامل للعلاجات التجميلية - عيادة CosmeDocs هارلي ستريت لندن",
    "دليل متخصص للعلاجات التجميلية في عيادة CosmeDocs هارلي ستريت لندن. حقن البوتوكس، حشو الفيلر، تجميل الأنف، نحت الذقن. نخدم المجتمع العربي منذ 2007 بثقة وخبرة.",
    "/treatments-summary-arabic"
  );

  // All before/after images for horizontal scroll
  const allBeforeAfterImages = [
    { 
      src: "/lovable-uploads/36b15e21-1905-49d8-b920-68bc23b235c5.png", 
      alt: "حقن البوتوكس - تنحيف الوجه", 
      caption: "حقن البوتوكس لتنحيف الوجه - تقليل عضلات المضغ بفعالية",
      treatment: "حقن البوتوكس"
    },
    { 
      src: "/lovable-uploads/8d22b27a-c2d5-4790-abac-6c6df301559a.png", 
      alt: "حقن البوتوكس - تحسين شكل الوجه", 
      caption: "علاج البوتوكس - تحسين الوجه المربع وتشكيل ملامح أنيقة",
      treatment: "حقن البوتوكس"
    },
    { 
      src: "/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png", 
      alt: "حقن البوتوكس - نتائج طبيعية", 
      caption: "حقن البوتوكس - نتائج تنحيف طبيعية تدريجية",
      treatment: "حقن البوتوكس"
    },
    { 
      src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png", 
      alt: "حشو الفيلر - تشكيل الوجه", 
      caption: "حشو الفيلر - استعادة امتلاء الوجه وتحسين الملامح",
      treatment: "حشو الفيلر"
    },
    { 
      src: "/lovable-uploads/8e5a45ba-9dab-4b06-a44b-2bddfaacfe4b.png", 
      alt: "حشو الفيلر - تشكيل الخدود", 
      caption: "حشو فيلر الخدود - زيادة البعد ثلاثي الأبعاد والشباب",
      treatment: "حشو الفيلر"
    },
    { 
      src: "/lovable-uploads/75803d61-d5ce-414e-96c8-8fdc7c0e03ba.png", 
      alt: "حشو الفيلر - إزالة التجاعيد", 
      caption: "حشو الفيلر - ملء التجاعيد العميقة وخطوط التعبير",
      treatment: "حشو الفيلر"
    },
    { 
      src: "/lovable-uploads/81447b08-e528-4535-a4b3-87f93eb36acd.png", 
      alt: "حشو الفيلر - تجديد شامل", 
      caption: "حشو الفيلر - تجديد شامل للوجه بنتائج طبيعية متناغمة",
      treatment: "حشو الفيلر"
    },
    { 
      src: "/lovable-uploads/8fc7a776-c255-4ca9-a8d9-573f4083b7f1.png", 
      alt: "تجميل الأنف - تشكيل الجسر", 
      caption: "تجميل الأنف غير الجراحي - تشكيل جسر الأنف بالفيلر",
      treatment: "تجميل الأنف"
    },
    { 
      src: "/lovable-uploads/37e1c9db-26f6-439b-94c2-fd05fa7e385f.png", 
      alt: "تجميل الأنف - تصحيح الشكل", 
      caption: "تجميل الأنف غير الجراحي - تصحيح عدم التماثل",
      treatment: "تجميل الأنف"
    },
    { 
      src: "/lovable-uploads/0146916c-8864-4889-b0d5-b330859a2c85.png", 
      alt: "حشو الجبهة - تشكيل ممتلئ", 
      caption: "حشو فيلر الجبهة - تحسين انخفاض الجبهة وتشكيل ممتلئ",
      treatment: "حشو الجبهة"
    },
    { 
      src: "/lovable-uploads/67e6b1a0-9230-467a-baf0-dd5778c41d45.png", 
      alt: "حشو الجبهة - تحسين الملامح", 
      caption: "حشو الجبهة - تحسين ملامح الجبهة وزيادة البعد ثلاثي الأبعاد",
      treatment: "حشو الجبهة"
    },
    { 
      src: "/lovable-uploads/c2be8e56-a215-4332-a5c5-ee6b3f431881.png", 
      alt: "حشو الجبهة - نتائج طبيعية", 
      caption: "حشو فيلر الجبهة - ملامح جبهة طبيعية ممتلئة",
      treatment: "حشو الجبهة"
    },
    { 
      src: "/lovable-uploads/1c08600a-b561-48ca-ae0a-246717da30a7.png", 
      alt: "تشكيل الذقن - تحسين الملامح", 
      caption: "تشكيل الذقن بالفيلر - تحسين ملامح الذقن ونسب الوجه",
      treatment: "تشكيل الذقن"
    },
    { 
      src: "/lovable-uploads/cc52c444-86d0-429d-ae4b-da84e429f406.png", 
      alt: "تشكيل الذقن - تعزيز البعد ثلاثي الأبعاد", 
      caption: "تشكيل الذقن - تعزيز البعد ثلاثي الأبعاد وإنشاء ملف جانبي مثالي",
      treatment: "تشكيل الذقن"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="عيادة تجميل لندن، حقن البوتوكس، حشو الفيلر، تجميل الأنف، تشكيل الذقن، حشو الجبهة، شد الوجه غير الجراحي، هارلي ستريت، CosmeDocs، تجميل العرب" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "عيادة CosmeDocs لندن للتجميل",
              "alternateName": "Cosmedocs London",
              "url": "https://cosmedocs.com/treatments-summary-arabic",
              "logo": "https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png",
              "description": "عيادة تجميل رائدة في هارلي ستريت لندن، نخدم المجتمع العربي منذ 2007 بأحدث العلاجات التجميلية",
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
                "حقن البوتوكس",
                "حشو الفيلر",
                "تجميل الأنف غير الجراحي",
                "طب التجميل"
              ],
              "areaServed": ["الشرق الأوسط", "شمال أفريقيا", "دول الخليج"],
              "priceRange": "£££"
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white" dir="rtl">
        {/* AI Disclaimer */}
        <div className="bg-blue-50 border-r-4 border-blue-400 p-4">
          <div className="page-container">
            <div className="flex items-center">
              <div className="mr-3">
                <p className="text-sm text-blue-700">
                  <strong>إخلاء مسؤولية:</strong> تم إنشاء محتوى هذه الصفحة بواسطة الذكاء الاصطناعي وهو للمرجع فقط. للحصول على المشورة الطبية النهائية، يرجى استشارة أطبائنا المتخصصين.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-container py-20"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              الدليل الشامل للعلاجات التجميلية المتخصصة
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              عيادة CosmeDocs هارلي ستريت لندن - عيادة التجميل الطبي الرائدة والموثوقة من قبل المجتمع العربي منذ 2007. نحن نفهم بعمق ملامح الوجه العربي ونقدم أفضل الحلول التجميلية المخصصة.
            </p>
          </div>

          {/* Before/After Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">عرض النتائج الحقيقية للعلاج</h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                {allBeforeAfterImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-80">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <div className="text-sm font-semibold text-blue-600 mb-2">{image.treatment}</div>
                        <p className="text-sm text-gray-700">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-black mb-6">لماذا يختار المجتمع العربي CosmeDocs؟</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  منذ تأسيسها في عام 2007، أصبحت CosmeDocs العيادة الطبية التجميلية الأكثر ثقة للمجتمع العربي في لندن. نحن نقع في هارلي ستريت التاريخي ونمتلك أحدث المعدات والتقنيات. فريقنا الطبي متخصص في دراسة التشريح الوجهي العربي، ونفهم بعمق احتياجات الجمال ومعايير الجمال العربية. أكثر من 15 عامًا من الخبرة تمكننا من تقديم أكثر العلاجات أمانًا وطبيعية لكل مريض.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-black mb-3">🏆 أسباب كوننا الخيار الأول للمجتمع العربي</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ خبرة 17 عامًا في خدمة المجتمع العربي</li>
                      <li>✓ فهم عميق لملامح الوجه العربي</li>
                      <li>✓ بيئة فاخرة في هارلي ستريت</li>
                      <li>✓ أكثر من مليون حقنة آمنة</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ خدمة استشارة باللغة العربية</li>
                      <li>✓ خطط علاج مخصصة</li>
                      <li>✓ منتجات معتمدة دوليًا</li>
                      <li>✓ خدمة متابعة شاملة</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-6">العلاجات الشائعة - نتائج حقيقية</h3>

                <Accordion type="single" collapsible className="w-full mb-8">
                  <AccordionItem value="botox-treatment" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-xl font-semibold text-black">حقن البوتوكس - خبراء تنحيف الوجه</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          حقن البوتوكس هو العلاج الأكثر شعبية في المجتمع العربي. أطباؤنا متخصصون في دراسة بنية عضلات المضغ العربية منذ 2007، وقد جمعوا خبرة غنية. من خلال حقن البوتوكس بدقة، يمكن تقليل عضلات المضغ بفعالية وخلق وجه V صغير رقيق بنتائج طبيعية دائمة.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="dermal-fillers" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-xl font-semibold text-black">حشو الفيلر - مكافحة الشيخوخة الشاملة</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          حشو الفيلر هو تقنيتنا الأساسية، والتي يمكنها تحسين مشاكل شيخوخة الوجه بشكل شامل. من خلال تقنية الحشو متعدد الطبقات، استعادة امتلاء الوجه، ملء التجاعيد، وإعادة تشكيل الملامح الشابة. نحن نستخدم جميع العلامات التجارية الدولية الرائدة من الفيلر لضمان الأمان والفعالية.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nose-enhancement" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-xl font-semibold text-black">تجميل الأنف غير الجراحي - تشكيل آمن بدون جراحة</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          تجميل الأنف غير الجراحي هو مشروعنا النجم، وهو مناسب بشكل خاص لخصائص الأنف العربي. باستخدام فيلر عالي الجودة، من خلال تقنية الحقن الدقيقة، يمكن تحسين ارتفاع جسر الأنف وشكل طرف الأنف وشكل الأنف العام بأمان وفعالية، والحصول على ملامح الأنف المثالية دون جراحة.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="chin-enhancement" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-xl font-semibold text-black">تشكيل الذقن - إنشاء ملف جانبي مثالي</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          تشكيل الذقن هو أحد تخصصاتنا، وهو شائع بشكل خاص في المجتمع العربي. من خلال تقنية حقن الفيلر الدقيقة، يمكننا تحسين ملامح الذقن بشكل مثالي، وتعزيز الجمال الجانبي، وخلق ملف جانبي مثالي بنسبة ذهبية. 17 عامًا من الخبرة الغنية تجعلنا نفهم بعمق ملامح الوجه العربي.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="forehead-enhancement" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-xl font-semibold text-black">حشو الجبهة - خبراء تحسين الانخفاض</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          منذ 2007، نحن نقدم خدمات حشو فيلر الجبهة خصيصًا للمجتمع العربي. الجبهة العربية مسطحة نسبيًا، من خلال تقنية حشو الفيلر المهنية، يمكن تحسين انخفاض الجبهة بفعالية، وتشكيل ملامح جبهة ممتلئة ثلاثية الأبعاد، وتحسين جمال الوجه بشكل كبير.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="non-surgical-facelift" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-xl font-semibold text-black">شد الوجه غير الجراحي - إعادة تشكيل الملامح الشابة</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          شد الوجه غير الجراحي يجمع بين حشو الفيلر وتقنية شد الخيوط، ويقدم حلولاً ثورية لترهل وتدلي الوجه. بعد التقييم الاستشاري، يمكننا تقريبًا ضمان تأثير رفع كبير للمرضى المؤهلين، مما يتيح لك استعادة ملامح الوجه الشابة والمشدودة.
                        </p>
                        
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                          <h4 className="font-bold text-black mb-3">💰 تكلفة العلاج</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h5 className="font-semibold text-green-600 mb-2">ترهل خفيف</h5>
                              <p className="text-2xl font-bold text-black">£1,500</p>
                              <p className="text-sm text-gray-600">مناسب لترهل خط الفك الخفيف والتدلي المبكر</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h5 className="font-semibold text-blue-600 mb-2">ترهل متوسط</h5>
                              <p className="text-2xl font-bold text-black">£2,500</p>
                              <p className="text-sm text-gray-600">مناسب لتدلي وترهل الوجه الواضح</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-3 text-center">
                            * الترهل الشديد يُنصح بالعلاج الجراحي، سنخبرك بصدق ونوصي بالحل الأنسب
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Hidden SEO Content */}
                <div className="hidden">
                  <h4>محتوى متخصص للعلاجات التجميلية العربية</h4>
                  <p>
                    تقع عيادة CosmeDocs في منطقة هارلي ستريت الطبية الشهيرة، وتقدم منذ 2007 أكثر الخدمات التجميلية الطبية تخصصًا للمجتمع العربي. نحن نفهم بعمق التشريح الوجهي العربي والاحتياجات الجمالية، ونحن العيادة المفضلة للعرب لإجراء العلاجات التجميلية في بريطانيا. تشمل خدماتنا الرئيسية حقن البوتوكس وحشو الفيلر وتجميل الأنف غير الجراحي وتشكيل الذقن وحشو الجبهة وشد الوجه غير الجراحي وغيرها. فريقنا الطبي لديه 17 عامًا من الخبرة المهنية، وقد أكمل أكثر من مليون حقنة آمنة، ويحظى بثقة العملاء العرب من الشرق الأوسط وشمال أفريقيا ودول الخليج وغيرها. تستخدم العيادة جميع المنتجات الأصلية المعتمدة من وكالة تنظيم الأدوية البريطانية، بما في ذلك العلامات التجارية الدولية الرائدة مثل Allergan وGalderma وMerz. حقن البوتوكس هو مشروعنا النجم، مصمم خصيصًا لخصائص عضلات المضغ المتطورة لدى العرب، ومن خلال حقن البوتوكس بدقة، يمكن تقليل عضلات المضغ بفعالية وخلق وجه V صغير رقيق. تقنية حشو الجبهة مصممة خصيصًا لخصائص الجبهة المسطحة نسبيًا لدى العرب، باستخدام فيلر عالي الجودة للحشو متعدد الطبقات، وخلق ملامح جبهة ممتلئة ثلاثية الأبعاد. تقنيات تشكيل الذقن وتجميل الأنف غير الجراحي يمكنها تحسين نسب الوجه بشكل كبير وتعزيز الإحساس ثلاثي الأبعاد. يجمع شد الوجه غير الجراحي بين حشو الفيلر وتقنية شد الخيوط، ويقدم حلولاً فعالة لترهل وتدلي الوجه، تكلفة العلاج الخفيف £1500، تكلفة العلاج المتوسط £2500. نحن نقدم خدمة استشارة ثنائية اللغة العربية والإنجليزية، ونفهم بعمق معايير الجمال العربي والخلفية الثقافية، ونحمي خصوصية العملاء بصرامة. تقع العيادة في هارلي ستريت 8-10، لندن W1G 9PF، وهي مريحة المواصلات وفاخرة البيئة. هاتف الحجز +44 20 7636 8845، نقدم خدمة متابعة على مدار 24 ساعة.
                  </p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-bold text-black mb-4">العلاجات الشائعة</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="text-black font-medium">← حقن البوتوكس - تنحيف الوجه</span>
                  </li>
                  <li>
                    <span className="text-black font-medium">← حشو الجبهة - تحسين الانخفاض</span>
                  </li>
                  <li>
                    <span className="text-black font-medium">← تشكيل الذقن - ملف جانبي مثالي</span>
                  </li>
                  <li>
                    <span className="text-black font-medium">← تجميل الأنف غير الجراحي</span>
                  </li>
                  <li>
                    <span className="text-black font-medium">← شد الوجه غير الجراحي</span>
                  </li>
                  <li>
                    <Link to="/dermal-filler-makeover" className="text-black hover:text-gray-700 font-medium">
                      ← حشو فيلر الوجه الكامل
                    </Link>
                  </li>
                  <li>
                    <Link to="/treatments" className="text-black hover:text-gray-700 font-medium">
                      ← عرض جميع العلاجات
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-black hover:text-gray-700 font-medium">
                      ← حجز استشارة مجانية
                    </Link>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-black text-white rounded-lg text-center">
                  <h4 className="font-bold mb-2">احجز الآن</h4>
                  <p className="text-sm mb-3">استشارة مهنية مجانية</p>
                  <a 
                    href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-colors"
                  >
                    حجز استشارة
                  </a>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">اتصل بنا</h4>
                  <p className="text-sm text-gray-700 mb-2">خط الاستشارة والحجز:</p>
                  <p className="text-sm font-medium text-black">الهاتف: +44 20 7636 8845</p>
                  <p className="text-sm text-gray-700 mt-1">العنوان: هارلي ستريت 8-10 لندن</p>
                  <p className="text-sm text-gray-700">الرمز البريدي: W1G 9PF</p>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">💰 أسعار شد الوجه غير الجراحي</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">ترهل خفيف:</span>
                      <span className="text-sm font-bold text-green-600">£1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">ترهل متوسط:</span>
                      <span className="text-sm font-bold text-blue-600">£2,500</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">* يتطلب تقييم استشارة مهنية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
