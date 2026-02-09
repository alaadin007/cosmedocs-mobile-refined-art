
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateSEOMetadata } from '@/utils/seo';

// Before & After images
import baBotoxFrown from "@/assets/arabic-ba-botox-frown.jpg";
import baBotoxForehead from "@/assets/arabic-ba-botox-forehead.jpg";
import baFullFace from "@/assets/arabic-ba-full-face.jpg";
import baFaceRejuvenation from "@/assets/arabic-ba-face-rejuvenation.jpg";
import baLips from "@/assets/arabic-ba-lips.jpg";
import baCheeks from "@/assets/arabic-ba-cheeks.jpg";
import baJawline from "@/assets/arabic-ba-jawline.jpg";
import baNoseProgression from "@/assets/arabic-ba-nose-progression.jpg";
import baNoseProfile from "@/assets/arabic-ba-nose-profile.jpg";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "هل تقدم Cosmedocs خدمات للمرضى الناطقين بالعربية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، نرحب بالمرضى الناطقين باللغة العربية من لندن ودول الخليج والشرق الأوسط. الاستشارة تتم بالإنجليزية مع شرح واضح ومفصل باستخدام الصور والمخططات."
      }
    },
    {
      "@type": "Question",
      "name": "ما هو HA Makeover (تجديد الوجه بحمض الهيالورونيك)؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HA Makeover هو خطة علاج متكاملة باستخدام حمض الهيالورونيك لإعادة التوازن والحجم والنضارة للوجه بدون تغيير الملامح. يشمل إعادة توزيع الحجم ودعم البنية العظمية وتحسين جودة البشرة."
      }
    },
    {
      "@type": "Question",
      "name": "هل النتائج طبيعية فعلاً؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، التجميل الطبيعي هو تخصصنا. نحن لا نبالغ في الفيلر ولا نغير ملامحك. نركز على النتيجة الطبيعية المتوازنة لأن هذا هو أسلوب عملنا اليومي منذ 2007."
      }
    },
    {
      "@type": "Question",
      "name": "هل تناسب العلاجات البشرة العربية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، نأخذ بعين الاعتبار خصائص البشرة السمراء وقابلية التصبغ والميل للكلف. علاجاتنا تشمل التقشير الكيميائي الطبي والميكرونيدلينغ وProfhilo."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أحجز استشارة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يمكنك حجز استشارة عبر صفحة التواصل أو الاتصال بعيادتنا في هارلي ستريت، لندن. يمكنك أيضاً التحدث مع مساعدنا الذكي عبر الموقع."
      }
    },
    {
      "@type": "Question",
      "name": "ما الفرق بين HA Makeover في الثلاثينات والأربعينات والخمسينات؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "في الثلاثينات الهدف هو الوقاية والحفاظ على الشباب. في الأربعينات نركز على استعادة التوازن والدعم الطبيعي. في الخمسينات وما بعدها الهدف هو تجديد شامل بدون مظهر مصطنع."
      }
    }
  ]
};

const MEDICAL_CLINIC_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Cosmedocs",
  "url": "https://www.cosmedocs.co.uk/arabic-patients/",
  "telephone": "+44 20 3733 3227",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 Harley Street",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "postalCode": "W1G 9PF",
    "addressCountry": "GB"
  },
  "availableLanguage": ["English", "Arabic"],
  "medicalSpecialty": "Cosmetic Medicine",
  "description": "عيادة تجميل للناطقين بالعربية في لندن"
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const ArabicPatients = () => {
  const seoData = generateSEOMetadata(
    "عيادة تجميل للناطقين بالعربية في لندن | Cosmedocs هارلي ستريت",
    "عيادة Cosmedocs في هارلي ستريت تقدم علاجات تجميل طبيعية للناطقين بالعربية، بإشراف أطباء متخصصين، مع تركيز على النتائج الطبيعية والخصوصية التامة.",
    "/arabic-patients"
  );

  const beforeAfterImages = [
    { src: baFullFace, alt: "نتائج تجديد الوجه الكامل – قبل وبعد – Cosmedocs لندن" },
    { src: baFaceRejuvenation, alt: "تجديد ملامح الوجه بالفيلر – قبل وبعد – Cosmedocs" },
    { src: baCheeks, alt: "فيلر الخدود الطبيعي – قبل وبعد – هارلي ستريت" },
    { src: baJawline, alt: "نحت خط الفك – قبل وبعد – Cosmedocs لندن" },
    { src: baLips, alt: "فيلر الشفاه الطبيعي – قبل وبعد – Cosmedocs" },
    { src: baNoseProgression, alt: "تجميل الأنف بدون جراحة – مراحل العلاج – Cosmedocs" },
    { src: baNoseProfile, alt: "تجميل الأنف بالفيلر – قبل وبعد – هارلي ستريت" },
    { src: baBotoxFrown, alt: "بوتوكس خطوط العبوس – قبل وبعد – Cosmedocs لندن" },
    { src: baBotoxForehead, alt: "بوتوكس خطوط الجبهة – قبل وبعد – Cosmedocs" },
  ];

  return (
    <>
      <Helmet>
        <html lang="ar" />
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
        <meta name="keywords" content="عيادة تجميل للناطقين بالعربية, تجميل للمرضى العرب في لندن, فيلر طبيعي, بوتوكس طبيعي, تجميل الوجه بدون مبالغة, تجديد الوجه بحمض الهيالورونيك, عيادة تجميل في هارلي ستريت, دكتور تجميل في لندن, HA Makeover" />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(MEDICAL_CLINIC_SCHEMA)}</script>
      </Helmet>

      <div className="bg-background text-foreground" dir="rtl">
        {/* Hero Section */}
        <section className="bg-black text-white py-20 md:py-28">
          <div className="page-container text-center">
            <motion.div {...fadeUp}>
              <p className="text-[hsl(var(--gold))] text-sm tracking-widest uppercase mb-4">Cosmedocs – هارلي ستريت، لندن</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                عيادة تجميل للناطقين بالعربية في لندن
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                علاجات تجميلية طبيعية بإشراف أطباء في Cosmedocs – هارلي ستريت
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                وجهتكم الطبية للتجميل الطبيعي والآمن في لندن
              </p>
            </motion.div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">أهلاً وسهلاً بكم في Cosmedocs</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                في Cosmedocs، نرحب بالمرضى الناطقين باللغة العربية من لندن ومن مختلف دول الخليج والشرق الأوسط. تقع عيادتنا في هارلي ستريت، ونُعرف بأسلوبنا الطبي الدقيق، ونتائجنا الطبيعية، واحترامنا الكامل لخصوصية المريض وثقافته.
              </p>
              <p className="text-[hsl(var(--gold))] text-xl font-semibold text-center">
                نؤمن أن الجمال الحقيقي هو تعزيز ملامحك، لا تغييرها.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Arabic Patients Choose Cosmedocs */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">لماذا يختار المرضى العرب Cosmedocs؟</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg font-semibold text-white mb-4">الوجه العربي يتميز بـ:</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>بنية عظمية قوية</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>جلد أكثر سماكة</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>نمط مختلف في فقدان الحجم مع التقدم في العمر</li>
                  </ul>
                  <p className="text-gray-400 mt-4">لهذا، لا تصلح العلاجات الجاهزة أو المبالغ فيها.</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white mb-4">في Cosmedocs:</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>جميع العلاجات بإشراف أطباء متخصصين</li>
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>لا نُبالغ في الفيلر</li>
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>لا نغيّر ملامحك</li>
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>نركز على النتيجة الطبيعية المتوازنة</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Natural Results Philosophy */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">العلاجات التجميلية الطبيعية – فلسفتنا الطبية</h2>
              <p className="text-gray-300 text-lg mb-6">التجميل الطبيعي هو تخصصنا. نحن لا نَعِد بنتائج "مبالغ فيها"، بل نضمن:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {["مظهر طبيعي", "تناسق في الوجه", "تحسين تدريجي وآمن"].map((item, i) => (
                  <Card key={i} className="bg-accent border-none">
                    <CardContent className="p-6 text-center">
                      <p className="text-white font-semibold text-lg">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-[hsl(var(--gold))] text-xl font-semibold">
                ✨ الطبيعي مضمون لأن هذا هو أسلوب عملنا اليومي.
              </p>
            </motion.div>
          </div>
        </section>

        {/* HA Makeover Section */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">ما هو HA Makeover؟</h2>
              <p className="text-center text-gray-300 text-lg mb-4">(تجديد الوجه بحمض الهيالورونيك)</p>
              <p className="text-gray-300 text-lg mb-8 text-center max-w-3xl mx-auto">
                خطة علاج متكاملة باستخدام حمض الهيالورونيك لإعادة التوازن، الحجم، والنضارة للوجه — بدون تغيير ملامحك.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-black/50 border border-red-900/30">
                  <CardContent className="p-6">
                    <p className="text-red-400 font-bold text-lg mb-3">❌ ليس:</p>
                    <ul className="space-y-2 text-gray-400">
                      <li>فيلر شفاه مبالغ فيه</li>
                      <li>أو نفخ عشوائي</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-black/50 border border-[hsl(var(--gold))]/30">
                  <CardContent className="p-6">
                    <p className="text-[hsl(var(--gold))] font-bold text-lg mb-3">✅ بل:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>إعادة توزيع الحجم</li>
                      <li>دعم البنية العظمية</li>
                      <li>تحسين جودة البشرة</li>
                      <li>مظهر صحي وطبيعي</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Age-Based HA Makeover */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">HA Makeover حسب العمر</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    age: "في الثلاثينات",
                    label: "30s",
                    items: ["فقدان بسيط في الحجم", "تعب في منطقة تحت العين", "بداية خطوط خفيفة"],
                    goal: "الوقاية والحفاظ على الشباب"
                  },
                  {
                    age: "في الأربعينات",
                    label: "40s",
                    items: ["فقدان أوضح في الحجم", "ترهل خفيف", "خطوط ثابتة"],
                    goal: "استعادة التوازن والدعم الطبيعي"
                  },
                  {
                    age: "في الخمسينات وما بعدها",
                    label: "50s+",
                    items: ["فقدان عميق في الحجم", "تغيّر في شكل الوجه", "ترهل أوضح"],
                    goal: "تجديد شامل بدون مظهر مصطنع"
                  }
                ].map((group, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                    <Card className="bg-accent border-none h-full">
                      <CardContent className="p-6">
                        <p className="text-[hsl(var(--gold))] text-sm font-bold mb-2">{group.label}</p>
                        <p className="text-xl font-bold text-white mb-4">{group.age}</p>
                        <ul className="space-y-2 text-gray-300 text-sm mb-4">
                          {group.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="text-[hsl(var(--gold))] text-sm font-semibold">🎯 الهدف: {group.goal}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filler Areas */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">أين نستخدم الفيلر في HA Makeover؟</h2>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {["الفك (Jawline)", "الذقن", "الخدود", "تحت العين", "خطوط الابتسامة"].map((area, i) => (
                  <span key={i} className="px-4 py-2 bg-black/50 rounded-full text-gray-300 text-sm border border-gray-700">
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-gray-400">
                كل نقطة تُعالج بحساب دقيق — لا نضيف حجماً إلا إذا كان يخدم التناسق.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Botox Section */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">الفيلر والبوتوكس بطريقة طبيعية</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg font-semibold mb-4">نستخدم البوتوكس لـ:</p>
                  <ul className="space-y-3 text-gray-300">
                    <li>إرخاء خطوط العبوس والجبهة</li>
                    <li>تنحيف الفك (Masseter Botox)</li>
                    <li>رفع بسيط للحاجب</li>
                    <li>علاج التعرّق الزائد</li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <ul className="space-y-3 text-[hsl(var(--gold))]">
                    <li>✔️ بدون تجميد</li>
                    <li>✔️ بدون فقدان التعبير</li>
                    <li>✔️ مظهر مريح ومنتعش</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">نتائج حقيقية من مرضانا</h2>
              <p className="text-gray-400 text-center mb-10 text-sm">
                النتائج تختلف من شخص لآخر. الصور غير معدّلة وتمثل نتائج فعلية.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beforeAfterImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-500 text-xs text-center mt-6">
                إخلاء مسؤولية: النتائج الفردية قد تختلف. جميع الصور لمرضى حقيقيين في Cosmedocs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skin Treatments for Arabic Patients */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">علاجات البشرة للمرضى العرب</h2>
              <p className="text-gray-300 mb-6">نأخذ بعين الاعتبار:</p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>البشرة السمراء</li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>قابلية التصبغ</li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>الميل للكلف (Melasma)</li>
                </ul>
                <div>
                  <p className="font-semibold mb-3">العلاجات تشمل:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>تقشير كيميائي طبي</li>
                    <li>الميكرونيدلينغ</li>
                    <li>Profhilo</li>
                    <li>علاجات طبية لتحسين نسيج البشرة</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy & Respect */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">الخصوصية والثقة في هارلي ستريت</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {["الخصوصية التامة", "الاحترام الثقافي", "الشرح الطبي الواضح", "عدم الضغط على المريض"].map((item, i) => (
                  <Card key={i} className="bg-black/50 border-none">
                    <CardContent className="p-4 text-center">
                      <p className="text-gray-300 text-sm">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-gray-400">الاستشارة عندنا: هادئة • طبية • مخصصة لك فقط</p>
            </motion.div>
          </div>
        </section>

        {/* Communication */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">التواصل والدعم</h2>
              <p className="text-gray-300 text-lg mb-4">
                رغم أن الاستشارة تتم باللغة الإنجليزية، إلا أننا معتادون على التعامل مع المرضى العرب.
              </p>
              <p className="text-gray-400 mb-8">
                نشرح كل شيء بهدوء ووضوح، ونستخدم الصور والمخططات عند الحاجة.
              </p>
              <p className="text-gray-300 mb-8">
                💬 يمكنك أيضاً التحدث مع مساعدنا الذكي (AI) عبر الموقع لمعرفة تفاصيل العلاجات والخيارات المناسبة لك.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-3xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <p className="text-[hsl(var(--gold))] text-sm tracking-widest uppercase mb-4">Cosmedocs</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">لأن الطبيعي هو الأجمل</h2>
              <p className="text-gray-300 mb-2">📍 هارلي ستريت – لندن</p>
              <p className="text-gray-300 mb-2">👨‍⚕️ أطباء متخصصون فقط</p>
              <p className="text-gray-300 mb-8">✨ نتائج طبيعية، مضمونة بأسلوبنا الطبي</p>
              <p className="text-[hsl(var(--gold))] text-xl font-semibold mb-8">
                جمالك… لكن بنسخة أفضل، طبيعية، وآمنة.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 text-lg">
                  احجز استشارتك الآن
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section (visible for users + schema) */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">الأسئلة الشائعة</h2>
            <div className="space-y-6">
              {FAQ_SCHEMA.mainEntity.map((faq, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05, duration: 0.4 }}>
                  <Card className="bg-accent border-none">
                    <CardContent className="p-6">
                      <p className="text-white font-semibold text-lg mb-3">{faq.name}</p>
                      <p className="text-gray-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Disclaimer */}
        <section className="py-8 bg-black border-t border-gray-800">
          <div className="page-container text-center">
            <p className="text-xs text-gray-600">
              تم إنشاء وترجمة هذه الصفحة بمساعدة الذكاء الاصطناعي. ننصح بالتشاور مباشرة مع أطبائنا المختصين للحصول على أدق المعلومات.
            </p>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <p>
            كوزميدوكس عيادة التجميل في هارلي ستريت لندن تقدم علاجات طبية تجميلية متخصصة تشمل حقن البوتوكس وحشوات الجلد وحشوات الشفاه وتجميل الأنف بدون جراحة ومحفزات البشرة وHA Makeover تجديد الوجه بحمض الهيالورونيك. منذ تأسيسها عام 2007، أجرت أكثر من مليون حقنة وهي من الرواد في مجال الطب التجميلي في لندن. تقع عيادتنا في هارلي ستريت رقم 10، وتقدم حلول تجميل شخصية باستخدام أحدث التقنيات والمنتجات عالية الجودة. فريقنا المتخصص ملتزم بتقديم نتائج تجميل طبيعية وآمنة وفعالة للعملاء من السعودية والإمارات والكويت وقطر والبحرين وعمان والأردن ولبنان ومصر. سواء كنت تبحث عن علاجات مكافحة الشيخوخة أو نحت ملامح الوجه أو تحسين جودة البشرة، يمكننا تقديم الخدمات الأكثر احترافية لك. فلسفة العلاج لدينا هي الفن غير المرئي، مما يضمن أن كل عميل يحصل على تأثيرات جمال طبيعية تتناسب مع احتياجاته الشخصية. نحن نقدم علاجات فيلر الوجه الكامل وتجديد البشرة بالبولينوكليوتيدات والتقشير الكيميائي الطبي والميكرونيدلينغ وProfhilo للمرضى الناطقين بالعربية في لندن.
          </p>
        </div>
      </div>
    </>
  );
};

export default ArabicPatients;
