import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Shield, Award, Check, ArrowRight, Phone, Mail, MessageCircle, MapPin, Calendar, Sparkles, Zap, Droplets, Heart, Sun } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateSEOMetadata } from '@/utils/seo';
import PopularTreatments from '@/components/PopularTreatments';

const DelhiLocation = () => {
  const seoData = generateSEOMetadata(
    "Cosmedocs Delhi | Dr. Geetika | Aesthetic Clinic",
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
            "@type": "MedicalClinic",
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
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.5355,
              "longitude": 77.3910
            },
            "priceRange": "₹₹₹",
            "physician": {
              "@type": "Person",
              "name": "Dr. Geetika",
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
                Discover our full range of aesthetic treatments with Delhi-specific pricing
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
                          <p className="text-purple-300 font-bold">₹12,000 - ₹18,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Frown Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Vertical lines between eyebrows</p>
                          <p className="text-purple-300 font-bold">₹15,000 - ₹22,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Crow's Feet</h4>
                          <p className="text-gray-300 text-sm mb-3">Laugh lines around the eyes</p>
                          <p className="text-purple-300 font-bold">₹12,000 - ₹18,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Bunny Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Lines on nose when smiling</p>
                          <p className="text-purple-300 font-bold">₹8,000 - ₹12,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Jawline Slimming</h4>
                          <p className="text-gray-300 text-sm mb-3">Masseter muscle reduction</p>
                          <p className="text-purple-300 font-bold">₹25,000 - ₹35,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Lip Flip</h4>
                          <p className="text-gray-300 text-sm mb-3">Subtle lip enhancement</p>
                          <p className="text-purple-300 font-bold">₹8,000 - ₹12,000</p>
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
                          <p className="text-blue-300 font-bold">₹35,000 - ₹45,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Palm Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Control excessive palm sweating</p>
                          <p className="text-blue-300 font-bold">₹40,000 - ₹50,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Facial Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Reduce facial sweating</p>
                          <p className="text-blue-300 font-bold">₹30,000 - ₹40,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Feet Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Control excessive foot sweating</p>
                          <p className="text-blue-300 font-bold">₹45,000 - ₹55,000</p>
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
                          <p className="text-rose-300 font-bold">₹20,000 - ₹30,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Cheek Fillers</h4>
                          <p className="text-gray-300 text-sm mb-3">Restore cheek volume</p>
                          <p className="text-rose-300 font-bold">₹30,000 - ₹45,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Nasolabial Folds</h4>
                          <p className="text-gray-300 text-sm mb-3">Smooth smile lines</p>
                          <p className="text-rose-300 font-bold">₹25,000 - ₹35,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Marionette Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Correct downturned mouth</p>
                          <p className="text-rose-300 font-bold">₹25,000 - ₹35,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Tear Trough</h4>
                          <p className="text-gray-300 text-sm mb-3">Under-eye hollows</p>
                          <p className="text-rose-300 font-bold">₹30,000 - ₹40,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Jawline Definition</h4>
                          <p className="text-gray-300 text-sm mb-3">Enhance jaw contour</p>
                          <p className="text-rose-300 font-bold">₹35,000 - ₹50,000</p>
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
                        <Star className="h-6 w-6 mr-3 text-amber-400" />
                        HA Makeover Packages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Mini Makeover</h4>
                          <p className="text-gray-300 text-sm mb-3">Botox + 1 area filler</p>
                          <p className="text-amber-300 font-bold">₹45,000 - ₹60,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Full Face Rejuvenation</h4>
                          <p className="text-gray-300 text-sm mb-3">Comprehensive facial enhancement</p>
                          <p className="text-amber-300 font-bold">₹80,000 - ₹1,20,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Liquid Facelift</h4>
                          <p className="text-gray-300 text-sm mb-3">Non-surgical facelift alternative</p>
                          <p className="text-amber-300 font-bold">₹1,00,000 - ₹1,50,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Bridal Package</h4>
                          <p className="text-gray-300 text-sm mb-3">Pre-wedding enhancement package</p>
                          <p className="text-amber-300 font-bold">₹70,000 - ₹1,00,000</p>
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
                        <Zap className="h-6 w-6 mr-3 text-green-400" />
                        Skin Boosters
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Profhilo</h4>
                          <p className="text-gray-300 text-sm mb-3">Bio-remodeling skin booster</p>
                          <p className="text-green-300 font-bold">₹25,000 - ₹35,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Skinvive</h4>
                          <p className="text-gray-300 text-sm mb-3">Micro-droplet skin hydration</p>
                          <p className="text-green-300 font-bold">₹20,000 - ₹30,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Mesotherapy</h4>
                          <p className="text-gray-300 text-sm mb-3">Skin rejuvenation treatment</p>
                          <p className="text-green-300 font-bold">₹15,000 - ₹25,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Vampire Facial (PRP)</h4>
                          <p className="text-gray-300 text-sm mb-3">Platelet-rich plasma therapy</p>
                          <p className="text-green-300 font-bold">₹18,000 - ₹28,000</p>
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
                        <Shield className="h-6 w-6 mr-3 text-cyan-400" />
                        Skin & Hair Medicine
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Acne Treatment</h4>
                          <p className="text-gray-300 text-sm mb-3">Comprehensive acne management</p>
                          <p className="text-cyan-300 font-bold">₹8,000 - ₹15,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Pigmentation Treatment</h4>
                          <p className="text-gray-300 text-sm mb-3">Melasma and dark spot removal</p>
                          <p className="text-cyan-300 font-bold">₹12,000 - ₹20,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Hair Loss Treatment</h4>
                          <p className="text-gray-300 text-sm mb-3">PRP for hair restoration</p>
                          <p className="text-cyan-300 font-bold">₹8,000 - ₹12,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Chemical Peels</h4>
                          <p className="text-gray-300 text-sm mb-3">Skin resurfacing treatments</p>
                          <p className="text-cyan-300 font-bold">₹5,000 - ₹15,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Microneedling</h4>
                          <p className="text-gray-300 text-sm mb-3">Collagen induction therapy</p>
                          <p className="text-cyan-300 font-bold">₹8,000 - ₹12,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Skin Tightening</h4>
                          <p className="text-gray-300 text-sm mb-3">Non-invasive skin firming</p>
                          <p className="text-cyan-300 font-bold">₹15,000 - ₹25,000</p>
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
                          <p className="text-orange-300 font-bold">₹2,000 - ₹3,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Underarms</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">₹3,000 - ₹5,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Half Legs</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">₹8,000 - ₹12,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Full Legs</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">₹15,000 - ₹20,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Brazilian</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">₹8,000 - ₹12,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Full Body</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">₹35,000 - ₹50,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
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
                  src="/lovable-uploads/4fcf12b3-f695-4dd7-8ddd-3c5a0da3be9b.png" 
                  alt="Dr. Geetika - Aesthetic Medicine Specialist in Delhi"
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
                Witness Dr. Geetika's professional training and expertise at the prestigious Harley Street Institute
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/0e7d6308-98d0-4d70-9ed4-e2af2be0e17f.png" 
                    alt="Dr. Geetika receiving Fellowship certificate at Harley Street Institute"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">Fellowship Achievement</h3>
                    <p className="text-gray-200 text-sm">Aesthetic Medicine Certification</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/ff5d7b76-998f-49b1-8139-9f42cb469027.png" 
                    alt="Dr. Geetika performing advanced aesthetic procedure"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">Expert Technique</h3>
                    <p className="text-gray-200 text-sm">Precision in Every Treatment</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/c47cf752-b777-49da-b470-f6c1f7e3a292.png" 
                    alt="Dr. Geetika collaborating with Harley Street Institute mentors"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">Collaborative Learning</h3>
                    <p className="text-gray-200 text-sm">Training with Industry Leaders</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/1c79267b-6464-48f8-898d-da2e831dacfa.png" 
                    alt="Dr. Geetika performing advanced aesthetic treatments"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">Advanced Procedures</h3>
                    <p className="text-gray-200 text-sm">State-of-the-Art Techniques</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real Patient Results Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Real Patient Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Authentic before and after transformations showcasing our invisible art philosophy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src="/lovable-uploads/2dc938fb-78b2-4af7-a0cb-190492553cbb.png" 
                    alt="Natural lip enhancement before and after results"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Lip Enhancement</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Natural lip augmentation with premium hyaluronic acid fillers. 
                  Notice the subtle enhancement that maintains natural proportions while adding definition and volume.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src="/lovable-uploads/fa526805-2f04-4033-a0ef-61614a042609.png" 
                    alt="Chin and jawline contouring transformation results"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Chin & Jawline Contouring</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Profile transformation through strategic dermal filler placement. 
                  Enhanced facial harmony with improved chin projection and jawline definition.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src="/lovable-uploads/37f017f9-669c-4ed6-9ca4-28d0984a1965.png" 
                    alt="Non-surgical rhinoplasty nose reshaping results"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Non-Surgical Rhinoplasty</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Subtle nose reshaping without surgery. 
                  Refined nasal bridge contour and improved profile balance through precise filler technique.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-400 text-sm italic max-w-3xl mx-auto">
                All results shown are real patients treated by Dr. Geetika. Individual results may vary. 
                Book a consultation to discuss your personal aesthetic goals and treatment options.
              </p>
            </motion.div>
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