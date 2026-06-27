import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ashutosh Singare — Software Engineer & Creative Developer",
  description: "Awwwards-level creative developer specializing in Next.js, Framer Motion, and high-performance Canvas & Scrollytelling interactions.",
  keywords: ["Creative Developer", "Next.js", "Scrollytelling", "Framer Motion", "Portfolio", "HTML5 Canvas", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased bg-[#121212] text-[#f3f4f6]`}>
      <body className="bg-[#121212] selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
