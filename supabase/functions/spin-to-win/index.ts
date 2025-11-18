import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Prize configuration with weights (higher = more likely)
const PRIZES = [
  { name: "Vitamin C20 Sample Size", weight: 25, type: "standard" },
  { name: "Retinol Plus Sample Size", weight: 25, type: "standard" },
  { name: "15-Minute Chemical Peel", weight: 20, type: "standard" },
  { name: "Microneedling Session", weight: 15, type: "standard" },
  { name: "Laser Hair Removal (1 Area)", weight: 10, type: "standard" },
  { name: "Platinum HydraFacial", weight: 3, type: "mega", maxWinners: 2 },
  { name: "Microneedling with Exosomes", weight: 1, type: "mega", maxWinners: 1 },
  { name: "Full Body Laser Hair Removal", weight: 1, type: "mega", maxWinners: 1 },
];

function generatePrizeCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = 'CD-SPIN-';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

const LASER_AREAS = [
  'Upper Lip',
  'Chin',
  'Underarms',
  'Half Arms',
  'Half Legs'
];

function selectPrize(availablePrizes: typeof PRIZES): typeof PRIZES[0] {
  const totalWeight = availablePrizes.reduce((sum, prize) => sum + prize.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const prize of availablePrizes) {
    random -= prize.weight;
    if (random <= 0) {
      return prize;
    }
  }
  
  return availablePrizes[0]; // Fallback
}

function selectLaserArea(): string {
  return LASER_AREAS[Math.floor(Math.random() * LASER_AREAS.length)];
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { email, name, phone, postcode } = await req.json();

    // Validate required fields
    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: email, name' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if user has already played (by email)
    const { data: existingEntry } = await supabase
      .from('spin_winners')
      .select('*')
      .eq('email', email)
      .single();

    if (existingEntry) {
      // User already played, return their existing prize
      // Parse laser area from prize if it's a laser prize
      let laserArea = undefined;
      if (existingEntry.prize.includes('Laser Hair Removal')) {
        const match = existingEntry.prize.match(/\((.*?)\)/);
        laserArea = match ? match[1] : undefined;
      }

      return new Response(
        JSON.stringify({
          success: true,
          alreadyPlayed: true,
          prize: existingEntry.prize,
          prizeCode: existingEntry.prize_code,
          prizeType: PRIZES.find(p => p.name.includes('Laser Hair Removal')) ? 
            (existingEntry.prize.includes('Laser Hair Removal') ? 'standard' : 
            PRIZES.find(p => p.name === existingEntry.prize)?.type || 'standard') : 
            PRIZES.find(p => p.name === existingEntry.prize)?.type || 'standard',
          laserArea
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check mega prize limits
    const megaPrizeChecks = await Promise.all(
      PRIZES.filter(p => p.type === 'mega').map(async (prize) => {
        const { count } = await supabase
          .from('spin_winners')
          .select('*', { count: 'exact', head: true })
          .eq('prize', prize.name);
        
        return {
          name: prize.name,
          count: count || 0,
          maxWinners: prize.maxWinners || 0,
          available: (count || 0) < (prize.maxWinners || 0)
        };
      })
    );

    // Filter available prizes (remove mega prizes that hit their limit)
    const availablePrizes = PRIZES.filter(prize => {
      if (prize.type === 'standard') return true;
      const check = megaPrizeChecks.find(c => c.name === prize.name);
      return check?.available ?? false;
    });

    // Select a prize from available options
    const selectedPrize = selectPrize(availablePrizes);
    const prizeCode = generatePrizeCode();
    
    // If it's a laser prize, select a specific area
    let finalPrizeName = selectedPrize.name;
    let laserArea = undefined;
    if (selectedPrize.name === "Laser Hair Removal (1 Area)") {
      laserArea = selectLaserArea();
      finalPrizeName = `Laser Hair Removal (${laserArea})`;
    }

    // Save to database
    const { data: newEntry, error: insertError } = await supabase
      .from('spin_winners')
      .insert({
        name,
        email,
        phone: phone || '',
        postcode: postcode || '',
        prize: finalPrizeName,
        prize_code: prizeCode,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to save entry' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        alreadyPlayed: false,
        prize: finalPrizeName,
        prizeCode: prizeCode,
        prizeType: selectedPrize.type,
        laserArea
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});