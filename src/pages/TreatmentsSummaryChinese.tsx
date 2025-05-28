
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PopularTreatments from "@/components/PopularTreatments";

const TreatmentsSummaryChinese = () => {
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

  return (
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

        {/* Treatment Categories */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "注射治疗",
                items: ["肉毒杆菌素", "真皮填充剂", "唇部填充", "下巴增强"],
                description: "专业的注射美容治疗"
              },
              {
                title: "面部轮廓",
                items: ["非手术隆鼻", "下颌线雕塑", "太阳穴填充", "颧骨增强"],
                description: "精确的面部轮廓塑造"
              },
              {
                title: "皮肤治疗",
                items: ["皮肤增强剂", "化学换肤", "微针治疗", "PRP治疗"],
                description: "改善肌肤质地和光泽"
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
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
              立即预约
            </Button>
          </div>
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
            </p>
          </div>
        </section>

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Cosmedocs伦敦哈利街美容诊所提供专业的医学美容治疗服务，包括肉毒杆菌素注射、真皮填充剂、唇部填充、非手术隆鼻、皮肤增强剂等。自2007年成立以来，我们已完成超过100万次注射治疗，是伦敦领先的医学美容专家。我们的诊所位于哈利街10号，提供个性化的美容解决方案，采用最新技术和优质产品。我们的专业团队致力于为客户提供自然、安全、有效的美容治疗效果。无论您寻求抗衰老治疗、面部轮廓塑造还是皮肤质量改善，我们都能为您提供最专业的服务。请致电0333 0551 503或发送邮件至info@cosmedocs.com与我们联系，开始您的美容之旅。我们的治疗理念是"看不见的艺术"，确保每位客户都能获得符合个人需求的自然美丽效果。
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsSummaryChinese;
