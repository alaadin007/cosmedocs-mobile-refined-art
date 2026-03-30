import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Wraps images in a <picture> element with WebP source.
 * For lovable-uploads PNGs, appends ?format=webp via Netlify Image CDN.
 */
const OptimizedImage = ({ src, alt, ...props }: OptimizedImageProps) => {
  const isUpload = src.startsWith('/lovable-uploads/');
  const isPng = src.endsWith('.png');
  const isJpg = src.endsWith('.jpg') || src.endsWith('.jpeg');

  // Generate WebP source URL
  const webpSrc = isUpload && (isPng || isJpg)
    ? `/.netlify/images?url=${encodeURIComponent(src)}&fm=webp&q=80`
    : null;

  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={src} alt={alt} {...props} />
      </picture>
    );
  }

  return <img src={src} alt={alt} {...props} />;
};

export default OptimizedImage;
