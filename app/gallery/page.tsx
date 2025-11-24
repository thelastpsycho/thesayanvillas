'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import ImageModal from '../components/ImageModal';
import ScrollAnimation, { animationPresets } from '../components/ScrollAnimation';
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

  // Gallery images with masonry layout configuration
  const galleryImages = [
    { src: '/images/dining_room2.webp', alt: 'Elegant villa dining area', size: 'large' },
    { src: '/images/bedroom.webp', alt: 'Luxury bedroom with rice field views', size: 'medium' },
    { src: '/images/pool_villa.webp', alt: 'Private infinity pool with villa view', size: 'tall' },
    { src: '/images/pool.webp', alt: 'Beautiful swimming pool area', size: 'wide' },
    { src: '/images/terrace.webp', alt: 'Scenic terrace with panoramic views', size: 'small' },
    { src: '/images/outdoor.webp', alt: 'Outdoor living space with natural surroundings', size: 'medium' },
    { src: '/images/dining_room.webp', alt: 'Intimate indoor dining setting', size: 'small' },
    { src: '/images/ornament.webp', alt: 'Traditional Balinese decorative elements', size: 'tall' }
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
          <ScrollAnimation {...animationPresets.heroContent} delay={0}>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-soft-white mb-4">
              Gallery
            </h1>
          </ScrollAnimation>
          <ScrollAnimation {...animationPresets.heroContent} delay={200}>
            <p className="text-xl text-soft-white/90 font-light max-w-2xl mx-auto">
              Discover the essence of The Sayan Villas through our curated gallery — where every corner tells a story of elegance, simplicity, and Balinese beauty.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollAnimation {...animationPresets.sectionFadeUp} delay={0}>
          <p className="text-lg leading-relaxed text-charcoal font-light">
            Immerse yourself in the visual journey of The Sayan Villas. From the sweeping views of emerald rice terraces to the thoughtfully designed interiors, each image captures the tranquil luxury that defines your private sanctuary in Ubud.
          </p>
        </ScrollAnimation>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation {...animationPresets.sectionFadeUp} delay={0}>
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <ScrollAnimation
                  key={index}
                  {...animationPresets.fadeInScale}
                  delay={index * 100}
                  duration={600}
                >
                  <div
                    className={`group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] mb-4 break-inside-avoid ${
                      image.size === 'large' ? 'col-span-2 row-span-2' :
                      image.size === 'tall' ? 'row-span-2' :
                      image.size === 'wide' ? 'col-span-2' :
                      ''
                    }`}
                    onClick={() => openModal(image)}
                  >
                    <div className={`relative overflow-hidden ${
                      image.size === 'large' ? 'h-96' :
                      image.size === 'tall' ? 'h-80' :
                      image.size === 'wide' ? 'h-64' :
                      image.size === 'medium' ? 'h-64' :
                      'h-48'
                    }`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end pointer-events-none">
                      <div className="p-4">
                        <p className="text-soft-white text-sm font-light mb-2 line-clamp-2">
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

                    {/* Simple border on hover */}
                    <div className="absolute inset-0 border-2 border-muted-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation {...animationPresets.sectionFadeUp} delay={0}>
            <h2 className="font-calligraphy text-3xl font-light text-charcoal mb-6">
              Ready to Experience It in Person?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation {...animationPresets.sectionFadeUp} delay={200}>
            <p className="text-charcoal/80 mb-8 font-light text-lg">
              The images capture only a glimpse of the tranquility and beauty that await you at The Sayan Villas.
              Let us welcome you to your private sanctuary in Ubud.
            </p>
          </ScrollAnimation>
          <ScrollAnimation {...animationPresets.sectionFadeUp} delay={400}>
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
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}