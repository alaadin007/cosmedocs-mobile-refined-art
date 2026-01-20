import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, Award, GraduationCap, Globe } from "lucide-react";
import AutoLinkedText from "@/components/AutoLinkedText";
import hotakiImage from "@/assets/dr-noor-hotaki.jpg";

const DrNoorHotaki = () => {
  const seoData = generateSEOMetadata(
    "Dr Noor Hotaki | Permanent Non-Surgical Facelift Pioneer | Cosmedocs",
    "Dr Noor Hotaki is an internationally recognised aesthetic specialist and pioneer of the permanent non-surgical facelift. Over 1,000 successful procedures at Cosmedocs London.",
    "/team/dr-noor-hotaki"
  );

  const areasOfExpertise = [
    "Non-Surgical Facelift",
    "Facial Rejuvenation",
    "Subdermal Band Techniques",
    "Natural Aesthetic Enhancement",
    "Anti-Aging Treatments",
    "Innovative Aesthetics"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr Noor Hotaki",
    "jobTitle": "Aesthetic Medicine Specialist",
    "description": "Pioneer of the Permanent Non-Surgical Facelift",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.co.uk",
      "telephone": "+44 20 3733 3227",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Aesthetic Medicine Specialist",
      "occupationLocation": {
        "@type": "Place",
        "name": "London, UK"
      },
      "skills": [
        "Non-Surgical Facelift",
        "Facial Rejuvenation",
        "Subdermal Band Techniques",
        "Anti-Aging Treatments"
      ]
    },
    "url": "https://www.cosmedocs.com/team/dr-noor-hotaki"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="Dr Noor Hotaki, permanent non-surgical facelift, subdermal bands, facial rejuvenation, anti-aging London, aesthetic specialist, thread lift alternative, Cosmedocs, Harley Street" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="author" content="Dr Noor Hotaki" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Doctor Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative max-w-md mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-yellow-600/20 rounded-3xl rotate-3"></div>
                    <img
                      src={hotakiImage}
                      alt="Dr Noor Hotaki - Aesthetic Medicine Specialist and Pioneer of the Permanent Non-Surgical Facelift at Cosmedocs London"
                      className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                      loading="eager"
                      width="400"
                      height="500"
                    />
                  </div>
                </motion.div>

                {/* Doctor Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white"
                >
                  <div className="mb-6">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                      Dr. Noor Hotaki
                    </h1>
                    <p className="text-xl text-yellow-400 mb-2">Aesthetic Medicine Specialist</p>
                    <p className="text-lg text-gray-300 mb-4">
                      Pioneer of the Permanent Non-Surgical Facelift
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-yellow-400" />
                        <span className="text-sm">Internationally Recognised</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-400" />
                        <span className="text-sm">1,000+ Successful Procedures</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    <AutoLinkedText>
                      Dr. Noor Hotaki is an internationally recognised aesthetic specialist and the creator of 
                      the groundbreaking permanent non-surgical facelift. Renowned for his innovative techniques 
                      and natural-looking results, Dr. Hotaki has transformed modern aesthetics with procedures 
                      performed exclusively by him in the UK.
                    </AutoLinkedText>
                  </p>

                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                      Book Consultation with Dr. Hotaki
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-yellow-400" />
                  <h2 className="text-2xl font-semibold text-white">Pioneering Aesthetic Innovation</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                  <p>
                    <AutoLinkedText>
                      Dr. Hotaki has dedicated his career to redefining non-surgical facial rejuvenation. As the 
                      pioneer of the permanent non-surgical facelift, he developed a unique technique using 
                      medical-grade subdermal bands that lift and support facial tissue without surgery, downtime, 
                      or artificial fillers.
                    </AutoLinkedText>
                  </p>
                  <p>
                    <AutoLinkedText>
                      With over 1,000 successful procedures, patients from across the world trust his artistry, 
                      precision, and commitment to achieving long-lasting, natural facial enhancement. His work 
                      continues to shape the future of aesthetic medicine, offering a safer and more sustainable 
                      alternative to traditional facelifts.
                    </AutoLinkedText>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Areas of Expertise
                </h2>
                <p className="text-muted-foreground text-lg">
                  Specialising in innovative non-surgical facial rejuvenation techniques
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areasOfExpertise.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full border-border hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                          <span className="text-foreground font-medium group-hover:text-yellow-600 transition-colors">
                            {area}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Patient Testimonials</h2>
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic mb-6">
                    "Dr. Hotaki's non-surgical facelift has given me results I never thought possible without 
                    going under the knife. The lift is natural, there was no downtime, and I look years younger. 
                    His technique is truly revolutionary."
                  </blockquote>
                  <p className="text-yellow-400 font-medium">- Verified Patient</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Experience the Future of Facial Rejuvenation
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Book a consultation with Dr. Hotaki and discover the permanent non-surgical facelift.
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                    Book Your Consultation
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Dr Noor Hotaki Aesthetic Medicine Specialist Permanent Non-Surgical Facelift London</h2>
          <p>
            Dr Noor Hotaki is an internationally recognised aesthetic specialist at Cosmedocs London and 
            the pioneer of the permanent non-surgical facelift. His groundbreaking technique uses medical-grade 
            subdermal bands to lift and support facial tissue without surgery, downtime, or artificial fillers, 
            embodying our philosophy of invisible art.
          </p>
          <p>
            With over 1,000 successful procedures, Dr. Hotaki is trusted by patients worldwide for his artistry, 
            precision, and commitment to achieving long-lasting, natural facial enhancement. His areas of expertise 
            include non-surgical facelift, facial rejuvenation, subdermal band techniques, natural aesthetic 
            enhancement, anti-aging treatments, and innovative aesthetics. Following Cosmedocs' motto: Bold, 
            Natural, Always Your Way.
          </p>
        </div>
      </div>
    </>
  );
};

export default DrNoorHotaki;
