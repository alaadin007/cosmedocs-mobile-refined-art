
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Eye, Images } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Home = () => {
  const [isBeforeAfterOpen, setIsBeforeAfterOpen] = useState(false);
  
  const lipFillerBeforeAfterImages = [
    {
      src: "/lovable-uploads/1f53b666-2cf1-40ac-83f2-df9ea4d376af.png",
      alt: "Lip filler before and after - natural fullness",
      caption: "Natural volume enhancement"
    },
    {
      src: "/lovable-uploads/c454131a-e502-4b22-ac0d-480d75330a86.png",
      alt: "Lip filler before and after - enhanced definition",
      caption: "Enhanced lip definition and volume"
    },
    {
      src: "/lovable-uploads/b4cfd443-83fa-4310-bdcd-6345b85c20f5.png",
      alt: "Lip filler before and after - subtle enhancement",
      caption: "Subtle enhancement with defined border"
    },
    {
      src: "/lovable-uploads/cc52c444-86d0-429d-ae4b-da84e429f406.png",
      alt: "Lip filler before and after - balanced enhancement",
      caption: "Balanced lip enhancement"
    },
    {
      src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png",
      alt: "Lip filler various results",
      caption: "Various client results showing natural enhancement"
    },
    {
      src: "/lovable-uploads/8ead2a70-fe92-4c88-b50d-67219debbdf3.png",
      alt: "Lip filler subtle enhancement",
      caption: "Subtle enhancement with our signature invisible art technique"
    },
    {
      src: "/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png",
      alt: "Balanced lip enhancement",
      caption: "Balanced lip enhancement for natural-looking fullness"
    }
  ];

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
            description: "Anti-wrinkle injections for frown lines, crows feet & forehead lines"
          }, {
            title: "Dermal Fillers",
            description: "Restore volume and enhance facial features"
          }, {
            title: "Lip Fillers",
            description: "Subtle enhancement for natural-looking fullness",
            hasBeforeAfter: true
          }, {
            title: "Non-Surgical Nose Job",
            description: "Reshape without surgery"
          }, {
            title: "Skin Boosters",
            description: "Deep hydration and rejuvenation"
          }, {
            title: "PDO Threads",
            description: "Lift and tighten for a youthful appearance"
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
                {treatment.hasBeforeAfter ? <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>See B/A</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="bg-black border-gray-800 w-full max-w-3xl p-6">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-1">Lip Filler Before & After</DialogTitle>
                        <DialogDescription className="text-gray-300 mb-4">
                          Results achieved with our premium lip filler treatments
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="w-full">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {lipFillerBeforeAfterImages.map((image, index) => (
                              <CarouselItem key={index}>
                                <div className="flex flex-col items-center">
                                  <div className="w-full aspect-square rounded-md overflow-hidden">
                                    <img 
                                      src={image.src} 
                                      alt={image.alt} 
                                      className="w-full h-full object-contain bg-black" 
                                    />
                                  </div>
                                  <p className="text-center text-gray-300 mt-3 mb-1">{image.caption}</p>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <div className="flex justify-center mt-2">
                            <CarouselPrevious className="static transform-none mx-2" />
                            <CarouselNext className="static transform-none mx-2" />
                          </div>
                        </Carousel>
                      </div>
                    </DialogContent>
                  </Dialog> : <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                    Learn more →
                  </Button>}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]" aria-labelledby="philosophy-heading">
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
