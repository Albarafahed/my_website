import type { Metadata, Viewport } from "next";

import "./globals.css";
import { siteConfig } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Albara Fahed Alharissy",
  },
  description: siteConfig.description,
  keywords: ["C# developer", ".NET developer", "ASP.NET Core", "Entity Framework Core", "SQL Server", "backend developer", "Albara Fahed Alharissy"],
  authors: [{ name: "Albara Fahed Alharissy", url: siteConfig.github }],
  creator: "Albara Fahed Alharissy",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: "Albara Fahed Alharissy",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { themeColor: "#08132F", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
