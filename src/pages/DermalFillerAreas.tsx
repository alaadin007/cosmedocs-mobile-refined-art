import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Assets
import heroBanner from "@/assets/banners/filler-areas-hero.jpg";
import fillerBA1 from "@/assets/before-after/filler-ba-1.jpg";
import fillerBA2 from "@/assets/before-after/filler-ba-2.jpg";
import ceFdaLogo from "@/assets/logos/ce-fda.png";

const facialConcerns = [
  {
    id: "nasolabial",
    title: "Nasolabial Folds (Smile Lines)",
    content: `Nasolabial folds are the lines that run from the sides of the nose to the corners of the mouth. Everyone has them — they become more prominent with age as the mid-face loses volume and the cheek fat pads descend.

These folds are not simply "lines to fill". They are often a visible consequence of volume loss higher in the face. When the cheeks lose support, the skin and soft tissue settle downward, deepening the fold at the nasolabial junction.

Overfilling nasolabial folds directly can create an unnatural, puffy appearance. A more effective approach often involves restoring support in the mid-face — allowing the fold to soften naturally as structure is returned.`,
    relatedTreatments: [
      { label: "Cheek filler", link: "/cheek-filler" },
      { label: "Full-face rejuvenation", link: "/dermal-fillers" }
    ]
  },
  {
    id: "marionette",
    title: "Marionette Lines",
    content: `Marionette lines extend downward from the corners of the mouth toward the chin. They can create a downturned or saddened expression, even when the face is at rest.

Like nasolabial folds, marionette lines are closely related to mid-face ageing. As the cheek fat pads descend and the jawline loses definition, the lower face begins to show the effects of reduced structural support.

Treatment typically involves assessing the entire lower face — including the chin, jawline, and oral commissures — rather than focusing solely on the lines themselves. Restoring balance to the lower third of the face often produces more natural and lasting improvement.`,
    relatedTreatments: [
      { label: "Chin filler", link: "/chin-filler" },
      { label: "Jawline filler", link: "/jawline-filler" }
    ]
  },
  {
    id: "prejowl",
    title: "Pre-Jowl Sulcus",
    content: `The pre-jowl sulcus is the hollow or indentation that forms just in front of developing jowls, along the jawline. It occurs when the chin loses structural support and the tissues beside it begin to sag, creating a visible depression.

This concern is often linked to overall jawline laxity and lower face ageing. As the mandible (jaw bone) loses volume and the overlying tissues descend, the contrast between the chin and the developing jowl becomes more pronounced.

Addressing the pre-jowl sulcus typically involves restoring volume to the chin and potentially the jawline, creating a smoother transition and reducing the appearance of jowling.`,
    relatedTreatments: [
      { label: "Chin filler", link: "/chin-filler" },
      { label: "Jawline filler", link: "/jawline-filler" }
    ]
  },
  {
    id: "perioral",
    title: "Perioral Lines (Smoker's Lines)",
    content: `Perioral lines are the fine vertical lines that appear on and around the lips, sometimes called "smoker's lines" or "lipstick lines". They develop due to a combination of skin quality changes and repetitive muscle movement.

The skin around the mouth is particularly thin and prone to wrinkling. Years of speaking, drinking, and other movements create creases that, over time, become etched into the skin surface. Smoking accelerates this process, though anyone can develop these lines.

Treatment may involve a combination approach, addressing both the lines themselves and the underlying skin quality. The goal is softening rather than eliminating — complete removal of natural movement lines can appear unnatural.`,
    relatedTreatments: [
      { label: "Lip enhancement", link: "/lip-fillers" },
      { label: "Full-face rejuvenation", link: "/dermal-fillers" }
    ]
  },
  {
    id: "volume",
    title: "Facial Volume Loss",
    content: `Facial volume loss is a global phenomenon rather than an isolated concern. It affects multiple areas simultaneously — cheeks, temples, under-eyes, and the perioral region — and is a primary driver of the "tired" or "deflated" appearance that develops with age.

When volume is lost from the face, the effects cascade. The cheeks flatten, the under-eye hollows deepen, nasolabial folds become more prominent, and the jawline loses definition. Treating one area in isolation often fails to address the overall picture.

A full-face approach to volume restoration — treating strategically across multiple areas — typically produces more harmonious results than addressing individual concerns in isolation. The goal is restoring structural support, not simply "filling".`,
    relatedTreatments: [
      { label: "Cheek filler", link: "/cheek-filler" },
      { label: "Full-face rejuvenation", link: "/dermal-fillers" }
    ]
  },
  {
    id: "temples",
    title: "Temple Hollowing",
    content: `Temple hollowing occurs when the temporal fossa — the area at the sides of the forehead, between the eyebrow and hairline — loses volume. This can create a gaunt or aged appearance, even when the rest of the face looks relatively youthful.

The temples are often overlooked in facial rejuvenation, yet they significantly impact overall facial proportions. Volume loss here can make the upper face appear narrow or skeletal, and may accentuate other ageing changes.

Temple treatment requires particular expertise due to the anatomy of the region. The area contains important blood vessels and nerves, making precise technique essential. When performed correctly, temple restoration contributes to a more balanced, rested appearance.`,
    relatedTreatments: [
      { label: "Temple filler", link: "/temple-filler-london" },
      { label: "Full-face rejuvenation", link: "/dermal-fillers" }
    ]
  }
];

const ageingFactors = [
  {
    title: "Collagen Loss",
    description: "From our mid-twenties, collagen production declines. The skin loses firmness and elasticity, becoming thinner and less resilient over time."
  },
  {
    title: "Fat Pad Descent",
    description: "The fat pads that give youthful faces their soft contours begin to shrink and descend, creating hollowing in some areas and heaviness in others."
  },
  {
    title: "Bone Resorption",
    description: "The facial skeleton gradually loses volume, particularly around the eye sockets, temples, and jaw. This reduces structural support for overlying tissues."
  },
  {
    title: "Skin Quality Changes",
    description: "Sun exposure, lifestyle factors, and natural ageing affect skin texture, hydration, and ability to recover from repetitive movements."
  }
];

const DermalFillerAreas = () => {
  const seoData = generateSEOMetadata(
    "Dermal Filler Areas & Facial Concerns | CosmeDocs",
    "Learn about common facial concerns treated with dermal fillers, including smile lines and volume loss. Doctor-led assessment on Harley Street.",
    "/treatments/dermal-fillers/areas/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/treatments/dermal-fillers/areas/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/treatments/dermal-fillers/areas/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://cosmedocs.co.uk/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "medicalSpecialty": "Aesthetic Medicine",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "name": "Dermal Filler Areas & Facial Concerns",
                "description": "Educational guide to common facial concerns addressed with dermal fillers",
                "url": "https://cosmedocs.co.uk/treatments/dermal-fillers/areas/"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Banner Section */}
        <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroBanner} 
              alt="Facial profile showing natural contours and structure"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="page-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <Link 
                  to="/treatments/dermal-fillers/" 
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
                >
                  ← Back to Dermal Fillers
                </Link>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Dermal Filler Areas & Facial Concerns
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Understanding why facial changes occur is the first step toward appropriate treatment. This guide explains common concerns — not procedures.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 border-y border-white/10 bg-black/50">
          <div className="page-container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Doctor-Led Clinic</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Harley Street, London</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">15+ Years Experience</span>
              </div>
              <img src={ceFdaLogo} alt="CE and FDA approved" className="h-6 opacity-60" />
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-20">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Facial ageing is structural and multi-dimensional. The lines, folds, and hollows that appear over time are rarely isolated problems — they are often symptoms of deeper changes occurring across the face. Effective dermal filler treatment requires assessment, not point-filling.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Facial Ageing */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Understanding Facial Ageing</h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                  The visible signs of facial ageing result from changes at multiple levels — not just the skin surface.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ageingFactors.map((factor, index) => (
                    <motion.div
                      key={factor.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black/40 border border-white/10 rounded-xl p-6 hover:border-[#C9A050]/30 transition-colors"
                    >
                      <p className="text-white font-semibold mb-3 text-lg">{factor.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{factor.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Facial Areas & Concerns - Accordion */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Common Facial Areas & Concerns</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Select a concern to learn why these changes occur and how they relate to overall facial structure.
                </p>
              </motion.div>

              <Accordion type="single" collapsible className="space-y-4">
                {facialConcerns.map((concern, index) => (
                  <motion.div
                    key={concern.id}
                    id={concern.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24"
                  >
                    <AccordionItem 
                      value={concern.id}
                      className="border border-white/10 rounded-xl overflow-hidden bg-gray-900/30 data-[state=open]:border-[#C9A050]/30"
                    >
                      <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors [&[data-state=open]>svg]:rotate-180">
                        <span className="text-left text-lg font-semibold text-white">{concern.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="space-y-4 text-gray-300 leading-relaxed pt-2">
                          {concern.content.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                          <div className="pt-4 border-t border-white/10 mt-6">
                            <p className="text-sm text-gray-500 mb-2">Related treatments:</p>
                            <div className="flex flex-wrap gap-3">
                              {concern.relatedTreatments.map((treatment) => (
                                <Link
                                  key={treatment.link}
                                  to={treatment.link}
                                  className="inline-flex items-center gap-1 text-[#C9A050] hover:text-[#B8924A] text-sm font-medium transition-colors"
                                >
                                  {treatment.label}
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Before & After Preview */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Real Patient Results</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  View authentic dermal filler transformations from our Harley Street clinic.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                >
                  <img 
                    src={fillerBA1} 
                    alt="Before and after dermal filler treatment showing natural facial rejuvenation"
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">Full-face rejuvenation with dermal fillers</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                >
                  <img 
                    src={fillerBA2} 
                    alt="Before and after lip filler treatment showing natural enhancement"
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">Natural lip enhancement</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <Link to="/before-after/dermal-fillers/">
                  <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-6 rounded-full text-lg">
                    View Full Before & After Gallery
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Assessment Matters */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Why Assessment Matters More Than Area Selection</h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Patients often arrive knowing exactly where they want filler placed. While this is understandable — we notice specific concerns in the mirror — effective treatment requires stepping back to assess the face as a whole.
                  </p>
                  <p>
                    A fold or hollow in one location may be caused by structural changes elsewhere. Treating the symptom without addressing the underlying cause often produces disappointing or short-lived results. In some cases, it can create new problems.
                  </p>
                  <p>
                    Doctor-led assessment considers facial proportions, structural support, skin quality, and how different areas interact. This allows for treatment planning that produces natural, balanced results — not just "filled" areas.
                  </p>
                  <p className="text-gray-400 text-base">
                    At CosmeDocs, every consultation begins with a comprehensive facial analysis. We believe in explaining what we observe and recommending treatment based on what will achieve the best outcome — not simply fulfilling requests for filler in specific locations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="py-20 bg-gradient-to-b from-accent to-black">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready for a Consultation?</h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Our doctors take time to understand your concerns and explain what treatment approaches may be appropriate. Every consultation includes a full facial assessment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/treatments/dermal-fillers/">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                      Explore Dermal Fillers
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DermalFillerAreas;
