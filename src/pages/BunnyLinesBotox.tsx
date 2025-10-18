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
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart, MapPin, Star } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const BunnyLinesBotox = () => {
  const seoData = generateSEOMetadata(
    "Bunny Lines Botox London | £100 | Cosmedocs",
    "Expert bunny lines botox before and after results. Botox for nose wrinkles from £100 at Harley Street, London. What are bunny lines? Professional nasal lines botox treatment near me.",
    "/bunny-lines-botox"
  );

  const breadcrumbItems = [
    { label: "Treatments", path: "/treatments" },
    { label: "Botox Treatments", path: "/botox-london" }
  ];

  const beforeAfterImages = [
    { 
      src: "/placeholder.svg", 
      alt: "Bunny lines botox before and after - nose bridge smoothing", 
      caption: "Bunny Lines Botox Treatment: Smooth, refined nose bridge with natural expressions preserved. Expert nasalis muscle relaxation." 
    },
    { 
      src: "/placeholder.svg", 
      alt: "Forehead and bunny lines comprehensive treatment", 
      caption: "Combined <Link to='/forehead-lines-botox' className='text-purple-400 hover:text-purple-300 underline'>forehead</Link> and bunny lines treatment for complete upper face rejuvenation." 
    },
    { 
      src: "/placeholder.svg", 
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
      answer: "Yes! Bunny lines botox works excellently with <Link to='/botox-london' className='text-purple-400 hover:text-purple-300 underline'>upper face botox treatments</Link> and dermal fillers for comprehensive facial rejuvenation. Our doctors create personalized combination treatment plans for optimal results."
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
        <meta name="keywords" content="bunny lines botox, bunny lines botox before and after, botox for nose, botox bunny lines, nose wrinkles, what are bunny lines, bunny lines, botox on nose, botox nose, nasal lines botox, botox for nasal lines, bunny nose botox, nose botox before and after, botox on nose before and after, bunny lines before and after, botox for the nose, botox in nose, bunny line botox, wrinkles on the nose, botox on the nose, botox in bunny lines, botox on bunny lines, bunny lines on face, bunny lines face, bunny line, nose wrinkled, what is bunny lines, bunny lines from botox, bunny lines botox gone wrong, nose bunny, botox bunny nose" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.519526;-0.146061" />
        <meta name="ICBM" content="51.519526, -0.146061" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs - Bunny Lines Botox Treatment London",
            "description": "Expert bunny lines botox before and after results. Botox for nose wrinkles from £100. Professional nasal lines botox at Harley Street, London.",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "priceRange": "££",
            "image": "https://www.cosmedocs.co.uk/placeholder.svg",
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
              "latitude": "51.519526",
              "longitude": "-0.146061"
            },
            "areaServed": {
              "@type": "City",
              "name": "London"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "847",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Bunny Lines Botox Treatment",
            "description": "Expert botox for nose wrinkles and bunny lines. Professional nasal lines botox providing natural bunny lines before and after results at Harley Street, London.",
            "procedureType": "Cosmetic Botox Injection",
            "bodyLocation": ["Nose", "Nasalis Muscle", "Nasal Bridge"],
            "followup": "Treatment recommended every 3-4 months for optimal bunny lines prevention",
            "preparation": "Facial muscle consultation and nose wrinkles assessment required",
            "howPerformed": "Precise botox bunny lines treatment administered at targeted nasal injection sites using advanced techniques for nose wrinkles reduction",
            "procedureDuration": "PT10M"
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
                "item": "https://www.cosmedocs.co.uk/"
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
                "name": "Botox Treatments",
                "item": "https://www.cosmedocs.co.uk/botox-london"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Bunny Lines Botox",
                "item": "https://www.cosmedocs.co.uk/bunny-lines-botox"
              }
            ]
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
                "text": faq.answer.replace(/<[^>]*>/g, '')
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-accent py-4">
          <div className="page-container">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {breadcrumbItems.map((item, index) => (
                  <BreadcrumbItem key={item.path}>
                    <BreadcrumbLink asChild>
                      <Link to={item.path}>{item.label}</Link>
                    </BreadcrumbLink>
                    {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                  </BreadcrumbItem>
                ))}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Bunny Lines Botox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

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
                  <span className="block text-sm mt-4">Invisible art - nose wrinkles treatment that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Botox for Nose Wrinkles & Nasal Lines</p>
                  <p className="text-sm text-gray-300">5-10 minutes • Botox bunny lines • Results last 3-4 months</p>
                </div>
                <div className="mb-6 flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-purple-400" size={20} />
                    <span className="text-gray-300">Harley Street, London</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400" size={20} fill="currentColor" />
                    <span className="text-gray-300">4.9/5 from 847 reviews</span>
                  </div>
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
                See our bunny lines before and after gallery showing botox on nose before and after transformations. Expert <Link to="/botox-london" className="text-purple-400 hover:text-purple-300 underline">botox for the nose</Link> treatment smooths nose wrinkles while maintaining natural facial expressions. Real bunny line botox results from our Harley Street clinic.
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
              <h2 className="text-3xl font-bold mb-6 text-white">What is Bunny Lines? Understanding Bunny Lines on Face</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                What are bunny lines? Bunny lines are wrinkles on the nose that appear as diagonal lines on either side of your nose bridge when you scrunch your face or smile. These bunny lines on face form from repeated contractions of the nasalis muscle during facial expressions. Botox bunny lines treatment targets this nose bunny muscle to smooth wrinkles on the nose while preserving your natural expressions. Some patients worry about bunny lines botox gone wrong, but with proper technique at our Harley Street clinic, botox for the nose provides safe, natural results. According to{' '}
                <a href="https://www.nhs.uk/conditions/cosmetic-procedures/botulinum-toxin-injections/" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  NHS guidance on botulinum toxin injections
                </a>, when administered by qualified practitioners, botox nose treatments are safe and effective.
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
                <h4 className="text-white text-xl font-bold mb-4">Key Treatment Areas for Botox on Nose</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-purple-300 font-medium">Nasalis Muscle - Botox Bunny Nose</div>
                  <div className="text-purple-300 font-medium">Diagonal Bunny Line</div>
                  <div className="text-purple-300 font-medium">Nose Bridge - Nasal Lines Botox</div>
                  <div className="text-purple-300 font-medium">Scrunch Lines - Nose Wrinkled Areas</div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Botox in Bunny Lines — What to Expect?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                Our botox on bunny lines treatment process is quick and effective. Learn what happens during botox for nasal lines treatment and how we achieve natural nose botox before and after results.
              </p>
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
                      After a detailed consultation with a cosmetic specialist at Cosmedocs for your bunny lines face treatment, begin your nose wrinkles reduction. The doctor uses a very fine needle for botox on the nose, injecting botulinum toxin into the nasalis muscle in targeted areas. Understanding{' '}
                      <a href="https://www.bad.org.uk/shared/get-file.ashx?id=141&itemtype=document" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                        guidelines from the British Association of Dermatologists
                      </a>{' '}
                      ensures safe botox in bunny lines treatment:
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
        <section className="py-20 bg-black">
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
                      These lines appear when the nostrils flare during breathing or emotional expressions. They can be treated alongside bunny lines for comprehensive nose area rejuvenation. Learn more about <Link to="/nasal-flaring-botox" className="text-purple-400 hover:text-purple-300 underline">nasal flaring botox treatment</Link> for natural-looking results.
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Smooth Nose Wrinkles"
                },
                {
                  title: "Minimally Invasive Treatment"
                },
                {
                  title: "Quick, Convenient Procedure"
                },
                {
                  title: "Long-Lasting Results"
                },
                {
                  title: "Customized Treatment Plans"
                },
                {
                  title: "Prevents Deeper Lines"
                },
                {
                  title: "FDA Approved & Safe"
                },
                {
                  title: "Boosts Confidence"
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
                    <CardContent className="text-center">
                      {/* No description content */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Combined Treatments Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Combined Treatments for Complete Facial Harmony</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                Bunny lines botox works beautifully alongside other facial treatments for comprehensive rejuvenation. Many patients combine nasal lines botox with complementary procedures for optimal results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Upper Face Botox</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Combine bunny nose botox with <Link to="/forehead-lines-botox" className="text-purple-400 hover:text-purple-300 underline">forehead lines treatment</Link> and <Link to="/frown-lines-botox" className="text-purple-400 hover:text-purple-300 underline">frown lines botox</Link> for comprehensive upper face smoothing. This approach addresses nose wrinkles alongside other expression lines.
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
                    <CardTitle className="text-white text-xl">Dermal Fillers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Enhance your bunny lines before and after results by pairing botox on nose treatment with <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">dermal fillers</Link> for nose contouring or <Link to="/cheek-fillers" className="text-purple-400 hover:text-purple-300 underline">cheek enhancement</Link>. Create balanced, natural-looking facial proportions.
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
                    <CardTitle className="text-white text-xl">Skin Rejuvenation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Complement your botox bunny lines treatment with <Link to="/skin-boosters" className="text-purple-400 hover:text-purple-300 underline">skin boosters</Link> or <Link to="/prp-treatment" className="text-purple-400 hover:text-purple-300 underline">PRP therapy</Link> to improve overall skin texture and quality whilst smoothing wrinkles on the nose.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Smooth Your Bunny Lines?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how our invisible art approach 
                can refine your nose bridge with natural bunny lines botox before and after results. We also offer <Link to="/prp-treatment" className="text-purple-400 hover:text-purple-300 underline">PRP therapy</Link> and other <Link to="/treatments" className="text-purple-400 hover:text-purple-300 underline">aesthetic treatments</Link> for comprehensive facial rejuvenation.
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
          <h3>Bunny Lines Botox Before and After: Expert Nose Wrinkles Treatment London</h3>
          <p>What are bunny lines and how does botox help? Bunny lines are diagonal nose wrinkles that appear on either side of your nose bridge when you smile or scrunch your face. At Cosmedocs Harley Street London, we specialise in bunny lines botox before and after transformations using advanced botox for nose techniques. Our bunny nose botox treatment targets the nasalis muscle responsible for these bunny lines on face, providing natural nose botox before and after results. What is bunny lines treatment? It's a precise botox on nose procedure that smooths wrinkles on the nose while maintaining natural facial expressions. See our impressive bunny lines before and after gallery showcasing real botox on nose before and after results from our expert botox bunny lines treatments.</p>
          
          <h4>Botox for Nose: Understanding Botox Bunny Lines Treatment</h4>
          <p>Botox for the nose, specifically for bunny line treatment, involves strategic injections of botulinum toxin into the nasalis muscle. Many patients search for "what are bunny lines" before treatment - these are the nose wrinkled lines that create a bunny-like appearance on the nose bridge. Our botox in nose treatments use precise botox on the nose techniques to target these bunny lines face concerns. Botox bunny nose treatment differs from other facial botox because it requires expertise in nasal anatomy. Understanding botox and bunny lines helps patients make informed decisions. Can bunny lines botox gone wrong happen? When performed by inexperienced practitioners, yes, but our Harley Street clinic's expertise ensures safe, natural bunny line botox results. The botox nose procedure takes just 5-10 minutes for optimal nose bunny wrinkle reduction.</p>
          
          <h4>Nasal Lines Botox: Comprehensive Nose Wrinkles Solution</h4>
          <p>Nasal lines botox, also known as botox for nasal lines, addresses multiple concerns including bunny lines, nose wrinkles, and wrinkles on the nose bridge. What is bunny lines in relation to other facial wrinkles? Bunny lines are specifically the diagonal creases that form when the nasalis muscle contracts during facial expressions. Our botox in bunny lines treatment provides targeted relief for these nose wrinkled areas. Patients often ask about botox on bunny lines versus botox in bunny lines - both refer to the same treatment approach targeting the bunny line area. The botox for nasal lines procedure can be combined with other treatments like <a href="https://www.cosmeticdoctors.co.uk/treatments/dermal-fillers" className="text-purple-400">dermal fillers</a> for comprehensive nose refinement. Research published by the <a href="https://academic.oup.com/asj/article/36/suppl_1/S84/2589053" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-400">American Society for Aesthetic Plastic Surgery confirms the effectiveness of botulinum toxin</a> for treating nasal wrinkles and bunny lines.</p>
          
          <h4>Bunny Lines Before and After: Real Results from Harley Street London</h4>
          <p>Our bunny lines before and after portfolio showcases dramatic nose botox before and after transformations. Patients seeking bunny lines botox before and after evidence can review our extensive gallery of botox on nose before and after results. Each bunny line botox treatment is customised based on individual nose anatomy and wrinkles on the nose severity. The bunny lines from botox concern - where improper technique creates new lines - never occurs with our expert practitioners. Our nose bunny treatment approach ensures natural-looking results that enhance rather than freeze facial expressions. Botox bunny nose treatments at our Harley Street London clinic achieve consistent bunny lines before and after improvements while maintaining nose function and natural movement.</p>
          
          <h4>Botox on the Nose: Safety and Effectiveness</h4>
          <p>Is botox on the nose safe? When performed by qualified cosmetic doctors at our Harley Street clinic, botox in nose areas is extremely safe and effective. The botox for the nose procedure specifically targets the bunny lines on face without affecting other nasal functions. Understanding what are bunny lines and their causes helps patients appreciate why botox bunny lines treatment works so effectively. The nose wrinkles addressed by nasal lines botox develop from years of repeated facial expressions. Botox for nose wrinkles relaxes the nasalis muscle, smoothing existing bunny line and preventing new wrinkles on the nose from forming. Our expertise in botox nose treatments ensures optimal outcomes with minimal risk of complications or the bunny lines botox gone wrong scenarios sometimes seen with inexperienced practitioners.</p>
          
          <h5>Bunny Lines Face Treatment: Comprehensive Approach</h5>
          <p>Treating bunny lines face concerns requires understanding facial anatomy and muscle dynamics. What is bunny lines treatment beyond just injections? It's a comprehensive approach that considers your entire facial aesthetic. Our botox bunny nose protocols factor in how bunny lines on face interact with surrounding areas like forehead lines and crow's feet. The nose wrinkled appearance often accompanies other upper face concerns, which is why we offer combination treatments. Botox in bunny lines can be performed standalone or with treatments like <a href="/botox-london" className="text-purple-400">advanced upper face botox</a> for harmonious results. Whether you're concerned about a single bunny line or multiple nose wrinkles, our customised bunny nose botox approach delivers natural-looking improvements.</p>
          
          <h5>Nose Bunny Treatment: Expert Care at Harley Street London</h5>
          <p>Our nose bunny treatment expertise extends beyond simple botox injections. We educate patients on what are bunny lines, why they develop, and realistic bunny lines before and after expectations. The botox on bunny lines procedure at our Harley Street London clinic follows strict safety protocols and aesthetic principles. Patients concerned about bunny lines botox gone wrong can trust our decade of experience in nose botox before and after transformations. We serve clients throughout London seeking expert botox for nasal lines, botox nose refinement, and comprehensive wrinkles on the nose solutions. The botox for the nose treatment takes minutes but delivers months of smooth, natural-looking results that enhance your facial aesthetics without obvious signs of intervention.</p>
        </div>
      </div>
    </>
  );
};

export default BunnyLinesBotox;