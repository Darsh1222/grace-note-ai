import { CheckCircle2, Clock, Star, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const roadmapItems = [
  {
    version: "Eos",
    title: "GraceAI eos1.1",
    status: "current",
    icon: CheckCircle2,
    features: [
      "AI-powered music practice analysis",
      "Real-time feedback system",
      "Performance tracking",
      "Mobile app for iOS & Android"
    ],
    timeline: "Launching Very Soon (This Month)"
  },
  {
    version: "Thalia",
    title: "GraceAI thalia2.4",
    status: "upcoming",
    icon: Clock,
    features: [
      "Applying user feedback",
      "UX design changes",
      "Enhanced user experience",
      "Improved interface design"
    ],
    timeline: "Coming Soon"
  },
  {
    version: "???",
    title: "GraceAI",
    titleBlurred: "nexus4.7",
    status: "locked",
    icon: Star,
    features: [
      "AI coaching integrated",
      "Grace AI chatbot",
      "Advanced practice guidance",
      "Personalized learning paths"
    ],
    timeline: "Down the Road"
  },
  {
    version: "???",
    title: "GraceAI",
    titleBlurred: "harmony8.2",
    status: "locked",
    icon: Zap,
    features: [
      "Multi instrument processing",
      "Increased accuracy",
      "Enhanced audio analysis",
      "Professional-grade feedback"
    ],
    timeline: "Down the Road"
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
            
            // Define hover colors for each version
            const getColorOverlay = () => {
              if (item.status === 'current') return 'hsl(var(--primary))';
              if (item.status === 'upcoming') return 'hsl(var(--secondary))';
              if (index === 2) return 'hsl(0, 70%, 50%)'; // Red for AI coaching
              if (index === 3) return 'hsl(260, 70%, 50%)'; // Purple for multi-instrument
              return 'hsl(var(--primary))';
            };
            
            return (
              <Card 
                key={item.version}
                className={`p-6 bg-gradient-card border-border/50 relative overflow-hidden group transition-smooth ${
                  item.status === 'current' ? 'ring-2 ring-primary/50' : ''
                } ${
                  item.status === 'upcoming' ? 'opacity-90' : ''
                } ${
                  item.status === 'locked' ? 'opacity-60 hover:opacity-70' : ''
                }`}
                style={{
                  ['--hover-color' as any]: getColorOverlay()
                }}
              >
                {/* Animated color overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"
                  style={{
                    background: `var(--hover-color)`,
                    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === 'current' 
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : item.status === 'upcoming'
                        ? 'bg-secondary/20 text-secondary border border-secondary/30'
                        : 'bg-muted/40 text-muted-foreground border border-muted/50'
                    }`}>
                      {item.version}
                    </span>
                    <Icon className={`w-6 h-6 ${
                      item.status === 'current' 
                        ? 'text-primary' 
                        : item.status === 'upcoming'
                        ? 'text-muted-foreground'
                        : 'text-muted-foreground/60'
                    }`} />
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${
                    item.status === 'locked' ? 'text-muted-foreground' : 'text-foreground'
                  }`}>
                    {item.title}
                    {item.titleBlurred && (
                      <span className="ml-1 filter blur-[1px] select-none opacity-70">
                        {item.titleBlurred}
                      </span>
                    )}
                  </h3>

                  <p className={`text-sm mb-4 ${
                    item.status === 'locked' ? 'text-muted-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {item.timeline}
                  </p>

                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          item.status === 'locked' ? 'bg-muted-foreground/40' : 'bg-primary/60'
                        }`} />
                        <span className={
                          item.status === 'locked' ? 'text-muted-foreground/70' : 'text-muted-foreground'
                        }>{feature}</span>
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