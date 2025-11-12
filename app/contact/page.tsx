import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Contact The Sayan Villas | Book Your Stay in Ubud',
  description: 'Get in touch with The Sayan Villas Ubud. Plan your Bali getaway and experience refined comfort surrounded by nature.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-soft-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-charcoal/40">
          <div className="w-full h-full bg-gradient-to-br from-green-900/30 via-green-800/40 to-yellow-700/30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-soft-white mb-4">
            Contact
          </h1>
          <p className="text-xl text-soft-white/90 font-light max-w-2xl mx-auto">
            Plan your escape to Ubud.
          </p>
          <p className="text-lg text-soft-white/80 font-light max-w-2xl mx-auto mt-2">
            We'd love to welcome you to The Sayan Villas — your private retreat amidst Bali's most enchanting landscapes.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-sand/50 bg-warm-white text-charcoal placeholder-soft-gray focus:outline-none focus:border-muted-gold transition-colors"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-sand/50 bg-warm-white text-charcoal placeholder-soft-gray focus:outline-none focus:border-muted-gold transition-colors"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-sand/50 bg-warm-white text-charcoal placeholder-soft-gray focus:outline-none focus:border-muted-gold transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-sand/50 bg-warm-white text-charcoal placeholder-soft-gray focus:outline-none focus:border-muted-gold transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-charcoal mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    className="w-full px-4 py-3 border border-sand/50 bg-warm-white text-charcoal placeholder-soft-gray focus:outline-none focus:border-muted-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-charcoal mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    className="w-full px-4 py-3 border border-sand/50 bg-warm-white text-charcoal placeholder-soft-gray focus:outline-none focus:border-muted-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="villaType" className="block text-sm font-medium text-charcoal mb-2">
                    Villa Preference
                  </label>
                  <select
                    id="villaType"
                    name="villaType"
                    className="w-full px-4 py-3 border border-sand/50 bg-warm-white text-charcoal focus:outline-none focus:border-muted-gold transition-colors"
                  >
                    <option value="">Select a villa type</option>
                    <option value="one-bedroom">One-Bedroom Villa</option>
                    <option value="two-bedroom">Two-Bedroom Villa</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-sand/50 bg-warm-white text-charcoal placeholder-soft-gray focus:outline-none focus:border-muted-gold transition-colors resize-vertical"
                    placeholder="Tell us about your dream vacation or ask any questions you may have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-charcoal text-soft-white hover:bg-muted-gold transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* Contact Details */}
              <div>
                <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-light text-charcoal mb-1">Email</h3>
                      <p className="text-charcoal/80">info@thesayanvillas.com</p>
                      <p className="text-charcoal/80">reservations@thesayanvillas.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-light text-charcoal mb-1">Phone</h3>
                      <p className="text-charcoal/80">+62 361 123456</p>
                      <p className="text-charcoal/80">+62 812 3456 7890 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-light text-charcoal mb-1">Location</h3>
                      <p className="text-charcoal/80">Jl. Raya Sayan, Ubud</p>
                      <p className="text-charcoal/80">Bali 80571, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div>
                <h3 className="font-serif text-xl font-light text-charcoal mb-4">Operating Hours</h3>
                <div className="space-y-2 text-charcoal/80">
                  <p className="flex justify-between">
                    <span>Check-in</span>
                    <span>2:00 PM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Check-out</span>
                    <span>12:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Concierge</span>
                    <span>7:00 AM - 10:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Reception</span>
                    <span>24 hours</span>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-serif text-xl font-light text-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-muted-gold/20 rounded-full flex items-center justify-center hover:bg-muted-gold transition-colors">
                    <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-muted-gold/20 rounded-full flex items-center justify-center hover:bg-muted-gold transition-colors">
                    <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}