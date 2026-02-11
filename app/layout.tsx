import type { Metadata } from "next";
import "./globals.css";
import { inter, playfairDisplay } from './fonts'

export const metadata: Metadata = {
  title: "Up Consulting Vaš partner za Vander Elst vize",
  description: "Nemam jos opisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body suppressHydrationWarning={true} className="antialiased">
        {children}
      </body>
    </html>
  );
}
