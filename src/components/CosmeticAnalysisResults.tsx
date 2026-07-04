import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  AlertTriangle,
  Beaker,
  Target,
  FlaskConical,
  Info,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";

interface CosmeticAnalysisResultsProps {
  analysis: any;
}

type RiskLevel = "low" | "moderate" | "high" | null;

const normaliseRisk = (raw: unknown): RiskLevel => {
  if (typeof raw !== "string") return null;
  const v = raw.trim().toLowerCase();
  if (v === "low" || v === "none" || v === "minimal" || v === "negligible") return "low";
  if (v === "moderate" || v === "medium") return "moderate";
  if (v === "high" || v === "severe") return "high";
  return null;
};

const CosmeticAnalysisResults = ({ analysis }: CosmeticAnalysisResultsProps) => {
  if (!analysis || !analysis.products || analysis.products.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-8">
        <Info className="h-10 w-10 mx-auto mb-3 opacity-50" />
        <p className="text-sm">No analysis data available</p>
      </div>
    );
  }

  const product = analysis.products[0];
  const score: number = product.scores?.final_score_0to10 || 0;

  const scoreColour =
    score >= 8 ? "text-emerald-400" : score >= 6 ? "text-amber-400" : "text-red-400";

  const formatCellType = (cellType: string) => {
    const cellNames: Record<string, string> = {
      keratinocytes: "Surface renewal",
      melanocytes: "Pigment regulation",
      fibroblasts: "Collagen & repair",
    };
    return cellNames[cellType] || cellType;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Hero score — slim, editorial */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-white/50 uppercase mb-1">
              CosmeDocs Score
            </p>
            <div className="flex items-baseline gap-2">
              <span className={`text-5xl md:text-6xl font-semibold ${scoreColour}`}>
                {score.toFixed(1)}
              </span>
              <span className="text-xl text-white/40">/10</span>
            </div>
          </div>
          {product.cosmedocs_verdict && (
            <p className="max-w-md text-sm leading-relaxed text-white/70 italic">
              &ldquo;{product.cosmedocs_verdict}&rdquo;
            </p>
          )}
        </div>
        <div className="mt-5">
          <Progress value={score * 10} className="h-1.5" />
        </div>
      </section>

      {/* Quick stats row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatPill
          label="Ingredients"
          value={product.ingredients?.count?.toString() ?? "—"}
        />
        {product.pH?.estimated && (
          <StatPill label="Est. pH" value={String(product.pH.estimated)} />
        )}
        {product.ingredients?.concentration_transparency?.transparency_score != null && (
          <StatPill
            label="Transparency"
            value={`${product.ingredients.concentration_transparency.transparency_score}/10`}
          />
        )}
        {product.key_actives?.length ? (
          <StatPill label="Key actives" value={String(product.key_actives.length)} />
        ) : null}
      </section>

      {/* Human summary — the money paragraphs */}
      {product.human_summary && (
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6 space-y-4">
          <SummaryBlock
            label="What it really does"
            body={product.human_summary.what_it_really_does}
            accent="text-primary"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <SummaryBlock
              label="Best for"
              body={product.human_summary.best_for}
              accent="text-emerald-400"
            />
            <SummaryBlock
              label="How to use"
              body={product.human_summary.use_like_this}
              accent="text-violet-400"
            />
          </div>
        </section>
      )}

      {/* Key actives — compact rows */}
      {product.key_actives && product.key_actives.length > 0 && (
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <header className="flex items-center gap-2 mb-4">
            <Target className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium tracking-wide uppercase text-white/80">
              Key active ingredients
            </h3>
          </header>
          <ul className="divide-y divide-white/5">
            {product.key_actives.map((active: any, index: number) => {
              const risk = normaliseRisk(active.comedogenicity_risk);
              return (
                <li key={index} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-medium text-white">{active.ingredient}</h4>
                    <RiskBadge risk={risk} />
                  </div>
                  {active.function && (
                    <p className="text-sm text-white/60 mt-1 leading-relaxed">
                      {active.function}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {active.solubility && (
                      <MicroTag>{active.solubility}</MicroTag>
                    )}
                    {active.pore_penetration_expectation && (
                      <MicroTag>{active.pore_penetration_expectation} penetration</MicroTag>
                    )}
                  </div>
                  {active.evidence_notes && (
                    <p className="text-xs text-white/40 mt-2 italic">
                      {active.evidence_notes}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Rest — accordion to keep it compact */}
      <Accordion type="multiple" className="space-y-3">
        {product.three_cell_analysis && (
          <AccordionItem
            value="cells"
            className="border border-white/10 rounded-2xl bg-white/[0.02] px-5"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/80">
                <Heart className="h-4 w-4 text-primary" />
                How it affects your skin
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <div className="grid md:grid-cols-3 gap-3">
                {Object.entries(product.three_cell_analysis).map(
                  ([cellType, data]: [string, any]) => (
                    <div
                      key={cellType}
                      className="rounded-xl border border-white/10 p-4 bg-black/20"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-xs uppercase tracking-wide text-white/60">
                          {formatCellType(cellType)}
                        </h4>
                        <DirectionDot direction={data.net_direction} />
                      </div>
                      {data.effects?.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {data.effects.slice(0, 4).map((effect: string, idx: number) => (
                            <MicroTag key={idx}>{effect}</MicroTag>
                          ))}
                        </div>
                      )}
                      {data.evidence_summary && (
                        <p className="text-xs text-white/50 leading-relaxed">
                          {data.evidence_summary}
                        </p>
                      )}
                    </div>
                  ),
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {product.marketing_vs_evidence && (
          <AccordionItem
            value="claims"
            className="border border-white/10 rounded-2xl bg-white/[0.02] px-5"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/80">
                <Shield className="h-4 w-4 text-primary" />
                Marketing vs science
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5 space-y-3">
              {product.marketing_vs_evidence.supported?.length > 0 && (
                <ClaimGroup
                  title="Backed by evidence"
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  items={product.marketing_vs_evidence.supported}
                  tone="good"
                />
              )}
              {product.marketing_vs_evidence.unsupported_or_exaggerated?.length > 0 && (
                <ClaimGroup
                  title="Questionable"
                  icon={<AlertTriangle className="h-4 w-4" />}
                  items={product.marketing_vs_evidence.unsupported_or_exaggerated}
                  tone="warn"
                />
              )}
            </AccordionContent>
          </AccordionItem>
        )}

        {product.oil_and_pores && (
          <AccordionItem
            value="oil"
            className="border border-white/10 rounded-2xl bg-white/[0.02] px-5"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/80">
                <Beaker className="h-4 w-4 text-primary" />
                Oil & pore behaviour
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Controls oil</span>
                <span className="text-white/80">
                  {product.oil_and_pores.sebostatic_effect === "yes"
                    ? "Yes"
                    : product.oil_and_pores.sebostatic_effect === "partial"
                    ? "Somewhat"
                    : "No"}
                </span>
              </div>
              {product.oil_and_pores.solubility_relevance && (
                <p className="text-sm text-white/60 leading-relaxed">
                  {product.oil_and_pores.solubility_relevance}
                </p>
              )}
              {product.oil_and_pores.pore_outcome_if_penetrates && (
                <p className="text-sm text-white/60 leading-relaxed">
                  {product.oil_and_pores.pore_outcome_if_penetrates}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        )}

        {product.ingredients?.ingredient_education?.length > 0 && (
          <AccordionItem
            value="education"
            className="border border-white/10 rounded-2xl bg-white/[0.02] px-5"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/80">
                <FlaskConical className="h-4 w-4 text-primary" />
                Ingredient glossary
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <ul className="divide-y divide-white/5">
                {product.ingredients.ingredient_education
                  .slice(0, 6)
                  .map((ingredient: any, index: number) => (
                    <li key={index} className="py-3 first:pt-0 last:pb-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-medium text-white text-sm">
                          {ingredient.ingredient}
                        </h4>
                        {ingredient.consumer_knowledge_level && (
                          <MicroTag>{ingredient.consumer_knowledge_level}</MicroTag>
                        )}
                      </div>
                      {ingredient.what_it_is && (
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">
                          {ingredient.what_it_is}
                        </p>
                      )}
                      {ingredient.why_its_used && (
                        <p className="text-xs text-white/45 mt-1 leading-relaxed italic">
                          {ingredient.why_its_used}
                        </p>
                      )}
                    </li>
                  ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
};

// ── Sub-components ────────────────────────────────────────────────

const StatPill = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
    <div className="text-lg font-semibold text-white">{value}</div>
    <div className="text-[11px] tracking-wide text-white/50 uppercase mt-0.5">
      {label}
    </div>
  </div>
);

const SummaryBlock = ({
  label,
  body,
  accent,
}: {
  label: string;
  body?: string;
  accent: string;
}) =>
  body ? (
    <div>
      <p className={`text-[10px] tracking-[0.22em] uppercase mb-1 ${accent}`}>
        {label}
      </p>
      <p className="text-sm text-white/80 leading-relaxed">{body}</p>
    </div>
  ) : null;

const MicroTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/60">
    {children}
  </span>
);

const RiskBadge = ({ risk }: { risk: RiskLevel }) => {
  if (!risk) return null;
  if (risk === "low") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wide">
        <Sparkles className="h-3 w-3" /> Safe
      </span>
    );
  }
  if (risk === "moderate") {
    return (
      <span className="inline-flex items-center rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wide">
        Moderate
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-red-500/10 text-red-300 border border-red-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wide">
      High
    </span>
  );
};

const DirectionDot = ({ direction }: { direction?: string }) => {
  const map: Record<string, { label: string; cls: string }> = {
    beneficial: { label: "Beneficial", cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25" },
    harmful: { label: "Caution", cls: "bg-red-500/15 text-red-300 border-red-500/25" },
    neutral: { label: "Neutral", cls: "bg-white/5 text-white/60 border-white/10" },
  };
  const conf = map[direction ?? "neutral"] ?? map.neutral;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${conf.cls}`}
    >
      {conf.label}
    </span>
  );
};

const ClaimGroup = ({
  title,
  icon,
  items,
  tone,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  tone: "good" | "warn";
}) => (
  <div
    className={`rounded-xl border p-3 ${
      tone === "good"
        ? "border-emerald-500/20 bg-emerald-500/5"
        : "border-amber-500/20 bg-amber-500/5"
    }`}
  >
    <div
      className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wide mb-2 ${
        tone === "good" ? "text-emerald-300" : "text-amber-300"
      }`}
    >
      {icon}
      {title}
    </div>
    <div className="flex flex-wrap gap-1.5">
      {items.map((claim, index) => (
        <Badge
          key={index}
          variant="outline"
          className={`text-[11px] font-normal ${
            tone === "good"
              ? "border-emerald-500/30 text-emerald-100"
              : "border-amber-500/30 text-amber-100"
          }`}
        >
          {claim}
        </Badge>
      ))}
    </div>
  </div>
);

export default CosmeticAnalysisResults;
