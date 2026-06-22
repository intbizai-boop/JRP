# JRP International

Premium conversion-focused landing page for **JRP International** — a luxury travel and event concierge company. Lead-generation site for travel, charter aviation, weddings, events, conferences, VIP transportation, and executive travel services.

> One Partner. Every Journey.

## Tech Stack

- **React 18 + Vite** — fast, modern build
- **Tailwind CSS** — design-system tokens (navy / royal / gold / editorial type)
- **Framer Motion** — fade reveals, soft parallax, premium transitions (respects `prefers-reduced-motion`)
- **Vercel** — deployment target (`vercel.json` included)

## Design System

- **Type:** Playfair Display (headlines), Inter (body), Space Mono (micro labels)
- **Palette:** Navy `#0B2D6B`, Royal `#2A7DE1`, Gold `#D4AF37`, Base `#FFFFFF`, Section `#F8FAFC`, Soft Blue Tint `#EEF5FF`, Text `#0F172A`
- Vercel-inspired rigor: stacked shadows, hairline borders, mono eyebrows, mesh-gradient atmosphere, pill CTAs.

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Structure

```
index.html              # SEO meta, Open Graph, JSON-LD structured data, fonts
public/Logo.jpeg        # brand logo (served at /Logo.jpeg)
src/
  App.jsx               # layout + skip link + reduced-motion config
  index.css             # Tailwind layers + base styles
  data/content.js       # all copy (services, destinations, testimonials, etc.)
  components/           # Header, Button, Section primitives, motion presets
  sections/             # Hero, Services, Destinations, VipServices, Events,
                        # WhyJrp, Testimonials, Contact, FinalCta, Footer
```

## Form Integration

The consultation form in `src/sections/Contact.jsx` currently simulates submission. Wire the `handleSubmit` function to your CRM or form endpoint (e.g. a serverless function, Formspree, or an API route) to start capturing leads.

## Deployment

Push to the repository and import into Vercel. The included `vercel.json` provides SPA rewrites. Build command `npm run build`, output directory `dist`.
