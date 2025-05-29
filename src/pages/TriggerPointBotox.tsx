
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '../App';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Star, Users, Award } from 'lucide-react';

const TriggerPointBotox = () => {
  const seoData = generateSEOMetadata(
    "Trigger Point Botox London - £450 | Muscle Tension Relief | Cosmedocs",
    "Expert trigger point botox injections in London from £450. Relieve chronic muscle tension, pain, and trigger points with precision botox treatments at Cosmedocs Harley Street.",
    "/trigger-point-botox"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Trigger Point Botox Treatment",
    "description": "Professional trigger point botox injections for muscle tension relief and chronic pain management",
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
    },
    "offers": {
      "@type": "Offer",
      "price": "450",
      "priceCurrency": "GBP"
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
                    Trigger Point <span className="text-purple-600">Botox</span> London
                  </h1>
                  <p className="text-xl text-gray-600">
                    Expert trigger point botox injections for chronic muscle tension relief. 
                    From £450 at our Harley Street clinic - where precision meets comfort.
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
                    <div className="text-2xl font-bold text-purple-600">£450</div>
                    <div className="text-sm text-gray-600">Starting Price</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/lovable-uploads/7ba1fc3d-e561-4be8-96e1-9cf513c26f33.png" 
                  alt="Trigger point botox injection marking on shoulder"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Trigger Point Botox */}
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What is Trigger Point Botox?</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>
                  Trigger point botox is a specialized medical treatment that uses botulinum toxin injections to relieve chronic muscle tension, spasms, and pain. Unlike cosmetic botox applications, trigger point botox specifically targets hyperirritable spots in skeletal muscle known as trigger points, which are associated with palpable nodules in taut bands of muscle fibers.
                </p>
                <p>
                  These trigger points can cause significant discomfort, referred pain, and limited range of motion. Our expert practitioners at Cosmedocs use precise injection techniques to deliver botulinum toxin directly into these problematic areas, effectively relaxing the muscle and providing long-lasting relief from chronic pain conditions.
                </p>
                <p>
                  The treatment is particularly effective for conditions such as chronic neck pain, shoulder tension, tension headaches, myofascial pain syndrome, and various musculoskeletal disorders that haven't responded well to conventional treatments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gray-50">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Trigger Point Botox</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Long-lasting Relief",
                  description: "Provides 3-6 months of sustained muscle tension relief and pain reduction"
                },
                {
                  icon: Clock,
                  title: "Quick Procedure",
                  description: "Treatment typically takes 15-30 minutes with minimal downtime required"
                },
                {
                  icon: CheckCircle,
                  title: "Targeted Treatment",
                  description: "Precisely targets specific trigger points for maximum therapeutic benefit"
                },
                {
                  icon: Star,
                  title: "Non-surgical",
                  description: "Minimally invasive alternative to surgical interventions for chronic pain"
                },
                {
                  icon: Users,
                  title: "Expert Care",
                  description: "Performed by experienced medical professionals in clinical settings"
                },
                {
                  icon: Award,
                  title: "Proven Results",
                  description: "Clinically proven treatment with high patient satisfaction rates"
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
              <h2 className="text-3xl font-bold text-center mb-12">Treatment Process</h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Initial Consultation & Assessment</h3>
                    <p className="text-gray-600 mb-4">
                      Our comprehensive consultation begins with a detailed medical history and physical examination. We identify specific trigger points causing your discomfort through palpation and movement assessment. This thorough evaluation ensures we target the correct areas for optimal treatment outcomes.
                    </p>
                    <p className="text-gray-600">
                      During this phase, we also discuss your pain patterns, previous treatments tried, and establish realistic expectations for your trigger point botox therapy. Our medical team will explain the procedure in detail and address any concerns you may have.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/91daaa52-6dff-448b-b375-8ce52b2d0f41.png" 
                      alt="Medical consultation and trigger point assessment"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <h3 className="text-2xl font-bold mb-4">Precision Injection Technique</h3>
                    <p className="text-gray-600 mb-4">
                      Using advanced injection techniques, our practitioners deliver botulinum toxin directly into identified trigger points. The procedure involves multiple small injections using fine needles to ensure precise placement and minimize discomfort. Each injection site is carefully mapped to maximize therapeutic benefit.
                    </p>
                    <p className="text-gray-600">
                      The entire injection process typically takes 15-30 minutes, depending on the number of trigger points being treated. Local anesthetic may be used to enhance comfort during the procedure, though most patients find the injections well-tolerated.
                    </p>
                  </div>
                  <div className="md:order-1">
                    <img 
                      src="/lovable-uploads/cda46474-143e-4d79-ab59-9a967c212d0e.png" 
                      alt="Precise trigger point botox injection procedure"
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
                      <span>Chronic neck and shoulder tension</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Myofascial pain syndrome</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Tension-type headaches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Chronic lower back pain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Fibromyalgia-related muscle pain</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Secondary Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Improved range of motion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enhanced sleep quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Reduced dependency on pain medications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Better overall quality of life</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Increased daily activity tolerance</span>
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
                  <CardTitle className="text-2xl">Trigger Point Botox</CardTitle>
                  <CardDescription>Professional muscle tension relief treatment</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-4">£450</div>
                  <p className="text-gray-600 mb-6">
                    Starting price for trigger point botox treatment including consultation, 
                    assessment, and precision injection therapy.
                  </p>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full">
                    Book Your Treatment
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
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cosmedocs for Trigger Point Botox?</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>
                  At Cosmedocs, our aesthetics is invisible art - Bold, Natural, Always Your Way. This philosophy extends to our trigger point botox treatments, where we focus on providing genuine relief while maintaining your natural movement and function. Our approach is minimal, quiet, and transformative without being obvious.
                </p>
                <p>
                  With over 17 years of experience and more than 1 million injections performed, our team of medical professionals brings unparalleled expertise to trigger point botox therapy. Located in the prestigious Harley Street medical district, our clinic combines cutting-edge techniques with a comfortable, professional environment.
                </p>
                <p>
                  We understand that chronic pain affects every aspect of your life. Our comprehensive approach addresses not just the immediate symptoms but works toward long-term improvement in your quality of life. Each treatment plan is tailored to your specific needs, ensuring optimal outcomes and patient satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}>
          <h3>Comprehensive Trigger Point Botox Information</h3>
          <p>
            Trigger point botox London specialists at Cosmedocs provide advanced muscle tension relief using botulinum toxin injections. Our Harley Street clinic offers expert trigger point therapy for chronic pain management, myofascial pain syndrome, and muscular tension disorders. Professional botox injections for trigger points provide long-lasting relief from chronic muscle spasms and tension headaches.
          </p>
          <p>
            Botulinum toxin trigger point injections represent a revolutionary approach to treating chronic musculoskeletal pain conditions. Our experienced medical practitioners use precision injection techniques to target hyperirritable muscle fibers, providing sustained relief from chronic pain syndromes. Trigger point botox treatment costs from £450 at our London clinic, representing excellent value for professional medical care.
          </p>
          <p>
            Muscle tension relief through trigger point botox offers a non-surgical alternative to traditional pain management approaches. Our clinic specializes in treating fibromyalgia, chronic neck pain, shoulder tension, and tension-type headaches using advanced botulinum toxin therapy. Professional trigger point injections provide 3-6 months of sustained pain relief with minimal side effects.
          </p>
          <p>
            Chronic pain management through trigger point botox therapy has shown excellent clinical results for patients suffering from myofascial pain syndromes. Our Harley Street practitioners combine medical expertise with compassionate care to deliver optimal treatment outcomes. Botox trigger point therapy reduces muscle spasticity and improves range of motion effectively.
          </p>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="page-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Relief?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step toward freedom from chronic muscle tension and pain.
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

export default TriggerPointBotox;
