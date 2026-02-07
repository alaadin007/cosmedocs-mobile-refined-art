import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BeforeAfterImage {
  src: string;
  alt: string;
  caption: string | JSX.Element;
}

interface BeforeAfterGridProps {
  images: BeforeAfterImage[];
  initialDisplay?: number;
  loadMoreIncrement?: number;
}

const BeforeAfterGrid = ({
  images,
  initialDisplay = 4,
  loadMoreIncrement = 4
}: BeforeAfterGridProps) => {
  const [displayCount, setDisplayCount] = useState(initialDisplay);

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + loadMoreIncrement, images.length));
  };

  const handleShowLess = () => {
    setDisplayCount(initialDisplay);
  };

  const displayedImages = images.slice(0, displayCount);
  const hasMore = displayCount < images.length;
  const showingAll = displayCount >= images.length;

  return (
    <div className="space-y-10">
      {/* Masonry-style flowing layout */}
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {displayedImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            viewport={{ once: true }}
            className="break-inside-avoid"
          >
            <div className="group relative rounded-xl overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto block rounded-xl group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              {/* Gradient overlay for caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 pb-5 px-5 rounded-b-xl">
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  {image.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      {(hasMore || showingAll) && (
        <div className="text-center pt-2">
          <Button
            onClick={hasMore ? handleLoadMore : handleShowLess}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full px-8"
          >
            {hasMore ? "Load More Results" : "Show Less"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterGrid;
