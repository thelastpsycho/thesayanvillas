import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-charcoal/20 to-charcoal/40">
          {/* Placeholder for rice field image */}
          <div className="w-full h-full bg-gradient-to-br from-green-900/30 via-green-800/40 to-yellow-700/30" />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-soft-white mb-6 leading-tight">
          The Sayan Villas
        </h1>
        <p className="text-xl md:text-2xl text-soft-white/90 mb-8 font-light max-w-2xl mx-auto">
          A private sanctuary in the heart of Ubud.
        </p>
        <p className="text-lg md:text-xl text-soft-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Nestled among the lush rice fields of Sayan, The Sayan Villas blend timeless Balinese charm with modern elegance —
          an intimate escape where tranquility meets understated luxury.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/accommodation"
            className="px-8 py-4 bg-soft-white text-charcoal hover:bg-muted-gold transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Explore Villas
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-soft-white text-soft-white hover:bg-soft-white hover:text-charcoal transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Book Your Stay
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-soft-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}