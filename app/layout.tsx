import type { Metadata } from "next";
import "./globals.css";
import { inter, playfairDisplay } from './fonts'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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
      
       <head>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=AW-18004352296"
      strategy="afterInteractive"
    />
    <Script id="google-ads">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18004352296');
      `}
    </Script>
<Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K276V2QF');
          `}
        </Script>


    <link 
      rel="preload" 
      as="image" 
      href="/hero.png" 
      type="image/png"
    />
  </head>
      <body suppressHydrationWarning={true} className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K276V2QF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
