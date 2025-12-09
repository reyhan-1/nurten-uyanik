import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/app/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nurten Uyanık Soğuk Porselen Esnek Porselen Figür Hamuru Clay Art",
  description:
    "Nurten Uyanık Soğuk Porselen Esnek Porselen Figür Hamuru Clay Art",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f8f1e7] text-slate-900`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
