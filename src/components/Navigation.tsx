import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import graceaiLogo from "@/assets/graceai-logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img src={graceaiLogo} alt="GraceAI Logo" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GraceAI
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-foreground transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              What's Inside
            </a>
            <a 
              href="#how-it-works" 
              className="text-muted-foreground hover:text-foreground transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Getting Started
            </a>
            <a 
              href="#download" 
              className="text-muted-foreground hover:text-foreground transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Download
            </a>
            <a 
              href="#about-developer" 
              className="text-muted-foreground hover:text-foreground transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about-developer')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About the Developer
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="glow" 
              size="sm"
              asChild
            >
              <a 
                href="https://apps.apple.com/us/app/graceai-master-your-music/id6753151596"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};