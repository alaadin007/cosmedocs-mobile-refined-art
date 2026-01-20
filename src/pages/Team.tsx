import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Award, GraduationCap, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoLinkedText from "@/components/AutoLinkedText";
import laertaImage from "@/assets/laerta-buzo.jpg";
import hassanImage from "@/assets/dr-hassan-mirza.png";
const Team = () => {
  const seoData = generateSEOMetadata(
    "Our Expert Team | Aesthetic Doctors | Cosmedocs London",
    "Meet our team of expert aesthetic doctors at Cosmedocs. Dr. Ahmed Haq and Dr. Hena Haq bring extensive experience in cosmetic treatments and natural aesthetic enhancement.",
    "/team"
  );

  const teamMembers = [
    {
      name: "Dr A. Farhan Haq",
      title: "Expert Cosmetic Physician",
      image: "/lovable-uploads/fcb0e7d1-207b-4491-9e33-c13f7f7e4ecd.png",
      education: "Royal College of Surgeons, Medical School Graduate",
      link: "/team/dr-ahmed-haq",
      bookingUrl: "https://med.as.me/harleystreet",
      description: "An extensively experienced practitioner with expertise in complex facial contouring and advanced aesthetic treatments. Dr. Haq leads our in-house team and trains cosmetic physicians at the Harley Street Institute."
    },
    {
      name: "Dr Hena Haq",
      title: "Cosmetic Physician",
      image: "/lovable-uploads/b90d3993-6cef-4758-8037-8c5461a2076c.png",
      education: "Oxford Medical Training • London & Kent GP Training",
      link: "/team/dr-hena-haq",
      bookingUrl: "https://med.as.me/harleystreet",
      description: "An Aesthetic Doctor whose holistic approach to client treatments has made her popular amongst her clients. Her special interest lies in subtle tweakments and natural outcomes."
    },
    {
      name: "Laerta Buzo",
      title: "Aesthetic Practitioner",
      image: laertaImage,
      education: "9+ Years Experience in Non-Surgical Aesthetic Treatments",
      link: "/team/laerta-buzo",
      bookingUrl: "https://med.as.me/alert",
      description: "An experienced Aesthetic Practitioner specialising in personalised treatment plans that combine injectables, skin boosters, laser and device-based treatments to achieve natural and balanced results."
    },
    {
      name: "Dr Hassan A. Mirza",
      title: "Consultant Dermatologist",
      image: hassanImage,
      education: "Royal College of Physicians • British Association of Dermatologists",
      link: "/team/dr-hassan-mirza",
      bookingUrl: "https://med.as.me/schedule/0cc7d92b/?categories[]=Dr.%20Hassan%20Dermatologist",
      description: "A highly experienced Consultant Dermatologist currently working within the NHS, delivering evidence-based, patient-focused dermatological care for acne, eczema, psoriasis and skin conditions."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Cosmedocs Medical Team",
    "url": "https://www.cosmedocs.com/team",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "member": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.title
    }))
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="aesthetic doctors London, cosmetic physicians team, Dr Ahmed Haq, Dr Hena Haq, Cosmedocs team, Harley Street doctors, aesthetic medicine experts" />
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
                  <Users className="h-8 w-8 text-yellow-400" />
                  <h1 className="text-4xl lg:text-5xl font-bold">Our Expert Team</h1>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  <AutoLinkedText>
                    Meet our distinguished team of aesthetic physicians who bring years of expertise 
                    and a commitment to natural enhancement. Our aesthetics is invisible art - 
                    transformation that speaks without saying a word.
                  </AutoLinkedText>
                </p>
                <div className="inline-flex items-center gap-2 text-yellow-400 text-lg">
                  <span>Bold • Natural • Always Your Way</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <div className="max-w-6xl mx-auto relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-6">
                  {teamMembers.map((member, index) => (
                    <CarouselItem key={member.name} className="pl-6 basis-full lg:basis-1/2">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full"
                      >
                        <Card className="h-full border-border hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg">
                          <CardContent className="p-8">
                            <div className="flex flex-col items-center text-center">
                              {/* Doctor Photo */}
                              <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-yellow-600/20 rounded-full rotate-3"></div>
                                <img
                                  src={member.image}
                                  alt={`${member.name} - ${member.title} at Cosmedocs London`}
                                  className="relative w-48 h-48 rounded-full object-cover shadow-xl"
                                  loading="lazy"
                                  width="192"
                                  height="192"
                                />
                              </div>

                              {/* Doctor Info */}
                              <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                                <p className="text-lg text-yellow-600 mb-3">{member.title}</p>
                                <div className="flex items-center justify-center gap-2 mb-4">
                                  <GraduationCap className="h-4 w-4 text-yellow-400" />
                                  <span className="text-sm text-muted-foreground">{member.education}</span>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                <AutoLinkedText>{member.description}</AutoLinkedText>
                              </p>

                              {/* Action Buttons */}
                              <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <Link to={member.link} className="flex-1">
                                  <Button variant="outline" className="w-full">
                                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </Link>
                                <a 
                                  href={member.bookingUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex-1"
                                >
                                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                                    Book Appointment
                                  </Button>
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex -left-12 bg-background border-yellow-400/50 hover:bg-yellow-400/10 hover:border-yellow-400" />
                <CarouselNext className="hidden lg:flex -right-12 bg-background border-yellow-400/50 hover:bg-yellow-400/10 hover:border-yellow-400" />
                
                {/* Mobile navigation arrows */}
                <div className="flex lg:hidden justify-center gap-4 mt-6">
                  <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-background border-yellow-400/50 hover:bg-yellow-400/10 hover:border-yellow-400" />
                  <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-background border-yellow-400/50 hover:bg-yellow-400/10 hover:border-yellow-400" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Team Excellence Section */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8">Why Choose Our Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Extensive Experience</h3>
                  <p className="text-gray-300 text-sm">
                    Combined decades of experience in aesthetic medicine and advanced training
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Natural Results</h3>
                  <p className="text-gray-300 text-sm">
                    Specializing in subtle enhancements that maintain your natural beauty
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Professional Training</h3>
                  <p className="text-gray-300 text-sm">
                    Leaders in aesthetic education, training fellow medical professionals
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Book a consultation with our expert team and discover the art of natural enhancement.
                Our aesthetics is invisible art • Bold • Natural • Always Your Way
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                    Book Consultation
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Cosmedocs Expert Aesthetic Medicine Team London Harley Street</h2>
          <p>
            Meet the expert aesthetic medicine team at Cosmedocs London, featuring Dr Ahmed Haq and Dr Hena Haq. 
            Our distinguished cosmetic physicians bring extensive experience in non-surgical aesthetic treatments, 
            advanced injectable procedures, and natural enhancement techniques. Located in London's prestigious 
            medical district, our team specializes in facial contouring, subtle tweakments, and comprehensive 
            aesthetic treatments that embody our philosophy of invisible art - bold, natural, always your way.
          </p>
          <p>
            Dr Ahmed Haq, Expert Cosmetic Physician, Royal College Surgeons graduate, specializes in advanced 
            injectable procedures, facial contouring, non-surgical jaw reduction. Dr Hena Haq, Oxford Medical 
            Training, London Kent GP training, Program Director Harley Street Institute, specializes in subtle 
            tweakments, holistic approach, natural aesthetic outcomes. Both doctors available for consultation 
            booking aesthetic medicine London Birmingham Manchester Cardiff Cosmedocs aesthetic clinic expert 
            physicians natural enhancement invisible art philosophy aesthetic excellence team expertise.
          </p>
        </div>
      </div>
    </>
  );
};

export default Team;