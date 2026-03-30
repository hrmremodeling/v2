import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hrm-br.com"),
  title: "HRM Building & Remodeling LLC | Vernon, CT Remodeling Contractor",
  description:
    "Kitchen, bathroom, basement, deck, window, and door remodeling in Vernon, CT and surrounding communities.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HRM Building & Remodeling LLC",
    description:
      "Kitchen, bathroom, basement, deck, window, and door remodeling in Vernon, CT and surrounding communities.",
    url: "https://www.hrm-br.com",
    siteName: "HRM Building & Remodeling LLC",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "HRM Building & Remodeling LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRM Building & Remodeling LLC",
    description:
      "Kitchen, bathroom, basement, deck, window, and door remodeling in Vernon, CT and surrounding communities.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
