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
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

const AestheticTraining = () => {
  const seoData = generateSEOMetadata(
    "Aesthetic Medicine Training | Cosmedocs London",
    "Cosmedocs Fellowship partnering with Harley Street Institute since 2014. Live clinic training with real patients and expert mentorship.",
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
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/a9a6ab97-73ca-4f52-8fdd-ae4676546fd5.png"
              alt="Fellowship in Aesthetic Medicine Certificate from Harley Street Institute showing professional qualification in cosmetic medicine training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70"></div>
          </div>
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Fellowship in
                  <span className="block text-purple-300">Aesthetic Medicine</span>
                  <span className="block text-sm mt-4">Advanced training in cosmetic medicine since 2014</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transform your medical career with comprehensive hands-on training
                </p>
                <div className="mb-8">
                  <p className="text-lg text-gray-300">Bold • Natural • Always Your Way</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    Download Brochure
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
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

        {/* Fellowship Success Stories */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Fellowship Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our graduates receiving their Fellowship certificates and hear from them about their transformative experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/76a0e857-ddad-41fd-965b-459a41edaed7.png"
                    alt="Fellowship graduates receiving aesthetic medicine certification from Harley Street Institute"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="/lovable-uploads/ea1c7290-2824-4fe9-9b4b-f7b4a8dca917.png"
                    alt="Aesthetic medicine fellowship certificate presentation ceremony with medical professionals"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="/lovable-uploads/d06667aa-67ce-46e1-b21c-7ec4fe5e59e2.png"
                    alt="Group of fellowship graduates with aesthetic medicine certificates from Harley Street training"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="/lovable-uploads/a60367ae-0374-4f0a-95c7-83b324231aef.png"
                    alt="Medical professionals celebrating completion of aesthetic medicine fellowship training programme"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Student Interview: Fellowship Experience</h3>
                <p className="text-muted-foreground">
                  Watch this exclusive interview with one of our fellowship students discussing their experience 
                  in our aesthetic medicine training programme that has been running since 2014.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/xg0g-GOZMjc?start=82"
                    title="Aesthetic Medicine Fellowship Student Interview - Cosmedocs Training Since 2014"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Student Results & Skills */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Student Results & Clinical Skills</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Witness the exceptional results achieved by our fellowship students during their live patient training. 
                These transformations showcase the precision and artistry developed through our comprehensive programme.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Excellence in Practice</h3>
                <p className="text-muted-foreground">
                  Our fellowship students work directly with real patients under expert supervision, developing 
                  the skills and confidence that only come from authentic clinical experience. These before-and-after 
                  results demonstrate the quality of work our students achieve during their training.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="text-2xl font-bold text-purple-600 mb-1">84+</div>
                    <div className="text-sm text-muted-foreground">Clinical Hours</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Real Patients</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Our aesthetics is invisible art • Bold • Natural • Always Your Way"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <BeforeAfterImageViewer
                  images={[
                    {
                      src: "/lovable-uploads/25d47872-3be5-4faa-9b90-1f3f4cb4ac51.png",
                      alt: "Fellowship student performing precise injectable treatment with expert supervision",
                      caption: "Student demonstrating advanced injection technique during live patient training"
                    },
                    {
                      src: "/lovable-uploads/0468aaae-f777-4be0-a0b9-a51f44a46d2e.png",
                      alt: "Comprehensive before and after results showing natural enhancement achieved by fellowship student",
                      caption: "Multi-angle assessment showing natural, balanced results achieved during training"
                    },
                    {
                      src: "/lovable-uploads/9eb0c6e7-ea1b-4de2-b5c2-9181159319da.png",
                      alt: "Before and after facial enhancement showing subtle natural improvement by fellowship trainee",
                      caption: "Subtle facial enhancement demonstrating invisible art philosophy - natural results"
                    },
                    {
                      src: "/lovable-uploads/e91e0eaa-62bb-43d4-b259-6bc94d965711.png",
                      alt: "Side profile before and after showing skilled non-surgical enhancement by student",
                      caption: "Profile enhancement showcasing precision and skill developed through mentorship"
                    },
                    {
                      src: "/lovable-uploads/580a1722-2a3f-4cc7-b193-dada72f9a582.png",
                      alt: "Before and after nasal enhancement showing expert technique learned during fellowship",
                      caption: "Non-surgical nose refinement demonstrating advanced technique mastery"
                    },
                    {
                      src: "/lovable-uploads/eaa3e1b9-b337-4518-a4ce-58818e62334f.png",
                      alt: "Dorsal correction before and after showing fellowship student's developing expertise",
                      caption: "Dorsal correction - precision technique learned through hands-on training"
                    }
                  ]}
                  triggerLabel="View Student Results Gallery"
                  title="Fellowship Student Clinical Results"
                  description="Real results achieved by students during their live patient training"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 bg-accent">
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