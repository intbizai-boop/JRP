import { useState, useEffect } from 'react'
import { Button } from '../components/Button'

const FACILITIES = ['3 Star', '4 Star', 'Luxury Resorts']

function FieldLabel({ htmlFor, children, required }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-mono text-[11px] uppercase tracking-widemono text-white/50 mb-1.5"
    >
      {children}
      {required && <span className="ml-1 text-gold">*</span>}
    </label>
  )
}

function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25
        transition-colors duration-200 outline-none
        focus:border-gold/50 focus:ring-1 focus:ring-gold/30 focus:bg-white/[0.09]
        hover:border-white/20 ${className}`}
      {...props}
    />
  )
}

function Select({ className = '', children, ...props }) {
  return (
    <select
      className={`w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-3 text-sm text-white
        transition-colors duration-200 outline-none
        focus:border-gold/50 focus:ring-1 focus:ring-gold/30
        hover:border-white/20 appearance-none ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

function Textarea({ className = '', ...props }) {
  return (
    <textarea
      rows={4}
      className={`w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25
        transition-colors duration-200 outline-none resize-none
        focus:border-gold/50 focus:ring-1 focus:ring-gold/30 focus:bg-white/[0.09]
        hover:border-white/20 ${className}`}
      {...props}
    />
  )
}

const initialForm = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  adults: '',
  children: '',
  childrenAges: '',
  rooms: '',
  travelDateFrom: '',
  travelDateTo: '',
  duration: '',
  facilities: '',
  specialRequests: '',
}

export default function Contact({ selectedEnquiry, setSelectedEnquiry }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (selectedEnquiry) {
      setForm(prev => ({
        ...prev,
        destination: selectedEnquiry.name,
        specialRequests: `Interested in JRP ${selectedEnquiry.type}: ${selectedEnquiry.name}. Please contact me with more details.`,
      }))
    }
  }, [selectedEnquiry])

  const handleClearSelection = () => {
    if (setSelectedEnquiry) {
      setSelectedEnquiry(null)
    }
    setForm(prev => ({
      ...prev,
      destination: '',
      specialRequests: '',
    }))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7b492d10-3b0e-4c95-8aee-cc46735c38e9',
          subject: `✈️ New Travel Enquiry – ${form.destination} (${form.name})`,
          from_name: 'JRP International',
          replyto: form.email,
          ...form,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.success) {
        throw new Error(data.message || `Submission failed with status ${res.status}`)
      }

      setStatus('success')
      setForm(initialForm)
      if (setSelectedEnquiry) {
        setSelectedEnquiry(null)
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-20 text-white md:py-28 grain"
      style={{ colorScheme: 'dark' }}
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(50% 60% at 90% 10%, rgba(212,175,55,0.18) 0%, transparent 60%), radial-gradient(60% 70% at 0% 100%, rgba(42,125,225,0.22) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-lux relative">
        {/* Section header */}
        <div className="mb-12 max-w-xl">
          <p className="eyebrow mb-4 text-gold">Plan Your Journey</p>
          <span className="mb-6 block h-px w-12 bg-gradient-to-r from-navy to-gold" aria-hidden="true" />
          <h2 className="font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest text-white md:text-5xl [text-wrap:balance]">
            Request a Bespoke<br />Travel Experience
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70 [text-wrap:pretty]">
            Fill in your travel preferences below and our concierge team will craft a personalised itinerary for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Form */}
          <div className="w-full">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-soft backdrop-blur-sm md:p-10">
              <h3 className="font-display text-2xl font-semibold text-white mb-8">Your Travel Details</h3>

              {selectedEnquiry && (
                <div className="mb-8 rounded-xl border border-gold/20 bg-gold/[0.02] p-5 backdrop-blur-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-gold">Selected {selectedEnquiry.type}</span>
                      <h4 className="font-semibold text-white text-base mt-0.5">{selectedEnquiry.name}</h4>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={`https://wa.me/919962557733?text=${encodeURIComponent(
                          `Hi Praveen, I am interested in JRP ${selectedEnquiry.type.toLowerCase()}: ${selectedEnquiry.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold text-xs px-4 py-2.5 shadow-soft transition-all duration-200 gap-1.5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.52 3.449C18.257 1.185 15.228 0 12.029 0 5.626 0 0.435 5.19 0.435 11.593c0 2.046 0.536 4.045 1.558 5.807L0 24l6.837-1.794c1.714 0.935 3.645 1.428 5.603 1.428h0.007c6.403 0 11.594-5.19 11.594-11.593 0-3.097-1.205-6.01-3.417-8.208zM12.029 22.128h-0.005c-1.776 0-3.522-0.477-5.045-1.378l-0.362-0.215-3.754 0.984 1.002-3.662-0.236-0.375c-0.993-1.579-1.517-3.418-1.517-5.309 0-5.525 4.495-10.02 10.021-10.02 2.677 0 5.193 1.043 7.084 2.937 1.891 1.894 2.934 4.412 2.933 7.091-0.001 5.526-4.498 10.02 10.021 10.021zM16.538 14.47c-0.306-0.153-1.815-0.896-2.096-0.998-0.281-0.103-0.485-0.153-0.69 0.153-0.204 0.306-0.79 0.997-0.968 1.202-0.177 0.205-0.355 0.231-0.66 0.078-0.306-0.153-1.291-0.476-2.458-1.519-0.908-0.809-1.521-1.808-1.7-2.113-0.177-0.306-0.019-0.471 0.134-0.624 0.137-0.137 0.306-0.357 0.458-0.536 0.153-0.178 0.204-0.306 0.306-0.51 0.102-0.204 0.051-0.382-0.026-0.536-0.077-0.153-0.69-1.662-0.945-2.276-0.246-0.596-0.495-0.515-0.69-0.525-0.178-0.01-0.382-0.01-0.586-0.01-0.204 0-0.535 0.077-0.816 0.382-0.281 0.306-1.072 1.047-1.072 2.553 0 1.506 1.1 2.959 1.252 3.163 0.153 0.204 2.163 3.303 5.239 4.632 0.731 0.315 1.303 0.504 1.748 0.644 0.736 0.233 1.405 0.201 1.933 0.122 0.591-0.088 1.815-0.742 2.07-1.458 0.255-0.716 0.255-1.33 0.178-1.458-0.076-0.128-0.281-0.204-0.586-0.357z" />
                        </svg>
                        WhatsApp
                      </a>
                      <button
                        onClick={handleClearSelection}
                        className="text-xs text-white/40 hover:text-white underline underline-offset-2 transition-colors"
                        type="button"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 ring-2 ring-gold/40">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-semibold text-white">Request Received!</h4>
                    <p className="mt-3 text-white/70 max-w-sm mx-auto leading-relaxed">
                      Thank you! Praveen will review your travel preferences and reach out to you shortly with a personalised itinerary.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm text-gold/80 hover:text-gold underline underline-offset-4 transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="name" required>Full Name</FieldLabel>
                      <Input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="email" required>Email Address</FieldLabel>
                      <Input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel htmlFor="phone">Phone / WhatsApp</FieldLabel>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 99999 00000" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.07]" role="separator" />

                  {/* Destination */}
                  <div>
                    <FieldLabel htmlFor="destination" required>Destination Desired</FieldLabel>
                    <Input
                      id="destination"
                      name="destination"
                      type="text"
                      required
                      placeholder="e.g. Dubai, Maldives, Europe…"
                      value={form.destination}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Travellers */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div>
                      <FieldLabel htmlFor="adults" required>No. of Adults</FieldLabel>
                      <Select id="adults" name="adults" required value={form.adults} onChange={handleChange}>
                        <option value="" disabled>Select</option>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <FieldLabel htmlFor="children">No. of Children</FieldLabel>
                      <Select id="children" name="children" value={form.children} onChange={handleChange}>
                        <option value="">None</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <FieldLabel htmlFor="rooms" required>No. of Rooms</FieldLabel>
                      <Select id="rooms" name="rooms" required value={form.rooms} onChange={handleChange}>
                        <option value="" disabled>Select</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  {/* Children ages */}
                  {form.children && parseInt(form.children) > 0 && (
                    <div>
                      <FieldLabel htmlFor="childrenAges">Children's Ages</FieldLabel>
                      <Input
                        id="childrenAges"
                        name="childrenAges"
                        type="text"
                        placeholder="e.g. 5, 8, 12"
                        value={form.childrenAges}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="h-px bg-white/[0.07]" role="separator" />

                  {/* Travel Dates */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="travelDateFrom" required>Travel Date (From)</FieldLabel>
                      <Input
                        id="travelDateFrom"
                        name="travelDateFrom"
                        type="date"
                        required
                        value={form.travelDateFrom}
                        onChange={handleChange}
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="travelDateTo">Travel Date (To)</FieldLabel>
                      <Input
                        id="travelDateTo"
                        name="travelDateTo"
                        type="date"
                        value={form.travelDateTo}
                        onChange={handleChange}
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <FieldLabel htmlFor="duration">Duration of Tour</FieldLabel>
                    <Input
                      id="duration"
                      name="duration"
                      type="text"
                      placeholder="e.g. 7 nights / 8 days"
                      value={form.duration}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="h-px bg-white/[0.07]" role="separator" />

                  {/* Facilities */}
                  <div>
                    <FieldLabel htmlFor="facilities" required>Accommodation Preference</FieldLabel>
                    <div className="flex flex-wrap gap-3 mt-1" role="group" aria-label="Accommodation preference">
                      {FACILITIES.map(f => (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setForm(prev => ({ ...prev, facilities: f }))}
                          className={`rounded-full px-5 py-2 text-sm font-medium border transition-all duration-200
                            ${form.facilities === f
                              ? 'bg-gold text-ink border-gold shadow-gold'
                              : 'bg-white/[0.05] text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                            }`}
                          aria-pressed={form.facilities === f}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <FieldLabel htmlFor="specialRequests">Special Requests</FieldLabel>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      placeholder="Any dietary requirements, food preferences, accessibility needs, or any other requests…"
                      value={form.specialRequests}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-full bg-gold py-4 text-base font-semibold text-ink shadow-soft
                      hover:shadow-gold hover:-translate-y-0.5 transition-[transform,box-shadow] duration-300
                      disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-soft
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2.5">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
