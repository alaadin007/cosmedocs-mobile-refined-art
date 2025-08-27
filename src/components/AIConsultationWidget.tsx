import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  X, 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  User, 
  Mail, 
  Phone,
  Zap,
  Sun,
  Eye,
  Heart,
  ShieldCheck
} from "lucide-react";

interface SkinCondition {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  treatments: string[];
}

const skinConditions: SkinCondition[] = [
  {
    id: "acne",
    name: "Acne (Mild to Moderate)",
    icon: Zap,
    description: "Breakouts, blackheads, whiteheads",
    treatments: ["Tretinoin", "Adapalene + Benzoyl Peroxide", "Azelaic Acid"]
  },
  {
    id: "pigmentation",
    name: "Pigmentation",
    icon: Sun,
    description: "Dark spots, uneven skin tone",
    treatments: ["Hydroquinone", "Azelaic Acid", "Tretinoin"]
  },
  {
    id: "aging",
    name: "General Ageing & Dullness",
    icon: Sparkles,
    description: "Fine lines, dull skin, texture issues",
    treatments: ["Tretinoin", "Niacinamide", "Antioxidant blends"]
  },
  {
    id: "photoaging",
    name: "Photoageing (Sun Damage)",
    icon: Eye,
    description: "Sun spots, wrinkles, leathery texture",
    treatments: ["Tretinoin", "Azelaic Acid", "Combination antioxidants"]
  },
  {
    id: "rosacea",
    name: "Rosacea",
    icon: Heart,
    description: "Redness, sensitivity, visible blood vessels",
    treatments: ["Metronidazole", "Azelaic Acid"]
  }
];

interface AIConsultationWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIConsultationWidget: React.FC<AIConsultationWidgetProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    skinType: "",
    currentProducts: "",
    concerns: "",
    allergies: "",
    previousTreatments: ""
  });

  const handleConditionChange = (conditionId: string, checked: boolean) => {
    if (checked) {
      setSelectedConditions([...selectedConditions, conditionId]);
    } else {
      setSelectedConditions(selectedConditions.filter(id => id !== conditionId));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Consultation data:", { selectedConditions, formData });
    // Redirect to booking or thank you page
    window.open("https://med.as.me/harleystreet", "_blank");
    onClose();
  };

  const getSelectedConditionNames = () => {
    return selectedConditions.map(id => 
      skinConditions.find(condition => condition.id === id)?.name
    ).filter(Boolean).join(", ");
  };

  const resetForm = () => {
    setStep(1);
    setSelectedConditions([]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      skinType: "",
      currentProducts: "",
      concerns: "",
      allergies: "",
      previousTreatments: ""
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Widget */}
          <motion.div
            initial={{ opacity: 0, x: 400, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 400, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 w-96 max-h-[80vh] z-50"
          >
            <Card className="bg-background border-primary/20 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    AI Consultation Assessment
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="h-8 w-8 p-0 hover:bg-primary/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        i <= step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>

              <CardContent className="p-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-2">What skin concerns would you like to treat?</h3>
                        <p className="text-sm text-muted-foreground mb-4">Select all that apply</p>
                      </div>

                      <div className="space-y-3">
                        {skinConditions.map((condition) => (
                          <motion.div
                            key={condition.id}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-start space-x-3 p-3 rounded-lg border border-muted hover:border-primary/40 transition-colors"
                          >
                            <Checkbox
                              id={condition.id}
                              checked={selectedConditions.includes(condition.id)}
                              onCheckedChange={(checked) => 
                                handleConditionChange(condition.id, checked as boolean)
                              }
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <label 
                                htmlFor={condition.id}
                                className="flex items-center gap-2 font-medium cursor-pointer"
                              >
                                <condition.icon className="h-4 w-4 text-primary" />
                                {condition.name}
                              </label>
                              <p className="text-xs text-muted-foreground mt-1">
                                {condition.description}
                              </p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {condition.treatments.slice(0, 2).map((treatment) => (
                                  <span
                                    key={treatment}
                                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                  >
                                    {treatment}
                                  </span>
                                ))}
                                {condition.treatments.length > 2 && (
                                  <span className="text-xs text-muted-foreground">+{condition.treatments.length - 2} more</span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <Button
                        onClick={() => setStep(2)}
                        disabled={selectedConditions.length === 0}
                        className="w-full mt-6"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Tell us about yourself</h3>
                        <p className="text-sm text-muted-foreground mb-4">This helps our doctors create the perfect plan</p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Name</label>
                            <Input
                              placeholder="Your name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Age</label>
                            <Input
                              placeholder="25"
                              value={formData.age}
                              onChange={(e) => handleInputChange("age", e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-1 block">Email</label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-1 block">Phone (Optional)</label>
                          <Input
                            placeholder="+44 7XXX XXXXXX"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-1 block">Skin Type</label>
                          <select 
                            className="w-full p-2 border border-input rounded-md bg-background"
                            value={formData.skinType}
                            onChange={(e) => handleInputChange("skinType", e.target.value)}
                          >
                            <option value="">Select skin type</option>
                            <option value="oily">Oily</option>
                            <option value="dry">Dry</option>
                            <option value="combination">Combination</option>
                            <option value="sensitive">Sensitive</option>
                            <option value="normal">Normal</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                          Back
                        </Button>
                        <Button
                          onClick={() => setStep(3)}
                          disabled={!formData.name || !formData.email}
                          className="flex-1"
                        >
                          Continue
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                        <p className="text-sm text-muted-foreground mb-4">Help us personalize your treatment</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Current Skincare Products</label>
                          <Textarea
                            placeholder="List any products you're currently using..."
                            value={formData.currentProducts}
                            onChange={(e) => handleInputChange("currentProducts", e.target.value)}
                            rows={2}
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-1 block">Main Concerns</label>
                          <Textarea
                            placeholder="Describe your main skin concerns..."
                            value={formData.concerns}
                            onChange={(e) => handleInputChange("concerns", e.target.value)}
                            rows={2}
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-1 block">Allergies</label>
                          <Input
                            placeholder="Any known allergies or sensitivities"
                            value={formData.allergies}
                            onChange={(e) => handleInputChange("allergies", e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-1 block">Previous Treatments</label>
                          <Textarea
                            placeholder="Any previous treatments you've tried..."
                            value={formData.previousTreatments}
                            onChange={(e) => handleInputChange("previousTreatments", e.target.value)}
                            rows={2}
                          />
                        </div>
                      </div>

                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                          <span className="font-medium text-sm">Summary</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <strong>Treating:</strong> {getSelectedConditionNames()}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          <strong>Next:</strong> Doctor consultation for £60 (3-month plan)
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                          Back
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                        >
                          Book Consultation
                          <Sparkles className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AIConsultationWidget;