import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Define offer types based on concerns and location
const offerDatabase = {
  // UK-based offers (can give treatments)
  local: [
    {
      id: 'botox-starter',
      concerns: ['lines', 'wrinkles', 'crowsFeet', 'foreheadLines'],
      title: '20% Off Your First Botox Treatment',
      description: 'Start your aesthetic journey with 20% off any Botox area including forehead lines, crow\'s feet, and frown lines.',
      value: '£80-120',
      requiresVisit: true,
    },
    {
      id: 'filler-discount',
      concerns: ['volumeLoss', 'nasolabialFolds', 'marionette', 'lips'],
      title: '£100 Off Premium Dermal Fillers',
      description: 'Restore volume and youthful contours with £100 off any dermal filler treatment including lips, cheeks, and facial contouring.',
      value: '£100',
      requiresVisit: true,
    },
    {
      id: 'skin-package',
      concerns: ['skinDullness', 'texture', 'pores', 'pigmentation'],
      title: 'Complimentary Skin Analysis + 15% Off Treatment',
      description: 'Get a professional skin analysis and 15% off any skin treatment including HydraFacial, chemical peels, or microneedling.',
      value: '£150',
      requiresVisit: true,
    },
    {
      id: 'acne-treatment',
      concerns: ['acne', 'scarring', 'oilySkin'],
      title: 'Medical-Grade Acne Treatment Package',
      description: 'Comprehensive acne treatment including consultation, prescription skincare, and 30% off your first treatment session.',
      value: '£200',
      requiresVisit: true,
    },
    {
      id: 'thread-lift',
      concerns: ['sagging', 'jowls', 'neckLines'],
      title: '£200 Off PDO Thread Lift',
      description: 'Non-surgical lifting with PDO threads. Get £200 off your first thread lift procedure.',
      value: '£200',
      requiresVisit: true,
    },
    {
      id: 'nose-reshape',
      concerns: ['nose', 'noseBridge', 'noseTip'],
      title: 'Non-Surgical Nose Job - £100 Off',
      description: 'Transform your profile with a non-surgical nose job. £100 off your first treatment.',
      value: '£100',
      requiresVisit: true,
    },
  ],
  // International offers (products only)
  international: [
    {
      id: 'retinol-kit',
      concerns: ['lines', 'wrinkles', 'skinDullness', 'texture'],
      title: 'Premium Retinol Starter Kit - FREE',
      description: 'Receive a luxury travel-size retinol serum and moisturizer kit (worth £45) absolutely free. Perfect for reducing fine lines and improving skin texture.',
      value: '£45',
      requiresVisit: false,
    },
    {
      id: 'vitamin-c-set',
      concerns: ['skinDullness', 'pigmentation', 'antiAging'],
      title: 'Vitamin C Brightening Set - Complimentary',
      description: 'Free professional-grade Vitamin C serum and brightening cream set (worth £50) to revitalize dull skin and even skin tone.',
      value: '£50',
      requiresVisit: false,
    },
    {
      id: 'acne-products',
      concerns: ['acne', 'oilySkin', 'pores'],
      title: 'Medical-Grade Acne Care Kit - FREE',
      description: 'Complimentary acne treatment kit including cleanser, treatment serum, and spot gel (worth £55).',
      value: '£55',
      requiresVisit: false,
    },
    {
      id: 'hydration-bundle',
      concerns: ['dryness', 'dehydration', 'texture'],
      title: 'Intense Hydration Bundle - Complimentary',
      description: 'Free hyaluronic acid serum and rich moisturizer set (worth £48) for deep hydration and plumping.',
      value: '£48',
      requiresVisit: false,
    },
    {
      id: 'eye-care',
      concerns: ['darkCircles', 'puffiness', 'crowsFeet'],
      title: 'Eye Rejuvenation Kit - FREE',
      description: 'Complimentary eye cream and peptide serum set (worth £42) to target dark circles, puffiness, and fine lines.',
      value: '£42',
      requiresVisit: false,
    },
  ]
};

const isUKLocation = (location: string): boolean => {
  const ukIndicators = ['london', 'uk', 'england', 'scotland', 'wales', 'northern ireland', 
                        'manchester', 'birmingham', 'liverpool', 'bristol', 'edinburgh', 
                        'glasgow', 'cardiff', 'belfast', 'united kingdom', 'britain'];
  return ukIndicators.some(indicator => location.toLowerCase().includes(indicator));
};

const generatePersonalizedOffer = (concerns: string[], location: string, age?: number, sex?: string) => {
  const isLocal = isUKLocation(location);
  const availableOffers = isLocal ? offerDatabase.local : offerDatabase.international;
  
  // Score each offer based on matching concerns
  const scoredOffers = availableOffers.map(offer => {
    const matchingConcerns = offer.concerns.filter(concern => 
      concerns.some(userConcern => 
        userConcern.toLowerCase().includes(concern.toLowerCase()) ||
        concern.toLowerCase().includes(userConcern.toLowerCase())
      )
    );
    return {
      ...offer,
      score: matchingConcerns.length,
      matchingConcerns,
    };
  });
  
  // Sort by score and pick the best match
  scoredOffers.sort((a, b) => b.score - a.score);
  const bestOffer = scoredOffers[0];
  
  // Add age/sex specific customization
  let personalizedMessage = '';
  if (age && age < 30) {
    personalizedMessage = 'Perfect for starting your preventative aesthetic care early. ';
  } else if (age && age > 50) {
    personalizedMessage = 'Ideal for addressing established concerns with proven results. ';
  }
  
  return {
    ...bestOffer,
    personalizedMessage,
    location: isLocal ? 'UK' : 'International',
  };
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { name, email, age, sex, location, concerns } = await req.json();

    console.log('Generating offer for:', { name, email, age, sex, location, concerns });

    // Generate personalized offer
    const offer = generatePersonalizedOffer(concerns, location, age, sex);

    // Save to database
    const { data: entry, error: dbError } = await supabase
      .from('raffle_entries')
      .insert({
        name,
        email,
        age,
        sex,
        location,
        concerns,
        prize: offer.title,
        offer_generated: `${offer.title} - ${offer.description} (Value: ${offer.value})`,
        offer_metadata: offer,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw dbError;
    }

    return new Response(
      JSON.stringify({
        success: true,
        offer,
        entryId: entry.id,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in raffle-offer function:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
