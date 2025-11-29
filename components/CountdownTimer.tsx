'use client'

import React, { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00Z').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-classify-blue to-classify-teal rounded-2xl shadow-2xl p-8 text-white">
      <h3 className="text-2xl font-bold text-center mb-6">
        Early-Access Discount Ends In:
      </h3>
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">{timeLeft.days}</div>
          <div className="text-sm md:text-base opacity-90">Days</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">{timeLeft.hours}</div>
          <div className="text-sm md:text-base opacity-90">Hours</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">{timeLeft.minutes}</div>
          <div className="text-sm md:text-base opacity-90">Minutes</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">{timeLeft.seconds}</div>
          <div className="text-sm md:text-base opacity-90">Seconds</div>
        </div>
      </div>
      <p className="text-center mt-6 text-lg font-semibold">
        50% off early-access discount — locked in forever. No price change if you register before January 1st, 2026.
      </p>
    </div>
  )
}

