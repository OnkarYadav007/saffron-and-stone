import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#FAF8F5] overflow-x-hidden pt-20">
        <ScrollProgress />
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
