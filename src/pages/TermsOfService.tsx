import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">GraceAI Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Effective Date: October 4, 2025</p>
          
          <p className="text-muted-foreground mb-8">
            Welcome to GraceAI. By using our website, app, or services, you agree to the following terms:
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Use of the Service</h2>
            <p className="text-muted-foreground mb-4">
              GraceAI provides tools to help users practice music, analyze performances, and receive AI-generated feedback. 
              You may not use the service for any unlawful or unauthorized purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Content & Uploads</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You are solely responsible for the music, recordings, or files you upload or use within the app.</li>
              <li>Do not upload copyrighted music or recordings you don't own or have permission to use.</li>
              <li>GraceAI does not host or distribute copyrighted music.</li>
              <li>GraceAI assumes no liability for any content uploaded by users.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Copyright & Ownership</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>All original content, visuals, and software provided by GraceAI are the property of the creator and protected under copyright law.</li>
              <li>Users retain ownership of their uploaded content but grant GraceAI the right to analyze it solely for practice feedback purposes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. No Guarantees</h2>
            <p className="text-muted-foreground mb-4">
              GraceAI is an educational tool. While we strive for accurate feedback and performance tracking, 
              we do not guarantee accuracy, outcomes, or musical improvement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">We are not responsible for:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Loss of data</li>
              <li>Inaccurate feedback</li>
              <li>Legal consequences from copyright misuse</li>
              <li>Any damages from using our service</li>
            </ul>
            <p className="text-muted-foreground mt-4">Use GraceAI at your own risk.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Privacy</h2>
            <p className="text-muted-foreground mb-4">
              We respect your data. Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes</h2>
            <p className="text-muted-foreground mb-4">
              We may update these terms as GraceAI grows. Continued use of the service implies acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
            <p className="text-muted-foreground">
              For any questions, email us at: <a href="mailto:darsh@graceai.music" className="text-primary hover:underline">darsh@graceai.music</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;