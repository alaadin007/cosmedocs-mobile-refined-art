import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import { generateSEOMetadata } from '@/utils/seo';

const LipFillerDissolve = () => {
  const seoData = generateSEOMetadata(
    "Lip Filler Dissolving London | Expert Hyaluronidase Injections",
    "Safe and effective lip filler dissolving treatments in London. Expert hyaluronidase injections to correct unwanted filler or complications. Book a consultation.",
    "/lip-filler-dissolve"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/6979990b-3579-4571-b139-3501a368919b.png", alt: "Lip filler dissolving before and after", caption: "Immediate volume reduction after hyaluronidase injection" },
    { src: "/lovable-uploads/4208979a-6544-4949-898f-4915a9791946.png", alt: "Lip filler correction", caption: "Correcting migrated filler for a more natural lip shape" },
    { src: "/lovable-uploads/9992894b-4419-4f19-b98c-ca99a940c00c.png", alt: "Lip filler dissolving progression", caption: "Progressive dissolving over 24 hours showing gradual volume loss" },
    { src: "/lovable-uploads/012d959d-8c75-4a11-8259-57e3ac1ca493.png", alt: "Lip filler dissolving results", caption: "Restoring natural lip shape after dissolving overfilled lips" },
    { src: "/lovable-uploads/06549691-a99f-4a9f-a59c-590759bb449c.png", alt: "Lip filler dissolving asymmetry correction", caption: "Correcting asymmetry caused by uneven filler placement" },
    { src: "/lovable-uploads/04b9419a-7929-4b13-b879-4c94269599a9.png", alt: "Lip filler dissolving before new filler", caption: "Dissolving old filler before new lip enhancement treatment" }
  ];

  const faqs = [
    {
      question: "Why might I need my lip fillers dissolved?",
      answer: "Common reasons include overfilled lips, migration of filler, asymmetry, lumps or nodules, vascular occlusion, or simply wanting to revert to your natural lip shape."
    },
    {
      question: "What is hyaluronidase?",
      answer: "Hyaluronidase is an enzyme that breaks down hyaluronic acid, the substance used in most lip fillers. It's a safe and effective way to dissolve unwanted filler."
    },
    {
      question: "Is the dissolving process painful?",
      answer: "We use a very fine needle and can apply topical anaesthetic to minimize discomfort. Most clients report a mild stinging sensation that is well-tolerated."
    },
    {
      question: "How long does it take to see results?",
      answer: "You'll notice immediate volume reduction, with full results visible within 24-48 hours as the hyaluronidase continues to break down the filler."
    },
    {
      question: "Is it safe to get new fillers after dissolving?",
      answer: "Yes, we recommend waiting 2 weeks after dissolving before getting new fillers to allow the lips to fully settle. This ensures optimal placement and results with your new filler."
    },
    {
      question: "Are there any risks or side effects?",
      answer: "Possible side effects include temporary swelling, bruising, redness, or allergic reaction. Our experienced practitioners take every precaution to minimize risks."
    },
    {
      question: "How much does lip filler dissolving cost?",
      answer: "The cost starts from £250. Final pricing depends on the amount of hyaluronidase needed and the complexity of the correction."
    },
    {
      question: "Can you dissolve fillers done at other clinics?",
      answer: "Yes, we can dissolve fillers regardless of where they were originally injected. However, we recommend bringing details of the filler used, if possible."
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
        <meta name="keywords" content="lip filler dissolving London, hyaluronidase injections, lip correction, filler migration, overfilled lips, cosmetic treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert lip filler dissolving treatments in London",
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
        {/* Hero Section with Background Image */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/49549549-49f4-494f-949f-494f494f494f.png')`
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                  Lip Filler
                  <span className="block text-purple-300">Dissolving</span>
                  <span className="block text-sm mt-4">Correct unwanted filler with expert hyaluronidase injections</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow-lg">
                  <span className="text-purple-300 font-semibold">Safe & Effective</span>
                  <br />
                  Restore your natural lip shape with our specialized treatment
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold drop-shadow-lg">Starting from £250</p>
                  <p className="text-sm text-gray-300 drop-shadow-lg">#lipdissolve - See our before & after gallery for real patient results</p>
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
                See how our expert lip filler dissolving treatments can correct unwanted filler, 
                restore natural lip shape, and enhance your overall appearance.
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
                triggerLabel="View Full Gallery"
                title="Lip Filler Dissolving Results"
                description="Comprehensive gallery of our lip correction treatments"
              />
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Lip Filler Dissolving Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">30-45 minutes including consultation</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">Permanent removal of hyaluronic acid filler</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">Minimal downtime, possible swelling for 24-48 hours</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Anaesthesia</h3>
                    <p className="text-gray-300">Topical anaesthetic available</p>
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
                    <CardTitle className="text-white">Why Choose Cosmedocs?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Experienced medical professionals</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Safe and effective hyaluronidase injections</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Personalized treatment plans</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Comprehensive aftercare and support</p>
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
                Get answers to common questions about lip filler dissolving treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Correct Your Lip Filler?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how lip filler 
                dissolving can restore your natural lip shape and enhance your confidence.
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

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Cosmedocs Harley Street clinic offers expert lip filler dissolving treatments in London using safe and effective hyaluronidase injections. Our experienced cosmetic doctors specialize in correcting overfilled lips, filler migration, asymmetry, and other lip filler complications. Located at 10 Harley Street, we provide personalized treatment plans and comprehensive aftercare. Our lip filler dissolving procedures can restore your natural lip shape and enhance your confidence. We use a very fine needle and can apply topical anaesthetic to minimize discomfort. Results are visible within 24-48 hours. We can dissolve fillers regardless of where they were originally injected. Book your lip filler dissolving consultation today by calling 0333 0551 503 or visiting our Harley Street clinic. We offer competitive pricing and flexible payment options for all lip correction treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default LipFillerDissolve;
