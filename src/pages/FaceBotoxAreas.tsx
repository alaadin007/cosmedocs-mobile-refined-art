import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Star, Clock, Shield, Award, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import LiquidGlassRelatedTreatments from '@/components/LiquidGlassRelatedTreatments';
import { generateSEOMetadata } from '@/utils/seo';

const FaceBotoxAreas = () => {
  const [isRelatedTreatmentsOpen, setIsRelatedTreatmentsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const seoData = generateSEOMetadata(
    "Face Botox (1-3 Areas) £175-£350 | Cosmedocs London",
    "Professional Face Botox treatment for 1-3 areas including frown lines, forehead, and crow's feet. Expert practitioners on Harley Street since 2007. Natural results guaranteed.",
    "/face-botox-areas"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/d610e5f1-30da-4a26-b87c-a7c38162811f.png",
      alt: "Before and after frown lines botox treatment",
      caption: "Frown Lines Treatment: Smooth, natural results with our precision Botox technique. Result achieved with 20 units of premium Botox - transformation that speaks without saying a word."
    },
    {
      src: "/lovable-uploads/35a418d0-b5b2-4c2c-864c-a3546681613f.png", 
      alt: "Before and after forehead lines botox treatment",
      caption: "Forehead Lines Treatment: Gentle smoothing of expression lines while maintaining natural movement. Our invisible art philosophy ensures you look refreshed, never frozen."
    },
    {
      src: "/lovable-uploads/4fc6cbae-9029-4158-bc6e-1e30f20ac5a3.png",
      alt: "Before and after gummy smile botox treatment", 
      caption: "Gummy Smile Treatment: Delicate enhancement for a perfect smile. Bold yet natural results that enhance your natural beauty."
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % beforeAfterImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [beforeAfterImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  const relatedTreatments = [
    { name: "Nefertiti Face Lift", price: "£300", link: "/nefertiti-botox-facelift" },
    { name: "Masseter (Jawline Slimming)", price: "£350", link: "/masseter-botox" },
    { name: "Full Face Natural Botox", price: "£500", link: "/full-face-botox" },
    { name: "Migraines / Headaches", price: "£450-£550", link: "/migraine-botox" },
    { name: "Trigger Point Botox", price: "£350-£550", link: "/trigger-point-botox" },
    { name: "Full Barbie Botox", price: "£450", link: "/barbie-botox" },
    { name: "Lip Flip", price: "£175", link: "/lip-flip-botox" },
    { name: "Gummy Smile", price: "£50", link: "/gummy-smile-botox" },
    { name: "Bunny Lines", price: "£50", link: "/bunny-lines-botox" }
  ];

  const otherFaceCommonAreas = [
    {
      name: "Chin Botox",
      price: "£175",
      description: "Smooth dimpled or cobblestone chin texture for a refined appearance.",
      units: "15-25 units",
      duration: "4-6 months",
      link: "/chin-botox"
    },
    {
      name: "Nefertiti Face Lift",
      price: "£300",
      description: "Jawline definition and neck smoothing for an elegant profile.",
      units: "30-50 units",
      duration: "4-6 months",
      link: "/nefertiti-botox-facelift"
    },
    {
      name: "Masseter (Jaw Slimming)",
      price: "£350",
      description: "Reduce jaw muscle bulk for a softer, more feminine facial contour.",
      units: "25-40 units per side",
      duration: "6-8 months",
      link: "#"
    },
    {
      name: "Lip Flip",
      price: "£175",
      description: "Subtle upper lip enhancement for a naturally fuller appearance.",
      units: "4-8 units",
      duration: "3-4 months",
      link: "#"
    },
    {
      name: "Gummy Smile",
      price: "£50",
      description: "Reduce excessive gum display when smiling for perfect smile proportions.",
      units: "2-4 units",
      duration: "4-6 months",
      link: "/gummy-smile-botox"
    },
    {
      name: "Bunny Lines",
      price: "£50",
      description: "Smooth fine lines on the nose bridge that appear when scrunching.",
      units: "4-8 units",
      duration: "4-6 months",
      link: "#"
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
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Face Botox Treatment (1-3 Areas)",
            "description": "Professional Botox treatment for facial areas including frown lines, forehead, and crow's feet",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "Cosmedocs",
              "address": "10 Harley Street, London W1G 9PF"
            },
            "offers": {
              "@type": "Offer",
              "price": "175-350",
              "priceCurrency": "GBP"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Face Botox
                  <span className="block text-purple-300">Azzalure / Dysport</span>
                  <span className="block text-sm mt-4">Professional treatment for natural-looking results</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Expert Practitioners</span>
                  <br />
                  Frown lines, forehead, and crow's feet treatment with invisible art philosophy
                </p>
                
                {/* Animated Tagline */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-400 mb-8 relative"
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
                      art • science • bit of magic
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 blur-sm rounded-lg animate-pulse opacity-50"></span>
                  </span>
                </motion.p>
                
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">From £175</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Results last 4-6 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold">
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Enhanced Pricing Section */}
        <section className="py-16 bg-gray-900/50 w-full">
          <div className="px-4 w-full max-w-none">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light mb-4">Face Botox / Azzalure / Dysport</h2>
                <p className="text-gray-300">Transparent pricing for all facial areas</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="text-3xl font-light mb-3 text-white">£175</div>
                    <div className="text-lg text-gray-300 mb-2">1 Area</div>
                    <div className="text-sm text-gray-400">Single treatment area</div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="text-3xl font-light mb-3 text-white">£275</div>
                    <div className="text-lg text-gray-300 mb-2">2 Areas</div>
                    <div className="text-sm text-gray-400">Two treatment areas</div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="text-3xl font-light mb-3 text-white">£350</div>
                    <div className="text-lg text-gray-300 mb-2">3 Areas</div>
                    <div className="text-sm text-gray-400">Three treatment areas</div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center bg-purple-900/30 border border-purple-400/30 rounded-xl p-6 hover:bg-purple-900/50 transition-all duration-300"
                  >
                    <div className="text-3xl font-light mb-3 text-purple-300">+£50</div>
                    <div className="text-lg text-gray-300 mb-2">Men Supplement</div>
                    <div className="text-sm text-gray-400">Additional charge for men</div>
                  </motion.div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    variant="outline" 
                    className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 hover:border-purple-400"
                  >
                    Learn more →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-gray-900/30 w-full">
          <div className="px-4 w-full max-w-none">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-light mb-2">&lt;5min</div>
                <div className="text-sm text-gray-400">Treatment Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light mb-2">5-10 days</div>
                <div className="text-sm text-gray-400">Takes Effect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light mb-2">4-6 months</div>
                <div className="text-sm text-gray-400">Results Last</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light mb-2">Immediate</div>
                <div className="text-sm text-gray-400">Return to Work</div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20 w-full">
          <div className="px-4 w-full max-w-none">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6">Treatment Areas</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Target the three most common facial areas for natural, lasting results
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Frown Lines",
                    description: "Vertical lines between eyebrows caused by concentration and expression. Our precise technique smooths these lines while maintaining natural facial expression.",
                    details: ["15-25 units typically", "Results develop over 5-10 days", "Lasts 4-6 months"]
                  },
                  {
                    title: "Forehead Lines",
                    description: "Horizontal lines across the forehead from raising eyebrows. We create smooth, natural appearance while preserving your ability to express emotion.",
                    details: ["10-20 units typically", "Effects visible in 5-10 days", "Natural movement preserved"]
                  },
                  {
                    title: "Crow's Feet",
                    description: "Fine lines radiating from outer corners of eyes when smiling. Our delicate approach softens lines while keeping your smile authentic.",
                    details: ["8-15 units per side", "Subtle enhancement", "Smile lines remain natural"]
                  }
                ].map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <h3 className="text-xl font-light mb-4">{area.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                    <ul className="space-y-2">
                      {area.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Face Common Areas Section */}
        <section className="py-20 bg-gray-900/50 w-full">
          <div className="px-4 w-full max-w-none">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6">Other Face Common Areas</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Enhance your natural beauty with specialized Botox treatments for additional facial areas
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherFaceCommonAreas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-light text-white group-hover:text-yellow-400 transition-colors">
                        {area.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-lg font-medium text-yellow-400">{area.price}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {area.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-gray-400">
                        <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                        {area.units}
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                        Lasts {area.duration}
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                        Natural results
                      </div>
                    </div>

                    <button
                      onClick={() => area.link && area.link !== '#' && (window.location.href = area.link)}
                      className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  onClick={() => setIsRelatedTreatmentsOpen(true)}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  View All Botox Treatments
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Carousel Section */}
        <section className="py-20 bg-gray-900/30 w-full">
          <div className="px-4 lg:px-4 w-full max-w-none">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-light mb-8">Why Choose Cosmedocs?</h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "Expert Practitioners",
                        description: "Over 1 million injections performed by our experienced team on Harley Street since 2007."
                      },
                      {
                        icon: Award,
                        title: "Natural Results",
                        description: "Our invisible art philosophy ensures subtle enhancement that preserves your natural expressions."
                      },
                      {
                        icon: Star,
                        title: "Premium Products",
                        description: "We use only the highest quality Botox products for optimal safety and efficacy."
                      }
                    ].map((feature, index) => (
                      <div key={feature.title} className="flex items-start space-x-4">
                        <feature.icon className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-white mb-2">{feature.title}</h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full"
                >
                  <h3 className="text-2xl font-light mb-6 text-center">Before & After Results</h3>
                  
                  {/* Carousel Container - Full width on mobile */}
                  <div className="relative bg-gray-900/50 rounded-2xl p-3 md:p-6 w-full">
                    {/* Main Image - Square Shape, Full width on mobile */}
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <div className="relative w-full aspect-square">
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          src={beforeAfterImages[currentImageIndex].src}
                          alt={beforeAfterImages[currentImageIndex].alt}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Navigation Arrows */}
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 mb-4">
                      {beforeAfterImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex 
                              ? 'bg-white' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Caption - Outside and Below the Container */}
                  <div className="mt-4 p-4 bg-gray-900/30 rounded-lg">
                    <p className="text-sm text-gray-300 leading-relaxed text-center">
                      {beforeAfterImages[currentImageIndex].caption}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 w-full">
          <div className="px-4 w-full max-w-none">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Ready to Enhance Your Natural Beauty?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Book your consultation with our expert practitioners and discover the art of invisible enhancement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Book Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsRelatedTreatmentsOpen(true)}
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    View All Treatments
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <p>
            Face Botox treatment at Cosmedocs London offers professional wrinkle reduction for 1-3 facial areas including frown lines, forehead lines, and crow's feet. Our expert practitioners on Harley Street have performed over 1 million injections since 2007, delivering natural-looking results through our invisible art philosophy. Botox treatment costs £175 for 1 area, £275 for 2 areas, £350 for 3 areas with an additional £50 male supplement. Results take 5-10 days to develop and last 4-6 months. The treatment takes less than 5 minutes with a 15-20 minute consultation and treatment session overall. We use premium Botox products and follow strict safety protocols to ensure optimal outcomes. Our consultation process includes detailed facial assessment, treatment planning, and aftercare guidance. Cosmedocs specializes in subtle enhancement that preserves natural facial expressions while reducing unwanted lines and wrinkles. Book your consultation today at our Harley Street clinic for expert Botox treatment in London. Contact us at 0333 0551 503 or info@cosmedocs.com for more information about our face Botox treatments and pricing options.
          </p>
        </div>

        {/* Related Treatments Modal */}
        <LiquidGlassRelatedTreatments
          isOpen={isRelatedTreatmentsOpen}
          onClose={() => setIsRelatedTreatmentsOpen(false)}
          treatments={relatedTreatments}
          title="Related Botox Treatments"
          description="Enhance your natural beauty with our comprehensive Botox treatment options"
        />
      </div>
    </>
  );
};

export default FaceBotoxAreas;
