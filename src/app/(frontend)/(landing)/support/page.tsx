"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Check } from "lucide-react";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    // Reset submission state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            {`We're here to help! Get in touch with our support team or explore our resources.`}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and non-urgent support
              </p>
              <a
                href="mailto:support@kidlink.com"
                className="text-purple-600 font-medium"
              >
                support@kidlink.com
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Available Monday to Friday, 9am - 5pm GMT
              </p>
              <a href="tel:+441234567890" className="text-blue-600 font-medium">
                +44 (0) 123 456 7890
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Office Location</h3>
              <p className="text-gray-600 mb-4">Visit us at our headquarters</p>
              <address className="text-green-600 font-medium not-italic">
                123 Education Lane, London, UK
              </address>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How do I register my nursery?
                  </h3>
                  <p className="text-gray-600">
                    {`To register your nursery, sign up as a nursery owner and
                    follow the guided registration process. You'll need to
                    provide details about your nursery, including name, address,
                    and contact information.`}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How do parents join Kidlink?
                  </h3>
                  <p className="text-gray-600">
                    {`Parents receive an invitation from their child's nursery.
                    After accepting the invitation, they can create an account
                    and start accessing their child's information and updates.`}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Is there a mobile app available?
                  </h3>
                  <p className="text-gray-600">
                    Yes, Kidlink is available on both iOS and Android devices.
                    You can download the app from the App Store or Google Play
                    Store.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How secure is my data?
                  </h3>
                  <p className="text-gray-600">
                    We take data security seriously. All data is encrypted and
                    stored securely. We comply with data protection regulations
                    and have strict policies in place to protect your
                    information.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept major credit cards, bank transfers, and digital
                    payment methods. Payment options may vary by region.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <p className="text-green-800">
                    Thank you for your message! Our support team will get back
                    to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your inquiry about?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your issue or question"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between">
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
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
