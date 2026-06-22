import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollDivider() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Symmetrical scroll horizontal line reveal
  const scaleX = useTransform(scrollYProgress, [0.08, 0.45], [0, 1])

  return (
    <div ref={ref} className="relative w-full h-px overflow-hidden max-w-container mx-auto px-6 md:px-8 my-8 md:my-12" aria-hidden="true">
      <motion.div
        style={{ scaleX, originX: 0.5 }}
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
    </div>
  )
}
