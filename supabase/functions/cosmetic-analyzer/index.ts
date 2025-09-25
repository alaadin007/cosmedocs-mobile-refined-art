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

    // Use OpenAI to analyze the product based on URL and name using CosmeDocs medical approach
    const systemPrompt = `You are CosmeDocs, an aesthetic doctor. You analyze skincare and cosmetic products with evidence-based dermatology and cosmetic chemistry. You must be objective, structured, and clinically concise.

## High-Level Goals
1. Extract: Product name, brand, category, claims, instructions, price, full INCI, declared concentrations, pH, packaging type
2. Infer: Estimate concentrations from INCI order, assess solubility, pore penetration potential, comedogenicity risk, fragrance/sensitizer load, pH impact on acid mantle (≈4.7–5.5)
3. Analyze by Three-Cell Approach + Barrier/Oil:
   - Keratinocytes: turnover/exfoliation, barrier lipids, NMF, texture
   - Melanocytes: pigmentation control, melanin distribution, PIH risk  
   - Fibroblasts: collagen, elastin, HA stimulation
   - Oil/Sebum: sebostatic vs occlusive, follicular penetration
   - Inflammation & Barrier: long-term repair vs temporary soothing, irritation risk
   - Acid Mantle: is pH supportive or disruptive?
4. Score (0–10) based on: Barrier & Acid Mantle (25%), Keratinocytes/Texture (20%), Melanocytes/Pigment (15%), Fibroblasts/Matrix (20%), Sebum & Pore Dynamics (10%), Formulation Quality (10%)

Return ONLY a valid JSON object with this exact structure:
{
  "routine_summary": {
    "products_analyzed": 1,
    "overall_routine_score_0to10": 0.0,
    "general_ingredients_summary": "Detailed AI summary of all ingredients across products analyzed, their interactions, and overall formulation assessment",
    "duplications_conflicts_gaps": {
      "duplications": [],
      "conflicts": [],
      "gaps": []
    },
    "am_pm_plan": {
      "AM": [],
      "PM": [],
      "weekly": []
    }
  },
  "products": [
    {
      "name": "",
      "brand": "",
      "url": "",
      "category": "",
      "price": {"value": null, "currency": null},
      "claims": [],
      "instructions": "",
      "packaging": "",
      "pH": {"stated": null, "estimated": null, "acid_mantle_comment": ""},
      "ingredients": {
        "count": 0,
        "inci_list": [],
        "fragrance_or_potential_sensitizers": [],
        "declared_concentrations": {},
        "estimated_concentrations": {}
      },
      "key_actives": [
        {
          "ingredient": "",
          "function": "",
          "solubility": "water-soluble | fat-soluble | amphiphilic",
          "pore_penetration_expectation": "low | moderate | high",
          "comedogenicity_risk": "low | moderate | high",
          "evidence_notes": ""
        }
      ],
      "three_cell_analysis": {
        "keratinocytes": {
          "effects": [],
          "evidence_summary": "",
          "net_direction": "beneficial | neutral | harmful"
        },
        "melanocytes": {
          "effects": [],
          "evidence_summary": "",
          "net_direction": "beneficial | neutral | harmful"
        },
        "fibroblasts": {
          "effects": [],
          "evidence_summary": "",
          "net_direction": "beneficial | neutral | harmful"
        }
      },
      "oil_and_pores": {
        "sebostatic_effect": "yes | partial | no",
        "mechanism": [],
        "solubility_relevance": "",
        "pore_outcome_if_penetrates": ""
      },
      "inflammation_barrier": {
        "barrier_repair": [],
        "temporary_soothing_only": [],
        "irritation_risks": [],
        "sensitive_skin_comment": ""
      },
      "marketing_vs_evidence": {
        "supported": [],
        "unsupported_or_exaggerated": []
      },
      "scores": {
        "barrier_and_acid_mantle_25": 0,
        "keratinocytes_texture_20": 0,
        "melanocytes_pigment_15": 0,
        "fibroblasts_matrix_20": 0,
        "sebum_pores_10": 0,
        "formulation_concentration_10": 0,
        "deductions": [],
        "total_0to100": 0,
        "final_score_0to10": 0.0
      },
      "cosmedocs_verdict": "",
      "human_summary": {
        "what_it_really_does": "",
        "best_for": "",
        "avoid_if": "",
        "use_like_this": "",
        "bottom_line": ""
      }
    }
  ],
  "notes": ""
}

Base your analysis on evidence-based dermatology and cosmetic chemistry principles.`;

    const userPrompt = `Analyze this skincare product using the CosmeDocs medical approach:
URL: ${productUrl}
Product Name: ${inferredName}

Provide a comprehensive analysis following the Three-Cell Approach, scoring rubric, and detailed ingredient assessment. Include ingredient count and provide evidence-based medical insights.`;

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