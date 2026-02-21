import { Link } from "react-router-dom";

const PrivacyPolicyLLC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-1">GraceAI Innovations LLC</h2>
        <p className="text-gray-500 mb-10">Effective Date: 2/18/26</p>

        <p className="mb-8 text-gray-700">
          GraceAI Innovations LLC ("Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or communicate with us via phone, SMS, or other channels.
        </p>

        <Section title="1. Information We Collect">
          <p className="mb-3">We may collect the following personal information:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>First and last name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Service address</li>
            <li>Details related to roofing service inquiries</li>
            <li>Communication preferences</li>
            <li>Call recordings (where applicable)</li>
          </ul>
          <p className="mb-3">Information may be collected through:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Website forms</li>
            <li>Phone calls</li>
            <li>SMS communications</li>
            <li>Customer support interactions</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p className="mb-3">We use collected information to:</p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Respond to service inquiries</li>
            <li>Schedule inspections or appointments</li>
            <li>Send appointment confirmations and reminders</li>
            <li>Provide service updates</li>
            <li>Deliver customer support</li>
            <li>Improve our services</li>
            <li>Maintain internal business records</li>
          </ul>
          <p className="font-semibold">We do not sell your personal information.</p>
        </Section>

        <Section title="3. SMS Communications">
          <p className="mb-3">By submitting our website form and checking the consent box, you agree to receive SMS messages from GraceAI Innovations LLC regarding:</p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Appointment scheduling</li>
            <li>Service updates</li>
            <li>Inspection confirmations</li>
            <li>Follow-up communications</li>
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

        <Section title="4. Mobile Information Sharing">
          <p className="mb-3">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</p>
          <p>All categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
        </Section>

        <Section title="5. Cookies & Tracking">
          <p className="mb-3">Our website may use cookies and tracking technologies to:</p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Improve website functionality</li>
            <li>Analyze traffic patterns</li>
            <li>Enhance user experience</li>
          </ul>
          <p>You may disable cookies in your browser settings.</p>
        </Section>

        <Section title="6. Data Security">
          <p className="mb-2">We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, misuse, or disclosure.</p>
          <p>However, no online transmission is 100% secure.</p>
        </Section>

        <Section title="7. User Rights">
          <p className="mb-3">You may request:</p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal data (where legally permissible)</li>
          </ul>
          <p>To make a request, contact us at the information below.</p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>We may update this Privacy Policy periodically. Updates will be posted on this page with a revised effective date.</p>
        </Section>

        <Section title="10. Contact Information">
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

export default PrivacyPolicyLLC;
