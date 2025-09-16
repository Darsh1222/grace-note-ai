import { Card } from "@/components/ui/card";
import { Brain, Clock, LineChart, Music2, Smartphone, Target } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your performance against sheet music, detecting accuracy, timing, and rhythm with precision.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Music2,
      title: "Sheet Music Integration",
      description: "Upload any sheet music and get real-time comparison with your performance. Perfect for classical, jazz, or contemporary pieces.",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: LineChart,
      title: "Progress Tracking",
      description: "Beautiful charts show your improvement over time. Track accuracy rates, identify problem areas, and celebrate your growth.",
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Target,
      title: "Personalized Feedback",
      description: "Get specific recommendations on which sections to practice, tempo adjustments, and technique improvements.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Clock,
      title: "Session History",
      description: "Complete history of all practice sessions with filtering by date, piece, or performance metrics.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Smartphone,
      title: "Cloud Sync",
      description: "Your practice data syncs across all devices. Start on your iPhone, review on your iPad, perfect anywhere.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Musicians</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GraceAI combines cutting-edge AI technology with intuitive design to revolutionize how you practice music.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 p-6 hover:shadow-glow-primary transition-smooth group">
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-purple group-hover:shadow-glow-primary transition-smooth`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};