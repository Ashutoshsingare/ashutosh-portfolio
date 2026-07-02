import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ashutosh Singare | AI Engineer & Full Stack Developer",
  description: "Awwwards-level creative developer specializing in Next.js, Framer Motion, and high-performance Canvas & Scrollytelling interactions.",
  keywords: ["Creative Developer", "Next.js", "Scrollytelling", "Framer Motion", "Portfolio", "HTML5 Canvas", "TypeScript"],
  icons: {
    icon: [
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.ico?v=3" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/logo.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased bg-[#0d0f12] text-[#eef1f5]`}>
      <body className="bg-[#0d0f12] selection:bg-accent/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
