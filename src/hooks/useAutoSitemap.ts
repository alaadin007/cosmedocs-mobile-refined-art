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
        // Import and trigger sitemap regeneration
        import('../utils/routeAutoDetection').then(({ regenerateSitemapFromRoutes }) => {
          console.log('🔄 Auto-updating sitemap with current routes...');
          regenerateSitemapFromRoutes();
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
  
  import('../utils/routeAutoDetection').then(({ regenerateSitemapFromRoutes }) => {
    console.log('🔄 Forcing sitemap update...');
    regenerateSitemapFromRoutes();
    localStorage.removeItem('forceAutoSitemap');
  });
}