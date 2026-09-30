import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ember-co-gamma.vercel.app"),
  title: "Ember & Co. | Asian-Fusion Dining in Colombo",
  description: "Contemporary Asian-fusion cooked over live fire. Reserve a table.",
  openGraph: {
    title: "Ember & Co. | Asian-Fusion Dining in Colombo",
    description: "Contemporary Asian-fusion cooked over live fire. Reserve a table.",
    siteName: "Ember & Co.",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1920, height: 1080, alt: "Flames over a charcoal grill" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}