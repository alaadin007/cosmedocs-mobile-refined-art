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
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

const ForeheadLinesBotox = () => {
  const seoData = generateSEOMetadata(
    "Forehead Lines Botox London | Horizontal Wrinkle Treatment | Cosmedocs Harley Street",
    "Expert forehead lines botox treatment in London for horizontal wrinkles. Professional frontalis muscle botox by cosmetic doctors. Natural results at Harley Street clinic.",
    "/forehead-lines-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Forehead lines botox before and after treatment", caption: "Forehead Lines Botox Treatment: Smooth, youthful forehead with natural brow position preserved. Expert frontalis muscle relaxation - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "What are forehead lines and how does botox help?",
      answer: "Forehead lines are horizontal wrinkles across your forehead caused by repeated contractions of the frontalis muscle when raising eyebrows or expressing surprise. Botox relaxes this muscle, smoothing existing lines while maintaining natural brow movement."
    },
    {
      question: "How long do forehead lines botox results last?",
      answer: "Forehead lines botox results typically last 3-4 months. The frontalis muscle gradually regains movement, requiring maintenance treatments to sustain smooth forehead appearance and prevent line reformation."
    },
    {
      question: "Is forehead lines botox painful?",
      answer: "Forehead lines botox involves minimal discomfort. Most clients describe it as brief pinching sensations across the forehead. The treatment takes 10-15 minutes with our doctors using precise injection techniques for comfort."
    },
    {
      question: "What can I expect after forehead lines botox treatment?",
      answer: "You may experience mild swelling or slight redness at injection sites for a few hours. Results begin appearing within 3-7 days, with full effects visible after 2 weeks. Normal activities can be resumed immediately with specific aftercare guidance."
    },
    {
      question: "Am I a good candidate for forehead lines botox?",
      answer: "Ideal candidates have horizontal forehead wrinkles, are in good health, and want natural-looking results without frozen expressions. A consultation will assess your forehead muscle activity and determine treatment suitability."
    },
    {
      question: "How much does forehead lines botox cost?",
      answer: "Forehead lines botox at Cosmedocs costs £175 as a standalone treatment. We offer attractive package deals when combined with frown lines and crow's feet for comprehensive upper face rejuvenation."
    },
    {
      question: "Can forehead lines botox be combined with other treatments?",
      answer: "Yes! Forehead lines botox works excellently with frown line and crow's feet botox for complete upper face treatment, plus dermal fillers for volume restoration. Our doctors create personalized combination plans."
    },
    {
      question: "Should I be concerned about forehead lines at a young age?",
      answer: "Early signs of forehead lines are common. While not a health concern, if they bother you, preventative measures like sun protection and a good skincare routine can be beneficial."
    },
    {
      question: "What are the best treatments for forehead lines?",
      answer: "Procedures include chemical peels, laser therapy, Botox injections, and dermal fillers can be used to address forehead wrinkles. The best course of action for you will depend on several factors, such as your age, skin type, degree of wrinkles, and desired results."
    },
    {
      question: "Can forehead lines be prevented?",
      answer: "Yes! Sun protection with daily sunscreen use is essential. Stay hydrated by drinking plenty of water and using moisturizer. Maintain a healthy lifestyle with balanced diet, enough sleep, and stress management. Be mindful of repetitive facial movements and try to relax your forehead muscles."
    },
    {
      question: "Is Botox for forehead lines safe?",
      answer: "There are risks and side effects associated with forehead treatments. These may include bruising, swelling, redness, itching, allergic responses, and, in rare instances, infection or scarring. All of the procedures are safe, though, and any side effects that do occur eventually go away."
    },
    {
      question: "How much downtime is involved with forehead line treatments?",
      answer: "The duration of results varies depending on the type of treatment. Injectable treatments like Botox typically last 4-6 months, while dermal fillers can last 6-12 months or longer. Results from laser therapy and microneedling may be more long-lasting but may require multiple sessions for optimal results."
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
        <meta name="keywords" content="forehead lines botox London, horizontal wrinkles treatment, frontalis muscle botox, forehead wrinkle treatment, cosmetic botox, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert forehead lines botox treatments in London",
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
                  <span className="text-purple-300">Forehead Botox</span>
                  <span className="block text-sm mt-4">Invisible art - smooth forehead that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Horizontal Wrinkle Treatment</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Forehead Lines Botox Treatment</h2>
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
                <p className="text-gray-300">10-15 minutes including consultation</p>
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
              <h2 className="text-3xl font-bold mb-4">Forehead Lines Botox Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert forehead lines botox treatments smooth horizontal wrinkles while maintaining natural brow movement.
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

        {/* What is Forehead Lines Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What are Forehead Lines?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                The horizontal creases across the forehead are called forehead lines, sometimes worry lines, furrows, or wrinkles. 
                Frequent facial expressions like lifting the eyebrows or expressing emotions like surprise or concern lead to these lines. 
                Their depth and prominence fluctuate, becoming increasingly apparent with time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-8 text-white">Understanding Forehead Lines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Dynamic Lines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">
                      These appear only when you frown, raise your eyebrows or squint. They are caused by repeated muscle contractions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Static Lines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">
                      These lines are visible even when your face is relaxed. They develop over time due to collagen loss, sun damage, and loss of skin elasticity.
                    </p>
                  </CardContent>
                </Card>
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
                  <CardTitle className="text-white text-2xl text-center">Understanding the Frontalis Muscle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    The frontalis muscle is responsible for raising your eyebrows and creating expressions of surprise or concern. 
                    When overactive, it creates deep horizontal lines across the forehead that can make you appear tired or older than you are.
                  </p>
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
                  <div className="text-purple-300 font-medium">Frontalis Muscle</div>
                  <div className="text-purple-300 font-medium">Horizontal Lines</div>
                  <div className="text-purple-300 font-medium">Brow Position</div>
                  <div className="text-purple-300 font-medium">Expression Lines</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Baby Botox Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Baby Botox for Forehead Lines</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Worry lines or forehead wrinkles are common among people in their 20s, 30s, 40s, 50s, and even teenage years! 
                Many patients do not wish to have a shiny forehead or a 'frozen look'. The results are almost instant, 
                and they still have some control over their facial muscles, hence more forehead mobility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Causes of Lines & Wrinkles</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                The main cause of forehead wrinkles is a decrease in the production of collagen and elastin in the skin. 
                These proteins are responsible for our skin's elasticity, but production drops as we age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: "☀️", title: "Sun damage" },
                { icon: "😰", title: "Stress" },
                { icon: "🚬", title: "Smoking" },
                { icon: "🍷", title: "Drinking alcohol" },
                { icon: "💧", title: "Dehydration" },
                { icon: "🧬", title: "Genetic factors" }
              ].map((cause, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
                  <div className="text-4xl mb-4">{cause.icon}</div>
                  <h4 className="text-white font-semibold">{cause.title}</h4>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Alternative Treatments Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Addressing Lines and Wrinkles at CosmeDocs</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Botox for forehead lines is one of the most amazing treatments, however, to target forehead lines and achieve a creaseless forehead, 
                there are a variety of ways to complement your treatment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Dermal Fillers</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 text-center">
                    <p>
                      Filler for forehead lines works by filling in the creases and smoothing the skin, which diminishes the appearance of wrinkles and lines. 
                      This non-surgical treatment can give your forehead a relaxed and rejuvenated appearance, with minimal downtime and provide immediate results.
                    </p>
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
                    <CardTitle className="text-white text-xl text-center">Microneedling</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 text-center">
                    <p className="mb-4">Microneedling is a minimally invasive procedure that reduces forehead lines by:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Boosting collagen production</li>
                      <li>• Rejuvenating skin texture and firmness</li>
                      <li>• Decreasing line depth</li>
                      <li>• Improving skin tone</li>
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
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Laser Resurfacing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 text-center">
                    <p className="mb-4">Laser resurfacing can reduce forehead lines by:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Stimulating collagen</li>
                      <li>• Smoothing out wrinkles</li>
                      <li>• Reducing pigmentation</li>
                      <li>• Tightening the skin</li>
                      <li>• Improving skin texture</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Client Reviews</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6">
                    <p className="text-gray-300 italic mb-4">
                      "I've had three facial areas treated with Anti-Wrinkle Injection at CosmeDocs in recent years, and find the treatment swift, thorough and effective. 
                      Also, Dr Haq's pleasant and friendly manner makes the treatment as painless as possible!"
                    </p>
                    <div className="flex items-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-yellow-400">⭐</div>
                      ))}
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
                  <CardContent className="p-6">
                    <p className="text-gray-300 italic mb-4">
                      "I had a facial aesthetic treatment with cosmodocs. I found the price very reasonable. 
                      Even better the results were excellent. I will definitely use this service again."
                    </p>
                    <div className="flex items-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-yellow-400">⭐</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose CosmeDocs Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Why Choose CosmeDocs</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Our aesthetics is invisible art. Bold • Natural • Always Your Way. 
                Aesthetic medicine by CosmeDocs is minimal. Quiet, not loud. Invisible, not exaggerated. 
                It's transformation that speaks — without saying a word.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-lg font-semibold text-white mb-2">Expert Practitioners</h3>
                <p className="text-gray-300">GMC-registered doctors with years of aesthetic medicine experience</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Advanced Training</h3>
                <p className="text-gray-300">Continuous education and latest injection techniques</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Natural Results</h3>
                <p className="text-gray-300">Invisible art approach for enhancement that looks effortless</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Patient Care</h3>
                <p className="text-gray-300">Comprehensive aftercare and ongoing support</p>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Forehead Lines Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional forehead lines botox treatments at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Forehead Only</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£175</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Frontalis muscle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Horizontal lines</span>
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
                    <CardTitle className="text-white text-xl">Upper Face Package</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£299</div>
                    <div className="text-sm text-purple-400">Most Popular</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Forehead lines</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Frown lines</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Crow's feet</span>
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
                        <span className="text-gray-300">Lower face areas</span>
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
                Common questions about forehead lines botox treatments answered by our expert doctors.
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
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Smooth Your Forehead Lines?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Book your expert consultation today and discover how our invisible art approach can transform your forehead naturally.
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
          <h3>Expert Forehead Lines Botox Treatment in London</h3>
          <p>Cosmedocs offers professional forehead lines botox treatments targeting horizontal wrinkles across the forehead. Our experienced cosmetic doctors use advanced botulinum toxin injection techniques to smooth forehead lines while preserving natural brow movement. Located in prestigious Harley Street, our clinic provides comprehensive forehead assessments and personalized treatment plans.</p>
          
          <h4>Why Choose Cosmedocs for Forehead Lines Botox?</h4>
          <p>Our invisible art philosophy ensures natural-looking results that enhance your forehead without obvious signs of treatment. We specialize in precise frontalis muscle targeting using the latest injection techniques for optimal outcomes. Our doctors have extensive experience in forehead anatomy and aesthetic medicine, ensuring safe and effective treatments that maintain natural expressions.</p>
          
          <h4>Understanding Forehead Line Development</h4>
          <p>Forehead lines develop from repeated contractions of the frontalis muscle during facial expressions and brow movements. These dynamic wrinkles become more pronounced over time, creating permanent horizontal lines that can age your appearance. Professional botox treatment relaxes this muscle, smoothing existing lines and preventing further deepening while maintaining natural brow mobility.</p>
          
          <h4>Treatment Process and Forehead Care</h4>
          <p>Our forehead lines botox treatment begins with a detailed forehead consultation and muscle analysis. The injection process takes 10-15 minutes using precise techniques for optimal muscle relaxation. Results appear gradually over 3-14 days, with optimal effects lasting 3-4 months. We provide comprehensive forehead care instructions and ongoing support throughout your treatment journey.</p>
        </div>
      </div>
    </>
  );
};

export default ForeheadLinesBotox;