import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Shield, Award, Check, ArrowRight, Phone, Mail, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { generateSEOMetadata } from '@/utils/seo';
import PopularTreatments from '@/components/PopularTreatments';

const DelhiLocation = () => {
  const seoData = generateSEOMetadata(
    "Cosmedocs Delhi | Dr. Geetika | Best Aesthetic Clinic in Delhi NCR",
    "Expert aesthetic treatments by Dr. Geetika at Cosmedocs Delhi. Premium Botox, dermal fillers, and cosmetic procedures in Delhi NCR. Book consultation today.",
    "/delhi"
  );

  const delhiTreatments = [
    {
      title: "Botox Face Areas",
      description: "Premium Botox treatment for frown lines, forehead, and crow's feet",
      link: "/face-botox-areas",
      price: "From ₹15,000"
    },
    {
      title: "Dermal Fillers",
      description: "Natural facial enhancement with premium hyaluronic acid fillers",
      link: "/dermal-fillers",
      price: "From ₹25,000"
    },
    {
      title: "Lip Fillers",
      description: "Natural lip enhancement for fuller, defined lips",
      link: "/lip-fillers",
      price: "From ₹20,000"
    },
    {
      title: "Non-Surgical Facelift",
      description: "Advanced non-surgical facial rejuvenation techniques",
      link: "/non-surgical-facelift",
      price: "From ₹45,000"
    },
    {
      title: "Gummy Smile Botox",
      description: "Correct excessive gum display for perfect smile proportions",
      link: "/gummy-smile-botox",
      price: "From ₹8,000"
    },
    {
      title: "Marionette Lines",
      description: "Smooth vertical lines from mouth corners to chin",
      link: "/marionette-lines",
      price: "From ₹25,000"
    }
  ];

  const drGeetikaBlogPosts = [
    {
      title: "Advanced Aesthetic Techniques in Delhi's Modern Beauty Landscape",
      excerpt: "Exploring the latest innovations in aesthetic medicine and how they're transforming beauty standards in Delhi...",
      date: "December 2024",
      readTime: "5 min read"
    },
    {
      title: "The Art of Natural Enhancement: A Delhi Perspective",
      excerpt: "Understanding the cultural nuances of beauty enhancement in Delhi and how to achieve natural, culturally appropriate results...",
      date: "November 2024",
      readTime: "4 min read"
    },
    {
      title: "Seasonal Skincare for Delhi's Climate",
      excerpt: "How Delhi's unique climate affects your skin and the best aesthetic treatments for each season...",
      date: "October 2024",
      readTime: "6 min read"
    }
  ];

  const contactInfo = {
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    email: "delhi@cosmedocs.com",
    address: "Cosmedocs Delhi, Block A, Sector 25, Noida, Delhi NCR 201301"
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
        <meta name="keywords" content="aesthetic clinic Delhi, Botox Delhi, dermal fillers Delhi, cosmetic treatment Delhi NCR, Dr Geetika Delhi, beauty clinic Noida" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs Delhi",
            "description": "Premier aesthetic clinic in Delhi NCR with Dr. Geetika",
            "url": seoData.canonical,
            "telephone": contactInfo.phone,
            "email": contactInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Block A, Sector 25",
              "addressLocality": "Noida",
              "addressRegion": "Delhi NCR",
              "postalCode": "201301",
              "addressCountry": "IN"
            },
            "medicalSpecialty": "Cosmetic Medicine",
            "priceRange": "₹₹₹",
            "physician": {
              "@type": "Physician",
              "name": "Dr. Geetika",
              "medicalSpecialty": "Aesthetic Medicine"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png')`
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                  Cosmedocs
                  <span className="block text-purple-300">Delhi</span>
                  <span className="block text-sm mt-4 font-normal">with Dr. Geetika</span>
                </h1>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-xl text-purple-300 font-semibold mb-2 drop-shadow-lg">Our aesthetics is invisible art</p>
                  <p className="text-lg text-gray-200 drop-shadow-lg">Bold • Natural • Always Your Way</p>
                  <p className="text-lg text-gray-200 mt-4 drop-shadow-lg">
                    Aesthetic medicine by Cosmedocs is minimal.<br />
                    Quiet, not loud. Invisible, not exaggerated.<br />
                    It's transformation that speaks — without saying a word.
                  </p>
                </motion.div>

                <div className="mb-8">
                  <p className="text-lg text-gray-300 drop-shadow-lg">
                    <MapPin className="inline h-5 w-5 mr-2" />
                    Delhi NCR's Premier Aesthetic Clinic
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Dr. Geetika Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Meet Dr. Geetika</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Dr. Geetika is a highly experienced aesthetic physician specializing in advanced non-surgical cosmetic treatments. 
                  With years of expertise in Delhi's dynamic beauty landscape, she brings a unique understanding of cultural beauty 
                  preferences combined with international standards.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Her approach embodies our philosophy of invisible art - creating natural, enhanced beauty that speaks volumes 
                  without saying a word. Dr. Geetika is known for her precision, artistic eye, and commitment to patient safety.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Advanced training in aesthetic medicine</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Specializes in natural-looking results</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Deep understanding of Delhi beauty standards</p>
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
                  src="/lovable-uploads/d7bad7e3-fa9f-4357-8e4c-04ed2a494412.png" 
                  alt="Dr. Geetika - Aesthetic Medicine Specialist in Delhi"
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-16 bg-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Easy Contact</h2>
              <p className="text-gray-300">Multiple ways to reach our Delhi clinic</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <Phone className="h-8 w-8 text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Call Now</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </motion.a>

              <motion.a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <MessageCircle className="h-8 w-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-300">{contactInfo.whatsapp}</p>
              </motion.a>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </motion.a>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2" />
                {contactInfo.address}
              </p>
            </div>
          </div>
        </section>

        {/* Dr. Geetika's Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Latest from Dr. Geetika</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Expert insights on aesthetic medicine, beauty trends, and skincare from Delhi's perspective
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {drGeetikaBlogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300 group cursor-pointer"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 flex items-center text-purple-300 text-sm group-hover:underline">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Treatments */}
        <PopularTreatments 
          title="Popular Treatments in Delhi"
          treatments={delhiTreatments}
          className="py-20 bg-accent"
        />

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Transformation?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Book your consultation with Dr. Geetika at Cosmedocs Delhi and discover the art of invisible enhancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Best Aesthetic Clinic in Delhi NCR - Cosmedocs Delhi</h3>
          <p>
            Cosmedocs Delhi, led by Dr. Geetika, offers premier aesthetic medicine services in Delhi NCR. Our clinic specializes in advanced Botox treatments, dermal fillers, lip enhancements, and non-surgical facial rejuvenation procedures. Located in the heart of Delhi NCR, we serve patients from across Delhi, Noida, Gurgaon, and Faridabad with world-class aesthetic treatments. Dr. Geetika brings extensive experience in aesthetic medicine with a deep understanding of Delhi's beauty culture and preferences. Our treatments include face Botox for frown lines, forehead lines, and crow's feet, premium dermal fillers for facial enhancement, lip fillers for natural lip augmentation, gummy smile correction, marionette lines treatment, and comprehensive non-surgical facelift procedures. We pride ourselves on delivering natural-looking results that enhance your inherent beauty rather than creating artificial appearances. Our invisible art philosophy ensures every treatment is subtle, sophisticated, and perfectly suited to your individual features. The clinic maintains the highest standards of safety and hygiene, using only premium products and advanced techniques. We offer flexible consultation options including phone consultations, WhatsApp bookings, and in-person appointments. Our pricing is transparent and competitive for the Delhi market, with treatments starting from ₹8,000 for specialized procedures. Book your consultation today to experience the Cosmedocs difference in Delhi's aesthetic medicine landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default DelhiLocation;