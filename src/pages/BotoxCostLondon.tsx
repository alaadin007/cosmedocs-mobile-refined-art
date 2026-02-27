import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, CheckCircle, Award, Shield, Heart, TrendingUp } from "lucide-react";
import ClientReviews from '@/components/ClientReviews';
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import botoxForeheadImage from "@/assets/botox-forehead-before-after.jpeg";
import foreheadLineImage from "@/assets/forehead-line-before-after.jpeg";
import crowsFeetBA1 from "@/assets/before-after/crows-feet-botox-1.png";
import crowsFeetBA2 from "@/assets/before-after/crows-feet-botox-2.jpg";
import frownLinesBA1 from "@/assets/frown-lines-before-after-1.jpg";
import frownLinesBA2 from "@/assets/frown-lines-before-after-2.jpg";
import frownLinesBA3 from "@/assets/frown-lines-before-after-3.jpg";
import frownLinesBA4 from "@/assets/frown-lines-before-after-4.jpg";

const BotoxCostLondon = () => {
  const seoData = generateSEOMetadata(
    "Cost of Botox in London | Expert Injectable Clinic",
    "Transparent Botox pricing from £275. Expert anti-wrinkle injections at London's leading pure injectable clinic. Premium results, honest costs.",
    "/botox-cost-london"
  );

  const priceTable = [
    { area: "1 Area", womenPrice: "£275", menPrice: "£275" },
    { area: "2 Areas", womenPrice: "£350", menPrice: "£380" },
    { area: "3 Areas", womenPrice: "£395", menPrice: "£425" },
    { area: "Nefertiti Neck/Jowl Lift", womenPrice: "£250 (or £150 as supplement)", menPrice: "£250 (or £150 as supplement)" }
  ];

  const botoxBeforeAfterImages = [
    {
      src: botoxForeheadImage,
      alt: "Botox forehead lines treatment before and after showing smooth, natural results",
      caption: "Forehead lines - Natural wrinkle reduction"
    },
    {
      src: foreheadLineImage,
      alt: "Forehead line Botox treatment before and after results",
      caption: "Forehead rejuvenation - Visible improvement"
    },
    {
      src: frownLinesBA1,
      alt: "Botox frown lines treatment before and after showing relaxed appearance",
      caption: "Frown lines - Softened expression"
    },
    {
      src: frownLinesBA2,
      alt: "Frown line Botox before and after demonstrating natural results",
      caption: "Glabellar lines - Refreshed look"
    },
    {
      src: crowsFeetBA1,
      alt: "Botox crow's feet treatment before and after showing smooth eye area",
      caption: "Crow's feet - Youthful eyes"
    },
    {
      src: crowsFeetBA2,
      alt: "Crow's feet Botox before and after with subtle enhancement",
      caption: "Eye area - Subtle rejuvenation"
    },
    {
      src: frownLinesBA3,
      alt: "Multiple area Botox treatment before and after results",
      caption: "Combined areas - Harmonious results"
    },
    {
      src: frownLinesBA4,
      alt: "Full face Botox before and after showing comprehensive rejuvenation",
      caption: "Full face treatment - Natural enhancement"
    }
  ];

  const faqs = [
    {
      question: "How much does Botox cost in London?",
      answer: "Botox costs in London typically range from £275 for a single area to £425 for three areas depending on the treatment zone and practitioner expertise. At Cosmedocs, our transparent pricing starts from £275 for one area, with package rates available for multiple areas. Men's treatments may require slightly more product due to stronger muscle mass."
    },
    {
      question: "How long does Botox last?",
      answer: "Botox typically lasts 3-4 months, with results peaking at 2 weeks. Factors affecting duration include injection technique, product quality, muscle strength, metabolism, and lifestyle. Regular maintenance treatments every 3-4 months help sustain optimal results. Some patients report longer-lasting effects with consistent treatments over time."
    },
    {
      question: "Does Botox hurt?",
      answer: "Botox injections involve minimal discomfort. Most patients describe a slight pinching sensation rather than pain. We use ultra-fine needles and advanced injection techniques to maximise comfort. The entire procedure takes just 10-15 minutes with no anaesthetic needed. Any mild redness or swelling typically resolves within hours."
    },
    {
      question: "Can men get Botox?",
      answer: "Absolutely. Men are increasingly choosing Botox for a refreshed, professional appearance. Male Botox requires slightly more product due to stronger facial muscles, which is why our pricing reflects this difference. Common treatment areas for men include frown lines, forehead lines, and crow's feet for a natural, masculine result."
    },
    {
      question: "Why do Botox prices vary so much?",
      answer: "Botox pricing varies based on practitioner expertise, clinic location, product quality, and whether pricing is per area or per unit. Cheaper treatments often use less experienced injectors, lower-quality products, or insufficient units for optimal results. At Cosmedocs, our pricing reflects our specialist expertise, premium products, and comprehensive consultation process."
    },
    {
      question: "What areas can be treated with Botox?",
      answer: "Common Botox treatment areas include forehead lines, frown lines (between eyebrows), crow's feet, bunny lines, gummy smile correction, brow lift, jawline slimming (masseter), and the Nefertiti neck lift. Each area requires precise dosing and expert technique for natural-looking results without a frozen appearance."
    },
    {
      question: "Is Botox safe?",
      answer: "When administered by qualified medical professionals, Botox is extremely safe with a well-established track record. It's been used in aesthetic medicine for over 30 years and is FDA-approved. At Cosmedocs, all treatments are performed by experienced doctors who specialise exclusively in injectable treatments, ensuring the highest safety standards."
    },
    {
      question: "What's the difference between cheap and premium Botox?",
      answer: "Cheap Botox often means less experienced practitioners, rushed consultations, insufficient units used, or use of alternative brands with shorter-lasting results. Premium Botox at specialist clinics like Cosmedocs includes expert assessment, precise injection technique, optimal dosing, and comprehensive aftercare for superior, longer-lasting results."
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
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="Botox cost London, Botox price UK, how long does Botox last, Botox London prices, anti-wrinkle injections cost, Botox treatment cost, affordable Botox London, Harley Street Botox, injectable clinic London, Botox near me, Botox for men, Botox pricing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Botox Treatment",
            "description": "Expert Botox anti-wrinkle injections at London's leading pure injectable clinic with transparent pricing from £275",
            "procedureType": "Cosmetic",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "275",
              "highPrice": "425",
              "priceCurrency": "GBP"
            },
            "provider": {
              "@type": "MedicalClinic",
              "name": "Cosmedocs",
              "url": "https://www.cosmedocs.com",
              "telephone": "+44 20 3733 3227",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Cost of Botox in London</span>
                  <span className="block text-sm mt-4">Expert injectable treatments with transparent, honest pricing</span>
                </h1>
                <div className="mb-8">
                  <p className="text-xl text-gray-300 mb-4">
                    Understanding Botox costs shouldn't be complicated. We believe in transparent pricing that reflects true expertise, premium products, and exceptional results.
                  </p>
                  <p className="text-lg text-gray-400">
                    From £275 per area at London's leading pure injectable clinic
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Full Pricing
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Price Overview */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Quick Price Overview</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent Botox pricing with no hidden costs. All treatments include expert consultation, premium products, and comprehensive aftercare.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <CardHeader>
                    <CardTitle className="text-purple-300 text-center">1 Area</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-white mb-2">£275</p>
                    <p className="text-gray-400 text-sm">Women & Men</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <CardHeader>
                    <CardTitle className="text-purple-300 text-center">2 Areas</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-white mb-2">£350</p>
                    <p className="text-gray-400 text-sm">Women | Men £380</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <CardHeader>
                    <CardTitle className="text-purple-300 text-center">3 Areas</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-white mb-2">£395</p>
                    <p className="text-gray-400 text-sm">Women | Men £425</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <CardHeader>
                    <CardTitle className="text-purple-300 text-center">Nefertiti Lift</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-white mb-2">£250</p>
                    <p className="text-gray-400 text-sm">or £150 as supplement</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Results */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Botox Before & After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                See the natural, subtle results achieved with expert Botox treatments at Cosmedocs. Our specialist injectors deliver refreshed appearances without the frozen look.{' '}
                <Link to="/botox-london" className="text-purple-300 hover:underline">
                  Learn more about our Botox treatments
                </Link>.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {botoxBeforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group cursor-pointer p-2"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-sm text-gray-400">
                Results may vary. Individual results depend on facial anatomy, skin condition, and treatment plan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Pricing Table */}
        <section id="pricing-table" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Detailed Botox Price List</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive pricing for all Botox treatments. Men's pricing reflects the additional product required for stronger facial muscles.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-purple-500/20">
                      <th className="text-left py-4 px-6 text-purple-300 font-semibold">Treatment Area</th>
                      <th className="text-center py-4 px-6 text-purple-300 font-semibold">Women</th>
                      <th className="text-center py-4 px-6 text-purple-300 font-semibold">Men</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-b border-gray-800 hover:bg-accent transition-colors"
                      >
                        <td className="py-4 px-6 text-white">{row.area}</td>
                        <td className="py-4 px-6 text-center text-gray-300">{row.womenPrice}</td>
                        <td className="py-4 px-6 text-center text-gray-300">{row.menPrice}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-accent rounded-lg"
              >
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-purple-300">Common treatment areas include:</strong>
                </p>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                  <li>Forehead lines (horizontal lines across forehead)</li>
                  <li>Frown lines (vertical lines between eyebrows)</li>
                  <li>Crow's feet (lines around outer eyes)</li>
                  <li>Bunny lines (lines on nose bridge)</li>
                  <li>Brow lift (subtle eyebrow elevation)</li>
                  <li>Gummy smile correction</li>
                  <li>Masseter/jawline slimming</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Botox Prices Differ */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Why Botox Prices Differ in London</h2>
              <p className="text-gray-300 mb-6">
                The <a href="https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">NHS advises patients to ask about costs during consultations</a>, as pricing varies significantly based on several key factors:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-black border-purple-500/20">
                  <CardHeader>
                    <Award className="text-purple-300 mb-2" size={32} />
                    <CardTitle className="text-white">Practitioner Skill & Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Highly trained specialists with years of injection experience command higher fees, but deliver superior, safer results with fewer complications.
                  </CardContent>
                </Card>

                <Card className="bg-black border-purple-500/20">
                  <CardHeader>
                    <Shield className="text-purple-300 mb-2" size={32} />
                    <CardTitle className="text-white">Product Quality</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Premium botulinum toxin brands (Botox, Azzalure, Bocouture) cost more but provide consistent, longer-lasting results compared to budget alternatives.
                  </CardContent>
                </Card>

                <Card className="bg-black border-purple-500/20">
                  <CardHeader>
                    <Heart className="text-purple-300 mb-2" size={32} />
                    <CardTitle className="text-white">Clinic Location</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Harley Street and premium London locations reflect higher operational costs but also stringent quality standards and prestigious medical environments.
                  </CardContent>
                </Card>

                <Card className="bg-black border-purple-500/20">
                  <CardHeader>
                    <Clock className="text-purple-300 mb-2" size={32} />
                    <CardTitle className="text-white">Consultation & Aftercare</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Comprehensive consultations, personalised treatment plans, and dedicated aftercare support add value but increase overall treatment costs.
                  </CardContent>
                </Card>
              </div>

              <div className="bg-black border-l-4 border-purple-500 p-6 rounded">
                <p className="text-gray-300">
                  <strong className="text-purple-300">NHS Guidance:</strong> The NHS advises that cosmetic procedures should only be performed by qualified medical professionals in appropriate clinical settings. Cheaper treatments often compromise on one or more of these critical safety factors.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Pure Injectable Clinic */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Why Choose a Pure Injectable Clinic Over General Dermatology</h2>
              <p className="text-gray-300 mb-8">
                At Cosmedocs, we specialise exclusively in injectable treatments. Unlike general dermatology clinics that spread expertise across multiple disciplines, our entire focus is on mastering the art and science of aesthetic injectables.
              </p>

              <div className="space-y-6">
                <Card className="bg-accent border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-purple-300 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Specialist Expertise Only</h3>
                        <p className="text-gray-300">
                          Our doctors perform hundreds of injectable treatments monthly, developing unparalleled precision and artistry. General dermatologists divide their time across skin conditions, reducing their injectable specialisation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-purple-300 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Harley Street Training Standards</h3>
                        <p className="text-gray-300">
                          All our practitioners are trained to Harley Street's exacting standards, where injectable artistry meets medical excellence. This level of specialisation ensures consistent, natural results.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-purple-300 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Advanced Injection Techniques</h3>
                        <p className="text-gray-300">
                          We master advanced techniques like the Nefertiti lift, microdroplet Botox, and preventative treatments that general practitioners may only perform occasionally.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-purple-300 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Longer-Lasting, Safer Results</h3>
                        <p className="text-gray-300">
                          Precise placement, optimal dosing, and expert technique mean better results that last longer with minimal side effects. This specialist approach reduces the need for corrections or additional treatments.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How to Make Botox Last Longer */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How to Make Botox Last Longer</h2>
              <p className="text-gray-300 mb-8">
                Maximise your Botox investment with these medical-grade aftercare tips from our specialist injectors:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-black p-6 rounded-lg border border-purple-500/20"
                >
                  <TrendingUp className="text-purple-300 mb-3" size={28} />
                  <h3 className="text-xl font-semibold text-white mb-3">Protect from Sun Exposure</h3>
                  <p className="text-gray-300">
                    UV damage breaks down Botox faster. Use SPF 50+ daily and avoid prolonged sun exposure, especially in the first week post-treatment.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black p-6 rounded-lg border border-purple-500/20"
                >
                  <TrendingUp className="text-purple-300 mb-3" size={28} />
                  <h3 className="text-xl font-semibold text-white mb-3">Follow Post-Treatment Guidelines</h3>
                  <p className="text-gray-300">
                    Avoid lying down for 4 hours, skip intense exercise for 24 hours, and don't massage treated areas. These simple steps prevent product migration.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black p-6 rounded-lg border border-purple-500/20"
                >
                  <TrendingUp className="text-purple-300 mb-3" size={28} />
                  <h3 className="text-xl font-semibold text-white mb-3">Maintain Regular Treatments</h3>
                  <p className="text-gray-300">
                    Consistent treatments every 3-4 months train muscles to relax, often extending results over time. Many long-term clients report longer intervals between sessions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-black p-6 rounded-lg border border-purple-500/20"
                >
                  <TrendingUp className="text-purple-300 mb-3" size={28} />
                  <h3 className="text-xl font-semibold text-white mb-3">Support with Healthy Lifestyle</h3>
                  <p className="text-gray-300">
                    Adequate hydration, quality sleep, stress management, and avoiding smoking all support longer-lasting results by optimising skin health and cellular function.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-black p-6 rounded-lg border border-purple-500/20"
                >
                  <TrendingUp className="text-purple-300 mb-3" size={28} />
                  <h3 className="text-xl font-semibold text-white mb-3">Choose Expert Injectors</h3>
                  <p className="text-gray-300">
                    Precise placement and optimal dosing by specialist injectors means better initial results that naturally last longer than treatments by less experienced practitioners.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-black p-6 rounded-lg border border-purple-500/20"
                >
                  <TrendingUp className="text-purple-300 mb-3" size={28} />
                  <h3 className="text-xl font-semibold text-white mb-3">Complement with Skincare</h3>
                  <p className="text-gray-300">
                    Medical-grade retinoids, antioxidants, and peptides support skin health and can help maintain the youthful appearance Botox creates.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Cosmedocs for Botox in London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                London's leading pure injectable clinic where expertise meets artistry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-300" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Specialist Excellence</h3>
                <p className="text-gray-300">
                  Exclusively focused on injectable treatments with Harley Street-trained doctors performing hundreds of procedures monthly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-300" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Premium Products Only</h3>
                <p className="text-gray-300">
                  We use only FDA-approved, premium-grade botulinum toxin brands ensuring consistent, long-lasting, and safe results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-300" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Natural Results</h3>
                <p className="text-gray-300">
                  Our philosophy: invisible art. Refreshed, natural results that enhance your features without looking "done".
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* FAQs */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-black border border-purple-500/20 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience Expert Botox in London?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your consultation at Cosmedocs today and discover why we're London's leading pure injectable clinic. Transparent pricing, exceptional expertise, natural results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                >
                  Book Your Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold"
                  asChild
                >
                  <Link to="/botox-london">Explore Botox Treatments</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <h2>Botox Cost London - Comprehensive Pricing Guide</h2>
          <p>
            Understanding Botox cost in London requires knowledge of multiple pricing factors. At Cosmedocs, our Botox price UK rates reflect true specialist expertise, premium product quality, and comprehensive patient care. When researching how much does Botox cost in London, it's essential to understand that pricing varies significantly based on practitioner training, clinic reputation, and treatment complexity.
          </p>
          <p>
            Botox London prices at budget clinics may seem attractive initially, but often involve compromises in practitioner experience, product quality, or appropriate dosing. Our transparent Botox treatment cost includes expert consultation, premium botulinum toxin, precise injection technique, and comprehensive aftercare support. Understanding how long does Botox last is crucial for calculating true value - our expert technique typically provides 3-4 months of optimal results, with many clients experiencing longer duration with consistent maintenance treatments.
          </p>
          <p>
            The cost of Botox in London UK reflects the medical expertise required for safe, effective treatments. At Cosmedocs, our Botox pricing London represents fair value for specialist care that prioritises natural results and patient safety. When comparing Botox cost London options, consider that cheaper alternatives may use less experienced injectors, lower-quality products, or insufficient units for optimal results. Our Botox price list London demonstrates transparent pricing with no hidden costs, ensuring you understand exactly what you're paying for.
          </p>
          <p>
            Affordable Botox London doesn't mean compromising on quality. We offer competitive pricing that reflects our specialist expertise whilst remaining accessible to those seeking premium results. Understanding how long does Botox last helps explain our pricing structure - longer-lasting results from expert technique provide better value than cheaper treatments requiring more frequent touch-ups. Our pure injectable clinic focus means every practitioner is a Botox specialist, unlike general dermatology clinics where Botox is just one of many services offered.
          </p>
          <p>
            Botox for men requires specific expertise and adjusted dosing due to stronger facial muscles, which is why our Botox men price reflects the additional product and technique required. When researching Botox near me, consider that proximity should never outweigh practitioner expertise and clinic reputation. Our Harley Street Botox clinic provides the specialist care and premium environment you deserve, with transparent pricing that reflects true treatment value rather than misleading promotional offers.
          </p>
        </div>
      </div>
    </>
  );
};

export default BotoxCostLondon;
