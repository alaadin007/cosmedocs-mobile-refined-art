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
    const { image } = await req.json();
    
    if (!image || typeof image !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Image URL string is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Analyzing skin lesion image');

    const systemPrompt = `You are an expert dermatology AI assistant providing informational analysis of skin lesions. 

**CRITICAL DISCLAIMER: This analysis is for INFORMATIONAL purposes ONLY and is NOT a medical diagnosis. All skin lesions should be evaluated by a qualified dermatologist or healthcare provider in person for proper diagnosis and treatment.**

Analyze the provided skin lesion image and provide a detailed assessment covering:

1. SIZE AND DIMENSIONS:
   - Approximate size (in millimetres if possible to estimate)
   - Overall dimensions and shape

2. COLOR CHARACTERISTICS:
   - Predominant colours (brown, black, red, pink, tan, flesh-coloured, etc.)
   - Colour uniformity or variation
   - Presence of multiple colours

3. BORDER DEFINITION:
   - Well-defined vs poorly defined borders
   - Regular vs irregular edges
   - Sharp vs blurred boundaries

4. SYMMETRY ASSESSMENT:
   - Symmetrical vs asymmetrical appearance
   - If asymmetrical, describe the pattern

5. SURFACE TEXTURE:
   - Flat, raised, dome-shaped, pedunculated
   - Smooth, rough, scaly, crusted, ulcerated
   - Surface characteristics

6. ABCDE CRITERIA ASSESSMENT:
   - A (Asymmetry): Is the lesion asymmetrical?
   - B (Border): Are borders irregular?
   - C (Colour): Multiple colours or colour variation?
   - D (Diameter): Appears larger than 6mm?
   - E (Evolution): Note if any evolution information provided

7. POSSIBLE CLASSIFICATIONS (Informational only):
   - Possible benign types (mole/nevus, seborrheic keratosis, dermatofibroma, skin tag, etc.)
   - Note if features suggest potential concern
   - Emphasise this is speculation, not diagnosis

8. RECOMMENDATIONS:
   - Whether features warrant dermatologist consultation
   - Urgency level (routine check vs prompt evaluation)
   - Any concerning features that should be professionally evaluated

**Important Guidelines:**
- Use clear, non-alarming language
- Always recommend professional evaluation for any concerning features
- Emphasise that clinical examination is essential
- Note that image quality, lighting, and angle affect analysis
- Include the medical disclaimer in your response

Provide your analysis in clear, structured paragraphs that are easy to understand for a general audience whilst maintaining medical accuracy.`;

    const content = [
      {
        type: "text",
        text: "Please analyze this skin lesion image and provide a comprehensive informational assessment. Remember to include the disclaimer that this is not medical diagnosis."
      },
      {
        type: "image_url",
        image_url: { url: image }
      }
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

    console.log('Skin lesion analysis completed successfully');

    return new Response(
      JSON.stringify({ analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in analyze-skin-lesion:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
