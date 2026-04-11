import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PricesChinese = () => {
  const canonicalUrl = 'https://www.cosmedocs.com/zh/prices/';

  return (
    <>
      <Helmet>
        <title>价格表 | 伦敦医美治疗 | Cosmedocs</title>
        <meta name="description" content="肉毒素、玻尿酸填充、皮肤活化剂、皮肤科及整形外科完整价格指南。哈利街诊所，伦敦。自2007年起提供透明定价。" />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <meta property="og:title" content="价格表 | Cosmedocs" />
        <meta property="og:description" content="伦敦医美治疗完整价格指南" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/prices/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/prices/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/tarifs/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/precios/" />
        <link rel="alternate" hrefLang="zh" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/prices/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://www.cosmedocs.com/#organization",
                name: "Cosmedocs",
                telephone: "+442037333227",
                priceRange: "££",
                address: { "@type": "PostalAddress", streetAddress: "10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
                geo: { "@type": "GeoCoordinates", latitude: 51.5074, longitude: -0.1278 },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "156", bestRating: "5" }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "首页", item: "https://www.cosmedocs.com/zh/" },
                  { "@type": "ListItem", position: 2, name: "价格", item: canonicalUrl }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white py-24">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Breadcrumb">
            <Link to="/zh/" className="hover:text-[#C9A050] transition-colors">首页</Link>
            <span>/</span>
            <span className="text-white/60">价格</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">价格指南</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              作为自2007年以来在伦敦拥有丰富经验的注射专家，我们专注于安全地注射高剂量肉毒素以确保持久效果。
              在过去十年中，我们开发了许多新的填充技术，现已在国际上教授给专业人士。
            </p>
          </div>

          <Tabs defaultValue="botox" className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <TabsList className="bg-accent mb-8 p-1 flex flex-nowrap min-w-max">
                <TabsTrigger value="botox">肉毒素</TabsTrigger>
                <TabsTrigger value="fillers">玻尿酸填充</TabsTrigger>
                <TabsTrigger value="skinBoosters">皮肤活化</TabsTrigger>
                <TabsTrigger value="surgery">整形外科</TabsTrigger>
                <TabsTrigger value="dermatology">皮肤科</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="botox" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">注射类治疗</h2>
                <p className="text-gray-400 mb-6">面部年轻化注射治疗</p>
                {[
                  { title: "注射咨询", price: "£50（可抵扣任何治疗费用）", desc: "初始咨询，讨论您的需求和治疗方案" },
                  { title: "面部肉毒素", desc: "额头、眉间、鱼尾纹", prices: [{ n: "1个区域", p: "£175" }, { n: "2个区域", p: "£275" }, { n: "3个区域", p: "£350" }] },
                  { title: "全脸自然肉毒素", price: "£500", desc: "包含以上所有区域（3个区域+下半脸）" },
                  { title: "偏头痛肉毒素", price: "£450-550" },
                  { title: "磨牙症肉毒素", price: "£350" },
                  { title: "多汗症治疗", price: "£550" },
                  { title: "咬肌瘦脸", price: "£350" },
                  { title: "瘦肩针（Barbie Botox）", price: "£450" },
                  { title: "瘦小腿", price: "£750" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.desc && <p className="text-sm text-gray-400">{item.desc}</p>}
                        </div>
                        <div className="text-right">
                          {item.price && <p className="font-bold">{item.price}</p>}
                          {item.prices && item.prices.map((p, j) => (
                            <div key={j} className="flex justify-between gap-4 text-sm">
                              <span>{p.n}</span>
                              <span className="font-bold">{p.p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="fillers" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">玻尿酸填充</h2>
                <p className="text-gray-400 mb-6">咨询费 £50（可抵扣治疗费用）</p>
                {[
                  { title: "玻尿酸全脸焕新 (HA Makeover)", price: "£800起" },
                  { title: "非手术拉皮", price: "£800起" },
                  { title: "法令纹填充", price: "£325/毫升" },
                  { title: "下颌线填充", price: "£350/毫升", link: "/zh/treatments/jawline-filler/" },
                  { title: "苹果肌填充", price: "£350/毫升" },
                  { title: "泪沟填充", price: "£425", link: "/zh/treatments/tear-trough-filler/" },
                  { title: "下巴填充", price: "£350/毫升", link: "/zh/treatments/chin-filler/" },
                  { title: "丰唇 0.5毫升（自然款）", price: "£300" },
                  { title: "丰唇 1毫升", price: "£350" },
                  { title: "非手术隆鼻", price: "£450" },
                  { title: "太阳穴填充", price: "£350/毫升" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div><h3 className="font-semibold">{item.title}</h3></div>
                        <p className="font-bold">{item.price}</p>
                      </div>
                      {item.link && (
                        <div className="mt-2 text-right">
                          <Link to={item.link}><Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">了解更多 →</Button></Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="skinBoosters" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">皮肤活化治疗</h2>
                <p className="text-gray-400 mb-6">深层补水与皮肤年轻化</p>
                {[
                  { title: "Profhilo 逆时针", price: "£350/次", desc: "玻尿酸生物重塑治疗" },
                  { title: "多核苷酸", price: "£300/次", desc: "基于DNA的再生治疗" },
                  { title: "Redensity 1", price: "£250/次" },
                  { title: "Jalupro", price: "£275/次" },
                  { title: "Sunekos", price: "£275/次" },
                  { title: "微针治疗", price: "£250/次", desc: "先进的胶原蛋白诱导疗法" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.desc && <p className="text-sm text-gray-400">{item.desc}</p>}
                        </div>
                        <p className="font-bold">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="surgery" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">整形外科服务</h2>
                {[
                  { title: "手术咨询", price: "£150" },
                  { title: "鼻整形手术", price: "£6,000起" },
                  { title: "隆胸手术", price: "£5,500起" },
                  { title: "拉皮手术", price: "£8,000起" },
                  { title: "吸脂手术", price: "£3,500起" },
                  { title: "眼睑手术", price: "£3,000起" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="font-bold">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="dermatology" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">皮肤科服务</h2>
                {[
                  { title: "皮肤科咨询", price: "£200" },
                  { title: "皮肤癌筛查", price: "£300" },
                  { title: "痤疮治疗", price: "£250起" },
                  { title: "湿疹治疗", price: "£200起" },
                  { title: "银屑病治疗", price: "£250起" },
                  { title: "痣/赘生物去除", price: "£150起" },
                  { title: "色素沉着治疗", price: "£300起" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="font-bold">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-16">
            <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">隐形的艺术</p>
            <p className="text-2xl font-extralight mb-6">大胆 • 自然 • 始终如你所愿</p>
            <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#C9A050] hover:bg-[#B8903F] text-black rounded-full px-8">预约咨询</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricesChinese;
