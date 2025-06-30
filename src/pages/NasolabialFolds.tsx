
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import AutoLinkedText from '@/components/AutoLinkedText';
import { generateSEOMetadata } from '@/utils/seo';

const NasolabialFolds = () => {
  const seoData = generateSEOMetadata(
    "Nasolabial Folds Filler London | Smile Lines Treatment | Cosmedocs",
    "Reduce nasolabial folds (smile lines) with expert dermal filler treatments in London. Smooth nose-to-mouth lines for natural, youthful results. Book consultation today.",
    "/nasolabial-folds"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png", 
      alt: "Nasolabial folds before and after dermal filler treatment", 
      caption: "Dramatic smoothing of smile lines with natural-looking results" 
    },
    { 
      src: "/lovable-uploads/a4df5f90-dda5-48a2-9bd2-19728aa1a275.png", 
      alt: "Nasolabial folds filler results", 
      caption: "Restored facial harmony and youthful appearance" 
    },
    { 
      src: "/lovable-uploads/64ee3f9e-7616-464d-962f-0a5ba656a82c.png", 
      alt: "Smile lines treatment before after", 
      caption: "Expert filler placement for seamless facial rejuvenation" 
    }
  ];

  const faqs = [
    {
      question: "What are nasolabial folds?",
      answer: "Nasolabial folds, also known as smile lines or laugh lines, are the creases that run from the sides of the nose down to the corners of the mouth. They become more pronounced with age due to volume loss and decreased skin elasticity."
    },
    {
      question: "How do dermal fillers treat nasolabial folds?",
      answer: "Dermal fillers containing hyaluronic acid are carefully injected along the nasolabial folds to restore lost volume, smooth the creases, and create a more youthful transition from the nose to the mouth area."
    },
    {
      question: "How long do nasolabial fold filler results last?",
      answer: "Results typically last 12-18 months, depending on the type of filler used, your individual metabolism, lifestyle factors, and the depth of the original folds. Touch-up treatments help maintain optimal results."
    },
    {
      question: "Is nasolabial fold filler treatment painful?",
      answer: "Most patients experience minimal discomfort as we use ultra-fine needles and premium fillers that often contain lidocaine for comfort. Topical anaesthetic can also be applied if needed for sensitive patients."
    },
    {
      question: "What's the recovery time for nasolabial fold fillers?",
      answer: "There's minimal downtime with most patients returning to normal activities immediately. Some temporary swelling, redness, or minor bruising may occur but typically resolves within 2-7 days."
    },
    {
      question: "How much does nasolabial fold filler cost?",
      answer: "Nasolabial fold filler treatment starts from £325 per ml. The exact amount needed varies depending on the depth of your folds and desired results, which will be assessed during your consultation."
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
        <meta name="keywords" content="nasolabial folds filler London, smile lines treatment, laugh lines, dermal fillers, facial rejuvenation, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert nasolabial fold filler treatments in London",
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
              backgroundImage: `url('/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png')`
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
                  Nasolabial Folds
                  <span className="block text-purple-300">Dermal Fillers</span>
                  <span className="block text-sm mt-4 font-normal">Smooth smile lines for natural rejuvenation</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow-lg">
                  <span className="text-purple-300 font-semibold">Our aesthetics is invisible art</span>
                  <br />
                  <span className="text-lg">Bold • Natural • Always Your Way</span>
                  <br />
                  Transform prominent smile lines into subtle, youthful contours
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold drop-shadow-lg">From £325/ml</p>
                  <p className="text-sm text-gray-300 drop-shadow-lg">30-45 minutes • Results last 12-18 months • Immediate improvement</p>
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
                <h2 className="text-4xl font-bold mb-6">About Nasolabial Folds Treatment</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Nasolabial folds, commonly known as smile lines or laugh lines, are the natural creases that run from the sides of your nose down to the corners of your mouth. While these lines are normal, they can become more pronounced with age.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  <AutoLinkedText>Our expert dermal filler treatment</AutoLinkedText> uses premium hyaluronic acid to restore volume and smooth these lines, creating a natural transition that maintains your ability to express emotions while reducing the appearance of aging.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Instant visible improvement</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Maintains natural expressions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Long-lasting natural results</p>
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
                  src="/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png" 
                  alt="Nasolabial folds dermal filler treatment results"
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
              <h2 className="text-4xl font-bold mb-6">Nasolabial Folds Transformation Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                See how our expert <AutoLinkedText>dermal filler treatments</AutoLinkedText> smooth nasolabial folds for natural, age-reversing results.
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
                title="Nasolabial Folds Filler Results"
                description="Comprehensive collection of our smile line treatments"
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
                Get expert answers about nasolabial fold <AutoLinkedText>dermal filler treatment</AutoLinkedText> from our experienced practitioners.
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
              <h2 className="text-4xl font-bold mb-6">Ready to Smooth Your Smile Lines?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Book your consultation with our expert practitioners and discover how nasolabial fold fillers can restore your natural, youthful appearance.
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
          <h3>Expert Nasolabial Folds Treatment in London</h3>
          <p>
            Cosmedocs offers advanced nasolabial fold dermal filler treatments at our prestigious Harley Street clinic in London. Our experienced cosmetic doctors specialize in smoothing smile lines and laugh lines using premium hyaluronic acid fillers for natural, long-lasting results. Nasolabial folds develop naturally with age due to volume loss, decreased collagen production, and repetitive facial expressions. These lines can make you appear older or more tired than you feel. Our expert treatment approach involves strategic placement of dermal fillers along the nasolabial folds to restore volume and create smooth transitions from the nose to mouth area. The procedure typically takes 30-45 minutes with immediate visible improvements and results lasting 12-18 months. We use ultra-fine needles and premium fillers containing lidocaine for maximum comfort during treatment. Most patients experience minimal discomfort and return to normal activities immediately. Some temporary swelling or bruising may occur but resolves within 2-7 days. Our consultation includes comprehensive facial assessment to determine optimal treatment approach for your individual needs. We pride ourselves on achieving natural-looking results that enhance your features while maintaining your ability to express emotions naturally. Book your consultation today to discover how nasolabial fold fillers can restore your youthful confidence.
          </p>
        </div>
      </div>
    </>
  );
};

export default NasolabialFolds;
