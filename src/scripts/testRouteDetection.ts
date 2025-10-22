#!/usr/bin/env ts-node

import { autoDetectRoutes } from '../utils/routeAutoDetection';

/**
 * Test script to verify the enhanced route auto-detection
 * Run with: npx ts-node src/scripts/testRouteDetection.ts
 */
function testRouteDetection() {
  console.log('🔍 Testing enhanced route auto-detection...\n');
  
  const detectedRoutes = autoDetectRoutes();
  
  // Group routes by category
  const categorized = {
    pages: detectedRoutes.filter(r => r.category === 'page'),
    treatments: detectedRoutes.filter(r => r.category === 'treatment'),
    blog: detectedRoutes.filter(r => r.category === 'blog'),
    locations: detectedRoutes.filter(r => r.category === 'location')
  };
  
  console.log('📊 Route Detection Results:');
  console.log('═══════════════════════════\n');
  
  console.log(`📄 PAGES (${categorized.pages.length} routes):`);
  categorized.pages.forEach(route => {
    console.log(`  • ${route.path} (priority: ${route.priority})`);
  });
  
  console.log(`\n💉 TREATMENTS (${categorized.treatments.length} routes):`);
  categorized.treatments.forEach(route => {
    console.log(`  • ${route.path} (priority: ${route.priority})`);
  });
  
  console.log(`\n📝 BLOG (${categorized.blog.length} routes):`);
  categorized.blog.forEach(route => {
    console.log(`  • ${route.path} (priority: ${route.priority})`);
  });
  
  console.log(`\n🌍 LOCATIONS (${categorized.locations.length} routes):`);
  categorized.locations.forEach(route => {
    console.log(`  • ${route.path} (priority: ${route.priority})`);
  });
  
  console.log(`\n📈 SUMMARY:`);
  console.log(`Total routes detected: ${detectedRoutes.length}`);
  console.log(`Pages: ${categorized.pages.length}`);
  console.log(`Treatments: ${categorized.treatments.length}`);
  console.log(`Blog: ${categorized.blog.length}`);
  console.log(`Locations: ${categorized.locations.length}`);
  
  // Check for specific routes that were previously missing
  const criticalTreatments = [
    '/forehead-fillers', '/ear-lobe-rejuvenation', '/temple-filler-london',
    '/neck-fillers', '/chin-filler', '/cheek-filler', '/jawline-filler',
    '/nefertiti-botox-face-jaw-lift',
    '/dermal-fillers', '/face-botox'
  ];
  
  const criticalPages = [
    '/home', '/home2', '/team/dr-ahmed-haq', '/team/dr-hena-haq',
    '/experimental-treatment', '/admin/video-upload'
  ];
  
  const criticalBlogRoutes = [
    '/blog', '/blog/vitamin-c-ferulic-acid-benefits'
  ];
  
  console.log(`\n✅ VERIFICATION - Critical Treatment Pages:`);
  criticalTreatments.forEach(path => {
    const found = detectedRoutes.some(route => route.path === path);
    console.log(`  ${found ? '✅' : '❌'} ${path}`);
  });
  
  console.log(`\n✅ VERIFICATION - Critical Pages:`);
  criticalPages.forEach(path => {
    const found = detectedRoutes.some(route => route.path === path);
    console.log(`  ${found ? '✅' : '❌'} ${path}`);
  });
  
  console.log(`\n✅ VERIFICATION - Critical Blog Routes:`);
  criticalBlogRoutes.forEach(path => {
    const found = detectedRoutes.some(route => route.path === path);
    console.log(`  ${found ? '✅' : '❌'} ${path}`);
  });
  
  console.log('\n🎉 Route detection test completed!');
}

if (require.main === module) {
  testRouteDetection();
}

export { testRouteDetection };