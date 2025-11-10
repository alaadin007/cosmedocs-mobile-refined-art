import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!;

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

    // Use Lovable AI with Gemini to analyze the product
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
      "clinical_classification": {
        "category": "clinically_active | standard_consumer",
        "potency_level": "medical_grade | professional | consumer",
        "active_threshold_met": "yes | no",
        "irritation_management": {
          "delivery_system": "",
          "buffering_agents": [],
          "gradual_release": "yes | no"
        },
        "clinical_notes": ""
      },
      "cosmedocs_verdict": ""
    }
  ],
  "notes": ""
}`;

    console.log('Analyzing product with Lovable AI:', productUrl);

    // Call Lovable AI with Gemini for analysis
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Analyze this cosmetic product from the URL: ${productUrl}\nProduct Name: ${inferredName}\n\nPlease search for product information, find product images if available, analyze the ingredients list, and provide a comprehensive analysis following the CosmeDocs framework. Return only valid JSON.` 
          }
        ],
        response_format: { type: 'json_object' }
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('Lovable AI error:', aiResponse.status, errorText);
      throw new Error(`AI analysis failed: ${aiResponse.status} ${errorText}`);
    }

    const aiData = await aiResponse.json();
    console.log('AI response received');
    
    const analysisData = JSON.parse(aiData.choices[0].message.content);

    // Store the analysis in the database
    const { error: insertError } = await supabase
      .from('product_analyses')
      .upsert({
        product_url: productUrl,
        product_name: inferredName,
        analysis_data: analysisData,
        analyzed_at: new Date().toISOString(),
      }, {
        onConflict: 'product_url'
      });

    if (insertError) {
      console.error('Error storing analysis:', insertError);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      data: analysisData 
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