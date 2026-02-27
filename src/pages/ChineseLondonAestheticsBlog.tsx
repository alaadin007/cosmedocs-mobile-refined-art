
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";
import ChineseAISearchBar from "@/components/ChineseAISearchBar";
import { Link } from "react-router-dom";

const ChineseLondonAestheticsBlog = () => {
  return (
    <>
      <Helmet>
        <title>伦敦中国人医美指南 | 瘦脸针下颌缩小术 | 亚洲鼻型微整形 | Cosmedocs哈利街</title>
        <meta name="description" content="专为在伦敦的中国留学生和华人提供专业医美服务。瘦脸针下颌缩小、亚洲鼻型微整形、下巴塑形。哈利街顶级医美诊所，深谙亚洲面部美学。伦敦中国人肉毒杆菌、玻尿酸填充首选。" />
        <meta name="keywords" content="伦敦中国人肉毒杆菌,伦敦瘦脸针,伦敦玻尿酸,伦敦医美,哈利街中文服务,亚洲鼻型整形,下颌缩小术,中国留学生医美,伦敦华人美容,Chinese London Botox,Chinese aesthetics London" />
        <link rel="canonical" href="https://www.cosmedocs.com/blog/chinese-london-aesthetics-guide" />
        
        {/* Baidu SEO specific meta tags */}
        <meta name="baidu-site-verification" content="cosmedocs-london-chinese" />
        <meta property="og:locale" content="zh_CN" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="伦敦中国人医美指南 | 瘦脸针下颌缩小术 | 亚洲鼻型微整形" />
        <meta property="og:description" content="专为在伦敦的中国留学生和华人提供专业医美服务。瘦脸针下颌缩小、亚洲鼻型微整形、下巴塑形。" />
        <meta property="og:url" content="https://www.cosmedocs.com/blog/chinese-london-aesthetics-guide/" />
        <meta property="og:site_name" content="Cosmedocs" />
        
        {/* Structured data for Chinese content */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "伦敦中国人医美指南 - 瘦脸针下颌缩小术与亚洲鼻型微整形",
            "description": "专为在伦敦的中国留学生和华人提供专业医美服务指南",
            "author": {
              "@type": "Organization",
              "name": "Cosmedocs",
              "url": "https://www.cosmedocs.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cosmedocs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.cosmedocs.com/logo.png"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            },
            "datePublished": "2025-06-06",
            "dateModified": "2025-06-06",
            "mainEntityOfPage": "https://www.cosmedocs.com/blog/chinese-london-aesthetics-guide/",
            "inLanguage": "zh-CN"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                伦敦中国人医美指南
                <span className="block text-purple-400 text-2xl md:text-3xl mt-4">
                  专业瘦脸针 · 亚洲鼻型微整 · 下巴塑形
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                哈利街顶级医美诊所，深谙亚洲面部美学，专为在伦敦的中国留学生和华人提供安全、自然的美容解决方案
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>哈利街10号</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>中文咨询服务</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>18年专业经验</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Search Bar Section */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-white">智能医美咨询助手</h2>
              <p className="text-gray-300 text-center mb-8">
                有任何关于我们医美服务的问题？我们的AI助手随时为您提供专业解答，支持中文咨询。
              </p>
              <ChineseAISearchBar />
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center">为什么选择Cosmedocs？</h2>
                <div className="prose prose-lg text-gray-300 max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    作为伦敦哈利街享有盛誉的医美诊所，Cosmedocs自2007年以来一直服务于来自世界各地的客户。我们深刻理解亚洲面部美学的独特性，
                    特别是中国客户对于自然、精致效果的追求。我们的专家团队在亚洲面部轮廓塑造方面拥有丰富经验，
                    能够为每位客户提供符合东方审美标准的个性化治疗方案。
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    <strong className="text-white">我们的优势：</strong>深谙中国传统美学与现代医美技术的完美结合，
                    理解"相由心生"的哲学理念，追求"静水流深"的自然美感。我们的治疗理念是"看不见的艺术" - 
                    让美丽悄然绽放，而非张扬炫耀。
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    在我们18年的从业历程中，我们见证了无数中国客户的美丽蜕变。从初来伦敦求学的青涩学生，
                    到在金融城叱咤风云的商界精英，再到定居英国的华人家庭，每一位客户都在我们这里找到了最适合自己的美学方案。
                    我们不仅仅是在改变外表，更是在帮助每个人找回内心的自信与美好。
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    我们的医生团队均受过专业的美学医学训练，对亚洲人的面部解剖结构有着深入的了解。
                    与欧美客户相比，亚洲客户的皮肤特质、面部骨骼结构、肌肉分布都有着显著差异。
                    我们的治疗方案充分考虑这些因素，确保每一次注射都能达到最理想的效果。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Signature Treatments for Chinese Clients */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">专为中国客户设计的明星项目</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "瘦脸针下颌缩小术",
                  subtitle: "Botox下颌角塑形",
                  description: "针对亚洲人普遍存在的下颌角肥大问题，使用高精度肉毒杆菌素注射技术，安全有效地缩小下颌线条，打造精致V脸。适合咬肌发达、脸型偏方的客户。治疗后脸型更加柔和，符合东方审美中的瓜子脸标准。",
                  benefits: ["无创无痛", "效果自然", "维持6-8个月", "不影响正常咀嚼"],
                  price: "£380-580",
                  popular: true,
                  link: "/botox-london"
                },
                {
                  title: "亚洲鼻型微整形",
                  subtitle: "非手术隆鼻术",
                  description: "专门针对亚洲人鼻型特点设计的非手术鼻部塑形。使用优质玻尿酸填充剂，提升鼻梁高度，改善鼻头形状，塑造立体鼻型。特别适合鼻梁低平、鼻头圆钝的亚洲面孔，打造自然协调的五官比例。",
                  benefits: ["即刻见效", "零恢复期", "可调整塑形", "维持12-18个月"],
                  price: "£450-750",
                  popular: true,
                  link: "/non-surgical-nose-job"
                },
                {
                  title: "下巴塑形增强术",
                  subtitle: "玻尿酸下巴塑形",
                  description: "通过精准的玻尿酸注射技术，改善下巴后缩、短小等问题，延长下半脸比例，营造优雅的侧面轮廓。结合中国传统面相学理念，塑造既符合现代审美又寓意吉祥的下巴形状。",
                  benefits: ["立体轮廓", "黄金比例", "面部平衡", "气质提升"],
                  price: "£350-550",
                  popular: false,
                  link: "/dermal-fillers"
                }
              ].map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {treatment.popular && (
                    <div className="absolute -top-3 -right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      热门
                    </div>
                  )}
                  <Card className="bg-black border-gray-800 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{treatment.title}</h3>
                      <p className="text-purple-400 text-sm font-medium mb-4">{treatment.subtitle}</p>
                      <p className="text-gray-300 text-sm mb-6 leading-relaxed">{treatment.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">治疗优势：</h4>
                        <ul className="space-y-2">
                          {treatment.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-gray-400 text-sm flex items-center">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400 font-bold">{treatment.price}</span>
                        <Link to={treatment.link}>
                          <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                            了解详情
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Anti-Aging Treatments */}
        <section className="py-20">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">全面抗衰老治疗方案</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-400">肉毒杆菌素抗皱系列</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-white">上面部除皱</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      针对额头纹、眉间川字纹、眼周鱼尾纹等上面部皱纹，使用精确剂量的肉毒杆菌素，
                      保持面部表情自然的同时有效减少皱纹。特别适合长期面对电脑工作的留学生和上班族。
                      我们的医生会根据每位客户的面部肌肉状况，精确计算注射剂量和位置，确保既能有效除皱，
                      又不会影响自然表情，让您在职场和社交场合都能展现最佳状态。
                    </p>
                    <p className="text-purple-400 font-medium">价格：£280-450</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-white">下面部塑形</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      包括口周纹路处理、颈部拉提、双下巴改善等。采用先进的Nefertiti颈部拉提技术，
                      让颈部线条更加优雅，重现天鹅颈的美感。这项技术特别受到中国女性客户的欢迎，
                      因为它能够显著改善因长期低头看手机而产生的颈纹问题，让您重现优雅的东方女性气质。
                    </p>
                    <p className="text-purple-400 font-medium">价格：£320-580</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-400">玻尿酸全脸年轻化</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-white">面部轮廓重塑</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      使用高品质交联玻尿酸，恢复面部饱满度，改善苹果肌下垂、太阳穴凹陷等老化问题。
                      结合亚洲面相学，塑造福气满满的面部轮廓。我们的治疗不仅关注美学效果，
                      更注重传统文化中的面相寓意，让您在拥有年轻外表的同时，也拥有吉祥的面相特征。
                      这种独特的治疗理念深受在英华人客户的认可和喜爱。
                    </p>
                    <p className="text-purple-400 font-medium">价格：£450-850</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-white">唇部精雕细琢</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      根据亚洲人唇形特点，采用微量多点注射技术，打造自然饱满的唇形。
                      追求"不着脂粉而娇艳"的天然美感，让双唇既有型又有神。
                      我们深知中国客户偏爱自然、优雅的唇形，因此在设计上更注重唇部的协调性和自然度，
                      避免过度夸张的效果，让您的笑容更加迷人动人。
                    </p>
                    <p className="text-purple-400 font-medium">价格：£350-550</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PDO Thread Lift for Chinese Clients */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8">PDO蛋白线雕 - 无创面部提升</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                PDO蛋白线雕技术是近年来备受中国客户青睐的非手术面部提升方法。这种革命性的治疗方式使用可吸收的PDO蛋白线，
                在皮下形成支撑网络，实现面部提升和紧致效果。特别适合初期面部松弛、追求自然年轻化效果的客户。
                这项技术在韩国和日本非常流行，现已成为亚洲女性保持青春美貌的重要选择。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-black rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">即时提升</h4>
                  <p className="text-gray-400 text-sm">治疗后立即可见面部提升效果，轮廓更加紧致年轻。线材植入后立即产生机械性提升，让您在离开诊所时就能看到明显改善。</p>
                </div>
                <div className="bg-black rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">持续改善</h4>
                  <p className="text-gray-400 text-sm">蛋白线刺激胶原蛋白生成，效果持续改善6-12个月。随着时间推移，您的肌肤会变得更加紧致有弹性，自然重现年轻状态。</p>
                </div>
                <div className="bg-black rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">安全可靠</h4>
                  <p className="text-gray-400 text-sm">PDO材料安全可吸收，无异物残留，恢复期短。使用的蛋白线与医用缝合线相同材质，安全性得到医学界广泛认可。</p>
                </div>
              </div>
              
              <p className="text-purple-400 text-xl font-bold mb-4">PDO线雕价格：£800-1500（根据使用线材数量而定）</p>
              <Link to="/pdo-threads">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  了解PDO线雕详情
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Understanding Chinese Aesthetics */}
        <section className="py-20">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">深谙中华美学 · 融汇东西方精髓</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  在Cosmedocs，我们不仅掌握世界先进的医美技术，更深刻理解中华传统美学的内涵。
                  我们知道中国客户追求的不是欧美式的棱角分明，而是温润如玉的东方韵味。
                  每一次治疗都是文化与技术的完美融合，让现代医美技术服务于传统美学理念。
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">传统美学理念</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">"环肥燕瘦"</strong> - 尊重个体差异，因人而美</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">"温润如玉"</strong> - 追求自然柔和的线条美</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">"相由心生"</strong> - 内在气质与外在美貌并重</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">"三庭五眼"</strong> - 符合黄金比例的面部协调</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">现代技术应用</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">微创技术</strong> - 最小化创伤，最大化效果</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">分层注射</strong> - 精确定位，层次分明</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">个性定制</strong> - 一人一方案，专属美丽</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">自然过渡</strong> - 避免突兀，追求和谐</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Chinese Client Testimonials */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">中国客户真实反馈</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "李同学",
                  treatment: "瘦脸针 + 鼻部微整",
                  feedback: "在伦敦读书三年，一直想做医美但担心效果不自然。Cosmedocs的医生非常理解亚洲人的审美需求，做出来的效果特别自然，同学们都说我变漂亮了但又说不出哪里变了，这就是我想要的效果！医生还很贴心地用中文解释整个过程，让我完全没有紧张感。",
                  location: "伦敦政经学院"
                },
                {
                  name: "张女士",
                  treatment: "全脸玻尿酸 + PDO线雕",
                  feedback: "工作压力大让我看起来老了很多，朋友推荐来Cosmedocs。医生根据我的脸型设计了个性化方案，现在看起来年轻了至少5岁，老公都说我越来越有女人味了。服务也很贴心，有中文沟通无障碍。最重要的是效果很自然，同事都以为我只是换了个发型而已。",
                  location: "金融城白领"
                },
                {
                  name: "王博士",
                  treatment: "下巴塑形 + 抗皱治疗",
                  feedback: "作为医生我对医美要求很高，Cosmedocs的专业程度让我很放心。他们使用的都是最好的产品，技术也很精湛。现在的我更自信了，感觉整个人的气质都提升了不少。医生还详细解释了每个步骤的原理，让我作为同行也学到了很多。",
                  location: "NHS医生"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-gray-800 h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-purple-400 text-sm">{testimonial.treatment}</p>
                        <p className="text-gray-500 text-xs">{testimonial.location}</p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed italic">
                        "{testimonial.feedback}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing and Packages */}
        <section className="py-20">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">中国客户专享套餐</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "留学生精选套餐",
                  price: "£680",
                  originalPrice: "£850",
                  treatments: ["瘦脸针", "唇部微整", "基础护肤咨询"],
                  description: "专为预算有限的留学生设计，包含最受欢迎的基础项目",
                  popular: false,
                  studentDiscount: true,
                  link: "/treatments"
                },
                {
                  name: "白领焕新套餐",
                  price: "£1,280",
                  originalPrice: "£1,580",
                  treatments: ["全脸肉毒杆菌", "玻尿酸鼻部塑形", "下巴增强", "肌肤护理"],
                  description: "适合工作繁忙的白领，一次性解决多个美容需求",
                  popular: true,
                  studentDiscount: false,
                  link: "/dermal-fillers"
                },
                {
                  name: "贵妇臻享套餐",
                  price: "£2,500",
                  originalPrice: "£3,200",
                  treatments: ["PDO线雕提升", "全脸玻尿酸重塑", "高端护肤治疗", "个人美学顾问"],
                  description: "顶级奢华体验，全方位美丽蜕变",
                  popular: false,
                  studentDiscount: false,
                  link: "/non-surgical-facelift"
                }
              ].map((package_, index) => (
                <motion.div
                  key={package_.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {package_.popular && (
                    <div className="absolute -top-3 -right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      最受欢迎
                    </div>
                  )}
                  {package_.studentDiscount && (
                    <div className="absolute -top-3 -left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      学生优惠
                    </div>
                  )}
                  <Card className={`h-full ${package_.popular ? 'border-purple-400 bg-accent' : 'bg-accent border-gray-800'}`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{package_.name}</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-purple-400">{package_.price}</span>
                        <span className="text-lg text-gray-500 line-through ml-2">{package_.originalPrice}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-6">{package_.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {package_.treatments.map((treatment, idx) => (
                          <div key={idx} className="flex items-center text-gray-300 text-sm">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            {treatment}
                          </div>
                        ))}
                      </div>
                      
                      <Link to={package_.link}>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                          立即预订
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety and Quality Assurance for Chinese Clients */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8">安全保障与品质承诺</h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                作为中国客户信赖的医美诊所，我们深知安全的重要性。每一位医生都拥有英国医学委员会(GMC)认证，
                每一支产品都来自正规渠道，每一次治疗都严格遵循英国医美行业标准。
                我们用18年的专业经验和超过100万次的安全治疗记录，为您的美丽保驾护航。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "医生资质认证",
                    description: "所有医生均为GMC注册医师，拥有丰富的亚洲客户治疗经验"
                  },
                  {
                    title: "产品质量保证",
                    description: "所有产品均来自官方授权渠道，确保正品和最佳效果"
                  },
                  {
                    title: "治疗安全标准",
                    description: "严格遵循英国医美行业最高安全标准，无菌操作环境"
                  },
                  {
                    title: "售后服务保障",
                    description: "提供完善的术后跟踪服务，确保治疗效果和客户满意度"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-black rounded-lg p-6"
                  >
                    <h4 className="text-white font-semibold mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Consultation Process */}
        <section className="py-20">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">中文咨询流程</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "中文预约",
                  description: "通过微信、电话或官网预约，支持中文沟通，可选择中文服务医生"
                },
                {
                  step: "02", 
                  title: "面诊分析",
                  description: "专业医生面对面咨询，深入了解您的需求，制定个性化治疗方案"
                },
                {
                  step: "03",
                  title: "安全治疗",
                  description: "使用顶级设备和产品，在舒适的环境中进行治疗，确保安全有效"
                },
                {
                  step: "04",
                  title: "贴心随访",
                  description: "治疗后专业护理指导，定期回访跟踪效果，提供持续的美学建议"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location and Contact */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">联系我们</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">诊所地址</h4>
                      <p className="text-gray-300">10 Harley Street, London W1G 9PF</p>
                      <p className="text-gray-400 text-sm">地铁Oxford Circus站步行5分钟，交通便利</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">预约电话</h4>
                      <p className="text-gray-300">0333 0551 503</p>
                      <p className="text-gray-400 text-sm">周一至周六 9:00-18:00，可要求中文服务</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">邮箱咨询</h4>
                      <p className="text-gray-300">info@cosmedocs.com</p>
                      <p className="text-gray-400 text-sm">支持中文邮件咨询，24小时内回复</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">立即预约中文咨询</h3>
                    <p className="text-gray-300 mb-6">
                      填写下方信息，我们的中文客服将在24小时内与您联系，为您安排专业的美学咨询。
                      首次咨询免费，让您充分了解适合的治疗方案。
                    </p>
                    <Link to="/contact">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">
                        在线预约咨询
                      </Button>
                    </Link>
                    <p className="text-center text-gray-400 text-sm">
                      或添加微信：Cosmedocs_CN
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">开启您的美丽蜕变之旅</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                在伦敦最权威的哈利街医美诊所，体验专为中国客户定制的贴心服务。
                让我们用18年的专业经验，为您打造专属的东方美学。
                预约咨询，让美丽从今天开始。
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-3 text-lg">
                  立即开始咨询
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content for Chinese Search Engines */}
        <div className="sr-only">
          <h3>伦敦中国人医美服务关键词优化内容</h3>
          <p>
            伦敦中国人肉毒杆菌注射服务、伦敦华人瘦脸针治疗、伦敦玻尿酸填充中文服务、哈利街中国客户医美、
            伦敦亚洲人鼻部整形、Chinese London Botox treatment、Chinese aesthetics London、
            伦敦留学生医美、伦敦华人美容诊所、中国人专属医美套餐、亚洲面部轮廓塑造、
            伦敦下颌角缩小术、伦敦PDO线雕中文服务、Harley Street Chinese aesthetic clinic。
          </p>
          
          <p>
            Cosmedocs哈利街诊所专门为在伦敦的中国留学生、华人白领、商务人士提供专业的医学美容服务。
            我们深刻理解东方面部美学的独特性，擅长亚洲人脸型的精细调整和优化。主要服务项目包括：
            瘦脸针下颌缩小术（适合方脸、大脸的亚洲客户）、非手术隆鼻术（专门针对亚洲人扁平鼻型设计）、
            下巴塑形增强术（改善下巴后缩，营造立体轮廓）、全脸抗衰老治疗方案、PDO蛋白线雕面部提升技术。
          </p>
          
          <p>
            作为伦敦哈利街最受中国客户信赖的医美诊所，我们提供中文咨询服务，深谙中华传统美学理念，
            将"温润如玉"的东方美感与现代医美技术完美结合。我们理解中国客户对自然、精致效果的追求，
            坚持"看不见的艺术"治疗理念，让美丽悄然绽放。诊所位于伦敦市中心哈利街10号，
            交通便利，是留学生和华人首选的医美目的地。
          </p>
          
          <p>
            我们的专业团队拥有18年丰富经验，完成超过100万次安全注射治疗，特别擅长处理亚洲人面部特征。
            无论是想要改善面部轮廓的留学生，还是希望抗衰老的成功人士，我们都能提供最适合的个性化治疗方案。
            预约方式包括电话、微信、邮件等多种途径，全程中文服务，让您在异国他乡也能享受到宾至如归的体验。
            我们的AI智能咨询系统也支持中文交流，为您提供24小时在线服务，随时解答您的医美疑问。
          </p>
        </div>
      </div>
    </>
  );
};

export default ChineseLondonAestheticsBlog;
