import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ELEVENLABS_API_KEY = Deno.env.get('ELEVENLABS_API_KEY');
    if (!ELEVENLABS_API_KEY) {
      throw new Error('ELEVENLABS_API_KEY is not configured');
    }

    const body = await req.json();
    const { text, voiceId, action } = body;

    // Handle STT token generation
    if (action === 'stt-token') {
      const tokenRes = await fetch(
        'https://api.elevenlabs.io/v1/single-use-token/realtime_scribe',
        {
          method: 'POST',
          headers: { 'xi-api-key': ELEVENLABS_API_KEY },
        }
      );
      if (!tokenRes.ok) {
        const err = await tokenRes.text();
        throw new Error(`STT token error: ${tokenRes.status} ${err}`);
      }
      const tokenData = await tokenRes.json();
      return new Response(JSON.stringify({ token: tokenData.token }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // TTS
    if (!text || typeof text !== 'string') {
      return new Response(JSON.stringify({ error: 'text is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // George - warm British male voice
    const selectedVoice = voiceId || 'JBFqnCBsd6RMkjVDRZzb';

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice}/stream?output_format=mp3_44100_128`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text.substring(0, 2000),
          model_id: 'eleven_turbo_v2_5',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
            style: 0.3,
            speed: 1.15,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('ElevenLabs TTS error:', response.status, errText);

      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Voice rate limited. Please wait a moment.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`ElevenLabs TTS error: ${response.status}`);
    }

    const audioBuffer = await response.arrayBuffer();
    // Use proper base64 encoding (btoa with spread crashes on large buffers)
    const base64Audio = base64Encode(audioBuffer);

    return new Response(JSON.stringify({ audio: base64Audio }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in elevenlabs-tts:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
