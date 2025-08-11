import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, CheckCircle, Award, GraduationCap } from "lucide-react";
import AutoLinkedText from "@/components/AutoLinkedText";

const DrHenaHaq = () => {
  console.log("DrHenaHaq component is rendering");
  
  const seoData = generateSEOMetadata(
    "Dr Hena Haq | Expert Cosmetic Physician | Cosmedocs London",
    "Dr. Hena Haq is an Aesthetic Doctor whose holistic approach to client treatments has made her popular amongst her clients. Specializing in subtle tweakments and natural outcomes.",
    "/team/dr-hena-haq"
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
    "Ageing",
    "Skin Concerns"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr Hena Haq",
    "jobTitle": "Cosmetic Physician",
    "worksFor": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.com"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Oxford University Medical School"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Harley Street Institute"
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
        "Subtle Tweakments",
        "Lip Enhancement"
      ]
    },
    "url": "https://www.cosmedocs.com/team/dr-hena-haq",
    "image": "https://www.cosmedocs.com/lovable-uploads/b90d3993-6cef-4758-8037-8c5461a2076c.png"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="Dr Hena Haq, cosmetic physician London, aesthetic doctor, botox specialist, facial contouring, non-surgical treatments, Cosmedocs, Harley Street, Oxford medical training" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.cosmedocs.com/lovable-uploads/b90d3993-6cef-4758-8037-8c5461a2076c.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://www.cosmedocs.com/lovable-uploads/b90d3993-6cef-4758-8037-8c5461a2076c.png" />
        <meta name="author" content="Dr Hena Haq" />
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
                      src="/lovable-uploads/b90d3993-6cef-4758-8037-8c5461a2076c.png"
                      alt="Dr Hena Haq - Expert Cosmetic Physician at Cosmedocs London specializing in subtle tweakments and natural aesthetic outcomes"
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
                      Dr Hena Haq
                    </h1>
                    <p className="text-xl text-yellow-400 mb-2">Cosmetic Physician</p>
                    <p className="text-gray-300 mb-4">
                      Oxford Medical Training • London & Kent GP Training
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm">Program Director - Harley Street Institute</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    <AutoLinkedText>
                      Dr Hena is an Aesthetic Doctor whose holistic approach to client treatments has made her 
                      popular amongst her clients. Her special interest lies in subtle tweakments and using a 
                      combination of aesthetic procedures to provide youthful but natural outcomes. Having completed 
                      her medical Training in Oxford and GP training in London and Kent, Dr Hena always has her 
                      clients best interest at the heart of every consultation. Our aesthetics is invisible art - 
                      transformation that speaks without saying a word.
                    </AutoLinkedText>
                  </p>

                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                      Book Appointment with Dr Hena
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
                  <h2 className="text-2xl font-semibold text-white">Training & Leadership</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <AutoLinkedText>
                    Dr Hena is heavily involved in the training of fellow colleagues and medical professionals 
                    as Program Director of the Harley Street Institute. Her holistic approach to aesthetic 
                    medicine and dedication to natural outcomes has made her a respected leader in the field. 
                    She combines her Oxford medical training with extensive experience in aesthetic procedures 
                    to deliver exceptional results that enhance natural beauty.
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
                  Treatments Performed by Dr Hena Haq
                </h2>
                <p className="text-muted-foreground text-lg">
                  Specializing in subtle tweakments and natural aesthetic outcomes
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
                    "Dr Hena's holistic approach and attention to natural-looking results is outstanding. 
                    Her subtle tweakments have given me exactly the refreshed look I was hoping for, 
                    without anyone being able to tell I've had anything done. The invisible art philosophy 
                    at Cosmedocs truly shines through in her work."
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
                  Ready for Natural Enhancement?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Book your consultation with Dr Hena and discover the art of subtle tweakments.
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
          <h2>Dr Hena Haq Leading Cosmetic Physician London Oxford Medical Training Cosmedocs</h2>
          <p>
            Dr Hena Haq stands as one of London's premier cosmetic physicians, bringing a holistic approach to aesthetic 
            medicine at Cosmedocs clinic. As a distinguished graduate of Oxford Medical School with GP training in London 
            and Kent, Dr Hena represents excellence in non-surgical aesthetic treatments. Her specialization encompasses 
            subtle tweakments, advanced injectable procedures, and a comprehensive range of aesthetic enhancements that 
            embody our philosophy of invisible art - bold, natural, always your way.
          </p>
          <p>
            Located in the heart of London's prestigious medical district, Dr Hena serves as Program Director of the 
            renowned Harley Street Institute, where she trains fellow medical professionals in advanced aesthetic 
            techniques. Her holistic approach to client treatments has garnered widespread recognition, with clients 
            praising her ability to deliver youthful but natural outcomes through combination aesthetic procedures.
          </p>
          <p>
            The treatments performed by Dr Hena include anti-wrinkle treatments using premium botox formulations, 
            sophisticated lip enhancement procedures, revolutionary non-surgical nose job techniques, under-eye circle 
            treatments targeting tear trough concerns, the innovative Nefertiti face lift utilizing botox-only methodology, 
            professional skin peels, diamond microdermabrasion, advanced E-Dermastamp procedures, tired eyes rejuvenation, 
            hyperpigmentation correction, aging concerns management, and comprehensive skin concern treatments. Each 
            treatment reflects our commitment to aesthetic excellence through invisible art.
          </p>
          <p>
            At Cosmedocs, we believe that true aesthetic enhancement should be quiet, not loud; invisible, not exaggerated. 
            Dr Hena's approach embodies this philosophy, creating transformations that speak without saying a word. Her 
            patients consistently praise her professional approach and the natural, refined results that align perfectly 
            with Cosmedocs' motto: Our aesthetics is invisible art - Bold, Natural, Always Your Way. Whether seeking 
            facial rejuvenation, subtle tweakments, or specialized aesthetic treatments, Dr Hena's expertise ensures 
            exceptional outcomes that enhance natural beauty while maintaining authenticity.
          </p>
          <p>
            Keywords: Dr Hena Haq, cosmetic physician London, aesthetic treatments, botox specialist, subtle tweakments, 
            non-surgical procedures, Cosmedocs team, Harley Street Institute director, Oxford medical training, London 
            Kent GP training, advanced injectable procedures, lip enhancement, non-surgical nose job, tear trough treatment, 
            Nefertiti facelift, skin peels, microdermabrasion, aesthetic medicine London, invisible art cosmetics, 
            bold natural always your way, holistic approach aesthetic medicine.
          </p>
        </div>
      </div>
    </>
  );
};

export default DrHenaHaq;