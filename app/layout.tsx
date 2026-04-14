import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/sections/Navbar";
import Footer from "../src/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jithin T | MERN Stack Developer",
  description:
    "Portfolio of Jithin T, a MERN stack developer specializing in scalable web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 text-black">
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}