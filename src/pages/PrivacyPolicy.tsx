import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">GraceAI Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Effective Date: October 4, 2025</p>
          
          <p className="text-muted-foreground mb-8">
            At GraceAI, we value your privacy. This policy explains how we collect, use, and protect your information.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Account information (name, email address)</li>
              <li>Audio recordings of your musical practice sessions</li>
              <li>Sheet music files you upload</li>
              <li>Usage data and analytics to improve our service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide AI-powered music analysis and feedback</li>
              <li>Process and analyze your audio recordings</li>
              <li>Improve our platform and develop new features</li>
              <li>Communicate with you about your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Storage & Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the internet is 100% secure. We do not sell or share your data with third parties 
              without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or transfer your personal information to third parties, except:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>When required by law</li>
              <li>With service providers who help operate our platform</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Request a copy of your data</li>
              <li>Opt out of certain communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy as needed. Continued use of our service implies acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground">
              For any privacy-related questions, email us at: <a href="mailto:darsh@graceai.music" className="text-primary hover:underline">darsh@graceai.music</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;