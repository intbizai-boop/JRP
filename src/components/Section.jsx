import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from './motion'

export function Section({ id, className = '', children, ...rest }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`} {...rest}>
      <div className="container-lux">{children}</div>
    </section>
  )
}

export function Reveal({ children, className = '', as = 'div' }) {
  const Comp = as
  return (
    <Comp className={className}>
      {children}
    </Comp>
  )
}

export function RevealGroup({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function Item({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function SectionHeading({ eyebrow, title, lead, align = 'left', accent = true }) {
  const isCenter = align === 'center'
  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      {accent && (
        <span
          className={`mb-6 block h-px w-12 bg-gradient-to-r from-navy to-gold ${isCenter ? 'mx-auto' : ''}`}
          aria-hidden="true"
        />
      )}
      <h2 className="font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest text-ink md:text-5xl [text-wrap:balance]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-body [text-wrap:pretty]">{lead}</p>}
    </div>
  )
}
