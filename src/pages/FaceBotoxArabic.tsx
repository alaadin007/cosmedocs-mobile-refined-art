import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Award, Calendar, MapPin, CheckCircle, Star, ArrowRight, Shield, Heart, Check, Activity, Syringe, GraduationCap, Stethoscope, MessageCircle, Sparkles, Building, Users, Phone, Play, ExternalLink } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import BotoxSidebarLight from '@/components/botox/BotoxSidebarLight';
import crowsFeetThumb from '@/assets/crows-feet-filler-thumb.jpg';

export default function FaceBotoxArabic() {
  const canonical = "https://www.cosmedocs.com/ar/botox/";

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
      { "@type": "Question", "name": "ما هو البوتوكس وكيف يعمل؟", "acceptedAnswer": { "@type": "Answer", "text": "البوتوكس (توكسين البوتولينوم من النوع أ) هو بروتين نقي يُرخي عضلات الوجه المستهدفة مؤقتاً عن طريق حجب الإشارات العصبية. هذا يُقلل من ظهور التجاعيد الديناميكية الناتجة عن تعبيرات الوجه المتكررة. يُستخدم العلاج بأمان منذ أكثر من 30 عاماً." } },
      { "@type": "Question", "name": "من هو المرشح المناسب للبوتوكس؟", "acceptedAnswer": { "@type": "Answer", "text": "البوتوكس مناسب للبالغين من سن 18 فما فوق. يعمل جيداً لمن هم في منتصف العشرينات إلى الثلاثينات للعلاج الوقائي، وكذلك لمن لديهم خطوط واضحة للعلاج التصحيحي. لا يُنصح به أثناء الحمل أو الرضاعة." } },
      { "@type": "Question", "name": "كم تدوم نتائج البوتوكس؟", "acceptedAnswer": { "@type": "Answer", "text": "تدوم نتائج البوتوكس عادة من 3 إلى 6 أشهر. تظهر التأثيرات الأولى خلال 3 إلى 5 أيام، مع ظهور النتائج الكاملة بعد 10 إلى 14 يوماً." } },
      { "@type": "Question", "name": "ما الفرق بين البوتوكس والفيلر؟", "acceptedAnswer": { "@type": "Answer", "text": "البوتوكس يُرخي العضلات لتقليل التجاعيد الديناميكية (الخطوط التي تظهر مع الحركة). الفيلر يُضيف حجماً لاستعادة الامتلاء المفقود وتنعيم الخطوط الثابتة. يستفيد كثير من المرضى من الجمع بين العلاجين." } },
      { "@type": "Question", "name": "كيف أختار عيادة بوتوكس في لندن؟", "acceptedAnswer": { "@type": "Answer", "text": "ابحث عن عيادات يقودها أطباء مؤهلون، بأسعار شفافة، وعمليات استشارة سليمة، وتقييمات مرضى قوية. تحقق من تسجيل CQC وتأكد من حصول الممارسين على تدريب متخصص في تجميل الوجه." } }
    ]
  };

  const treatmentAreaCards = [
    { title: "الوجه العلوي", areas: ["خطوط الجبهة", "خطوط العبوس (الغلابيلا)", "أقدام الغراب", "رفع الحاجب"], description: "أكثر مناطق علاج البوتوكس شيوعاً، تعالج الخطوط الناتجة عن تعبيرات الوجه." },
    { title: "الوجه الأوسط والسفلي", areas: ["خطوط الأرنب", "قلب الشفة", "الابتسامة اللثوية", "تنقير الذقن"], description: "علاجات دقيقة لمنطقة الأنف والشفتين والذقن." },
    { title: "خط الفك والرقبة", areas: ["الماسيتر (تنحيف الفك)", "رفع نفرتيتي", "أربطة العنق"], description: "علاجات نحت ورفع للوجه السفلي والرقبة." },
    { title: "متخصص", areas: ["تراب توكس (الأكتاف)", "فرط التعرق", "الصداع النصفي"], description: "تطبيقات علاجية وجسدية تتجاوز الاستخدام التجميلي." }
  ];

  const bg = "bg-[#F5F5F3]";
  const cardBg = "bg-white";
  const cardBorder = "border-gray-200";
  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldBg = "bg-[#C9A050]";
  const goldText = "text-[#C9A050]";
  const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>البوتوكس | دليل علاج التجاعيد | كوزميدوكس هارلي ستريت لندن</title>
        <meta name="description" content="دليل شامل للبوتوكس في لندن. تعرّف على ماهية البوتوكس، آلية عمله، مناطق العلاج، والنتائج المتوقعة. رعاية طبية بقيادة أطباء في هارلي ستريت منذ 2007." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/botox/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/botox/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/botox/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/botox/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/botox/" />
        <meta property="og:title" content="البوتوكس | دليل علاج التجاعيد | كوزميدوكس هارلي ستريت" />
        <meta property="og:description" content="دليل شامل للبوتوكس في لندن. رعاية طبية بقيادة أطباء مسجلين في هارلي ستريت." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.cosmedocs.com/default-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="بوتوكس لندن, بوتوكس هارلي ستريت, علاج التجاعيد لندن, حقن البوتوكس, بوتوكس تجميلي, أفضل عيادة بوتوكس لندن, بوتوكس وقائي, بوتوكس للرجال" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'العلاجات', path: '/treatments' }]} currentPage="البوتوكس" variant="light" />
        </div>

        {/* HERO */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, rgba(201,160,80,0.02) 40%, transparent 70%)` }} />
            <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(201,160,80,0.04) 50%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start" dir="rtl">
              {/* Right (RTL primary) — Content */}
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    ٨-١٠ هارلي ستريت، لندن W1G 9PF
                  </div>

                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    فن
                    <span className={`block font-semibold ${goldText}`}>إزالة التجاعيد الخفيّة</span>
                  </h1>
                  <p className={`text-sm ${goldText}/60 tracking-widest uppercase mb-4 font-light`}>طبيعي · نتائج تدوم أطول</p>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    دليلك الشامل للبوتوكس. فهم آلية العمل، ما يمكنك توقعه، وتحقيق نتائج طبيعية لا يمكن اكتشافها.
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    في كوزميدوكس، تُمارَس علاجات مكافحة التجاعيد بضبط ودقة. أطباء مسجلون في GMC يقدمون رعاية لطيفة بقيادة طبية مصممة للتجديد — وليس للمبالغة. منذ ٢٠٠٧، نركز على نتائج طبيعية تبدو عفوية، وليست واضحة.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                    className={`group ${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20`}
                  >
                    احجز استشارة <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 rotate-180" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 rounded-full px-8 py-6 text-base font-medium border border-gray-300"
                  >
                    <Sparkles className="ml-2 h-4 w-4 text-[#C9A050]" /> اسأل طبيب الذكاء الاصطناعي
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> مسجل في GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +١٧ عاماً</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> تقييم ٤.٩</span>
                </motion.div>
              </div>

              {/* Left (RTL secondary) — Wrinkle wave lines */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[
                        { d: "M50 250 Q125 210, 200 250 T350 250 T500 250", opacity: 0.08 },
                        { d: "M30 210 Q130 165, 220 210 T370 210 T490 210", opacity: 0.1 },
                        { d: "M30 290 Q130 335, 220 290 T370 290 T490 290", opacity: 0.1 },
                        { d: "M40 170 Q140 120, 230 170 T380 170 T480 170", opacity: 0.12 },
                        { d: "M40 330 Q140 380, 230 330 T380 330 T480 330", opacity: 0.12 },
                        { d: "M60 130 Q160 80, 250 130 T400 130 T500 130", opacity: 0.07 },
                        { d: "M60 370 Q160 420, 250 370 T400 370 T500 370", opacity: 0.07 },
                      ].map((wave, i) => (
                        <path key={i} d={wave.d} stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity={wave.opacity} />
                      ))}
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowLightAr)" />
                      <defs>
                        <radialGradient id="centreGlowLightAr" cx="0.5" cy="0.5" r="0.5">
                          <stop offset="0%" stopColor={gold} stopOpacity="0.12" />
                          <stop offset="100%" stopColor={gold} stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Trusted Clinic badge */}
                  <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${goldBg} flex items-center justify-center`}><Star className="h-5 w-5 text-white fill-white" /></div>
                      <div>
                        <div className={`text-sm font-semibold ${textH}`}>عيادة موثوقة</div>
                        <div className={`text-xs ${textMuted}`}>منذ ٢٠٠٧</div>
                      </div>
                    </div>
                  </div>

                  {/* Invisible Needle infographic */}
                  <div className="absolute top-[45%] -right-2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200 w-[260px]">
                    <div className="flex items-center gap-2 mb-3">
                      <Syringe className="w-4 h-4 text-[#C9A050]" />
                      <span className={`text-xs font-semibold ${goldText} uppercase tracking-wider`}>إبرة غير مرئية</span>
                    </div>
                    <svg viewBox="0 0 220 80" className="w-full mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="45" cy="38" r="20" stroke={gold} strokeWidth="1.5" fill={gold} fillOpacity="0.1" />
                      <text x="45" y="42" fill={gold} fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">0.20mm</text>
                      <text x="45" y="10" fill="#555" fontSize="8" fontFamily="sans-serif" textAnchor="middle">إبرة 33G</text>
                      <circle cx="130" cy="38" r="7" stroke="#aaa" strokeWidth="0.8" fill="#aaa" fillOpacity="0.1" />
                      <text x="130" y="41" fill="#888" fontSize="6" fontFamily="sans-serif" textAnchor="middle">0.07</text>
                      <text x="130" y="10" fill="#888" fontSize="8" fontFamily="sans-serif" textAnchor="middle">شعرة بشرية</text>
                      <text x="88" y="42" fill="#ccc" fontSize="9" fontFamily="sans-serif" textAnchor="middle">مقابل</text>
                      <text x="110" y="75" fill="#bbb" fontSize="7" fontFamily="sans-serif" textAnchor="middle">قطر المقطع العرضي</text>
                    </svg>
                    <p className={`text-[10px] ${textMuted} leading-relaxed`}>أصغر إبرة في المجال — غير مرئية حرفياً. أسمك بـ ٣ مرات فقط من الشعرة البشرية.</p>
                  </div>

                  {/* Review teaser card */}
                  <div className="absolute bottom-16 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-black/5 border border-gray-200 max-w-[300px]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full ${goldBg} flex items-center justify-center text-white text-xs font-bold`}>ن</div>
                      <div>
                        <div className={`text-sm font-medium ${textH}`}>نورا م.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"صديقاتي يسألنني دائماً عن روتين العناية ببشرتي لأنني أبدو منتعشة جداً ولا أحد يستطيع معرفة أنني أجريت أي علاج!"</p>
                    <Link to="/testimonials" className={`inline-flex items-center gap-1 text-xs ${goldText} mt-2 hover:underline`}>المزيد من التجارب الحقيقية</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT — Two-column layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lazy-section">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12" dir="rtl">
            {/* RIGHT (RTL primary) — Educational Content */}
            <div className="space-y-14">

              {/* What is Botox */}
              <section id="what-is-botox">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    ما هو <span className={`${goldText} font-light`}>البوتوكس؟</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        البوتوكس هو الاسم التجاري لتوكسين البوتولينوم من النوع أ، وهو بروتين نقي مشتق من بكتيريا <em>كلوستريديوم بوتولينوم</em>. عند حقنه بجرعات صغيرة مضبوطة، يُرخي العضلات المستهدفة مؤقتاً عن طريق حجب الإشارات العصبية — مما يُنعّم التجاعيد الديناميكية مع الحفاظ على التعبير الطبيعي.
                      </p>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        طُوّر البوتوكس في الأصل لعلاج الحالات الطبية مثل تشنجات العضلات والحول، وحصل على موافقة إدارة الغذاء والدواء الأمريكية للاستخدام التجميلي عام ٢٠٠٢. اليوم، هو العلاج التجميلي غير الجراحي الأكثر شعبية في العالم.
                      </p>
                      <ul className="space-y-2">
                        {["أكثر من 30 عاماً من الاستخدام السريري مع سجل أمان ممتاز", "موافق عليه من FDA و MHRA والهيئات التنظيمية حول العالم", "يستغرق العلاج من 10 إلى 20 دقيقة بدون فترة نقاهة", "التأثيرات مؤقتة وقابلة للعكس بالكامل"].map((fact) => (
                          <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                        ))}
                      </ul>
                      <p>
                        مصطلح "البوتوكس" يُستخدم غالباً بشكل عام، لكن توجد عدة علامات تجارية تشمل أزالور وبوكوتور وديسبورت. في كوزميدوكس، نستخدم منتجات فاخرة ومرخصة لضمان نتائج متسقة وقابلة للتنبؤ.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section id="how-it-works">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    كيف يعمل <span className={`${goldText} font-light`}>البوتوكس</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { step: "١", title: "الحقن", desc: "يتم حقن كميات صغيرة بدقة في العضلات المستهدفة باستخدام إبر فائقة النعومة." },
                            { step: "٢", title: "حجب الأعصاب", desc: "يحجب البوتوكس إفراز الأسيتيل كولين، مما يمنع الإشارات العصبية من الوصول للعضلات." },
                            { step: "٣", title: "الاسترخاء", desc: "تسترخي العضلات المستهدفة، مما ينعّم البشرة ويقلل ظهور التجاعيد." },
                          ].map((s) => (
                            <div key={s.step} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 text-center shadow-sm`}>
                              <div className="bg-[#C9A050]/15 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                                <span className={`text-sm font-medium ${goldText}`}>{s.step}</span>
                              </div>
                              <p className={`text-sm font-medium ${textH}/70 mb-1`}>{s.title}</p>
                              <p className={`${textMuted} text-xs font-light`}>{s.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        تتكون التجاعيد الديناميكية من تقلصات العضلات المتكررة على مر السنين — فكّر في الخطوط التي تظهر عند العبوس أو التحديق. من خلال إرخاء هذه العضلات مؤقتاً، ينعّم البوتوكس الخطوط الموجودة ويمنع تكوّن خطوط جديدة.
                      </p>
                      <p>
                        مفتاح النتائج الطبيعية يكمن في الجرعة والموضع الدقيق. الممارس الماهر يُرخي العضلات المسببة للتجاعيد مع الحفاظ على تعبيرات الوجه الطبيعية.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section id="treatment-areas">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    مناطق <span className={`${goldText} font-light`}>العلاج</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className={`${textBody} text-sm leading-relaxed font-light mb-6`}>
                    يمكن للبوتوكس علاج مناطق مختلفة من الوجه والجسم. كل منطقة تتطلب تقنيات وجرعات مختلفة للحصول على أفضل النتائج.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {treatmentAreaCards.map((card) => (
                      <div key={card.title} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/70 mb-2`}>{card.title}</p>
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
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "تنحيف الفك", to: "/treatments/masseter-botox/" },
                      { label: "قلب الشفة", to: "/treatments/lip-flip/" },
                      { label: "بوتوكس البشرة الدهنية", to: "/treatments/oily-skin-botox/" },
                    ].map((link) => (
                      <Link key={link.label} to={link.to} className={`px-4 py-2 ${cardBg} border ${cardBorder} rounded-full text-xs ${textBody} hover:text-[#C9A050] hover:border-[#C9A050]/30 transition-all font-light`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Who is Suitable */}
              <section id="who-is-suitable">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    من هو <span className={`${goldText} font-light`}>المناسب؟</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>بوتوكس وقائي</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>لمن هم في منتصف العشرينات وأوائل الثلاثينات مع خطوط بسيطة. يمنع تكوّن التجاعيد بإيقاف حركات العضلات المتكررة قبل أن تُحدث تجاعيد دائمة.</p>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>بوتوكس تصحيحي</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>للخطوط والتجاعيد الواضحة أثناء الراحة. ينعّم التجاعيد الموجودة ويمنعها من التعمق أكثر. قد يُدمج مع علاجات أخرى.</p>
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-4`}>اعتبارات العمر</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          {[
                            { age: "العشرينات–الثلاثينات", text: "علاج وقائي. جرعات منخفضة لإبطاء الخطوط الديناميكية المبكرة. التركيز على الحفاظ على التعبير الطبيعي." },
                            { age: "الأربعينات–الخمسينات", text: "علاج تصحيحي. جرعات معتدلة لتنعيم الخطوط الراسخة. غالباً ما يُدمج مع الفيلر للحجم." },
                            { age: "الستينات+", text: "جزء من تجديد شامل. يعمل جنباً إلى جنب مع علاجات أخرى لتجديد المظهر بشكل طبيعي." },
                          ].map((a) => (
                            <div key={a.age}>
                              <p className={`${goldText}/70 font-medium text-xs mb-1`}>{a.age}</p>
                              <p className={`${textMuted} text-xs font-light`}>{a.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Botox for Men */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    البوتوكس <span className={`${goldText} font-light`}>للرجال</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        شهدت علاجات البوتوكس للرجال نمواً ملحوظاً. يسعى الرجال عادة للعلاج للحفاظ على مظهر مهني تنافسي مع الظهور بشكل منتعش، وليس "مُعالَج".
                      </p>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <div className="grid md:grid-cols-2 gap-5">
                        {[
                          { title: "جرعة أعلى مطلوبة", desc: "الرجال عادة لديهم عضلات وجه أكبر وأقوى تتطلب كمية أكثر بنسبة ٢٥–٤٠٪ للحصول على نتائج مماثلة." },
                          { title: "جماليات ذكورية", desc: "يُصمم العلاج للحفاظ على الملامح الذكورية — حواجب قوية، جبهة محددة — مع تقليل الخطوط." },
                          { title: "أهداف مختلفة", desc: "معظم الرجال يريدون أن يبدوا أقل تعباً أو إجهاداً، وليس أصغر سناً. العلاج اللطيف يحقق ذلك بشكل طبيعي." },
                          { title: "نتائج غير ملحوظة", desc: "الهدف هو تحسين لا يمكن اكتشافه — يلاحظ الزملاء أنك تبدو أفضل، وليس أنك أجريت علاجاً." },
                        ].map((item) => (
                          <div key={item.title}>
                            <p className={`${goldText}/70 font-medium text-xs mb-1`}>{item.title}</p>
                            <p className={`${textMuted} text-xs font-light`}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Results Timeline */}
              <section id="results">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    جدول <span className={`${goldText} font-light`}>النتائج</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        {[
                          { title: "الأيام ١–٣: البداية", desc: "تبدأ التأثيرات الأولى. قد تلاحظ تغييرات طفيفة في حركة العضلات." },
                          { title: "الأيام ٧–١٤: ذروة التأثير", desc: "تصبح النتائج الكاملة مرئية. يتم تنعيم الخطوط واسترخاء العضلات المعالجة." },
                          { title: "الأشهر ٣–٦: المدة", desc: "تدوم النتائج عادة من ٣ إلى ٦ أشهر. تختلف المدة حسب التمثيل الغذائي والمنطقة ونمط الحياة." },
                        ].map((item) => (
                          <div key={item.title} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                            <div>
                              <p className={`text-xs font-medium ${textH}/60 mb-0.5`}>{item.title}</p>
                              <p className={`${textMuted} text-xs font-light`}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>العوامل المؤثرة على المدة</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "التمثيل الغذائي", desc: "التمثيل الغذائي الأسرع قد يقلل المدة" },
                          { label: "منطقة العلاج", desc: "المناطق كثيرة الحركة قد تتلاشى أسرع" },
                          { label: "الجرعة", desc: "الجرعات الأعلى قد تدوم أطول" },
                          { label: "الانتظام", desc: "العلاجات المنتظمة غالباً تطيل المدة" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" />
                            <span><strong className={`${textBody}`}>{f.label}:</strong> {f.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Botox vs Fillers */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    كيف يتناسب البوتوكس مع <span className={`${goldText} font-light`}>تجديد الوجه</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        فهم الفرق بين البوتوكس و<Link to="/treatments/dermal-fillers/" className={`${goldText}/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors`}>الفيلر</Link> يساعدك في اتخاذ قرارات مدروسة حول خطة علاجك.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${goldText}/80 mb-3`}>البوتوكس</p>
                        <p className={`${goldText}/50 text-xs mb-3 font-light`}>يُرخي العضلات ← يقلل التجاعيد الديناميكية</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• الخطوط التي تظهر مع التعبيرات</li>
                          <li>• الجبهة، خطوط العبوس، أقدام الغراب</li>
                          <li>• علاج وقائي</li>
                          <li>• النتائج تدوم ٣–٦ أشهر</li>
                        </ul>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/60 mb-3`}>الفيلر</p>
                        <p className={`${textMuted} text-xs mb-3 font-light`}>يُضيف حجماً ← يستعيد الامتلاء المفقود</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• الخطوط الموجودة أثناء الراحة</li>
                          <li>• الخدود، الشفاه، الطيّات الأنفية الشفوية</li>
                          <li>• استعادة الحجم</li>
                          <li>• النتائج تدوم ٦–١٨ شهراً</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to="/treatments/dermal-fillers/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light`}>
                        تعرّف على الفيلر <ArrowRight className="w-3 h-3 rotate-180" />
                      </Link>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Choosing a Clinic */}
              <section id="choosing-a-clinic">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    اختيار <span className={`${goldText} font-light`}>العيادة</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        مع وجود عيادات لا حصر لها تقدم البوتوكس، معرفة ما تبحث عنه يضمن حصولك على علاج آمن وفعال من ممارسين مؤهلين.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: <Stethoscope className="w-4 h-4 text-[#C9A050]/60" />, title: "رعاية بقيادة طبية", desc: "تأكد من أن العلاجات تتم أو تُشرف عليها من قبل محترفين طبيين مؤهلين بتدريب شامل في تشريح الوجه." },
                        { icon: <Building className="w-4 h-4 text-[#C9A050]/60" />, title: "اعتماد العيادة", desc: "ابحث عن تسجيل CQC، عضويات مهنية، وسمعة راسخة." },
                        { icon: <Users className="w-4 h-4 text-[#C9A050]/60" />, title: "عملية الاستشارة", desc: "يجب أن تُقيّم الاستشارة الشاملة مخاوفك وتشرح الخيارات وتضع توقعات واقعية." },
                        { icon: <Star className="w-4 h-4 text-[#C9A050]/60" />, title: "التقييمات والنتائج", desc: "تحقق من التقييمات الموثقة ومعارض قبل وبعد. التقييمات الإيجابية المتسقة تشير إلى ممارسين موثوقين." },
                      ].map((c) => (
                        <div key={c.title} className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-2">{c.icon}<p className={`text-xs font-medium ${textH}/60`}>{c.title}</p></div>
                          <p className={`${textMuted} text-xs font-light`}>{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Safety & Regulation */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    السلامة <span className={`${goldText} font-light`}>والتنظيم</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        يتمتع البوتوكس بسجل أمان ممتاز عند إعطائه من قبل محترفين طبيين مدربين. موافق عليه من FDA و MHRA والهيئات التنظيمية حول العالم، مع أكثر من ٣٠ عاماً من الاستخدام السريري.
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>اللوائح البريطانية</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• البوتوكس دواء بوصفة طبية فقط (POM)</li>
                            <li>• يجب أن يُوصف من قبل طبيب أو ممرض واصف أو طبيب أسنان</li>
                            <li>• مطلوب استشارة وجهاً لوجه</li>
                            <li>• يجب أن تكون العيادات مسجلة في CQC</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>أثناء استشارتك</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• مراجعة كاملة للتاريخ الطبي</li>
                            <li>• مناقشة المخاوف والأهداف</li>
                            <li>• شرح خيارات العلاج</li>
                            <li>• وضع توقعات واقعية</li>
                            <li>• الحصول على موافقة مستنيرة</li>
                          </ul>
                        </div>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-xl p-5 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-2`}>موانع الاستخدام</p>
                        <p className={`${textMuted} text-xs font-light mb-2`}>البوتوكس غير مناسب إذا كنتِ/كنتَ:</p>
                        <ul className={`grid md:grid-cols-2 gap-1.5 ${textMuted} text-xs font-light`}>
                          <li>• حاملاً أو مرضعة</li>
                          <li>• لديكِ/لديك اضطراب عصبي عضلي</li>
                          <li>• لديكِ/لديك عدوى في موقع الحقن</li>
                          <li>• لديكِ/لديك حساسية من توكسين البوتولينوم</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Preparation & Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    التحضير <span className={`${goldText} font-light`}>والرعاية اللاحقة</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>قبل العلاج</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["تجنب مميعات الدم (الأسبرين، الإيبوبروفين) لمدة ٧ أيام", "قلل الكحول قبل ٢٤–٤٨ ساعة", "احضر ببشرة نظيفة خالية من المكياج", "أخبر الممارس بجميع الأدوية"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>بعد العلاج</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["ابقَ في وضع مستقيم لمدة ٤ ساعات بعد العلاج", "تجنب لمس أو فرك المناطق المعالجة", "تخطى التمارين والساونا والكحول لمدة ٢٤ ساعة", "تجنب العناية بالوجه والتدليك لمدة أسبوعين"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Real Patient Results */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    نتائج <span className={`${goldText} font-light`}>المرضى الحقيقية</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/frown-lines-before-after-preview.jpg" alt="خطوط العبوس قبل وبعد علاج البوتوكس" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/forehead-lines-before-after-preview.jpg" alt="خطوط الجبهة قبل وبعد علاج البوتوكس" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>
                    جميع الصور لمرضى حقيقيين عولجوا من قبل أطبائنا في عيادتنا في هارلي ستريت. تختلف النتائج حسب تشريح الوجه وخطة العلاج.
                  </p>
                  <Link to="/before-after/botox/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light transition-colors`}>
                    عرض معرض البوتوكس الكامل قبل وبعد ← <ArrowRight className="w-3 h-3 rotate-180" />
                  </Link>
                </motion.div>
              </section>

              {/* Why Choose Cosmedocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    لماذا تختار <span className={`${goldText} font-light`}>كوزميدوكس؟</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "الخبرة", desc: "+١ مليون حقنة منذ ٢٠٠٧" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "التدريب", desc: "مدربون HSI" },
                      { icon: <Shield className="w-4 h-4" />, title: "الجودة", desc: "منتجات معتمدة من FDA" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "الفلسفة", desc: "فن غير مرئي" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "بقيادة طبية", desc: "أطباء مؤهلون" },
                    ].map((w) => (
                      <div key={w.title} className="text-center">
                        <div className="bg-[#C9A050]/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-[#C9A050]/60">{w.icon}</div>
                        <p className={`text-xs font-medium ${textH}/60 mb-0.5`}>{w.title}</p>
                        <p className={`${textMuted} text-[10px] font-light`}>{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section id="faqs">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    الأسئلة <span className={`${goldText} font-light`}>الشائعة</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "what-is", q: "ما هو البوتوكس بالضبط؟", a: "البوتوكس هو اسم تجاري لتوكسين البوتولينوم من النوع أ، وهو بروتين نقي يُرخي العضلات المستهدفة مؤقتاً. يُستخدم بأمان منذ أكثر من ٣٠ عاماً في التطبيقات الطبية والتجميلية." },
                      { v: "pain", q: "هل البوتوكس مؤلم؟", a: "يصف معظم المرضى حقن البوتوكس بأنها قرصة خفيفة. نستخدم إبراً فائقة النعومة ويمكننا تطبيق كريم مخدر إذا رغبت. الإجراء سريع، يُكمل عادة خلال ١٠–٢٠ دقيقة." },
                      { v: "safe", q: "هل البوتوكس آمن؟", a: "عند إعطائه من قبل محترفين طبيين مؤهلين، يتمتع البوتوكس بسجل أمان ممتاز. موافق عليه من الهيئات التنظيمية حول العالم ويُستخدم سريرياً منذ أكثر من ثلاثة عقود." },
                      { v: "results", q: "متى سأرى النتائج؟", a: "تظهر التأثيرات الأولى عادة خلال ٣–٥ أيام، مع ظهور النتائج الكاملة بعد ١٠–١٤ يوماً. تدوم النتائج عموماً من ٣ إلى ٦ أشهر، حسب العوامل الفردية." },
                      { v: "natural", q: "هل سأبدو متجمدة أو غير طبيعية؟", a: "ليس مع ممارسين ماهرين. الهدف هو إرخاء العضلات بما يكفي لتقليل التجاعيد مع الحفاظ على تعبيرات الوجه الطبيعية. المظهر 'المتجمد' ينتج عن العلاج المفرط، وهو ما نتجنبه." },
                      { v: "suitable", q: "لمن البوتوكس مناسب؟", a: "البوتوكس مناسب للبالغين من سن ١٨+ الذين يسعون لتقليل أو منع خطوط الوجه. يعمل جيداً للعلاج الوقائي في العشرينات–الثلاثينات والعلاج التصحيحي للخطوط الراسخة." },
                      { v: "difference", q: "ما الفرق بين البوتوكس والفيلر؟", a: "البوتوكس يُرخي العضلات لتقليل التجاعيد الديناميكية (الخطوط مع الحركة). الفيلر يُضيف حجماً لاستعادة الامتلاء وتنعيم الخطوط الثابتة. يعالجان مخاوف مختلفة وغالباً ما يُستخدمان معاً." },
                    ].map((faq) => (
                      <AccordionItem key={faq.v} value={faq.v} className="border-gray-200">
                        <AccordionTrigger className="text-gray-700 hover:text-[#C9A050] text-right text-sm font-light">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-xs font-light">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            {/* LEFT (RTL secondary) — Sticky Sidebar */}
            <aside className="hidden lg:block" dir="ltr">
              <div className="sticky top-24">
                <BotoxSidebarLight />
              </div>
            </aside>
          </div>
        </div>

        {/* FULL-WIDTH CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-3xl font-light mb-4 ${textH}`}>
                استشارتك <span className={goldText}>تبدأ هنا</span>
              </h2>
              <p className={`${textBody} mb-8`}>رعاية مدروسة من أطباء هارلي ستريت</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className={`${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6`}
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  احجز استشارة
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  <Phone className="w-4 h-4 ml-2" /> 0333 055 1503
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500/50 text-green-600 hover:bg-green-500 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.open('https://wa.me/447535076003', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 ml-2" /> واتساب
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Pricing */}
        <section className="lg:hidden py-12 px-4 bg-white" dir="ltr">
          <BotoxSidebarLight />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>بوتوكس لندن - الدليل الشامل لعلاج التجاعيد</h2>
          <p>
            بوتوكس لندن هو العلاج التجميلي غير الجراحي الأكثر شعبية في المملكة المتحدة. يغطي هذا الدليل الشامل كل ما تحتاج معرفته عن حقن مكافحة التجاعيد. كوزميدوكس في هارلي ستريت تقدم علاجات البوتوكس بقيادة أطباء منذ ٢٠٠٧، مع أكثر من مليون إجراء. جمالياتنا فن غير مرئي. جريء، طبيعي، دائماً على طريقتك.
          </p>
        </div>
      </div>
    </>
  );
}
