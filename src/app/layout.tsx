import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CloudCalc – Webflow Cloud App",
  description: "Interactive pricing calculator built with Next.js + Tailwind + Webflow Cloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-black`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <h1 className="text-lg font-bold text-black">CloudCalc</h1>
          <ul className="flex gap-6 font-medium text-sm text-black">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Page Content */}
        <main className="px-6 py-12 min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="border-t p-6 text-center text-sm text-black-500">
          © 2025 CloudCalc. Built with Webflow Cloud ✨
        </footer>
      </body>
    </html>
  );
}
