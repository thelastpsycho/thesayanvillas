import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Explore The Sayan Villas in Ubud',
  description: 'View our gallery and experience the natural elegance of The Sayan Villas — private luxury surrounded by Ubud\'s lush rice fields.',
};

export default function Gallery() {
  // Gallery images with categories
  const galleryCategories = [
    {
      title: 'Villas & Interiors',
      description: 'Elegant spaces designed for comfort and tranquility',
      images: [
        { src: '/images/bedroom.webp', alt: 'Luxury bedroom with rice field views' },
        { src: '/images/dining_room.webp', alt: 'Elegant dining area' },
        { src: '/images/dining_room2.webp', alt: 'Intimate dining setting' },
        { src: '/images/ornament.webp', alt: 'Balinese decorative details' },
        null,
        null
      ]
    },
    {
      title: 'Pool & Outdoor Areas',
      description: 'Private sanctuaries for relaxation and rejuvenation',
      images: [
        { src: '/images/pool_villa.webp', alt: 'Private infinity pool with villa' },
        { src: '/images/pool.webp', alt: 'Stunning pool area' },
        { src: '/images/outdoor.webp', alt: 'Beautiful outdoor living space' },
        { src: '/images/terrace.webp', alt: 'Scenic terrace with views' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-soft-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/terrace.webp"
            alt="Beautiful terrace with panoramic views"
            fill
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-charcoal/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-sans text-4xl md:text-6xl font-light text-soft-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-soft-white/90 font-light max-w-2xl mx-auto">
            Discover the essence of The Sayan Villas through our curated gallery — where every corner tells a story of elegance, simplicity, and Balinese beauty.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-lg leading-relaxed text-charcoal font-light">
          Immerse yourself in the visual journey of The Sayan Villas. From the sweeping views of emerald rice terraces to the thoughtfully designed interiors, each image captures the tranquil luxury that defines your private sanctuary in Ubud.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        {galleryCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            {/* Category Header */}
            <div className="text-center mb-12 px-4">
              <h2 className="font-sans text-3xl md:text-4xl font-light text-charcoal mb-4">
                {category.title}
              </h2>
              <p className="text-soft-gray text-lg font-light max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Images Grid */}
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className={`grid gap-4 ${
                category.images.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
                category.images.length === 6 ? 'md:grid-cols-2 lg:grid-cols-3' :
                'grid-cols-1'
              }`}>
                {category.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="group relative overflow-hidden rounded-lg">
                    {image ? (
                      <>
                        {/* Actual Image */}
                        <div className="w-full h-64 overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                          <div className="p-4">
                            <p className="text-soft-white text-sm font-light">
                              {image.alt}
                            </p>
                          </div>
                        </div>

                        {/* Image Number */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-soft-white/90 rounded-full flex items-center justify-center text-charcoal text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {imageIndex + 1}
                        </div>
                      </>
                    ) : (
                      /* Placeholder for empty slots */
                      <div className={`
                        w-full h-64 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105
                        ${imageIndex % 4 === 0 ? 'from-sand to-beige' :
                          imageIndex % 4 === 1 ? 'from-beige to-sand' :
                          imageIndex % 4 === 2 ? 'from-muted-gold/30 to-sand' :
                          'from-sand to-muted-gold/30'}
                      `}>
                        <div className="w-full h-full bg-gradient-to-t from-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-3xl font-light text-charcoal mb-6">
            Ready to Experience It in Person?
          </h2>
          <p className="text-charcoal/80 mb-8 font-light text-lg">
            The images capture only a glimpse of the tranquility and beauty that await you at The Sayan Villas.
            Let us welcome you to your private sanctuary in Ubud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-charcoal text-soft-white hover:bg-muted-gold transition-all duration-300 transform hover:scale-105 font-medium justify-center"
            >
              Plan Your Visit
            </a>
            <a
              href="/accommodation"
              className="inline-flex items-center px-8 py-4 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-soft-white transition-all duration-300 transform hover:scale-105 font-medium justify-center"
            >
              View Accommodations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}