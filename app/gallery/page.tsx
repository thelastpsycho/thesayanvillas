'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ImageModal from '../components/ImageModal';
import Image from 'next/image';

export default function Gallery() {
  // Modal state
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handlers
  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        onClose={closeModal}
      />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/terrace.webp"
            alt="Beautiful terrace with panoramic views"
            fill
            sizes="100vw"
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
                  <div key={imageIndex} className="group relative overflow-hidden rounded-lg border-2 border-transparent hover:border-muted-gold/30 transition-all duration-300">
                    {image ? (
                      <>
                        {/* Actual Image */}
                        <div
                          className="relative w-full h-64 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                          onClick={() => openModal(image)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                          />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end pointer-events-none">
                          <div className="p-4">
                            <p className="text-soft-white text-sm font-light mb-2">
                              {image.alt}
                            </p>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                              <span className="text-xs">Click to view</span>
                            </div>
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