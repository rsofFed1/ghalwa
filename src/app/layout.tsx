'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { Readex_Pro } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const AnalyticsScripts = dynamic(() => import('@/components/AnalyticsScripts'), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ar" dir="rtl">
    <head>
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="preconnect" href="https://www.facebook.com" />
      <link rel="preconnect" href="https://analytics.tiktok.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${readexPro.variable} antialiased`}
      >
        <AnalyticsScripts />
        <Header />
        <main className="min-h-screen overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

