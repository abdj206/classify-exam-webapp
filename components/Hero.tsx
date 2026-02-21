'use client'

import React from 'react'
import Logo from './Logo'
//import QuoteModal from './QuoteModal'

function TypewriterBadge() {
  const BOLD = 'around 14 days'
  const prefix = "We'll save your team "
  const suffix = ' — so your staff can focus on teaching, not admin.'
  const fullText = prefix + BOLD + suffix

  const boldStart = prefix.length
  const boldEnd = prefix.length + BOLD.length

  const [displayed, setDisplayed] = React.useState('')
  const [done, setDone] = React.useState(false)

  const beforeBold = displayed.slice(0, Math.min(displayed.length, boldStart))
  const inBold = displayed.length > boldStart ? displayed.slice(boldStart, Math.min(displayed.length, boldEnd)) : ''
  const afterBold = displayed.length > boldEnd ? displayed.slice(boldEnd) : ''

  React.useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(fullText.slice(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-full border border-amber-300/40 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-200 shadow-lg shadow-amber-500/10 text-center leading-relaxed min-h-[44px]">
      🔥{' '}
      {beforeBold}
      {inBold && <span className="font-bold">{inBold}</span>}
      {afterBold}
      {!done && (
        <span className="inline-block w-[2px] h-[1em] bg-amber-300 ml-[1px] align-middle animate-pulse" />
      )}
    </div>
  )
}

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
        {/* <div className="inline-flex items-center text-center rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-3 md:px-6 md:py-4 text-sm md:text-ms font-semibold text-amber-200 shadow-lg shadow-amber-500/10 max-w-xs sm:max-w-sm md:max-w-none leading-snug">
          🔥 We&apos;ll save your team <span className="font-bold ml-1">around 14 days</span> — so your staff can focus on teaching, not admin.
        </div> */}
        <TypewriterBadge/>

        {/* Logo */}
        <Logo
          priority
          imageClassName="mx-auto mb-1 object-contain w-[140px] md:w-[190px] lg:w-[230px] xl:w-[260px]"
        />

        {/* Headline */}
        {/* <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
  From Google Sheets to perfect school timetables{" "}
  <span className="text-indigo-400 font-extrabold">
    in under 30 minutes*
  </span>
</h1> */}
<h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
  Stop "Building" Timetables...{" "}
  <span className="text-indigo-400 font-extrabold">
  And Start Generating Takes seconds not weeks.
  </span>
</h1>

{/* Sub-headline */}
<div className="space-y-4 text-base md:text-lg text-slate-200 leading-relaxed">
<p className="text-classify-gold font-extrabold">
Our software generates your <strong>semester timetable</strong> and your <strong>exam timetable</strong> without conflicts using AI that optimizes rooms, teachers, cohorts, and workload rules in seconds.
  </p>
  {/* --<p className="text-classify-gold font-extrabold">
  We are a team of educators and developers who are passionate about making education more efficient and effective.
  </p>
  
  <p>
    Introducing the first AI-powered scheduling tool built primarly for <span className="text-classify-gold font-extrabold">Google Education users</span>. No complex software, direclty uses an app you're already familiar with : Google Sheets.
  </p>
  
  <p>
    <strong>Built to eliminate free periods,</strong> our dynamic scheduler optimizes timetables with almost zero gaps. That means students leave earlier, reduce wasted hours and schools save on supervision costs. Plus, we support flexible 30-minute class session scheduling.
  </p>
  
  <p>
    Absent teacher? New class? Room unavailable? Don't rebuild from scratch. Classify Timetabler makes the smallest possible adjustments to your existing timetable—no conflicts, no chaos.
  </p>
  
  <p>
    Say goodbye to wasted time and complicated scheduling. Say hello to smarter timetables.
  </p> */}
          {/* <p>
            Exams should inspire learning, not stress. That&apos;s why our AI creates perfectly optimized exam timetables for your school that eliminates scheduling conflicts, saves you 12+ days of manual team work, and integrates seamlessly with your existing Google Workspace including Google Sheets, Google Drive and Google Calendar.       
           
          </p> */}
          {/* <p className="text-xl md:text-2xl font-semibold text-amber-200">Automatic. Private. Global.</p>
          <p>Experience a no-hassle, no-stress workflow for your timetables, launch the free demo below. (limited to 50 students)</p>*/}
        </div> 
        {/* Main capability callout */}
        {/* -- <div className="w-full max-w-3xl rounded-2xl border border-white/15 bg-white/5 px-6 py-6 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-200 mb-2">easy process</p>
          <p className="text-base md:text-lg text-slate-100">
          Upload your classes, teachers and rooms (optional) data sheet → our AI transforms it into conflict-free timetables (editable) → download as PDFs — all in about{' '}
            <span className="font-bold text-amber-200">30 minutes instead of days, or even weeks</span>
          </p>
        </div> */}

        {/* VSL Video Placeholder — with handwritten arrow annotation */}
        <div className="relative w-full max-w-5xl mx-auto">
  <div className="hidden md:flex items-start gap-8">
    
    {/* Left handwritten block */}
    <div className="flex flex-col items-center select-none pointer-events-none mt-16">
      <p
        style={{
          fontFamily: "'Caveat', 'Segoe Script', cursive",
          fontSize: '1.15rem',
          lineHeight: '1.3',
          color: '#fca5a5',
          textAlign: 'center',
          marginBottom: '4px',
        }}
      >
        Principal 💠<br />
        Vice Principal 💠<br />
        Academic Director 💠<br />
        Exams Officer 💠<br />
        Anyone involved in scheduling<br />
        watch this
      </p>

      <svg
        width="90"
        height="80"
        viewBox="0 0 90 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.85 }}
      >
        <path
          d="M20 5 C10 30, 15 55, 72 68"
          stroke="#fca5a5"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M72 68 L58 60 M72 68 L60 76"
          stroke="#fca5a5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>

   

  

          {/* Video block */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-slate-900/60 bg-slate-900/80 backdrop-blur">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {/* Replace the src below with your finalized video URL or file path */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                // poster="/images/video-poster.png"
              >
                {/* <source src="/videos/vsl.mp4" type="video/mp4" /> */}
                Your browser does not support the video tag.
              </video>
              {/* Static overlay shown while no video src is set — remove once video is attached */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/70 pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm font-medium tracking-wide uppercase">Video coming soon</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Shimmer keyframes — scoped inline so no global CSS file needed */}
          <style>{`
            @keyframes shimmer-sweep {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>

          <button
            onClick={openDemoModal}
            className="relative overflow-hidden rounded-full border border-slate-200/70 px-8 py-4 text-base font-semibold text-slate-50 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            style={{ isolation: 'isolate' }}
          >
            {/* Sweep shimmer light overlay */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer-sweep 2.4s linear infinite',
                borderRadius: 'inherit',
                pointerEvents: 'none',
              }}
            />
            Launch Free Demo
          </button>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4"> */}
          {/* <button
            onClick={scrollToPricing}
            className="rounded-full bg-slate-50 px-8 py-4 text-base font-semibold text-slate-900 shadow-xl shadow-slate-900/40 hover:bg-slate-200 transition-colors"
          >
            Get Started Today
          </button> */}
          {/* <QuoteModal/> */}
          {/* <button
            onClick={openDemoModal}
            className="rounded-full border border-slate-200/70 px-8 py-4 text-base font-semibold text-slate-50 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Launch Free Demo
          </button>
        </div> */}

        {/* Trust text */}
        {/*  -- <p className="text-slate-200 text-sm md:text-base">
          Be among our first clients and enjoy an exclusive launch offer.
        </p>
        <p className="mt-4 text-xs md:text-sm text-white/60 leading-relaxed">
  *Based on a 1,000-student school. Includes data preparation time.
</p> */}
      </div>
    </section>
  )
}

