import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import LipFillersSidebar from "@/components/lip-fillers/LipFillersSidebar";

const LipFillersChinese = () => {
  const faqs = [
    { question: "丰唇效果能维持多久？", answer: "效果通常持续6至12个月，取决于使用的产品、您的代谢率和注射量。0.5ml治疗持续6–9个月，1ml治疗可持续12个月。CosmeDocs使用的优质玻尿酸填充剂能提供持久的自然效果，逐渐被身体吸收。" },
    { question: "伦敦丰唇多少钱？", answer: "在CosmeDocs，丰唇从0.5ml £300起，1ml £350起。包括咨询、优质玻尿酸填充剂和术后护理支持。咨询费（£50）如果当天治疗会从费用中扣除。" },
    { question: "丰唇疼吗？", answer: "不适感很小。我们在治疗前涂抹局部麻醉剂，并使用含利多卡因的优质填充剂以增加舒适度。大多数患者描述感觉是轻微的压力而非疼痛。整个过程约30–45分钟。" },
    { question: "0.5ml和1ml有什么区别？", answer: "0.5ml提供微妙、自然的改善——适合薄唇和首次治疗。1ml创造更明显的丰满度和清晰轮廓。医生会在咨询期间评估您的唇部解剖结构并推荐最佳剂量。" },
    { question: "丰唇效果能看起来自然吗？", answer: "完全可以。我们的'隐形艺术'理念确保自然的效果。我们增强您现有的唇形和比例，而不是创造人工外观。" },
    { question: "丰唇可以溶解吗？", answer: "可以。玻尿酸丰唇可以使用透明质酸酶安全溶解，如果您对效果不满意或希望恢复自然唇形。" },
  ];

  return (
    <>
      <Helmet>
        <title>伦敦丰唇 | 自然唇部增强 | 哈雷街医生 | CosmeDocs</title>
        <meta name="description" content="医生主导的丰唇注射从£300起。使用优质玻尿酸在哈雷街诊所进行自然唇部增强。提供0.5ml和1ml选项。" />
        <link rel="canonical" href="https://www.cosmedocs.com/zh/treatments/lip-fillers/" data-rh="true" />
        <meta property="og:title" content="伦敦丰唇 | 自然唇部增强 | CosmeDocs" />
        <meta property="og:description" content="医生主导的丰唇注射从£300起。哈雷街自然效果。" />
        <meta property="og:url" content="https://www.cosmedocs.com/zh/treatments/lip-fillers/" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/injection-levres/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/relleno-labios/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/treatments/lip-fillers/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/lip-fillers/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness", "name": "CosmeDocs",
                "description": "位于伦敦哈雷街的医生主导医美诊所。成立于2007年。",
                "url": "https://www.cosmedocs.com/", "telephone": "+44 20 3733 3227", "priceRange": "££",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB", "addressRegion": "London" },
                "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" }
              },
              {
                "@type": "MedicalProcedure", "name": "丰唇", "alternateName": "Lip Fillers",
                "description": "医生使用优质玻尿酸进行唇部增强，提供自然的丰满度、形状和清晰轮廓。",
                "url": "https://www.cosmedocs.com/zh/treatments/lip-fillers/",
                "procedureType": "NoninvasiveProcedure", "bodyLocation": "Lips"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white pt-0 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: '治疗项目', path: '/zh/' }]} currentPage="丰唇" />
            <div className="pt-12 pb-4 text-center">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-stone-800 leading-[1.1] tracking-tight mb-6">
                  伦敦{" "}<span className="text-[#C9A050] font-light">丰唇注射</span>
                </h1>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-extralight max-w-2xl mx-auto">
                  医生主导的唇部增强，使用优质玻尿酸——自然丰满、精致轮廓和微妙清晰度，量身定制。
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 tracking-wide uppercase">
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />医生主导</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />从£300起</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />始于2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />哈雷街</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">什么是<span className="text-[#C9A050] font-light">丰唇注射？</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">丰唇注射是使用玻尿酸（HA）为嘴唇增加丰满度、形状和清晰度的注射治疗。玻尿酸是人体内天然存在的物质，能与唇部组织完美融合——呈现自然的外观和触感。</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>与手术丰唇不同，注射填充剂是微创治疗，不需要全身麻醉。治疗时间为30–45分钟，效果即刻可见，最终效果在约两周后完全呈现。</p>
                      <p>在CosmeDocs，我们只使用FDA批准的优质玻尿酸填充剂，来自Juvederm、Restylane和Teoxane等顶级品牌。每种产品根据您的唇部解剖结构和美学目标精心选择。</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">治疗<span className="text-[#C9A050] font-light">过程</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">医生首先进行详细的面部评估，讨论您的目标并推荐最佳的剂量和产品。在精确注射前，会涂抹局部麻醉剂。</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>使用精细针头或微型套管，玻尿酸被精心注入唇部的多个区域——唇红线、丘比特弓、唇体和人中嵴。每个区域接受定量注射以创造和谐的增强效果。</p>
                      <p>填充剂含有利多卡因，在治疗过程中提供额外舒适感。医生实时雕塑唇形，让您在整个过程中提供反馈。</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">我们的独家<span className="text-[#C9A050] font-light">鸡尾酒配方</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection preview={
                    <p className="text-stone-500 text-sm leading-relaxed font-light">并非所有丰唇产品都一样——每个人的嘴唇也不同。经过20年的注射经验，我们开发了一种大多数诊所无法提供的独家鸡尾酒方法。效果？嘴唇看起来<em>和感觉</em>都像您自己的。</p>
                  }>
                    <div className="space-y-4 text-stone-500 text-sm leading-relaxed font-light">
                      <p>大多数患者不知道的是，每个填充剂品牌都有十几种产品，每种都有不同的稠度、弹性和分子量。为您独特的唇部解剖结构选择正确的<em>组合</em>至关重要。</p>
                      <div className="grid grid-cols-2 gap-3 my-4">
                        {[
                          { label: "瑞士玻尿酸", detail: "结构支撑与持久性" },
                          { label: "法国玻尿酸", detail: "水润度与自然柔软" },
                          { label: "丰盈层", detail: "丰满度与立体感" },
                          { label: "水润层", detail: "柔韧性与唇感" },
                        ].map((item) => (
                          <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
                            <p className="text-[#C9A050] text-xs font-medium mb-1">{item.label}</p>
                            <p className="text-stone-500 text-[11px]">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                        <p className="text-stone-500 text-xs leading-relaxed font-light">
                          <strong className="text-[#C9A050]">为什么重要：</strong>单一填充剂产品只能给您一种质地。我们的鸡尾酒方法分层应用多种稠度——在需要丰满的地方增加体积，在需要柔软的地方增加水润——所以您的嘴唇不仅看起来自然，而且<em>触感</em>自然。这就是隐形艺术。
                        </p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">0.5ml vs 1ml <span className="text-[#C9A050] font-light">丰唇</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-[#C9A050] mb-3">0.5ml — 微妙增强</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• 适合薄唇和首次治疗</li>
                        <li>• 轻柔丰满，肿胀最小</li>
                        <li>• 效果持续6–9个月</li>
                        <li>• £300</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <p className="text-sm font-medium text-stone-700 mb-3">1ml — 明显增强</p>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• 适合中等至大唇</li>
                        <li>• 清晰轮廓与形状</li>
                        <li>• 效果持续9–12个月</li>
                        <li>• £350</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">唇部增强<span className="text-[#C9A050] font-light">区域</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["唇红线", "丘比特弓", "上下唇体", "口角", "人中嵴", "唇部对称矫正"].map((area) => (
                      <div key={area} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
                        <p className="text-stone-600 text-xs font-light">{area}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Suitability */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">我是否<span className="text-[#C9A050] font-light">适合？</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-stone-800">可能适合</p></div>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• 天生薄唇或扁平唇</li>
                        <li>• 唇形不对称</li>
                        <li>• 与年龄相关的唇部丰满度下降</li>
                        <li>• 希望清晰的唇部轮廓</li>
                        <li>• 18岁以上</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-stone-400" /><p className="text-sm font-medium text-stone-800">可能不适合</p></div>
                      <ul className="space-y-2 text-stone-500 text-xs font-light">
                        <li>• 活跃的唇疱疹或唇部感染</li>
                        <li>• 怀孕或哺乳期</li>
                        <li>• 对玻尿酸过敏</li>
                        <li>• 凝血障碍</li>
                        <li>• 不切实际的期望</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">为什么选择<span className="text-[#C9A050] font-light">CosmeDocs？</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "医生主导——所有治疗均由GMC注册医生执行",
                      "哈雷街研究所培训师——成立于2007年",
                      "已完成超过一百万次治疗",
                      "独家使用FDA批准的优质填充剂",
                      "为每位患者量身定制治疗方案",
                      "我们的医美是隐形艺术"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-stone-600 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-2">常见<span className="text-[#C9A050] font-light">问题</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-stone-50 border border-stone-200 rounded-xl px-5">
                        <AccordionTrigger className="text-stone-700 hover:text-[#C9A050] text-left text-sm font-light py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-stone-500 text-sm font-light pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24"><LipFillersSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-stone-800">准备好拥有自然<span className="text-[#C9A050]">美丽的双唇？</span></h2>
              <p className="text-stone-500 mb-8 font-light">与我们的医生咨询，评估您的唇部解剖结构，制定个性化增强方案——微妙或大胆，始终自然。</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    预约咨询 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/zh/">
                  <Button variant="ghost" className="border border-stone-300 text-stone-600 hover:text-stone-800 hover:bg-stone-100 px-8 py-5 rounded-full text-base w-full sm:w-auto">与医生交谈</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-stone-50"><LipFillersSidebar /></section>
      </div>
    </>
  );
};

export default LipFillersChinese;
