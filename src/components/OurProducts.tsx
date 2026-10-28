import { Link } from "react-router-dom";
import { ArrowRight, Music2, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const products = [
  {
    icon: Music2,
    name: "GraceAI",
    tag: "Available now",
    gradient: "from-primary to-primary-glow",
    desc: "AI-powered music practice analysis — record a piece, get instant feedback on accuracy, timing, and rhythm, and watch your progress over time.",
    actionLabel: "Download for iOS",
    href: "https://apps.apple.com/us/app/graceai-master-your-music/id6753151596",
    external: true,
  },
  {
    icon: MessageSquare,
    name: "Tomorrow",
    tag: "Text-message planning",
    gradient: "from-secondary to-secondary-glow",
    desc: "An AI planning assistant you can text — it keeps your list, builds your plan, and reminds you at the right moment.",
    actionLabel: "Meet Tomorrow",
    href: "/tomorrow",
    external: false,
  },
];

export const OurProducts = () => {
  return (
    <section id="products" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two products from GraceAI Innovations LLC — one for your craft, one for your day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {products.map((p) => {
            const Icon = p.icon;
            const inner = (
              <Card className="h-full bg-gradient-card border-border/50 p-8 hover:border-primary/40 transition-smooth group">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <span className="text-xs text-muted-foreground border border-border/60 rounded-full px-2 py-0.5">
                    {p.tag}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  {p.actionLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </span>
              </Card>
            );

            return p.external ? (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {inner}
              </a>
            ) : (
              <Link key={p.name} to={p.href} className="block h-full">
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
