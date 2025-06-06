
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, Instagram, ExternalLink } from "lucide-react";
import { generateSEOMetadata } from "@/App";
import AISearchBar from "@/components/AISearchBar";

const NonSurgicalNoseJobBlog = () => {
  const seoData = generateSEOMetadata(
    "The Art of Non-Surgical Nose Jobs: 15+ Years of Innovation in London | Cosmedocs",
    "Discover the evolution of non-surgical rhinoplasty from ethnic Asian noses to modern techniques. Expert insights from 15+ years of pioneering nose reshaping treatments in London.",
    "/blog/non-surgical-nose-job-evolution"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Article metadata */}
        <meta property="article:published_time" content="2025-06-06T00:00:00Z" />
        <meta property="article:author" content="Dr. Ahmed Haq" />
        <meta property="article:section" content="Aesthetic Medicine" />
        <meta property="article:tag" content="Non-Surgical Nose Job" />
        <meta property="article:tag" content="Ethnic Rhinoplasty" />
        <meta property="article:tag" content="Dermal Fillers" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "The Art of Non-Surgical Nose Jobs: 15+ Years of Innovation in London",
            "description": "Discover the evolution of non-surgical rhinoplasty from ethnic Asian noses to modern techniques. Expert insights from 15+ years of pioneering nose reshaping treatments.",
            "image": "https://cosmedocs.com/default-og-image.jpg",
            "author": {
              "@type": "Person",
              "name": "Dr. Ahmed Haq",
              "url": "https://cosmedocs.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cosmedocs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cosmedocs.com/logo.png"
              }
            },
            "datePublished": "2025-06-06",
            "dateModified": "2025-06-06",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://cosmedocs.com/blog/non-surgical-nose-job-evolution"
            },
            "about": [
              {
                "@type": "MedicalProcedure",
                "name": "Non-Surgical Rhinoplasty",
                "description": "Non-invasive nose reshaping using dermal fillers"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>6th June 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Dr. Ahmed Haq</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  The Art of Non-Surgical Nose Jobs:
                  <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light italic mt-4">
                    15+ Years of Innovation
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                  From pioneering complex ethnic rhinoplasty to perfecting modern techniques, 
                  discover the evolution of non-surgical nose reshaping in London's Harley Street
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="prose prose-invert prose-xl max-w-none"
              >
                <div className="text-lg leading-relaxed space-y-6">
                  <p className="text-xl text-gray-300 font-light">
                    When we first began performing non-surgical nose jobs over 15 years ago, the landscape was vastly different. 
                    We were pioneers—the first to present this revolutionary technique at a UK conference, later taking our expertise international. 
                    What started as a niche procedure has evolved into one of the most sought-after aesthetic treatments in London.
                  </p>
                  
                  <p className="text-gray-300">
                    The irony isn't lost on us: back then, we tackled the most complex cases—ethnic Asian noses requiring extensive bridge elevation. 
                    These intricate procedures demanded precise layering techniques that we've since refined into an art form. 
                    Today's Caucasian nose treatments, whilst requiring equal expertise, follow different principles that we've mastered through years of experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ethnic Nose Expertise */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Mastering Ethnic Rhinoplasty: The Art of Layering
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-6">The Complexity of Asian Nose Enhancement</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Ethnic noses, particularly Asian noses from China, presented unique challenges that required us to develop 
                      innovative layering techniques. Unlike Caucasian noses that might need simple dorsal hump camouflaging, 
                      ethnic nose enhancement demands a sophisticated understanding of structural anatomy.
                    </p>
                    <p>
                      Our approach involves <strong>product-by-product layering</strong> in different anatomical planes to mimic 
                      both bone and soft tissue architecture. This meticulous technique allows us to create natural-looking 
                      elevation whilst maintaining ethnic characteristics and avoiding the dreaded "cookie-cutter" appearance.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-none">
                    <CardHeader>
                      <CardTitle className="text-xl">Ethnic Nose Considerations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-gray-300">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Asian Noses</h4>
                        <p className="text-sm">Bridge elevation, tip projection, nostril refinement</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">African Caribbean Noses</h4>
                        <p className="text-sm">Bridge definition, tip narrowing, profile enhancement</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Middle Eastern Noses</h4>
                        <p className="text-sm">Hump reduction, tip refinement, bridge straightening</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Selection Science */}
        <section className="py-20 bg-[#111]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                The Science of Product Selection
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent p-8 rounded-xl mb-12"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">Why Product Choice Matters</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Here's something many practitioners don't realise: using the wrong product—even from prestigious ranges 
                    like Juvéderm or Teosyal—can lead to complications. The most common error we see is bridge widening, 
                    which occurs when practitioners select inappropriate filler viscosity for specific anatomical layers.
                  </p>
                  <p className="bg-yellow-900/20 border-l-4 border-yellow-500 pl-4 py-2">
                    <strong>Critical Insight:</strong> The key isn't just choosing a "good" brand—it's selecting the precise 
                    product from within that range that matches the anatomical requirements of each nasal layer.
                  </p>
                </div>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Deep Layer (Periosteal)",
                    content: "High G-prime fillers for structural support and bridge elevation",
                    products: "Juvéderm Volux, Teosyal RHA 4"
                  },
                  {
                    title: "Mid Layer (Subcutaneous)",
                    content: "Medium viscosity for tip projection and profile smoothing",
                    products: "Juvéderm Volift, Teosyal RHA 3"
                  },
                  {
                    title: "Superficial Layer (Mid-dermis)",
                    content: "Fine needle technique for contouring and reflection lines",
                    products: "Juvéderm Volbella, Teosyal RHA 2"
                  }
                ].map((layer, index) => (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-accent border-none h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{layer.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">{layer.content}</p>
                        <p className="text-sm text-purple-400">{layer.products}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modern Caucasian Techniques */}
        <section className="py-20 bg-gradient-to-b from-[#111] to-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Modern Caucasian Nose Refinement
              </motion.h2>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-300"
                >
                  <p className="text-lg mb-6">
                    Today's Caucasian nose treatments represent the evolution of our technique. What once seemed "simple" 
                    compared to ethnic work actually requires masterful precision in different areas:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Dorsal Hump Camouflaging</h3>
                      <p className="mb-4">
                        Rather than removing tissue surgically, we strategically add volume above and below the hump, 
                        creating an optical illusion of straightness. This technique preserves nasal strength whilst 
                        achieving the desired profile.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Tip Lifting & Projection</h3>
                      <p className="mb-4">
                        Subtle tip enhancement can dramatically improve the nose's appearance. We use precise injection 
                        techniques to create the illusion of surgical tip refinement without the associated risks.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-accent p-8 rounded-xl"
                >
                  <h3 className="text-2xl font-semibold mb-6">The Art of Contouring</h3>
                  <p className="text-gray-300 mb-4">
                    The contouring aspect is particularly tricky and represents where artistry meets medicine. 
                    We work in the mid-dermis layer using ultra-fine needles to create the same effect—or better—than 
                    makeup contouring techniques.
                  </p>
                  <p className="text-gray-300">
                    <strong>The goal:</strong> Ensure the line of reflection runs straight down the nose, creating 
                    that coveted highlight that Instagram influencers achieve with makeup, but permanently and naturally.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Aging Nose Section */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                The Aging Nose: A Hidden Beauty Concern
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <p className="text-xl text-gray-300 mb-8">
                  Here's something most people don't realise: <strong>noses age too.</strong> 
                  And we absolutely love treating the aging nose—it's one of our favourite transformations.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-6">How Noses Age</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-white">Tip Drooping</h4>
                      <p>Gravity and tissue laxity cause the nasal tip to drop, creating a "hooked" appearance</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-white">Prominent Dorsal Humps</h4>
                      <p>Previously subtle bumps become more pronounced as surrounding tissues lose volume</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-white">Nostril Changes</h4>
                      <p>Nostrils may appear larger or more prominent due to tip ptosis</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-none">
                    <CardHeader>
                      <CardTitle className="text-xl">Our Aging Nose Solutions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-gray-300">
                      <p>
                        Through strategic volumisation and support, we can turn back the clock on nasal aging:
                      </p>
                      <ul className="space-y-2">
                        <li>• Tip re-elevation and projection</li>
                        <li>• Bridge smoothing and straightening</li>
                        <li>• Nostril refinement</li>
                        <li>• Profile restoration</li>
                        <li>• Overall proportion rebalancing</li>
                      </ul>
                      <p className="text-sm text-purple-400 mt-4">
                        Results that look natural and age-appropriate
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Sharing Our Expertise
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent p-8 rounded-xl mb-8"
              >
                <p className="text-xl text-gray-300 mb-6">
                  After 15+ years of pioneering non-surgical rhinoplasty techniques, we're passionate about 
                  sharing our knowledge with the next generation of medical professionals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 inline-flex items-center gap-2 text-lg font-medium transition-colors"
                  >
                    Professional Training at Harley Street Institute
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                
                <p className="text-gray-400 mt-4">
                  Learn advanced techniques, product selection, and safety protocols from industry pioneers
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment CTA */}
        <section className="py-20 bg-[#111]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Experience 15+ Years of Expertise
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                From complex ethnic cases to aging nose rejuvenation, discover why we're London's 
                trusted experts in non-surgical rhinoplasty.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a 
                  href="/non-surgical-nose-job" 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 inline-flex items-center gap-2 text-lg font-medium transition-colors"
                >
                  View Treatment Details & Pricing
                  <ArrowRight className="h-5 w-5" />
                </a>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <Instagram className="h-5 w-5" />
                  <a 
                    href="https://instagram.com/cosmedocs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @cosmedocs - See our latest results
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Search Bar Section */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Have Questions About Non-Surgical Nose Jobs?
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <AISearchBar />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <p>
            Non-surgical nose job London blog by Dr. Ahmed Haq at Cosmedocs. 15+ years experience non-surgical rhinoplasty ethnic Asian Chinese noses Caucasian dorsal hump aging nose treatment. Expert dermal filler selection Juvederm Teosyal product layering technique bridge elevation tip lifting contouring. Conference presenter international trainer ethnic nose deformities African Caribbean Middle Eastern rhinoplasty. Product selection science avoiding complications bridge widening. Aging nose treatment tip drooping prominent humps nostril changes volume loss. Professional training Harley Street Institute medical aesthetic education. London Harley Street W1G 9PF non-surgical nose reshaping liquid rhinoplasty nose filler enhancement. Book consultation £450 treatment pricing ethnic rhinoplasty specialist aging nose rejuvenation. Follow @cosmedocs Instagram results nose transformation before after gallery. Advanced injection techniques mid dermis fine needle contouring reflection lines straight profile. 10 Harley Street London aesthetic medicine boutique clinic Dr Ahmed Haq expertise.
          </p>
        </div>
      </div>
    </>
  );
};

export default NonSurgicalNoseJobBlog;
