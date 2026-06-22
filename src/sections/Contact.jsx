import { Button } from '../components/Button'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-20 text-white md:py-28 grain"
      style={{ colorScheme: 'dark' }}
    >
      {/* Same gradient as VIP Services */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(50% 60% at 90% 10%, rgba(212,175,55,0.18) 0%, transparent 60%), radial-gradient(60% 70% at 0% 100%, rgba(42,125,225,0.22) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-lux relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left — headings & contact meta */}
          <div>
            <p className="eyebrow mb-4 text-gold">Contact</p>
            <span className="mb-6 block h-px w-12 bg-gradient-to-r from-navy to-gold" aria-hidden="true" />
            <h2 className="font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest text-white md:text-5xl [text-wrap:balance]">
              Direct Concierge Access
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70 [text-wrap:pretty]">
              Connect directly with our Chief Travel Coordinator to outline your bespoke itinerary, secure private transport, or orchestrate elite event logistics.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widemono text-white/40">Concierge Director</dt>
                <dd className="mt-1 font-semibold text-lg text-white">Praveen</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widemono text-white/40">Response time</dt>
                <dd className="mt-1 text-white/80">Immediate connection.</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widemono text-white/40">Coverage</dt>
                <dd className="mt-1 text-white/80">India &amp; worldwide.</dd>
              </div>
            </dl>
          </div>

          {/* Right — action card */}
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-8 shadow-soft backdrop-blur-sm md:p-10">
            <h3 className="font-display text-2xl font-semibold text-white">Start Your Consultation</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Speak directly with Praveen to coordinate your custom travel itinerary, VIP transfer, or private event logistics.
            </p>

            <div className="mt-8 space-y-4">
              <Button
                as="a"
                href="tel:+919962557733"
                variant="gold"
                className="w-full justify-center text-center py-4 text-base font-semibold tracking-wide flex items-center gap-2.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Praveen Now
              </Button>

              <Button
                as="a"
                href="https://wa.me/919962557733?text=Hi%20Praveen,%20I%20am%20interested%20in%20JRP%20travel%20services."
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full justify-center text-center py-4 text-base font-semibold tracking-wide flex items-center gap-2.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.449C18.257 1.185 15.228 0 12.029 0 5.626 0 0.435 5.19 0.435 11.593c0 2.046 0.536 4.045 1.558 5.807L0 24l6.837-1.794c1.714 0.935 3.645 1.428 5.603 1.428h0.007c6.403 0 11.594-5.19 11.594-11.593 0-3.097-1.205-6.01-3.417-8.208zM12.029 22.128h-0.005c-1.776 0-3.522-0.477-5.045-1.378l-0.362-0.215-3.754 0.984 1.002-3.662-0.236-0.375c-0.993-1.579-1.517-3.418-1.517-5.309 0-5.525 4.495-10.02 10.021-10.02 2.677 0 5.193 1.043 7.084 2.937 1.891 1.894 2.934 4.412 2.933 7.091-0.001 5.526-4.498 10.021-10.021 10.021zM16.538 14.47c-0.306-0.153-1.815-0.896-2.096-0.998-0.281-0.103-0.485-0.153-0.69 0.153-0.204 0.306-0.79 0.997-0.968 1.202-0.177 0.205-0.355 0.231-0.66 0.078-0.306-0.153-1.291-0.476-2.458-1.519-0.908-0.809-1.521-1.808-1.7-2.113-0.177-0.306-0.019-0.471 0.134-0.624 0.137-0.137 0.306-0.357 0.458-0.536 0.153-0.178 0.204-0.306 0.306-0.51 0.102-0.204 0.051-0.382-0.026-0.536-0.077-0.153-0.69-1.662-0.945-2.276-0.246-0.596-0.495-0.515-0.69-0.525-0.178-0.01-0.382-0.01-0.586-0.01-0.204 0-0.535 0.077-0.816 0.382-0.281 0.306-1.072 1.047-1.072 2.553 0 1.506 1.1 2.959 1.252 3.163 0.153 0.204 2.163 3.303 5.239 4.632 0.731 0.315 1.303 0.504 1.748 0.644 0.736 0.233 1.405 0.201 1.933 0.122 0.591-0.088 1.815-0.742 2.07-1.458 0.255-0.716 0.255-1.33 0.178-1.458-0.076-0.128-0.281-0.204-0.586-0.357z" />
                </svg>
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
