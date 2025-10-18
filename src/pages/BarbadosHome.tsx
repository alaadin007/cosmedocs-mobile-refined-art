import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Shield, Award, Check, ArrowRight, Phone, Mail, MessageCircle, MapPin, Calendar, Users, Heart, Sparkles, Zap, Droplets, Sun } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateSEOMetadata } from '@/utils/seo';
import PopularTreatments from '@/components/PopularTreatments';

const BarbadosHome = () => {
  const seoData = generateSEOMetadata(
    "Cosmedocs Barbados | Dr. Crystal | Aesthetic Clinic",
    "Harley Street-trained Dr. Crystal brings premium botox & fillers to Barbados. Fellowship-certified aesthetic excellence.",
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
      link: "/botox-london",
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
      icon: <Award className="h-8 w-8 text-purple-400" />,
      title: "Harley Street Certified",
      description: "Trained at London's most prestigious medical district"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      title: "International Standards",
      description: "World-class protocols and safety measures"
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-400" />,
      title: "Natural-Looking Results",
      description: "Subtle enhancements that enhance your natural beauty"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
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
            "@type": "MedicalClinic",
            "name": "Cosmedocs Barbados",
            "description": "Premier aesthetic clinic in Barbados with Dr. Crystal, Harley Street trained",
            "url": seoData.canonical,
            "telephone": contactInfo.phone,
            "email": contactInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rockley Main Road, Christ Church",
              "addressLocality": "Bridgetown",
              "addressRegion": "Christ Church",
              "postalCode": "BB15008",
              "addressCountry": "BB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.0969,
              "longitude": -59.5432
            },
            "priceRange": "$$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "65"
            },
            "physician": {
              "@type": "Person",
              "name": "Dr. Crystal",
              "jobTitle": "Aesthetic Medicine Specialist",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Harley Street Institute"
              }
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
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/cd1978ee-f577-4fe1-9c8f-427f09760900.png')`
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-4"
                >
                  <span className="inline-block bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                    Certified Cosmedocs Fellow | Barbados
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                  Cosmedocs
                  <span className="block text-purple-300">Barbados</span>
                  <span className="block text-sm mt-4 font-normal">with Dr. Crystal</span>
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
                    Caribbean's Premier Aesthetic Clinic
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

        {/* About Dr. Crystal */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Meet Dr. Crystal</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Dr. Crystal is a highly skilled aesthetic practitioner trained at the renowned Harley Street Institute in London. 
                  With a passion for natural results and patient-centered care, she brings the gold-standard of aesthetic training 
                  to the heart of Barbados.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Her approach embodies our philosophy of invisible art - creating natural, enhanced beauty that speaks volumes 
                  without saying a word. Dr. Crystal is known for her precision, artistic eye, and commitment to patient safety.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Fellowship training at Harley Street Institute, London</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Specializes in natural-looking aesthetic enhancements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Certified Cosmedocs Fellow with international standards</p>
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
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
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
                Discover our full range of aesthetic treatments with Barbados pricing
              </p>
            </motion.div>

            <Tabs defaultValue="botox" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-gray-800 rounded-2xl p-2 mb-8">
                <TabsTrigger value="botox" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Botox</span>
                </TabsTrigger>
                <TabsTrigger value="dermal-fillers" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Dermal Fillers</span>
                </TabsTrigger>
                <TabsTrigger value="skin-boosters" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Skin Boosters</span>
                </TabsTrigger>
                <TabsTrigger value="sweat-tox" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  <Droplets className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Sweat-Tox</span>
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
                          <p className="text-purple-300 font-bold">$300 - $450</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Frown Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Vertical lines between eyebrows</p>
                          <p className="text-purple-300 font-bold">$350 - $500</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Crow's Feet</h4>
                          <p className="text-gray-300 text-sm mb-3">Laugh lines around the eyes</p>
                          <p className="text-purple-300 font-bold">$300 - $450</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Bunny Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Lines on nose when smiling</p>
                          <p className="text-purple-300 font-bold">$200 - $300</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Jawline Slimming</h4>
                          <p className="text-gray-300 text-sm mb-3">Masseter muscle reduction</p>
                          <p className="text-purple-300 font-bold">$600 - $800</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Lip Flip</h4>
                          <p className="text-gray-300 text-sm mb-3">Subtle lip enhancement</p>
                          <p className="text-purple-300 font-bold">$200 - $300</p>
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
                          <p className="text-rose-300 font-bold">$500 - $750</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Cheek Fillers</h4>
                          <p className="text-gray-300 text-sm mb-3">Restore cheek volume</p>
                          <p className="text-rose-300 font-bold">$750 - $1,100</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Nasolabial Folds</h4>
                          <p className="text-gray-300 text-sm mb-3">Smooth smile lines</p>
                          <p className="text-rose-300 font-bold">$600 - $850</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Marionette Lines</h4>
                          <p className="text-gray-300 text-sm mb-3">Correct downturned mouth</p>
                          <p className="text-rose-300 font-bold">$600 - $850</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Tear Trough</h4>
                          <p className="text-gray-300 text-sm mb-3">Under-eye hollows</p>
                          <p className="text-rose-300 font-bold">$750 - $1,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Jawline Definition</h4>
                          <p className="text-gray-300 text-sm mb-3">Enhance jaw contour</p>
                          <p className="text-rose-300 font-bold">$850 - $1,250</p>
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
                          <p className="text-green-300 font-bold">$600 - $850</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Skinvive</h4>
                          <p className="text-gray-300 text-sm mb-3">Micro-droplet skin hydration</p>
                          <p className="text-green-300 font-bold">$500 - $750</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Mesotherapy</h4>
                          <p className="text-gray-300 text-sm mb-3">Skin rejuvenation treatment</p>
                          <p className="text-green-300 font-bold">$375 - $625</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Vampire Facial (PRP)</h4>
                          <p className="text-gray-300 text-sm mb-3">Platelet-rich plasma therapy</p>
                          <p className="text-green-300 font-bold">$450 - $700</p>
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
                          <p className="text-blue-300 font-bold">$850 - $1,125</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Palm Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Control excessive palm sweating</p>
                          <p className="text-blue-300 font-bold">$1,000 - $1,250</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Facial Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Reduce facial sweating</p>
                          <p className="text-blue-300 font-bold">$750 - $1,000</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Feet Hyperhidrosis</h4>
                          <p className="text-gray-300 text-sm mb-3">Control excessive foot sweating</p>
                          <p className="text-blue-300 font-bold">$1,125 - $1,375</p>
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
                          <p className="text-cyan-300 font-bold">$200 - $375</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Pigmentation Treatment</h4>
                          <p className="text-gray-300 text-sm mb-3">Melasma and dark spot removal</p>
                          <p className="text-cyan-300 font-bold">$300 - $500</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Hair Loss Treatment</h4>
                          <p className="text-gray-300 text-sm mb-3">PRP for hair restoration</p>
                          <p className="text-cyan-300 font-bold">$200 - $300</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Chemical Peels</h4>
                          <p className="text-gray-300 text-sm mb-3">Skin resurfacing treatments</p>
                          <p className="text-cyan-300 font-bold">$125 - $375</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Microneedling</h4>
                          <p className="text-gray-300 text-sm mb-3">Collagen induction therapy</p>
                          <p className="text-cyan-300 font-bold">$200 - $300</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Skin Tightening</h4>
                          <p className="text-gray-300 text-sm mb-3">Non-invasive skin firming</p>
                          <p className="text-cyan-300 font-bold">$375 - $625</p>
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
                          <p className="text-orange-300 font-bold">$50 - $75</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Underarms</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">$75 - $125</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Half Legs</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">$200 - $300</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Full Legs</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">$375 - $500</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Brazilian</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">$200 - $300</p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">Full Body</h4>
                          <p className="text-gray-300 text-sm mb-3">Per session</p>
                          <p className="text-orange-300 font-bold">$875 - $1,250</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Why Choose a Cosmedocs Fellow */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose a Cosmedocs Fellow?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
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
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300">
                    <div className="mb-4 flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
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
                Experience luxury aesthetic care in the heart of Barbados
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: "/src/assets/barbados-clinic-treatment.jpg", title: "Dr. Crystal performing treatment" },
                { image: "/src/assets/barbados-clinic-team.jpg", title: "Fellowship certification ceremony" },
                { image: "/lovable-uploads/d984fe9e-6d15-44d4-a96b-2620672e3fc7.png", title: "Treatment results" },
                { image: "/lovable-uploads/cd1978ee-f577-4fe1-9c8f-427f09760900.png", title: "Clinic environment" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-16 bg-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Easy Contact</h2>
              <p className="text-gray-300">Multiple ways to reach our Barbados clinic</p>
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
                Book your consultation with Dr. Crystal at Cosmedocs Barbados and discover the art of invisible enhancement.
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
          <h3>Best Aesthetic Clinic in Barbados - Cosmedocs Barbados</h3>
          <p>
            Cosmedocs Barbados, led by Dr. Crystal Hayes, offers premier aesthetic medicine services in the Caribbean. Our clinic specializes in advanced Botox treatments, dermal fillers, lip enhancements, and non-surgical facial rejuvenation procedures. Located in Christ Church, Barbados, we serve patients from across the Caribbean islands with world-class aesthetic treatments. Dr. Crystal brings extensive experience in aesthetic medicine with Fellowship training from the prestigious Harley Street Institute in London. Our treatments include lip fillers for natural enhancement, Botox treatments for anti-aging, skin boosters for hydration and quality improvement, PRP vampire facials for natural rejuvenation, laser hair removal with advanced technology, and chemical peels for skin resurfacing. We pride ourselves on delivering natural-looking results that enhance your inherent beauty rather than creating artificial appearances. Our invisible art philosophy ensures every treatment is subtle, sophisticated, and perfectly suited to your individual features. The clinic maintains the highest standards of safety and hygiene, using only premium products and advanced techniques learned from Harley Street protocols. We offer flexible consultation options including phone consultations, WhatsApp bookings, and in-person appointments. Our pricing is transparent and competitive for the Caribbean market, with treatments starting from $150 for specialized procedures. Book your consultation today to experience the Cosmedocs difference in Barbados's aesthetic medicine landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default BarbadosHome;