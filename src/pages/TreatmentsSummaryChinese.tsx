
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "../App";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

export default function TreatmentsSummaryChinese() {
  const seoData = generateSEOMetadata(
    "全面美容治疗指南 - 伦敦CosmeDocs哈利街诊所",
    "伦敦CosmeDocs哈利街诊所专业美容治疗指南。肉毒杆菌瘦脸，下巴鼻部塑形，玻尿酸填充，非手术拉皮。自2007年以来服务华人社区，深受信赖。",
    "/treatments-summary-chinese"
  );

  // Complete before/after image arrays for each treatment
  const jawReductionBeforeAfterImages = [
    { 
      src: "/lovable-uploads/36b15e21-1905-49d8-b920-68bc23b235c5.png", 
      alt: "瘦脸针 - 咬肌缩小效果", 
      caption: "肉毒杆菌瘦脸针 - 有效缩小咬肌，打造精致小V脸" 
    },
    { 
      src: "/lovable-uploads/8d22b27a-c2d5-4790-abac-6c6df301559a.png", 
      alt: "瘦脸针 - 脸型改善", 
      caption: "瘦脸针治疗 - 改善方脸，塑造优雅脸部轮廓" 
    },
    { 
      src: "/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png", 
      alt: "瘦脸针 - 自然效果", 
      caption: "瘦脸针 - 自然渐进的瘦脸效果，保持面部表情自然" 
    }
  ];
  
  const dermalFillerBeforeAfterImages = [
    { 
      src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png", 
      alt: "玻尿酸填充 - 面部塑形", 
      caption: "玻尿酸填充 - 恢复面部饱满度，改善面部轮廓" 
    },
    { 
      src: "/lovable-uploads/8e5a45ba-9dab-4b06-a44b-2bddfaacfe4b.png", 
      alt: "玻尿酸填充 - 苹果肌塑造", 
      caption: "苹果肌玻尿酸填充 - 增加面部立体感和年轻感" 
    },
    { 
      src: "/lovable-uploads/75803d61-d5ce-414e-96c8-8fdc7c0e03ba.png", 
      alt: "玻尿酸填充 - 皱纹填平", 
      caption: "玻尿酸填充 - 填平深层皱纹和法令纹" 
    },
    { 
      src: "/lovable-uploads/81447b08-e528-4535-a4b3-87f93eb36acd.png", 
      alt: "玻尿酸填充 - 全面年轻化", 
      caption: "玻尿酸填充 - 全面面部年轻化，自然和谐的效果" 
    }
  ];
  
  const noseJobBeforeAfterImages = [
    { 
      src: "/lovable-uploads/8fc7a776-c255-4ca9-a8d9-573f4083b7f1.png", 
      alt: "隆鼻 - 鼻梁塑形", 
      caption: "非手术隆鼻 - 玻尿酸鼻梁塑形，立即见效" 
    },
    { 
      src: "/lovable-uploads/37e1c9db-26f6-439b-94c2-fd05fa7e385f.png", 
      alt: "隆鼻 - 鼻型矫正", 
      caption: "非手术隆鼻 - 矫正鼻型不对称，改善侧面轮廓" 
    }
  ];
  
  const foreheadFillerBeforeAfterImages = [
    { 
      src: "/lovable-uploads/0146916c-8864-4889-b0d5-b330859a2c85.png", 
      alt: "额头填充 - 饱满塑形", 
      caption: "额头玻尿酸填充 - 改善额头凹陷，塑造饱满额头" 
    },
    { 
      src: "/lovable-uploads/67e6b1a0-9230-467a-baf0-dd5778c41d45.png", 
      alt: "额头填充 - 轮廓改善", 
      caption: "额头填充 - 改善额头轮廓，增强面部立体感" 
    },
    { 
      src: "/lovable-uploads/c2be8e56-a215-4332-a5c5-ee6b3f431881.png", 
      alt: "额头填充 - 自然效果", 
      caption: "额头玻尿酸填充 - 自然饱满的额头轮廓" 
    }
  ];
  
  const chinEnhancementImages = [
    { 
      src: "/lovable-uploads/1c08600a-b561-48ca-ae0a-246717da30a7.png", 
      alt: "下巴塑形 - 轮廓改善", 
      caption: "下巴玻尿酸塑形 - 改善下巴轮廓，增强面部比例" 
    },
    { 
      src: "/lovable-uploads/cc52c444-86d0-429d-ae4b-da84e429f406.png", 
      alt: "下巴塑形 - 立体感增强", 
      caption: "下巴塑形 - 增强下巴立体感，打造完美侧颜" 
    }
  ];

  const nonSurgicalFaceliftImages = [
    { 
      src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png", 
      alt: "非手术拉皮 - 提升效果", 
      caption: "非手术拉皮 - 玻尿酸和线雕结合，显著提升效果" 
    },
    { 
      src: "/lovable-uploads/8e5a45ba-9dab-4b06-a44b-2bddfaacfe4b.png", 
      alt: "非手术拉皮 - 紧致塑形", 
      caption: "非手术拉皮 - 紧致肌肤，重塑年轻轮廓" 
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="伦敦美容诊所，瘦脸针，玻尿酸，隆鼻，下巴塑形，额头填充，非手术拉皮，哈利街，CosmeDocs，华人美容，中国人美容" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_CN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "CosmeDocs伦敦美容诊所",
              "alternateName": "Cosmedocs London",
              "url": "https://cosmedocs.com/treatments-summary-chinese",
              "logo": "https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png",
              "description": "伦敦哈利街领先的医疗美容诊所，自2007年以来专业服务华人社区，提供最先进的美容治疗",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8-10 Harley Street",
                "addressLocality": "London",
                "postalCode": "W1G 9PF",
                "addressCountry": "UK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.5174,
                "longitude": -0.1478
              },
              "medicalSpecialty": [
                "瘦脸针治疗",
                "玻尿酸填充",
                "非手术隆鼻",
                "医疗美容"
              ],
              "areaServed": ["中国大陆", "香港", "台湾", "新加坡", "马来西亚"],
              "priceRange": "£££"
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* AI Disclaimer */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div className="page-container">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>免责声明：</strong> 本页面内容由人工智能生成，仅供参考。如需最终医疗建议，请咨询我们的专业医生。
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-container py-20"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              专业医疗美容治疗全指南
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              伦敦CosmeDocs哈利街诊所 - 自2007年以来深受华人社区信赖的顶级医疗美容诊所。我们深度了解亚洲人面部特征，提供最适合的个性化美容方案。
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-black mb-6">为什么华人社区选择CosmeDocs？</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  自2007年成立以来，CosmeDocs已成为华人社区在伦敦最信赖的医疗美容诊所。我们位于历史悠久的哈利街，拥有最先进的设备和技术。我们的医生团队专门研究亚洲人面部解剖结构，深度了解华人的美容需求和审美标准。超过15年的经验让我们能够为每一位患者提供最安全、最自然的治疗效果。
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-black mb-3">🏆 华人社区首选的原因</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ 专业服务华人社区17年经验</li>
                      <li>✓ 深度了解亚洲人面部特征</li>
                      <li>✓ 哈利街顶级奢华环境</li>
                      <li>✓ 超过100万次安全注射记录</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ 中文咨询服务</li>
                      <li>✓ 个性化治疗方案</li>
                      <li>✓ 最新国际认证产品</li>
                      <li>✓ 完善的售后跟踪服务</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-6">热门治疗项目 - 真实案例效果</h3>

                <Accordion type="single" collapsible className="w-full mb-8">
                  <AccordionItem value="jaw-reduction" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">瘦脸针 - 咬肌缩小专家</span>
                        <BeforeAfterImageViewer 
                          images={jawReductionBeforeAfterImages}
                          triggerLabel="查看效果"
                          title="瘦脸针治疗效果"
                          description="专业瘦脸针治疗的真实效果展示"
                          className="ml-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          瘦脸针是华人社区最受欢迎的治疗项目。我们的医生自2007年以来专门研究亚洲人咬肌结构，积累了丰富的经验。通过精确注射肉毒杆菌，可以有效缩小咬肌，打造精致小V脸，效果自然持久。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">适合人群：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>咬肌发达造成的方脸</li>
                              <li>磨牙习惯导致的肌肉肥大</li>
                              <li>希望瘦脸塑形的爱美人士</li>
                              <li>追求精致小V脸的女性</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">治疗优势：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>针对亚洲人咬肌特点设计</li>
                              <li>效果自然，不影响咀嚼功能</li>
                              <li>维持4-6个月</li>
                              <li>无恢复期，可立即恢复正常生活</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                          <strong>专业提醒：</strong> 瘦脸针需要专业医生精确掌握注射部位和剂量。我们的医生拥有丰富的亚洲人面部治疗经验，确保每一次治疗都安全有效。
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="forehead-fillers" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">额头填充 - 改善凹陷专家</span>
                        <BeforeAfterImageViewer 
                          images={foreheadFillerBeforeAfterImages}
                          triggerLabel="查看效果"
                          title="额头玻尿酸填充效果"
                          description="专业额头填充治疗的真实效果"
                          className="ml-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          自2007年以来，我们专门为华人社区提供额头玻尿酸填充服务。亚洲人额头相对较为扁平，通过专业的玻尿酸填充技术，可以有效改善额头凹陷，塑造饱满立体的额头轮廓，显著提升面部美感。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">治疗特色：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>专业分析亚洲人额头结构</li>
                              <li>分层注射技术，效果自然</li>
                              <li>使用顶级玻尿酸产品</li>
                              <li>个性化设计，避免过度填充</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">改善效果：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>填平额头凹陷和不平整</li>
                              <li>增强面部立体感</li>
                              <li>改善整体面部比例</li>
                              <li>提升气质和自信</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700 bg-green-50 p-4 rounded-lg">
                          <strong>华人专属技术：</strong> 我们的医生专门研究了亚洲人额头的解剖特点，开发了适合华人的分层填充技术，确保效果自然持久，避免异物感。
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="chin-enhancement" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">下巴塑形 - 完美侧颜打造</span>
                        <BeforeAfterImageViewer 
                          images={chinEnhancementImages}
                          triggerLabel="查看效果"
                          title="下巴塑形治疗效果"
                          description="专业下巴塑形的真实效果展示"
                          className="ml-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          下巴塑形是我们的专长之一，特别受到华人社区的欢迎。通过精密的玻尿酸注射技术，我们可以完美改善下巴轮廓，增强侧面美感，打造黄金比例的完美侧颜。17年来的丰富经验让我们深度了解亚洲人的面部特征。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">塑形类型：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>下巴前突 - 增强下巴立体感</li>
                              <li>下巴延长 - 改善短下巴</li>
                              <li>下巴收窄 - 精致下巴线条</li>
                              <li>双下巴改善 - 紧致下颌线</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">美学优势：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>符合亚洲人审美标准</li>
                              <li>黄金比例面部设计</li>
                              <li>自然和谐的效果</li>
                              <li>显著提升侧颜美感</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">
                          <strong>个性化设计：</strong> 每一位患者的下巴塑形方案都是独一无二的。我们会根据面部整体比例、骨骼结构和个人喜好制定最适合的治疗计划。
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nose-job" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">非手术隆鼻 - 安全无创塑形</span>
                        <BeforeAfterImageViewer 
                          images={noseJobBeforeAfterImages}
                          triggerLabel="查看效果"
                          title="非手术隆鼻效果"
                          description="非手术隆鼻的专业治疗效果"
                          className="ml-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          非手术隆鼻是我们的明星项目，特别适合亚洲人的鼻部特征。使用高品质玻尿酸，通过精确注射技术，可以安全有效地改善鼻梁高度、鼻尖形状和整体鼻型，无需手术就能获得理想的鼻部轮廓。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">改善项目：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>鼻梁增高 - 立体感提升</li>
                              <li>鼻尖塑形 - 精致鼻尖</li>
                              <li>鼻型矫正 - 改善不对称</li>
                              <li>鼻基底填充 - 和谐比例</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">技术优势：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>无创无恢复期</li>
                              <li>效果立即可见</li>
                              <li>可调整可逆转</li>
                              <li>安全性极高</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700 bg-yellow-50 p-4 rounded-lg">
                          <strong>安全承诺：</strong> 我们使用国际认证的顶级玻尿酸产品，配合精密的注射技术，确保每一次隆鼻治疗都安全可靠，效果自然美观。
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="dermal-fillers" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">玻尿酸填充 - 全面抗衰老</span>
                        <BeforeAfterImageViewer 
                          images={dermalFillerBeforeAfterImages}
                          triggerLabel="查看效果"
                          title="玻尿酸填充效果"
                          description="专业玻尿酸填充的治疗效果"
                          className="ml-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          <Link to="/dermal-filler-makeover" className="text-black hover:text-gray-700 font-medium">
                            玻尿酸填充
                          </Link> 是我们的核心技术，可以全面改善面部老化问题。通过分层填充技术，恢复面部饱满度，填平皱纹，重塑年轻轮廓。我们使用的都是国际顶级品牌玻尿酸，确保安全有效。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">治疗部位：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>苹果肌和太阳穴</li>
                              <li>法令纹和木偶纹</li>
                              <li>泪沟和眼袋</li>
                              <li>嘴角和唇周</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">治疗效果：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>立即恢复面部饱满度</li>
                              <li>持续12-18个月</li>
                              <li>刺激胶原蛋白再生</li>
                              <li>自然年轻化效果</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          我们的医生团队专门研究亚洲人的面部老化模式，采用"全脸和谐"的治疗理念，确保治疗后的效果自然协调，重现年轻美丽。
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="non-surgical-facelift" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl font-semibold text-black">非手术拉皮 - 重塑年轻轮廓</span>
                        <BeforeAfterImageViewer 
                          images={nonSurgicalFaceliftImages}
                          triggerLabel="查看效果"
                          title="非手术拉皮效果"
                          description="非手术拉皮的专业治疗效果"
                          className="ml-4"
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          我们的非手术拉皮结合了玻尿酸填充和线雕技术，为面部松弛下垂提供了革命性的解决方案。通过咨询评估后，我们对符合条件的患者几乎可以保证显著的提升效果，让您重拾年轻紧致的面部轮廓。
                        </p>
                        
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                          <h4 className="font-bold text-black mb-3">💰 治疗费用</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h5 className="font-semibold text-green-600 mb-2">轻度松弛</h5>
                              <p className="text-2xl font-bold text-black">£1,500</p>
                              <p className="text-sm text-gray-600">适合轻微下颌线松弛和初期下垂</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h5 className="font-semibold text-blue-600 mb-2">中度松弛</h5>
                              <p className="text-2xl font-bold text-black">£2,500</p>
                              <p className="text-sm text-gray-600">适合明显面部下垂和松弛</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-3 text-center">
                            * 严重松弛建议手术治疗，我们会诚实告知并推荐最适合的方案
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-black mb-2">治疗技术：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>高密度玻尿酸填充支撑</li>
                              <li>PDO线雕提升技术</li>
                              <li>多点位精确注射</li>
                              <li>分层递进式治疗</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-2">适合人群：</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>30-60岁面部松弛人群</li>
                              <li>不愿接受手术的求美者</li>
                              <li>追求自然效果的客户</li>
                              <li>希望快速恢复的人群</li>
                            </ul>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 bg-red-50 p-4 rounded-lg">
                          <strong>专业承诺：</strong> 我们只接受经过详细咨询评估、确保能够达到满意效果的案例。诚信经营是我们的原则，绝不夸大宣传或强制销售。
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <h3 className="text-2xl font-bold text-black mb-4">为什么我们是华人社区的首选？</h3>
                
                <p className="text-gray-700 mb-4">
                  CosmeDocs自2007年成立以来，一直致力于为华人社区提供最专业的医疗美容服务。我们不仅拥有顶级的医疗设备和技术，更重要的是我们深度了解亚洲人的面部特征和审美需求：
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-black mb-3">🔬 专业技术优势</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 17年亚洲面部美学研究经验</li>
                      <li>• 超过100万次安全注射记录</li>
                      <li>• 国际认证的顶级产品</li>
                      <li>• 持续医学教育和技术更新</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-black mb-3">🏥 诊所环境优势</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 哈利街历史悠久的医疗街区</li>
                      <li>• 最先进的医疗设备</li>
                      <li>• 奢华舒适的治疗环境</li>
                      <li>• 严格的医疗卫生标准</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">华人专属服务体验</h3>
                
                <p className="text-gray-700 mb-4">
                  我们深知华人客户的特殊需求，提供全方位的贴心服务：
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold text-black mb-4">🎯 个性化服务特色</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-black mb-2">语言沟通</h5>
                        <p className="text-sm text-gray-700">中英双语咨询服务，确保沟通无障碍</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-black mb-2">文化理解</h5>
                        <p className="text-sm text-gray-700">深度理解亚洲审美标准和文化背景</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-black mb-2">隐私保护</h5>
                        <p className="text-sm text-gray-700">严格保护客户隐私，VIP专属通道</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">安全保障体系</h3>
                
                <p className="text-gray-700 mb-4">
                  安全是我们的首要原则。我们建立了完善的安全保障体系：
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>所有产品均为英国药监局认证的原装正品</li>
                  <li>医生团队具备专业资质和丰富临床经验</li>
                  <li>严格的术前评估和风险预控</li>
                  <li>完善的应急处理预案</li>
                  <li>24小时售后跟踪服务</li>
                  <li>定期的医疗质量审核</li>
                  <li>国际标准的无菌操作环境</li>
                  <li>全程可追溯的治疗记录</li>
                </ul>

                <h3 className="text-2xl font-bold text-black mb-4">贴心的售后服务</h3>
                
                <p className="text-gray-700 mb-4">
                  我们的服务不止于治疗本身，更注重长期的客户关系维护：
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">即时跟踪服务：</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>治疗后24小时电话回访</li>
                      <li>7天内免费复查评估</li>
                      <li>30天内随时咨询答疑</li>
                      <li>紧急情况快速响应</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">长期维护计划：</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>个性化保养方案指导</li>
                      <li>定期效果评估和调整</li>
                      <li>新技术优先体验机会</li>
                      <li>VIP客户专享优惠</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">预约咨询流程</h3>
                
                <p className="text-gray-700 mb-4">
                  我们为华人客户提供便捷的预约和咨询流程：
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-black mb-3">📋 完整服务流程</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-black mb-2">咨询预约：</h5>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1">
                        <li>免费在线咨询（中英双语）</li>
                        <li>专业医生面诊评估</li>
                        <li>个性化方案设计</li>
                        <li>详细风险告知</li>
                      </ol>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black mb-2">治疗执行：</h5>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1">
                        <li>术前准备和消毒</li>
                        <li>精确注射操作</li>
                        <li>即时效果评估</li>
                        <li>术后护理指导</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-black mb-3">⚠️ 重要提醒</h4>
                  <p className="text-gray-700 mb-3">
                    为确保最佳治疗效果和安全性，我们建议：
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>选择具备英国医疗资质的正规诊所</li>
                    <li>使用英国药监局认证的原装产品</li>
                    <li>详细了解治疗风险和注意事项</li>
                    <li>制定合理的治疗期望值</li>
                    <li>重视术后护理和定期复查</li>
                  </ul>
                </div>

                {/* Hidden SEO Content */}
                <div className="hidden">
                  <h4>华人美容治疗专业内容</h4>
                  <p>
                    伦敦CosmeDocs诊所位于著名的哈利街医疗区，自2007年以来专门为华人社区提供最专业的医疗美容服务。我们深度了解亚洲人面部解剖结构和审美需求，是华人在英国进行美容治疗的首选诊所。主要服务项目包括瘦脸针、玻尿酸填充、非手术隆鼻、下巴塑形、额头填充、非手术拉皮等。我们的医生团队拥有17年专业经验，累计完成超过100万次安全注射，深受来自中国大陆、香港、台湾、新加坡、马来西亚等地华人客户的信赖。诊所使用的所有产品均为英国药监局认证的原装正品，包括Allergan、Galderma、Merz等国际顶级品牌。瘦脸针是我们的明星项目，专门针对亚洲人咬肌发达的特点，通过精确注射肉毒杆菌，可以有效缩小咬肌，打造精致小V脸。额头填充技术专门为亚洲人额头相对扁平的特征设计，使用高品质玻尿酸分层填充，创造饱满立体的额头轮廓。下巴塑形和非手术隆鼻技术可以显著改善面部比例，增强立体感。非手术拉皮结合玻尿酸填充和线雕技术，为面部松弛下垂提供有效解决方案，轻度治疗费用£1500，中度治疗费用£2500。我们提供中英双语咨询服务，深度理解华人审美标准和文化背景，严格保护客户隐私。诊所位于伦敦W1G 9PF哈利街8-10号，交通便利，环境奢华。预约电话+44 20 7636 8845，提供24小时售后跟踪服务。
                  </p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-bold text-black mb-4">热门治疗项目</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="text-black font-medium">→ 瘦脸针 - 咬肌缩小</span>
                  </li>
                  <li>
                    <span className="text-black font-medium">→ 额头填充 - 改善凹陷</span>
                  </li>
                  <li>
                    <span className="text-black font-medium">→ 下巴塑形 - 完美侧颜</span>
                  </li>
                  <li>
                    <span className="text-black font-medium">→ 非手术隆鼻</span>
                  </li>
                  <li>
                    <span className="text-black font-medium">→ 非手术拉皮</span>
                  </li>
                  <li>
                    <Link to="/dermal-filler-makeover" className="text-black hover:text-gray-700 font-medium">
                      → 玻尿酸全脸填充
                    </Link>
                  </li>
                  <li>
                    <Link to="/treatments" className="text-black hover:text-gray-700 font-medium">
                      → 查看所有治疗项目
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-black hover:text-gray-700 font-medium">
                      → 预约免费咨询
                    </Link>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-black text-white rounded-lg text-center">
                  <h4 className="font-bold mb-2">立即预约</h4>
                  <p className="text-sm mb-3">免费专业咨询</p>
                  <a 
                    href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-colors"
                  >
                    预约咨询
                  </a>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">联系我们</h4>
                  <p className="text-sm text-gray-700 mb-2">咨询预约热线：</p>
                  <p className="text-sm font-medium text-black">电话: +44 20 7636 8845</p>
                  <p className="text-sm text-gray-700 mt-1">地址: 伦敦哈利街8-10号</p>
                  <p className="text-sm text-gray-700">邮编: W1G 9PF</p>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">💰 非手术拉皮价格</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">轻度松弛:</span>
                      <span className="text-sm font-bold text-green-600">£1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">中度松弛:</span>
                      <span className="text-sm font-bold text-blue-600">£2,500</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">* 需要专业咨询评估</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
