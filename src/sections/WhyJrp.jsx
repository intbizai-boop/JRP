import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PILLARS = [
  'Trusted global operator network',
  'Personalised itinerary for every client',
  'End-to-end logistics, single point of contact',
  'Fast visa & forex support',
  'Luxury concierge at every stage',
]

export default function WhyJrp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="why" className="bg-white py-20 md:py-24" ref={ref}>
      <div className="container-lux">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Left - associate partner callout */}
          <div className="relative overflow-hidden rounded-2xl bg-navy p-10 text-white grain">
            {/* Gradient glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  'radial-gradient(60% 80% at 0% 0%, rgba(42,125,225,0.4) 0%, transparent 60%), radial-gradient(50% 70% at 100% 100%, rgba(212,175,55,0.28) 0%, transparent 55%)',
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <p className="eyebrow text-gold">Associate Partner</p>
              <span className="mt-4 block h-px w-10 bg-gold/60" aria-hidden="true" />

              {/* Big number */}
              <div className="mt-8 flex items-end gap-3">
                <span className="font-display text-[5rem] font-semibold leading-none tracking-tightest text-gold">
                  15<span className="text-[3rem]">+</span>
                </span>
                <span className="mb-3 font-mono text-sm uppercase tracking-widemono text-white/60 leading-snug">
                  Years of<br />expertise
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-white/75 max-w-sm">
                JRP International is proudly backed by{' '}
                <strong className="font-semibold text-white">Blue Spice Holidays</strong> - a seasoned travel associate
                whose team brings over 15 years of hands-on experience across luxury tourism, corporate travel, and
                high-profile event logistics.
              </p>

              {/* BSH badge */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <span className="font-mono text-xs uppercase tracking-widemono text-white/70">
                  Blue Spice Holidays
                </span>
              </div>
            </div>
          </div>

          {/* Right - pillars checklist */}
          <div>
            <p className="eyebrow mb-4 text-royal">Why Choose JRP</p>
            <span className="block h-px w-10 bg-gradient-to-r from-navy to-gold mb-6" aria-hidden="true" />
            <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink md:text-4xl [text-wrap:balance]">
              The reliability of a global operator, the care of a private concierge.
            </h2>

            <motion.ul
              variants={container}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              className="mt-9 space-y-4"
            >
              {PILLARS.map((p) => (
                <motion.li
                  key={p}
                  variants={item}
                  className="group flex items-start gap-4 rounded-xl border border-hairline bg-canvas px-5 py-4 transition-all duration-300 hover:border-gold/30 hover:shadow-soft"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold/25">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-body group-hover:text-ink transition-colors duration-300">
                    {p}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

        </div>
      </div>
    </section>
  )
}
