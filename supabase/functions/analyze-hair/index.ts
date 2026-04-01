import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { images } = await req.json();
    
    if (!images || !Array.isArray(images) || images.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Images array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    console.log('Analyzing hair with', images.length, 'images using GPT-4o');

    const systemPrompt = `You are an expert trichologist and hair restoration specialist. Analyze the provided hair and scalp images from multiple angles and provide a comprehensive hair health assessment.

Grade each category on a 0-3 scale:
- 0: None/Excellent
- 1: Mild/Good
- 2: Moderate/Fair
- 3: Severe/Poor

Provide detailed analysis for:

1. HAIR DENSITY (0-3 scale, where 0=full density, 3=severe thinning):
   - Frontal hairline
   - Crown area
   - Temporal regions
   - Overall coverage
   - Pattern assessment (male/female pattern)
   
2. HAIR QUALITY (0-3 scale, where 0=excellent, 3=poor):
   - Hair shaft thickness
   - Hair texture
   - Shine and lustre
   - Breakage level
   - Split ends
   
3. SCALP CONDITION (0-3 scale, where 0=healthy, 3=severe issues):
   - Scalp redness/inflammation
   - Visible flaking/dandruff
   - Oiliness level
   - Visible scarring
   - Overall scalp health
   
4. HAIR GROWTH INDICATORS:
   - Miniaturization present (yes/no)
   - Visible new growth
   - Hair diameter variation
   - Norwood/Ludwig scale (if applicable)
   
5. COLOUR AND GREY:
   - Percentage of grey hair (0-100%)
   - Uniformity of colour
   - Previous colour treatment visible

Return a JSON object with this structure:
{
  "overall_score": number (average of all scores),
  "hair_density": {
    "frontal": number,
    "crown": number,
    "temporal": number,
    "overall_coverage": number,
    "pattern_type": "string describing pattern",
    "notes": "detailed observations"
  },
  "hair_quality": {
    "thickness": number,
    "texture": number,
    "shine": number,
    "breakage": number,
    "split_ends": number,
    "notes": "detailed observations"
  },
  "scalp_condition": {
    "inflammation": number,
    "flaking": number,
    "oiliness": number,
    "scarring": number,
    "overall_health": number,
    "notes": "detailed observations"
  },
  "growth_indicators": {
    "miniaturization": boolean,
    "new_growth": "description",
    "diameter_variation": "description",
    "classification": "Norwood/Ludwig scale if applicable",
    "notes": "detailed observations"
  },
  "colour_grey": {
    "grey_percentage": number,
    "colour_uniformity": "description",
    "previous_treatment": boolean,
    "notes": "detailed observations"
  },
  "recommendations": [
    "specific treatment recommendation 1",
    "specific treatment recommendation 2",
    "lifestyle/care recommendation"
  ],
  "summary": "comprehensive summary of findings and prognosis"
}`;

    const content = [
      {
        type: "text",
        text: "Please analyze these hair and scalp images and provide a comprehensive hair health assessment following the grading system."
      },
      ...images.map((imageUrl: string) => ({
        type: "image_url",
        image_url: { url: imageUrl }
      }))
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content }
        ],
        max_tokens: 2000
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;

    console.log('Hair analysis completed successfully');

    return new Response(
      JSON.stringify({ analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in analyze-hair:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
