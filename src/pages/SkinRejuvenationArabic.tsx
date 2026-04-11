import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';

export default function SkinRejuvenationArabic() {
  const canonical = "https://www.cosmedocs.com/ar/treatments/skin-rejuvenation/";
  const bg = "bg-[#F5F5F3]"; const textH = "text-gray-900"; const textBody = "text-gray-600"; const textMuted = "text-gray-400"; const goldText = "text-[#C9A050]"; const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>تجديد البشرة لندن | علاجات البشرة | هارلي ستريت | CosmeDocs</title>
        <meta name="description" content="علاجات تجديد البشرة في لندن. بروفيلو، بولينيوكليوتيد، ميكرونيدلينج، وتقشير كيميائي. أطباء مسجلون في GMC بهارلي ستريت." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/skin-rejuvenation/" />
        <link rel="alternate" hrefLang="ar" href={canonical} />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/rajeunissement-peau/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/rejuvenecimiento-piel/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/skin-rejuvenation/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/skin-rejuvenation/" />
        <meta property="og:title" content="تجديد البشرة لندن | CosmeDocs" />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar" />
        <meta name="keywords" content="تجديد البشرة لندن, بروفيلو, بولينيوكليوتيد, ميكرونيدلينج, تقشير كيميائي, هارلي ستريت" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs", "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } })}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} /></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6"><Breadcrumb items={[{ label: 'العلاجات', path: '/ar/' }]} currentPage="تجديد البشرة" variant="light" /></div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div dir="rtl">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200"><MapPin className="h-4 w-4 text-[#C9A050]" />8-10 Harley Street، لندن W1G 9PF</div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>تجديد<span className={`block font-semibold ${goldText}`}>البشرة</span></h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>علاجات متقدمة لتحسين جودة البشرة ونسيجها وإشراقها — من الداخل إلى الخارج.</p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>فلسفتنا في تجديد البشرة تعتمد على تحفيز آليات التجدد الطبيعية للبشرة. نقدم مجموعة متكاملة من العلاجات المدعومة علمياً.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">احجز استشارة <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> مسجلون في GMC</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> +17 سنة</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> تقييم 4.9</span>
                </motion.div>
              </div>
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-14" dir="rtl">
              <section>
                <h2 className={`text-3xl font-extralight ${textH} mb-2`}>العلاجات <span className={`${goldText} font-light`}>المتاحة</span></h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "بروفيلو", desc: "محفز حيوي يحسن ترطيب البشرة ومرونتها من الداخل.", price: "من £350" },
                    { title: "بولينيوكليوتيد", desc: "يحفز تجدد الخلايا ويحسن جودة البشرة على المستوى الخلوي.", price: "من £350" },
                    { title: "ميكرونيدلينج", desc: "يحفز إنتاج الكولاجين لتحسين الملمس والندبات.", price: "من £250" },
                    { title: "تقشير كيميائي", desc: "يزيل الطبقات السطحية لكشف بشرة جديدة وأكثر إشراقاً.", price: "من £150" },
                    { title: "HydraFacial", desc: "تنظيف عميق وترطيب مكثف في جلسة واحدة.", price: "من £200" },
                    { title: "PRP فامبير فيشل", desc: "يستخدم صفائحك الدموية لتحفيز التجدد الطبيعي.", price: "من £350" },
                  ].map(item => (
                    <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                      <div className="flex justify-between items-start mb-1">
                        <p className={`text-sm font-medium ${textH}`}>{item.title}</p>
                        <span className={`text-xs font-medium ${goldText}`}>{item.price}</span>
                      </div>
                      <p className={`text-xs ${textBody} font-light`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={`text-3xl font-extralight ${textH} mb-2`}>الأسئلة <span className={`${goldText} font-light`}>الشائعة</span></h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    { q: "أي علاج مناسب لي؟", a: "يعتمد على حالة بشرتك وأهدافك. أطباؤنا يقيّمون بشرتك في الاستشارة ويوصون بالخطة المثلى." },
                    { q: "كم جلسة أحتاج؟", a: "يختلف حسب العلاج. بروفيلو يتطلب جلستين، بينما الميكرونيدلينج قد يتطلب 3-6 جلسات." },
                    { q: "هل يمكن الجمع بين العلاجات؟", a: "نعم، كثير من مرضانا يستفيدون من بروتوكول مخصص يجمع بين عدة علاجات." },
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                      <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                      <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" dir="rtl">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>ابدأ <span className={goldText}>رحلة بشرتك</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>أطباؤنا يقيّمون بشرتك ويصممون خطة علاج مخصصة لأهدافك.</p>
            <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">احجز استشارة <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </section>

        <div className="sr-only" dir="rtl">
          <h2>تجديد البشرة في لندن — CosmeDocs هارلي ستريت</h2>
          <p>CosmeDocs تقدم مجموعة متكاملة من علاجات تجديد البشرة بما في ذلك بروفيلو والبولينيوكليوتيد والميكرونيدلينج والتقشير الكيميائي. أطباء مسجلون في GMC بهارلي ستريت منذ 2007. فننا التجميلي غير مرئي.</p>
        </div>
      </div>
    </>
  );
}
