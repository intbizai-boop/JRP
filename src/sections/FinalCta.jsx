import { Reveal } from '../components/Section'
import { Button } from '../components/Button'

export default function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy py-24 text-white md:py-32" style={{ colorScheme: 'dark' }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 80% at 20% 0%, rgba(42,125,225,0.45) 0%, transparent 60%), radial-gradient(50% 70% at 90% 100%, rgba(212,175,55,0.3) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="container-lux relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tightest md:text-6xl">
            Where Will Your Next Journey Take You?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Whether managing complex corporate operations or curating private milestones, we deliver flawless travel experiences with absolute discretion and precision.
          </p>
          <div className="mt-10 flex justify-center">
            <Button as="a" href="#contact" variant="gold" magnetic>
              Speak With Our Team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
