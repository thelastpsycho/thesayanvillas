'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import ScrollAnimation, { animationPresets } from './ScrollAnimation';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Small threshold for when user scrolls past hero
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force navigation positioning with useEffect
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      (nav as HTMLElement).style.position = 'fixed';
      (nav as HTMLElement).style.top = '0';
      (nav as HTMLElement).style.left = '0';
      (nav as HTMLElement).style.right = '0';
      (nav as HTMLElement).style.zIndex = '9999';
    }
  }, []);

  const handleSmoothNavigation = (href: string) => {
    if (href === pathname) return;

    setIsOpen(false);

    // Use direct navigation without artificial delay
    router.push(href);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Villas', href: '/accommodation' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav
    className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
      scrolled
        ? 'bg-soft-white/95 backdrop-blur-lg shadow-md'
        : 'bg-transparent'
    }`}
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: 9999
    }}
  >
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
              style={{
                filter: scrolled
                  ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.3)) invert(1)'
                  : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSmoothNavigation(item.href)}
                className={`text-nav transition-all duration-300 relative group py-1 hover:scale-105 ${
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
              </button>
            ))}
            <button
              onClick={() => handleSmoothNavigation('/contact')}
              className={`ml-4 px-6 py-2.5 text-button-small transition-all duration-300 rounded-full hover:scale-105 ${
                scrolled
                  ? 'text-charcoal bg-soft-white border border-charcoal/20 hover:bg-charcoal hover:text-soft-white'
                  : 'text-white border border-white/30 hover:bg-white hover:text-charcoal'
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 relative transition-all duration-300 transform hover:scale-105 ${
                scrolled ? 'text-charcoal hover:text-muted-gold' : 'text-white hover:text-white/80'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-center items-center">
                <span className={`absolute h-0.5 w-6 transition-all duration-300 ease-in-out transform ${
                  isOpen
                    ? 'rotate-45 translate-y-0 bg-charcoal'
                    : '-translate-y-2 bg-current'
                }`} />
                <span className={`absolute h-0.5 w-6 transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'opacity-0 scale-0'
                    : 'bg-current'
                }`} />
                <span className={`absolute h-0.5 w-6 transition-all duration-300 ease-in-out transform ${
                  isOpen
                    ? '-rotate-45 translate-y-0 bg-charcoal'
                    : 'translate-y-2 bg-current'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <ScrollAnimation animation="slideRight" delay={0} duration={300}>
          <div className={`lg:hidden absolute inset-x-0 top-20 transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-sm border-b border-sand/20 shadow-lg">
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <ScrollAnimation
                    key={item.name}
                    {...animationPresets.sectionSlideRight}
                    delay={index * 50}
                    duration={300}
                  >
                    <button
                      onClick={() => handleSmoothNavigation(item.href)}
                      className={`block w-full text-left px-4 py-3 text-nav-mobile transition-all duration-300 hover:scale-105 ${
                        pathname === item.href
                          ? 'text-muted-gold font-medium'
                          : 'text-charcoal hover:text-muted-gold'
                      }`}
                    >
                      {item.name}
                    </button>
                  </ScrollAnimation>
                ))}

                <div className="pt-4 mt-2">
                  <ScrollAnimation {...animationPresets.sectionSlideRight} delay={200} duration={300}>
                    <button
                      onClick={() => handleSmoothNavigation('/contact')}
                      className="block w-full px-4 py-3 text-button text-charcoal bg-muted-gold hover:bg-charcoal hover:text-soft-white transition-all duration-300 text-center hover:scale-105"
                    >
                      Book Now
                    </button>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </nav>
  );
}