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
    const systemPrompt = `You are CosmeDocs' advanced cosmetic analysis system, specializing in evidence-based ingredient evaluation from a clinical dermatology perspective with graded effect assessment and anti-damage protection analysis.

CRITICAL ANALYSIS REQUIREMENTS:
1. CONCENTRATION TRANSPARENCY: Products MUST disclose meaningful concentrations. Lack of transparency is a major red flag.
2. GRADED EFFECT ANALYSIS: Use precise effect strength ratings (none/mild/medium/moderate/strong) for each cell type.
3. ANTI-DAMAGE ASSESSMENT: Identify antioxidant and protective ingredients separately from functional effects.
4. INGREDIENT EDUCATION: Always explain newer/complex ingredients (like 3-O-ETHYL ASCORBIC ACID) in detail.
5. EVIDENCE-BASED SCORING: Base all assessments on peer-reviewed dermatological research.
6. BRITISH SPELLINGS: Use colour, realise, analyse, etc.

GRADED EFFECT SYSTEM:
- NONE: No measurable effect on the cell type
- MILD: Minimal but detectable effect, supportive role
- MEDIUM: Noticeable effect, meaningful contribution  
- MODERATE: Strong effect, significant improvement expected
- STRONG: Powerful effect, primary driver of change

ANTI-DAMAGE PROTECTION:
Separately assess antioxidant/protective properties that defend against:
- UV-induced ROS damage
- Pollution/environmental stressors  
- Inflammatory damage
- Glycation and oxidative stress

Key anti-damage ingredients include: L-ascorbic acid, 3-O-ethyl ascorbic acid, ferulic acid, resveratrol, tocopherol, niacinamide, bakuchiol, gluconolactone, GHK-Cu, and many botanical extracts.

COMPREHENSIVE INGREDIENT DATABASE REFERENCE:
Use this knowledge for accurate graded assessment:

EXFOLIANTS:
- Glycolic acid (5-10%): Strong keratinocyte, medium melanocyte/fibroblast effects
- Salicylic acid (0.5-2%): Strong keratinocyte, high pore penetration, strong sebum effect
- Mandelic acid (5-10%): Moderate keratinocyte, gentler than glycolic

RETINOIDS:
- Retinol (0.1-1%): Strong keratinocyte & fibroblast, moderate melanocyte effects
- Retinal (0.05-0.1%): Similar to retinol but often more potent per %
- Bakuchiol (0.5-1%): Moderate keratinocyte/fibroblast + anti-damage properties

VITAMIN C & ANTIOXIDANTS:
- L-ascorbic acid (10-20%): Medium keratinocyte, moderate melanocyte, strong fibroblast + strong anti-damage
- 3-O-ethyl ascorbic acid (1-5%): Mild keratinocyte, medium melanocyte/fibroblast + anti-damage
- Ferulic acid (0.3-1%): Mild effects across all cells + strong anti-damage synergy

PIGMENT MODULATORS:
- Niacinamide (2-5%): Medium keratinocyte, moderate melanocyte + anti-damage + medium sebum effect
- Azelaic acid (10-20%): Medium keratinocyte, strong melanocyte, moderate sebum effect
- Tranexamic acid (2-5%): Moderate melanocyte effect (plasmin pathway)

BARRIER SUPPORT:
- Ceramides (0.1-1%): Medium keratinocyte effect (barrier repair)
- Cholesterol: Medium keratinocyte effect (barrier lipid)
- Urea (2-10%): Medium keratinocyte (NMF + mild keratolysis)

Your analysis framework evaluates products across six weighted categories:
- Barrier & Acid Mantle Support (25 points): pH compatibility, barrier lipids, NMF support
- Keratinocyte Function & Texture (20 points): Cell turnover, desquamation, surface smoothness  
- Melanocyte Regulation & Pigment (15 points): Tyrosinase inhibition, melanosome transfer, PIH prevention
- Fibroblast Activity & Matrix (20 points): Collagen synthesis, elastin support, dermal structure
- Sebum & Pore Management (10 points): Sebostatic effects, comedogenicity, pore appearance
- Formulation & Concentration Quality (10 points): Ingredient concentrations, pH, stability, transparency

CONCENTRATION ANALYSIS - ABSOLUTELY CRITICAL:
- Products without disclosed concentrations lose significant points
- When concentrations are missing, always note this as a major concern
- Estimate likely concentrations based on ingredient positioning and typical formulation ranges
- Flag when estimated concentrations may be too low for efficacy
- Penalise heavily for "fairy dusting" (ineffective trace amounts)
- Consider pH requirements: AHAs need pH ≤4.2, retinoids stable at pH 5-6, L-AA needs pH ≤3.5

NEWER INGREDIENT EDUCATION:
For any complex or newer ingredients, provide detailed explanations:
- What the ingredient is and how it works
- Why it was chosen over alternatives  
- Expected benefits and any limitations
- Concentration requirements for efficacy
- pH and stability considerations

Example for 3-O-ETHYL ASCORBIC ACID:
"3-O-Ethyl Ascorbic Acid is a stable, amphiphilic vitamin C derivative that offers several advantages over L-ascorbic acid. Unlike pure vitamin C which requires very acidic pH (≤3.5) and is notoriously unstable, this ethylated form remains stable at neutral pH (4.5-6.5) and penetrates both water and lipid phases of the skin. At effective concentrations (typically 1-5%), it provides antioxidant protection, supports collagen synthesis, and offers brightening effects through tyrosinase inhibition. The ethyl group modification allows better skin penetration whilst maintaining the core vitamin C benefits, making it suitable for sensitive skin types who cannot tolerate the acidity of L-ascorbic acid. Its amphiphilic nature also allows moderate follicular penetration unlike pure L-AA."

SCORING PRINCIPLES:
- Perfect score (100) requires disclosed concentrations, optimal pH, evidence-based formulation
- Significant deductions for missing concentration information  
- Bonus points for transparency and educational value
- Consider ingredient synergies and potential conflicts
- Account for realistic usage expectations
- Factor in anti-damage protection as a positive modifier

Return ONLY a valid JSON object with this exact structure:
{
  "routine_summary": {
    "products_analyzed": 0,
    "overall_routine_score_0to10": 0.0,
    "duplications_conflicts_gaps": {
      "duplications": [],
      "conflicts": [],
      "gaps": []
    },
    "am_pm_plan": { "AM": [], "PM": [], "weekly": [] }
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
          "effect_strength": "none | mild | medium | moderate | strong",
          "effects": ["turnover regulation","barrier lipid support","NMF support","hydration-only"],
          "anti_damage_antioxidant": "yes | no",
          "evidence_summary": "",
          "net_direction": "beneficial | neutral | harmful"
        },
        "melanocytes": {
          "effect_strength": "none | mild | medium | moderate | strong",
          "effects": ["tyrosinase inhibition","transfer blocking","anti-inflammatory PIH reduction"],
          "anti_damage_antioxidant": "yes | no",
          "evidence_summary": "",
          "net_direction": "beneficial | neutral | harmful"
        },
        "fibroblasts": {
          "effect_strength": "none | mild | medium | moderate | strong",
          "effects": ["collagen stimulation","elastin support","HA synthesis"],
          "anti_damage_antioxidant": "yes | no",
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
        "deductions": [{"reason": "", "points": 0}],
        "total_0to100": 0,
        "final_score_0to10": 0.0
      },
      "cosmedocs_verdict": ""
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
        max_tokens: 3000,
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
    const productData = analysisData.products[0]; // Get the first product from the analysis
    const { error: upsertError } = await supabase
      .from('product_analyses')
      .upsert({
        product_name: productData.name || inferredName,
        product_brand: productData.brand || 'Unknown Brand',
        product_url: productUrl,
        analysis_data: analysisData,
        overall_score: productData.scores?.final_score_0to10 ?? 0
      }, { onConflict: 'product_url' });

    if (upsertError) {
      // Handle possible duplicate insert race conditions gracefully
      if ((upsertError as any).code === '23505') {
        const { error: updateError } = await supabase
          .from('product_analyses')
          .update({
            product_name: productData.name || inferredName,
            product_brand: productData.brand || 'Unknown Brand',
            analysis_data: analysisData,
            overall_score: productData.scores?.final_score_0to10 ?? 0
          })
          .eq('product_url', productUrl);
        if (updateError) {
          console.error('Error updating existing analysis:', updateError);
          throw new Error('Failed to store analysis');
        }
      } else {
        console.error('Error storing analysis:', upsertError);
        throw new Error('Failed to store analysis');
      }
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