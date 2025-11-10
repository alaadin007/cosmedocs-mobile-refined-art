import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const scraperApiKey = Deno.env.get('SCRAPER_API_KEY')!;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, forceRefresh } = await req.json();
    console.log('Scraping website:', url);

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if content already exists and is recent (less than 7 days old)
    if (!forceRefresh) {
      const { data: existingContent } = await supabase
        .from('website_content')
        .select('*')
        .eq('url', url)
        .gte('scraped_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
        .maybeSingle();

      if (existingContent) {
        console.log('Returning cached content');
        return new Response(JSON.stringify({ 
          success: true, 
          data: existingContent,
          cached: true 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Use ScraperAPI to fetch content
    const scraperUrl = `http://api.scraperapi.com?api_key=${scraperApiKey}&url=${encodeURIComponent(url)}`;
    
    const response = await fetch(scraperUrl);
    const html = await response.text();

    // Basic content extraction (remove scripts, styles, etc)
    const cleanContent = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Store in database
    const { error: upsertError } = await supabase
      .from('website_content')
      .upsert({
        url,
        content: cleanContent,
        scraped_at: new Date().toISOString(),
      }, {
        onConflict: 'url'
      });

    if (upsertError) {
      console.error('Error storing content:', upsertError);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      data: { url, content: cleanContent },
      cached: false
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in scrape-website function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
