import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';

export default function SkinRejuvenationChinese() {
  const canonical = "https://www.cosmedocs.com/zh/treatments/skin-rejuvenation/";
  const bg = "bg-[#F5F5F3]"; const textH = "text-gray-900"; const textBody = "text-gray-600"; const textMuted = "text-gray-400"; const goldText = "text-[#C9A050]"; const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="zh" />
        <title>皮肤焕活伦敦 | 皮肤治疗 | 哈利街 | CosmeDocs</title>
        <meta name="description" content="伦敦皮肤焕活治疗。宝丽致、多核苷酸、微针和化学换肤。哈利街GMC注册医生。" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/skin-rejuvenation/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/skin-rejuvenation/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/rajeunissement-peau/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/rejuvenecimiento-piel/" />
        <link rel="alternate" hrefLang="zh" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/skin-rejuvenation/" />
        <meta property="og:title" content="皮肤焕活伦敦 | CosmeDocs" />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content="zh_CN" />
        <meta name="keywords" content="皮肤焕活伦敦, 宝丽致, 多核苷酸, 微针, 化学换肤, 哈利街" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs", "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } })}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} /></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6"><Breadcrumb items={[{ label: '治疗项目', path: '/zh/' }]} currentPage="皮肤焕活" variant="light" /></div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200"><MapPin className="h-4 w-4 text-[#C9A050]" />8-10 Harley Street, London W1G 9PF</div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>皮肤<span className={`block font-semibold ${goldText}`}>焕活治疗</span></h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>先进治疗改善皮肤质量、纹理和光泽——由内而外。</p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>我们的理念是通过科学验证的治疗刺激皮肤的自然再生机制。</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">预约咨询 <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> GMC注册</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> 17年以上</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> 评分4.9</span>
                </motion.div>
              </div>
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-14">
            <section>
              <h2 className={`text-3xl font-extralight ${textH} mb-2`}>我们的<span className={`${goldText} font-light`}>治疗项目</span></h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "宝丽致 Profhilo", desc: "生物刺激剂，改善皮肤水合和弹性。", price: "从 £350 起" },
                  { title: "多核苷酸", desc: "刺激细胞再生，改善皮肤质量。", price: "从 £350 起" },
                  { title: "微针治疗", desc: "刺激胶原蛋白生成，改善纹理和疤痕。", price: "从 £250 起" },
                  { title: "化学换肤", desc: "去除表面层，露出更明亮的新皮肤。", price: "从 £150 起" },
                  { title: "HydraFacial", desc: "一次治疗实现深层清洁和强效保湿。", price: "从 £200 起" },
                  { title: "PRP血小板治疗", desc: "利用自身血小板刺激自然再生。", price: "从 £350 起" },
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
              <h2 className={`text-3xl font-extralight ${textH} mb-2`}>常见<span className={`${goldText} font-light`}>问题</span></h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  { q: "哪种治疗适合我？", a: "取决于您的皮肤状况和目标。我们的医生会在咨询中评估并推荐最佳方案。" },
                  { q: "需要多少次治疗？", a: "因治疗而异。宝丽致需要2次，微针可能需要3-6次。" },
                  { q: "可以组合治疗吗？", a: "可以，许多患者受益于结合多种治疗的定制方案。" },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                    <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                    <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>开启 <span className={goldText}>皮肤之旅</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>我们的医生评估您的皮肤并设计个性化治疗方案。</p>
            <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">预约咨询 <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </section>
      </div>
    </>
  );
}
