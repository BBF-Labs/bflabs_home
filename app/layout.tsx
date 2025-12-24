import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "BetaForge - Quiz Like An Outlier",
  description:
    "Transform your lecture notes into intelligent quizzes. Master any subject with AI-powered assessments.",
  generator: "BetaForge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-[oklch(0.10_0.01_260)]`}
        style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
