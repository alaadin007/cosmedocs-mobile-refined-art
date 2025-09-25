import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Star, Lightbulb, Beaker, Target, Users } from "lucide-react";

interface CosmeticAnalysisResultsProps {
  analysis: any;
}

const CosmeticAnalysisResults = ({ analysis }: CosmeticAnalysisResultsProps) => {
  if (!analysis || !analysis.products || analysis.products.length === 0) {
    return (
      <div className="col-span-2 text-centre text-muted-foreground">
        No analysis data available
      </div>
    );
  }

  const product = analysis.products[0];
  const routineSummary = analysis.routine_summary;

  const getScoreColour = (score: number) => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (score: number) => {
    if (score >= 8) return "bg-green-50 border-green-200";
    if (score >= 6) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  return (
    <>
      {/* General Ingredients Summary */}
      {routineSummary?.general_ingredients_summary && (
        <div className="col-span-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="h-5 w-5" />
                General Ingredients Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{routineSummary.general_ingredients_summary}</p>
              {routineSummary.overall_routine_score_0to10 && (
                <div className="mt-4 flex items-centre gap-2">
                  <span className="text-sm font-medium">Overall Routine Score:</span>
                  <Badge variant="outline" className={getScoreColour(routineSummary.overall_routine_score_0to10)}>
                    {routineSummary.overall_routine_score_0to10}/10
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Left Column - Product Overview & Score */}
      <div className="space-y-6">
        {/* Product Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-centre gap-2">
              <Star className="h-5 w-5" />
              Product Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-muted-foreground">{product.brand}</p>
              {product.category && <Badge variant="outline">{product.category}</Badge>}
            </div>
            
            <div className="pt-4 border-t">
              <div className={`text-centre p-6 rounded-lg ${getScoreBg(product.scores?.final_score_0to10 || 0)}`}>
                <div className={`text-4xl font-bold ${getScoreColour(product.scores?.final_score_0to10 || 0)}`}>
                  {product.scores?.final_score_0to10 || 0}/10
                </div>
                <p className="text-sm text-muted-foreground mt-2">CosmeDocs Score</p>
              </div>
            </div>

            {product.ingredients && (
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between items-centre">
                  <span className="font-medium">Ingredient Count:</span>
                  <Badge variant="outline">{product.ingredients.count}</Badge>
                </div>
                {product.pH?.estimated && (
                  <div className="flex justify-between items-centre">
                    <span className="font-medium">Estimated pH:</span>
                    <Badge variant="outline">{product.pH.estimated}</Badge>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Professional Assessment */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {product.cosmedocs_verdict && (
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">COSMEDOCS VERDICT</h4>
                <p className="text-sm">{product.cosmedocs_verdict}</p>
              </div>
            )}

            {product.human_summary && (
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-sm text-muted-foreground mb-1">WHAT IT REALLY DOES</h5>
                  <p className="text-sm">{product.human_summary.what_it_really_does}</p>
                </div>
                <div>
                  <h5 className="font-medium text-sm text-muted-foreground mb-1">BEST FOR</h5>
                  <p className="text-sm">{product.human_summary.best_for}</p>
                </div>
                <div>
                  <h5 className="font-medium text-sm text-muted-foreground mb-1">HOW TO USE</h5>
                  <p className="text-sm">{product.human_summary.use_like_this}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Key Actives */}
        {product.key_actives && product.key_actives.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-centre gap-2">
                <Target className="h-5 w-5" />
                Key Active Ingredients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {product.key_actives.map((active: any, index: number) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{active.ingredient}</h4>
                      <Badge variant="outline" className="text-xs">
                        {active.comedogenicity_risk} risk
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{active.function}</p>
                    <div className="flex gap-2 text-xs">
                      <Badge variant="secondary">{active.solubility}</Badge>
                      <Badge variant="secondary">{active.pore_penetration_expectation} penetration</Badge>
                    </div>
                    {active.evidence_notes && (
                      <p className="text-xs text-muted-foreground mt-2">{active.evidence_notes}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Right Column - Detailed Analysis */}
      <div className="space-y-6">
        {/* Three-Cell Analysis */}
        {product.three_cell_analysis && (
          <Card>
            <CardHeader>
              <CardTitle>Three-Cell Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(product.three_cell_analysis).map(([cellType, data]: [string, any]) => (
                  <div key={cellType} className="border rounded-lg p-3">
                    <div className="flex justify-between items-centre mb-2">
                      <h4 className="font-medium capitalize">{cellType}</h4>
                      <Badge 
                        variant={data.net_direction === 'beneficial' ? 'default' : 
                                data.net_direction === 'harmful' ? 'destructive' : 'secondary'}
                      >
                        {data.net_direction}
                      </Badge>
                    </div>
                    {data.effects && data.effects.length > 0 && (
                      <div className="mb-2">
                        <div className="flex flex-wrap gap-1">
                          {data.effects.map((effect: string, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {effect}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {data.evidence_summary && (
                      <p className="text-sm text-muted-foreground">{data.evidence_summary}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Marketing vs Evidence */}
        {product.marketing_vs_evidence && (
          <Card>
            <CardHeader>
              <CardTitle>Marketing vs Evidence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {product.marketing_vs_evidence.supported && product.marketing_vs_evidence.supported.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm flex items-centre gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Evidence-Supported Claims
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {product.marketing_vs_evidence.supported.map((claim: string, index: number) => (
                        <Badge key={index} variant="default" className="text-xs">
                          {claim}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {product.marketing_vs_evidence.unsupported_or_exaggerated && 
                 product.marketing_vs_evidence.unsupported_or_exaggerated.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm flex items-centre gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      Unsupported/Exaggerated Claims
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {product.marketing_vs_evidence.unsupported_or_exaggerated.map((claim: string, index: number) => (
                        <Badge key={index} variant="destructive" className="text-xs">
                          {claim}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Oil and Pores */}
        {product.oil_and_pores && (
          <Card>
            <CardHeader>
              <CardTitle>Oil & Pore Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-centre">
                  <span className="font-medium">Sebostatic Effect:</span>
                  <Badge variant="outline">{product.oil_and_pores.sebostatic_effect}</Badge>
                </div>
                {product.oil_and_pores.solubility_relevance && (
                  <div>
                    <h5 className="font-medium text-sm text-muted-foreground mb-1">SOLUBILITY RELEVANCE</h5>
                    <p className="text-sm">{product.oil_and_pores.solubility_relevance}</p>
                  </div>
                )}
                {product.oil_and_pores.pore_outcome_if_penetrates && (
                  <div>
                    <h5 className="font-medium text-sm text-muted-foreground mb-1">PORE OUTCOME</h5>
                    <p className="text-sm">{product.oil_and_pores.pore_outcome_if_penetrates}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Inflammation & Barrier */}
        {product.inflammation_barrier && (
          <Card>
            <CardHeader>
              <CardTitle>Inflammation & Barrier</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {product.inflammation_barrier.barrier_repair && product.inflammation_barrier.barrier_repair.length > 0 && (
                  <div>
                    <h5 className="font-medium text-sm text-muted-foreground mb-2">BARRIER REPAIR</h5>
                    <div className="flex flex-wrap gap-1">
                      {product.inflammation_barrier.barrier_repair.map((ingredient: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.inflammation_barrier.sensitive_skin_comment && (
                  <div>
                    <h5 className="font-medium text-sm text-muted-foreground mb-1">SENSITIVE SKIN</h5>
                    <p className="text-sm">{product.inflammation_barrier.sensitive_skin_comment}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* AM/PM Usage Plan */}
        {routineSummary?.am_pm_plan && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-centre gap-2">
                <Users className="h-5 w-5" />
                Recommended Usage Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {routineSummary.am_pm_plan.AM && routineSummary.am_pm_plan.AM.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Morning (AM)</h4>
                    <div className="flex flex-wrap gap-1">
                      {routineSummary.am_pm_plan.AM.map((product: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {routineSummary.am_pm_plan.PM && routineSummary.am_pm_plan.PM.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Evening (PM)</h4>
                    <div className="flex flex-wrap gap-1">
                      {routineSummary.am_pm_plan.PM.map((product: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {routineSummary.am_pm_plan.weekly && routineSummary.am_pm_plan.weekly.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Weekly</h4>
                    <div className="flex flex-wrap gap-1">
                      {routineSummary.am_pm_plan.weekly.map((product: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default CosmeticAnalysisResults;