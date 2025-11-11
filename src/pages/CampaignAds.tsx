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
                  {/* Logo at top */}
                  <div className="flex justify-center">
                    <img 
                      src={cosmedocsLogo} 
                      alt="Cosmedocs"
                      className="h-8 w-auto"
                    />
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
                  {/* Logo at top */}
                  <div className="flex justify-center">
                    <img 
                      src={cosmedocsLogo} 
                      alt="Cosmedocs"
                      className="h-8 w-auto"
                    />
                  </div>

                  {/* Main Content - Centered with lots of space */}
                  <div className="flex-1 flex flex-col justify-center space-y-12 text-center px-4">
                    <h2 className="text-lg font-light leading-relaxed tracking-wide">
                      Your secret to natural youth<br />— revealed discreetly
                    </h2>

                    <div className="space-y-4 text-[10px] text-white/70 leading-relaxed">
                      <p>Scientifically refined injectables & skin therapies</p>
                      <p>Bespoke rejuvenation for your age and skin type</p>
                      <p>Guaranteed results you'll see, no one else will notice</p>
                    </div>

                    <div className="space-y-6 pt-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-[9px] text-white/60 mb-1 uppercase tracking-wider">Limited Launch Offer</p>
                        <p className="text-sm font-light">10% OFF first session</p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[10px] text-primary/80 uppercase tracking-wider">MedSpa Membership</p>
                        <p className="text-xl font-light">£25<span className="text-xs text-white/60">/mo</span></p>
                        <p className="text-[9px] text-white/60 leading-relaxed">
                          50% OFF all treatments
                        </p>
                      </div>
                    </div>
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
