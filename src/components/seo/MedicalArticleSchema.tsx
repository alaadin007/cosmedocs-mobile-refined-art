import { Helmet } from "react-helmet-async";

interface HowToStep {
  name: string;
  text: string;
}

interface MedicalArticleSchemaProps {
  /** Page path, e.g. "/treatments/botox/" — used to build the canonical URL */
  path: string;
  /** Page title / article headline */
  headline: string;
  /** One-paragraph summary (≤ 160 chars ideal) */
  description: string;
  /** ISO date the page was first published */
  datePublished: string;
  /** ISO date the page was last reviewed/updated */
  dateModified?: string;
  /** Optional hero image URL */
  image?: string;
  /** Optional procedure / HowTo steps — emits a HowTo schema when provided */
  howToSteps?: HowToStep[];
  /** Optional CSS selectors whose text should be marked speakable for voice / Gemini */
  speakableSelectors?: string[];
  /** Override the author (defaults to Dr Ahmed Haq, Medical Director) */
  author?: { name: string; url: string; jobTitle: string };
  /** Schema type — defaults to MedicalWebPage; use "Article" for editorial blog content */
  schemaType?: "MedicalWebPage" | "Article" | "MedicalScholarlyArticle";
}

const DEFAULT_AUTHOR = {
  name: "Dr Ahmed Haq",
  url: "https://www.cosmedocs.com/dr-ahmed-haq/",
  jobTitle: "Medical Director & Aesthetic Doctor (GMC registered)",
};

const PUBLISHER = {
  "@type": "Organization",
  name: "Cosmedocs",
  url: "https://www.cosmedocs.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.cosmedocs.com/default-og-image.jpg",
  },
};

/**
 * Emits Article / MedicalWebPage JSON-LD with verified author (Dr Ahmed Haq),
 * publication & review dates, optional HowTo steps, and Speakable markup for
 * voice + Gemini answers. Drop this on any treatment / medical page to make
 * LLMs treat the content as authored medical guidance, not anonymous SEO copy.
 */
const MedicalArticleSchema = ({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  image,
  howToSteps,
  speakableSelectors,
  author = DEFAULT_AUTHOR,
  schemaType = "MedicalWebPage",
}: MedicalArticleSchemaProps) => {
  const canonicalUrl = `https://www.cosmedocs.com${path.startsWith("/") ? path : `/${path}`}`;

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    headline,
    description,
    url: canonicalUrl,
    inLanguage: "en-GB",
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
      jobTitle: author.jobTitle,
      worksFor: {
        "@type": "MedicalClinic",
        name: "Cosmedocs",
        url: "https://www.cosmedocs.com",
      },
    },
    reviewedBy: {
      "@type": "Person",
      name: author.name,
      url: author.url,
      jobTitle: author.jobTitle,
    },
    publisher: PUBLISHER,
  };

  if (image) {
    articleSchema.image = { "@type": "ImageObject", url: image };
  }

  if (speakableSelectors && speakableSelectors.length > 0) {
    articleSchema.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    };
  }

  const howToSchema = howToSteps && howToSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: headline,
    description,
    step: howToSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  } : null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      {howToSchema && (
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      )}
    </Helmet>
  );
};

export default MedicalArticleSchema;
