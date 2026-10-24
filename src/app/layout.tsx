import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saffronandstone.in"),
  title: {
    default: "Saffron & Stone — Fine Dining | Pune, Maharashtra",
    template: "%s | Saffron & Stone",
  },
  description:
    "Saffron & Stone is Pune's premier fine dining destination offering Modern Indian & Continental cuisine. Where Every Bite Tells a Story.",
  keywords: [
    "fine dining Pune",
    "Modern Indian restaurant Pune",
    "best restaurant Pune",
    "Saffron and Stone",
    "Continental restaurant Pune",
    "luxury dining Maharashtra",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://saffronandstone.in",
    siteName: "Saffron & Stone",
    title: "Saffron & Stone — Where Every Bite Tells a Story",
    description:
      "Experience Modern Indian & Continental fine dining in Pune. Signature dishes crafted with heritage spices and artisanal technique.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Saffron & Stone Restaurant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saffron & Stone",
    description: "Fine Dining in Pune — Where Every Bite Tells a Story",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="bg-surface-base text-cream overflow-x-hidden">
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
