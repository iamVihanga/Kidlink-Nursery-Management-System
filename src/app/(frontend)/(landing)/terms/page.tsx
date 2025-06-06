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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Terms and Conditions
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: June 1, 2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Kidlink, you agree to be bound by these
                Terms and Conditions and all applicable laws and regulations. If
                you do not agree with any of these terms, you are prohibited
                from using or accessing Kidlink.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. User Accounts
              </h2>
              <p className="mb-4">
                When you create an account with us, you must provide accurate,
                complete, and current information. You are responsible for
                safeguarding the password and for all activities that occur
                under your account.
              </p>
              <p>
                You agree to notify us immediately of any unauthorized access to
                your account or any other breach of security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. User Roles and Responsibilities
              </h2>

              <h3 className="text-lg font-medium mb-2">
                3.1 Nursery Owners/Administrators
              </h3>
              <p className="mb-4">
                As a nursery owner or administrator, you are responsible for:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Providing accurate information about your nursery</li>
                <li>Managing teacher accounts and parent invitations</li>
                <li>Ensuring appropriate use of the platform by your staff</li>
                <li>
                  {`Maintaining confidentiality of children's and parents'
                  information`}
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">3.2 Teachers</h3>
              <p className="mb-4">As a teacher, you are responsible for:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Creating appropriate content for lesson plans</li>
                <li>Providing accurate feedback about children</li>
                <li>
                  Maintaining professional conduct when using the platform
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">3.3 Parents</h3>
              <p className="mb-4">As a parent, you are responsible for:</p>
              <ul className="list-disc pl-5">
                <li>Providing accurate information about your children</li>
                <li>Using the platform in accordance with these terms</li>
                <li>Respecting the privacy of other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Payments and Subscriptions
              </h2>
              <p className="mb-4">
                Some features of Kidlink may require payment or subscription. By
                subscribing to our paid services, you agree to pay all fees in
                accordance with the pricing and terms displayed at the time of
                purchase.
              </p>
              <p>
                We reserve the right to change our pricing structure at any
                time. Any changes will be communicated in advance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Content
              </h2>
              <p className="mb-4">
                Users retain ownership of any intellectual property rights they
                hold in the content they upload to Kidlink. By uploading
                content, you grant Kidlink a worldwide, non-exclusive license to
                use, reproduce, modify, and display the content in connection
                with the service.
              </p>
              <p>
                You are responsible for ensuring that you have the necessary
                rights to any content you upload or share through our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Prohibited Activities
              </h2>
              <p className="mb-4">
                You may not engage in any of the following activities:
              </p>
              <ul className="list-disc pl-5">
                <li>Using the service for any unlawful purpose</li>
                <li>Uploading or sharing inappropriate or harmful content</li>
                <li>
                  {`Attempting to gain unauthorized access to other users'
                  accounts`}
                </li>
                <li>Interfering with the proper functioning of the service</li>
                <li>Impersonating another person or entity</li>
                <li>
                  Using the service to collect personal information about users
                  without their consent
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Kidlink shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of or inability to use
                the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Termination
              </h2>
              <p>
                We may terminate or suspend your account and access to the
                service at our sole discretion, without prior notice, for
                conduct that we believe violates these Terms or is harmful to
                other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Changes to These Terms
              </h2>
              <p>
                {`We reserve the right to modify these Terms at any time. We will
                notify you of any changes by posting the new Terms on this page
                and updating the "Last Updated" date.`}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
                <br />
                Email: legal@kidlink.com
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
