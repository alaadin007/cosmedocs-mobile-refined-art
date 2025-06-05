
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { ArrowRight, Clock, Star, CheckCircle, Award, Zap, Heart } from "lucide-react";

const NonSurgicalFacelift = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Facelift London | Liquid Facelift & Volume Restoration",
    "Expert non-surgical facelift treatments in London. Combat volume loss, face sagging & aging with advanced dermal fillers. Natural liquid facelift results at Harley Street clinic.",
    "/non-surgical-facelift"
  );

  const clientJourneyImages = [
    {
      src: "/lovable-uploads/e5d3a477-5142-4cd6-a557-0464677601b9.png",
      alt: "Non-surgical facelift before and after showing volume restoration treatment process",
      caption: "Complete transformation process: Before treatment, treatment planning with facial compartment mapping, and final results showing restored volume and lifted appearance"
    },
    {
      src: "/lovable-uploads/c32f1151-24c9-4e9e-a7de-ee1ef761bab0.png",
      alt: "Client baseline assessment before non-surgical facelift treatment",
      caption: "Baseline assessment: Initial consultation showing areas of volume loss in medial and deep cheek compartments, tear trough hollowing, and early signs of facial sagging"
    },
    {
      src: "/lovable-uploads/0e8b6139-9d6a-462d-87fc-8e03bca4e913.png",
      alt: "6 months progress non-surgical facelift results",
      caption: "6 months post-treatment: Significant improvement in cheek projection, reduced nasolabial folds, and enhanced tear trough area with natural facial harmony"
    },
    {
      src: "/lovable-uploads/b621a09c-1b05-4c85-9d39-f89dd9aa8ff2.png",
      alt: "12 months non-surgical facelift maintenance results",
      caption: "12 months post-treatment: Sustained volume restoration with maintained cheek projection and continued improvement in facial contours"
    },
    {
      src: "/lovable-uploads/745ed2ee-1e72-49b1-aafd-f85c8d1358e8.png",
      alt: "2 years non-surgical facelift long-term results",
      caption: "2 years post-treatment: Long-term results showing maintained facial volume, natural aging progression with enhanced features, and overall facial rejuvenation"
    }
  ];

  const volumeLossAreas = [
    {
      area: "Medial Cheek Compartment",
      description: "First area to lose volume, causing flattening and loss of forward projection",
      icon: "🎯"
    },
    {
      area: "Deep Cheek Compartment",
      description: "Secondary volume loss leading to nasolabial fold formation",
      icon: "📍"
    },
    {
      area: "Tear Trough Area",
      description: "Becomes more prominent as cheek volume drops, creating tired appearance",
      icon: "👁️"
    },
    {
      area: "Mid-Face Support",
      description: "Overall structural support that maintains youthful facial proportions",
      icon: "🏗️"
    }
  ];

  const sagingAreas = [
    {
      area: "Upper Eyelids",
      description: "Develop hooding and excess skin as face loses structural support",
      severity: "Early stage"
    },
    {
      area: "Jowls",
      description: "Form along jawline when mid-face volume is insufficient",
      severity: "Progressive"
    },
    {
      area: "Nasolabial Folds",
      description: "Deepen significantly once cheek support is compromised",
      severity: "Advanced"
    }
  ];

  const treatmentBenefits = [
    "Restore lost facial volume without surgery",
    "Lift and contour sagging areas naturally",
    "Improve tear trough hollowing",
    "Reduce nasolabial fold appearance",
    "Enhance cheek projection and definition",
    "Achieve natural, age-appropriate results",
    "Minimal downtime and immediate results",
    "Long-lasting effects (12-24 months)"
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
        <meta name="keywords" content="non-surgical facelift London, liquid facelift, facial volume restoration, dermal fillers, face lifting without surgery, anti-aging treatments, Harley Street facelift, non-invasive facial rejuvenation, cheek enhancement, tear trough treatment, nasolabial fold reduction, jowl treatment, facial contouring, volume loss treatment, face sagging solutions" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Non-Surgical Facelift",
              "alternateName": ["Liquid Facelift", "Non-Invasive Facelift", "Dermal Filler Facelift"],
              "description": "Advanced non-surgical facelift treatment using dermal fillers to restore facial volume and combat aging effects",
              "procedureType": "Non-surgical facial rejuvenation",
              "bodyLocation": "Face",
              "preparation": "Comprehensive facial assessment and treatment planning",
              "followup": "Progressive monitoring over 2-year period",
              "medicineSystem": "Aesthetic Medicine",
              "performer": {
                "@type": "MedicalBusiness",
                "name": "Cosmedocs",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Harley Street",
                  "addressLocality": "London",
                  "addressCountry": "UK"
                },
                "award": "Teoxane Outstanding Clinic Award Winner Q2 2017"
              },
              "benefits": [
                "Volume restoration without surgery",
                "Natural facial lifting",
                "Reduced appearance of aging signs",
                "Minimal downtime",
                "Long-lasting results"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hidden SEO Content - 500 words relevant to non-surgical facelift */}
      <div className="sr-only" aria-hidden="true">
        <h2>Comprehensive Guide to Non-Surgical Facelift and Liquid Facelift Treatments</h2>
        <p>
          Non-surgical facelift procedures, also known as liquid facelifts, represent the cutting-edge evolution of aesthetic medicine, offering patients the opportunity to achieve dramatic facial rejuvenation without the risks, downtime, and expense associated with traditional surgical interventions. These advanced treatments utilize premium dermal fillers and innovative injection techniques to address the fundamental causes of facial aging: volume loss and gravitational sagging.
        </p>
        <p>
          The science behind facial aging reveals that volume loss occurs in predictable patterns, beginning with the medial and deep cheek compartments. These facial fat compartments, when depleted, create a cascade effect that results in flattening of the cheeks, loss of forward projection, and the formation of nasolabial folds. Most significantly, the reduction in cheek volume directly impacts the tear trough area, causing increased hollowing and a tired, aged appearance.
        </p>
        <p>
          Understanding facial anatomy is crucial for effective non-surgical facelift treatments. The yellow fat compartments visible in anatomical imaging demonstrate how volume depletion in specific areas affects overall facial structure. Advanced practitioners utilize this knowledge to strategically restore volume using hyaluronic acid-based dermal fillers, creating natural lifting effects that counteract gravitational aging.
        </p>
        <p>
          Face sagging follows a distinct pattern that differs from volume loss. Sagging primarily affects the upper eyelids, jowls, and nasolabial fold regions, typically occurring after significant volume depletion has already taken place. The principle "face sinks then sags" guides treatment approaches, emphasizing the importance of addressing volume loss before tackling sagging concerns.
        </p>
        <p>
          Modern liquid facelift techniques employ advanced injection methods using cannulas and needles to precisely place dermal fillers in multiple facial planes. This three-dimensional approach to facial enhancement ensures natural-looking results that maintain facial mobility and expression while achieving significant anti-aging effects. Treatment protocols often involve staged procedures over 12-24 months to allow for optimal integration and natural-looking outcomes.
        </p>
        <p>
          Long-term case studies, such as the two-year client journey documented in clinical photography, demonstrate the sustained benefits of properly executed non-surgical facelift procedures. These treatments not only address immediate aging concerns but also help slow the progression of future volume loss and sagging, making them an excellent preventative anti-aging strategy for patients in their 30s, 40s, and beyond.
        </p>
      </div>

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
                  Non-Surgical Facelift: 
                  <span className="text-purple-400"> Volume Restoration </span>
                  & Natural Lifting
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Combat facial aging at its source with advanced liquid facelift techniques. 
                  Restore lost volume, lift sagging areas, and achieve remarkable rejuvenation 
                  without surgery at London's premier Harley Street clinic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <BeforeAfterImageViewer 
                    images={clientJourneyImages}
                    triggerLabel="View 2-Year Journey"
                    title="Non-Surgical Facelift: 2-Year Client Journey"
                    description="Real client results over 2 years showing progressive improvement and maintenance"
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
                    src="/lovable-uploads/e5d3a477-5142-4cd6-a557-0464677601b9.png"
                    alt="Non-surgical facelift before and after results"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white text-black rounded-full p-4 shadow-lg">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Award Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <img 
                  src="/lovable-uploads/8785b0dd-a50d-4e0a-b691-3254b6c5f925.png"
                  alt="Teoxane Outstanding Clinic Award Winner Q2 2017"
                  className="h-32 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start">
                    <Award className="h-6 w-6 mr-2 text-yellow-400" />
                    Award-Winning Excellence
                  </h3>
                  <p className="text-gray-300">
                    Recognized by Teoxane Laboratories for exceptional patient care, 
                    treatment results, and commitment to ongoing training and product knowledge.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Understanding Facial Aging */}
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
                Understanding Facial Aging: Science Behind Volume Loss
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Facial aging follows predictable patterns. By understanding the science of volume loss 
                and sagging, we can strategically restore your natural beauty with precision.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Heart className="h-6 w-6 mr-3 text-red-400" />
                  1. Volume Loss: The Primary Cause
                </h3>
                <div className="prose prose-lg text-gray-300 mb-8">
                  <p className="mb-6">
                    Facial aging begins with <strong className="text-white">volume loss in key fat compartments</strong>. 
                    The first areas affected are the <strong className="text-white">medial and deep cheek compartments</strong>, 
                    which provide crucial structural support to the mid-face region.
                  </p>
                  
                  <p className="mb-6">
                    As these yellow fat compartments shrink, several changes occur simultaneously:
                    the cheeks flatten and lose forward projection, nasolabial folds become more prominent, 
                    and most interestingly, <strong className="text-white">losing cheek volume directly impacts the tear trough area</strong>, 
                    making under-eye hollowing more pronounced.
                  </p>

                  <p>
                    This cascading effect means that addressing cheek volume loss often dramatically 
                    improves the appearance of tear troughs without direct treatment to that area - 
                    a key principle in our natural enhancement approach.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-blue-400" />
                  2. Face Sagging: The Secondary Effect
                </h3>
                <div className="prose prose-lg text-gray-300 mb-8">
                  <p className="mb-6">
                    Contrary to popular belief, <strong className="text-white">face sagging is secondary to volume loss</strong>. 
                    The principle "face sinks then sags" guides our treatment philosophy. 
                    Sagging primarily occurs in three specific areas:
                  </p>
                  
                  <p className="mb-6">
                    <strong className="text-white">Upper eyelids</strong> develop hooding, 
                    <strong className="text-white"> jowls</strong> form along the jawline, 
                    and <strong className="text-white">nasolabial folds</strong> deepen significantly. 
                    These changes only become prominent once the underlying volume loss has progressed.
                  </p>

                  <p>
                    By addressing volume loss strategically, we can often prevent or significantly 
                    reduce sagging without requiring additional lifting procedures, achieving 
                    natural, long-lasting rejuvenation.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Volume Loss Areas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {volumeLossAreas.map((area, index) => (
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
                      <h4 className="text-lg font-bold mb-3">{area.area}</h4>
                      <p className="text-gray-400 text-sm">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Journey Section */}
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
                Real Client Journey: 2-Year Transformation
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Follow one client's remarkable journey from initial consultation through 
                2 years of progressive improvement with our non-surgical facelift approach.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Progressive Natural Enhancement</h3>
                <div className="prose prose-lg text-gray-300 mb-8">
                  <p className="mb-6">
                    This exceptional case demonstrates the power of <strong className="text-white">progressive volume restoration</strong> 
                    over time. Rather than dramatic overnight changes, our approach focuses on 
                    gradual, natural enhancement that evolves beautifully with the client's aging process.
                  </p>
                  
                  <p className="mb-6">
                    The transformation begins with strategic placement of dermal fillers to address 
                    <strong className="text-white"> medial and deep cheek volume loss</strong>, 
                    immediately improving facial projection and reducing nasolabial fold prominence. 
                    The tear trough improvement is particularly striking, achieved primarily through 
                    cheek enhancement rather than direct under-eye treatment.
                  </p>

                  <p>
                    Over the 2-year period, maintenance treatments ensure sustained results while 
                    allowing for natural facial evolution. This approach creates transformation 
                    that looks like natural aging in reverse rather than obvious cosmetic intervention.
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
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold mb-6 text-center">Treatment Timeline</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-600">
                        <span>Initial Assessment</span>
                        <span className="text-purple-400 font-medium">Month 0</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-600">
                        <span>First Treatment Session</span>
                        <span className="text-purple-400 font-medium">Month 1</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-600">
                        <span>6-Month Review</span>
                        <span className="text-purple-400 font-medium">Month 6</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-600">
                        <span>12-Month Maintenance</span>
                        <span className="text-purple-400 font-medium">Month 12</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span>2-Year Results</span>
                        <span className="text-purple-400 font-medium">Month 24</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Benefits */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Choose Non-Surgical Facelift?
                </h2>
                
                <div className="prose prose-lg text-gray-300 mb-8">
                  <p className="mb-6">
                    Modern non-surgical facelift techniques offer unprecedented results without the 
                    risks, downtime, and expense of traditional surgery. Our approach addresses 
                    <strong className="text-white"> the root causes of facial aging</strong> - 
                    volume loss and gravitational changes - using advanced dermal filler technology.
                  </p>
                  
                  <p className="mb-6">
                    The key advantage lies in <strong className="text-white">progressive enhancement</strong> 
                    that allows for natural evolution and adjustment over time. Unlike surgical procedures 
                    that create immediate, permanent changes, our liquid facelift approach can be 
                    refined and adapted as your face continues to age naturally.
                  </p>

                  <p>
                    Most importantly, results look completely natural because we work with your 
                    existing facial anatomy rather than altering it. The goal is always to restore 
                    what time has taken away, not to create an artificial new appearance.
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
                <div className="space-y-4 mb-8">
                  {treatmentBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Our Expertise</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Award-winning clinic recognized by industry leaders</li>
                    <li>• Advanced facial anatomy and injection technique training</li>
                    <li>• Premium hyaluronic acid fillers from top manufacturers</li>
                    <li>• Comprehensive 2-year treatment and maintenance protocols</li>
                    <li>• Located in prestigious Harley Street, London</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sagging Areas Section */}
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
                Addressing Face Sagging: Strategic Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Understanding that face sagging occurs after volume loss allows us to 
                prevent and treat these changes with targeted volume restoration.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {sagingAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{area.area}</h3>
                      <p className="text-gray-400 mb-4">{area.description}</p>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-purple-400">{area.severity}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Ready to Restore Your Natural Beauty?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the science-based approach to non-surgical facial rejuvenation. 
                Book your comprehensive assessment and discover your transformation potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  Book Consultation
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

export default NonSurgicalFacelift;
