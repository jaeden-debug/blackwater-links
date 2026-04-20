import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://links.blackwateraquatics.ca"),
  title: "Blackwater Aquatics | Live Scuds, Lab Notes & Contact",
  description:
    "Shop live scud cultures, explore lab notes, contact Blackwater Aquatics, and follow on TikTok.",
  keywords: [
    "Blackwater Aquatics",
    "live scuds Canada",
    "scud culture",
    "aquarium live food",
    "lab notes",
    "betta food",
    "fish breeding",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://links.blackwateraquatics.ca/",
    siteName: "Blackwater Aquatics",
    title: "Blackwater Aquatics | Live Scuds, Lab Notes & Contact",
    description:
      "Shop live scud cultures, explore lab notes, contact Blackwater Aquatics, and follow on TikTok.",
    images: [
      {
        url: "https://blackwateraquatics.ca/cdn/shop/files/9c0b6d45c3e27bd48858033d0395a3f5fe35d04b14f6d7c63e520e5f50614fd4.png?height=124&v=1764785598",
        width: 124,
        height: 124,
        alt: "Blackwater Aquatics logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackwater Aquatics | Live Scuds, Lab Notes & Contact",
    description:
      "Shop live scud cultures, explore lab notes, contact Blackwater Aquatics, and follow on TikTok.",
    images: [
      "https://blackwateraquatics.ca/cdn/shop/files/9c0b6d45c3e27bd48858033d0395a3f5fe35d04b14f6d7c63e520e5f50614fd4.png?height=124&v=1764785598",
    ],
  },
  icons: {
    icon: "https://blackwateraquatics.ca/cdn/shop/files/9c0b6d45c3e27bd48858033d0395a3f5fe35d04b14f6d7c63e520e5f50614fd4.png?height=124&v=1764785598",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}