import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Shield, Award, Check, ArrowRight, Phone, Mail, MessageCircle, MapPin, Calendar, Users, Heart, Sparkles } from 'lucide-react';
import { generateSEOMetadata } from '@/utils/seo';
import PopularTreatments from '@/components/PopularTreatments';

const BarbadosHome = () => {
  const seoData = generateSEOMetadata(
    "Cosmedocs Barbados | Dr. Crystal | Harley Street Trained Aesthetic Doctor",
    "Premium aesthetic treatments by Dr. Crystal in Barbados. Harley Street trained, Fellowship certified. Botox, dermal fillers, and advanced cosmetic procedures.",
    "/barbados"
  );

  const barbadosTreatments = [
    {
      title: "Lip Fillers",
      description: "Natural lip enhancement for fuller, defined lips",
      link: "/lip-fillers",
      price: "From $400",
      icon: "💋"
    },
    {
      title: "Botox Treatments",
      description: "Anti-wrinkle injections for smooth, youthful skin",
      link: "/face-botox-areas",
      price: "From $300",
      icon: "✨"
    },
    {
      title: "Skin Boosters",
      description: "Deep hydration and skin quality improvement",
      link: "/skin-boosters",
      price: "From $350",
      icon: "💧"
    },
    {
      title: "PRP Vampire Facial",
      description: "Natural skin rejuvenation using your own platelets",
      link: "/prp-facial",
      price: "From $500",
      icon: "🩸"
    },
    {
      title: "Laser Hair Removal",
      description: "Permanent hair reduction with advanced technology",
      link: "/laser-hair-removal",
      price: "From $150",
      icon: "🔥"
    },
    {
      title: "Chemical Peels",
      description: "Skin resurfacing for radiant, renewed complexion",
      link: "/chemical-peels",
      price: "From $200",
      icon: "🌟"
    }
  ];

  const fellowshipBenefits = [
    {
      icon: <Award className="h-8 w-8 text-amber-400" />,
      title: "Harley Street Certified",
      description: "Trained at London's most prestigious medical district"
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-400" />,
      title: "International Standards",
      description: "World-class protocols and safety measures"
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-400" />,
      title: "Natural-Looking Results",
      description: "Subtle enhancements that enhance your natural beauty"
    },
    {
      icon: <Users className="h-8 w-8 text-amber-400" />,
      title: "Trusted Worldwide",
      description: "Part of the global Cosmedocs network"
    }
  ];

  const contactInfo = {
    phone: "+1 246-xxx-xxxx",
    whatsapp: "+1 246-xxx-xxxx",
    email: "barbados@cosmedocs.com",
    address: "Cosmedocs Barbados, Christ Church, Barbados"
  };

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
        <meta name="keywords" content="aesthetic clinic Barbados, Botox Barbados, dermal fillers Barbados, Dr Crystal Barbados, Harley Street trained, cosmetic treatment Caribbean" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs Barbados",
            "description": "Premier aesthetic clinic in Barbados with Dr. Crystal, Harley Street trained",
            "url": seoData.canonical,
            "telephone": contactInfo.phone,
            "email": contactInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Christ Church",
              "addressLocality": "Barbados",
              "addressCountry": "BB"
            },
            "medicalSpecialty": "Cosmetic Medicine",
            "priceRange": "$$$",
            "physician": {
              "@type": "Physician",
              "name": "Dr. Crystal",
              "medicalSpecialty": "Aesthetic Medicine",
              "alumniOf": "Harley Street Institute"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-rose-50 via-white to-amber-50 text-gray-900">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('/lovable-uploads/cd1978ee-f577-4fe1-9c8f-427f09760900.png')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/80 via-white/90 to-amber-100/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-4"
                >
                  <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Certified Cosmedocs Fellow | Barbados
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                    Cosmedocs
                  </span>
                  <span className="block text-gray-800 text-4xl md:text-5xl mt-2">Barbados</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Aesthetic Treatments by Dr. Crystal – Harley Street Trained
                </p>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-lg text-rose-600 font-semibold mb-2">Our aesthetics is invisible art</p>
                  <p className="text-gray-700 mb-4">Bold • Natural • Always Your Way</p>
                  <p className="text-gray-600 leading-relaxed">
                    Aesthetic medicine by Cosmedocs is minimal.<br />
                    Quiet, not loud. Invisible, not exaggerated.<br />
                    It's transformation that speaks — without saying a word.
                  </p>
                </motion.div>

                <div className="mb-8">
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="inline h-5 w-5 mr-2 text-amber-500" />
                    Caribbean's Premier Aesthetic Clinic
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full px-8 py-6 text-lg font-semibold">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/46dcd83a-d3c6-4075-80bf-cff61f052d53.png" 
                    alt="Dr. Crystal - Harley Street trained aesthetic doctor in Barbados"
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-rose-100">
                    <p className="text-sm font-semibold text-gray-800">Dr. Crystal Hayes</p>
                    <p className="text-xs text-rose-600">Harley Street Trained</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Dr. Crystal */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Meet Dr. Crystal</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Dr. Crystal is a highly skilled aesthetic practitioner trained at the renowned Harley Street Institute in London. 
                  With a passion for natural results and patient-centered care, she brings the gold-standard of aesthetic training 
                  to the heart of Barbados.
                </p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Her approach is holistic, subtle, and always safe. As a certified Cosmedocs Fellow, Dr. Crystal embodies our 
                  philosophy of invisible art - creating enhanced beauty that speaks volumes without saying a word.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Fellowship training at Harley Street Institute, London</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Specializes in natural-looking aesthetic enhancements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Certified Cosmedocs Fellow with international standards</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="/lovable-uploads/cd1978ee-f577-4fe1-9c8f-427f09760900.png" 
                  alt="Dr. Crystal outside prestigious London clinic"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-800">Harley Street Trained</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Signature Treatments at Cosmedocs Barbados</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Experience world-class aesthetic treatments with Caribbean hospitality
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {barbadosTreatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{treatment.icon}</div>
                      <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
                        {treatment.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                      <p className="text-amber-600 font-semibold text-lg mb-4">{treatment.price}</p>
                      <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose a Cosmedocs Fellow */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose a Cosmedocs Fellow?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our Fellowship program ensures the highest standards of aesthetic medicine worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fellowshipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="mb-4 flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-rose-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Inside Our Clinic</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Experience luxury aesthetic care in the heart of Barbados
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: "/lovable-uploads/46dcd83a-d3c6-4075-80bf-cff61f052d53.png", title: "Dr. Crystal in clinic" },
                { image: "/lovable-uploads/cd1978ee-f577-4fe1-9c8f-427f09760900.png", title: "Training in London" },
                { image: "/lovable-uploads/46dcd83a-d3c6-4075-80bf-cff61f052d53.png", title: "Treatment results" },
                { image: "/lovable-uploads/cd1978ee-f577-4fe1-9c8f-427f09760900.png", title: "Caribbean elegance" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-semibold">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Visit Us in Barbados</h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Located in the heart of Barbados, our clinic combines world-class aesthetic medicine with 
                  Caribbean warmth and hospitality. Experience the Cosmedocs difference in paradise.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-rose-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-rose-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-rose-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white rounded-full px-8 py-3">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="border-2 border-green-400 text-green-600 hover:bg-green-50 rounded-full px-8 py-3">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Message on WhatsApp
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-rose-500 mx-auto mb-4" />
                    <p className="text-gray-700 text-lg font-semibold">Google Maps Integration</p>
                    <p className="text-gray-600 mt-2">Interactive map will be embedded here</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Transformation?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Book your consultation with Dr. Crystal and discover the art of invisible enhancement in the beauty of Barbados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-gray-800 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Best Aesthetic Clinic in Barbados - Cosmedocs Barbados with Dr. Crystal</h3>
          <p>
            Cosmedocs Barbados, led by Dr. Crystal Hayes, offers premier aesthetic medicine services in the Caribbean. Dr. Crystal is a Fellowship-trained aesthetic practitioner who completed her advanced training at the prestigious Harley Street Institute in London. Our clinic specializes in Botox treatments, dermal fillers, lip enhancements, skin boosters, PRP vampire facials, laser hair removal, and chemical peels. Located in Christ Church, Barbados, we serve patients from across the Caribbean with world-class aesthetic treatments that blend international standards with Caribbean hospitality. Dr. Crystal brings extensive experience in aesthetic medicine with a deep understanding of natural beauty enhancement and patient safety. Our treatments include anti-wrinkle injections for smooth, youthful skin, premium dermal fillers for facial enhancement, natural lip augmentation, advanced skin rejuvenation with PRP therapy, permanent hair reduction with laser technology, and professional chemical peels for skin resurfacing. We pride ourselves on delivering natural-looking results that enhance your inherent beauty rather than creating artificial appearances. Our invisible art philosophy ensures every treatment is subtle, sophisticated, and perfectly suited to your individual features. The clinic maintains the highest standards of safety and hygiene, using only premium products and advanced techniques learned from Harley Street protocols. We offer flexible consultation options including phone consultations, WhatsApp bookings, and in-person appointments. Our pricing is competitive for the Caribbean market, with treatments starting from $150 for specialized procedures. Book your consultation today to experience the Cosmedocs difference in Barbados aesthetic medicine landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default BarbadosHome;