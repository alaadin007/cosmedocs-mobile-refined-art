import { autoDetectRoutes } from '../utils/routeAutoDetection';

/**
 * Simple verification script to check if all routes from App.tsx are detected
 */
function verifyRouteDetection() {
  console.log('🔍 Verifying route auto-detection...\n');
  
  const detectedRoutes = autoDetectRoutes();
  
  // All routes from App.tsx that should be detected
  const expectedRoutes = [
    // Pages
    '/', '/home', '/home2', '/treatments', '/team', '/about', '/contact', '/partners', 
    '/before-after-gallery', '/membership', '/harley-street-consulting-rooms',
    '/treatments-summary-arabic', '/treatments-summary-chinese', '/treatments-summary-japanese',
    '/thank-you', '/fellowship-invitation', '/8-point-facelift', '/cosmetalk',
    '/plastic-surgeon', '/dermatology', '/aesthetic-training', '/hair-transplant-surgeon',
    '/team/dr-ahmed-haq', '/team/dr-hena-haq', '/experimental-treatment', '/admin/video-upload',
    
    // Treatments
    '/lip-fillers', '/forehead-fillers', '/non-surgical-nose-job', '/non-surgical-facelift', 
    '/pdo-threads', '/dermal-fillers', '/polynucleotide-treatment', '/profhilo-treatment',
    '/hydrafacial-london', '/prp-treatment',
    '/advanced-upper-face-botox', '/lower-face-botox', '/face-botox-areas', '/face-botox',
    '/nefertiti-botox-facelift', '/nefertiti-botox-face-jaw-lift', '/trigger-point-botox', 
    '/gummy-smile-botox', '/chin-botox', '/botox-calf-reduction', '/marionette-lines',
    '/nasolabial-folds', '/lip-filler-dissolve', '/cheek-filler', '/chin-filler',
    '/ear-lobe-rejuvenation', '/jawline-filler', '/temple-filler-london',
    '/tear-trough-filler', '/neck-fillers', '/neck', '/advanced-consultation',
    '/clinical-concepts-to-flawless-skin', '/medical-anal-bleaching', '/peel-to-reveal',
    '/chemical-peel', '/prescription-skin-care', '/microneedling', '/dermal-filler-makeover',
    
    // Blog
    '/long-term-aesthetic-care-blog', '/aesthetic-maintenance-cost-blog',
    '/pdo-threads-blog', '/non-surgical-nose-job-blog', '/chinese-london-aesthetics-blog',
    '/cosmetalk/vitamin-c-ferulic-acid-benefits', '/cosmetalk/smokers-lines-women',
    '/cosmetalk/flawless-skin', '/cosmetalk/lazy-skin-syndrome', '/blog/beauty-ethnic-neutrality',
    '/blog', '/blog/vitamin-c-ferulic-acid-benefits',
    
    // Locations
    '/birmingham', '/manchester', '/cardiff', '/delhi', '/karachi', '/barbados'
  ];
  
  const detectedPaths = detectedRoutes.map(route => route.path);
  const missingRoutes = expectedRoutes.filter(route => !detectedPaths.includes(route));
  const extraRoutes = detectedPaths.filter(route => !expectedRoutes.includes(route));
  
  console.log(`📊 Detection Results:`);
  console.log(`Expected: ${expectedRoutes.length} routes`);
  console.log(`Detected: ${detectedRoutes.length} routes`);
  console.log(`Missing: ${missingRoutes.length} routes`);
  console.log(`Extra: ${extraRoutes.length} routes`);
  
  if (missingRoutes.length > 0) {
    console.log(`\n❌ MISSING ROUTES:`);
    missingRoutes.forEach(route => {
      console.log(`  • ${route}`);
    });
  }
  
  if (extraRoutes.length > 0) {
    console.log(`\n➕ EXTRA ROUTES (not in App.tsx):`);
    extraRoutes.forEach(route => {
      console.log(`  • ${route}`);
    });
  }
  
  if (missingRoutes.length === 0) {
    console.log('\n✅ All routes from App.tsx are properly detected!');
  } else {
    console.log('\n❌ Some routes are still missing from detection!');
  }
  
  console.log('\n🎉 Verification completed!');
  
  return {
    total: detectedRoutes.length,
    missing: missingRoutes.length,
    extra: extraRoutes.length,
    success: missingRoutes.length === 0
  };
}

// Run the verification
const result = verifyRouteDetection();
console.log(`\n📈 Final Score: ${result.success ? 'PASS' : 'FAIL'}`);