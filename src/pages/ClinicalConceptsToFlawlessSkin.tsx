import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Star, Users, Award } from 'lucide-react';

const ClinicalConceptsToFlawlessSkin = () => {
  const seoData = generateSEOMetadata(
    "Clinical Concepts to Flawless Skin | Cosmedocs",
    "Unlock flawless skin with Cosmedocs' clinical approach. Expert treatments targeting skin health, rejuvenation, and lasting radiance. Book your consultation today.",
    "/clinical-concepts-to-flawless-skin"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Clinical Concepts to Flawless Skin",
    "description": "Expert treatments targeting skin health, rejuvenation, and lasting radiance",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    }
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Clinical Concepts to <span className="text-purple-600">Flawless Skin</span>
                  </h1>
                  <p className="text-xl text-gray-600">
                    Unlock radiant, healthy skin with our expert clinical treatments. 
                    Personalized solutions for lasting beauty and rejuvenation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Book Consultation
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">1M+</div>
                    <div className="text-sm text-gray-600">Injections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">17+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">Harley</div>
                    <div className="text-sm text-gray-600">Street Clinic</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/lovable-uploads/599a995b-159c-485d-a999-4145a961951f.png"
                  alt="Woman receiving clinical skin treatment"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Clinical Skin Care */}
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What is Clinical Skin Care?</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>
                  Clinical skin care goes beyond surface-level treatments, focusing on scientifically-backed methods to improve skin health at a cellular level. It involves a thorough assessment of your skin's unique needs, followed by targeted treatments and personalized home care routines.
                </p>
                <p>
                  At Cosmedocs, our clinical approach combines advanced technologies, pharmaceutical-grade ingredients, and expert knowledge to address a wide range of skin concerns, from aging and acne to pigmentation and sensitivity. We prioritize long-term results and overall skin wellness.
                </p>
                <p>
                  Our experienced practitioners stay up-to-date with the latest research and innovations in dermatology to provide you with the most effective and evidence-based skin care solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gray-50">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Clinical Approach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Lasting Results",
                  description: "Addresses the root causes of skin concerns for long-term improvement"
                },
                {
                  icon: Clock,
                  title: "Personalized Care",
                  description: "Tailored treatments and home care routines based on your unique skin needs"
                },
                {
                  icon: CheckCircle,
                  title: "Expert Guidance",
                  description: "Performed by experienced practitioners with in-depth knowledge of skin health"
                },
                {
                  icon: Star,
                  title: "Advanced Technologies",
                  description: "Utilizes cutting-edge technologies and pharmaceutical-grade ingredients"
                },
                {
                  icon: Users,
                  title: "Comprehensive Solutions",
                  description: "Addresses a wide range of skin concerns, from aging to acne"
                },
                {
                  icon: Award,
                  title: "Scientifically Backed",
                  description: "Based on evidence-based research and proven clinical results"
                }
              ].map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Treatment Process</h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">In-Depth Skin Analysis</h3>
                    <p className="text-gray-600 mb-4">
                      We begin with a thorough assessment of your skin using advanced diagnostic tools and visual examination. This allows us to identify underlying issues and create a customized treatment plan.
                    </p>
                    <p className="text-gray-600">
                      Our skin analysis includes evaluating skin type, hydration levels, pore size, pigmentation, and signs of aging. We also discuss your skin care goals and concerns to ensure we address your specific needs.
                    </p>
                  </div>
                  <div>
                    <img
                      src="/lovable-uploads/4e99956b-395a-4499-910f-59a92218f241.png"
                      alt="In-depth skin analysis with advanced tools"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <h3 className="text-2xl font-bold mb-4">Personalized Treatment Plan</h3>
                    <p className="text-gray-600 mb-4">
                      Based on your skin analysis, we develop a personalized treatment plan that combines in-clinic procedures with a tailored home care routine. Our treatment plans are designed to deliver optimal results while minimizing downtime.
                    </p>
                    <p className="text-gray-600">
                      We use a combination of advanced technologies, such as laser therapy, chemical peels, and microdermabrasion, along with pharmaceutical-grade ingredients to target your specific skin concerns.
                    </p>
                  </div>
                  <div className="md:order-1">
                    <img
                      src="/lovable-uploads/69999999-e999-4999-9999-999999999999.png"
                      alt="Personalized treatment plan for optimal results"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-16 bg-gray-50">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Conditions We Treat</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Primary Conditions</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Acne and breakouts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Aging and wrinkles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Pigmentation and sun damage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Rosacea and redness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Sensitive skin and irritation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Secondary Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Improved skin texture and tone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Reduced pore size</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Increased skin hydration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enhanced skin radiance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Healthier, more youthful-looking skin</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Treatment Pricing</h2>
              <Card className="border-2 border-purple-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Clinical Skin Care Consultation</CardTitle>
                  <CardDescription>Personalized assessment and treatment plan</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-4">£150</div>
                  <p className="text-gray-600 mb-6">
                    Comprehensive skin analysis and customized treatment plan 
                    to address your specific skin concerns.
                  </p>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full">
                    Book Your Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-16 bg-gray-50">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cosmedocs for Clinical Skin Care?</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>
                  At Cosmedocs, we believe that healthy skin is the foundation of true beauty. Our clinical approach combines advanced technologies, pharmaceutical-grade ingredients, and expert knowledge to deliver lasting results.
                </p>
                <p>
                  With over 17 years of experience and a commitment to ongoing education, our team of medical professionals provides personalized care that addresses your unique skin needs. We prioritize your safety and satisfaction, ensuring you receive the highest quality skin care solutions.
                </p>
                <p>
                  Located in the prestigious Harley Street medical district, our clinic offers a comfortable and professional environment where you can relax and rejuvenate your skin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}>
          <h3>Comprehensive Clinical Skin Care Information</h3>
          <p>
            Clinical skin care London specialists at Cosmedocs provide advanced treatments for acne, aging, pigmentation, and rosacea. Our Harley Street clinic offers expert skin analysis, personalized treatment plans, and pharmaceutical-grade products. Professional skin care services for lasting radiance and rejuvenation.
          </p>
          <p>
            Advanced skin care treatments using laser therapy, chemical peels, and microdermabrasion. Our experienced practitioners deliver optimal results with minimal downtime. Clinical skin care consultations available for customized treatment plans.
          </p>
          <p>
            Expert skin care solutions for improving skin texture, tone, and hydration. Our clinic specializes in treating sensitive skin, reducing pore size, and enhancing overall skin health. Professional skin care services for a more youthful-looking complexion.
          </p>
          <p>
            Harley Street skin care clinic offering comprehensive treatments for various skin conditions. Our medical professionals combine expertise with compassionate care to deliver optimal treatment outcomes. Clinical skin care for long-term skin wellness and beauty.
          </p>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="page-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Unlock Flawless Skin?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step toward radiant, healthy skin with our expert clinical treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Call 0333 0551 503
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClinicalConceptsToFlawlessSkin;
