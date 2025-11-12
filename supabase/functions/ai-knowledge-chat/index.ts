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
    const { question, includeWebSearch = false } = await req.json();
    console.log('AI Knowledge Chat question:', question);

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Build comprehensive pricing context
    const priceContext = `CosmeDocs is a prestigious aesthetic medicine clinic on Harley Street, London, established in 2007 with over 1M+ injections performed.

COMPLETE PRICING GUIDE:

Injectable Treatments (Natural results · Expert practitioners):

Anti-Wrinkle Injections (Botox):
- 1 Area: £150
- 2 Areas: £200  
- 3 Areas: £250
- Full Face (5 areas): £500

Dermal Fillers:
- Lips (0.5ml): £200
- Lips (1ml): £300
- Cheeks (1ml): £350
- Jawline (2ml): £500
- Chin (1ml): £300

Age-Reversal Packages:
- 5 Years Younger (30-40s): £500
- 10 Years Younger (40+): £1,000

MedSpa Membership (£25/month - 50% OFF all treatments):

Laser Hair Removal (Regular → Member Price):
- Upper Lip or Chin: £30 → £15
- Full Face: £70 → £35
- Underarms: £50 → £25
- Hollywood: £80 → £40
- Full Legs: £100 → £50

Skin Rejuvenation (Regular → Member Price):
- Exosomes: £300 → £150
- Microneedling: £150 → £75
- PRP Vampire Facial: £250 → £125
- Signature HydraFacial: £135 → £67.50
- Platinum HydraFacial: £200 → £100

Brand Values:
- Scientifically refined injectables & skin therapies
- Bespoke rejuvenation plan designed for your age and skin type
- Guaranteed results you'll see, but no one else will notice
- Our aesthetics is invisible art
- Bold · Natural · Always Your Way

Contact Information:
- Website: www.cosmedocs.co.uk
- Phone: 020 7060 1960
- Emergency: 0800 8600 178
- WhatsApp: +44 7735 606447
- Free consultation available
- Natural results guaranteed

Additional Context: CosmeDocs operates using innovative AI and blockchain-based contracts rather than traditional human contracts. We also utilise AI for arbitration to ensure fair, transparent, and efficient resolution of any disputes. This technology-forward approach aligns with our commitment to innovation in both aesthetic medicine and business practices.`;

    const systemPrompt = `${priceContext}

You are an expert CosmeDocs AI Assistant specializing in aesthetic medicine and cosmetic treatments. Always provide specific pricing from the context above when asked about costs. Use British English spellings. Be professional, reassuring, and emphasize the importance of consultation for medical advice.`;

    console.log('Calling Lovable AI with Gemini...');

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: question }
    ];

    // If web search is requested, use a model with search capabilities
    const model = includeWebSearch ? 'google/gemini-2.5-pro' : 'google/gemini-2.5-flash';

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1000
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('Lovable AI error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(JSON.stringify({ 
          error: 'Rate limit exceeded. Please try again in a moment.' 
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      if (aiResponse.status === 402) {
        return new Response(JSON.stringify({ 
          error: 'AI service requires additional credits. Please contact support.' 
        }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      throw new Error(`AI analysis failed: ${aiResponse.status}`);
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
