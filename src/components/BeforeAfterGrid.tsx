import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

  const displayedImages = images.slice(0, displayCount);
  const hasMore = displayCount < images.length;

  return (
    <div className="space-y-8">
      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={handleLoadMore}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            Load More Results
          </Button>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterGrid;