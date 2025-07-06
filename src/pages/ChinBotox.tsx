import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

const ChinBotox = () => {
  const seoData = generateSEOMetadata(
    "Chin Botox London | DAO Muscle Treatment | Cosmedocs Harley Street",
    "Expert chin botox treatment in London for sad mouth corners. Professional DAO muscle botox by cosmetic doctors. Natural results at Harley Street clinic.",
    "/chin-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Chin botox before and after treatment", caption: "Chin Botox Treatment: Smooth, refined chin texture eliminating dimpling and cobblestone appearance. Natural results achieved with precision DAO muscle botox - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "What is chin botox and how does it work?",
      answer: "Chin botox involves injecting botulinum toxin into the mentalis muscle and DAO (Depressor Anguli Oris) muscle. This relaxes overactive muscles that cause chin dimpling and downturned mouth corners, creating a smoother, more youthful appearance."
    },
    {
      question: "What is the DAO muscle and why treat it?",
      answer: "The DAO (Depressor Anguli Oris) muscle pulls down the corners of your mouth, creating a sad or stern expression. Treating this muscle with botox helps lift the mouth corners, creating a more pleasant, relaxed facial expression naturally."
    },
    {
      question: "How long do chin botox results last?",
      answer: "Chin botox results typically last 3-4 months. The duration depends on your metabolism, muscle strength, and lifestyle factors. Regular treatments help maintain optimal results and may extend the duration over time."
    },
    {
      question: "Is chin botox painful?",
      answer: "Chin botox involves minimal discomfort. Most clients describe it as a brief pinching sensation. The treatment takes just 10-15 minutes, and we use fine needles to ensure maximum comfort throughout the procedure."
    },
    {
      question: "What can I expect after chin botox treatment?",
      answer: "You may experience mild swelling or redness at injection sites for a few hours. Results begin appearing within 3-5 days, with full effects visible after 2 weeks. Most clients return to normal activities immediately after treatment."
    },
    {
      question: "Am I a good candidate for chin botox?",
      answer: "Ideal candidates have chin dimpling when speaking or smiling, downturned mouth corners, or an overactive mentalis muscle. A consultation with our expert doctors will determine if chin botox is right for your specific concerns."
    },
    {
      question: "How much does chin botox cost?",
      answer: "Chin botox at Cosmedocs costs £175 when done independently, or £50 extra when combined with other botox areas like frown lines, forehead, or crow's feet. We provide transparent pricing during your consultation with no hidden fees."
    },
    {
      question: "Can chin botox be combined with other treatments?",
      answer: "Yes, chin botox works excellently with other facial treatments like dermal fillers, jawline contouring, or other botox areas. Our doctors can create a comprehensive treatment plan tailored to your aesthetic goals."
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
        <meta name="keywords" content="chin botox London, DAO muscle botox, sad mouth corners, chin dimpling, mentalis muscle, Harley Street, cosmetic treatment, facial enhancement" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert chin botox and DAO muscle treatments in London",
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
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Chin Botox
                  <span className="block text-purple-300">DAO Muscle Treatment</span>
                  <span className="block text-sm mt-4">Professional treatment for natural-looking results</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Expert Practitioners</span>
                  <br />
                  Transform sad mouth corners and chin dimpling with invisible art philosophy
                </p>
                
                {/* Animated Tagline */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-400 mb-8 relative"
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
                      art • science • bit of magic
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 blur-sm rounded-lg animate-pulse opacity-50"></span>
                  </span>
                </motion.p>
                
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">From £175</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Results last 4-6 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
                    onClick={() => window.open('https://med.as.me/schedule.php?appointmentType=16864702', '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold"
                    onClick={() => window.open('tel:08008600178', '_self')}
                  >
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-16 bg-gray-900">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-glow">Chin Botox Results</h2>
              <p className="text-xl text-gray-300">Real transformation from our Harley Street clinic</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png"
                  alt="Chin botox before and after treatment"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <p className="text-gray-300 text-center leading-relaxed">
                    <strong className="text-primary-glow">Chin Botox Treatment:</strong> Smooth, refined chin texture eliminating dimpling and cobblestone appearance. Natural results achieved with precision DAO muscle botox - transformation that speaks without saying a word.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="prose prose-lg prose-invert max-w-none"
                >
                  <h2 className="text-3xl font-bold mb-6 text-primary-glow">Understanding Chin Botox and DAO Muscle Treatment</h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Chin botox represents a sophisticated approach to facial aesthetics, specifically targeting the complex interplay of muscles that affect your lower facial expression. At Cosmedocs, our expert cosmetic doctors understand that the chin and mouth area significantly impact your overall facial harmony and emotional expression.
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    The treatment primarily focuses on two key muscle groups: the mentalis muscle in the chin and the DAO (Depressor Anguli Oris) muscle that controls mouth corner positioning. When these muscles become overactive, they create unwanted aesthetic concerns including persistent chin dimpling, downturned mouth corners, and an overall sad or stern facial expression that doesn't reflect your true emotions.
                  </p>

                  <Accordion type="single" collapsible className="space-y-4 mt-8">
                    <AccordionItem value="dao-science" className="bg-gray-800 border-gray-700 rounded-lg px-6">
                      <AccordionTrigger className="text-white hover:text-primary-glow text-left">
                        <h3 className="text-xl font-bold text-primary-glow">The Science Behind DAO Muscle Treatment</h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                          The DAO muscle, short for Depressor Anguli Oris, is a triangular muscle that originates from the mandible and inserts into the corner of the mouth. Its primary function is to depress the angle of the mouth, creating facial expressions associated with sadness, disappointment, or sternness. While this muscle serves important emotional expression purposes, chronic overactivity can result in a permanently downturned appearance, creating what's commonly known as "sad mouth corners."
                        </p>
                        <p>
                          Our chin botox treatment involves precise injections of botulinum toxin into strategic points along the DAO muscle and mentalis muscle. This carefully calibrated approach temporarily relaxes these muscles, allowing the opposing elevator muscles to create a subtle lifting effect on the mouth corners. The result is a more neutral, pleasant resting facial expression that better reflects your natural personality.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="technique" className="bg-gray-800 border-gray-700 rounded-lg px-6">
                      <AccordionTrigger className="text-white hover:text-primary-glow text-left">
                        <h3 className="text-xl font-bold text-primary-glow">Advanced Technique and Natural Results</h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                          At Cosmedocs, we employ advanced injection techniques developed through years of experience in facial anatomy and aesthetic medicine. Our doctors understand that successful chin botox requires not just technical skill, but an artistic eye for facial proportions and muscle dynamics. Each treatment is customized based on your unique facial structure, muscle strength, and aesthetic goals.
                        </p>
                        <p>
                          The treatment process begins with a comprehensive consultation where we analyze your facial expressions, both at rest and during movement. This detailed assessment allows us to identify the specific muscles contributing to your concerns and develop a targeted treatment plan. We consider factors such as your natural facial asymmetries, speaking patterns, and desired level of correction to ensure optimal results.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefits" className="bg-gray-800 border-gray-700 rounded-lg px-6">
                      <AccordionTrigger className="text-white hover:text-primary-glow text-left">
                        <h3 className="text-xl font-bold text-primary-glow">Benefits Beyond Aesthetics</h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                          While the aesthetic improvements from chin botox are immediately apparent, many clients discover additional benefits that extend beyond appearance. Reducing chronic muscle tension in the lower face can alleviate jaw strain and contribute to overall facial comfort. Additionally, the psychological impact of achieving a more pleasant resting expression often enhances confidence and social interactions.
                        </p>
                        <p>
                          Our approach to chin botox embodies Cosmedocs' philosophy of "invisible art" – creating subtle, natural enhancements that improve your appearance without obvious artificial intervention. The goal is not to eliminate all facial expression, but rather to optimize your natural features for a more balanced, youthful, and approachable appearance that truly represents who you are.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 sticky top-6">
                    <CardHeader>
                      <CardTitle className="text-primary-glow">Treatment Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-gray-300">
                      <div>
                        <strong className="text-white">Duration:</strong> 15-20 minutes
                      </div>
                      <div>
                        <strong className="text-white">Results visible:</strong> 3-5 days
                      </div>
                      <div>
                        <strong className="text-white">Duration of results:</strong> 3-4 months
                      </div>
                      <div>
                        <strong className="text-white">Pain level:</strong> Minimal discomfort
                      </div>
                      <div>
                        <strong className="text-white">Downtime:</strong> None required
                      </div>
                      <div>
                        <strong className="text-white">Price from:</strong> £175 (standalone) or +£50 (with other areas)
                      </div>
                      <Button 
                        className="w-full mt-4 bg-primary hover:bg-primary-glow"
                        onClick={() => window.open('https://med.as.me/schedule.php?appointmentType=16864702', '_blank')}
                      >
                        Book Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        {/* Related Chin Treatments Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-glow">Related Chin Treatments</h2>
              <p className="text-xl text-gray-300">Complete your chin transformation with our complementary treatments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary-glow">V-Line Chin Contouring</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Achieve the perfect V-shaped jawline with our advanced contouring treatment. This complementary procedure works beautifully alongside chin botox to create a refined, elegant chin profile that enhances your natural beauty.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        Enhanced jawline definition
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        Natural, elegant contouring
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        Complements chin botox treatment
                      </div>
                    </div>
                    <Button 
                      className="bg-primary hover:bg-primary-glow rounded-full px-6 py-3"
                      onClick={() => window.open('https://med.as.me/schedule.php?appointmentType=16864702', '_blank')}
                    >
                      Learn More About V-Line
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/b71849b7-d2b9-40c0-99c3-4f8589f8341b.png"
                      alt="V-Line chin contouring before and after results"
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-glow">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Everything you need to know about chin botox treatment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-gray-800 border-gray-700 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-primary-glow text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-glow">
                Ready to Transform Your Chin?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how chin botox can enhance your natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-primary hover:bg-primary-glow rounded-full"
                  onClick={() => window.open('https://med.as.me/schedule.php?appointmentType=16864702', '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black rounded-full"
                  onClick={() => window.open('tel:08008600178', '_self')}
                >
                  Call 0800 8600 178
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChinBotox;