'use client'

import React from 'react'
import CountdownTimer from './CountdownTimer'

export default function Pricing() {
  const openDemoModal = () => {
    const event = new CustomEvent('openDemoModal')
    window.dispatchEvent(event)
  }

  const scrollToPricing = () => {
    // Already in pricing section
    openDemoModal()
  }

  const pricingTiers = [
    {
      name: 'Small schools',
      range: '< 1000 students',
      promoPrice: 6650,
      originalPrice: 15300,
      trialPrice: 995,
      features: [
        'All AI scheduling features (main timetable engine)',
        'All bonus integrations (Calendar, Slides, Drive, emails)',
        'Email & calendar automation',
        'Priority early-adopter onboarding',
      ],
    },
    {
      name: 'Medium',
      range: '1,000–2,000 students',
      promoPrice: 8900,
      originalPrice: 17800,
      trialPrice: 1250,
      features: [
        'All AI scheduling features (main timetable engine)',
        'All bonus integrations (Calendar, Slides, Drive, emails)',
        'Email & calendar automation',
        'Priority early-adopter onboarding',
      ],
    },
    {
      name: 'Large',
      range: '2,000–3,000 students',
      promoPrice: 9950,
      originalPrice: 19900,
      trialPrice: 1450,
      features: [
        'All AI scheduling features (main timetable engine)',
        'All bonus integrations (Calendar, Slides, Drive, emails)',
        'Email & calendar automation',
        'Priority early-adopter onboarding',
      ],
    },
    {
      name: 'Universities/ Very Large',
      range: '3,000+ students',
      promoPrice: null,
      originalPrice: null,
      trialPrice: null,
      features: [
        'All AI scheduling features (main timetable engine)',
        'All bonus integrations (Calendar, Slides, Drive, emails)',
        'Email & calendar automation',
        'Custom-built scheduling system designed for your institution’s needs',
        'Dedicated support and onboarding',
        'Scalable system to match your needs',
        'Tailored integrations and enterprise-level support',
        'Priority early-adopter onboarding',
      ],
      contactUs: true,
    },
  ]

  const calculateYearlyPrice = (semesterPrice: number) => {
    const yearlyPrice = semesterPrice * 2
    const discountedYearly = yearlyPrice * 0.85
    return Math.round(discountedYearly)
  }

  return (
    <section id="pricing" className="py-20 bg-white mx-6 sm:mx-8 lg:mx-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-classify-blue">
          Early-access pricing (50% off until Jan 1, 2026)
        </h2>
      </div>
      {/* Countdown Timer */}
      <div className="mb-12">
        <CountdownTimer />
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {pricingTiers.map((tier) => {
          const yearlyPrice = tier.promoPrice ? calculateYearlyPrice(tier.promoPrice) : null
          return (
            <div
              key={tier.name}
              className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-classify-teal hover:shadow-xl transition-all ${tier.contactUs ? 'cursor-pointer' : ''}`}
              onClick={tier.contactUs ? () => window.location.href = 'mailto:exam.mgmt.edu@gmail.com' : undefined}
            >
              <h3 className="text-xl font-bold text-classify-blue mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{tier.range}</p>
              <div className="mb-4">
                {tier.promoPrice ? (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-classify-blue">
                      ${tier.promoPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-500 ml-2 line-through">
                      ${tier.originalPrice.toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-classify-blue">Contact Us</p>
                )}
                {tier.promoPrice && <p className="text-sm text-gray-600 mt-1">per semester</p>}
                {yearlyPrice && (
                  <p className="text-xs text-classify-teal mt-2 font-semibold">
                    Yearly from ~${yearlyPrice.toLocaleString()} (15% off)
                  </p>
                )}
                                {/* First exam price trial */}
                        
                                {tier.trialPrice && (
  <div className="mt-4 mb-6 bg-[#f3f1f1] p-4 rounded-xl shadow-lg">
    {/* Trial Price Section with Gold Color and Sleek Layout */}
    <div className="text-2xl font-extrabold text-[#bf9b30]">
      ${tier.trialPrice.toLocaleString()}
    </div>
    <p className="text-ms bg-black bg-clip-text text-transparent bg-gradient-to-r from-[#bf9b30] to-[#ceb212]">
      One-Month Exam Access
    </p>

    {/* Checkmarks aligned vertically with small, tight spacing */}
    <div className="text-xs text-[#bf9b30] mt-2 space-y-0.5">
      <p className="flex items-center">
        <span className="text-base mr-2">✓</span>
        No engagement
      </p>
      <p className="flex items-center">
        <span className="text-base mr-2">✓</span>
        Early-access discount locked in forever
      </p>
      <p className="flex items-center">
        <span className="text-base mr-2">✓</span>
        Premium support
      </p>
      <p className="flex items-center">
        <span className="text-base mr-2">✓</span>
        Everything listed down included
      </p>      
    </div>
  </div>
)}








              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <span className="text-classify-teal mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {tier.contactUs ? (
                <button
                  className="w-full px-4 py-2 bg-classify-blue text-white rounded-lg hover:bg-classify-blue-dark transition-colors font-medium"
                >
                  Contact Us
                </button>
              ) : (
                <button
                  onClick={scrollToPricing}
                  className="w-full px-4 py-2 bg-classify-blue text-white rounded-lg hover:bg-classify-blue-dark transition-colors font-medium"
                >
                  Get Started
                </button>
              )}
            </div>)})} </div> 

        {/* Fair pricing note */}
        <div className="max-w-4xl mx-auto bg-classify-gold/10 border-l-4 border-classify-gold p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-classify-blue">
            If you slightly exceed your tier (e.g. 550 students), don&apos;t worry — we can negotiate a fair plan together, with no hidden extra fees. Drop us an email at <a href="mailto:exam.mgmt.edu@gmail.com" className="text-classify-blue underline">exam.mgmt.edu@gmail.com</a> to discuss about your needs.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToPricing}
            className="px-8 py-4 bg-classify-blue text-white rounded-lg hover:bg-classify-blue-dark transition-colors font-bold text-lg"
          >
            Get Started
          </button>
          <button
            onClick={openDemoModal}
            className="px-8 py-4 border-2 border-classify-blue text-classify-blue rounded-lg hover:bg-classify-blue hover:text-white transition-colors font-bold text-lg"
          >
            Launch Demo
          </button>
        </div>
      
    </section>
  )
}

