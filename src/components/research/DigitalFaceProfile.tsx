import { motion } from "framer-motion";
import { Check, Share2, Sparkles, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const GOLD = "#C9A050";

export interface ProfileData {
  archetype: { name: string; blurb: string };
  scores: {
    digital_confidence: number;
    social_comparison: number;
    filter_awareness: number;
    camera_sensitivity: number;
    digital_influence: number;
  };
  interpretation: string;
  insight: string;
  comparison: { total_participants: number; comparisons: string[] };
}

export const GeneratingProfile = () => (
  <div className="h-full flex flex-col items-center justify-center text-center py-16">
    <div className="relative h-20 w-20 mb-7">
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-[#C9A050]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        style={{ borderTopColor: GOLD }}
      />
      <Sparkles className="absolute inset-0 m-auto h-7 w-7 text-[#C9A050]" />
    </div>
    <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#C9A050] mb-3">
      Analysing your responses
    </p>
    <h2 className="text-white text-[24px] md:text-[30px] font-semibold leading-[1.2] max-w-[22ch]" style={{ letterSpacing: "-0.022em" }}>
      Generating Your Digital Face Profile™
    </h2>
    <p className="text-white/55 text-[15px] mt-3 max-w-[36ch]">
      Comparing your answers anonymously with other participants. Takes around 5–10 seconds.
    </p>
  </div>
);

const Gauge = ({ value }: { value: number }) => {
  const r = 64;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative h-[170px] w-[170px] mx-auto">
      <svg viewBox="0 0 160 160" className="absolute inset-0">
        <circle cx="80" cy="80" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" />
        <motion.circle
          cx="80" cy="80" r={r}
          stroke={GOLD} strokeWidth="10" fill="none" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
          transform="rotate(-90 80 80)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[44px] font-light text-white tabular-nums" style={{ letterSpacing: "-0.03em" }}>{value}</span>
        <span className="text-[10px] tracking-[0.28em] uppercase text-white/45">/ 100</span>
      </div>
    </div>
  );
};

const Bar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between items-baseline mb-1.5">
      <span className="text-[13px] text-white/80 font-medium" style={{ letterSpacing: "-0.005em" }}>{label}</span>
      <span className="text-[12px] text-[#C9A050] tabular-nums">{value}</span>
    </div>
    <div className="h-[6px] rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-[#C9A050]/70 to-[#C9A050]"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
      />
    </div>
  </div>
);

export const DigitalFaceProfileView = ({
  profile,
  studyId,
  shareUrl,
}: {
  profile: ProfileData;
  studyId: string;
  shareUrl: string;
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);
  const s = profile.scores;

  const subscribe = async () => {
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast({ title: "Please enter a valid email" });
      return;
    }
    const { error } = await supabase.from("research_email_subscribers").insert({ study_id: studyId, email: trimmed });
    if (error) {
      toast({ title: "Could not save", description: "Please try again.", variant: "destructive" });
      return;
    }
    setSubscribed(true);
  };

  const shareText = `My Digital Face Profile™\n${profile.archetype.name}\nDigital Confidence Index: ${s.digital_confidence}/100\n\nDiscover yours — The Filtered Face Project by Cosmedocs.`;

  const nativeShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "My Digital Face Profile™", text: shareText, url: shareUrl }); } catch {}
    } else {
      copy();
    }
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };
  const whatsapp = () => {
    const u = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
    window.open(u, "_blank", "noopener");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="pb-10"
    >
      <p className="text-[10px] tracking-[0.32em] uppercase text-[#C9A050] mb-3 text-center">Your Digital Face Profile™</p>
      <h2 className="text-white text-[28px] md:text-[36px] font-light leading-[1.1] text-center mb-2" style={{ letterSpacing: "-0.022em" }}>
        {profile.archetype.name}
      </h2>
      <p className="text-white/65 text-[15px] md:text-[16px] leading-[1.55] text-center max-w-[40ch] mx-auto mb-9">
        {profile.archetype.blurb}
      </p>

      <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-8 mb-6">
        <p className="text-center text-[10px] tracking-[0.28em] uppercase text-white/50 mb-4">Digital Confidence Index™</p>
        <Gauge value={s.digital_confidence} />
        <p className="text-center text-[14px] text-white/70 mt-4 max-w-[36ch] mx-auto">{profile.interpretation}</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-7 mb-6 space-y-4">
        <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-2">Score breakdown</p>
        <Bar label="Social Comparison" value={s.social_comparison} />
        <Bar label="Filter Awareness" value={s.filter_awareness} />
        <Bar label="Camera Sensitivity" value={s.camera_sensitivity} />
        <Bar label="Digital Influence" value={s.digital_influence} />
      </div>

      {profile.comparison.comparisons.length > 0 && (
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-7 mb-6">
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-3">
            Compared with {profile.comparison.total_participants} participants
          </p>
          <ul className="space-y-2.5">
            {profile.comparison.comparisons.map((c, i) => (
              <li key={i} className="flex gap-2.5 text-[14.5px] text-white/80 leading-[1.55]">
                <span className="text-[#C9A050] mt-1.5 shrink-0">›</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-3xl border border-[#C9A050]/30 bg-gradient-to-b from-[#C9A050]/[0.05] to-transparent p-6 md:p-7 mb-6">
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A050] mb-3">Personalised Insight</p>
        <p className="text-white/85 text-[15.5px] md:text-[16px] leading-[1.65] whitespace-pre-wrap">{profile.insight}</p>
      </div>

      <p className="text-[11px] text-white/35 text-center mb-8 max-w-[44ch] mx-auto leading-relaxed">
        This is a self-reflection tool from a research study — not a medical, psychological or mental health assessment.
        Responses are anonymous.
      </p>

      {/* Share */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-7 mb-6">
        <p className="text-white font-semibold text-[16px] mb-3" style={{ letterSpacing: "-0.01em" }}>
          Share your profile
        </p>
        <p className="text-white/55 text-[13.5px] mb-4">Help us reach more voices — a more diverse study means richer findings.</p>
        <div className="grid grid-cols-3 gap-2">
          <button onClick={nativeShare} className="h-11 rounded-full border border-[#C9A050]/50 text-[#C9A050] text-[13px] font-medium inline-flex items-center justify-center gap-1.5 hover:bg-[#C9A050]/10">
            <Share2 className="h-4 w-4" /> Share
          </button>
          <button onClick={whatsapp} className="h-11 rounded-full border border-white/15 text-white/85 text-[13px] font-medium inline-flex items-center justify-center hover:border-[#C9A050]/40">
            WhatsApp
          </button>
          <button onClick={copy} className="h-11 rounded-full border border-white/15 text-white/85 text-[13px] font-medium inline-flex items-center justify-center gap-1.5 hover:border-[#C9A050]/40">
            {copied ? <><Check className="h-4 w-4" /> Copied</> : <><Copy className="h-4 w-4" /> Link</>}
          </button>
        </div>
      </div>

      {/* Email opt-in */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-7 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-4 w-4 text-[#C9A050]" />
          <p className="text-white font-semibold text-[16px]" style={{ letterSpacing: "-0.01em" }}>Get future research findings</p>
        </div>
        <p className="text-white/55 text-[13.5px] mb-4">
          Receive study results, reports and future participation opportunities. Stored separately from your anonymous response.
        </p>
        {subscribed ? (
          <p className="text-[#C9A050] text-[14px] inline-flex items-center gap-1.5"><Check className="h-4 w-4" /> Thank you — we'll be in touch.</p>
        ) : (
          <div className="flex gap-2">
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-12 rounded-full bg-white/5 border-white/10 text-white placeholder:text-white/30 px-5 text-[15px]"
            />
            <Button onClick={subscribe} className="h-12 rounded-full bg-[#C9A050] hover:bg-[#B8913F] text-black px-6 text-[14px] font-semibold">
              Subscribe
            </Button>
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Thank you for contributing to</p>
        <p className="text-white text-[18px] font-light mb-3" style={{ letterSpacing: "-0.015em" }}>
          The Filtered Face Project™
        </p>
        <p className="text-white/45 text-[12.5px] max-w-[40ch] mx-auto leading-[1.6]">
          Future findings will be published through Aesthetic Intelligence Journal and the Harley Street Institute, with clinical insights from Cosmedocs Harley Street.
        </p>
        <Link to="/research" className="inline-block mt-6 text-white/45 hover:text-[#C9A050] text-[11px] uppercase tracking-[0.28em]">
          All studies
        </Link>
      </div>
    </motion.div>
  );
};

export const ProfilePreviewCard = () => (
  <div className="rounded-2xl border border-[#C9A050]/30 bg-gradient-to-b from-[#C9A050]/[0.06] to-transparent p-5 text-left">
    <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A050] mb-2">Example profile</p>
    <p className="text-white text-[17px] font-medium mb-1" style={{ letterSpacing: "-0.015em" }}>The Reflective Observer</p>
    <p className="text-white/60 text-[13px] mb-3">Digital Confidence Index · 74/100</p>
    <div className="h-[5px] rounded-full bg-white/10 overflow-hidden mb-3">
      <div className="h-full w-[74%] rounded-full bg-[#C9A050]" />
    </div>
    <p className="text-white/55 text-[12.5px] leading-[1.55]">
      Less filter-dependent than 83% of respondents. Balanced self-awareness and healthy confidence.
    </p>
  </div>
);

export const ProfilePrePitch = () => {
  const bullets = [
    "Your Digital Confidence Index",
    "Your Social Comparison Score",
    "Your Filter Awareness Score",
    "Your Camera Sensitivity Score",
    "Your AI-generated personality archetype",
    "Anonymous comparison with other participants",
    "Personalised insights to better understand your relationship with social media and self-image",
  ];
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-7 text-left max-w-[460px] mx-auto">
      <p className="text-[10px] tracking-[0.32em] uppercase text-[#C9A050] mb-2 text-center">When you complete this survey</p>
      <h3 className="text-white text-[20px] md:text-[22px] font-semibold mb-2 text-center" style={{ letterSpacing: "-0.018em" }}>
        Discover your Digital Face Profile™
      </h3>
      <p className="text-white/60 text-[13.5px] mb-4 text-center">Free, instant, personalised — your reflection on filters, cameras and self-image.</p>
      <ul className="space-y-2 mb-5">
        {bullets.map(b => (
          <li key={b} className="flex gap-2.5 text-[13.5px] text-white/80 leading-[1.55]">
            <Check className="h-4 w-4 text-[#C9A050] shrink-0 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <ProfilePreviewCard />
      <p className="text-[11px] text-white/35 mt-4 leading-relaxed text-center">
        This survey is for research and educational purposes only. The profile is not a medical, psychological or mental health assessment. All responses are anonymous.
      </p>
    </div>
  );
};
