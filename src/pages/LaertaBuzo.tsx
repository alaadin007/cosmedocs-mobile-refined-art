import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, Award, GraduationCap } from "lucide-react";
import AutoLinkedText from "@/components/AutoLinkedText";
import laertaImage from "@/assets/laerta-buzo.jpg";

const LaertaBuzo = () => {
  const seoData = generateSEOMetadata(
    "Laerta Buzo | Aesthetic Practitioner | Cosmedocs",
    "Experienced Aesthetic Practitioner with over 9 years of experience in non-surgical aesthetic treatments and advanced skin therapies at Cosmedocs London.",
    "/team/laerta-buzo"
  );

  const treatments = [
    "Chemical Peels",
    "Mesotherapy",
    "Microneedling",
    "Vitamin Injections",
    "PRP Treatments",
    "Laser Technologies",
    "Skin Boosters",
    "Device-Based Treatments",
    "Advanced Skin Therapies"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Laerta Buzo",
    "jobTitle": "Aesthetic Practitioner",
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
      "name": "Aesthetic Practitioner",
      "occupationLocation": {
        "@type": "Place",
        "name": "London, UK"
      },
      "skills": [
        "Chemical Peels",
        "Mesotherapy",
        "Microneedling",
        "PRP Treatments",
        "Laser Technologies",
        "Skin Boosters"
      ]
    },
    "url": "https://www.cosmedocs.com/team/laerta-buzo"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="Laerta Buzo, aesthetic practitioner London, skin therapist, chemical peels, mesotherapy, microneedling, PRP, laser treatments, Cosmedocs, Harley Street" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="author" content="Laerta Buzo" />
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
                {/* Practitioner Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative max-w-md mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-yellow-600/20 rounded-3xl rotate-3"></div>
                    <img
                      src={laertaImage}
                      alt="Laerta Buzo - Aesthetic Practitioner at Cosmedocs London specialising in advanced skin therapies"
                      className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                      loading="eager"
                      width="400"
                      height="500"
                    />
                  </div>
                </motion.div>

                {/* Practitioner Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white"
                >
                  <div className="mb-6">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                      Laerta Buzo
                    </h1>
                    <p className="text-xl text-yellow-400 mb-2">Aesthetic Practitioner</p>
                    <p className="text-gray-300 mb-4">
                      9+ Years Experience in Non-Surgical Aesthetic Treatments
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm">Advanced Skin Therapy Specialist</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    <AutoLinkedText>
                      Laerta is an experienced Aesthetic Practitioner with over 9 years of experience in 
                      non-surgical aesthetic treatments and advanced skin therapies. Her work focuses on 
                      personalised treatment plans that combine injectables, skin boosters, laser and 
                      device-based treatments to achieve natural and balanced results. Our aesthetics is 
                      invisible art - transformation that speaks without saying a word.
                    </AutoLinkedText>
                  </p>

                  <a href="https://med.as.me/alert" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                      Book Appointment with Laerta
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
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
                  <h2 className="text-2xl font-semibold text-white">Training & Expertise</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <AutoLinkedText>
                    Laerta has trained extensively in chemical peels, mesotherapy, microneedling, vitamin 
                    injections, PRP, and laser technologies, and has worked within medical aesthetic clinics 
                    delivering high standards of care. She places strong emphasis on client education, safety 
                    and long-term skin health, ensuring each treatment is tailored to individual needs.
                  </AutoLinkedText>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatments Section */}
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
                  Treatments Performed by Laerta Buzo
                </h2>
                <p className="text-muted-foreground text-lg">
                  Specialising in advanced skin therapies and personalised treatment plans
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment}
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
                            {treatment}
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
                    "Laerta's expertise in skin therapies is outstanding. Her personalised approach 
                    and attention to skin health has transformed my skin. She takes the time to 
                    explain everything and the results are exactly what I was hoping for."
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
                  Ready for Radiant Skin?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Book your consultation with Laerta and discover personalised skin treatments.
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>
                <a href="https://med.as.me/alert" target="_blank" rel="noopener noreferrer">
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
          <h2>Laerta Buzo Aesthetic Practitioner London Cosmedocs Skin Therapies</h2>
          <p>
            Laerta Buzo is an experienced Aesthetic Practitioner at Cosmedocs London with over 9 years of 
            experience in non-surgical aesthetic treatments and advanced skin therapies. She specialises in 
            personalised treatment plans combining injectables, skin boosters, laser and device-based treatments 
            to achieve natural and balanced results that embody our philosophy of invisible art.
          </p>
          <p>
            Laerta has trained extensively in chemical peels, mesotherapy, microneedling, vitamin injections, 
            PRP treatments, and laser technologies. Working within medical aesthetic clinics, she delivers 
            high standards of care with strong emphasis on client education, safety and long-term skin health. 
            Each treatment is tailored to individual needs following Cosmedocs' motto: Bold, Natural, Always Your Way.
          </p>
        </div>
      </div>
    </>
  );
};

export default LaertaBuzo;
