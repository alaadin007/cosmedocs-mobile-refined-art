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

                  {/* Main Content - Injectables Pricing */}
                  <div className="flex-1 space-y-6 text-left px-4">
                    <div className="space-y-2">
                      <h2 className="text-xs font-light tracking-wide">Injectable Treatments</h2>
                      <p className="text-[8px] text-white/60">Natural results · Expert practitioners</p>
                    </div>

                    {/* Anti-Wrinkle */}
                    <div className="space-y-1.5">
                      <p className="text-[9px] text-white/80 uppercase tracking-wider">Anti-Wrinkle Injections</p>
                      <div className="space-y-0.5 text-[8px] text-white/60">
                        <div className="flex justify-between"><span>1 Area</span><span>£150</span></div>
                        <div className="flex justify-between"><span>2 Areas</span><span>£200</span></div>
                        <div className="flex justify-between"><span>3 Areas</span><span>£250</span></div>
                        <div className="flex justify-between"><span>Full Face (5 areas)</span><span>£500</span></div>
                      </div>
                    </div>

                    {/* Dermal Fillers */}
                    <div className="space-y-1.5">
                      <p className="text-[9px] text-white/80 uppercase tracking-wider">Dermal Fillers</p>
                      <div className="space-y-0.5 text-[8px] text-white/60">
                        <div className="flex justify-between"><span>Lips (0.5ml)</span><span>£200</span></div>
                        <div className="flex justify-between"><span>Lips (1ml)</span><span>£300</span></div>
                        <div className="flex justify-between"><span>Cheeks (1ml)</span><span>£350</span></div>
                        <div className="flex justify-between"><span>Jawline (2ml)</span><span>£500</span></div>
                        <div className="flex justify-between"><span>Chin (1ml)</span><span>£300</span></div>
                      </div>
                    </div>

                    {/* Special Packages */}
                    <div className="space-y-1.5">
                      <p className="text-[9px] text-white/80 uppercase tracking-wider">Age-Reversal Packages</p>
                      <div className="space-y-0.5 text-[8px] text-white/60">
                        <div className="flex justify-between"><span>5 Years Younger (30-40s)</span><span>£500</span></div>
                        <div className="flex justify-between"><span>10 Years Younger (40+)</span><span>£1,000</span></div>
                      </div>
                    </div>

                    <p className="text-[7px] text-white/50">Free consultation · Natural results guaranteed</p>
                  </div>

                  {/* Bottom Contact */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="text-[8px] space-y-0.5 text-white/70">
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
