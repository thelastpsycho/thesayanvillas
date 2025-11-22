import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | The Sayan Villas Luxury Photos | Ubud Bali Resort',
  description: 'Explore our photo gallery of The Sayan Villas in Ubud, Bali. See luxury private villas, infinity pools, rice field views, and authentic Balinese architecture. Experience paradise through our images.',
  keywords: [
    "thesayanvillas gallery",
    "luxury villas ubud photos",
    "bali villa images",
    "sayan resort gallery",
    "infinity pool photos",
    "rice field view pictures",
    "balinese villa gallery",
    "ubud luxury photos",
    "private villas bali images",
    "luxury resort photography",
    "bali holiday pictures",
    "sayan ridge villas gallery"
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    type: "website",
    url: "https://thesayanvillas.com/gallery",
    title: "Gallery | The Sayan Villas Luxury Photos | Ubud Bali Resort",
    description: "Explore our photo gallery of luxury private villas, infinity pools, and rice field views at The Sayan Villas in Ubud, Bali.",
    images: [
      {
        url: "/images/bedroom.webp",
        width: 1200,
        height: 630,
        alt: "The Sayan Villas Gallery - Luxury bedroom with stunning rice field views in Ubud Bali",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}