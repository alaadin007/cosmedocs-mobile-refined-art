import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Star, 
  ExternalLink, 
  Calendar, 
  Beaker, 
  AlertTriangle,
  CheckCircle,
  Info,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
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

const ProductAnalysisDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [analysis, setAnalysis] = useState<ProductAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchAnalysis(id);
    }
  }, [id]);

  const fetchAnalysis = async (analysisId: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('product_analyses')
        .select('*')
        .eq('id', analysisId)
        .single();

      if (error) throw error;
      
      setAnalysis(data as ProductAnalysis);
    } catch (error) {
      console.error('Error fetching analysis:', error);
      toast({
        title: "Error",
        description: "Failed to load product analysis",
        variant: "destructive",
      });
      navigate('/product-intelligence');
    } finally {
      setLoading(false);
    }
  };

  const extractBrandFromAnalysis = (analysis: ProductAnalysis): string => {
    if (analysis.product_brand && analysis.product_brand !== 'Unknown Brand') {
      return analysis.product_brand;
    }
    
    const analysisData = analysis.analysis_data;
    if (analysisData?.products?.[0]) {
      const product = analysisData.products[0];
      if (product.brand) return product.brand;
      if (product.manufacturer) return product.manufacturer;
      
      const productText = `${product.name || ''} ${analysis.product_name || ''}`.toLowerCase();
      
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
          return match[0].replace(/\b\w/g, l => l.toUpperCase());
        }
      }
      
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading product analysis...</p>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Analysis Not Found</h1>
          <Button onClick={() => navigate('/product-intelligence')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Product Intelligence
          </Button>
        </div>
      </div>
    );
  }

  const brand = extractBrandFromAnalysis(analysis);
  const productName = analysis.product_name || 'Unknown Product';
  const actualScore = analysis.analysis_data?.products?.[0]?.scores?.final_score_0to10 || analysis.overall_score || 0;
  const analysisDate = new Date(analysis.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{`${productName} - Product Analysis | CosmeDocs`}</title>
        <meta name="description" content={`Detailed AI-powered analysis of ${productName} by ${brand}. Discover ingredients, effectiveness ratings, and professional insights.`} />
        <meta name="keywords" content={`${productName}, ${brand}, skincare analysis, cosmetic ingredients, product review, dermatology analysis`} />
        <link rel="canonical" href={`https://cosmedocs.com/product-analysis/${analysis.id}`} />
        <meta property="og:title" content={`${productName} - Product Analysis | CosmeDocs`} />
        <meta property="og:description" content={`Detailed AI-powered analysis of ${productName} by ${brand}. Professional skincare insights and ingredient breakdown.`} />
        <meta property="og:url" content={`https://cosmedocs.com/product-analysis/${analysis.id}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {/* Slim header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <button
              onClick={() => navigate('/product-intelligence')}
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 transition mb-4"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Product Intelligence
            </button>

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <h1 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
                  {productName}
                </h1>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-white/50">
                  <span className="uppercase tracking-wide">{brand}</span>
                  <span className="text-white/20">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {analysisDate}
                  </span>
                  <span className="text-white/20">·</span>
                  <button
                    onClick={() => window.open(analysis.product_url, '_blank')}
                    className="inline-flex items-center gap-1 hover:text-white/80 transition"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Original product
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Analysis Results */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <CosmeticAnalysisResults analysis={analysis.analysis_data} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProductAnalysisDetail;
