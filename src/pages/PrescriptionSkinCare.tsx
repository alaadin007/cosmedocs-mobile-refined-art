import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";

const PrescriptionSkinCare = () => {
  const seoData = generateSEOMetadata(
    "Prescription Skin Care London | Cosmeceuticals & CRES System | Cosmedocs",
    "Expert prescription skin care treatments in London. CRES system with retinoids, antioxidants & skin brighteners. Professional cosmeceuticals at Harley Street clinic.",
    "/prescription-skin-care"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png", alt: "Prescription skin care before and after results", caption: "Comprehensive skin transformation with prescription cosmeceuticals" },
    { src: "/lovable-uploads/0e8b6139-9d6a-462d-87fc-8e03bca4e913.png", alt: "Skin brightening treatment results", caption: "Improved skin tone and radiance with targeted skin brighteners" },
    { src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png", alt: "Anti-aging skin care treatment", caption: "Reduced fine lines and improved skin texture with retinoid therapy" },
    { src: "/lovable-uploads/4e5fa552-2a57-4379-924b-179c9c147f37.png", alt: "Pigmentation treatment results", caption: "Significant improvement in hyperpigmentation and skin evenness" },
    { src: "/lovable-uploads/c77267b3-4f58-4e3b-9623-b0d3dc18d413.png", alt: "Acne treatment with prescription skin care", caption: "Clear, refined skin achieved through targeted cosmeceutical protocols" },
    { src: "/lovable-uploads/67e6b1a0-9230-467a-baf0-dd5778c41d45.png", alt: "Overall skin improvement", caption: "Enhanced skin clarity and radiance with CRES system approach" }
  ];

  const faqs = [
    {
      question: "What is the difference between cosmetics and cosmeceuticals?",
      answer: "Cosmetics cannot access deeper skin layers and are unable to make real changes for skin issues. Cosmeceuticals contain scientifically proven 'active' ingredients that can penetrate deeper and provide therapeutic benefits for skin conditions like acne, pigmentation, and aging."
    },
    {
      question: "What is the CRES system?",
      answer: "CRES is our exclusive skin care protocol: Clear pores of oil and debris, Revitalise skin color and tone with antioxidants, Exfoliate dead skin cells with AHA/BHA, and Stimulate collagen production with retinoids and peptides."
    },
    {
      question: "How long does it take to see results?",
      answer: "Typically 1-2 months for noticeable improvements. However, some patients see initial changes within 2-4 weeks. Results depend on skin condition, treatment adherence, and individual skin response."
    },
    {
      question: "Are prescription skin care products safe?",
      answer: "Yes, when prescribed and monitored by qualified professionals. Our cosmeceuticals are rigorously tested and use clinically proven ingredients. We provide detailed guidance on proper usage and monitor your progress."
    },
    {
      question: "What skin conditions can be treated?",
      answer: "We treat aging signs, dryness, acne, hyperpigmentation, sun damage, scarring, fine lines, and uneven skin tone. Our CRES system is tailored to address your specific skin concerns."
    },
    {
      question: "Do I need a consultation?",
      answer: "Yes, a consultation is essential to assess your skin type, concerns, and create a personalized treatment plan. We recommend products based on your specific needs and provide ongoing support."
    },
    {
      question: "What brands do you use?",
      answer: "We use highly approved cosmeceutical brands including Obagi, NeoStrata, SkinCeuticals, Glo Therapeutics, Cosmetic Skin Solutions, and our exclusive Harley Street Formulations."
    },
    {
      question: "Can I combine prescription skin care with other treatments?",
      answer: "Yes, we often combine cosmeceuticals with treatments like chemical peels, microneedling, lasers, or IPL for enhanced results. We create comprehensive treatment programs tailored to your goals."
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
        <meta name="keywords" content="prescription skin care, cosmeceuticals, CRES system, retinoids, antioxidants, skin brighteners, London, Harley Street, skin care treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert prescription skin care and cosmeceutical treatments in London",
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
        {/* Hero Section - Matching LipFillers style */}
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
                  Prescription
                  <span className="block text-purple-300">Skin Care</span>
                  <span className="block text-sm mt-4">Cosmeceuticals with proven active ingredients</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">CRES System Protocol</p>
                  <p className="text-sm text-gray-300">Clear • Revitalise • Exfoliate • Stimulate</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Treatment Guide
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* CRES System Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Exclusive CRES System</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our protocols for skin conditions are based on years of experience dealing with anti-aging, 
                pigmentation and acne. The ultimate goal is to achieve clear, radiant glowing skin.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  letter: "C",
                  title: "Clear",
                  description: "Pores of oil, dead skin and debris with cleansers containing AHA/BHA or skin peels",
                  ingredients: ["Hydroquinone", "Kojic Acid", "Mandelic Acid"]
                },
                {
                  letter: "R",
                  title: "Revitalise",
                  description: "Skin color and uneven tone with powerful antioxidants and skin brighteners",
                  ingredients: ["Vitamin C & E", "Hyaluronic Acid", "Obagi Clarifying Serum"]
                },
                {
                  letter: "E",
                  title: "Exfoliate",
                  description: "Dead unwanted skin cells with AHA/BHA fruit acid gels and enzyme treatments",
                  ingredients: ["Glycolic Acid", "Lactic Acid", "Citric Acid"]
                },
                {
                  letter: "S",
                  title: "Stimulate",
                  description: "Fibroblasts to produce new collagen with retinoids and peptides",
                  ingredients: ["Retinoids", "Peptides", "Vitamin C"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-purple-500/20 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{item.letter}</span>
                      </div>
                      <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.ingredients.map((ingredient, i) => (
                          <div key={i} className="text-sm text-purple-300 bg-purple-900/20 rounded-full px-3 py-1">
                            {ingredient}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Real Patient Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the remarkable transformations achieved with our prescription skin care treatments. 
                Each program is tailored to address specific skin concerns and conditions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfterImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Treatment Results"
                title="Prescription Skin Care Results Gallery"
                description="Comprehensive gallery of our cosmeceutical treatment outcomes"
              />
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Consultation Time</h3>
                    <p className="text-gray-300">45-60 minutes for comprehensive assessment</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Timeline</h3>
                    <p className="text-gray-300">1-2 months for visible improvements</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">No downtime, continue daily activities</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Application</h3>
                    <p className="text-gray-300">Daily use at home with professional guidance</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Why Choose Cosmedocs?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Exclusive CRES system protocols</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Premium cosmeceutical brands: Obagi, SkinCeuticals, NeoStrata</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Personalized treatment programs for each skin type</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Scientifically proven active ingredients</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Ongoing professional monitoring and support</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
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
                Get answers to common questions about prescription skin care and cosmeceutical treatments.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-accent rounded-lg border-gray-800">
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
        <section className="py-20 bg-accent">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our skin care specialists and discover how prescription 
                cosmeceuticals can address your specific skin concerns with our exclusive CRES system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  Book Skin Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Prescription skin care treatments at Cosmedocs combine the science of cosmeceuticals with our exclusive CRES system 
            for comprehensive skin improvement. Our London clinic specializes in prescription-grade skin care products including 
            retinoids, antioxidants, and skin brighteners from leading brands like Obagi, SkinCeuticals, and NeoStrata. 
            The CRES system (Clear, Revitalise, Exfoliate, Stimulate) provides a systematic approach to treating acne, 
            pigmentation, aging, and other skin concerns. Located on Harley Street, our cosmetic doctors create personalized 
            treatment programs using scientifically proven active ingredients. Prescription skin care offers superior results 
            compared to over-the-counter cosmetics, with ingredients that can penetrate deeper skin layers for lasting 
            improvements. Our cosmeceutical treatments address signs of aging, dryness, acne, pigmentation, sun damage, 
            scarring, and fine lines. The CRES protocol begins with clearing pores using AHA/BHA cleansers, followed by 
            revitalizing skin tone with powerful antioxidants, exfoliating dead skin cells with fruit acids, and stimulating 
            collagen production with retinoids and peptides. Professional skin care consultation ensures proper product 
            selection and monitoring for optimal results. Prescription skin care ingredients include hydroquinone for 
            pigmentation, kojic acid for skin lightening, mandelic acid for acne treatment, vitamin C and E antioxidants, 
            hyaluronic acid for hydration, retinoids for anti-aging, and peptides for collagen stimulation. 
            Cosmedocs aesthetic medicine philosophy of invisible art ensures natural-looking results that enhance your 
            skin's health and appearance.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrescriptionSkinCare;