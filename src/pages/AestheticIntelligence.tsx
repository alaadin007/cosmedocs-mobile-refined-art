import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2, Search, Plus, Trash2, Beaker, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import CosmeticAnalysisResults from "@/components/CosmeticAnalysisResults";

interface ProductAnalysis {
  id: string;
  product_name: string | null;
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
  const [currentStep, setCurrentStep] = useState(0);
  const [analyses, setAnalyses] = useState<ProductAnalysis[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAnalysis, setExpandedAnalysis] = useState<string | null>(null);
  const { toast } = useToast();

  const analysisSteps = [
    { title: "Web Scraping Initiated", description: "Extracting ingredient data from product page..." },
    { title: "Chemical Structure Analysis", description: "Analyzing molecular composition and carbon ring structures..." },
    { title: "Concentration Assessment", description: "Evaluating active ingredient concentrations and bioavailability..." },
    { title: "Interaction Matrix Calculation", description: "Computing ingredient synergies and contraindications..." },
    { title: "CosmeDocs AI Evaluation", description: "Generating professional dermatological assessment..." }
  ];

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
    setCurrentStep(0);

    try {
      const promises = validInputs.map(async (input, index) => {
        // Simulate step progression for better UX
        for (let step = 0; step < analysisSteps.length; step++) {
          setCurrentStep(step);
          // Add delay between steps for visual effect
          if (step < analysisSteps.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1500));
          }
        }

        const { data, error } = await supabase.functions.invoke('cosmetic-analyzer', {
          body: { 
            productUrl: input.url,
            productName: input.name 
          }
        });

        if (error) {
          console.error('Analysis error:', error);
          throw error;
        }
        
        if (!data.success) {
          throw new Error(data.error || 'Analysis failed');
        }
        
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
        description: error instanceof Error ? error.message : "Failed to analyze products. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
      setCurrentStep(0);
    }
  };

  const filteredAnalyses = analyses.filter(analysis =>
    (analysis.product_name && analysis.product_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
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
        <title>Aesthetic Intelligence - AI-Powered Skincare Product Analysis | CosmeDocs</title>
        <meta name="description" content="Discover the truth about your skincare products with our AI-powered analysis tool. Uncover hidden chemicals, harmful ingredients, and get professional insights on what really works for your skin." />
        <meta name="keywords" content="skincare analysis, cosmetic ingredients, product review, AI beauty tool, ingredient checker, skincare ingredients, cosmetic chemistry, dermatology analysis" />
        <link rel="canonical" href="https://cosmedocs.com/aesthetic-intelligence" />
        <meta property="og:title" content="Aesthetic Intelligence - AI-Powered Skincare Product Analysis | CosmeDocs" />
        <meta property="og:description" content="Discover the truth about your skincare products with our AI-powered analysis tool. Uncover hidden chemicals and get professional insights." />
        <meta property="og:url" content="https://cosmedocs.com/aesthetic-intelligence" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Aesthetic Intelligence - Product Analyzer",
            "description": "AI-powered skincare product analysis tool that reveals ingredient effectiveness and safety",
            "url": "https://cosmedocs.com/aesthetic-intelligence",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "GBP"
            },
            "provider": {
              "@type": "MedicalBusiness",
              "name": "CosmeDocs",
              "url": "https://cosmedocs.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
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
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
              The average person uses over 168 chemicals daily through cosmetics, foundations, and skincare products. 
              Most do nothing beyond temporary hydration, yet contribute to sensitive skin barriers and long-term damage.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-3xl mx-auto mb-6">
              <h2 className="text-lg font-semibold text-destructive mb-3">The Hidden Truth About Your Products</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="mb-2">• <strong>80%</strong> of ingredients in most products are fillers</p>
                  <p className="mb-2">• <strong>15-25</strong> potential allergens in average foundation</p>
                  <p>• <strong>Only 5-10%</strong> are active ingredients that create change</p>
                </div>
                <div>
                  <p className="mb-2">• <strong>Fragrance</strong> alone contains 50+ undisclosed chemicals</p>
                  <p className="mb-2">• <strong>pH imbalance</strong> disrupts your acid mantle</p>
                  <p>• <strong>Barrier damage</strong> from harsh surfactants and alcohols</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered Three-Cell Approach analyzes every ingredient's impact on keratinocytes, melanocytes, 
              and fibroblasts. Get professional insights on formulations, efficacy, and safety from CosmeDocs experts.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium">Our aesthetics is invisible art</span> • 
              <span className="font-medium"> Bold • Natural • Always Your Way</span>
            </div>
          </motion.div>

          {/* Enhanced Product URL Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="mb-8 shadow-lg border-primary/10 bg-card/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2 text-primary" />
                  Product Analysis Tool
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Paste product URLs from any retailer to analyze ingredients, effectiveness, and safety
                </p>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Quick Search Bar */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    placeholder="Paste product URL here (e.g., https://sephora.com/product-name)"
                    value={productInputs[0]?.url || ''}
                    onChange={(e) => updateProductInput(0, 'url', e.target.value)}
                    className="pl-10 h-12 text-base border-2 border-muted focus:border-primary transition-all duration-200 bg-background/50"
                  />
                  <Button
                    onClick={analyzeProducts}
                    disabled={isAnalyzing || !productInputs[0]?.url.trim()}
                    className="absolute right-2 top-2 h-8 px-4 bg-primary hover:bg-primary/90"
                  >
                    {isAnalyzing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Analyze"
                    )}
                  </Button>
                </div>

                <Separator />

                {/* Additional Product Inputs */}
                {productInputs.length > 1 && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-muted-foreground">Additional Products for Routine Analysis</h4>
                    {productInputs.slice(1).map((input, index) => (
                      <motion.div
                        key={index + 1}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-2 items-center"
                      >
                        <div className="flex-1 relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-xs text-muted-foreground font-medium">#{index + 2}</span>
                          </div>
                          <Input
                            placeholder="Additional product URL"
                            value={input.url}
                            onChange={(e) => updateProductInput(index + 1, 'url', e.target.value)}
                            className="pl-8 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeProductInput(index + 1)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-10 w-10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={addProductInput}
                    className="flex items-center gap-2 h-11"
                  >
                    <Plus className="h-4 w-4" />
                    Add Another Product
                  </Button>
                  
                  {productInputs.filter(input => input.url.trim()).length > 0 && (
                    <Button
                      onClick={analyzeProducts}
                      disabled={isAnalyzing}
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90 h-11 px-6"
                    >
                      {isAnalyzing ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Step {currentStep + 1}/5: {analysisSteps[currentStep]?.title}</span>
                        </div>
                      ) : (
                        <>
                          <Beaker className="h-4 w-4" />
                          Analyze {productInputs.filter(input => input.url.trim()).length} Product{productInputs.filter(input => input.url.trim()).length !== 1 ? 's' : ''}
                        </>
                      )}
                    </Button>
                  )}

                  {/* Analysis Progress */}
                  {isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-6 bg-card border rounded-lg"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            <div className="absolute inset-0 animate-pulse">
                              <Beaker className="h-6 w-6 text-primary/30" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{analysisSteps[currentStep]?.title}</h3>
                            <p className="text-muted-foreground text-sm">{analysisSteps[currentStep]?.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{currentStep + 1}/{analysisSteps.length}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div 
                              className="bg-primary h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${((currentStep + 1) / analysisSteps.length) * 100}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-5 gap-2 mt-4">
                          {analysisSteps.map((step, index) => (
                            <div 
                              key={index}
                              className={`text-center p-2 rounded-lg text-xs transition-all ${
                                index <= currentStep 
                                  ? 'bg-primary/10 text-primary border border-primary/20' 
                                  : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              <div className="font-medium">{step.title.split(' ')[0]}</div>
                              <div className="opacity-75">{step.title.split(' ').slice(1).join(' ')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Help Text */}
                <div className="bg-muted/30 border border-muted rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Beaker className="h-4 w-4 text-primary" />
                    How it works
                  </h4>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Paste any product URL from retailers like Sephora, Boots, Amazon, brand websites</p>
                    <p>• Our AI scrapes ingredient lists and analyzes each component</p>
                    <p>• Get professional insights on efficacy, safety, and value for money</p>
                    {productInputs.length > 1 && (
                      <p className="text-primary font-medium">• Multiple products = full routine analysis with conflict detection</p>
                    )}
                  </div>
                </div>
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
                                      <CosmeticAnalysisResults analysis={analysis.analysis_data} />
                                    </div>
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

          {/* SEO Hidden Content */}
          <div className="sr-only">
            <h2>Skincare Ingredient Analysis and Chemical Safety</h2>
            <p>
              Modern cosmetics and skincare products contain an average of 168 chemicals per person daily use. The majority of these ingredients serve as fillers, preservatives, and texture enhancers rather than providing active benefits to skin health. Our Aesthetic Intelligence tool uses advanced AI analysis to evaluate each ingredient's contribution to keratinocyte function, melanocyte regulation, and fibroblast activity. Understanding the difference between marketing claims and scientific evidence is crucial for effective skincare. Many products rely on temporary hydration effects rather than addressing underlying skin barrier function, often leading to compromised acid mantle and increased sensitivity. Professional dermatological analysis reveals that most commercial formulations prioritize shelf stability and aesthetic appeal over therapeutic efficacy. The cumulative effect of daily chemical exposure through foundations, moisturizers, serums, and cleansers can disrupt natural skin processes and barrier integrity. Evidence-based ingredient evaluation considers molecular weight, pH compatibility, concentration effectiveness, and synergistic interactions within formulations. Identifying truly active ingredients versus inactive components helps consumers make informed decisions about their skincare investments and avoid products that may contribute to skin sensitization or barrier disruption.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AestheticIntelligence;