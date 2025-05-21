import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Eye, Images } from "lucide-react";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Home = () => {
  const [isBeforeAfterOpen, setIsBeforeAfterOpen] = useState(false);
  const [isRejuvenationDialogOpen, setIsRejuvenationDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const botoxBeforeAfterImages = [{
    src: "/lovable-uploads/2b95a6f3-bcce-41f4-833d-8be389a9e323.png",
    alt: "Botox before and after - forehead treatment",
    caption: "Frown lines treatment showing natural smoothing of forehead"
  }, {
    src: "/lovable-uploads/a3c6b279-09fc-445c-acc4-ae5ce597f839.png",
    alt: "Botox before and after - forehead lines",
    caption: "Forehead lines treatment showing significant improvement"
  }];
  const lipFillerBeforeAfterImages = [{
    src: "/lovable-uploads/1f53b666-2cf1-40ac-83f2-df9ea4d376af.png",
    alt: "Lip filler before and after - natural fullness",
    caption: "Natural volume enhancement"
  }, {
    src: "/lovable-uploads/c454131a-e502-4b22-ac0d-480d75330a86.png",
    alt: "Lip filler before and after - enhanced definition",
    caption: "Enhanced lip definition and volume"
  }, {
    src: "/lovable-uploads/b4cfd443-83fa-4310-bdcd-6345b85c20f5.png",
    alt: "Lip filler before and after - subtle enhancement",
    caption: "Subtle enhancement with defined border"
  }, {
    src: "/lovable-uploads/cc52c444-86d0-429d-ae4b-da84e429f406.png",
    alt: "Lip filler before and after - balanced enhancement",
    caption: "Balanced lip enhancement"
  }, {
    src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png",
    alt: "Lip filler various results",
    caption: "Various client results showing natural enhancement"
  }, {
    src: "/lovable-uploads/8ead2a70-fe92-4c88-b50d-67219debbdf3.png",
    alt: "Lip filler subtle enhancement",
    caption: "Subtle enhancement with our signature invisible art technique"
  }, {
    src: "/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png",
    alt: "Balanced lip enhancement",
    caption: "Balanced lip enhancement for natural-looking fullness"
  }, {
    src: "/lovable-uploads/36b15e21-1905-49d8-b920-68bc23b235c5.png",
    alt: "Subtle lip enhancement result",
    caption: "Subtle enhancement for natural-looking results"
  }];
  const noseJobBeforeAfterImages = [{
    src: "/lovable-uploads/8d22b27a-c2d5-4790-abac-6c6df301559a.png",
    alt: "Non-surgical nose job - dorsal correction",
    caption: "Dorsal correction for a smoother nasal profile"
  }, {
    src: "/lovable-uploads/107172b2-4707-43ce-9307-e5213da69545.png",
    alt: "Non-surgical nose job - subtle refinement",
    caption: "Subtle refinement of the nasal bridge"
  }, {
    src: "/lovable-uploads/7ffa8acc-3a5b-4314-a5a4-340dec391817.png",
    alt: "Non-surgical nose job - gradual transformation",
    caption: "Progressive transformation showing results over time (Jan 2017 to present)"
  }, {
    src: "/lovable-uploads/f30d3be7-22b0-4ba5-800f-03956e77dcc8.png",
    alt: "Non-surgical nose job - bridge and bump correction",
    caption: "Raised bridge and concealed bump for a refined profile"
  }, {
    src: "/lovable-uploads/97e9a4a2-debd-4216-879b-d78feffa8cba.png",
    alt: "Non-surgical nose job - profile enhancement",
    caption: "Dermal fillers to treat complications post surgical rhinoplasty"
  }, {
    src: "/lovable-uploads/8dfa88f0-78d4-4859-8727-a4828a7e8d8a.png",
    alt: "Non-surgical nose job - angular correction",
    caption: "Concealed bump and less angular appearance for a softer profile"
  }, {
    src: "/lovable-uploads/75803d61-d5ce-414e-96c8-8fdc7c0e03ba.png",
    alt: "Non-surgical nose job - refined tip",
    caption: "Refined nasal tip with improved contour"
  }, {
    src: "/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png",
    alt: "Non-surgical nose job - proximal and distal correction",
    caption: "Proximal & distal correction for improved nasal harmony"
  }, {
    src: "/lovable-uploads/1c08600a-b561-48ca-ae0a-246717da30a7.png",
    alt: "Non-surgical nose job - subtle profile enhancement",
    caption: "Subtle profile enhancement with Cosmedocs technique"
  }, {
    src: "/lovable-uploads/767d5e70-2055-4549-8fd6-26fdcf079a54.png",
    alt: "Non-surgical nose job - bridge enhancement",
    caption: <>Correction of deviated nose with definition & contour improvement (<a href="https://www.youtube.com/watch?v=_yO12RM4-34" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">vlog</a>)</>
  }];
  const dermalFillerBeforeAfterImages = [{
    src: "/lovable-uploads/8fc7a776-c255-4ca9-a8d9-573f4083b7f1.png",
    alt: "Dermal filler before and after - tear trough treatment",
    caption: "Tear trough treatment for reduced under-eye hollowing"
  }, {
    src: "/lovable-uploads/0146916c-8864-4889-b0d5-b330859a2c85.png",
    alt: "Dermal filler profile enhancement",
    caption: "Profile enhancement with natural-looking results"
  }, {
    src: "/lovable-uploads/3899717b-6f5a-46d5-9c4d-0f0b20c0ae5f.png",
    alt: "Dermal filler facial enhancement",
    caption: "Subtle facial enhancement for improved definition"
  }, {
    src: "/lovable-uploads/d91b1bcd-3f3b-4735-8157-eea0f5374eeb.png",
    alt: "Dermal filler jawline contouring",
    caption: "Jawline contouring and cheek enhancement"
  }, {
    src: "/lovable-uploads/fbec93fe-bce2-40ac-aa45-96b8a95170ba.png",
    alt: "Dermal filler chin enhancement",
    caption: "V-line chin enhancement for a balanced profile"
  }, {
    src: "/lovable-uploads/37e1c9db-26f6-439b-94c2-fd05fa7e385f.png",
    alt: "Dermal filler full face rejuvenation",
    caption: "Full face rejuvenation with targeted enhancement"
  }];
  const skinBoosterBeforeAfterImages = [{
    src: "/lovable-uploads/fe1449b5-4bf0-4e68-a837-160d3d506008.png",
    alt: "Skin boosters before and after - improved skin texture",
    caption: "Significant improvement in skin texture and tone after treatment"
  }, {
    src: "/lovable-uploads/57903e64-3bf7-4e89-aeec-61d2fdc9c579.png",
    alt: "Skin boosters - profile enhancement",
    caption: "Profile enhancement showing improved skin quality and facial contour"
  }, {
    src: "/lovable-uploads/984ff472-7676-48a9-a57e-c23ca2592741.png",
    alt: "Skin boosters - jawline definition",
    caption: "Improved jawline definition and skin tightening"
  }, {
    src: "/lovable-uploads/8e5a45ba-9dab-4b06-a44b-2bddfaacfe4b.png",
    alt: "Skin boosters - profile enhancement",
    caption: "Enhanced profile showing improvement in skin structure and support"
  }, {
    src: "/lovable-uploads/805ffc38-d960-4e8e-9af1-9b3d21af13ed.png",
    alt: "Skin boosters - facial rejuvenation",
    caption: "Complete facial rejuvenation showing improved skin quality and texture"
  }];
  const chinAndJawlineEnhancementImages = [{
    src: "/lovable-uploads/9cc77b0b-a452-4720-9b74-2fdfedb42fba.png",
    alt: "Chin & jawline enhancement - profile improvement",
    caption: "Jawline and chin profile enhancement for improved facial balance"
  }, {
    src: "/lovable-uploads/c570f608-4aa7-4496-8e38-6322dfc81e16.png",
    alt: "V-line chin enhancement",
    caption: "V-line chin treatment for a more defined lower face"
  }, {
    src: "/lovable-uploads/c2be8e56-a215-4332-a5c5-ee6b3f431881.png",
    alt: "Cheek enhancement - before, during and after",
    caption: "Cheek enhancement process showing treatment application and final results"
  }];
  return <div className="bg-black text-white">
      <header>
        {/* SEO optimized hidden heading for crawlers */}
        <h1 className="sr-only">Cosmedocs - Premium Aesthetic Medicine Treatments | Botox, Dermal Fillers in London Harley Street</h1>
      </header>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              COSMEDOCS
            </motion.h2>
            
            <motion.p className="text-lg md:text-xl italic mb-6" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }}>
              *Our aesthetics is invisible art
            </motion.p>
            <motion.div className="mb-8 max-w-xl mx-auto" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }}>
              <p className="text-gray-300 mb-1">Bold • Natural • Always Your Way</p>
              <p className="text-gray-400 text-sm mt-4">
                Aesthetic medicine by Cosmedocs is minimal.<br />
                Quiet, not loud.<br />
                Invisible, not exaggerated.<br />
                It's transformation that speaks — without saying a word.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.9,
            duration: 0.6
          }}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Treatments Section */}
      <section className="py-20 bg-black" aria-labelledby="treatments-heading">
        <div className="page-container">
          <h2 id="treatments-heading" className="text-3xl font-bold mb-12 text-center">Popular Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Botox",
            description: "Anti-wrinkle injections for frown lines, crows feet & forehead lines",
            hasBeforeAfter: true,
            baType: "botox"
          }, {
            title: "Dermal Fillers",
            description: "Restore volume and enhance facial features. Pioneer of full face makeover & rejuvenation",
            hasBeforeAfter: true,
            baType: "dermal"
          }, {
            title: "Lip Fillers",
            description: "Subtle enhancement for natural-looking fullness",
            hasBeforeAfter: true,
            baType: "lip"
          }, {
            title: "Non-Surgical Nose Job",
            description: "Reshape without surgery",
            hasBeforeAfter: true,
            baType: "nose"
          }, {
            title: "Skin Boosters",
            description: "Deep hydration and rejuvenation",
            hasBeforeAfter: true,
            baType: "skin"
          }, {
            title: "Chin & Jawline Enhancement",
            description: "Define your facial profile",
            hasBeforeAfter: true,
            baType: "chin"
          }].map((treatment, index) => <motion.div key={treatment.title} className="bg-accent rounded-lg p-6" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
                <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{treatment.description}</p>
                {treatment.hasBeforeAfter && <BeforeAfterImageViewer images={treatment.baType === "nose" ? noseJobBeforeAfterImages : treatment.baType === "lip" ? lipFillerBeforeAfterImages : treatment.baType === "botox" ? botoxBeforeAfterImages : treatment.baType === "skin" ? skinBoosterBeforeAfterImages : treatment.baType === "chin" ? chinAndJawlineEnhancementImages : dermalFillerBeforeAfterImages} triggerLabel="See Before & After" title={`${treatment.title} Before & After`} description={`Results achieved with our premium ${treatment.title.toLowerCase()} treatments`} /> || <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                    Learn more →
                  </Button>}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Face Rejuvenation Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]" aria-labelledby="rejuvenation-heading">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <motion.h2 id="rejuvenation-heading" className="text-3xl font-bold mb-8 text-center" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              Our Face Rejuvenation Philosophy
            </motion.h2>
            
            <motion.p className="text-center text-gray-300 mb-10" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              At Cosmedocs, we've pioneered a comprehensive approach to facial rejuvenation that addresses all factors of aging for truly natural results.
            </motion.p>
            
            <Dialog open={isRejuvenationDialogOpen} onOpenChange={setIsRejuvenationDialogOpen}>
              <DialogTrigger asChild>
                <motion.div className="relative max-w-2xl mx-auto cursor-pointer group" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4,
                duration: 0.6
              }} viewport={{
                once: true
              }}>
                  <div className="overflow-hidden rounded-xl">
                    <img src="/lovable-uploads/fe1449b5-4bf0-4e68-a837-160d3d506008.png" alt="Face rejuvenation before and after results" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-center pb-8">
                      <p className="text-white text-sm md:text-base text-center px-4">
                        <Eye className="inline-block mr-2 h-4 w-4" /> 
                        Tap to explore our 3-step rejuvenation methodology
                      </p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              
              
            </Dialog>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              {[{
              number: "01",
              title: "Skin Clear Up",
              description: "Addressing uneven tone, pigmentation, pores, and texture for a flawless foundation."
            }, {
              number: "02",
              title: "Wrinkles in Motion",
              description: "Targeting dynamic wrinkles while preserving natural expressions and movement."
            }, {
              number: "03",
              title: "Volume Loss & Sagging",
              description: "Restoring youthful contours by addressing structural volume loss and skin laxity."
            }].map((step, index) => <Card key={step.number} className="bg-accent border-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <span className="text-sm font-normal text-gray-400 mr-2">{step.number}</span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A]" aria-labelledby="philosophy-heading">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 id="philosophy-heading" className="text-3xl font-bold mb-8" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              Our Philosophy
            </motion.h2>
            <motion.div className="space-y-4 text-lg text-gray-300" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <p>
                At Cosmedocs, we believe that the best aesthetic treatments are the ones nobody notices.
              </p>
              <p>
                Our approach is guided by subtlety and precision, ensuring that every treatment enhances your natural beauty without announcing itself.
              </p>
              <p className="text-white font-medium italic">
                "It's transformation that speaks — without saying a word."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111]" aria-labelledby="cta-heading">
        <div className="page-container">
          <div className="bg-accent rounded-2xl p-8 md:p-12 text-center">
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4">Ready to discover your refined aesthetic?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a consultation with our expert practitioners and begin your journey toward subtle, controlled transformation.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;