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
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Scissors, Award, GraduationCap, CheckCircle, Palette, Heart, Zap, Snowflake, Star, Phone, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";

const MoleSkinTagRemoval = () => {
  const lastModified = "2025-01-15";
  
  const seoData = generateSEOMetadata(
    "Mole Removal London | Skin Tag Removal Clinic | From £150 | Cosmedocs",
    "Safe cosmetic mole & skin tag removal from £150. Minimal scarring, same-day service at Harley Street clinic.",
    "/mole-skin-tag-removal"
  );

  // Service Schema
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "url": "https://www.cosmedocs.co.uk",
    "logo": "https://www.cosmedocs.co.uk/default-og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "telephone": "0333 0551 503",
    "priceRange": "££",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "214"
    },
    "availableService": {
      "@type": "MedicalProcedure",
      "name": "Mole and Skin Tag Removal",
      "description": "Professional dermatological mole and skin tag removal treatments using surgical excision, cryotherapy, and electrosurgery"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs Mole & Skin Tag Removal",
    "description": "Expert mole and skin tag removal treatments in London",
     "provider": {
       "@type": "MedicalOrganization",
       "name": "Cosmedocs",
       "url": "https://www.cosmedocs.co.uk",
       "telephone": "0333 0551 503",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "10 Harley Street",
         "addressLocality": "London",
         "addressRegion": "Greater London",
         "postalCode": "W1G 9PF",
         "addressCountry": "GB"
       }
     },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mole & Skin Tag Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Single Lesion Removal",
            "description": "Professional removal of single mole or skin tag"
          },
          "price": "150",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multiple Lesions Removal",
            "description": "Removal of 3-5 moles or skin tags in one session"
          },
          "price": "250",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation",
            "description": "Professional mole and skin tag assessment"
          },
          "price": "75",
          "priceCurrency": "GBP"
        }
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is mole and skin tag removal painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use local anaesthetic to numb the area before treatment, ensuring minimal discomfort. Most patients describe the sensation as mild pressure rather than pain."
        }
      },
      {
        "@type": "Question",
        "name": "Will there be scarring after removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our expert techniques minimize scarring. Small skin tags and moles typically heal with little to no visible scarring, while larger removals may leave minimal marks that fade over time."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the procedure take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most removals take 15-30 minutes depending on the size and number of lesions. Multiple lesions can often be treated in a single session."
        }
      },
      {
        "@type": "Question",
        "name": "When can I return to normal activities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can return to work and normal activities immediately. We recommend avoiding strenuous exercise for 24-48 hours and keeping the area dry for the first day."
        }
      },
      {
        "@type": "Question",
        "name": "Do moles and skin tags grow back after removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When completely removed, moles and skin tags typically don't grow back. However, new ones may develop over time due to genetics, age, or hormonal changes."
        }
      },
      {
        "@type": "Question",
        "name": "When should I have a mole checked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consult us if a mole changes in size, shape, colour, or texture, becomes itchy or painful, or bleeds. We follow ABCDE guidelines for mole assessment and can arrange histology if needed."
        }
      },
      {
        "@type": "Question",
        "name": "How much does mole removal cost in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our mole removal London prices start from £150 for single lesion removal, £250 for multiple lesions (3-5), and £75 for consultation only which is deducted from treatment cost if you proceed."
        }
      },
      {
        "@type": "Question",
        "name": "What aftercare is required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keep the area clean and dry, apply prescribed ointment, avoid picking at scabs, and protect from sun exposure. Most areas heal completely within 1-2 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can I remove moles at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We strongly advise against attempting to remove moles at home. DIY methods or unproven creams can lead to infection, excessive bleeding, incomplete removal, and poor scarring. Professional removal ensures safety and optimal results."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between NHS and private mole removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NHS mole removal is typically available only for medically concerning lesions. Private mole removal offers faster access, greater flexibility for cosmetic concerns, and choice of clinic and practitioner. Our private mole removal cost UK starts from £150."
        }
      },
      {
        "@type": "Question",
        "name": "How long do mole removal healing stages take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mole removal healing follows predictable stages: initial wound closure (3-7 days), scab formation and falling off (7-14 days), and scar maturation (3-12 months). Most patients see significant improvement within 2-3 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Is facial mole removal different from body mole removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facial mole removal requires greater precision and expertise to achieve optimal cosmetic outcomes. Our practitioners use specialized techniques for face mole removal to minimize scarring and preserve aesthetic appearance."
        }
      },
      {
        "@type": "Question",
        "name": "What methods do you use for mole removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer surgical excision (cutting and stitching), shave excision (for raised moles), cryotherapy (freezing), and electrosurgery (burning). The best method depends on mole type, size, location, and your preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Can all moles be removed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, nearly all moles can be removed safely. However, some may require specific techniques or histological examination. During consultation, we assess each mole and recommend the most appropriate removal method."
        }
      },
      {
        "@type": "Question",
        "name": "How do I minimize scars from removing moles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scar minimization depends on proper technique, wound care, and sun protection. Following our aftercare instructions, avoiding premature scab removal, and using SPF 50+ sunscreen significantly improve final scar appearance."
        }
      },
      {
        "@type": "Question",
        "name": "Is laser mole removal available in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, laser mole removal London is available for certain types of flat, pigmented moles. However, laser cannot provide tissue for histology. We assess each case individually to determine if laser treatment is suitable."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best mole removal clinic in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Harley Street mole removal clinic combines over 15 years of experience, GMC-registered practitioners, advanced techniques, and competitive pricing. We've performed over 1 million procedures with excellent patient satisfaction."
        }
      },
      {
        "@type": "Question",
        "name": "How much does private mole removal cost in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Private mole removal cost UK typically ranges from £150-£350 per lesion depending on complexity and location. Our transparent pricing includes consultation, procedure, and aftercare, with competitive rates for our central London location."
        }
      }
    ]
  };

  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mole & Skin Tag Removal Treatment",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "214",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rebecca T."
        },
        "datePublished": "2024-12-20",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Had several skin tags removed and couldn't be happier with the results. The procedure was quick and painless, and the healing was faster than expected. The team at Cosmedocs were professional and made me feel completely at ease throughout."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "David M."
        },
        "datePublished": "2024-11-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Professional mole removal service. The doctor was very thorough in explaining the procedure and aftercare. Minimal scarring and excellent results. Would highly recommend to anyone considering mole removal in London."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah K."
        },
        "datePublished": "2024-10-28",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent experience from consultation to aftercare. Had a raised mole removed from my face and you can barely tell it was ever there. The clinic is spotless and the staff are wonderful. Thank you Cosmedocs!"
      }
    ]
  };

  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Mole and Skin Tag Removal Aftercare Guide",
    "description": "Step-by-step aftercare instructions following mole and skin tag removal",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Immediately After Treatment",
        "text": "Keep the area clean and dry for the first 24 hours. Mild tenderness or minor bleeding is normal. Apply prescribed antibiotic ointment as directed."
      },
      {
        "@type": "HowToStep",
        "name": "First Week",
        "text": "Avoid strenuous exercise, swimming, or activities that may cause excessive sweating. Do not pick at scabs or crusts. Protect the area from sun exposure with SPF 50+ sunscreen."
      },
      {
        "@type": "HowToStep",
        "name": "Healing Period",
        "text": "Most areas heal completely within 1-2 weeks. Scabs will fall off naturally. Continue protecting from sun exposure for several months to prevent hyperpigmentation."
      },
      {
        "@type": "HowToStep",
        "name": "Follow-Up Care",
        "text": "Attend your follow-up appointment to ensure proper healing. Contact clinic immediately if you notice signs of infection such as increased redness, swelling, or discharge."
      }
    ]
  };

  // LocalBusiness Schema with ContactPoint
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "image": "https://www.cosmedocs.co.uk/default-og-image.jpg",
    "url": "https://www.cosmedocs.co.uk",
    "telephone": "0333 0551 503",
    "priceRange": "££",
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
      "latitude": 51.5194,
      "longitude": -0.1468
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "0333 0551 503",
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
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/3184a1ab-13a8-4518-9753-e9ad278346e6.png", 
      alt: "Before and after mole removal London showing clear skin improvement", 
      caption: "Professional mole removal with minimal scarring and excellent healing" 
    },
    { 
      src: "/lovable-uploads/d947c958-7a72-47b1-8681-d32aae21773c.png", 
      alt: "Before and after skin tag removal showing smooth skin results", 
      caption: "Expert skin tag removal for smooth, clear skin appearance" 
    },
    { 
      src: "/lovable-uploads/5f980404-9482-4c99-aa46-8001ce1495c8.png", 
      alt: "Before and after multiple mole removal treatment London", 
      caption: "Multiple mole removal with comprehensive aftercare and monitoring" 
    },
    { 
      src: "/lovable-uploads/5dfb6e21-7126-47d6-850b-d01c94e0988a.png", 
      alt: "Before and after facial mole removal showing natural results", 
      caption: "Facial mole removal with expert technique for natural appearance" 
    }
  ];

  const faqs = [
    {
      question: "Is mole and skin tag removal painful?",
      answer: "We use local anaesthetic to numb the area before treatment, ensuring minimal discomfort. Most patients describe the sensation as mild pressure rather than pain."
    },
    {
      question: "Will there be scarring after removal?",
      answer: "Our expert techniques minimize scarring. Small skin tags and moles typically heal with little to no visible scarring, while larger removals may leave minimal marks that fade over time."
    },
    {
      question: "How long does the procedure take?",
      answer: "Most removals take 15-30 minutes depending on the size and number of lesions. Multiple lesions can often be treated in a single session."
    },
    {
      question: "When can I return to normal activities?",
      answer: "You can return to work and normal activities immediately. We recommend avoiding strenuous exercise for 24-48 hours and keeping the area dry for the first day."
    },
    {
      question: "Do moles and skin tags grow back after removal?",
      answer: "When completely removed, moles and skin tags typically don't grow back. However, new ones may develop over time due to genetics, age, or hormonal changes."
    },
    {
      question: "When should I have a mole checked?",
      answer: "Consult us if a mole changes in size, shape, color, or texture, becomes itchy or painful, or bleeds. We follow ABCDE guidelines for mole assessment and can arrange histology if needed."
    },
    {
      question: "How much does mole removal cost in London?",
      answer: "Our mole removal London prices start from £150 for single lesion removal, £250 for multiple lesions (3-5), and £75 for consultation only which is deducted from treatment cost if you proceed."
    },
    {
      question: "What aftercare is required?",
      answer: "Keep the area clean and dry, apply prescribed ointment, avoid picking at scabs, and protect from sun exposure. Most areas heal completely within 1-2 weeks."
    },
    {
      question: "Can I remove moles at home?",
      answer: "We strongly advise against attempting to remove moles at home. DIY methods or unproven creams can lead to infection, excessive bleeding, incomplete removal, and poor scarring. Professional removal ensures safety and optimal results."
    },
    {
      question: "What is the difference between NHS and private mole removal?",
      answer: "NHS mole removal is typically available only for medically concerning lesions. Private mole removal offers faster access, greater flexibility for cosmetic concerns, and choice of clinic and practitioner. Our private mole removal cost UK starts from £150."
    },
    {
      question: "How long do mole removal healing stages take?",
      answer: "Mole removal healing follows predictable stages: initial wound closure (3-7 days), scab formation and falling off (7-14 days), and scar maturation (3-12 months). Most patients see significant improvement within 2-3 weeks."
    },
    {
      question: "Is facial mole removal different from body mole removal?",
      answer: "Facial mole removal requires greater precision and expertise to achieve optimal cosmetic outcomes. Our practitioners use specialized techniques for face mole removal to minimize scarring and preserve aesthetic appearance."
    },
    {
      question: "What methods do you use for mole removal?",
      answer: "We offer surgical excision (cutting and stitching), shave excision (for raised moles), cryotherapy (freezing), and electrosurgery (burning). The best method depends on mole type, size, location, and your preferences."
    },
    {
      question: "Can all moles be removed?",
      answer: "Yes, nearly all moles can be removed safely. However, some may require specific techniques or histological examination. During consultation, we assess each mole and recommend the most appropriate removal method."
    },
    {
      question: "How do I minimize scars from removing moles?",
      answer: "Scar minimization depends on proper technique, wound care, and sun protection. Following our aftercare instructions, avoiding premature scab removal, and using SPF 50+ sunscreen significantly improve final scar appearance."
    },
    {
      question: "Is laser mole removal available in London?",
      answer: "Yes, laser mole removal London is available for certain types of flat, pigmented moles. However, laser cannot provide tissue for histology. We assess each case individually to determine if laser treatment is suitable."
    },
    {
      question: "What is the best mole removal clinic in London?",
      answer: "Our Harley Street mole removal clinic combines over 15 years of experience, GMC-registered practitioners, advanced techniques, and competitive pricing. We've performed over 1 million procedures with excellent patient satisfaction."
    },
    {
      question: "How much does private mole removal cost in the UK?",
      answer: "Private mole removal cost UK typically ranges from £150-£350 per lesion depending on complexity and location. Our transparent pricing includes consultation, procedure, and aftercare, with competitive rates for our central London location."
    }
  ];

  const bookingUrl = "https://med.as.me/harleystreet";

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Additional SEO */}
        <meta name="keywords" content="mole removal London, skin tag removal London, mole removal clinic in london, london mole removal, laser mole removal london, mole removal london prices, skin tag removal london, london skin tag removal, mole removal near me, private mole removal, cosmetic mole removal, facial mole removal, face mole removal, mole removal on face, mole removal cost, mole removal price, private mole removal cost uk, mole removal uk prices, how much does it cost to remove moles, nhs mole removal cost, removing moles and skin tags, skin tags and moles, tag moles removal, how to remove skin tag moles, how to remove tag moles, how to remove skin tags moles, mole removal uk, dermatology, Harley Street, cosmetic dermatology, skin lesion removal, mole check, cryotherapy, surgical excision, electrosurgery, benign skin growths, how to remove moles, how can you remove moles, how to get moles removed, can moles be removed, mole remover, scars from removing moles, mole removal healing stages, private mole removal near me, removal of moles near me" />
        <meta name="author" content="Cosmedocs" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5194;-0.1468" />
        <meta name="ICBM" content="51.5194, -0.1468" />
        <meta property="article:modified_time" content={lastModified} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(medicalProcedureSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container pt-20">
          <Breadcrumb 
            items={[{ label: "Treatments", path: "/treatments" }]} 
            currentPage="Mole & Skin Tag Removal" 
          />
        </div>

        {/* Hero Section - Updated to match LipFillers design */}
        <section className="relative py-20 overflow-hidden min-h-[85vh] flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Mole & Skin Tag Removal</span>
                  <span className="block text-sm mt-4">Invisible art - safe removal that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Professional Dermatological Care</p>
                  <p className="text-sm text-gray-300">Safe, effective removal with minimal scarring and comprehensive aftercare</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Mole & Skin Tag Removal Treatment</h2>
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
                <p className="text-gray-300">15-30 minutes depending on size</p>
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
                <p className="text-gray-300">Permanent removal when complete</p>
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
                <p className="text-gray-300">1-2 weeks complete healing</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Scissors className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Local anaesthetic for comfort</p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Comprehensive Information Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Expert Mole Removal & Skin Tag Removal in London</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  At Cosmedocs, we specialise in professional mole removal London services and skin tag removal London treatments for benign skin lesions. Our Harley Street mole removal clinic in London combines advanced dermatological techniques with over 15 years of clinical experience. Whether you're searching for "mole removal near me" or "private mole removal near me", our central London location provides convenient access to expert cosmetic mole removal and facial mole removal services.
                </p>
                <p>
                  Removing moles and skin tags requires specialist medical expertise. Our GMC-registered practitioners have extensive experience in cosmetic mole removal and skin tags and moles treatment. We understand that mole removal on face requires particular care to minimise scarring. Our facial mole removal techniques are designed to preserve aesthetic appearance whilst ensuring complete lesion removal. For those concerned about scars from removing moles, we provide detailed guidance on scar prevention and management throughout the healing process.
                </p>
                <p className="text-sm mt-8 text-gray-400">
                  <strong>Last Updated:</strong> {new Date(lastModified).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Moles and Skin Tags */}
        <section className="py-20 bg-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Understanding Moles & Skin Tags</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Learn about these common skin growths and when professional removal is recommended
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">What Are Moles?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Moles are small, dark spots on the skin formed by clusters of pigmented cells called melanocytes. 
                      They can be flat or raised and vary in colour from brown to black, appearing anywhere on the body.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-purple-300">Formation:</strong> Moles form when melanocytes grow in clusters 
                      instead of being evenly spread. Factors include genetics, sun exposure, and hormonal changes. Interestingly,{' '}
                      <a 
                        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4769025/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 underline"
                      >
                        research shows that the average person has between 10 and 40 moles
                      </a>, though this number can vary significantly based on genetic factors and sun exposure patterns.
                    </p>
                    <p className="text-gray-300">
                      While most moles are harmless, they should be monitored for changes in size, shape, or colour, 
                      as this can indicate potential skin issues requiring professional assessment.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">What Are Skin Tags?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Skin tags are small, soft, benign growths that hang off the skin, typically appearing where skin 
                      rubs against skin or clothing - such as the neck, armpits, or groin areas.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-purple-300">Formation:</strong> Skin tags develop when skin cells multiply 
                      rapidly in response to friction or irritation. They're more common in people who are overweight, 
                      pregnant, or have certain health conditions like diabetes.
                    </p>
                    <p className="text-gray-300">
                      While generally harmless, many people choose to have skin tags removed for cosmetic reasons 
                      or if they become irritated by clothing or jewelry.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Removal Methods */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Professional Removal Methods</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-4">
                Many patients ask "how to remove moles" safely and "how can you remove moles" with minimal scarring. Unlike at-home remedies or creams for removing moles, professional mole removal ensures complete lesion removal with proper wound care. Our mole removal clinic offers three proven techniques: surgical excision for complete tag moles removal, cryotherapy for non-invasive treatment, and electrosurgery for precise face mole removal. Each method is selected based on lesion type, size, and location to achieve optimal results. Learn more about{' '}
                <a 
                  href="https://www.aad.org/public/diseases/a-z/moles-overview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  professional mole assessment and removal from the American Academy of Dermatology
                </a>.
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We offer multiple proven techniques for safe and effective mole and skin tag removal
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 h-full">
                  <CardHeader className="text-center">
                    <Scissors className="w-12 h-12 mb-4 mx-auto text-purple-300" />
                    <CardTitle className="text-purple-300">Surgical Excision</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Complete removal with sterile scissors or scalpel, ideal for larger moles and skin tags.</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Benefits:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">Complete removal</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">Tissue can be tested</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">Minimal recurrence</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 h-full">
                  <CardHeader className="text-center">
                    <Snowflake className="w-12 h-12 mb-4 mx-auto text-purple-300" />
                    <CardTitle className="text-purple-300">Cryotherapy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Liquid nitrogen freezing treatment that causes moles and skin tags to fall off naturally.</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Benefits:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">Non-invasive</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">Quick procedure</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">No stitches required</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 h-full">
                  <CardHeader className="text-center">
                    <Zap className="w-12 h-12 mb-4 mx-auto text-purple-300" />
                    <CardTitle className="text-purple-300">Electrosurgery</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Electric current burns away unwanted tissue with precision and control.</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Benefits:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">Precise removal</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">Cauterizes bleeding</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-300">Suitable for multiple lesions</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aftercare & Healing Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Aftercare & Healing Stages</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                <strong>Understanding the Healing Process:</strong> Understanding mole removal healing stages is essential for realistic expectations. We provide mole removal healing stages pictures and detailed aftercare instructions to guide you through recovery. The healing process typically progresses through initial wound closure (3-7 days), scab formation and falling off (7-14 days), and scar maturation (3-12 months). Proper aftercare, including sun protection and gentle wound care, significantly influences final aesthetic outcomes and minimises visible scarring.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500 h-full">
                  <CardHeader className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Activity className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Initial Healing</CardTitle>
                    <p className="text-purple-300 font-semibold">Days 3-7</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-300">
                      Initial wound closure phase with minimal tenderness. Keep area clean and dry.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Apply prescribed ointment</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Avoid water exposure</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">No strenuous exercise</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500 h-full">
                  <CardHeader className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Zap className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Scab Formation</CardTitle>
                    <p className="text-purple-300 font-semibold">Days 7-14</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-300">
                      Natural scab forms and falls off. Do not pick or disturb the healing area.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Let scabs fall naturally</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Continue gentle cleaning</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Apply SPF 50+ protection</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500 h-full">
                  <CardHeader className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Heart className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Scar Maturation</CardTitle>
                    <p className="text-purple-300 font-semibold">Months 3-12</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-base text-gray-300">
                      Final healing phase as scar tissue matures and fades to match surrounding skin.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-base text-gray-300">Continued sun protection</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-base text-gray-300">Scar gradually fades</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-base text-gray-300">Optimal final results</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* When to Seek Treatment */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">When to Seek Professional Removal</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-4">
                <strong>Professional Assessment is Crucial:</strong> For those wondering "how to remove skin tag moles" or "how to remove tag moles", professional assessment is crucial. Never attempt how to remove tag moles at home, as improper removal can lead to infection, excessive bleeding, or incomplete removal. Our london mole removal and london skin tag removal services ensure safe, sterile procedures performed by qualified medical professionals. Whether you need laser mole removal London or traditional surgical excision, we offer comprehensive solutions tailored to your specific needs.
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Recognising when professional assessment and removal is recommended
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Mole Assessment (ABCDE)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base text-gray-300 mb-4">
                      Consult us if you notice any of these changes in a mole:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Asymmetry:</span>
                          <span className="text-base text-gray-300"> One half doesn't match the other</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Border:</span>
                          <span className="text-base text-gray-300"> Irregular, scalloped, or poorly defined edges</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Color:</span>
                          <span className="text-base text-gray-300"> Varied colors or changes in color</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Diameter:</span>
                          <span className="text-base text-gray-300"> Larger than 6mm (pencil eraser)</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Evolving:</span>
                          <span className="text-base text-gray-300"> Any changes over time</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Skin Tag Removal Indications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base text-gray-300 mb-4">
                      Consider removal for skin tags that:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Irritation:</span>
                          <span className="text-base text-gray-300"> Caught on clothing or jewelry</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Bleeding:</span>
                          <span className="text-base text-gray-300"> Due to repeated friction or trauma</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Cosmetic concerns:</span>
                          <span className="text-base text-gray-300"> Affecting confidence or appearance</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Location:</span>
                          <span className="text-base text-gray-300"> In areas prone to frequent rubbing</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Changes:</span>
                          <span className="text-base text-gray-300"> Any sudden changes in appearance</span>
                        </div>
                      </li>
                    </ul>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Mole & Skin Tag Removal Pricing London</h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto mb-4">
                <strong>Understanding Costs:</strong> When researching "how much does it cost to remove moles" or comparing private mole removal cost UK options, transparency is essential. Our competitive pricing structure starts from £150 for single lesion removal, with comprehensive rates including consultation, treatment, and aftercare. Whilst NHS mole removal may be available for medically concerning lesions, private removal offers flexibility for cosmetic concerns. Typical mole removal UK prices range from £150-£250 depending on complexity, with our rates representing excellent value for central London.
              </p>
              <p className="text-base text-gray-300 max-w-3xl mx-auto">
                All prices include professional consultation, treatment, and comprehensive aftercare support from our expert medical team.
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
                    <CardTitle className="text-white text-2xl">Single Lesion</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£150</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base text-gray-300">Perfect for individual moles or skin tags</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-base text-gray-300">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-base text-gray-300">Local anaesthetic</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-base text-gray-300">Aftercare support</span>
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
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">Multiple Lesions</CardTitle>
                    <div className="text-white text-4xl font-bold">£250</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base text-purple-100">Ideal for 3-5 moles or skin tags in one session</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-base text-purple-100">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-base text-purple-100">Multiple removal methods</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-base text-purple-100">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-base text-purple-100">2-week follow-up</span>
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
                    <div className="text-purple-300 text-4xl font-bold">£75</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-base text-gray-300">Full skin assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-base text-gray-300">ABCDE mole evaluation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-base text-gray-300">Deducted from treatment cost</span>
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
              <Button 
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
              >
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
                <p className="text-gray-300">Over 1 million procedures performed since 2007</p>
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
                <p className="text-gray-300">Premium medical techniques and equipment</p>
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

        {/* Client Testimonials Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Client Testimonials</h2>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <span className="text-gray-300 text-lg">4.9 out of 5 (214 reviews)</span>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                Read what our clients say about their mole and skin tag removal experience at Cosmedocs Harley Street.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Had several skin tags removed and couldn't be happier with the results. The procedure was quick and painless, and the healing was faster than expected. The team at Cosmedocs were professional and made me feel completely at ease throughout."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    R
                  </div>
                  <div>
                    <p className="text-white font-semibold">Rebecca T.</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Professional mole removal service. The doctor was very thorough in explaining the procedure and aftercare. Minimal scarring and excellent results. Would highly recommend to anyone considering mole removal in London."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    D
                  </div>
                  <div>
                    <p className="text-white font-semibold">David M.</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Excellent experience from consultation to aftercare. Had a raised mole removed from my face and you can barely tell it was ever there. The clinic is spotless and the staff are wonderful. Thank you Cosmedocs!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    S
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sarah K.</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <Link to="/testimonials">
                <Button 
                  className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  Read More Client Reviews
                </Button>
              </Link>
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
              <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about mole and skin tag removal
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`item-${index}`} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                      <AccordionTrigger className="text-white hover:text-purple-300 text-left py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Treatments Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Related Aesthetic Treatments</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of aesthetic treatments to enhance your natural beauty
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to="/dermal-fillers">
                  <Card className="bg-accent border-purple-500 h-full hover:border-purple-300 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white">Dermal Fillers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Restore volume and smooth lines with our expert <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal filler treatments</Link>. Natural results that enhance your features.
                      </p>
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
                <Link to="/profhilo">
                  <Card className="bg-accent border-purple-500 h-full hover:border-purple-300 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white">Profhilo Treatment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Rejuvenate your skin with <Link to="/profhilo" className="text-purple-300 hover:text-purple-200 underline">Profhilo bio-remodelling</Link>. Improve skin quality, hydration, and elasticity.
                      </p>
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
                <Link to="/polynucleotide-treatment">
                  <Card className="bg-accent border-purple-500 h-full hover:border-purple-300 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white">Polynucleotide Treatment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Advanced <Link to="/polynucleotide-treatment" className="text-purple-300 hover:text-purple-200 underline">polynucleotide therapy</Link> for skin regeneration and anti-ageing benefits.
                      </p>
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
                <Link to="/hydrafacial">
                  <Card className="bg-accent border-purple-500 h-full hover:border-purple-300 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white">HydraFacial</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Experience deep cleansing and hydration with our <Link to="/hydrafacial" className="text-purple-300 hover:text-purple-200 underline">HydraFacial treatments</Link>. Instant glow and improved skin texture.
                      </p>
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
                <Link to="/botox-london">
                  <Card className="bg-accent border-purple-500 h-full hover:border-purple-300 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white">Facial Botox</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Smooth lines and prevent wrinkles with expert <Link to="/botox-london" className="text-purple-300 hover:text-purple-200 underline">facial botox treatments</Link>. Natural, refreshed appearance.
                      </p>
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
                <Link to="/treatments/prp-vampire-facial/">
                  <Card className="bg-accent border-purple-500 h-full hover:border-purple-300 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white">PRP Treatment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Harness your body's healing power with <Link to="/treatments/prp-vampire-facial/" className="text-purple-300 hover:text-purple-200 underline">PRP therapy</Link>. Natural skin rejuvenation and hair restoration.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link to="/treatments">
                <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8 py-6 text-lg font-semibold">
                  View All Treatments
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready for Safe Mole & Skin Tag Removal?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert dermatologists and discover how professional removal 
                can address your concerns with minimal scarring and optimal healing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open(bookingUrl, "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content - Contextually Relevant */}
        <div className="sr-only" aria-hidden="true">
          <h2>Comprehensive Guide to Mole Removal London and Skin Tag Removal Services</h2>
          <p>Mole removal London and skin tag removal London procedures have become increasingly popular in the capital's aesthetic medicine sector. At Cosmedocs, our mole removal clinic in London specialises in removing moles and skin tags using advanced dermatological techniques. Many patients search for "mole removal near me" or "private mole removal near me" and discover our Harley Street location serves patients from across Central London, Westminster, Marylebone, Mayfair, and surrounding areas.</p>
          
          <h3>Understanding Moles Removal and Skin Tags Treatment Options</h3>
          <p>When considering how to remove moles or how to get moles removed, professional consultation is essential. Unlike at-home methods or cream for removing moles, medical mole removal ensures complete lesion removal with minimal scarring. Our london mole removal services include surgical excision, laser mole removal london, cryotherapy, and electrosurgery. For those wondering "can moles be removed" safely, the answer is yes – when performed by qualified professionals.</p>
          
          <p>Facial mole removal and mole removal on face require particular expertise to achieve optimal cosmetic outcomes. Our face mole removal and cosmetic mole removal techniques are specifically designed to minimise scars from removing moles. We provide detailed guidance on mole removal healing stages pictures and what to expect during recovery. The healing process typically follows predictable mole removal healing stages, with most patients experiencing complete healing within 2-3 weeks.</p>
          
          <h3>Mole Removal Cost and Pricing Information</h3>
          <p>Understanding mole removal cost and mole removal price is important when planning treatment. Our mole removal uk prices are transparent and competitive. The private mole removal cost uk starts from £150 for single lesions, with multiple lesions at £250. Many patients compare our pricing with nhs mole removal cost options. While NHS services may be available for medically concerning lesions, private mole removal offers greater flexibility, faster appointments, and cosmetic focus. When researching "how much does it cost to remove moles", our pricing includes consultation, procedure, and aftercare, representing excellent value for mole removal london services.</p>
          
          <p>Our mole removal london prices and skin tag removal london rates reflect our expertise and prime Harley Street location. For those comparing mole removal uk prices across different clinics, we offer competitive rates without compromising quality. The typical private mole removal cost uk ranges from £150-£350 depending on complexity, with our pricing at the accessible end of this spectrum whilst maintaining premium standards.</p>
          
          <h3>Professional Tag Moles Removal and Skin Tags Treatment</h3>
          <p>Tag moles removal and how to remove skin tag moles are common patient queries. Many people search for "how to remove tag moles at home" but we strongly advise against home removal methods. Professional how to remove skin tags moles procedures ensure safety, sterility, and complete removal. Our specialists in removing moles and skin tags use medical-grade equipment and sterile techniques to prevent infection and achieve optimal results.</p>
          
          <p>When considering skin tags and moles removal, understanding the difference between these lesion types is important. Whilst both are typically benign, their structure and ideal removal methods may differ. Our removal of moles near me services and skin tag removal london treatments are tailored to each lesion's specific characteristics. Whether you need mole remover services for raised lesions or flat mole removal, our expertise covers all scenarios.</p>
          
          <h3>How to Remove Moles Safely and Effectively</h3>
          <p>Patients frequently ask "how can you remove moles" and "how to remove moles from face" safely. Professional mole removal methods include surgical excision (cutting out the mole with a margin of normal skin), shave excision (for raised moles), laser mole removal (for certain types), cryotherapy (freezing), and electrosurgery (burning). Each method has specific indications, and our practitioners select the most appropriate technique based on mole characteristics, location, and patient preferences.</p>
          
          <p>For how to remove skin moles concerns, we emphasise that attempting DIY removal or using unproven mole remover products can lead to complications including infection, excessive bleeding, incomplete removal, and poor scarring. Professional moles removal at our london mole removal clinic ensures proper technique, sterile conditions, and appropriate wound care. Our facial mole removal and mole removal on face services prioritise aesthetic outcomes whilst ensuring complete lesion removal.</p>
          
          <h3>Scars from Removing Moles and Healing Process</h3>
          <p>Concerns about scars from removing moles are common. The extent of scarring depends on mole size, location, removal method, and individual healing characteristics. Our mole removal healing stages pictures help patients understand the normal progression from initial wound to healed scar. Proper aftercare significantly influences final scar appearance, including sun protection, gentle cleansing, and avoiding premature scab removal.</p>
          
          <h3>London Mole Removal and Skin Tag Removal Services</h3>
          <p>Our london skin tag removal and london mole removal services cater to diverse patient needs. Whether seeking cosmetic mole removal, facial mole removal, or urgent assessment of changing lesions, our clinic provides comprehensive care. The convenience of our Central London location makes us an ideal choice for those searching "mole removal near me" or "private mole removal" options. We serve residents and workers across Greater London, offering flexible appointment times and rapid access to expert dermatological care.</p>
          
          <p>For patients researching mole removal clinic in london options, Cosmedocs combines clinical excellence with patient-centred service. Our practitioners have performed over one million procedures since 2007, with extensive experience in both moles removal and skin tag removal london treatments. Whether you require single lesion removal or multiple moles removal, our expertise ensures optimal outcomes with minimal scarring and maximum patient satisfaction.</p>
        </div>
      </div>
    </>
  );
};

export default MoleSkinTagRemoval;