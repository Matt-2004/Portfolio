import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wai Yan Aung | Full-Stack Developer",
  description:
    "Portfolio of Wai Yan Aung, a Full-Stack Developer specializing in Next.js, React, and Node.js. View my latest projects and skills.",
  keywords: [
    "Wai Yan Aung",
    "Portfolio",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Wai Yan Aung" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com", // You can replace this later
    title: "Wai Yan Aung | Full-Stack Developer",
    description:
      "Portfolio of Wai Yan Aung, a Full-Stack Developer specializing in Next.js, React, and Node.js. View my latest projects.",
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
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
