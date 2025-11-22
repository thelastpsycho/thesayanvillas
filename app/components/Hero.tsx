import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '100vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <Image
            src="/images/ornament.webp"
            alt="Luxury pool villa with stunning rice field views"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-emerald-900/40" />
      </div>

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-white/10 blur-xl scale-110 rounded-full" />
          <Image
            src="/images/logo.svg"
            alt="The Sayan Villas"
            width={288}
            height={288}
            className="h-40 md:h-56 lg:h-72 w-auto mx-auto relative z-10 drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.3)) brightness(1.1)',
              mixBlendMode: 'screen'
            }}
          />
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-3" />
        <p className="text-sm md:text-base text-white/80 font-light tracking-widest uppercase">
          Private Sanctuary · Ubud · Bali
        </p>

        <div className="space-y-4 mb-8">
          <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto leading-relaxed">
            An intimate retreat where timeless Balinese elegance meets modern luxury
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Link
            href="/accommodation"
            className="group relative px-8 py-4 bg-transparent border border-white/30 text-white font-light tracking-wide text-sm transition-all duration-500 hover:border-white/60 hover:bg-white/5"
          >
            <span className="relative z-10">Discover</span>
          </Link>
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-light tracking-wide text-sm transition-all duration-500 hover:bg-white/20 hover:border-white/40"
          >
            <span className="relative z-10">Reserve Your Stay</span>
          </Link>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-white/50 font-light tracking-widest uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}