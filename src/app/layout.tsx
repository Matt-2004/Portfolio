import type { Metadata } from "next";
import { Syne, DM_Sans, Raleway, Merriweather, JetBrains_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "../lib/LanguageContext";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-merriweather",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wai Yan Aung | Front-End Engineer",
  description:
    "Portfolio of Wai Yan Aung — building performant, design-driven web experiences with Next.js, React, and TypeScript.",
  keywords: [
    "Wai Yan Aung",
    "Portfolio",
    "Front-End Engineer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Wai Yan Aung" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Wai Yan Aung | Front-End Engineer",
    description:
      "Portfolio of Wai Yan Aung — building performant, design-driven web experiences.",
    siteName: "Wai Yan Aung Portfolio",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${raleway.variable} ${merriweather.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning className="font-body">
        <Analytics />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
