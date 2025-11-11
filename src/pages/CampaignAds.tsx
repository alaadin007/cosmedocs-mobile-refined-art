import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import { Download, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import flyerImage1 from "@/assets/flyer-before-after-1.jpeg";
import flyerImage2 from "@/assets/flyer-before-after-2.jpeg";

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
                <div className="bg-black text-white p-12 aspect-[1/1.414] flex flex-col justify-between relative">
                  {/* Front Design */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Untraceably You
                      </h2>
                      <p className="text-lg text-white/80">
                        Look 5–10 years younger — naturally.
                      </p>
                    </div>
                  </div>

                  {/* Before/After Images in Center */}
                  <div className="grid grid-cols-2 gap-3 my-8">
                    <img 
                      src={flyerImage1} 
                      alt="Natural rejuvenation before and after"
                      className="w-full h-auto rounded-lg"
                    />
                    <img 
                      src={flyerImage2} 
                      alt="Subtle anti-aging results"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-3 border border-white/20 text-center">
                      <p className="text-2xl font-bold">£500</p>
                      <p className="text-xs text-white/80">5 Years (30-40s)</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 border border-white/20 text-center">
                      <p className="text-2xl font-bold">£1,000</p>
                      <p className="text-xs text-white/80">10 Years (40+)</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    <div className="border-t border-white/20 pt-6 space-y-3">
                      <p className="text-sm text-white/90 font-light">
                        Harley Street. Natural Tweaks.
                      </p>
                      <div className="space-y-1">
                        <p className="text-base font-medium">📍 Cosmedocs | Harley Street</p>
                        <p className="text-sm text-white/80">📱 Scan for your free glow consultation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                        <QrCode className="w-12 h-12 text-black" />
                      </div>
                      <p className="text-xs text-white/70 flex-1">
                        Scan to see if you qualify for our Untraceably You programme
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
                <div className="bg-black text-white p-8 aspect-[1/1.414] flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <div className="text-black text-xs font-bold">CD</div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">COSMEDOCS</p>
                      <p className="text-[10px] text-white/70">Harley Street Since 2007, 1M+ Injection</p>
                    </div>
                  </div>

                  {/* Treatment Benefits */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      <p className="text-xs text-white/80">
                        Scientifically refined injectables & skin therapies
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      <p className="text-xs text-white/80">
                        Bespoke rejuvenation plan designed for your age and skin type
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      <p className="text-xs text-white/80">
                        Guaranteed results you'll see, but no one else will notice
                      </p>
                    </div>
                  </div>

                  {/* Injectable Treatments */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-bold mb-1">Injectable Treatments</p>
                      <p className="text-[10px] text-white/60">Natural results · Expert practitioners</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold">Anti-Wrinkle Injections</p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                        <div className="flex justify-between"><span className="text-white/70">1 Area</span><span>£150</span></div>
                        <div className="flex justify-between"><span className="text-white/70">2 Areas</span><span>£200</span></div>
                        <div className="flex justify-between"><span className="text-white/70">3 Areas</span><span>£250</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Full Face (5)</span><span>£500</span></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold">Dermal Fillers</p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                        <div className="flex justify-between"><span className="text-white/70">Lips (0.5ml)</span><span>£200</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Lips (1ml)</span><span>£300</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Cheeks (1ml)</span><span>£350</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Jawline (2ml)</span><span>£500</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Chin (1ml)</span><span>£300</span></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold">Age-Reversal Packages</p>
                      <div className="space-y-1 text-[10px]">
                        <div className="flex justify-between"><span className="text-white/70">5 Years Younger (30-40s)</span><span>£500</span></div>
                        <div className="flex justify-between"><span className="text-white/70">10 Years Younger (40+)</span><span>£1,000</span></div>
                      </div>
                    </div>

                    <p className="text-[10px] text-white/60 italic">Free consultation · Natural results guaranteed</p>
                  </div>

                  {/* MedSpa Membership */}
                  <div className="border-t border-white/20 pt-3 space-y-3">
                    <div>
                      <p className="text-sm font-bold">MedSpa Membership</p>
                      <p className="text-[10px] text-white/60">50% OFF all treatments · £25/month</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold">Laser Hair Removal</p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                        <div className="flex justify-between"><span className="text-white/70">Upper Lip/Chin</span><span>£30 → £15</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Full Face</span><span>£70 → £35</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Underarms</span><span>£50 → £25</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Hollywood</span><span>£80 → £40</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Full Legs</span><span>£100 → £50</span></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold">Skin Rejuvenation</p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                        <div className="flex justify-between"><span className="text-white/70">Exosomes</span><span>£300 → £150</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Microneedling</span><span>£150 → £75</span></div>
                        <div className="flex justify-between"><span className="text-white/70">PRP Facial</span><span>£250 → £125</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Signature Hydra</span><span>£135 → £67.5</span></div>
                        <div className="flex justify-between"><span className="text-white/70">Platinum Hydra</span><span>£200 → £100</span></div>
                      </div>
                    </div>

                    <p className="text-[10px] text-white/60 italic">Full treatment menu at cosmedocs.co.uk</p>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-white/20 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] space-y-0.5">
                        <p className="font-medium">www.cosmedocs.co.uk</p>
                        <p className="text-white/70">020 7060 1960</p>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <QrCode className="w-8 h-8 text-black" />
                      </div>
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
