/**
 * Rich Schema Generators for SERP Rich Results
 * FAQ, Breadcrumb, Video, and HowTo JSON-LD schemas
 */

// ─── FAQ Schema ───────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});

// ─── Breadcrumb Schema ────────────────────────────────────────
export interface BreadcrumbSchemaItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (
  items: BreadcrumbSchemaItem[],
  currentPage: string,
  currentPath: string
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.cosmedocs.com",
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": item.url.startsWith("http")
        ? item.url
        : `https://www.cosmedocs.com${item.url}`,
    })),
    ...(currentPage
      ? [
          {
            "@type": "ListItem",
            "position": items.length + 2,
            "name": currentPage,
            "item": `https://www.cosmedocs.com${currentPath}`,
          },
        ]
      : []),
  ],
});

// ─── Video Schema ─────────────────────────────────────────────
export interface VideoSchemaData {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string; // ISO 8601
  duration?: string; // ISO 8601 duration e.g. "PT5M30S"
  contentUrl?: string;
  embedUrl?: string;
}

export const generateVideoSchema = (video: VideoSchemaData) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  ...(video.duration && { "duration": video.duration }),
  ...(video.contentUrl && { "contentUrl": video.contentUrl }),
  ...(video.embedUrl && { "embedUrl": video.embedUrl }),
  "publisher": {
    "@type": "Organization",
    "name": "Cosmedocs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.cosmedocs.com/default-og-image.jpg",
    },
  },
});

// ─── HowTo Schema ─────────────────────────────────────────────
export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export const generateHowToSchema = (
  name: string,
  description: string,
  steps: HowToStep[],
  totalTime?: string // ISO 8601 duration
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": name,
  "description": description,
  ...(totalTime && { "totalTime": totalTime }),
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    ...(step.image && {
      "image": {
        "@type": "ImageObject",
        "url": step.image,
      },
    }),
  })),
});
