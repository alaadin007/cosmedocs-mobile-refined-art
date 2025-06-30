
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import AutoLinkedText from '@/components/AutoLinkedText';
import { generateSEOMetadata } from '@/utils/seo';

const MarionnetteLines = () => {
  const seoData = generateSEOMetadata(
    "Marionette Lines Filler London | Dermal Fillers | Cosmedocs",
    "Transform marionette lines with expert dermal filler treatments in London. Smooth vertical lines from mouth to chin for a youthful appearance. Book consultation today.",
    "/marionette-lines"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/64ee3f9e-7616-464d-962f-0a5ba656a82c.png", 
      alt: "Marionette lines before and after dermal filler treatment", 
      caption: "Dramatic reduction in marionette lines with expert dermal filler placement" 
    },
    { 
      src: "/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png", 
      alt: "Marionette lines filler results", 
      caption: "Natural-looking smoothing of mouth-to-chin lines" 
    },
    { 
      src: "/lovable-uploads/a4df5f90-dda5-48a2-9bd2-19728aa1a275.png", 
      alt: "Marionette lines treatment before after", 
      caption: "Restored facial contours and youthful appearance" 
    }
  ];

  const faqs = [
    {
      question: "What are marionette lines?",
      answer: "Marionette lines are vertical creases that extend from the corners of the mouth down to the chin. Named after marionette puppets, these lines can make you appear sad or aged, even when you're not expressing those emotions."
    },
    {
      question: "How do dermal fillers treat marionette lines?",
      answer: "Dermal fillers containing hyaluronic acid are strategically injected along the marionette lines to restore volume, smooth the creases, and lift the corners of the mouth. This creates a more youthful and positive facial expression."
    },
    {
      question: "How long do marionette line filler results last?",
      answer: "Results typically last 12-18 months, depending on the type of filler used, your metabolism, and lifestyle factors. The deep placement of fillers in this area often provides longer-lasting results."
    },
    {
      question: "Is marionette line filler treatment painful?",
      answer: "Most patients experience minimal discomfort as we use ultra-fine needles and premium fillers often containing lidocaine for comfort. Topical anaesthetic can also be applied if needed."
    },
    {
      question: "What's the recovery time for marionette line fillers?",
      answer: "There's minimal downtime with most patients returning to normal activities immediately. Some temporary swelling or bruising may occur but typically resolves within 3-7 days."
    },
    {
      question: "How much does marionette line filler cost?",
      answer: "Marionette line filler treatment starts from £325 per ml. The exact cost depends on the amount of filler needed, which will be determined during your consultation based on your individual needs."
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
        <meta name="keywords" content="marionette lines filler London, mouth to chin lines, dermal fillers, facial rejuvenation, anti-aging treatment, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert marionette line filler treatments in London",
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
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/64ee3f9e-7616-464d-962f-0a5ba656a82c.png')`
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
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
                  Marionette Lines
                  <span className="block text-purple-300">Dermal Fillers</span>
                  <span className="block text-sm mt-4 font-normal">Smooth vertical lines from mouth to chin</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow-lg">
                  <span className="text-purple-300 font-semibold">Our aesthetics is invisible art</span>
                  <br />
                  <span className="text-lg">Bold • Natural • Always Your Way</span>
                  <br />
                  Transform downturned expressions into youthful confidence
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold drop-shadow-lg">From £325/ml</p>
                  <p className="text-sm text-gray-300 drop-shadow-lg">30-45 minutes • Results last 12-18 months • Natural enhancement</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Before & After
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">About Marionette Lines Treatment</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Marionette lines are the vertical creases that run from the corners of your mouth down towards your chin. These lines can create a perpetually sad or aged appearance, even when you're feeling happy and confident.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  <AutoLinkedText>Our expert dermal filler treatment</AutoLinkedText> uses premium hyaluronic acid fillers to restore volume and smooth these lines, creating a more youthful and positive facial expression that reflects how you truly feel.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Immediate visible improvement</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Natural-looking results</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Long-lasting enhancement</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="/lovable-uploads/64ee3f9e-7616-464d-962f-0a5ba656a82c.png" 
                  alt="Marionette lines dermal filler treatment results"
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
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
              <h2 className="text-4xl font-bold mb-6">Marionette Lines Transformation Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                See how our expert <AutoLinkedText>dermal filler treatments</AutoLinkedText> smooth marionette lines for natural, youthful results.
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View Complete Gallery"
                title="Marionette Lines Filler Results"
                description="Comprehensive collection of our marionette line treatments"
              />
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
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Get expert answers about marionette line <AutoLinkedText>dermal filler treatment</AutoLinkedText> from our experienced practitioners.
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
                      <AutoLinkedText>{faq.answer}</AutoLinkedText>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Smooth Your Marionette Lines?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Book your consultation with our expert practitioners and discover how marionette line fillers can restore your youthful, positive expression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Expert Marionette Lines Treatment in London</h3>
          <p>
            Cosmedocs offers advanced marionette line dermal filler treatments at our prestigious Harley Street clinic in London. Our experienced cosmetic doctors specialize in smoothing vertical lines that extend from the corners of the mouth to the chin, creating a more youthful and positive facial expression. Marionette lines can develop due to natural aging, loss of facial volume, repeated facial expressions, and decreased collagen production. These lines often make individuals appear sad or aged, even when they're feeling happy and confident. Our expert treatment approach uses premium hyaluronic acid dermal fillers strategically placed along the marionette lines to restore volume, smooth creases, and lift the corners of the mouth. The procedure typically takes 30-45 minutes and provides immediate visible improvement with natural-looking results that last 12-18 months. We use ultra-fine needles and premium fillers containing lidocaine for maximum comfort during treatment. Most patients experience minimal discomfort and can return to normal activities immediately. Some temporary swelling or bruising may occur but typically resolves within 3-7 days. Our consultation process includes comprehensive facial assessment to determine the optimal treatment approach for your individual needs. We pride ourselves on achieving natural-looking results that enhance your features without appearing overdone. Book your consultation today to discover how marionette line fillers can restore your youthful confidence and positive expression.
          </p>
        </div>
      </div>
    </>
  );
};

export default MarionnetteLines;
