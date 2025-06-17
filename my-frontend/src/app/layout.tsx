import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/GlobalComp/providers";
import LayoutWrapper from "@/components/GlobalComp/LayoutWrapper";
import { ReactNode } from "react"; // Import ReactNode for typing

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Himalyan Khadu",
  description: "Tour and Travel Agency",
};

interface RootLayoutProps {
  children: ReactNode; // Explicitly typing children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
