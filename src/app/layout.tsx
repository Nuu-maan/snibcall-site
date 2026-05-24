import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "snibcall — Discord's premier voice & call bot",
  description:
    "Premium moderation, voice features, and integrations for your Discord community. Built for servers that demand more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn("dark h-full", "antialiased", geistMono.variable)}
      lang="en"
    >
      <head>
        <link href="https://api.fontshare.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://cdn.fontshare.com"
          rel="preconnect"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden font-satoshi antialiased">
        {children}
      </body>
    </html>
  );
}
