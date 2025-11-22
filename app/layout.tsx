import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Sayan Villas | Private Luxury Villas in Sayan Ubud",
  description: "Discover The Sayan Villas — an elegant private retreat in Ubud surrounded by rice fields, blending Balinese charm and modern sophistication.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
