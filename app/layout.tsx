import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HRM Building & Remodeling LLC",
  description:
    "Kitchen, bathroom, basement, deck, window, and door remodeling in Vernon, CT and surrounding communities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
