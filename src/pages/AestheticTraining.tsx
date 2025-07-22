import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  GraduationCap, 
  Users, 
  Award, 
  Stethoscope, 
  Clock, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Calendar,
  BookOpen,
  UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import AutoLinkedText from "@/components/AutoLinkedText";

const AestheticTraining = () => {
  const seoData = generateSEOMetadata(
    "Aesthetic Medicine Training & Fellowship | Cosmedocs London",
    "Join the Cosmedocs Fellowship in Aesthetic Medicine - partnering with Harley Street Institute since 2014. Experience unparalleled live clinic training with real patients and expert mentorship.",
    "/aesthetic-training"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Cosmedocs Aesthetic Medicine Training",
    "url": "https://www.cosmedocs.com/aesthetic-training",
    "description": "Fellowship in Aesthetic Medicine offering comprehensive training in injectable procedures and non-surgical treatments",
    "partner": {
      "@type": "Organization",
      "name": "Harley Street Institute"
    },
    "course": {
      "@type": "Course",
      "name": "Fellowship in Aesthetic Medicine",
      "description": "Comprehensive aesthetic medicine training with live patient experience",
      "provider": {
        "@type": "Organization",
        "name": "Cosmedocs"
      }
    }
  };

  const trainingFeatures = [
    {
      icon: Users,
      title: "Live Patient Clinics",
      description: "Experience real patient treatments - not just theory or models. Our fellows work with actual patients under expert supervision."
    },
    {
      icon: Stethoscope,
      title: "Expert Mentorship",
      description: "One-to-one training with Dr Ahmed Haq and our experienced team of aesthetic physicians."
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Partnering with Harley Street Institute since 2014, we've trained hundreds of successful aesthetic practitioners."
    },
    {
      icon: Target,
      title: "Comprehensive Curriculum",
      description: "From basic injectables to advanced techniques - facial contouring, threads, and complex aesthetic procedures."
    }
  ];

  const faqData = [
    {
      question: "How does Cosmedocs training differ from other aesthetic courses?",
      answer: "While most courses rely on theory and practice on models, our fellows train on real patients in live clinical settings. Ask other training providers how many actual patients their students treat during training - the difference is remarkable. Our partnership with Harley Street Institute since 2014 ensures you receive genuine clinical experience that translates to practice success."
    },
    {
      question: "What is included in the Fellowship program?",
      answer: "Our comprehensive fellowship includes over 84 hours of hands-on clinical experience, theoretical foundations, one-to-one mentorship, logbook completion tracking, and ongoing support. You'll work with real patients under expert supervision, gaining confidence and competence that only comes from authentic clinical practice."
    },
    {
      question: "Who can apply for the aesthetic medicine training?",
      answer: "The program is designed for medical professionals including doctors, dentists, and qualified healthcare practitioners looking to enter or advance in aesthetic medicine. Whether you're a beginner or have intermediate experience, our structured approach adapts to your current level."
    },
    {
      question: "How long is the training program?",
      answer: "The fellowship is structured over several months with flexible scheduling to accommodate working professionals. The program includes intensive clinical blocks, theoretical study, and ongoing mentorship phases, ensuring thorough competency development."
    },
    {
      question: "What makes the Cosmedocs-Harley Street Institute partnership unique?",
      answer: "Since 2014, we've combined Cosmedocs' clinical excellence with Harley Street Institute's educational expertise. This partnership ensures our training meets the highest medical education standards while providing unparalleled practical experience in real clinical settings - something most aesthetic training programs simply cannot offer."
    },
    {
      question: "What career support is provided after completion?",
      answer: "Our graduates receive ongoing mentorship, business guidance, and career placement support. Many of our alumni have successfully opened their own practices or secured prestigious positions with established clinics. Our network and reputation in the aesthetic medicine community opens doors for our graduates."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="aesthetic medicine training, fellowship aesthetic medicine, Harley Street Institute, cosmetic training London, injectable training, aesthetic course, medical aesthetics education, botox training, dermal filler training" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <GraduationCap className="h-8 w-8 text-yellow-400" />
                  <h1 className="text-4xl lg:text-5xl font-bold">Aesthetic Medicine Training</h1>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  <AutoLinkedText>
                    Experience the Cosmedocs Fellowship in Aesthetic Medicine - where training meets reality.
                    Partnering with Harley Street Institute since 2014, we offer unparalleled clinical experience
                    with real patients. Our aesthetics is invisible art.
                  </AutoLinkedText>
                </p>
                <div className="inline-flex items-center gap-2 text-yellow-400 text-lg mb-8">
                  <span>Bold • Natural • Always Your Way</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                    Apply for Fellowship
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Download Prospectus
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Highlight */}
        <section className="py-16 bg-yellow-50/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
                <h2 className="text-3xl font-bold">Partnership Excellence Since 2014</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                <AutoLinkedText>
                  Our sister company partnership with Harley Street Institute represents a decade of educational 
                  excellence in aesthetic medicine. This collaboration combines clinical expertise with proven 
                  training methodologies, creating the most comprehensive fellowship program in the UK.
                </AutoLinkedText>
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Years of Partnership</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Doctors Trained</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">84+</div>
                  <p className="text-sm text-muted-foreground">Clinical Hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">The Cosmedocs Fellowship Experience</h2>
              <p className="text-lg text-muted-foreground">
                <AutoLinkedText>
                  Ask other training providers about their live clinic experience and how many real patients 
                  their students actually treat. The difference is remarkable. Our fellowship is built on 
                  authentic clinical practice, not just theoretical knowledge.
                </AutoLinkedText>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {trainingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-border hover:border-yellow-400/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-400/20 rounded-lg p-3 flex-shrink-0">
                          <feature.icon className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                          <p className="text-muted-foreground">
                            <AutoLinkedText>{feature.description}</AutoLinkedText>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Training Curriculum</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Foundation Modules</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      Facial Anatomy & Assessment
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      Injectable Techniques & Safety
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      Patient Consultation Skills
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      Complication Management
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Advanced Procedures</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      Complex Facial Contouring
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      PDO Thread Lifting
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      Advanced Botox Techniques
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      Business & Practice Setup
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <AutoLinkedText>{faq.answer}</AutoLinkedText>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-yellow-50/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                <AutoLinkedText>
                  Join the ranks of successful aesthetic practitioners who chose the Cosmedocs Fellowship. 
                  Experience the difference that comes from real patient training and expert mentorship.
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </AutoLinkedText>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Schedule Information Call
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Cosmedocs Fellowship Aesthetic Medicine Training London Harley Street Institute Partnership</h2>
          <p>
            Cosmedocs Fellowship in Aesthetic Medicine offers comprehensive training in cosmetic procedures, 
            injectable treatments, and non-surgical aesthetics. Partnering with Harley Street Institute since 2014, 
            our training program provides unparalleled clinical experience with real patients, distinguishing 
            us from theoretical-only courses. Our fellowship includes over 84 hours of hands-on clinical practice, 
            one-to-one mentorship, and structured curriculum covering facial anatomy, botox techniques, dermal 
            fillers, PDO threads, and advanced aesthetic procedures.
          </p>
          <p>
            Unlike other aesthetic training providers who rely on models and theory, Cosmedocs fellows work 
            with actual patients under expert supervision, gaining genuine clinical confidence. Our graduates 
            successfully establish practices or secure prestigious positions in aesthetic medicine. The program 
            is designed for doctors, dentists, and healthcare professionals seeking to enter or advance in 
            aesthetic medicine. Training includes facial contouring, injectable safety, complication management, 
            patient consultation skills, and business guidance for practice setup.
          </p>
          <p>
            Aesthetic medicine training London, fellowship aesthetic medicine UK, Harley Street medical training, 
            cosmetic training courses, injectable training doctors, botox training certification, dermal filler 
            courses, aesthetic education UK, medical aesthetics fellowship, cosmetic physician training, 
            aesthetic medicine certification, clinical aesthetic training, hands-on cosmetic training, 
            real patient experience aesthetic medicine.
          </p>
        </div>
      </div>
    </>
  );
};

export default AestheticTraining;