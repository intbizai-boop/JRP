import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { WordReveal } from '../components/WordReveal'
import Marquee from '../components/Marquee'
import { MARQUEE_ITEMS } from '../data/content'

export default function Hero() {
  // Track screen size to crossfade desktop/mobile videos
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
  )

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const listener = (e) => setIsMobile(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  return (
    <section id="home" className="relative z-0 flex min-h-[100svh] flex-col justify-between overflow-hidden grain">
      {/* Background video layer. */}
      <div
        className="absolute inset-0 -z-20"
        aria-hidden="true"
      >
        {/* Fallback sits below the videos */}
        <div className="img-fallback absolute inset-0" />

        <motion.div
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          {/* Desktop Video */}
          <video
            src="/videos/desktop.mp4"
            poster="/images/hero.webp"
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 h-full w-full object-cover object-[35%_center] transition-opacity duration-1000 ${
              isMobile ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          />
          {/* Mobile Video */}
          <video
            src="/videos/mobile.mp4"
            poster="/images/hero.webp"
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 h-full w-full object-cover object-[35%_center] transition-opacity duration-1000 ${
              isMobile ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        </motion.div>
      </div>

      <div
        className="container-lux flex flex-1 flex-col justify-start pt-24 pb-8 text-navy md:pt-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-6 text-gold"
        >
          One Partner. Every Journey.
        </motion.p>

        <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[1.04] tracking-tightest md:text-7xl">
          <WordReveal text="Every Journey." className="block" delay={0.6} />
          <WordReveal text="Expertly Managed." className="block text-gold" delay={0.85} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-lg text-sm leading-relaxed text-navy/80 md:text-xl"
        >
          An elite travel management partner catering to corporate itineraries, bespoke leisure escapes, private aviation, and high-profile security logistics across the globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-col items-start gap-2.5 sm:flex-row sm:items-center"
        >
          <Button as="a" href="#contact" variant="glassGold" size="sm" magnetic>
            Get a Travel Consultation
          </Button>
          <Button as="a" href="#services" variant="glassNavy" size="sm" className="group">
            Explore Services <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.45 }}
        className="relative z-10 w-full border-t border-navy/10 bg-white/15 py-4 backdrop-blur-[2px] md:py-5"
      >
        <Marquee items={MARQUEE_ITEMS} textClassName="text-navy/85" />
      </motion.div>
    </section>
  )
}
