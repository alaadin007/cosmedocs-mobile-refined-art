
import React from 'react';

interface CollageImage {
  src: string;
  alt: string;
}

interface CollageViewerProps {
  images: CollageImage[];
  caption: string;
}

const CollageViewer = ({ images, caption }: CollageViewerProps) => {
  if (images.length !== 4) {
    console.warn('CollageViewer expects exactly 4 images');
    return null;
  }

  return (
    <div className="group cursor-pointer">
      <div className="aspect-square rounded-lg overflow-hidden bg-accent mb-3">
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-1">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {caption}
      </p>
    </div>
  );
};

export default CollageViewer;
