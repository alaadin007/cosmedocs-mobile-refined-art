import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import TearTroughFillerSidebar from '@/components/tear-trough/TearTroughFillerSidebar';

export default function TearTroughFillerChinese() {
  const canonical = "https://www.cosmedocs.com/zh/treatments/tear-trough-filler/";
  const bg = "bg-[#F5F5F3]"; const textH = "text-gray-900"; const textBody = "text-gray-600"; const textMuted = "text-gray-400"; const goldText = "text-[#C9A050]"; const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="zh" />
        <title>泪沟填充伦敦 | 黑眼圈治疗 | 哈利街 | CosmeDocs</title>
        <meta name="description" content="伦敦泪沟玻尿酸填充治疗。使用钝针技术确保最高安全性。哈利街GMC注册医生。" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/tear-trough-filler/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/tear-trough-filler/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/cernes-creuses/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/ojeras/" />
        <link rel="alternate" hrefLang="zh" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/tear-trough-filler/" />
        <meta property="og:title" content="泪沟填充伦敦 | CosmeDocs 哈利街" />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_CN" />
        <meta name="keywords" content="泪沟填充伦敦, 黑眼圈治疗, 眼下填充, 哈利街, 医美" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs", "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "什么是泪沟填充？", "acceptedAnswer": { "@type": "Answer", "text": "泪沟填充是一种非手术治疗，使用玻尿酸恢复眼下区域的体积，减少黑眼圈和浮肿。" } },
          { "@type": "Question", "name": "费用是多少？", "acceptedAnswer": { "@type": "Answer", "text": "泪沟填充从£425起。多核苷酸治疗每次£450。" } },
          { "@type": "Question", "name": "效果能维持多久？", "acceptedAnswer": { "@type": "Answer", "text": "效果通常维持12至18个月，取决于个人因素。" } }
        ] })}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)` }} /></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6"><Breadcrumb items={[{ label: '治疗项目', path: '/zh/' }]} currentPage="泪沟填充" variant="light" /></div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200"><MapPin className="h-4 w-4 text-[#C9A050]" />8-10 Harley Street, London W1G 9PF</div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>泪沟<span className={`block font-semibold ${goldText}`}>填充治疗</span></h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>治疗黑眼圈和眼下凹陷，通过精准注射恢复体积，重现目光光彩。</p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>眼下区域是面部最精细的部位之一。在CosmeDocs，我们使用钝针技术确保最高安全性和精准度。</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">预约咨询 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              <div className="space-y-14">
                <section>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>泪沟<span className={`${goldText} font-light`}>填充治疗</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                    <p>泪沟（眼下凹陷）是疲劳和衰老的最早迹象之一。该区域的体积流失会产生阴影，使人看起来疲惫不堪。</p>
                    <p>我们使用专门针对这一精细区域的轻质填充剂，配合钝针技术最大限度减少淤青，确保自然安全的效果。</p>
                  </div>
                </section>
                <section>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>价格 <span className={`${goldText} font-light`}>与费用</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {[{ name: "泪沟填充", price: "从 £425 起" }, { name: "多核苷酸眼周治疗", price: "从 £450 起" }, { name: "联合治疗", price: "从 £750 起" }].map(item => (
                      <div key={item.name} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-5 py-3">
                        <span className={`text-sm ${textH} font-light`}>{item.name}</span>
                        <span className={`text-sm font-medium ${goldText}`}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className={`text-3xl font-extralight ${textH} mb-2`}>常见<span className={`${goldText} font-light`}>问题</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {[
                      { q: "疼吗？", a: "大多数患者因先进的注射技术和局部麻醉而几乎感觉不到疼痛。" },
                      { q: "恢复期多长？", a: "恢复快速，效果即时。可能会有几天轻微肿胀。" },
                      { q: "谁是合适的候选人？", a: "有遗传性黑眼圈、眼下体积流失或早期衰老迹象的人。" },
                      { q: "可以与其他治疗结合吗？", a: "可以，与鱼尾纹肉毒素和颧骨填充完美配合。" },
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-5">
                        <AccordionTrigger className={`text-sm font-medium ${textH} hover:no-underline`}>{faq.q}</AccordionTrigger>
                        <AccordionContent className={`text-sm ${textBody} font-light leading-relaxed`}>{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              </div>
              <div className="hidden lg:block"><TearTroughFillerSidebar /></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>开启 <span className={goldText}>您的旅程</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>每项治疗都从全面咨询开始，评估眼下区域并确定最佳方案。</p>
            <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">预约咨询 <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </section>
      </div>
    </>
  );
}
