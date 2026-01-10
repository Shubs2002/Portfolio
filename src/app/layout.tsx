import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Nakashe | Full Stack Developer",
  description: "Passionate Full Stack Web Developer specializing in MERN, Flask, AI-driven applications, and e-commerce platforms. Let's build something amazing together.",
  keywords: ["Full Stack Developer", "Web Development", "MERN Stack", "React", "Next.js", "AI Projects", "E-commerce"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
