import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CapturedPhoto {
  expression: string; // "neutral" | "frown" | "raise-eyebrows" | "smile" | "squint" | "sad" | "left-oblique" | "right-oblique"
  label: string;
  dataUrl: string; // data:image/jpeg;base64,...
}

interface RequestBody {
  photos: CapturedPhoto[];
  age?: number;
}

const SCORING_RUBRIC = `
SCORING SCALE (0-3) — be strict, clinical, honest:
0 = None — no line/volume loss/concern visible at rest or expression. Pure prevention only.
1 = Mild — only visible during expression (dynamic). Preventative micro-dose Botox or hydration suitable.
2 = Moderate — clearly visible at expression, faint shadow at rest (early static line) OR mild volume loss noticeable in side light. TREATMENT dose Botox / 1 syringe filler indicated.
3 = Severe — etched static line at rest OR pronounced hollowing/sagging. Higher dose Botox, multi-syringe filler, or combination treatment with skin boosters needed.

VOLUME LOSS interpretation:
- 0 youthful fullness · 1 subtle flattening · 2 visible hollow/shadow · 3 pronounced hollowing or sagging.
- Map to dermal filler volume (ml) and product type (HA, Profhilo, polynucleotides, PCL threads where appropriate).

SKIN scoring covers: tone evenness, clarity (combined: peri-orbital + peri-oral evenness), hydration, fine lines, pigmentation/melasma, pores, congestion (whiteheads/acne).

Be a Cosmedocs Harley Street doctor — Bold • Natural • Always Your Way. Invisible art, never overdone.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const body = (await req.json()) as RequestBody;
    if (!body.photos || body.photos.length === 0) {
      return new Response(
        JSON.stringify({ error: "No photos provided" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const systemPrompt = `You are Dr. Ahmed Haq, lead cosmetic doctor at Cosmedocs, Harley Street London. You analyse facial photographs taken across multiple expressions to produce a clinical, doctor-led aesthetic assessment. Use BRITISH ENGLISH. Be honest, never flattering, never alarming. Tone: quiet luxury, invisible art. ${SCORING_RUBRIC}`;

    const userContent: Array<
      | { type: "text"; text: string }
      | { type: "image_url"; image_url: { url: string } }
    > = [
      {
        type: "text",
        text: `Patient submitted ${body.photos.length} photos${body.age ? `, age ${body.age}` : ""}. Each is labelled with the expression or angle. Front-facing expressions reveal dynamic lines, static lines and skin quality. The two oblique 3/4 views (left-oblique = camera at patient's 11 o'clock, right-oblique = camera at 1 o'clock, head stays straight) are critical for assessing volume loss in the temples, mid-face, cheeks, jawline and chin projection — use these as the primary evidence for volumeLoss scoring. Cross-reference left vs right for asymmetry. Then return ONLY a JSON object via the provided tool.`,
      },
    ];

    for (const p of body.photos) {
      userContent.push({ type: "text", text: `Expression: ${p.label} (${p.expression})` });
      userContent.push({ type: "image_url", image_url: { url: p.dataUrl } });
    }

    const tools = [
      {
        type: "function",
        function: {
          name: "submit_face_analysis",
          description: "Return the structured aesthetic assessment.",
          parameters: {
            type: "object",
            properties: {
              perceivedAge: { type: "number", description: "Estimated visual age." },
              overallSummary: { type: "string", description: "2-3 sentence honest clinical summary in British English." },
              dynamicLines: {
                type: "object",
                description: "Lines only visible during expression.",
                properties: {
                  frown: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  forehead: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  crowsFeet: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  bunnyLines: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                },
                required: ["frown", "forehead", "crowsFeet", "bunnyLines"],
              },
              staticLines: {
                type: "object",
                description: "Lines etched at rest.",
                properties: {
                  smileLines: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  marionette: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  perioral: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  neck: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                },
                required: ["smileLines", "marionette", "perioral", "neck"],
              },
              volumeLoss: {
                type: "object",
                properties: {
                  temples: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  cheeks: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  underEyes: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  midface: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  jawline: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  chin: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  lips: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                },
                required: ["temples", "cheeks", "underEyes", "midface", "jawline", "chin", "lips"],
              },
              skin: {
                type: "object",
                properties: {
                  tone: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  clarity: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  hydration: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  fineLines: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  pigmentation: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  pores: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                  congestion: { type: "object", properties: { score: { type: "integer", minimum: 0, maximum: 3 }, note: { type: "string" } }, required: ["score", "note"] },
                },
                required: ["tone", "clarity", "hydration", "fineLines", "pigmentation", "pores", "congestion"],
              },
              recommendations: {
                type: "array",
                description: "Prioritised treatment plan, max 6 items.",
                items: {
                  type: "object",
                  properties: {
                    treatment: { type: "string", description: "e.g. 'Anti-Wrinkle Treatment — frown'" },
                    rationale: { type: "string" },
                    dose: { type: "string", description: "Indicative dose: units, ml, sessions." },
                    priority: { type: "string", enum: ["high", "medium", "low"] },
                    indicativePrice: { type: "string", description: "e.g. '£175' or '£350 per ml'." },
                  },
                  required: ["treatment", "rationale", "dose", "priority", "indicativePrice"],
                },
              },
              skincare: {
                type: "array",
                description: "Daily skincare actives based on the 3-cell philosophy.",
                items: { type: "string" },
              },
              motto: { type: "string", description: "End with: 'Bold • Natural • Always Your Way'." },
            },
            required: [
              "perceivedAge",
              "overallSummary",
              "dynamicLines",
              "staticLines",
              "volumeLoss",
              "skin",
              "recommendations",
              "skincare",
              "motto",
            ],
          },
        },
      },
    ];

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-pro",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userContent },
          ],
          tools,
          tool_choice: { type: "function", function: { name: "submit_face_analysis" } },
        }),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI gateway error", response.status, errText);
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit reached. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits in workspace settings." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "AI gateway error", detail: errText }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const toolCall = data?.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall?.function?.arguments) {
      console.error("No tool call returned", JSON.stringify(data));
      return new Response(JSON.stringify({ error: "AI did not return structured analysis." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const analysis = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("analyze-face-scan error", err);
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Unknown error",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
