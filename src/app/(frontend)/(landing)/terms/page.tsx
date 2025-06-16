import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 lg:px-8 h-16 flex items-center justify-between border-b border-gray-100">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo-min.png"
            className="w-7 h-7"
            alt="Kidlink Logo"
            width={50}
            height={50}
          />
          <span className="ml-2 text-lg font-semibold text-gray-900">
            kidlink
          </span>
        </Link>

        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions – Kidlink</h1>
        
        <div className="text-sm text-muted-foreground mb-6">
          <p>Effective Date: June 15, 2025</p>
          <p>Last Updated: June 15, 2025</p>
        </div>

        <p className="mb-6">
          Welcome to Kidlink, a platform by MindTech Innovations LLC offering parental control, educational content, 
          and teacher feedback tools for families and nursery environments. By accessing or using Kidlink via our 
          mobile apps or web portal, you agree to be bound by these Terms and Conditions ("Terms"). If you do not 
          agree, please discontinue use of the service.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Eligibility</h2>
          <p>
            Kidlink is designed for use by parents, children (via guardians), teachers, and nursery administrators. 
            Use of the platform is only permitted under adult supervision and in accordance with applicable laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. User Accounts</h2>
          <p>
            Registration is not required to access the main features of Kidlink. However, users may provide 
            information to personalize their experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Acceptable Use</h2>
          <p className="mb-2">You agree not to misuse Kidlink. You must not:</p>
          <ul className="list-disc pl-6">
            <li>Share harmful, offensive, or misleading content</li>
            <li>Upload content violating any third-party rights</li>
            <li>Interfere with the normal functioning of the app or site</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. User-Generated Content</h2>
          <p>
            You may submit content (e.g., child feedback, educational notes). By doing so, you grant us a 
            non-exclusive license to use, store, and display such content for operational purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Collection</h2>
          <p className="mb-2">We collect limited personal data including:</p>
          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Email</li>
            <li>Age</li>
            <li>Device information</li>
          </ul>
          <p className="mt-2">
            We do not use third-party analytics or advertising services. All data is handled in accordance 
            with relevant data protection laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy for detailed information on 
            how we collect, store, and use your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Payments and Refunds</h2>
          <p>
            Kidlink operates on a freemium model, offering basic features for free and optional upgrades or subscriptions.
            All payments made are non-refundable, unless otherwise required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Intellectual Property</h2>
          <p>
            All content, branding, and features are the property of MindTech Innovations LLC. You may not reproduce 
            or reuse any part of the platform without express written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p>
            Kidlink is provided "as is" without any warranties. MindTech Innovations LLC is not liable for any 
            indirect or consequential damages arising from the use of the service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Dubai, United Arab Emirates. Any legal disputes shall be 
            resolved in the courts of Dubai.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Changes will be communicated via the app or our website. 
            Continued use after updates constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
          <p>For questions or support, contact:</p>
          <p className="flex items-center mt-2">📧 <a href="mailto:info@kidlink.ae" className="text-primary ml-2 hover:underline">info@kidlink.ae</a></p>
          <p className="flex items-center mt-1">🌐 <a href="https://kidlink.app" className="text-primary ml-2 hover:underline">https://kidlink.app</a></p>
        </section>
      </div>
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-8 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kidlink. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
