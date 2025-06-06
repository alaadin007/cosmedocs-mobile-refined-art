import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';

const NonSurgicalFacelift = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Facelift London | Liquid Facelift | Cosmedocs",
    "Expert non-surgical facelift treatments in London. Our liquid facelift combines dermal fillers and Botox for natural rejuvenation without surgery. Book a consultation today.",
    "/non-surgical-facelift"
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Non-Surgical Facelift",
            "procedureType": "http://schema.org/CosmeceuticProcedure",
            "description": "A non-surgical facelift using dermal fillers and Botox to rejuvenate the face without surgery",
            "bodyLocation": "Face",
            "preparation": "Consultation with aesthetic doctor",
            "followup": "Review appointment after 2 weeks",
            "howPerformed": "Using dermal fillers and Botox injections strategically placed to lift and rejuvenate the face",
            "performer": {
              "@type": "MedicalOrganization",
              "name": "Cosmedocs",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "postalCode": "W1G 9PF",
                "addressCountry": "UK"
              }
            }
          })}
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
                    Non-Surgical <span className="text-purple-600">Facelift</span>
                  </h1>
                  <p className="text-xl text-gray-600">
                    Rejuvenate your appearance without surgery. Our liquid facelift combines advanced dermal fillers and Botox for natural, youthful results.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">1M+</div>
                    <div className="text-sm text-gray-600">Injections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2-3</div>
                    <div className="text-sm text-gray-600">Hours Treatment</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/images/non-surgical-facelift.jpg" 
                  alt="Non-surgical facelift treatment"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content placeholder - to be developed */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Page Under Development</h2>
              <p className="text-gray-600">
                This page is currently being developed with comprehensive information about our non-surgical facelift treatments. Please check back soon or contact us directly for more information.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NonSurgicalFacelift;
