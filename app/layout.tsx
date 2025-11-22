import type { Metadata } from "next";
import "./globals.css";
import GlobalStyles from "./components/GlobalStyles";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "The Sayan Villas | Private Luxury Villas with Infinity Pools in Ubud Bali",
  description: "Experience ultimate luxury at The Sayan Villas in Ubud, Bali. Private villas with infinity pools overlooking rice fields, personalized butler service, and authentic Balinese hospitality. Your perfect Bali escape in the heart of Ubud.",
  keywords: [
    "luxury villas ubud",
    "private villas bali",
    "the sayan villas",
    "ubud accommodation",
    "bali luxury resort",
    "rice field villas",
    "infinity pool villas",
    "balinese hospitality",
    "ubud sayan",
    "luxury bali retreat",
    "private pool villas ubud",
    "bali honeymoon villas",
    "ubud luxury accommodation",
    "balinese villa experience",
    "sayan ridge villas"
  ],
  authors: [{ name: "The Sayan Villas" }],
  creator: "The Sayan Villas",
  publisher: "The Sayan Villas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thesayanvillas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesayanvillas.com",
    title: "The Sayan Villas | Private Luxury Villas with Infinity Pools in Ubud Bali",
    description: "Experience ultimate luxury at The Sayan Villas in Ubud, Bali. Private villas with infinity pools, rice field views, butler service, and authentic Balinese hospitality.",
    siteName: "The Sayan Villas",
    images: [
      {
        url: "/images/ornament.webp",
        width: 1200,
        height: 630,
        alt: "The Sayan Villas - Luxury pool villa with stunning rice field views",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sayan Villas | Private Luxury Villas in Ubud Bali",
    description: "Experience ultimate luxury at The Sayan Villas in Ubud, Bali. Private villas with infinity pools and rice field views.",
    images: ["/images/ornament.webp"],
    creator: "@thesayanvillas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GlobalStyles />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
