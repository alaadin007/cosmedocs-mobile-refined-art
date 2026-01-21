import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="page-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <Link 
                to="/dermal-fillers" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
              >
                ← Back to Dermal Fillers
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                Dermal Filler Areas & Facial Concerns
              </h1>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl">
                <p>
                  Facial ageing is structural and multi-dimensional. The lines, folds, and hollows that appear over time are rarely isolated problems — they are often symptoms of deeper changes occurring across the face.
                </p>
                <p>
                  Effective dermal filler treatment requires assessment, not point-filling. Understanding why certain concerns develop helps guide appropriate treatment planning. This page explains common facial areas and concerns — the procedures themselves are covered on individual treatment pages.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Understanding Facial Ageing */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">Understanding Facial Ageing</h2>
                <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                  <p>
                    The visible signs of facial ageing are the result of changes occurring at multiple levels — not just the skin surface. To understand why certain concerns develop, it helps to recognise the underlying processes at work.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                      <p className="text-white font-medium mb-2">Collagen Loss</p>
                      <p className="text-gray-400 text-base">
                        From our mid-twenties, collagen production declines. The skin loses firmness and elasticity, becoming thinner and less resilient over time.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                      <p className="text-white font-medium mb-2">Fat Pad Descent</p>
                      <p className="text-gray-400 text-base">
                        The fat pads that give youthful faces their soft contours begin to shrink and descend, creating hollowing in some areas and heaviness in others.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                      <p className="text-white font-medium mb-2">Bone Resorption</p>
                      <p className="text-gray-400 text-base">
                        The facial skeleton gradually loses volume, particularly around the eye sockets, temples, and jaw. This reduces structural support for overlying tissues.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                      <p className="text-white font-medium mb-2">Skin Quality Changes</p>
                      <p className="text-gray-400 text-base">
                        Sun exposure, lifestyle factors, and natural ageing affect skin texture, hydration, and ability to recover from repetitive movements.
                      </p>
                    </div>
                  </div>
                  <p className="mt-6">
                    These processes interact with each other. A fold that appears in one location may be caused by volume loss elsewhere. This is why effective treatment often requires looking beyond the obvious symptom.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Facial Areas & Concerns */}
        <section className="py-16 bg-gray-900/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-white">Common Facial Areas & Concerns</h2>
                <p className="text-gray-300 text-lg mb-12">
                  The following are among the most common concerns patients present with. Each is explained in context — understanding why these changes occur is the first step toward appropriate treatment.
                </p>

                {/* Nasolabial Folds */}
                <div id="nasolabial" className="mb-12 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-white mb-4">Nasolabial Folds (Smile Lines)</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Nasolabial folds are the lines that run from the sides of the nose to the corners of the mouth. Everyone has them — they become more prominent with age as the mid-face loses volume and the cheek fat pads descend.
                    </p>
                    <p>
                      These folds are not simply "lines to fill". They are often a visible consequence of volume loss higher in the face. When the cheeks lose support, the skin and soft tissue settle downward, deepening the fold at the nasolabial junction.
                    </p>
                    <p>
                      Overfilling nasolabial folds directly can create an unnatural, puffy appearance. A more effective approach often involves restoring support in the mid-face — allowing the fold to soften naturally as structure is returned.
                    </p>
                    <p className="text-gray-400 text-base mt-4">
                      Related treatments: <Link to="/cheek-filler" className="text-white/80 hover:text-white underline underline-offset-2">Cheek filler</Link>, <Link to="/dermal-fillers" className="text-white/80 hover:text-white underline underline-offset-2">Full-face rejuvenation</Link>
                    </p>
                  </div>
                </div>

                {/* Marionette Lines */}
                <div id="marionette" className="mb-12 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-white mb-4">Marionette Lines</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Marionette lines extend downward from the corners of the mouth toward the chin. They can create a downturned or saddened expression, even when the face is at rest.
                    </p>
                    <p>
                      Like nasolabial folds, marionette lines are closely related to mid-face ageing. As the cheek fat pads descend and the jawline loses definition, the lower face begins to show the effects of reduced structural support.
                    </p>
                    <p>
                      Treatment typically involves assessing the entire lower face — including the chin, jawline, and oral commissures — rather than focusing solely on the lines themselves. Restoring balance to the lower third of the face often produces more natural and lasting improvement.
                    </p>
                    <p className="text-gray-400 text-base mt-4">
                      Related treatments: <Link to="/chin-filler" className="text-white/80 hover:text-white underline underline-offset-2">Chin filler</Link>, <Link to="/jawline-filler" className="text-white/80 hover:text-white underline underline-offset-2">Jawline filler</Link>
                    </p>
                  </div>
                </div>

                {/* Pre-Jowl Sulcus */}
                <div id="prejowl" className="mb-12 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-white mb-4">Pre-Jowl Sulcus</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      The pre-jowl sulcus is the hollow or indentation that forms just in front of developing jowls, along the jawline. It occurs when the chin loses structural support and the tissues beside it begin to sag, creating a visible depression.
                    </p>
                    <p>
                      This concern is often linked to overall jawline laxity and lower face ageing. As the mandible (jaw bone) loses volume and the overlying tissues descend, the contrast between the chin and the developing jowl becomes more pronounced.
                    </p>
                    <p>
                      Addressing the pre-jowl sulcus typically involves restoring volume to the chin and potentially the jawline, creating a smoother transition and reducing the appearance of jowling.
                    </p>
                    <p className="text-gray-400 text-base mt-4">
                      Related treatments: <Link to="/chin-filler" className="text-white/80 hover:text-white underline underline-offset-2">Chin filler</Link>, <Link to="/jawline-filler" className="text-white/80 hover:text-white underline underline-offset-2">Jawline filler</Link>
                    </p>
                  </div>
                </div>

                {/* Perioral Lines */}
                <div id="perioral" className="mb-12 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-white mb-4">Perioral Lines (Smoker's Lines)</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Perioral lines are the fine vertical lines that appear on and around the lips, sometimes called "smoker's lines" or "lipstick lines". They develop due to a combination of skin quality changes and repetitive muscle movement.
                    </p>
                    <p>
                      The skin around the mouth is particularly thin and prone to wrinkling. Years of speaking, drinking, and other movements create creases that, over time, become etched into the skin surface. Smoking accelerates this process, though anyone can develop these lines.
                    </p>
                    <p>
                      Treatment may involve a combination approach, addressing both the lines themselves and the underlying skin quality. The goal is softening rather than eliminating — complete removal of natural movement lines can appear unnatural.
                    </p>
                    <p className="text-gray-400 text-base mt-4">
                      Related treatments: <Link to="/lip-fillers" className="text-white/80 hover:text-white underline underline-offset-2">Lip enhancement</Link>, <Link to="/dermal-fillers" className="text-white/80 hover:text-white underline underline-offset-2">Full-face rejuvenation</Link>
                    </p>
                  </div>
                </div>

                {/* Facial Volume Loss */}
                <div id="volume" className="mb-12 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-white mb-4">Facial Volume Loss</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Facial volume loss is a global phenomenon rather than an isolated concern. It affects multiple areas simultaneously — cheeks, temples, under-eyes, and the perioral region — and is a primary driver of the "tired" or "deflated" appearance that develops with age.
                    </p>
                    <p>
                      When volume is lost from the face, the effects cascade. The cheeks flatten, the under-eye hollows deepen, nasolabial folds become more prominent, and the jawline loses definition. Treating one area in isolation often fails to address the overall picture.
                    </p>
                    <p>
                      A full-face approach to volume restoration — treating strategically across multiple areas — typically produces more harmonious results than addressing individual concerns in isolation. The goal is restoring structural support, not simply "filling".
                    </p>
                    <p className="text-gray-400 text-base mt-4">
                      Related treatments: <Link to="/cheek-filler" className="text-white/80 hover:text-white underline underline-offset-2">Cheek filler</Link>, <Link to="/dermal-fillers" className="text-white/80 hover:text-white underline underline-offset-2">Full-face rejuvenation</Link>
                    </p>
                  </div>
                </div>

                {/* Temple Hollowing */}
                <div id="temples" className="mb-6 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-white mb-4">Temple Hollowing</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Temple hollowing occurs when the temporal fossa — the area at the sides of the forehead, between the eyebrow and hairline — loses volume. This can create a gaunt or aged appearance, even when the rest of the face looks relatively youthful.
                    </p>
                    <p>
                      The temples are often overlooked in facial rejuvenation, yet they significantly impact overall facial proportions. Volume loss here can make the upper face appear narrow or skeletal, and may accentuate other ageing changes.
                    </p>
                    <p>
                      Temple treatment requires particular expertise due to the anatomy of the region. The area contains important blood vessels and nerves, making precise technique essential. When performed correctly, temple restoration contributes to a more balanced, rested appearance.
                    </p>
                    <p className="text-gray-400 text-base mt-4">
                      Related treatments: <Link to="/temple-filler-london" className="text-white/80 hover:text-white underline underline-offset-2">Temple filler</Link>, <Link to="/dermal-fillers" className="text-white/80 hover:text-white underline underline-offset-2">Full-face rejuvenation</Link>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Assessment Matters */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">Why Assessment Matters More Than Area Selection</h2>
                <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Many patients arrive at consultation having already decided which area they want treated. While this information is valuable, the most effective outcomes come from doctor-led facial analysis rather than patient-directed area selection.
                  </p>
                  <p>
                    A concern in one area is often caused by changes in another. Treating the symptom rather than the underlying cause may produce short-term improvement but rarely achieves lasting, natural results.
                  </p>
                  <p>
                    At CosmeDocs, our doctors assess the face as a complete structure — considering bone, fat, muscle, and skin at every level. This allows us to recommend treatment that addresses root causes rather than surface-level symptoms.
                  </p>
                  <div className="bg-black/40 border border-white/10 rounded-xl p-6 mt-8">
                    <p className="text-white font-medium mb-3">Our assessment-first approach means:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Understanding why changes have occurred, not just where</li>
                      <li>• Recommending treatment based on anatomy, not trends</li>
                      <li>• Planning for long-term outcomes, not quick fixes</li>
                      <li>• Advising against treatment when it isn't appropriate</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 bg-gray-900/30 border-y border-white/10">
          <div className="page-container">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-primary" size={20} />
                </div>
                <p className="text-sm font-medium text-white">GMC-Registered</p>
                <p className="text-xs text-gray-400">Doctors</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-primary" size={20} />
                </div>
                <p className="text-sm font-medium text-white">Harley Street</p>
                <p className="text-xs text-gray-400">London</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Users className="text-primary" size={20} />
                </div>
                <p className="text-sm font-medium text-white">Since 2007</p>
                <p className="text-xs text-gray-400">17+ Years</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Next Steps</h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  <p>
                    If you're concerned about facial ageing — whether specific areas or general changes — the first step is a consultation with one of our doctors.
                  </p>
                  <p>
                    We take time to understand your concerns, assess your facial anatomy, and discuss what treatment can realistically achieve. There is no pressure to proceed.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-semibold" asChild>
                    <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg" asChild>
                    <Link to="/dermal-fillers">
                      Back to Dermal Fillers
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <p>Dermal filler areas and facial concerns explained by CosmeDocs Harley Street doctors. Educational guide to nasolabial folds, marionette lines, pre-jowl sulcus, perioral lines, facial volume loss, and temple hollowing. Doctor-led assessment for natural-looking dermal filler treatment in London. Understanding facial ageing and structural changes for appropriate treatment planning.</p>
        </div>
      </div>
    </>
  );
};

export default DermalFillerAreas;
