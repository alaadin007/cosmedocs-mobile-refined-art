import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ArrowRight, Calendar, Syringe, Heart, Shield, MapPin, Eye, Smile, Sparkles, Award, Users, Star, Check, Stethoscope, GraduationCap, Building, Phone, MessageCircle, Activity, Droplets } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import DermalFillersSidebar from '@/components/dermal-fillers/DermalFillersSidebar';

export default function DermalFillersChinese() {
  const canonical = "https://www.cosmedocs.com/zh/treatments/dermal-fillers/";

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "image": ["https://www.cosmedocs.com/default-og-image.jpg"],
    "url": "https://www.cosmedocs.com",
    "telephone": "+44 20 3733 3227",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "伦敦",
      "addressRegion": "Greater London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 20 3733 3227",
      "contactType": "customer service",
      "availableLanguage": ["Chinese", "English"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "玻尿酸填充安全吗？", "acceptedAnswer": { "@type": "Answer", "text": "是的，由合格的医疗专业人员操作时是安全的。在CosmeDocs，所有治疗均由GMC注册医生使用FDA批准的优质玻尿酸填充剂进行。这些产品具有生物相容性，必要时可使用玻尿酸酶溶解。" } },
      { "@type": "Question", "name": "哪些人适合玻尿酸填充治疗？", "acceptedAnswer": { "@type": "Answer", "text": "大多数18岁以上的健康成年人都是合适的候选人。在咨询过程中，我们的医生会评估您的病史、皮肤状况、面部结构和美学目标，以确定适合性。" } },
      { "@type": "Question", "name": "玻尿酸填充能维持多久？", "acceptedAnswer": { "@type": "Answer", "text": "效果通常持续12-18个月，具体取决于治疗区域、使用的产品和个人代谢速度。唇部填充通常持续6-12个月，而苹果肌和下颌线填充可持续长达18个月。" } },
      { "@type": "Question", "name": "填充剂和Botox有什么区别？", "acceptedAnswer": { "@type": "Answer", "text": "玻尿酸填充通过添加体积来恢复流失的丰满度并柔化静态纹路。Botox则通过放松肌肉来减少面部表情引起的动态皱纹。许多患者从两种治疗的结合中受益。" } },
      { "@type": "Question", "name": "玻尿酸填充可以溶解吗？", "acceptedAnswer": { "@type": "Answer", "text": "是的，玻尿酸填充剂可以使用一种名为玻尿酸酶的酶来溶解。这提供了重要的安全保障，并允许在需要时进行调整。" } }
    ]
  };

  const treatmentAreaCards = [
    { title: "唇部", areas: ["体积增强", "唇形塑造", "丘比特之弓", "自然丰唇"], description: "最受欢迎的填充治疗，从微妙的轮廓定义到更丰满的体积。", link: "/treatments/lip-fillers/" },
    { title: "中面部", areas: ["苹果肌体积", "泪沟", "太阳穴凹陷", "法令纹"], description: "恢复中面部支撑，改善因体积流失导致的老化面貌。", link: "/treatments/cheek-filler/" },
    { title: "下面部", areas: ["下颌线塑形", "下巴突出", "木偶纹", "嘴边肉支撑"], description: "结构性轮廓塑造，打造更分明、更平衡的下面部。", link: "/treatments/jawline-filler/" },
    { title: "专项治疗", areas: ["非手术鼻整形", "额头平滑", "耳垂年轻化", "手部年轻化"], description: "针对特定问题和精细调整的定向治疗。" }
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
        <html lang="zh" />
        <title>玻尿酸填充 | 医生主导面部年轻化 | Cosmedocs 哈雷街 伦敦</title>
        <meta name="description" content="伦敦玻尿酸填充全面指南。了解玻尿酸治疗、治疗区域、适合人群及全脸方案。哈雷街注册医生主导的专业服务。" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/treatments/dermal-fillers/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/traitements/acide-hyaluronique/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/tratamientos/acido-hialuronico/" />
        <link rel="alternate" hrefLang="zh" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/dermal-fillers/" />
        <meta property="og:title" content="玻尿酸填充 | 面部年轻化 | Cosmedocs 哈雷街" />
        <meta property="og:description" content="伦敦玻尿酸填充全面指南。哈雷街GMC注册医生主导的专业医美服务。" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.cosmedocs.com/default-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_CN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="伦敦玻尿酸填充, 哈雷街填充, 丰唇伦敦, 苹果肌填充, 下颌线填充, 泪沟填充, 玻尿酸, 面部填充, 非手术拉皮, 华人医美伦敦" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        {/* HERO */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, rgba(201,160,80,0.02) 40%, transparent 70%)` }} />
            <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(201,160,80,0.04) 50%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6">
              <Breadcrumb items={[{ label: '治疗项目', path: '/treatments' }]} currentPage="玻尿酸填充" variant="light" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, 伦敦 W1G 9PF
                  </div>

                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    隐形的
                    <span className={`block font-semibold ${goldText}`}>修复艺术</span>
                  </h1>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    您的玻尿酸填充全面指南。了解玻尿酸如何恢复体积，以及如何获得自然到无法察觉的效果。
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    在CosmeDocs，填充剂的注射讲究精准与克制。GMC注册医生全面评估您的面部，恢复平衡——而非改变身份。自2007年起，我们的理念始终是隐形的艺术。
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                    className={`group ${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20`}
                  >
                    预约咨询 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 rounded-full px-8 py-6 text-base font-medium border border-gray-300"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> AI医生咨询
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className={`mt-16 flex flex-wrap gap-8 text-sm ${textMuted}`}>
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> GMC注册</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> 17年以上</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> 评分 4.9</span>
                </motion.div>
              </div>

              {/* Right — SVG art */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[
                        { d: "M250 80 C300 80, 380 150, 380 250 C380 350, 300 420, 250 420 C200 420, 120 350, 120 250 C120 150, 200 80, 250 80", opacity: 0.08 },
                        { d: "M250 120 C285 120, 340 170, 340 250 C340 330, 285 380, 250 380 C215 380, 160 330, 160 250 C160 170, 215 120, 250 120", opacity: 0.1 },
                        { d: "M250 160 C270 160, 310 190, 310 250 C310 310, 270 340, 250 340 C230 340, 190 310, 190 250 C190 190, 230 160, 250 160", opacity: 0.12 },
                        { d: "M250 200 C260 200, 280 215, 280 250 C280 285, 260 300, 250 300 C240 300, 220 285, 220 250 C220 215, 240 200, 250 200", opacity: 0.15 },
                      ].map((shape, i) => (
                        <path key={i} d={shape.d} stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity={shape.opacity} />
                      ))}
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowFillerZh)" />
                      <defs>
                        <radialGradient id="centreGlowFillerZh" cx="0.5" cy="0.5" r="0.5">
                          <stop offset="0%" stopColor={gold} stopOpacity="0.12" />
                          <stop offset="100%" stopColor={gold} stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${goldBg} flex items-center justify-center`}><Star className="h-5 w-5 text-white fill-white" /></div>
                      <div>
                        <div className={`text-sm font-semibold ${textH}`}>值得信赖的诊所</div>
                        <div className={`text-xs ${textMuted}`}>自2007年起</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[45%] -right-2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200 w-[240px]">
                    <div className="flex items-center gap-2 mb-3">
                      <Droplets className="w-4 h-4 text-[#C9A050]" />
                      <span className={`text-xs font-semibold ${goldText} uppercase tracking-wider`}>玻尿酸</span>
                    </div>
                    <p className={`text-[11px] ${textBody} leading-relaxed mb-2`}>
                      一种天然存在于皮肤中的物质，负责保持水分和提供结构支撑。
                    </p>
                    <div className={`flex items-center gap-3 text-[10px] ${textMuted}`}>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> 生物相容</span>
                      <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#C9A050]" /> 可溶解</span>
                    </div>
                  </div>

                  <div className="absolute bottom-16 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-black/5 border border-gray-200 max-w-[300px]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full ${goldBg} flex items-center justify-center text-white text-xs font-bold`}>J</div>
                      <div>
                        <div className={`text-sm font-medium ${textH}`}>Jessica K.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"大家都说我看起来好极了，但就是说不出哪里变了。这就是真正高水平的标志。"</p>
                    <Link to="/testimonials" className={`inline-flex items-center gap-1 text-xs ${goldText} mt-2 hover:underline`}>更多真实体验</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            <div className="space-y-14">

              {/* 什么是玻尿酸填充？ */}
              <section id="what-are-fillers">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    什么是 <span className={`${goldText} font-light`}>玻尿酸填充？</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        玻尿酸填充是最常见的注射类治疗，主要成分是玻尿酸——一种天然存在于皮肤中的物质，帮助保持水分、体积和弹性。随着年龄增长，面部失去结构支撑——骨骼退缩、脂肪垫移位、皮肤变薄。玻尿酸填充通过恢复流失的体积、提升下垂组织和柔化纹路来改善这些问题——无需手术。
                      </p>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-4`}>填充剂可以解决的问题</p>
                        <ul className="space-y-2">
                          {["恢复苹果肌、太阳穴和嘴唇因年龄流失的体积", "改善面部比例和对称性", "支撑下垂组织并提升嘴边肉", "柔化静态纹路和法令纹", "增强自然轮廓——下颌线、下巴、嘴唇"].map((fact) => (
                            <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        在CosmeDocs，玻尿酸填充绝不是"盲目填充纹路"。它被策略性地放置以支撑整个面部，尊重个人面部结构和自然表情。
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 工作原理 */}
              <section id="how-they-work">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    玻尿酸填充的 <span className={`${goldText} font-light`}>工作原理</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { step: "1", title: "评估", desc: "医生分析面部结构、骨骼结构和体积流失模式，制定个性化治疗方案。" },
                          { step: "2", title: "注射", desc: "使用导管或细针在特定深度精准放置玻尿酸凝胶，恢复或增强体积。" },
                          { step: "3", title: "融合", desc: "填充剂与周围组织融合，吸收水分，提供自然的支撑和结构。" },
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
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        与放松肌肉的Botox不同，玻尿酸填充在皮肤表面下物理性地添加体积。填充剂中的玻尿酸具有生物相容性——与您的身体协同作用，而非对抗。
                      </p>
                      <p>
                        高端填充剂有不同的粘稠度——较稠的凝胶用于结构支撑（下颌线、下巴），中等凝胶用于体积恢复（苹果肌），较软的凝胶用于精细区域（嘴唇、泪沟）。为每个区域选择正确的产品对于自然效果至关重要。
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 治疗区域 */}
              <section id="treatment-areas">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    治疗 <span className={`${goldText} font-light`}>区域</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className={`${textBody} text-sm leading-relaxed font-light mb-6`}>
                    面部每个区域都有独特的解剖结构、老化模式和需求。我们的医生根据每个区域的特点量身定制产品选择、注射深度和用量。
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
                        {card.link && (
                          <Link to={card.link} className={`inline-flex items-center gap-1 ${goldText}/70 text-xs mt-3 hover:text-[#C9A050] font-light transition-colors`}>
                            了解更多 <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "丰唇", to: "/treatments/lip-fillers/" },
                      { label: "下颌线填充", to: "/treatments/jawline-filler/" },
                      { label: "苹果肌填充", to: "/treatments/cheek-filler/" },
                      { label: "下巴填充", to: "/treatments/chin-filler/" },
                      { label: "泪沟填充", to: "/treatments/tear-trough-filler/" },
                      { label: "太阳穴填充", to: "/treatments/temple-filler/" },
                    ].map((link) => (
                      <Link key={link.label} to={link.to} className={`px-4 py-2 ${cardBg} border ${cardBorder} rounded-full text-xs ${textBody} hover:text-[#C9A050] hover:border-[#C9A050]/30 transition-all font-light`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* 全脸方案 */}
              <section id="full-face-approach">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    全脸 <span className={`${goldText} font-light`}>综合方案</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        面部老化不是孤立发生的。纹路、折痕和凹陷往往是面部其他区域结构性变化的结果。因此我们的医生采用全脸方案——评估不同区域如何相互影响，以及恢复一个区域的支撑如何自然改善另一个区域。
                      </p>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-4`}>这种方法的优势：</p>
                        <ul className="space-y-2">
                          {["降低任何单一区域过度填充的风险", "产生更自然、更平衡的效果", "保持面部运动和表情", "以更少的产品实现更持久的效果"].map((item) => (
                            <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                          ))}
                        </ul>
                      </div>
                      <p className={`${goldText}/60 italic font-light`}>
                        我们的目标不是明显的矫正——而是微妙的修复。
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 谁适合？ */}
              <section id="who-is-suitable">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    谁 <span className={`${goldText} font-light`}>适合？</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>增强型</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>适合希望增强面部特征的人群——唇部丰满、苹果肌轮廓、下颌线塑形——无论年龄。</p>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>修复型</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>针对因年龄引起的体积流失——凹陷的苹果肌、深法令纹、变薄的嘴唇、太阳穴凹陷。恢复时间带走的。</p>
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-4`}>年龄参考</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          {[
                            { age: "20-30岁", text: "以增强为主。唇部定义、下巴突出或微妙的苹果肌轮廓。少量注射，自然效果。" },
                            { age: "40-50岁", text: "开始体积恢复。中面部支撑、法令纹、下颌线塑形。常与Botox联合使用。" },
                            { age: "60岁以上", text: "综合修复。多个区域需要结构支撑。作为更广泛年轻化方案的一部分。" },
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

              {/* 效果时间线 */}
              <section id="results">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    效果 <span className={`${goldText} font-light`}>时间线</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        {[
                          { title: "第1天：即时效果", desc: "治疗后立即可见改善。轻微肿胀是正常的，通常在48-72小时内消退。" },
                          { title: "第2-4周：稳定期", desc: "肿胀完全消退。填充剂已与组织融合并充分水合。这时您看到的是真实效果。" },
                          { title: "第12-18个月：持续", desc: "效果通常持续12-18个月，取决于治疗区域、使用的产品和个人代谢速度。" },
                        ].map((t) => (
                          <div key={t.title} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/50 mt-2 flex-shrink-0" />
                            <div>
                              <p className={`text-xs font-medium ${textH}/60 mb-0.5`}>{t.title}</p>
                              <p className={`${textMuted} text-xs font-light`}>{t.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>各区域持续时间</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "唇部", desc: "6-12个月（高运动区域）" },
                          { label: "苹果肌", desc: "12-18个月" },
                          { label: "下颌线和下巴", desc: "12-18个月" },
                          { label: "泪沟", desc: "12-18个月（低运动区域）" },
                        ].map((f) => (
                          <div key={f.label} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" />
                            <span><strong className={`${textBody}`}>{f.label}：</strong>{f.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 填充剂与Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    填充剂在 <span className={`${goldText} font-light`}>面部年轻化中的作用</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        了解<Link to="/treatments/dermal-fillers/" className={`${goldText}/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors`}>玻尿酸填充</Link>和<Link to="/treatments/botox/" className={`${goldText}/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors`}>Botox</Link>的区别，有助于您对治疗方案做出明智的决定。
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${goldText}/80 mb-3`}>玻尿酸填充</p>
                        <p className={`${goldText}/50 text-xs mb-3 font-light`}>添加体积 → 恢复流失的丰满度</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• 静态时即可见的纹路</li>
                          <li>• 苹果肌、嘴唇、法令纹</li>
                          <li>• 体积恢复</li>
                          <li>• 效果持续6-18个月</li>
                        </ul>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/60 mb-3`}>Botox</p>
                        <p className={`${textMuted} text-xs mb-3 font-light`}>放松肌肉 → 减少动态皱纹</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• 表情时出现的纹路</li>
                          <li>• 额头、眉间、鱼尾纹</li>
                          <li>• 预防性治疗</li>
                          <li>• 效果持续3-6个月</li>
                        </ul>
                      </div>
                    </div>
                    <p className={`${textBody} text-sm leading-relaxed font-light mt-4`}>
                      许多患者受益于联合治疗。Botox针对动态纹路，填充剂恢复流失的体积——两者结合实现全面的面部年轻化。
                    </p>
                    <Link to="/zh/treatments/botox/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light mt-2`}>
                      了解更多关于Botox <ArrowRight className="w-3 h-3" />
                    </Link>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 安全性 */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    安全性与 <span className={`${goldText} font-light`}>咨询</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        玻尿酸填充剂具有出色的安全性。它们具有生物相容性、暂时性，且——重要的是——可以使用玻尿酸酶完全溶解。
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>安全性</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• FDA和CE认证产品</li>
                            <li>• 生物相容——与身体协同作用</li>
                            <li>• 可使用玻尿酸酶完全溶解</li>
                            <li>• 暂时性——随时间自然代谢</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>咨询过程</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• 全面的面部评估和病史</li>
                            <li>• 讨论顾虑与目标</li>
                            <li>• 坦诚建议——适当时我们会说不</li>
                            <li>• 设定合理的期望</li>
                            <li>• 获取知情同意</li>
                          </ul>
                        </div>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-xl p-5 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-2`}>禁忌症</p>
                        <p className={`${textMuted} text-xs font-light mb-2`}>以下情况可能不适合玻尿酸填充：</p>
                        <ul className={`grid md:grid-cols-2 gap-1.5 ${textMuted} text-xs font-light`}>
                          <li>• 怀孕或哺乳期</li>
                          <li>• 注射部位有活跃的皮肤感染</li>
                          <li>• 某些自身免疫性疾病</li>
                          <li>• 严重过敏史</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 填充剂移位的误解 */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    填充剂移位的 <span className={`${goldText} font-light`}>误解</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        "填充剂移位"是医美界最常被重复提及的担忧之一——但它很大程度上是一种误解。当经验丰富的医生正确注射时，玻尿酸填充剂会与周围组织融合，精确地停留在注射的位置。
                      </p>
                    }
                  >
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        被贴上"移位"标签的情况通常是注射技术不当的结果——填充剂放置得太浅、用量过多或注射在错误的组织层面。当产品被错误放置时，它可能会扩散到预期区域之外，造成不自然的外观。
                      </p>
                      <div className={`${cardBg} border-l-2 border-[#C9A050] rounded-r-xl p-6 shadow-sm`}>
                        <blockquote className={`${textBody} text-xs italic leading-relaxed mb-4`}>
                          "移位是技术问题，不是产品问题。当填充剂被放置在正确的深度、正确的组织层面、使用适当的用量时——它根本不会移位。这个担忧通过正确的解剖知识和克制是完全可以避免的。"
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${goldBg} flex items-center justify-center text-white text-xs font-bold`}>AH</div>
                          <div>
                            <p className={`${textH} font-medium text-xs`}>Dr. Ahmed Haq</p>
                            <p className={`${textMuted} text-[10px]`}>CosmeDocs 医疗总监</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 准备与术后护理 */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    治疗前准备与 <span className={`${goldText} font-light`}>术后护理</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>治疗前</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["7天前避免使用抗凝血药物（阿司匹林、布洛芬）", "24-48小时前限制饮酒", "告知医生所有正在服用的药物", "治疗前后2周避免牙科治疗"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>治疗后</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["6小时内避免触摸或按压治疗区域", "24-48小时内避免剧烈运动", "避免桑拿、蒸汽房和极端高温", "第一晚稍微抬高枕头睡觉"].map((t) => (
                          <li key={t} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{t}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* 真实效果 */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    玻尿酸填充 <span className={`${goldText} font-light`}>前后效果</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img
                        src="/images/before-after/dermal-fillers/full-face-filler-before-after-preview.jpg"
                        alt="全脸玻尿酸填充前后对比展示面部年轻化效果"
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>
                    所有图片均为我们哈雷街诊所医生治疗的真实患者。效果因个人面部结构和治疗方案而异。
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/"
                    className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light transition-colors`}
                  >
                    查看玻尿酸填充前后对比图库 → <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </section>

              {/* 为什么选择CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    为什么选择 <span className={`${goldText} font-light`}>CosmeDocs？</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: <Award className="w-4 h-4" />, title: "经验", desc: "自2007年起超百万次注射" },
                      { icon: <GraduationCap className="w-4 h-4" />, title: "培训", desc: "HSI培训导师" },
                      { icon: <Shield className="w-4 h-4" />, title: "品质", desc: "优质玻尿酸产品" },
                      { icon: <Sparkles className="w-4 h-4" />, title: "理念", desc: "隐形的艺术" },
                      { icon: <Stethoscope className="w-4 h-4" />, title: "医生", desc: "注册医生操作" },
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

              {/* 常见问题 */}
              <section id="faqs">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    常见 <span className={`${goldText} font-light`}>问题</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { v: "safe", q: "玻尿酸填充安全吗？", a: "是的，由合格的医疗专业人员操作时是安全的。在CosmeDocs，所有治疗均由GMC注册医生使用FDA批准的优质玻尿酸填充剂进行。这些产品具有生物相容性，必要时可使用玻尿酸酶溶解。" },
                      { v: "suitable", q: "哪些人适合玻尿酸填充治疗？", a: "大多数18岁以上的健康成年人都是合适的候选人。在咨询过程中，我们的医生会评估您的病史、皮肤状况、面部结构和美学目标，以确定适合性。" },
                      { v: "last", q: "玻尿酸填充能维持多久？", a: "效果通常持续12-18个月，具体取决于治疗区域、使用的产品和个人代谢速度。唇部填充通常持续6-12个月，而苹果肌和下颌线填充可持续长达18个月。" },
                      { v: "pain", q: "玻尿酸填充疼吗？", a: "大多数患者形容感觉是轻微不适而非疼痛。我们使用局部麻醉膏，大多数填充剂含有利多卡因以增加舒适度。治疗过程耐受性良好。" },
                      { v: "natural", q: "填充后看起来自然吗？", a: "由经验丰富的医生操作，绝对自然。'过度填充'的外观来自技术不当或用量过多。我们的方法优先考虑微妙、平衡的效果。" },
                      { v: "combine", q: "玻尿酸填充可以和Botox一起做吗？", a: "是的，许多患者受益于联合治疗。填充剂恢复体积和结构，Botox针对动态表情纹路。医生会在咨询时建议最佳方案。" },
                      { v: "reverse", q: "玻尿酸填充可以溶解吗？", a: "是的，玻尿酸填充剂可以使用一种名为玻尿酸酶的酶来溶解。这提供了重要的安全保障，并允许在需要时进行调整。" },
                    ].map((faq) => (
                      <AccordionItem key={faq.v} value={faq.v} className="border-gray-200">
                        <AccordionTrigger className="text-gray-700 hover:text-[#C9A050] text-left text-sm font-light">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-xs font-light">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <DermalFillersSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-3xl font-light mb-4 ${textH}`}>
                您的咨询 <span className={goldText}>从这里开始</span>
              </h2>
              <p className={`${textBody} mb-8`}>来自哈雷街医生的精心护理</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className={`${goldBg} hover:bg-[#B8924A] text-white rounded-full px-8 py-6`}
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  预约咨询
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  <Phone className="w-4 h-4 mr-2" /> 0333 055 1503
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500/50 text-green-600 hover:bg-green-500 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.open('https://wa.me/447535076003', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Pricing */}
        <section className="lg:hidden py-12 px-4 bg-white">
          <DermalFillersSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>伦敦玻尿酸填充——全面面部年轻化指南</h2>
          <p>
            伦敦玻尿酸填充尽在CosmeDocs哈雷街诊所。医生主导的玻尿酸填充治疗，包括丰唇、苹果肌填充、下颌线填充、下巴填充、泪沟填充和太阳穴填充。GMC注册医生自2007年起提供自然面部年轻化服务，已完成超过一百万次注射。我们的全脸方案确保平衡、微妙的效果，提升您的外貌而不改变您的身份。我们的医美理念是隐形的艺术——大胆、自然、始终以您为本。华人医美伦敦首选诊所。
          </p>
        </div>
      </div>
    </>
  );
}
