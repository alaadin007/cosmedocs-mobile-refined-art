import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle2, XCircle, Beaker, Shield, Leaf } from "lucide-react";

interface ProductAnalysisResultsProps {
  analysis: any;
}

const ProductAnalysisResults = ({ analysis }: ProductAnalysisResultsProps) => {
  if (!analysis || !analysis.products || analysis.products.length === 0) {
    return (
      <div className="col-span-2 text-center text-muted-foreground">
        No analysis data available
      </div>
    );
  }

  const product = analysis.products[0];
  const scores = product.scores || {};
  const finalScore = scores.final_score_0to10 || 0;
  
  // Get score color based on value
  const getScoreColor = (score: number) => {
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
      {/* Left Column - Product Overview & Scores */}
      <div className="space-y-6">
        {/* Product Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beaker className="h-5 w-5" />
              Product Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{product.name || 'Unknown Product'}</h3>
              <p className="text-muted-foreground">{product.brand || 'Unknown Brand'}</p>
            </div>
            
            {product.price && (
              <div>
                <span className="text-sm text-muted-foreground">Price: </span>
                <span className="font-medium">{product.price}</span>
              </div>
            )}

            <div className="pt-4 border-t">
              <div className={`text-center p-4 rounded-lg ${getScoreBg(finalScore)}`}>
                <div className={`text-3xl font-bold ${getScoreColor(finalScore)}`}>
                  {finalScore.toFixed(1)}/10
                </div>
                <p className="text-sm text-muted-foreground mt-1">CosmeDocs Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Scores */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scores.barrier_acid_mantle && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Barrier & Acid Mantle</span>
                  <span className="font-medium">{scores.barrier_acid_mantle}/25</span>
                </div>
                <Progress value={(scores.barrier_acid_mantle / 25) * 100} className="h-2" />
              </div>
            )}
            
            {scores.keratinocytes_texture && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Keratinocytes/Texture</span>
                  <span className="font-medium">{scores.keratinocytes_texture}/20</span>
                </div>
                <Progress value={(scores.keratinocytes_texture / 20) * 100} className="h-2" />
              </div>
            )}

            {scores.melanocytes_pigment && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Melanocytes/Pigment</span>
                  <span className="font-medium">{scores.melanocytes_pigment}/15</span>
                </div>
                <Progress value={(scores.melanocytes_pigment / 15) * 100} className="h-2" />
              </div>
            )}

            {scores.fibroblasts_matrix && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Fibroblasts/Matrix</span>
                  <span className="font-medium">{scores.fibroblasts_matrix}/20</span>
                </div>
                <Progress value={(scores.fibroblasts_matrix / 20) * 100} className="h-2" />
              </div>
            )}

            {scores.sebum_pore_dynamics && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Sebum & Pore Dynamics</span>
                  <span className="font-medium">{scores.sebum_pore_dynamics}/10</span>
                </div>
                <Progress value={(scores.sebum_pore_dynamics / 10) * 100} className="h-2" />
              </div>
            )}

            {scores.formulation_quality && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Formulation Quality</span>
                  <span className="font-medium">{scores.formulation_quality}/10</span>
                </div>
                <Progress value={(scores.formulation_quality / 10) * 100} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Ingredients & Analysis */}
      <div className="space-y-6">
        {/* Active Ingredients */}
        {product.active_ingredients && product.active_ingredients.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Active Ingredients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {product.active_ingredients.map((ingredient: any, index: number) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{ingredient.name}</h4>
                      {ingredient.concentration && (
                        <Badge variant="secondary">{ingredient.concentration}</Badge>
                      )}
                    </div>
                    {ingredient.function && (
                      <p className="text-sm text-muted-foreground mt-1">{ingredient.function}</p>
                    )}
                    {ingredient.efficacy_rating && (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Efficacy</span>
                          <span>{ingredient.efficacy_rating}/5</span>
                        </div>
                        <Progress value={(ingredient.efficacy_rating / 5) * 100} className="h-1" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {product.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Issues/Concerns */}
        {product.issues && product.issues.length > 0 && (
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-5 w-5" />
                Issues & Concerns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {product.issues.map((issue: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-red-600">{issue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Skin Types */}
        {product.suitable_skin_types && product.suitable_skin_types.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Suitable Skin Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {product.suitable_skin_types.map((skinType: string, index: number) => (
                  <Badge key={index} variant="outline">{skinType}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Professional Assessment */}
        {product.professional_assessment && (
          <Card>
            <CardHeader>
              <CardTitle>Professional Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{product.professional_assessment}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default ProductAnalysisResults;