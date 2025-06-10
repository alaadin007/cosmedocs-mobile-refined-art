
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Star, Clock, Shield, Award } from 'lucide-react';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import LiquidGlassRelatedTreatments from '@/components/LiquidGlassRelatedTreatments';
import { generateSEOMetadata } from '@/utils/seo';

const FaceBotoxAreas = () => {
  const [isRelatedTreatmentsOpen, setIsRelatedTreatmentsOpen] = useState(false);

  const seoData = generateSEOMetadata(
    "Face Botox (1-3 Areas) £175-£350 | Cosmedocs London",
    "Professional Face Botox treatment for 1-3 areas including frown lines, forehead, and crow's feet. Expert practitioners on Harley Street since 2007. Natural results guaranteed.",
    "/face-botox-areas"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/d610e5f1-30da-4a26-b87c-a7c38162811f.png",
      alt: "Before and after frown lines botox treatment",
      caption: (
        <span>
          <strong>Frown Lines Treatment:</strong> Smooth, natural results with our precision Botox technique. 
          Result achieved with 20 units of premium Botox - transformation that speaks without saying a word.
        </span>
      )
    },
    {
      src: "/lovable-uploads/35a418d0-b5b2-4c2c-864c-a3546681613f.png", 
      alt: "Before and after forehead lines botox treatment",
      caption: (
        <span>
          <strong>Forehead Lines Treatment:</strong> Gentle smoothing of expression lines while maintaining natural movement.
          Our invisible art philosophy ensures you look refreshed, never frozen.
        </span>
      )
    },
    {
      src: "/lovable-uploads/4fc6cbae-9029-4158-bc6e-1e30f20ac5a3.png",
      alt: "Before and after gummy smile botox treatment", 
      caption: (
        <span>
          <strong>Gummy Smile Treatment:</strong> Delicate enhancement for a perfect smile.
          Bold yet natural results that enhance your natural beauty.
        </span>
      )
    }
  ];

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

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/d610e5f1-30da-4a26-b87c-a7c38162811f.png"
              alt="Face Botox treatment hero"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Face Botox
                <span className="block text-2xl md:text-3xl text-gray-300 font-light mt-2">
                  1-3 Areas Treatment
                </span>
              </h1>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  £175-£350
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>30-45 minutes</span>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
                Our aesthetics is invisible art • Quiet, not loud • Invisible, not exaggerated
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105">
                  Book Consultation
                </Button>
                <BeforeAfterImageViewer 
                  images={beforeAfterImages}
                  triggerLabel="View Results"
                  title="Face Botox Before & After"
                  description="Real results from our expert practitioners"
                  className="text-white border-white/30 hover:border-white/50 px-8 py-3 text-lg rounded-full border-2 transition-all duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas Details */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Treatment Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our precision Botox technique targets the three most common facial areas for natural, lasting results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frown Lines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-black/60 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Frown Lines</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The vertical lines between your eyebrows that form from concentration and expression. 
                  Our precise technique smooths these lines while maintaining natural facial expression.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />15-25 units typically required</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />Results last 3-4 months</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />Immediate improvement visible</li>
                </ul>
              </motion.div>

              {/* Forehead Lines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-black/60 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">📏</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Forehead Lines</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Horizontal lines across the forehead caused by raising eyebrows. We create a smooth, 
                  natural appearance while preserving your ability to express surprise and emotion.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />10-20 units typically required</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />Gradual improvement over 5-7 days</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />Natural movement preserved</li>
                </ul>
              </motion.div>

              {/* Crow's Feet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-black/60 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">😊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Crow's Feet</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The fine lines that radiate from the outer corners of your eyes when smiling. 
                  Our delicate approach softens these lines while keeping your smile authentic and warm.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />8-15 units per side typically</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />Subtle, natural enhancement</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-yellow-400 mr-2" />Smile lines remain natural</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Cosmedocs for Face Botox?
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Shield className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Expert Practitioners</h3>
                        <p className="text-gray-300">Over 1 million injections performed by our experienced team on Harley Street since 2007.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Award className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Natural Results</h3>
                        <p className="text-gray-300">Our invisible art philosophy ensures subtle enhancement that preserves your natural expressions.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Star className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Premium Products</h3>
                        <p className="text-gray-300">We use only the highest quality Botox products for optimal safety and efficacy.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img 
                  src="/lovable-uploads/35a418d0-b5b2-4c2c-864c-a3546681613f.png"
                  alt="Expert botox treatment at Cosmedocs"
                  className="rounded-2xl shadow-lg w-full border border-white/10"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Treatments CTA */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Explore Related Botox Treatments
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover our comprehensive range of Botox treatments designed to enhance your natural beauty
              </p>
              <Button
                onClick={() => setIsRelatedTreatmentsOpen(true)}
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                View All Botox Treatments
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <p>
            Face Botox treatment at Cosmedocs London offers professional wrinkle reduction for 1-3 facial areas including frown lines, forehead lines, and crow's feet. Our expert practitioners on Harley Street have performed over 1 million injections since 2007, delivering natural-looking results through our invisible art philosophy. Botox treatment costs £175-£350 depending on the areas treated, with results lasting 3-4 months. Our precision injection technique ensures minimal discomfort and maximum effectiveness. The treatment takes 30-45 minutes with immediate results visible and full effects developing over 5-7 days. We use premium Botox products and follow strict safety protocols to ensure optimal outcomes. Our consultation process includes detailed facial assessment, treatment planning, and aftercare guidance. Cosmedocs specializes in subtle enhancement that preserves natural facial expressions while reducing unwanted lines and wrinkles. Book your consultation today at our Harley Street clinic for expert Botox treatment in London. Contact us at 0333 0551 503 or info@cosmedocs.com for more information about our face Botox treatments and pricing options.
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
