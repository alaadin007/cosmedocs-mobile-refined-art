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

const NonSurgicalPonytail = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Ponytail Lift UK Cost £350 | Ponytail Facelift London Near Me",
    "Expert non-surgical ponytail lift treatment. Botox ponytail facelift from £350 at Harley Street, London. Natural face lifting without surgery. Book consultation today.",
    "/non-surgical-ponytail"
  );

  const breadcrumbItems = [
    { label: "Treatments", path: "/treatments" },
    { label: "Botox Treatments", path: "/face-botox" }
  ];

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Non-surgical ponytail lift results", caption: "Non-Surgical Ponytail Lift: Natural facial lifting and contouring. Expert aesthetic muscle relaxation - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "What is a non-surgical ponytail lift?",
      answer: "A non-surgical ponytail lift, also known as a ponytail facelift, uses strategic botox injections to create a subtle lifting effect similar to wearing your hair in a tight ponytail. It targets specific muscles that pull the face downward, resulting in a natural lift of the eyebrows, cheeks, and jawline."
    },
    {
      question: "How long do ponytail lift results last?",
      answer: "Non-surgical ponytail lift results typically last 3-4 months. Many patients experience a subtle yet noticeable lifting effect with improved facial contours. Regular treatments every 12-16 weeks help maintain optimal lifting and contouring results."
    },
    {
      question: "Is the ponytail lift procedure painful?",
      answer: "The non-surgical ponytail lift involves strategic injections in targeted facial areas. Most patients describe minimal discomfort during the 15-20 minute procedure. Our doctors use fine needles and precise techniques to minimise any discomfort."
    },
    {
      question: "What can I expect after a ponytail lift treatment?",
      answer: "You may experience mild tenderness at injection sites for 24-48 hours. The lifting effect typically begins within 7-14 days, with maximum results visible at 2-3 weeks. You can resume normal activities immediately after treatment."
    },
    {
      question: "Am I a good candidate for a non-surgical ponytail lift?",
      answer: "Ideal candidates are looking for subtle facial lifting without surgery, have mild to moderate facial sagging, and want to address eyebrow drooping, jowls, or loss of jawline definition. A detailed facial assessment determines if this treatment is suitable for you."
    },
    {
      question: "How much does a non-surgical ponytail lift cost?",
      answer: "Non-surgical ponytail lift at Cosmedocs costs £350 per treatment session. This advanced aesthetic treatment provides natural-looking facial lifting and is administered every 3-4 months for optimal results."
    },
    {
      question: "Can a ponytail lift be combined with other treatments?",
      answer: "Yes! The non-surgical ponytail lift can be combined with other treatments like <Link to='/dermal-fillers' className='text-purple-400 hover:text-purple-300 underline'>dermal fillers</Link>, <Link to='/profhilo-treatment' className='text-purple-400 hover:text-purple-300 underline'>Profhilo</Link>, and <Link to='/face-botox' className='text-purple-400 hover:text-purple-300 underline'>other botox treatments</Link>. Our doctors create comprehensive treatment plans for optimal facial rejuvenation."
    },
    {
      question: "How many injection points are needed for a ponytail lift?",
      answer: "The treatment typically involves strategic injections in 8-12 key points around the temples, forehead edges, and jaw area. The clinician's expertise is crucial in determining the precise placement to achieve a natural lifting effect whilst maintaining facial movement and expression."
    },
    {
      question: "How long does the ponytail lift procedure take?",
      answer: "The non-surgical ponytail lift procedure takes approximately 15-20 minutes including consultation and preparation. This makes it an ideal 'lunchtime treatment' that fits easily into a busy schedule."
    },
    {
      question: "Who makes a good candidate for a ponytail lift?",
      answer: "If you're someone who wants subtle facial lifting without surgery, notice sagging in the eyebrow or jawline area, or desire a more defined facial contour, the ponytail lift may be ideal. Consulting with our aesthetic experts can determine if this treatment suits your facial structure and aesthetic goals."
    },
    {
      question: "How often do I need ponytail lift treatments?",
      answer: "Generally, the ponytail lift treatment is repeated every 3-4 months for effective, maintained results. Some patients may extend to 4-5 months depending on individual muscle response and desired lifting effect."
    },
    {
      question: "What makes Cosmedocs different for ponytail lifts?",
      answer: "Cosmedocs has extensive experience in advanced facial aesthetics. Our doctors understand facial anatomy deeply and use precise injection techniques to achieve natural-looking lifts. We offer personalised treatment plans at competitive prices, combining expertise with care."
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
        <meta name="keywords" content="non-surgical ponytail lift, ponytail facelift, ponytail lift botox, face lift without surgery, non surgical facelift, jawline lift, eyebrow lift, facial lifting, natural facelift, botox face lift, temple lift, ponytail facelift near me, non surgical lift, facial contouring, jowl reduction, non surgical ponytail, aesthetic lifting" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.519526;-0.146061" />
        <meta name="ICBM" content="51.519526, -0.146061" />
        <meta name="author" content="Dr. Raj Thethi, Cosmetic Medicine Specialist" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalBusiness", "MedicalClinic"],
            "name": "Cosmedocs - Non-Surgical Ponytail Lift London",
            "description": "Expert non-surgical ponytail lift treatment. Botox ponytail facelift from £350. Natural face lifting without surgery at Harley Street, London.",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "priceRange": "££",
            "image": "https://www.cosmedocs.co.uk/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png",
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
            "areaServed": [
              {
                "@type": "City",
                "name": "London"
              },
              {
                "@type": "Place",
                "name": "Marylebone"
              },
              {
                "@type": "Place",
                "name": "Westminster"
              },
              {
                "@type": "Place",
                "name": "Mayfair"
              },
              {
                "@type": "Place",
                "name": "Fitzrovia"
              }
            ],
            "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
            "medicalSpecialty": ["Cosmetic Medicine", "Aesthetic Medicine"],
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
            "name": "Non-Surgical Ponytail Lift",
            "description": "Non-surgical ponytail facelift using strategic botox injections for natural facial lifting. Professional aesthetic treatment at Harley Street, London.",
            "procedureType": "Aesthetic Botox Injection",
            "bodyLocation": ["Face", "Temples", "Forehead", "Jawline", "Eyebrows"],
            "followup": "Treatment recommended every 12-16 weeks for optimal lifting and contouring",
            "preparation": "Medical consultation and facial assessment required",
            "howPerformed": "Precise botox injections administered at strategic facial points to create natural lifting effect without surgery",
            "procedureDuration": "PT20M",
            "medicationUsed": {
              "@type": "Drug",
              "name": "Botulinum Toxin Type A (Botox)",
              "isProprietary": true
            }
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
                "item": "https://www.cosmedocs.co.uk/face-botox"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Non-Surgical Ponytail Lift",
                "item": "https://www.cosmedocs.co.uk/non-surgical-ponytail"
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
                  <BreadcrumbPage>Non-Surgical Ponytail Lift</BreadcrumbPage>
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
                  <span className="text-purple-300">Non-Surgical Ponytail Lift London</span>
                  <span className="block text-sm mt-4">Invisible art - natural facial lifting without surgery</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Ponytail Facelift Near Me</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Natural lifting effect • Results last 3-4 months</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Non-Surgical Ponytail Lift Treatment</h2>
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
                <p className="text-gray-300">3-4 months with regular treatments</p>
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

        {/* What is Non-Surgical Ponytail Lift */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is a Non-Surgical Ponytail Lift?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Cosmedocs has been providing advanced facial aesthetics for over a decade. The non-surgical ponytail lift, also known as the ponytail facelift, is an innovative treatment that mimics the natural lifting effect achieved when pulling your hair back into a tight ponytail. Using strategic <Link to="/face-botox" className="text-purple-400 hover:text-purple-300 underline">botox injections</Link> at precise facial points, we relax muscles that pull the face downward whilst enhancing those that provide lift. Our invisible art approach provides natural facial contouring and lifting whilst maintaining completely natural expressions and movement. This treatment is ideal for those seeking facial rejuvenation without surgery or downtime.
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
                    <CardTitle className="text-white text-2xl text-center">Understanding Facial Ageing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                      As we age, facial muscles and tissues lose elasticity, leading to sagging in key areas like the eyebrows, cheeks, and jawline. The non-surgical ponytail lift addresses these concerns by strategically relaxing downward-pulling muscles whilst allowing upward-lifting muscles to work more effectively. Similar to how we address other aesthetic concerns with <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">dermal fillers</Link> or <Link to="/profhilo-treatment" className="text-purple-400 hover:text-purple-300 underline">Profhilo</Link>, the ponytail lift requires precision and expertise.
                    </p>
                  <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                    This technique provides subtle yet noticeable lifting, creating a more youthful and refreshed appearance without the need for invasive surgery or lengthy recovery periods.
                  </p>
                  <div className="bg-purple-900/50 rounded-lg p-6 max-w-2xl mx-auto">
                    <p className="text-purple-200 font-semibold text-center">
                      The non-surgical ponytail lift has become increasingly popular as an alternative to traditional facelifts, offering natural-looking results with minimal downtime and no surgical risks.
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
                  <div className="text-purple-300 font-medium">Temple Region</div>
                  <div className="text-purple-300 font-medium">Forehead Edges</div>
                  <div className="text-purple-300 font-medium">Jaw & Jawline</div>
                  <div className="text-purple-300 font-medium">Lower Face</div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Non-Surgical Ponytail Lift — How Does It Work?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                Understanding the ponytail lift technique: Our expert doctors use precise injections at strategic facial points to create a natural lifting effect without surgery or downtime.
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
                      After a detailed consultation and facial assessment at Cosmedocs, your treatment begins. The doctor uses a very fine needle to inject botulinum toxin into precise points in strategic facial areas including:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Temporal region (temples)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Lateral forehead edges</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Jaw and jawline area</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Lower facial muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Brow positioning points</span>
                      </li>
                    </ul>
                    <p className="text-purple-300 font-medium">
                      Following the treatment you may continue normal daily activities. Many patients combine their visit with other <Link to="/treatments" className="text-purple-400 hover:text-purple-300 underline">aesthetic treatments</Link> during the same appointment.
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
                      The non-surgical ponytail lift causes minimal to no pain for most people. Medical experts consider it a safe treatment. However, like any aesthetic procedure, you may experience some slight side effects, such as:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Bruising, redness, or swelling around the injection sites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Mild headache in the first 24 hours</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Temporary tenderness at injection points</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Slight asymmetry (easily corrected at follow-up)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Benefits of Non-Surgical Ponytail Lift</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                The non-surgical ponytail lift offers numerous advantages for those seeking facial rejuvenation without surgery. Key benefits include:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Natural-looking facial lifting",
                "No surgery or incisions required", 
                "Minimal downtime - return to work immediately",
                "Subtle eyebrow lift",
                "Improved jawline definition",
                "Reduced appearance of jowls",
                "Enhanced facial contours",
                "Maintains natural expressions",
                "Quick 15-20 minute procedure"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/30"
                >
                  <p className="text-white font-medium text-center">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">How Does the Ponytail Lift Work? The Science</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                The non-surgical ponytail lift works by strategically targeting specific facial muscles. Here's the science behind this innovative treatment.
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
                      Advanced Aesthetic Technique
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
                      The non-surgical ponytail lift works by relaxing specific muscles that pull the face downward (depressor muscles) whilst allowing the lifting muscles (elevator muscles) to work more effectively. When botox is injected into targeted points, it blocks the release of acetylcholine, preventing muscle contraction in downward-pulling areas.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
                      This creates a natural lifting effect as the unopposed elevator muscles gently pull the facial tissues upward, mimicking the effect of a physical facelift without any surgical intervention. The treatment particularly addresses the temporal region, brow position, and jawline definition, providing a subtle yet noticeable rejuvenation effect.
                    </p>
                    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30 max-w-3xl mx-auto">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="text-purple-400 mt-1" size={24} />
                        <div>
                          <p className="text-purple-200 font-medium mb-2">Expert Technique</p>
                          <p className="text-gray-300 italic leading-relaxed">
                            "The success of a non-surgical ponytail lift depends entirely on precise anatomical knowledge and injection technique. Our doctors understand the complex interplay of facial muscles and use strategic placement to achieve natural, balanced lifting without compromising facial expression or movement."
                          </p>
                        </div>
                      </div>
                    </div>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Transparent pricing for non-surgical ponytail lift treatment in London. All prices include consultation and follow-up care.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">Non-Surgical Ponytail Lift</h3>
                      <p className="text-gray-300 text-lg">
                        Complete treatment including consultation, injection, and 2-week follow-up
                      </p>
                      <ul className="mt-4 space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <Check className="text-purple-400" size={16} />
                          <span>Strategic facial point injections</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="text-purple-400" size={16} />
                          <span>Natural lifting effect</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="text-purple-400" size={16} />
                          <span>Results last 3-4 months</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-purple-300 mb-2">£350</div>
                      <p className="text-gray-400 mb-4">per treatment</p>
                      <Button 
                        className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
                        onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Cosmedocs</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Expert care and natural results from London's leading aesthetic doctors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <Award className="text-purple-400 mb-4" size={40} />
                    <CardTitle className="text-white text-xl">Expert Doctors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      All treatments performed by GMC-registered doctors with extensive experience in advanced facial aesthetics
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
                    <Palette className="text-purple-400 mb-4" size={40} />
                    <CardTitle className="text-white text-xl">Natural Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Our invisible art approach ensures subtle, natural-looking lifting that enhances your features without looking overdone
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
                    <Heart className="text-purple-400 mb-4" size={40} />
                    <CardTitle className="text-white text-xl">Personalised Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Bespoke treatment plans tailored to your unique facial structure and aesthetic goals
                    </p>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about non-surgical ponytail lift treatments answered by our expert doctors.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Experience Natural Facial Lifting?</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Book your consultation today and discover how the non-surgical ponytail lift can enhance your natural beauty
              </p>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-6 text-lg font-semibold shadow-2xl"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NonSurgicalPonytail;
