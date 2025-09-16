import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Apple, Download, Star } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 p-8 lg:p-12 shadow-elegant">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Ready to Transform Your
                  <span className="bg-gradient-primary bg-clip-text text-transparent block">
                    Music Practice?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Be among the first musicians to experience the future of intelligent practice analysis with GraceAI.
                </p>
              </div>

              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-primary">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Coming Soon to the App Store</span>
              </div>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="xl" className="group" disabled>
                  <Apple className="w-6 h-6 group-hover:scale-110 transition-smooth" />
                  Download for iOS
                </Button>
                <Button variant="glow" size="xl">
                  <Download className="w-5 h-5" />
                  Join Waitlist
                </Button>
              </div>

              {/* Features highlight */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">AI-Powered</div>
                  <p className="text-sm text-muted-foreground">Advanced music analysis</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-secondary">Real-Time</div>
                  <p className="text-sm text-muted-foreground">Instant feedback</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">Cloud Sync</div>
                  <p className="text-sm text-muted-foreground">Access anywhere</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};