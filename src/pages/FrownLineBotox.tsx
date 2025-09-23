import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const FrownLineBotox = () => {
  const seoData = generateSEOMetadata(
    "Frown Line Botox London | Glabellar Lines Treatment | Cosmedocs Harley Street",
    "Expert frown line botox treatment in London for glabellar lines between eyebrows. Professional botulinum toxin injections by cosmetic doctors. Natural results at Harley Street clinic.",
    "/frown-line-botox"
  );

  const beforeAfterImages = [
    { 
      src: "/src/assets/frown-lines-before-after-1.jpg", 
      alt: "Frown line botox before and after - baby botox treatment", 
      caption: "Baby Botox Treatment: Smooth frown lines with natural expression preserved. Expert glabellar muscle relaxation." 
    },
    { 
      src: "/src/assets/frown-lines-injection-sites.jpg", 
      alt: "Frown lines injection sites illustration", 
      caption: "Strategic injection sites for frown lines botox treatment targeting corrugator and procerus muscles." 
    },
    { 
      src: "/src/assets/frown-lines-before-after-3.jpg", 
      alt: "Comprehensive frown lines and forehead treatment", 
      caption: "Combined <Link to='/forehead-lines-botox' className='text-purple-400 hover:text-purple-300 underline'>forehead</Link> and frown lines treatment for complete upper face rejuvenation and natural results." 
    }
  ];

  const faqs = [
    {
      question: "What are frown lines and how does botox help?",
      answer: "Frown lines (glabellar lines) are vertical wrinkles between the eyebrows caused by repeated muscle contractions. Botox relaxes these muscles, smoothing existing lines and preventing new ones from forming."
    },
    {
      question: "How long do frown line botox results last?",
      answer: "Frown line botox results typically last 3-4 months. The corrugator and procerus muscles gradually regain movement, requiring maintenance treatments for optimal results."
    },
    {
      question: "Is frown line botox painful?",
      answer: "Frown line botox involves minimal discomfort. Most clients describe it as brief pinching sensations. The treatment takes 10-15 minutes with fine needles ensuring maximum comfort."
    },
    {
      question: "What can I expect after frown line botox treatment?",
      answer: "You may experience mild swelling or redness at injection sites for a few hours. Results begin appearing within 3-5 days, with full effects visible after 2 weeks. Normal activities can be resumed immediately."
    },
    {
      question: "Am I a good candidate for frown line botox?",
      answer: "Ideal candidates have moderate to severe frown lines, are in good health, and have realistic expectations. A consultation with our expert doctors will determine if this treatment is right for you."
    },
    {
      question: "How much does frown line botox cost?",
      answer: "Frown line botox at Cosmedocs starts from £175 as a standalone treatment. We provide transparent pricing during consultation with package discounts available for multiple areas."
    },
    {
      question: "Can frown line botox be combined with other treatments?",
      answer: "Yes! Frown line botox works excellently with <Link to='/forehead-lines-botox' className='text-purple-400 hover:text-purple-300 underline'>forehead botox</Link>, <Link to='/crows-feet-botox' className='text-purple-400 hover:text-purple-300 underline'>crow's feet treatment</Link>, and dermal fillers for comprehensive facial rejuvenation. Our doctors create personalized treatment plans."
    },
    {
      question: "What's the difference between static and dynamic lines?",
      answer: "Dynamic frown lines appear when you make facial movements like frowning or concentrating and disappear when relaxed. Static frown lines are visible even when your face is at rest, developing over time as repeated expressions weaken skin elasticity."
    },
    {
      question: "When can I see results from my frown lines Botox?",
      answer: "For some people, results can become visible in as little as 2 days. Many people notice improvements in about 7 to 14 days after their frown line treatment. Everyone is different and results take time to fully develop."
    },
    {
      question: "How much Botox is needed for frown lines?",
      answer: "The amount depends on the depth of your frown lines and muscle strength. Typically, 15-25 units are used to effectively relax the glabellar muscles. A consultation will determine the exact number of units required for your desired look."
    },
    {
      question: "Can frown lines become permanent?",
      answer: "Yes, frown lines can become permanent if left untreated, especially as skin loses elasticity with age. Repeated frowning can cause lines to settle deeply into skin. Preventative Botox treatments can help stop them from becoming permanent."
    },
    {
      question: "How can I prevent frown lines from appearing?",
      answer: "Use topical retinoids to boost collagen production, apply sunscreen to protect from UV damage, wear sunglasses, quit smoking, get adequate sleep, and maintain a healthy diet. These lifestyle changes support healthy skin and prevent premature aging."
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
        <meta name="keywords" content="frown line botox London, glabellar lines treatment, botox between eyebrows, wrinkle treatment, cosmetic botox, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert frown line botox treatments in London",
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
                  <span className="text-purple-300">Frown Line Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - smooth expression that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Glabellar Lines Treatment</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Frown Line Botox Treatment</h2>
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
              <h2 className="text-3xl font-bold mb-4">Frown Line Botox Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert frown line botox treatments smooth glabellar lines while preserving natural facial expressions.
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

        {/* What is Frown Line Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Frown Line Botox?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Frown line botox targets the corrugator and procerus muscles between your eyebrows that create vertical glabellar lines. 
                Our invisible art approach smooths existing lines while preserving natural facial expressions.
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
                  <CardTitle className="text-white text-2xl text-center">Understanding Glabellar Lines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    Glabellar lines form between the eyebrows from repeated contractions of the corrugator and procerus muscles. 
                    These lines can make you appear angry, worried, or tired even when you're not, affecting your overall facial harmony.
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
                  <div className="text-purple-300 font-medium">Corrugator Muscle</div>
                  <div className="text-purple-300 font-medium">Procerus Muscle</div>
                  <div className="text-purple-300 font-medium">Vertical Lines</div>
                  <div className="text-purple-300 font-medium">Glabellar Region</div>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frown Lines Botox — What to Expect?</h2>
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
                      After a detailed consultation with a cosmetic specialist at Cosmedocs for your frown lines treatment, begin your glabellar lines treatment. The doctor uses very fine needles to inject botulinum toxin into the corrugator and procerus muscles in targeted areas such as:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Corrugator muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Procerus muscle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Glabellar region</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Between eyebrows</span>
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
                      Frown lines botox is considered safe with minimal side effects for most people. However, your treatment may have some slight side effects, such as:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Bruising at injection sites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Swelling around treated area</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Mild discomfort</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Temporary redness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Infection (rare)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>


        {/* How Does Botox Work for Frown Lines */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Does Botox Work for Frown Lines?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Understanding the science behind frown line botox helps you make informed decisions about your treatment.
              </p>
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
                      Muscle Relaxation Mechanism
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      Botox relaxes the muscles causing frown lines, specifically the corrugator and procerus muscles, resulting in a smoother, more refreshed appearance. It works by blocking nerve signals that cause muscle contractions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Frown Lines */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Types of Frown Lines</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Dynamic Frown Lines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Dynamic frown lines appear when you make facial movements or expressions like frowning, squinting, or concentrating. These lines are temporary and disappear when your face is relaxed.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      Botox is highly effective for dynamic lines as it relaxes the muscles to reduce their appearance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Static Frown Lines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Static frown lines are visible even when your face is at rest. They develop over time as repeated expressions weaken the skin's elasticity, causing permanent creases.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      Botox prevents static lines from becoming deeper and may require combination with dermal fillers for optimal results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Treatment Options */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Other Ways to Reduce Frown Lines</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                We have a range of effective treatments to target frown lines and achieve a smoother, more relaxed expression other than Frown lines Botox.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Enhanced Results with Dermal Fillers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      While Botox effectively treats dynamic wrinkles by relaxing underlying muscles, dermal fillers can further enhance the results. Fillers, injected to add volume and smooth out lines, are particularly useful for static wrinkles that Botox alone can't fully address.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Combination Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Combining Botox with dermal fillers offers a comprehensive approach to frown lines. Botox reduces muscle activity causing the lines, while fillers add volume to deep-set lines, resulting in smoother, more youthful skin.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Frown Lines Form & Our Solution */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Why Frown Lines Form & Our Solution</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed">
                Understanding the root causes of frown lines helps us deliver targeted, effective treatments that address both existing lines and prevent future formation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >

                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Comprehensive Solution</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Precision Botox Treatment:</strong> Targeted muscle relaxation for immediate smoothing of existing lines</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Prevention Strategy:</strong> Stop new lines from forming by relaxing overactive muscles</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Natural Results:</strong> Preserve facial expressions while smoothing unwanted lines</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Expert Technique:</strong> Harley Street standards with our invisible art philosophy</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Long-lasting Results:</strong> 3-4 months of smoother, more youthful appearance</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-purple-500/30 overflow-hidden">
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">Expert Treatment Process</h4>
                  <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg"
                    >
                      <source src="https://www.cosmedocs.com/wp-content/uploads/2021/09/Frown_Trim-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="mt-6 bg-black/30 rounded-2xl p-4">
                    <p className="text-white text-center font-medium mb-2">What You'll See:</p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                      <span className="bg-purple-500/30 px-3 py-1 rounded-full text-purple-200">Precise Injection Technique</span>
                      <span className="bg-purple-500/30 px-3 py-1 rounded-full text-purple-200">Muscle Assessment</span>
                      <span className="bg-purple-500/30 px-3 py-1 rounded-full text-purple-200">Immediate Results</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Frown Line Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional frown line botox treatments at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Frown Lines Treatment</CardTitle>
                    <div className="text-2xl font-bold text-purple-300">£175</div>
                    <div className="text-sm text-purple-400">Standalone Treatment</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Corrugator muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Procerus muscle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Expert consultation included</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Natural-looking results</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Follow-up care included</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full"
                        onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                      >
                        Book Treatment
                      </Button>
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
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Expert Consultation</CardTitle>
                    <div className="text-2xl font-bold text-purple-300">£50</div>
                    <div className="text-sm text-purple-400">Initial Assessment</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Detailed muscle assessment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Facial movement analysis</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Treatment suitability check</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Personalized treatment plan</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">No obligation quote</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                        onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                      >
                        Book Consultation
                      </Button>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about frown line botox treatments answered by our expert doctors.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Smooth Your Frown Lines?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how our invisible art approach 
                can transform your appearance with natural, sophisticated results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.open('tel:0333 0551 503', '_self')}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Expert Frown Line Botox Treatment in London</h3>
          <p>Cosmedocs offers professional frown line botox treatments targeting glabellar lines between the eyebrows. Our experienced cosmetic doctors use advanced botulinum toxin injection techniques to smooth vertical frown lines while preserving natural facial expressions. Located in prestigious Harley Street, our clinic provides comprehensive consultations and personalized treatment plans.</p>
          
          <h4>Why Choose Cosmedocs for Frown Line Botox?</h4>
          <p>Our invisible art philosophy ensures natural-looking results that enhance your appearance without obvious signs of treatment. We specialize in precise muscle targeting using the latest injection techniques for optimal outcomes. Our doctors have extensive experience in facial anatomy and aesthetic medicine, ensuring safe and effective treatments.</p>
          
          <h4>Understanding Frown Line Formation</h4>
          <p>Frown lines develop from repeated contractions of the corrugator and procerus muscles during facial expressions. These dynamic wrinkles become static over time, creating permanent vertical lines that can make you appear angry or worried. Professional botox treatment relaxes these muscles, smoothing existing lines and preventing further deepening.</p>
          
          <h4>Treatment Process and Aftercare</h4>
          <p>Our frown line botox treatment begins with a thorough consultation and facial analysis. The injection process takes 10-15 minutes using fine needles for minimal discomfort. Results appear gradually over 3-14 days, with optimal effects lasting 3-4 months. We provide comprehensive aftercare instructions and support throughout your treatment journey.</p>
        </div>
      </div>
    </>
  );
};

export default FrownLineBotox;