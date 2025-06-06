import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 lg:px-8 h-16 flex items-center justify-between">
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

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            Log In
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            Sign Up
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {`Your child's`}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                nursery journey
              </span>{" "}
              connected
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kidlink helps nursery admins, teachers, and parents collaborate
              through seamless communication and shared updates
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-base"
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base"
            >
              Watch Demo
            </Button>
          </div>

          {/* App Download */}
          <div className="pt-8 space-y-4">
            <p className="text-sm text-gray-500">Available on mobile</p>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                className="h-12 px-4 border-gray-200 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                    <FaApple className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 leading-none">
                      Download on
                    </div>
                    <div className="text-sm font-medium text-gray-900 leading-none">
                      App Store
                    </div>
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-12 px-4 border-gray-200 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded flex items-center justify-center">
                    <FaGooglePlay className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 leading-none">
                      Get it on
                    </div>
                    <div className="text-sm font-medium text-gray-900 leading-none">
                      Google Play
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="px-6 lg:px-8 py-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kidlink. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms
            </Link>
            <Link
              href="#"
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
