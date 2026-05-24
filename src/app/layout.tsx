import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "snibcall — a tiny phone for your server",
  description:
    "connect two discord servers and chat across them. messages relay via webhook with each user's name + avatar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        "dark h-full antialiased",
        geistSans.variable,
        geistMono.variable
      )}
      lang="en"
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
