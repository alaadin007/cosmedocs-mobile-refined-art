interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface SitemapData {
  pages: SitemapUrl[];
  treatments: SitemapUrl[];
  blog: SitemapUrl[];
  locations: SitemapUrl[];
}

const baseUrl = 'https://www.cosmedocs.co.uk';
const currentDate = new Date().toISOString().split('T')[0];

export const sitemapData: SitemapData = {
  pages: [
    { loc: `${baseUrl}/`, lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: `${baseUrl}/treatments`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/about`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/team`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/team/dr-ahmed-haq`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/team/dr-hena-haq`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/testimonials`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/before-after-gallery`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${baseUrl}/membership`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/partners`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/partnerships`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/fellowship-invitation`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/advanced-consultation`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/harley-street-consulting-rooms`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/plastic-surgeon`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/dermatology`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/aesthetic-training`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/hair-transplant-surgeon`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/private-gp-doctor`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/aesthetics-at-a-glance`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/aesthetic-intelligence`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/aesthetic-treatments-made-easy`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/medical-student-work-experience`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/treatments-summary-arabic`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/treatments-summary-chinese`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/treatments-summary-japanese`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/cosmederm`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/journal`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${baseUrl}/cosmetalk`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${baseUrl}/botox-faqs`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 }
  ],
  treatments: [
    // Main treatment categories
    { loc: `${baseUrl}/botox-london`, lastmod: currentDate, changefreq: 'weekly', priority: 0.95 },
    { loc: `${baseUrl}/botox-cost-london`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/dermal-fillers`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/non-surgical-facelift`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/pdo-threads`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    
    // Lip treatments
    { loc: `${baseUrl}/lip-fillers`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/cupid-bow-lips`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/lip-flip`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/lip-filler-dissolve`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    
    // Face fillers
    { loc: `${baseUrl}/non-surgical-nose-job`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/cheek-filler`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/chin-filler`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/jawline-filler`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/temple-filler-london`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/forehead-fillers`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/tear-trough-filler`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/marionette-lines`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/nasolabial-folds`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/neck-fillers`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/ear-lobe-rejuvenation`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    
    // Botox treatments
    { loc: `${baseUrl}/frown-line-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/crows-feet-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/forehead-lines-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/bunny-lines-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/nasal-flaring-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/chin-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/gummy-smile-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/masseter-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/nefertiti-botox-face-jaw-lift`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/trap-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/botox-calf-reduction`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/oily-skin-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    
    // Medical Botox
    { loc: `${baseUrl}/migraine-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/bruxism-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/excessive-sweat-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/trigger-point-botox`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    
    // Skin treatments
    { loc: `${baseUrl}/hydrafacial`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/prp-treatment`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/chemical-peel`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/peel-to-reveal`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/microneedling`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/prescription-skin-care`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/polynucleotide-treatment`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/profhilo`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    
    // Medical dermatology
    { loc: `${baseUrl}/acne-treatment`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/mole-removal`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/eczema-treatment`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/psoriasis-treatment`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/hyperpigmentation-treatment`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    
    // Body treatments
    { loc: `${baseUrl}/fat-dissolve`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/medical-anal-bleaching`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    
    // Facelift treatments
    { loc: `${baseUrl}/8-point-facelift`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/non-surgical-ponytail`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    
    // Educational
    { loc: `${baseUrl}/clinical-concepts-to-flawless-skin`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 }
  ],
  blog: [
    { loc: `${baseUrl}/non-surgical-nose-job-blog`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/aesthetic-maintenance-cost-blog`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/chinese-london-aesthetics-blog`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/long-term-aesthetic-care-blog`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/inside-mind-aesthetic-doctor-blog`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/cosmetalk/vitamin-c-ferulic-acid-benefits`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/cosmetalk/smokers-lines-women`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/cosmetalk/flawless-skin`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/cosmetalk/lazy-skin-syndrome`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/cosmetalk/orofacial-neck-pain-cycle`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/blog/how-to-get-rid-of-bruises-quickly`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/blog/forehead-wrinkles-myths-tips`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/blog/lip-wrinkles-treatments`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/blog/skin-tags-and-skin-tag-removal`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/blog/beauty-ethnic-neutrality`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 }
  ],
  locations: [
    { loc: `${baseUrl}/birmingham`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/manchester`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/cardiff`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/delhi`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/karachi`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/barbados`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 }
  ]
};

export function generateSitemapXML(urls: SitemapUrl[]): string {
  const urlEntries = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  
${urlEntries}
</urlset>`;
}

export function generateSitemapIndex(): string {
  const sitemaps = [
    { loc: `${baseUrl}/sitemap-pages.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-treatments.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-blog.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-locations.xml`, lastmod: currentDate }
  ];

  const sitemapEntries = sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
}

// Utility function to write sitemap files (for use in build scripts)
export function generateAllSitemaps(): Record<string, string> {
  return {
    'sitemap.xml': generateSitemapIndex(),
    'sitemap-pages.xml': generateSitemapXML(sitemapData.pages),
    'sitemap-treatments.xml': generateSitemapXML(sitemapData.treatments),
    'sitemap-blog.xml': generateSitemapXML(sitemapData.blog),
    'sitemap-locations.xml': generateSitemapXML(sitemapData.locations)
  };
}
