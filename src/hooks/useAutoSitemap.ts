import { useEffect } from 'react';

/**
 * Hook to automatically update sitemap when the app loads
 * This ensures sitemap stays in sync with current routes
 */
export function useAutoSitemap() {
  useEffect(() => {
    // Only run in development or when explicitly needed
    if (import.meta.env.DEV || localStorage.getItem('forceAutoSitemap')) {
      try {
        // Import and trigger sitemap update notification
        import('../utils/routeAutoDetection').then(({ triggerSitemapUpdate }) => {
          console.log('🔄 Auto-checking sitemap with current routes...');
          triggerSitemapUpdate();
        });
      } catch (error) {
        console.warn('Could not auto-update sitemap:', error);
      }
    }
  }, []);
}

/**
 * Function to force sitemap regeneration
 * Can be called manually when needed
 */
export function forceSitemapUpdate() {
  localStorage.setItem('forceAutoSitemap', 'true');
  
  import('../utils/routeAutoDetection').then(({ triggerSitemapUpdate }) => {
    console.log('🔄 Forcing sitemap update...');
    triggerSitemapUpdate();
    localStorage.removeItem('forceAutoSitemap');
  });
}

/**
 * Helper functions to manage routes in the sitemap
 */
export function addPageToSitemap(path: string, category: 'page' | 'treatment' | 'blog' | 'location') {
  import('../utils/routeAutoDetection').then(({ addRoute, triggerSitemapUpdate }) => {
    addRoute(path, category);
    triggerSitemapUpdate();
  });
}

export function removePageFromSitemap(path: string, category?: 'page' | 'treatment' | 'blog' | 'location') {
  import('../utils/routeAutoDetection').then(({ removeRoute, triggerSitemapUpdate }) => {
    removeRoute(path, category);
    triggerSitemapUpdate();
  });
}