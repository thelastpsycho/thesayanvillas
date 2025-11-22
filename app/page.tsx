import { Metadata } from 'next';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "The Sayan Villas | Luxury Private Villas with Infinity Pools in Ubud Bali",
  description: "Discover The Sayan Villas - Ultra-luxury private villas in Ubud, Bali featuring infinity pools, rice field views, personalized butler service, and authentic Balinese hospitality. Experience the best of Ubud, Bali in your private villa paradise.",
  keywords: [
    "luxury villas ubud",
    "private villas bali",
    "infinity pool villas",
    "rice field views",
    "ubud luxury accommodation",
    "the sayan villas",
    "balinese hospitality",
    "private pool villas",
    "ubud honeymoon",
    "luxury bali retreat",
    "sayan ridge villas",
    "bali villa experience"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://thesayanvillas.com",
    title: "The Sayan Villas | Luxury Private Villas with Infinity Pools in Ubud Bali",
    description: "Discover The Sayan Villas - Ultra-luxury private villas in Ubud, Bali featuring infinity pools, rice field views, and personalized butler service.",
    images: [
      {
        url: "/images/ornament.webp",
        width: 1200,
        height: 630,
        alt: "The Sayan Villas - Luxury pool villa with stunning rice field views in Ubud Bali",
      },
    ],
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LuxuryHotel",
  "name": "The Sayan Villas",
  "description": "Ultra-luxury private villas in Ubud, Bali featuring infinity pools, rice field views, and personalized butler service.",
  "url": "https://thesayanvillas.com",
  "telephone": "+62 361 980642",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Sayan, Ubud",
    "addressLocality": "Gianyar",
    "addressRegion": "Bali",
    "postalCode": "80571",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-8.5069",
    "longitude": "115.2625"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Private Infinity Pools",
      "description": "Each villa features its own stunning infinity pool overlooking the emerald rice terraces"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Panoramic Rice Field Views",
      "description": "Wake up to breathtaking vistas of Ubud's iconic rice terraces from every room"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Personalized Butler Service",
      "description": "Dedicated butler service ensures your every need is anticipated and fulfilled"
    }
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "One-Bedroom Villa",
      "description": "Perfect for couples seeking a peaceful escape with private pool and rice field views",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Two-Bedroom Villa",
      "description": "Ideal for families or friends with spacious living areas and premium amenities",
      "availability": "https://schema.org/InStock"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/thesayanvillas",
    "https://www.facebook.com/thesayanvillas"
  ]
};

export default function Home() {
  const features = [
    {
      title: 'Private Infinity Pools',
      description: 'Each villa features its own stunning infinity pool overlooking the emerald rice terraces.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Panoramic Rice Field Views',
      description: 'Wake up to breathtaking vistas of Ubud\'s iconic rice terraces from every room.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Personalized Butler Service',
      description: 'Dedicated butler service ensures your every need is anticipated and fulfilled.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  const experiences = [
    {
      title: 'Rice Field Trekking',
      description: 'Guided walks through the stunning Sayan rice terraces with local experts.',
      image: 'trekking',
      actualImage: '/images/outdoor.webp'
    },
    {
      title: 'Traditional Balinese Cooking',
      description: 'Learn authentic Balinese recipes using fresh, locally sourced ingredients.',
      image: 'cooking',
      actualImage: '/images/dining_room2.webp'
    },
    {
      title: 'Poolside Relaxation',
      description: 'Unwind in your private infinity pool overlooking the emerald rice terraces.',
      image: 'pool',
      actualImage: '/images/pool_villa.webp'
    },
    {
      title: 'Sunset Terrace Dining',
      description: 'Enjoy romantic dinners on your private terrace as the sun sets over the valley.',
      image: 'dining',
      actualImage: '/images/terrace.webp'
    }
  ];

  const testimonials = [
    {
      text: "The Sayan Villas exceeded all our expectations. The views were breathtaking and the service was impeccable. We felt like we were in paradise.",
      author: "Sarah & Michael",
      location: "London, UK"
    },
    {
      text: "An absolutely magical experience. The villa design blends perfectly with the natural surroundings. Waking up to those rice field views is something we'll never forget.",
      author: "Jennifer Chen",
      location: "San Francisco, USA"
    },
    {
      text: "Perfect blend of luxury and authenticity. The personalized service and attention to detail made our anniversary celebration truly special.",
      author: "Roberto & Sofia",
      location: "Milan, Italy"
    }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen">
        <header>
          <Navigation />
        </header>

        <Hero />

      {/* Welcome Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="font-sans text-section font-light text-charcoal animate-fade-in">
            Welcome to Your Private Sanctuary
          </h2>
          <p className="text-body text-charcoal/80 leading-relaxed font-light max-w-3xl mx-auto animate-fade-in animate-delay-200">
            The Sayan Villas represent the pinnacle of Balinese luxury hospitality. Nestled in the heart of Ubud&apos;s most prestigious location,
            our exclusive villa complex offers an intimate escape where contemporary design meets timeless Balinese architecture.
          </p>
          <p className="text-body text-charcoal/80 leading-relaxed font-light max-w-3xl mx-auto animate-fade-in animate-delay-300">
            Each villa has been thoughtfully designed to celebrate its natural surroundings, with floor-to-ceiling windows,
            private infinity pools, and panoramic views of the emerald rice terraces that have made Sayan famous worldwide.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-section font-light text-charcoal mb-4">
              Exquisite Villa Features
            </h2>
            <p className="text-body text-charcoal/80 font-light max-w-2xl mx-auto">
              Experience unparalleled luxury in our thoughtfully designed private villas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up bg-gradient-to-br from-soft-white to-warm-white p-6 rounded-2xl border border-sand/30 hover:border-muted-gold/40 hover:shadow-lg transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-gold/20 to-transparent group-hover:via-muted-gold/60 transition-all duration-500" />

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-muted-gold/10 to-muted-gold/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-muted-gold/80 group-hover:text-muted-gold transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans text-subheading font-light text-charcoal group-hover:text-muted-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-caption text-charcoal/60 leading-relaxed font-light group-hover:text-charcoal/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-section font-light text-charcoal mb-6">
              Curated Experiences
            </h2>
            <p className="text-body text-charcoal/80 font-light max-w-2xl mx-auto">
              Immerse yourself in authentic Balinese culture and natural beauty
            </p>
          </div>

          {/* Horizontal Slider Container */}
          <div className="relative">
            {/* Gradient Edges for Scroll Indication */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-soft-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-soft-white to-transparent z-10 pointer-events-none" />

            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex gap-6 lg:gap-8 px-2">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer animate-scale-in flex-shrink-0 w-72 lg:w-80"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      {experience.actualImage ? (
                        <Image
                          src={experience.actualImage}
                          alt={`${experience.title} - Authentic Balinese experience at The Sayan Villas Ubud Bali`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className={`
                          w-full h-full transition-transform duration-500 group-hover:scale-105
                          ${experience.image === 'trekking' ? 'bg-gradient-to-br from-green-600/30 to-green-700/40' :
                            experience.image === 'cooking' ? 'bg-gradient-to-br from-orange-600/20 to-red-600/30' :
                            experience.image === 'yoga' ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/30' :
                            'bg-gradient-to-br from-blue-600/20 to-cyan-600/30'}
                        `} />
                      )}
                      <div className="w-full h-full bg-gradient-to-t from-charcoal/40 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-soft-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          <p className="text-caption">Learn More</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-sans text-subheading font-light text-charcoal mb-2 group-hover:text-muted-gold transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-caption text-charcoal/70 font-light leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-section font-light text-charcoal mb-6">
              Guest Experiences
            </h2>
            <p className="text-body text-charcoal/80 font-light max-w-2xl mx-auto">
              Discover why our guests return year after year
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up bg-gradient-to-br from-soft-white to-warm-white p-6 rounded-xl border border-sand/30 hover:border-muted-gold/40 hover:shadow-lg transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-gold/20 to-transparent group-hover:via-muted-gold/60 transition-all duration-500" />

                <svg className="w-6 h-6 text-muted-gold/30 mb-3 group-hover:text-muted-gold/50 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-caption text-charcoal/80 mb-4 font-light leading-relaxed italic group-hover:text-charcoal/90 transition-colors duration-300">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-subheading text-charcoal font-light group-hover:text-muted-gold transition-colors duration-300">{testimonial.author}</p>
                    <p className="text-small text-soft-gray group-hover:text-charcoal/70 transition-colors duration-300">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div>
                <h2 className="font-sans text-section font-light text-charcoal mb-4">
                  Prime Location in Sayan
                </h2>
                <p className="text-caption text-charcoal/80 leading-relaxed font-light mb-4">
                  Situated in the prestigious Sayan ridge, our villas offer the perfect balance of seclusion and accessibility.
                  Experience the spiritual heart of Bali while being just minutes from Ubud&apos;s cultural attractions.
                </p>
                <p className="text-caption text-charcoal/80 leading-relaxed font-light">
                  The Sayan area is renowned for its breathtaking landscapes, traditional Balinese culture, and world-class wellness retreats.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-muted-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-sans text-body text-charcoal font-light">10 minutes to Ubud Center</h4>
                    <p className="text-small text-charcoal/70 font-light">Easy access to markets, restaurants, and cultural sites</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-muted-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-sans text-body text-charcoal font-light">45 minutes from Ngurah Rai Airport</h4>
                    <p className="text-small text-charcoal/70 font-light">Convenient transfer through scenic Balinese countryside</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-muted-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-sans text-body text-charcoal font-light">Walking distance to Sayan Ridge</h4>
                    <p className="text-small text-charcoal/70 font-light">Perfect for sunrise viewing and nature walks</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-charcoal text-soft-white hover:bg-muted-gold transition-all duration-300 transform hover:scale-105 font-medium text-button-small"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>

            <div className="relative h-72 animate-fade-in-right">
              <div className="w-full h-full bg-gradient-to-br from-green-700/40 via-yellow-600/30 to-green-800/50 rounded-lg">
                <div className="w-full h-full bg-gradient-to-t from-charcoal/20 to-transparent rounded-lg" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-soft-white">
                  <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-sans text-subheading font-light mb-1">Find Us in Paradise</h3>
                  <p className="text-small text-soft-white/80">Jl. Raya Sayan, Ubud, Bali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-section font-light text-soft-white mb-6">
            Begin Your Journey to Tranquility
          </h2>
          <p className="text-body text-soft-white/80 mb-8 font-light leading-relaxed">
            Escape to The Sayan Villas and discover why our guests describe their stay as life-changing.
            Your private paradise in the heart of Bali awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/accommodation"
              className="inline-flex items-center px-8 py-4 bg-soft-white text-charcoal hover:bg-muted-gold transition-all duration-300 transform hover:scale-105 font-medium text-button"
            >
              Explore Our Villas
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-soft-white text-soft-white hover:bg-soft-white hover:text-charcoal transition-all duration-300 transform hover:scale-105 font-medium text-button"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
