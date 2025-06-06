import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicyPage() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: June 1, 2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                {`At Kidlink ("we," "our," or "us"), we are committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our platform.`}
              </p>
              <p>
                {`By accessing or using Kidlink, you agree to this Privacy Policy.
                If you do not agree, please do not use our service.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-lg font-medium mb-2">
                2.1 Personal Information
              </h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Account information (name, email address, password)</li>
                <li>Profile information (profile picture, contact details)</li>
                <li>For nursery owners: business information, bank details</li>
                <li>
                  For parents: information about your children (name, age, etc.)
                </li>
                <li>
                  For teachers: professional qualifications and background
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-5">
                <li>
                  Device information (IP address, browser type, operating
                  system)
                </li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-5">
                <li>Providing and maintaining our service</li>
                <li>Processing payments</li>
                <li>
                  Facilitating communication between nurseries, teachers, and
                  parents
                </li>
                <li>Sending notifications and updates</li>
                <li>Improving our service and user experience</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {`5. Children's Privacy`}
              </h2>
              <p>
                {`Our service collects limited information about children through
                their parents or guardians. This information is used solely for
                the purposes of providing our educational services. We comply
                with applicable laws regarding children's privacy.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Sharing Information
              </h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-5">
                <li>
                  Nurseries, teachers, and parents as necessary for the service
                </li>
                <li>Service providers who assist in operating our platform</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-5">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                {`We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.`}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
                <br />
                Email: privacy@kidlink.com
                <br />
                Address: Kidlink Headquarters, 123 Education Lane, London, UK
              </p>
            </section>
          </div>
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
