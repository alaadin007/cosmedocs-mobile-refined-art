import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";

const ForeheadFillers = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const seoData = generateSEOMetadata(
    "Forehead Fillers London | Your Forehead's Second Chance | Cosmedocs Harley Street",
    "Professional forehead filler treatments in London. Smooth forehead wrinkles, lines and indentations with premium dermal fillers. Expert cosmetic doctors at Harley Street clinic.",
    "/forehead-fillers"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/7e486f38-8f56-40fa-9aea-f86747fd0c21.png", alt: "Forehead fillers before and after showing reduction of forehead lines and wrinkles", caption: "Dramatic reduction in forehead lines with natural-looking smoothing results" },
    { src: "/lovable-uploads/31b1d4a0-b008-41ed-b88f-e2351fccab88.png", alt: "Forehead filler treatment before and after comparison", caption: "Enhanced forehead contour and volume restoration with premium dermal fillers" },
    { src: "/lovable-uploads/f00e769d-0a61-4346-afb5-5c4f46b0a591.png", alt: "Forehead depression filled showing before and after transformation", caption: "Forehead depression successfully filled, creating smooth, natural-looking results" },
  ];

  const faqs = [
    {
      question: "Is filler better than Botox for the forehead?",
      answer: "Both treatments have their benefits, depending on your needs. Botox helps reduce muscle movement that creates wrinkles, while fillers can add volume to deeper lines and address contour issues on the forehead."
    },
    {
      question: "How long does forehead filler last?",
      answer: "When injected into the skin, hyaluronic acid binds with water molecules to hydrate and fill the skin's concavity. These dermal fillers typically last 15-18 months, though they can be dissolved earlier if desired."
    },
    {
      question: "What are the side effects of forehead fillers?",
      answer: "Common side effects may include temporary redness, swelling, bruising, or tenderness at the injection site. These side effects typically subside on their own within a few days to a week."
    },
    {
      question: "How to prepare for forehead filler treatment?",
      answer: "Avoid blood-thinning medications and supplements for a week before treatment. Stay hydrated, avoid alcohol 24 hours prior, and follow all pre-treatment instructions provided by your practitioner."
    },
    {
      question: "Can forehead fillers look overfilled or unnatural?",
      answer: "At Cosmedocs, we administer small amounts gradually, allowing you to observe real-time improvements during the procedure. This ensures natural-looking results that enhance your facial symmetry and contour."
    },
    {
      question: "Can forehead fillers be dissolved if I don't like the results?",
      answer: "Yes, hyaluronic acid fillers can be dissolved using hyaluronidase. This provides a reversible option to adjust or correct the treatment outcome if needed."
    },
    {
      question: "How long does the forehead filler procedure take?",
      answer: "The forehead filler procedure typically takes 15-20 minutes, including consultation, preparation, injection of the filler, and post-procedure instructions. It's often called a 'lunchtime procedure' due to its convenience."
    },
    {
      question: "What causes forehead indentations?",
      answer: "Forehead indentations can be caused by loss of collagen and skin elasticity, excessive sun exposure, genetics, or natural aging processes. These create hollow or depressed areas that affect facial harmony."
    },
    {
      question: "How much do forehead fillers cost?",
      answer: "Forehead fillers at Cosmedocs start from £400. We use premium fillers to deliver lasting, beautiful results. Final pricing depends on the amount of product needed and specific requirements."
    },
    {
      question: "Who is an ideal candidate for forehead fillers?",
      answer: "Ideal candidates include individuals with noticeable forehead lines, wrinkles, or indentations, those looking for non-surgical rejuvenation, people with realistic expectations, and those in good health."
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
        <meta name="keywords" content="forehead fillers London, forehead wrinkles, dermal fillers, Harley Street, cosmetic treatment, forehead lines, hyaluronic acid, forehead contouring, indentation treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert forehead filler treatments in London",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Cosmetic Medicine",
            "priceRange": "££"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Same style as LipFillers */}
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
                  Your Forehead's
                  <span className="block text-purple-300">Second Chance</span>
                  <span className="block text-sm mt-4">Professional forehead enhancement with premium dermal fillers</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £400</p>
                  <p className="text-sm text-gray-300">Smooth forehead wrinkles, lines and restore youthful volume with premium fillers</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-accent">
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
                See the transformative results achieved with our expert forehead filler treatments. 
                Each patient receives personalized care for optimal forehead enhancement outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beforeAfterImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="Forehead Filler Results Gallery"
                description="Comprehensive gallery of our forehead enhancement treatments"
              />
            </div>

            <BeforeAfterImageViewer 
              images={beforeAfterImages}
              isOpen={selectedImageIndex !== null}
              onOpenChange={(open) => !open && setSelectedImageIndex(null)}
              startIndex={selectedImageIndex || 0}
              title="Forehead Filler Results Gallery"
              description="Professional forehead enhancement treatments"
            />
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Understanding Forehead Fillers</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                Forehead fillers are a type of dermal filler specifically designed for the upper face. They effectively 
                reduce the appearance of static lines, creases, forehead wrinkles, and deep forehead wrinkles. Due to their 
                minimal invasiveness and instant results, these fillers are popular in non-surgical cosmetic enhancements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* What Are Forehead Fillers */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">What Are Forehead Fillers?</h3>
                <p className="text-gray-300 mb-6">
                  Forehead fillers involve the injection of a gel-like substance directly into targeted areas to address 
                  moderate to severe facial wrinkles. Depending on their active ingredients—either hyaluronic acid or calcium 
                  hydroxyapatite—these fillers smooth and volumize the skin.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Hyaluronic Acid-Based Fillers</h4>
                      <p className="text-gray-300 text-sm">Natural substance that helps lock in moisture and keep skin hydrated</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Collagen-Based Fillers</h4>
                      <p className="text-gray-300 text-sm">Perfect for restoring elasticity and giving skin a youthful bounce</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Calcium Hydroxyapatite</h4>
                      <p className="text-gray-300 text-sm">Ideal for adding volume and structure with a natural look</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Forehead Filler Indications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">What Can Forehead Fillers Address?</h3>
                <p className="text-gray-300 mb-6">
                  Forehead fillers can enhance your appearance by addressing a variety of concerns, helping you achieve 
                  a more youthful and balanced look.
                </p>
                <div className="space-y-3">
                  {[
                    "Forehead lines and wrinkles",
                    "Frown lines",
                    "Uneven skin texture",
                    "Hollow temples",
                    "Sunken forehead",
                    "Uneven brow height",
                    "Facial asymmetry",
                    "Lack of volume in the forehead",
                    "Deep forehead furrows",
                    "Depressed scars"
                  ].map((indication, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">{indication}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Forehead Fillers */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Forehead Fillers?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Forehead fillers are your go-to solution for a refreshed, youthful appearance! Here's how they can work wonders for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Restore Youthful Volume",
                  description: "Bring back that youthful glow by restoring lost volume and erasing signs of aging"
                },
                {
                  title: "Smooth Away Wrinkles",
                  description: "Say goodbye to forehead lines, wrinkles, and indentations caused by aging and collagen loss"
                },
                {
                  title: "Achieve Perfect Symmetry",
                  description: "Enhance facial harmony by smoothing and balancing your forehead for a more symmetrical look"
                },
                {
                  title: "Non-Surgical Results",
                  description: "Get stunning results without going under the knife—quick, easy, and non-invasive"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black rounded-lg p-6 text-center border border-gray-800"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Information */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Treatment Process */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Treatment Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Consultation</h4>
                        <p className="text-gray-300 text-sm">Detailed assessment of your concerns and aesthetic goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Preparation</h4>
                        <p className="text-gray-300 text-sm">Topical anesthetic applied to minimize discomfort</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Injection</h4>
                        <p className="text-gray-300 text-sm">Precise filler placement using fine needles</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Aftercare</h4>
                        <p className="text-gray-300 text-sm">Post-procedure instructions and follow-up care</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Treatment Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Treatment Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-white mb-1">Procedure Time</h4>
                        <p className="text-gray-300 text-sm">15-20 minutes</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Anesthetic</h4>
                        <p className="text-gray-300 text-sm">Local topical</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Results Duration</h4>
                        <p className="text-gray-300 text-sm">15-18 months</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Recovery</h4>
                        <p className="text-gray-300 text-sm">No downtime</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Back to Work</h4>
                        <p className="text-gray-300 text-sm">Immediate</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Final Results</h4>
                        <p className="text-gray-300 text-sm">1-2 weeks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                Get answers to common questions about forehead filler treatments and what to expect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-black border border-gray-800 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-purple-300">
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Ready for Your Forehead's Second Chance?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert practitioners at Cosmedocs Harley Street. 
                Let us help you achieve natural-looking, beautiful results with premium forehead fillers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <h2>Professional Forehead Filler Treatments in London</h2>
          <p>
            Cosmedocs Harley Street clinic offers the most advanced forehead filler treatments in London, utilizing premium hyaluronic acid-based dermal fillers to address forehead wrinkles, lines, and volume loss. Our experienced cosmetic doctors specialize in forehead contouring and enhancement, providing natural-looking results that restore youthful appearance and facial harmony. The forehead filler procedure is minimally invasive, requiring no downtime, with results lasting 15-18 months. Whether you're dealing with forehead indentations, deep furrows, or loss of volume, our expert practitioners create personalized treatment plans to achieve optimal outcomes. The treatment effectively addresses static wrinkles, hollow temples, uneven brow height, and facial asymmetry. Using only FDA-approved fillers from renowned brands like Juvederm, Teosyal, and Stylage, we ensure safety and efficacy in every procedure. Forehead fillers can be combined with Botox for comprehensive facial rejuvenation, targeting both dynamic and static wrinkles. Our invisible art philosophy ensures subtle, natural enhancement that maintains your unique facial characteristics while improving overall appearance. The procedure takes only 15-20 minutes and provides immediate results, making it an ideal lunchtime treatment. Common side effects are minimal and temporary, including mild swelling, redness, or bruising at injection sites. Recovery is immediate with no downtime required, allowing patients to return to normal activities right away. The hyaluronic acid fillers we use can be dissolved if needed, providing peace of mind and flexibility. Our practitioners assess each patient's facial anatomy and aesthetic goals to recommend the optimal filler type and amount. Forehead fillers restore collagen production, improve skin texture, and provide long-lasting volume enhancement. The treatment is suitable for both men and women seeking non-surgical facial rejuvenation. Pre-treatment consultation includes detailed assessment, medical history review, and realistic expectation setting. Post-treatment care instructions help optimize results and minimize potential side effects. Our Harley Street location provides a premium treatment environment with state-of-the-art facilities and the highest safety standards.
          </p>
        </div>
      </div>
    </>
  );
};

export default ForeheadFillers;