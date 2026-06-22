import { Section, SectionHeading, RevealGroup, Item } from '../components/Section'

const EVENT_ITEMS = [
  {
    title: 'Destination Weddings',
    description: 'Flawless celebrations in the world’s most beautiful venues, coordinated from guest arrivals to the final reception.',
  },
  {
    title: 'Corporate Conferences',
    description: 'Professional event production, technical setup, and attendee logistics for high-impact brand statements.',
  },
  {
    title: 'Executive Meetings',
    description: 'Discreet board meetings and leadership summits organized in secure, premium environments.',
  },
  {
    title: 'Private Celebrations',
    description: 'Milestone events, family anniversaries, and high-profile gatherings designed with complete privacy.',
  },
  {
    title: 'Luxury Parties',
    description: 'Stunning theme coordination, elite entertainment sourcing, and premium lighting and decor.',
  },
  {
    title: 'Group Travel Coordination',
    description: 'Seamless flights, check-ins, and hotel transfers for delegations and large guest lists.',
  },
  {
    title: 'Event Logistics',
    description: 'Precision timing, equipment transport, vendor management, and absolute schedule integrity.',
  },
  {
    title: 'Hospitality Management',
    description: 'Dedicated guest relationships, VIP lounge access, and onsite concierge assistance.',
  },
  {
    title: 'Luxury Transportation',
    description: 'Arrive in style with executive coaches, private yachts, or high-end wedding cars.',
  }
]

const ICONS = [
  // 1. Heart/Palace (Destination Weddings)
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // 2. Podium (Corporate Conferences)
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
  </svg>,
  // 3. User Group (Executive Meetings)
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // 4. Sparkles (Private Celebrations)
  <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h18M6 17h12m-7-5h3m-9 9h16a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z" />
  </svg>,
  // 5. Balloon/Star (Luxury Parties)
  <svg key="5" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.383-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
  </svg>,
  // 6. Airplane (Group Travel Coordination)
  <svg key="6" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>,
  // 7. Clipboard List (Event Logistics)
  <svg key="7" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>,
  // 8. Service Bell (Hospitality Management)
  <svg key="8" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>,
  // 9. Sports Car (Luxury Transportation)
  <svg key="9" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
]

export default function Events() {
  return (
    <Section id="events" className="bg-tint">
      <SectionHeading
        eyebrow="04 — Weddings & Events"
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
