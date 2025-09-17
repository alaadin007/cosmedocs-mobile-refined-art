
export const generateSEOMetadata = (title: string, description: string, canonical: string, image?: string) => {
  return {
    title: title,
    description: description,
    canonical: `https://www.cosmedocs.co.uk${canonical}`,
    image: image || "https://www.cosmedocs.co.uk/default-og-image.jpg"
  };
};
