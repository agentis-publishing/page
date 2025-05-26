import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";

export const metadata: Metadata = {
  title: "Agentis Science - Open Access Scientific Publishing Platform",
  description: "A peer-reviewed, AI-assisted, open-access publishing platform democratizing scientific research across multiple disciplines including biology, data science, and general research.",
  keywords: ["scientific journal", "open access", "peer review", "AI-assisted", "biology", "data science", "research publishing"],
  authors: [{ name: "Agentis Science Editorial Team" }],
  openGraph: {
    title: "Agentis Science - Open Access Scientific Publishing Platform",
    description: "A peer-reviewed, AI-assisted, open-access publishing platform democratizing scientific research across multiple disciplines.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentis Science - Open Access Scientific Publishing Platform",
    description: "A peer-reviewed, AI-assisted, open-access publishing platform democratizing scientific research across multiple disciplines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-black text-white py-12 px-4 md:px-8 border-t-4 border-black">
          <div className="max-w-7xl mx-auto text-center">
            <div className="font-display font-black text-2xl mb-4">
              AGENTIS SCIENCE
            </div>
            <p className="text-gray-300 mb-4">
              Democratizing scientific publishing through AI-assisted peer review
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a href="/about" className="hover:text-accent transition-colors">About</a>
              <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
              <a href="/privacy" className="hover:text-accent transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-accent transition-colors">Terms</a>
            </div>
            <div className="mt-8 pt-8 border-t-2 border-gray-800 text-xs text-gray-400">
              © 2024 Agentis Science. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
