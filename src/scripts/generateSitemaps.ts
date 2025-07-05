#!/usr/bin/env ts-node

import { writeFileSync } from 'fs';
import { join } from 'path';
import { generateAllSitemaps } from '../utils/sitemapGenerator';

/**
 * Script to regenerate all sitemap files
 * Run with: npx ts-node src/scripts/generateSitemaps.ts
 */
function main() {
  const sitemaps = generateAllSitemaps();
  const publicDir = join(process.cwd(), 'public');

  Object.entries(sitemaps).forEach(([filename, content]) => {
    const filepath = join(publicDir, filename);
    writeFileSync(filepath, content, 'utf8');
    console.log(`✅ Generated ${filename}`);
  });

  console.log('\n🎉 All sitemaps generated successfully!');
  console.log('\nGenerated files:');
  console.log('- sitemap.xml (main index)');
  console.log('- sitemap-pages.xml (main & company pages)');
  console.log('- sitemap-treatments.xml (treatment pages)');
  console.log('- sitemap-blog.xml (blog posts)');
  console.log('- sitemap-locations.xml (location pages)');
}

if (require.main === module) {
  main();
}

export { main as generateSitemaps };