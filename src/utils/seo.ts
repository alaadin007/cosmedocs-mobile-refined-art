
export const generateSEOMetadata = (title: string, description: string, canonical: string, image?: string) => {
  return {
    title: title,
    description: description,
    canonical: `https://www.cosmedocs.com${canonical}`,
    image: image || "https://www.cosmedocs.com/default-og-image.jpg"
  };
};
