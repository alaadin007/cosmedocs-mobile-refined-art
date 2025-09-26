import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Star, Lightbulb, Beaker, Target, Users, FlaskConical, GraduationCap, Info, Heart, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CosmeticAnalysisResultsProps {
  analysis: any;
}

const CosmeticAnalysisResults = ({ analysis }: CosmeticAnalysisResultsProps) => {
  if (!analysis || !analysis.products || analysis.products.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-8">
        <Info className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
        <p>No analysis data available</p>
      </div>
    );
  }

  const product = analysis.products[0];
  const routineSummary = analysis.routine_summary;

  const getScoreColour = (score: number) => {
    if (score >= 8) return "text-emerald-600";
    if (score >= 6) return "text-amber-600";
    return "text-red-600";
  };

  const getScoreBg = (score: number) => {
    if (score >= 8) return "bg-emerald-50 border-emerald-200";
    if (score >= 6) return "bg-amber-50 border-amber-200";
    return "bg-red-50 border-red-200";
  };

  const formatCellType = (cellType: string) => {
    const cellNames: { [key: string]: string } = {
      'keratinocytes': 'Skin Surface Cells',
      'melanocytes': 'Pigment Cells',
      'fibroblasts': 'Deep Skin Cells'
    };
    return cellNames[cellType] || cellType;
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Score Section */}
      <div className="mb-8">
        <Card className={`border-2 ${getScoreBg(product.scores?.final_score_0to10 || 0)}`}>
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <div className={`text-6xl font-bold mb-2 ${getScoreColour(product.scores?.final_score_0to10 || 0)}`}>
                {(product.scores?.final_score_0to10 || 0).toFixed(1)}<span className="text-3xl">/10</span>
              </div>
              <p className="text-lg text-muted-foreground">CosmeDocs Score</p>
              <div className="mt-4 max-w-2xl mx-auto">
                <Progress 
                  value={(product.scores?.final_score_0to10 || 0) * 10} 
                  className="h-3"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Layout - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column - Essential Information */}
        <div className="space-y-6">
          
          {/* Professional Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <GraduationCap className="h-6 w-6 text-primary" />
                Professional Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {product.cosmedocs_verdict && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3 uppercase tracking-wide text-sm">
                    CosmeDocs Verdict
                  </h4>
                  <p className="text-blue-800 leading-relaxed">{product.cosmedocs_verdict}</p>
                </div>
              )}

              {product.human_summary && (
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold text-primary mb-2 uppercase tracking-wide text-sm">
                      What It Really Does
                    </h5>
                    <p className="text-foreground leading-relaxed">{product.human_summary.what_it_really_does}</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h5 className="font-semibold text-emerald-700 mb-2 uppercase tracking-wide text-sm">
                      Best For
                    </h5>
                    <p className="text-foreground leading-relaxed">{product.human_summary.best_for}</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-purple-700 mb-2 uppercase tracking-wide text-sm">
                      How to Use
                    </h5>
                    <p className="text-foreground leading-relaxed">{product.human_summary.use_like_this}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Info className="h-6 w-6 text-primary" />
                Product Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-100 border border-slate-200 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">{product.ingredients?.count || 0}</div>
                  <div className="text-sm text-slate-600 font-medium">Ingredients</div>
                </div>
                
                {product.pH?.estimated && (
                  <div className="text-center p-4 bg-slate-100 border border-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900">{product.pH.estimated}</div>
                    <div className="text-sm text-slate-600 font-medium">Estimated pH</div>
                  </div>
                )}
              </div>
              
              {product.ingredients?.concentration_transparency && (
                <div className="mt-4 p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Transparency Rating:</span>
                    <Badge 
                      variant={product.ingredients.concentration_transparency.transparency_score >= 7 ? "default" : 
                             product.ingredients.concentration_transparency.transparency_score >= 4 ? "secondary" : "destructive"}
                    >
                      {product.ingredients.concentration_transparency.transparency_score}/10
                    </Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Key Active Ingredients */}
          {product.key_actives && product.key_actives.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-6 w-6 text-primary" />
                  Key Active Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.key_actives.map((active: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{active.ingredient}</h4>
                        <Badge 
                          variant={active.comedogenicity_risk === 'low' ? 'default' : 
                                 active.comedogenicity_risk === 'moderate' ? 'secondary' : 'destructive'}
                          className="text-xs"
                        >
                          {active.comedogenicity_risk} risk
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{active.function}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">{active.solubility}</Badge>
                        <Badge variant="outline" className="text-xs">{active.pore_penetration_expectation} penetration</Badge>
                      </div>
                      {active.evidence_notes && (
                        <p className="text-sm text-muted-foreground mt-2 italic">{active.evidence_notes}</p>
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
          
          {/* How It Affects Your Skin */}
          {product.three_cell_analysis && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Heart className="h-6 w-6 text-primary" />
                  How It Affects Your Skin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(product.three_cell_analysis).map(([cellType, data]: [string, any]) => (
                    <div key={cellType} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-lg">{formatCellType(cellType)}</h4>
                        <Badge 
                          variant={data.net_direction === 'beneficial' ? 'default' : 
                                  data.net_direction === 'harmful' ? 'destructive' : 'secondary'}
                          className="text-sm"
                        >
                          {data.net_direction === 'beneficial' ? 'Good for you' : 
                           data.net_direction === 'harmful' ? 'May cause issues' : 'Neutral'}
                        </Badge>
                      </div>
                      
                      {data.effects && data.effects.length > 0 && (
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-2">
                            {data.effects.map((effect: string, idx: number) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {effect}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {data.evidence_summary && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{data.evidence_summary}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Marketing Claims vs Science */}
          {product.marketing_vs_evidence && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Shield className="h-6 w-6 text-primary" />
                  Marketing Claims vs Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.marketing_vs_evidence.supported && product.marketing_vs_evidence.supported.length > 0 && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-800 flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5" />
                        Scientifically Backed Claims
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.marketing_vs_evidence.supported.map((claim: string, index: number) => (
                          <Badge key={index} variant="default" className="text-sm bg-emerald-600">
                            {claim}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.marketing_vs_evidence.unsupported_or_exaggerated && 
                   product.marketing_vs_evidence.unsupported_or_exaggerated.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 flex items-center gap-2 mb-3">
                        <AlertTriangle className="h-5 w-5" />
                        Questionable Claims
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.marketing_vs_evidence.unsupported_or_exaggerated.map((claim: string, index: number) => (
                          <Badge key={index} variant="destructive" className="text-sm">
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

          {/* Suitability for Skin Concerns */}
          {product.oil_and_pores && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Beaker className="h-6 w-6 text-primary" />
                  Suitability for Oily Skin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-100 border border-slate-200 rounded-lg">
                    <span className="font-medium">Controls Oil Production:</span>
                    <Badge 
                      variant={product.oil_and_pores.sebostatic_effect === 'yes' ? 'default' : 
                              product.oil_and_pores.sebostatic_effect === 'partial' ? 'secondary' : 'outline'}
                    >
                      {product.oil_and_pores.sebostatic_effect === 'yes' ? 'Yes' : 
                       product.oil_and_pores.sebostatic_effect === 'partial' ? 'Somewhat' : 'No'}
                    </Badge>
                  </div>
                  
                  {product.oil_and_pores.solubility_relevance && (
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-blue-700 mb-2 text-sm uppercase tracking-wide">
                        How It Works
                      </h5>
                      <p className="text-sm leading-relaxed">{product.oil_and_pores.solubility_relevance}</p>
                    </div>
                  )}
                  
                  {product.oil_and_pores.pore_outcome_if_penetrates && (
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-purple-700 mb-2 text-sm uppercase tracking-wide">
                        Pore Impact
                      </h5>
                      <p className="text-sm leading-relaxed">{product.oil_and_pores.pore_outcome_if_penetrates}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Ingredient Education */}
          {product.ingredients?.ingredient_education && product.ingredients.ingredient_education.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  Ingredient Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.ingredients.ingredient_education.slice(0, 3).map((ingredient: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">{ingredient.ingredient}</h4>
                          {ingredient.common_name && ingredient.common_name !== ingredient.ingredient && (
                            <p className="text-sm text-muted-foreground">Also known as: {ingredient.common_name}</p>
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {ingredient.consumer_knowledge_level}
                        </Badge>
                      </div>
                      
                      {ingredient.what_it_is && (
                        <div className="mb-3">
                          <h5 className="font-medium text-sm text-muted-foreground mb-1 uppercase tracking-wide">
                            What It Is
                          </h5>
                          <p className="text-sm leading-relaxed">{ingredient.what_it_is}</p>
                        </div>
                      )}
                      
                      {ingredient.why_its_used && (
                        <div className="mb-3">
                          <h5 className="font-medium text-sm text-muted-foreground mb-1 uppercase tracking-wide">
                            Why It's Used
                          </h5>
                          <p className="text-sm leading-relaxed">{ingredient.why_its_used}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CosmeticAnalysisResults;