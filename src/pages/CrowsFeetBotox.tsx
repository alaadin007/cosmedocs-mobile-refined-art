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
import beforeAfter1 from "@/assets/before-after/crows-feet-botox-1.png";
import beforeAfter2 from "@/assets/before-after/crows-feet-botox-2.jpg";
import beforeAfter3 from "@/assets/before-after/crows-feet-botox-3.jpeg";

const CrowsFeetBotox = () => {
  const seoData = generateSEOMetadata(
    "Crow's Feet Botox London | Eye Wrinkle Treatment | Cosmedocs Harley Street",
    "Expert crow's feet botox treatment in London for eye wrinkles and laugh lines. Professional orbicularis oculi muscle botox by cosmetic doctors. Natural results at Harley Street clinic.",
    "/crows-feet-botox"
  );

  const beforeAfterImages = [
    { 
      src: beforeAfter1, 
      alt: "Botox for crow's feet before and after treatment showing dramatic reduction in eye wrinkles", 
      caption: "Before: Deep crow's feet visible around eyes at rest. After: Smooth, refreshed eye area with softened lines whilst maintaining natural expression. 12 units Botox treatment to orbicularis oculi muscle." 
    },
    { 
      src: beforeAfter2, 
      alt: "Comprehensive upper face botox treatment before after showing forehead, frown lines, and crow's feet improvement", 
      caption: "Before: Pronounced crow's feet, forehead lines, and frown lines creating aged appearance. After: Complete upper face rejuvenation with smooth forehead, relaxed glabella, and diminished lateral canthal lines. Full face botox treatment." 
    },
    { 
      src: beforeAfter3, 
      alt: "Crows feet botox before after comparison demonstrating eye wrinkle reduction and skin smoothing", 
      caption: "Before: Multiple fine lines radiating from outer eye corners when smiling. After: Significantly reduced crow's feet wrinkles with preserved natural smile, achieving fresh and youthful eye contours. 10 units per side." 
    }
  ];

  const faqs = [
    {
      question: "What are crow's feet and how does botox help?",
      answer: "Crow's feet are fine lines radiating from the outer corners of your eyes caused by repeated muscle contractions when smiling or squinting. Botox relaxes the orbicularis oculi muscle, smoothing these lines while preserving natural smile expressions."
    },
    {
      question: "How long do crow's feet botox results last?",
      answer: "Crow's feet botox results typically last 3-4 months. The orbicularis oculi muscle gradually regains movement, requiring maintenance treatments for sustained smoothness around the eye area."
    },
    {
      question: "Is crow's feet botox painful?",
      answer: "Crow's feet botox involves minimal discomfort due to the delicate eye area. Most clients describe it as brief pinching sensations. The treatment takes 10-15 minutes with our doctors using specialized techniques for comfort."
    },
    {
      question: "What can I expect after crow's feet botox treatment?",
      answer: "You may experience mild swelling or slight bruising around the injection sites for 24-48 hours. Results begin appearing within 3-7 days, with full effects visible after 2 weeks. Normal activities can be resumed immediately."
    },
    {
      question: "Am I a good candidate for crow's feet botox?",
      answer: "Ideal candidates have dynamic crow's feet that appear when smiling or squinting, are in good health, and want natural-looking results. A consultation will determine if this treatment suits your specific concerns."
    },
    {
      question: "How much does crow's feet botox cost?",
      answer: "Crow's feet botox at Cosmedocs costs £175 as a standalone treatment. We offer package deals when combined with other facial areas, providing excellent value for comprehensive treatments."
    },
    {
      question: "Can crow's feet botox be combined with other treatments?",
      answer: "Yes! Crow's feet botox works excellently with frown line botox, forehead treatment, and under-eye dermal fillers for complete eye area rejuvenation. Our doctors create personalized combination treatment plans."
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
        <meta name="keywords" content="crow's feet botox, crows feet botox before and after, botox for crow's feet, crows feet treatment, botox crows feet, crow's feet before and after, eye wrinkle treatment, lateral canthal lines, orbicularis oculi botox, crows feet around eyes, best treatment for crow's feet, Harley Street clinic London" />
        
        {/* MedicalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert crow's feet botox treatments in London",
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
            "name": "Crow's Feet Botox Treatment",
            "alternateName": ["Lateral Canthal Lines Treatment", "Eye Wrinkle Botox", "Crow's Feet Reduction"],
            "description": "Professional botox treatment for crow's feet and eye wrinkles. Expert injections to smooth lateral canthal lines and prevent wrinkle formation around the eyes.",
            "procedureType": "Cosmetic",
            "bodyLocation": "Lateral canthal area (outer eye corners)",
            "preparation": "Consultation and facial analysis",
            "followup": "Results visible in 3-7 days, lasting 3-4 months"
          })}
        </script>

        {/* Offer Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Crow's Feet Botox Treatment",
            "description": "Professional crow's feet botox treatment at Harley Street clinic",
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
                "name": "Crow's Feet Botox",
                "item": seoData.canonical
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-900/50 border-b border-gray-800" aria-label="Breadcrumb">
          <div className="page-container py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colours flex items-center">
                  <span className="sr-only">Home</span>
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mx-2">/</span>
                <Link to="/treatments" className="text-gray-400 hover:text-white transition-colours">
                  Treatments
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mx-2">/</span>
                <span className="text-white">Crow's Feet Botox</span>
              </li>
            </ol>
          </div>
        </nav>

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
                  <span className="text-purple-300">Crow's Feet Botox & Eye Wrinkle Treatment</span>
                  <span className="block text-2xl mt-4">Invisible art - crease less eyes that speak without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Crows Feet Treatment in London</p>
                  <p className="text-lg text-gray-300">10-15 minutes • Results last 3-4 months • Natural before and after results</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Crow's Feet Botox Treatment</h2>
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
              <h2 className="text-3xl font-bold mb-4">Botox Crows Feet Before and After Results</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                View our crows feet botox before and after results at Cosmedocs Harley Street. These before after botox crows feet images demonstrate significant improvements in crow's feet around eyes, resulting in fresh, smooth, and crease-less transformation with our best treatment for crow's feet.
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

        {/* What is Crow's Feet Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What Are Crow's Feet and How Does Botox Help?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Crow's feet (also known as lateral canthal lines or smile lines) are wrinkles around eyes that appear when smiling or squinting. These crows feet wrinkles form from repeated contractions of the orbicularis oculi muscle. <Link to="/face-botox-areas" className="text-purple-300 hover:text-purple-200 underline">Botox for crow's feet</Link> targets this orbital muscle, smoothing crow feet eyes whilst preserving your natural expressions. Our <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10374187/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">clinically proven treatment</a> delivers exceptional botox crows feet before after results.
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
                  <CardTitle className="text-white text-2xl text-center">Understanding Crow's Feet Formation & Key Treatment Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    Crows feet (crowsfeet) develop from repeated contractions of the orbicularis oculi muscle when you smile, laugh, or squint. These crows feet eye wrinkles are common signs of ageing. 
                    Over time, these dynamic expressions create permanent crow feet wrinkles that can age your appearance. Botox to crows feet effectively smooths these lines, delivering natural crow's feet before and after transformations.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Orbicularis Oculi</h4>
                      <p className="text-gray-300 text-sm">Primary muscle causing crow's feet around eyes</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Lateral Canthal Lines</h4>
                      <p className="text-gray-300 text-sm">Lines extending from outer corners of eyes</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-semibold mb-2">Smile Lines</h4>
                      <p className="text-gray-300 text-sm">Expression lines that form during smiling and laughing</p>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Crow's Feet Botox — What to Expect?</h2>
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
                      After a detailed consultation with a cosmetic specialist at Cosmedocs for your crows feet treatment, we begin your orbital muscle treatment. The doctor uses very fine needles to inject botulinum toxin into the orbicularis oculi muscle to treat crows feet face wrinkles in targeted areas such as:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Orbicularis oculi muscle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Lateral canthal area</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Eye corner regions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Outer eye zones</span>
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
                      Botox for crows feet is considered <a href="https://www.aad.org/public/cosmetic/wrinkles/botulinum-toxin-faqs" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">safe with minimal side effects</a> for most people when administered by qualified professionals. However, your crows feet wrinkles treatment may have some slight side effects, such as:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Bruising around injection sites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Swelling around eye area</span>
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
                        <span>Eye dryness (rare)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Does Botox Work for Crow's Feet */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Does Botox Work to Get Rid of Crow's Feet?</h2>
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
                      Botox crow's feet treatment relaxes the orbicularis oculi muscle, resulting in smoother, more youthful-looking crow eyes. It works by <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9316553/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">blocking nerve signals</a> that cause muscle contractions, preventing the formation of crows feet wrinkles whilst maintaining natural smile expressions. This creates impressive smiling botox before and after crows feet transformations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Crow's Feet */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Types of Crow's Feet: Dynamic vs Static</h2>
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
                    <CardTitle className="text-white text-xl">Dynamic Crow's Feet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Dynamic crows feet appear when you make facial expressions like smiling, laughing, or squinting. These crows' feet lines are temporary and disappear when your face is relaxed and at rest.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      Botox and crows feet treatment is highly effective for dynamic lines, delivering natural before and after crows feet results as it relaxes the orbital muscles.
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
                    <CardTitle className="text-white text-xl">Static Crow's Feet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Static crows feet eyes wrinkles are visible even when your face is at rest. They develop over time as repeated expressions weaken the skin's elasticity around the eyes, causing permanent creases.
                    </p>
                    <p className="text-purple-300 mt-4 font-medium">
                      Botox crow's feet before and after treatment prevents static lines from deepening and may require combination with <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link> for optimal crows feet before and after results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Units of Crow's Feet Botox Section - Two Columns */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
                  <h2 className="text-3xl font-bold text-white mb-6">How Many Units of Botox for Crows Feet?</h2>
                  <div className="space-y-6 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Everyone is unique, so the number of units needed for crow feet botox before and after results can vary from person to person. The exact amount will be determined during your consultation.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
                        <h3 className="text-xl font-bold text-purple-300 mb-3">For Men</h3>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">15 Units</div>
                          <p className="text-sm text-gray-300">per eye area</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
                        <h3 className="text-xl font-bold text-purple-300 mb-3">For Women</h3>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">10-12 Units</div>
                          <p className="text-sm text-gray-300">per eye area</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                      <p className="text-sm text-gray-300 text-center">
                        <strong className="text-purple-300">Note:</strong> The exact number of units required will be determined during your consultation based on your individual needs and muscle activity.
                      </p>
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
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Expert Crow's Feet Treatment</h3>
                  <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg"
                    >
                      <source src="https://www.cosmedocs.com/wp-content/uploads/2021/09/Crows_Feet_Trim-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="bg-purple-500/30 px-3 py-1 rounded-full text-purple-200">Precise Eye Technique</span>
                      <span className="bg-purple-500/30 px-3 py-1 rounded-full text-purple-200">Natural Smile Preserved</span>
                      <span className="bg-purple-500/30 px-3 py-1 rounded-full text-purple-200">Expert Results</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Best Treatments for Crow's Feet Beyond Botox</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                We have a range of effective crows feet wrinkles treatment options to achieve smoother, more youthful eyes alongside botox for the feet area. Combining treatments delivers superior before after crows feet transformations.
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
                    <CardTitle className="text-white text-xl">Filler for Crows Feet Enhancement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Whilst botox before and after crows feet treatment effectively treats dynamic wrinkles by relaxing orbital muscles, filler in crows feet areas can further enhance results. Fillers add volume and smooth deeper lines around the eyes, particularly useful for static wrinkles that botox crows feet treatment alone can't fully address.
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
                    <CardTitle className="text-white text-xl">Comprehensive Combination Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Combining botox crow's feet with dermal fillers offers comprehensive what is crow's feet treatment. Botox reduces muscle activity causing the lines, whilst fillers add volume to deep-set wrinkles, resulting in smoother eye contour. This approach is also effective when paired with <Link to="/forehead-lines-botox" className="text-purple-300 hover:text-purple-200 underline">forehead lines treatment</Link> for complete upper face rejuvenation.
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
              <h2 className="text-3xl font-bold mb-6 text-white">Crow's Feet Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional crow's feet botox treatments at our Harley Street clinic.
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
                    <CardTitle className="text-white text-xl">Crow's Feet Only</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£175</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both eye areas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Orbicularis oculi muscle</span>
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
                        <span className="text-gray-300">Crow's feet</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Frown lines</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Forehead lines</span>
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
                Common questions about crow's feet botox treatments answered by our expert doctors.
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
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready for Smooth, Youthful Eyes?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how crow's feet botox 
                can enhance your natural beauty with subtle, sophisticated results that speak without words.
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
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Expert Crow's Feet Botox Treatment in London</h3>
          <p>Cosmedocs offers professional crow's feet botox treatments targeting fine lines and wrinkles around the eyes. Our experienced cosmetic doctors use advanced botulinum toxin injection techniques to smooth crow's feet while preserving natural smile expressions. Located in prestigious Harley Street, our clinic provides comprehensive eye area assessments and personalized treatment plans.</p>
          
          <h4>Why Choose Cosmedocs for Crow's Feet Botox?</h4>
          <p>Our invisible art philosophy ensures natural-looking results that enhance your eye area without obvious signs of treatment. We specialize in precise orbital muscle targeting using the latest injection techniques for optimal outcomes. Our doctors have extensive experience in periorbital anatomy and aesthetic medicine, ensuring safe and effective eye treatments.</p>
          
          <h4>Understanding Crow's Feet Development</h4>
          <p>Crow's feet develop from repeated contractions of the orbicularis oculi muscle during smiling, laughing, and squinting. These dynamic wrinkles become more pronounced over time, creating permanent lines that can age your appearance. Professional botox treatment relaxes these muscles, smoothing existing lines and preventing further development.</p>
          
          <h4>Treatment Process and Eye Area Care</h4>
          <p>Our crow's feet botox treatment begins with a detailed eye area consultation and muscle analysis. The injection process takes 10-15 minutes using specialized techniques for the delicate eye area. Results appear gradually over 3-14 days, with optimal effects lasting 3-4 months. We provide specific eye area aftercare instructions and ongoing support.</p>
        </div>
      </div>
    </>
  );
};

export default CrowsFeetBotox;