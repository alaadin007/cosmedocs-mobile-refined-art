
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '../utils/seo';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PopularTreatments from '@/components/PopularTreatments';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';

const seoMetadata = generateSEOMetadata(
  "PDO Threads Treatment | Advanced Thread Lift Procedures | Cosmedocs",
  "Professional PDO thread treatments at Cosmedocs. Small threads for collagen stimulation and large hook threads for face lifting. Expert client selection ensures optimal results with minimal downtime.",
  "/pdo-threads"
);

const PDOThreads = () => {
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/95608275-de36-4458-901d-2cc2ce2136de.png",
      alt: "PDO thread face lift before and after - frontal view",
      caption: (
        <div>
          <h3 className="font-semibold text-white mb-2">PDO Thread Face Lift Transformation</h3>
          <p className="text-gray-200">
            Our aesthetics is invisible art. This client wanted natural facial rejuvenation without surgery. 
            Using our expertise in PDO thread placement, we achieved remarkable lifting and tightening results 
            that enhance her natural beauty - Bold • Natural • Always Your Way.
          </p>
        </div>
      )
    },
    {
      src: "/lovable-uploads/d7bad7e3-fa9f-4357-8e4c-04ed2a494412.png",
      alt: "PDO thread lift before and after - profile view",
      caption: (
        <div>
          <h3 className="font-semibold text-white mb-2">Profile View: PDO Thread Lift Results</h3>
          <p className="text-gray-200">
            The profile view clearly demonstrates the lifting effect achieved with PDO threads. 
            Notice the improved jawline definition and skin tightening - transformation that speaks without saying a word.
          </p>
        </div>
      )
    },
    {
      src: "/lovable-uploads/a68c4e3e-0a7d-4212-abc8-673c19fd171c.png",
      alt: "PDO Thread Face Lift Transformation - detailed view",
      caption: (
        <div>
          <h3 className="font-semibold text-white mb-2">Advanced PDO Thread Technology</h3>
          <p className="text-gray-200">
            Combining our expertise in thread placement with proper client selection, we achieve results 
            that are quiet, not loud. Invisible, not exaggerated. Natural enhancement at its finest.
          </p>
        </div>
      )
    },
    {
      src: "/lovable-uploads/ad3ed35a-79fc-42cf-92d9-5d99a09f667a.png",
      alt: "PDO Thread Lift: Before and After Comparison",
      caption: (
        <div>
          <h3 className="font-semibold text-white mb-2">Complete Facial Rejuvenation</h3>
          <p className="text-gray-200">
            This comprehensive before and after comparison shows the remarkable results possible with 
            expert PDO thread application. Final results develop over a few weeks as swelling settles.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoMetadata.title}</title>
        <meta name="description" content={seoMetadata.description} />
        <link rel="canonical" href={seoMetadata.canonical} />
        <meta property="og:title" content={seoMetadata.title} />
        <meta property="og:description" content={seoMetadata.description} />
        <meta property="og:url" content={seoMetadata.canonical} />
        <meta property="og:image" content={seoMetadata.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "PDO Thread Lift Treatment",
            "description": "Advanced PDO thread procedures for facial rejuvenation and skin tightening",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "Cosmedocs",
              "url": "https://www.cosmedocs.com"
            },
            "procedureType": "Non-surgical facial rejuvenation",
            "bodyLocation": "Face and jawline",
            "preparation": "Consultation and client assessment required"
          })}
        </script>
      </Helmet>

      {/* Hero Section - Updated to match LipFillers design */}
      <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                Expert PDO
                <span className="block text-purple-300">Thread Lift</span>
                <span className="block text-sm mt-4">Advanced thread procedures for natural facial rejuvenation</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-xl">
                <span className="text-purple-300 font-semibold">Invisible Art</span>
                <br />
                Transformation that speaks without saying a word
              </p>
              <div className="mb-8">
                <p className="text-2xl text-purple-300 font-bold">Starting from £550</p>
                <p className="text-sm text-gray-300">Expert thread placement • CQC Registered • Natural lifting results</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                  Book Consultation
                </Button>
                <BeforeAfterImageViewer 
                  images={beforeAfterImages}
                  triggerLabel="View Results"
                  title="PDO Thread Lift Results"
                  description="Real client transformations with our expert PDO thread treatments"
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm border-2"
                />
              </div>
            </motion.div>
            
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">Understanding PDO Thread Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                PDO (Polydioxanone) threads represent one of the most sophisticated non-surgical facial rejuvenation treatments available today. Unfortunately, this fascinating procedure is often misunderstood by both the public and some medical professionals who view threads merely as a tool rather than understanding the complete treatment philosophy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Cosmedocs, we believe in invisible art - transformation that speaks without saying a word. Our approach to PDO threads embodies this philosophy, creating subtle yet remarkable improvements that enhance your natural beauty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Real PDO Thread Results</h2>
            <p className="text-lg text-gray-600 mb-8">
              Performed in London - Final results develop over a few weeks as swelling settles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {beforeAfterImages.slice(0, 2).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <BeforeAfterImageViewer 
              images={beforeAfterImages}
              triggerLabel="View All Before & After Images"
              title="PDO Thread Lift Case Study"
              description="Complete transformation journey with our expert PDO thread treatments"
              className="text-purple-600 hover:text-purple-500 text-lg font-semibold"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">PDO Thread Lift Cost</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for professional PDO thread treatments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* PDO Face & Neck Thread Lifts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">PDO Face & Neck Thread Lifts</CardTitle>
                  <p className="text-gray-600">Advanced lifting with hook threads</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium">Full Face Thread Lift</span>
                      <span className="text-lg font-bold text-purple-600">£3,500</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Includes:</strong> Comprehensive facial lifting using large PDO threads with hooks, 
                      combined with dermal filler therapy for optimal results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Small PDO Threads */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Small PDO Threads</CardTitle>
                  <p className="text-gray-600">Collagen stimulation & skin tightening</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Lower Facial Slimming</span>
                      <span className="text-lg font-bold text-purple-600">£650</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Jawline Definition (mild jowling)</span>
                      <span className="text-lg font-bold text-purple-600">£650-£950</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Chin Lift / Tightening</span>
                      <span className="text-lg font-bold text-purple-600">£500-£750</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Tear Trough / Under Eye</span>
                      <span className="text-lg font-bold text-purple-600">£400</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Eyebrow Thread Lift (lateral)</span>
                      <span className="text-lg font-bold text-purple-600">£600</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Tear Trough & Eye Brow Lift</span>
                      <span className="text-lg font-bold text-purple-600">£900</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Perfect for:</strong> Preventative care, natural collagen boosting, 
                      and subtle skin tightening from early 20s onwards.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Important Pricing Notes</h3>
                <ul className="text-left text-blue-900 space-y-2">
                  <li>• All treatments performed in CQC-registered clinical environments</li>
                  <li>• Comprehensive consultation included to ensure appropriate treatment selection</li>
                  <li>• Large thread treatments always combined with dermal fillers</li>
                  <li>• Final pricing confirmed during detailed assessment</li>
                  <li>• Results develop over several weeks as swelling settles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Two Types of PDO Threads */}
      <section className="py-16 bg-gray-50">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Two Distinct PDO Thread Treatments</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Small Threads */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Small PDO Threads</CardTitle>
                  <p className="text-gray-300">Collagen Stimulation & Skin Tightening</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-white">Treatment Concept:</h4>
                  <p className="text-gray-300 mb-4">
                    Small PDO threads are inserted into the skin using a technique similar to acupuncture. These threads work continuously for 4-5 months as the body naturally dissolves the suture material.
                  </p>
                  
                  <h4 className="font-semibold mb-3 text-white">How It Works:</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Creates controlled mild inflammation in targeted areas</li>
                    <li>Stimulates natural collagen production</li>
                    <li>Promotes skin tightening and lipolysis</li>
                    <li>Evidence of collagen formation is noticeable years later</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 text-white">Ideal Candidates:</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Patients from early 20s onwards</li>
                    <li>Those seeking natural collagen stimulation</li>
                    <li>Individuals wanting jawline tightening</li>
                    <li>Preventative anti-aging approach</li>
                  </ul>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Treatment Duration:</strong> Quick procedure, minimal downtime<br/>
                      <strong>Results:</strong> Gradual improvement over 4-5 months
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Large Threads with Hooks */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Large PDO Threads with Hooks</CardTitle>
                  <p className="text-gray-300">Advanced Facial Lifting</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-white">Treatment Concept:</h4>
                  <p className="text-gray-300 mb-4">
                    Large PDO threads with laser-engraved hooks represent a completely different medical procedure. These threads physically lift and reposition facial tissues, similar to surgical facelift principles.
                  </p>
                  
                  <h4 className="font-semibold mb-3 text-white">Advanced Technology:</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Longer, thicker thread construction</li>
                    <li>Precision laser-engraved hooks</li>
                    <li>Mechanical lifting and repositioning</li>
                    <li>Combined with dermal filler therapy</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 text-white">Ideal Candidates:</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Advanced facial aging concerns</li>
                    <li>Significant skin sagging</li>
                    <li>Patients seeking dramatic improvement</li>
                    <li>Those wanting non-surgical facelift alternative</li>
                  </ul>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Treatment Approach:</strong> Always combined with dermal fillers<br/>
                      <strong>Results:</strong> Immediate lifting with continued improvement
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Selection Importance */}
      <section className="py-16 bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">The Critical Importance of Proper Client Selection</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-700">Correct Client Selection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800">
                      When the right clients are selected for appropriate PDO thread treatments, results are consistently fantastic and amazing, leading to very happy clients who achieve their aesthetic goals.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-700">Incorrect Client Selection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800">
                      When wrong clients are selected or when threads are oversold as a universal solution, procedure outcomes become unsatisfactory, leading to disappointed patients and unrealistic expectations.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                This is why our consultation process is so thorough - we ensure that PDO threads are the right treatment for your specific concerns and aesthetic goals. Our expertise lies not just in performing the procedure, but in knowing when <em>not</em> to recommend it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CQC Registration & PrivaDr Partnership */}
      <section className="py-16 bg-gray-50">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">Regulatory Compliance & Clinical Excellence</h2>
              
              <Card className="bg-blue-50 border-blue-200 mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">CQC Registration Requirement</h3>
                  <p className="text-blue-900 mb-4">
                    PDO thread procedures require clinic premises to be CQC (Care Quality Commission) registered, ensuring the highest standards of safety, cleanliness, and clinical governance.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Partnership with PrivaDr</h3>
                  <p className="text-blue-900">
                    To ensure we meet these stringent requirements, we have partnered with PrivaDr to undertake PDO thread procedures in fully compliant clinical clean rooms with complete regulatory oversight and maintained standards.
                  </p>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">What This Means for You:</h3>
                <ul className="text-left max-w-2xl mx-auto space-y-2 text-gray-700">
                  <li>✓ Fully CQC-compliant treatment environment</li>
                  <li>✓ Sterile clinical clean room procedures</li>
                  <li>✓ Complete regulatory compliance</li>
                  <li>✓ Enhanced safety protocols</li>
                  <li>✓ Professional medical oversight</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Philosophy */}
      <section className="py-16 bg-black text-white">
        <div className="page-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Aesthetic Philosophy</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              "Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. Invisible, not exaggerated. 
              It's transformation that speaks — without saying a word."
            </p>
            <p className="text-lg text-gray-400 mb-8">
              PDO threads, when properly applied with expert client selection, embody this philosophy perfectly - 
              creating natural enhancement that looks like you, only better.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/contact">Book Your Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>PDO Thread Lift Treatment London Before After Results Pricing</h2>
        <p>
          Professional PDO thread treatments at Cosmedocs London combine advanced thread lift technology with expert client selection to deliver natural facial rejuvenation. Our small PDO threads provide collagen stimulation and skin tightening through controlled inflammation, working continuously for months to improve skin texture and jawline definition. Large PDO threads with precision hooks offer advanced lifting capabilities for patients with significant facial aging, always combined with dermal filler therapy for optimal volumization. Our CQC-registered partnership with PrivaDr ensures the highest clinical standards in sterile clean room environments. Thread lift procedures require careful client assessment to avoid overselling and ensure satisfactory outcomes. PDO thread treatments work through biocompatible suture material that stimulates natural collagen production while providing mechanical lifting where needed. The key to successful thread lift results lies in proper client selection, understanding that threads are sophisticated tools requiring expert application rather than universal solutions. Small threads suit younger patients seeking preventative treatments and natural collagen boosting, while large hook threads address advanced aging concerns through mechanical tissue repositioning. Our invisible art philosophy ensures PDO thread results appear natural and harmonious, never exaggerated or obvious. Thread lift consultations focus on realistic expectations and appropriate treatment selection based on individual facial anatomy and aging patterns. CQC registration requirements for PDO procedures ensure patient safety through regulated clinical environments and professional oversight. The combination of PDO threads with dermal fillers mimics surgical facelift principles by addressing both tissue laxity and volume loss simultaneously. PDO thread lift cost includes full face thread lift £3500, lower facial slimming £650, jawline definition £650-£950, chin lift tightening £500-£750, tear trough under eye £400, eyebrow thread lift £600, combined tear trough eyebrow lift £900. Before after results show remarkable transformation performed in London with final results developing over few weeks as swelling settles.
        </p>
      </div>

      <PopularTreatments />
    </>
  );
};

export default PDOThreads;
