
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

const CardiffHome = () => {
  const isMobile = useIsMobile();
  const bookingUrl = "https://med.as.me/harleystreet";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs Cardiff - Aesthetic Medicine Clinic",
    "description": "Premier Cardiff botox, lip filler and dermal filler treatments. Expert aesthetic medicine serving Cardiff and South Wales with invisible art philosophy.",
    "url": "https://cosmedocs.com/cardiff",
    "telephone": "0333 0551 503",
    "email": "info@cosmedocs.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19 Park Place",
      "addressLocality": "Cardiff",
      "addressRegion": "South Glamorgan",
      "postalCode": "CF10 3DQ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.4816",
      "longitude": "-3.1791"
    },
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "75"
    },
    "areaServed": ["Cardiff", "South Wales", "Newport", "Swansea", "Bridgend", "Rhondda Cynon Taf"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cardiff Aesthetic Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cardiff Botox Treatment",
            "description": "Professional botox injections in Cardiff for wrinkle reduction and facial rejuvenation"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cardiff Lip Filler",
            "description": "Expert lip enhancement and lip filler treatments in Cardiff"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure", 
            "name": "Cardiff Dermal Fillers",
            "description": "Advanced dermal filler treatments for facial contouring in Cardiff"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Cardiff Botox, Lip Filler & Dermal Fillers | Cosmedocs Cardiff</title>
        <meta name="description" content="Premier Cardiff botox, lip filler and dermal fillers. Expert aesthetic medicine in South Wales. Book consultation. Invisible art." />
        <meta name="keywords" content="cardiff botox, cardiff lip filler, cardiff dermal fillers, botox cardiff, lip fillers cardiff, aesthetic clinic cardiff, cosmetic treatments cardiff" />
        <link rel="canonical" href="https://cosmedocs.com/cardiff" />
        <meta property="og:title" content="Cardiff Botox, Lip Filler & Dermal Fillers | Cosmedocs Cardiff" />
        <meta property="og:description" content="Premier Cardiff botox, lip filler and dermal filler treatments. Expert aesthetic medicine in South Wales with invisible art philosophy." />
        <meta property="og:url" content="https://cosmedocs.com/cardiff" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
          <AnimatedDots />
          <div className="page-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-red-400 mr-2" />
                  <span className="text-red-400 text-lg">Cardiff</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Cardiff Botox, Lip Filler & Dermal Fillers
                  <span className="block text-2xl md:text-3xl text-red-400 mt-2">Cosmedocs Cardiff Aesthetic Clinic</span>
                </h1>
              </motion.div>
              
              <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
                <p className="text-xl md:text-2xl font-light mb-4">Premier Cardiff Botox, Lip Filler & Dermal Fillers</p>
                <p className="text-lg italic mb-6">*Our aesthetics is invisible art</p>
                <p className="text-gray-300 mb-4">Bold • Natural • Always Your Way</p>
                <p className="text-gray-400 text-sm">
                  Serving Cardiff and South Wales with aesthetic medicine that's minimal.<br />
                  Quiet, not loud. Invisible, not exaggerated.<br />
                  It's transformation that speaks — without saying a word.
                </p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors mr-4">
                  Book Cardiff Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cardiff Services Section */}
        <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]" aria-labelledby="cardiff-services">
          <div className="page-container">
            <motion.h2 id="cardiff-services" className="text-4xl md:text-5xl font-bold mb-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              Cardiff's Premier Aesthetic Treatments
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-red-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-400">Cardiff Botox</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Professional botox treatments in Cardiff for wrinkle reduction, forehead lines, and crow's feet. Our expert practitioners deliver natural-looking results.
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
                    <p className="text-lg font-semibold text-red-400 mt-4">From £200</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-red-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-400">Cardiff Lip Filler</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Expert lip enhancement treatments in Cardiff. Achieve fuller, more defined lips with our premium hyaluronic acid fillers.
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
                    <p className="text-lg font-semibold text-red-400 mt-4">From £300</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-red-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-400">Cardiff Dermal Fillers</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Advanced dermal filler treatments in Cardiff for facial contouring, cheek enhancement, and restoring facial volume.
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
                    <p className="text-lg font-semibold text-red-400 mt-4">From £350</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Why Choose Cardiff Location */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Cosmedocs for Cardiff Aesthetic Treatments?</h3>
              <p className="text-lg text-gray-300 mb-8 text-center">
                Cardiff, the vibrant capital of Wales, is home to our premier aesthetic medicine clinic serving South Wales. From Cardiff Bay to the city center, our clinic provides world-class cosmetic treatments to residents across the region. We're proud to bring London-standard aesthetic medicine to Cardiff, offering the same expertise and invisible art philosophy that has made us leaders in the field.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Cardiff's Trusted Aesthetic Clinic</h4>
                      <p className="text-gray-300">Bringing London expertise to Wales with over 1 million successful injections performed across our clinic network.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Convenient Cardiff Access</h4>
                      <p className="text-gray-300">Easily accessible for clients throughout Cardiff, Newport, Swansea, and the wider South Wales region.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Eye className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Invisible Art Philosophy</h4>
                      <p className="text-gray-300">Our Cardiff botox, lip filler, and dermal filler treatments follow our signature invisible art approach for natural enhancement.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Expert Consultation</h4>
                      <p className="text-gray-300">Comprehensive assessment and personalized treatment plans designed specifically for Cardiff clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cardiff Area Coverage */}
        <section className="py-20 bg-[#0A0A0A]" aria-labelledby="cardiff-coverage">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h3 id="cardiff-coverage" className="text-3xl font-bold mb-8">Serving Cardiff & South Wales</h3>
              <p className="text-lg text-gray-300 mb-8">
                Our Cardiff aesthetic medicine clinic proudly serves the dynamic communities across South Wales. Whether you're seeking Cardiff botox treatments for anti-aging, Cardiff lip filler enhancement for natural lip augmentation, or Cardiff dermal fillers for facial rejuvenation, our expert practitioners deliver exceptional results using premium products and advanced techniques. We welcome clients from Cardiff city center, Cardiff Bay, Newport, Swansea, Bridgend, and throughout the South Wales valleys.
              </p>
              <p className="text-gray-300 mb-8">
                Cardiff residents choose our clinic for sophisticated aesthetic treatments that enhance natural beauty while maintaining authenticity. Our Cardiff botox specialists utilize precision injection techniques to smooth expression lines and prevent premature aging. Cardiff lip filler treatments employ premium hyaluronic acid formulations for safe, natural-looking lip enhancement that complements your facial features. Our Cardiff dermal filler services restore youthful volume, define facial contours, and create balanced proportions that celebrate your individual beauty.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                <div>Cardiff City Centre</div>
                <div>Cardiff Bay</div>
                <div>Newport</div>
                <div>Swansea</div>
                <div>Bridgend</div>
                <div>Rhondda Cynon Taf</div>
                <div>Vale of Glamorgan</div>
                <div>Caerphilly</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#111]" aria-labelledby="cardiff-cta">
          <div className="page-container">
            <div className="bg-gradient-to-r from-red-900/30 to-red-600/30 rounded-2xl p-8 md:p-12 text-center border border-red-500/20">
              <h2 id="cardiff-cta" className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Cardiff's Premier Aesthetic Medicine?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation for Cardiff botox, lip filler, or dermal filler treatments. Discover how our invisible art philosophy can enhance your natural Welsh beauty.
              </p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors">
                Book Cardiff Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <p>
            Cosmedocs Cardiff delivers exceptional aesthetic medicine treatments throughout South Wales, specializing in Cardiff botox, Cardiff lip filler, and Cardiff dermal fillers. Our experienced practitioners serve Cardiff city center, Cardiff Bay, Newport, Swansea, and surrounding South Wales communities with advanced cosmetic treatments. Cardiff botox treatments effectively reduce forehead lines, crow's feet, and expression lines using precision injection techniques and premium products. Our Cardiff lip filler services provide natural lip enhancement, volume restoration, and shape refinement using high-quality hyaluronic acid formulations. Cardiff dermal fillers restore facial volume, enhance cheekbones, define jawlines, and address age-related volume loss with expert precision. We take pride in natural-looking results following our invisible art philosophy - subtle enhancement that transforms without being obvious. Contact our Cardiff clinic today for your aesthetic consultation and discover why we're South Wales' most trusted cosmetic medicine specialists. Convenient location serving all Cardiff areas and South Wales with comprehensive treatment options and flexible scheduling.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardiffHome;
