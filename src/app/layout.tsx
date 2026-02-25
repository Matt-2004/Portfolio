import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // optional, helps prevent layout shift
});




export const metadata: Metadata = {
  title: "Wai Yan Aung - Portfolio",
  description: "Frontend Developer portfolio of Wai Yan Aung",
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
    <html lang='en'>
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  );
}
