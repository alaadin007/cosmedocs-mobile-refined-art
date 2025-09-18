import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import { generateSEOMetadata } from '@/utils/seo';

const TrapBotox = () => {
  const seoData = generateSEOMetadata(
    "Trap Botox London | Shoulder Slimming & Neck Contouring",
    "Professional trap botox treatments in London. Reduce shoulder bulk, slim your trapezius muscles, and achieve elegant neck contouring. Book a consultation.",
    "/trap-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/trap-botox-1.png", alt: "Trap botox before and after", caption: "Dramatic shoulder slimming after trap botox treatment" },
    { src: "/lovable-uploads/trap-botox-2.png", alt: "Trapezius muscle contouring", caption: "Enhanced neck line and reduced shoulder bulk" },
    { src: "/lovable-uploads/trap-botox-3.png", alt: "Trap botox progression", caption: "Progressive muscle relaxation over 2-4 weeks" },
    { src: "/lovable-uploads/trap-botox-4.png", alt: "Trap botox results", caption: "Elegant shoulder profile and improved posture" },
    { src: "/lovable-uploads/trap-botox-5.png", alt: "Neck contouring with trap botox", caption: "Refined neck contour and shoulder definition" },
    { src: "/lovable-uploads/trap-botox-6.png", alt: "Shoulder slimming treatment", caption: "Natural-looking shoulder slimming results" }
  ];

  const faqs = [
    {
      question: "What is trap botox?",
      answer: "Trap botox involves injecting botulinum toxin into the trapezius muscles to reduce their size and create a more elegant, slender shoulder profile. It's particularly popular for those who want to reduce shoulder bulk and achieve a more feminine silhouette."
    },
    {
      question: "How does trap botox work?",
      answer: "Botox temporarily relaxes the trapezius muscles, causing them to atrophy slightly over time. This creates a slimming effect on the shoulders and can improve the overall neck and shoulder contour."
    },
    {
      question: "Is trap botox painful?",
      answer: "The treatment involves multiple small injections into the trapezius muscles. Most patients experience mild discomfort, similar to other botox treatments. We use very fine needles to minimize any pain."
    },
    {
      question: "How long do results last?",
      answer: "Results typically last 4-6 months. With regular treatments, the muscles may become smaller over time, potentially extending the duration of results."
    },
    {
      question: "When will I see results?",
      answer: "Initial effects may be noticed within 1-2 weeks, with full results visible after 4-6 weeks as the muscles gradually relax and reduce in size."
    },
    {
      question: "Are there any side effects?",
      answer: "Possible side effects include temporary weakness in the treated area, mild bruising, or headache. Our experienced practitioners minimize risks through precise injection techniques."
    },
    {
      question: "How much does trap botox cost?",
      answer: "The cost starts from £350. Final pricing depends on the amount of botox needed and your individual treatment plan."
    },
    {
      question: "Who is a good candidate for trap botox?",
      answer: "Ideal candidates have well-developed trapezius muscles and desire a more slender shoulder profile. We assess each patient individually during consultation to determine suitability."
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
        <meta name="keywords" content="trap botox London, shoulder slimming, trapezius botox, neck contouring, shoulder reduction, cosmetic treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert trap botox treatments in London",
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
                  Trap
                  <span className="block text-purple-300">Botox</span>
                  <span className="block text-sm mt-4">Elegant shoulder slimming & neck contouring</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow-lg">
                  <span className="text-purple-300 font-semibold">Transform Your Silhouette</span>
                  <br />
                  Achieve refined shoulders and enhanced neck definition
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold drop-shadow-lg">Starting from £350</p>
                  <p className="text-sm text-gray-300 drop-shadow-lg">#trapbotox - See our before & after gallery for real patient results</p>
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
                See how our expert trap botox treatments can slim your shoulders, 
                enhance your neck contour, and create an elegant silhouette.
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
                title="Trap Botox Results"
                description="Comprehensive gallery of our shoulder slimming treatments"
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
                <h2 className="text-3xl font-bold mb-6">Trap Botox Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">30-45 minutes including consultation</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">4-6 months with gradual muscle reduction</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">Minimal downtime, return to normal activities immediately</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Anaesthesia</h3>
                    <p className="text-gray-300">Not required, well-tolerated treatment</p>
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
                      <p className="text-gray-300">Expert cosmetic doctors with extensive experience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Precise injection techniques for optimal results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Personalized treatment plans and aftercare</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Central Harley Street location</p>
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
                Get answers to common questions about trap botox treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Silhouette?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how trap botox 
                can create elegant shoulder contours and enhance your confidence.
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
            Cosmedocs Harley Street clinic offers expert trap botox treatments in London for shoulder slimming and neck contouring. Our experienced cosmetic doctors specialize in trapezius muscle botox injections to create elegant shoulder profiles and refined silhouettes. Located at 10 Harley Street, we provide personalized treatment plans with precise injection techniques. Our trap botox procedures can reduce shoulder bulk, enhance neck definition, and improve overall posture. Results typically last 4-6 months with minimal downtime required. The treatment involves multiple small injections into the trapezius muscles using very fine needles. Book your trap botox consultation today by calling 0333 0551 503 or visiting our Harley Street clinic. We offer competitive pricing starting from £350 and flexible payment options for all shoulder slimming treatments. Our aesthetics is invisible art - bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrapBotox;