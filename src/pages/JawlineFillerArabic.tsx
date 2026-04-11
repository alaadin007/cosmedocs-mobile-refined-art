import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import JawlineFillerSidebar from '@/components/jawline/JawlineFillerSidebar';

export default function JawlineFillerArabic() {
  const canonical = "https://www.cosmedocs.com/ar/treatments/jawline-filler/";
  const faqs = [
    { q: "كم تكلفة فيلر خط الفك؟", a: "في CosmeDocs، يبدأ فيلر خط الفك من £350 لـ 1 مل، و£650 لـ 2 مل، وحزمة Natural HD Jawline بـ £950. رسوم الاستشارة (£50) تُخصم عند بدء العلاج." },
    { q: "كم تدوم نتائج فيلر الفك؟", a: "تستمر النتائج عادةً من 15 إلى 18 شهراً، مما يجعلها أطول عمراً من معظم أنواع الفيلر. منطقة الفك أقل حركة مما يساعد على إطالة المدة." },
    { q: "هل فيلر الفك مؤلم؟", a: "الانزعاج بسيط جداً. نستخدم مخدراً موضعياً والفيلر يحتوي على ليدوكايين. منطقة الفك بها أعصاب أقل من مناطق الوجه الأخرى." },
    { q: "ما هي فترة التعافي؟", a: "التعافي بسيط — معظم المرضى يعودون للعمل فوراً. قد تشعر بتورم خفيف لمدة 24-48 ساعة." },
    { q: "هل يمكن دمج فيلر الذقن والفك؟", a: "بالتأكيد. فيلر الذقن والفك يعملان معاً بشكل رائع لتحسين شامل لأسفل الوجه." },
    { q: "هل يمكن إذابة فيلر الفك؟", a: "نعم، فيلر حمض الهيالورونيك يمكن إذابته بالهيالورونيداز إذا لزم الأمر." },
  ];

  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldText = "text-[#C9A050]";

  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>فيلر خط الفك لندن | نحت الفك بدون جراحة | هارلي ستريت | CosmeDocs</title>
        <meta name="description" content="فيلر خط الفك بإشراف أطباء من £350. نحت وتحديد خط الفك في عيادتنا بهارلي ستريت. نتائج طبيعية منذ 2007." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="ar" href={canonical} />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/filler-machoire/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-mandibula/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <meta property="og:title" content="فيلر خط الفك لندن | CosmeDocs" />
        <meta property="og:description" content="فيلر خط الفك بإشراف أطباء من £350. هارلي ستريت." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "فيلر خط الفك", "alternateName": "Jawline Filler", "url": canonical, "procedureType": "NoninvasiveProcedure", "bodyLocation": "Jawline" },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
          ]
        })}</script>
      </Helmet>

      <div className="bg-[#F5F5F3] overflow-x-hidden min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-[#F5F5F3] pt-0 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'العلاجات', path: '/ar/' }, { label: 'فيلر الوجه', path: '/ar/treatments/dermal-fillers/' }]} currentPage="فيلر خط الفك" variant="light" />
            <div className="pt-12 pb-4 text-center" dir="rtl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-stone-800 leading-[1.1] tracking-tight mb-6">
                  فيلر خط <span className="text-[#C9A050] font-light">الفك</span>
                </h1>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-extralight max-w-2xl mx-auto">
                  تحديد ونحت وإعادة تشكيل خط الفك بفيلر دقيق — لأسفل وجه أكثر حدة وتوازناً.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />بإشراف أطباء</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30–45 دقيقة</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />منذ 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />هارلي ستريت</span>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14" dir="rtl">
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className={`${textBody} text-sm leading-relaxed font-light space-y-4`}>
                    <p>خط الفك المحدد يُوصف غالباً بأنه إطار الوجه — يوفر البنية والتوازن ومظهراً أكثر شباباً. مع التقدم في العمر، يفقد الوجه بنيته بسبب امتصاص العظام وترهل الأنسجة. فيلر خط الفك يستعيد هذه البنية المفقودة.</p>
                    <p>في CosmeDocs، يستخدم أطباؤنا فيلر حمض الهيالورونيك الكثيف والهيكلي المصمم خصيصاً لتحسين خط الفك، مما يوفر دعماً وبروزاً فائقين مع الحفاظ على الحركة الطبيعية.</p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>ماذا يمكن أن يحقق <span className={`${goldText} font-light`}>فيلر الفك؟</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "تعريف زوايا الفك الحادة",
                      "نحت خط الفك العريض",
                      "تصحيح اللغد المبكر",
                      "موازنة عدم التناسق",
                      "تحسين الملف الجانبي",
                      "استعادة بنية الشباب"
                    ].map(item => (
                      <div key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                        <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${textBody} font-light`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>1 مل مقابل <span className={`${goldText} font-light`}>2 مل</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">1 مل — تحسين دقيق</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• مثالي للمبتدئين</li>
                        <li>• تعريف طبيعي ودقيق</li>
                        <li>• تصحيح خفيف للغد</li>
                        <li>• من £350</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-stone-700 mb-3">2 مل — نحت واضح</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• نحت أكثر وضوحاً</li>
                        <li>• زوايا فك أقوى</li>
                        <li>• تصحيح ملحوظ للغد</li>
                        <li>• من £650</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>الأسئلة <span className={`${goldText} font-light`}>الشائعة</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                        <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                        <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>

              <section className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className={`text-2xl font-extralight ${textH} mb-4`}>احجز <span className={goldText}>استشارتك</span></h2>
                <p className={`${textBody} text-sm font-light mb-6`}>كل علاج يبدأ بتقييم شامل للوجه. أطباؤنا سيناقشون مخاوفك ويوصون بخطة مخصصة لبنية وجهك.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">احجز استشارة <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                  <Link to="/ar/treatments/dermal-fillers/"><Button variant="ghost" className="border border-gray-300 text-gray-600 hover:text-gray-900 rounded-full px-8 py-5 text-base">جميع علاجات الفيلر</Button></Link>
                </div>
              </section>
            </div>
            <div className="hidden lg:block" dir="ltr">
              <JawlineFillerSidebar />
            </div>
          </div>
        </div>

        <div className="sr-only" dir="rtl">
          <h2>فيلر خط الفك في لندن — CosmeDocs هارلي ستريت</h2>
          <p>فيلر خط الفك بإشراف أطباء مسجلين في GMC في هارلي ستريت. نحت وتحديد خط الفك بفيلر حمض الهيالورونيك الممتاز. فننا التجميلي غير مرئي — جريء وطبيعي وعلى طريقتك دائماً.</p>
        </div>
      </div>
    </>
  );
}
