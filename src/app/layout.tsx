import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "X ONE HUB — Award-Winning Creative & Digital Growth Agency",
  description:
    "X ONE HUB is an elite creative agency specializing in Web Development, Amazon Store Management, Graphic Design, and Digital Marketing. We engineer high-impact brands, storefronts, and digital experiences.",
  keywords: [
    "X ONE HUB",
    "X-One Hub",
    "Creative Agency",
    "Web Development",
    "Amazon Store Management",
    "Graphic Design",
    "Digital Marketing",
    "Brand Identity",
    "UI/UX Design",
  ],
  authors: [{ name: "X ONE HUB", url: "https://xonehub.com" }],
  openGraph: {
    title: "X ONE HUB — Creative Agency & Digital Growth Studio",
    description:
      "We Are A Team Of Creatives. High-performance web development, Amazon management, graphic design, and digital marketing.",
    url: "https://xonehub.com",
    siteName: "X ONE HUB",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "X ONE HUB Creative Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
