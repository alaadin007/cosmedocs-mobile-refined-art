
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/App";

const LipFillerDissolve = () => {
  const seoData = generateSEOMetadata(
    "Lip Filler Dissolve London | Professional Hyaluronidase Treatment | Cosmedocs",
    "Professional lip filler dissolve treatment in London using hyaluronidase. Expert correction of overfilled or asymmetric lips. Safe dissolving by cosmetic doctors at Harley Street.",
    "/lip-filler-dissolve"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png", 
      alt: "Lip filler dissolve treatment showing natural correction", 
      caption: "Professional lip filler dissolve treatment restoring natural lip proportions"
    },
    { 
      src: "/lovable-uploads/adfd4f5d-0cca-40d0-b159-3a2fcf09289b.png", 
      alt: "Dermal filler complications resolved with hyaluronidase", 
      caption: "Correction of dermal filler complications using professional dissolving treatment"
    },
    { 
      src: "/lovable-uploads/7c749b70-670f-4229-af29-f6e116f32fd2.png", 
      alt: "Overfilled lips dissolved and refilled naturally", 
      caption: "Complete transformation: overfilled lips dissolved and naturally refilled"
    },
    { 
      src: "/lovable-uploads/a41898d8-e615-4717-ae3e-920c384b36ae.png", 
      alt: "Professional filler dissolve and correction treatment", 
      caption: "Expert dissolving and correction of previous filler treatments"
    },
    { 
      src: "/lovable-uploads/1325959d-cb78-4210-ad02-64dd511dc35e.png", 
      alt: "Hyaluronidase treatment progression showing gradual dissolving", 
      caption: "Progressive dissolving with hyaluronidase showing natural restoration over multiple sessions"
    }
  ];

  const faqs = [
    {
      question: "What is lip filler dissolve treatment?",
      answer: "Lip filler dissolve treatment uses hyaluronidase enzyme to break down hyaluronic acid-based dermal fillers. This safe, effective procedure can correct overfilled lips, asymmetry, or unwanted results from previous treatments performed elsewhere."
    },
    {
      question: "How long does lip filler dissolve take?",
      answer: "The dissolving procedure typically takes 15-30 minutes. Results begin within 24-48 hours and continue for up to 2 weeks. Multiple sessions may be needed for complete correction depending on the amount of filler to be dissolved."
    },
    {
      question: "Is lip filler dissolve painful?",
      answer: "The treatment involves minimal discomfort. We use topical anaesthetic and the hyaluronidase injection is quick. Most patients describe it as similar to the original filler injection with mild stinging that subsides quickly."
    },
    {
      question: "How much does lip filler dissolve cost?",
      answer: "Lip filler dissolve treatment at Cosmedocs starts from £300 per session. The total cost depends on the amount of filler to be dissolved and number of sessions required. We provide detailed pricing during consultation."
    },
    {
      question: "Can all types of lip fillers be dissolved?",
      answer: "Hyaluronidase only dissolves hyaluronic acid-based fillers (Juvederm, Restylane, etc.). Permanent fillers or non-hyaluronic acid products cannot be dissolved with this enzyme and may require alternative removal methods."
    },
    {
      question: "What are the side effects of lip filler dissolve?",
      answer: "Common side effects include temporary swelling, bruising, and tenderness at injection sites. Rarely, allergic reactions to hyaluronidase may occur. Our experienced doctors minimize risks through proper assessment and technique."
    },
    {
      question: "When can I get new lip fillers after dissolving?",
      answer: "We typically recommend waiting 2-4 weeks after dissolving treatment before considering new lip fillers. This allows complete healing and accurate assessment of your natural lip structure for optimal new treatment planning."
    },
    {
      question: "Why choose Cosmedocs for lip filler dissolve?",
      answer: "Our expert cosmetic doctors have extensive experience correcting filler complications. We use pharmaceutical-grade hyaluronidase and provide comprehensive aftercare. Many clients come to us to fix treatments performed elsewhere."
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
        <meta name="keywords" content="lip filler dissolve, hyaluronidase, dermal filler removal, lip correction, overfilled lips, London, Harley Street, cosmetic treatment, filler complications" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Professional lip filler dissolve treatments in London",
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
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/20"></div>
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Professional Lip Filler Dissolve Treatment in London
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Expert correction of overfilled, asymmetric, or poorly placed lip fillers using safe hyaluronidase treatment. 
                  Restore your natural lips with our experienced cosmetic doctors at Harley Street.
                </p>
                <div className="mb-6">
                  <p className="text-lg text-red-300 font-semibold">Starting from £300</p>
                  <p className="text-sm text-gray-400">
                    <a 
                      href="https://www.instagram.com/explore/tags/cosmelip/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-300 hover:text-red-200 underline"
                    >
                      #cosmelip
                    </a> - See our correction transformations on Instagram
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                    onClick={() => window.location.href = '/treatments'}
                  >
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="/lovable-uploads/7c749b70-670f-4229-af29-f6e116f32fd2.png" 
                  alt="Professional lip filler dissolve treatment showing overfilled to dissolved to naturally refilled transformation"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Real Dissolve Treatment Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert cosmetic doctors have successfully corrected lip filler complications 
                and restored natural beauty for clients who came to us from other practitioners.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
                triggerLabel="View All Dissolve Results"
                title="Lip Filler Dissolve Results Gallery"
                description="Comprehensive gallery of our professional dissolve and correction treatments"
              />
            </div>
          </div>
        </section>

        {/* Treatment Information */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose Lip Filler Dissolve?</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Correct Previous Treatments</h3>
                    <p className="text-gray-300">Safely dissolve poorly placed, overfilled, or asymmetric lip fillers from other practitioners</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Restore Natural Shape</h3>
                    <p className="text-gray-300">Return to your natural lip proportions before considering new enhancement</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Fix Complications</h3>
                    <p className="text-gray-300">Address lumps, bumps, migration, or vascular compromise safely</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Start Fresh</h3>
                    <p className="text-gray-300">Create a clean canvas for optimal new filler placement by experts</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Treatment Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-white">Consultation & Assessment</h4>
                        <p className="text-gray-300 text-sm">Detailed evaluation of existing filler and treatment planning</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-white">Hyaluronidase Injection</h4>
                        <p className="text-gray-300 text-sm">Precise injection of enzyme to dissolve unwanted filler</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-white">Monitoring & Follow-up</h4>
                        <p className="text-gray-300 text-sm">Regular check-ups to assess progress and plan next steps</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-white">Correction Treatment</h4>
                        <p className="text-gray-300 text-sm">Optional new filler treatment with expert technique (if desired)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expert Information */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Expert Dissolve Treatment</h2>
                <p className="text-gray-300 mb-6">
                  Our cosmetic doctors have extensive experience in correcting filler complications and 
                  dissolving treatments performed by other practitioners. We see many clients who need 
                  correction after unsatisfactory results elsewhere.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Pharmaceutical-grade hyaluronidase only</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Safe, controlled dissolving technique</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Comprehensive aftercare and monitoring</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Option for expert re-treatment once healed</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png" 
                  alt="Professional lip dissolve treatment results showing natural correction"
                  className="rounded-2xl shadow-2xl w-full"
                />
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
                Get answers to common questions about lip filler dissolve treatment at our London clinic.
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
              className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Need Lip Filler Correction?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert cosmetic doctors to assess your lips and discuss 
                safe dissolving options. We specialize in correcting treatments from other practitioners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                >
                  Book Free Consultation
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
            Cosmedocs Harley Street clinic provides expert lip filler dissolve treatment in London using pharmaceutical-grade hyaluronidase enzyme. Our experienced cosmetic doctors specialize in correcting overfilled lips, asymmetric filler placement, and complications from treatments performed by other practitioners. Located at 10 Harley Street, we offer safe, effective lip filler removal with minimal downtime and professional aftercare. Our dissolve treatments use only medical-grade hyaluronidase to break down hyaluronic acid-based dermal fillers including Juvederm, Restylane, and other premium brands. We provide comprehensive correction services including filler dissolving, complication management, lip restoration, and expert re-treatment options. Our practitioners have extensive experience in aesthetic emergency management and corrective procedures. Lip filler dissolve procedures typically take 15-30 minutes with results visible within 24-48 hours and complete dissolution within 2 weeks. We offer detailed consultation, professional assessment, and comprehensive aftercare to ensure optimal healing and patient satisfaction. Many clients come to us to correct unsatisfactory results from other clinics. Book your lip filler dissolve consultation today by calling 0333 0551 503 or visiting our Harley Street clinic. We offer competitive pricing starting from £300 and flexible payment options for all correction treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default LipFillerDissolve;
