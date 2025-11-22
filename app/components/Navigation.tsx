'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Villas', href: '/accommodation' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-soft-white/95 backdrop-blur-lg shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-all duration-300"
          >
            <Image
              src="/images/logo.svg"
              alt="Sayan Villas Logo"
              width={96}
              height={96}
              className="h-24 w-auto"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3)) invert(1)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 relative group py-1 ${
                  pathname === item.href
                    ? scrolled
                      ? 'text-charcoal font-semibold'
                      : 'text-white font-semibold'
                    : scrolled
                      ? 'text-charcoal/90 hover:text-charcoal'
                      : 'text-white hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                  pathname === item.href
                    ? 'w-full'
                    : 'w-full scale-x-0 group-hover:scale-x-100'
                } ${
                  scrolled || pathname === item.href ? 'bg-muted-gold' : 'bg-white'
                }`}></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                scrolled
                  ? 'text-charcoal bg-soft-white border border-charcoal/20 hover:bg-charcoal hover:text-soft-white'
                  : 'text-white border border-white/30 hover:bg-white hover:text-charcoal'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled ? 'text-charcoal hover:text-muted-gold' : 'text-white hover:text-white/80'
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="absolute left-0 right-0 top-20 bg-soft-white/95 backdrop-blur-lg border-b border-sand/30 shadow-lg">
              <div className="px-6 py-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                      pathname === item.href
                        ? 'text-muted-gold bg-beige/50'
                        : 'text-charcoal hover:text-muted-gold hover:bg-beige/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-sand/30">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-base font-medium text-charcoal bg-soft-white border border-charcoal/20 hover:bg-charcoal hover:text-soft-white transition-all duration-300 rounded-lg text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}