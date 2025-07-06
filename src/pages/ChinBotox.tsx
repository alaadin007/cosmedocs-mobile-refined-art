import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";

const ChinBotox = () => {
  const seoData = generateSEOMetadata(
    "Chin Botox London | DAO Muscle Treatment | Cosmedocs Harley Street",
    "Expert chin botox treatment in London for sad mouth corners. Professional DAO muscle botox by cosmetic doctors. Natural results at Harley Street clinic.",
    "/chin-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png", alt: "Chin botox before and after", caption: "Transformation showing lifted mouth corners and improved chin contour" },
    { src: "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png", alt: "DAO muscle botox results", caption: "Enhanced facial harmony with reduced downturned mouth appearance" },
    { src: "/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png", alt: "Natural chin enhancement", caption: "Subtle, natural-looking chin improvement maintaining facial balance" }
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
      answer: "Chin botox at Cosmedocs starts from £280. The final cost depends on the number of units required and specific treatment areas. We provide transparent pricing during your consultation with no hidden fees."
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
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Chin Botox
                  <span className="block text-primary-glow">London</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                  Transform sad mouth corners and chin dimpling with expert DAO muscle botox treatment. Our aesthetics is invisible art.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-4 bg-primary hover:bg-primary-glow text-white rounded-full transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('https://med.as.me/schedule.php?appointmentType=16864702', '_blank')}
                  >
                    Book Free Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300"
                    onClick={() => window.open('tel:08008600178', '_self')}
                  >
                    Call Now
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10">
                  <img 
                    src="/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png" 
                    alt="Chin botox treatment results" 
                    className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-lg blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
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

                  <h3 className="text-2xl font-bold mb-4 text-primary-glow">The Science Behind DAO Muscle Treatment</h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    The DAO muscle, short for Depressor Anguli Oris, is a triangular muscle that originates from the mandible and inserts into the corner of the mouth. Its primary function is to depress the angle of the mouth, creating facial expressions associated with sadness, disappointment, or sternness. While this muscle serves important emotional expression purposes, chronic overactivity can result in a permanently downturned appearance, creating what's commonly known as "sad mouth corners."
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our chin botox treatment involves precise injections of botulinum toxin into strategic points along the DAO muscle and mentalis muscle. This carefully calibrated approach temporarily relaxes these muscles, allowing the opposing elevator muscles to create a subtle lifting effect on the mouth corners. The result is a more neutral, pleasant resting facial expression that better reflects your natural personality.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-primary-glow">Advanced Technique and Natural Results</h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    At Cosmedocs, we employ advanced injection techniques developed through years of experience in facial anatomy and aesthetic medicine. Our doctors understand that successful chin botox requires not just technical skill, but an artistic eye for facial proportions and muscle dynamics. Each treatment is customized based on your unique facial structure, muscle strength, and aesthetic goals.
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    The treatment process begins with a comprehensive consultation where we analyze your facial expressions, both at rest and during movement. This detailed assessment allows us to identify the specific muscles contributing to your concerns and develop a targeted treatment plan. We consider factors such as your natural facial asymmetries, speaking patterns, and desired level of correction to ensure optimal results.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-primary-glow">Benefits Beyond Aesthetics</h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    While the aesthetic improvements from chin botox are immediately apparent, many clients discover additional benefits that extend beyond appearance. Reducing chronic muscle tension in the lower face can alleviate jaw strain and contribute to overall facial comfort. Additionally, the psychological impact of achieving a more pleasant resting expression often enhances confidence and social interactions.
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our approach to chin botox embodies Cosmedocs' philosophy of "invisible art" – creating subtle, natural enhancements that improve your appearance without obvious artificial intervention. The goal is not to eliminate all facial expression, but rather to optimize your natural features for a more balanced, youthful, and approachable appearance that truly represents who you are.
                  </p>
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
                        <strong className="text-white">Price from:</strong> £280
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

        {/* Before & After Gallery */}
        <section className="py-20 bg-gray-900">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-glow">Chin Botox Results</h2>
              <p className="text-xl text-gray-300">Real transformations from our Harley Street clinic</p>
            </motion.div>

            <BeforeAfterImageViewer images={beforeAfterImages} />
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