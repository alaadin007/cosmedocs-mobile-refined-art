import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export const useWebsiteScraper = () => {
  const [isScraping, setIsScraping] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const scrapeWebsite = async (baseUrl: string) => {
    setIsScraping(true);
    setProgress(0);

    // Common pages to scrape from cosmedocs.co.uk
    const pagesToScrape = [
      '',
      '/treatments',
      '/about',
      '/botox-london',
      '/dermal-fillers',
      '/lip-fillers',
      '/cheek-fillers',
      '/jaw-fillers',
      '/tear-trough-fillers',
      '/non-surgical-rhinoplasty',
      '/profhilo',
      '/skin-boosters',
      '/chemical-peels',
      '/mesotherapy',
      '/prp-treatment',
      '/thread-lift',
      '/fat-dissolving-injections',
      '/excessive-sweating',
      '/consultation',
      '/before-after'
    ];

    const totalPages = pagesToScrape.length;
    let completed = 0;

    try {
      for (const page of pagesToScrape) {
        const url = `${baseUrl}${page}`;
        console.log(`Scraping: ${url}`);

        const { data, error } = await supabase.functions.invoke('scrape-website', {
          body: { url, forceRefresh: false }
        });

        if (error) {
          console.error(`Error scraping ${url}:`, error);
        } else {
          console.log(`Successfully scraped: ${url}`, data.cached ? '(cached)' : '(new)');
        }

        completed++;
        setProgress((completed / totalPages) * 100);

        // Add small delay to avoid overwhelming the API
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      toast({
        title: "Success",
        description: `Successfully scraped ${completed} pages from ${baseUrl}`,
      });

      return { success: true, scrapedPages: completed };
    } catch (error) {
      console.error('Scraping error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to scrape website",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsScraping(false);
    }
  };

  return {
    scrapeWebsite,
    isScraping,
    progress
  };
};
