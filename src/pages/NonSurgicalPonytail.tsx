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
    "Non-Surgical Ponytail Lift UK | Mini Facelift London | Ponytail Face Lift £350",
    "Expert non-surgical ponytail facelift combining botox and dermal fillers. Mini face lift London from £350 at Harley Street. Ponytail lift before and after results. Face lifting therapy without surgery.",
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
      answer: "A non-surgical ponytail lift, also known as a ponytail facelift, uses a strategic combination of botox and dermal fillers to create a subtle lifting effect similar to wearing your hair in a tight ponytail. Botox relaxes muscles that pull the face downward, whilst dermal fillers restore volume and enhance lift, resulting in a natural elevation of the eyebrows, cheeks, and jawline."
    },
    {
      question: "How long do ponytail lift results last?",
      answer: "The non-surgical ponytail lift combines two components with different durations: botox effects typically last 3-4 months, whilst dermal filler results can last 6-12 months depending on the type used. Most patients return for botox top-ups every 3-4 months to maintain the lifting effect, with filler refreshed less frequently as needed."
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
      answer: "Yes! The non-surgical ponytail lift already combines botox and dermal fillers, but can be enhanced with additional treatments like <Link to='/profhilo-treatment' className='text-purple-400 hover:text-purple-300 underline'>Profhilo</Link> for skin quality, <Link to='/face-botox' className='text-purple-400 hover:text-purple-300 underline'>other botox areas</Link>, or additional <Link to='/dermal-fillers' className='text-purple-400 hover:text-purple-300 underline'>filler treatments</Link> in different facial zones. Our doctors create comprehensive treatment plans for optimal facial rejuvenation."
    },
    {
      question: "How many injection points are needed for a ponytail lift?",
      answer: "The treatment typically involves strategic botox injections in 8-12 key points around the temples, forehead edges, and jaw area, plus targeted dermal filler placement to restore volume and enhance the lifting effect. The clinician's expertise is crucial in determining the precise placement to achieve a natural lifting effect whilst maintaining facial movement and expression."
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
      answer: "The botox component requires maintenance every 3-4 months to preserve the lifting effect. Dermal fillers last longer (6-12 months), so filler top-ups are needed less frequently. Your personalised treatment schedule will be tailored to maintain optimal results based on how your individual facial tissues respond."
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
        <meta name="description" content="Expert non-surgical ponytail lift combining botox and dermal fillers. Mini facelift London from £350. Ponytail face lift before and after results. Face lifting therapy without surgery at Harley Street." />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="ponytail facelift, ponytail lift, ponytail face lift, mini facelift london, mini face lift uk, face lift london, mini facelift, mini lower face lift, ponytail facelift before and after, mini ponytail, face lifting therapy, face lift skin tightening, non surgical face lift, non surgical face lift london, face lift non surgical, non surgical brow lift, non surgical eyelid lift, non surgical face lift near me, non surgical face lift before and after, best face lift non surgical, non surgical face lift price uk, non surgical ponytail, aesthetic lifting" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.519526;-0.146061" />
        <meta name="ICBM" content="51.519526, -0.146061" />
        <meta name="author" content="Dr. Raj Thethi, Cosmetic Medicine Specialist" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalBusiness", "MedicalClinic"],
            "name": "Cosmedocs - Non-Surgical Ponytail Facelift | Mini Facelift London",
            "description": "Expert non-surgical ponytail lift and mini facelift treatment. Ponytail face lift from £350. Natural face lifting therapy without surgery at Harley Street, London.",
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
            "description": "Non-surgical ponytail facelift using strategic combination of botox and dermal fillers for natural facial lifting. Professional aesthetic treatment at Harley Street, London.",
            "procedureType": "Aesthetic Injectable Treatment",
            "bodyLocation": ["Face", "Temples", "Forehead", "Jawline", "Eyebrows"],
            "followup": "Treatment recommended every 12-16 weeks for optimal lifting and contouring",
            "preparation": "Medical consultation and facial assessment required",
            "howPerformed": "Strategic combination of botox injections to relax downward-pulling muscles and dermal fillers to restore volume, administered at precise facial points to create natural lifting effect without surgery",
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
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-purple-300">
                  Ponytail Facelift
                </h1>
                <p className="text-xl text-gray-200 mb-8">Invisible art - non surgical ponytail face lift London</p>
                <div className="mb-8">
                  <p className="text-2xl text-white font-bold">Expert Mini Facelift London</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Combination of Botox & Dermal Fillers • Natural face lift skin tightening</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Non-Surgical Ponytail Lift & Mini Facelift Treatment</h2>
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
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is a Non-Surgical Ponytail Lift also known as Mini Facelift London?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-6">
                Cosmedocs has been providing advanced facial aesthetics for over a decade. The non-surgical ponytail lift, also known as the ponytail facelift, is an innovative treatment that mimics the natural lifting effect achieved when pulling your hair back into a tight ponytail. Using a strategic combination of <Link to="/face-botox" className="text-purple-400 hover:text-purple-300 underline">botox injections</Link> and <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">dermal fillers</Link> at precise facial points, we relax muscles that pull the face downward whilst restoring volume and enhancing lift.
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Our invisible art approach provides natural facial contouring and lifting whilst maintaining completely natural expressions and movement. According to the <a href="https://baaps.org.uk/about/news/1891/cosmetic_surgery_trends_2024_facial_rejuvenation_surges_while_mens_procedures_decline/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">British Association of Aesthetic Plastic Surgeons</a>, facial rejuvenation procedures have seen significant growth, with non-surgical treatments becoming increasingly popular alternatives to traditional surgery. This treatment is ideal for those seeking facial rejuvenation without surgery or downtime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Understanding Facial Ageing */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Understanding Facial Ageing & Face Lift Skin Tightening</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                <CardContent className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                    As we age, facial muscles and tissues lose elasticity, leading to sagging in key areas like the eyebrows, cheeks, and jawline. The non-surgical ponytail facelift addresses these concerns through a dual approach: strategically relaxing downward-pulling muscles with botox whilst restoring volume and structural support with dermal fillers. This mini facelift technique, similar to how we integrate treatments like <Link to="/profhilo-treatment" className="text-purple-400 hover:text-purple-300 underline">Profhilo</Link>, requires precision and expertise for optimal face lifting therapy results.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                    This non surgical face lift technique provides subtle yet noticeable face lift skin tightening, creating a more youthful and refreshed appearance without the need for invasive surgery or lengthy recovery periods.
                  </p>
                  <div className="bg-purple-900/50 rounded-lg p-6 max-w-2xl mx-auto">
                    <p className="text-purple-200 font-semibold text-center">
                      The non-surgical ponytail face lift has become increasingly popular as a mini face lift alternative to traditional surgical facelifts, offering natural-looking results with minimal downtime and no surgical risks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Does the Ponytail Facelift Work? Non Surgical Face Lift London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                The non-surgical ponytail facelift works through a dual-action approach combining botox and dermal fillers. Here's the science and process behind this innovative mini facelift technique.
              </p>
            </motion.div>

            {/* The Science */}
            <div className="max-w-4xl mx-auto mb-16">
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
                      The non-surgical ponytail lift works through a sophisticated two-part approach: botox relaxes specific muscles that pull the face downward (depressor muscles) whilst dermal fillers restore volume and structural support to key areas. When botox is injected into targeted points, it blocks the release of acetylcholine, preventing muscle contraction in downward-pulling areas. Simultaneously, dermal fillers add volume and lift to the temples, cheeks, and jawline. Research published by the <a href="https://www.dermatologytimes.com/view/combination-treatment-nonsurgical-face-lift" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">American Academy of Dermatology</a> demonstrates that combination treatments using neuromodulators and fillers provide superior lifting results compared to single-modality approaches.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
                      This creates a comprehensive lifting effect: the botox allows the lifting muscles (elevator muscles) to work more effectively, whilst the dermal fillers provide immediate structural support and volume restoration. Together, they mimic the effect of a physical facelift without any surgical intervention. The treatment particularly addresses the temporal region, brow position, and jawline definition, providing both immediate and progressive rejuvenation effects.
                    </p>
                    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30 max-w-3xl mx-auto">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="text-purple-400 mt-1" size={24} />
                        <div>
                          <p className="text-purple-200 font-medium mb-2">Expert Technique</p>
                          <p className="text-gray-300 italic leading-relaxed">
                            "The success of a non-surgical ponytail lift depends entirely on precise anatomical knowledge and expert injection technique. Our doctors understand the complex interplay of facial muscles and tissue support structures, using strategic placement of both botox and dermal fillers to achieve natural, balanced lifting without compromising facial expression or movement."
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


        {/* Treatment Process & Side Effects */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Treatment Process & What to Expect During Mini Face Lift</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Understanding the procedure and potential side effects of the non-surgical ponytail facelift
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
                      After a detailed consultation and facial assessment at Cosmedocs, your treatment begins. The doctor uses a very fine needle to inject a combination of <Link to="/face-botox-areas" className="text-purple-400 hover:text-purple-300 underline">botulinum toxin</Link> (to relax downward-pulling muscles) and <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">dermal fillers</Link> (to restore volume and enhance lift) into precise points in strategic facial areas including:
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

        {/* Comparison Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Surgical vs Non-Surgical Ponytail Facelift: Best Face Lift Non Surgical</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the key differences between traditional surgical facelifts and the non-surgical ponytail lift (mini facelift) to help you make an informed decision. Discover why patients are choosing non surgical brow lift and <Link to="/nefertiti-botox-facelift" className="text-purple-400 hover:text-purple-300 underline">Nefertiti facelift</Link> alternatives over invasive surgery.
              </p>
            </motion.div>
            
            <div className="page-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Surgical Facelift */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-red-500/30 h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center">
                        <Syringe className="mr-3 text-red-400" size={24} />
                        Surgical Facelift
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Invasive surgical procedure involving incisions, tissue removal, and muscle tightening under general anaesthesia for permanent facial rejuvenation. The <a href="https://www.nhs.uk/conditions/cosmetic-procedures/facelift/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">NHS</a> notes that whilst surgical facelifts can provide dramatic results, they carry significant risks and require substantial recovery time.
                      </p>
                      
                      <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                        <ul className="text-gray-300 space-y-3">
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> General anaesthesia required</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> 2-4 hours surgery duration</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> 2-4 weeks recovery time</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> £6,000-£15,000+ cost</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> Visible scarring potential</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> Risk of nerve damage</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> Significant post-operative pain</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> Infection & complications risk</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Non-Surgical Ponytail Lift */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-primary h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center">
                        <Heart className="mr-3 text-purple-400" size={24} />
                        Non-Surgical Ponytail Lift (Mini Facelift)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Non-invasive injectable treatment combining <Link to="/face-botox-areas" className="text-purple-400 hover:text-purple-300 underline">botox</Link> and <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">dermal fillers</Link> for natural facial lifting with no surgery, no downtime, and immediate results. Perfect alternative to traditional surgical procedures.
                      </p>
                      
                      <div className="bg-purple-900/10 rounded-lg p-6 border border-purple-500/30">
                        <ul className="text-gray-300 space-y-3">
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> No anaesthesia needed</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> 15-20 minute procedure</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> Immediate return to activities</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> £350 cost-effective</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> No scarring whatsoever</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> Fully reversible treatment</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> Minimal discomfort only</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> Natural-looking results</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Benefits of Non-Surgical Ponytail Lift & Mini Lower Face Lift</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                The non-surgical ponytail lift offers numerous advantages for those seeking facial rejuvenation without surgery. This innovative face lifting therapy combines <Link to="/face-botox-areas" className="text-purple-400 hover:text-purple-300 underline">advanced botox techniques</Link> with <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline">premium dermal fillers</Link> to deliver exceptional results. Key benefits include:
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
              <h2 className="text-3xl font-bold mb-6 text-white">Pricing - Non Surgical Face Lift Price UK</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Transparent pricing for non-surgical ponytail facelift and mini face lift treatment in London. All prices include consultation and follow-up care. Best non surgical face lift near me.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">Non-Surgical Ponytail Facelift & Mini Face Lift</h3>
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

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
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
                <p className="text-gray-300">Premium FDA-approved botox and fillers only</p>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions - Ponytail Facelift Before and After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about non-surgical ponytail facelift, mini face lift, and face lifting therapy answered by our expert doctors.
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

        {/* Hidden SEO Content */}
        <section className="sr-only" aria-hidden="true">
          <div className="page-container">
            <h2>Non-Surgical Face Lift London - Comprehensive Guide to Ponytail Facelift & Mini Face Lift UK</h2>
            <p>
              The non-surgical ponytail facelift has revolutionised face lifting therapy in London, offering an innovative alternative to traditional surgical procedures. This mini facelift technique combines advanced botox applications with strategic dermal filler placement to achieve remarkable face lift skin tightening results without going under the knife. Patients seeking a mini face lift UK solution increasingly turn to this non surgical face lift procedure for its natural-looking outcomes and minimal downtime.
            </p>
            <p>
              Our ponytail face lift treatment provides comprehensive facial rejuvenation through a face lift non surgical approach. The procedure addresses multiple concerns simultaneously, functioning as a non surgical brow lift, non surgical eyelid lift, and mini lower face lift all in one session. Many patients researching "non surgical face lift near me" or "best face lift non surgical" options discover that the ponytail facelift before and after results demonstrate exceptional improvements in facial contours, jawline definition, and overall facial harmony.
            </p>
            <p>
              As a leading provider of non surgical face lifts in London, we understand that non surgical face lift price UK considerations are important. Our mini facelift London treatments offer exceptional value, with transparent pricing for this innovative face lifting therapy. The mini ponytail technique works by strategically relaxing downward-pulling muscles whilst simultaneously restoring volume to key facial areas, creating the characteristic lifted appearance associated with the ponytail face lift.
            </p>
            <p>
              The ponytail lift before and after transformations showcase how this non surgical face lift London treatment can address age-related changes including jowls, loss of jawline definition, brow ptosis, and midface volume loss. Unlike traditional face lift london surgical procedures, our mini face lift before and after results reveal natural-looking enhancements that respect individual facial anatomy. Patients appreciate that this face lift non surgical procedure maintains facial expressiveness whilst providing visible rejuvenation.
            </p>
            <p>
              When comparing non surgical face lift options, the ponytail facelift stands out for its dual-action approach combining muscle relaxation with volumetric restoration. This best face lift non surgical technique delivers both immediate and progressive improvements, with dermal filler effects visible instantly whilst botox results develop over 7-14 days. Our experienced practitioners ensure precise placement for optimal face lift skin tightening outcomes that appear completely natural.
            </p>
            <p>
              For those seeking non surgical face lift near me solutions in London, Harley Street offers the ideal location for this advanced face lifting therapy. Our mini facelift london treatments are performed by highly skilled aesthetic doctors who specialise in facial anatomy and rejuvenation techniques. The mini lower face lift effects achieved through strategic botox and filler placement create definition along the jawline whilst the upper face benefits from non surgical brow lift and temple volumisation.
            </p>
            <p>
              Understanding non surgical face lift price UK considerations, we provide comprehensive consultations to discuss treatment expectations, longevity, and maintenance schedules. The ponytail face lift offers exceptional value given its comprehensive rejuvenation effects across multiple facial zones. Patients researching mini face lift UK options appreciate the transparent pricing structure and personalised treatment planning that ensures optimal outcomes suited to individual aesthetic goals and facial characteristics.
            </p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Natural Facial Lifting?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how the non-surgical ponytail lift 
                can enhance your natural beauty with subtle, sophisticated results.
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
      </div>
    </>
  );
};

export default NonSurgicalPonytail;
