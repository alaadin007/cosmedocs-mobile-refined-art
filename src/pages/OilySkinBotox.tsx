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

        {/* Before & After Gallery */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">T-Zone Oily Skin Botox Before and After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See real results from our T-zone oily skin Botox treatments. Achieve balanced oil production and matte complexion.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Regulate Sebum Production</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Botox injections help control excess oil production in the T-zone, reducing shine and promoting a more balanced complexion.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Up to 30% reduction in oil production</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Matte complexion achieved</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Longer-lasting makeup</span>
                      </div>
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
                    <CardTitle className="text-white text-2xl">Minimise Pore Appearance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      By targeting muscles that pull on skin surface, Botox can reduce enlarged pore appearance and improve skin texture.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Reduced pore size appearance</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Smoother skin texture</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Enhanced confidence</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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

        {/* Why Choose Us */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Cosmedocs</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Renowned cosmetic clinic with expert practitioners specialising in innovative skin treatments.
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
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Knowledge</h3>
                <p className="text-gray-300">
                  Specialised understanding of sebaceous gland function and oil production control.
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
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Techniques</h3>
                <p className="text-gray-300">
                  Precise injection techniques ensuring optimal coverage and uniform results.
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
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalised Care</h3>
                <p className="text-gray-300">
                  Customised treatment plans based on your specific T-zone concerns and skin type.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready for Balanced, Matte Skin?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Book your T-zone oily skin Botox consultation and achieve the balanced complexion you've been dreaming of.
              </p>
              <Button 
                onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                className="bg-white text-purple-900 hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OilySkinBotox;