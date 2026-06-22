import { NAV_LINKS } from '../data/content'

const COLUMNS = [
  { heading: 'Travel Services', links: ['Domestic Flights', 'International Flights', 'Holiday Packages', 'Visa Assistance', 'Cruise Experiences'] },
  { heading: 'Events & Weddings', links: ['Destination Weddings', 'Conferences', 'Corporate Meetings', 'Private Celebrations', 'Event Logistics'] },
  { heading: 'VIP Services', links: ['VIP Charter Flights', 'Executive Chauffeurs', 'Private Security', 'Executive Protection', 'Meet & Assist'] },
  { heading: 'Contact', links: ['Get a Consultation', 'Corporate Travel', 'Partnerships', 'Careers'] },
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-lux py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/Logo.webp" alt="JRP International" width="40" height="40" className="h-10 w-10 rounded-full object-cover ring-1 ring-hairline p-[2.5px] bg-white" />
              <span className="font-display text-lg font-semibold text-ink">JRP International</span>
            </div>
            <p className="mt-4 font-display text-xl text-ink">Your Journey.<br />Our Priority.</p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="font-mono text-[11px] uppercase tracking-widemono text-mute">{col.heading}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#contact" className="text-sm text-body transition-colors hover:text-ink">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-mute">© {new Date().getFullYear()} JRP International. All rights reserved.</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-xs text-body transition-colors hover:text-ink">{l.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
