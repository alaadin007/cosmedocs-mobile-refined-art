import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateSEOMetadata } from '@/utils/seo';
import { 
  Award, 
  Calendar, 
  Clock, 
  GraduationCap, 
  Heart, 
  Microscope, 
  Users, 
  CheckCircle,
  Stethoscope,
  BookOpen,
  FileText,
  Star
} from "lucide-react";
import studentObserving from '@/assets/student-observing-treatment.jpg';
import harleyStreetSign from '@/assets/harley-street-sign.jpg';
import clinicEntrance from '@/assets/clinic-entrance.jpg';
import harleyStreetBuilding from '@/assets/harley-street-building.jpg';
import skinAnatomyDiagram from '@/assets/skin-anatomy-diagram.jpg';

const MedicalStudentWorkExperience = () => {
  const seoData = generateSEOMetadata(
    "Medical Student Work Experience London | Premed Dermatology & Aesthetic Medicine Placement | Cosmedocs",
    "Gain hands-on medical student work experience in dermatology and aesthetic medicine at Harley Street. CPD-accredited premed programme with certificate, UCAS support, and clinical observation for aspiring doctors aged 15+.",
    "/medical-student-work-experience"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "Medical Student Work Experience in Dermatology & Aesthetic Medicine",
    "description": "Comprehensive 2-week premed work experience programme in dermatology and aesthetic medicine with CPD accreditation and Harley Street Institute certification",
    "provider": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.co.uk"
    },
    "occupationalCategory": "Medical Professional",
    "timeToComplete": "P2W",
    "educationalCredentialAwarded": "CPD Accredited Certificate",
    "offers": {
      "@type": "Offer",
      "category": "Medical Education"
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
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">CPD Accredited Programme</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Medical Student Work Experience in Dermatology & Aesthetic Medicine
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Gain invaluable hands-on clinical experience at our prestigious Harley Street clinic. Perfect for premed students, aspiring doctors, and medical students seeking to excel in dermatology and aesthetic medicine. Open to dedicated students aged 15 and above.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button size="lg" className="text-lg" asChild>
                  <a href="mailto:info@cosmedocs.com?subject=Medical%20Student%20Work%20Experience%20Application">
                    Apply Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#programme-details">Learn More</a>
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">CPD Points</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Weeks Programme</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Days Clinical</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Career Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="py-12 bg-accent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <img 
                src={studentObserving} 
                alt="Medical student observing aesthetic treatment procedure on tablet during clinical work experience placement at Harley Street"
                className="w-full rounded-xl shadow-2xl"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                Medical student gaining hands-on experience observing advanced aesthetic procedures
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-background" id="programme-details">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Medical Student Work Experience Programme?</h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive premed work experience programme offers aspiring medical professionals an unparalleled opportunity to gain practical clinical experience in one of London's most prestigious medical districts. Located in the heart of Harley Street, our programme provides medical students, premed students, and aspiring doctors with real-world exposure to dermatology and aesthetic medicine.
                </p>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Understanding skin health is fundamental to medical practice. Whether you're considering a career in general practice, dermatology, plastic surgery, or any medical specialty, knowledge of skin conditions, anti-ageing treatments, and aesthetic medicine is invaluable. Our work experience programme bridges the gap between theoretical medical education and practical clinical application, preparing you for success in medical school applications and future medical careers.
                </p>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  This medical student placement is conducted in partnership with the Harley Street Institute, ensuring you receive a professionally recognised certificate upon completion. The programme is suitable for anyone aged 15 and above who demonstrates a serious commitment to pursuing medicine or healthcare.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="my-12"
              >
                <img 
                  src={harleyStreetSign} 
                  alt="Cosmedocs staff member standing by iconic Harley Street sign in London's premier medical district"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Our clinic is located in prestigious Harley Street, London's world-renowned medical district
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programme Overview */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Comprehensive 2-Week Programme Structure
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <Stethoscope className="w-12 h-12 text-primary mb-4" />
                      <CardTitle>Clinical Experience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        5 days of immersive face-to-face clinical observation and hands-on involvement in dermatology practice.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Observe live patient consultations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Watch advanced aesthetic procedures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Learn clinical documentation practices</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <GraduationCap className="w-12 h-12 text-primary mb-4" />
                      <CardTitle>Career Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Complete application support including UCAS statements, interview preparation, and reference letters.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>UCAS personal statement guidance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Medical school interview preparation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Performance-based reference letters</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <BookOpen className="w-12 h-12 text-primary mb-4" />
                      <CardTitle>Educational Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Structured learning modules covering essential dermatology and aesthetic medicine topics.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Skin anatomy and physiology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Common dermatological conditions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Anti-ageing and lifestyle medicine</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Harley Street Location Images */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Experience Medicine at London's Most Prestigious Medical Address
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={clinicEntrance} 
                    alt="Professional entrance to Cosmedocs Harley Street clinic with elegant door number 10"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-center text-sm text-muted-foreground mt-4 italic">
                    Our prestigious Harley Street clinic entrance where medical excellence meets elegant professionalism
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={harleyStreetBuilding} 
                    alt="Historic Georgian townhouse building on Harley Street housing medical clinics and consulting rooms"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-center text-sm text-muted-foreground mt-4 italic">
                    Located in a beautiful Georgian building in the heart of London's medical district
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                What You'll Learn During Your Medical Student Placement
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <Microscope className="w-10 h-10 text-primary mb-3" />
                      <CardTitle>Understanding Skin in Daily Life</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Skin is the body's largest organ, and understanding its function is crucial for any medical professional. You'll learn about:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Skin barrier function and protection mechanisms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>How environmental factors affect skin health</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>The role of skin in overall health and wellbeing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Skin manifestations of systemic diseases</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <Heart className="w-10 h-10 text-primary mb-3" />
                      <CardTitle>Common Skin Conditions & Acne</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Gain practical knowledge about diagnosing and managing prevalent dermatological conditions:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Pathophysiology of acne and treatment approaches</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Eczema, psoriasis, and inflammatory conditions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Rosacea and other chronic skin disorders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Evidence-based treatment protocols</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <Star className="w-10 h-10 text-primary mb-3" />
                      <CardTitle>Anti-Ageing Medicine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Explore the rapidly growing field of aesthetic medicine and anti-ageing treatments:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Cellular ageing and skin rejuvenation science</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Injectable treatments: botulinum toxin and dermal fillers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Laser and energy-based device treatments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Patient assessment and treatment planning</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <Users className="w-10 h-10 text-primary mb-3" />
                      <CardTitle>Lifestyle Medicine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Understand the holistic approach to skin health and preventative medicine:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Nutrition and its impact on skin health</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Sleep, stress management, and skin appearance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Sun protection and photoageing prevention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Preventative medicine and patient education</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <img 
                  src={skinAnatomyDiagram} 
                  alt="Detailed anatomical diagram showing skin layers including epidermis, dermis, retinacular cutis, and facial structures"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Understanding skin anatomy is fundamental to dermatology and aesthetic medicine practice
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Why Our Premed Programme Stands Out
              </motion.h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Harley Street Institute Certification</h3>
                    <p className="text-muted-foreground">
                      Upon successful completion, receive a professionally recognised certificate from the Harley Street Institute. This CPD-accredited credential demonstrates your commitment to medical education and significantly enhances your medical school applications and CV.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <Stethoscope className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real Clinical Experience</h3>
                    <p className="text-muted-foreground">
                      Unlike many work experience programmes that offer only observation from a distance, our programme provides genuine clinical exposure. You'll work alongside experienced aesthetic doctors, observe real patient consultations, and understand the practical application of medical knowledge in a professional clinical setting.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">UCAS Application Support</h3>
                    <p className="text-muted-foreground">
                      Stand out from thousands of medical school applicants with comprehensive application support. We provide guidance on crafting compelling UCAS personal statements, prepare you for medical school interviews, and offer performance-based reference letters that highlight your clinical aptitude and professional conduct.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Essential Medical Skills</h3>
                    <p className="text-muted-foreground">
                      Develop crucial skills that will serve you throughout your medical career including patient communication, medical documentation, clinical observation techniques, understanding consent processes, and professional behaviour in healthcare settings. These fundamental competencies give you a significant advantage when entering medical school.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Open to Ages 15+</h3>
                    <p className="text-muted-foreground">
                      We believe in nurturing medical talent early. Our programme welcomes motivated students aged 15 and above, making it ideal for GCSE students, A-level students, gap year students, and undergraduate medical students. Starting early gives you more time to develop your medical knowledge and strengthen your applications.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Is This Medical Student Work Experience Right for You?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-lg mb-6">
                      Our premed work experience programme is perfect for:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>Aspiring medical students preparing UCAS applications</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>Premed students seeking competitive clinical experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>Current medical students interested in dermatology</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>Gap year students building medical experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>Students considering aesthetic medicine careers</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>Anyone aged 15+ passionate about healthcare</span>
                      </div>
                    </div>
                    <p className="text-lg mt-6 text-muted-foreground">
                      All applicants should demonstrate genuine interest in medicine, commitment to learning, professional maturity, and excellent communication skills. Previous medical experience is not required – only enthusiasm and dedication.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                How to Apply for Medical Student Work Experience
              </motion.h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <CardTitle>Submit Your Application</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Email us at info@cosmedocs.com with your CV, a brief cover letter explaining your interest in medicine and dermatology, and your current academic status. Tell us why you're passionate about pursuing a medical career and what you hope to gain from this experience.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <CardTitle>Initial Review</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Our team will review your application carefully. We look for students who demonstrate genuine passion for medicine, strong academic performance, excellent communication skills, and professional maturity. If your application meets our criteria, we'll invite you for an informal interview.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <CardTitle>Interview & Placement</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        During the interview, we'll discuss your medical aspirations, assess your suitability for the programme, and answer any questions you have. Successful candidates will receive confirmation and full programme details including start dates, schedule, and preparation materials.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <Button size="lg" className="text-lg" asChild>
                  <a href="mailto:info@cosmedocs.com?subject=Medical%20Student%20Work%20Experience%20Application">
                    Apply Now for Medical Student Work Experience
                  </a>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Places are limited. Early application is recommended.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Frequently Asked Questions About Our Medical Student Placement
              </motion.h2>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>What age do I need to be to apply?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The programme is open to anyone aged 15 and above who demonstrates maturity, professionalism, and genuine interest in pursuing a medical career. We welcome applications from GCSE students, A-level students, gap year students, and current medical students.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Do I need previous medical experience?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      No previous medical experience is required. We're looking for enthusiastic students with a genuine passion for medicine and healthcare. The programme is designed to provide you with foundational knowledge and practical clinical exposure regardless of your starting point.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Will this help with my UCAS application?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Absolutely. This programme provides exceptional material for your UCAS personal statement, demonstrates your commitment to medicine, and includes professional reference letters based on your performance. The CPD-accredited certificate from Harley Street Institute significantly strengthens any medical school application.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What is included in the programme fee?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The programme includes 5 days of clinical experience, all educational materials, Harley Street Institute certification, UCAS application support, interview preparation, and performance-based reference letters. Contact us for current pricing and available dates.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Where is the programme located?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The programme takes place at our Cosmedocs clinic in Harley Street, London – one of the world's most prestigious medical districts. This location provides an unparalleled professional environment and networking opportunities with leading medical practitioners.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Medical Career Journey Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the next generation of medical professionals who are getting ahead with real clinical experience in dermatology and aesthetic medicine. Gain the knowledge, skills, and credentials that will set you apart in competitive medical school applications.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="text-lg" asChild>
                  <a href="mailto:info@cosmedocs.com?subject=Medical%20Student%20Work%20Experience%20Application">
                    Apply for Work Experience
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground italic">
                In partnership with Harley Street Institute • CPD Accredited • Ages 15+
              </p>
            </motion.div>
          </div>
        </section>
      </article>
    </>
  );
};

export default MedicalStudentWorkExperience;
