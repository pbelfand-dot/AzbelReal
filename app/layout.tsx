import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azbel Real Estate | Brooklyn's Trusted Real Estate Experts",
  description: "Azbel Real Estate — find your dream home in Brooklyn, NY. Expert listings, mortgage tools, and personalized service.",
  keywords: "Brooklyn real estate, apartments Brooklyn, Coney Island homes, buy apartment Brooklyn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-full`}>{children}</body>
    </html>
  );
}
