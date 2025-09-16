import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using GraceAI, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-4">
              GraceAI is an AI-powered music practice analysis platform that provides feedback on musical performances 
              through audio analysis and comparison with sheet music.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              To access certain features of GraceAI, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and up-to-date information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use the service for any unlawful purpose</li>
              <li>Upload copyrighted material without permission</li>
              <li>Attempt to interfere with or disrupt the service</li>
              <li>Share your account with others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Content Ownership</h2>
            <p className="text-muted-foreground mb-4">
              You retain ownership of any audio recordings or sheet music you upload to GraceAI. 
              By uploading content, you grant us a license to process and analyze it to provide our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              We strive to maintain high availability of our service, but we do not guarantee uninterrupted access. 
              We may temporarily suspend the service for maintenance or updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              GraceAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your account at any time for violations of these terms. 
              You may also terminate your account at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these terms at any time. We will notify users of significant changes 
              via email or through our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at legal@graceai.com
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;