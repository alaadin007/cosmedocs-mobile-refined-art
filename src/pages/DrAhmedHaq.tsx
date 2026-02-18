
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, CheckCircle, Award, GraduationCap } from "lucide-react";
import AutoLinkedText from "@/components/AutoLinkedText";

const DrAhmedHaq = () => {
  console.log("DrAhmedHaq component is rendering");
  
  const seoData = generateSEOMetadata(
    "Dr A. Farhan Haq | Cosmetic Physician | Cosmedocs",
    "Leading cosmetic doctor with extensive experience. Specialising in botox, fillers & facial rejuvenation research.",
    "/team/dr-ahmed-haq"
  );

  const treatments = [
    "Anti-Wrinkle Treatments (Botox)",
    "Lip Enhancement",
    "Non Surgical Nose Job",
    "Under Eye Circles (Tear Trough)",
    "Nefertiti Face Lift (Botox Only)",
    "Skin Peels",
    "Microdermabrasion (Diamond)",
    "E-Dermastamp",
    "Tired Eyes",
    "Hyperpigmentation",
    "Ageing Skin Concerns"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr A. Farhan Haq",
    "jobTitle": "Cosmetic Physician",
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
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "The Royal College of Surgeons Medical School"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "British Association of Cosmetic Doctors"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Cosmetic Physician",
      "occupationLocation": {
        "@type": "Place",
        "name": "London, UK"
      },
      "skills": [
        "Anti-Wrinkle Treatments",
        "Facial Contouring",
        "Non-Surgical Aesthetic Procedures",
        "Advanced Injectable Procedures",
        "Jaw Reduction",
        "Lip Enhancement"
      ]
    },
    "url": "https://www.cosmedocs.com/team/dr-ahmed-haq",
    "image": "https://www.cosmedocs.com/lovable-uploads/fcb0e7d1-207b-4491-9e33-c13f7f7e4ecd.png"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="Dr Ahmed Haq, cosmetic physician London, aesthetic doctor, botox specialist, facial contouring, non-surgical treatments, Cosmedocs, Harley Street, Royal College Surgeons" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.cosmedocs.com/lovable-uploads/fcb0e7d1-207b-4491-9e33-c13f7f7e4ecd.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://www.cosmedocs.com/lovable-uploads/fcb0e7d1-207b-4491-9e33-c13f7f7e4ecd.png" />
        <meta name="author" content="Dr A. Farhan Haq" />
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
                      src="/lovable-uploads/fcb0e7d1-207b-4491-9e33-c13f7f7e4ecd.png"
                      alt="Dr A. Farhan Haq - Expert Cosmetic Physician at Cosmedocs London specializing in facial contouring and advanced aesthetic treatments"
                      className="relative w-full h-auto rounded-3xl shadow-2xl"
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
                      Dr A. Farhan Haq
                    </h1>
                    <p className="text-xl text-yellow-400 mb-2">Expert Cosmetic Physician</p>
                    <p className="text-gray-300 mb-4">
                      Royal College of Surgeons, Medical School Graduate
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm">British Association of Cosmetic Doctors Member</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    <AutoLinkedText>
                      An extensively experienced practitioner, Dr Haq is a graduate of The Royal College of Surgeons Medical School, 
                      and a member of the British Association of Cosmetic Doctors. He specialises in a variety of non-surgical 
                      aesthetic treatments, especially advanced injectable procedures, and has trained for a range of surgical specialities. 
                      Our aesthetics is invisible art - transformation that speaks without saying a word.
                    </AutoLinkedText>
                  </p>

                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                      Book Appointment with Dr Haq
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
                  <h2 className="text-2xl font-semibold text-white">Qualifications & Recognition</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <AutoLinkedText>
                    Dr Haq has received widespread recognition, both for his highly regarded work in complex facial contouring 
                    and non-surgical jaw reduction, and his valuable contributions at various conferences and workshops, 
                    nationally and internationally during the past 8 years. He leads the in-house team at CosmeDocs, 
                    and trains cosmetic physicians in advanced techniques at the Harley Street Institute.
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
                  Treatments Performed by Dr A. Farhan Haq
                </h2>
                <p className="text-muted-foreground text-lg">
                  Specializing in advanced aesthetic treatments with precision and artistry
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
                    "Dr Haq's expertise in facial contouring is exceptional. His approach is always professional, 
                    and the results speak for themselves - natural, refined, and exactly what I was hoping for. 
                    The invisible art philosophy at Cosmedocs truly shows in his work."
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
                  Ready to Transform?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Book your consultation with Dr Haq and discover the invisible art of aesthetic enhancement.
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

        {/* Enhanced Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Dr Ahmed Haq Leading Cosmetic Physician London Harley Street Cosmedocs</h2>
          <p>
            Dr A. Farhan Haq stands as one of London's premier cosmetic physicians, bringing extensive expertise in aesthetic medicine to Cosmedocs clinic. 
            As a distinguished graduate of The Royal College of Surgeons Medical School and esteemed member of the British Association of Cosmetic Doctors, 
            Dr Haq represents the pinnacle of medical excellence in non-surgical aesthetic treatments. His specialization encompasses advanced injectable 
            procedures, facial contouring, non-surgical jaw reduction, and a comprehensive range of aesthetic enhancements that embody our philosophy 
            of invisible art - bold, natural, always your way.
          </p>
          <p>
            Located in the heart of London's prestigious medical district, Dr Haq leads the in-house team at Cosmedocs and serves as a distinguished 
            instructor at the renowned Harley Street Institute, where he trains fellow cosmetic physicians in advanced aesthetic techniques. His 
            expertise in complex facial contouring has garnered widespread recognition both nationally and internationally, with valuable contributions 
            to numerous conferences and workshops spanning over 8 years of dedicated practice.
          </p>
          <p>
            The treatments performed by Dr Haq include anti-wrinkle treatments using premium botox formulations, sophisticated lip enhancement procedures, 
            revolutionary non-surgical nose job techniques, under-eye circle treatments targeting tear trough concerns, the innovative Nefertiti face 
            lift utilizing botox-only methodology, professional skin peels, diamond microdermabrasion, advanced E-Dermastamp procedures, tired eyes 
            rejuvenation, hyperpigmentation correction, and comprehensive aging skin concern management. Each treatment reflects our commitment to 
            aesthetic excellence through invisible art.
          </p>
          <p>
            At Cosmedocs, we believe that true aesthetic enhancement should be quiet, not loud; invisible, not exaggerated. Dr Haq's approach 
            embodies this philosophy, creating transformations that speak without saying a word. His patients consistently praise his professional 
            approach and the natural, refined results that align perfectly with Cosmedocs' motto: Our aesthetics is invisible art - Bold, Natural, 
            Always Your Way. Whether seeking facial rejuvenation, body contouring, or specialized aesthetic treatments, Dr Haq's expertise ensures 
            exceptional outcomes that enhance natural beauty while maintaining authenticity.
          </p>
          <p>
            Keywords: Dr Ahmed Haq cosmetic physician London, aesthetic treatments Harley Street, botox specialist London, facial contouring expert, non-surgical procedures, Cosmedocs medical director, Harley Street Institute trainer, Royal College Surgeons graduate, British Association Cosmetic Doctors member, advanced injectable procedures, jaw reduction specialist, lip enhancement, non-surgical nose job, tear trough treatment, Nefertiti facelift, aesthetic medicine London. Dr Haq has personally performed tens of thousands of aesthetic procedures and continues to push the boundaries of non-surgical facial rejuvenation through innovative techniques and continuous professional development.
          </p>
          <h3>Dr Haq's Areas of Expertise</h3>
          <p>
            Dr Ahmed Haq specialises in complex facial contouring procedures including non-surgical rhinoplasty, jawline and chin enhancement, masseter reduction for jaw slimming, and advanced full-face rejuvenation using a combination of dermal fillers and anti-wrinkle injections. His expertise in facial anatomy and injection technique allows him to achieve subtle, natural-looking results that embody the Cosmedocs invisible art philosophy. As medical director, Dr Haq ensures every treatment delivered at Cosmedocs meets the highest standards of clinical excellence and patient safety.
          </p>
        </div>
      </div>
    </>
  );
};

export default DrAhmedHaq;
