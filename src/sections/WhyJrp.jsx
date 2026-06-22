import { Section, SectionHeading, RevealGroup, Item } from '../components/Section'
import { WHY_JRP } from '../data/content'

const ICONS = [
  // 1. Globe (Trusted Global Partners)
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>,
  // 2. User/Concierge (Personalized Service)
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
  // 3. Arrow exchange (End-To-End Coordination)
  <svg key="3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>,
  // 4. Briefcase (Corporate Travel Expertise)
  <svg key="4" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // 5. Shield/Crown (VIP Travel Solutions)
  <svg key="5" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  // 6. Calendar (Event Management Expertise)
  <svg key="6" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // 7. Stamp/Shield (Fast Visa Support)
  <svg key="7" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // 8. Key (Luxury Concierge Assistance)
  <svg key="8" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-2-2a2 2 0 00-2 2m2-2V5a2 2 0 10-4 0v2m7 0h3M5 20h14a2 2 0 002-2V10a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
]

export default function WhyJrp() {
  return (
    <Section id="why" className="bg-white">
      <SectionHeading
        eyebrow="Why JRP"
        title="Why Clients Choose JRP International"
        lead="The reliability of a global operator with the attentiveness of a private concierge."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_JRP.map((w, idx) => (
          <Item
            key={w.title}
            className="group relative min-w-0 overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-white to-canvas/30 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-float"
          >
            {/* Subtle glow background element */}
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gold/5 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:bg-gold/10" aria-hidden="true" />
            
            {/* Icon circle */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/[0.04] text-royal transition-colors duration-300 group-hover:bg-gold/[0.08] group-hover:text-gold">
              {ICONS[idx] || ICONS[0]}
            </div>

            <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink">
              {w.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-body">
              {w.body}
            </p>
          </Item>
        ))}
      </RevealGroup>
    </Section>
  )
}
