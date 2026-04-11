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

export default function FaceBotoxChinese() {
  const canonical = "https://www.cosmedocs.com/zh/treatments/botox/";

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
      { "@type": "Question", "name": "什么是肉毒素（Botox），它是如何起效的？", "acceptedAnswer": { "@type": "Answer", "text": "Botox（肉毒杆菌毒素A型）是一种纯化蛋白质，通过暂时阻断神经信号来放松目标面部肌肉，从而减少因重复面部表情引起的动态皱纹。该治疗已安全使用超过30年。" } },
      { "@type": "Question", "name": "哪些人适合注射Botox？", "acceptedAnswer": { "@type": "Answer", "text": "Botox适用于18岁以上的成年人。对于25-30岁寻求预防性治疗的人群，以及有明显皱纹寻求矫正治疗的人群均有效。怀孕和哺乳期间不推荐使用。" } },
      { "@type": "Question", "name": "Botox的效果能持续多久？", "acceptedAnswer": { "@type": "Answer", "text": "Botox的效果通常持续3至6个月。初步效果在3-5天内出现，10-14天后可见完整效果。" } },
      { "@type": "Question", "name": "Botox和玻尿酸填充有什么区别？", "acceptedAnswer": { "@type": "Answer", "text": "Botox通过放松肌肉来减少动态皱纹（运动时出现的纹路）。填充剂则通过添加体积来恢复流失的丰满度并柔化静态纹路。许多患者从两种治疗的结合中受益。" } },
      { "@type": "Question", "name": "如何在伦敦选择Botox诊所？", "acceptedAnswer": { "@type": "Answer", "text": "选择由注册医生主导的诊所，确保价格透明、咨询流程完善、患者评价良好。请验证CQC注册资质。" } }
    ]
  };

  const treatmentAreaCards = [
    { title: "上面部", areas: ["抬头纹", "眉间纹（川字纹）", "鱼尾纹", "提眉"], description: "最常见的Botox治疗区域，针对面部表情引起的皱纹。" },
    { title: "中下面部", areas: ["兔子纹", "唇翻（Lip Flip）", "露龈笑", "下巴橘皮纹"], description: "针对鼻部、嘴唇和下巴区域的精细治疗。" },
    { title: "下颌与颈部", areas: ["咬肌瘦脸", "Nefertiti提升", "颈阔肌纹"], description: "下面部和颈部的轮廓塑形与提升治疗。" },
    { title: "专项治疗", areas: ["Trap Tox（肩部）", "多汗症", "偏头痛"], description: "超越美容用途的治疗性和身体应用。" }
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
        <title>肉毒素 Botox | 全面抗皱指南 | Cosmedocs 哈雷街 伦敦</title>
        <meta name="description" content="伦敦Botox全面指南。了解Botox是什么、如何起效、治疗区域及预期效果。哈雷街注册医生主导的专业医美服务，自2007年起。" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/treatments/botox/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/botox/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/botox/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/botox/" />
        <link rel="alternate" hrefLang="zh" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/treatments/botox/" />
        <meta property="og:title" content="肉毒素 Botox | 抗皱指南 | Cosmedocs 哈雷街" />
        <meta property="og:description" content="伦敦Botox全面指南。哈雷街GMC注册医生主导的专业医美服务。" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.cosmedocs.com/default-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_CN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="伦敦botox, 哈雷街botox, 抗皱治疗伦敦, 肉毒素注射, 瘦脸botox, 咬肌botox, 最好的botox诊所伦敦, 预防性botox, 男士botox, 华人医美伦敦" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={`${bg} overflow-x-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: '治疗项目', path: '/treatments' }]} currentPage="肉毒素 Botox" variant="light" />
        </div>

        {/* HERO */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: `radial-gradient(circle, rgba(201,160,80,0.08) 0%, rgba(201,160,80,0.02) 40%, transparent 70%)` }} />
            <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(201,160,80,0.04) 50%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, 伦敦 W1G 9PF
                  </div>

                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light ${textH} mb-6 leading-[1.1] tracking-tight`}>
                    隐形的
                    <span className={`block font-semibold ${goldText}`}>抗皱艺术</span>
                  </h1>
                  <p className={`text-sm ${goldText}/60 tracking-widest uppercase mb-4 font-light`}>自然 · 持久效果</p>

                  <p className={`text-lg md:text-xl ${textBody} mb-4 max-w-xl leading-relaxed font-light`}>
                    您的Botox全面指南。了解其工作原理、预期效果，以及如何获得自然到无法察觉的抗皱效果。
                  </p>
                  <p className={`text-base ${textMuted} mb-10 max-w-xl leading-relaxed font-light`}>
                    在CosmeDocs，抗皱治疗以克制与精准为准则。GMC注册医生提供细腻、有针对性的护理，旨在焕新——而非过度。自2007年起，我们专注于自然、毫不刻意的效果。
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
                      <circle cx="250" cy="250" r="60" fill="url(#centreGlowLightZh)" />
                      <defs>
                        <radialGradient id="centreGlowLightZh" cx="0.5" cy="0.5" r="0.5">
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

                  <div className="absolute top-[45%] -right-2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-black/5 border border-gray-200 w-[260px]">
                    <div className="flex items-center gap-2 mb-3">
                      <Syringe className="w-4 h-4 text-[#C9A050]" />
                      <span className={`text-xs font-semibold ${goldText} uppercase tracking-wider`}>隐形针头</span>
                    </div>
                    <svg viewBox="0 0 220 80" className="w-full mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="45" cy="38" r="20" stroke={gold} strokeWidth="1.5" fill={gold} fillOpacity="0.1" />
                      <text x="45" y="42" fill={gold} fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">0.20mm</text>
                      <text x="45" y="10" fill="#555" fontSize="8" fontFamily="sans-serif" textAnchor="middle">33G针头</text>
                      <circle cx="130" cy="38" r="7" stroke="#aaa" strokeWidth="0.8" fill="#aaa" fillOpacity="0.1" />
                      <text x="130" y="41" fill="#888" fontSize="6" fontFamily="sans-serif" textAnchor="middle">0.07</text>
                      <text x="130" y="10" fill="#888" fontSize="8" fontFamily="sans-serif" textAnchor="middle">人类头发</text>
                      <text x="88" y="42" fill="#ccc" fontSize="9" fontFamily="sans-serif" textAnchor="middle">vs</text>
                      <text x="110" y="75" fill="#bbb" fontSize="7" fontFamily="sans-serif" textAnchor="middle">横截面直径</text>
                    </svg>
                    <p className={`text-[10px] ${textMuted} leading-relaxed`}>业内最细的针头——几乎不可见。仅约为人类头发粗细的3倍。</p>
                  </div>

                  <div className="absolute bottom-16 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-black/5 border border-gray-200 max-w-[300px]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full ${goldBg} flex items-center justify-center text-white text-xs font-bold`}>L</div>
                      <div>
                        <div className={`text-sm font-medium ${textH}`}>Lucy W.</div>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />)}</div>
                      </div>
                    </div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>"朋友们都说我看起来气色特别好，但谁也看不出我做了什么！"</p>
                    <Link to="/testimonials" className={`inline-flex items-center gap-1 text-xs ${goldText} mt-2 hover:underline`}>更多真实体验</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lazy-section">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            <div className="space-y-14">

              {/* 什么是Botox？ */}
              <section id="what-is-botox">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    什么是 <span className={`${goldText} font-light`}>Botox？</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        Botox是肉毒杆菌毒素A型的商品名，是一种从<em>肉毒杆菌</em>中提取的纯化蛋白质。以小剂量精准注射后，它通过阻断神经信号暂时放松目标肌肉——在保留自然表情的同时柔化动态皱纹。
                      </p>
                    }
                  >
                    <div className={`space-y-4 ${textBody} text-sm leading-relaxed font-light`}>
                      <p>
                        Botox最初是为肌肉痉挛和斜视等医疗疾病开发的，2002年获得FDA批准用于美容。如今它是全球最受欢迎的非手术美容治疗。
                      </p>
                      <ul className="space-y-2">
                        {["超过30年的临床使用，安全记录卓越", "获FDA、MHRA及全球监管机构批准", "治疗时间10至20分钟，无需恢复期", "效果是暂时性的，完全可逆"].map((fact) => (
                          <li key={fact} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>{fact}</span></li>
                        ))}
                      </ul>
                      <p>
                        "Botox"一词常被泛用，但实际上有多个品牌如Azzalure、Bocouture和Dysport。在CosmeDocs，我们使用优质正规产品，确保一致且可预测的效果。
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 工作原理 */}
              <section id="how-it-works">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Botox的 <span className={`${goldText} font-light`}>工作原理</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { step: "1", title: "注射", desc: "使用超细针头将少量产品精准注入目标肌肉。" },
                            { step: "2", title: "神经阻断", desc: "Botox阻断乙酰胆碱的释放，阻止神经信号到达肌肉。" },
                            { step: "3", title: "放松", desc: "目标肌肉放松，皮肤变得平滑，皱纹减少。" },
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
                        动态皱纹是由多年反复的肌肉收缩形成的——想想皱眉或眯眼时出现的纹路。通过暂时放松这些肌肉，Botox可以柔化现有纹路并预防新纹路的形成。
                      </p>
                      <p>
                        自然效果的关键在于精确的剂量和位置。经验丰富的医生会放松引起皱纹的肌肉，同时保留自然的面部表情。
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
                    Botox可以治疗面部和身体的多个区域。每个区域需要不同的技术和剂量以获得最佳效果。
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
                      { label: "咬肌瘦脸", to: "/treatments/masseter-botox/" },
                      { label: "唇翻 Lip Flip", to: "/treatments/lip-flip/" },
                      { label: "控油Botox", to: "/treatments/oily-skin-botox/" },
                    ].map((link) => (
                      <Link key={link.label} to={link.to} className={`px-4 py-2 ${cardBg} border ${cardBorder} rounded-full text-xs ${textBody} hover:text-[#C9A050] hover:border-[#C9A050]/30 transition-all font-light`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
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
                            <p className={`text-sm font-medium ${textH}/70`}>预防性Botox</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>适用于25-30岁有轻微纹路的人群。在重复肌肉运动形成永久性折痕之前进行预防。</p>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-[#C9A050]/60" />
                            <p className={`text-sm font-medium ${textH}/70`}>矫正性Botox</p>
                          </div>
                          <p className={`${textBody} text-xs leading-relaxed font-light`}>针对静态可见的已形成纹路和皱纹。柔化现有折痕并防止进一步加深。可与其他治疗结合。</p>
                        </div>
                      </div>
                    }
                  >
                    <div className={`space-y-5 ${textBody} text-sm leading-relaxed font-light`}>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-4`}>年龄参考</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          {[
                            { age: "20-30岁", text: "预防性治疗。低剂量控制初期动态纹路。注重保持自然表情。" },
                            { age: "40-50岁", text: "矫正性治疗。适量剂量柔化已形成的纹路。常与填充剂联合使用以恢复体积。" },
                            { age: "60岁以上", text: "综合年轻化的一部分。与其他治疗配合，自然焕新面部。" },
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

              {/* 男士Botox */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    男士 <span className={`${goldText} font-light`}>Botox</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        男士Botox治疗正在快速增长。男性通常寻求治疗以保持专业竞争力，看起来清爽——而非"修过"。
                      </p>
                    }
                  >
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                      <div className="grid md:grid-cols-2 gap-5">
                        {[
                          { title: "更大的剂量需求", desc: "男性通常拥有更大、更强的面部肌肉，需要多25-40%的产品才能达到同等效果。" },
                          { title: "男性审美", desc: "治疗会保留男性特征——有力的眉毛、分明的额头——同时减少纹路。" },
                          { title: "不同的目标", desc: "大多数男性希望看起来不那么疲惫或压力大，而不是更年轻。微妙的治疗可以自然实现这一点。" },
                          { title: "低调效果", desc: "目标是不被察觉的改善——同事们注意到你气色更好，但看不出你做了治疗。" },
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
                          { title: "第1-3天：起效", desc: "初步效果开始显现。您可能会注意到肌肉运动的细微变化。" },
                          { title: "第7-14天：高峰", desc: "完整效果变得可见。纹路柔化，治疗区域的肌肉放松。" },
                          { title: "第3-6个月：持续", desc: "效果通常持续3至6个月。持续时间因代谢速度、治疗区域和生活方式而异。" },
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
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>影响持续时间的因素</p>
                      <div className={`grid md:grid-cols-2 gap-3 text-xs ${textMuted} font-light`}>
                        {[
                          { label: "代谢速度", desc: "新陈代谢较快可能缩短持续时间" },
                          { label: "治疗区域", desc: "运动较多的区域可能消退更快" },
                          { label: "剂量", desc: "较高剂量可能持续更久" },
                          { label: "规律性", desc: "定期治疗通常能延长持续时间" },
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

              {/* Botox与填充剂 */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    Botox在 <span className={`${goldText} font-light`}>面部年轻化中的作用</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        了解Botox和<Link to="/treatments/dermal-fillers/" className={`${goldText}/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors`}>玻尿酸填充</Link>的区别，帮助您对治疗方案做出明智的决定。
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${goldText}/80 mb-3`}>Botox</p>
                        <p className={`${goldText}/50 text-xs mb-3 font-light`}>放松肌肉 → 减少动态皱纹</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• 表情时出现的纹路</li>
                          <li>• 额头、眉间、鱼尾纹</li>
                          <li>• 预防性治疗</li>
                          <li>• 效果持续3-6个月</li>
                        </ul>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-2xl p-6 shadow-sm`}>
                        <p className={`text-sm font-medium ${textH}/60 mb-3`}>玻尿酸填充</p>
                        <p className={`${textMuted} text-xs mb-3 font-light`}>添加体积 → 恢复流失的丰满度</p>
                        <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                          <li>• 静态时即可见的纹路</li>
                          <li>• 苹果肌、嘴唇、法令纹</li>
                          <li>• 体积恢复</li>
                          <li>• 效果持续6-18个月</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to="/treatments/dermal-fillers/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light`}>
                        了解更多关于填充剂 <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* 安全性 */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className={`text-3xl md:text-4xl font-extralight ${textH} mb-2 leading-tight`}>
                    安全性与 <span className={`${goldText} font-light`}>监管</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className={`${textBody} text-sm leading-relaxed font-light`}>
                        由合格的专业医疗人员操作时，Botox具有出色的安全记录。获FDA、MHRA及全球监管机构批准，拥有超过30年的临床使用经验。
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>英国监管</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• Botox属于处方药（POM）</li>
                            <li>• 必须由医生、护士或牙医处方</li>
                            <li>• 需要面对面咨询</li>
                            <li>• 诊所必须在CQC注册</li>
                          </ul>
                        </div>
                        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                          <div className="flex items-center gap-2 mb-3"><Heart className="w-4 h-4 text-[#C9A050]/60" /><p className={`text-xs font-medium ${textH}/60`}>咨询过程</p></div>
                          <ul className={`space-y-1.5 ${textMuted} text-xs font-light`}>
                            <li>• 全面的病史审查</li>
                            <li>• 讨论顾虑与目标</li>
                            <li>• 解释治疗方案</li>
                            <li>• 设定合理的期望</li>
                            <li>• 获取知情同意</li>
                          </ul>
                        </div>
                      </div>
                      <div className={`${cardBg} border ${cardBorder} rounded-xl p-5 shadow-sm`}>
                        <p className={`text-xs font-medium ${textH}/60 mb-2`}>禁忌症</p>
                        <p className={`${textMuted} text-xs font-light mb-2`}>以下情况不适合使用Botox：</p>
                        <ul className={`grid md:grid-cols-2 gap-1.5 ${textMuted} text-xs font-light`}>
                          <li>• 怀孕或哺乳期</li>
                          <li>• 患有神经肌肉疾病</li>
                          <li>• 注射部位有感染</li>
                          <li>• 对肉毒素过敏</li>
                        </ul>
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
                        {["治疗前7天避免使用抗凝血药物（阿司匹林、布洛芬）", "治疗前24-48小时限制饮酒", "到院时保持皮肤清洁、不化妆", "告知医生所有正在服用的药物"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
                      <p className={`text-xs font-medium ${textH}/60 mb-3`}>治疗后</p>
                      <ul className={`space-y-2 ${textMuted} text-xs font-light`}>
                        {["治疗后4小时保持直立", "避免触摸或揉搓治疗区域", "24小时内避免运动、桑拿和饮酒", "2周内避免面部护理和按摩"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><Check className="w-3 h-3 text-[#C9A050]/60 mt-0.5" /><span>{item}</span></li>
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
                    真实患者 <span className={`${goldText} font-light`}>效果展示</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/frown-lines-before-after-preview.jpg" alt="眉间纹Botox治疗前后对比" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                    <div className={`rounded-xl overflow-hidden border ${cardBorder}`}>
                      <img src="/images/before-after/botox/forehead-lines-before-after-preview.jpg" alt="抬头纹Botox治疗前后对比" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                  </div>
                  <p className={`${textMuted} text-xs mb-5 font-light`}>
                    所有图片均为我们哈雷街诊所医生治疗的真实患者。效果因个人面部结构和治疗方案而异。
                  </p>
                  <Link to="/before-after/botox/" className={`inline-flex items-center gap-2 ${goldText}/70 hover:text-[#C9A050] text-xs font-light transition-colors`}>
                    查看Botox前后对比图库 → <ArrowRight className="w-3 h-3" />
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
                      { icon: <Shield className="w-4 h-4" />, title: "品质", desc: "FDA批准产品" },
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
                      { v: "what-is", q: "Botox到底是什么？", a: "Botox是肉毒杆菌毒素A型的商品名，是一种暂时放松目标肌肉的纯化蛋白质。在医学和美容领域已安全使用超过30年。" },
                      { v: "pain", q: "注射Botox疼吗？", a: "大多数患者形容Botox注射的感觉像是轻轻的针刺。我们使用超细针头，如需要还可以涂抹麻醉膏。整个过程很快，通常在10-20分钟内完成。" },
                      { v: "safe", q: "Botox安全吗？", a: "由合格的医疗专业人员操作时，Botox拥有出色的安全记录。获全球监管机构批准，并有超过三十年的临床使用经验。" },
                      { v: "results", q: "多久能看到效果？", a: "初步效果通常在3-5天内出现，10-14天后可见完整效果。效果一般持续3至6个月，取决于个人因素。" },
                      { v: "natural", q: "会看起来僵硬或不自然吗？", a: "由合格的医生操作就不会。目标是充分放松肌肉以减少皱纹，同时保持自然的面部表情。"僵脸"效果是过度治疗的结果，这是我们所避免的。" },
                      { v: "suitable", q: "Botox适合我吗？", a: "Botox适用于18岁以上希望减少或预防面部纹路的成年人。无论是20-30岁的预防还是已形成纹路的矫正，均有良好效果。" },
                      { v: "difference", q: "Botox和填充剂有什么区别？", a: "Botox通过放松肌肉来减少动态皱纹（运动时的纹路）。填充剂则添加体积以恢复丰满度并柔化静态纹路。它们针对不同的问题，常常联合使用。" },
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
                <BotoxSidebarLight />
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
          <BotoxSidebarLight />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>伦敦Botox肉毒素——全面抗皱治疗指南</h2>
          <p>
            伦敦Botox肉毒素治疗尽在CosmeDocs哈雷街诊所。自2007年起由注册医生主导的Botox治疗，已完成超过一百万次注射。包括瘦脸咬肌Botox、抬头纹、鱼尾纹、眉间纹治疗。我们的医美理念是隐形的艺术——大胆、自然、始终以您为本。华人医美伦敦首选诊所。
          </p>
        </div>
      </div>
    </>
  );
}
