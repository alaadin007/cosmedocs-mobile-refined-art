
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import FAQSchema from '@/components/seo/FAQSchema';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, Shield, Star } from "lucide-react";

const MedicalAnalBleaching = () => {
  const seoData = generateSEOMetadata(
    "Medical Anal Bleaching London | Expert Hyperpigmentation Treatment",
    "Safe medical anal bleaching for hyperpigmentation. Discreet Harley Street clinic. Guaranteed results. Medical-grade treatment.",
    "/medical-anal-bleaching"
  );

  const faqs = [
    {
      question: "What is medical anal bleaching?",
      answer: "Medical anal bleaching is a safe, professional treatment designed to reduce hyperpigmentation in the anal area. This common cosmetic concern affects many individuals and can be effectively addressed through our advanced medical techniques using medical-grade products."
    },
    {
      question: "Is the treatment safe?",
      answer: "Yes, our medical anal bleaching treatment is completely safe when performed by qualified medical professionals. We use medical-grade products and follow strict safety protocols to ensure optimal results with minimal risk."
    },
    {
      question: "How long does the treatment take?",
      answer: "The treatment typically takes 45 minutes including consultation and preparation. The actual application process is quick and comfortable, performed in our private treatment rooms."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most patients see significant improvement after 2-4 sessions, depending on the level of hyperpigmentation. Our medical professionals will assess your individual needs during the consultation and create a personalized treatment plan."
    },
    {
      question: "Is the treatment painful?",
      answer: "The treatment is generally well-tolerated with minimal discomfort. Most patients describe a slight tingling sensation during application. We prioritize your comfort throughout the entire process."
    },
    {
      question: "How long do results last?",
      answer: "Results are long-lasting, typically maintaining for 12-18 months. The longevity depends on individual factors such as skin type, lifestyle, and aftercare adherence. Maintenance treatments can help preserve results."
    },
    {
      question: "What can I expect during recovery?",
      answer: "Recovery is minimal with this non-invasive treatment. You may experience slight sensitivity for 24-48 hours. We provide comprehensive aftercare instructions to ensure optimal healing and results."
    },
    {
      question: "Is the consultation confidential?",
      answer: "Absolutely. We maintain the highest standards of privacy and discretion. All consultations and treatments are conducted in private rooms by professional medical staff who understand the sensitive nature of intimate treatments."
    },
    {
      question: "What makes Cosmedocs different?",
      answer: "Our expert medical professionals use advanced techniques with medical-grade products. We provide complete privacy, natural-looking results, and comprehensive aftercare support. Our aesthetics is invisible art - enhancing your confidence discreetly."
    },
    {
      question: "Can I return to normal activities immediately?",
      answer: "Yes, there is no downtime required. You can return to your normal activities immediately after treatment. We provide specific aftercare guidelines to ensure optimal results and comfort."
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
        <meta name="keywords" content="medical anal bleaching London, hyperpigmentation treatment, intimate skin treatment, anal lightening, cosmetic dermatology, discreet treatment, Harley Street, safe anal bleaching, medical grade treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Safe and effective medical anal bleaching treatment for hyperpigmentation",
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
      </Helmet>
      <FAQSchema faqs={faqs} />

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
                  <span className="text-purple-300">Medical Anal Bleaching</span>
                  <span className="block text-sm mt-4">Professional hyperpigmentation treatment with complete discretion</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Intimate Treatment</p>
                  <p className="text-sm text-gray-300">Safe, effective, and discreet medical treatment for natural-looking results</p>
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
                    onClick={() => document.getElementById('treatment-info-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
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
              <h2 className="text-3xl font-bold mb-8 text-white">Treatment Overview</h2>
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
                <p className="text-gray-300">45 minutes including consultation</p>
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
                <p className="text-gray-300">12-18 months with proper aftercare</p>
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
                <p className="text-gray-300">No downtime, return to activities immediately</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Safety</h3>
                <p className="text-gray-300">Medical-grade treatment, completely safe</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Information */}
        <section id="treatment-info-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What is Medical Anal Bleaching?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Professional treatment designed to reduce hyperpigmentation in the anal area using advanced medical techniques 
                and medical-grade products for safe, natural-looking results.
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
                    <CardTitle className="text-white text-2xl">Professional Treatment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Medical anal bleaching is a safe, professional treatment designed to reduce hyperpigmentation 
                      in the anal area. This common cosmetic concern affects many individuals and can be effectively 
                      addressed through our advanced medical techniques.
                    </p>
                    <p className="text-gray-300">
                      Our aesthetics is invisible art - creating natural-looking results that enhance your confidence 
                      while maintaining complete discretion throughout the treatment process.
                    </p>
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
                    <CardTitle className="text-white text-2xl">Treatment Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Our medical anal bleaching treatment utilises advanced topical solutions specifically 
                      formulated for intimate areas. The procedure involves careful application by trained 
                      medical professionals in our sterile treatment rooms.
                    </p>
                    <p className="text-gray-300">
                      Each session includes thorough consultation, skin assessment, and personalised treatment 
                      planning to ensure optimal results whilst maintaining the highest safety standards.
                    </p>
                  </CardContent>
                </Card>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Treatment Benefits</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Experience the advantages of professional medical anal bleaching with our expert team and advanced techniques.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-400 h-full">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-white">Medical Grade Safety</h3>
                    <p className="text-gray-300 text-sm">Professional treatment using medical-grade products with proven safety records</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-400 h-full">
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-white">Complete Discretion</h3>
                    <p className="text-gray-300 text-sm">Private treatment rooms and confidential consultations with professional medical staff</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-400 h-full">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-white">Natural Results</h3>
                    <p className="text-gray-300 text-sm">Gradual lightening for natural-looking results that enhance confidence and comfort</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-400 h-full">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-white">No Downtime</h3>
                    <p className="text-gray-300 text-sm">Return to normal activities immediately with minimal recovery requirements</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-400 h-full">
                  <CardContent className="p-6 text-center">
                    <Palette className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-white">Long-lasting Results</h3>
                    <p className="text-gray-300 text-sm">Results maintain for 12-18 months with proper aftercare and maintenance</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-400 h-full">
                  <CardContent className="p-6 text-center">
                    <Syringe className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-white">Personalised Care</h3>
                    <p className="text-gray-300 text-sm">Customised treatment plans tailored to individual needs and desired outcomes</p>
                  </CardContent>
                </Card>
              </motion.div>
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
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Medical Expertise</h3>
                <p className="text-gray-300">Qualified medical professionals with expertise in intimate treatments</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Complete Privacy</h3>
                <p className="text-gray-300">Private treatment rooms with absolute discretion and confidentiality</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Premium Products</h3>
                <p className="text-gray-300">Medical-grade treatments and advanced technology for optimal results</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Natural Philosophy</h3>
                <p className="text-gray-300">'Invisible art' approach for natural-looking enhancement</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Care</h3>
                <p className="text-gray-300">Full aftercare support and follow-up for peace of mind</p>
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
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about anal bleaching treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Professional Treatment?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your confidential consultation with our expert medical professionals and discover 
                how medical anal bleaching can enhance your confidence with natural-looking results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Medical Anal Bleaching London Birmingham Manchester Cardiff</h2>
          <p>
            Medical anal bleaching London hyperpigmentation treatment safe effective discreet Harley Street 
            clinic professional physicians advanced techniques natural results cosmedocs aesthetic medicine 
            anal lightening treatment medical grade bleaching anal skin discoloration treatment intimate 
            area lightening London birmingham manchester cardiff anal hyperpigmentation removal professional 
            anal bleaching clinic medical anal lightening treatment safe anal bleaching London expert 
            physicians intimate skin treatment anal area enhancement cosmetic dermatology anal region 
            treatment professional medical bleaching anal skin tone correction intimate area aesthetics 
            medical anal enhancement treatment discreet intimate treatment London anal skin lightening 
            medical hyperpigmentation treatment anal area cosmetic treatment professional intimate care 
            anal bleaching specialists London medical intimate enhancement anal skin improvement treatment 
            safe medical anal lightening cosmetic anal treatment professional anal aesthetics medical 
            grade anal bleaching intimate skin enhancement London anal hyperpigmentation specialists 
            medical intimate treatment professional anal skin care anal area medical treatment cosmedocs 
            anal bleaching clinic London Birmingham Manchester Cardiff professional medical anal treatment.
          </p>
        </div>
      </div>
    </>
  );
};

export default MedicalAnalBleaching;
