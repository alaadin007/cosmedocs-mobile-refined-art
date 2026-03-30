import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Wraps images in a <picture> element with WebP source + proper sizing.
 * For /lovable-uploads/ images, uses Netlify Image CDN for resizing & format conversion.
 */
const OptimizedImage = ({ src, alt, width, height, ...props }: OptimizedImageProps) => {
  const isUpload = src.startsWith('/lovable-uploads/');
  const isPng = src.endsWith('.png');
  const isJpg = src.endsWith('.jpg') || src.endsWith('.jpeg');

  if (isUpload && (isPng || isJpg)) {
    // Build Netlify Image CDN URL with resize + WebP
    const params = new URLSearchParams({
      url: src,
      fm: 'webp',
      q: '80',
    });

    // Add resize params if width/height provided (serve at display size, not full size)
    const displayWidth = typeof width === 'number' ? width : typeof width === 'string' ? parseInt(width) : undefined;
    const displayHeight = typeof height === 'number' ? height : typeof height === 'string' ? parseInt(height) : undefined;

    // Request 2x for retina, capped at 1600px
    if (displayWidth) {
      params.set('w', String(Math.min(displayWidth * 2, 1600)));
    }
    if (displayHeight) {
      params.set('h', String(Math.min(displayHeight * 2, 1600)));
    }
    if (displayWidth || displayHeight) {
      params.set('fit', 'cover');
    }

    const webpSrc = `/.netlify/images?${params.toString()}`;

    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={src} alt={alt} width={width} height={height} {...props} />
      </picture>
    );
  }

  return <img src={src} alt={alt} width={width} height={height} {...props} />;
};

export default OptimizedImage;
