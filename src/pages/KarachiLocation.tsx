import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Shield, Award, Check, ArrowRight, Phone, Mail, MessageCircle, MapPin, Calendar, Sparkles, Zap, Droplets, Heart, Sun } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateSEOMetadata } from '@/utils/seo';
import PopularTreatments from '@/components/PopularTreatments';
import drKhadijaImage from '@/assets/dr-khadija-treatment-new.jpg';
import khFellowship from '@/assets/karachi-hsi-fellowship.png';
import khTreat1 from '@/assets/karachi-hsi-treatment-1.png';
import khTreat2 from '@/assets/karachi-hsi-treatment-2.png';
import khTreat3 from '@/assets/karachi-hsi-treatment-3.png';
import khRhinoplasty from '@/assets/karachi-hsi-before-after-rhinoplasty.png';
import khPolyFaceEye from '@/assets/karachi-polynucleotide-face-eye.png';
import khPolyEye from '@/assets/karachi-polynucleotide-eye.png';
import khJawline from '@/assets/karachi-dermal-fillers-jawline.png';

const KarachiLocation = () => {
  const seoData = generateSEOMetadata(
    "Cosmedocs Karachi | Dr. Khadija | Aesthetic Clinic",
    "Dr. Khadija provides expert botox & dermal fillers in Karachi, Pakistan. Premium aesthetic treatments at Cosmedocs.",
    "/karachi"
  );

  const karachiTreatments = [
    {
      title: "Botox Face Areas",
      description: "Premium Botox treatment for frown lines, forehead, and crow's feet",
      link: "/face-botox-areas",
      price: "From Rs. 45,000"
    },
    {
      title: "Dermal Fillers",
      description: "Natural facial enhancement with premium hyaluronic acid fillers",
      link: "/dermal-fillers",
      price: "From Rs. 75,000"
    },
    {
      title: "Lip Fillers",
      description: "Natural lip enhancement for fuller, defined lips",
      link: "/lip-fillers",
      price: "From Rs. 60,000"
    },
    {
      title: "Non-Surgical Facelift",
      description: "Advanced non-surgical facial rejuvenation techniques",
      link: "/non-surgical-facelift",
      price: "From Rs. 135,000"
    },
    {
      title: "Gummy Smile Botox",
      description: "Correct excessive gum display for perfect smile proportions",
      link: "/gummy-smile-botox",
      price: "From Rs. 24,000"
    },
    {
      title: "Marionette Lines",
      description: "Smooth vertical lines from mouth corners to chin",
      link: "/marionette-lines",
      price: "From Rs. 75,000"
    }
  ];

  const drKhadijaBlogPosts = [
    {
      title: "Advanced Aesthetic Techniques in Karachi's Modern Beauty Landscape",
      excerpt: "Exploring the latest innovations in aesthetic medicine and how they're transforming beauty standards in Pakistan...",
      date: "December 2024",
      readTime: "5 min read"
    },
    {
      title: "The Art of Natural Enhancement: A Pakistani Perspective",
      excerpt: "Understanding the cultural nuances of beauty enhancement in Pakistan and how to achieve natural, culturally appropriate results...",
      date: "November 2024",
      readTime: "4 min read"
    },
    {
      title: "Seasonal Skincare for Karachi's Climate",
      excerpt: "How Karachi's unique coastal climate affects your skin and the best aesthetic treatments for each season...",
      date: "October 2024",
      readTime: "6 min read"
    }
  ];

  const contactInfo = {
    phone: "+92 21 3456 7890",
    whatsapp: "+92 300 123 4567",
    email: "karachi@cosmedocs.com",
    address: "Cosmedocs Karachi, Clifton Block 4, Main Clifton Road, Karachi 75600"
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
        <meta name="keywords" content="aesthetic clinic Karachi, Botox Karachi, dermal fillers Pakistan, cosmetic treatment Karachi, Dr Khadija Pakistan, beauty clinic Clifton" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs Karachi",
            "description": "Premier aesthetic clinic in Karachi Pakistan with Dr. Khadija",
            "url": seoData.canonical,
            "telephone": contactInfo.phone,
            "email": contactInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Clifton Block 4, Main Clifton Road",
              "addressLocality": "Karachi",
              "addressRegion": "Sindh",
              "postalCode": "75600",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 24.8607,
              "longitude": 67.0011
            },
            "priceRange": "Rs.Rs.Rs.",
            "physician": {
              "@type": "Person",
              "name": "Dr. Khadija",
              "jobTitle": "Aesthetic Medicine Specialist"
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
                  <span className="block text-purple-300">Karachi</span>
                  <span className="block text-sm mt-4 font-normal">with Dr. Khadija</span>
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
                    Pakistan's Premier Aesthetic Clinic
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

        {/* Treatments Tabs Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Comprehensive Treatment Menu</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Discover our full range of aesthetic treatments with Pakistan-specific pricing
              </p>
            </motion.div>

            <Tabs defaultValue="botox" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 bg-gray-800 rounded-2xl p-2 mb-8">
                <TabsTrigger value="botox" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Botox</span>
                </TabsTrigger>
                <TabsTrigger value="sweat-tox" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Droplets className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Sweat-Tox</span>
                </TabsTrigger>
                <TabsTrigger value="dermal-fillers" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Dermal Fillers</span>
                </TabsTrigger>
                <TabsTrigger value="ha-makeover" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Star className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">HA Makeover</span>
                </TabsTrigger>
                <TabsTrigger value="skin-boosters" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Skin Boosters</span>
                </TabsTrigger>
                <TabsTrigger value="skin-hair" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Skin & Hair</span>
                </TabsTrigger>
                <TabsTrigger value="laser-hair" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Sun className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Laser Hair</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="botox" className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Sparkles className="h-6 w-6 mr-3 text-purple-400" />
                        Botox Treatments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Forehead Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Smooth horizontal forehead wrinkles</p>
                          <p className="text-purple-300 font-bold">Rs. 36,000 - Rs. 54,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Frown Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Vertical lines between eyebrows</p>
                          <p className="text-purple-300 font-bold">Rs. 45,000 - Rs. 66,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Crow's Feet</h4>
                          <p className="text-gray-300 text-sm mb-3">Laugh lines around the eyes</p>
                          <p className="text-purple-300 font-bold">Rs. 36,000 - Rs. 54,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Bunny Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Lines on nose when smiling</p>
                          <p className="text-purple-300 font-bold">Rs. 24,000 - Rs. 36,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Jawline Slimming</h4>
                          <p className="text-gray-300 text-sm mb-3">Masseter muscle reduction</p>
                          <p className="text-purple-300 font-bold">Rs. 75,000 - Rs. 105,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Lip Flip</h4>
                          <p className="text-gray-300 text-sm mb-3">Subtle lip enhancement</p>
                          <p className="text-purple-300 font-bold">Rs. 24,000 - Rs. 36,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="sweat-tox" className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Droplets className="h-6 w-6 mr-3 text-blue-400" />
                        Sweat-Tox (Hyperhidrosis Treatment)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Underarm Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Reduce excessive underarm sweating</p>
                          <p className="text-blue-300 font-bold">Rs. 105,000 - Rs. 135,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Palm Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Control excessive palm sweating</p>
                          <p className="text-blue-300 font-bold">Rs. 120,000 - Rs. 150,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Facial Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Reduce facial sweating</p>
                          <p className="text-blue-300 font-bold">Rs. 90,000 - Rs. 120,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Feet Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Control excessive foot sweating</p>
                          <p className="text-blue-300 font-bold">Rs. 135,000 - Rs. 165,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="dermal-fillers" className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Heart className="h-6 w-6 mr-3 text-rose-400" />
                        Dermal Fillers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Lip Fillers</h4>
                          <p className="text-gray-300 text-sm mb-3">Natural lip enhancement</p>
                          <p className="text-rose-300 font-bold">Rs. 60,000 - Rs. 90,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Cheek Fillers</h4>
                          <p className="text-gray-300 text-sm mb-3">Restore cheek volume</p>
                          <p className="text-rose-300 font-bold">Rs. 90,000 - Rs. 135,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Nasolabial Folds</h4>
                          <p className="text-gray-300 text-sm mb-3">Smooth smile lines</p>
                          <p className="text-rose-300 font-bold">Rs. 75,000 - Rs. 105,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Tear Trough</h4>
                          <p className="text-gray-300 text-sm mb-3">Under-eye rejuvenation</p>
                          <p className="text-rose-300 font-bold">Rs. 75,000 - Rs. 105,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Marionette Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Mouth to chin lines</p>
                          <p className="text-rose-300 font-bold">Rs. 75,000 - Rs. 105,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Jawline Contouring</h4>
                          <p className="text-gray-300 text-sm mb-3">Define and sculpt jawline</p>
                          <p className="text-rose-300 font-bold">Rs. 120,000 - Rs. 180,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="ha-makeover" className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Star className="h-6 w-6 mr-3 text-yellow-400" />
                        HA (Hyaluronic Acid) Makeover
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Complete Facial Rejuvenation</h4>
                          <p className="text-gray-300 text-sm mb-3">Full face HA treatment package</p>
                          <p className="text-yellow-300 font-bold">Rs. 300,000 - Rs. 450,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Liquid Facelift</h4>
                          <p className="text-gray-300 text-sm mb-3">Non-surgical facelift with HA</p>
                          <p className="text-yellow-300 font-bold">Rs. 225,000 - Rs. 375,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Facial Contouring</h4>
                          <p className="text-gray-300 text-sm mb-3">Sculpt and define facial features</p>
                          <p className="text-yellow-300 font-bold">Rs. 180,000 - Rs. 300,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Anti-Aging Package</h4>
                          <p className="text-gray-300 text-sm mb-3">Comprehensive age-reversal treatment</p>
                          <p className="text-yellow-300 font-bold">Rs. 270,000 - Rs. 405,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="skin-boosters" className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Zap className="h-6 w-6 mr-3 text-cyan-400" />
                        Skin Boosters & Treatments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Profhilo</h4>
                          <p className="text-gray-300 text-sm mb-3">Bio-remodeling treatment</p>
                          <p className="text-cyan-300 font-bold">Rs. 90,000 - Rs. 120,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Seventy Hyal</h4>
                          <p className="text-gray-300 text-sm mb-3">Deep hydration booster</p>
                          <p className="text-cyan-300 font-bold">Rs. 75,000 - Rs. 105,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Polynucleotides (PDRN)</h4>
                          <p className="text-gray-300 text-sm mb-3">Skin regeneration therapy</p>
                          <p className="text-cyan-300 font-bold">Rs. 120,000 - Rs. 150,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Mesotherapy</h4>
                          <p className="text-gray-300 text-sm mb-3">Vitamin and nutrient infusion</p>
                          <p className="text-cyan-300 font-bold">Rs. 45,000 - Rs. 75,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">PRP (Vampire Facial)</h4>
                          <p className="text-gray-300 text-sm mb-3">Platelet-rich plasma therapy</p>
                          <p className="text-cyan-300 font-bold">Rs. 60,000 - Rs. 90,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Microneedling</h4>
                          <p className="text-gray-300 text-sm mb-3">Collagen induction therapy</p>
                          <p className="text-cyan-300 font-bold">Rs. 30,000 - Rs. 45,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="skin-hair" className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Shield className="h-6 w-6 mr-3 text-emerald-400" />
                        Skin & Hair Treatments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Chemical Peels</h4>
                          <p className="text-gray-300 text-sm mb-3">Skin resurfacing treatment</p>
                          <p className="text-emerald-300 font-bold">Rs. 30,000 - Rs. 60,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Hydrafacial</h4>
                          <p className="text-gray-300 text-sm mb-3">Deep cleansing and hydration</p>
                          <p className="text-emerald-300 font-bold">Rs. 45,000 - Rs. 75,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Acne Treatment</h4>
                          <p className="text-gray-300 text-sm mb-3">Comprehensive acne management</p>
                          <p className="text-emerald-300 font-bold">Rs. 60,000 - Rs. 120,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Hair PRP</h4>
                          <p className="text-gray-300 text-sm mb-3">Hair restoration therapy</p>
                          <p className="text-emerald-300 font-bold">Rs. 45,000 - Rs. 75,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Scalp Mesotherapy</h4>
                          <p className="text-gray-300 text-sm mb-3">Hair growth stimulation</p>
                          <p className="text-emerald-300 font-bold">Rs. 30,000 - Rs. 60,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Pigmentation Treatment</h4>
                          <p className="text-gray-300 text-sm mb-3">Dark spot and melasma treatment</p>
                          <p className="text-emerald-300 font-bold">Rs. 60,000 - Rs. 120,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="laser-hair" className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Sun className="h-6 w-6 mr-3 text-orange-400" />
                        Laser Hair Removal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Upper Lip</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">Rs. 15,000 - Rs. 22,500</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Underarms</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">Rs. 22,500 - Rs. 37,500</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Bikini Area</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">Rs. 45,000 - Rs. 75,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Lower Legs</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">Rs. 90,000 - Rs. 135,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Full Arms</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">Rs. 75,000 - Rs. 112,500</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Full Body</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">Rs. 262,500 - Rs. 375,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Dr. Khadija Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Meet Dr. Khadija</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Dr. Khadija is a highly experienced aesthetic physician specializing in advanced non-surgical cosmetic treatments. 
                  With years of expertise in Pakistan's dynamic beauty landscape, she brings a unique understanding of cultural beauty 
                  preferences combined with international standards.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Her approach embodies our philosophy of invisible art - creating natural, enhanced beauty that speaks volumes 
                  without saying a word. Dr. Khadija is known for her precision, artistic eye, and commitment to patient safety.
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
                    <p className="text-gray-300">Deep understanding of Pakistani beauty standards</p>
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
                  src={drKhadijaImage} 
                  alt="Dr. Khadija - Aesthetic Medicine Specialist performing treatment in Karachi"
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Inside Our Clinic Gallery */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Inside Our Clinic</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Witness Dr. Khadija's professional training and expertise at our state-of-the-art facility
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: khFellowship, title: "Fellowship in Aesthetic Medicine — Harley Street Institute" },
                { image: khTreat3, title: "Precise botulinum toxin treatment at Cosmedocs Karachi" },
                { image: khTreat2, title: "Dermal filler procedure under clinical lighting" },
                { image: khTreat1, title: "Advanced aesthetic injection training — Harley Street Institute" },
                { image: drKhadijaImage, title: "Dr Khadija performing facial aesthetics — Karachi clinic" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-800">
                    <img 
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-sm text-center px-4">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before and After Results */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Real Results, Real Patients</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                See the natural, subtle transformations achieved by Dr. Khadija at Cosmedocs Karachi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { beforeAfter: khRhinoplasty, treatment: "Non‑surgical Rhinoplasty", description: "Natural nose reshaping with dermal fillers for a refined profile" },
                { beforeAfter: khPolyFaceEye, treatment: "Polynucleotide Face & Eye Rejuvenation", description: "Advanced skin rejuvenation with polynucleotides for natural anti‑ageing" },
                { beforeAfter: khPolyEye, treatment: "Polynucleotide Eye Rejuvenation", description: "Targeted under‑eye treatment for youthful, refreshed appearance" },
                { beforeAfter: khJawline, treatment: "Chin & Jawline Contouring", description: "Dermal fillers for enhanced facial definition and profile" }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-2xl overflow-hidden"
                >
                  <div className="relative">
                    <img src={result.beforeAfter} alt={`${result.treatment} - Before and After comparison`} loading="lazy" className="w-full h-48 object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{result.treatment}</h3>
                    <p className="text-gray-300 text-sm">{result.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 text-sm mb-4">
                All results shown are real patients treated by Dr. Khadija. Individual results may vary. 
                Treatments performed at Cosmedocs Karachi following international safety protocols.
              </p>
            </div>
          </div>
        </section>

        <PopularTreatments treatments={karachiTreatments} />

        {/* Dr. Khadija's Blog Posts */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Latest from Dr. Khadija</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Stay updated with the latest insights and expertise in aesthetic medicine
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {drKhadijaBlogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="flex items-center text-purple-400 text-sm mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Book your consultation with Dr. Khadija at Cosmedocs Karachi and discover the art of invisible enhancement.
                Our aesthetics is invisible art • Bold • Natural • Always Your Way
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-gray-900/50 text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 mx-auto mb-4 text-purple-400" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 text-center">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 mx-auto mb-4 text-green-400" />
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.whatsapp}</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 mx-auto mb-4 text-red-400" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-sm">Clifton, Karachi</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-white text-black hover:bg-gray-200 mr-4">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Best Aesthetic Clinic in Karachi Pakistan - Cosmedocs Karachi</h3>
          <p>
            Cosmedocs Karachi, led by Dr. Khadija, offers premier aesthetic medicine services in Pakistan. Our clinic specializes in advanced Botox treatments, dermal fillers, lip enhancements, and non-surgical facial rejuvenation procedures. Located in Clifton, Karachi, we serve patients from across Pakistan with world-class aesthetic treatments. Dr. Khadija brings extensive experience in aesthetic medicine with a deep understanding of Pakistani beauty culture and preferences. Our treatments include face Botox for frown lines, forehead lines, and crow's feet, premium dermal fillers for facial enhancement, lip fillers for natural lip augmentation, gummy smile correction, marionette lines treatment, and comprehensive non-surgical facelift procedures. We pride ourselves on delivering natural-looking results that enhance your inherent beauty rather than creating artificial appearances. Our invisible art philosophy ensures every treatment is subtle, sophisticated, and perfectly suited to your individual features. The clinic maintains the highest standards of safety and hygiene, using only premium products and advanced techniques. We offer flexible consultation options including phone consultations, WhatsApp bookings, and in-person appointments. Our pricing is transparent and competitive for the Pakistani market, with treatments starting from Rs. 24,000 for specialized procedures. Book your consultation today to experience the Cosmedocs difference in Karachi's aesthetic medicine landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default KarachiLocation;