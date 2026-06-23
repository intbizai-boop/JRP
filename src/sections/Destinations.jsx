import { Section, SectionHeading, RevealGroup, Item } from '../components/Section'
import { DESTINATIONS } from '../data/content'
import ParallaxImage from '../components/ParallaxImage'

function DestinationCard({ name, tagline, image, span = false, onSelectDestination }) {
  const handleEnquire = (e) => {
    e.preventDefault()
    if (onSelectDestination) {
      onSelectDestination(name)
    }
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Item
      className={`group relative flex min-w-0 items-end overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-soft transition-[transform,box-shadow] duration-500 ease-lux hover:-translate-y-1 hover:shadow-float grain min-h-[200px] ${
        span ? 'sm:col-span-2 min-h-[240px]' : ''
      }`}
    >
      {/* Fallback sits below the image */}
      <div className="img-fallback absolute inset-0" aria-hidden="true" />

      {/* Reusable ParallaxImage component */}
      <ParallaxImage src={image} alt={`${name} - luxury travel destination`} />

      {/* Gradient overlay sits on top of image */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-navy/30 to-transparent" aria-hidden="true" />

      {/* Text content sits on top of everything */}
      <div className="relative z-10 translate-y-2 transition-transform duration-500 ease-lux group-hover:translate-y-0 w-full">
        <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{name}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">{tagline}</p>
        
        {/* Enquire Now CTA (always visible) */}
        <button
          onClick={handleEnquire}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold tracking-wide hover:text-white transition-colors duration-200"
        >
          Enquire Now
          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <span className="mt-4 block h-px w-0 bg-gold transition-[width] duration-500 ease-lux group-hover:w-16" aria-hidden="true" />
      </div>
    </Item>
  )
}

export default function Destinations({ onSelectDestination }) {
  return (
    <Section id="destinations" className="bg-base">
      <SectionHeading
        eyebrow="02 - Popular Destinations"
        title="Places worth the journey, planned to the detail"
        lead="Hand-picked domestic escapes and international experiences, each designed around how you want to travel."
      />

      <div className="mt-14">
        <p className="eyebrow mb-5">Domestic Experiences</p>
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.domestic.map((d, i) => (
            <DestinationCard key={d.name} {...d} span={i === 0} onSelectDestination={onSelectDestination} />
          ))}
        </RevealGroup>
      </div>

      <div className="mt-12">
        <p className="eyebrow mb-5">International Experiences</p>
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.international.map((d, i) => (
            <DestinationCard key={d.name} {...d} span={i === 0 || d.name === 'Malaysia' || d.name === 'Sri Lanka'} onSelectDestination={onSelectDestination} />
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
