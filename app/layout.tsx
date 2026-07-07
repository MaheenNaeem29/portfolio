import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { bio, identity, siteUrl } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maheen Naeem — AI Engineer",
    template: "%s | Maheen Naeem — AI Engineer",
  },
  description: bio.summary,
  keywords: [
    "Maheen Naeem",
    "AI Engineer",
    "Agentic AI",
    "Deep Learning",
    "Machine Learning Engineer",
    "Multimodal Deep Learning",
    "Computer Vision",
    "LangChain",
    "PyTorch",
    "RAG",
  ],
  authors: [{ name: identity.name }],
  creator: identity.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Maheen Naeem — AI Engineer",
    title: "Maheen Naeem — AI Engineer",
    description: bio.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: "Maheen Naeem — AI Engineer",
    description: bio.summary,
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
