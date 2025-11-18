import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { SpinWheel } from "@/components/SpinWheel";
import { SpinForm } from "@/components/SpinForm";
import { WinnerDisplay } from "@/components/WinnerDisplay";
import { Gift, Sparkles, Award } from "lucide-react";

const SpinToWin = () => {
  const [gameState, setGameState] = useState<'form' | 'spin' | 'winner'>('form');
  const [userDetails, setUserDetails] = useState<any>(null);
  const [prizeResult, setPrizeResult] = useState<any>(null);

  const handleFormSubmit = (details: any) => {
    setUserDetails(details);
    setGameState('spin');
  };

  const handleSpinComplete = (result: any) => {
    setPrizeResult(result);
    setGameState('winner');
  };

  return (
    <>
      <Helmet>
        <title>Spin to Win – Glow Giveaway | Cosmedocs</title>
        <meta name="description" content="Spin our luxury prize wheel for a chance to win premium aesthetic treatments including HydraFacials, microneedling, laser treatments and more at Cosmedocs." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,134,11,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Limited Time Only</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Spin to Win
                </span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
                  Glow Giveaway
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Experience medical-grade aesthetic treatments with our exclusive prize wheel. 
                From premium skincare to luxury treatments – your glow awaits.
              </p>

              {/* Prize Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50">
                  <Gift className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">Premium Prizes</p>
                    <p className="text-xs text-muted-foreground">Every spin wins</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50">
                  <Award className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">Mega Prizes</p>
                    <p className="text-xs text-muted-foreground">Ultra-limited winners</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50">
                  <Sparkles className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">Medical Grade</p>
                    <p className="text-xs text-muted-foreground">Harley Street quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Game Area */}
            <div className="max-w-5xl mx-auto">
              {gameState === 'form' && (
                <SpinForm onSubmit={handleFormSubmit} />
              )}
              
              {gameState === 'spin' && userDetails && (
                <SpinWheel 
                  userDetails={userDetails} 
                  onComplete={handleSpinComplete}
                />
              )}
              
              {gameState === 'winner' && prizeResult && (
                <WinnerDisplay 
                  prize={prizeResult.prize}
                  prizeCode={prizeResult.prizeCode}
                  prizeType={prizeResult.prizeType}
                  alreadyPlayed={prizeResult.alreadyPlayed}
                  laserArea={prizeResult.laserArea}
                />
              )}
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Terms & Conditions
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>• One prize per person (verified by email and phone number)</p>
              <p>• New customers only</p>
              <p>• Standard prizes cannot be claimed more than once</p>
              <p>• Mega prizes are strictly limited: Platinum HydraFacial (max 2 winners), Microneedling with Exosomes (max 1 winner), Full Body Laser Hair Removal (max 1 winner)</p>
              <p>• All treatments are subject to medical suitability assessment by our practitioners</p>
              <p>• No cash alternative available</p>
              <p>• Prizes must be redeemed by 31st December 2025</p>
              <p>• Valid at Cosmedocs Harley Street location only</p>
              <p>• Prize screenshot must be presented at clinic for redemption</p>
              <p>• Cosmedocs reserves the right to verify winner details against our database</p>
              <p>• Management reserves the right to refuse treatment if deemed medically unsuitable</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpinToWin;