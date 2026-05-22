import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Microscope, Check, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const MOTIVATIONS = [
  { value: "confidence", label: "Confidence", emoji: "✨" },
  { value: "career", label: "Career", emoji: "💼" },
  { value: "dating", label: "Dating & relationships", emoji: "💛" },
  { value: "social_media", label: "Social media & photos", emoji: "📸" },
  { value: "ageing_anxiety", label: "Anxiety about ageing", emoji: "⏳" },
  { value: "skin_health", label: "Skin health", emoji: "🌿" },
  { value: "other", label: "Something else", emoji: "💭" },
];

const AGE_GROUPS = ["Under 25", "25–34", "35–44", "45–54", "55–64", "65+"];
const GENDERS = ["Female", "Male", "Non-binary / Other", "Prefer not to say"];

export const ResearchSurveyPopup = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const [motivation, setMotivation] = useState<string>("");
  const [motivationDetail, setMotivationDetail] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [genderOther, setGenderOther] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [desiredOutcome, setDesiredOutcome] = useState("");

  const submit = async () => {
    setSubmitting(true);
    const { error } = await supabase.from("patient_research_survey").insert({
      motivation,
      motivation_detail: motivationDetail || null,
      age_group: ageGroup || null,
      gender: gender === "Non-binary / Other" && genderOther ? genderOther : gender || null,
      ethnicity: ethnicity || null,
      desired_outcome: desiredOutcome || null,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Could not save", description: "Please try again in a moment.", variant: "destructive" });
      return;
    }
    setDone(true);
    setTimeout(() => onOpenChange(false), 2200);
  };

  const canNext0 = !!motivation;
  const canSubmit = !!motivation;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-black border border-[#C9A050]/30 text-white p-0 overflow-hidden">
        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 bg-gradient-to-b from-[#C9A050]/10 to-transparent">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-9 w-9 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center">
              <Microscope className="h-4 w-4 text-[#C9A050]" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A050]">Cosmedocs Research</p>
              <DialogTitle className="text-base font-light leading-tight text-white">
                A small favour, if you have 30 seconds
              </DialogTitle>
            </div>
          </div>
          <DialogDescription className="text-white/60 text-sm leading-relaxed">
            We're a doctor-led clinic, and we're quietly studying why people really choose aesthetic
            treatments. Your honest answer — fully anonymous — helps us care for patients better.
          </DialogDescription>
        </div>

        <div className="px-6 pb-6">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center mb-3">
                  <Check className="h-5 w-5 text-[#C9A050]" />
                </div>
                <p className="text-white/90 font-light">Thank you — truly.</p>
                <p className="text-white/50 text-xs mt-1">Your voice shapes our research.</p>
              </motion.div>
            ) : step === 0 ? (
              <motion.div key="s0" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                <p className="text-white/80 text-sm mb-3">What matters most to you?</p>
                <div className="space-y-2">
                  {MOTIVATIONS.map(m => (
                    <button
                      key={m.value}
                      onClick={() => {
                        setMotivation(m.value);
                        if (m.value !== "other") {
                          setTimeout(() => setStep(1), 220);
                        }
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-all flex items-center gap-3 ${
                        motivation === m.value
                          ? "bg-[#C9A050]/15 border-[#C9A050]/60 text-white"
                          : "bg-white/[0.03] border-white/10 text-white/80 hover:border-[#C9A050]/30"
                      }`}
                    >
                      <span className="text-base">{m.emoji}</span>
                      <span>{m.label}</span>
                    </button>
                  ))}
                </div>
                {motivation === "other" && (
                  <Input
                    value={motivationDetail}
                    onChange={e => setMotivationDetail(e.target.value)}
                    placeholder="Tell us in a few words…"
                    maxLength={140}
                    className="mt-3 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                )}
                <div className="flex justify-end mt-5">
                  <Button
                    disabled={!canNext0}
                    onClick={() => setStep(1)}
                    className="bg-[#C9A050] hover:bg-[#B8913F] text-black rounded-full px-6"
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="s1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-4">
                <div>
                  <p className="text-white/80 text-sm mb-2">Age group <span className="text-white/30 text-xs">(optional)</span></p>
                  <div className="flex flex-wrap gap-1.5">
                    {AGE_GROUPS.map(a => (
                      <button
                        key={a}
                        onClick={() => setAgeGroup(a)}
                        className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                          ageGroup === a ? "bg-[#C9A050]/15 border-[#C9A050]/60 text-white" : "bg-white/[0.03] border-white/10 text-white/70"
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-white/80 text-sm mb-2">Gender <span className="text-white/30 text-xs">(optional)</span></p>
                  <div className="flex flex-wrap gap-1.5">
                    {GENDERS.map(g => (
                      <button
                        key={g}
                        onClick={() => setGender(g)}
                        className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                          gender === g ? "bg-[#C9A050]/15 border-[#C9A050]/60 text-white" : "bg-white/[0.03] border-white/10 text-white/70"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  {gender === "Non-binary / Other" && (
                    <Input
                      value={genderOther}
                      onChange={e => setGenderOther(e.target.value)}
                      placeholder="If you'd like to specify"
                      maxLength={60}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  )}
                </div>

                <div>
                  <p className="text-white/80 text-sm mb-2">Ethnicity <span className="text-white/30 text-xs">(optional)</span></p>
                  <Input
                    value={ethnicity}
                    onChange={e => setEthnicity(e.target.value)}
                    placeholder="e.g. South Asian, White British, Black African…"
                    maxLength={80}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                </div>

                <div>
                  <p className="text-white/80 text-sm mb-2">Anything else you'd like us to know? <span className="text-white/30 text-xs">(optional)</span></p>
                  <Textarea
                    value={desiredOutcome}
                    onChange={e => setDesiredOutcome(e.target.value)}
                    placeholder="What outcome you hope for, or anything on your mind…"
                    maxLength={400}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[70px]"
                  />
                </div>

                <div className="flex justify-between items-center pt-1">
                  <button onClick={() => setStep(0)} className="text-white/50 hover:text-white text-xs">
                    ← Back
                  </button>
                  <Button
                    disabled={!canSubmit || submitting}
                    onClick={submit}
                    className="bg-[#C9A050] hover:bg-[#B8913F] text-black rounded-full px-6"
                  >
                    {submitting ? "Sending…" : (<><Sparkles className="h-3.5 w-3.5 mr-1.5" /> Submit anonymously</>)}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[10px] text-white/30 mt-4 leading-relaxed">
            Anonymous • No personal data stored • Used only for internal clinical research at Cosmedocs.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResearchSurveyPopup;
