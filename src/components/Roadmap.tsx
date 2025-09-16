import { CheckCircle2, Clock, Star, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const roadmapItems = [
  {
    version: "v1.0",
    title: "Launch",
    status: "current",
    icon: CheckCircle2,
    features: [
      "AI-powered music practice analysis",
      "Real-time feedback system",
      "Basic performance tracking",
      "Mobile app for iOS & Android"
    ],
    timeline: "Available Now"
  },
  {
    version: "v1.1",
    title: "Enhanced Analytics",
    status: "upcoming",
    icon: Clock,
    features: [
      "Advanced practice insights",
      "Progress visualization charts",
      "Weekly/monthly reports",
      "Practice goal setting"
    ],
    timeline: "Coming Soon"
  },
  {
    version: "v2.0",
    title: "Community Features",
    status: "planned",
    icon: Star,
    features: [
      "Share practice sessions",
      "Collaborative learning",
      "Teacher-student connections",
      "Virtual practice rooms"
    ],
    timeline: "Future Release"
  },
  {
    version: "v3.0",
    title: "AI Composition Assistant",
    status: "planned",
    icon: Zap,
    features: [
      "AI-generated practice exercises",
      "Personalized difficulty scaling",
      "Smart practice recommendations",
      "Advanced AI coaching"
    ],
    timeline: "In Development"
  }
];

export const Roadmap = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what's coming next for GraceAI and how we're evolving to serve musicians better
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.version}
                className={`p-6 bg-gradient-card border-border/50 relative overflow-hidden group transition-smooth hover:shadow-glow-primary ${
                  item.status === 'current' ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === 'current' 
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : item.status === 'upcoming'
                        ? 'bg-secondary/20 text-secondary border border-secondary/30'
                        : 'bg-accent/20 text-accent-foreground border border-accent/30'
                    }`}>
                      {item.version}
                    </span>
                    <Icon className={`w-6 h-6 ${
                      item.status === 'current' ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {item.timeline}
                  </p>

                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connecting line for desktop */}
                {index < roadmapItems.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};