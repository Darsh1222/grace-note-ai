import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Mic, Brain, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      step: "01",
      title: "Record Your Practice",
      description: "Use your iPhone to record yourself playing any piece of music. Our app captures high-quality audio for precise analysis.",
      color: "primary"
    },
    {
      icon: Upload,
      step: "02", 
      title: "Upload Sheet Music",
      description: "Take a photo or upload the sheet music for the piece you're practicing. GraceAI will analyze and digitize it instantly.",
      color: "secondary"
    },
    {
      icon: Brain,
      step: "03",
      title: "AI Analysis",
      description: "Our advanced AI compares your performance against the sheet music, analyzing accuracy, timing, rhythm, and missed notes.",
      color: "accent"
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Get Feedback & Improve",
      description: "Receive detailed feedback, personalized recommendations, and track your progress over time to become a better musician.",
      color: "primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">GraceAI</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your practice sessions in four simple steps with AI-powered music analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 p-6 relative overflow-hidden group hover:shadow-glow-primary transition-smooth">
              {/* Step number background */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10 group-hover:text-primary/10 transition-smooth">
                {step.step}
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                  step.color === 'primary' ? 'from-primary to-primary-glow' :
                  step.color === 'secondary' ? 'from-secondary to-secondary-glow' :
                  'from-accent to-accent-glow'
                } flex items-center justify-center shadow-purple group-hover:shadow-glow-primary transition-smooth`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-primary font-semibold">
                      STEP {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-border to-transparent transform -translate-y-1/2 z-20"></div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};