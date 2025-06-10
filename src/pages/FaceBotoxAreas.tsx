
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Star, Clock, Shield, Award, Check } from 'lucide-react';
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

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/d610e5f1-30da-4a26-b87c-a7c38162811f.png"
              alt="Face Botox treatment"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                  Face Botox
                  <span className="block text-xl md:text-2xl text-gray-300 font-light mt-4">
                    1-3 Areas Treatment
                  </span>
                </h1>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                  <div className="text-3xl lg:text-4xl font-light text-white">
                    From £175
                  </div>
                  <div className="hidden md:block w-px h-8 bg-gray-600"></div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>15-20 minutes consultation & treatment</span>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Professional Botox treatment for facial areas including frown lines, forehead, and crow's feet. 
                  Our invisible art philosophy ensures natural-looking results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Book Consultation
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-light mb-4">Treatment Pricing</h2>
                <p className="text-gray-300">Transparent pricing for all facial areas</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center bg-gray-800/50 rounded-lg p-6">
                  <div className="text-2xl font-light mb-2">£175</div>
                  <div className="text-sm text-gray-400">1 Area</div>
                </div>
                <div className="text-center bg-gray-800/50 rounded-lg p-6">
                  <div className="text-2xl font-light mb-2">£275</div>
                  <div className="text-sm text-gray-400">2 Areas</div>
                </div>
                <div className="text-center bg-gray-800/50 rounded-lg p-6">
                  <div className="text-2xl font-light mb-2">£350</div>
                  <div className="text-sm text-gray-400">3 Areas</div>
                </div>
                <div className="text-center bg-gray-800/50 rounded-lg p-6">
                  <div className="text-2xl font-light mb-2">+£50</div>
                  <div className="text-sm text-gray-400">Male Supplement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-gray-900/30">
          <div className="container mx-auto px-4">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
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
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
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

        {/* Why Choose Us with Before/After Gallery */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
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
                  className="relative"
                >
                  <h3 className="text-2xl font-light mb-6 text-center">Before & After Results</h3>
                  <div className="space-y-6">
                    {beforeAfterImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative"
                      >
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="rounded-2xl w-full border border-gray-800"
                        />
                        <div className="mt-3 p-3 bg-gray-900/50 rounded-lg">
                          <p className="text-sm text-gray-300">{image.caption}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
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
