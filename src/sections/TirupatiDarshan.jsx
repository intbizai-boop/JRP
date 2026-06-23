import { motion } from 'framer-motion'
import { useRef } from 'react'

const HIGHLIGHTS = [
  {
    title: 'Priority Sheegra Darshan',
    desc: 'Expedited Break Darshan assistance (via Srivani Trust donation/special entry) reducing queue times to under 2 hours.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Luxury Chauffeured Transfers',
    desc: 'Round-trip private transit in premium SUVs (Fortuner, Innova Crysta) or luxury coaches from Chennai, Bangalore, or Tirupati airport.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17H6a2 2 0 01-2-2v-4l2.5-5h11l2.5 5v4a2 2 0 01-2 2h-2m-8 0a2 2 0 104 0m4 0a2 2 0 104 0" />
      </svg>
    ),
  },
  {
    title: '5-Star Accommodation',
    desc: 'Bespoke hotel bookings at premium hotels (Taj Tirupati, Fortune Grand Ridge) for refreshing before and after the holy ascent.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Personalized Concierge Escort',
    desc: 'A dedicated guide to navigate local protocols, dress code rules, secure footwear/mobiles, and collect Laddu Prasadam.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Sacred Tour Extensions',
    desc: 'Optional guided visits to the nearby Sri Padmavathi Ammavari Temple (Tiruchanoor) and Sri Kalahasti Temple (Rahu-Ketu Puja).',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function TirupatiDarshan({ onSelectDestination }) {
  const containerRef = useRef(null)

  const handleBookClick = (e) => {
    e.preventDefault()
    if (onSelectDestination) {
      onSelectDestination('Tirupati Balaji VIP Darshan')
    }
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="tirupati" className="bg-canvas py-20 md:py-28 relative overflow-hidden" ref={containerRef}>
      {/* Premium divine golden glow mesh backgrounds */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(40% 50% at 10% 20%, rgba(212,175,55,0.08) 0%, transparent 60%), radial-gradient(50% 60% at 85% 85%, rgba(11,45,107,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-lux relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          
          {/* Left Column: Premium Editorial Image Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy shadow-float group">
              <div className="img-fallback absolute inset-0" aria-hidden="true" />
              <img
                src="/images/idol.jpeg"
                alt="Tirupati Balaji Divine Idol"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden="true" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="font-mono text-xs uppercase tracking-widemono text-gold">Divine Presence</span>
                <h4 className="mt-2 font-display text-2xl font-semibold text-white tracking-tight">
                  Lord Tirupati Balaji
                </h4>
                <p className="mt-1 text-sm text-white/70">Sacred Darshan of the Holy Deity</p>
                
                {/* Enquire Now CTA (always visible) */}
                <button
                  onClick={handleBookClick}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold tracking-wide hover:text-white transition-colors duration-200"
                >
                  Enquire Now
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Overlapping floating card */}
            <div className="absolute -bottom-6 -right-4 hidden sm:flex w-64 flex-col rounded-2xl border border-gold/20 bg-white p-4 shadow-float backdrop-blur-md transition-all duration-500 hover:border-gold/55 lg:-right-10">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-navy">
                <img
                  src="/images/tirupati-gopurams.png"
                  alt="Ananda Nilayam Golden Gopurams"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <span className="font-mono text-[9px] uppercase tracking-widemono text-royal">Sacred Architecture</span>
                <p className="font-semibold text-xs text-ink mt-1">Ananda Nilayam Gopurams</p>
                <p className="text-[10px] text-body mt-0.5">Golden dome housing the holy deity</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features List */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4 text-gold">04 - Exclusive Pilgrimage</p>
            <span className="block h-px w-12 bg-gradient-to-r from-navy to-gold mb-6" aria-hidden="true" />
            
            <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink md:text-5xl md:leading-[1.1] [text-wrap:balance]">
              Tirupati Balaji Temple VIP Darshan
            </h2>
            
            <p className="mt-5 text-lg leading-relaxed text-body [text-wrap:pretty]">
              Embark on a sacred journey to the abode of Lord Venkateswara with absolute peace of mind. We choreograph every step of your pilgrimage by handling registration assistance, luxury transport, and five-star accommodations, so you can focus entirely on the spiritual experience.
            </p>

            <ul className="mt-9 space-y-5">
              {HIGHLIGHTS.map((item, i) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl border border-hairline bg-white transition-all duration-300 hover:border-gold/30 hover:shadow-soft group"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-ink group-hover:text-navy transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                onClick={handleBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-navy hover:bg-navy/95 text-white font-semibold text-sm px-8 py-4 shadow-soft hover:shadow-float hover:-translate-y-0.5 transition-all duration-300"
              >
                Customize Your Pilgrimage
              </a>
              <a
                href="https://wa.me/919962557733?text=Hi%20Praveen,%20I%20want%20to%20book%20a%20Tirupati%20VIP%20Darshan%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-hairline hover:border-gold/30 bg-white hover:bg-canvas text-body hover:text-ink font-semibold text-sm px-8 py-4 transition-all duration-300 gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                  <path d="M20.52 3.449C18.257 1.185 15.228 0 12.029 0 5.626 0 0.435 5.19 0.435 11.593c0 2.046 0.536 4.045 1.558 5.807L0 24l6.837-1.794c1.714 0.935 3.645 1.428 5.603 1.428h0.007c6.403 0 11.594-5.19 11.594-11.593 0-3.097-1.205-6.01-3.417-8.208zM12.029 22.128h-0.005c-1.776 0-3.522-0.477-5.045-1.378l-0.362-0.215-3.754 0.984 1.002-3.662-0.236-0.375c-0.993-1.579-1.517-3.418-1.517-5.309 0-5.525 4.495-10.02 10.021-10.02 2.677 0 5.193 1.043 7.084 2.937 1.891 1.894 2.934 4.412 2.933 7.091-0.001 5.526-4.498 10.02 10.021 10.021zM16.538 14.47c-0.306-0.153-1.815-0.896-2.096-0.998-0.281-0.103-0.485-0.153-0.69 0.153-0.204 0.306-0.79 0.997-0.968 1.202-0.177 0.205-0.355 0.231-0.66 0.078-0.306-0.153-1.291-0.476-2.458-1.519-0.908-0.809-1.521-1.808-1.7-2.113-0.177-0.306-0.019-0.471 0.134-0.624 0.137-0.137 0.306-0.357 0.458-0.536 0.153-0.178 0.204-0.306 0.306-0.51 0.102-0.204 0.051-0.382-0.026-0.536-0.077-0.153-0.69-1.662-0.945-2.276-0.246-0.596-0.495-0.515-0.69-0.525-0.178-0.01-0.382-0.01-0.586-0.01-0.204 0-0.535 0.077-0.816 0.382-0.281 0.306-1.072 1.047-1.072 2.553 0 1.506 1.1 2.959 1.252 3.163 0.153 0.204 2.163 3.303 5.239 4.632 0.731 0.315 1.303 0.504 1.748 0.644 0.736 0.233 1.405 0.201 1.933 0.122 0.591-0.088 1.815-0.742 2.07-1.458 0.255-0.716 0.255-1.33 0.178-1.458-0.076-0.128-0.281-0.204-0.586-0.357z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
