import { readFileSync } from 'fs';
import { join } from 'path';

interface DetectedRoute {
  path: string;
  category: 'page' | 'treatment' | 'blog' | 'location';
  priority: number;
}

/**
 * Automatically detects all routes from App.tsx routing configuration
 * This ensures the sitemap is always in sync with actual routes
 */
export function autoDetectRoutes(): DetectedRoute[] {
  try {
    // Read App.tsx to extract routes
    const appPath = join(process.cwd(), 'src/App.tsx');
    const appContent = readFileSync(appPath, 'utf8');
    
    // Extract route paths using regex
    const routeMatches = appContent.match(/<Route\s+path="([^"]+)"/g) || [];
    const paths = routeMatches
      .map(match => match.match(/path="([^"]+)"/)?.[1])
      .filter(Boolean) as string[];

    // Categorize and prioritize routes
    return paths.map(path => ({
      path,
      category: categorizeRoute(path),
      priority: calculatePriority(path)
    }));
  } catch (error) {
    console.warn('Could not auto-detect routes from App.tsx:', error);
    return [];
  }
}

function categorizeRoute(path: string): 'page' | 'treatment' | 'blog' | 'location' {
  if (path.includes('/blog/')) return 'blog';
  if (isLocationRoute(path)) return 'location';
  if (isTreatmentRoute(path)) return 'treatment';
  return 'page';
}

function isTreatmentRoute(path: string): boolean {
  const treatmentKeywords = [
    'filler', 'botox', 'treatment', 'nose-job', 'facelift', 'threads',
    'profhilo', 'hydrafacial', 'prp', 'polynucleotide', 'consultation',
    'peel', 'microneedling', 'bleaching', 'skin-care'
  ];
  
  return treatmentKeywords.some(keyword => 
    path.toLowerCase().includes(keyword.toLowerCase())
  );
}

function isLocationRoute(path: string): boolean {
  const locations = ['birmingham', 'manchester', 'cardiff', 'delhi', 'barbados'];
  return locations.some(location => path.includes(location));
}

function calculatePriority(path: string): number {
  if (path === '/') return 1.0;
  if (['/treatments', '/about', '/contact'].includes(path)) return 0.9;
  if (path.includes('harley-street')) return 0.8;
  if (isTreatmentRoute(path)) return 0.8;
  if (path.includes('/blog/')) return 0.7;
  if (isLocationRoute(path)) return 0.7;
  return 0.6;
}

/**
 * Monitors App.tsx for changes and triggers sitemap regeneration
 */
export function setupAutoSitemapGeneration() {
  if (typeof window !== 'undefined') {
    // Browser environment - setup file watching would happen server-side
    return;
  }

  try {
    const fs = require('fs');
    const appPath = join(process.cwd(), 'src/App.tsx');
    
    // Watch for changes to App.tsx
    fs.watchFile(appPath, { interval: 5000 }, () => {
      console.log('🔄 App.tsx changed - regenerating sitemap...');
      regenerateSitemapFromRoutes();
    });
  } catch (error) {
    console.warn('Could not setup file watching:', error);
  }
}

/**
 * Regenerates sitemap based on current routes
 */
export function regenerateSitemapFromRoutes() {
  try {
    const routes = autoDetectRoutes();
    console.log(`📍 Detected ${routes.length} routes for sitemap generation`);
    
    // Import and use the dynamic sitemap generator
    const { generateAllDynamicSitemaps } = require('./dynamicSitemapGenerator');
    const sitemaps = generateAllDynamicSitemaps();
    
    // Write sitemap files (this would typically run server-side)
    if (typeof window === 'undefined') {
      const fs = require('fs');
      const path = require('path');
      const publicDir = path.join(process.cwd(), 'public');
      
      Object.entries(sitemaps).forEach(([filename, content]) => {
        const filepath = path.join(publicDir, filename);
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`✅ Auto-updated ${filename}`);
      });
    }
    
    return routes;
  } catch (error) {
    console.error('Failed to regenerate sitemap from routes:', error);
    return [];
  }
}