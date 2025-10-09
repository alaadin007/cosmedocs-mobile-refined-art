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

// Import images properly
import frownLinesBeforeAfter1 from "@/assets/frown-lines-before-after-1.jpg";
import frownLinesBeforeAfter2 from "@/assets/frown-lines-before-after-2.jpg";
import frownLinesBeforeAfter3 from "@/assets/frown-lines-before-after-3.jpg";
import frownLinesBeforeAfter4 from "@/assets/frown-lines-before-after-4.jpg";
import frownLinesInjectionSites from "@/assets/frown-lines-injection-sites.jpg";

const FrownLineBotox = () => {
  const seoData = generateSEOMetadata(
    "Frown Line Botox London | Glabellar Lines Treatment | Cosmedocs Harley Street",
    "Expert frown line botox treatment in London for glabellar lines between eyebrows. Professional botulinum toxin injections by cosmetic doctors. Natural results at Harley Street clinic.",
    "/frown-line-botox"
  );

  const beforeAfterImages = [
    { 
      src: frownLinesBeforeAfter1, 
      alt: "Frown lines smoothed by Botox, visible in before and after photos", 
      caption: "Frown Line Transformation with Botox: Smooth glabellar lines with natural expression preserved. Expert muscle relaxation." 
    },
    { 
      src: frownLinesBeforeAfter2, 
      alt: "Before and after frown lines at Harley Street Botox clinic", 
      caption: "Frown Lines Botox Treatment: Professional treatment at our Harley Street clinic showing natural-looking results." 
    },
    { 
      src: frownLinesBeforeAfter3, 
      alt: "Frown lines before and after treatment for men", 
      caption: "Frown Lines and Forehead Lines Treatment For Men: Comprehensive upper face rejuvenation with masculine results." 
    },
    { 
      src: frownLinesBeforeAfter4, 
      alt: "Harley Street Botox treatment results on frown lines", 
      caption: "Botox Frown Line Before and After: Expert treatment demonstrating our invisible art approach to facial aesthetics." 
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <html lang="en-GB" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="frown line botox, botox frown lines, glabellar lines botox, botox 11 lines, eleven lines botox, botox for 11 lines, 11s botox, botox on 11s, botox forehead lines, botox before after frown lines, frown lines botox before and after, remove frown lines, botox for scowl lines, Harley Street clinic London" />
        
        {/* MedicalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert frown line botox and glabellar lines treatment in London",
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

        {/* MedicalProcedure Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Frown Line Botox Treatment",
            "alternateName": ["Glabellar Lines Botox", "11 Lines Botox", "Botox for Frown Lines"],
            "description": "Professional botox treatment for frown lines (11 lines) and glabellar lines between eyebrows. Expert injections to smooth vertical lines and prevent wrinkle formation.",
            "procedureType": "Cosmetic",
            "bodyLocation": "Glabella (between eyebrows)",
            "preparation": "Consultation and facial analysis",
            "followup": "Results visible in 3-14 days, lasting 3-4 months"
          })}
        </script>

        {/* Offer Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Frown Line Botox Treatment",
            "description": "Professional frown line botox treatment at Harley Street clinic",
            "price": "175",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "seller": {
              "@type": "MedicalBusiness",
              "name": "Cosmedocs"
            }
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<[^>]*>/g, '')
              }
            }))
          })}
        </script>

        {/* Breadcrumb Schema */}
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
                "name": "Frown Line Botox",
                "item": seoData.canonical
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
                  <span className="text-purple-300">Botox for Frown Lines & 11 Lines</span>
                  <span className="block text-sm mt-4">Invisible art - smooth expression that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Glabellar Lines Botox Treatment in London</p>
                  <p className="text-sm text-gray-300">10-15 minutes • Results last 3-4 months • Natural before and after results</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Botox for 11 Lines & Glabellar Lines Treatment</h2>
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
              <h2 className="text-3xl font-bold mb-4">Botox Before and After 11 Lines: Frown Lines Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See real botox frown lines before and after results. Our expert eleven lines botox treatments smooth glabellar lines and remove frown lines whilst preserving natural facial expressions at our Harley Street London clinic.
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
                        loading="lazy"
                        width="400"
                        height="256"
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
              <h2 className="text-3xl font-bold mb-6 text-white">What is Botox for 11 Lines and Frown Lines?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Botox on 11 lines (also called eleven lines or glabellar lines) targets the corrugator and procerus muscles between your eyebrows that create vertical frown lines. 
                Our botox for frown lines treatment uses precise injections to smooth existing 11s and prevent new wrinkles from forming, whilst preserving natural facial expressions. This botox forehead lines treatment delivers natural before and after results.
              </p>
            </motion.div>

            {/* Injection Sites Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <img 
                src={frownLinesInjectionSites} 
                alt="Botox 11 lines injection sites - glabellar lines treatment diagram"
                loading="lazy"
                width="448"
                height="448"
                className="mx-auto rounded-lg shadow-lg max-w-md w-full"
              />
              <p className="text-sm text-gray-300 mt-4 italic">
                Strategic injection sites for botox on 11s and frown lines treatment targeting corrugator and procerus muscles for optimal results.
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
                  <CardTitle className="text-white text-2xl text-center">Understanding Glabellar Lines & Key Treatment Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    Glabellar lines (commonly known as 11 lines or eleven lines) form between the eyebrows from repeated contractions of the corrugator and procerus muscles. 
                    These frown lines can make you appear angry, worried, or tired even when you're not. Botox 11 effectively treats these scowl lines, restoring facial harmony with natural-looking results.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Corrugator Supercilii</h4>
                      <p className="text-gray-300 text-sm">Primary muscle causing vertical frown lines</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Procerus Muscle</h4>
                      <p className="text-gray-300 text-sm">Creates horizontal lines at the bridge of the nose</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Depressor Supercilii</h4>
                      <p className="text-gray-300 text-sm">Contributes to brow depression and deep furrows</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Botox 11 Lines Before After — What to Expect?</h2>
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
                      After a detailed consultation with a cosmetic specialist at Cosmedocs in Harley Street, London, your botox for 11 lines treatment begins. The doctor uses very fine needles to inject botulinum toxin into the corrugator and procerus muscles to remove frown lines and smooth eleven lines in targeted areas such as:
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
                      Following your botox frown lines treatment you may continue normal daily activities immediately. Results typically appear within 3-14 days, with full before and after effects visible by two weeks.
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
                      Botox for 11 lines is considered safe with minimal side effects for most people. However, your eleven lines botox treatment may have some slight side effects, such as:
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
              <h2 className="text-3xl font-bold mb-6 text-white">How Does Botox Work to Remove Frown Lines and 11s?</h2>
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
                      Botox on 11 lines relaxes the muscles causing frown lines and scowl lines, specifically the corrugator and procerus muscles, resulting in a smoother, more refreshed appearance. Botox glabellar treatments work by blocking nerve signals that cause muscle contractions, allowing the skin to smooth out naturally. This is why botox and frown lines treatment produces such effective before and after results.
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
              <h2 className="text-3xl font-bold mb-6 text-white">Types of Frown Lines: Understanding 11 Lines</h2>
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
                      Dynamic frown lines (11 lines) appear when you make facial movements or expressions like frowning, squinting, or concentrating. These eleven lines are temporary and disappear when your face is relaxed.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      Botox for 11 lines before and after shows highly effective results for dynamic lines as it relaxes the muscles to reduce their appearance naturally.
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
                      Static frown lines are visible even when your face is at rest. These deeper 11s develop over time as repeated expressions weaken the skin's elasticity, causing permanent creases.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      Botox 11 lines before after treatment prevents static lines from becoming deeper and may require combination with dermal fillers for optimal results to fully remove frown lines.
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
              <h2 className="text-3xl font-bold mb-6 text-white">Other Ways to Remove Frown Lines and 11s</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                We have a range of effective treatments to target eleven lines and achieve a smoother, more relaxed expression in addition to botox frown lines treatment at our London Harley Street clinic.
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
                      Whilst botox on 11s effectively treats dynamic wrinkles by relaxing underlying muscles, dermal fillers can further enhance botox before after frown lines results. Fillers, injected to add volume and smooth out lines, are particularly useful for static 11 lines that botox glabellar treatment alone can't fully address.
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
                      Combining botox for 11 lines with dermal fillers offers a comprehensive approach to remove frown lines. Botox reduces muscle activity causing the eleven lines, whilst fillers add volume to deep-set lines, resulting in smoother, more youthful skin with superior before and after results.
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
              <h2 className="text-4xl font-bold mb-6 text-white">Why 11 Lines Form & Our Botox Solution</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed">
                Understanding the root causes of frown lines and eleven lines helps us deliver targeted, effective botox treatments that address both existing 11s and prevent future formation. Our botox for scowl lines treatment at Harley Street, London, delivers exceptional before and after results.
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
                  <h3 className="text-2xl font-bold text-white mb-6">Our Comprehensive Botox 11s Solution</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Precision Botox Treatment:</strong> Targeted muscle relaxation for immediate smoothing of existing eleven lines and glabellar lines</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Prevention Strategy:</strong> Stop new frown lines from forming by relaxing overactive corrugator and procerus muscles</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Natural Results:</strong> Preserve facial expressions whilst smoothing unwanted 11 lines with superior botox before and after results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Expert Technique:</strong> Harley Street London standards with our invisible art philosophy for botox forehead lines</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Long-lasting Results:</strong> 3-4 months of smoother, more youthful appearance to remove frown lines effectively</p>
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
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">Expert Botox 11 Lines Treatment Process</h4>
                  <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    <video 
                      controls 
                      preload="metadata"
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg"
                      aria-label="Botox frown lines treatment demonstration video"
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
              <h2 className="text-3xl font-bold mb-6 text-white">Botox 11 Lines Pricing London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional botox frown lines and eleven lines treatments at our Harley Street London clinic.
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
                    <CardTitle className="text-white text-xl">Botox for 11 Lines Treatment</CardTitle>
                    <div className="text-2xl font-bold text-purple-300">£175</div>
                    <div className="text-sm text-purple-400">Eleven Lines Botox - Standalone Treatment</div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions About Botox 11 Lines</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about botox frown lines and eleven lines treatments answered by our expert doctors in London.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Remove Frown Lines with Botox 11s?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors in Harley Street, London and discover how our invisible art approach to botox on 11 lines 
                can transform your appearance with natural, sophisticated before and after results.
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
        <div className="sr-only" aria-hidden="true">
          <h3>Expert Botox for 11 Lines and Frown Lines Treatment in London Harley Street</h3>
          <p>Cosmedocs offers professional botox 11 lines and glabellar lines botox treatments targeting frown lines between the eyebrows in London. Our experienced cosmetic doctors use advanced botulinum toxin injection techniques to smooth vertical eleven lines and remove frown lines whilst preserving natural facial expressions. Located in prestigious Harley Street, our clinic provides comprehensive consultations and personalised treatment plans for botox on 11s with excellent before and after results.</p>
          
          <h4>Why Choose Cosmedocs for Botox Frown Lines and 11 Lines Treatment?</h4>
          <p>Our invisible art philosophy ensures natural-looking botox before after frown lines results that enhance your appearance without obvious signs of treatment. We specialise in precise muscle targeting using the latest injection techniques for botox glabellar treatments delivering optimal outcomes. Our doctors have extensive experience in facial anatomy and aesthetic medicine, ensuring safe and effective eleven lines botox and botox forehead lines treatments. We deliver superior botox 11 lines before after results at our London Harley Street clinic.</p>
          
          <h4>Understanding 11 Lines and Frown Line Formation</h4>
          <p>Frown lines (also called 11 lines, eleven lines, or scowl lines) develop from repeated contractions of the corrugator and procerus muscles during facial expressions. These dynamic wrinkles become static over time, creating permanent vertical lines that can make you appear angry or worried. Professional botox for 11 lines treatment relaxes these muscles, smoothing existing lines and preventing further deepening. Botox on 11 lines is highly effective to remove frown lines and achieve natural before and after results.</p>
          
          <h4>Botox 11s Treatment Process and Aftercare in London</h4>
          <p>Our botox frown line treatment begins with a thorough consultation and facial analysis at our Harley Street London clinic. The injection process for botox 11 takes 10-15 minutes using fine needles for minimal discomfort. Botox for 11 lines before and after results appear gradually over 3-14 days, with optimal effects lasting 3-4 months. We provide comprehensive aftercare instructions and support throughout your botox and frown lines treatment journey.</p>
          
          <h4>Botox Before and After 11 Lines: Real Results</h4>
          <p>Our botox frown lines before and after gallery showcases real patient transformations. Botox 11 lines before after photos demonstrate how effectively we can smooth eleven lines whilst maintaining natural expressions. Whether treating dynamic or static frown lines, our botox for scowl lines delivers consistent, natural-looking results. Patients typically see visible improvements within 3-14 days, with full botox before after frown lines effects by two weeks.</p>
          
          <h4>Combining Botox Forehead Lines with 11 Lines Treatment</h4>
          <p>Many patients combine botox on 11s with botox forehead lines treatment for comprehensive upper face rejuvenation. This combination approach addresses both glabellar lines and horizontal forehead wrinkles, creating harmonious before and after results. Our expert doctors can create bespoke treatment plans that address multiple areas whilst preserving your natural expressions and delivering the invisible art aesthetic Cosmedocs is known for throughout London and Harley Street.</p>
        </div>
      </div>
    </>
  );
};

export default FrownLineBotox;