import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star, Sparkles, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import ChinFillerSidebar from '@/components/chin-filler/ChinFillerSidebar';

export default function ChinFillerArabic() {
  const canonical = "https://www.cosmedocs.com/ar/treatments/chin-filler/";
  const bg = "bg-[#F5F5F3]";
  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldText = "text-[#C9A050]";
  const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>فيلر الذقن لندن | تحديد الذقن بدون جراحة | هارلي ستريت | CosmeDocs</title>
        <meta name="description" content="فيلر الذقن في لندن لتحديد وتحسين ملامح الوجه. علاج غير جراحي بحمض الهيالورونيك. أطباء مسجلون في GMC بهارلي ستريت منذ 2007." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="ar" href={canonical} />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/filler-menton/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-menton/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/chin-filler/" />
        <meta property="og:title" content="فيلر الذقن لندن | CosmeDocs هارلي ستريت" />
        <meta property="og:description" content="تحديد الذقن بدون جراحة. أطباء هارلي ستريت منذ 2007." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar" />
        <meta name="keywords" content="فيلر الذقن لندن, تحديد الذقن, حقن الذقن, فيلر هارلي ستريت, تجميل الذقن بدون جراحة" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227",
          "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "كم تكلفة فيلر الذقن؟", "acceptedAnswer": { "@type": "Answer", "text": "يبدأ فيلر الذقن من £350 لـ 1.2 مل. تختلف التكلفة حسب الكمية المطلوبة لتحقيق النتائج المرغوبة." } },
            { "@type": "Question", "name": "كم تدوم نتائج فيلر الذقن؟", "acceptedAnswer": { "@type": "Answer", "text": "تدوم النتائج عادةً من 12 إلى 18 شهراً. فيلر الذقن يدوم أطول من فيلر الشفاه بسبب كثافة المادة المستخدمة." } },
            { "@type": "Question", "name": "هل فيلر الذقن آمن؟", "acceptedAnswer": { "@type": "Answer", "text": "نعم، عند إجرائه من قبل أطباء مؤهلين باستخدام منتجات عالية الجودة. في CosmeDocs جميع الإجراءات يقوم بها أطباء ذوو خبرة واسعة." } }
          ]
        })}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6">
              <Breadcrumb items={[{ label: 'العلاجات', path: '/ar/' }]} currentPage="فيلر الذقن" variant="light" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div dir="rtl">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street، لندن W1G 9PF
                  </div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    تحديد
                    <span className={`block font-semibold ${goldText}`}>الذقن</span>
                  </h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    فيلر الذقن يعيد التوازن لملامح الوجه ويحسن البروفايل الجانبي بشكل طبيعي ودقيق — بدون جراحة.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    في CosmeDocs، نستخدم تقنيات دقيقة لتحديد الذقن وتحقيق تناسق الوجه. النتيجة: تحسين ملحوظ لا يمكن تمييزه. فننا غير مرئي.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">
                    احجز استشارة <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> مسجلون في GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +17 سنة</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> تقييم 4.9</span>
                </motion.div>
              </div>
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square flex items-center justify-center">
                  <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none">
                    {[
                      { d: "M250 80 C300 80, 380 150, 380 250 C380 350, 300 420, 250 420 C200 420, 120 350, 120 250 C120 150, 200 80, 250 80", opacity: 0.08 },
                      { d: "M250 120 C285 120, 340 170, 340 250 C340 330, 285 380, 250 380 C215 380, 160 330, 160 250 C160 170, 215 120, 250 120", opacity: 0.1 },
                      { d: "M250 160 C270 160, 310 190, 310 250 C310 310, 270 340, 250 340 C230 340, 190 310, 190 250 C190 190, 230 160, 250 160", opacity: 0.12 },
                    ].map((shape, i) => (
                      <path key={i} d={shape.d} stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity={shape.opacity} />
                    ))}
                    <circle cx="250" cy="250" r="60" fill="url(#centreGlowChinAr)" />
                    <defs><radialGradient id="centreGlowChinAr" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor={gold} stopOpacity="0.12" /><stop offset="100%" stopColor={gold} stopOpacity="0" /></radialGradient></defs>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              <div className="space-y-14" dir="rtl">
                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>ما هو <span className={`${goldText} font-light`}>فيلر الذقن؟</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <ExpandableSection preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        فيلر الذقن هو إجراء تجميلي غير جراحي يستخدم حمض الهيالورونيك لتحسين شكل الذقن وإعادة التوازن لملامح الوجه. يُعرف أيضاً بتجميل الذقن السائل.
                      </p>
                    }>
                      <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                        <p>الذقن يلعب دوراً محورياً في تناسق الوجه والبروفايل الجانبي. ذقن ضعيف أو متراجع يمكن أن يجعل الأنف يبدو أكبر والفك أقل تحديداً.</p>
                        <p>باستخدام فيلر عالي الكثافة، يمكن لأطبائنا إضافة إسقاط للذقن، تحسين التناسق، وتحقيق توازن أجمل للوجه — كل ذلك بدون جراحة وبنتائج فورية.</p>
                      </div>
                    </ExpandableSection>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>فوائد <span className={`${goldText} font-light`}>فيلر الذقن</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "تحسين البروفايل", desc: "إسقاط أفضل للذقن يحسن البروفايل الجانبي بشكل ملحوظ." },
                        { title: "توازن الوجه", desc: "يعيد التناسب بين الأنف والذقن والفك." },
                        { title: "بدون جراحة", desc: "نتائج فورية بدون فترة تعافي أو تخدير عام." },
                        { title: "نتائج طبيعية", desc: "فننا غير مرئي — تحسين لا يمكن ملاحظته." },
                      ].map(item => (
                        <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                          <p className={`text-sm font-medium ${textH} mb-1`}>{item.title}</p>
                          <p className={`text-xs ${textBody} font-light`}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>الأسعار <span className={`${goldText} font-light`}>والتكلفة</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="space-y-3">
                      {[
                        { name: "فيلر الذقن 1.2 مل", price: "من £350" },
                        { name: "فيلر الذقن 2.4 مل", price: "من £650" },
                        { name: "فيلر الذقن 3.6 مل", price: "من £850" },
                        { name: "HA Makeover الشامل", price: "من £950" },
                      ].map(item => (
                        <div key={item.name} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-5 py-3">
                          <span className={`text-sm ${textH} font-light`}>{item.name}</span>
                          <span className={`text-sm font-medium ${goldText}`}>{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>الأسئلة <span className={`${goldText} font-light`}>الشائعة</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <Accordion type="single" collapsible className="space-y-3">
                      {[
                        { q: "كم تكلفة فيلر الذقن؟", a: "يبدأ فيلر الذقن من £350 لـ 1.2 مل، £650 لـ 2.4 مل، و£850 لـ 3.6 مل. تعتمد التكلفة على الكمية المطلوبة." },
                        { q: "كم تدوم نتائج فيلر الذقن؟", a: "تدوم النتائج عادةً من 12 إلى 18 شهراً. فيلر الذقن يدوم أطول من فيلر الشفاه بسبب كثافة المادة." },
                        { q: "هل فيلر الذقن مؤلم؟", a: "الانزعاج بسيط جداً. نستخدم مخدراً موضعياً والفيلر يحتوي على ليدوكايين للراحة." },
                        { q: "هل يمكن الجمع مع علاجات أخرى؟", a: "نعم، فيلر الذقن يعمل بشكل ممتاز مع فيلر الفك وفيلر الشفاه والبوتوكس. HA Makeover الشامل من أكثر تركيباتنا شيوعاً." },
                      ].map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                          <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                          <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </section>
              </div>
              <div className="hidden lg:block" dir="ltr">
                <ChinFillerSidebar />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" dir="rtl">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>ابدأ <span className={goldText}>رحلتك</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>كل علاج يبدأ باستشارة شاملة مع أطبائنا المتخصصين في تحديد الذقن والوجه.</p>
            <Link to="/contact">
              <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">احجز استشارة <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </section>

        <div className="sr-only" dir="rtl">
          <h2>فيلر الذقن في لندن — CosmeDocs هارلي ستريت</h2>
          <p>CosmeDocs متخصصة في فيلر الذقن باستخدام حمض الهيالورونيك في هارلي ستريت، لندن. تحديد الذقن بدون جراحة لتحسين البروفايل وتوازن الوجه. أطباء مسجلون في GMC منذ 2007. فننا التجميلي غير مرئي — جريء وطبيعي وعلى طريقتك دائماً.</p>
        </div>
      </div>
    </>
  );
}
