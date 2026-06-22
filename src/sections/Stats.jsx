import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../data/content'

function CountUp({ value }) {
  const [displayValue, setDisplayValue] = useState('0')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    // Match digits + decimals, and capture non-digit suffixes (like +, %, /7, etc.)
    const match = value.match(/^([\d.]+)(.*)$/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const targetNum = parseFloat(match[1])
    const suffix = match[2]
    const duration = 1600 // duration of count animation in ms
    const startTime = performance.now()

    function animate(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress * (2 - progress) // Ease-out quad formula
      
      const current = easeProgress * targetNum
      
      if (Number.isInteger(targetNum)) {
        setDisplayValue(Math.floor(current) + suffix)
      } else {
        setDisplayValue(current.toFixed(0) + suffix)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, isInView])

  return <span ref={ref}>{displayValue}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="stats" ref={ref} className="relative overflow-hidden bg-navy py-16 text-white grain" style={{ colorScheme: 'dark' }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(50% 80% at 15% 0%, rgba(42,125,225,0.4) 0%, transparent 60%), radial-gradient(50% 80% at 90% 100%, rgba(212,175,55,0.25) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="container-lux relative">
        <motion.dl
          variants={listVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-2 gap-y-10 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={itemVariants} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight text-gold md:text-5xl [font-variant-numeric:tabular-nums]">
                <CountUp value={s.value} />
              </dd>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widemono text-white/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
