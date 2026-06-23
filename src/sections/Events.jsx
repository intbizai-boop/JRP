import { Section, SectionHeading, RevealGroup, Item } from '../components/Section'
import ParallaxImage from '../components/ParallaxImage'

const EVENT_ITEMS = [
  {
    title: 'Destination Weddings',
    description: 'Flawless celebrations in the world’s most beautiful venues, coordinated from guest arrivals to the final reception.',
    image: '/images/destination-weddings.jpeg',
  },
  {
    title: 'Luxury Wedding Cars',
    description: 'Prestige vehicles (sedans, SUVs, and vintage classics) dressed for your big day and chauffeured to perfection.',
    image: '/images/luxury -car.jpeg',
  },
  {
    title: 'Luxury Coach & Group Bus',
    description: 'Stylish, comfortable coach and bus transfers for large wedding parties, corporate groups, and delegations.',
    image: '/images/luxury-coach.jpeg',
  },
  {
    title: 'Bouncer & Security Services',
    description: 'Professional security personnel for events, ensuring guest safety and smooth crowd management throughout.',
    image: '/images/bouncer.jpeg',
  },
  {
    title: 'Conferences, Meetings & Training',
    description: 'Professional event production, technical setup, and end-to-end logistics for high-impact conferences, corporate meetings, and training seminars.',
    image: '/images/Conferences,meeting.training.jpeg',
  },
]

export default function Events() {
  return (
    <Section id="events" className="bg-tint">
      <SectionHeading
        eyebrow="05 - Weddings & Events"
        title="Every Occasion Elevated"
        lead="From destination weddings to executive conferences, we manage the logistics, hospitality, and transportation so every moment lands."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EVENT_ITEMS.map((item, i) => {
          const isFeatured = i === 0
          return (
            <Item
              key={item.title}
              className={`group relative flex min-w-0 items-end overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-soft transition-[transform,box-shadow] duration-500 ease-lux hover:-translate-y-1 hover:shadow-float min-h-[220px] ${
                isFeatured ? 'sm:col-span-2 min-h-[260px]' : ''
              }`}
            >
              {/* Fallback sits below the image */}
              <div className="img-fallback absolute inset-0" aria-hidden="true" />

              {/* Parallax background image */}
              <ParallaxImage src={item.image} alt={item.title} />

              {/* Gradient overlay sits on top of image */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" aria-hidden="true" />

              {/* Text content sits on top of everything */}
              <div className="relative z-10 w-full">
                <span className="font-mono text-[11px] text-gold" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                
                <h3 className="mt-2 font-display font-semibold tracking-tight text-xl md:text-2xl">
                  {item.title}
                </h3>
                
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:opacity-80">
                  {item.description}
                </p>
                
                <span className="mt-4 block h-px w-10 bg-gold/70 transition-[width] duration-500 group-hover:w-20" aria-hidden="true" />
              </div>
            </Item>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
