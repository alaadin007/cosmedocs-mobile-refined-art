
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone, Mail, Instagram, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateSEOMetadata } from '@/utils/seo';

const Index = () => {
  const seoData = generateSEOMetadata(
    "Cosmedocs London | Premium Aesthetic Medicine | Harley Street",
    "Premium aesthetic medicine in London's Harley Street. Expert treatments by Dr. Ahmed Haq. Our aesthetics is invisible art • Bold • Natural • Always Your Way",
    "/"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/ac269c72-30b5-4182-a990-857547c55c4f.png')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
          
          <div className="page-container relative z-10">
            <div className="max-w-6xl">
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="block text-white/95 font-thin">COSMEDOCS</span>
                  <span className="block text-white font-light">Harley Street</span>
                  <span className="block text-white/85 text-4xl md:text-5xl italic font-extralight mt-4">Our aesthetics is invisible art</span>
                </motion.h1>
                
                <motion.div 
                  className="mb-16 space-y-6 max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-2xl md:text-3xl text-white/90 font-extralight leading-relaxed">
                    Premium aesthetic medicine in London's prestigious medical district • Bold • Natural • Always Your Way
                  </p>
                  <div className="flex items-center space-x-8 text-xl">
                    <div className="bg-white/15 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
                      <span className="text-white font-light">Since 2007</span>
                    </div>
                    <div className="text-white/80">
                      <span className="font-extralight">by </span> 
                      <span className="font-light">Dr. Ahmed Haq</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    Book Consultation
                  </a>
                  <div className="flex items-center gap-3 text-white/80 px-8">
                    <Instagram className="h-6 w-6" />
                    <a 
                      href="https://instagram.com/cosmedocs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors font-extralight text-lg"
                    >
                      Follow our transformations
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Popular Treatments Preview */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Premium Treatments
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Discover our range of advanced aesthetic treatments designed for natural enhancement
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Non-Surgical Nose Job",
                  price: "From £450",
                  link: "/non-surgical-nose-job"
                },
                {
                  title: "Lip Fillers",
                  price: "From £350",
                  link: "/lip-fillers"
                },
                {
                  title: "Dermal Fillers",
                  price: "From £400",
                  link: "/dermal-filler-makeover"
                },
                {
                  title: "PDO Threads",
                  price: "From £500",
                  link: "/pdo-threads"
                },
                {
                  title: "Non-Surgical Facelift",
                  price: "From £600",
                  link: "/non-surgical-facelift"
                },
                {
                  title: "Advanced Botox",
                  price: "From £300",
                  link: "/advanced-upper-face-botox"
                }
              ].map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-light text-white">{treatment.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white/70 font-light">{treatment.price}</p>
                      <a 
                        href={treatment.link}
                        className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm"
                      >
                        Learn More →
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-light text-white">Visit Us in Harley Street</h2>
                <p className="text-lg text-white/80 font-light leading-relaxed">
                  Located in the heart of London's prestigious medical district, offering the highest standards of aesthetic medicine.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: MapPin, text: "10 Harley Street, London W1G 9PF" },
                    { icon: Phone, text: "0333 0551 503" },
                    { icon: Mail, text: "info@cosmedocs.com" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <item.icon className="h-6 w-6 mr-4 text-white/70" />
                      <span className="text-lg font-light text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-10 text-center">
                    <h3 className="text-3xl font-light text-white mb-6">Ready to Transform?</h3>
                    <p className="text-white/80 mb-8 text-lg font-light leading-relaxed">
                      Book a consultation and discover how our invisible art can enhance your natural beauty.
                    </p>
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 w-full border border-white/20"
                    >
                      Book Consultation
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Cosmedocs London Harley Street Aesthetic Medicine Premium Treatments</h2>
          <p>
            Cosmedocs London, Harley Street aesthetic medicine, premium cosmetic treatments, Dr Ahmed Haq, 
            invisible art aesthetics, bold natural always your way, non-surgical treatments, dermal fillers, 
            lip fillers, nose job, PDO threads, Botox, facial enhancement, cosmetic medicine London, 
            Harley Street clinic, aesthetic doctors, natural results, facial rejuvenation, anti-aging treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
