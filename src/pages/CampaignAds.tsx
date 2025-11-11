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
                <div className="bg-black text-white p-12 aspect-[1/1.414] flex flex-col justify-between">
                  {/* Back Design */}
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h2 className="text-2xl md:text-3xl font-bold">
                        Your secret to natural youth — revealed discreetly.
                      </h2>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-white/90">
                          Scientifically refined injectables & skin therapies
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-white/90">
                          Bespoke rejuvenation plan designed for your age and skin type
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-white/90">
                          Guaranteed results you'll see, but no one else will notice
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-6 space-y-4">
                      <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                        <p className="text-xs text-white/70 mb-2">✨ LIMITED LAUNCH OFFER</p>
                        <p className="text-lg font-bold">10% OFF your first session</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">MedSpa Membership</p>
                        <p className="text-2xl font-bold">£25<span className="text-base font-normal text-white/70">/month</span></p>
                        <p className="text-xs text-white/80">
                          Get 50% OFF all treatments, including laser, peels, microneedling, and boosters
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <div className="flex items-center justify-between">
                      <div className="text-xs space-y-1">
                        <p className="font-medium">www.cosmedocs.co.uk</p>
                        <p className="text-white/70">020 7060 1960</p>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                        <QrCode className="w-10 h-10 text-black" />
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
