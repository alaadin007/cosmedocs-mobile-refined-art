import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ArrowRight, Shield, MapPin, Star, Sparkles, Droplets, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import DermalFillersSidebar from '@/components/dermal-fillers/DermalFillersSidebar';

export default function DermalFillersArabic() {
  const canonical = "https://www.cosmedocs.com/ar/treatments/dermal-fillers/";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "هل حقن الفيلر آمنة؟", "acceptedAnswer": { "@type": "Answer", "text": "نعم، عند إجرائها من قبل أطباء مؤهلين. في CosmeDocs، جميع العلاجات يقوم بها أطباء مسجلون في GMC باستخدام منتجات حمض الهيالورونيك المعتمدة من FDA." } },
      { "@type": "Question", "name": "كم تدوم نتائج الفيلر؟", "acceptedAnswer": { "@type": "Answer", "text": "تستمر النتائج عادةً من 12 إلى 18 شهراً حسب المنطقة المعالجة ونوع المنتج المستخدم." } },
      { "@type": "Question", "name": "ما الفرق بين الفيلر والبوتوكس؟", "acceptedAnswer": { "@type": "Answer", "text": "الفيلر يضيف حجماً ويستعيد الامتلاء المفقود. البوتوكس يرخي العضلات لتقليل التجاعيد الديناميكية. كثير من المرضى يستفيدون من الجمع بين العلاجين." } },
      { "@type": "Question", "name": "هل يمكن إذابة الفيلر؟", "acceptedAnswer": { "@type": "Answer", "text": "نعم، يمكن إذابة فيلر حمض الهيالورونيك باستخدام إنزيم الهيالورونيداز بأمان إذا لزم الأمر." } },
      { "@type": "Question", "name": "ما هي المناطق التي يمكن علاجها بالفيلر؟", "acceptedAnswer": { "@type": "Answer", "text": "الشفاه، الخدود، خط الفك، الذقن، تحت العين، الأنف، الصدغ، والمزيد. كل منطقة تتطلب خبرة وتقنية متخصصة." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "الشفاه", areas: ["تكبير الحجم", "تحديد الشكل", "قوس كيوبيد", "حقن طبيعي"], description: "أكثر علاجات الفيلر شيوعاً — من التحسين الدقيق إلى الحجم الملحوظ.", link: "/ar/treatments/lip-fillers/" },
    { title: "منتصف الوجه", areas: ["حجم الخدود", "تحت العين", "الصدغ", "خطوط الابتسامة"], description: "استعادة دعم منتصف الوجه لمظهر أكثر شباباً.", link: "/treatments/cheek-filler/" },
    { title: "أسفل الوجه", areas: ["نحت الفك", "تحديد الذقن", "خطوط الماريونيت", "اللغد"], description: "نحت هيكلي لأسفل وجه أكثر تحديداً وتوازناً.", link: "/ar/treatments/jawline-filler/" },
    { title: "علاجات متخصصة", areas: ["تجميل الأنف بدون جراحة", "تنعيم الجبهة", "تجديد شحمة الأذن", "تجديد اليدين"], description: "علاجات موجهة لمشاكل محددة." }
  ];

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
        <title>فيلر الوجه لندن | حقن حمض الهيالورونيك | أطباء هارلي ستريت | CosmeDocs</title>
        <meta name="description" content="دليل شامل لحقن الفيلر في لندن. تعرف على مناطق العلاج والمنتجات المستخدمة وخطة العلاج الشاملة. أطباء مسجلون في GMC بهارلي ستريت." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="ar" href={canonical} />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/acide-hyaluronique/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/acido-hialuronico/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <meta property="og:title" content="فيلر الوجه لندن | CosmeDocs هارلي ستريت" />
        <meta property="og:description" content="دليل شامل لحقن الفيلر. أطباء هارلي ستريت منذ 2007." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar" />
        <meta name="keywords" content="فيلر لندن, حقن الوجه, حمض الهيالورونيك, فيلر هارلي ستريت, تجميل الوجه بدون جراحة, فيلر الخدود, فيلر الفك, فيلر الذقن" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com",
          "telephone": "+44 20 3733 3227",
          "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        {/* HERO */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6">
              <Breadcrumb items={[{ label: 'العلاجات', path: '/ar/' }]} currentPage="فيلر الوجه" variant="light" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div dir="rtl">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street، لندن W1G 9PF
                  </div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    الفن
                    <span className={`block font-semibold ${goldText}`}>غير المرئي</span>
                  </h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    دليلك الشامل لحقن الفيلر. تعرف كيف يستعيد حمض الهيالورونيك الحجم المفقود ويحقق نتائج طبيعية لا يمكن ملاحظتها.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    في CosmeDocs، نحقن الفيلر بدقة وانضباط. أطباء مسجلون في GMC يقيّمون وجهك بالكامل لاستعادة التوازن — وليس تغيير الهوية. منذ 2007، فلسفتنا هي الفن غير المرئي.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">
                    احجز استشارة <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="ghost" onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))} className="text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 rounded-full px-8 py-6 text-base font-medium border border-gray-300">
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> استشارة AI
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
                    <circle cx="250" cy="250" r="60" fill="url(#centreGlowFillerAr)" />
                    <defs><radialGradient id="centreGlowFillerAr" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor={gold} stopOpacity="0.12" /><stop offset="100%" stopColor={gold} stopOpacity="0" /></radialGradient></defs>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14" dir="rtl">
              <h2 className={`text-3xl md:text-4xl font-light ${textH} mb-3`}>مناطق <span className={goldText}>العلاج</span></h2>
              <div className="w-12 h-px bg-[#C9A050]/40 mx-auto mb-4" />
              <p className={`${textBody} max-w-xl mx-auto text-sm font-light`}>كل منطقة تتطلب خبرة متخصصة ومنتجات مختلفة. أطباؤنا يختارون الفيلر الأمثل لتشريحك.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
              {treatmentAreaCards.map((card, i) => (
                <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                  {card.link ? (
                    <Link to={card.link} className="block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#C9A050]/30 transition-all h-full">
                      <h3 className={`text-lg font-medium ${textH} mb-2`}>{card.title}</h3>
                      <p className={`text-xs ${textBody} mb-4 font-light`}>{card.description}</p>
                      <div className="space-y-1.5">{card.areas.map(a => <span key={a} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3 h-3 text-[#C9A050]" />{a}</span>)}</div>
                    </Link>
                  ) : (
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full">
                      <h3 className={`text-lg font-medium ${textH} mb-2`}>{card.title}</h3>
                      <p className={`text-xs ${textBody} mb-4 font-light`}>{card.description}</p>
                      <div className="space-y-1.5">{card.areas.map(a => <span key={a} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3 h-3 text-[#C9A050]" />{a}</span>)}</div>
                    </div>
                  )}
                </motion.div>
              ))}
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>ما هو <span className={`${goldText} font-light`}>الفيلر؟</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <ExpandableSection preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        الفيلر هو مواد حقنية تعتمد على حمض الهيالورونيك — وهو مادة طبيعية موجودة في البشرة — تُستخدم لاستعادة الحجم المفقود وتحسين ملامح الوجه.
                      </p>
                    }>
                      <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                        <p>مع التقدم في العمر، يفقد الوجه حجمه الطبيعي بسبب فقدان الكولاجين والدهون وامتصاص العظام. الفيلر يستعيد هذا الحجم بشكل طبيعي ودقيق.</p>
                        <p>في CosmeDocs، نستخدم فقط فيلر حمض الهيالورونيك المعتمد من FDA من أفضل المصنعين بما في ذلك Juvederm و Restylane و Teoxane.</p>
                      </div>
                    </ExpandableSection>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>لماذا <span className={`${goldText} font-light`}>CosmeDocs؟</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "أطباء فقط", desc: "جميع العلاجات يقوم بها أطباء مسجلون في GMC — وليس ممرضات أو فنيين." },
                        { title: "منتجات ممتازة", desc: "نستخدم فقط فيلر حمض الهيالورونيك المعتمد من أفضل المصنعين العالميين." },
                        { title: "منذ 2007", desc: "أكثر من 17 عاماً من الخبرة في الطب التجميلي في هارلي ستريت." },
                        { title: "فلسفة طبيعية", desc: "فننا غير مرئي — جريء وطبيعي وعلى طريقتك دائماً." },
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
                        { name: "فيلر الشفاه 0.5 مل", price: "من £300" },
                        { name: "فيلر الشفاه 1 مل", price: "من £350" },
                        { name: "فيلر خط الفك 1 مل", price: "من £350" },
                        { name: "فيلر الذقن 1.2 مل", price: "من £350" },
                        { name: "فيلر تحت العين", price: "من £425" },
                        { name: "فيلر الخدود", price: "من £350" },
                        { name: "HA Makeover الشامل", price: "من £950" },
                      ].map(item => (
                        <div key={item.name} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-5 py-3">
                          <span className={`text-sm ${textH} font-light`}>{item.name}</span>
                          <span className={`text-sm font-medium ${goldText}`}>{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className={`text-xs ${textMuted} mt-4 font-light`}>رسوم الاستشارة (£50) تُخصم عند بدء العلاج في نفس اليوم.</p>
                  </motion.div>
                </section>

                {/* FAQs */}
                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>الأسئلة <span className={`${goldText} font-light`}>الشائعة</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <Accordion type="single" collapsible className="space-y-3">
                      {[
                        { q: "هل حقن الفيلر آمنة؟", a: "نعم، عند إجرائها من قبل أطباء مؤهلين. في CosmeDocs، جميع العلاجات يقوم بها أطباء مسجلون في GMC باستخدام منتجات معتمدة من FDA. المنتجات متوافقة حيوياً ويمكن إذابتها إذا لزم الأمر." },
                        { q: "كم تدوم نتائج الفيلر؟", a: "تستمر النتائج عادةً من 12 إلى 18 شهراً حسب المنطقة المعالجة والمنتج المستخدم ومعدل الأيض. فيلر الشفاه يدوم 6-12 شهراً، بينما فيلر الخدود والفك يدوم حتى 18 شهراً." },
                        { q: "هل الفيلر مؤلم؟", a: "الانزعاج بسيط جداً. نطبق مخدراً موضعياً ونستخدم فيلر يحتوي على ليدوكايين. يصف معظم المرضى الإحساس بأنه ضغط خفيف." },
                        { q: "ما الفرق بين الفيلر والبوتوكس؟", a: "الفيلر يضيف حجماً ويستعيد الامتلاء المفقود ويخفف التجاعيد الثابتة. البوتوكس يرخي العضلات لتقليل التجاعيد الديناميكية. كثير من المرضى يستفيدون من الجمع بين العلاجين." },
                        { q: "هل يمكن إذابة الفيلر؟", a: "نعم، يمكن إذابة فيلر حمض الهيالورونيك بأمان باستخدام إنزيم الهيالورونيداز. هذا يوفر ضماناً مهماً ويسمح بالتعديل عند الحاجة." },
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
                <DermalFillersSidebar />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" dir="rtl">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>ابدأ <span className={goldText}>رحلتك</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>كل علاج يبدأ باستشارة شاملة. أطباؤنا سيناقشون مخاوفك ويوصون بخطة مخصصة لبنية وجهك.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">احجز استشارة <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Hidden SEO */}
        <div className="sr-only" dir="rtl">
          <h2>فيلر الوجه في لندن — CosmeDocs هارلي ستريت</h2>
          <p>CosmeDocs هي عيادة طب تجميلي بإشراف أطباء في هارلي ستريت، لندن، متخصصة في حقن الفيلر باستخدام حمض الهيالورونيك. جميع العلاجات يقوم بها أطباء مسجلون في GMC منذ عام 2007. فننا التجميلي غير مرئي — جريء وطبيعي وعلى طريقتك دائماً.</p>
        </div>
      </div>
    </>
  );
}
