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
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Heart, Target, MapPin, Star, Home, Award, GraduationCap, CheckCircle, Palette } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ClientReviews from '@/components/ClientReviews';

const CupidBowLips = () => {
  const seoData = generateSEOMetadata(
    "Cupid's Bow Lip Enhancement London 2025 | From £300 | Harley Street",
    "Define & reshape your cupid's bow with precision filler. Create pronounced lip peaks for perfect symmetry from £300.",
    "/cupid-bow-lips"
  );

  const breadcrumbItems = [
    { label: "Treatments", path: "/treatments" },
    { label: "Lip Treatments", path: "/lip-fillers" }
  ];

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png", 
      alt: "Before and after Cupid's bow enhancement showing defined lip peaks", 
      caption: "Perfectly defined Cupid's bow creating elegant lip shape" 
    },
    { 
      src: "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png", 
      alt: "Before and after Cupid's bow lip filler London showing natural definition", 
      caption: "Enhanced Cupid's bow with natural-looking definition and symmetry" 
    },
    { 
      src: "/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png", 
      alt: "Before and after subtle Cupid's bow enhancement London", 
      caption: "Subtle Cupid's bow refinement for balanced, proportionate lips" 
    }
  ];

  const faqs = [
    {
      question: "How long do Cupid's bow enhancement results last?",
      answer: "Results typically last 6-12 months depending on the filler used, your metabolism, and lifestyle factors. Premium hyaluronic acid fillers provide long-lasting definition whilst naturally integrating with your lip tissue for optimal results."
    },
    {
      question: "Is Cupid's bow enhancement painful?",
      answer: "The treatment is minimally uncomfortable. We use topical anaesthetic and premium fillers containing lidocaine to ensure your comfort throughout the procedure. Most clients describe only mild pressure during injection."
    },
    {
      question: "Can Cupid's bow enhancement look natural?",
      answer: "Absolutely. Our philosophy is invisible art—enhancing your natural features without exaggeration. We carefully assess your facial proportions and lip anatomy to create a Cupid's bow that complements your unique features beautifully."
    },
    {
      question: "How much filler is needed for Cupid's bow enhancement?",
      answer: "Typically, 0.3-0.7ml of filler is used specifically for the Cupid's bow area. The exact amount depends on your natural lip structure and desired definition. Our doctors will recommend the optimal volume during your consultation."
    },
    {
      question: "Can Cupid's bow enhancement be combined with other treatments?",
      answer: "Yes, it's often combined with overall lip filler, lip border definition, or other facial aesthetic treatments for comprehensive enhancement. Popular combinations include nasolabial fold treatment, marionette lines treatment, or non-surgical facelifts. Our doctors will create a bespoke treatment plan tailored to your goals."
    },
    {
      question: "What are the possible side effects?",
      answer: "Common side effects include mild swelling, tenderness, and occasional bruising at injection sites. These typically resolve within 24-48 hours. Serious complications are rare when performed by experienced medical professionals using premium products."
    },
    {
      question: "When can I wear makeup after treatment?",
      answer: "Avoid makeup on the treated area for at least 12 hours post-treatment. This allows the injection sites to heal properly and reduces the risk of infection or irritation."
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
        <meta name="keywords" content="cupids bow, cupid bow, cupid with a bow, cupid's bow lips, cupid bow lips, cupid's bow, cupids bow lips, bow cupid, cupid's bow lip, cupids bow lip, cupid bow lip, define cupids bow, what is a cupid's bow, cupid bows, cupid's bow meaning, defined cupid's bow, cupid's bow enhancement, cupid's bow enhancement before and after, cupid's bow lip injections, injecting cupid's bow, lip injections cupid's bow, lip filler London, Harley Street aesthetics" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.519526;-0.146061" />
        <meta name="ICBM" content="51.519526, -0.146061" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cupid's Bow Lip Enhancement",
            "description": "Expert Cupid's bow lip filler treatment for natural, defined lips in London",
            "serviceType": "Cosmetic Treatment",
            "provider": {
              "@type": "MedicalClinic",
              "name": "Cosmedocs - Cupid's Bow Lip Filler London",
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
                }
              ],
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
              ]
            },
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
                "name": "Lip Treatments",
                "item": "https://www.cosmedocs.co.uk/lip-fillers"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Cupid's Bow Enhancement",
                "item": "https://www.cosmedocs.co.uk/cupid-bow-lips"
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
                "text": faq.answer
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Cupid's Bow Enhancement Treatment",
            "description": "Professional Cupid's bow lip enhancement with premium hyaluronic acid fillers",
            "priceSpecification": [
              {
                "@type": "PriceSpecification",
                "price": "250",
                "priceCurrency": "GBP",
                "name": "Subtle Definition (0.3ml)"
              },
              {
                "@type": "PriceSpecification",
                "price": "350",
                "priceCurrency": "GBP",
                "name": "Enhanced Definition (0.5ml)"
              },
              {
                "@type": "PriceSpecification",
                "price": "450",
                "priceCurrency": "GBP",
                "name": "Maximum Definition (0.7ml)"
              }
            ],
            "availability": "https://schema.org/InStock",
            "url": "https://www.cosmedocs.co.uk/cupid-bow-lips",
            "seller": {
              "@type": "MedicalClinic",
              "name": "Cosmedocs",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              },
              "telephone": "+44 20 3733 3227"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": "https://www.cosmedocs.co.uk/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png",
            "name": "Before and after Cupid's bow enhancement showing defined lip peaks",
            "description": "Perfectly defined Cupid's bow creating elegant lip shape",
            "thumbnailUrl": "https://www.cosmedocs.co.uk/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": "https://www.cosmedocs.co.uk/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png",
            "name": "Before and after Cupid's bow lip filler London showing natural definition",
            "description": "Enhanced Cupid's bow with natural-looking definition and symmetry",
            "thumbnailUrl": "https://www.cosmedocs.co.uk/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": "https://www.cosmedocs.co.uk/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png",
            "name": "Before and after subtle Cupid's bow enhancement London",
            "description": "Subtle Cupid's bow refinement for balanced, proportionate lips",
            "thumbnailUrl": "https://www.cosmedocs.co.uk/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png"
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
                  <BreadcrumbPage>Cupid's Bow Enhancement</BreadcrumbPage>
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
                  Cupid's Bow Enhancement
                </h1>
                <p className="text-xl text-gray-200 mb-8">Invisible art - defining elegance without exaggeration</p>
                <div className="mb-8">
                  <p className="text-2xl text-white font-bold">Define Your Natural Beauty</p>
                  <p className="text-sm text-gray-300">Precise filler technique • Natural lip definition</p>
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
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Cupid's Bow Enhancement Overview</h2>
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
                <p className="text-gray-300">20-30 minutes</p>
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
                <p className="text-gray-300">6-12 months</p>
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
                <p className="text-gray-300">Minimal, return same day</p>
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
                <p className="text-gray-300">Topical + lidocaine</p>
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
              <h2 className="text-3xl font-bold mb-4">Before and After Cupid's Bow Enhancement</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after results showcasing beautifully defined Cupid's bows 
                achieved through precise filler placement and expert technique.
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

        {/* What is Cupid's Bow? */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">What Is a Cupid's Bow?</h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  The cupid's bow (also written as cupid bow or cupids bow) is the distinctive double-curved area at the centre of the upper lip, 
                  resembling the shape of Cupid with a bow from classical mythology. This anatomical feature 
                  defines the peaks and valleys of your upper lip, creating the characteristic 'M' shape that's 
                  essential for balanced, attractive lip aesthetics.
                </p>

                <p>
                  Named after the Roman god of love, Cupid, whose bow shared a similar curved silhouette, 
                  the cupid's bow consists of two symmetrical peaks (the highest points of the upper lip) 
                  connected by a central dip. Understanding what is a cupid's bow and its cupid's bow meaning 
                  is crucial for appreciating how this natural contour plays a vital role in facial harmony 
                  and is considered a key feature of youthful, aesthetically pleasing lips. According to <a 
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5952987/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >research on ideal lip aesthetics</a>, well-defined cupid bows are associated with perceptions of beauty and youth. Studies from the <a 
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6345732/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >Journal of Craniofacial Surgery</a> further confirm that lip proportion and Cupid's bow prominence significantly influence facial attractiveness ratings.
                </p>

                <Card className="bg-black border-purple-900/30 mt-6">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">A Well-Defined Cupid's Bow Creates:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Clear definition between the upper lip and the philtrum (the vertical groove from nose to lip)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Balanced proportions between upper and lower lips</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Enhanced lip shape and projection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>A more youthful, refined appearance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Improved overall facial symmetry</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Cupid's Bow Enhancement */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">What Is Cupid's Bow Enhancement?</h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Whilst a naturally pronounced, sharply defined cupid's bow with perfect symmetry is rare, 
                  many individuals have asymmetrical cupid bow lips, one side more defined than the other, or a 
                  completely flat upper lip border lacking the characteristic 'M' shape. This is where cupid's bow enhancement 
                  becomes valuable for those seeking to define cupids bow features.
                </p>

                <p>
                  Cupid's bow enhancement (also known as cupid's bow lip injections or lip injections cupid's bow) is a specialised 
                  <Link to="/lip-fillers" className="text-purple-400 hover:text-purple-300 underline">lip filler</Link> technique that precisely defines, reshapes, or accentuates this area. Using premium hyaluronic acid fillers and expert injection techniques, we create symmetrical, well-defined cupid's bow lips that complement your natural facial proportions. According to <a 
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11253074/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >clinical research on lip augmentation injection techniques</a>, precise injection methods targeting the Cupid's bow area produce superior aesthetic outcomes with high patient satisfaction rates.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ideal Candidates & Aftercare */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Ideal Candidates Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">Who Is This Treatment Ideal For?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        This treatment is ideal for those with:
                      </p>
                      <ul className="space-y-3 text-gray-300 mb-6">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-400" size={16} />
                          <span>Flat or undefined Cupid's bow</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-400" size={16} />
                          <span>Asymmetrical lip peaks</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-400" size={16} />
                          <span>Age-related loss of lip definition</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-400" size={16} />
                          <span>Desire for more sculpted, elegant lip shape</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-400" size={16} />
                          <span>Naturally thin upper lip lacking definition</span>
                        </li>
                      </ul>
                      <p className="text-purple-300 font-medium">
                        Unlike general lip filler treatments, Cupid's bow enhancement focuses specifically on 
                        creating precise definition in the upper lip peaks, resulting in a more refined, 
                        elegant appearance whilst maintaining natural-looking proportions. For comprehensive facial rejuvenation, 
                        many clients combine this treatment with dermal fillers for other areas.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Aftercare Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">Aftercare Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        To ensure optimal results and minimise swelling:
                      </p>
                      <ul className="space-y-3 text-gray-300 mb-6">
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Avoid touching or massaging the treated area for 24 hours</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Apply ice packs for 10-15 minutes to reduce swelling</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Sleep with your head elevated for the first night</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Avoid strenuous exercise for 24-48 hours</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Stay hydrated and avoid alcohol for 24 hours</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Avoid extreme heat (saunas, hot yoga) for 48 hours</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Use a gentle lip balm to keep lips moisturised</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Avoid makeup on the treated area for 12 hours</span>
                        </li>
                      </ul>
                      <p className="text-purple-300 font-medium">
                        Mild swelling and tenderness are normal and typically subside within 48 hours. 
                        Final results will be visible after 2 weeks once any swelling has completely resolved. According to <a 
                          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7497045/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-200 hover:text-white underline"
                        >clinical guidelines on facial aesthetic injection aftercare</a>, proper post-treatment care significantly enhances treatment outcomes and longevity.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Is It Rare to Have a Cupid's Bow? */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Is It Rare to Have a Cupid's Bow?</h2>
              
              <Card className="bg-black border-none mb-6">
                <CardContent className="pt-6 space-y-6 text-gray-300">
                  <p>
                    No, having cupids bow lips isn't rare—everyone naturally has this anatomical feature. 
                    However, the prominence, definition, and symmetry of the bow cupid varies significantly 
                    from person to person. What makes a defined cupid's bow stand out is the sharpness and symmetry of the peaks.
                  </p>

                  <p>
                    Whilst everyone possesses this double-curved cupid's bow lip area on their upper lip, many people have 
                    a subtle or flat cupid bow lip that lacks clear definition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 mb-6">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Factors Influencing the Appearance of Your Cupid's Bow:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span>Genetics and inherited facial structure</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span>Natural lip anatomy and muscle positioning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span>Age-related volume loss in the lips</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span>Ethnic background and facial proportions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span>Individual variation in lip thickness and shape</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-none">
                <CardContent className="pt-6 space-y-6 text-gray-300">
                  <p>
                    This natural variation is precisely why Cupid's bow enhancement has become increasingly 
                    popular—it allows us to refine and define this feature for those seeking more sculpted, 
                    balanced lip aesthetics, regardless of their natural lip structure. For those seeking fuller lips overall, 
                    comprehensive lip enhancement can be combined with Cupid's bow definition for optimal results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for expert Cupid's bow enhancement with premium products
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Subtle Definition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-purple-300 mb-2">£250</div>
                      <div className="text-sm text-gray-300">0.3ml premium filler</div>
                    </div>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Gentle Cupid's bow definition
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Natural enhancement
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Perfect for first-time treatment
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-900 border-purple-300 h-full relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-300 text-black px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Enhanced Definition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-white mb-2">£350</div>
                      <div className="text-sm text-gray-200">0.5ml premium filler</div>
                    </div>
                    <ul className="space-y-3 text-gray-200 text-sm">
                      <li className="flex items-start">
                        <span className="text-white mr-2">✓</span>
                        Clear Cupid's bow definition
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">✓</span>
                        Balanced, symmetrical peaks
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">✓</span>
                        Ideal for most clients
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Maximum Definition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-purple-300 mb-2">£450</div>
                      <div className="text-sm text-gray-300">0.7ml premium filler</div>
                    </div>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Dramatic Cupid's bow definition
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Sculpted, elegant appearance
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        For more pronounced enhancement
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Book Your Consultation
              </Button>
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

        {/* Client Reviews */}
        <ClientReviews />

        {/* Related Treatments */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Related Treatments</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Complement your Cupid's bow enhancement with these popular treatments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to="/lip-fillers">
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center gap-2">
                        <Heart className="text-purple-400" size={20} />
                        Lip Fillers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Enhance overall lip volume and shape with premium hyaluronic acid fillers for naturally fuller lips.
                      </p>
                      <span className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Learn more →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Link to="/lip-flip">
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center gap-2">
                        <Syringe className="text-purple-400" size={20} />
                        Lip Flip
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Subtle enhancement using anti-wrinkle treatment to gently evert the upper lip for a fuller appearance.
                      </p>
                      <span className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Learn more →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link to="/nasolabial-folds">
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center gap-2">
                        <Target className="text-purple-400" size={20} />
                        Nasolabial Folds
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Smooth smile lines from nose to mouth for a more youthful, refreshed appearance.
                      </p>
                      <span className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Learn more →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link to="/marionette-lines">
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center gap-2">
                        <Activity className="text-purple-400" size={20} />
                        Marionette Lines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Reduce downturned mouth corners and vertical lines for a lifted, happier expression.
                      </p>
                      <span className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Learn more →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to="/dermal-fillers">
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center gap-2">
                        <Syringe className="text-purple-400" size={20} />
                        Dermal Fillers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Restore facial volume and smooth wrinkles with premium hyaluronic acid treatments.
                      </p>
                      <span className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Learn more →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to="/lip-filler-dissolve">
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center gap-2">
                        <Target className="text-purple-400" size={20} />
                        Lip Filler Dissolve
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Safe, effective removal or adjustment of previous lip filler treatments for natural results.
                      </p>
                      <span className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Learn more →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>


        <section className="py-20 bg-accent">
          <div className="page-container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-purple-300">
                  <AccordionTrigger className="text-white hover:text-purple-300">
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

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready for a Perfectly Defined Cupid's Bow?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how Cupid's bow enhancement 
                can elevate your natural beauty with subtle, sophisticated results. Explore our full range of <Link to="/treatments" className="text-purple-300 hover:text-purple-200 underline">aesthetic treatments</Link> for comprehensive facial rejuvenation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
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
        <section className="sr-only" aria-hidden="true">
          <h2>Cupid's Bow Lip Enhancement London - Expert Treatment Guide</h2>
          <p>
            Cupid's bow enhancement is an advanced aesthetic treatment designed to define cupids bow and refine 
            the characteristic double-curved area of the upper lip. At Cosmedocs, our expert practitioners at 
            10 Harley Street, London W1G 9PF, specialise in creating beautifully sculpted cupid's bow lips that enhance your natural facial 
            harmony whilst maintaining subtle, elegant results. Understanding what is a cupid's bow and the cupid's bow meaning 
            is essential for appreciating this sophisticated cupid bow lip treatment.
          </p>
          <p>
            The Cupid's bow plays a crucial role in overall lip aesthetics. A well-defined Cupid's bow 
            creates the illusion of fuller, more youthful lips even without adding significant volume. 
            This treatment is particularly beneficial for individuals with naturally flat upper lip 
            borders, asymmetrical peaks, or those experiencing age-related loss of definition. For those concerned with other signs of ageing, 
            treatments such as nasolabial fold fillers, marionette line treatment, and cheek fillers can complement Cupid's bow enhancement beautifully.
          </p>
          <p>
            Our Cupid's bow enhancement technique utilises premium hyaluronic acid-based dermal fillers, 
            carefully selected for their ability to create precise definition whilst maintaining natural 
            tissue integration. The treatment involves strategic placement of small amounts of filler 
            along the peaks and valleys of the upper lip border, creating or accentuating the distinctive 
            'M' shape that defines an attractive Cupid's bow.
          </p>
          <p>
            Located in prestigious Harley Street, London, Cosmedocs offers Cupid's bow enhancement 
            treatments performed by qualified medical professionals with extensive experience in facial 
            aesthetics. Our doctors understand the intricate anatomy of the lips and perioral region, 
            ensuring safe, effective treatments with minimal risk of complications.
          </p>
          <p>
            The treatment process begins with a comprehensive consultation where we assess your natural 
            lip anatomy, facial proportions, and aesthetic goals. Using advanced assessment techniques, 
            we determine the optimal injection points and filler volume required to create balanced, 
            symmetrical Cupid's bow definition tailored specifically to your features.
          </p>
          <p>
            Cupid's bow enhancement offers numerous aesthetic benefits beyond simple lip definition. 
            A well-defined Cupid's bow creates better lip-to-face proportions, enhances the appearance 
            of the philtrum (the vertical groove between nose and upper lip), and provides a more 
            youthful, refined appearance. The treatment can also improve lip symmetry and balance, 
            creating more harmonious facial aesthetics overall. Many clients choose to enhance their results with complementary treatments 
            for subtle upper lip eversion, or comprehensive facial treatments to address multiple areas of concern simultaneously.
          </p>
          <p>
            Recovery from Cupid's bow enhancement is minimal, with most clients experiencing only mild 
            swelling that resolves within 24-48 hours. Unlike more extensive lip filler treatments, 
            Cupid's bow enhancement typically produces less swelling due to the small, precise volumes 
            used. Results are visible immediately and continue to improve as the filler settles and 
            integrates with your natural tissues over the following two weeks. Should you ever wish to reverse 
            or adjust your results, our lip filler dissolve service offers a safe and effective solution.
          </p>
          <p>
            At Cosmedocs, we exclusively use premium, FDA-approved hyaluronic acid fillers from leading 
            manufacturers. These medical-grade products ensure optimal safety, longevity, and natural-looking 
            results. The reversible nature of hyaluronic acid fillers provides additional peace of mind, 
            as results can be adjusted or dissolved if necessary, though this is rarely required with 
            expert treatment.
          </p>
        </section>
      </div>
    </>
  );
};

export default CupidBowLips;
