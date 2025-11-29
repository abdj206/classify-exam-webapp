'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import QuoteModal from './QuoteModal'
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const linkBase =
    'text-slate-100/85 hover:text-slate-50 transition-colors text-sm md:text-base font-medium'

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const openDemoModal = () => {
    const event = new CustomEvent('openDemoModal')
    window.dispatchEvent(event)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center overflow-visible"
            aria-label="Scroll to top"
          >
            <Logo
              priority
              imageClassName="-mb-3 w-[130px] md:w-[180px] lg:w-[220px] xl:w-[260px] object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('why')}
              className={linkBase}
            >
              Why Classify
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={linkBase}
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className={linkBase}
            >
              Features
            </button>
            {/*<button
              onClick={() => scrollToSection('pricing')}
              className={linkBase}
            >
              Pricing
            </button> */}
            <button
              onClick={() => scrollToSection('faq')}
              className={linkBase}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={linkBase}
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={openDemoModal}
              className="rounded-full border border-slate-300/80 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Launch Free Demo
            </button>
            {/* <button
              onClick={() => scrollToSection('pricing')}
              className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:bg-slate-200 transition-colors"
            >
              Get Started
            </button> */}
            {/* <QuoteModal /> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-2 border-t border-slate-800/70">
            <button
              onClick={() => scrollToSection('why')}
              className="block w-full text-left px-4 py-2 text-slate-100 hover:bg-slate-800/60 rounded-lg"
            >
              Why Classify
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-2 text-slate-100 hover:bg-slate-800/60 rounded-lg"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-slate-100 hover:bg-slate-800/60 rounded-lg"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-slate-100 hover:bg-slate-800/60 rounded-lg"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-2 text-slate-100 hover:bg-slate-800/60 rounded-lg"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-slate-100 hover:bg-slate-800/60 rounded-lg"
            >
              Contact
            </button>
            <div className="pt-4 space-y-2">
              <button
                onClick={openDemoModal}
              className="block w-full rounded-full border border-slate-300/80 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                Launch Demo
              </button>
              {/* <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:bg-slate-200 transition-colors"
              >
                Get Started
              </button> */}
              <QuoteModal/>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

