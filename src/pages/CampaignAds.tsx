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
                <div className="bg-black text-white p-16 aspect-[1/1.414] flex flex-col justify-between">
                  {/* Top - Brand Text */}
                  <div className="text-left">
                    <h3 className="text-lg font-light tracking-wider">cosmedocs</h3>
                    <p className="text-[8px] text-white/50 font-light tracking-wide italic">Our aesthetics is invisible art</p>
                  </div>

                  {/* Left-aligned Content with empty right space */}
                  <div className="flex">
                    <div className="w-1/2 space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-light tracking-wide">
                          Untraceably You
                        </h2>
                        <p className="text-[9px] text-white/70 font-light tracking-wider uppercase">
                          Look 5–10 years younger — naturally
                        </p>
                      </div>

                      {/* Before/After Images */}
                      <div className="space-y-2">
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
                      <div className="space-y-3 text-left">
                        <div>
                          <p className="text-lg font-light">£500</p>
                          <p className="text-[9px] text-white/60 tracking-wider">5 Years (30-40s)</p>
                        </div>
                        <div>
                          <p className="text-lg font-light">£1,000</p>
                          <p className="text-[9px] text-white/60 tracking-wider">10 Years (40+)</p>
                        </div>
                      </div>
                    </div>
                    {/* Empty right space */}
                    <div className="w-1/2"></div>
                  </div>

                  {/* Bottom Section */}
                  <div className="text-left space-y-3">
                    <p className="text-[9px] text-white/70 tracking-wider uppercase">
                      Harley Street · Natural Tweaks
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded flex items-center justify-center flex-shrink-0">
                        <QrCode className="w-8 h-8 text-black" />
                      </div>
                      <p className="text-[8px] text-white/60 leading-relaxed max-w-[120px]">
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
                  {/* Top - Brand Text */}
                  <div className="text-left">
                    <h3 className="text-lg font-light tracking-wider">cosmedocs</h3>
                    <p className="text-[8px] text-white/50 font-light tracking-wide italic">Our aesthetics is invisible art</p>
                  </div>

                  {/* Left-aligned Content with empty right space */}
                  <div className="flex">
                    <div className="w-1/2 space-y-8">
                      <h2 className="text-sm font-light leading-relaxed tracking-wide">
                        Your secret to natural youth<br />— revealed discreetly
                      </h2>

                      <div className="space-y-3 text-[9px] text-white/70 leading-relaxed">
                        <p>Scientifically refined injectables<br />& skin therapies</p>
                        <p>Bespoke rejuvenation for your<br />age and skin type</p>
                        <p>Guaranteed results you'll see,<br />no one else will notice</p>
                      </div>

                      <div className="space-y-5 pt-2">
                        <div className="bg-white/5 rounded p-3 border border-white/10">
                          <p className="text-[8px] text-white/60 mb-1 uppercase tracking-wider">Limited Launch Offer</p>
                          <p className="text-xs font-light">10% OFF first session</p>
                        </div>

                        <div className="space-y-1">
                          <p className="text-[9px] text-primary/80 uppercase tracking-wider">MedSpa Membership</p>
                          <p className="text-base font-light">£25<span className="text-[10px] text-white/60">/mo</span></p>
                          <p className="text-[8px] text-white/60 leading-relaxed">
                            50% OFF all treatments
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Empty right space */}
                    <div className="w-1/2"></div>
                  </div>

                  {/* Bottom Contact */}
                  <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                    <div className="w-12 h-12 bg-white rounded flex items-center justify-center flex-shrink-0">
                      <QrCode className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-[9px] space-y-1 text-white/70">
                      <p>www.cosmedocs.co.uk</p>
                      <p>020 7060 1960</p>
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
