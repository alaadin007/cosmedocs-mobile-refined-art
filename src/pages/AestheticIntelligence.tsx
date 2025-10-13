import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Search, Beaker, Star, ExternalLink, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

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

interface ProductCategory {
  id: string;
  name: string;
  keywords: string[];
}

const AestheticIntelligence = () => {
  const [productUrl, setProductUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [analyses, setAnalyses] = useState<ProductAnalysis[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { toast } = useToast();
  const navigate = useNavigate();

  const categories: ProductCategory[] = [
    { id: 'all', name: 'All Products', keywords: [] },
    { id: 'exfoliants', name: 'Exfoliants', keywords: ['acid', 'glycolic', 'salicylic', 'lactic', 'mandelic', 'exfoliat', 'peel'] },
    { id: 'antioxidants', name: 'Antioxidants', keywords: ['vitamin c', 'vitamin e', 'niacinamide', 'retinol', 'ascorbic', 'tocopherol', 'antioxidant'] },
    { id: 'stimulants', name: 'Stimulants', keywords: ['peptide', 'retinol', 'copper', 'collagen', 'elastin', 'growth factor'] },
    { id: 'cleansers', name: 'Cleansers', keywords: ['cleanser', 'wash', 'foam', 'gel', 'oil cleanser', 'micellar'] },
    { id: 'oil-control', name: 'Oil Control', keywords: ['oil control', 'sebum', 'mattifying', 'pore', 'niacinamide', 'zinc'] },
    { id: 'moisturisers', name: 'Moisturisers', keywords: ['moistur', 'cream', 'lotion', 'hydrating', 'hyaluronic'] },
    { id: 'serums', name: 'Serums', keywords: ['serum', 'treatment', 'concentrate', 'essence'] }
  ];

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

  const analyzeProduct = async () => {
    if (!productUrl.trim()) {
      toast({
        title: "No Product URL",
        description: "Please enter a product URL to analyse",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setCurrentStep(0);

    try {
      // Simulate step progression for better UX
      for (let step = 0; step < analysisSteps.length; step++) {
        setCurrentStep(step);
        if (step < analysisSteps.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1200));
        }
      }

      const { data, error } = await supabase.functions.invoke('cosmetic-analyzer', {
        body: { productUrl: productUrl }
      });

      if (error) {
        console.error('Analysis error:', error);
        throw error;
      }
      
      if (!data.success) {
        throw new Error(data.error || 'Analysis failed');
      }
      
      toast({
        title: "Analysis Complete",
        description: "Successfully analysed product",
      });

      // Refresh the analyses list
      await fetchPreviousAnalyses();
      
      // Reset input
      setProductUrl('');

    } catch (error) {
      console.error('Error analysing product:', error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyse product. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
      setCurrentStep(0);
    }
  };

  const extractBrandFromAnalysis = (analysis: ProductAnalysis): string => {
    // First check if brand is already extracted
    if (analysis.product_brand && analysis.product_brand !== 'Unknown Brand') {
      return analysis.product_brand;
    }
    
    // Try to extract from analysis data
    const analysisData = analysis.analysis_data;
    if (analysisData?.products?.[0]) {
      const product = analysisData.products[0];
      // Look for brand in various places in the analysis
      if (product.brand) return product.brand;
      if (product.manufacturer) return product.manufacturer;
      
      // Extract from product name or description
      const productText = `${product.name || ''} ${analysis.product_name || ''}`.toLowerCase();
      
      // Common brand patterns
      const brandPatterns = [
        /the\s+ordinary/i,
        /cerave/i,
        /neutrogena/i,
        /l'oreal/i,
        /olay/i,
        /clinique/i,
        /estee\s+lauder/i,
        /paula'?s\s+choice/i,
        /drunk\s+elephant/i,
        /dermalogica/i,
        /skinceuticals/i,
        /vichy/i,
        /la\s+roche\s+posay/i,
        /eucerin/i,
        /aveeno/i,
        /cetaphil/i
      ];
      
      for (const pattern of brandPatterns) {
        const match = productText.match(pattern);
        if (match) {
          return match[0].replace(/\b\w/g, l => l.toUpperCase()); // Title case
        }
      }
      
      // Extract from URL
      const url = analysis.product_url.toLowerCase();
      if (url.includes('theordinary')) return 'The Ordinary';
      if (url.includes('cerave')) return 'CeraVe';
      if (url.includes('neutrogena')) return 'Neutrogena';
      if (url.includes('loreal')) return "L'Oreal";
      if (url.includes('olay')) return 'Olay';
      if (url.includes('clinique')) return 'Clinique';
      if (url.includes('paulaschoice')) return "Paula's Choice";
      if (url.includes('drunkelephant')) return 'Drunk Elephant';
      if (url.includes('dermalogica')) return 'Dermalogica';
      if (url.includes('skinceuticals')) return 'SkinCeuticals';
    }
    
    return analysis.product_brand || 'Unknown Brand';
  };

  const getProductCategory = (analysis: ProductAnalysis): string => {
    const productName = (analysis.product_name || '').toLowerCase();
    const analysisData = analysis.analysis_data;
    let productDescription = '';
    
    if (analysisData?.products?.[0]) {
      const product = analysisData.products[0];
      productDescription = [
        product.category || '',
        product.name || '',
        product.cosmedocs_verdict || '',
        ...(product.key_actives?.map((active: any) => active.ingredient) || []),
        ...(product.ingredients?.inci_list || [])
      ].join(' ').toLowerCase();
    }
    
    const searchText = `${productName} ${productDescription}`;
    
    // More specific category matching
    for (const category of categories) {
      if (category.id === 'all') continue;
      if (category.keywords.some(keyword => searchText.includes(keyword.toLowerCase()))) {
        return category.id;
      }
    }
    return 'serums'; // Default fallback since most products are treatment products
  };

  const filteredAnalyses = analyses.filter(analysis => {
    const brand = extractBrandFromAnalysis(analysis);
    const matchesSearch = !searchTerm || 
      (analysis.product_name && analysis.product_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (brand && brand.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || getProductCategory(analysis) === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (analysis: ProductAnalysis) => {
    navigate(`/product-analysis/${analysis.id}`);
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    if (score >= 4) return 'text-orange-600';
    return 'text-red-600';
  };

  const formatAnalysisDisplay = (analysisData: any) => {
    if (!analysisData || !analysisData.products || analysisData.products.length === 0) {
      return { 
        summary: 'No detailed analysis available', 
        keyActives: [],
        ingredientCount: 0,
        category: 'Unknown'
      };
    }

    const product = analysisData.products[0];
    
    return {
      summary: product.human_summary?.bottom_line || product.cosmedocs_verdict || 'Analysis completed',
      keyActives: product.key_actives?.slice(0, 3) || [],
      ingredientCount: product.ingredients?.count || 0,
      category: product.category || 'Product',
      bestFor: product.human_summary?.best_for || ''
    };
  };

  return (
    <>
      <Helmet>
        <title>Aesthetic Intelligence - AI-Powered Skincare Product Analysis | CosmeDocs</title>
        <meta name="description" content="AI-powered skincare product analysis. Uncover hidden chemicals and harmful ingredients. Get professional insights on what works for your skin." />
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
          {/* Hero Section - Clean & Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Beaker className="h-10 w-10 text-primary mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Aesthetic Intelligence
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              AI-powered skincare analysis. Discover what's really in your products and whether they actually work.
            </p>
          </motion.div>

          {/* Search Section - Clean & Focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="border-primary/20 shadow-lg bg-card/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-2 block">Product URL</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Paste any product URL here..."
                        value={productUrl}
                        onChange={(e) => setProductUrl(e.target.value)}
                        className="pl-10 h-12 text-base border-2 focus:border-primary transition-colors"
                        disabled={isAnalyzing}
                      />
                    </div>
                  </div>
                  <Button
                    onClick={analyzeProduct}
                    disabled={isAnalyzing || !productUrl.trim()}
                    size="lg"
                    className="h-12 px-8 bg-primary hover:bg-primary/90 whitespace-nowrap"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Analysing...
                      </>
                    ) : (
                      <>
                        <Beaker className="h-4 w-4 mr-2" />
                        Analyse Product
                      </>
                    )}
                  </Button>
                </div>

                {/* Analysis Progress */}
                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 p-4 bg-muted/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Loader2 className="h-5 w-5 animate-spin text-primary" />
                      <div>
                        <h4 className="font-medium">{analysisSteps[currentStep]?.title}</h4>
                        <p className="text-sm text-muted-foreground">{analysisSteps[currentStep]?.description}</p>
                      </div>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <motion.div 
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / analysisSteps.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section with Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Product Analysis Results</h2>
              <p className="text-muted-foreground">Browse your analysed products by category</p>
            </div>

            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full sm:w-auto">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-xs px-2">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <div className="w-full sm:w-80">
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-10"
                  />
                </div>
              </div>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {filteredAnalyses.map((analysis) => {
                        const formattedAnalysis = formatAnalysisDisplay(analysis.analysis_data);
                        const actualScore = analysis.analysis_data?.products?.[0]?.scores?.final_score_0to10 || analysis.overall_score || 0;
                        const brand = extractBrandFromAnalysis(analysis);

                        return (
                          <motion.div
                            key={analysis.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Card 
                              className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/30 group hover:border-l-primary cursor-pointer"
                              onClick={() => handleProductClick(analysis)}
                            >
                              <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1 min-w-0">
                                    <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                                      {analysis.product_name || 'Unknown Product'}
                                    </CardTitle>
                                    <Badge variant="secondary" className="mt-2 text-xs">
                                      {brand}
                                    </Badge>
                                    <Badge variant="outline" className="mt-1 ml-2 text-xs capitalize">
                                      {formattedAnalysis.category}
                                    </Badge>
                                  </div>
                                  <div className="flex flex-col items-center ml-3">
                                    <div className="flex items-center">
                                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                      <span className={`font-bold text-lg ${getScoreColor(actualScore)}`}>
                                        {actualScore.toFixed(1)}
                                      </span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">out of 10</span>
                                  </div>
                                </div>
                              </CardHeader>
                              
                              <CardContent className="pt-0">
                                <div className="space-y-3">
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Badge variant="outline" className="text-xs">
                                      {formattedAnalysis.category}
                                    </Badge>
                                    {formattedAnalysis.ingredientCount > 0 && (
                                      <span className="text-xs">
                                        {formattedAnalysis.ingredientCount} ingredients
                                      </span>
                                    )}
                                  </div>

                                  <p className="text-sm text-muted-foreground line-clamp-3">
                                    {formattedAnalysis.summary}
                                  </p>

                                  {formattedAnalysis.keyActives.length > 0 && (
                                    <div>
                                      <h4 className="text-xs font-medium text-muted-foreground mb-1">Key Actives:</h4>
                                      <div className="flex flex-wrap gap-1">
                                        {formattedAnalysis.keyActives.map((active: any, index: number) => (
                                          <Badge key={index} variant="outline" className="text-xs px-2 py-0">
                                            {active.ingredient}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {formattedAnalysis.bestFor && (
                                    <div className="bg-muted/30 rounded-lg p-2">
                                      <p className="text-xs text-muted-foreground">
                                        <span className="font-medium">Best for:</span> {formattedAnalysis.bestFor}
                                      </p>
                                    </div>
                                  )}

                                  <div className="flex items-center justify-between pt-2 border-t">
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                      <Calendar className="h-3 w-3" />
                                      {new Date(analysis.created_at).toLocaleDateString('en-GB')}
                                    </div>
                                    <a
                                      href={analysis.product_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 text-xs text-primary hover:underline"
                                    >
                                      <ExternalLink className="h-3 w-3" />
                                      View Product
                                    </a>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>

                  {filteredAnalyses.length === 0 && (
                    <div className="text-center py-12">
                      <Beaker className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No products found</h3>
                      <p className="text-muted-foreground">
                        {searchTerm 
                          ? 'Try adjusting your search terms or check a different category.' 
                          : activeCategory === 'all' 
                            ? 'Start by analysing your first product above!'
                            : `No products found in the ${categories.find(c => c.id === activeCategory)?.name.toLowerCase()} category.`
                        }
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
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