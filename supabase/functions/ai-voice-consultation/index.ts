import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const CLINIC_KNOWLEDGE = `You are Dr. Ahmed Haq's AI consultation assistant at Cosmedocs, 10 Harley Street, London W1G 9PF. You are conducting a live voice consultation with a patient.

CONSULTATION STRUCTURE:
You guide patients through a 3-phase aesthetic consultation:
- Phase 1: SKIN QUALITY — Assess skin tone evenness, pigmentation, pore visibility, texture, clarity, luminosity. Compare sun-exposed skin (face) vs protected skin (neck/décolletage) to identify extrinsic ageing. Identify Fitzpatrick skin type. The goal is to isolate what the environment has done vs genetic baseline.
- Phase 2: LINES & WRINKLES — Distinguish dynamic lines (frown, forehead, crow's feet — respond to Botox) from static lines (nasolabial folds, marionette lines, smoker's lines — need fillers). Note depth at rest vs in motion.
- Phase 3: VOLUME & STRUCTURE — Assess under-eye hollowing, cheek projection, temple hollowing, jawline definition, jowling, lip volume and proportion. Evaluate overall facial harmony.

CONVERSATION STYLE:
- Be warm, conversational, and reassuring — you're speaking aloud, not writing
- Use British English throughout
- Keep responses concise (2-4 sentences) as they will be spoken aloud via text-to-speech
- Ask follow-up questions naturally
- When you receive image analysis results, discuss the findings conversationally
- Encourage patients to upload photos for each phase
- Use millimetre precision language — "small refinements create transformative differences"

TREATMENT RECOMMENDATIONS & PRICING:
- Consultation: £50 (redeemable against treatment)
- Botox 1 Area: £175 | 2 Areas: £275 | 3 Areas: £350
- Botox add-ons (Chin, Brow Lift, Gummy Smile, Bunny Lines): £50 each
- Lip Flip: £175
- Nefertiti Lift: £300
- Masseter (Jawline Slimming): £350
- Full Face Natural Botox: £500
- Lip Filler 0.5ml: £300 | 1.0ml: £350 | 1.5ml: £400
- Non-Surgical Nose Job: £450
- Tear Trough: £425
- Cheek/Jawline Volume: £350/ml
- Profhilo: £350/session
- Polynucleotides: from £350
- Chemical Peels: from £125
- HydraFacial: from £150
- Microneedling: from £150
- PRP Vampire Facelift: £500/session
- HAMA 1 (3 syringes): £1,250 | HAMA 2 (4 syringes): £1,500
- Male supplement: +£50 for 1-3 main Botox areas

BRAND VALUES:
- Our aesthetics is invisible art — Bold • Natural • Always Your Way
- Transformation that speaks without saying a word
- Doctor-led, never injector-led
- Established 2007, over 1M+ injections performed
- Phone: 0333 0551 503 | WhatsApp: +447735606447

IMPORTANT RULES:
- Never diagnose medical conditions — recommend in-person consultation for concerns
- Always emphasise natural results
- When discussing image analysis, reference specific findings and recommend relevant treatments with prices
- Transition between phases naturally: "Now that we've looked at your skin quality, shall we move on to assess your lines and wrinkles?"
- End consultations by encouraging booking: "Book your consultation at Cosmedocs Harley Street"`;

// This function serves as an OpenAI-compatible Custom LLM endpoint for ElevenLabs.
// ElevenLabs sends standard chat completion requests; we inject our clinic knowledge
// and proxy to Lovable AI Gateway, returning the response in OpenAI format.

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const body = await req.json();

    // ElevenLabs Custom LLM sends OpenAI-compatible requests
    // It includes: model, messages, temperature, max_tokens, etc.
    const incomingMessages = body.messages || [];

    // Inject our clinic knowledge as the system prompt, 
    // preserving any context ElevenLabs has already added
    const messagesWithKnowledge = [
      { role: 'system', content: CLINIC_KNOWLEDGE },
      ...incomingMessages,
    ];

    // Check if imageAnalysis context was passed (from our frontend via contextual update)
    // ElevenLabs sends contextual updates as system messages, so they'll be in the messages array

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: body.model || 'google/gemini-2.5-flash',
        messages: messagesWithKnowledge,
        max_tokens: body.max_tokens || 300,
        temperature: body.temperature ?? 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: { message: 'Rate limited, please try again shortly.' } }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: { message: 'AI credits exhausted.' } }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errText = await response.text();
      console.error('AI gateway error:', response.status, errText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    // Return the full OpenAI-compatible response directly
    // ElevenLabs expects standard OpenAI chat completion format
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-voice-consultation:', error);
    return new Response(JSON.stringify({ 
      error: { message: error instanceof Error ? error.message : 'Unknown error' }
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
