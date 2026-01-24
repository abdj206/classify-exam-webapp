// 'use client'

// import React, { useState, useEffect } from 'react'

// export default function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   })

//   useEffect(() => {
//     const targetDate = new Date('2026-01-01T00:00:00Z').getTime()

//     const updateTimer = () => {
//       const now = new Date().getTime()
//       const difference = targetDate - now

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         })
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//       }
//     }

//     updateTimer()
//     const interval = setInterval(updateTimer, 1000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="bg-gradient-to-br from-classify-blue to-classify-teal rounded-2xl shadow-2xl p-8 text-white">
//       <h3 className="text-2xl font-bold text-center mb-6">
//         Early-Access Discount Ends In:
//       </h3>
//       <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
//         <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
//           <div className="text-4xl md:text-5xl font-bold mb-2">{timeLeft.days}</div>
//           <div className="text-sm md:text-base opacity-90">Days</div>
//         </div>
//         <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
//           <div className="text-4xl md:text-5xl font-bold mb-2">{timeLeft.hours}</div>
//           <div className="text-sm md:text-base opacity-90">Hours</div>
//         </div>
//         <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
//           <div className="text-4xl md:text-5xl font-bold mb-2">{timeLeft.minutes}</div>
//           <div className="text-sm md:text-base opacity-90">Minutes</div>
//         </div>
//         <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
//           <div className="text-4xl md:text-5xl font-bold mb-2">{timeLeft.seconds}</div>
//           <div className="text-sm md:text-base opacity-90">Seconds</div>
//         </div>
//       </div>
//       <p className="text-center mt-6 text-lg font-semibold">
//         50% off early-access discount — locked in forever. No price change if you register before January 1st, 2026.
//       </p>
//     </div>
//   )
// }

'use client'

import React, { useEffect, useMemo, useState } from 'react'

type Props = {
  deadlineISO?: string
  triggerId?: string          // section you pass (e.g. "how-it-works")
  triggerOnce?: boolean       // show only once per page load
  triggerRatio?: number       // how much of sentinel is visible (0..1)
}

export default function CountdownTimer({
  deadlineISO = '2026-02-31T00:00:00Z',
  triggerId = 'how-it-works',
  triggerOnce = true,
  triggerRatio = 0.1,
}: Props) {
  const deadline = useMemo(() => new Date(deadlineISO), [deadlineISO])

  const [open, setOpen] = useState(false)
  const [expired, setExpired] = useState(true)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const now = new Date()
    setExpired(now >= deadline)
  }, [deadline])

  useEffect(() => {
    if (expired) return

    // We trigger off a sentinel placed AFTER the section.
    const sentinel = document.getElementById(`${triggerId}__after`)
    if (!sentinel) {
      // Fallback: if sentinel is missing, do nothing (better than random popups)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        // When the "after" sentinel is visible, user has passed the section.
        if (entry.isIntersecting) {
          if (triggerOnce && hasTriggered) return
          setOpen(true)
          setHasTriggered(true)

          // Keep it open once triggered (professional, no flicker)
          if (triggerOnce) observer.disconnect()
        }
      },
      { threshold: triggerRatio }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [expired, triggerId, triggerOnce, triggerRatio, hasTriggered])

  if (expired) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none" aria-live="polite">
      <div
        className={[
          "pointer-events-auto fixed bottom-5 left-5 w-[92vw] max-w-sm",
          "transition-all duration-700 ease-out",
          open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0",
        ].join(" ")}
        role="dialog"
        aria-modal="false"
      >
        <div className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur-md shadow-xl">
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">
                  Early-access pricing available until{' '}
                  <span className="whitespace-nowrap">
                    {deadline.toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Register before the deadline to lock in{' '}
                  <span className="font-medium text-slate-900">50% off</span>.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-full px-2 py-1 text-slate-500 hover:text-slate-800 hover:bg-black/5 transition"
                aria-label="Dismiss notice"
                type="button"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500/80" />
              <span>
                Start using the app right now for free by clicking on “Launch Free Demo”
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
