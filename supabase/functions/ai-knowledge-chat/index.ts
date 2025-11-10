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

    // Get all website content from knowledge base
    const { data: websiteContent } = await supabase
      .from('website_content')
      .select('url, content')
      .order('scraped_at', { ascending: false })
      .limit(10);

    // Build context from website content
    let context = '';
    if (websiteContent && websiteContent.length > 0) {
      context = 'Knowledge Base Content:\n\n';
      websiteContent.forEach(item => {
        context += `Source: ${item.url}\n${item.content.substring(0, 2000)}...\n\n`;
      });
    }

    const systemPrompt = `You are CosmeDocs AI Assistant, an expert in aesthetic medicine and cosmetic treatments based on the prestigious Harley Street clinic in London.

Your knowledge comes from CosmeDocs' official website content and expertise. Always:
- Provide evidence-based medical information
- Use British English spellings (colour, realise, analyse, etc.)
- Be clear about safety considerations and contraindications
- Emphasize the importance of professional consultation
- Maintain a professional, reassuring, and friendly tone
- When mentioning booking, use: [Book an Appointment](https://med.as.me/schedule.php?appointmentType=16864702)
- For urgent queries, mention phone: 0800 8600 178 or WhatsApp: +44 7735 606447
- If unsure, suggest booking a consultation rather than providing uncertain medical advice

${context ? 'Use the following knowledge base to answer questions:\n\n' + context : 'No knowledge base content available. Provide general cosmetic treatment information.'}`;

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
