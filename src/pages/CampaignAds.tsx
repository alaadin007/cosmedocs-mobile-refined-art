import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import { Download, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import flyerImage1 from "@/assets/flyer-before-after-1.jpeg";
import flyerImage2 from "@/assets/flyer-before-after-2.jpeg";
import cosmedocsLogo from "@/assets/cosmedocs-logo.png";

export default function CampaignAds() {
  const { toast } = useToast();
  const seoData = generateSEOMetadata(
    "Untraceably You Campaign Materials - Download A5 Flyers | Cosmedocs",
    "Download professional A5 campaign flyers for the Untraceably You anti-aging campaign. Harley Street aesthetic treatments with guaranteed natural results.",
    "/ads"
  );

  const handleDownload = (side: 'front' | 'back') => {
    toast({
      title: "Download Started",
      description: `Downloading ${side} flyer design...`,
    });
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
      </Helmet>

      <div className="min-h-screen bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Campaign Materials</h1>
              <p className="text-xl text-muted-foreground">
                Download professional A5 flyers for the Untraceably You campaign
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Front Flyer */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-black text-white p-16 aspect-[1/1.414] flex flex-col justify-between relative">
                  {/* Brand header */}
                  <div className="text-left">
                    <h3 className="text-sm font-light tracking-wider">COSMEDOCS</h3>
                    <p className="text-[8px] text-white/60 tracking-wide">Harley Street Since 2007, 1M+ Injection</p>
                  </div>

                  {/* Centered Content */}
                  <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">
                    <div className="space-y-3">
                      <h2 className="text-4xl font-light tracking-wide">
                        Untraceably You
                      </h2>
                      <p className="text-xs text-white/70 font-light tracking-wider uppercase">
                        Look 5–10 years younger — naturally
                      </p>
                    </div>

                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                      <img 
                        src={flyerImage1} 
                        alt="Natural rejuvenation"
                        className="w-full h-auto rounded"
                      />
                      <img 
                        src={flyerImage2} 
                        alt="Subtle results"
                        className="w-full h-auto rounded"
                      />
                    </div>

                    {/* Pricing */}
                    <div className="flex gap-8 text-center">
                      <div>
                        <p className="text-xl font-light">£500</p>
                        <p className="text-[10px] text-white/60 uppercase tracking-wider">5 Years</p>
                      </div>
                      <div className="w-px bg-white/20" />
                      <div>
                        <p className="text-xl font-light">£1,000</p>
                        <p className="text-[10px] text-white/60 uppercase tracking-wider">10 Years</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-4 text-center">
                    <p className="text-[10px] text-white/70 tracking-wider uppercase">
                      Harley Street · Natural Tweaks
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                        <QrCode className="w-10 h-10 text-black" />
                      </div>
                      <p className="text-[9px] text-white/60 text-left max-w-[140px] leading-relaxed">
                        Scan for your free consultation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-muted/50">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => handleDownload('front')}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Front (A5)
                  </Button>
                </div>
              </div>

              {/* Back Flyer */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-black text-white p-16 aspect-[1/1.414] flex flex-col justify-between">
                  {/* Brand header */}
                  <div className="text-left">
                    <h3 className="text-sm font-light tracking-wider">COSMEDOCS</h3>
                    <p className="text-[8px] text-white/60 tracking-wide">Harley Street Since 2007, 1M+ Injection</p>
                  </div>

                  {/* Main Content - Pricing Table */}
                  <div className="flex-1 space-y-6 text-left px-4">
                    <div className="space-y-2">
                      <h2 className="text-xs font-light tracking-wide">MedSpa Membership</h2>
                      <p className="text-[8px] text-white/60">50% OFF all treatments · £25/month</p>
                    </div>

                    {/* Laser Hair Removal */}
                    <div className="space-y-1.5">
                      <p className="text-[9px] text-white/80 uppercase tracking-wider">Laser Hair Removal</p>
                      <div className="space-y-0.5 text-[8px] text-white/60">
                        <div className="flex justify-between"><span>Upper Lip or Chin</span><span>£30 → £15</span></div>
                        <div className="flex justify-between"><span>Full Face</span><span>£70 → £35</span></div>
                        <div className="flex justify-between"><span>Underarms</span><span>£50 → £25</span></div>
                        <div className="flex justify-between"><span>Hollywood</span><span>£80 → £40</span></div>
                        <div className="flex justify-between"><span>Full Legs</span><span>£100 → £50</span></div>
                      </div>
                    </div>

                    {/* Skin Rejuvenation */}
                    <div className="space-y-1.5">
                      <p className="text-[9px] text-white/80 uppercase tracking-wider">Skin Rejuvenation</p>
                      <div className="space-y-0.5 text-[8px] text-white/60">
                        <div className="flex justify-between"><span>Exosomes</span><span>£300 → £150</span></div>
                        <div className="flex justify-between"><span>Microneedling</span><span>£150 → £75</span></div>
                        <div className="flex justify-between"><span>PRP Vampire Facial</span><span>£250 → £125</span></div>
                        <div className="flex justify-between"><span>Signature HydraFacial</span><span>£135 → £67.5</span></div>
                        <div className="flex justify-between"><span>Platinum HydraFacial</span><span>£200 → £100</span></div>
                      </div>
                    </div>

                    {/* Body Sculpting */}
                    <div className="space-y-1.5">
                      <p className="text-[9px] text-white/80 uppercase tracking-wider">Body Sculpting</p>
                      <div className="space-y-0.5 text-[8px] text-white/60">
                        <div className="flex justify-between"><span>Double Chin</span><span>£150 → £75</span></div>
                        <div className="flex justify-between"><span>Upper Arms</span><span>£200 → £100</span></div>
                        <div className="flex justify-between"><span>Full Abdomen</span><span>£350 → £175</span></div>
                      </div>
                    </div>

                    <p className="text-[7px] text-white/50">Full treatment menu at cosmedocs.co.uk</p>
                  </div>

                  {/* Bottom Contact */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="text-[10px] space-y-1 text-white/70">
                      <p>www.cosmedocs.co.uk</p>
                      <p>020 7060 1960</p>
                    </div>
                    <div className="w-14 h-14 bg-white rounded flex items-center justify-center">
                      <QrCode className="w-9 h-9 text-black" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-muted/50">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => handleDownload('back')}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Back (A5)
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Professional print-ready A5 flyers (148mm × 210mm)
              </p>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download Both Sides (ZIP)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
