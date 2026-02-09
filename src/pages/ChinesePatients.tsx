
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateSEOMetadata } from '@/utils/seo';

import baNose from "@/assets/chinese-ba-nose.jpg";
import baMasseter from "@/assets/chinese-ba-masseter.jpg";
import baFullFace from "@/assets/chinese-ba-full-face.jpg";
import baCheekChin from "@/assets/chinese-ba-cheek-chin.jpg";
import baTreatment from "@/assets/chinese-ba-treatment.jpg";
import baFacialBalance from "@/assets/chinese-ba-facial-balance.png";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cosmedocs 接受华语患者吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "是的，Cosmedocs 自 2007 年起持续为华语患者提供服务，曾通过 Nihao Magazine 与伦敦华人社区深度合作。所有治疗由医生亲自操作。"
      }
    },
    {
      "@type": "Question",
      "name": "什么是瘦脸 Botox（咬肌 Masseter Botox）？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "瘦脸 Botox 通过注射肉毒素放松咬肌，使脸型变窄变轻。Cosmedocs 强调控制剂量，避免'冻脸'，追求瘦而不尖的自然效果。"
      }
    },
    {
      "@type": "Question",
      "name": "小腿瘦肌治疗安全吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cosmedocs 是伦敦最早提供小腿瘦肌治疗的诊所之一。医生精准评估肌肉结构，避免行走异常，线条自然变细。该治疗不影响正常行走和运动功能。"
      }
    },
    {
      "@type": "Question",
      "name": "什么是 HA Makeover（玻尿酸综合年轻化）？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HA Makeover 是一种系统性方案，结合玻尿酸注射进行结构支撑、体积恢复和皮肤状态改善，让脸看起来更年轻、更轻盈，但没有'做过'的痕迹。"
      }
    },
    {
      "@type": "Question",
      "name": "治疗效果自然吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "自然效果是 Cosmedocs 的核心理念。我们不做'网红脸'，不追求过度填充，不复制模板脸。我们追求脸型比例的改善和肌肉力量的平衡。"
      }
    },
    {
      "@type": "Question",
      "name": "如何预约咨询？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "您可以通过网站联系页面预约，也可以使用网站上的 AI 咨询助手提前了解治疗信息。诊所位于伦敦哈雷街（Harley Street）。"
      }
    }
  ]
};

const MEDICAL_CLINIC_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Cosmedocs",
  "url": "https://www.cosmedocs.co.uk/chinese-patients/",
  "telephone": "+44 20 3733 3227",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 Harley Street",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "postalCode": "W1G 9PF",
    "addressCountry": "GB"
  },
  "availableLanguage": ["English", "Chinese"],
  "medicalSpecialty": "Cosmetic Medicine",
  "description": "伦敦华人医美诊所"
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const ChinesePatients = () => {
  const seoData = generateSEOMetadata(
    "伦敦华人医美诊所 | Cosmedocs 哈雷街",
    "Cosmedocs 位于伦敦哈雷街，自 2007 年起服务华语患者，擅长瘦脸 Botox（咬肌）与小腿瘦肌，强调自然比例，由医生全程操作。",
    "/chinese-patients"
  );

  const beforeAfterImages = [
    { src: baFullFace, alt: "面部综合年轻化 – 前后对比 – Cosmedocs 伦敦" },
    { src: baMasseter, alt: "咬肌瘦脸 Botox – 前后对比 – Cosmedocs" },
    { src: baCheekChin, alt: "面颊与下巴填充 – 前后对比 – 哈雷街" },
    { src: baFacialBalance, alt: "面部平衡改善 – 前后对比 – Cosmedocs 伦敦" },
    { src: baNose, alt: "非手术鼻整形 – 前后对比 – Cosmedocs" },
    { src: baTreatment, alt: "Cosmedocs 治疗过程 – 哈雷街诊所" },
  ];

  return (
    <>
      <Helmet>
        <html lang="zh-CN" />
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
        <meta name="keywords" content="伦敦华人医美诊所, 华语医美, 瘦脸 Botox, 咬肌 Botox, Masseter Botox, 小腿瘦肌, 自然医美, 医生主导医美, 伦敦哈雷街医美, HA Makeover" />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(MEDICAL_CLINIC_SCHEMA)}</script>
      </Helmet>

      <div className="bg-background text-foreground">
        {/* Hero */}
        <section className="bg-black text-white py-20 md:py-28">
          <div className="page-container text-center">
            <motion.div {...fadeUp}>
              <p className="text-[hsl(var(--gold))] text-sm tracking-widest uppercase mb-4">Cosmedocs · 哈雷街 · 伦敦</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                伦敦华语医美诊所
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Cosmedocs｜哈雷街｜医生主导·自然医美
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                自 2007 年起持续为华语患者提供专业、自然、安全的医美治疗
              </p>
            </motion.div>
          </div>
        </section>

        {/* Welcome */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">欢迎华语患者来到 Cosmedocs</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cosmedocs 位于伦敦著名的 Harley Street（哈雷街），自 2007 年起持续为华语患者提供专业、自然、安全的医美治疗。我们是伦敦最早与华人社区建立长期信任关系的医美诊所之一，并曾通过 <strong className="text-white">Nihao Magazine（你好杂志）</strong>与华人群体深度合作。
              </p>
              <p className="text-[hsl(var(--gold))] text-xl font-semibold text-center">
                医美的目标，是比例与气质的提升，而不是"被看出来"。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Chinese Patients Choose Cosmedocs */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">为什么华语患者选择 Cosmedocs？</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "自 2007 年起服务华语患者",
                  "医生亲自操作（非销售型医美）",
                  "擅长东方脸型与肌肉结构",
                  "强调自然、比例、长期效果",
                  "严格隐私保护",
                  "瘦脸·瘦小腿专业经验"
                ].map((item, i) => (
                  <Card key={i} className="bg-black/50 border-none">
                    <CardContent className="p-5 flex items-center gap-3">
                      <span className="text-[hsl(var(--gold))]">✓</span>
                      <p className="text-gray-300">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-gray-400 text-center mt-8">
                我们非常了解华语患者对瘦脸、瘦小腿、自然感的高度要求。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">我们的医美理念：自然，而不是夸张</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8 text-right">
                <div>
                  <p className="text-red-400 font-bold text-lg mb-3 text-center">❌ 我们不做</p>
                  <ul className="space-y-2 text-gray-400 text-center">
                    <li>"网红脸"</li>
                    <li>过度填充</li>
                    <li>复制模板脸</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[hsl(var(--gold))] font-bold text-lg mb-3 text-center">✅ 我们追求的是</p>
                  <ul className="space-y-2 text-gray-300 text-center">
                    <li>脸型比例的改善</li>
                    <li>肌肉力量的平衡</li>
                    <li>看起来更轻、更精致，但仍然是你</li>
                  </ul>
                </div>
              </div>
              <p className="text-[hsl(var(--gold))] text-xl font-semibold">
                自然效果不是口号，是我们每天的标准。
              </p>
            </motion.div>
          </div>
        </section>

        {/* HA Makeover */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">什么是 HA Makeover？</h2>
              <p className="text-center text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                HA Makeover（玻尿酸综合年轻化）是一种系统性方案，而不是单点注射。它结合玻尿酸注射进行结构支撑、体积恢复和皮肤状态改善。
              </p>
              <p className="text-center text-gray-400 mb-8">
                👉 目标：让脸看起来更年轻、更轻盈，但没有"做过"的痕迹
              </p>
            </motion.div>
          </div>
        </section>

        {/* Age-Based HA Makeover */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">HA Makeover 按年龄阶段</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    label: "30+",
                    age: "30+ 岁",
                    items: ["轻度凹陷", "眼下疲惫", "脸型开始变宽"],
                    goal: "预防 + 微调比例"
                  },
                  {
                    label: "40+",
                    age: "40+ 岁",
                    items: ["明显体积流失", "下垂初现", "脸部轮廓模糊"],
                    goal: "支撑结构 + 恢复平衡"
                  },
                  {
                    label: "50+",
                    age: "50+ 岁",
                    items: ["深度流失", "脸型改变", "松弛明显"],
                    goal: "整体年轻化，但保持自然"
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
                        <p className="text-[hsl(var(--gold))] text-sm font-semibold">🎯 目标：{group.goal}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Masseter Botox */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">瘦脸 Botox（咬肌 / Masseter Botox）</h2>
              <p className="text-gray-300 text-center mb-8 text-lg">这是华语患者最常选择的项目之一。</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white font-semibold mb-4">适合：</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>咬肌发达</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>脸型偏宽</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>夜磨牙</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>想要自然瘦脸，不动骨骼</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-4">我们的优势：</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>非"冻脸"打法</li>
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>控制剂量，避免脸垮</li>
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>强调瘦而不尖</li>
                  </ul>
                  <p className="text-gray-400 mt-4">👉 结果：脸型更轻，线条更柔，但依然高级自然</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Calf Reduction */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">小腿瘦肌（Calf Reduction）</h2>
              <p className="text-gray-300 text-center mb-4 text-lg">
                Cosmedocs 是伦敦最早进行小腿瘦肌治疗的诊所之一。自 2007 年起已为大量华语患者提供此项治疗。
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <p className="text-white font-semibold mb-4">适合：</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>小腿肌肉型粗壮</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>不想手术</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>想要长期改善腿部线条</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-4">特点：</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>医生精准评估肌肉结构</li>
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>避免行走异常</li>
                    <li className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>线条自然变细，不突兀</li>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">真实患者效果展示</h2>
              <p className="text-gray-400 text-center mb-10 text-sm">
                结果因人而异。照片未经修改，展示真实治疗效果。
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
                免责声明：个人效果可能不同。所有照片均为 Cosmedocs 真实患者。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy & Trust */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">华语患者的隐私与信任</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {["私密安静的就诊环境", "医生直接沟通", "不推销、不催促", "尊重文化与个人界限"].map((item, i) => (
                  <Card key={i} className="bg-accent border-none">
                    <CardContent className="p-4 text-center">
                      <p className="text-gray-300 text-sm">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-gray-400 mb-6">
                您可以通过我们网站的 AI 咨询助手，了解瘦脸 / 瘦小腿是否适合你，查看治疗原理，在预约前安心了解信息。
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-3xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <p className="text-[hsl(var(--gold))] text-sm tracking-widest uppercase mb-4">Cosmedocs</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">因为自然才是高级</h2>
              <p className="text-gray-300 mb-2">📍 伦敦 Harley Street</p>
              <p className="text-gray-300 mb-2">👨‍⚕️ 医生主导医美</p>
              <p className="text-gray-300 mb-8">🕰 自 2007 年服务华语社区</p>
              <p className="text-[hsl(var(--gold))] text-xl font-semibold mb-8">
                改变不必被看出来，好看，是一种"感觉"。
              </p>
              <Link to="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 text-lg">
                  预约咨询
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">常见问题</h2>
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

        {/* Disclaimer */}
        <section className="py-8 bg-black border-t border-gray-800">
          <div className="page-container text-center">
            <p className="text-xs text-gray-600">
              本页面内容在 AI 辅助下编写。建议直接咨询我们的专业医生以获取最准确的信息和个性化建议。
            </p>
          </div>
        </section>

        {/* Hidden SEO */}
        <div className="sr-only">
          <p>
            Cosmedocs 伦敦哈雷街华人医美诊所，自2007年起为华语患者提供专业医美服务，包括瘦脸Botox咬肌注射、小腿瘦肌Calf Reduction、玻尿酸综合年轻化HA Makeover、非手术鼻整形、面部填充等。曾与Nihao Magazine你好杂志深度合作，是伦敦最早与华人社区建立信任关系的医美诊所之一。所有治疗由医生亲自操作，强调自然比例，不做网红脸，不过度填充。服务来自英国、新加坡、香港、阿联酋、欧洲等地的华语患者。诊所位于伦敦哈雷街10号，提供私密安静的就诊环境，严格隐私保护。擅长东方脸型与肌肉结构分析，追求瘦而不尖的自然效果。小腿瘦肌治疗经验丰富，医生精准评估肌肉结构，避免行走异常，线条自然变细。
          </p>
        </div>
      </div>
    </>
  );
};

export default ChinesePatients;
