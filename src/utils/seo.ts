
export const generateSEOMetadata = (title: string, description: string, canonical: string, image?: string) => {
  // Ensure canonical URL always has trailing slash for SEO consistency
  const normalizedCanonical = canonical.endsWith('/') ? canonical : `${canonical}/`;
  
  return {
    title: title,
    description: description,
    canonical: `https://www.cosmedocs.com${normalizedCanonical}`,
    image: image || "https://www.cosmedocs.com/default-og-image.jpg"
  };
};
