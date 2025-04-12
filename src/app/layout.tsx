// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Anusua Roy – Portfolio",
  description: "Frontend Engineer | React | MFE | AI Projects",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph (for LinkedIn, WhatsApp, etc.) */}
        <meta property="og:title" content="Anusua Roy – Portfolio" />
        <meta
          property="og:description"
          content="Frontend Engineer specializing in React, Micro-Frontends, TypeScript, and AI projects."
        />
        <meta
          property="og:image"
          content="/preview.png" // <- add this to your /public folder
        />
        <meta
          property="og:url"
          content="https://my-portfolio-anusua-roys-projects.vercel.app"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anusua Roy – Portfolio" />
        <meta
          name="twitter:description"
          content="Frontend Engineer specializing in React, Micro-Frontends, TypeScript, and AI projects."
        />
        <meta name="twitter:image" content="/preview.png" />

        {/* Favicon & Theme */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen bg-inherit transition-colors duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
