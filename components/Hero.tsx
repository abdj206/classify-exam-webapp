'use client'

import React from 'react'
import Logo from './Logo'
import QuoteModal from './QuoteModal'

export default function Hero() {
  const openDemoModal = () => {
    const event = new CustomEvent('openDemoModal')
    window.dispatchEvent(event)
  }

  // const scrollToPricing = () => {
  //   const element = document.getElementById('pricing')
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <section
      id="hero"
      className="relative overflow-hidden text-slate-50 py-10 md:py-16"
      style={{
        backgroundImage: "url('/images/hero-campus.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-400/10 px-6 py-6 text-ms font-semibold text-amber-200 shadow-lg shadow-amber-500/10">
          🔥 We&apos;ll save your team <span className="font-bold ml-1">around 15 days</span> — so your staff can focus on teaching, not admin.
        </div>

        {/* Logo */}
        <Logo
          priority
          imageClassName="mx-auto mb-1 object-contain w-[140px] md:w-[190px] lg:w-[230px] xl:w-[260px]"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mt-2">
          Smarter Scheduling for Smarter Schools
        </h1>

        {/* Sub-headline */}
        <div className="space-y-4 text-base md:text-lg text-slate-200 leading-relaxed">
          <p>We believe organization should feel effortless — powered by intelligence, not effort.</p>
          <p>
            Exams should inspire learning, not stress. That&apos;s why our AI creates perfectly optimized exam timetables for your school — seamlessly integrated with Google Slides, Google
            Drive and Google Calendar, all within your Google Workspace.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-amber-200">Automatic. Private. Global.</p>
          <p>Experience the future of exam planning — explore the free demo below.</p>
        </div>

        {/* Main capability callout */}
        <div className="w-full max-w-3xl rounded-2xl border border-white/15 bg-white/5 px-6 py-6 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-200 mb-2">Main capability</p>
          <p className="text-base md:text-lg text-slate-100">
            Upload your exam data sheet → our AI transforms it into conflict-free, constraint-aware PDF timetables and synced Google Calendars — in about{' '}
            <span className="font-bold text-amber-200">2 hours instead of 14 days.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <button
            onClick={scrollToPricing}
            className="rounded-full bg-slate-50 px-8 py-4 text-base font-semibold text-slate-900 shadow-xl shadow-slate-900/40 hover:bg-slate-200 transition-colors"
          >
            Get Started Today
          </button> */}
          <QuoteModal/>
          <button
            onClick={openDemoModal}
            className="rounded-full border border-slate-200/70 px-8 py-4 text-base font-semibold text-slate-50 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Launch Free Demo
          </button>
        </div>

        {/* Trust text */}
        <p className="text-slate-200 text-sm md:text-base">
          Be among our first clients and enjoy an exclusive launch offer.
        </p>
      </div>
    </section>
  )
}

