import { generateAllSitemaps } from '../utils/sitemapGenerator';

// Generate all sitemaps with current domain and dates
const sitemaps = generateAllSitemaps();

// Update public sitemap files
Object.entries(sitemaps).forEach(([filename, content]) => {
  console.log(`Generating ${filename}...`);
  console.log(content);
  console.log('\n---\n');
});