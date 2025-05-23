import type { Metadata } from "next";
import "./globals.css";

import { fontHeading, fontSans } from "@/lib/fonts";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "KidLink - Nursery Management System",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
