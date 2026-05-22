import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronLeft } from "lucide-react";
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

// Apple iOS-style font stack (see mem://design/questionnaire-ios-typography)
const IOS_FONT = `-apple-system, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif`;

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

  const canSubmit = !!motivation;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[420px] w-[calc(100vw-24px)] sm:w-full bg-[#0a0a0a] border border-[#C9A050]/25 text-white p-0 overflow-hidden rounded-[28px] shadow-2xl"
        style={{ fontFamily: IOS_FONT }}
      >
        {/* iOS-style grabber */}
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="h-1 w-9 rounded-full bg-white/15" />
        </div>

        {/* Header */}
        <div className="px-6 pt-3 pb-5">
          <p
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#C9A050] mb-2"
          >
            Cosmedocs Research
          </p>
          <DialogTitle
            className="text-[26px] sm:text-[28px] leading-[1.15] font-semibold text-white"
            style={{ letterSpacing: "-0.022em" }}
          >
            A small favour, if you have 30 seconds.
          </DialogTitle>
          <DialogDescription className="text-white/55 text-[15px] leading-[1.45] mt-2.5 font-normal">
            We're quietly studying why people really choose aesthetic treatments. Your answer is fully anonymous.
          </DialogDescription>
        </div>

        <div className="px-5 pb-5 max-h-[68vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 text-center"
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#C9A050]" />
                </div>
                <p className="text-white text-[20px] font-semibold" style={{ letterSpacing: "-0.02em" }}>
                  Thank you — truly.
                </p>
                <p className="text-white/50 text-[15px] mt-1.5">Your voice shapes our research.</p>
              </motion.div>
            ) : step === 0 ? (
              <motion.div key="s0" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                <p
                  className="text-white text-[19px] font-semibold mb-3.5 px-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  What matters most to you?
                </p>
                <div className="space-y-2">
                  {MOTIVATIONS.map(m => {
                    const active = motivation === m.value;
                    return (
                      <button
                        key={m.value}
                        onClick={() => {
                          setMotivation(m.value);
                          if (m.value !== "other") {
                            setTimeout(() => setStep(1), 240);
                          }
                        }}
                        className={`w-full text-left px-4 rounded-2xl border transition-all flex items-center gap-3.5 active:scale-[0.985] ${
                          active
                            ? "bg-[#C9A050]/12 border-[#C9A050]/70 text-white"
                            : "bg-white/[0.035] border-white/10 text-white/90 hover:border-[#C9A050]/30"
                        }`}
                        style={{ minHeight: 60 }}
                      >
                        <span className="text-[22px] leading-none">{m.emoji}</span>
                        <span className="text-[17px] font-medium flex-1" style={{ letterSpacing: "-0.01em" }}>
                          {m.label}
                        </span>
                        {active && <Check className="h-5 w-5 text-[#C9A050]" />}
                      </button>
                    );
                  })}
                </div>
                {motivation === "other" && (
                  <Input
                    value={motivationDetail}
                    onChange={e => setMotivationDetail(e.target.value)}
                    placeholder="Tell us in a few words…"
                    maxLength={140}
                    className="mt-3 h-14 text-[17px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 px-4"
                  />
                )}
                {motivation === "other" && (
                  <button
                    onClick={() => setStep(1)}
                    className="mt-4 w-full h-[54px] rounded-full bg-[#C9A050] hover:bg-[#B8913F] text-black text-[17px] font-semibold transition-colors active:scale-[0.985]"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Continue
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-5"
              >
                <Section title="Age group" optional>
                  <Chips
                    options={AGE_GROUPS}
                    value={ageGroup}
                    onChange={setAgeGroup}
                  />
                </Section>

                <Section title="Gender" optional>
                  <Chips
                    options={GENDERS}
                    value={gender}
                    onChange={setGender}
                  />
                  {gender === "Non-binary / Other" && (
                    <Input
                      value={genderOther}
                      onChange={e => setGenderOther(e.target.value)}
                      placeholder="If you'd like to specify"
                      maxLength={60}
                      className="mt-2.5 h-12 text-[16px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 px-4"
                    />
                  )}
                </Section>

                <Section title="Ethnicity" optional>
                  <Input
                    value={ethnicity}
                    onChange={e => setEthnicity(e.target.value)}
                    placeholder="e.g. South Asian, White British, Black African…"
                    maxLength={80}
                    className="h-12 text-[16px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 px-4"
                  />
                </Section>

                <Section title="Anything else you'd like us to know?" optional>
                  <Textarea
                    value={desiredOutcome}
                    onChange={e => setDesiredOutcome(e.target.value)}
                    placeholder="What outcome you hope for, or anything on your mind…"
                    maxLength={400}
                    className="text-[16px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[88px] px-4 py-3"
                  />
                </Section>

                <div className="flex flex-col gap-3 pt-1">
                  <button
                    disabled={!canSubmit || submitting}
                    onClick={submit}
                    className="w-full h-[54px] rounded-full bg-[#C9A050] hover:bg-[#B8913F] disabled:opacity-50 text-black text-[17px] font-semibold transition-colors active:scale-[0.985]"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {submitting ? "Sending…" : "Submit anonymously"}
                  </button>
                  <button
                    onClick={() => setStep(0)}
                    className="inline-flex items-center justify-center gap-1 text-white/55 hover:text-white text-[15px] py-2"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[12px] text-white/35 mt-5 leading-relaxed text-center px-2">
            Anonymous · No personal data stored · Internal clinical research only
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Section = ({ title, optional, children }: { title: string; optional?: boolean; children: React.ReactNode }) => (
  <div>
    <p
      className="text-white text-[17px] font-semibold mb-2.5 px-1"
      style={{ letterSpacing: "-0.015em" }}
    >
      {title}
      {optional && <span className="text-white/35 text-[13px] font-normal ml-1.5">Optional</span>}
    </p>
    {children}
  </div>
);

const Chips = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
  <div className="flex flex-wrap gap-2">
    {options.map(o => {
      const active = value === o;
      return (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`px-4 h-11 rounded-full text-[15px] font-medium border transition-all active:scale-[0.97] ${
            active
              ? "bg-[#C9A050]/15 border-[#C9A050]/70 text-white"
              : "bg-white/[0.04] border-white/10 text-white/80 hover:border-[#C9A050]/30"
          }`}
          style={{ letterSpacing: "-0.01em" }}
        >
          {o}
        </button>
      );
    })}
  </div>
);

export default ResearchSurveyPopup;
