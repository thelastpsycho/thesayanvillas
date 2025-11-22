import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Accommodation at The Sayan Villas | One & Two Bedroom Private Villas in Ubud',
  description: 'Stay in luxury at The Sayan Villas Ubud. Choose from one or two-bedroom villas with private pools and stunning rice field views.',
};

export default function Accommodation() {
  const villas = [
    {
      title: 'One-Bedroom Villa',
      description: 'Perfect for couples seeking a peaceful escape. Elegant design, private pool, and serene rice field views.',
      features: [
        'King-size bed with premium linens',
        'Private infinity pool',
        'Outdoor shower and bathtub',
        'Living area with kitchenette',
        'Rice field views from every room'
      ],
      size: '120 sqm',
      guests: '2 Adults',
      image: '/images/bedroom.webp',
      imageAlt: 'Luxurious one-bedroom villa with king-size bed and rice field views'
    },
    {
      title: 'Two-Bedroom Villa',
      description: 'Ideal for families or friends. Expansive spaces, modern amenities, and a seamless blend of comfort and nature.',
      features: [
        'Two king-size bedrooms',
        'Private infinity pool',
        'Full kitchen and dining area',
        'Spacious living room',
        'Private garden terrace',
        'Panoramic rice field views'
      ],
      size: '220 sqm',
      guests: '4 Adults',
      image: '/images/dining_room.webp',
      imageAlt: 'Spacious two-bedroom villa with elegant dining area'
    }
  ];

  return (
    <div className="min-h-screen bg-soft-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/dining_room2.webp"
            alt="Elegant villa interior with Balinese design"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-charcoal/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-sans text-4xl md:text-6xl font-light text-soft-white mb-4">
            Your Private Sanctuary Awaits
          </h1>
          <p className="text-xl text-soft-white/90 font-light max-w-2xl mx-auto">
            At The Sayan Villas, simplicity meets sophistication in every detail.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-lg leading-relaxed text-charcoal font-light">
          Choose between our elegant One-Bedroom Villa or spacious Two-Bedroom Villa, each featuring private pools,
          open living spaces, and panoramic views of the surrounding rice terraces.
        </p>
      </section>

      {/* Villas Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {villas.map((villa, index) => (
            <div key={index} className="group">
              {/* Villa Image */}
              <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
                <Image
                  src={villa.image}
                  alt={villa.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
              </div>

              {/* Villa Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-sans text-3xl font-light text-charcoal">
                    {villa.title}
                  </h3>
                  <div className="text-right text-sm text-soft-gray">
                    <p>{villa.size}</p>
                    <p>{villa.guests}</p>
                  </div>
                </div>

                <p className="text-charcoal/80 leading-relaxed font-light">
                  {villa.description}
                </p>

                <ul className="space-y-2">
                  {villa.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-soft-gray">
                      <svg className="w-4 h-4 text-muted-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-4xl font-light text-charcoal text-center mb-12">
            Villa Amenities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="font-sans text-xl font-light text-charcoal mb-2">Air Conditioning</h4>
              <p className="text-soft-gray text-sm">Climate control for your comfort</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 1112l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 13a4 4 0 104 4h4a4 4 0 104-4H3z" />
                </svg>
              </div>
              <h4 className="font-sans text-xl font-light text-charcoal mb-2">WiFi</h4>
              <p className="text-soft-gray text-sm">High-speed internet throughout</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-sans text-xl font-light text-charcoal mb-2">Daily Housekeeping</h4>
              <p className="text-soft-gray text-sm">Attentive service included</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="font-sans text-xl font-light text-charcoal mb-2">Welcome Basket</h4>
              <p className="text-soft-gray text-sm">Local treats and refreshments</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-sans text-xl font-light text-charcoal mb-2">Complimentary Breakfast</h4>
              <p className="text-soft-gray text-sm">Fresh local ingredients</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-muted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-sans text-xl font-light text-charcoal mb-2">Airport Transfer</h4>
              <p className="text-soft-gray text-sm">Complimentary pick-up service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-sans text-3xl font-light text-charcoal mb-6">
            Ready to Experience Ubud&apos;s Finest?
          </h2>
          <p className="text-charcoal/80 mb-8 font-light">
            Book your stay at The Sayan Villas and discover the perfect blend of luxury and tranquility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-charcoal text-soft-white hover:bg-muted-gold transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Reserve Your Villa
          </Link>
        </div>
      </section>
    </div>
  );
}