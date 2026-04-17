import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next"
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shubham-nakashe.dev'),
  title: {
    default: "Shubham Nakashe | Full Stack Developer & AI Specialist — Mumbai, India",
    template: "%s | Shubham Nakashe — Full Stack Developer"
  },
  description: "Shubham Nakashe — Full Stack Web Developer & AI Specialist from Mumbai, India. Expert in MERN Stack, Next.js, Python, Flask, FastAPI, AI/ML, and e-commerce platforms. Built production-grade platforms for financial advisory firms, content creators & startups. Available for freelance projects, remote work & collaborations worldwide.",
  keywords: [
    // Core identity
    "Shubham Nakashe",
    "Shubham Nakashe portfolio",
    "Shubham Nakashe developer",
    "Shubham Nakashe full stack developer",
    // Tech stack keywords
    "Full Stack Developer",
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Python Developer",
    "Flask Developer",
    "FastAPI Developer",
    "AI Developer",
    "Machine Learning Engineer",
    // Service keywords
    "Web Development Services",
    "E-commerce Development",
    "Custom Web Applications",
    "AI-Powered Applications",
    "SaaS Development",
    "API Development",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "SEO Optimization",
    "Website Design",
    "Mobile Responsive Design",
    // GEO keywords
    "Developer in Mumbai",
    "Web Developer Mumbai",
    "Freelance Developer India",
    "Full Stack Developer India",
    "Web Developer Pune",
    "Developer Maharashtra",
    "Hire Developer India",
    "Remote Developer India",
    // Long-tail keywords
    "hire full stack developer for startup",
    "freelance web developer for financial websites",
    "AI web application developer",
    "Next.js developer for hire",
    "React developer portfolio",
    "production-grade web applications",
    // Project-specific keywords
    "Forever Consultants website developer",
    "financial advisory website developer",
    "inventory management system developer",
    "AI video production platform"
  ],
  authors: [{ name: "Shubham Nakashe", url: "https://www.shubham-nakashe.dev" }],
  creator: "Shubham Nakashe",
  publisher: "Shubham Nakashe",
  category: "Technology",
  classification: "Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shubham-nakashe.dev",
    siteName: "Shubham Nakashe — Full Stack Developer Portfolio",
    title: "Shubham Nakashe | Full Stack Developer & AI Specialist — Mumbai, India",
    description: "Full Stack Web Developer specializing in MERN, Next.js, Python, AI/ML, and e-commerce. Built production-grade platforms for financial advisors, content creators & startups. Delivered 10+ projects. Let's build something amazing together.",
    images: [
      {
        url: "https://www.shubham-nakashe.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubham Nakashe — Full Stack Developer & AI Specialist Portfolio",
        type: "image/png",
      },
    ],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Nakashe | Full Stack Developer & AI Specialist",
    description: "Full Stack Developer from Mumbai, India. MERN, Next.js, Python, AI/ML. 10+ production projects delivered. Open for freelance & collaborations.",
    images: ["https://www.shubham-nakashe.dev/og-image.png"],
    creator: "@shubham_nakashe",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    languages: {
      "en-IN": "https://www.shubham-nakashe.dev",
      "en-US": "https://www.shubham-nakashe.dev",
      "x-default": "https://www.shubham-nakashe.dev",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    // GEO meta tags for local SEO
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
    // Content language
    "content-language": "en",
    // Revisit
    "revisit-after": "7 days",
    // Rating
    "rating": "general",
    // Distribution
    "distribution": "global",
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
        <Analytics />
        {children}
      </body>
    </html>
  );
}
