import { Link } from "react-router-dom";

const TermsOfServiceLLC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-1">GraceAI Innovations LLC</h2>
        <p className="text-gray-500 mb-10">Effective Date: 2/18/26</p>

        <p className="mb-8 text-gray-700">
          By accessing this website or communicating with GraceAI Innovations LLC, you agree to the following Terms of Service.
        </p>

        <Section title="1. Use of Services">
          <p className="mb-2">GraceAI Innovations LLC provides informational and service-related communications for roofing inquiries, inspections, and related services.</p>
          <p>Use of our website or services does not create a binding service contract unless otherwise agreed upon in writing.</p>
        </Section>

        <Section title="2. SMS Terms & Conditions">
          <p className="mb-3">By submitting the website form and checking the consent box, you agree to receive SMS messages from GraceAI Innovations LLC regarding:</p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Service inquiries</li>
            <li>Appointment confirmations</li>
            <li>Scheduling updates</li>
            <li>Customer support communications</li>
          </ul>
          <p className="mb-2">Message frequency varies based on your interaction with us.</p>
          <p className="mb-2">Message and data rates may apply.</p>
          <p className="mb-2">You may opt out at any time by replying:</p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li><strong>STOP</strong> to unsubscribe</li>
            <li><strong>HELP</strong> for assistance</li>
          </ul>
          <p className="font-semibold">SMS consent is not a condition of purchase.</p>
        </Section>

        <Section title="3. Carrier Disclaimer">
          <p>Carriers are not liable for delayed or undelivered messages.</p>
        </Section>

        <Section title="4. Age Restriction">
          <p>You must be at least 18 years old to use our services.</p>
        </Section>

        <Section title="5. Limitation of Liability">
          <p>GraceAI Innovations LLC is not liable for indirect, incidental, or consequential damages resulting from the use of our website or services.</p>
        </Section>

        <Section title="6. Privacy">
          <p>Your use of our services is also governed by our <Link to="/privacy-policy-llc" className="text-blue-600 hover:underline">Privacy Policy</Link>.</p>
        </Section>

        <Section title="7. Modifications">
          <p>We reserve the right to modify these Terms at any time. Updated terms will be posted on this page.</p>
        </Section>

        <Section title="8. Contact Information">
          <p className="mb-1">GraceAI Innovations LLC</p>
          <p className="mb-1">Ellicott City, MD 21042</p>
          <p className="mb-1">Phone: <a href="tel:4103020033" className="text-blue-600 hover:underline">410-302-0033</a></p>
          <p>Email: <a href="mailto:darsh@graceai.music" className="text-blue-600 hover:underline">darsh@graceai.music</a></p>
        </Section>

        <div className="pt-8 text-center">
          <Link to="/roofing-request" className="text-blue-600 hover:underline text-sm">← Back to Form</Link>
        </div>
      </main>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <div className="text-gray-700">{children}</div>
  </section>
);

export default TermsOfServiceLLC;
