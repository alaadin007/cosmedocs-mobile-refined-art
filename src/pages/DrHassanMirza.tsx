import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, Award, GraduationCap } from "lucide-react";
import AutoLinkedText from "@/components/AutoLinkedText";
import hassanImage from "@/assets/dr-hassan-mirza.png";

const DrHassanMirza = () => {
  const seoData = generateSEOMetadata(
    "Dr Hassan A. Mirza | Consultant Dermatologist | Cosmedocs",
    "Consultant Dermatologist with NHS experience. Specialising in acne, eczema, psoriasis, mole removal and skin conditions at Cosmedocs London.",
    "/team/dr-hassan-mirza"
  );

  const treatments = [
    "Acne",
    "Eczema",
    "Psoriasis",
    "Skin Tags",
    "Mole Removal",
    "Pigmentation",
    "Hair Fall"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr Hassan A. Mirza",
    "jobTitle": "Consultant Dermatologist",
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
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Royal College of Physicians"
      },
      {
        "@type": "Organization",
        "name": "British Association of Dermatologists"
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Consultant Dermatologist",
      "occupationLocation": {
        "@type": "Place",
        "name": "London, UK"
      },
      "skills": [
        "Acne Treatment",
        "Eczema Management",
        "Psoriasis Treatment",
        "Mole Removal",
        "Pigmentation Treatment",
        "Hair Loss Treatment"
      ]
    },
    "url": "https://www.cosmedocs.com/team/dr-hassan-mirza"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="Dr Hassan Mirza, consultant dermatologist London, acne specialist, eczema treatment, psoriasis, mole removal, skin conditions, Cosmedocs, Harley Street, NHS dermatologist" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="author" content="Dr Hassan A. Mirza" />
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
                      src={hassanImage}
                      alt="Dr Hassan A. Mirza - Consultant Dermatologist at Cosmedocs London specialising in skin conditions"
                      className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                      loading="eager"
                      width="400"
                      height="400"
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
                      Dr Hassan A. Mirza
                    </h1>
                    <p className="text-xl text-yellow-400 mb-2">Consultant Dermatologist</p>
                    <p className="text-gray-300 mb-4">
                      NHS Consultant • London Hospital Training
                    </p>
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center justify-center gap-2">
                        <Award className="h-5 w-5 text-yellow-400" />
                        <span className="text-sm">Royal College of Physicians – Member</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Award className="h-5 w-5 text-yellow-400" />
                        <span className="text-sm">British Association of Dermatologists – Member</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    <AutoLinkedText>
                      Dr Hassan A. Mirza is a highly experienced Consultant Dermatologist currently working 
                      within the NHS. He completed his dermatology training across leading London hospitals, 
                      supported by a strong foundation in internal medicine training in Sheffield. With 
                      international clinical exposure through rotations in Orlando, Dr Mirza delivers 
                      evidence-based, patient-focused dermatological care at the highest standard.
                    </AutoLinkedText>
                  </p>

                  <a href="https://med.as.me/schedule/0cc7d92b/?categories[]=Dr.%20Hassan%20Dermatologist" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                      Book Appointment with Dr Mirza
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
                  <h2 className="text-2xl font-semibold text-white">Training & Credentials</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <AutoLinkedText>
                    Dr Mirza's extensive training across leading London hospitals and his foundation in 
                    internal medicine at Sheffield has equipped him with a comprehensive understanding of 
                    skin conditions and their systemic connections. His international experience in Orlando 
                    has broadened his clinical perspective, enabling him to provide world-class dermatological 
                    care with a patient-centred approach.
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
                  Conditions Treated by Dr Hassan Mirza
                </h2>
                <p className="text-muted-foreground text-lg">
                  Evidence-based dermatological care for a wide range of skin conditions
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
                    "Dr Mirza's expertise in dermatology is exceptional. His thorough approach 
                    and evidence-based treatments have made a real difference to my skin condition. 
                    He takes the time to explain everything clearly and provides excellent follow-up care."
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
                  Expert Dermatological Care
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Book your consultation with Dr Mirza for comprehensive skin health assessment.
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>
                <a href="https://med.as.me/schedule/0cc7d92b/?categories[]=Dr.%20Hassan%20Dermatologist" target="_blank" rel="noopener noreferrer">
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
          <h2>Dr Hassan Mirza Consultant Dermatologist London NHS Cosmedocs</h2>
          <p>
            Dr Hassan A. Mirza is a highly experienced Consultant Dermatologist at Cosmedocs London, 
            currently working within the NHS. He completed his dermatology training across leading London 
            hospitals with a strong foundation in internal medicine training in Sheffield. His international 
            clinical exposure through rotations in Orlando enables evidence-based, patient-focused 
            dermatological care at the highest standard.
          </p>
          <p>
            As a member of the Royal College of Physicians and British Association of Dermatologists, 
            Dr Mirza treats a comprehensive range of skin conditions including acne, eczema, psoriasis, 
            skin tags, mole removal, pigmentation disorders, and hair fall. His approach combines 
            clinical expertise with Cosmedocs' philosophy of invisible art: Bold, Natural, Always Your Way.
          </p>
        </div>
      </div>
    </>
  );
};

export default DrHassanMirza;
