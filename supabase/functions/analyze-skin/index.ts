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

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Analyzing skin with', images.length, 'images');

    const systemPrompt = `You are an expert dermatologist and aesthetic medicine specialist. Analyze the provided facial images from multiple angles and provide a comprehensive skin assessment.

Grade each category on a 0-3 scale:
- 0: None/Excellent
- 1: Mild/Good
- 2: Moderate/Fair
- 3: Severe/Poor

Provide detailed analysis for:

1. SKIN SURFACE (0-3 scale for each):
   - Texture quality
   - Pore size
   - Overall skin tone
   - Pigmentation irregularities
   - Acne/breakouts
   
2. STATIC LINES (wrinkles at rest, 0-3 scale):
   - Forehead horizontal lines
   - Glabellar lines (between brows)
   - Crow's feet
   - Nasolabial folds
   - Marionette lines
   - Perioral lines (around mouth)
   
3. DYNAMIC LINES (expression lines, 0-3 scale):
   - Forehead (when raising brows)
   - Glabella (when frowning)
   - Crow's feet (when smiling)
   
4. FACIAL VOLUME (0-3 scale, where 0=full, 3=severe loss):
   - Cheek volume
   - Under-eye hollowing
   - Temple hollowing
   - Jawline definition
   
5. SKIN SAGGING (0-3 scale):
   - Jowl formation
   - Neck laxity
   - Brow ptosis
   - Overall skin elasticity

Return a JSON object with this structure:
{
  "overall_score": number (average of all scores),
  "skin_surface": {
    "texture": number,
    "pore_size": number,
    "tone": number,
    "pigmentation": number,
    "acne": number,
    "notes": "detailed observations"
  },
  "static_lines": {
    "forehead": number,
    "glabellar": number,
    "crows_feet": number,
    "nasolabial": number,
    "marionette": number,
    "perioral": number,
    "notes": "detailed observations"
  },
  "dynamic_lines": {
    "forehead": number,
    "glabella": number,
    "crows_feet": number,
    "notes": "detailed observations"
  },
  "facial_volume": {
    "cheeks": number,
    "under_eye": number,
    "temples": number,
    "jawline": number,
    "notes": "detailed observations"
  },
  "sagging_skin": {
    "jowls": number,
    "neck": number,
    "brow": number,
    "elasticity": number,
    "notes": "detailed observations"
  },
  "recommendations": [
    "specific treatment recommendation 1",
    "specific treatment recommendation 2"
  ],
  "summary": "comprehensive summary of findings"
}`;

    const content = [
      {
        type: "text",
        text: "Please analyze these facial images and provide a comprehensive skin assessment following the grading system."
      },
      ...images.map((imageUrl: string) => ({
        type: "image_url",
        image_url: { url: imageUrl }
      }))
    ];

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content }
        ]
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to your Lovable AI workspace." }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;

    console.log('Skin analysis completed successfully');

    return new Response(
      JSON.stringify({ analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in analyze-skin:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
