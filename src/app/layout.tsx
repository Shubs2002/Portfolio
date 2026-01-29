import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shubham-nakashe.dev'),
  title: {
    default: "Shubham Nakashe | Full Stack Developer & AI Specialist",
    template: "%s | Shubham Nakashe"
  },
  description: "Passionate Full Stack Web Developer specializing in MERN, Flask, AI-driven applications, and e-commerce platforms. Building innovative solutions with React, Next.js, Python, and AI technologies. Available for freelance projects and collaborations.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "AI Projects",
    "E-commerce Development",
    "Python Developer",
    "Flask",
    "FastAPI",
    "Machine Learning",
    "Freelance Developer",
    "Shubham Nakashe",
    "Portfolio",
    "Web Designer",
    "UI/UX Developer",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "JavaScript Developer"
  ],
  authors: [{ name: "Shubham Nakashe", url: "https://www.shubham-nakashe.dev" }],
  creator: "Shubham Nakashe",
  publisher: "Shubham Nakashe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shubham-nakashe.dev",
    siteName: "Shubham Nakashe Portfolio",
    title: "Shubham Nakashe | Full Stack Developer & AI Specialist",
    description: "Passionate Full Stack Web Developer specializing in MERN, Flask, AI-driven applications, and e-commerce platforms. Let's build something amazing together.",
    images: [
      {
        url: "https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png",
        width: 1200,
        height: 630,
        alt: "Shubham Nakashe - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Nakashe | Full Stack Developer & AI Specialist",
    description: "Passionate Full Stack Web Developer specializing in MERN, Flask, AI-driven applications, and e-commerce platforms.",
    images: ["https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  alternates: {
    canonical: "https://www.shubham-nakashe.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
