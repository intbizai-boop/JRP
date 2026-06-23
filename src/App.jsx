import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import ScrollDivider from './components/ScrollDivider'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Services from './sections/Services'
import Destinations from './sections/Destinations'
import VipServices from './sections/VipServices'
import TirupatiDarshan from './sections/TirupatiDarshan'
import Events from './sections/Events'
import WhyJrp from './sections/WhyJrp'
import Contact from './sections/Contact'

import Footer from './sections/Footer'

export default function App() {
  const [selectedEnquiry, setSelectedEnquiry] = useState(null)

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-base text-ink">
        <a
          href="#services"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Stats />
          <ScrollDivider />
          <Services onSelectService={(name) => setSelectedEnquiry({ type: 'Service', name })} />
          <ScrollDivider />
          <Destinations onSelectDestination={(name) => setSelectedEnquiry({ type: 'Destination', name })} />
          <ScrollDivider />
          <VipServices />
          <ScrollDivider />
          <TirupatiDarshan onSelectDestination={(name) => setSelectedEnquiry({ type: 'Destination', name })} />
          <ScrollDivider />
          <Events onSelectEvent={(name) => setSelectedEnquiry({ type: 'Event', name })} />
          <ScrollDivider />
          <WhyJrp />
          <ScrollDivider />
          <Contact selectedEnquiry={selectedEnquiry} setSelectedEnquiry={setSelectedEnquiry} />
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919962557733?text=Hi%20Praveen,%20I%20am%20interested%20in%20JRP%20travel%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-[transform,box-shadow] duration-300 hover:scale-110 hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
          aria-label="Chat with Praveen on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.449C18.257 1.185 15.228 0 12.029 0 5.626 0 0.435 5.19 0.435 11.593c0 2.046 0.536 4.045 1.558 5.807L0 24l6.837-1.794c1.714 0.935 3.645 1.428 5.603 1.428h0.007c6.403 0 11.594-5.19 11.594-11.593 0-3.097-1.205-6.01-3.417-8.208zM12.029 22.128h-0.005c-1.776 0-3.522-0.477-5.045-1.378l-0.362-0.215-3.754 0.984 1.002-3.662-0.236-0.375c-0.993-1.579-1.517-3.418-1.517-5.309 0-5.525 4.495-10.02 10.021-10.02 2.677 0 5.193 1.043 7.084 2.937 1.891 1.894 2.934 4.412 2.933 7.091-0.001 5.526-4.498 10.021-10.021 10.021zM16.538 14.47c-0.306-0.153-1.815-0.896-2.096-0.998-0.281-0.103-0.485-0.153-0.69 0.153-0.204 0.306-0.79 0.997-0.968 1.202-0.177 0.205-0.355 0.231-0.66 0.078-0.306-0.153-1.291-0.476-2.458-1.519-0.908-0.809-1.521-1.808-1.7-2.113-0.177-0.306-0.019-0.471 0.134-0.624 0.137-0.137 0.306-0.357 0.458-0.536 0.153-0.178 0.204-0.306 0.306-0.51 0.102-0.204 0.051-0.382-0.026-0.536-0.077-0.153-0.69-1.662-0.945-2.276-0.246-0.596-0.495-0.515-0.69-0.525-0.178-0.01-0.382-0.01-0.586-0.01-0.204 0-0.535 0.077-0.816 0.382-0.281 0.306-1.072 1.047-1.072 2.553 0 1.506 1.1 2.959 1.252 3.163 0.153 0.204 2.163 3.303 5.239 4.632 0.731 0.315 1.303 0.504 1.748 0.644 0.736 0.233 1.405 0.201 1.933 0.122 0.591-0.088 1.815-0.742 2.07-1.458 0.255-0.716 0.255-1.33 0.178-1.458-0.076-0.128-0.281-0.204-0.586-0.357z" />
          </svg>
        </a>
      </div>
    </MotionConfig>
  )
}
