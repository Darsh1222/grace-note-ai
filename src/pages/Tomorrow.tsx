import { useEffect } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Tomorrow = () => {
  useEffect(() => {
    document.title = "Tomorrow, by GraceAI Innovations LLC";
    return () => {
      document.title = "GraceAI - AI-Powered Music Practice Analysis";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Product badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-primary">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">A product of GraceAI Innovations LLC</span>
            </div>

            {/* Title */}
            <h1 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight">
              Tomorrow,
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                by GraceAI Innovations LLC
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Tomorrow is an AI planning assistant you can text. It keeps your list,
              builds your plan, and reminds you at the right moment. Tomorrow is a
              product of GraceAI Innovations LLC.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Button variant="hero" size="xl" className="group" asChild>
                <a
                  href="https://bettertmrw.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Tomorrow
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
            </div>

            {/* Links */}
            <div className="mt-14 border-t border-border/50 pt-8">
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <a
                  href="https://bettertmrw.app/sms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Text message terms
                </a>
                <a
                  href="https://bettertmrw.app/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Privacy
                </a>
                <a
                  href="https://bettertmrw.app/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tomorrow;
