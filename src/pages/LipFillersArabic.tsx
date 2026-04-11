import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import LipFillersSidebar from "@/components/lip-fillers/LipFillersSidebar";

const LipFillersArabic = () => {
  const faqs = [
    { question: "كم تدوم نتائج حقن الشفايف؟", answer: "تستمر النتائج عادةً من ٦ إلى ١٢ شهراً حسب المنتج المستخدم ومعدل الأيض وحجم الحقن. حقن ٠.٥ مل تدوم ٦–٩ أشهر، بينما ١ مل تدوم حتى ١٢ شهراً. فيلر حمض الهيالورونيك الممتاز المستخدم في CosmeDocs يوفر نتائج طويلة الأمد تذوب تدريجياً وبشكل طبيعي." },
    { question: "كم تكلفة حقن الشفايف في لندن؟", answer: "في CosmeDocs، تبدأ حقن الشفايف من ٣٠٠ جنيه إسترليني لـ ٠.٥ مل و ٣٥٠ جنيه لـ ١ مل. يشمل ذلك الاستشارة وفيلر حمض الهيالورونيك الممتاز والرعاية اللاحقة. رسوم الاستشارة (٥٠ جنيه) تُخصم إذا بدأت العلاج في نفس اليوم." },
    { question: "هل حقن الشفايف مؤلمة؟", answer: "الانزعاج بسيط جداً. نقوم بتطبيق مخدر موضعي قبل العلاج ونستخدم فيلر يحتوي على ليدوكايين لراحة إضافية. يصف معظم المرضى الإحساس بأنه ضغط خفيف وليس ألماً. تستغرق الجلسة ٣٠–٤٥ دقيقة." },
    { question: "ما الفرق بين ٠.٥ مل و ١ مل حقن الشفايف؟", answer: "٠.٥ مل توفر تحسيناً دقيقاً وطبيعياً — مثالية للشفاه الرقيقة والعلاج لأول مرة. ١ مل تخلق امتلاءً أكثر وضوحاً وشكلاً محدداً. سيقيّم طبيبك تشريح شفتيك ويوصي بالحجم الأمثل أثناء الاستشارة." },
    { question: "ما مراحل تورم حقن الشفايف؟", answer: "يبلغ التورم ذروته خلال ٢٤–٤٨ ساعة، ثم يتراجع تدريجياً خلال ١–٢ أسبوع. ضعي كمادات باردة، تجنبي التمارين الشاقة لمدة ٢٤ ساعة، نامي بوضع مرتفع، واشربي كمية كافية من الماء. النتائج النهائية تظهر بعد أسبوعين." },
    { question: "هل يمكن أن تبدو حقن الشفايف طبيعية؟", answer: "بالتأكيد. فلسفتنا في الفن غير المرئي تضمن نتائج طبيعية المظهر. نحن نعزز شكل شفتيك ونسبها الحالية بدلاً من خلق مظهر اصطناعي." },
    { question: "هل يمكن إذابة حقن الشفايف؟", answer: "نعم. يمكن إذابة فيلر حمض الهيالورونيك بأمان باستخدام الهيالورونيداز إذا لم تكوني راضية عن النتائج أو ترغبين في العودة لشكل شفتيك الطبيعي." },
  ];

  return (
    <>
      <Helmet>
        <title>حقن الشفايف لندن | تكبير الشفاه الطبيعي | أطباء هارلي ستريت | CosmeDocs</title>
        <meta name="description" content="حقن شفايف بإشراف طبي من ٣٠٠ جنيه إسترليني. تكبير شفاه طبيعي المظهر باستخدام حمض الهيالورونيك الممتاز في عيادتنا بهارلي ستريت. خيارات ٠.٥ مل و ١ مل." />
        <link rel="canonical" href="https://www.cosmedocs.com/ar/treatments/lip-fillers/" data-rh="true" />
        <meta property="og:title" content="حقن الشفايف لندن | تكبير الشفاه الطبيعي | CosmeDocs" />
        <meta property="og:description" content="حقن شفايف بإشراف طبي من ٣٠٠ جنيه إسترليني. تكبير شفاه طبيعي المظهر في هارلي ستريت." />
        <meta property="og:url" content="https://www.cosmedocs.com/ar/treatments/lip-fillers/" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/injection-levres/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-labios/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/lip-fillers/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "عيادة طب تجميلي بإشراف أطباء في هارلي ستريت، لندن. تأسست عام ٢٠٠٧.",
                "url": "https://www.cosmedocs.com/",
                "telephone": "+44 20 3733 3227",
                "priceRange": "££",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB", "addressRegion": "London" },
                "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" }
              },
              {
                "@type": "MedicalProcedure",
                "name": "حقن الشفايف",
                "alternateName": "Lip Fillers",
                "description": "تكبير الشفاه بإشراف طبي باستخدام فيلر حمض الهيالورونيك الممتاز لتعزيز حجم وشكل وتحديد الشفاه بنتائج طبيعية المظهر.",
                "url": "https://www.cosmedocs.com/ar/treatments/lip-fillers/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Lips"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white pt-0 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Treatments', path: '/ar/' }, { label: 'العلاجات', path: '/ar/' }]} currentPage="حقن الشفايف" />
            <div className="pt-12 pb-4 text-center" dir="rtl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-stone-800 leading-[1.1] tracking-tight mb-6">
                  حقن الشفايف{" "}<span className="text-[#C9A050] font-light">لندن</span>
                </h1>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-extralight max-w-2xl mx-auto">
                  تكبير الشفاه بإشراف طبي باستخدام حمض الهيالورونيك الممتاز — حجم طبيعي وشكل محسّن وتحديد دقيق مصمم لملامحك.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />بإشراف أطباء</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />من ٣٠٠ جنيه</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />منذ ٢٠٠٧</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />هارلي ستريت</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14" dir="rtl">

              {/* What Are Lip Fillers */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    ما هي <span className="text-[#C9A050] font-light">حقن الشفايف؟</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                      حقن الشفايف هي علاجات حقنية تستخدم حمض الهيالورونيك لإضافة حجم وشكل وتحديد للشفاه. كمادة موجودة طبيعياً في الجسم، يندمج حمض الهيالورونيك بسلاسة مع أنسجة الشفاه — مما يقدم نتائج تبدو وتشعر بالطبيعية.
                    </p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>على عكس تكبير الشفاه الجراحي، الفيلر القابل للحقن هو إجراء طفيف التوغل لا يتطلب تخديراً عاماً. يستغرق العلاج ٣٠–٤٥ دقيقة والنتائج مرئية فوراً، مع ظهور النتائج النهائية بعد حوالي أسبوعين.</p>
                      <p>في CosmeDocs، نستخدم فقط فيلر حمض الهيالورونيك المعتمد من FDA من أفضل الشركات المصنعة بما في ذلك Juvederm و Restylane و Teoxane. يتم اختيار كل منتج بناءً على تشريح شفتيك وأهدافك الجمالية.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    كيف يعمل <span className="text-[#C9A050] font-light">العلاج</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                      يبدأ طبيبك بتقييم تفصيلي للوجه، ومناقشة أهدافك والتوصية بالحجم والمنتج الأمثل. يُطبق مخدر موضعي قبل حقن دقيقة في نقاط استراتيجية على الشفاه.
                    </p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>باستخدام إبر دقيقة أو كانيولا صغيرة، يتم حقن حمض الهيالورونيك بعناية في مناطق متعددة من الشفاه — حدود الشفة، قوس كيوبيد، جسم الشفة، وحواف الفيلتروم.</p>
                      <p>يحتوي الفيلر على ليدوكايين لراحة إضافية أثناء العلاج. يقوم طبيبك بنحت شكل الشفة في الوقت الحقيقي، مما يسمح لك بتقديم ملاحظاتك طوال العملية.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Secret Cocktail */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    كوكتيل الفيلر <span className="text-[#C9A050] font-light">السري</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                      ليست كل حقن الشفايف متساوية — وكذلك ليست كل الشفاه. على مدار ٢٠ عاماً من الحقن، طورنا نهج كوكتيل خاص لا تقدمه معظم العيادات. النتيجة؟ شفاه تبدو <em>وتشعر</em> كشفاهك الطبيعية.
                    </p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>ما لا يدركه معظم المرضى هو أن كل علامة تجارية للفيلر تحمل أكثر من عشرة منتجات، كل منها بقوام ومرونة ووزن جزيئي مختلف. اختيار <em>المزيج</em> المناسب لتشريح شفتيك الفريد هو كل شيء.</p>
                      <div className="grid grid-cols-2 gap-3 my-4">
                        {[
                          { label: "حمض هيالورونيك سويسري", detail: "دعم هيكلي وطول عمر" },
                          { label: "حمض هيالورونيك فرنسي", detail: "ترطيب ونعومة طبيعية" },
                          { label: "طبقة الحجم", detail: "الجسم والبروز" },
                          { label: "طبقة الترطيب", detail: "المرونة وملمس الشفة" },
                        ].map((item) => (
                          <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
                            <p className="text-[#C9A050] text-xs font-medium mb-1">{item.label}</p>
                            <p className="text-stone-500 text-[11px]">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                        <p className="text-stone-500 text-xs leading-relaxed font-light">
                          <strong className="text-[#C9A050]">لماذا يهم:</strong> منتج فيلر واحد يعطيك قواماً واحداً. نهج الكوكتيل لدينا يطبق طبقات متعددة — حجم حيث تحتاجين بروزاً، ترطيب حيث تحتاجين نعومة — لذلك شفاهك لا تبدو طبيعية فحسب، بل <em>تشعر</em> بالطبيعية. هذا هو الفن غير المرئي.
                        </p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 0.5ml vs 1ml */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    ٠.٥ مل مقابل ١ مل <span className="text-[#C9A050] font-light">حقن الشفايف</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">٠.٥ مل — تحسين دقيق</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• مثالي للشفاه الرقيقة والمبتدئات</li>
                        <li>• امتلاء لطيف مع تورم بسيط</li>
                        <li>• النتائج تدوم ٦–٩ أشهر</li>
                        <li>• ٣٠٠ جنيه إسترليني</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-stone-700 mb-3">١ مل — تحسين واضح</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• تحسين مرئي للشفاه المتوسطة والكبيرة</li>
                        <li>• شكل ومحيط محدد</li>
                        <li>• النتائج تدوم ٩–١٢ شهراً</li>
                        <li>• ٣٥٠ جنيه إسترليني</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    مناطق تحسين <span className="text-[#C9A050] font-light">الشفاه</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["حدود الشفة", "قوس كيوبيد", "جسم الشفة العلوية والسفلية", "زوايا الفم", "حواف الفيلتروم", "تصحيح تماثل الشفاه"].map((area) => (
                      <div key={area} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
                        <p className="text-stone-600 text-xs font-light">{area}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Recovery */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    مراحل التورم و<span className="text-[#C9A050] font-light">التعافي</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3 text-stone-500 text-sm leading-relaxed font-light">
                    {[
                      { stage: "أول ٢٤–٤٨ ساعة", detail: "يبدأ التورم الأولي. قد تشعرين بحساسية وتبدو الشفاه أكبر من النتيجة النهائية." },
                      { stage: "٤٨–٧٢ ساعة", detail: "فترة ذروة التورم. تصل الشفاه لأقصى حجم قبل أن تبدأ بالاستقرار طبيعياً." },
                      { stage: "١–٢ أسبوع", detail: "تراجع تدريجي. تظهر النتائج الحقيقية مع اندماج الفيلر مع أنسجة الشفاه." },
                    ].map((item) => (
                      <div key={item.stage} className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                        <p className="text-stone-700 text-xs font-medium mb-1">{item.stage}</p>
                        <p className="text-xs">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Suitability */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    هل أنا <span className="text-[#C9A050] font-light">مرشحة مناسبة؟</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-stone-800">قد تكونين مناسبة</p></div>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• شفاه رقيقة أو مسطحة طبيعياً</li>
                        <li>• شكل شفاه غير متماثل</li>
                        <li>• فقدان حجم الشفاه المرتبط بالعمر</li>
                        <li>• الرغبة في تحديد حدود الشفاه</li>
                        <li>• فوق ١٨ سنة</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-stone-400" /><p className="text-sm font-medium text-stone-800">قد لا تكونين مناسبة</p></div>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• قرحة باردة أو التهابات الشفاه النشطة</li>
                        <li>• الحمل أو الرضاعة</li>
                        <li>• حساسية من حمض الهيالورونيك</li>
                        <li>• اضطرابات تخثر الدم</li>
                        <li>• توقعات غير واقعية</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    لماذا <span className="text-[#C9A050] font-light">CosmeDocs؟</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "بإشراف أطباء — جميع العلاجات بواسطة أطباء مسجلين في GMC",
                      "مدربو معهد هارلي ستريت — تأسس عام ٢٠٠٧",
                      "أكثر من مليون علاج تم إجراؤه",
                      "فيلر معتمد من FDA حصرياً",
                      "خطط علاج مخصصة لكل مريض",
                      "فننا التجميلي فن غير مرئي"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-stone-600 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2 leading-tight">
                    الأسئلة <span className="text-[#C9A050] font-light">الشائعة</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-stone-50 border border-stone-200 rounded-xl px-5">
                        <AccordionTrigger className="text-stone-700 hover:text-[#C9A050] text-right text-sm font-light py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-stone-500 text-sm font-light pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block" dir="ltr">
              <div className="sticky top-24"><LipFillersSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-white">
          <div className="max-w-3xl mx-auto text-center" dir="rtl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-stone-800">
                جاهزة لشفاه طبيعية <span className="text-[#C9A050]">وجميلة؟</span>
              </h2>
              <p className="text-stone-500 mb-8 font-light">استشارة مع أطبائنا ستقيّم تشريح شفتيك وتضع خطة تحسين مخصصة — دقيقة أو جريئة، دائماً طبيعية.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    احجزي استشارة <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 rotate-180" />
                  </Button>
                </a>
                <Link to="/ar/">
                  <Button variant="ghost" className="border border-stone-300 text-stone-600 hover:text-stone-800 hover:bg-stone-100 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                    تحدثي مع طبيب
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-stone-50" dir="ltr">
          <LipFillersSidebar />
        </section>
      </div>
    </>
  );
};

export default LipFillersArabic;
