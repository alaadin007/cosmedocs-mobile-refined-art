import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Sparkles, User, Heart, Eye, Zap, Send, Download, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface AnalysisData {
  age: number;
  agePerception: string;
  skincareRoutine: string;
  retinolYears: number;
  sunscreenYears: number;
  skinTone: number;
  pores: number;
  texture: number;
  clarity: number;
  foundationUse: number;
  frown: number;
  forehead: number;
  crowsFeet: number;
  chin: number;
  smileLines: number;
  marionette: number;
  underEyes: number;
  cheeks: number;
  jowls: number;
  lips: number;
  faceShape: string;
  ethnicity: string;
  tanEasily: boolean;
  smokingStatus: string;
  previousTreatments: boolean;
}

interface AestheticAnalysisWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AestheticAnalysisWizard = ({ isOpen, onClose }: AestheticAnalysisWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<AnalysisData>>({
    age: 30,
    agePerception: '',
    skincareRoutine: '',
    retinolYears: 0,
    sunscreenYears: 0,
    skinTone: 0,
    pores: 0,
    texture: 0,
    clarity: 0,
    foundationUse: 0,
    frown: 0,
    forehead: 0,
    crowsFeet: 0,
    chin: 0,
    smileLines: 0,
    marionette: 0,
    underEyes: 0,
    cheeks: 0,
    jowls: 0,
    lips: 0,
    faceShape: '',
    ethnicity: '',
    tanEasily: false,
    smokingStatus: '',
    previousTreatments: false
  });

  const steps = [
    {
      title: "Personal Information",
      icon: User,
      description: "Let's start with your age and skincare background"
    },
    {
      title: "Skin Quality",
      icon: Heart,
      description: "Assess your skin's tone, texture, and clarity"
    },
    {
      title: "Expression Lines",
      icon: Eye,
      description: "Evaluate wrinkles and expression areas"
    },
    {
      title: "Volume Assessment",
      icon: Zap,
      description: "Check for facial volume changes"
    },
    {
      title: "Final Details",
      icon: Sparkles,
      description: "Face type and lifestyle factors"
    }
  ];

  const updateFormData = (updates: Partial<AnalysisData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateAnalysis();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateAnalysis = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('aesthetic-analysis', {
        body: formData
      });

      if (error) throw error;
      setAnalysisResult(data.analysis);
    } catch (error) {
      console.error('Error generating analysis:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  const resetWizard = () => {
    setCurrentStep(0);
    setAnalysisResult(null);
    setFormData({
      age: 30,
      agePerception: '',
      skincareRoutine: '',
      retinolYears: 0,
      sunscreenYears: 0,
      skinTone: 0,
      pores: 0,
      texture: 0,
      clarity: 0,
      foundationUse: 0,
      frown: 0,
      forehead: 0,
      crowsFeet: 0,
      chin: 0,
      smileLines: 0,
      marionette: 0,
      underEyes: 0,
      cheeks: 0,
      jowls: 0,
      lips: 0,
      faceShape: '',
      ethnicity: '',
      tanEasily: false,
      smokingStatus: '',
      previousTreatments: false
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <SkinQualityStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <ExpressionLinesStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <VolumeAssessmentStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <FinalDetailsStep formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  // Clean markdown formatting from text
  const cleanMarkdown = (text: string): string => {
    return text
      .replace(/\*\*/g, '') // Remove **
      .replace(/\*/g, '')   // Remove *
      .replace(/__/g, '')   // Remove __
      .replace(/_/g, ' ')   // Replace _ with space
      .replace(/#{1,6}\s?/g, '') // Remove # headers
      .replace(/\n{3,}/g, '\n\n'); // Max 2 line breaks
  };

  // Format text with proper spacing for display
  const formatForDisplay = (text: string): string => {
    const cleaned = cleanMarkdown(text);
    // Add extra spacing between sections
    return cleaned
      .replace(/(\d+\.)\s/g, '\n\n$1 ') // Add spacing before numbered items
      .replace(/(Dr\. Ahmed Haq)/g, '\n\n$1') // Add spacing before signature
      .replace(/(Book your consultation)/g, '\n\n$1') // Add spacing before booking
      .replace(/(This analysis is generated)/g, '\n\n$1'); // Add spacing before disclaimer
  };

  // Create WhatsApp message with full recommendations
  const shareToWhatsApp = () => {
    const cleanedText = cleanMarkdown(analysisResult || '');
    const message = `Hi! I completed my facial assessment at Cosmedocs.\n\n${cleanedText}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/447735606447?text=${encodedMessage}`, '_blank');
  };

  if (analysisResult) {
    const displayText = formatForDisplay(analysisResult);
    
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Your Personalised Aesthetic Analysis
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
              <div className="prose prose-sm max-w-none text-foreground">
                <div className="whitespace-pre-wrap leading-relaxed text-base">{displayText}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={resetWizard} variant="outline" className="flex-1">
                Take Another Analysis
              </Button>
              <Button 
                onClick={shareToWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Share to Cosmedocs
              </Button>
              <Button 
                onClick={() => window.print()} 
                variant="outline"
                className="flex-1"
              >
                <Download className="h-4 w-4 mr-2" />
                Save Report
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Aesthetic Analysis
          </DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            {React.createElement(steps[currentStep].icon, { 
              className: "h-8 w-8 text-primary" 
            })}
          </div>
          <h3 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h3>
          <p className="text-muted-foreground">{steps[currentStep].description}</p>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button 
            onClick={prevStep} 
            variant="outline" 
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <Button 
            onClick={nextStep}
            disabled={isLoading}
            className="min-w-[120px]"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
            ) : currentStep === steps.length - 1 ? (
              <>
                <Send className="h-4 w-4 mr-2" />
                Generate Analysis
              </>
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Step Components
const PersonalInfoStep = ({ formData, updateFormData }: { formData: Partial<AnalysisData>, updateFormData: (updates: Partial<AnalysisData>) => void }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="age">Current Age</Label>
        <Input
          id="age"
          type="number"
          value={formData.age || 30}
          onChange={(e) => updateFormData({ age: parseInt(e.target.value) })}
          min="18"
          max="80"
        />
      </div>
      <div>
        <Label>How do people perceive your age?</Label>
        <RadioGroup 
          value={formData.agePerception} 
          onValueChange={(value) => updateFormData({ agePerception: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="younger" id="younger" />
            <Label htmlFor="younger">Look younger</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="same" id="same" />
            <Label htmlFor="same">Look my age</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="older" id="older" />
            <Label htmlFor="older">Look older</Label>
          </div>
        </RadioGroup>
      </div>
    </div>

    <div>
      <Label>Current skincare routine</Label>
      <RadioGroup 
        value={formData.skincareRoutine} 
        onValueChange={(value) => updateFormData({ skincareRoutine: value })}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="none" id="none" />
          <Label htmlFor="none">None/Minimal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="basic" id="basic" />
          <Label htmlFor="basic">Basic (moisturizer/sunscreen)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="active" id="active" />
          <Label htmlFor="active">Active (retinol, vitamin C, acids)</Label>
        </div>
      </RadioGroup>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="retinol">Years using retinol consistently</Label>
        <Input
          id="retinol"
          type="number"
          value={formData.retinolYears || 0}
          onChange={(e) => updateFormData({ retinolYears: parseInt(e.target.value) })}
          min="0"
          max="20"
        />
      </div>
      <div>
        <Label htmlFor="sunscreen">Years using daily sunscreen</Label>
        <Input
          id="sunscreen"
          type="number"
          value={formData.sunscreenYears || 0}
          onChange={(e) => updateFormData({ sunscreenYears: parseInt(e.target.value) })}
          min="0"
          max="50"
        />
      </div>
    </div>
  </div>
);

const SkinQualityStep = ({ formData, updateFormData }: { formData: Partial<AnalysisData>, updateFormData: (updates: Partial<AnalysisData>) => void }) => {
  const ScaleInput = ({ label, value, onChange, description }: { label: string, value: number, onChange: (val: number) => void, description: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex gap-2">
        {[0, 1, 2, 3].map(val => (
          <Button
            key={val}
            variant={value === val ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(val)}
            className="flex-1"
          >
            {val}
          </Button>
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>None</span>
        <span>Severe</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <ScaleInput
        label="Uneven skin tone or pigmentation"
        value={formData.skinTone || 0}
        onChange={(val) => updateFormData({ skinTone: val })}
        description="Dark spots, melasma, or uneven coloring"
      />
      <ScaleInput
        label="Large or visible pores"
        value={formData.pores || 0}
        onChange={(val) => updateFormData({ pores: val })}
        description="Particularly on nose, cheeks, forehead"
      />
      <ScaleInput
        label="Rough skin texture"
        value={formData.texture || 0}
        onChange={(val) => updateFormData({ texture: val })}
        description="Bumps, roughness, or dryness"
      />
      <ScaleInput
        label="Poor skin clarity"
        value={formData.clarity || 0}
        onChange={(val) => updateFormData({ clarity: val })}
        description="Dullness, breakouts, or congestion"
      />
      <ScaleInput
        label="Foundation dependency"
        value={formData.foundationUse || 0}
        onChange={(val) => updateFormData({ foundationUse: val })}
        description="How much makeup you need for confidence"
      />
    </div>
  );
};

const ExpressionLinesStep = ({ formData, updateFormData }: { formData: Partial<AnalysisData>, updateFormData: (updates: Partial<AnalysisData>) => void }) => {
  const ScaleInput = ({ label, value, onChange, description }: { label: string, value: number, onChange: (val: number) => void, description: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex gap-2">
        {[0, 1, 2, 3].map(val => (
          <Button
            key={val}
            variant={value === val ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(val)}
            className="flex-1"
          >
            {val}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-4">Upper Face Lines</h4>
        <div className="space-y-4">
          <ScaleInput
            label="Frown lines (between eyebrows)"
            value={formData.frown || 0}
            onChange={(val) => updateFormData({ frown: val })}
            description="Vertical lines when frowning"
          />
          <ScaleInput
            label="Forehead lines"
            value={formData.forehead || 0}
            onChange={(val) => updateFormData({ forehead: val })}
            description="Horizontal lines when raising eyebrows"
          />
          <ScaleInput
            label="Crow's feet"
            value={formData.crowsFeet || 0}
            onChange={(val) => updateFormData({ crowsFeet: val })}
            description="Lines around the eyes when smiling"
          />
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-4">Lower Face Lines</h4>
        <div className="space-y-4">
          <ScaleInput
            label="Chin lines"
            value={formData.chin || 0}
            onChange={(val) => updateFormData({ chin: val })}
            description="Lines or dimpling on the chin"
          />
          <ScaleInput
            label="Smile lines (nasolabial folds)"
            value={formData.smileLines || 0}
            onChange={(val) => updateFormData({ smileLines: val })}
            description="Lines from nose to mouth corners"
          />
          <ScaleInput
            label="Marionette lines"
            value={formData.marionette || 0}
            onChange={(val) => updateFormData({ marionette: val })}
            description="Lines from mouth corners downward"
          />
        </div>
      </div>
    </div>
  );
};

const VolumeAssessmentStep = ({ formData, updateFormData }: { formData: Partial<AnalysisData>, updateFormData: (updates: Partial<AnalysisData>) => void }) => {
  const ScaleInput = ({ label, value, onChange, description }: { label: string, value: number, onChange: (val: number) => void, description: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex gap-2">
        {[0, 1, 2, 3].map(val => (
          <Button
            key={val}
            variant={value === val ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(val)}
            className="flex-1"
          >
            {val}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <ScaleInput
        label="Under-eye hollowness or dark circles"
        value={formData.underEyes || 0}
        onChange={(val) => updateFormData({ underEyes: val })}
        description="Sunken or shadowed under-eye area"
      />
      <ScaleInput
        label="Cheek flattening or sunkenness"
        value={formData.cheeks || 0}
        onChange={(val) => updateFormData({ cheeks: val })}
        description="Loss of cheek fullness or projection"
      />
      <ScaleInput
        label="Early jowls or jaw softening"
        value={formData.jowls || 0}
        onChange={(val) => updateFormData({ jowls: val })}
        description="Softening of jawline definition"
      />
      <ScaleInput
        label="Lip thinning or wrinkling"
        value={formData.lips || 0}
        onChange={(val) => updateFormData({ lips: val })}
        description="Loss of lip volume or vertical lines"
      />
    </div>
  );
};

const FinalDetailsStep = ({ formData, updateFormData }: { formData: Partial<AnalysisData>, updateFormData: (updates: Partial<AnalysisData>) => void }) => (
  <div className="space-y-6">
    <div>
      <Label>Face shape</Label>
      <RadioGroup 
        value={formData.faceShape} 
        onValueChange={(value) => updateFormData({ faceShape: value })}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="slim" id="slim" />
          <Label htmlFor="slim">Slim/Petite</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="balanced" id="balanced" />
          <Label htmlFor="balanced">Balanced</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="heavy" id="heavy" />
          <Label htmlFor="heavy">Heavy/Round</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <Label>Ethnicity/Skin type</Label>
      <RadioGroup 
        value={formData.ethnicity} 
        onValueChange={(value) => updateFormData({ ethnicity: value })}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="caucasian" id="caucasian" />
          <Label htmlFor="caucasian">Caucasian</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="asian" id="asian" />
          <Label htmlFor="asian">Asian</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="indian" id="indian" />
          <Label htmlFor="indian">Indian</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="african" id="african" />
          <Label htmlFor="african">African</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="chinese" id="chinese" />
          <Label htmlFor="chinese">Chinese</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mixed" id="mixed" />
          <Label htmlFor="mixed">Mixed</Label>
        </div>
      </RadioGroup>
    </div>

    <div className="flex items-center space-x-2">
      <Checkbox 
        id="tan" 
        checked={formData.tanEasily}
        onCheckedChange={(checked) => updateFormData({ tanEasily: checked as boolean })}
      />
      <Label htmlFor="tan">I tan easily and rarely burn</Label>
    </div>

    <div>
      <Label>Smoking status</Label>
      <RadioGroup 
        value={formData.smokingStatus} 
        onValueChange={(value) => updateFormData({ smokingStatus: value })}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="never" id="never" />
          <Label htmlFor="never">Never smoked</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="former" id="former" />
          <Label htmlFor="former">Former smoker</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="current" id="current" />
          <Label htmlFor="current">Current smoker</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vape" id="vape" />
          <Label htmlFor="vape">Vape occasionally</Label>
        </div>
      </RadioGroup>
    </div>

    <div className="flex items-center space-x-2">
      <Checkbox 
        id="previous" 
        checked={formData.previousTreatments}
        onCheckedChange={(checked) => updateFormData({ previousTreatments: checked as boolean })}
      />
      <Label htmlFor="previous">I've had filler or Botox treatments before</Label>
    </div>
  </div>
);

export default AestheticAnalysisWizard;