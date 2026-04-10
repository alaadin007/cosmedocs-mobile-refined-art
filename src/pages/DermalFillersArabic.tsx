import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Award, Calendar, MapPin, CheckCircle, Star, ArrowRight, Shield, Heart, Check, Activity, Syringe, GraduationCap, Stethoscope, MessageCircle, Sparkles, Building, Users, Phone, Droplets } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import DermalFillersSidebar from '@/components/dermal-fillers/DermalFillersSidebar';

export default function DermalFillersArabic() {
  const canonical = "https://www.cosmedocs.com/ar/dermal-fillers/";

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "كوزميدوكس",
    "image": ["https://www.cosmedocs.com/default-og-image.jpg"],
    "url": "https://www.cosmedocs.com",
    "telephone": "+44 20 3733 3227",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 20 3733 3227",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "هل الفيلر الجلدي آمن؟", "acceptedAnswer": { "@type": "Answer", "text": "نعم، عند إجرائه من قبل أطباء مؤهلين. في كوزميدوكس، جميع العلاجات يقوم بها أطباء مسجلون في GMC باستخدام فيلر حمض الهيالورونيك المعتمد من FDA. هذه المنتجات متوافقة حيوياً ويمكن إذابتها بالهيالورونيداز عند الحاجة." } },
      { "@type": "Question", "name": "من هو المرشح المناسب لعلاج الفيلر الجلدي؟", "acceptedAnswer": { "@type": "Answer", "text": "معظم البالغين الأصحاء فوق سن 18 عاماً مرشحون مناسبون. خلال الاستشارة، يقيّم أطباؤنا تاريخك الطبي وحالة بشرتك وتشريح وجهك وأهدافك الجمالية لتحديد مدى الملاءمة." } },
      { "@type": "Question", "name": "كم تدوم نتائج الفيلر الجلدي؟", "acceptedAnswer": { "@type": "Answer", "text": "تدوم النتائج عادة من 12 إلى 18 شهراً حسب منطقة العلاج والمنتج المستخدم وعملية الأيض الفردية. فيلر الشفاه يدوم من 6 إلى 12 شهراً، بينما فيلر الخدود والفك قد يدوم حتى 18 شهراً." } },
      { "@type": "Question", "name": "ما الفرق بين الفيلر والبوتوكس؟", "acceptedAnswer": { "@type": "Answer", "text": "الفيلر الجلدي يضيف حجماً لاستعادة الامتلاء المفقود وتنعيم الخطوط الثابتة. البوتوكس يُرخي العضلات لتقليل التجاعيد الديناميكية الناتجة عن تعبيرات الوجه. يستفيد كثير من المرضى من الجمع بين العلاجين." } },
      { "@type": "Question", "name": "هل يمكن عكس الفيلر الجلدي؟", "acceptedAnswer": { "@type": "Answer", "text": "نعم، يمكن إذابة فيلر حمض الهيالورونيك باستخدام إنزيم يُسمى الهيالورونيداز. هذا يوفر إجراء أمان مهماً ويسمح بالتعديلات عند الحاجة." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "الشفاه", areas: ["تكبير الحجم", "تحديد الشكل", "قوس كيوبيد", "نفخ طبيعي"], description: "أكثر علاجات الفيلر شيوعاً، من التحديد الدقيق إلى الحجم الأكبر." },
    { title: "منتصف الوجه", areas: ["حجم الخدود", "الهالات السوداء", "تجويف الصدغ", "الطيات الأنفية الشفوية"], description: "استعادة دعم منتصف الوجه ومعالجة فقدان الحجم الذي يساهم في مظهر الشيخوخة." },
    { title: "أسفل الوجه", areas: ["تحديد خط الفك", "بروز الذقن", "خطوط الماريونيت", "دعم الترهل"], description: "نحت هيكلي لأسفل وجه أكثر تحديداً وتوازناً." },
    { title: "متخصص", areas: ["تجميل الأنف بدون جراحة", "تنعيم الجبهة", "تجديد شحمة الأذن", "تجديد اليدين"], description: "علاجات مستهدفة لمخاوف وتحسينات محددة." }
  ];

  const bg = "bg-[#F5F5F3]";
  const cardBg = "bg-white";
  const cardBorder = "border-gray-200";
  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldText = "text-[#C9A050]";

  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>الفيلر الجلدي | تحسين الوجه بقيادة الأطباء | كوزميدوكس هارلي ستريت لندن</title>
        <meta name="description" content="دليل شامل للفيلر الجلدي في لندن. تعرّف على علاجات حمض الهيالورونيك، مناطق العلاج، ونهجنا الشامل للوجه. رعاية طبية بقيادة أطباء في هارلي ستريت." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/dermal-fillers/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/fillers/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/rellenos-dermicos/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <meta property="og:title" content="الفيلر الجلدي | تحسين الوجه بقيادة الأطباء | كوزميدوكس هارلي ستريت" />
        <meta property="og:description" content="دليل شامل للفيلر الجلدي في لندن. علاجات حمض الهيالورونيك بقيادة أطباء في هارلي ستريت." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.cosmedocs.com/default-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="فيلر جلدي لندن, فيلر هارلي ستريت, فيلر شفاه لندن, فيلر خدود, فيلر خط الفك, فيلر الهالات السوداء, حمض الهيالورونيك, فيلر الوجه, أفضل فيلر لندن" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'العلاجات', path: '/treatments' }]} currentPage="الفيلر الجلدي" variant="light" />
        </div>

        {/* HERO */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, rgba(201,160,80,0.02) 40%, transparent 70%)` }} />
            <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(201,160,80,0.04) 50%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start" dir="rtl">
              {/* Content */}
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    ٨-١٠ هارلي ستريت، لندن W1G 9PF
                  </div>

                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    فن
                    <span className={`block font-semibold ${goldText}`}>الاستعادة الخفيّة</span>
                  </h1>

                  <p className="text-sm text-[#C9A050]/60 tracking-widest uppercase mb-4 font-light">طبيعي · نتائج تدوم أطول</p>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    دليلك الشامل للفيلر الجلدي. فهم حمض الهيالورونيك، كيف يستعيد الحجم، وتحقيق نتائج طبيعية لا يمكن اكتشافها.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    في كوزميدوكس، يُوضع الفيلر بدقة واعتدال. أطباء مسجلون في GMC يقيّمون وجهك ككل، يستعيدون التوازن — ولا يغيّرون الهوية أبداً. منذ ٢٠٠٧، فلسفتنا هي الفن الخفي.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/harleystreet', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6 text-base font-medium transition-all duration-300">
                    احجز استشارة <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </Button>
                  <Button variant="ghost" onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))} className={`${textBody} hover:text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium border ${cardBorder}`}>
                    <Sparkles className="ml-2 h-4 w-4 text-[#C9A050]" /> اسأل طبيب الذكاء الاصطناعي
                  </Button>
                </motion.div>

                {/* Trust */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> مسجلون في GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +١٧ عاماً</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> تقييم ٤.٩</span>
                </motion.div>
              </div>

              {/* Hero visual */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[
                        { d: "M250 80 C300 80, 380 150, 380 250 C380 350, 300 420, 250 420 C200 420, 120 350, 120 250 C120 150, 200 80, 250 80", opacity: 0.08, delay: 0 },
                        { d: "M250 120 C285 120, 340 170, 340 250 C340 330, 285 380, 250 380 C215 380, 160 330, 160 250 C160 170, 215 120, 250 120", opacity: 0.1, delay: 0.5 },
                        { d: "M250 160 C270 160, 310 190, 310 250 C310 310, 270 340, 250 340 C230 340, 190 310, 190 250 C190 190, 230 160, 250 160", opacity: 0.12, delay: 1 },
                        { d: "M250 200 C260 200, 280 215, 280 250 C280 285, 260 300, 250 300 C240 300, 220 285, 220 250 C220 215, 240 200, 250 200", opacity: 0.15, delay: 1.5 },
                      ].map((shape, i) => (
                        <motion.path key={i} d={shape.d} stroke="#C9A050" strokeWidth="1.5" strokeLinecap="round" opacity={shape.opacity}
                          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: shape.opacity }} transition={{ duration: 2.5, delay: shape.delay * 0.3, ease: "easeOut" }} />
                      ))}
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowFillerAr)" />
                      <defs><radialGradient id="centreGlowFillerAr" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor="#C9A050" stopOpacity="0.15" /><stop offset="100%" stopColor="#C9A050" stopOpacity="0" /></radialGradient></defs>
                    </svg>
                  </div>

                  {/* Floating badge */}
                  <motion.div className={`absolute top-8 right-0 ${cardBg} backdrop-blur-sm rounded-2xl p-4 shadow-xl border ${cardBorder}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A050] flex items-center justify-center"><Star className="h-5 w-5 text-white fill-white" /></div>
                      <div><div className={`text-sm font-semibold ${textH}`}>عيادة موثوقة</div><div className={`text-xs ${textMuted}`}>منذ ٢٠٠٧</div></div>
                    </div>
                  </motion.div>

                  {/* HA info badge */}
                  <motion.div className={`absolute top-[45%] -right-2 ${cardBg} backdrop-blur-sm rounded-2xl p-4 shadow-xl border ${cardBorder} w-[240px]`} animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Droplets className="w-4 h-4 text-[#C9A050]" />
                      <span className="text-xs font-semibold text-[#C9A050] uppercase tracking-wider">حمض الهيالورونيك</span>
                    </div>
                    <p className={`text-[11px] ${textBody} leading-relaxed mb-2`}>مادة موجودة طبيعياً في البشرة تحتفظ بالرطوبة وتوفر الدعم الهيكلي.</p>
                    <div className={`flex items-center gap-3 text-[10px] ${textMuted}`}>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> متوافق حيوياً</span>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> قابل للعكس</span>
                    </div>
                  </motion.div>

                  {/* Review */}
                  <motion.div className={`absolute bottom-16 -left-4 ${cardBg} backdrop-blur-sm rounded-2xl p-5 shadow-xl border ${cardBorder} max-w-[300px]`} animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">ن</div>
                      <div><div className={`text-sm font-medium ${textH}`}>نورا م.</div><div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div></div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"الجميع يقولون إنني أبدو رائعة لكنهم لا يستطيعون تحديد السبب. هذه علامة العمل المتقن حقاً."</p>
                    <Link to="/testimonials" className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-2 hover:underline">المزيد من التجارب الحقيقية</Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16" dir="rtl">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            <div className="space-y-14">

              {/* What Are Dermal Fillers */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>ما هو <span className={`${goldText} font-light`}>الفيلر الجلدي؟</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>الفيلر الجلدي هو علاج بالحقن يُصنع غالباً من حمض الهيالورونيك — مادة موجودة طبيعياً في البشرة تساعد على الاحتفاظ بالترطيب والحجم والمرونة. مع التقدم في العمر، يفقد الوجه الدعم الهيكلي — يتراجع العظم، تتحول وسائد الدهون، وتصبح البشرة أرق. يعمل الفيلر على استعادة هذا الحجم المفقود، رفع الأنسجة المترهلة، وتنعيم الخطوط — بدون جراحة.</p>
                  }>
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <p className={`text-xs font-medium ${textH} mb-4`}>ما يمكن للفيلر معالجته</p>
                        <ul className="space-y-2">
                          {["استعادة فقدان الحجم المرتبط بالعمر في الخدود والصدغين والشفاه", "تحسين نسب الوجه وتناسقه", "دعم الأنسجة المترهلة ورفع الترهل", "تنعيم الخطوط الثابتة والطيات الأنفية الشفوية", "تعزيز المعالم الطبيعية — خط الفك، الذقن، الشفاه"].map((fact) => (
                            <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                          ))}
                        </ul>
                      </div>
                      <p>في كوزميدوكس، لا يُستخدم الفيلر أبداً "لملء الخطوط بشكل أعمى". يُوضع بشكل استراتيجي لدعم الوجه ككل، مع احترام التشريح الفردي والتعبير الطبيعي.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How They Work */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>كيف يعمل <span className={`${goldText} font-light`}>الفيلر الجلدي</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { step: "١", title: "التقييم", desc: "يحلل طبيبك تشريح الوجه وهيكل العظام وأنماط فقدان الحجم لإنشاء خطة علاج مخصصة." },
                        { step: "٢", title: "الحقن", desc: "يُوضع جل حمض الهيالورونيك بدقة باستخدام الكانيولا أو الإبر الدقيقة في أعماق محددة لاستعادة أو تعزيز الحجم." },
                        { step: "٣", title: "الاندماج", desc: "يندمج الفيلر مع الأنسجة المحيطة، يجذب الرطوبة ويوفر دعماً وهيكلاً طبيعي المظهر." },
                      ].map((s) => (
                        <div key={s.step} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 text-center`}>
                          <div className="bg-[#C9A050]/15 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-sm font-medium text-[#C9A050]">{s.step}</span>
                          </div>
                          <p className={`text-sm font-medium ${textH} mb-1`}>{s.title}</p>
                          <p className={`${textBody} text-xs font-light`}>{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  }>
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>على عكس البوتوكس الذي يُرخي العضلات، يضيف الفيلر الجلدي حجماً فعلياً تحت سطح البشرة. حمض الهيالورونيك في الفيلر متوافق حيوياً — يعمل مع جسمك، وليس ضده.</p>
                      <p>يأتي الفيلر المتميز بلزوجات مختلفة — جل أكثر سمكاً للدعم الهيكلي (خط الفك، الذقن)، جل متوسط للحجم (الخدود)، وجل أنعم للمناطق الحساسة (الشفاه، الهالات السوداء). اختيار المنتج المناسب لكل منطقة أمر حاسم للنتائج الطبيعية.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>مناطق <span className={`${goldText} font-light`}>العلاج</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className={`${textBody} text-sm leading-relaxed font-light mb-6`}>كل منطقة من الوجه لها تشريح فريد وأنماط شيخوخة ومتطلبات خاصة. يخصص أطباؤنا اختيار المنتج وعمق الوضع والحجم لكل منطقة فردية.</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {treatmentAreaCards.map((card) => (
                      <div key={card.title} className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                        <p className={`text-sm font-medium ${textH} mb-2`}>{card.title}</p>
                        <p className={`${textMuted} text-xs font-light mb-3`}>{card.description}</p>
                        <ul className="space-y-1.5">
                          {card.areas.map((area) => (
                            <li key={area} className={`flex items-center gap-2 text-xs ${textBody} font-light`}>
                              <Check className="w-3 h-3 text-[#C9A050]/60" /> {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Full-Face Approach */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>نهج <span className={`${goldText} font-light`}>الوجه الكامل</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>شيخوخة الوجه لا تحدث بمعزل. الخطوط والطيات والتجويف غالباً ما تكون نتيجة تغييرات هيكلية في أماكن أخرى من الوجه. لهذا يتبنى أطباؤنا نهج الوجه الكامل — تقييم كيفية تفاعل المناطق المختلفة، وكيف يمكن لاستعادة الدعم في منطقة واحدة تحسين أخرى بشكل طبيعي.</p>
                  }>
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <p className={`text-xs font-medium ${textH} mb-4`}>هذا النهج:</p>
                        <ul className="space-y-2">
                          {["يقلل من خطر الإفراط في ملء أي منطقة واحدة", "ينتج نتائج أكثر طبيعية وتوازناً", "يحافظ على حركة الوجه وتعبيراته", "يقدم نتائج أطول أمداً بكمية أقل من المنتج"].map((item) => (
                            <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-[#C9A050]/60 italic font-light">هدفنا ليس التصحيح الواضح — إنه الاستعادة الدقيقة.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Who Is Suitable */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>من هو <span className={`${goldText} font-light`}>المرشح المناسب؟</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <div className="flex items-center gap-2 mb-3"><Sparkles className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-sm font-medium ${textH}`}>التحسين</p></div>
                        <p className={`${textBody} text-xs leading-relaxed font-light`}>لمن يسعون لتحسين ملامح الوجه — حجم الشفاه، تحديد الخدود، نحت خط الفك — بغض النظر عن العمر.</p>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <div className="flex items-center gap-2 mb-3"><Activity className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-sm font-medium ${textH}`}>الاستعادة</p></div>
                        <p className={`${textBody} text-xs leading-relaxed font-light`}>لفقدان الحجم المرتبط بالعمر — تجويف الخدود، طيات أنفية عميقة، ترقق الشفاه، تجويف الصدغ. استعادة ما أخذه الزمن.</p>
                      </div>
                    </div>
                  }>
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                        <p className={`text-xs font-medium ${textH} mb-4`}>اعتبارات العمر</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          {[
                            { age: "العشرينات–الثلاثينات", text: "تركيز على التحسين. تحديد الشفاه، بروز الذقن، أو نحت خدود دقيق. حجم خفيف، نتائج طبيعية." },
                            { age: "الأربعينات–الخمسينات", text: "تبدأ استعادة الحجم. دعم منتصف الوجه، الطيات الأنفية الشفوية، تحديد خط الفك. غالباً يُجمع مع البوتوكس." },
                            { age: "+الستينات", text: "استعادة شاملة. مناطق متعددة تستفيد من الدعم الهيكلي. جزء من نهج تجديد أوسع." },
                          ].map((a) => (
                            <div key={a.age}><p className="text-[#C9A050]/70 font-medium text-xs mb-1">{a.age}</p><p className={`${textMuted} text-xs font-light`}>{a.text}</p></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Results Timeline */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>جدول <span className={`${goldText} font-light`}>النتائج</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <div className="space-y-4">
                      {[
                        { title: "اليوم الأول: فوري", desc: "تحسن مرئي فوراً. بعض التورم طبيعي ومتوقع — يهدأ خلال ٤٨-٧٢ ساعة." },
                        { title: "الأسبوع ٢-٤: استقرار", desc: "يزول التورم تماماً. اندمج الفيلر مع الأنسجة وترطّب. هذا عندما ترى النتيجة الحقيقية." },
                        { title: "الشهر ١٢-١٨: المدة", desc: "تدوم النتائج عادة ١٢-١٨ شهراً حسب المنطقة والمنتج المستخدم والأيض الفردي." },
                      ].map((t) => (
                        <div key={t.title} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                          <div><p className={`text-xs font-medium ${textH} mb-0.5`}>{t.title}</p><p className={`${textMuted} text-xs font-light`}>{t.desc}</p></div>
                        </div>
                      ))}
                    </div>
                  }>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>المدة حسب المنطقة</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "الشفاه", desc: "٦-١٢ شهراً (منطقة كثيرة الحركة)" },
                          { label: "الخدود", desc: "١٢-١٨ شهراً" },
                          { label: "خط الفك والذقن", desc: "١٢-١٨ شهراً" },
                          { label: "الهالات السوداء", desc: "١٢-١٨ شهراً (حركة قليلة)" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span><strong className={`${textBody}`}>{f.label}:</strong> {f.desc}</span></div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Fillers vs Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>كيف يتناسب الفيلر مع <span className={`${goldText} font-light`}>تجديد الوجه</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>فهم الفرق بين الفيلر الجلدي و<Link to="/ar/botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">البوتوكس</Link> يساعدك في اتخاذ قرارات مدروسة حول خطة علاجك.</p>
                  }>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                          <p className="text-sm font-medium text-[#C9A050]/80 mb-3">الفيلر الجلدي</p>
                          <p className="text-[#C9A050]/50 text-xs mb-3 font-light">يضيف حجماً ← يستعيد الامتلاء المفقود</p>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• الخطوط الموجودة أثناء الراحة (خطوط ثابتة)</li>
                            <li>• الخدود، الشفاه، خط الفك، الطيات الأنفية</li>
                            <li>• استعادة الحجم والنحت</li>
                            <li>• النتائج تدوم ٦-١٨ شهراً</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6`}>
                          <p className={`text-sm font-medium ${textBody} mb-3`}>البوتوكس</p>
                          <p className={`${textMuted} text-xs mb-3 font-light`}>يُرخي العضلات ← يقلل التجاعيد الديناميكية</p>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• الخطوط التي تظهر مع التعبيرات</li>
                            <li>• الجبهة، خطوط العبوس، أقدام الغراب</li>
                            <li>• علاج وقائي</li>
                            <li>• النتائج تدوم ٣-٦ أشهر</li>
                          </ul>
                        </div>
                      </div>
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>يستفيد كثير من المرضى من نهج مشترك. يعالج البوتوكس خطوط التعبير الديناميكية بينما يستعيد الفيلر الحجم المفقود — معاً، يحققان تجديداً شاملاً للوجه.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Safety */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>الأمان <span className={`${goldText} font-light`}>واستشارتك</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>فيلر حمض الهيالورونيك يتمتع بملف أمان ممتاز. إنه متوافق حيوياً، مؤقت، والأهم — قابل للعكس تماماً باستخدام إنزيم يُسمى الهيالورونيداز.</p>
                  }>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}`}>ملف الأمان</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• منتجات معتمدة من FDA و CE</li>
                            <li>• متوافقة حيوياً — تعمل مع جسمك</li>
                            <li>• قابلة للعكس بالهيالورونيداز</li>
                            <li>• مؤقتة — تُمتص طبيعياً مع الوقت</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}`}>أثناء استشارتك</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• تقييم شامل للوجه والتاريخ الطبي</li>
                            <li>• مناقشة المخاوف والأهداف</li>
                            <li>• نصيحة صادقة — نقول لا عندما يكون مناسباً</li>
                            <li>• وضع توقعات واقعية</li>
                            <li>• الحصول على الموافقة المستنيرة</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Filler Migration Myth */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>أسطورة <span className={`${goldText} font-light`}>هجرة الفيلر</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className={`${textBody} text-sm leading-relaxed font-light`}>"هجرة الفيلر" واحدة من أكثر المخاوف تكراراً في التجميل — لكنها إلى حد كبير مفهوم خاطئ. فيلر حمض الهيالورونيك، عند وضعه بشكل صحيح من قبل ممارس خبير، يندمج مع الأنسجة المحيطة ويبقى بدقة حيث تم حقنه.</p>
                  }>
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>ما يُوصف غالباً بالهجرة هو عادة نتيجة تقنية حقن سيئة — فيلر موضوع بشكل سطحي جداً، بكميات مفرطة، أو في مستوى نسيجي خاطئ.</p>
                      <div className={`${cardBg} border-r-2 border-[#C9A050] rounded-l-xl p-6`}>
                        <blockquote className={`${textBody} text-xs italic leading-relaxed mb-4`}>"الهجرة مشكلة تقنية، وليست مشكلة منتج. عندما يُوضع الفيلر في العمق الصحيح، في مستوى النسيج المناسب، بكميات مناسبة — فهو ببساطة لا يهاجر."</blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">AH</div>
                          <div><p className={`${textH} font-medium text-xs`}>د. أحمد حق</p><p className={`${textMuted} text-[10px]`}>المدير الطبي، كوزميدوكس</p></div>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Preparation & Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>التحضير <span className={`${goldText} font-light`}>والرعاية اللاحقة</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>قبل العلاج</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["تجنب مسيلات الدم (الأسبرين، الإيبوبروفين) لمدة ٧ أيام", "قلل الكحول ٢٤-٤٨ ساعة قبل", "أبلغ الممارس بجميع الأدوية", "تجنب علاج الأسنان ٢ أسابيع قبل/بعد"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5`}>
                      <p className={`text-xs font-medium ${textH} mb-3`}>بعد العلاج</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["تجنب لمس أو الضغط على المناطق المعالجة لمدة ٦ ساعات", "تخطي التمارين المكثفة لمدة ٢٤-٤٨ ساعة", "تجنب الساونا وغرف البخار والحرارة الشديدة", "نم بوضعية مرتفعة قليلاً في الليلة الأولى"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Before & After */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>نتائج الفيلر الجلدي <span className={`${goldText} font-light`}>قبل وبعد</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/dermal-fillers/full-face-filler-before-after-preview.jpg" alt="نتائج الفيلر الجلدي للوجه الكامل قبل وبعد" className="w-full h-auto object-contain" loading="lazy" />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>جميع الصور لمرضى حقيقيين عولجوا من قبل أطبائنا في عيادتنا في هارلي ستريت. تختلف النتائج حسب تشريح الوجه وخطة العلاج.</p>
                  <Link to="/before-after/dermal-fillers/" className="inline-flex items-center gap-2 text-[#C9A050]/70 hover:text-[#C9A050] text-xs font-light transition-colors">
                    عرض معرض الفيلر الكامل قبل وبعد ← <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </section>

              {/* Why Choose Cosmedocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>لماذا تختار <span className={`${goldText} font-light`}>كوزميدوكس؟</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "الخبرة", desc: "+١ مليون حقنة منذ ٢٠٠٧" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "التدريب", desc: "مدربون HSI" },
                      { icon: <Shield className="w-4 h-4" />, title: "الجودة", desc: "منتجات HA متميزة" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "الفلسفة", desc: "فن خفي" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "بقيادة أطباء", desc: "أطباء مؤهلون" },
                    ].map((w) => (
                      <div key={w.title} className="text-center">
                        <div className="bg-[#C9A050]/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-[#C9A050]/60">{w.icon}</div>
                        <p className={`text-xs font-medium ${textH} mb-0.5`}>{w.title}</p>
                        <p className={`${textMuted} text-[10px] font-light`}>{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>الأسئلة <span className={`${goldText} font-light`}>الشائعة</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "safe", q: "هل الفيلر الجلدي آمن؟", a: "نعم، عند إجرائه من قبل أطباء مؤهلين. في كوزميدوكس، جميع العلاجات يقوم بها أطباء مسجلون في GMC باستخدام فيلر حمض الهيالورونيك المعتمد من FDA. هذه المنتجات متوافقة حيوياً ويمكن إذابتها بالهيالورونيداز عند الحاجة." },
                      { v: "suitable", q: "من هو المرشح المناسب لعلاج الفيلر الجلدي؟", a: "معظم البالغين الأصحاء فوق سن ١٨ عاماً مرشحون مناسبون. خلال الاستشارة، يقيّم أطباؤنا تاريخك الطبي وحالة بشرتك وتشريح وجهك وأهدافك الجمالية لتحديد مدى الملاءمة." },
                      { v: "last", q: "كم تدوم نتائج الفيلر الجلدي؟", a: "تدوم النتائج عادة ١٢-١٨ شهراً حسب منطقة العلاج والمنتج المستخدم والأيض الفردي. فيلر الشفاه يدوم ٦-١٢ شهراً، بينما فيلر الخدود وخط الفك قد يدوم حتى ١٨ شهراً." },
                      { v: "pain", q: "هل الفيلر الجلدي مؤلم؟", a: "يصف معظم المرضى الإحساس بأنه إزعاج خفيف وليس ألماً. نستخدم كريم تخدير موضعي ومعظم الفيلر يحتوي على ليدوكايين للراحة. العلاج محتمل جيداً." },
                      { v: "natural", q: "هل سيبدو الفيلر طبيعياً؟", a: "مع ممارس خبير، بالتأكيد. المظهر 'المفرط الملء' يأتي من تقنية سيئة أو حجم زائد. نهجنا يُعطي الأولوية لنتائج دقيقة ومتوازنة تُعزز مظهرك بدلاً من تغييره." },
                      { v: "combine", q: "هل يمكن دمج الفيلر الجلدي مع البوتوكس؟", a: "نعم، يستفيد كثير من المرضى من الجمع بين العلاجين. يستعيد الفيلر الحجم والهيكل بينما يعالج البوتوكس خطوط التعبير الديناميكية. سينصحك طبيبك بأفضل نهج خلال الاستشارة." },
                      { v: "reverse", q: "هل يمكن عكس الفيلر الجلدي؟", a: "نعم، يمكن إذابة فيلر حمض الهيالورونيك باستخدام إنزيم يُسمى الهيالورونيداز. هذا يوفر إجراء أمان مهماً ويسمح بالتعديلات عند الحاجة." },
                    ].map((faq) => (
                      <AccordionItem key={faq.v} value={faq.v} className={`border-gray-200`}>
                        <AccordionTrigger className={`${textH} hover:text-[#C9A050] text-right text-sm font-light`}>{faq.q}</AccordionTrigger>
                        <AccordionContent className={`${textBody} text-xs font-light`}>{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block" dir="ltr">
              <div className="sticky top-24"><DermalFillersSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-[#F5F5F3]">
          <div className="max-w-3xl mx-auto text-center" dir="rtl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-3xl font-light mb-4 ${textH}`}>استشارتك <span className={`${goldText}`}>تبدأ هنا</span></h2>
              <p className={`${textBody} mb-8`}>رعاية مدروسة من أطباء هارلي ستريت</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6" onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}>احجز استشارة</Button>
                <Button variant="outline" className={`border-gray-300 ${textH} hover:bg-gray-200 rounded-full px-8 py-6`} onClick={() => window.location.href = 'tel:03330551503'}><Phone className="w-4 h-4 ml-2" /> 0333 055 1503</Button>
                <Button variant="outline" className="border-green-500/50 text-green-600 hover:bg-green-500 hover:text-white rounded-full px-8 py-6" onClick={() => window.open('https://wa.me/447535076003', '_blank')}><MessageCircle className="w-4 h-4 ml-2" /> واتساب</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-white" dir="ltr">
          <DermalFillersSidebar />
        </section>
      </div>
    </>
  );
}
