import type { Metadata } from "next";
import "./globals.css";
import { inter, playfairDisplay } from './fonts'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
 title: "Vander Elst Viza | UP Consulting",
  description: "Stručna pomoć pri ishođenju Vander Elst viza za rad u Njemačkoj. Kompletna administrativna podrška za hrvatske poslodavce i njihove radnike.",
  keywords: [
    "Vander Elst viza", 
    "izaslani radnici Njemačka", 
    "radne dozvole za Njemačku", 
    "terenski rad Njemačka", 
    "poslovno savjetovanje", 
    "administrativna podrška vize",
    "UP Consulting vize"
  ],
  openGraph: {
    title: "UP Consulting | Vander Elst Vize za Njemačku",
    description: "Osigurajte legalan rad svojih radnika u Njemačkoj bez administrativnih zastoja.",
    url: "https://up-consulting.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://up-consulting.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "UP Consulting - Stručnjaci za Vander Elst vize",
      },
    ],
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
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body suppressHydrationWarning={true} className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
