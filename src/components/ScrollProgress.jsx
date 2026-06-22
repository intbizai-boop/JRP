import { motion, useScroll, useSpring } from 'framer-motion'

// GPU-only scaleX progress bar. No per-frame React state, no layout reads.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-navy via-royal to-gold motion-reduce:hidden"
      aria-hidden="true"
    />
  )
}
