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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productUrl, productName } = await req.json();
    console.log('Analyzing product:', productUrl);

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

    // Extract product name from URL if not provided
    const inferredName = productName || extractProductNameFromUrl(productUrl);

    // Use OpenAI to analyze the product based on URL and name
    const systemPrompt = `You are CosmeDocs, an expert aesthetic doctor analyzing skincare products. Based on the product URL and name provided, generate a comprehensive professional analysis.

Return ONLY a valid JSON object with this exact structure:
{
  "product_name": "Product Name",
  "brand": "Brand Name", 
  "overall_score": 7.2,
  "analysis": {
    "ingredients_assessment": "Analysis of likely ingredients based on product type",
    "efficacy_rating": "Assessment of product effectiveness",
    "safety_profile": "Safety considerations and potential concerns",
    "value_proposition": "Cost-effectiveness analysis",
    "professional_recommendation": "Clinical recommendation"
  },
  "strengths": ["Strength 1", "Strength 2", "Strength 3"],
  "concerns": ["Concern 1", "Concern 2"],
  "suitable_for": ["Skin type 1", "Skin type 2"],
  "clinical_verdict": "Professional summary and recommendation"
}

Base your analysis on typical formulations for this product type and brand. Provide evidence-based insights that would be valuable for patients considering this product.`;

    const userPrompt = `Analyze this skincare product:
URL: ${productUrl}
Product Name: ${inferredName}

Provide a professional CosmeDocs analysis considering typical ingredients, efficacy, safety, and value for this type of product.`;

    console.log('Sending to OpenAI for analysis...');
    
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
        max_tokens: 2000,
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
      // Clean the response in case it has markdown formatting
      const cleanedResponse = analysisText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      analysisData = JSON.parse(cleanedResponse);
    } catch (error) {
      console.error('Failed to parse AI response as JSON:', error);
      console.error('Raw response:', analysisText);
      throw new Error('Invalid AI response format');
    }

    // Store the analysis in the database
    const { error: insertError } = await supabase
      .from('product_analyses')
      .insert({
        product_name: analysisData.product_name || inferredName,
        product_brand: analysisData.brand || 'Unknown Brand',
        product_url: productUrl,
        analysis_data: analysisData,
        overall_score: analysisData.overall_score || 0
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
    console.error('Error in cosmetic-analyzer function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function extractProductNameFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    
    // Remove common e-commerce URL patterns
    let productName = pathname
      .split('/')
      .pop() || ''
      .replace(/\.(html?|php|aspx?)$/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\d+/g, '')
      .trim();
    
    // Capitalize words
    productName = productName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    return productName || 'Unknown Product';
  } catch {
    return 'Unknown Product';
  }
}