import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY')!;
const scraperApiKey = Deno.env.get('SCRAPER_API_KEY')!;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productUrl } = await req.json();
    console.log('Analyzing product URL:', productUrl);

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if product already analyzed recently
    const { data: existingAnalysis, error: selectError } = await supabase
      .from('product_analyses')
      .select('*')
      .eq('product_url', productUrl)
      .maybeSingle();

    if (selectError) {
      console.error('Error checking existing analysis:', selectError);
    }

    if (existingAnalysis && existingAnalysis.analysis_data) {
      console.log('Found existing analysis, returning cached result');
      return new Response(JSON.stringify({ 
        success: true, 
        data: existingAnalysis.analysis_data,
        cached: true 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Scrape the product page using ScraperAPI
    console.log('Scraping product page...');
    
    // Validate ScraperAPI key
    if (!scraperApiKey) {
      throw new Error('SCRAPER_API_KEY not configured');
    }
    
    const scraperResponse = await fetch(`http://api.scraperapi.com?api_key=${scraperApiKey}&url=${encodeURIComponent(productUrl)}&render=true`);
    
    if (!scraperResponse.ok) {
      const errorText = await scraperResponse.text();
      console.error('ScraperAPI error:', errorText);
      throw new Error(`Failed to scrape page: ${scraperResponse.status} - ${errorText}`);
    }

    const htmlContent = await scraperResponse.text();
    console.log('Successfully scraped page content');

    // Extract relevant product information from HTML
    const productData = extractProductData(htmlContent);
    console.log('Extracted product data:', productData);

    // Prepare the AI analysis prompt
    const systemPrompt = `You are CosmeDocs, an aesthetic doctor. You analyze skincare and cosmetic products with evidence-based dermatology and cosmetic chemistry. You must be objective, structured, and clinically concise.

Follow the exact JSON schema and scoring rubric provided. Analyze the product according to the Three-Cell Approach (keratinocytes, melanocytes, fibroblasts), oil regulation, barrier health, acid mantle (pH), solubility/penetration, concentrations, and provide an overall 0–10 score.

Scoring Rubric (per product; total 100 → scaled to 0–10):
• Barrier & Acid Mantle (25%): Lipid replenishment, NMF, gentle surfactants, supportive pH 4.7–5.5
• Keratinocytes / Texture (20%): Healthy turnover, retinoids, AHA/BHA/PHAs, enzymes
• Melanocytes / Pigment (15%): Tyrosinase inhibitors, transfer blockers, anti-inflammatory
• Fibroblasts / Matrix (20%): Collagen/elastin/HA stimulation, retinoids, vitamin C, peptides
• Sebum & Pore Dynamics (10%): Sebostatic effects, solubility aligned with pore penetration
• Formulation Quality & Concentrations (10%): Efficacious concentrations, minimal irritants

Return ONLY valid JSON in the exact schema format provided.`;

    const userPrompt = `Analyze this skincare product:

Product Name: ${productData.name || 'Unknown'}
Brand: ${productData.brand || 'Unknown'}
URL: ${productUrl}
Ingredients: ${productData.ingredients || 'Not found'}
Claims: ${productData.claims || 'Not found'}
Price: ${productData.price || 'Not found'}
Description: ${productData.description || 'Not found'}

Provide a complete analysis following the CosmeDocs methodology and return the result in the exact JSON schema format.`;

    console.log('Sending to OpenAI for analysis...');
    
    // Call OpenAI API for analysis
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 4000,
        temperature: 0.3,
      }),
    });

    if (!openAIResponse.ok) {
      const errorText = await openAIResponse.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${openAIResponse.status} - ${errorText}`);
    }

    const openAIData = await openAIResponse.json();
    const analysisText = openAIData.choices[0].message.content;
    
    console.log('Received AI analysis');

    // Parse the JSON response
    let analysisData;
    try {
      analysisData = JSON.parse(analysisText);
    } catch (error) {
      console.error('Failed to parse AI response as JSON:', error);
      throw new Error('Invalid AI response format');
    }

    // Store the analysis in the database
    const { error: insertError } = await supabase
      .from('product_analyses')
      .insert({
        product_name: productData.name || 'Unknown Product',
        product_brand: productData.brand || 'Unknown Brand',
        product_url: productUrl,
        analysis_data: analysisData,
        overall_score: analysisData.products?.[0]?.scores?.final_score_0to10 || 0
      });

    if (insertError) {
      console.error('Error storing analysis:', insertError);
      throw new Error('Failed to store analysis');
    }

    console.log('Analysis completed and stored successfully');

    return new Response(JSON.stringify({
      success: true,
      data: analysisData,
      cached: false
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in product-analyzer function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function extractProductData(html: string) {
  console.log('Extracting product data from HTML');
  
  // Remove script and style tags
  const cleanHtml = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                       .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Extract text content
  const textContent = cleanHtml.replace(/<[^>]*>/g, ' ')
                               .replace(/\s+/g, ' ')
                               .trim();

  // Try to extract product information using common patterns
  const extractedData: any = {};

  // Extract product name (look for common selectors)
  const namePatterns = [
    /product[_-]?name[^:]*:?\s*([^\n\r]{1,100})/i,
    /title[^:]*:?\s*([^\n\r]{1,100})/i,
    /<h1[^>]*>([^<]{1,100})<\/h1>/i
  ];
  
  for (const pattern of namePatterns) {
    const match = html.match(pattern);
    if (match && match[1]?.trim()) {
      extractedData.name = match[1].trim();
      break;
    }
  }

  // Extract brand
  const brandPatterns = [
    /brand[^:]*:?\s*([^\n\r]{1,50})/i,
    /manufacturer[^:]*:?\s*([^\n\r]{1,50})/i
  ];
  
  for (const pattern of brandPatterns) {
    const match = textContent.match(pattern);
    if (match && match[1]?.trim()) {
      extractedData.brand = match[1].trim();
      break;
    }
  }

  // Extract ingredients (look for INCI list)
  const ingredientPatterns = [
    /ingredients?[^:]*:?\s*([^.!?]{50,500})/i,
    /inci[^:]*:?\s*([^.!?]{50,500})/i,
    /composition[^:]*:?\s*([^.!?]{50,500})/i
  ];
  
  for (const pattern of ingredientPatterns) {
    const match = textContent.match(pattern);
    if (match && match[1]?.trim()) {
      extractedData.ingredients = match[1].trim();
      break;
    }
  }

  // Extract price
  const pricePatterns = [
    /[$£€¥]\s*\d+(?:[.,]\d{2})?/,
    /price[^:]*:?\s*[$£€¥]?\s*\d+(?:[.,]\d{2})?/i
  ];
  
  for (const pattern of pricePatterns) {
    const match = textContent.match(pattern);
    if (match && match[0]?.trim()) {
      extractedData.price = match[0].trim();
      break;
    }
  }

  // Extract claims/benefits
  const claimsPatterns = [
    /benefits?[^:]*:?\s*([^.!?]{20,200})/i,
    /claims?[^:]*:?\s*([^.!?]{20,200})/i,
    /for\s+(dry|oily|sensitive|aging|acne)[^.!?]{10,100}/gi
  ];
  
  const claims = [];
  for (const pattern of claimsPatterns) {
    const matches = textContent.match(pattern);
    if (matches) {
      claims.push(...matches.map(m => m.trim()));
    }
  }
  
  if (claims.length > 0) {
    extractedData.claims = claims.slice(0, 5).join('; '); // Limit to 5 claims
  }

  // Extract description (first substantial paragraph)
  const descPatterns = [
    /description[^:]*:?\s*([^.!?]{50,300})/i,
    /<p[^>]*>([^<]{50,300})<\/p>/i
  ];
  
  for (const pattern of descPatterns) {
    const match = html.match(pattern);
    if (match && match[1]?.trim()) {
      extractedData.description = match[1].trim();
      break;
    }
  }

  console.log('Extracted product data:', extractedData);
  return extractedData;
}