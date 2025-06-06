
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '../utils/seo';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PopularTreatments from '@/components/PopularTreatments';

const seoMetadata = generateSEOMetadata(
  "PDO Threads Treatment | Advanced Thread Lift Procedures | Cosmedocs",
  "Professional PDO thread treatments at Cosmedocs. Small threads for collagen stimulation and large hook threads for face lifting. Expert client selection ensures optimal results with minimal downtime.",
  "/pdo-threads"
);

const PDOThreads = () => {
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

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="page-container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PDO Thread Treatments
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Advanced thread lift procedures combining science with artistry for natural facial rejuvenation
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-purple-400">
              <span>Bold • Natural • Always Your Way</span>
            </div>
          </motion.div>
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
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Small PDO Threads</CardTitle>
                  <p className="text-gray-600">Collagen Stimulation & Skin Tightening</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Treatment Concept:</h4>
                  <p className="text-gray-700 mb-4">
                    Small PDO threads are inserted into the skin using a technique similar to acupuncture. These threads work continuously for 4-5 months as the body naturally dissolves the suture material.
                  </p>
                  
                  <h4 className="font-semibold mb-3">How It Works:</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Creates controlled mild inflammation in targeted areas</li>
                    <li>Stimulates natural collagen production</li>
                    <li>Promotes skin tightening and lipolysis</li>
                    <li>Evidence of collagen formation is noticeable years later</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3">Ideal Candidates:</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Patients from early 20s onwards</li>
                    <li>Those seeking natural collagen stimulation</li>
                    <li>Individuals wanting jawline tightening</li>
                    <li>Preventative anti-aging approach</li>
                  </ul>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
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
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Large PDO Threads with Hooks</CardTitle>
                  <p className="text-gray-600">Advanced Facial Lifting</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Treatment Concept:</h4>
                  <p className="text-gray-700 mb-4">
                    Large PDO threads with laser-engraved hooks represent a completely different medical procedure. These threads physically lift and reposition facial tissues, similar to surgical facelift principles.
                  </p>
                  
                  <h4 className="font-semibold mb-3">Advanced Technology:</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Longer, thicker thread construction</li>
                    <li>Precision laser-engraved hooks</li>
                    <li>Mechanical lifting and repositioning</li>
                    <li>Combined with dermal filler therapy</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3">Ideal Candidates:</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Advanced facial aging concerns</li>
                    <li>Significant skin sagging</li>
                    <li>Patients seeking dramatic improvement</li>
                    <li>Those wanting non-surgical facelift alternative</li>
                  </ul>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
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
        <h2>PDO Thread Lift Treatment London</h2>
        <p>
          Professional PDO thread treatments at Cosmedocs London combine advanced thread lift technology with expert client selection to deliver natural facial rejuvenation. Our small PDO threads provide collagen stimulation and skin tightening through controlled inflammation, working continuously for months to improve skin texture and jawline definition. Large PDO threads with precision hooks offer advanced lifting capabilities for patients with significant facial aging, always combined with dermal filler therapy for optimal volumization. Our CQC-registered partnership with PrivaDr ensures the highest clinical standards in sterile clean room environments. Thread lift procedures require careful client assessment to avoid overselling and ensure satisfactory outcomes. PDO thread treatments work through biocompatible suture material that stimulates natural collagen production while providing mechanical lifting where needed. The key to successful thread lift results lies in proper client selection, understanding that threads are sophisticated tools requiring expert application rather than universal solutions. Small threads suit younger patients seeking preventative treatments and natural collagen boosting, while large hook threads address advanced aging concerns through mechanical tissue repositioning. Our invisible art philosophy ensures PDO thread results appear natural and harmonious, never exaggerated or obvious. Thread lift consultations focus on realistic expectations and appropriate treatment selection based on individual facial anatomy and aging patterns. CQC registration requirements for PDO procedures ensure patient safety through regulated clinical environments and professional oversight. The combination of PDO threads with dermal fillers mimics surgical facelift principles by addressing both tissue laxity and volume loss simultaneously.
        </p>
      </div>

      <PopularTreatments />
    </>
  );
};

export default PDOThreads;
