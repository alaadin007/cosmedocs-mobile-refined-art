import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Eye, HelpCircle, MapPin, Clock, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import PopularTreatments from "@/components/PopularTreatments";
import AnimatedDots from "@/components/AnimatedDots";
import ComprehensiveFacialAssessment from "@/components/ComprehensiveFacialAssessment";

const ManchesterHome = () => {
  const isMobile = useIsMobile();
  const bookingUrl = "https://med.as.me/harleystreet";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs Manchester - Aesthetic Medicine Clinic",
    "description": "Premier Manchester botox, lip filler and dermal filler treatments. Expert aesthetic medicine serving Greater Manchester with invisible art philosophy.",
    "url": "https://cosmedocs.com/manchester",
    "telephone": "+44 161 503 1350",
    "email": "info@cosmedocs.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "79 Deansgate",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
      "postalCode": "M3 2BW",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.4808",
      "longitude": "-2.2426"
    },
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "95"
    },
    "areaServed": ["Manchester", "Greater Manchester", "Stockport", "Bolton", "Oldham", "Rochdale"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manchester Aesthetic Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Manchester Botox Treatment",
            "description": "Professional botox injections in Manchester for wrinkle reduction and facial rejuvenation"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Manchester Lip Filler",
            "description": "Expert lip enhancement and lip filler treatments in Manchester"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure", 
            "name": "Manchester Dermal Fillers",
            "description": "Advanced dermal filler treatments for facial contouring in Manchester"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Manchester Botox, Lip Filler & Dermal Fillers | Cosmedocs Manchester</title>
        <meta name="description" content="Premier Manchester botox, lip filler and dermal filler treatments. Expert aesthetic medicine in Greater Manchester. Book your consultation today. Invisible art philosophy." />
        <meta name="keywords" content="manchester botox, manchester lip filler, manchester dermal fillers, botox manchester, lip fillers manchester, aesthetic clinic manchester, cosmetic treatments manchester" />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/manchester" />
        <meta property="og:title" content="Manchester Botox, Lip Filler & Dermal Fillers | Cosmedocs Manchester" />
        <meta property="og:description" content="Premier Manchester botox, lip filler and dermal filler treatments. Expert aesthetic medicine in Greater Manchester with invisible art philosophy." />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/manchester" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        <header>
          <h1 className="sr-only">Manchester Botox, Lip Filler & Dermal Fillers - Cosmedocs Manchester Aesthetic Clinic</h1>
        </header>
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
          <AnimatedDots />
          <div className="page-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-400 mr-2" />
                  <span className="text-purple-400 text-lg">Manchester</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" id="hero-heading">
                  cosmedocs
                  <span className="block text-2xl md:text-3xl text-purple-400 mt-2">Manchester Aesthetic Medicine</span>
                </h2>
              </motion.div>
              
              <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
                <p className="text-xl md:text-2xl font-light mb-4">Premier Manchester Botox, Lip Filler & Dermal Fillers</p>
                <p className="text-lg italic mb-6">*Our aesthetics is invisible art</p>
                <p className="text-gray-300 mb-4">Bold • Natural • Always Your Way</p>
                <p className="text-gray-400 text-sm">
                  Serving Greater Manchester with aesthetic medicine that's minimal.<br />
                  Quiet, not loud. Invisible, not exaggerated.<br />
                  It's transformation that speaks — without saying a word.
                </p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors mr-4">
                  Book Manchester Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Manchester Services Section */}
        <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]" aria-labelledby="manchester-services">
          <div className="page-container">
            <motion.h2 id="manchester-services" className="text-4xl md:text-5xl font-bold mb-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              Manchester's Premier Aesthetic Treatments
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-purple-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">Manchester Botox</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Professional botox treatments in Manchester for wrinkle reduction, forehead lines, and crow's feet. Our expert practitioners deliver natural-looking results.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Anti-wrinkle injections</li>
                      <li>• Forehead line treatment</li>
                      <li>• Crow's feet reduction</li>
                      <li>• Frown line smoothing</li>
                      <li>• Preventative botox</li>
                    </ul>
                    <p className="text-lg font-semibold text-purple-400 mt-4">From £200</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-purple-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">Manchester Lip Filler</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Expert lip enhancement treatments in Manchester. Achieve fuller, more defined lips with our premium hyaluronic acid fillers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Lip volume enhancement</li>
                      <li>• Lip shape definition</li>
                      <li>• Lip border enhancement</li>
                      <li>• Asymmetry correction</li>
                      <li>• Natural lip enhancement</li>
                    </ul>
                    <p className="text-lg font-semibold text-purple-400 mt-4">From £300</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-purple-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">Manchester Dermal Fillers</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Advanced dermal filler treatments in Manchester for facial contouring, cheek enhancement, and restoring facial volume.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Cheek augmentation</li>
                      <li>• Nasolabial fold treatment</li>
                      <li>• Jawline contouring</li>
                      <li>• Temple restoration</li>
                      <li>• Under-eye tear trough</li>
                    </ul>
                    <p className="text-lg font-semibold text-purple-400 mt-4">From £350</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Why Choose Manchester Location */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Cosmedocs for Manchester Aesthetic Treatments?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Manchester's Trusted Aesthetic Clinic</h4>
                      <p className="text-gray-300">Serving Greater Manchester with over 1 million successful injections performed. Our reputation speaks for itself.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Convenient Manchester Access</h4>
                      <p className="text-gray-300">Easily accessible for clients throughout Manchester, Stockport, Bolton, Oldham, and surrounding areas.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Eye className="h-6 w-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Invisible Art Philosophy</h4>
                      <p className="text-gray-300">Our Manchester botox, lip filler, and dermal filler treatments follow our signature invisible art approach.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Expert Consultation</h4>
                      <p className="text-gray-300">Comprehensive assessment and personalized treatment plans for Manchester clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Treatments Section */}
        <PopularTreatments 
          title="Popular Manchester Treatments"
          className="bg-gradient-to-b from-[#0A0A0A] to-black"
        />

        {/* Comprehensive Facial Assessment Section */}
        <ComprehensiveFacialAssessment 
          accentColor="purple"
          className="bg-black"
        />

        {/* Manchester Area Coverage */}
        <section className="py-20 bg-[#0A0A0A]" aria-labelledby="manchester-coverage">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h3 id="manchester-coverage" className="text-3xl font-bold mb-8">Serving Greater Manchester & Surrounding Areas</h3>
              <p className="text-lg text-gray-300 mb-8">
                Our Manchester aesthetic treatments are accessible to clients throughout the region. We welcome patients from Manchester city center, Salford, Trafford, Stockport, Bolton, Bury, Oldham, Rochdale, Tameside, and Wigan. Whether you're seeking Manchester botox treatments, Manchester lip filler enhancement, or Manchester dermal fillers for facial contouring, our expert team delivers exceptional results with our signature invisible art approach.
              </p>
              <p className="text-gray-300 mb-8">
                Located conveniently for Manchester residents, our clinic specializes in advanced aesthetic medicine techniques. From preventative botox treatments to comprehensive facial rejuvenation with dermal fillers, we offer the full spectrum of non-surgical cosmetic treatments. Our Manchester lip filler specialists use only premium hyaluronic acid products to ensure natural-looking, long-lasting results that enhance your inherent beauty.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                <div>Manchester City Centre</div>
                <div>Salford</div>
                <div>Stockport</div>
                <div>Bolton</div>
                <div>Bury</div>
                <div>Oldham</div>
                <div>Rochdale</div>
                <div>Trafford</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#111]" aria-labelledby="manchester-cta">
          <div className="page-container">
            <div className="bg-gradient-to-r from-purple-900/30 to-purple-600/30 rounded-2xl p-8 md:p-12 text-center border border-purple-500/20">
              <h2 id="manchester-cta" className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Manchester's Premier Aesthetic Medicine?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation for Manchester botox, lip filler, or dermal filler treatments. Discover how our invisible art philosophy can enhance your natural beauty.
              </p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors">
                Book Manchester Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <p>
            Cosmedocs Manchester offers the finest aesthetic medicine treatments in Greater Manchester, specializing in Manchester botox, Manchester lip filler, and Manchester dermal fillers. Our expert practitioners bring over 15 years of experience in cosmetic medicine to Manchester residents, providing advanced anti-aging treatments, facial rejuvenation, and aesthetic enhancement services. Located strategically to serve Manchester, Salford, Stockport, Bolton, and surrounding areas, we offer comprehensive consultation services for all aesthetic treatments. Our Manchester botox treatments effectively reduce wrinkles, forehead lines, and crow's feet using the latest injection techniques. Manchester lip filler services include volume enhancement, shape definition, and natural lip augmentation using premium hyaluronic acid products. Our Manchester dermal fillers restore facial volume, enhance cheekbones, define jawlines, and address signs of aging with precision and artistry. We pride ourselves on natural-looking results that follow our invisible art philosophy - transformation that speaks without saying a word. Contact us today to schedule your Manchester aesthetic consultation and discover why we're Manchester's most trusted cosmetic medicine specialists. Serving the entire Greater Manchester area with convenient access and flexible scheduling options.
          </p>
        </div>
      </div>
    </>
  );
};

export default ManchesterHome;
