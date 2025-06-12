import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, CheckCircle, Award, GraduationCap } from "lucide-react";

const DrAhmedHaq = () => {
  const seoData = generateSEOMetadata(
    "Dr A. Farhan Haq | Cosmetic Physician | Cosmedocs London",
    "Meet Dr A. Farhan Haq, an extensively experienced cosmetic physician at Cosmedocs. Graduate of The Royal College of Surgeons Medical School specializing in advanced aesthetic treatments.",
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

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
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
                      src="/lovable-uploads/a79dedf2-e721-47c4-b683-b966f8ab9edf.png"
                      alt="Dr A. Farhan Haq - Cosmetic Physician at Cosmedocs London"
                      className="relative w-full h-auto rounded-3xl shadow-2xl"
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
                    <p className="text-xl text-yellow-400 mb-2">Cosmetic Physician</p>
                    <p className="text-gray-300 mb-4">
                      Royal College of Surgeons, Medical School
                    </p>
                    <div className="flex items-center gap-2 mb-6">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm">British Association of Cosmetic Doctors</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    An extensively experienced practitioner, Dr Haq is a graduate of The Royal College of Surgeons Medical School, 
                    and a member of the British Association of Cosmetic Doctors. He specialises in a variety of non-surgical 
                    aesthetic treatments, especially advanced injectable procedures, and has trained for a range of surgical specialities.
                  </p>

                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                    Book Appointment
                  </Button>
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
                  Dr Haq has received widespread recognition, both for his highly regarded work in complex facial contouring 
                  and non-surgical jaw reduction, and his valuable contributions at various conferences and workshops, 
                  nationally and internationally during the past 8 years. He leads the in-house team at CosmeDocs, 
                  and trains cosmetic physicians in advanced techniques at the Harley Street Institute.
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
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Book Your Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Dr Ahmed Haq Cosmetic Physician London Harley Street Cosmedocs Team Member</h2>
          <p>
            Dr A. Farhan Haq, cosmetic physician, Royal College of Surgeons, British Association of Cosmetic Doctors,
            aesthetic treatments, anti-wrinkle treatments, botox, lip enhancement, non-surgical nose job, tear trough,
            nefertiti face lift, skin peels, microdermabrasion, facial contouring, jaw reduction, Harley Street Institute,
            advanced injectable procedures, cosmetic medicine London, aesthetic doctor, invisible art, bold natural always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default DrAhmedHaq;
