// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Anusua Roy – Portfolio",
  description: "Frontend Engineer | React | MFE | AI Projects",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
