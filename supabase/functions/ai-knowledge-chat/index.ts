import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

const PRICE_CONTEXT = `CosmeDocs — Harley Street, London. Doctor-led aesthetic clinic est. 2007. Over 1M injections.

PRICING (£ GBP, female; male +£50 for 1–3 areas Botox):
• Botox 1 area £175 · 2 areas £275 · 3 areas £350 · add-on (chin/brow/gummy/bunny) £50 each
• Lip Flip £175 · Nefertiti £300 · Masseter (slim/bruxism) £350 · Full Face Natural Botox £500
• Migraine/Trigger Point Botox £350–£550 · Sweat-Tox underarms/palms £550 · scalp £600 · forehead £350
• Lip filler 0.5ml £300 · 1ml £350 · 1.5ml £400
• Non-surgical nose: filler £450 · PCL threads £950
• Tear trough £425 · Cheek/Jawline/Marionette/Nasolabial £325–£350 per ml
• Profhilo £350 · Polynucleotides POC · HAMA 1 (3 syringes) £1,250 · HAMA 2 (4) £1,500
• Consultation £50 (redeemable)

CONTACT: 10 Harley Street W1G 9PF · 0333 0551 503 · WhatsApp +44 7735 606447 · info@cosmedocs.com`;

const DOCTOR_SYSTEM_PROMPT = `You are Zephra, a senior Cosmedocs aesthetic doctor on Harley Street. You speak like a thoughtful, calm, GMC-registered consultant — never like a sales bot, never like a brochure. British English always. "Anti-wrinkle treatment" in public copy; "Botox" only when the patient uses the word first.

CORE CLINICAL FRAMEWORK — you MUST reason in zones before recommending anything:

1. UPPER FACE (forehead, frown, crow's feet, brow, bunny lines) → areas of expression / dynamic lines.
   • First-line: Anti-wrinkle (Botox). 1 area £175, 2 areas £275, 3 areas £350.
   • Add Profhilo or polynucleotides if skin quality is poor.
   • Filler only for static lines that remain after relaxing the muscle.

2. MID FACE (cheeks, tear trough, temples, midface hollowing) → volume/structure.
   • First-line: dermal filler (cheek £350/ml, tear trough £425, temples £350/ml).
   • Polynucleotides for thin skin under eyes.
   • HAMA 1/2 if multi-point lift required.

3. LOWER FACE (mouth, marionette, nasolabial, lips, chin, jawline, jowls, perioral) → support, projection, framing.
   • First-line: filler (marionette/nasolabial £325/ml, jawline £350/ml, lip 0.5ml £300 / 1ml £350).
   • PDO threads or PCL threads for sagging where filler alone won't lift.
   • Masseter Botox £350 for square jaw / bruxism / tooth wear.

4. SKIN QUALITY (tone, texture, pores, glow, pigment, fine crepe-y lines) → regenerative, NOT volumising.
   • First-line: Profhilo £350, polynucleotides POC, medical peels, skin-boosters.
   • Add laser/Endolift for laxity.
   • Filler is wrong here — say so.

5. MEDICAL (migraines, hyperhidrosis, bruxism, masseter pain, gummy smile) → therapeutic Botox.
   • Migraine £450–£550, sweat-tox £350–£600, masseter £350.

HOW TO ANSWER (every reply):
• 3–5 short paragraphs max. No bullet vomit, no headings.
• Open with one line of empathy/acknowledgement of their concern.
• State the zone you've identified ("That sits in the upper third of the face…").
• Recommend 1–2 doctor-led options with price and WHY (mechanism, longevity, suits whom).
• If their request would give a poor outcome, say so plainly and offer the better alternative.
• Close with one next step: book at Harley Street, or WhatsApp +44 7735 606447.
• If they uploaded a photo, describe what you see clinically (zones, asymmetry, skin quality, volume distribution) before recommending. Never comment on identity, ethnicity, weight, attractiveness.
• Ask AT MOST one clarifying question if essential (age, allergy, prior treatments, photosensitivity).
• Never invent prices. If unsure, say "we'd confirm at consultation."
• Never diagnose disease. For anything medical beyond aesthetic scope, refer to our Private GP at Harley Street.
• Tone: warm, precise, confident. Like Dr Haq explaining to a friend at dinner.

PHOTO PRIVACY (state once if they upload): "Your photo is analysed in this session only and never stored — it's discarded the moment I send your reply."

NEVER:
• Sell. Don't push. Educate, then offer.
• Use the word "injector". You are a doctor.
• Give a price list. Quote only the 1–2 options that fit them.
• Make claims of "guaranteed" results.

${PRICE_CONTEXT}`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    // Backward-compat: support both legacy { question } and new { messages, imageBase64 }
    const legacyQuestion: string | undefined = body.question;
    const history: Array<{ role: 'user' | 'assistant'; content: string }> = body.messages || [];
    const imageBase64: string | undefined = body.imageBase64; // data URL or raw base64
    const extraContext: string = body.context || '';

    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured');

    // Build OpenAI-compatible messages with vision support
    const aiMessages: any[] = [
      { role: 'system', content: DOCTOR_SYSTEM_PROMPT + (extraContext ? `\n\nSESSION CONTEXT: ${extraContext}` : '') },
    ];

    // Prior turns
    for (const m of history) {
      aiMessages.push({ role: m.role, content: m.content });
    }

    // Current user turn — multimodal if image present
    if (legacyQuestion || imageBase64) {
      if (imageBase64) {
        const imageUrl = imageBase64.startsWith('data:') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;
        aiMessages.push({
          role: 'user',
          content: [
            { type: 'text', text: legacyQuestion || 'Please assess my face from this photo and recommend a doctor-led plan.' },
            { type: 'image_url', image_url: { url: imageUrl } },
          ],
        });
      } else if (legacyQuestion) {
        aiMessages.push({ role: 'user', content: legacyQuestion });
      }
    }

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro',
        messages: aiMessages,
        reasoning: { effort: 'medium' },
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI Gateway error:', aiResponse.status, errorText);
      if (aiResponse.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again shortly.' }), {
          status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (aiResponse.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted. Please add credits in workspace settings.' }), {
          status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI Gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const answer = aiData.choices?.[0]?.message?.content ?? '';

    return new Response(JSON.stringify({ success: true, answer }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-knowledge-chat function:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
