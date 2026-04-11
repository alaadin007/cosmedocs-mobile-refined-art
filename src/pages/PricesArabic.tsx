import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PricesArabic = () => {
  const canonicalUrl = 'https://www.cosmedocs.com/ar/prices/';

  return (
    <>
      <Helmet>
        <title>قائمة الأسعار | علاجات التجميل في لندن | كوزميدوكس</title>
        <meta name="description" content="دليل الأسعار الشامل لعلاجات البوتوكس والفيلر ومعززات البشرة والأمراض الجلدية والجراحة التجميلية. عيادة هارلي ستريت، لندن. أسعار شفافة منذ ٢٠٠٧." />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <meta property="og:title" content="قائمة الأسعار | كوزميدوكس" />
        <meta property="og:description" content="دليل الأسعار الشامل لعلاجات التجميل في لندن" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/prices/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/prices/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/tarifs/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/precios/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/prices/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/prices/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://www.cosmedocs.com/#organization",
                name: "Cosmedocs",
                url: "https://www.cosmedocs.com/",
                telephone: "+442037333227",
                priceRange: "££",
                address: { "@type": "PostalAddress", streetAddress: "10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
                geo: { "@type": "GeoCoordinates", latitude: 51.5074, longitude: -0.1278 },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "156", bestRating: "5" }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://www.cosmedocs.com/ar/" },
                  { "@type": "ListItem", position: 2, name: "الأسعار", item: canonicalUrl }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white py-24" dir="rtl">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Breadcrumb" dir="ltr">
            <Link to="/ar/" className="hover:text-[#C9A050] transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-white/60">الأسعار</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">دليل الأسعار</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              بصفتنا خبراء حقن ذوي خبرة عالية في لندن منذ ٢٠٠٧، نحن متخصصون في إعطاء جرعات عالية من البوتوكس بأمان لضمان نتائج طويلة الأمد. 
              طوّرنا تقنيات جديدة مع الفيلر على مدار العقد الماضي ندرّسها الآن للمتخصصين دولياً.
            </p>
          </div>

          <div dir="ltr">
            <Tabs defaultValue="botox" className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <TabsList className="bg-accent mb-8 p-1 flex flex-nowrap min-w-max">
                  <TabsTrigger value="botox">البوتوكس</TabsTrigger>
                  <TabsTrigger value="fillers">الفيلر</TabsTrigger>
                  <TabsTrigger value="skinBoosters">معززات البشرة</TabsTrigger>
                  <TabsTrigger value="surgery">الجراحة التجميلية</TabsTrigger>
                  <TabsTrigger value="dermatology">الأمراض الجلدية</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="botox" className="mt-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-2xl font-bold mb-2 text-amber-400">الحقن التجميلية</h2>
                  <p className="text-gray-400 mb-6">علاجات الحقن لتجديد شباب الوجه</p>
                  {[
                    { title: "استشارة الحقن التجميلية", price: "£50 (تُخصم من أي علاج)", desc: "استشارة أولية لمناقشة احتياجاتك وخيارات العلاج" },
                    { title: "بوتوكس الوجه", desc: "الجبهة، بين الحاجبين، خطوط الابتسامة", prices: [{ n: "منطقة واحدة", p: "£175" }, { n: "منطقتان", p: "£275" }, { n: "٣ مناطق", p: "£350" }] },
                    { title: "بوتوكس الوجه الكامل الطبيعي", price: "£500", desc: "يشمل جميع المناطق أعلاه (٣ مناطق + أسفل الوجه)" },
                    { title: "بوتوكس الصداع النصفي", price: "£450-550" },
                    { title: "بوتوكس صرير الأسنان", price: "£350" },
                    { title: "بوتوكس التعرق المفرط", price: "£550" },
                    { title: "تنحيف الفك (ماسيتر)", price: "£350" },
                    { title: "بوتوكس الكتف (باربي بوتوكس)", price: "£450" },
                    { title: "تنحيف الساق بالبوتوكس", price: "£750" },
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
                  <h2 className="text-2xl font-bold mb-2 text-amber-400">الفيلر الجلدي</h2>
                  <p className="text-gray-400 mb-6">استشارة £50 (تُخصم من أي علاج)</p>
                  {[
                    { title: "تجميل الوجه بالهيالورونيك (HA Makeover)", price: "من £800" },
                    { title: "شد الوجه بدون جراحة", price: "من £800" },
                    { title: "فيلر خطوط الماريونيت", price: "£325/مل" },
                    { title: "فيلر الطيات الأنفية الشفوية", price: "£325/مل" },
                    { title: "فيلر خط الفك", price: "£350/مل", link: "/ar/treatments/jawline-filler/" },
                    { title: "فيلر الخدود", price: "£350/مل" },
                    { title: "فيلر تحت العين", price: "£425", link: "/ar/treatments/tear-trough-filler/" },
                    { title: "فيلر الذقن", price: "£350/مل", link: "/ar/treatments/chin-filler/" },
                    { title: "فيلر الشفاه ٠.٥ مل (طبيعي)", price: "£300" },
                    { title: "فيلر الشفاه ١ مل", price: "£350" },
                    { title: "تجميل الأنف بدون جراحة", price: "£450" },
                    { title: "فيلر الصدغ", price: "£350/مل" },
                  ].map((item, i) => (
                    <Card key={i} className="mb-4 bg-accent text-white border-0">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{item.title}</h3>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{item.price}</p>
                          </div>
                        </div>
                        {item.link && (
                          <div className="mt-2 text-right">
                            <Link to={item.link}><Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">اقرأ المزيد →</Button></Link>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="skinBoosters" className="mt-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-2xl font-bold mb-2 text-amber-400">معززات البشرة</h2>
                  <p className="text-gray-400 mb-6">ترطيب متقدم وتجديد البشرة</p>
                  {[
                    { title: "بروفايلو (PROFHILO)", price: "£350 لكل جلسة", desc: "علاج إعادة تشكيل حيوي بحمض الهيالورونيك" },
                    { title: "بولينوكليوتيدات", price: "£300 لكل جلسة", desc: "علاج تجديدي قائم على الحمض النووي" },
                    { title: "ريدنسيتي ١", price: "£250 لكل جلسة" },
                    { title: "جالوبرو", price: "£275 لكل جلسة" },
                    { title: "سونيكوس", price: "£275 لكل جلسة" },
                    { title: "ميكرونيدلينج", price: "£250 لكل جلسة", desc: "علاج تحفيز الكولاجين المتقدم" },
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
                  <h2 className="text-2xl font-bold mb-2 text-amber-400">خدمات الجراحة التجميلية</h2>
                  {[
                    { title: "استشارة جراحية", price: "£150" },
                    { title: "عملية تجميل الأنف", price: "من £6,000" },
                    { title: "تكبير الثدي", price: "من £5,500" },
                    { title: "شد الوجه", price: "من £8,000" },
                    { title: "شفط الدهون", price: "من £3,500" },
                    { title: "جراحة الجفون", price: "من £3,000" },
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
                  <h2 className="text-2xl font-bold mb-2 text-amber-400">خدمات الأمراض الجلدية</h2>
                  {[
                    { title: "استشارة جلدية", price: "£200" },
                    { title: "فحص سرطان الجلد", price: "£300" },
                    { title: "علاج حب الشباب", price: "من £250" },
                    { title: "علاج الأكزيما", price: "من £200" },
                    { title: "علاج الصدفية", price: "من £250" },
                    { title: "إزالة الشامات والزوائد الجلدية", price: "من £150" },
                    { title: "علاج التصبغات", price: "من £300" },
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
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">فن غير مرئي</p>
            <p className="text-2xl font-extralight mb-6">جريء • طبيعي • دائماً على طريقتك</p>
            <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#C9A050] hover:bg-[#B8903F] text-black rounded-full px-8">احجز استشارتك</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricesArabic;
