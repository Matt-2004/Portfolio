import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning className="font-body">
        <Analytics />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
