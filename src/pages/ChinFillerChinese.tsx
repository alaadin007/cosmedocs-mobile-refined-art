import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Shield, MapPin, Star, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import ChinFillerSidebar from '@/components/chin-filler/ChinFillerSidebar';

export default function ChinFillerChinese() {
  const canonical = "https://www.cosmedocs.com/zh/treatments/chin-filler/";
  const bg = "bg-[#F5F5F3]";
  const textH = "text-gray-900";
  const textBody = "text-gray-600";
  const textMuted = "text-gray-400";
  const goldText = "text-[#C9A050]";
  const gold = "#C9A050";

  return (
    <>
      <Helmet>
        <html lang="zh" />
        <title>下巴填充伦敦 | 非手术下巴塑形 | 哈利街 | CosmeDocs</title>
        <meta name="description" content="伦敦下巴玻尿酸填充。非手术下巴增强和轮廓塑形。哈利街GMC注册医生，自2007年起。" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/chin-filler/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/filler-menton/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-menton/" />
        <link rel="alternate" hrefLang="zh" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/chin-filler/" />
        <meta property="og:title" content="下巴填充伦敦 | CosmeDocs 哈利街" />
        <meta property="og:description" content="非手术下巴塑形。哈利街医生自2007年起。" />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_CN" />
        <meta name="keywords" content="下巴填充伦敦, 下巴塑形, 玻尿酸下巴, 哈利街, 医美" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MedicalClinic", "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com", "telephone": "+44 20 3733 3227",
          "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "下巴填充多少钱？", "acceptedAnswer": { "@type": "Answer", "text": "下巴填充从1.2ml £350起。费用根据达到理想效果所需的用量而异。" } },
            { "@type": "Question", "name": "效果能维持多久？", "acceptedAnswer": { "@type": "Answer", "text": "效果通常可维持12至18个月。下巴填充因产品粘度较高，维持时间比唇部填充更长。" } },
            { "@type": "Question", "name": "下巴填充安全吗？", "acceptedAnswer": { "@type": "Answer", "text": "是的，由合格医生使用优质产品进行时是安全的。CosmeDocs所有手术均由经验丰富的医疗专业人员执行。" } }
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
              <Breadcrumb items={[{ label: '治疗项目', path: '/zh/' }]} currentPage="下巴填充" variant="light" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, London W1G 9PF
                  </div>
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    下巴
                    <span className={`block font-semibold ${goldText}`}>轮廓塑形</span>
                  </h1>
                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    下巴填充恢复面部平衡，自然精准地改善侧面轮廓——无需手术。
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    在CosmeDocs，我们使用精准技术塑造下巴，实现面部和谐。我们的美学是隐形的艺术。
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')} className="group bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium">
                    预约咨询 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> GMC注册</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> 17年以上</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> 评分4.9</span>
                </motion.div>
              </div>
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square flex items-center justify-center">
                  <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none">
                    {[
                      { d: "M250 80 C300 80, 380 150, 380 250 C380 350, 300 420, 250 420 C200 420, 120 350, 120 250 C120 150, 200 80, 250 80", opacity: 0.08 },
                      { d: "M250 120 C285 120, 340 170, 340 250 C340 330, 285 380, 250 380 C215 380, 160 330, 160 250 C160 170, 215 120, 250 120", opacity: 0.1 },
                    ].map((shape, i) => (
                      <path key={i} d={shape.d} stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity={shape.opacity} />
                    ))}
                    <circle cx="250" cy="250" r="60" fill="url(#centreGlowChinZh)" />
                    <defs><radialGradient id="centreGlowChinZh" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor={gold} stopOpacity="0.12" /><stop offset="100%" stopColor={gold} stopOpacity="0" /></radialGradient></defs>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              <div className="space-y-14">
                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>什么是<span className={`${goldText} font-light`}>下巴填充？</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <ExpandableSection preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        下巴填充是一种非手术美容程序，使用玻尿酸改善下巴形状并恢复面部平衡。也被称为液态下巴整形术。
                      </p>
                    }>
                      <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                        <p>下巴在面部和谐和侧面轮廓中起着关键作用。下巴后缩或不足会使鼻子看起来更大，下颌线条不够清晰。</p>
                        <p>使用高密度填充剂，我们的医生可以增加下巴投射度、改善对称性、创造更好的面部平衡——所有这些都无需手术，效果即时可见。</p>
                      </div>
                    </ExpandableSection>
                  </motion.div>
                </section>

                <section>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>下巴填充<span className={`${goldText} font-light`}>优势</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "改善侧面轮廓", desc: "更好的下巴投射显著改善侧面轮廓。" },
                        { title: "面部和谐", desc: "恢复鼻子、下巴和下颌之间的比例。" },
                        { title: "无需手术", desc: "即时效果，无恢复期，无全身麻醉。" },
                        { title: "自然效果", desc: "我们的美学是隐形的艺术——大胆、自然、始终如一。" },
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>价格 <span className={`${goldText} font-light`}>与费用</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <div className="space-y-3">
                      {[
                        { name: "下巴填充 1.2ml", price: "从 £350 起" },
                        { name: "下巴填充 2.4ml", price: "从 £650 起" },
                        { name: "下巴填充 3.6ml", price: "从 £850 起" },
                        { name: "HA全脸塑形", price: "从 £950 起" },
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
                    <h2 className={`text-3xl font-extralight ${textH} mb-2`}>常见<span className={`${goldText} font-light`}>问题</span></h2>
                    <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                    <Accordion type="single" collapsible className="space-y-3">
                      {[
                        { q: "下巴填充多少钱？", a: "下巴填充从1.2ml £350起，2.4ml £650起，3.6ml £850起。" },
                        { q: "效果能维持多久？", a: "效果通常维持12至18个月，取决于产品和个人代谢。" },
                        { q: "疼吗？", a: "不适感很小。我们使用局部麻醉，填充剂含有利多卡因。" },
                        { q: "可以与其他治疗结合吗？", a: "可以，下巴填充与下颌线填充、唇部填充和肉毒素完美结合。" },
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
              <div className="hidden lg:block">
                <ChinFillerSidebar />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className={`text-3xl font-light ${textH} mb-4`}>开启 <span className={goldText}>您的旅程</span></h2>
            <p className={`${textBody} text-sm mb-8 font-light`}>每项治疗都从与我们专业医生的全面咨询开始。</p>
            <Link to="/contact">
              <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full px-8 py-5 text-base">预约咨询 <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
