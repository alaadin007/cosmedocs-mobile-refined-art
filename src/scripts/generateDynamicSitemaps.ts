#!/usr/bin/env ts-node

import { writeFileSync } from 'fs';
import { join } from 'path';
import { generateAllDynamicSitemaps } from '../utils/dynamicSitemapGenerator';

/**
 * Script to regenerate all sitemap files dynamically
 * Run with: npx ts-node src/scripts/generateDynamicSitemaps.ts
 */
function main() {
  const sitemaps = generateAllDynamicSitemaps();
  const publicDir = join(process.cwd(), 'public');

  Object.entries(sitemaps).forEach(([filename, content]) => {
    const filepath = join(publicDir, filename);
    writeFileSync(filepath, content, 'utf8');
    console.log(`✅ Generated ${filename}`);
  });

  console.log('\n🎉 All sitemaps generated dynamically!');
  console.log('\nGenerated files:');
  console.log('- sitemap.xml (main index)');
  console.log('- sitemap-pages.xml (main & company pages)');
  console.log('- sitemap-treatments.xml (treatment pages - AUTO-DETECTED)');
  console.log('- sitemap-blog.xml (blog posts)');
  console.log('- sitemap-locations.xml (location pages)');
  console.log('\n📝 Note: Treatment pages are now auto-detected from App.tsx routing!');
}

if (require.main === module) {
  main();
}

export { main as generateDynamicSitemaps };