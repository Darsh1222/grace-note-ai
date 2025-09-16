import graceaiLogo from "@/assets/graceai-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={graceaiLogo} alt="GraceAI Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GraceAI
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered music practice analysis for musicians who want to perfect their craft.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <div className="space-y-2 text-sm">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-smooth">Features</a>
              <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground transition-smooth">How It Works</a>
              <a href="#download" className="block text-muted-foreground hover:text-foreground transition-smooth">Download</a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <div className="space-y-2 text-sm">
              <a href="/privacy-policy" className="block text-muted-foreground hover:text-foreground transition-smooth">Privacy Policy</a>
              <a href="/terms-of-service" className="block text-muted-foreground hover:text-foreground transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 GraceAI. All rights reserved. Made with ❤️ for musicians.
          </p>
        </div>
      </div>
    </footer>
  );
};