
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { ArrowRight, Clock, Star, CheckCircle } from "lucide-react";

const DermalFillerMakeover = () => {
  const seoData = generateSEOMetadata(
    "Dermal Filler Makeover London | Natural Anti-Aging Results",
    "Discover how subtle dermal filler treatments can restore facial volume and achieve natural anti-aging results. Expert cheek fillers, jawline enhancement, and under-eye treatments in London Harley Street.",
    "/dermal-filler-makeover"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/87e6188b-21ad-477c-8f6f-bfe0b7206e4d.png",
      alt: "Dermal filler makeover before and after frontal view",
      caption: "Frontal view: Subtle volume restoration in cheeks, jawline enhancement, and under-eye rejuvenation"
    },
    {
      src: "/lovable-uploads/c77267b3-4f58-4e3b-9623-b0d3dc18d413.png",
      alt: "Profile view dermal filler transformation",
      caption: "Profile view: Enhanced chin projection and jawline definition creating harmonious facial contours"
    },
    {
      src: "/lovable-uploads/1ca9c29b-82b1-4429-9ddf-f08494f8c796.png",
      alt: "Three-quarter view dermal filler results",
      caption: "Three-quarter view: Natural volume restoration maintaining client's unique facial features"
    },
    {
      src: "/lovable-uploads/81d85516-1ea5-4cab-a62a-559c2d4de0ef.png",
      alt: "Side profile dermal filler enhancement",
      caption: "Side profile: Refined facial contours with enhanced definition and youthful proportions"
    },
    {
      src: "/lovable-uploads/3d2ce348-5696-4922-ad5c-ea1e9c5232b3.png",
      alt: "Individual before treatment photo",
      caption: "Before treatment: Natural facial structure prior to enhancement"
    },
    {
      src: "/lovable-uploads/172a657f-ac7f-4e66-bf1a-42f79b704475.png",
      alt: "Detailed before and after comparison",
      caption: "Detailed comparison: Showcasing the subtle yet transformative results of expert filler placement"
    },
    {
      src: "/lovable-uploads/81447b08-e528-4535-a4b3-87f93eb36acd.png",
      alt: "Final dermal filler results comparison",
      caption: "Final results: Achieving natural beauty enhancement while preserving individual characteristics"
    }
  ];

  const treatmentAreas = [
    {
      area: "Cheek Enhancement",
      description: "Restoring mid-face volume for youthful contours",
      icon: "✨"
    },
    {
      area: "Jawline Definition",
      description: "Creating sharp, defined jawline contours",
      icon: "💎"
    },
    {
      area: "Chin Projection",
      description: "Enhancing profile balance and facial harmony",
      icon: "🎯"
    },
    {
      area: "Under-Eye Rejuvenation",
      description: "Addressing hollowness and tired appearance",
      icon: "👁️"
    },
    {
      area: "Lip Corner Enhancement",
      description: "Subtle improvement around mouth area",
      icon: "💋"
    }
  ];

  const benefits = [
    "Immediate, same-day transformation",
    "Natural-looking results that enhance your features",
    "Minimal downtime and quick recovery",
    "Long-lasting effects (12-18 months)",
    "Boosts confidence and self-esteem",
    "Customized treatment for individual needs"
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="article" />
        
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Additional SEO keywords */}
        <meta name="keywords" content="dermal fillers London, cheek fillers, jawline enhancement, anti-aging treatments, facial rejuvenation, Harley Street, hyaluronic acid fillers, non-surgical facelift, facial contouring, under eye fillers, chin enhancement, natural beauty enhancement" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Dermal Filler Makeover",
              "description": "Professional dermal filler treatments for facial rejuvenation and anti-aging",
              "procedureType": "Cosmetic dermal filler injection",
              "bodyLocation": "Face",
              "preparation": "Initial consultation and assessment",
              "followup": "Post-treatment care and monitoring",
              "medicineSystem": "Aesthetic Medicine",
              "performer": {
                "@type": "MedicalBusiness",
                "name": "Cosmedocs",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Harley Street",
                  "addressLocality": "London",
                  "addressCountry": "UK"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Dermal Filler Makeover: 
                  <span className="text-purple-400"> Natural Anti-Aging </span>
                  Transformation
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Discover how subtle dermal filler treatments can restore facial volume, 
                  enhance natural beauty, and achieve remarkable anti-aging results in London's 
                  premier Harley Street clinic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <BeforeAfterImageViewer 
                    images={beforeAfterImages}
                    triggerLabel="View Transformation Results"
                    title="Dermal Filler Makeover Results"
                    description="Real patient results from our expert dermal filler treatments"
                    className="text-lg border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8">
                  <img 
                    src="/lovable-uploads/87e6188b-21ad-477c-8f6f-bfe0b7206e4d.png"
                    alt="Professional dermal filler before and after results"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white text-black rounded-full p-4 shadow-lg">
                    <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Patient Case Study: Subtle Transformation in Her 30s
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                This remarkable case demonstrates the artistry of advanced dermal filler techniques, 
                showcasing how minor adjustments can create powerful, natural-looking results.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">The Art of Subtle Enhancement</h3>
                <div className="prose prose-lg text-gray-300">
                  <p className="mb-6">
                    This exceptional case features a lady in her 30s who presented with early signs of facial aging, 
                    including subtle volume loss in key facial compartments. Our expert approach focused on 
                    <strong className="text-white"> gentle restoration and delicate enhancement</strong>, 
                    achieving a same-day transformation that maintains her natural beauty and unique features.
                  </p>
                  
                  <p className="mb-6">
                    The treatment strategy involved <strong className="text-white">hyaluronic acid dermal fillers</strong> 
                    strategically placed to address volume depletion while enhancing facial harmony. 
                    Every injection was meticulously planned to preserve the client's originality, 
                    ensuring results that look naturally refreshed rather than artificially altered.
                  </p>

                  <p className="mb-6">
                    What makes this case particularly remarkable is the comprehensive approach to 
                    <strong className="text-white"> facial rejuvenation</strong>. Rather than focusing on 
                    individual areas, we created a harmonious enhancement that addresses multiple concerns 
                    simultaneously, resulting in a cohesive, youthful appearance that enhances the client's 
                    natural beauty.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-purple-400" />
                      Treatment Timeline
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Consultation & Assessment</span>
                        <span className="text-purple-400">30 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Treatment Session</span>
                        <span className="text-purple-400">45-60 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recovery Time</span>
                        <span className="text-purple-400">Minimal downtime</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Results Visible</span>
                        <span className="text-purple-400">Immediately</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Full Results</span>
                        <span className="text-purple-400">2-4 weeks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Targeted Enhancement Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each treatment area was carefully selected and enhanced to create optimal facial balance and harmony
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors h-full">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{area.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{area.area}</h3>
                      <p className="text-gray-400">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results and Benefits */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Exceptional Results, Natural Beauty
                </h2>
                
                <div className="prose prose-lg text-gray-300 mb-8">
                  <p className="mb-6">
                    The transformation achieved in this case exemplifies the pinnacle of 
                    <strong className="text-white"> aesthetic medicine expertise</strong>. 
                    Through precise placement of premium hyaluronic acid fillers, we successfully:
                  </p>
                  
                  <p className="mb-6">
                    <strong className="text-white">Restored facial volume</strong> in areas affected by early aging, 
                    including the cheeks, under-eye region, and jawline. The strategic enhancement of these 
                    key facial compartments created a lifting effect that refreshed the entire face 
                    without any surgical intervention.
                  </p>

                  <p className="mb-6">
                    <strong className="text-white">Enhanced facial contours</strong> through careful jawline definition 
                    and chin projection improvement. These adjustments created better facial balance and 
                    a more defined profile, contributing to an overall more youthful and attractive appearance.
                  </p>

                  <p>
                    Most importantly, the results maintain the client's unique facial characteristics while 
                    addressing the signs of aging that concerned her. This approach ensures that she looks 
                    like the best version of herself – refreshed, rejuvenated, and naturally beautiful.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Treatment Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Why Choose Cosmedocs?</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Expert practitioners with 15+ years experience</li>
                    <li>• Premium hyaluronic acid fillers from leading brands</li>
                    <li>• Personalized treatment plans for natural results</li>
                    <li>• Located in prestigious Harley Street, London</li>
                    <li>• Comprehensive aftercare and support</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Your Natural Transformation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the artistry of expert dermal filler treatments. 
                Book your consultation today and discover how we can enhance your natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  View All Treatments
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DermalFillerMakeover;
