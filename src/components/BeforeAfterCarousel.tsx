import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface BeforeAfterImage {
  src: string;
  alt: string;
  treatment: string;
  description?: string;
}

const beforeAfterImages: BeforeAfterImage[] = [
  {
    src: "/lovable-uploads/04ac4a20-e938-4966-8d5b-cdba7b58908f.png",
    alt: "Microneedling treatment progression showing during, day 1, and day 3 results",
    treatment: "Microneedling",
    description: "Progressive healing and skin improvement over 3 days"
  },
  {
    src: "/lovable-uploads/cbb65a65-f2dc-4d3b-a5ae-7f2596f129f4.png",
    alt: "Face shape transformation showing square to oval facial contouring results",
    treatment: "Facial Contouring",
    description: "Reshaping facial structure for enhanced natural beauty"
  },
  {
    src: "/lovable-uploads/def5f295-bb56-4f08-9271-7e38269dffc8.png",
    alt: "Dorsal nose correction before and after non-surgical nose job",
    treatment: "Non-Surgical Nose Job",
    description: "Precise dorsal correction for improved profile"
  },
  {
    src: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png",
    alt: "Cosmedocs skin treatment results showing May to June improvement",
    treatment: "Skin Rejuvenation",
    description: "Professional skin treatment for enhanced clarity and texture"
  },
  {
    src: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png",
    alt: "Lip enhancement before and after dermal filler treatment",
    treatment: "Lip Enhancement",
    description: "Natural lip augmentation with dermal fillers"
  },
  {
    src: "/lovable-uploads/e68774ae-6fe1-4c15-82ec-a93cab43e697.png",
    alt: "Nose reshaping before and after non-surgical rhinoplasty",
    treatment: "Non-Surgical Rhinoplasty",
    description: "Subtle nose refinement without surgery"
  },
  {
    src: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png",
    alt: "Facial rejuvenation before and after treatment results",
    treatment: "Facial Rejuvenation",
    description: "Comprehensive facial enhancement for natural results"
  }
];

const BeforeAfterCarousel = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black" aria-labelledby="before-after-heading">
      <div className="page-container">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="before-after-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transformation Gallery
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Witness the artistry of invisible transformation. Our before and after gallery showcases 
              the subtle yet profound changes achieved through expert aesthetic medicine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                      <div className="aspect-square overflow-hidden rounded-xl mb-4">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {image.treatment}
                        </h3>
                        {image.description && (
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {image.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 hover:bg-white/20 border-2 border-gray-600 text-white" />
              <CarouselNext className="hidden md:flex -right-12 bg-white/10 hover:bg-white/20 border-2 border-gray-600 text-white" />
            </Carousel>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm italic mb-4">
              "Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. Invisible, not exaggerated."
            </p>
            <a 
              href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full px-8 py-3 inline-flex items-center justify-center text-sm font-medium transition-all duration-300"
            >
              View More Results
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;