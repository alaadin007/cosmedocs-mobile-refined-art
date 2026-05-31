// Generates a Digital Face Profile for a Filtered Face Project response.
// Anonymous: no auth required. Uses service role to read/write the row.
import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;

// Map question_text → scoring function. Each returns 0..100 contribution
// (higher = more digitally influenced / less natural confidence).
type Ans = Record<string, any>;

function val(answers: Ans, questionTextStarts: string, questionsById: Map<string, any>): any {
  for (const [id, q] of questionsById) {
    if (q.question_text.toLowerCase().startsWith(questionTextStarts.toLowerCase())) {
      return answers[id];
    }
  }
  return undefined;
}

function scaleFromList(answer: any, list: string[]): number {
  if (!answer || typeof answer !== "string") return 50;
  const idx = list.indexOf(answer);
  if (idx < 0) return 50;
  return Math.round((idx / (list.length - 1)) * 100);
}

// 1–10 numeric scale answers ("1 — Not at all" .. "10 — …")
function scale1to10(answer: any): number {
  if (!answer || typeof answer !== "string") return 50;
  const m = answer.match(/^(\d+)/);
  if (!m) return 50;
  return Math.min(100, Math.max(0, (parseInt(m[1], 10) - 1) * (100 / 9)));
}

function computeScores(answers: Ans, qById: Map<string, any>) {
  const filterFreq = scaleFromList(val(answers, "Do you use filters", qById), [
    "Never","Rarely","Sometimes","Often","Always",
  ]);
  const photosBefore = scaleFromList(val(answers, "How many photos", qById), ["1–2","3–5","6–10","10+"]);
  const selfieFreq = scaleFromList(val(answers, "How often do you take selfies", qById), [
    "Never","Rarely","Sometimes","Often","Very frequently",
  ]);
  const socialTime = scaleFromList(val(answers, "On an average day", qById), [
    "Less than 1 hour","1–2 hours","3–4 hours","5+ hours",
  ]);
  const filtersChangedFace = scale1to10(val(answers, "Have filters changed", qById));
  const deletedPhoto = (() => {
    const a = val(answers, "Have you ever deleted", qById);
    if (a === "Yes") return 80; if (a === "No") return 10; return 40;
  })();
  const videoCallAware = scale1to10(val(answers, "Have video calls", qById));
  const beautyStandards = scaleFromList(val(answers, "Do you believe social media creates", qById), [
    "Strongly disagree","Disagree","Neutral","Agree","Strongly agree",
  ]);
  const aiTrust = scale1to10(val(answers, "Would you trust AI", qById));
  const aiImagesEffect = scaleFromList(val(answers, "Do AI-generated", qById), [
    "Strongly disagree","Disagree","Neutral","Agree","Strongly agree",
  ]);

  const filter_awareness = Math.round((filterFreq * 0.6 + photosBefore * 0.4));
  const camera_sensitivity = Math.round((videoCallAware * 0.45 + deletedPhoto * 0.3 + selfieFreq * 0.25));
  const social_comparison = Math.round((filtersChangedFace * 0.45 + beautyStandards * 0.3 + photosBefore * 0.25));
  const digital_influence = Math.round((socialTime * 0.3 + beautyStandards * 0.25 + aiImagesEffect * 0.25 + aiTrust * 0.2));

  // Higher influence/sensitivity ⇒ lower confidence. Invert weighted average.
  const influence = (filter_awareness * 0.25 + camera_sensitivity * 0.3 + social_comparison * 0.3 + digital_influence * 0.15);
  const digital_confidence = Math.round(Math.max(0, Math.min(100, 100 - influence + 8))); // +8 = mild positive bias

  return {
    digital_confidence,
    social_comparison,
    filter_awareness,
    camera_sensitivity,
    digital_influence,
    raw: { filterFreq, photosBefore, selfieFreq, socialTime, filtersChangedFace, deletedPhoto, videoCallAware, beautyStandards, aiTrust, aiImagesEffect },
  };
}

function pickArchetype(s: ReturnType<typeof computeScores>) {
  const { digital_confidence, social_comparison, filter_awareness, camera_sensitivity } = s;
  if (filter_awareness >= 70 && social_comparison >= 55) return {
    name: "The Filter Optimiser",
    blurb: "You enjoy refining how images are presented. Your responses suggest visual presentation matters to you, and you engage thoughtfully with editing tools.",
  };
  if (camera_sensitivity >= 70) return {
    name: "The Camera Critic",
    blurb: "You're highly aware of how you appear in photographs and on video calls. Your answers suggest a careful eye for camera angles and presentation.",
  };
  if (social_comparison >= 65 && digital_confidence < 55) return {
    name: "The Social Mirror",
    blurb: "Your responses suggest online interactions noticeably shape how you see your own appearance. Awareness of this pattern is itself a healthy first step.",
  };
  if (filter_awareness <= 30 && digital_confidence >= 70) return {
    name: "The Naturalist",
    blurb: "Minimal editing and steady confidence in how you look. Your answers point to a grounded relationship with your image.",
  };
  if (digital_confidence >= 75 && filter_awareness <= 50) return {
    name: "The Confidence Explorer",
    blurb: "You use digital tools as a creative outlet rather than a source of validation. Your confidence shows up clearly in your responses.",
  };
  if (camera_sensitivity >= 55 && social_comparison >= 55 && digital_confidence < 65) return {
    name: "The Digital Perfectionist",
    blurb: "A precise eye for detail and a strong sense of visual presentation. Your responses suggest high standards for how images are seen.",
  };
  return {
    name: "The Reflective Observer",
    blurb: "Balanced engagement with social media and a healthy awareness of how digital culture influences self-perception.",
  };
}

function interpretConfidence(score: number) {
  if (score >= 90) return "Very strong digital confidence";
  if (score >= 75) return "Healthy confidence and self-awareness";
  if (score >= 60) return "Moderate digital influence";
  if (score >= 40) return "Noticeable digital appearance awareness";
  return "High appearance sensitivity to digital environments";
}

const BANNED = /\b(diagnos(e|is|ed)|disorder|mental illness|depression|depressive|anxiety|anxious|BDD|body dysmorphic|psychiatric|psychological condition|pathology|pathological|therapy|therapist|patient|clinical diagnosis)\b/i;

async function generateInsight(scores: any, archetype: any) {
  const prompt = `You are writing a short personal reflection (160-220 words) for a participant in The Filtered Face Project — a research study on how social media, filters and cameras influence self-perception.

Their Digital Face Profile:
- Archetype: ${archetype.name}
- Digital Confidence Index: ${scores.digital_confidence}/100
- Social Comparison Score: ${scores.social_comparison}/100
- Filter Awareness Score: ${scores.filter_awareness}/100
- Camera Sensitivity Score: ${scores.camera_sensitivity}/100
- Digital Influence Score: ${scores.digital_influence}/100

Write a single flowing reflection that:
- Uses British English
- Opens with "Your responses suggest…" or "Your answers indicate…"
- Highlights healthy patterns and observations
- Offers two practical, gentle suggestions for navigating digital appearance culture
- Ends warmly and non-judgmentally

STRICT RULES — never break:
- No diagnoses, no mental-health labels, no medical advice
- Do NOT use these words: diagnose, disorder, depression, anxiety, BDD, body dysmorphic, therapy, patient, condition, illness, pathology
- This is self-reflection, not assessment. Tone: supportive, professional, educational.`;

  const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${LOVABLE_API_KEY}`,
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: "You write brief, warm, non-clinical reflections for research participants. Strictly avoid clinical/medical/psychiatric language." },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!resp.ok) {
    return safeFallback(archetype, scores);
  }
  const data = await resp.json();
  let text: string = data?.choices?.[0]?.message?.content?.trim() || "";
  if (!text || BANNED.test(text)) {
    return safeFallback(archetype, scores);
  }
  return text;
}

function safeFallback(archetype: any, s: any) {
  return `Your responses suggest you sit within the ${archetype.name} pattern, with a Digital Confidence Index of ${s.digital_confidence}/100. ${archetype.blurb} Many participants share elements of this pattern, and it's a sign of self-awareness rather than a concern.

Two gentle suggestions: first, notice when you reach for the camera or a filter — small pauses can soften the pull of comparison. Second, curate your feed actively; the accounts you follow shape what feels "normal" more than any single photo. Your reflection is part of one of the UK's largest studies into digital self-perception, and your honesty helps the wider conversation move forward.`;
}

async function percentiles(supabase: any, studyId: string, scores: any, qById: Map<string, any>) {
  // Pull all responses to compute basic percentiles in-process (small dataset).
  const { data: rows } = await supabase
    .from("research_responses")
    .select("answers, profile")
    .eq("study_id", studyId)
    .limit(5000);

  const total = rows?.length || 0;
  const allConfidence: number[] = [];
  const allFilter: number[] = [];
  const allCamera: number[] = [];
  const allPhotosBefore: number[] = [];

  (rows || []).forEach((r: any) => {
    const p = r.profile;
    if (p?.scores) {
      allConfidence.push(p.scores.digital_confidence);
      allFilter.push(p.scores.filter_awareness);
      allCamera.push(p.scores.camera_sensitivity);
      if (p.scores.raw?.photosBefore != null) allPhotosBefore.push(p.scores.raw.photosBefore);
    } else if (r.answers) {
      const s = computeScores(r.answers, qById);
      allConfidence.push(s.digital_confidence);
      allFilter.push(s.filter_awareness);
      allCamera.push(s.camera_sensitivity);
      allPhotosBefore.push(s.raw.photosBefore);
    }
  });

  const pct = (arr: number[], v: number, lowerIsBetter = false) => {
    if (arr.length < 2) return null;
    const below = arr.filter(x => lowerIsBetter ? x > v : x < v).length;
    return Math.round((below / arr.length) * 100);
  };

  const confidencePct = pct(allConfidence, scores.digital_confidence);
  const filterPct = pct(allFilter, scores.filter_awareness, true); // lower filter awareness = uses less
  const cameraPct = pct(allCamera, scores.camera_sensitivity);
  const photosPct = pct(allPhotosBefore, scores.raw.photosBefore, true);

  return {
    total_participants: total,
    comparisons: [
      confidencePct != null && `Your Digital Confidence Index is higher than ${confidencePct}% of participants.`,
      filterPct != null && `You use filters less than ${filterPct}% of participants.`,
      cameraPct != null && `You report greater camera awareness than ${cameraPct}% of participants.`,
      photosPct != null && `You take fewer photos before posting than ${photosPct}% of participants.`,
    ].filter(Boolean),
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const { response_id } = await req.json();
    if (!response_id || typeof response_id !== "string") {
      return new Response(JSON.stringify({ error: "response_id required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
    const { data: row, error } = await supabase
      .from("research_responses")
      .select("id, study_id, answers, profile")
      .eq("id", response_id)
      .maybeSingle();

    if (error || !row) {
      return new Response(JSON.stringify({ error: "response not found" }), {
        status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (row.profile?.archetype) {
      return new Response(JSON.stringify(row.profile), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: qs } = await supabase
      .from("research_questions")
      .select("id, question_text, question_type, options")
      .eq("study_id", row.study_id);

    const qById = new Map((qs || []).map((q: any) => [q.id, q]));

    const scores = computeScores(row.answers || {}, qById);
    const archetype = pickArchetype(scores);
    const insight = await generateInsight(scores, archetype);
    const comparison = await percentiles(supabase, row.study_id, scores, qById);

    const profile = {
      version: 1,
      archetype,
      scores,
      interpretation: interpretConfidence(scores.digital_confidence),
      insight,
      comparison,
      generated_at: new Date().toISOString(),
    };

    await supabase.from("research_responses").update({ profile }).eq("id", response_id);

    return new Response(JSON.stringify(profile), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-digital-face-profile error", e);
    return new Response(JSON.stringify({ error: String(e?.message || e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
