import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertTriangle, Star, Lightbulb } from "lucide-react";

interface CosmeticAnalysisResultsProps {
  analysis: any;
}

const CosmeticAnalysisResults = ({ analysis }: CosmeticAnalysisResultsProps) => {
  if (!analysis) {
    return (
      <div className="col-span-2 text-center text-muted-foreground">
        No analysis data available
      </div>
    );
  }

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
      {/* Left Column - Product Overview & Score */}
      <div className="space-y-6">
        {/* Product Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Product Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{analysis.product_name}</h3>
              <p className="text-muted-foreground">{analysis.brand}</p>
            </div>
            
            <div className="pt-4 border-t">
              <div className={`text-center p-6 rounded-lg ${getScoreBg(analysis.overall_score)}`}>
                <div className={`text-4xl font-bold ${getScoreColor(analysis.overall_score)}`}>
                  {analysis.overall_score}/10
                </div>
                <p className="text-sm text-muted-foreground mt-2">CosmeDocs Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {analysis.analysis?.ingredients_assessment && (
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">INGREDIENTS ASSESSMENT</h4>
                <p className="text-sm">{analysis.analysis.ingredients_assessment}</p>
              </div>
            )}
            
            {analysis.analysis?.efficacy_rating && (
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">EFFICACY RATING</h4>
                <p className="text-sm">{analysis.analysis.efficacy_rating}</p>
              </div>
            )}

            {analysis.analysis?.safety_profile && (
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">SAFETY PROFILE</h4>
                <p className="text-sm">{analysis.analysis.safety_profile}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Detailed Analysis */}
      <div className="space-y-6">
        {/* Strengths */}
        {analysis.strengths && analysis.strengths.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="h-5 w-5" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {analysis.strengths.map((strength: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Concerns */}
        {analysis.concerns && analysis.concerns.length > 0 && (
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <AlertTriangle className="h-5 w-5" />
                Considerations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {analysis.concerns.map((concern: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-orange-700">{concern}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Suitable For */}
        {analysis.suitable_for && analysis.suitable_for.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Suitable For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {analysis.suitable_for.map((skinType: string, index: number) => (
                  <Badge key={index} variant="outline">{skinType}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Clinical Verdict */}
        {analysis.clinical_verdict && (
          <Card>
            <CardHeader>
              <CardTitle>Clinical Verdict</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{analysis.clinical_verdict}</p>
            </CardContent>
          </Card>
        )}

        {/* Value Proposition */}
        {analysis.analysis?.value_proposition && (
          <Card>
            <CardHeader>
              <CardTitle>Value Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{analysis.analysis.value_proposition}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default CosmeticAnalysisResults;