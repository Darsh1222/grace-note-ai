import { Button } from "@/components/ui/button";
import { Mic, Music, TrendingUp } from "lucide-react";
import { WaitlistModal } from "@/components/WaitlistModal";
import { useState } from "react";
import graceaiPractice from "@/assets/graceai-practice-screen.png";
import graceaiHome from "@/assets/graceai-home-screen.png";
import graceaiAnalytics from "@/assets/graceai-analytics-screen.png";
export const Hero = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  return <section className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Animated glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Bold. Smart.
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Seamless.
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Like how grace notes frame silence, GraceAI frames your musical journey.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-lg">
                  Record your practice sessions, get instant AI-powered feedback on accuracy, 
                  timing, and rhythm.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-lg">Transform how you learn music with precision, with elegance, and with GraceAI.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a 
                  href="https://apps.apple.com/us/app/graceai-master-your-music/id6753151596"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Music className="w-5 h-5 group-hover:animate-pulse" />
                  Download for iOS
                </a>
              </Button>
              <Button variant="glow" size="xl" onClick={() => setShowWaitlist(true)}>
                <Music className="w-5 h-5" />
                Join the Evolved Musicians
              </Button>
            </div>

            {/* Features preview */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mx-auto shadow-purple">
                  <Mic className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">AI Analysis</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mx-auto shadow-blue">
                  <Music className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground">Sheet Music</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mx-auto shadow-purple">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Progress</p>
              </div>
            </div>
          </div>

          {/* Right content - App screenshots showcase */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Practice Screen */}
              <div className="relative transform hover:scale-105 transition-smooth">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img src={graceaiPractice} alt="GraceAI Practice Screen" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-primary/10"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full shadow-glow-primary animate-pulse"></div>
              </div>

              {/* Home Screen */}
              <div className="relative transform hover:scale-105 transition-smooth md:mt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img src={graceaiHome} alt="GraceAI Home Dashboard" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-primary/10"></div>
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-glow rounded-full shadow-glow-secondary animate-bounce"></div>
              </div>

              {/* Analytics Screen */}
              <div className="relative transform hover:scale-105 transition-smooth">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img src={graceaiAnalytics} alt="GraceAI Analytics Screen" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-primary/10"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full shadow-glow-primary animate-pulse"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-primary rounded-full shadow-glow-primary animate-bounce opacity-60"></div>
            <div className="absolute -bottom-4 left-1/4 w-12 h-12 bg-gradient-glow rounded-full shadow-glow-secondary animate-pulse opacity-40"></div>
          </div>
        </div>
      </div>
      
      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
    </section>;
};