
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
    "Marionette Lines Filler London | 10 Years Younger | Liquid Facelift | Cosmedocs",
    "Transform marionette lines with expert dermal filler treatments in London. Part of our liquid facelift for younger individuals in their 30s. Book consultation today.",
    "/marionette-lines"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/7f71ff8d-e186-45d8-a20f-70564764b7ae.png", 
      alt: "Cheek volume enhancement before and after to improve nasolabial folds", 
      caption: "Cheek volume restoration improving nasolabial fold appearance" 
    },
    { 
      src: "/lovable-uploads/765101d1-1ff9-4425-9d8a-da5eb0bcaa17.png", 
      alt: "Marionette lines before and after dermal filler treatment", 
      caption: "Dramatic improvement in marionette lines with expert filler placement" 
    },
    { 
      src: "/lovable-uploads/8470f01b-6e88-46ac-898a-108ce73f9dd5.png", 
      alt: "Before nasolabial creases and mild lip hydration treatment", 
      caption: "Before: Nasolabial creases and lip area assessment" 
    },
    { 
      src: "/lovable-uploads/a51527f8-e826-4789-bd14-3bd8eee153bf.png", 
      alt: "After nasolabial crease and lip hydration treatment", 
      caption: "After: Smooth nasolabial area with enhanced lip hydration" 
    },
    { 
      src: "/lovable-uploads/010185b4-89b2-4e8b-b94b-8187262a436e.png", 
      alt: "Nasolabial folds before and after dermal filler treatment", 
      caption: "Complete transformation of nasolabial folds and smile lines" 
    },
    { 
      src: "/lovable-uploads/d13762c3-0f5e-437a-adb7-7ddf89fcf2e5.png", 
      alt: "Nasolabial creases and folds before after comparison", 
      caption: "Before and after: Comprehensive nasolabial area rejuvenation" 
    }
  ];

  const faqs = [
    {
      question: "What are marionette lines and how do they develop?",
      answer: "Marionette lines are vertical creases that extend from the corners of the mouth down towards the chin, resembling the lines on a marionette puppet's face. They develop due to natural aging, volume loss in the cheeks, decreased collagen production, and repetitive facial expressions. These lines can make you appear sad or aged, even when you're feeling happy."
    },
    {
      question: "How are marionette lines different from nasolabial folds?",
      answer: "While both are age-related facial lines, marionette lines run from the mouth corners to the chin, whereas nasolabial folds run from the nose to the mouth corners. Nasolabial creases are typically caused by repeated smiling and skin wrinkling, while nasolabial folds result from volume loss in the cheeks causing skin to fall. Both can be effectively treated with strategic dermal filler placement."
    },
    {
      question: "What is the '10 years younger' marionette line treatment?",
      answer: "The '10 years younger' treatment is our comprehensive approach to marionette lines that can dramatically reduce the appearance of aging. By strategically placing dermal fillers along the marionette lines and addressing related volume loss, we can restore a more youthful appearance that can take years off your face, hence the name."
    },
    {
      question: "Is marionette line treatment part of a liquid facelift?",
      answer: "Yes, marionette line treatment is often a key component of our liquid facelift procedures, especially for younger individuals in their 30s. The liquid facelift combines multiple dermal filler treatments to address various signs of aging without surgery, including marionette lines, nasolabial folds, cheek volume loss, and lip enhancement."
    },
    {
      question: "How long do marionette line filler results last?",
      answer: "Results typically last 12-18 months, depending on the type of filler used, your individual metabolism, lifestyle factors, and the depth of the original lines. The strategic placement of fillers in deeper layers often provides longer-lasting results compared to surface treatments."
    },
    {
      question: "What's the difference between treating creases and folds in the nasolabial area?",
      answer: "Nasolabial creases are typically surface-level lines caused by repeated smiling and facial expressions, while nasolabial folds are deeper and result from volume loss in the cheeks causing skin to sag. Creases require more superficial filler placement, while folds need deeper volume restoration. Our expert practitioners assess your individual needs to determine the optimal treatment approach."
    },
    {
      question: "Can marionette line treatment be combined with other procedures?",
      answer: "Absolutely! Marionette line treatment works excellently in combination with cheek volume enhancement, nasolabial fold correction, and lip hydration treatments. This comprehensive approach addresses multiple aspects of facial aging for more harmonious and natural-looking results."
    },
    {
      question: "What is the recovery time for marionette line fillers?",
      answer: "There's minimal downtime with most patients returning to normal activities immediately. Some temporary swelling, redness, or minor bruising may occur but typically resolves within 3-7 days. We recommend avoiding strenuous exercise for 24-48 hours post-treatment."
    },
    {
      question: "How much does marionette line filler treatment cost?",
      answer: "Marionette line filler treatment starts from £325 per ml. The exact cost depends on the amount of filler needed and whether additional treatments are combined. During your consultation, we'll provide a detailed treatment plan with transparent pricing."
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
        <meta name="keywords" content="marionette lines filler London, liquid facelift, 10 years younger, nasolabial folds, dermal fillers, anti-aging treatment, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert marionette line filler treatments and liquid facelifts in London",
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
              backgroundImage: `url('/lovable-uploads/765101d1-1ff9-4425-9d8a-da5eb0bcaa17.png')`
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
                  <span className="block text-purple-300">10 Years Younger</span>
                  <span className="block text-sm mt-4 font-normal">Transform your appearance with our liquid facelift</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow-lg">
                  <span className="text-purple-300 font-semibold">Our aesthetics is invisible art</span>
                  <br />
                  <span className="text-lg">Bold • Natural • Always Your Way</span>
                  <br />
                  Smooth away years with expert marionette line treatment
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold drop-shadow-lg">From £325/ml</p>
                  <p className="text-sm text-gray-300 drop-shadow-lg">30-45 minutes • Results last 12-18 months • Instant transformation</p>
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
                <h2 className="text-4xl font-bold mb-6">The Science Behind Marionette Lines</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Marionette lines are the vertical creases that extend from the corners of your mouth down towards your chin, creating a downturned expression that can make you appear sad or older than you feel. These lines develop due to natural aging processes, volume loss in the facial tissues, and repetitive facial expressions over time.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Our expert approach addresses both marionette lines and related nasolabial concerns. It's important to understand that nasolabial creases and folds represent different types of volume loss: creases are typically surface-level lines from repeated smiling, while folds result from deeper volume loss in the cheeks causing skin to fall.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  <AutoLinkedText>Our liquid facelift approach</AutoLinkedText> is particularly effective for younger individuals in their 30s, offering a non-surgical solution that can take 10 years off your appearance through strategic dermal filler placement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="/lovable-uploads/765101d1-1ff9-4425-9d8a-da5eb0bcaa17.png" 
                  alt="Marionette lines treatment results"
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Liquid Facelift Explanation */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">The Liquid Facelift Advantage</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Our marionette line treatment is often part of a comprehensive liquid facelift approach, designed specifically for younger individuals who want to address early signs of aging without surgery. This non-invasive procedure combines multiple <AutoLinkedText>dermal filler treatments</AutoLinkedText> to restore facial volume, smooth lines, and enhance natural contours.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Volume Restoration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Strategic placement of dermal fillers to restore lost volume in cheeks and address the root cause of marionette lines and nasolabial folds.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Comprehensive Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Treatment addresses marionette lines, nasolabial folds, and can include <AutoLinkedText>lip enhancement</AutoLinkedText> for harmonious facial rejuvenation.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Natural Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Achieve a refreshed, youthful appearance that looks natural and maintains your ability to express emotions authentically.</p>
                </CardContent>
              </Card>
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
              <h2 className="text-4xl font-bold mb-6">Marionette Lines Transformation Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                See the dramatic improvements achieved through our expert marionette line treatments and liquid facelift procedures.
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
                title="Marionette Lines & Liquid Facelift Results"
                description="Comprehensive collection of our marionette line and facial rejuvenation treatments"
              />
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
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Get expert answers about marionette line treatments and liquid facelifts from our experienced practitioners.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gray-900 rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-800 rounded-lg">
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
        <section className="py-20 bg-accent">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Look 10 Years Younger?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Book your consultation with our expert practitioners and discover how marionette line treatment can transform your appearance with our liquid facelift approach.
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
          <h3>Expert Marionette Lines Treatment and Liquid Facelift in London</h3>
          <p>
            Cosmedocs offers advanced marionette line dermal filler treatments and liquid facelift procedures at our prestigious Harley Street clinic in London. Our experienced cosmetic doctors specialize in the "10 years younger" transformation, particularly for younger individuals in their 30s seeking non-surgical facial rejuvenation. Marionette lines are vertical creases extending from mouth corners to the chin, often making patients appear sad or aged. These lines develop through natural aging, volume loss, decreased collagen production, and repetitive facial expressions. Our comprehensive liquid facelift approach addresses marionette lines alongside nasolabial folds, understanding that nasolabial creases result from repeated smiling while nasolabial folds stem from cheek volume loss causing skin sagging. The treatment uses premium hyaluronic acid dermal fillers strategically placed to restore volume and smooth lines. Our liquid facelift combines multiple treatments including marionette line correction, cheek volume restoration, nasolabial fold smoothing, and lip enhancement for harmonious results. The procedure takes 30-45 minutes with immediate visible improvements lasting 12-18 months. We use ultra-fine needles and premium fillers containing lidocaine for comfort. Recovery involves minimal downtime with most patients returning to activities immediately. Our consultation includes comprehensive facial assessment to determine optimal treatment approach. We achieve natural-looking results that maintain emotional expression while dramatically reducing signs of aging. Book your consultation today for expert marionette line treatment.
          </p>
        </div>
      </div>
    </>
  );
};

export default MarionnetteLines;
