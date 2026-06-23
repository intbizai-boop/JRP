import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Split the VIP services into pinned panels that cross-fade as you scroll.
const PANELS = [
  {
    title: 'Private Aviation & VIP Charters',
    body: 'Charter flights on your schedule, with seamless tarmac-to-destination discretion for principals and delegations.',
    items: ['VIP Charter Flights', 'Airport Meet & Assist', 'Forex Assistance'],
    image: '/images/Charter-flights-booking.jpeg',
  },
  {
    title: 'Ground, Wedding & Events',
    body: 'Luxury vehicles, coaches for groups, and trained security - so every arrival, wedding, or celebration moves without friction.',
    items: ['Luxury Wedding Cars', 'Luxury Coach / Group Bus', 'Executive Chauffeurs', 'Bouncer & Security Services'],
    image: '/images/luxury-coach.jpeg',
  },
  {
    title: 'Celebrity & High-Profile Travel',
    body: 'Confidential, end-to-end travel management for celebrities, dignitaries, and government delegations.',
    items: ['Celebrity Travel Management', 'Executive Protection', 'Political Delegation Logistics', 'VIP Temple Darshan'],
    image: '/images/idol.jpeg',
  },
]

function Panel({ panel, index, total, progress }) {
  // Each panel owns a slice of the scroll range and fades through it.
  const start = index / total
  const end = (index + 1) / total
  const mid = (start + end) / 2
  const opacity = useTransform(
    progress,
    [start, mid - 0.08, mid + 0.08, end],
    index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0],
  )
  const y = useTransform(progress, [start, end], ['24px', '-24px'])

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full w-full motion-reduce:!opacity-100 motion-reduce:!transform-none"
    >
      {/* Left Column: Text & Items */}
      <div className="md:col-span-7 flex flex-col justify-center">
        <span className="font-mono text-xs text-gold" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl leading-tight">
          {panel.title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">{panel.body}</p>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {panel.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs text-white/85"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Premium Image Card */}
      <div className="md:col-span-5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-float">
        <img
          src={panel.image}
          alt={panel.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-lux hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden="true" />
      </div>
    </motion.div>
  )
}

export default function VipServices() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="vip"
      ref={ref}
      className="relative bg-ink text-white"
      style={{ colorScheme: 'dark', height: '280vh' }}
      aria-label="VIP and Executive Services"
    >
      {/* Sticky stage (native CSS sticky - cheap, smooth, GPU-friendly). */}
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden grain">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(50% 60% at 90% 10%, rgba(212,175,55,0.18) 0%, transparent 60%), radial-gradient(60% 70% at 0% 100%, rgba(42,125,225,0.22) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="container-lux relative grid w-full items-center gap-12 lg:grid-cols-[0.70fr_1.30fr]">
          <div>
            <p className="eyebrow mb-4 text-gold">03 - VIP & Executive Services</p>
            <h2 className="max-w-md font-display text-4xl font-semibold tracking-tightest md:text-6xl md:leading-[1.05]">
              Travel Beyond Expectations.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
              For principals, delegations, and high-profile clients who require discretion,
              precision, and protection at every stage.
            </p>
          </div>

          {/* Cross-fading panel stack. */}
          <div className="relative min-h-[520px] md:min-h-[420px] lg:min-h-[360px]">
            {PANELS.map((panel, i) => (
              <Panel
                key={panel.title}
                panel={panel}
                index={i}
                total={PANELS.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
