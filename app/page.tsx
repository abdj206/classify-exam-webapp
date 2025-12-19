'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import BeforeAfter from '@/components/BeforeAfter'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
//import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import VideoDemo from '@/components/VideoDemo'
import Footer from '@/components/Footer'
import DemoModal from '@/components/DemoModal'
import QuoteModal from '@/components/QuoteModal'
import CountdownTimer from '@/components/CountdownTimer'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <BeforeAfter />
      <Features />
      <HowItWorks />
      <div id="how-it-works__after" className="h-px w-full" />
      {/*<Pricing />*/}
      <CountdownTimer/>
      <FAQ />
      <QuoteModal/>
      <VideoDemo />
      <Footer />
      <DemoModal />
    </main>
  )
}

