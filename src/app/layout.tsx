import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuil4tu.dev"),
  title: {
    default: "tuil4tu — Software Engineer",
    template: "%s — tuil4tu",
  },
  description:
    "Portfolio của tuil4tu (18 tuổi) — Software Engineer. Kỹ năng, dự án và liên hệ.",
  keywords: [
    "tuil4tu",
    "portfolio",
    "software engineer",
    "typescript",
    "react",
    "nextjs",
    "tailwindcss",
  ],
  authors: [{ name: "tuil4tu" }],
  openGraph: {
    title: "tuil4tu — Software Engineer",
    description:
      "Portfolio của tuil4tu (18 tuổi) — Software Engineer. Kỹ năng, dự án và liên hệ.",
    url: "/",
    siteName: "tuil4tu.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tuil4tu — Software Engineer",
    description:
      "Portfolio của tuil4tu (18 tuổi) — Software Engineer. Kỹ năng, dự án và liên hệ.",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
