
import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PopularTreatments from "@/components/PopularTreatments";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from '@/utils/seo';

const TreatmentsSummaryChinese = () => {
  const seoData = generateSEOMetadata(
    "美容治疗摘要 | Cosmedocs 伦敦",
    "在伦敦哈利街的Cosmedocs诊所，我们提供专业的美容治疗，包括肉毒杆菌、真皮填充剂和皮肤增强剂。",
    "/treatments-summary-chinese"
  );
  
  // Define Chinese treatments with local descriptions
  const chineseTreatments = [
    {
      title: "肉毒杆菌素 (Botox)",
      description: "抗皱注射治疗额头皱纹、鱼尾纹和眉间纹",
      hasBeforeAfter: false
    },
    {
      title: "真皮填充剂",
      description: "恢复面部体积，增强面部轮廓。全脸改造和年轻化的先驱",
      hasBeforeAfter: false
    },
    {
      title: "唇部填充",
      description: "自然丰满的唇部增强效果",
      hasBeforeAfter: false
    },
    {
      title: "非手术隆鼻",
      description: "无需手术即可重塑鼻型",
      hasBeforeAfter: false
    },
    {
      title: "肉毒杆菌瘦小腿",
      description: "通过注射肉毒杆菌素实现小腿肌肉减少，塑造优雅腿部轮廓",
      hasBeforeAfter: true
    },
    {
      title: "皮肤增强剂",
      description: "深层保湿和年轻化",
      hasBeforeAfter: false
    },
    {
      title: "下巴和下颌线增强",
      description: "定义您的面部轮廓",
      hasBeforeAfter: false
    }
  ];

  // Calf reduction before/after images
  const calfReductionImages = [
    {
      src: "/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png",
      alt: "肉毒杆菌瘦小腿前后对比效果图",
      caption: "显著的小腿减少效果 - 大胆 • 自然 • 始终按您的方式"
    },
    {
      src: "/lovable-uploads/200e347f-34b9-434d-8904-fd6d94765a3e.png",
      alt: "小腿减少治疗过程显示渐进式瘦身效果",
      caption: "我们的隐形艺术方法为小腿塑形提供自然效果"
    },
    {
      src: "/lovable-uploads/c64c87d1-4d95-4691-a433-41e475c92452.png",
      alt: "肉毒杆菌瘦小腿前后对比显示精致腿部轮廓",
      caption: "专业小腿减少，精确肉毒杆菌注射，打造优雅腿部轮廓"
    },
    {
      src: "/lovable-uploads/7824e28f-766c-4f96-b021-1a523df8d42b.png",
      alt: "伦敦小腿肌肉减少肉毒杆菌治疗效果",
      caption: "无声的转变 - 微妙、安静、看不见"
    },
    {
      src: "/lovable-uploads/373586d7-53d2-4bc9-92c5-fc617af6c284.png",
      alt: "小腿减少治疗效果数月时间线进展",
      caption: "随时间推移的渐进效果显示精致小腿轮廓的演变"
    }
  ];

  return (
    <>
      <Helmet>
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
        <meta name="keywords" content="美容治疗, 肉毒杆菌, 真皮填充剂, 伦敦, 哈利街" />
      </Helmet>
      <div className="bg-black text-white py-24">
      <div className="page-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">治疗总结</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            自2007年以来，作为伦敦经验丰富的注射专家，我们专门安全地施用高剂量的肉毒杆菌素，提供持久效果。
            在过去的十年中，我们开发了许多真皮填充剂的新技术，现在在国际上教授给专业人士。
            我们的专家团队也是著名的哈利街学院的培训师。相信我们能为您提供安全、有效和自然的效果。
          </p>
        </div>

        {/* Popular Treatments Section using the new component */}
        <PopularTreatments 
          title="热门治疗项目"
          treatments={chineseTreatments}
          showBeforeAfter={false}
          className="py-0"
        />

        {/* Featured Treatment: Calf Reduction */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">特色治疗：肉毒杆菌瘦小腿</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              通过创新的肉毒杆菌注射技术，实现小腿肌肉减少，塑造更加优雅纤细的腿部轮廓。
              我们的美学是隐形艺术 - 大胆 • 自然 • 始终按您的方式。
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">什么是肉毒杆菌瘦小腿？</h3>
              <p className="text-gray-300 leading-relaxed">
                肉毒杆菌瘦小腿是一种创新的非手术治疗方法，使用肉毒杆菌毒素来放松小腿的腓肠肌。
                此程序有效地减少肌肉体积，创造更苗条、更女性化的腿部轮廓。
              </p>
              <p className="text-gray-300 leading-relaxed">
                与手术程序不同，我们的肉毒杆菌瘦小腿提供微创方法来实现您所需的腿部轮廓。
                治疗通过暂时减少肌肉活动来发挥作用，使小腿肌肉随时间逐渐减小。
              </p>
              <BeforeAfterImageViewer 
                images={calfReductionImages}
                triggerLabel="查看治疗效果"
                title="瘦小腿效果展示"
                description="真实患者转变效果"
                className="border border-gray-600 bg-gray-800 hover:bg-gray-700 transition-colors rounded-full px-6 py-3 text-white"
              />
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png"
                alt="肉毒杆菌瘦小腿前后对比效果"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Treatment Benefits in Chinese */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "非手术解决方案",
                description: "无需侵入性手术或长期恢复期即可实现小腿减少"
              },
              {
                title: "自然效果",
                description: "我们的隐形艺术方法确保微妙、精致的变化，看起来完全自然"
              },
              {
                title: "恢复时间短",
                description: "立即恢复日常活动，无需大量恢复时间"
              },
              {
                title: "渐进式转变",
                description: "效果在2-4周内逐步显现，实现自然的变化"
              },
              {
                title: "提升自信",
                description: "穿裙子、连衣裙和合身服装时更加自信，拥有更苗条的腿部轮廓"
              },
              {
                title: "可逆治疗",
                description: "效果是暂时的，通常持续6-12个月，为您的美学之旅提供灵活性"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Before/After Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calfReductionImages.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-800 mb-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {image.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Treatment Categories */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "注射治疗",
                items: ["肉毒杆菌素", "真皮填充剂", "唇部填充", "下巴增强", "瘦小腿注射"],
                description: "专业的注射美容治疗"
              },
              {
                title: "面部轮廓",
                items: ["非手术隆鼻", "下颌线雕塑", "太阳穴填充", "颧骨增强"],
                description: "精确的面部轮廓塑造"
              },
              {
                title: "身体塑形",
                items: ["小腿肌肉减少", "化学换肤", "微针治疗", "PRP治疗"],
                description: "改善身体轮廓和肌肤质地"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <div className="bg-accent rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">准备好发现您的精致美学了吗？</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              与我们的专家医生预约咨询，开始您的微妙、可控的美丽转变之旅。
              体验我们的隐形艺术方法 - 大胆 • 自然 • 始终按您的方式。
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
              立即预约
            </Button>
          </div>
        </section>

        {/* Harley Street Reference */}
        <section className="py-8 text-center">
          <img
            src="/lovable-uploads/65f0c54f-8234-4b7f-a081-ce20d21df1fb.png"
            alt="Cosmedocs哈利街诊所外观"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-gray-400 text-sm">
            位于伦敦著名的哈利街医疗区，我们保持最高的护理和治疗质量标准
          </p>
        </section>

        {/* AI Disclaimer */}
        <section className="py-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              免责声明：本页面内容由AI辅助生成
            </p>
            <p className="text-xs text-gray-600">
              此中文治疗信息页面由人工智能协助创建和翻译。虽然我们努力确保准确性，
              但建议在做出任何治疗决定之前，直接咨询我们的专业医生以获取最准确和个性化的信息。
              包括肉毒杆菌瘦小腿在内的所有治疗都需要专业医疗评估。
            </p>
          </div>
        </section>

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Cosmedocs伦敦哈利街美容诊所提供专业的医学美容治疗服务，包括肉毒杆菌素注射、真皮填充剂、唇部填充、非手术隆鼻、
            肉毒杆菌瘦小腿、皮肤增强剂等。自2007年成立以来，我们已完成超过100万次注射治疗，是伦敦领先的医学美容专家。
            我们的诊所位于哈利街10号，提供个性化的美容解决方案，采用最新技术和优质产品。我们的专业团队致力于为客户提供自然、
            安全、有效的美容治疗效果。无论您寻求抗衰老治疗、面部轮廓塑造、小腿肌肉减少还是皮肤质量改善，我们都能为您提供最专业的服务。
            请致电0333 0551 503或发送邮件至info@cosmedocs.com与我们联系，开始您的美容之旅。我们的治疗理念是"看不见的艺术"，
            确保每位客户都能获得符合个人需求的自然美丽效果。小腿减少治疗，腓肠肌肉毒杆菌注射，非手术瘦腿，伦敦小腿塑形专家。
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TreatmentsSummaryChinese;
