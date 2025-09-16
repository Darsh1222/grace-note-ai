import { Button } from "@/components/ui/button";
import { Mic, Music, TrendingUp, Zap } from "lucide-react";
import graceaiHero from "@/assets/graceai-hero.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-dark relative overflow-hidden">
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
                Perfect Your
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Music Practice
                </span>
                with AI
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Record your practice sessions, get instant AI-powered feedback on accuracy, 
                timing, and rhythm. Transform how you learn music with GraceAI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group">
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Download for iOS
              </Button>
              <Button variant="glow" size="xl">
                <Music className="w-5 h-5" />
                Watch Demo
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

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={graceaiHero} 
                alt="GraceAI App Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full shadow-glow-primary animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-glow rounded-full shadow-glow-secondary animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};