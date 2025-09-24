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
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import lipFlipImage1 from "@/assets/before-after/lip-flip-1.jpg";
import lipFlipImage2 from "@/assets/before-after/lip-flip-2.jpg";
import lipFlipImage3 from "@/assets/before-after/lip-flip-3.jpg";

const LipFlip = () => {
  const seoData = generateSEOMetadata(
    "Lip Flip Botox London | Upper Lip Enhancement | Cosmedocs Harley Street",
    "Expert lip flip botox treatment in London for upper lip enhancement. Professional orbicularis oris muscle botox by cosmetic doctors. Natural results at Harley Street clinic.",
    "/lip-flip"
  );

  const beforeAfterImages = [
    { 
      src: lipFlipImage1, 
      alt: "Botox lip flip injection points diagram", 
      caption: "Lip Flip Injection Points - Strategic placement for natural upper lip enhancement and muscle relaxation." 
    },
    { 
      src: lipFlipImage2, 
      alt: "Lip flip botox before and after treatment", 
      caption: "Natural Lip Enhancement - Subtle lip flip results showing fuller appearance without added volume." 
    },
    { 
      src: lipFlipImage3, 
      alt: "Non-invasive lip enhancement before and after", 
      caption: "Bold • Natural • Always Your Way - Non-invasive lip enhancement with natural-looking definition." 
    }
  ];

  const faqs = [
    {
      question: "What is a lip flip and how does it work?",
      answer: "A lip flip uses botox to relax the orbicularis oris muscle around your upper lip. This allows more of the pink lip tissue to show, creating the illusion of fuller lips without adding volume through dermal fillers."
    },
    {
      question: "How long do lip flip results last?",
      answer: "Lip flip botox results typically last 2-3 months, which is slightly shorter than other botox treatments due to the constant movement of the lip muscles."
    },
    {
      question: "Is a lip flip painful?",
      answer: "The lip flip procedure involves minimal discomfort. Most clients describe brief pinching sensations. The treatment takes 5-10 minutes with fine needles ensuring maximum comfort."
    },
    {
      question: "What's the difference between a lip flip and lip fillers?",
      answer: "A lip flip uses botox to relax muscles and reveal more of your existing lip, while lip fillers add volume. Lip flips are more subtle and temporary, while fillers provide more dramatic volume enhancement."
    },
    {
      question: "Can I combine a lip flip with other treatments?",
      answer: "Yes! Lip flips work excellently with other facial botox treatments and can be combined with lip fillers for enhanced results. Our doctors create personalized treatment plans."
    },
    {
      question: "What should I expect after a lip flip treatment?",
      answer: "You may experience mild swelling or tenderness for a few hours. Results begin appearing within 3-7 days. Avoid using straws and excessive lip movement for the first 24 hours."
    },
    {
      question: "Who is a good candidate for a lip flip?",
      answer: "Ideal candidates want subtle lip enhancement, have a thin upper lip that disappears when smiling, or want to try lip enhancement before considering fillers."
    },
    {
      question: "How much does a lip flip cost?",
      answer: "Lip flip botox at Cosmedocs costs £175. We provide transparent pricing during consultation with package discounts available for multiple areas."
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
        <meta name="keywords" content="lip flip botox London, upper lip enhancement, orbicularis oris botox, lip flip treatment, cosmetic botox, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert lip flip botox treatments in London",
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
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Lip Flip Botox</span>
                  <span className="block text-sm mt-4">Invisible art - enhanced lips that speak without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Upper Lip Enhancement</p>
                  <p className="text-sm text-gray-300">10-15 minutes • Results last 3-4 months</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Lip Flip Botox Treatment</h2>
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
                <p className="text-gray-300">10-15 minutes</p>
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
                <p className="text-gray-300">3-4 months</p>
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
                <p className="text-gray-300">Topical if required</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Lip Flip Before and After</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Check out our Lip Flip Botox Treatment at Cosmedocs. Our before-and-after images show significant improvements in upper lip enhancement, resulting in natural, fuller-looking lips.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group cursor-pointer p-2"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>
          </div>
        </section>

        {/* What is Lip Flip */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Lip Flip Enhancement?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                A lip flip uses botox to relax the orbicularis oris muscle around your upper lip, creating the appearance of fuller, more defined lips by allowing more of the upper lip to show without adding volume.
              </p>
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
                  <CardTitle className="text-white text-2xl text-center">Key Benefits of Lip Flip</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Natural Enhancement</h4>
                      <p className="text-gray-300 text-sm">Subtle results that enhance your natural lip shape</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">No Volume Added</h4>
                      <p className="text-gray-300 text-sm">Creates fullness appearance without dermal fillers</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Quick Treatment</h4>
                      <p className="text-gray-300 text-sm">5-10 minute procedure with minimal downtime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Botox Lip Flip Injection Points */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Botox Lip Flip Injection Points</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src={lipFlipImage1} 
                  alt="Lip flip injection points diagram"
                  className="mx-auto rounded-lg shadow-lg max-w-md w-full"
                />
                <p className="text-sm text-gray-300 mt-4 italic">
                  Strategic injection sites for lip flip botox treatment targeting orbicularis oris muscle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Botox Lip Flip Procedure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      The injection points for lip flip are usually along the upper border of the upper lip, targeting the orbicularis oris muscle.
                    </p>
                    <p className="text-gray-300 mb-6">
                      Botox acts as a muscle relaxant, facilitating the lip flip by calming the segments of the lip muscle responsible for curling it upwards.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Upper lip border targeting</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Orbicularis oris muscle relaxation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Natural lip enhancement</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lip Flip vs Lip Filler Comparison */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Lip Flip vs Lip Filler: What's the Difference?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the key differences between lip flip botox and lip filler treatments to help you choose the right enhancement for your goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl text-center">Lip Flip Botox</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-purple-300 font-semibold mb-3">How it Works</h4>
                      <p className="text-gray-300 text-sm">
                        Relaxes the orbicularis oris muscle to allow more of the upper lip to show, creating the appearance of fullness without adding volume.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-purple-300 font-semibold mb-3">Best For</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Subtle enhancement</li>
                        <li>• Upper lip that disappears when smiling</li>
                        <li>• First-time lip enhancement</li>
                        <li>• Natural-looking results</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-purple-300 font-semibold mb-3">Treatment Details</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Duration: 5-10 minutes</li>
                        <li>• Results last: 2-3 months</li>
                        <li>• Cost: £175</li>
                        <li>• Units needed: 4-6 Botox units</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-purple-300 font-semibold mb-3">Pros & Cons</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-green-400 text-sm font-medium mb-1">Pros:</p>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Very natural results</li>
                            <li>• No volume added</li>
                            <li>• Quick procedure</li>
                            <li>• Reversible effects</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-red-400 text-sm font-medium mb-1">Cons:</p>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Subtle enhancement only</li>
                            <li>• Shorter duration</li>
                            <li>• May affect lip function temporarily</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 border-pink-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl text-center">Lip Filler</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-pink-300 font-semibold mb-3">How it Works</h4>
                      <p className="text-gray-300 text-sm">
                        Adds hyaluronic acid volume directly to the lips, increasing size, shape, and definition of both upper and lower lips.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-pink-300 font-semibold mb-3">Best For</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Dramatic volume increase</li>
                        <li>• Reshaping lip contours</li>
                        <li>• Both upper and lower lips</li>
                        <li>• Long-lasting enhancement</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-pink-300 font-semibold mb-3">Treatment Details</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Duration: 30-45 minutes</li>
                        <li>• Results last: 6-12 months</li>
                        <li>• Cost: £350-£550</li>
                        <li>• Volume: 0.5ml-2ml typically</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-pink-300 font-semibold mb-3">Pros & Cons</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-green-400 text-sm font-medium mb-1">Pros:</p>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Dramatic results possible</li>
                            <li>• Longer-lasting</li>
                            <li>• Customizable volume</li>
                            <li>• Immediate results</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-red-400 text-sm font-medium mb-1">Cons:</p>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Higher cost</li>
                            <li>• More swelling/downtime</li>
                            <li>• Risk of overfilling</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Which Treatment is Right for You?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h5 className="text-purple-300 font-semibold mb-3">Choose Lip Flip if you want:</h5>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Subtle, natural enhancement</li>
                        <li>• To try lip enhancement for the first time</li>
                        <li>• Your upper lip disappears when you smile</li>
                        <li>• A more affordable option</li>
                        <li>• Quick treatment with minimal downtime</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-pink-300 font-semibold mb-3">Choose Lip Filler if you want:</h5>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Noticeable volume increase</li>
                        <li>• To reshape your lip contours</li>
                        <li>• Both upper and lower lip enhancement</li>
                        <li>• Longer-lasting results</li>
                        <li>• More dramatic transformation</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-300 text-center mt-6 italic">
                    Many clients combine both treatments for optimal results - lip flip for natural enhancement and filler for added volume where needed.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Units Information */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Many Botox Units Are Needed for Lip Flip?</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl text-center">Botox Units for Lip Flip Treatment</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="text-center">
                        <h4 className="text-purple-300 font-semibold mb-4 text-lg">Typical Dosage</h4>
                        <p className="text-gray-300 text-lg mb-4">4-6 units of Botox</p>
                        <p className="text-gray-300 text-sm">
                          The exact amount depends on your lip anatomy, muscle strength, and desired enhancement level.
                        </p>
                      </div>
                      <div className="text-center">
                        <h4 className="text-purple-300 font-semibold mb-4 text-lg">Treatment Areas</h4>
                        <ul className="text-gray-300 text-sm space-y-2">
                          <li>• Upper lip border (2-3 injection points)</li>
                          <li>• Orbicularis oris muscle targeting</li>
                          <li>• Minimal units for natural results</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-300 text-center mt-6 italic">
                      Our expert doctors will determine the precise number of units needed during your consultation for optimal, natural-looking results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Lip Flip Botox — What to Expect?</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Treatment Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      After a detailed consultation with a cosmetic specialist at Cosmedocs for your lip flip treatment, we begin your orbicularis oris muscle treatment. The doctor uses very fine needles to inject botulinum toxin into targeted areas around the upper lip:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Upper lip border muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Orbicularis oris muscle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Lip curl prevention areas</span>
                      </li>
                    </ul>
                    <p className="text-purple-300 font-medium">
                      Following the botox treatment you may continue normal daily activities immediately.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Potential Side Effects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Lip flip botox is considered safe with minimal side effects for most people. However, your treatment may have some slight side effects, such as:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Mild swelling around lip area</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Temporary numbness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Difficulty with precise lip movements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Slight asymmetry (rare)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Does Botox Work for Lip Flip */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Does Botox Work for Lip Flip?</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl flex items-center justify-center gap-3">
                      <Heart className="text-purple-400" size={28} />
                      Muscle Relaxation for Lip Enhancement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      Botox relaxes the orbicularis oris muscle that causes the upper lip to curl inward, allowing more of the pink lip tissue to be visible. This creates a fuller lip appearance without adding volume, resulting in natural-looking enhancement that maintains lip mobility.
                    </p>
                  </CardContent>
                </Card>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Lip Flip Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional lip flip treatments in London's premier cosmetic clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Lip Flip</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£175</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Upper lip enhancement</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">4-6 units of Botox</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Expert consultation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Lip Enhancement Package</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350</div>
                    <div className="text-sm text-purple-400">Most Popular</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lip flip botox</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">1ml lip filler</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Complete enhancement</span>
                      </li>
                    </ul>
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
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Full Face Package</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£399</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Upper face areas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lip flip included</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Comprehensive treatment</span>
                      </li>
                    </ul>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about lip flip botox treatments answered by our expert doctors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 rounded-lg px-6">
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
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
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Ready for Enhanced Lips?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Experience invisible art - lips that speak without words. Book your expert consultation today and discover how our natural approach creates transformation that speaks — without saying a word.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Expert Lip Flip Botox Treatment in London</h3>
          <p>Cosmedocs offers professional lip flip botox treatments for natural upper lip enhancement. Our experienced cosmetic doctors use advanced botulinum toxin injection techniques to create fuller-looking lips without adding volume. Located in prestigious Harley Street, our clinic provides comprehensive lip assessments and personalized treatment plans.</p>
          
          <h4>Why Choose Cosmedocs for Lip Flip Botox?</h4>
          <p>Our invisible art philosophy ensures natural-looking results that enhance your lip area without obvious signs of treatment. We specialize in precise orbicularis oris muscle targeting using the latest injection techniques for optimal outcomes. Our doctors have extensive experience in perioral anatomy and aesthetic medicine, ensuring safe and effective lip treatments.</p>
          
          <h4>Understanding Lip Flip Enhancement</h4>
          <p>Lip flip treatments work by relaxing the muscles that cause the upper lip to curl inward during smiling and speaking. This allows more of the pink lip tissue to be visible, creating the appearance of fuller lips without adding volume through dermal fillers. The result is a subtle, natural-looking enhancement.</p>
          
          <h4>Treatment Process and Lip Care</h4>
          <p>Our lip flip botox treatment begins with a detailed lip area consultation and muscle analysis. The injection process takes 5-10 minutes using specialized techniques for the delicate lip area. Results appear gradually over 3-7 days, with optimal effects lasting 2-3 months. We provide specific lip area aftercare instructions and ongoing support.</p>
        </div>
      </div>
    </>
  );
};

export default LipFlip;