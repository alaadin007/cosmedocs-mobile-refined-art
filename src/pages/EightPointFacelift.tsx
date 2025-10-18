import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { generateSEOMetadata } from '@/utils/seo';
import { Clock, Shield, Calendar, Activity, Heart, Users, CheckCircle, Diamond, Eye, Smile, Gem, Droplets, Sparkles, Award, GraduationCap, MapPin } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import actual before/after images from Cosmedocs
import beforeAfter1 from "@/assets/8-point-facelift-before-after-1.jpg";
import beforeAfter2 from "@/assets/8-point-facelift-before-after-2.jpg";
import beforeAfter3 from "@/assets/8-point-facelift-before-after-3.jpg";

export default function EightPointFacelift() {
  const seoData = generateSEOMetadata(
    "8 Point Facelift London | From £800 | Cosmedocs",
    "Non-surgical 8 point face lift using dermal fillers. Lift, contour & rejuvenate facial structure. Face lift from £800.",
    "/8-point-facelift"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "description": "Expert 8 Point Face Lift treatments in London using premium dermal fillers for natural facial rejuvenation",
    "url": "https://www.cosmedocs.co.uk/8-point-facelift",
    "telephone": "+44 20 3733 3227",
    "email": "info@cosmedocs.com",
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
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "£800-£1200",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Amazing results from my 8 point face lift. The team at Cosmedocs are true professionals and the results look completely natural."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer L."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best decision I ever made. The 8 point lift has given me such confidence. Highly recommend Cosmedocs."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "8 Point Face Lift Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "8 Point Face Lift",
            "description": "Non-surgical facelift using dermal fillers at 8 strategic points",
            "serviceType": "Minimally Invasive"
          },
          "price": "800",
          "priceCurrency": "GBP"
        }
      ]
    },
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.co.uk",
      "telephone": "+44 20 3733 3227",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Cosmedocs",
    "alternateName": "CosmeDocs Harley Street",
    "url": "https://www.cosmedocs.co.uk",
    "logo": "https://www.cosmedocs.co.uk/default-og-image.jpg",
    "image": "https://www.cosmedocs.co.uk/default-og-image.jpg",
    "description": "Leading aesthetic medicine clinic in Harley Street, London, specialising in non-surgical facial rejuvenation treatments",
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
      "longitude": "-0.1464"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-20-7435-7521",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": ["English"]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "££",
    "founder": {
      "@type": "Person",
      "name": "Dr. Ahmed Haq"
    }
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Ahmed Haq",
    "medicalSpecialty": "Aesthetic Medicine",
    "description": "15+ years experience training physicians in advanced aesthetic medicine. Specialist in millimeter-precision facial optimization.",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    },
    "knowsAbout": "Aesthetic Medicine",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    }
  };

  // Actual before/after images from Cosmedocs website
  const beforeAfterImages = [
    {
      src: beforeAfter1,
      alt: "8 point face lift before and after - non surgical face lift results showing facial rejuvenation and volume restoration",
      caption: "8 Point Face Lift: Before and After Results"
    },
    {
      src: beforeAfter2,
      alt: "8 point facelift before and after - dermal filler face lift transformation with natural results",
      caption: "8 Point Lift Before and After: Natural Facial Enhancement"
    },
    {
      src: beforeAfter3,
      alt: "Hyaluronic acid injections face before and after - 8 point filler face lift with lip enhancement",
      caption: "8 Point Filler Face Lift with Lip Enhancement Results"
    }
  ];

  const treatmentInfo = [
    {
      icon: Shield,
      title: "Anaesthetic",
      value: "Local",
      description: "Comfortable treatment with local anaesthetic"
    },
    {
      icon: Calendar,
      title: "Results",
      value: "Immediate | 12-15 Months",
      description: "Immediate visible results lasting up to 15 months"
    },
    {
      icon: Clock,
      title: "Procedure Time",
      value: "10-25 mins",
      description: "Quick and efficient treatment session"
    },
    {
      icon: Activity,
      title: "Risk & Complications",
      value: "Minimal",
      description: "Very low risk with minimal side effects"
    },
    {
      icon: Heart,
      title: "Full Recovery",
      value: "1 Week",
      description: "Complete recovery within one week"
    },
    {
      icon: Users,
      title: "Back To Work",
      value: "Immediately",
      description: "Resume work activities right after treatment"
    }
  ];

  const eightPoints = [
    {
      number: "01",
      title: "Cheek Structure",
      description: "Restore volume to cheek structure for enhanced definition",
      icon: Diamond,
      iconColor: "text-blue-400"
    },
    {
      number: "02", 
      title: "Cheek Volume & Definition",
      description: "Add volume and create beautiful cheek definition",
      icon: Diamond,
      iconColor: "text-blue-400"
    },
    {
      number: "03",
      title: "Under Eye Hollows",
      description: "Address dark circles and under eye hollows effectively",
      icon: Eye,
      iconColor: "text-orange-400"
    },
    {
      number: "04",
      title: "Downward Smile",
      description: "Lift downward smile lines for a more youthful appearance",
      icon: Smile,
      iconColor: "text-yellow-400"
    },
    {
      number: "05",
      title: "Jawline Definition",
      description: "Create a more defined and sculpted jawline",
      icon: Gem,
      iconColor: "text-cyan-400"
    },
    {
      number: "06",
      title: "Jowl Area",
      description: "Reduce the appearance of jowls and sagging",
      icon: Diamond,
      iconColor: "text-orange-500"
    },
    {
      number: "07",
      title: "Nose to Mouth Contours",
      description: "Smooth nose to mouth lines and contours",
      icon: Sparkles,
      iconColor: "text-yellow-300"
    },
    {
      number: "08",
      title: "Tear Troughs",
      description: "Address tear troughs that contribute to tired appearance",
      icon: Droplets,
      iconColor: "text-blue-300"
    }
  ];

  const idealCandidates = [
    "Patients in their late 30s and early 40s",
    "Decreased facial volume with mild jowling",
    "Those seeking non-surgical facelift options",
    "People with mild skin laxity",
    "Those wanting natural-looking rejuvenation"
  ];

  const faqData = [
    {
      question: "What Is Involved In 8 Point Facelift Procedure?",
      answer: "8 point facelift treatment makes use of dermal fillers injected at 8 key points on the face to give volume and rejuvenate the facial appearance. It gives immediate and natural results."
    },
    {
      question: "What Is A Suitable Age For 8 Point Facelift Treatment?",
      answer: "Patients who are in their late 30s and early 40s with mild skin laxity can undertake this non-invasive facelift treatment. If there is severe skin laxity, desired results can be achieved but more quantity of dermal fillers will be required."
    },
    {
      question: "What Are The Possible Side Effects?",
      answer: "No or very few side effects have been observed in majority of the patients. However, there can be mild swelling and bruising which normally subsides in few days."
    },
    {
      question: "What Is The Downtime Of The Treatment?",
      answer: "There is no downtime of this non-surgical facelift treatment. Patients can go back to their work instantly after getting the treatment."
    },
    {
      question: "How Long Lasting Are The Effects Of 8 Point Facelift Treatment?",
      answer: "The treatment gives instant improvement in the facial appearance however the full results of this non-surgical facelift treatment can be seen after about 1-2 weeks when the minor swelling and bruising subsides. The results keep on improving for 2-3 months. The effect of the results lasts for almost 12-18 months."
    }
  ];

  const benefits = [
    "Immediate visible results",
    "Non-surgical approach",
    "Minimal downtime",
    "Natural-looking enhancement", 
    "Long-lasting effects (12-18 months)",
    "Customized to your needs"
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
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="keywords" content="8 point face lift, 8 point lift, 8 point facelift, 8 point face lift before and after, 8 point face lift price, 8 point face lift near me, 8 point filler face lift, non surgical face lift cost uk, non surgical face lift cost, dermal filler face lift, hyaluronic acid injections face before and after, non surgical face lift, face lift, face lift non surgical procedure, lift for face, face lift before and after, face lift cost, lower face lift, thread face lift, face lift price, face lift cost uk, non surgical face lift near me, non surgical face lifts, face lift london, face lift non surgical, face lift prices, face lift uk, face and neck lift, London facelift, Harley Street" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="author" content="Dr. Ahmed Haq, Cosmedocs Medical Director" />
        <meta name="last-modified" content="2025-10-03" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(physicianSchema)}
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
                "name": "8 Point Face Lift",
                "item": "https://www.cosmedocs.co.uk/8-point-facelift"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
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
            "@type": "ImageGallery",
            "name": "8 Point Face Lift Before and After Gallery",
            "description": "Real patient results from 8 Point Face Lift treatments at Cosmedocs",
            "image": beforeAfterImages.map((img, index) => ({
              "@type": "ImageObject",
              "contentUrl": img.src,
              "caption": img.caption,
              "description": img.alt,
              "name": `8 Point Face Lift Result ${index + 1}`
            }))
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Matching LipFillers exact style */}
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
                  <span className="text-purple-300">8 Point Face Lift London</span>
                  <span className="block text-sm mt-4">Invisible art - natural facial rejuvenation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Facial Enhancement</p>
                  <p className="text-sm text-gray-300">Non-surgical facelift using dermal fillers at 8 strategic points for natural transformation</p>
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
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      pricingSection?.scrollIntoView({ behavior: 'smooth' });
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
              <h2 className="text-3xl font-bold mb-8 text-white">8 Point Face Lift Treatment</h2>
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
                <p className="text-gray-300">10-25 minutes depending on areas treated</p>
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
                <p className="text-gray-300">Immediate results lasting 12-18 months</p>
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
                <p className="text-gray-300">Minimal downtime, return to work immediately</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Local anaesthetic for comfort</p>
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
              <h2 className="text-3xl font-bold mb-4">8 Point Face Lift Before and After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the transformative results achieved with our expert 8 Point Face Lift treatments. 
                Each patient receives personalized care for optimal facial rejuvenation.
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

        {/* Treatment Objective */}
        <section className="py-20 px-6 bg-accent">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is 8 Point Face Lift?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The 8 point face lift treatment is designed to restore lost volume and lift the face. 
                This non-surgical facelift treatment is also called 'liquid facelift treatment' because dermal fillers are used 
                strategically to give volume to the face and create a lifting impact for a completely rejuvenated appearance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The 8 Points */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                The Strategic 8 Points
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Each point is carefully selected to restore volume and create a lifting effect for natural-looking rejuvenation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {eightPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-lg font-bold">{point.number}</span>
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-3">{point.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Candidates Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Ideal Candidates for 8 Point Facelift</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  The 8 point face lift treatment is ideal for patients in their late 30s and early 40s who have 
                  decreased facial volume with mild jowling. In the case of heavy jowls, <a href="/pdo-threads" className="text-purple-300 hover:text-purple-200 underline">PDO thread lift treatment</a> is recommended.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">Perfect Candidates</h3>
                  <ul className="space-y-3">
                    {idealCandidates.map((candidate, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-300">{candidate}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">Treatment Areas</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• <a href="/cheek-filler" className="text-purple-300 hover:text-purple-200 underline">Cheek Structure</a> and volume enhancement</p>
                    <p>• Dark circles and under eye hollows</p>
                    <p>• <a href="/chin-filler" className="text-purple-300 hover:text-purple-200 underline">Jawline</a> definition and jowl improvement</p>
                    <p>• <a href="/non-surgical-nose-job" className="text-purple-300 hover:text-purple-200 underline">Nose</a> to mouth contours</p>
                    <p>• Tear troughs and tired appearance</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Recovery Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Results & Recovery</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Understanding what to expect from your 8 Point Face Lift treatment
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-900/50 rounded-lg p-8 h-full border border-gray-800">
                    <h3 className="text-2xl font-bold mb-6 text-white">Results Timeline & Recovery</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-300">Results Timeline:</h4>
                        <p className="text-gray-300 mb-3">
                          The 8 Point facelift treatment gives immediate results that last for about 12-18 months. 
                          Full results are visible after 1-2 weeks when minor swelling and bruising subsides.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Immediate visible improvement</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Optimal results after 1-2 weeks</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Results continue improving for 2-3 months</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Effects last 12-18 months</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-300">Recovery & Downtime:</h4>
                        <p className="text-gray-300 mb-3">
                          There is no or little downtime. Routine activities can be resumed immediately after treatment. 
                          Minor bruising and swelling may occur but are temporary and fade within a few days.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Return to work immediately</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Minor swelling for 2-3 days</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Possible mild bruising (easily covered with makeup)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Full recovery within 1 week</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-900/50 rounded-lg p-8 h-full border border-gray-800">
                    <h3 className="text-2xl font-bold mb-6 text-white">Key Benefits</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Immediate visible results</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Non-surgical, minimally invasive approach</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Minimal to no downtime required</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Natural-looking facial enhancement</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Long-lasting effects (12-18 months)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Customized to your individual facial structure</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Restores facial volume and definition</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Cost-effective alternative to surgical facelift</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Improves overall facial harmony and balance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Reduces appearance of aging signs without surgery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Boosts confidence and self-esteem</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Performed by qualified aesthetic practitioners</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">8 Point Face Lift Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for non-surgical 8 Point Face Lift treatments. All prices include consultation, 
                treatment, and comprehensive aftercare support from our expert practitioners.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Basic Package</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£800</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Essential 8 point face lift treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium dermal fillers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
                      </div>
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
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">RECOMMENDED</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">Complete Package</CardTitle>
                    <div className="text-white text-4xl font-bold">£1200</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive facial rejuvenation treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended treatment session</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium quality fillers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Follow-up appointments</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional facial assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive facial analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
                Book Your Consultation
              </Button>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Cosmedocs?</h2>
              <p className="text-gray-300 mb-8">Open Monday-Friday, 9am-6pm • 10 Harley Street, London W1G 9PF</p>
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
                  <Users className="text-purple-600" size={24} />
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
                  <Heart className="text-purple-600" size={24} />
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
                  <Diamond className="text-purple-600" size={24} />
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
                  <Smile className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Patient Success Stories</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Real experiences from our satisfied patients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent border border-purple-500/20 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Amazing results from my 8 point face lift. The team at Cosmedocs are true professionals and the results look completely natural. I couldn't be happier!"
                </p>
                <p className="text-purple-300 font-semibold">— Sarah M., London</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-accent border border-purple-500/20 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Best decision I ever made. The 8 point lift has given me such confidence. No downtime and the results are incredible. Highly recommend Cosmedocs."
                </p>
                <p className="text-purple-300 font-semibold">— Jennifer L., Westminster</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-accent">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Get answers to common questions about 8 Point Face Lift treatment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <GraduationCap size={16} />
                Medically reviewed by Dr. Ahmed Haq, Medical Director
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Last updated: 3rd October 2025
              </p>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Appearance?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how the 8 Point Face Lift 
                can help you achieve natural, youthful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0207 435 7521
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <p>
            The 8 point face lift at CosmeDocs London represents the pinnacle of non surgical face lift techniques available in the UK. 
            This innovative 8 point facelift procedure strategically targets eight crucial areas of the face using premium dermal filler face lift 
            technology to restore volume, enhance contours, and create a natural lifting effect. Our face lift London clinic, located in prestigious 
            Harley Street, offers this transformative non surgical face lift treatment to clients seeking to combat the signs of ageing without 
            the need for invasive surgery. The 8 point lift provides exceptional face lift before and after results that speak for themselves.
          </p>
          <p>
            Understanding face lift cost is important for our patients. Our 8 point face lift price starts from £800, making it a cost-effective 
            alternative to traditional surgical face lifts. When searching for "8 point face lift near me" or "non surgical face lift near me", 
            CosmeDocs offers competitive face lift prices and transparent face lift cost UK information. The non surgical face lift cost is 
            significantly lower than surgical alternatives whilst delivering remarkable hyaluronic acid injections face before and after results. 
            Our 8 point filler face lift represents excellent value, with face lift prices that reflect our commitment to accessible aesthetic medicine.
          </p>
          <p>
            Our approach to this face lift non surgical procedure focuses on the middle face, facial contours, and lower face lift regions, 
            addressing concerns such as volume loss, sagging skin, and the development of jowls. The treatment is particularly effective as 
            a lift for face rejuvenation for individuals in their late thirties and early forties who are beginning to notice the effects of 
            collagen and elastin depletion. This face lift non surgical approach, combined with thread face lift techniques when needed, 
            can restore the youthful architecture of the face whilst maintaining completely natural-looking results.
          </p>
          <p>
            The eight points targeted in this comprehensive facial rejuvenation treatment include the cheek structure and volume, 
            under-eye hollows and tear troughs, jawline definition, jowl area improvement, nose-to-mouth contour enhancement, 
            and smile line correction. Each injection point is carefully selected based on individual facial anatomy and aesthetic goals. 
            Our non surgical face lifts are customised to each patient's unique needs, ensuring optimal results that complement natural features. 
            The 8 point face lift before and after gallery showcases the transformative power of this dermal filler face lift technique.
          </p>
          <p>
            At CosmeDocs, we pride ourselves on our expertise in aesthetic medicine and our commitment to safety and natural results. 
            Our practitioners are highly trained professionals who understand the importance of precision and artistry in cosmetic treatments. 
            The 8 point face lift procedure typically takes between 10-25 minutes to complete, with immediate results that continue to 
            improve over the following weeks as any minor swelling subsides. This makes it ideal for busy professionals seeking a quick 
            lift for face rejuvenation without extended downtime.
          </p>
          <p>
            The longevity of results from the 8 point lift treatment is impressive, with effects lasting between 12-18 months 
            depending on individual factors such as metabolism, lifestyle, and the specific dermal fillers used. When considering 
            face lift cost uk options, this represents excellent value. Our face lift uk treatments can also be combined with 
            face and neck lift procedures for comprehensive rejuvenation. The non surgical face lift cost represents an 
            excellent investment for those seeking long-term facial rejuvenation without the commitment and risks associated with surgical procedures.
          </p>
        </div>
      </div>
    </>
  );
}