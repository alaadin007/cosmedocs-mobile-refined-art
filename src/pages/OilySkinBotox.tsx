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
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import oilySkinImage from "@/assets/oily-skin-botox-before-after.jpg";

const OilySkinBotox = () => {
  const seoData = generateSEOMetadata(
    "T-Zone Oily Skin Botox London | Oil Reduction Treatment | Sebum Control UK | Cosmedocs",
    "Professional T-zone oily skin Botox treatment in London. Reduce oil production & shine in forehead, nose & chin. 30% oil reduction. Expert consultation.",
    "/t-zone-oily-skin-botox"
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
        <meta name="keywords" content="T-zone oily skin Botox, oil reduction London, sebum control treatment, forehead oil reduction, nose oil treatment, chin oil control, oily skin Botox London, T-zone treatment, Harley Street" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Specialist T-zone oily skin Botox treatments for oil reduction and sebum control",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Dermatology",
            "priceRange": "££"
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
                  <span className="text-purple-300">T-Zone Oily Skin Botox London</span>
                  <span className="block text-sm mt-4">Putting the squeeze on oily skin in your T-zone</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Sebum Control Treatment</p>
                  <p className="text-sm text-gray-300">30% oil reduction - achieve balanced, matte complexion</p>
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


        {/* Treatment Benefits */}
        <section className="py-20 bg-accent text-white">
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
                Revolutionary approach to managing excess oil production in your T-zone area.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Regulating Sebum Production</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Botox injections can help control excess oil production in the T-zone, reducing shine and promoting a more balanced complexion.
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
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Minimising Pore Size</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      By targeting the muscles responsible for pulling on the skin's surface, Botox can indirectly reduce the appearance of enlarged pores, leading to smoother skin texture.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Preventing Breakouts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      With its ability to regulate sebum production and minimise pore size, Botox can help prevent acne breakouts in the T-Zone area, promoting clearer and healthier-looking skin.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Reducing Shine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      By controlling oil production, Botox can help reduce the unwanted shine often associated with oily skin, giving the T-Zone a more matte appearance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Improving Overall Skin Texture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      With consistent treatment, Botox can contribute to an overall improvement in the texture and appearance of oily skin in the T-Zone, providing a smoother and more refined complexion.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Longer Lasting Makeup & Enhanced Confidence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      With reduced oiliness in the T-zone, makeup tends to last longer and stay in place better throughout the day. A less oily T-zone can lead to improved confidence and self-esteem.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Details with Research */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Can Botox Change Your Skin Type?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Research indicates that Botox injections exhibit a comparable impact on sebaceous glands, inhibiting them from producing sebum.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 mb-12"
              >
                <blockquote className="text-center">
                  <p className="text-xl text-purple-300 italic mb-4">
                    "In a study, neurotoxin injections were found to significantly reduce sebum production in the forehead region, leading to a high level of patient satisfaction."
                  </p>
                  <cite className="text-gray-400">Clinical Research Study</cite>
                </blockquote>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-gray-300">
                  Any perceived changes in skin type are usually due to these effects on specific concerns rather than a direct alteration of skin type itself.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Process Details */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What To Expect During Your Treatment</h2>
              <p className="text-gray-300">A comprehensive overview of your T-zone oily skin Botox experience</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Consultation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Our healthcare provider assesses your skin type, degree of oiliness, and any specific concerns related to the T-zone area.
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
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Treatment Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      A customised treatment plan is devised after assessment of your T-zone area to identify:
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Areas of excessive oil production</li>
                      <li>• Enlarged pores</li>
                      <li>• Potential dynamic wrinkles</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Injection Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Precise Botox injections are administered into areas where oil production is most intense, targeting forehead, nose, and chin with careful attention for optimal results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Minimal Downtime</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Return to your daily activities immediately. No need to pause your life after the procedure - you can get back to your routine right away.
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
                    Once you see the results after 4-6 days, you'll observe a noticeable reduction in daily oil production, allowing for a balanced amount necessary for the skin's essential functions.
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

        {/* Understanding T-Zone Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Understanding T-Zone Oily Skin</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                The T-zone (forehead, nose, and chin) often produces excess oil, leading to enlarged pores, shine, and acne breakouts. 
                Our Botox treatment offers a specialised approach to tackle these concerns at their source.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <p className="text-gray-300">
                  Botox blocks acetylcholine release, reducing sweat and oil production in targeted T-zone areas for balanced skin.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Treatment Process</h3>
                <p className="text-gray-300">
                  Precise injections administered to forehead, nose, and chin areas where oil production is most intense.
                </p>
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
                <h3 className="text-xl font-semibold mb-4">Expected Results</h3>
                <p className="text-gray-300">
                  Notice improvements within a week, with up to 30% oil reduction lasting 4-6 months.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300">Everything you need to know about T-zone oily skin Botox</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border border-gray-700">
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
      </div>
    </>
  );
};

export default OilySkinBotox;