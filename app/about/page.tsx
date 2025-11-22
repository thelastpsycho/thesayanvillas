import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About The Sayan Villas | Luxury Private Villas in Ubud Bali',
  description: 'Discover The Sayan Villas, an ultra-luxury sanctuary in Sayan, Ubud featuring infinity pools, rice field views, personalized butler service, and authentic Balinese hospitality amidst serene natural beauty.',
  keywords: [
    "about the sayan villas",
    "luxury villas ubud bali",
    "sayan ridge resort",
    "balinese hospitality",
    "ubud luxury accommodation",
    "private villas sayan",
    "infinity pool villas bali",
    "rice field view villas",
    "luxury balinese experience",
    "thesayanvillas story",
    "bali luxury retreat",
    "ubud resort philosophy"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://thesayanvillas.com/about",
    title: "About The Sayan Villas | Luxury Private Villas in Ubud Bali",
    description: "Discover The Sayan Villas, an ultra-luxury sanctuary in Sayan, Ubud featuring infinity pools, rice field views, and personalized butler service.",
    images: [
      {
        url: "/images/ornament.webp",
        width: 1200,
        height: 630,
        alt: "The Sayan Villas - Luxury sanctuary with infinity pools and rice field views in Ubud Bali",
      },
    ],
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-soft-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-charcoal/40">
          <div className="w-full h-full bg-gradient-to-br from-green-900/30 via-green-800/40 to-yellow-700/30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-sans text-4xl md:text-6xl font-light text-soft-white mb-4">
            About The Sayan Villas
          </h1>
          <p className="text-xl text-soft-white/90 font-light max-w-2xl mx-auto">
            Where Nature and Elegance Reside in Harmony
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-charcoal mb-8 text-center font-light">
            Tucked away in the serene landscapes of Sayan, Ubud, The Sayan Villas offer a retreat like no other.
            Each villa is designed to celebrate the natural beauty of Bali — from the soft whispers of the rice fields
            to the gentle rhythm of tropical life.
          </p>

          <p className="text-lg leading-relaxed text-charcoal mb-16 text-center font-light">
            Experience personalized comfort, refined interiors, and the soothing connection to nature that defines
            the true essence of Ubud living.
          </p>
        </div>

        {/* Balinese Culture Section with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="font-sans text-3xl md:text-4xl font-light text-charcoal">
              Authentic Balinese Heritage
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed font-light">
              Our villas honor the rich cultural heritage of Bali through thoughtful architectural details,
              traditional materials, and locally sourced artisanal elements that tell the story of our island home.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed font-light">
              From hand-carved wooden ornaments to natural stone accents, every element reflects
              the deep connection between Balinese culture and the natural environment that has sustained our traditions for centuries.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/ornament.webp"
              alt="Traditional Balinese decorative ornament"
              fill
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-muted-gold text-soft-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm font-medium">
                Handcrafted by local artisans using traditional techniques passed down through generations.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-sans text-2xl font-light text-charcoal mb-3">Natural Harmony</h3>
            <p className="text-soft-gray leading-relaxed">
              Surrounded by lush rice fields and tropical vegetation, our villas blend seamlessly with their natural surroundings.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-sans text-2xl font-light text-charcoal mb-3">Timeless Design</h3>
            <p className="text-soft-gray leading-relaxed">
              Traditional Balinese architecture meets contemporary luxury in every carefully crafted detail.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-sans text-2xl font-light text-charcoal mb-3">Personalized Service</h3>
            <p className="text-soft-gray leading-relaxed">
              Our dedicated team ensures every aspect of your stay is tailored to your unique preferences.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-charcoal text-soft-white hover:bg-muted-gold transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Discover Your Sanctuary
          </Link>
        </div>
      </section>
    </div>
  );
}