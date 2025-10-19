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
import foreheadRejuvenationImage from "@/assets/forehead-rejuvenation-before-after.jpeg";
import foreheadFillerImage from "@/assets/forehead-filler-before-after.jpeg";
import foreheadLineImage from "@/assets/forehead-line-before-after.jpeg";
import foreheadIndentationImage from "@/assets/forehead-indentation-before-after.jpeg";
import botoxForeheadImage from "@/assets/botox-forehead-before-after.jpeg";
import foreheadBotoxResultsImage from "@/assets/forehead-botox-results.jpg";

const ForeheadLinesBotox = () => {
  const seoData = generateSEOMetadata(
    "Forehead Lines Botox London | Cosmedocs",
    "Smooth horizontal forehead wrinkles with botox. Erase ageing lines whilst maintaining natural brow movement from £200.",
    "/forehead-lines-botox"
  );

  const beforeAfterImages = [
    { 
      src: foreheadRejuvenationImage, 
      alt: "Forehead fillers and botox for skin rejuvenation", 
      caption: "Forehead Filler and Botox Combination: Complete rejuvenation achieving smooth, youthful forehead contours - our aesthetics is invisible art." 
    },
    { 
      src: foreheadFillerImage, 
      alt: "Forehead fillers before and after comparison in patient with concavity", 
      caption: "Forehead Filler For Concave Dips: Natural volume restoration creating seamless facial harmony - bold, natural, always your way." 
    },
    { 
      src: foreheadLineImage, 
      alt: "Forehead filler for sleep lines", 
      caption: "Forehead Line Reduction with Fillers: Precision treatment smoothing deep lines while maintaining natural expression - quiet, not loud." 
    },
    { 
      src: foreheadIndentationImage, 
      alt: "Before and after images showing the reduction of dips using forehead filler", 
      caption: "Forehead Indentation Correction: Expert volumization technique eliminating concave areas for flawless forehead contour - invisible, not exaggerated." 
    },
    { 
      src: botoxForeheadImage, 
      alt: "Frown lines before and after Botox treatment showing smoothing effect", 
      caption: "Erase the Frown Botox Results: Advanced muscle relaxation technique creating serene, worry-free expression - transformation that speaks without saying a word." 
    },
    { 
      src: foreheadBotoxResultsImage, 
      alt: "Combined effects of dermal fillers and Botox applied to forehead for facial rejuvenation", 
      caption: "Forehead Botox Before and After: Comprehensive anti-aging approach delivering natural, refreshed appearance - aesthetic medicine by Cosmedocs is minimal." 
    }
  ];

  const faqs = [
    {
      question: "What are forehead lines and how does botox help?",
      answer: "Forehead lines are horizontal wrinkles across your forehead caused by repeated contractions of the frontalis muscle when raising eyebrows or expressing surprise. Botox for forehead wrinkles relaxes this muscle, smoothing existing lines whilst maintaining natural brow movement. Forehead lines before and after botox photos show significant improvement in most patients."
    },
    {
      question: "How long do forehead botox results last?",
      answer: "Botox forehead results typically last 3-4 months. The frontalis muscle gradually regains movement, requiring maintenance treatments to sustain smooth forehead appearance and prevent line reformation. Consistent treatments can improve longevity of results over time."
    },
    {
      question: "Is botox on forehead painful?",
      answer: "Botox on the forehead involves minimal discomfort. Most clients describe it as brief pinching sensations across the forehead. The treatment takes 10-15 minutes with our doctors using precise injection techniques for comfort. How much botox in forehead is used depends on your muscle strength and desired results."
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
      question: "How much does botox forehead cost?",
      answer: "Forehead botox at Cosmedocs costs £175 as a standalone treatment. We offer attractive package deals when combined with botox frown line and crow's feet for comprehensive upper face rejuvenation. Pricing is transparent with no hidden fees."
    },
    {
      question: "Can botox for forehead lines be combined with other treatments?",
      answer: "Yes! Botox wrinkles on forehead treatment works excellently with botox frown lines before after and crow's feet botox for complete upper face treatment, plus dermal fillers for volume restoration. Our doctors create personalised combination plans for optimal results."
    },
    {
      question: "Should I be concerned about forehead lines at a young age?",
      answer: "Early signs of forehead lines are common. While not a health concern, if they bother you, preventative measures like sun protection and a good skincare routine can be beneficial."
    },
    {
      question: "What are the best treatments for forehead wrinkles?",
      answer: "Procedures include chemical peels, laser therapy, botox injections, and filler for forehead lines can be used to address forehead wrinkles. The best course of action for you will depend on several factors, such as your age, skin type, degree of wrinkles, and desired results. Forehead lines botox before after results often show the most dramatic improvement."
    },
    {
      question: "Can forehead lines be prevented?",
      answer: "Yes! Sun protection with daily sunscreen use is essential. Stay hydrated by drinking plenty of water and using moisturizer. Maintain a healthy lifestyle with balanced diet, enough sleep, and stress management. Be mindful of repetitive facial movements and try to relax your forehead muscles."
    },
    {
      question: "Is botox for forehead wrinkles safe?",
      answer: "Yes, botox on face treatments are very safe when administered by qualified practitioners. There are some risks and side effects associated with forehead treatments. These may include bruising, swelling, redness, itching, allergic responses, and, in rare instances, infection or scarring. All of the procedures are safe, though, and any side effects that do occur eventually go away. Our doctors follow strict <a href='https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency' target='_blank' rel='noopener noreferrer' class='text-purple-400 hover:text-purple-300 underline'>MHRA safety guidelines</a>."
    },
    {
      question: "How much downtime is involved with botox on the forehead before and after treatment?",
      answer: "The duration of results varies depending on the type of treatment. Injectable treatments like botox typically last 4-6 months, whilst dermal fillers can last 6-12 months or longer. Results from laser therapy and microneedling may be more long-lasting but may require multiple sessions for optimal results. Most patients see their botox the forehead before and after results within 3-14 days."
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
        {/* Enhanced MedicalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "image": "https://www.cosmedocs.co.uk/default-og-image.jpg",
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
              "latitude": "51.5194",
              "longitude": "-0.1468"
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
            "priceRange": "££",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "850"
            },
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "Forehead Lines Botox Treatment",
              "alternateName": "Frontalis Muscle Botox",
              "description": "Expert forehead lines botox treatment for horizontal wrinkle reduction and natural-looking results"
            }
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
                "name": "Botox Treatments",
                "item": "https://www.cosmedocs.co.uk/face-botox-areas"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Forehead Lines Botox",
                "item": seoData.canonical
              }
            ]
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
                "text": faq.answer
              }
            }))
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
                  <span className="block text-sm mt-4">Invisible art - smooth forehead lines that speak without words</span>
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
              <h2 className="text-3xl font-bold mb-4">Botox Forehead Lines Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert botox on forehead treatments smooth horizontal wrinkles whilst maintaining natural brow movement. Our botox before and after on forehead gallery showcases real patient results.
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
              <h2 className="text-3xl font-bold mb-6 text-white">What is Forehead Lines Botox?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                <Link to="/face-botox-areas" className="text-purple-400 hover:text-purple-300 underline">Forehead lines botox</Link> targets the frontalis muscle across your forehead that creates horizontal wrinkles when raising eyebrows or expressing surprise. 
                Our invisible art approach smooths existing lines whilst preserving natural brow movement.
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
                  <CardTitle className="text-white text-2xl text-center">Understanding Horizontal Lines & Key Treatment Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
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

        {/* What to Expect */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Forehead Lines Botox — What to Expect?</h2>
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
                      After a detailed consultation with a cosmetic specialist at Cosmedocs for your forehead lines treatment, we begin your frontalis muscle treatment. The doctor uses very fine needles to inject <Link to="/face-botox-areas" className="text-purple-400 hover:text-purple-300 underline">botulinum toxin</Link> into the frontalis muscle in targeted areas such as:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Frontalis muscle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Upper forehead region</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Central forehead area</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Horizontal line zones</span>
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
                      <Link to="/face-botox-areas" className="text-purple-400 hover:text-purple-300 underline">Forehead lines botox</Link> is considered safe with minimal side effects for most people. However, your treatment may have some slight side effects, such as:
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

        {/* How Does Botox Work for Forehead Lines */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Does Botox Work for Forehead Lines?</h2>
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
                      Will botox remove forehead wrinkles? Botox in forehead works by relaxing the frontalis muscle causing forehead lines, resulting in a smoother, more refreshed appearance. It blocks <a href="https://www.nhs.uk/conditions/botulinum-toxin/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">nerve signals</a> that cause muscle contractions, preventing the formation of horizontal lines whilst maintaining natural brow movement. Does botox get rid of forehead lines? Yes, botox effectively smooths both dynamic and static forehead wrinkles.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Baby Botox Section - One Column */}
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
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                Worry lines or forehead wrinkles are common amongst people in their 20s, 30s, 40s, 50s, and even teenage years! 
                Many patients do not wish to have a shiny forehead botox result or a 'frozen look'. Baby botox on face treatments deliver almost instant results, 
                and they still have some control over their <Link to="/face-botox-areas" className="text-purple-400 hover:text-purple-300 underline">facial muscles</Link>, hence more forehead mobility. This prevents the undesirable botox shiny forehead appearance that some people worry about.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Types of Lines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <h4 className="text-purple-300 font-bold mb-3">Dynamic Lines</h4>
                      <p className="text-gray-300">
                        These appear only when you raise your eyebrows or express surprise. They are caused by repeated frontalis muscle contractions. Botox and forehead wrinkles of this type respond excellently to treatment, with visible improvements in botox forehead before after comparisons.
                      </p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-purple-300 font-bold mb-3">Static Lines</h4>
                      <p className="text-gray-300">
                        These lines are visible even when your face is relaxed. They develop over time due to <a href="https://www.bad.org.uk/patient-information-leaflets/ageing-skin/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">collagen loss</a>, sun damage, and loss of skin elasticity. Does botox remove forehead wrinkles that are static? Yes, though some cases may benefit from filler for forehead lines in combination with botox.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Why Forehead Lines Form & Our Solution */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Why Forehead Lines Form & Our Solution</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed">
                Understanding the root causes of forehead lines helps us deliver targeted, effective treatments that address both existing lines and prevent future formation.
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
                      <p><strong className="text-white">Precision Botox Treatment:</strong> Targeted frontalis muscle relaxation for immediate smoothing of existing lines. Our botox on forehead wrinkles before and after results demonstrate the effectiveness of this approach.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Prevention Strategy:</strong> Stop new horizontal lines from forming by relaxing overactive muscles. Can botox remove forehead lines before they deepen? Yes, preventative treatment is highly effective.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Natural Results:</strong> Preserve natural brow movement while smoothing unwanted lines</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Expert Technique:</strong> <a href="https://www.harleymedical.co.uk/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Harley Street</a> standards with our invisible art philosophy ensuring natural botox to forehead before and after results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-300 mt-1">•</span>
                      <p><strong className="text-white">Long-lasting Results:</strong> 3-4 months of smoother, more youthful forehead appearance</p>
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
                      <source src="https://www.cosmedocs.com/wp-content/uploads/2021/09/Forehead_Trim-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2 justify-center">
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
                { title: "Sun damage" },
                { title: "Stress" },
                { title: "Smoking" },
                { title: "Drinking alcohol" },
                { title: "Dehydration" },
                { title: "Genetic factors" }
              ].map((cause, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Other Ways to Reduce Forehead Lines</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                Whilst <Link to="/face-botox-areas" className="text-purple-400 hover:text-purple-300 underline">botox for forehead lines</Link> is highly effective, we offer complementary treatments to achieve comprehensive forehead rejuvenation and maintain long-lasting results. Some patients combine botox forehead wrinkles before after treatments with these alternatives for enhanced outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/40 h-full hover:border-purple-400/60 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <CardTitle className="text-white text-xl">Dermal Fillers</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 text-center">
                    <p className="leading-relaxed">
                      Strategic <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">filler placement</Link> smooths deep static lines by restoring volume and structure. This immediate treatment complements botox by addressing lines that persist at rest, creating a comprehensive anti-ageing approach.
                    </p>
                    <div className="mt-4 pt-4 border-t border-purple-500/30">
                      <span className="text-purple-300 text-sm font-medium">Immediate Results • 6-12 Months Duration</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/40 h-full hover:border-purple-400/60 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                    <CardTitle className="text-white text-xl">Microneedling</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 text-center">
                    <p className="mb-4 leading-relaxed">
                      Advanced collagen induction therapy that naturally regenerates skin from within:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Stimulates natural collagen production</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Improves skin texture and firmness</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Reduces fine line depth</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-purple-500/30">
                      <span className="text-purple-300 text-sm font-medium">Progressive Results • 3-6 Sessions</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/40 h-full hover:border-purple-400/60 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <CardTitle className="text-white text-xl">Laser Resurfacing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 text-center">
                    <p className="mb-4 leading-relaxed">
                      Precision laser technology for comprehensive skin renewal and line reduction:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Advanced collagen stimulation</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Skin tightening and smoothing</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Enhanced texture and tone</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-purple-500/30">
                      <span className="text-purple-300 text-sm font-medium">Long-lasting Results • 1-3 Sessions</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 max-w-3xl mx-auto border border-purple-500/30">
                <p className="text-gray-300 text-lg">
                  <span className="text-purple-300 font-semibold">Expert Combination Therapy:</span> Our doctors create personalized treatment plans combining these approaches for optimal forehead rejuvenation and long-lasting results.
                </p>
              </div>
            </motion.div>
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
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">Over 1 million injections performed since 2007</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
                <p className="text-gray-300">
                  <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Harley Street Institute
                  </a> trainers
                </p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-300">Premium FDA-approved dermal fillers only</p>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Forehead Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                How much is botox for forehead treatments? Transparent pricing for professional forehead lines botox treatments at our Harley Street clinic. How much for botox forehead depends on the areas treated - see our packages below. How much is botox on the forehead? From £175 for single area treatment.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Smooth Your Forehead Lines?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your expert consultation today and discover how our invisible art approach can transform your forehead naturally with smooth, natural results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Expert Forehead Botox Treatment in London</h3>
          <p>Cosmedocs offers professional botox forehead treatments targeting horizontal wrinkles across the forehead. Our experienced cosmetic doctors use advanced <a href="https://www.saveface.co.uk/treatments/botulinum-toxin" target="_blank" rel="noopener noreferrer">botulinum toxin injection techniques</a> to smooth forehead lines whilst preserving natural brow movement. Located in prestigious Harley Street, our clinic provides comprehensive forehead assessments and personalised treatment plans. Our botox the forehead before and after gallery showcases real patient transformations.</p>
          
          <h4>Why Choose Cosmedocs for Botox Forehead Lines?</h4>
          <p>Our invisible art philosophy ensures natural-looking results that enhance your forehead without obvious signs of treatment. We specialise in precise frontalis muscle targeting using the latest injection techniques for optimal outcomes. Our doctors have extensive experience in forehead anatomy and aesthetic medicine, ensuring safe and effective treatments that maintain natural expressions. When patients ask does botox remove forehead wrinkles, we show them our extensive before after portfolio demonstrating proven results without the botox shiny forehead effect.</p>
          
          <h4>Understanding Forehead Line Development and Botox Solutions</h4>
          <p>Forehead lines develop from repeated contractions of the frontalis muscle during facial expressions and brow movements. These dynamic wrinkles become more pronounced over time, creating permanent horizontal lines that can age your appearance. Professional botox treatment relaxes this muscle, smoothing existing lines and preventing further deepening whilst maintaining natural brow mobility. Will botox remove forehead wrinkles completely? Most patients see 70-90% improvement in their forehead lines before and after botox treatments. How much botox in forehead is needed varies by patient, typically ranging from 10-20 units for optimal results.</p>
          
          <h4>Treatment Process, Pricing and Forehead Care</h4>
          <p>Our botox for forehead lines treatment begins with a detailed forehead consultation and muscle analysis. The injection process takes 10-15 minutes using precise techniques for optimal muscle relaxation. Results appear gradually over 3-14 days, with optimal effects lasting 3-4 months. How much is botox for forehead at Cosmedocs? From £175 for single area treatment. We provide comprehensive forehead care instructions and ongoing support throughout your treatment journey. Patients often combine botox frown line treatments with forehead botox for comprehensive upper face rejuvenation, as shown in our botox before after frown lines gallery.</p>
        </div>
      </div>
    </>
  );
};

export default ForeheadLinesBotox;