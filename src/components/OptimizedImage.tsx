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
    const params = new URLSearchParams({
      url: src,
      fm: 'webp',
      q: '75',
    });

    const displayWidth = typeof width === 'number' ? width : typeof width === 'string' ? parseInt(width) : undefined;
    const displayHeight = typeof height === 'number' ? height : typeof height === 'string' ? parseInt(height) : undefined;

    if (displayWidth) {
      params.set('w', String(Math.min(displayWidth * 2, 1200)));
    }
    if (displayHeight) {
      params.set('h', String(Math.min(displayHeight * 2, 1200)));
    }
    if (displayWidth || displayHeight) {
      params.set('fit', 'cover');
    }

    const cdnSrc = `/.netlify/images?${params.toString()}`;

    // Use CDN URL as primary src so PageSpeed sees the optimised version
    return <img src={cdnSrc} alt={alt} width={width} height={height} {...props} />;
  }

  return <img src={src} alt={alt} width={width} height={height} {...props} />;
};

export default OptimizedImage;
