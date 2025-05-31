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

const BirminghamHome = () => {
  const isMobile = useIsMobile();
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Cosmedocs Birmingham - Aesthetic Medicine Clinic",
    "description": "Premier Birmingham botox, lip filler and dermal filler treatments. Expert aesthetic medicine serving Birmingham and West Midlands with invisible art philosophy.",
    "url": "https://cosmedocs.com/birmingham",
    "telephone": "0333 0551 503",
    "email": "info@cosmedocs.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.4862",
      "longitude": "-1.8904"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "£££",
    "medicalSpecialty": ["Aesthetic Medicine", "Cosmetic Dermatology"],
    "areaServed": ["Birmingham", "West Midlands", "Solihull", "Coventry", "Wolverhampton", "Dudley"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Birmingham Aesthetic Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Birmingham Botox Treatment",
            "description": "Professional botox injections in Birmingham for wrinkle reduction and facial rejuvenation"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Birmingham Lip Filler",
            "description": "Expert lip enhancement and lip filler treatments in Birmingham"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure", 
            "name": "Birmingham Dermal Fillers",
            "description": "Advanced dermal filler treatments for facial contouring in Birmingham"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Birmingham Botox, Lip Filler & Dermal Fillers | Cosmedocs Birmingham</title>
        <meta name="description" content="Premier Birmingham botox, lip filler and dermal filler treatments. Expert aesthetic medicine in West Midlands. Book your consultation today. Invisible art philosophy." />
        <meta name="keywords" content="birmingham botox, birmingham lip filler, birmingham dermal fillers, botox birmingham, lip fillers birmingham, aesthetic clinic birmingham, cosmetic treatments birmingham" />
        <link rel="canonical" href="https://cosmedocs.com/birmingham" />
        <meta property="og:title" content="Birmingham Botox, Lip Filler & Dermal Fillers | Cosmedocs Birmingham" />
        <meta property="og:description" content="Premier Birmingham botox, lip filler and dermal filler treatments. Expert aesthetic medicine in West Midlands with invisible art philosophy." />
        <meta property="og:url" content="https://cosmedocs.com/birmingham" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        <header>
          <h1 className="sr-only">Birmingham Botox, Lip Filler & Dermal Fillers - Cosmedocs Birmingham Aesthetic Clinic</h1>
        </header>
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
          <AnimatedDots />
          <div className="page-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-lg">Birmingham</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" id="hero-heading">
                  cosmedocs
                  <span className="block text-2xl md:text-3xl text-blue-400 mt-2">Birmingham Aesthetic Medicine</span>
                </h2>
              </motion.div>
              
              <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
                <p className="text-xl md:text-2xl font-light mb-4">Premier Birmingham Botox, Lip Filler & Dermal Fillers</p>
                <p className="text-lg italic mb-6">*Our aesthetics is invisible art</p>
                <p className="text-gray-300 mb-4">Bold • Natural • Always Your Way</p>
                <p className="text-gray-400 text-sm">
                  Serving Birmingham and West Midlands with aesthetic medicine that's minimal.<br />
                  Quiet, not loud. Invisible, not exaggerated.<br />
                  It's transformation that speaks — without saying a word.
                </p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors mr-4">
                  Book Birmingham Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Birmingham Services Section */}
        <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]" aria-labelledby="birmingham-services">
          <div className="page-container">
            <motion.h2 id="birmingham-services" className="text-4xl md:text-5xl font-bold mb-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              Birmingham's Premier Aesthetic Treatments
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-blue-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-400">Birmingham Botox</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Professional botox treatments in Birmingham for wrinkle reduction, forehead lines, and crow's feet. Our expert practitioners deliver natural-looking results.
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
                    <p className="text-lg font-semibold text-blue-400 mt-4">From £200</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-blue-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-400">Birmingham Lip Filler</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Expert lip enhancement treatments in Birmingham. Achieve fuller, more defined lips with our premium hyaluronic acid fillers.
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
                    <p className="text-lg font-semibold text-blue-400 mt-4">From £300</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="bg-[#111] border-blue-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-400">Birmingham Dermal Fillers</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      Advanced dermal filler treatments in Birmingham for facial contouring, cheek enhancement, and restoring facial volume.
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
                    <p className="text-lg font-semibold text-blue-400 mt-4">From £350</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Why Choose Birmingham Location */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Cosmedocs for Birmingham Aesthetic Treatments?</h3>
              <p className="text-lg text-gray-300 mb-8 text-center">
                Birmingham is the UK's second-largest city and a vibrant hub for aesthetic medicine. Our Birmingham clinic serves the diverse population of the West Midlands with world-class cosmetic treatments. From Birmingham city center to the surrounding boroughs of Solihull, Coventry, and Wolverhampton, we provide accessible, premium aesthetic medicine that enhances your natural beauty.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Birmingham's Trusted Aesthetic Clinic</h4>
                      <p className="text-gray-300">Serving the West Midlands with over 1 million successful injections performed across our network of clinics.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Convenient Birmingham Access</h4>
                      <p className="text-gray-300">Easily accessible for clients throughout Birmingham, the Black Country, and surrounding West Midlands areas.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Eye className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Invisible Art Philosophy</h4>
                      <p className="text-gray-300">Our Birmingham botox, lip filler, and dermal filler treatments follow our signature invisible art approach for natural results.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Expert Consultation</h4>
                      <p className="text-gray-300">Comprehensive assessment and personalized treatment plans tailored for Birmingham clients' unique needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Treatments Section */}
        <PopularTreatments 
          title="Popular Birmingham Treatments"
          className="bg-gradient-to-b from-[#0A0A0A] to-black"
        />

        {/* Comprehensive Facial Assessment Section */}
        <ComprehensiveFacialAssessment 
          accentColor="blue"
          className="bg-black"
        />

        {/* Birmingham Area Coverage */}
        <section className="py-20 bg-[#0A0A0A]" aria-labelledby="birmingham-coverage">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h3 id="birmingham-coverage" className="text-3xl font-bold mb-8">Serving Birmingham & West Midlands</h3>
              <p className="text-lg text-gray-300 mb-8">
                Our Birmingham aesthetic medicine clinic proudly serves the diverse communities across the West Midlands. Whether you're seeking Birmingham botox treatments for anti-aging, Birmingham lip filler enhancement for fuller lips, or Birmingham dermal fillers for facial contouring, our expert practitioners deliver exceptional results using our invisible art philosophy. We welcome clients from Birmingham city center, Solihull, Coventry, Wolverhampton, Walsall, Dudley, and throughout the Black Country region.
              </p>
              <p className="text-gray-300 mb-8">
                Birmingham residents trust our clinic for advanced aesthetic treatments that enhance natural beauty without appearing artificial. Our Birmingham botox specialists use precision injection techniques to smooth wrinkles and prevent signs of aging. Birmingham lip filler treatments utilize premium hyaluronic acid products for safe, natural-looking lip enhancement. Our Birmingham dermal filler services restore facial volume, define features, and create harmonious facial proportions that complement your individual beauty.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                <div>Birmingham City Centre</div>
                <div>Solihull</div>
                <div>Coventry</div>
                <div>Wolverhampton</div>
                <div>Walsall</div>
                <div>Dudley</div>
                <div>West Bromwich</div>
                <div>Sutton Coldfield</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#111]" aria-labelledby="birmingham-cta">
          <div className="page-container">
            <div className="bg-gradient-to-r from-blue-900/30 to-blue-600/30 rounded-2xl p-8 md:p-12 text-center border border-blue-500/20">
              <h2 id="birmingham-cta" className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Birmingham's Premier Aesthetic Medicine?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation for Birmingham botox, lip filler, or dermal filler treatments. Discover how our invisible art philosophy can enhance your natural beauty.
              </p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors">
                Book Birmingham Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <p>
            Cosmedocs Birmingham provides exceptional aesthetic medicine treatments throughout the West Midlands, specializing in Birmingham botox, Birmingham lip filler, and Birmingham dermal fillers. Our experienced practitioners serve Birmingham city center, Solihull, Coventry, Wolverhampton, and surrounding areas with advanced cosmetic treatments. Birmingham botox treatments effectively reduce forehead lines, crow's feet, and frown lines using precision injection techniques. Our Birmingham lip filler services offer natural lip enhancement, volume restoration, and shape definition using premium hyaluronic acid products. Birmingham dermal fillers restore facial volume, enhance cheekbones, define jawlines, and address age-related volume loss with expert artistry. We pride ourselves on natural-looking results following our invisible art philosophy - subtle enhancement that speaks without words. Contact our Birmingham clinic today for your aesthetic consultation and discover why we're the West Midlands' most trusted cosmetic medicine specialists. Convenient location serving all Birmingham areas with flexible scheduling and comprehensive treatment options.
          </p>
        </div>
      </div>
    </>
  );
};

export default BirminghamHome;
