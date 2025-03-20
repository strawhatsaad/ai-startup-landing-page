import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Startup Landing Page",
  description:
    "A landing page for an AI startup. Elevate your site;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.",
  creator: "Muhammad Saad Anjum",
  keywords: ["AI", "SEO", "Landing Page", "Startup", "Next.js", "React"],
  openGraph: {
    title: "AI Startup Landing Page",
    description:
      "A landing page for an AI startup. Elevate your site;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.",
  },
  category: "technology",
  publisher: "Muhammad Saad Anjum",
  authors: [
    {
      name: "Muhammad Saad Anjum",
      url: "https://my-portfolio-three-theta-31.vercel.app/",
    },
  ],
  applicationName: "AI Startup Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
