import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, Home, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import oilySkinImage from "@/assets/oily-skin-botox-before-after.jpg";

const OilySkinBotox = () => {
  const seoData = generateSEOMetadata(
    "T-Zone Oily Skin Botox London | Oil Reduction Treatment | Sebum Control UK | Cosmedocs",
    "Professional T-zone oily skin Botox treatment in London. Reduce oil production & shine in forehead, nose & chin. 30% oil reduction. Expert consultation.",
    "/oily-skin-botox"
  );

  const beforeAfterImages = [
    { 
      src: oilySkinImage, 
      alt: "T-zone oily skin Botox before and after showing reduced oil and shine", 
      caption: "T-zone oil reduction - 30% decrease in sebum production" 
    },
    { 
      src: oilySkinImage, 
      alt: "Oily forehead Botox before and after treatment results", 
      caption: "Forehead oil control - matte complexion achieved" 
    },
    { 
      src: oilySkinImage, 
      alt: "T-zone Botox before and after showing improved skin texture", 
      caption: "Comprehensive T-zone treatment - balanced skin achieved" 
    }
  ];

  const faqs = [
    {
      question: "How does Botox work for oily skin in the T-zone?",
      answer: "Botox targets sweat glands in the T-zone area by temporarily blocking acetylcholine release, which stimulates sweat and oil production. This reduces excess oiliness and shine whilst maintaining natural skin function."
    },
    {
      question: "What areas of the T-zone can be treated?",
      answer: "Botox can be targeted to the forehead, between the eyebrows (glabella), and around the nose to reduce oiliness and pore size in the T-zone area where oil production is most intense."
    },
    {
      question: "How long do T-zone oily skin Botox results last?",
      answer: "Results typically last 4-6 months. You may notice improvements as early as the day following treatment, with most noticeable results appearing after about a week."
    },
    {
      question: "Will Botox affect my ability to make facial expressions?",
      answer: "No, Botox for oily skin is designed to target specific areas while preserving natural facial expressions. You'll still be able to smile, frown, and make regular expressions naturally."
    },
    {
      question: "What results can I expect?",
      answer: "Most patients experience up to a 30% reduction in oil production, resulting in a more balanced, matte complexion that lasts throughout the day without constant blotting."
    },
    {
      question: "Is there any downtime?",
      answer: "There's minimal downtime with T-zone Botox treatment. You can return to normal activities immediately, though we recommend avoiding strenuous exercise for 24 hours."
    },
    {
      question: "Will Botox injections affect my ability to sweat in the treated areas of the T-zone?",
      answer: "While Botox can temporarily reduce sweat production in the treated areas, this effect is typically localised and does not affect overall sweating or thermoregulation in the body. Our experts at Cosmedocs ensure everything is discussed thoroughly before treatment."
    },
    {
      question: "Can Botox help with acne in the T-zone?",
      answer: "While Botox primarily targets oil production and pore size, some individuals may notice improvements in acne severity, particularly if excess oil production contributes to breakouts. However, Botox is not specifically indicated for treating acne and may not be effective for all acne types."
    },
    {
      question: "Can Botox be combined with other skincare treatments for oily skin in the T-zone?",
      answer: "Yes, Botox can be combined with other skincare treatments such as topical retinoids, chemical peels, or laser therapies to enhance overall results for oily skin in the T-zone. Consult with our skin experts to determine the best combination for your specific needs."
    },
    {
      question: "Are there any special precautions or post-treatment care tips?",
      answer: "After Botox treatment, avoid rubbing or massaging the treated area for the first few hours and avoid strenuous exercise for the remainder of the day. Additionally, wearing sunscreen and avoiding excessive sun exposure can help maintain results and protect the skin."
    },
    {
      question: "What specific areas of the T-zone can Botox treat for oily skin?",
      answer: "Botox can be targeted to areas such as the forehead, between the eyebrows (glabella), and around the nose to reduce oiliness and pore size in the T-zone where oil production is most problematic."
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
        <meta name="keywords" content="best skin treatment for oily skin, greasy t zone, oily skin, oily skin treatment, skin treatment for oily skin, greasy skin treatment, greasy skin cure, oily face treatment, T-zone oily skin Botox, oil reduction London, sebum control treatment, forehead oil reduction, nose oil treatment, chin oil control, oily skin Botox London, T-zone treatment, Harley Street" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Specialist T-zone oily skin Botox treatments for oil reduction and sebum control",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "priceRange": "££"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "url": "https://www.cosmedocs.co.uk",
            "telephone": "+44 20 3733 3227",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "priceRange": "££",
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "T-Zone Oily Skin Botox Treatment",
              "alternateName": "Sebum Control Botox",
              "description": "Professional botox treatment for oily skin in the T-zone area (forehead, nose, chin). Best skin treatment for oily skin providing up to 30% reduction in oil production."
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "T-Zone Oily Skin Botox Treatment",
            "description": "Professional oily skin treatment with botox for T-zone oil control",
            "price": "200",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "seller": {
              "@type": "MedicalClinic",
              "name": "Cosmedocs",
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
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-accent border-b border-purple-500/20">
          <div className="page-container">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center gap-1 text-gray-400 hover:text-purple-300">
                    <Home className="h-4 w-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-purple-300">Oily Skin Botox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>
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
                  <span className="text-purple-300">Oily Skin Botox</span>
                  <span className="block text-xl md:text-2xl mt-4 text-gray-300">Best Skin Treatment for Oily Skin & Greasy T-Zone</span>
                  <span className="block text-sm mt-2 font-normal">Putting the squeeze on oily skin in your T-zone</span>
                </h1>
                <div className="mb-8 space-y-3">
                  <p className="text-2xl text-purple-300 font-bold">Greasy Skin Treatment & Sebum Control</p>
                  <p className="text-lg text-gray-200">The best oily face treatment - 30% oil reduction for a balanced, matte complexion</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Results last 4-6 months • From £200</p>
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
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Pricing
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">T-Zone Oily Skin Botox Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">15-20 minutes</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">4-6 months</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">No downtime required</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Local anaesthetic</p>
              </motion.div>
            </div>
          </div>
        </section>



        {/* What is T-Zone Oily Skin Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is T-Zone Oily Skin Botox?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                T-Zone oily skin Botox is the best skin treatment for oily skin, <a href="https://dermnetnz.org/topics/botulinum-toxin" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">clinically proven to reduce excess sebum</a>, targeting sweat glands in the forehead, nose, and chin areas to reduce excess oil production. 
                This innovative oily skin treatment helps achieve up to 30% reduction in sebum production for a balanced, matte complexion. Perfect for those struggling with greasy t zone issues and seeking an effective greasy skin cure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Understanding T-Zone Oil Production & Key Treatment Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    The T-zone (forehead, nose, and chin) contains the highest concentration of sebaceous glands, making it prone to excessive oil production and greasy skin. 
                    Botox works by temporarily blocking acetylcholine release, which stimulates sweat and oil glands in these problematic areas. This advanced skin treatment for oily skin provides lasting results for those seeking a greasy skin treatment that actually works.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Forehead</h4>
                      <p className="text-gray-300 text-sm">Primary area for oil reduction and shine control</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Nose</h4>
                      <p className="text-gray-300 text-sm">Central T-zone area with concentrated sebaceous glands</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Chin</h4>
                      <p className="text-gray-300 text-sm">Lower T-zone area for comprehensive oil control</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </section>

        {/* Benefits of T-Zone Oily Skin Botox */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Benefits of T-Zone Oily Skin Botox</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Revolutionary approach to managing excess oil production in your T-zone area. Similar precision to our <a href="/botox-london" className="text-purple-300 hover:text-purple-200 underline">Botox London treatments</a>, this greasy face treatment delivers lasting results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center">Regulating Sebum Production</h3>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center">Minimising Pore Size</h3>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center">Preventing Breakouts</h3>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center">Reducing Shine</h3>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center">Improving Overall Skin Texture</h3>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center">Longer Lasting Makeup & Enhanced Confidence</h3>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">T-Zone Oily Skin Botox — What to Expect?</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Treatment Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      After a detailed consultation with a cosmetic specialist at Cosmedocs for your T-zone oily skin treatment, we begin your sebum control treatment. The doctor uses very fine needles to inject botulinum toxin into targeted areas such as:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Forehead sweat glands</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Nose area sebaceous glands</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Chin oil-producing areas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>T-zone problem areas</span>
                      </li>
                    </ul>
                    <p className="text-purple-300 font-medium">
                      Following the botox treatment you may continue normal daily activities immediately.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Potential Side Effects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      T-zone oily skin botox is <a href="https://www.mayoclinic.org/tests-procedures/botox/about/pac-20384658" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">considered safe with minimal side effects</a> for most people. However, your treatment may have some slight side effects, such as:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Mild bruising around injection sites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Temporary swelling in treated areas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Slight discomfort during injection</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Temporary redness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Reduced sweating in treated areas (temporary)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Does Botox Work for T-Zone Oily Skin */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Does Botox Work for T-Zone Oily Skin?</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl flex items-center justify-center gap-3">
                      <Heart className="text-purple-400" size={28} />
                      Sebaceous Gland Control Mechanism
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      Botox works by temporarily blocking acetylcholine release, which stimulates sweat and oil production in the T-zone. This results in up to 30% reduction in sebum production, creating a balanced, matte complexion that <a href="https://www.webmd.com/beauty/cosmetic-procedures-botox" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">lasts 4-6 months</a> while maintaining natural skin function.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of T-Zone Oil Issues */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Types of T-Zone Oil Issues</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Excessive Sebum Production</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      When sebaceous glands in the T-zone produce excess oil, leading to constant shine, makeup sliding off, and clogged pores throughout the day.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      Botox is highly effective for controlling sebum production by targeting the glands directly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Enlarged Pores & Texture Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Chronic oil production can stretch pores and create rough skin texture, particularly noticeable in the forehead, nose, and chin areas.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      By reducing oil production, Botox can help minimise pore appearance and improve overall skin texture.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Results & Expectations */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What to Expect After Treatment</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding your journey to balanced, matte skin with T-zone oily skin Botox
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Gradual or Immediate Effects?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      You may begin noticing results as early as the day following the procedure. However, the most noticeable improvements typically manifest after about a week.
                    </p>
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <p className="text-purple-300 font-semibold">Up to 30% reduction in oil production</p>
                      <p className="text-gray-300 text-sm">Generally experienced by patients</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Maintenance Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The effects typically last around 4-6 months. However, Botox isn't a permanent solution, so touch-up appointments are needed every 4–6 months to maintain results.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Long-lasting effects (4-6 months)</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Maintain results with touch-ups</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Card className="bg-accent border-none max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Anticipated Outcomes</h3>
                  <p className="text-gray-300 mb-6">
                    Once you see the results after 4-6 days, you'll observe a noticeable reduction in daily oil production, allowing for a balanced amount necessary for the skin's essential functions. For additional facial enhancements, explore our <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal filler treatments</a>.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-left">
                      <h4 className="text-purple-300 font-semibold mb-2">No More Constant Blotting</h4>
                      <p className="text-gray-300 text-sm">You'll no longer need to constantly blot oil from your skin throughout the day</p>
                    </div>
                    <div className="text-left">
                      <h4 className="text-purple-300 font-semibold mb-2">Youthful Matte Complexion</h4>
                      <p className="text-gray-300 text-sm">Enjoy a controlled, youthful 'matte' complexion that lasts all day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>


        {/* Pricing Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Oily Skin Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional T-zone oil control treatments. All prices include consultation and aftercare support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">T-Zone Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">Call for Pricing</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Complete T-zone oil reduction treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Forehead, nose & chin areas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Up to 30% oil reduction</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">4-6 months duration</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Targeted Areas</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">Call for Pricing</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Individual area treatment options</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Forehead only</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Nose area only</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Customised treatment plan</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full skin assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button 
                onClick={() => window.location.href = 'tel:03330551503'}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
              >
                Call for Pricing
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Knowledge</h3>
                <p className="text-gray-300">Specialists in T-zone oil control treatments</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced Techniques</h3>
                <p className="text-gray-300">Precise injection methods for optimal results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Consistent 30% oil reduction in treated areas</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Natural Results</h3>
                <p className="text-gray-300">'Invisible art' approach for balanced skin appearance</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Complete Care</h3>
                <p className="text-gray-300">Comprehensive consultation and aftercare support</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300">Everything you need to know about T-zone oily skin Botox. Considering other treatments? Visit our <a href="/profhilo" className="text-purple-300 hover:text-purple-200 underline">Profhilo page</a> or explore <a href="/lip-fillers" className="text-purple-300 hover:text-purple-200 underline">lip fillers</a>.</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-accent rounded-lg border border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-400 px-6 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 px-6 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Knowledge</h3>
                <p className="text-gray-300">Specialists in T-zone oil control treatments</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced Techniques</h3>
                <p className="text-gray-300">Precise injection methods for optimal results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Up to 30% oil reduction achieved</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Personalised Care</h3>
                <p className="text-gray-300">Customised T-zone treatment plans</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive support and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready for Balanced, Matte Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your T-zone oily skin Botox consultation and achieve the balanced complexion you've been dreaming of.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content - Crawler-Optimised Information */}
        <section className="sr-only" aria-hidden="true">
          <div className="page-container">
            <h2>Comprehensive Guide to Oily Skin Treatment and Greasy T-Zone Solutions</h2>
            
            <h3>Best Skin Treatment for Oily Skin: Understanding Your Options</h3>
            <p>
              When searching for the best skin treatment for oily skin, it's essential to understand that oily skin results from overactive sebaceous glands in the T-zone area. 
              The best skin treatment for oily skin targets these glands directly, reducing sebum production without compromising the skin's natural protective barrier. Oily skin treatment 
              options range from topical solutions to injectable treatments like Botox. Our skin treatment for oily skin at Cosmedocs specifically addresses greasy t zone concerns through 
              targeted injections that regulate oil production at its source. Unlike temporary greasy skin treatment solutions that only absorb surface oil, our approach provides lasting 
              results for those seeking an effective greasy skin cure. This oily face treatment represents a breakthrough in dermatological care.
            </p>

            <h3>Greasy T Zone Treatment and Oily Skin Solutions</h3>
            <p>
              The greasy t zone is the most common area affected by excessive oil production, encompassing the forehead, nose, and chin. This greasy skin condition affects millions worldwide, 
              causing persistent shine, enlarged pores, and makeup difficulties. Traditional greasy skin treatment methods often provide only temporary relief, requiring constant reapplication 
              throughout the day. Our innovative approach to treating greasy t zone issues uses <a href="https://dermnetnz.org/topics/botulinum-toxin" target="_blank" rel="noopener noreferrer" className="text-purple-300">
              botulinum toxin injections</a> to regulate sebaceous gland activity. This oily skin treatment provides up to 30% reduction in oil production, making it the best skin treatment for 
              oily skin available today. Whether you're struggling with oily skin on your forehead, nose, or chin, our skin treatment for oily skin delivers measurable, lasting results.
            </p>

            <h3>Oily Face Treatment: Advanced Botox Techniques</h3>
            <p>
              Our oily face treatment utilises precise micro-injections of Botox to target overactive sebaceous glands in the T-zone. This greasy skin cure works by temporarily blocking 
              acetylcholine, the neurotransmitter responsible for stimulating oil production. The treatment is particularly effective for those with greasy skin who have struggled with traditional 
              oily skin treatment methods. Results from this best skin treatment for oily skin appear within 4-6 days and last approximately 4-6 months. Unlike topical greasy skin treatment 
              products, Botox addresses the root cause of excess oil production. Patients seeking a reliable greasy skin cure consistently choose this method over alternatives due to its 
              proven efficacy and minimal downtime.
            </p>

            <h3>Skin Treatment for Oily Skin: Clinical Evidence and Safety</h3>
            <p>
              Clinical studies demonstrate that Botox as a skin treatment for oily skin reduces sebum production by up to 30% in treated areas. This oily skin treatment has been extensively 
              researched and proven safe for cosmetic dermatological use. As the best skin treatment for oily skin currently available, it offers predictable results with minimal side effects. 
              The procedure involves strategically placed injections across the greasy t zone, specifically targeting areas with the highest concentration of sebaceous glands. This greasy skin 
              treatment approach is more effective than over-the-counter products for those with moderate to severe oily skin. Our practitioners are trained in advanced injection techniques, 
              ensuring optimal outcomes for every oily face treatment.
            </p>

            <h3>Greasy Skin Treatment: Patient Experience and Results</h3>
            <p>
              Patients who undergo this greasy skin treatment report significant improvements in daily confidence and makeup longevity. The oily skin treatment eliminates the need for constant 
              blotting and powder reapplication throughout the day. As the best skin treatment for oily skin, it provides a natural, matte finish that enhances overall complexion. Those with 
              greasy t zone concerns notice reduced pore size and fewer breakouts following treatment. This skin treatment for oily skin is suitable for adults of all ages experiencing 
              excessive oil production. The oily face treatment requires no recovery time, allowing immediate return to normal activities. Regular maintenance sessions every 4-6 months ensure 
              sustained control of greasy skin, making it a practical long-term greasy skin cure for those committed to managing their oily skin condition.
            </p>

            <h3>Choosing the Best Skin Treatment for Oily Skin at Cosmedocs</h3>
            <p>
              At Cosmedocs, located at 37 Harley Street, London, we specialise in advanced oily skin treatment solutions. Our practitioners have extensive experience in treating greasy t zone 
              issues and understand the psychological impact of persistent oily skin. We offer comprehensive consultations to assess your skin condition and determine if this greasy skin treatment 
              is suitable for you. Our clinic uses only premium, FDA-approved products for every oily face treatment. We follow strict safety protocols and maintain the highest standards of care. 
              When selecting the best skin treatment for oily skin, patients choose Cosmedocs for our expertise, results, and personalised approach. Whether you're seeking a greasy skin cure or 
              simply want better control over your oily skin, our team delivers exceptional outcomes with every skin treatment for oily skin we perform.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OilySkinBotox;