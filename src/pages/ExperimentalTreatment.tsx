import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, Clock, Heart, Shield, CalendarDays, Users, Award, Star, CheckCircle } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";

const ExperimentalTreatment = () => {
  const seoData = generateSEOMetadata(
    "Experimental Treatment Layout | Cosmedocs | Harley Street", 
    "Experimental layout design showcasing left-aligned content with purple accents and strategic content positioning.", 
    "/experimental-treatment"
  );
  
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  const treatmentDetails = [
    { title: "Anaesthetic", detail: "Local / Topical", icon: Syringe },
    { title: "Procedure Time", detail: "30-45 minutes", icon: Clock },
    { title: "Results Duration", detail: "12+ months", icon: CalendarDays },
    { title: "Recovery", detail: "24-48 hours", icon: Heart },
    { title: "Back to Work", detail: "Immediate", icon: Users },
    { title: "Risks", detail: "Minimal", icon: Shield }
  ];

  const benefits = [
    "Immediate visible results",
    "Natural-looking enhancement", 
    "Minimal downtime required",
    "Reversible treatment options",
    "Boosts confidence naturally",
    "Long-lasting improvements"
  ];

  const priceTable = [
    { treatment: "Single Area", price: "£500", duration: "30 mins" },
    { treatment: "Two Areas", price: "£800", duration: "45 mins" },
    { treatment: "Full Treatment", price: "£1200", duration: "60 mins" },
    { treatment: "Top-up Session", price: "£350", duration: "20 mins" }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-16 md:py-32 overflow-hidden">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Advanced
                  <span className="block text-purple-300">Treatment</span>
                  <span className="block text-sm mt-4">Experimental layout design</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Bold • Natural • Always Your Way
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £500</p>
                  <p className="text-sm text-gray-300">Advanced aesthetic enhancement with premium techniques</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-3xl border border-purple-300/20 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-24 w-24 text-purple-300 mx-auto mb-4" />
                    <p className="text-purple-200 text-lg font-light">Premium Treatment</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Overview Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
                  Treatment <span className="text-purple-300">Overview</span>
                </h2>
                <p className="text-xl text-white/70 font-light mb-8 max-w-2xl">
                  Our comprehensive approach ensures optimal results through precision, expertise, and innovation.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-purple-300 flex-shrink-0" />
                      <span className="text-white/80 font-light">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {treatmentDetails.map((detail, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-purple-300/20 hover:bg-white/10 transition-all duration-300 text-center p-4">
                    <CardContent className="p-0">
                      <detail.icon className="h-6 w-6 text-purple-300 mx-auto mb-3" />
                      <h3 className="text-purple-200 text-xs font-light uppercase tracking-wide mb-2">
                        {detail.title}
                      </h3>
                      <p className="text-white text-sm font-light">
                        {detail.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
                  Investment in <span className="text-purple-300">Excellence</span>
                </h2>
                <p className="text-xl text-white/70 font-light mb-8 max-w-2xl">
                  Transparent pricing for premium aesthetic treatments. Quality and expertise you can trust.
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20">
                  <h3 className="text-xl font-light text-white mb-6">Why Choose Cosmedocs?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Star className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/90 font-light">Expert practitioners</p>
                        <p className="text-white/60 text-sm font-light">Harley Street excellence since 2007</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Star className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/90 font-light">Premium products</p>
                        <p className="text-white/60 text-sm font-light">Only the finest materials used</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Star className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/90 font-light">Invisible art approach</p>
                        <p className="text-white/60 text-sm font-light">Natural, refined results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl border border-purple-300/20 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-light text-white mb-6 text-center">Treatment Pricing</h3>
                  <div className="space-y-4">
                    {priceTable.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div>
                          <h4 className="text-white font-light">{item.treatment}</h4>
                          <p className="text-white/60 text-sm">{item.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-purple-300 font-semibold text-lg">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button 
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3 w-full"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Your Treatment
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
                  Exceptional <span className="text-purple-300">Results</span>
                </h2>
                <p className="text-xl text-white/70 font-light mb-8 max-w-2xl">
                  Our invisible art philosophy delivers transformative results that enhance your natural beauty 
                  while maintaining authenticity and elegance.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">98%</div>
                    <div className="text-white/70 text-sm font-light">Patient Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">15+</div>
                    <div className="text-white/70 text-sm font-light">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">5000+</div>
                    <div className="text-white/70 text-sm font-light">Treatments Performed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">100%</div>
                    <div className="text-white/70 text-sm font-light">Natural Results</div>
                  </div>
                </div>

                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
                  onClick={() => window.open(bookingUrl, '_blank')}
                >
                  Start Your Journey
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-6"
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-3xl p-8 border border-purple-300/20">
                  <h3 className="text-xl font-light text-white mb-4">Patient Testimonial</h3>
                  <p className="text-white/80 font-light leading-relaxed mb-4">
                    "The results exceeded my expectations. The team at Cosmedocs truly understands the art of subtle enhancement. 
                    I look like myself, just refreshed and rejuvenated."
                  </p>
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-purple-300 text-purple-300" />
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-xl font-light text-white mb-4">What to Expect</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <span className="text-white/80 font-light">Detailed consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <span className="text-white/80 font-light">Personalized treatment plan</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <span className="text-white/80 font-light">Expert procedure</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <span className="text-white/80 font-light">Aftercare support</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
                  Ready to Begin Your <span className="text-purple-300">Transformation</span>?
                </h2>
                <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
                  Experience the Cosmedocs difference. Book your consultation today and discover 
                  the invisible art of aesthetic enhancement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    Call Us Today
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExperimentalTreatment;