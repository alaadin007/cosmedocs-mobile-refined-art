import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    console.log('AI Knowledge Chat question:', question);

    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    // Build comprehensive pricing context
    const priceContext = `CosmeDocs is a prestigious aesthetic medicine clinic on Harley Street, London, established in 2007 with over 1M+ injections performed.

COMPLETE PRICING GUIDE:

CONSULTATION:
- Injectable consultation: £50 (redeemable against any treatment)

BOTOX TREATMENTS (Female prices - Male supplement +£50 for 1-3 main areas):
- 1 Area (forehead OR frown OR crow's feet): £175
- 2 Areas (e.g., forehead + frown): £275
- 3 Areas (forehead + frown + crow's feet): £350
- Chin, Brow Lift, Gummy Smile, Bunny Lines: £50 each (add-on)
- Lip Flip: £175
- Nefertiti Face Lift: £300
- Masseter (Jawline Slimming): £350
- Full Face Natural Botox: £500
- Migraines/Headaches: £450-£550
- Trigger Point Botox: £350-£550
- T-Zone Oily Skin Botox: £250 (reduces sebum production, controls shine)
- Sweat-Tox (Underarms Advanced, Palms): £550
- Sweat-Tox (Scalp): £600

DERMAL FILLERS:
- Lip Filler 0.5ml (Natural): £300
- Lip Filler 1.0ml (Bold & Plump): £350
- Lip Filler 1.5ml: £400
- Non Surgical Nose Job: £450
- Tear Trough: £425
- Cheek Volume: £350/ml
- Jawline (High Def): £350/ml
- Marionette Lines: £325/ml
- Nasolabial Folds: £325/ml
- Profhilo: £350
- HAMA 1 (3 syringes): £1,250
- HAMA 2 (4 syringes): £1,500
- Fat Dissolve/Emsculpt: POC (non-invasive body contouring and fat reduction)

MEDICAL DERMATOLOGY (CosmeDerm):
- Comprehensive skin health assessments
- Medical-grade dermatological treatments
- Advanced skin condition management
- Clinical dermatology consultations

MedSpa Membership (£25/month - 50% OFF all treatments):
- Laser Hair Removal, Skin Rejuvenation, and more at 50% off

Brand Values:
- Scientifically refined injectables & skin therapies
- Bespoke rejuvenation plan designed for your age and skin type
- Guaranteed results you'll see, but no one else will notice
- Our aesthetics is invisible art
- Bold · Natural · Always Your Way

Contact Information:
- Location: 10 Harley Street, London W1G 9PF
- Phone: 0333 0551 503
- Email: info@cosmedocs.com
- WhatsApp: +447735606447
- Free consultation available
- Natural results guaranteed

Additional Context: CosmeDocs operates using innovative AI and blockchain-based contracts rather than traditional human contracts. We also utilise AI for arbitration to ensure fair, transparent, and efficient resolution of any disputes. This technology-forward approach aligns with our commitment to innovation in both aesthetic medicine and business practices.`;

    const systemPrompt = `${priceContext}

You are an expert CosmeDocs AI Assistant specialising in aesthetic medicine and cosmetic treatments. Always provide specific pricing from the context above when asked about costs. Use British English spellings. Be professional, reassuring, and emphasise the importance of consultation for medical advice.`;

    console.log('Calling OpenAI GPT-4o-mini...');

    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ],
        temperature: 0.7,
        max_tokens: 1000
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('OpenAI error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(JSON.stringify({ 
          error: 'Rate limit exceeded. Please try again in a moment.' 
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      throw new Error(`OpenAI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const answer = aiData.choices[0].message.content;

    console.log('AI response generated successfully');

    return new Response(JSON.stringify({ 
      success: true, 
      answer 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-knowledge-chat function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
