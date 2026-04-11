import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import JawlineFillerSidebar from '@/components/jawline/JawlineFillerSidebar';

export default function JawlineFillerChinese() {
  const canonical = "https://www.cosmedocs.com/zh/treatments/jawline-filler/";
  const faqs = [
    { q: "下颌线填充多少钱？", a: "在CosmeDocs，下颌线填充1ml起价£350，2ml £650，Natural HD下颌线套餐£950。咨询费（£50）在当天治疗时可抵扣。" },
    { q: "效果能持续多久？", a: "效果通常持续15-18个月，是最持久的面部填充之一。下颌区域肌肉活动较少，有助于延长持续时间。" },
    { q: "治疗疼吗？", a: "大多数患者感受到的不适非常轻微。我们使用局部麻醉剂，填充剂含有利多卡因。下颌区域的神经末梢比其他面部区域少。" },
    { q: "恢复期多长？", a: "恢复时间很短——大多数患者可以立即恢复工作。可能会有24-48小时的轻微肿胀。" },
    { q: "可以同时做下巴和下颌线吗？", a: "当然可以。下巴和下颌线填充完美配合，实现下面部的全面提升。" },
    { q: "填充剂可以溶解吗？", a: "是的，玻尿酸填充剂可以用透明质酸酶安全溶解。" },
  ];
  const textH = "text-gray-900"; const textBody = "text-gray-600"; const goldText = "text-[#C9A050]";

  return (
    <>
      <Helmet>
        <html lang="zh" />
        <title>下颌线填充 伦敦 | 下颌线塑形 | 哈雷街医生 | CosmeDocs</title>
        <meta name="description" content="医生主导下颌线填充从£350起。在哈雷街诊所定义、轮廓塑造和雕刻您的下颌线。自2007年以来的自然效果。" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/jawline-filler/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/filler-machoire/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-mandibula/" />
        <link rel="alternate" hrefLang="zh" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/jawline-filler/" />
        <meta property="og:title" content="下颌线填充 伦敦 | CosmeDocs" />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_CN" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@graph": [
          { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
          { "@type": "MedicalProcedure", "name": "下颌线填充", "alternateName": "Jawline Filler", "url": canonical, "procedureType": "NoninvasiveProcedure" },
          { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
        ] })}</script>
      </Helmet>

      <div className="bg-[#F5F5F3] overflow-x-hidden min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-[#F5F5F3] pt-0 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: '治疗项目', path: '/zh/' }, { label: '玻尿酸填充', path: '/zh/treatments/dermal-fillers/' }]} currentPage="下颌线填充" variant="light" />
            <div className="pt-12 pb-4 text-center">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-stone-800 leading-[1.1] tracking-tight mb-6">下颌线<span className="text-[#C9A050] font-light">填充</span></h1>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-extralight max-w-2xl mx-auto">精准填充定义、轮廓塑造和雕刻您的下颌线——打造更锐利、更平衡的下面部。</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />医生主导</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />30-45分钟</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />自2007年起</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />哈雷街</span>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className={`${textBody} text-sm leading-relaxed font-light space-y-4`}>
                    <p>定义清晰的下颌线被描述为面部的框架——提供结构、平衡和更年轻的外观。随着年龄增长，骨质吸收和软组织下垂使下面部变得柔软、不清晰。下颌线填充利用优质玻尿酸填充剂恢复这种失去的结构。</p>
                    <p>在CosmeDocs，我们的医生使用密度高、结构级的玻尿酸填充剂，专为下颌线增强而配制，提供卓越的支撑和突出效果，同时保持自然运动。</p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>下颌线填充<span className={`${goldText} font-light`}>可以实现什么</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    {["定义锐利的下颌角", "雕刻更宽的下颌线", "矫正早期下垂", "平衡不对称", "改善侧面轮廓", "恢复年轻结构"].map(item => (
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
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>1ml vs <span className={`${goldText} font-light`}>2ml</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">1ml — 微妙改善</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light"><li>• 适合初次治疗</li><li>• 自然微妙的定义</li><li>• 从£350起</li></ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-stone-700 mb-3">2ml — 显著雕塑</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light"><li>• 更明显的雕塑效果</li><li>• 更强的下颌角</li><li>• 从£650起</li></ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>常见<span className={`${goldText} font-light`}>问题</span></h2>
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
                <h2 className={`text-2xl font-extralight ${textH} mb-4`}>预约<span className={goldText}>咨询</span></h2>
                <p className={`${textBody} text-sm font-light mb-6`}>每次治疗都从全面的面部评估开始。我们的医生将讨论您的关注点并推荐个性化方案。</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">预约咨询 <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                  <Link to="/zh/treatments/dermal-fillers/"><Button variant="ghost" className="border border-gray-300 text-gray-600 hover:text-gray-900 rounded-full px-8 py-5 text-base">所有填充治疗</Button></Link>
                </div>
              </section>
            </div>
            <div className="hidden lg:block"><JawlineFillerSidebar /></div>
          </div>
        </div>
        <div className="sr-only"><h2>下颌线填充 伦敦 — CosmeDocs 哈雷街</h2><p>GMC注册医生主导的下颌线填充。我们的美学是隐形的艺术——大胆、自然、永远按您的方式。</p></div>
      </div>
    </>
  );
}
