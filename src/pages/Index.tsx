import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Roadmap } from "@/components/Roadmap";
import { DownloadSection } from "@/components/DownloadSection";
import { OurProducts } from "@/components/OurProducts";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Roadmap />
        <Features />
        <HowItWorks />
        <OurProducts />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
