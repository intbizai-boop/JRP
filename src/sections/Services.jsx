import { Section, SectionHeading, RevealGroup, Item } from '../components/Section'
import { SERVICES } from '../data/content'
import ParallaxImage from '../components/ParallaxImage'

function ServiceTile({ service, index, onSelectService }) {
  const handleEnquire = (e) => {
    e.preventDefault()
    if (onSelectService) {
      onSelectService(service.title)
    }
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Item
      className="group relative flex min-w-0 items-end overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-soft transition-[transform,box-shadow] duration-500 ease-lux hover:-translate-y-1 hover:shadow-float grain min-h-[220px]"
    >
      {/* Fallback sits below the image */}
      <div className="img-fallback absolute inset-0" aria-hidden="true" />

      {/* Reusable ParallaxImage Component */}
      <ParallaxImage
        src={service.image}
        alt={service.title}
        className={service.image.includes('vip.webp') ? 'object-[center_40%]' : ''}
      />

      {/* Gradient overlay sits on top of image */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" aria-hidden="true" />

      {/* Text content sits on top of everything */}
      <div className="relative z-10 w-full">
        <span className="font-mono text-[11px] text-gold" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:opacity-80">
          {service.outcome}
        </p>
        
        {/* CTA Button */}
        <button
          onClick={handleEnquire}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold tracking-wide hover:text-white transition-colors duration-200"
        >
          Enquire Now
          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <span className="mt-4 block h-px w-10 bg-gold/70 transition-[width] duration-500 group-hover:w-20" aria-hidden="true" />
      </div>
    </Item>
  )
}

export default function Services({ onSelectService }) {
  return (
    <Section id="services" className="bg-tint">
      <SectionHeading
        eyebrow="01 - Premium Services"
        title="Everything your journey requires, under one roof"
        lead="From first enquiry to final arrival, JRP coordinates every detail so you experience only the result."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <ServiceTile key={s.title} service={s} index={i} onSelectService={onSelectService} />
        ))}
      </RevealGroup>
    </Section>
  )
}
