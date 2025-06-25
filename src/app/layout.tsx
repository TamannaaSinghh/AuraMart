import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AuraMart",
  description: "NextJs Shopping Website",
  icons: {
    icon : [
      {
        media: '(prefers-color-scheme: light)',
        url : "/images/openLight.png",
        href : "/images/openLight.png"
      },
      {
        media: '(prefers-color-scheme: dark)',
        url : "/images/openDark.png",
        href : "/images/openDark.png"
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderTop/>
        <HeaderMain/>
        <Navbar/>
        
        {children}
      </body>
    </html>
  );
}
