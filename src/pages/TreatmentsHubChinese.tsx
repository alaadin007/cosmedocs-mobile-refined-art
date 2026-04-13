import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';

const hreflangLinks = generateHreflangLinks('treatments');
const canonical = getCanonicalUrl('zh', 'treatments');

const treatmentCategories = [
  {
    title: "肉毒杆菌与抗皱",
    subtitle: "肌肉调节与预防",
    description: "精准抗皱注射，针对动态纹、面部轮廓塑造和医疗状况。自2007年起由专家医生操作。",
    link: "/zh/treatments/botox/",
    items: ["额头纹、眉间纹和鱼尾纹", "唇翻和牙龈笑", "咬肌与瘦脸", "Nefertiti提升", "医疗肉毒杆菌（偏头痛、多汗）"],
  },
  {
    title: "玻尿酸填充",
    subtitle: "容量、结构与轮廓",
    description: "玻尿酸填充剂用于自然恢复容量、面部轮廓塑造和逆龄。为每张面孔定制治疗方案。",
    link: "/zh/treatments/dermal-fillers/",
    items: ["丰唇（自然到丰满）", "苹果肌、下巴和下颌线", "非手术隆鼻", "泪沟和眼下", "HA全脸改造"],
  },
  {
    title: "皮肤焕活",
    subtitle: "更新、光泽与修复",
    description: "医疗级皮肤治疗，恢复水分、刺激胶原蛋白、细化肌理。",
    link: "/zh/treatments/skin-rejuvenation/",
    items: ["Profhilo", "多核苷酸", "HydraFacial", "微针与PRP", "化学换肤"],
  },
  {
    title: "激光治疗",
    subtitle: "精准光疗",
    description: "先进的激光和光基治疗，用于皮肤重塑、色素校正、脱毛和疤痕减少。",
    link: "/treatments/laser/",
    items: ["CO₂点阵激光", "皮秒激光", "激光脱毛", "疤痕减少"],
  },
  {
    title: "PDO线雕",
    subtitle: "非手术提升",
    description: "可吸收PDO线用于组织提升、皮肤紧致和胶原蛋白刺激。",
    link: "/treatments/pdo-threads/",
    items: ["面部线雕", "非手术鼻线", "下颌线定义"],
  },
  {
    title: "医疗肉毒杆菌",
    subtitle: "治疗性应用",
    description: "基于循证的肉毒杆菌毒素治疗，用于慢性偏头痛、多汗症和磨牙症。",
    link: "/medical/",
    items: ["偏头痛缓解", "多汗症", "磨牙症", "触发点治疗"],
  },
  {
    title: "整形外科",
    subtitle: "专业外科手术",
    description: "由合格整形外科医生执行的全面整容手术，以最高护理标准进行。",
    link: "/plastic-surgeon/",
    items: ["鼻整形", "眼睑成形术", "面部提升", "吸脂"],
  },
  {
    title: "皮肤科",
    subtitle: "医疗与美容皮肤健康",
    description: "由顾问皮肤科医生主导的皮肤健康服务，用于医疗状况和高级美容皮肤科。",
    link: "/dermatology/",
    items: ["痤疮与酒渣鼻治疗", "痣与皮赘去除", "牛皮癣与湿疹", "色素校正"],
  },
];

const TreatmentsHubChinese = () => {
  return (
    <>
      <Helmet>
        <title>伦敦美容治疗 | Cosmedocs 哈利街</title>
        <meta name="description" content="探索我们完整的医生主导美容治疗系列。肉毒杆菌、玻尿酸填充、皮肤焕活、激光和整形手术，位于伦敦哈利街。" data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "@id": "https://www.cosmedocs.com/#organization", name: "Cosmedocs" },
              { "@type": "CollectionPage", "@id": "https://www.cosmedocs.com/zh/treatments/", name: "美容治疗", inLanguage: "zh", description: "伦敦哈利街完整的医生主导美容治疗。", isPartOf: { "@id": "https://www.cosmedocs.com/#website" } },
              { "@type": "BreadcrumbList", itemListElement: [
                { "@type": "ListItem", position: 1, name: "首页", item: "https://www.cosmedocs.com/zh/" },
                { "@type": "ListItem", position: 2, name: "治疗", item: "https://www.cosmedocs.com/zh/treatments/" },
              ]},
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A050]/[0.04] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A050]/[0.03] blur-[100px] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="面包屑导航">
              <Link to="/zh/" className="hover:text-[#C9A050] transition-colors">首页</Link>
              <span>/</span>
              <span className="text-white/60">治疗</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">隐形美学艺术</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-6">治疗项目</h1>
              <p className="text-base sm:text-lg text-white/60 font-extralight leading-relaxed max-w-2xl">
                从精准注射到先进皮肤科学 — Cosmedocs的每项治疗都旨在提升，而非夸张。探索我们完整的美容和医疗项目。
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
                {["始于2007年", "哈利街", "医生主导"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" /> {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-10">
                <Link to="/zh/prices/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  价格指南 <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/zh/contact/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  预约咨询
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatmentCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link to={cat.link} className="group block bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#C9A050] transition-colors">{cat.title}</h2>
                      <p className="text-xs text-[#C9A050]/70 uppercase tracking-wider mt-1">{cat.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#C9A050] transition-colors mt-1 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-white/50 font-extralight leading-relaxed mb-5">{cat.description}</p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-xs text-[#C9A050] uppercase tracking-[0.2em] mb-3">透明定价</p>
            <p className="text-2xl sm:text-3xl font-extralight text-white mb-4">完整价格指南</p>
            <p className="text-sm text-white/50 font-extralight max-w-xl mx-auto mb-6">查看我们所有治疗类别的完整透明价格表。没有隐藏费用 — 诚实、专业的美容医学。</p>
            <Link to="/zh/prices/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
              查看所有价格 <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>
            Cosmedocs在伦敦哈利街诊所提供全面的美容治疗。我们的治疗组合包括使用肉毒杆菌毒素的抗皱注射、用于唇部、颧骨、下颌线、下巴和泪沟的玻尿酸皮肤填充剂。我们的皮肤焕活治疗包括Profhilo生物重塑、多核苷酸疗法、HydraFacial、微针与PRP以及医疗级化学换肤。
          </p>
        </div>
      </div>
    </>
  );
};

export default TreatmentsHubChinese;
