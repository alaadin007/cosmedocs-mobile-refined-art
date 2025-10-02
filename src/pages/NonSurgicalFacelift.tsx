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
import { Link } from "react-router-dom";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Heart, Users, Shield } from "lucide-react";

const NonSurgicalFacelift = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Facelift London | 3-Level Treatment Approach | Liquid Facelift UK | Cosmedocs",
    "Expert non-surgical facelift London treatments tailored to your level of facial sagging. Advanced liquid facelift combining dermal fillers & PDO threads. Natural facial rejuvenation without surgery from £800.",
    "/non-surgical-facelift"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  // Placeholder for before/after images - to be added by user
  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/placeholder-facelift-1.jpg", 
      alt: "Non-surgical facelift before and after Level 1 treatment showing natural jawline definition", 
      caption: "Level 1 Non-Surgical Facelift - Natural lifting with strategic volume restoration" 
    },
    { 
      src: "/lovable-uploads/placeholder-facelift-2.jpg", 
      alt: "Liquid facelift before and after Level 2 treatment with PDO threads London", 
      caption: "Level 2 Liquid Facelift - Combined filler and PDO thread treatment for enhanced lifting" 
    },
    { 
      src: "/lovable-uploads/placeholder-facelift-3.jpg", 
      alt: "Non-surgical facial rejuvenation before and after comprehensive treatment", 
      caption: "Comprehensive facial rejuvenation addressing volume loss and facial contours" 
    },
    { 
      src: "/lovable-uploads/placeholder-facelift-4.jpg", 
      alt: "Non-surgical facelift transformation showing youthful facial contours", 
      caption: "Natural transformation - invisible art that speaks without words" 
    }
  ];

  const faqs = [
    {
      question: "What is a non-surgical facelift and how does it work?",
      answer: "A non-surgical facelift, also known as a liquid facelift, uses advanced injectable treatments including dermal fillers and PDO threads to lift, contour, and rejuvenate facial features without surgery. The treatment restores lost volume in key areas, lifts sagging tissue, and redefines facial contours for a naturally youthful appearance."
    },
    {
      question: "What are the different levels of facial sagging and which treatment is right for me?",
      answer: "We categorise facial aging into three levels. Level 1 (ages 30-40) shows mild jawline loss and early jowls, treated with strategic volume restoration. Level 2 features moderate jowls and visible volume loss, requiring fillers plus PDO threads. Level 3+ involves significant sagging where surgical options are recommended. A consultation will determine your level and optimal treatment approach."
    },
    {
      question: "How long does a non-surgical facelift last?",
      answer: "Results vary by treatment level and products used. Dermal fillers typically last 12-18 months, whilst PDO threads provide lifting effects for 12-24 months as they stimulate collagen production. Many clients maintain results with regular maintenance treatments."
    },
    {
      question: "What is the difference between Level 1 and Level 2 non-surgical facelift treatments?",
      answer: "Level 1 treatment (ages 30-40) focuses on volume restoration in the outer face compartment near the ear and mild cheek enhancement. Level 2 treatment requires more extensive volume replacement plus PDO threads to secure the jawline, addressing moderate jowls, marionette lines, and visible nasolabial folds."
    },
    {
      question: "Are PDO threads necessary for all non-surgical facelifts?",
      answer: "No. PDO threads are specifically recommended for Level 2 facial sagging where moderate jowls require additional structural support beyond what volume alone can achieve. Level 1 patients achieve excellent results with strategic filler placement alone."
    },
    {
      question: "How much does a non-surgical facelift cost in London?",
      answer: "Treatment costs depend on your facial sagging level and required approach. Level 1 treatments typically range from £800-£1,500, whilst Level 2 treatments including PDO threads range from £1,800-£3,500. We provide detailed pricing during consultation based on your individual assessment."
    },
    {
      question: "Is there downtime after a non-surgical facelift?",
      answer: "Minimal downtime is required. You may experience mild swelling, redness, or bruising for 3-7 days. Most patients return to work immediately and resume normal activities within 24-48 hours. PDO thread treatments may involve slightly more swelling initially."
    },
    {
      question: "Why does facial volume loss occur in the outer face compartment?",
      answer: "The outer facial compartment near the ear loses volume naturally with age, causing the face to flatten and jowls to develop. Restoring volume in this specific area lifts the face as if demonstrating a surgical facelift effect, without making the face appear wider because the volume sits behind the jaw muscle."
    },
    {
      question: "Can non-surgical facelifts address nasolabial folds and marionette lines?",
      answer: "Absolutely. By restoring midface volume and lifting sagging tissues, non-surgical facelifts naturally soften nasolabial folds and marionette lines. The treatment addresses the root cause - volume loss and tissue descent - rather than just filling the lines themselves."
    },
    {
      question: "What qualifications do your practitioners have for non-surgical facelifts?",
      answer: "Our expert doctors have trained practitioners internationally in these advanced techniques for over 10 years. We specialise in facial anatomy and advanced injection techniques, ensuring safe, natural, and effective results for all non-surgical facelift procedures."
    },
    {
      question: "Will a non-surgical facelift make my face look wider?",
      answer: "No. Strategic volume placement in the outer facial compartment sits behind the jaw muscle, right in front of the ear, creating a lifting effect without widening the face. This technique mimics the hand position used to demonstrate a surgical facelift, producing natural contours."
    },
    {
      question: "When should I consider surgical rather than non-surgical options?",
      answer: "Level 3 and above facial sagging, typically seen in patients with fuller faces in youth where the descent is heavier, usually requires surgical intervention. Our experienced doctors will honestly assess whether non-surgical treatments can achieve your goals or if surgery would be more appropriate."
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
        <meta name="keywords" content="non-surgical facelift London, liquid facelift UK, non-surgical face lift, facial rejuvenation London, PDO threads London, dermal fillers facelift, jaw lifting treatment, jowl treatment London, facial volume restoration, anti-aging treatment London, Harley Street facelift, cosmetic facelift, liquid facelift cost, face lift without surgery" />
        <meta name="author" content="Cosmedocs" />
        <meta name="publish-date" content="2024-01-15" />
        <meta name="last-modified" content="2025-01-20" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Non-Surgical Facelift",
            "alternateName": "Liquid Facelift",
            "description": "Advanced non-surgical facelift treatment using dermal fillers and PDO threads for natural facial rejuvenation without surgery",
            "procedureType": "Cosmetic Procedure",
            "bodyLocation": "Face",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Cosmedocs",
              "url": "https://www.cosmedocs.co.uk",
              "telephone": "0333 0551 503",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            },
            "medicalSpecialty": "Cosmetic Medicine"
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
                "name": "Non-Surgical Facelift",
                "item": "https://www.cosmedocs.co.uk/non-surgical-facelift"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Space for hero banner image */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          {/* Placeholder for hero background image */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>
          
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Non-Surgical Facelift London</span>
                  <span className="block text-sm mt-4">Invisible art - natural facial rejuvenation without surgery</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">3-Level Treatment Approach</p>
                  <p className="text-sm text-gray-300">Tailored solutions for every stage of facial aging - from 30s to beyond</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(bookingUrl, "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Treatment Levels
                  </Button>
                </div>
              </motion.div>
              
              {/* Placeholder space for hero image */}
              <div className="hidden lg:block">
                <div className="w-full h-96 bg-purple-900/10 rounded-lg border-2 border-purple-500/30 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Hero Image Placeholder</p>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Non-Surgical Facelift at a Glance</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                <p className="text-gray-300">45-90 minutes depending on level</p>
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
                <p className="text-gray-300">12-24 months with maintenance</p>
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
                <p className="text-gray-300">Minimal downtime, return to work same day</p>
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
                <p className="text-gray-300">Topical anaesthetic + lidocaine in products</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300">10+ years training doctors internationally</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction to Non-Surgical Facelift */}
        <section className="py-20 bg-black">
          <div className="page-container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Understanding Non-Surgical Facelift Treatment</h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  A <strong className="text-purple-300">non-surgical facelift</strong>, also known as a <strong className="text-purple-300">liquid facelift</strong>, represents the pinnacle of modern aesthetic medicine. This innovative approach to facial rejuvenation combines advanced injectable treatments to restore youthful contours, lift sagging tissues, and rejuvenate the face without the need for invasive surgery, general anaesthesia, or extensive downtime.
                </p>

                <p>
                  At Cosmedocs, we've developed a sophisticated <strong className="text-purple-300">3-level treatment approach</strong> that recognises facial aging occurs in distinct stages, each requiring tailored solutions. Rather than applying a one-size-fits-all methodology, we assess your specific level of facial sagging and volume loss to create a bespoke treatment plan that delivers natural, harmonious results.
                </p>

                <p>
                  The science behind non-surgical facelifts centres on understanding facial anatomy and the aging process. As we age, facial fat compartments lose volume, tissues descend due to gravity, and the skin's elasticity diminishes. These changes manifest differently depending on your age, facial structure, genetics, and lifestyle factors. Our expertise lies in precisely identifying which facial compartments require volume restoration and which areas need structural support through advanced techniques.
                </p>

                <p>
                  What sets Cosmedocs apart is our commitment to <strong className="text-purple-300">invisible art</strong> - transformations that whisper rather than shout. We've been training doctors internationally in these advanced techniques for over 10 years, and our philosophy centres on enhancing your natural beauty whilst maintaining facial harmony and proportion. The goal is for people to see you looking refreshed and rejuvenated, not to notice you've "had work done."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Placeholder Banner Section */}
        <section className="py-12 bg-purple-900/10">
          <div className="page-container">
            <div className="w-full h-64 bg-purple-900/20 rounded-lg border-2 border-purple-500/30 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Banner Image Placeholder - Treatment Overview</p>
            </div>
          </div>
        </section>

        {/* Level 1 Treatment - Detailed Section */}
        <section className="py-20 bg-accent" id="level-1">
          <div className="page-container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Ages 30-40
                </span>
                <h2 className="text-4xl font-bold mb-4 text-white">Level 1: Early Facial Aging</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Subtle volume loss with mild jaw definition changes and early jowl formation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <Card className="bg-black border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">What Happens at Level 1</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p>
                      Level 1 facial sagging typically occurs between the ages of <strong className="text-purple-300">30 to 40 years</strong> and represents the earliest signs of facial aging. At this stage, you may notice a <strong className="text-purple-300">loss of definition around the jaw angle</strong> and the beginning of <strong className="text-purple-300">mild jowls</strong>.
                    </p>
                    <p>
                      Interestingly, these changes tend to be <strong className="text-purple-300">more pronounced in females than males</strong> at this stage, partly due to differences in facial structure and fat distribution. The outer compartment of the face, particularly the area by the ear, begins to lose volume, causing the face to flatten slightly and the jawline to soften.
                    </p>
                    <p>
                      Additionally, the <strong className="text-purple-300">midface cheeks</strong> start to lose a small amount of volume, making them appear flatter. The <strong className="text-purple-300">under-eye area</strong> may also show early signs of aging, with the tear trough becoming slightly more visible as periorbital volume diminishes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Level 1 Treatment Approach</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p>
                      Treatment at Level 1 focuses on <strong className="text-purple-300">strategic volume replacement</strong> using premium <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">dermal fillers</Link>. The key area of focus is the <strong className="text-purple-300">outer compartment of the face</strong>, right by the ear.
                    </p>
                    <p>
                      A common misconception is that adding volume to this area will make the face look wider. In reality, the volume is placed <strong className="text-purple-300">behind the jaw muscle, right in front of the ear</strong> - precisely where you would place your hand if demonstrating a facelift effect. This strategic placement lifts and defines the jawline without adding width.
                    </p>
                    <p>
                      We also address the <strong className="text-purple-300">midface cheeks</strong> with subtle volume enhancement to restore forward projection rather than creating a flat appearance. A small amount of <strong className="text-purple-300">tear trough filler</strong> may be used to refresh the under-eye area, creating a more rested, youthful look.
                    </p>
                    <div className="bg-purple-900/20 p-4 rounded-lg mt-6">
                      <h4 className="text-white font-semibold mb-2">Typical Products Used:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>High G-prime hyaluronic acid fillers for structural support</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>Softer fillers for cheek enhancement and tear trough</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>Swiss, French, or USA manufactured premium products</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-purple-900/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Level 1 Treatment Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Restored jaw angle definition",
                    "Subtle lifting effect without surgery",
                    "Natural-looking facial contours",
                    "Improved midface volume and projection",
                    "Refreshed under-eye appearance",
                    "No widening of the face",
                    "Minimal downtime (1-3 days)",
                    "Results lasting 12-18 months"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Level 2 Treatment - Detailed Section */}
        <section className="py-20 bg-black" id="level-2">
          <div className="page-container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Ages 40-55
                </span>
                <h2 className="text-4xl font-bold mb-4 text-white">Level 2: Moderate Facial Aging</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Visible jowls, marionette lines, and more pronounced volume loss requiring combination treatment
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <Card className="bg-accent border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">What Happens at Level 2</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p>
                      Level 2 facial sagging represents a more advanced stage of facial aging with <strong className="text-purple-300">significantly more volume loss</strong> around the angle of the mandible (jaw angle) and the appearance of <strong className="text-purple-300">moderate, visible jowls</strong>.
                    </p>
                    <p>
                      At this stage, you'll notice the beginning of <strong className="text-purple-300">hollowness on the sides of the chin</strong> and the emergence of <strong className="text-purple-300">marionette lines</strong> - the folds that run from the corners of the mouth down to the chin. These changes create a segmented appearance to the face, dividing it into more distinct compartments.
                    </p>
                    <p>
                      The <strong className="text-purple-300">nasolabial folds</strong> (smile lines) become more apparent and deeper, whilst the midface continues to lose volume, contributing to a more aged, tired appearance. The lower face shows more pronounced descent, and the jawline loses its crisp definition.
                    </p>
                    <p>
                      The facial changes at Level 2 are significant enough that volume replacement alone is insufficient. The tissues require both volumisation and structural support to achieve meaningful lifting and rejuvenation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-accent border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Level 2 Treatment Approach</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p>
                      Treatment at Level 2 requires a <strong className="text-purple-300">combination approach</strong>. We use <strong className="text-purple-300">more extensive volume restoration</strong> than Level 1, placing <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">dermal fillers</Link> strategically throughout multiple facial compartments.
                    </p>
                    <p>
                      Crucially, we incorporate <strong className="text-purple-300"><Link to="/thread-face-lift" className="text-purple-400 hover:text-purple-300 underline">PDO threads</Link></strong> to secure and lift the jawline. These absorbable threads provide immediate mechanical lift whilst stimulating collagen production over the following months, creating both instant and progressive improvement.
                    </p>
                    <p>
                      The treatment addresses the <strong className="text-purple-300">mandibular angle</strong> with structural filler, the <strong className="text-purple-300">pre-jowl sulcus</strong> (hollowness beside the chin), <strong className="text-purple-300">marionette lines</strong>, and deeper <strong className="text-purple-300">nasolabial folds</strong>. PDO threads are placed along the jawline and into the midface to provide lifting support.
                    </p>
                    <div className="bg-purple-900/20 p-4 rounded-lg mt-6">
                      <h4 className="text-white font-semibold mb-2">Level 2 Treatment Components:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>Increased volume of structural dermal fillers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>PDO thread insertion for jawline lifting and definition</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>Treatment of marionette lines and pre-jowl hollows</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>Comprehensive midface volume restoration</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-purple-900/10 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Why PDO Threads Are Essential at Level 2</h3>
                <p className="text-gray-300 mb-4">
                  At Level 2, the degree of tissue descent means that volume alone cannot provide sufficient lift. <Link to="/thread-face-lift" className="text-purple-400 hover:text-purple-300 underline">PDO threads</Link> work synergistically with dermal fillers to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Provide immediate mechanical lifting of descended tissues",
                    "Stimulate neocollagenesis (new collagen formation)",
                    "Secure the jawline and prevent further jowl descent",
                    "Create a scaffolding effect for improved structural support",
                    "Enhance the longevity of filler results",
                    "Deliver both instant and progressive improvement",
                    "Achieve results not possible with fillers alone",
                    "Natural tissue tightening over 6-12 months"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-accent border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Level 2 Expected Outcomes</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    Level 2 non-surgical facelift treatments deliver comprehensive facial rejuvenation with visible lifting effects. Patients typically see <strong className="text-purple-300">immediate improvement</strong> in jawline definition, reduction in jowl prominence, and softening of marionette lines and nasolabial folds.
                  </p>
                  <p>
                    Results continue to improve over the following <strong className="text-purple-300">3-6 months</strong> as PDO threads stimulate collagen production, providing progressive tissue tightening and enhanced skin quality. The combination of immediate volume restoration and gradual biological improvement creates natural, long-lasting transformation.
                  </p>
                  <p>
                    Downtime is slightly more than Level 1, with potential swelling lasting 5-7 days, though most patients return to work within 1-2 days with makeup to conceal any minor bruising.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Level 3 Treatment - Detailed Section */}
        <section className="py-20 bg-accent" id="level-3">
          <div className="page-container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Ages 55+
                </span>
                <h2 className="text-4xl font-bold mb-4 text-white">Level 3 & Above: Advanced Facial Aging</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Significant volume loss and heavy sagging where surgical options are typically recommended
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <Card className="bg-black border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Understanding Level 3 Facial Aging</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p>
                      Level 3 and above patients experience <strong className="text-purple-300">much more significant volume loss</strong> and <strong className="text-purple-300">heavy sagging in the jowls</strong>. This advanced stage of facial aging typically occurs in individuals who had <strong className="text-purple-300">fuller faces in their youth</strong>.
                    </p>
                    <p>
                      When fuller, heavier facial tissues descend with age and gravity, the resulting jowls and skin laxity become more pronounced. The <strong className="text-purple-300">degree of tissue descent</strong> is simply too substantial for non-surgical methods to address effectively.
                    </p>
                    <p>
                      At this level, the facial changes include severe jowling, significant neck laxity, deep nasolabial folds, pronounced marionette lines, extensive volume loss throughout multiple facial compartments, and marked skin redundancy that cannot be improved with injectables alone.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Honest Assessment & Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p>
                      At Cosmedocs, we pride ourselves on providing <strong className="text-purple-300">honest, ethical advice</strong>. When patients present with Level 3 or above facial aging, we candidly discuss whether non-surgical treatments can achieve their aesthetic goals.
                    </p>
                    <p>
                      In many Level 3 cases, <strong className="text-purple-300">surgical facelift options</strong> are more appropriate and will deliver superior, longer-lasting results. Attempting extensive non-surgical treatment at this level may result in:
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Suboptimal aesthetic outcomes</li>
                      <li>Overfilled appearance without adequate lift</li>
                      <li>Significant cost without proportional benefit</li>
                      <li>Patient dissatisfaction with results</li>
                    </ul>
                    <p>
                      We would rather refer you to an excellent facial plastic surgeon than provide treatment that won't meet your expectations. Your satisfaction and natural-looking results are our priority.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-purple-900/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">When Surgical Facelift is Recommended</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Signs You May Need Surgery:</h4>
                    <ul className="space-y-2">
                      {[
                        "Severe jowling with heavy tissue descent",
                        "Significant neck laxity and banding",
                        "Extensive skin redundancy",
                        "Previous non-surgical treatments with minimal effect",
                        "Desire for dramatic, long-lasting transformation"
                      ].map((sign, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-300 text-sm">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Benefits of Surgical Approach:</h4>
                    <ul className="space-y-2">
                      {[
                        "Removal of excess skin",
                        "Repositioning of deeper facial structures",
                        "Comprehensive neck rejuvenation",
                        "Results lasting 10-15 years",
                        "More dramatic transformation"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">
                  During your consultation, our experienced doctors will honestly assess your facial aging level and recommend the most appropriate treatment approach - whether non-surgical or surgical - to achieve your aesthetic goals.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before & After Gallery - Placeholder */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Non-Surgical Facelift Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Authentic before and after transformations from our London clinic. These realistic results demonstrate our 10+ years of expertise training doctors internationally in advanced non-surgical facelift techniques.
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
                      {/* Placeholder for actual images */}
                      <div className="w-full h-64 bg-purple-900/10 rounded-lg border-2 border-purple-500/30 flex items-center justify-center">
                        <div className="text-center p-4">
                          <p className="text-gray-500 text-sm mb-2">Image Placeholder {index + 1}</p>
                          <p className="text-gray-600 text-xs">{image.alt}</p>
                        </div>
                      </div>
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

            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                <strong className="text-purple-300">Gallery images to be added:</strong> Real client transformations showcasing Level 1, Level 2, and combination treatments. All images feature authentic results from actual Cosmedocs patients.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-accent" id="pricing-section">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Non-Surgical Facelift Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing based on your facial aging level. Investment varies according to treatment complexity and products required.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-black border-purple-500 hover:border-purple-400 transition-colors">
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Level 1
                    </span>
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">Early Aging</CardTitle>
                  <p className="text-4xl font-bold text-purple-300">£800-£1,500</p>
                  <p className="text-gray-400 text-sm mt-2">Ages 30-40</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Volume restoration in outer face compartment",
                      "Midface cheek enhancement",
                      "Tear trough treatment if needed",
                      "Premium hyaluronic acid fillers",
                      "Natural jaw definition",
                      "12-18 months duration"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-purple-500 hover:border-purple-400 transition-colors relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center">
                  <div className="mb-4 mt-2">
                    <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Level 2
                    </span>
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">Moderate Aging</CardTitle>
                  <p className="text-4xl font-bold text-purple-300">£1,800-£3,500</p>
                  <p className="text-gray-400 text-sm mt-2">Ages 40-55</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Extensive volume restoration",
                      "PDO thread lifting for jawline",
                      "Marionette lines treatment",
                      "Nasolabial fold correction",
                      "Pre-jowl sulcus filling",
                      "Combination filler + threads",
                      "12-24 months duration"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-purple-500 hover:border-purple-400 transition-colors">
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Level 3+
                    </span>
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">Advanced Aging</CardTitle>
                  <p className="text-4xl font-bold text-gray-400">Consultation</p>
                  <p className="text-gray-400 text-sm mt-2">Ages 55+</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive facial assessment",
                      "Honest evaluation of treatment options",
                      "Non-surgical vs surgical discussion",
                      "Surgical referral if appropriate",
                      "Realistic expectations counselling",
                      "Bespoke treatment planning"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="text-gray-500 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-gray-300 text-xs">
                      We provide honest advice about whether non-surgical treatment is appropriate at this level.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
              >
                Book Your Assessment Consultation
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                Prices include consultation, treatment, and premium products. Payment plans available.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-black">
          <div className="page-container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Cosmedocs for Non-Surgical Facelift</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Over 10 years of expertise training doctors internationally in advanced non-surgical facelift techniques
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-accent border-purple-500 text-center">
                <CardHeader>
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="text-purple-600" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">International Training Expertise</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm">
                    We've trained doctors internationally in advanced non-surgical facelift techniques for over 10 years, sharing our expertise and perfecting our approach.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent border-purple-500 text-center">
                <CardHeader>
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-purple-600" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">3-Level Personalised Approach</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm">
                    We don't believe in one-size-fits-all. Our sophisticated 3-level assessment ensures your treatment is precisely tailored to your facial aging stage.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent border-purple-500 text-center">
                <CardHeader>
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-purple-600" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">Invisible Art Philosophy</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm">
                    Our aesthetics is minimal - quiet, not loud. Invisible, not exaggerated. Transformations that whisper rather than shout.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-accent border-purple-500">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="text-purple-500" size={24} />
                    <CardTitle className="text-white text-xl">Honest Assessment & Ethics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <p className="text-sm">
                    We pride ourselves on ethical practice. If Level 3+ aging means surgery is more appropriate, we'll tell you honestly rather than provide suboptimal non-surgical treatment.
                  </p>
                  <p className="text-sm">
                    Your satisfaction and natural-looking results matter more to us than revenue. We'd rather refer you to an excellent surgeon than deliver disappointing outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent border-purple-500">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="text-purple-500" size={24} />
                    <CardTitle className="text-white text-xl">Premium Products & Technique</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <p className="text-sm">
                    We use only premium <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">dermal fillers</Link> from Swiss, French, and USA manufacturers, combined with advanced <Link to="/thread-face-lift" className="text-purple-400 hover:text-purple-300 underline">PDO thread</Link> techniques.
                  </p>
                  <p className="text-sm">
                    All done with the finest needles imported, because every detail matters. Our precision and technique create results that look naturally beautiful.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="page-container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Non-Surgical Facelift FAQs</h2>
              <p className="text-gray-300">
                Common questions about our 3-level non-surgical facelift approach
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-black border border-purple-500 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <section className="sr-only" aria-hidden="true">
          <h2>Comprehensive Guide to Non-Surgical Facelift London Treatments</h2>
          <p>
            Non-surgical facelift London treatments have revolutionised facial rejuvenation, offering effective alternatives to traditional surgical facelifts. At Cosmedocs, our liquid facelift approach combines advanced dermal filler techniques with PDO thread lifting to address various levels of facial aging without the need for invasive surgery, general anaesthesia, or extensive recovery periods.
          </p>
          <p>
            Understanding facial aging patterns is crucial to delivering optimal non-surgical facelift results. We've developed a sophisticated 3-level classification system that recognises how facial sagging progresses differently in each individual. Level 1 facial aging typically occurs between ages 30-40, characterised by mild volume loss in the outer facial compartment and early jowl formation. Level 2 aging shows moderate facial descent with visible jowls, marionette lines, and nasolabial fold deepening, whilst Level 3 and above involves significant tissue laxity where surgical intervention often provides superior outcomes.
          </p>
          <p>
            Liquid facelift treatments utilise premium hyaluronic acid dermal fillers strategically placed in key facial compartments to restore youthful volume and contours. The outer facial compartment, located near the ear and behind the masseter muscle, is particularly important for creating natural lifting effects. By precisely volumising this area, we achieve jaw definition and facial lifting without adding width to the face - a common concern that our expert technique addresses through anatomically correct filler placement.
          </p>
          <p>
            PDO thread face lifting represents an advanced component of Level 2 non-surgical facelift treatments. These polydioxanone threads provide immediate mechanical lift whilst stimulating neocollagenesis over subsequent months. The threads create a supportive scaffolding within facial tissues, securing the jawline and providing structural integrity that volume replacement alone cannot achieve. This combination approach delivers both instant visible improvement and progressive enhancement as the body's natural collagen production increases.
          </p>
          <p>
            Facial volume restoration extends beyond the jawline to include midface enhancement, tear trough treatment, and cheek volumisation. The midface loses fat and bone density with age, creating a flattened appearance that contributes to lower facial descent. By restoring three-dimensional projection in the cheeks and temples, we create comprehensive facial rejuvenation that addresses multiple aging mechanisms simultaneously. This holistic approach ensures harmonious, natural-looking results rather than isolated improvements.
          </p>
          <p>
            Treatment duration for non-surgical facelifts varies depending on the level of intervention required. Level 1 treatments typically take 45-60 minutes, whilst comprehensive Level 2 procedures incorporating PDO threads may require 90-120 minutes. All treatments are performed using topical anaesthetic combined with lidocaine-containing products to ensure patient comfort throughout the procedure. Most clients experience minimal discomfort and can return to work the same day or following day.
          </p>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Discover Your Treatment Level?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a comprehensive assessment consultation to determine your facial aging level and discover the optimal non-surgical facelift approach for your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open(bookingUrl, "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                >
                  Book Assessment Consultation
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                >
                  <Link to="/price-list">View Full Price List</Link>
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                Harley Street Since 2007 • 1M+ Injections • International Training Centre
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NonSurgicalFacelift;
