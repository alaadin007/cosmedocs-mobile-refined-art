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

const BunnyLinesBotox = () => {
  const seoData = generateSEOMetadata(
    "Bunny Lines Botox London | Nose Wrinkle Treatment | Cosmedocs Harley Street",
    "Expert bunny lines botox treatment in London for nose wrinkles and scrunch lines. Professional nasalis muscle botox by cosmetic doctors. Natural results at Harley Street clinic.",
    "/bunny-lines-botox"
  );

  const beforeAfterImages = [
    { 
      src: "/src/assets/bunny-lines-before-after-1.jpg", 
      alt: "Bunny lines botox before and after - nose bridge smoothing", 
      caption: "Bunny Lines Botox Treatment: Smooth, refined nose bridge with natural expressions preserved. Expert nasalis muscle relaxation." 
    },
    { 
      src: "/src/assets/bunny-lines-before-after-3.jpg", 
      alt: "Forehead and bunny lines comprehensive treatment", 
      caption: "Combined forehead and bunny lines treatment for complete upper face rejuvenation." 
    },
    { 
      src: "/src/assets/bunny-lines-before-after-4.jpg", 
      alt: "Nose wrinkles botox before after comparison", 
      caption: "Comparison showing significant reduction in nose wrinkles and bunny lines with expert botox treatment." 
    }
  ];

  const faqs = [
    {
      question: "What are bunny lines and how does botox help?",
      answer: "Bunny lines are diagonal wrinkles that appear on either side of your nose when you scrunch it or smile. Botox relaxes the nasalis muscle that creates these lines, smoothing the nose bridge while maintaining natural facial expressions."
    },
    {
      question: "How long do bunny lines botox results last?",
      answer: "Bunny lines botox results typically last 3-4 months. The nasalis muscle gradually regains movement, requiring maintenance treatments to sustain smooth nose bridge appearance and prevent line reformation."
    },
    {
      question: "Is bunny lines botox painful?",
      answer: "Bunny lines botox involves minimal discomfort. Most clients describe it as brief pinching sensations along the nose bridge. The treatment takes 5-10 minutes with our doctors using precise injection techniques for comfort."
    },
    {
      question: "What can I expect after bunny lines botox treatment?",
      answer: "You may experience mild swelling or slight redness at injection sites for a few hours. Results begin appearing within 3-7 days, with full effects visible after 2 weeks. Normal activities can be resumed immediately with specific care instructions."
    },
    {
      question: "Am I a good candidate for bunny lines botox?",
      answer: "Ideal candidates have prominent nose wrinkles when smiling or scrunching, are in good health, and want natural-looking results. A consultation will assess your nose muscle activity and determine treatment suitability."
    },
    {
      question: "How much does bunny lines botox cost?",
      answer: "Bunny lines botox at Cosmedocs costs £100 when added to other botox treatments, or £175 as a standalone procedure. We provide transparent pricing during consultation with package discounts available."
    },
    {
      question: "Can bunny lines botox be combined with other treatments?",
      answer: "Yes! Bunny lines botox works excellently with upper face botox treatments and dermal fillers for comprehensive facial rejuvenation. Our doctors create personalized combination treatment plans for optimal results."
    },
    {
      question: "Are there any side effects associated with Bunny Lines Botox?",
      answer: "Side effects of Botox injections are generally mild and temporary and may include redness, swelling, bruising, and mild discomfort at the injection sites. These side effects typically resolve on their own within a few days."
    },
    {
      question: "Will bunny lines Botox affect my ability to flare my nostrils?",
      answer: "Bunny lines Botox specifically targets the muscles around the nose and should not affect your ability to flare your nostrils or make other facial expressions involving the nose. Our provider at Cosmedocs carefully administers the injections to preserve your natural facial movement."
    },
    {
      question: "Can bunny lines Botox also treat other areas of the face?",
      answer: "While bunny lines Botox specifically targets the muscles responsible for bunny lines, it can indirectly improve the appearance of adjacent areas of the face, such as the upper nose and between the eyebrows, by reducing overall facial tension and smoothing wrinkles."
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
        <meta name="keywords" content="bunny lines botox London, nose wrinkle treatment, nasalis muscle botox, nose scrunch lines, cosmetic botox, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert bunny lines botox treatments in London",
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
                  <span className="text-purple-300">Bunny Lines Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - smooth nose bridge that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Nose Wrinkle Treatment</p>
                  <p className="text-sm text-gray-300">5-10 minutes • Results last 3-4 months</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Bunny Lines Botox Treatment</h2>
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
                <p className="text-gray-300">5-10 minutes including consultation</p>
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
              <h2 className="text-3xl font-bold mb-4">Bunny Lines Botox Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert bunny lines botox treatments smooth nose wrinkles while maintaining natural facial expressions.
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

        {/* What is Bunny Lines Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Bunny Lines Botox?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Bunny lines botox targets the nasalis muscle on either side of your nose that creates diagonal wrinkles when you scrunch or smile. 
                These lines form from repeated contractions of the nasalis muscle during facial expressions and can become more prominent over time, 
                affecting the smooth appearance of your nose bridge. Our invisible art approach smooths these lines while preserving your natural, beautiful expressions.
              </p>
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
                  <div className="text-purple-300 font-medium">Nasalis Muscle</div>
                  <div className="text-purple-300 font-medium">Diagonal Lines</div>
                  <div className="text-purple-300 font-medium">Nose Bridge</div>
                  <div className="text-purple-300 font-medium">Scrunch Lines</div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Bunny Lines Botox — What to Expect?</h2>
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
                      After a detailed consultation with a cosmetic specialist at Cosmedocs for your bunny lines treatment, begin your nose wrinkle treatment. The doctor uses a very fine needle to inject botulinum toxin into the nasalis muscle in targeted areas such as:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Nose bridge sides</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Nasalis muscle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Upper nose area</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Scrunch line areas</span>
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
                      After receiving bunny lines Botox, it causes minimal to no pain for most people. Medical experts consider it a safe treatment. However, your bunny lines botox treatment may have some slight side effects, such as:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Redness at injection sites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Swelling around nose area</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Mild bruising</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Temporary numbness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Mild discomfort</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Does Botox for Bunny Lines Work */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Does Botox for Bunny Lines Work?</h2>
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
                      Neuromuscular Blocking Mechanism
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
                      Botox, scientifically known as Botulinum toxin, works by temporarily relaxing muscles to diminish wrinkles. When used for bunny lines, Botox is typically injected along the bridge of the nose, targeting specific muscles like the nasalis.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      By blocking nerve signals through neuromuscular blocking, Botox weakens or temporarily paralyzes the muscles, resulting in a reduced appearance of bunny lines and smoother skin around the nose.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Nose Wrinkles */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Different Types of Nose Wrinkles</h2>
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
                    <CardTitle className="text-white text-xl">Dynamic Bunny Lines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Wrinkles that only appear during facial expressions and disappear when your face is at rest.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      These lines respond excellently to Botox treatment and are the most common type treated.
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
                    <CardTitle className="text-white text-xl">Static Bunny Lines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Permanent wrinkles visible even when your face is relaxed, caused by repeated muscle movements and loss of skin elasticity over time.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      These lines may require combination treatments with dermal fillers for optimal results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Compensatory Bunny Lines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      These lines can develop as a result of compensatory muscle activity following Botox treatments in other facial areas, particularly the glabella (frown lines). The nasalis muscle may become overactive to compensate for restricted movement elsewhere.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Nasal Flare Lines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      These lines appear when the nostrils flare during breathing or emotional expressions. They can be treated alongside bunny lines for comprehensive nose area rejuvenation and natural-looking results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results and Maintenance */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Results and Maintenance of Botox for Nose Wrinkles</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Effect of Botox</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-purple-300 font-semibold mb-2">Onset of Results:</h4>
                    <p className="text-gray-300">
                      The effects of Botox usually become noticeable within a few days after treatment. Full results will be visible in about one to two weeks.
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
                    <CardTitle className="text-white text-xl">Lasting of Botox</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-purple-300 font-semibold mb-2">Duration of Effects:</h4>
                    <p className="text-gray-300">
                      The smoothing effects of Botox for bunny lines typically last between three to six months. As the effects wear off, muscle activity will gradually return, and the lines may reappear.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Maintenance of Botox</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-purple-300 font-semibold mb-2">Maintenance Treatments:</h4>
                    <p className="text-gray-300">
                      Follow-up treatments are recommended every four to six months to maintain a smooth appearance. Regular treatments can lead to longer-lasting results over time.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Botox for Bunny Lines */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Botox for Bunny Lines?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Smoother, Youthful Skin",
                  description: "Botox injections precisely target the underlying muscles responsible for bunny lines. Moreover, it relaxes those muscles, smoothing away wrinkles for more radiant skin."
                },
                {
                  title: "Minimally Invasive Treatment", 
                  description: "Botox is a minimally invasive treatment that requires no downtime. It also allows you to resume your daily activities immediately after your appointment."
                },
                {
                  title: "Quick, Convenient Procedure",
                  description: "Healthcare professionals administer Botox injections quickly during in-office appointments, offering a convenient solution for individuals with busy lifestyles."
                },
                {
                  title: "Long-Lasting Results",
                  description: "While results may vary, many clients experience a noticeable improvement in the appearance of bunny lines for up to six months or longer with regular treatments."
                },
                {
                  title: "Customized Treatment Plans",
                  description: "At Cosmedocs, we craft personalized treatment plans. We address your unique concerns and goals. Our aim? Natural-looking results, tailored to your facial anatomy."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center gap-3">
                        <CheckCircle className="text-purple-400" size={24} />
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-6 text-white">Bunny Lines Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional bunny lines botox treatments at our Harley Street clinic.
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
                    <CardTitle className="text-white text-xl">Bunny Lines Treatment</CardTitle>
                    <div className="text-2xl font-bold text-purple-300">£175</div>
                    <div className="text-sm text-purple-400">Standalone Treatment</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both sides of nose</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Nasalis muscle treatment</span>
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
                        <span className="text-gray-300">Detailed facial assessment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Muscle movement analysis</span>
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
                Common questions about bunny lines botox treatments answered by our expert doctors.
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
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Smooth Your Bunny Lines?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Book your expert consultation today and discover how our invisible art approach can refine your nose bridge naturally.
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
          <h3>Expert Bunny Lines Botox Treatment in London</h3>
          <p>Cosmedocs offers professional bunny lines botox treatments targeting nose wrinkles and scrunch lines. Our experienced cosmetic doctors use advanced botulinum toxin injection techniques to smooth bunny lines while preserving natural facial expressions. Located in prestigious Harley Street, our clinic provides comprehensive nose area assessments and personalized treatment plans.</p>
          
          <h4>Why Choose Cosmedocs for Bunny Lines Botox?</h4>
          <p>Our invisible art philosophy ensures natural-looking results that enhance your nose bridge without obvious signs of treatment. We specialize in precise nasalis muscle targeting using the latest injection techniques for optimal outcomes. Our doctors have extensive experience in nasal anatomy and aesthetic medicine, ensuring safe and effective treatments that maintain natural expressions.</p>
          
          <h4>Understanding Bunny Line Development</h4>
          <p>Bunny lines develop from repeated contractions of the nasalis muscle during smiling, laughing, and nose scrunching. These diagonal wrinkles become more pronounced over time, creating permanent lines that can affect nose bridge smoothness. Professional botox treatment relaxes this muscle, smoothing existing lines and preventing further development while maintaining natural nasal expressions.</p>
          
          <h4>Treatment Process and Nose Care</h4>
          <p>Our bunny lines botox treatment begins with a detailed nose area consultation and muscle analysis. The injection process takes 5-10 minutes using specialized techniques for the delicate nasal area. Results appear gradually over 3-14 days, with optimal effects lasting 3-4 months. We provide specific nose area aftercare instructions and ongoing support throughout your treatment journey.</p>
        </div>
      </div>
    </>
  );
};

export default BunnyLinesBotox;