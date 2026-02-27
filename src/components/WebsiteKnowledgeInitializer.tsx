import { useEffect, useState } from 'react';
import { useWebsiteScraper } from '@/hooks/useWebsiteScraper';
import { supabase } from '@/integrations/supabase/client';

const WebsiteKnowledgeInitializer = () => {
  const { scrapeWebsite, isScraping, progress } = useWebsiteScraper();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const initializeKnowledgeBase = async () => {
      // Check if we already have content in the database
      const { data, error } = await supabase
        .from('website_content')
        .select('id')
        .limit(1);

      if (error) {
        console.error('Error checking knowledge base:', error);
        return;
      }

      // If no content exists and we haven't initialized yet, start scraping
      if ((!data || data.length === 0) && !hasInitialized) {
        console.log('Initializing knowledge base from cosmedocs.com...');
        setHasInitialized(true);
        await scrapeWebsite('https://cosmedocs.com');
      }
    };

    initializeKnowledgeBase();
  }, []);

  // This component doesn't render anything visible, but shows progress in console
  useEffect(() => {
    if (isScraping) {
      console.log(`Knowledge base scraping progress: ${progress.toFixed(0)}%`);
    }
  }, [isScraping, progress]);

  return null;
};

export default WebsiteKnowledgeInitializer;
