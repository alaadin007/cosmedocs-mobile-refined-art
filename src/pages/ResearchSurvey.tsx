import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Microscope, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResearchSurveyPopup from "@/components/ResearchSurveyPopup";

const ResearchSurvey = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined"
    ? `${window.location.origin}/research`
    : "https://cosmedocs.com/research";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <>
      <Helmet>
        <title>Patient Psychology Research | Cosmedocs</title>
        <meta
          name="description"
          content="A doctor-led, anonymous research study on why patients really choose aesthetic treatments. Takes 30 seconds."
        />
        <link rel="canonical" href="https://cosmedocs.com/research" data-rh="true" />
        <meta property="og:title" content="Why patients REALLY choose aesthetic treatments" />
        <meta property="og:description" content="A 30-second anonymous study by Cosmedocs. Your voice helps us care for patients better." />
        <meta property="og:url" content="https://cosmedocs.com/research" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="max-w-2xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="mx-auto h-14 w-14 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center mb-6">
            <Microscope className="h-6 w-6 text-[#C9A050]" />
          </div>
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#C9A050] mb-3">Cosmedocs Research</p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-5">
            Why do patients <em className="text-[#C9A050] not-italic">really</em> choose aesthetic treatments?
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            We're a doctor-led clinic quietly studying patient motivation. Your honest, fully anonymous
            answer — 30 seconds — helps us care for patients better. No name, no email, no tracking.
          </p>

          <Button
            onClick={() => setOpen(true)}
            className="bg-[#C9A050] hover:bg-[#B8913F] text-black rounded-full px-8 h-12 text-base"
          >
            Take the 30-second survey
          </Button>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">Share this study</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <code className="text-xs md:text-sm text-white/70 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                {shareUrl}
              </code>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 text-xs text-[#C9A050] border border-[#C9A050]/40 rounded-full px-4 py-2 hover:bg-[#C9A050]/10 transition"
              >
                {copied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Share2 className="h-3.5 w-3.5" /> Copy link</>}
              </button>
            </div>
            <p className="text-[11px] text-white/30 mt-4">
              Anonymous • No personal data stored • Internal clinical research only
            </p>
          </div>
        </section>
      </main>

      <ResearchSurveyPopup open={open} onOpenChange={setOpen} />
    </>
  );
};

export default ResearchSurvey;
