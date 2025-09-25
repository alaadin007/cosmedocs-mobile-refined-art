import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2, Search, Plus, Trash2, Beaker, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface ProductAnalysis {
  id: string;
  product_name: string;
  product_brand: string | null;
  product_url: string;
  analysis_data: any;
  overall_score: number | null;
  created_at: string;
}

interface ProductInput {
  url: string;
  name?: string;
}

const AestheticIntelligence = () => {
  const [productInputs, setProductInputs] = useState<ProductInput[]>([{ url: '' }]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyses, setAnalyses] = useState<ProductAnalysis[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAnalysis, setExpandedAnalysis] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchPreviousAnalyses();
  }, []);

  const fetchPreviousAnalyses = async () => {
    try {
      const { data, error } = await supabase
        .from('product_analyses')
        .select('id, product_name, product_brand, product_url, analysis_data, overall_score, created_at')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      setAnalyses((data as ProductAnalysis[]) || []);
    } catch (error) {
      console.error('Error fetching analyses:', error);
      toast({
        title: "Error",
        description: "Failed to load previous analyses",
        variant: "destructive",
      });
    }
  };

  const addProductInput = () => {
    setProductInputs([...productInputs, { url: '' }]);
  };

  const removeProductInput = (index: number) => {
    if (productInputs.length > 1) {
      const newInputs = productInputs.filter((_, i) => i !== index);
      setProductInputs(newInputs);
    }
  };

  const updateProductInput = (index: number, field: keyof ProductInput, value: string) => {
    const newInputs = [...productInputs];
    newInputs[index] = { ...newInputs[index], [field]: value };
    setProductInputs(newInputs);
  };

  const analyzeProducts = async () => {
    const validInputs = productInputs.filter(input => input.url.trim());
    
    if (validInputs.length === 0) {
      toast({
        title: "No Products",
        description: "Please enter at least one product URL",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);

    try {
      const promises = validInputs.map(async (input) => {
        const { data, error } = await supabase.functions.invoke('product-analyzer', {
          body: { productUrl: input.url }
        });

        if (error) throw error;
        return data;
      });

      const results = await Promise.all(promises);
      
      toast({
        title: "Analysis Complete",
        description: `Successfully analyzed ${results.length} product(s)`,
      });

      // Refresh the analyses list
      await fetchPreviousAnalyses();
      
      // Reset inputs
      setProductInputs([{ url: '' }]);

    } catch (error) {
      console.error('Error analyzing products:', error);
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze products. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const filteredAnalyses = analyses.filter(analysis =>
    analysis.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (analysis.product_brand && analysis.product_brand.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    if (score >= 4) return 'text-orange-600';
    return 'text-red-600';
  };

  const formatAnalysisDisplay = (analysisData: any) => {
    if (!analysisData || !analysisData.products || analysisData.products.length === 0) {
      return { summary: 'No detailed analysis available', details: null };
    }

    const product = analysisData.products[0];
    
    return {
      summary: product.cosmedocs_verdict || 'Analysis completed',
      keyActives: product.key_actives || [],
      threeCellAnalysis: product.three_cell_analysis || {},
      scores: product.scores || {},
      ingredients: product.ingredients || {}
    };
  };

  return (
    <>
      <Helmet>
        <title>Aesthetic Intelligence - Product Analysis Tool | CosmeDocs</title>
        <meta name="description" content="Analyze skincare products with AI-powered ingredient analysis. Get professional insights on formulations, efficacy, and safety from CosmeDocs experts." />
        <meta name="keywords" content="skincare analysis, product review, ingredient analysis, cosmetic chemistry, dermatology, aesthetic medicine" />
        <link rel="canonical" href="https://cosmedocs.com/aesthetic-intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Beaker className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Aesthetic Intelligence
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered skincare analysis using our advanced Three-Cell Approach methodology. 
              Get professional insights on product formulations, efficacy, and safety.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium">Our aesthetics is invisible art</span> • 
              <span className="font-medium"> Bold • Natural • Always Your Way</span>
            </div>
          </motion.div>

          {/* Product Analysis Tool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="mb-8 shadow-lg border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2 text-primary" />
                  Product Analysis Tool
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {productInputs.map((input, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-2 items-end"
                  >
                    <div className="flex-1">
                      <label className="text-sm font-medium mb-1 block">
                        Product URL {index + 1}
                      </label>
                      <Input
                        placeholder="https://example.com/product-page"
                        value={input.url}
                        onChange={(e) => updateProductInput(index, 'url', e.target.value)}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    {productInputs.length > 1 && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeProductInput(index)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </motion.div>
                ))}

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={addProductInput}
                    className="flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Product
                  </Button>
                  <Button
                    onClick={analyzeProducts}
                    disabled={isAnalyzing}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                  >
                    {isAnalyzing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Beaker className="h-4 w-4" />
                    )}
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Products'}
                  </Button>
                </div>

                {productInputs.length > 1 && (
                  <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                    <strong>Full Regime Analysis:</strong> Analyzing multiple products together allows our AI to detect 
                    ingredient conflicts, duplications, and gaps in your skincare routine.
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Search Previous Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Previous Analyses</CardTitle>
                <div className="flex gap-2">
                  <Input
                    placeholder="Search by product name or brand..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-md"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AnimatePresence>
                    {filteredAnalyses.map((analysis) => {
                      const formattedAnalysis = formatAnalysisDisplay(analysis.analysis_data);
                      const isExpanded = expandedAnalysis === analysis.id;

                      return (
                        <motion.div
                          key={analysis.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="border-l-4 border-l-primary/30 hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h3 className="font-semibold text-lg">
                                      {analysis.product_name}
                                    </h3>
                                    {analysis.product_brand && (
                                      <Badge variant="secondary">{analysis.product_brand}</Badge>
                                    )}
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm text-muted-foreground">Score:</span>
                                      <span className={`font-bold text-lg ${getScoreColor(analysis.overall_score || 0)}`}>
                                        {(analysis.overall_score || 0).toFixed(1)}/10
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <p className="text-muted-foreground mb-2">
                                    {formattedAnalysis.summary}
                                  </p>
                                  
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>Analyzed: {new Date(analysis.created_at).toLocaleDateString()}</span>
                                    <a 
                                      href={analysis.product_url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline"
                                    >
                                      View Product
                                    </a>
                                  </div>
                                </div>
                                
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setExpandedAnalysis(isExpanded ? null : analysis.id)}
                                  className="ml-4"
                                >
                                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                              </div>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 pt-4 border-t"
                                  >
                                    <div className="grid md:grid-cols-2 gap-6">
                                      {/* Key Actives */}
                                      {formattedAnalysis.keyActives && formattedAnalysis.keyActives.length > 0 && (
                                        <div>
                                          <h4 className="font-semibold mb-2 text-primary">Key Active Ingredients</h4>
                                          <div className="space-y-2">
                                            {formattedAnalysis.keyActives.slice(0, 5).map((active: any, idx: number) => (
                                              <div key={idx} className="bg-muted/50 p-2 rounded text-sm">
                                                <div className="font-medium">{active.ingredient}</div>
                                                <div className="text-muted-foreground">{active.function}</div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}

                                      {/* Scores Breakdown */}
                                      {formattedAnalysis.scores && (
                                        <div>
                                          <h4 className="font-semibold mb-2 text-primary">Analysis Scores</h4>
                                          <div className="space-y-1 text-sm">
                                            {Object.entries(formattedAnalysis.scores).map(([key, value]) => {
                                              if (typeof value === 'number' && key.includes('_')) {
                                                const label = key.replace(/_/g, ' ').replace(/\d+/g, '').trim();
                                                return (
                                                  <div key={key} className="flex justify-between">
                                                    <span className="capitalize">{label}:</span>
                                                    <span className="font-medium">{value}</span>
                                                  </div>
                                                );
                                              }
                                              return null;
                                            })}
                                          </div>
                                        </div>
                                      )}
                                    </div>

                                    {/* Three Cell Analysis */}
                                    {formattedAnalysis.threeCellAnalysis && (
                                      <div className="mt-4">
                                        <h4 className="font-semibold mb-2 text-primary">Three-Cell Analysis</h4>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                          {Object.entries(formattedAnalysis.threeCellAnalysis).map(([cellType, analysis]: [string, any]) => (
                                            <div key={cellType} className="bg-muted/30 p-3 rounded">
                                              <h5 className="font-medium capitalize mb-1">{cellType}</h5>
                                              <div className="text-muted-foreground">
                                                {analysis.evidence_summary || analysis.net_direction || 'No analysis available'}
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                  {filteredAnalyses.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      {searchTerm ? 'No analyses match your search.' : 'No previous analyses found. Start by analyzing your first product!'}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AestheticIntelligence;