import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const { images, phase, patientContext } = await req.json();

    if (!images || !Array.isArray(images) || images.length === 0) {
      return new Response(JSON.stringify({ error: 'At least one image is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const phasePrompts: Record<string, string> = {
      skin: `You are Dr. Ahmed Haq, a leading cosmetic doctor at Cosmedocs Harley Street. Analyse this patient's skin quality in detail.

Focus on:
- Skin tone evenness and pigmentation
- Pore visibility and texture
- Clarity and luminosity
- Compare visible sun-exposed skin vs protected areas (neck vs face)
- Signs of extrinsic ageing (sun damage, environmental damage)
- Hydration levels and barrier function

Identify the Fitzpatrick skin type. Rate each area on a 0-3 scale (0=excellent, 3=severe concern).

Recommend specific Cosmedocs treatments:
- Chemical Peels (from £125)
- HydraFacial (from £150)
- Microneedling (from £150)
- Profhilo (£350/session)
- Polynucleotides (from £350)

Be warm, professional, use British English. End with encouragement.`,

      wrinkles: `You are Dr. Ahmed Haq at Cosmedocs Harley Street. Analyse this patient's wrinkles and lines.

Focus on:
- Dynamic lines (frown, forehead, crow's feet) — these respond to Botox
- Static lines (nasolabial folds, marionette lines, smoker's lines) — these need fillers
- Distinguish between lines at rest vs in motion
- Skin laxity contributing to line depth

Rate each area on a 0-3 scale. Recommend:
- Botox/Anti-Wrinkle Treatment (£175-£350)
- Dermal Fillers (£350/ml)
- Profhilo for fine lines (£350/session)

Use British English. Be reassuring — millimetre adjustments make transformative differences.`,

      volume: `You are Dr. Ahmed Haq at Cosmedocs Harley Street. Analyse this patient's facial volume.

Focus on:
- Under-eye hollowing (tear trough)
- Cheek volume and mid-face projection
- Temple hollowing
- Jawline definition and jowling
- Lip volume and proportion
- Overall facial harmony and balance

Rate each area on a 0-3 scale. Recommend:
- Dermal Fillers (£350/ml) for targeted volumisation
- HA Makeover (8/11-point lift) for comprehensive restoration
- PDO Threads for structural lifting
- Non-Surgical Facelift combinations

Emphasise natural results — our motto: "Our aesthetics is invisible art. Bold, Natural, Always Your Way."`,
    };

    const systemPrompt = phasePrompts[phase] || phasePrompts.skin;
    const contextNote = patientContext ? `\n\nPatient context so far: ${patientContext}` : '';

    // Build messages with images
    const userContent: any[] = [
      { type: 'text', text: `Please analyse this patient's ${phase === 'skin' ? 'skin quality' : phase === 'wrinkles' ? 'wrinkles and lines' : 'facial volume'}. Provide a detailed, conversational assessment.${contextNote}` },
    ];

    for (const img of images) {
      userContent.push({
        type: 'image_url',
        image_url: { url: img.startsWith('data:') ? img : `data:image/jpeg;base64,${img}` },
      });
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userContent },
        ],
        max_tokens: 1500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limited, please try again shortly.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted. Please add funds.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errText = await response.text();
      console.error('AI gateway error:', response.status, errText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices?.[0]?.message?.content || 'Unable to generate analysis.';

    return new Response(JSON.stringify({ analysis, phase }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-skin-consultation:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
