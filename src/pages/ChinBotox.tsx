import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import { Link } from 'react-router-dom';
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

const ChinBotox = () => {
  const seoData = generateSEOMetadata(
    "Chin Botox London | Dimpled Chin | Cosmedocs",
    "Eliminate dimpled, pebble chin texture with botox. Achieve smooth chin contours. Orange peel chin treatment from £150.",
    "/chin-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Chin botox before and after - dimpled chin botox results showing smooth texture elimination", caption: "Chin Botox Before After: Smooth, refined chin texture eliminating chin dimples and cobblestone appearance. Natural results achieved with precision botox for dimpled chin - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "What is dimpled chin botox and how does it work?",
      answer: "Dimpled chin botox involves injecting botulinum toxin into the mentalis muscle to relax overactive contractions that cause chin dimpling, pebble chin texture, and excessive chin protrusion. Botox for dimpled chin creates a smoother, more refined appearance by reducing the cobblestone texture that appears when speaking or smiling."
    },
    {
      question: "What causes chin dimples and pebble chin texture?",
      answer: "Chin dimples and dimpling on chin are caused by overactive mentalis muscle contractions when you speak, smile, or show emotion. This creates an uneven, pebbled chin texture that can age your appearance and affect facial harmony. Botox chin treatment effectively addresses these concerns."
    },
    {
      question: "How long do chin botox before and after results last?",
      answer: "Chin botox before after results typically last 3-4 months. The duration of botox in chin depends on your metabolism, muscle strength, and lifestyle factors. Regular botox for chin dimpling treatments help maintain optimal results and may extend the duration over time."
    },
    {
      question: "Is botox on the chin painful?",
      answer: "Botox to chin involves minimal discomfort. Most clients describe chin dimple botox as a brief pinching sensation. The treatment takes just 10-15 minutes, and we use fine needles to ensure maximum comfort throughout the botox chin procedure."
    },
    {
      question: "What can I expect after chin dimples botox treatment?",
      answer: "After chin dimples botox, you may experience mild swelling or redness at injection sites for a few hours. Results from botox for chin dimpling begin appearing within 3-5 days, with full effects visible after 2 weeks. Most clients return to normal activities immediately after pebble chin botox treatment."
    },
    {
      question: "Am I a good candidate for botox dimpled chin treatment?",
      answer: "Ideal candidates for botox dimpled chin treatment have dimpled chin texture when speaking or smiling, downturned mouth corners, or an overactive mentalis muscle. A consultation with our expert doctors will determine if pebbled chin botox is right for your specific concerns."
    },
    {
      question: "How much does chin botox cost in London?",
      answer: "Chin botox at Cosmedocs costs £175 when done independently, or £50 extra when combined with other botox areas like frown lines, forehead, or crow's feet. We provide transparent pricing for botox chin before and after treatment during your consultation with no hidden fees."
    },
    {
      question: "Can botox for dimpled chin be combined with other treatments?",
      answer: "Yes! Botox for dimpled chin works excellently with other facial treatments like dermal fillers for comprehensive facial enhancement. Our doctors can create a personalised treatment plan combining multiple procedures for optimal chin botox before and after results."
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="dimpled chin botox, chin dimples botox, botox dimpled chin, botox for dimpled chin, pebble chin botox, chin botox before and after, chin botox, chin dimple botox, pebbled chin botox, botox in chin, botox on the chin, botox to chin, botox chin, botox for chin dimpling, chin botox before after, botox chin dimpling, dimpled chin, botox chin before and after, dimpling on chin, chin botox London, Harley Street" />
        <meta name="last-modified" content={new Date().toISOString()} />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.519366;-0.144962" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.519366",
              "longitude": "-0.144962"
            },
            "priceRange": "££",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "156"
            },
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "Chin Botox Treatment",
              "alternateName": ["Dimpled Chin Botox", "Pebble Chin Botox", "Botox for Dimpled Chin", "Chin Dimple Botox"],
              "description": "Expert dimpled chin botox and pebble chin botox treatment for smooth, refined chin contours"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cosmedocs.co.uk"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Treatments",
                "item": "https://www.cosmedocs.co.uk/treatments"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Chin Botox",
                "item": "https://www.cosmedocs.co.uk/chin-botox"
              }
            ]
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
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Chin Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - smooth dimpled chin botox enhancement that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Botox for Dimpled Chin & Pebble Chin Botox</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Chin botox before and after results visible in days</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Dimpled Chin Botox Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">15-20 minutes including consultation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">3-4 months with gradual muscle return</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">Immediate return to activities</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical anaesthetic if required</p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* What is Chin Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Dimpled Chin Botox?</h2>
              <div className="text-gray-300 max-w-3xl mx-auto text-lg space-y-4">
                <p>
                  Dimpled chin botox, also known as pebble chin botox, is a minimally invasive treatment. It targets the mentalis muscle responsible for chin dimples and pebbled chin texture.
                </p>
                <p>
                  Our invisible art approach to botox for dimpled chin creates natural smoothness. Patients achieve stunning chin botox before and after results with this precise treatment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Understanding the Mentalis Muscle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-300 text-lg leading-relaxed text-center space-y-3">
                    <p>
                      The mentalis muscle is located in your chin. It contracts when you speak, smile, or show emotion.
                    </p>
                    <p>
                      When overactive, it creates an uneven dimpled chin or pebble chin texture. This can age your appearance and detract from your natural beauty. Botox in chin helps relax this muscle for smoother results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <h4 className="text-white text-xl font-bold mb-4">Key Treatment Areas</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-purple-300 font-medium">Mentalis Muscle</div>
                  <div className="text-purple-300 font-medium">Chin Dimples</div>
                  <div className="text-purple-300 font-medium">Pebble Texture</div>
                  <div className="text-purple-300 font-medium">Muscle Overactivity</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Combination Treatments with Chin Botox */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Combination Treatments with Botox for Dimpled Chin</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Enhance your chin dimples botox results with complementary treatments for comprehensive facial rejuvenation. 
                Our expert doctors create personalised treatment plans combining botox chin treatment with other procedures that deliver natural, harmonious chin botox before after results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Botox Dimpled Chin + Dermal Fillers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-center">
                      Combine botox for chin dimpling with <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline transition-colors">volume enhancement</Link> for complete chin transformation and optimal chin botox before and after results.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Enhanced chin projection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Improved facial balance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Defined jawline contours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Long-lasting results</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Pebble Chin Botox + Facial Botox</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-center">
                      Add pebble chin botox to your existing facial botox routine for comprehensive muscle relaxation and enhanced chin botox before after results.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Full facial rejuvenation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Cost-effective pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Single appointment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Harmonious results</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Chin Dimple Botox + Thread Lift</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-center">
                      Combine chin dimple botox muscle relaxation with lifting for enhanced jawline definition and facial contouring.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Lifted facial contours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Enhanced skin tightening</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Non-surgical facelift effect</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Natural rejuvenation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aftercare & Recovery Guide */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Botox for Dimpled Chin Aftercare & Recovery</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-4">
                <a 
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6176474/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors underline"
                >
                  Clinical research
                </a> using dissections and ultrasound confirms optimal injection depth for chin botox is 6.7-10.7 mm below skin surface.
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Proper aftercare ensures optimal dimpled chin botox results and minimises any potential side effects. Follow our 
                comprehensive guide for the best botox chin experience and longest-lasting chin botox before and after results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-green-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center text-green-400">Immediate Aftercare (First 24 Hours)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Stay Upright</p>
                          <p className="text-sm text-gray-300">Remain upright for 4 hours post-treatment to prevent migration</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Gentle Ice Application</p>
                          <p className="text-sm text-gray-300">Apply ice wrapped in cloth for 10 minutes if swelling occurs</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Avoid Touching</p>
                          <p className="text-sm text-gray-300">Don't massage or touch the treated area for 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Normal Activities</p>
                          <p className="text-sm text-gray-300">Return to work and light activities immediately</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8">
                  <h4 className="text-white text-xl font-bold mb-4 text-center">Dimpled Chin Botox Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Eliminates chin dimples and pebble chin texture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Reduced dimpling on chin when speaking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">More balanced facial proportions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Natural, subtle enhancement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Quick 15-minute treatment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Visible chin botox before after results within days</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>


        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Botox for Dimpled Chin Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for expert dimpled chin botox and pebble chin botox treatments. All prices for botox chin treatment include consultation, 
                treatment, and aftercare support from our qualified medical team at our Harley Street London clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Dimpled Chin Botox Standalone</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£175</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Complete botox for dimpled chin treatment when done independently</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Expert mentalis muscle treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">Combined Treatment</CardTitle>
                    <div className="text-white text-4xl font-bold">+£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">When pebble chin botox is combined with other botox areas for maximum value</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">
                          Combines with <Link to="/forehead-botox" className="text-purple-100 hover:text-white underline transition-colors">forehead</Link>, <Link to="/frown-lines-botox" className="text-purple-100 hover:text-white underline transition-colors">frown</Link>, or <Link to="/crows-feet-botox" className="text-purple-100 hover:text-white underline transition-colors">crow's feet</Link>
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive facial treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Maximum cost savings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Single appointment convenience</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Expert assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive facial analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Personalized treatment plan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from botox chin treatment cost if you proceed on the same day
              </p>
              <Button 
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Related Chin Treatments Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Complete Your Transformation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your chin dimples botox results with our complementary treatments for comprehensive facial harmony
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src="/lovable-uploads/b71849b7-d2b9-40c0-99c3-4f8589f8341b.png"
                      alt="V-Line chin contouring treatment to complement botox dimpled chin"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">V-Line Contouring</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">
                      Define your <Link to="/jawline-filler" className="text-purple-400 hover:text-purple-300 underline transition-colors">jawline</Link> with precision dermal filler placement for elegant facial proportions.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                        Enhanced jawline definition
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                        Complements botox for dimpled chin perfectly
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full"
                      onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Syringe className="text-blue-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Lip Filler</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-6">
                      Balance your dimpled chin botox enhancement with subtle <Link to="/lip-fillers" className="text-purple-400 hover:text-purple-300 underline transition-colors">lip volume</Link> for perfect facial proportions.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                        Natural volume enhancement
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                        Harmonious facial balance
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                      onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                    >
                      Explore Treatment
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-500/30 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="text-green-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Facial Botox</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-6">
                      Complete your chin botox before and after rejuvenation with forehead, frown lines, and crow's feet treatment.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        Full facial smoothing
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        Comprehensive treatment
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full"
                      onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Doctors</h3>
                <p className="text-gray-300">GMC-registered cosmetic doctors</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">15+ years in cosmetic medicine</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Safety First</h3>
                <p className="text-gray-300">Premium products and protocols</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">'Invisible art' for natural results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
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
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions About Botox for Dimpled Chin</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about dimpled chin botox, pebble chin botox, and chin dimples botox treatments at our Harley Street London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Dimpled Chin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors at our Harley Street London clinic and discover how botox for dimpled chin 
                can enhance your natural beauty with subtle, sophisticated chin botox before and after results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.open('tel:0333055150', '_self')}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content - 500 words for crawler optimization */}
        <section className="sr-only" aria-hidden="true">
          <div className="page-container">
            <h2>Comprehensive Guide to Dimpled Chin Botox and Pebble Chin Treatment in London</h2>
            <p>
              Dimpled chin botox has become increasingly popular in London as individuals seek solutions for chin dimples and pebbled chin texture. This specialised botox chin treatment addresses the aesthetic concerns caused by an overactive mentalis muscle, which creates visible dimpling on chin when speaking, smiling, or expressing emotion. Understanding the nuances of botox for dimpled chin helps patients make informed decisions about their aesthetic journey.
            </p>
            <p>
              The mentalis muscle, located in the lower chin area, plays a crucial role in facial expressions. When this muscle contracts excessively, it produces the characteristic pebble chin texture or pronounced chin dimples that many patients wish to correct. Botox dimpled chin treatment works by strategically injecting small amounts of botulinum toxin into specific points of the mentalis muscle, causing temporary muscle relaxation. This botox in chin technique effectively smooths the dimpled appearance whilst maintaining natural facial movement and expression.
            </p>
            <p>
              Chin botox before and after results demonstrate the remarkable transformation possible with this minimally invasive procedure. Patients seeking chin dimple botox at our Harley Street London clinic typically notice visible improvements within 3-5 days of treatment, with full chin botox before after results becoming apparent after approximately two weeks. The smoothing effect of pebble chin botox typically lasts 3-4 months, after which patients may choose to undergo repeat treatments to maintain their desired aesthetic outcome.
            </p>
            <p>
              The procedure for botox on the chin is remarkably quick and convenient, typically taking only 15-20 minutes including consultation time. Our experienced cosmetic doctors at our London Harley Street location carefully assess each patient's unique facial anatomy to determine the optimal injection points for botox to chin treatment. This personalised approach ensures natural-looking results that enhance rather than alter your inherent facial characteristics, embodying our philosophy of 'invisible art' in aesthetic medicine.
            </p>
            <p>
              Candidates for chin dimples botox often present with various concerns including excessive dimpling on chin during conversation, cobblestone-like pebbled chin texture at rest, or an overly protruding chin that disrupts facial balance. Botox for chin dimpling addresses these aesthetic concerns effectively whilst maintaining the natural contours and movement of the lower face. During your initial consultation, our medical professionals thoroughly evaluate your facial structure and discuss your aesthetic goals to determine whether botox dimpled chin treatment represents the optimal solution for your specific needs.
            </p>
            <p>
              The safety profile of chin botox makes it an attractive option for those seeking facial refinement without surgical intervention. Side effects from botox chin before and after treatment are typically minimal and may include mild swelling, redness, or temporary bruising at injection sites. These minor effects generally resolve within hours to a few days. Our experienced practitioners use premium products and follow rigorous safety protocols to ensure optimal outcomes and patient comfort throughout the pebble chin botox procedure.
            </p>
            <p>
              Combining chin dimple botox with other aesthetic treatments can create comprehensive facial rejuvenation results. Many patients choose to pair their botox for dimpled chin treatment with complementary procedures such as dermal fillers for volume enhancement, facial botox for wrinkle reduction in other areas, or <Link to="/thread-face-lift" className="text-purple-400 hover:text-purple-300 underline">thread lifts</Link> for additional facial contouring. These combination approaches allow for holistic facial enhancement whilst maintaining the natural, subtle results that characterise quality aesthetic medicine. Our medical team works collaboratively with each patient to develop customised treatment plans that address multiple aesthetic concerns efficiently and cost-effectively.
            </p>
            <p>
              Aftercare following dimpled chin botox treatment is straightforward yet important for optimal results. Patients receiving botox in chin should remain upright for at least four hours post-treatment to prevent product migration. Avoiding strenuous exercise, alcohol consumption, and excessive heat exposure for 24 hours helps ensure the botulinum toxin settles correctly in the targeted mentalis muscle. Following these simple guidelines maximises the longevity and quality of your chin botox before and after transformation.
            </p>
            <p>
              Cost considerations for pebble chin botox in London vary depending on whether the treatment is performed as a standalone procedure or combined with other aesthetic treatments. At Cosmedocs, we offer transparent pricing with dimpled chin botox priced at £175 when performed independently, or as an add-on for £50 when combined with other botox treatments. This flexible pricing structure makes professional botox chin treatment accessible whilst maintaining the highest standards of medical care and product quality. Our Harley Street London clinic provides detailed cost breakdowns during initial consultations, ensuring patients understand the investment required for their desired chin botox before after results.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChinBotox;