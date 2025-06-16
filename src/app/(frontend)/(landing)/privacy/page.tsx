import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-6">Privacy Policy – Kidlink</h1>
          
          <div className="text-sm text-muted-foreground mb-6">
            <p>Effective Date: June 15, 2025</p>
            <p>Last Updated: June 15, 2025</p>
          </div>

          <p className="mb-6">
            Welcome to Kidlink, a digital platform developed by MindTech Innovations LLC, Dubai, designed for parents, 
            children, teachers, and nursery administrators to enhance communication and learning experiences. 
            Your privacy is important to us, and this Privacy Policy explains how we collect, use, and 
            protect your personal information.
          </p>

          <p className="mb-6">
            By using Kidlink via our mobile apps or website (https://kidlink.app), you agree to this policy.
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="mb-2">We collect the following types of personal and device information:</p>
            <ul className="list-disc pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Age or child's date of birth (if provided)</li>
              <li>Device information (e.g., operating system, device type)</li>
            </ul>
            <p className="mt-2">We collect only the data necessary for providing and improving our services.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">We use the collected information to:</p>
            <ul className="list-disc pl-6">
              <li>Enable educational features and personalized experiences</li>
              <li>Provide feedback tools between teachers and parents</li>
              <li>Maintain platform functionality and user experience</li>
              <li>Communicate updates or support messages (if applicable)</li>
            </ul>
            <p className="mt-2">We do not use your data for advertising or marketing purposes.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Data Storage & Security</h2>
            <p>
              Your data is stored securely on our servers and protected by appropriate technical and organizational 
              measures. We strive to ensure your personal information is safe and prevent unauthorized access, 
              disclosure, or modification.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. No Third-Party Analytics or Advertising</h2>
            <p>
              Kidlink does not integrate third-party analytics tools (such as Google Analytics or Facebook SDKs), 
              and we do not serve advertisements through the platform.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. User-Generated Content</h2>
            <p>
              If you submit or upload any feedback, notes, or data via the app (e.g., teacher notes, child activity logs), 
              that content is stored securely and used only for intended platform features.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Children's Privacy</h2>
            <p className="mb-2">
              While Kidlink is not directly used by children under 13, it may contain information about them 
              (e.g., name, age, learning feedback) provided by parents or teachers. We ensure all such data is treated 
              with strict confidentiality and in compliance with applicable child protection laws.
            </p>
            <p>We do not knowingly collect data directly from children under 13.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
            <p>
              We retain user information only as long as necessary for the purposes described in this policy. 
              Users may request deletion of their data by contacting us.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access the data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, email us at <a href="mailto:info@kidlink.ae" className="text-primary hover:underline">info@kidlink.ae</a>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on our website and 
              notified in the app where appropriate. Continued use of the platform after such updates implies your 
              acceptance of the new policy.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>For questions, feedback, or data-related requests, contact us:</p>
            <p className="mt-2">MindTech Innovations LLC</p>
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
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700"
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