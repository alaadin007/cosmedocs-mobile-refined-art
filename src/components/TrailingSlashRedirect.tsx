import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Enforces trailing slashes on all URLs for SEO consistency.
 * Redirects any URL without a trailing slash to its trailing-slash version.
 */
const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    
    // Skip if already has trailing slash, is root, or is a file (has extension)
    if (
      pathname.endsWith('/') || 
      pathname === '/' ||
      /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
      return;
    }

    // Redirect to trailing slash version
    navigate(`${pathname}/${search}${hash}`, { replace: true });
  }, [location, navigate]);

  return null;
};

export default TrailingSlashRedirect;
