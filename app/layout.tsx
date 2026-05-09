import type { Metadata } from "next";
import { Playfair_Display, Caveat, Lato } from "next/font/google";
import "./globals.css";
import siteData from "../data/site.json";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-accent",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: `${siteData.restaurant.name} | ${siteData.restaurant.taglineEn}`,
  description: siteData.restaurant.descriptionEn,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${caveat.variable} ${lato.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-body bg-bg text-text pt-20">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
