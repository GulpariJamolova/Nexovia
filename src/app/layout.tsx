import type { Metadata } from "next";
import { Suspense } from "react";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeedbackWidget from "@/components/feedback/FeedbackWidget"; // ADDED

const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Nexovia – Find your future career",
  description:
    "Discover careers that fit you, then learn what they're really like with examples, school subjects and challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} ${bricolage.variable} flex min-h-screen flex-col bg-offwhite text-ink antialiased`}
      >
        <Suspense fallback={<div className="h-16 border-b border-navy/10 bg-white" />}>
          <Header />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <FeedbackWidget /> {/* ADDED */}
      </body>
    </html>
  );
}
