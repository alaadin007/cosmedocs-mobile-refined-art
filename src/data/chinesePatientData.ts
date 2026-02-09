import type { PatientPageData } from './internationalPageTypes';
import { sharedPricingItems, sharedTreatmentMenu, sharedAboutPoints } from './swedishPatientData';

export const chineseData: PatientPageData = {
  lang: "zh-CN",
  slug: "chinese-patients",
  hero: {
    badge: "Cosmedocs · 哈雷街 · 伦敦",
    h1: "伦敦华语医美诊所",
    subtitle: "Cosmedocs｜哈雷街｜医生主导·自然医美",
    tagline: "自 2007 年起持续为华语患者提供专业、自然、安全的医美治疗",
  },
  welcome: {
    title: "欢迎华语患者来到 Cosmedocs",
    text: "Cosmedocs 位于伦敦著名的 Harley Street（哈雷街），自 2007 年起持续为华语患者提供专业、自然、安全的医美治疗。我们是伦敦最早与华人社区建立长期信任关系的医美诊所之一，并曾通过 Nihao Magazine（你好杂志）与华人群体深度合作。",
    motto: "医美的目标，是比例与气质的提升，而不是\"被看出来\"。",
  },
  whyChoose: {
    title: "为什么华语患者选择 Cosmedocs？",
    reasons: [
      "自 2007 年起服务华语患者",
      "医生亲自操作（非销售型医美）",
      "擅长东方脸型与肌肉结构",
      "强调自然、比例、长期效果",
      "严格隐私保护",
      "瘦脸·瘦小腿专业经验",
    ],
    footer: "我们非常了解华语患者对瘦脸、瘦小腿、自然感的高度要求。",
  },
  philosophy: {
    title: "我们的医美理念：自然，而不是夸张",
    donts: ["\"网红脸\"", "过度填充", "复制模板脸"],
    dos: ["脸型比例的改善", "肌肉力量的平衡", "看起来更轻、更精致，但仍然是你"],
    motto: "自然效果不是口号，是我们每天的标准。",
  },
  haMakeover: {
    title: "什么是 HA Makeover？",
    subtitle: "玻尿酸综合年轻化",
    description: "HA Makeover 是一种系统性方案，而不是单点注射。它结合玻尿酸注射进行结构支撑、体积恢复和皮肤状态改善。",
    goal: "让脸看起来更年轻、更轻盈，但没有\"做过\"的痕迹",
    ages: [
      {
        label: "30+",
        age: "30+ 岁",
        items: ["轻度凹陷", "眼下疲惫", "脸型开始变宽"],
        goal: "预防 + 微调比例",
      },
      {
        label: "40+",
        age: "40+ 岁",
        items: ["明显体积流失", "下垂初现", "脸部轮廓模糊"],
        goal: "支撑结构 + 恢复平衡",
      },
      {
        label: "50+",
        age: "50+ 岁",
        items: ["深度流失", "脸型改变", "松弛明显"],
        goal: "整体年轻化，但保持自然",
      },
    ],
  },
  masseter: {
    title: "瘦脸 Botox（咬肌 / Masseter Botox）",
    intro: "这是华语患者最常选择的项目之一。",
    suitableFor: ["咬肌发达", "脸型偏宽", "夜磨牙", "想要自然瘦脸，不动骨骼"],
    advantages: ["非\"冻脸\"打法", "控制剂量，避免脸垮", "强调瘦而不尖"],
    result: "👉 结果：脸型更轻，线条更柔，但依然高级自然",
  },
  calfReduction: {
    title: "小腿瘦肌（Calf Reduction）",
    intro: "Cosmedocs 是伦敦最早进行小腿瘦肌治疗的诊所之一。自 2007 年起已为大量华语患者提供此项治疗。",
    suitableFor: ["小腿肌肉型粗壮", "不想手术", "想要长期改善腿部线条"],
    features: ["医生精准评估肌肉结构", "避免行走异常", "线条自然变细，不突兀"],
  },
  botox: {
    title: "Botox 治疗",
    uses: ["瘦脸（咬肌）", "抬头纹", "鱼尾纹", "眉间纹"],
    benefits: ["不冻脸", "自然表情保留", "清新自然"],
  },
  skinTreatments: {
    title: "皮肤治疗",
    treatments: ["Profhilo", "水光针", "化学换肤", "微针"],
  },
  privacy: {
    title: "华语患者的隐私与信任",
    values: ["私密安静的就诊环境", "医生直接沟通", "不推销、不催促", "尊重文化与个人界限"],
    footer: "您可以通过我们网站的 AI 咨询助手，了解瘦脸 / 瘦小腿是否适合你。",
  },
  pricing: {
    title: "治疗价格",
    intro: "与国内及亚洲地区相比，伦敦哈雷街的价格极具竞争力。",
    comparison: [
      { treatment: "Botox 3 Areas", local: "¥5,000–¥8,000", cosmedocs: "£350" },
      { treatment: "Masseter Botox", local: "¥4,000–¥8,000", cosmedocs: "£350" },
      { treatment: "Lip Filler 1ml", local: "¥5,000–¥10,000", cosmedocs: "£350" },
      { treatment: "HA Makeover", local: "¥20,000–¥40,000", cosmedocs: "From £1,250" },
      { treatment: "Calf Reduction", local: "¥10,000–¥20,000", cosmedocs: "£750" },
    ],
    items: sharedPricingItems,
  },
  treatmentMenu: {
    title: "治疗项目",
    categories: sharedTreatmentMenu({
      botox: "Botox 肉毒素",
      fillers: "玻尿酸填充",
      skin: "皮肤再生",
      contouring: "面部与身体塑形",
      medical: "医疗 Botox",
      makeover: "HA Makeover 综合方案",
    }),
  },
  aboutUs: {
    title: "关于 Cosmedocs",
    points: sharedAboutPoints({
      since: "自 2007 年起在哈雷街执业",
      injections: "已完成超过一百万次注射",
      harley: "10 Harley Street, London W1G 9PF",
      doctors: "GMC 注册医生",
      natural: "自然效果是核心理念",
      regulated: "完全合规持牌诊所",
    }),
  },
  gallery: {
    title: "真实患者效果展示",
    disclaimer: "结果因人而异。照片未经修改，展示真实治疗效果。",
  },
  cta: {
    title: "因为自然才是高级",
    details: ["📍 伦敦 Harley Street", "👨‍⚕️ 医生主导医美", "🕰 自 2007 年服务华语社区"],
    motto: "改变不必被看出来，好看，是一种\"感觉\"。",
    buttonText: "预约咨询",
  },
  faq: {
    title: "常见问题",
    items: [
      { q: "Cosmedocs 接受华语患者吗？", a: "是的，Cosmedocs 自 2007 年起持续为华语患者提供服务，曾通过 Nihao Magazine 与伦敦华人社区深度合作。所有治疗由医生亲自操作。" },
      { q: "什么是瘦脸 Botox（咬肌 Masseter Botox）？", a: "瘦脸 Botox 通过注射肉毒素放松咬肌，使脸型变窄变轻。Cosmedocs 强调控制剂量，避免'冻脸'，追求瘦而不尖的自然效果。" },
      { q: "小腿瘦肌治疗安全吗？", a: "Cosmedocs 是伦敦最早提供小腿瘦肌治疗的诊所之一。医生精准评估肌肉结构，避免行走异常，线条自然变细。该治疗不影响正常行走和运动功能。" },
      { q: "什么是 HA Makeover（玻尿酸综合年轻化）？", a: "HA Makeover 是一种系统性方案，结合玻尿酸注射进行结构支撑、体积恢复和皮肤状态改善，让脸看起来更年轻、更轻盈，但没有'做过'的痕迹。" },
      { q: "治疗效果自然吗？", a: "自然效果是 Cosmedocs 的核心理念。我们不做'网红脸'，不追求过度填充，不复制模板脸。我们追求脸型比例的改善和肌肉力量的平衡。" },
      { q: "如何预约咨询？", a: "您可以通过网站联系页面预约，也可以使用网站上的 AI 咨询助手提前了解治疗信息。诊所位于伦敦哈雷街（Harley Street）。" },
    ],
  },
  disclaimer: "本页面内容在 AI 辅助下编写。建议直接咨询我们的专业医生以获取最准确的信息和个性化建议。",
  seoText: "Cosmedocs 伦敦哈雷街华人医美诊所，自2007年起为华语患者提供专业医美服务，包括瘦脸Botox咬肌注射、小腿瘦肌Calf Reduction、玻尿酸综合年轻化HA Makeover、非手术鼻整形、面部填充等。曾与Nihao Magazine你好杂志深度合作，是伦敦最早与华人社区建立信任关系的医美诊所之一。",
  keywords: "伦敦华人医美诊所, 华语医美, 瘦脸 Botox, 咬肌 Botox, Masseter Botox, 小腿瘦肌, 自然医美, 医生主导医美, 伦敦哈雷街医美, HA Makeover",
};
