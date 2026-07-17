// Industry Desk news feed — append new entries at the TOP.
// Keep posts short (150-400 words body). Always cite the source.

export interface NewsPost {
  slug: string;
  title: string;
  dek: string;         // 1-line summary shown on hub + widget
  category: "Regulation" | "Science" | "Industry" | "Product Watch" | "Clinic Note";
  date: string;        // ISO YYYY-MM-DD (publish date)
  author: string;
  readTime: string;    // e.g. "3 min read"
  sourceLabel: string; // e.g. "ASA ruling · Nov 2026"
  sourceUrl?: string;
  body: string[];      // paragraphs
  takeaway?: string;   // the "Cosmedocs view" pull-quote
}

export const newsPosts: NewsPost[] = [
  {
    slug: "asa-bans-beauty-pie-led-mask-advert",
    title: "ASA bans Beauty Pie LED mask advert — why 'clinically proven' needs clinical proof",
    dek: "The UK ad regulator has ruled that a consumer LED mask cannot claim clinical results without clinical-grade evidence. Here's why the distinction matters.",
    category: "Regulation",
    date: "2026-07-17",
    author: "Cosmedocs Industry Desk",
    readTime: "3 min read",
    sourceLabel: "Advertising Standards Authority · July 2026",
    sourceUrl: "https://www.asa.org.uk/",
    body: [
      "The Advertising Standards Authority (ASA) has upheld a complaint against Beauty Pie for advertising its at-home LED face mask with the phrase 'clinically proven'. The regulator ruled that consumer devices cannot borrow the language of medical evidence without producing medical-grade trial data to match.",
      "This is not an isolated ruling. Over the past eighteen months the ASA has taken a visibly harder line on aesthetic and skincare claims — from filler brands over-promising longevity to at-home devices claiming outcomes that only in-clinic energy devices reliably deliver.",
      "The clinical distinction is straightforward. In-clinic medical LED (used correctly under medical supervision) delivers wavelengths and irradiance that reach the dermis. At-home masks operate at a fraction of the power and depth. Both can be pleasant. Only one is measurable.",
      "For patients, the takeaway isn't 'consumer devices are useless'. It's 'read the claim carefully'. 'Clinically inspired' is marketing. 'Clinically proven' — properly — requires a study, on humans, with controls, published somewhere a doctor can read it.",
    ],
    takeaway:
      "If a product needs the word 'clinical' to sell itself, ask for the paper. If there isn't one, it isn't clinical — it's cosmetic.",
  },
];

export const getNewsPost = (slug: string) =>
  newsPosts.find((p) => p.slug === slug || p.slug === slug.replace(/\/$/, ""));
