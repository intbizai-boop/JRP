import { Section, SectionHeading, RevealGroup, Item } from '../components/Section'

const EVENT_ITEMS = [
  {
    title: 'Destination Weddings',
    description: 'Flawless celebrations in the world’s most beautiful venues, coordinated from guest arrivals to the final reception.',
  },
  {
    title: 'Luxury Wedding Cars',
    description: 'Prestige vehicles (sedans, SUVs, and vintage classics) dressed for your big day and chauffeured to perfection.',
  },
  {
    title: 'Luxury Coach & Group Bus',
    description: 'Stylish, comfortable coach and bus transfers for large wedding parties, corporate groups, and delegations.',
  },
  {
    title: 'Bouncer & Security Services',
    description: 'Professional security personnel for events, ensuring guest safety and smooth crowd management throughout.',
  },
  {
    title: 'Corporate Conferences',
    description: 'Professional event production, technical setup, and attendee logistics for high-impact brand statements.',
  },
]

const ICONS = [
  // 1. Heart (Destination Weddings)
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // 2. Car (Luxury Wedding Cars)
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 17H6a2 2 0 01-2-2v-4l2.5-5h11l2.5 5v4a2 2 0 01-2 2h-2m-8 0a2 2 0 104 0m4 0a2 2 0 104 0" />
  </svg>,
  // 3. Bus (Luxury Coach & Group Bus)
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 6H5a2 2 0 00-2 2v8a2 2 0 002 2h1m10-12h3a2 2 0 012 2v8a2 2 0 01-2 2h-1M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M8 6h8m-6 9a1 1 0 102 0 1 1 0 00-2 0m4 0a1 1 0 102 0 1 1 0 00-2 0" />
  </svg>,
  // 4. Shield (Bouncer & Security)
  <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // 5. Podium (Corporate Conferences)
  <svg key="5" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
  </svg>,
]

export default function Events() {
  return (
    <Section id="events" className="bg-tint">
      <SectionHeading
        eyebrow="05 - Weddings & Events"
        title="Every Occasion Elevated"
        lead="From destination weddings to executive conferences, we manage the logistics, hospitality, and transportation so every moment lands."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {EVENT_ITEMS.map((item, i) => {
          const isFeatured = i === 0
          return (
            <Item
              key={item.title}
              className={`group flex min-w-0 flex-col justify-between rounded-2xl border border-hairline p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-float ${
                isFeatured ? 'md:col-span-2 bg-navy text-white' : 'bg-white text-ink'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className={`font-mono text-xs font-semibold ${isFeatured ? 'text-gold' : 'text-gold'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 ${
                    isFeatured ? 'bg-white/[0.08] text-gold' : 'bg-royal/[0.04] text-royal group-hover:bg-gold/[0.08] group-hover:text-gold'
                  }`}>
                    {ICONS[i] || ICONS[0]}
                  </div>
                </div>
                
                <h3 className={`font-display font-semibold tracking-tight ${
                  isFeatured ? 'text-2xl md:text-3xl mt-6' : 'text-lg mt-5'
                }`}>
                  {item.title}
                </h3>
                
                <p className={`mt-3 leading-relaxed ${
                  isFeatured ? 'text-white/80 text-base max-w-xl' : 'text-body text-[13.5px]'
                }`}>
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <span className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${
                  isFeatured ? 'text-gold' : 'text-royal group-hover:text-gold'
                }`} aria-hidden="true">
                  →
                </span>
              </div>
            </Item>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
