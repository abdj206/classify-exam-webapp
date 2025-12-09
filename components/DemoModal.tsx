'use client'

import React, { useState, useEffect } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'



const LOADING_MESSAGES = [
  'Connecting to Classify servers…',
  'Encrypting your demo request…',
  'Spinning up your AI exam space…',
  'Preparing your Google Sheet template…',
  'Linking web app and sheet…',
  'Finalizing secure access…',
]

interface FormData {
  name: string
  email: string
  institution: string
  role: string
  country: string
  schoolSize: string
  heardAbout: string
  wantsUpdates: boolean
}

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    institution: '',
    role: '',
    country: '',
    schoolSize: '',
    heardAbout: '',
    wantsUpdates: false,
  })

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  // 🆕 animated loading state
  const [loadingStep, setLoadingStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true)
      setStatus('idle')
      resetForm()
    }

    window.addEventListener('openDemoModal', handleOpenModal)
    return () => window.removeEventListener('openDemoModal', handleOpenModal)
  }, [])

  // 🆕 PS4-style loading loop
  useEffect(() => {
    if (status !== 'submitting') {
      setProgress(0)
      setLoadingStep(0)
      return
    }
  
    // Smooth MrBeast-style progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 70) {
          // Fast phase
          return Math.min(prev + Math.random() * 10 + 8, 70)
        } else if (prev < 90) {
          // Medium slow
          return Math.min(prev + Math.random() * 4 + 1, 90)
        } else if (prev < 97) {
          // Very slow, cinematic
          return Math.min(prev + Math.random() * 1 + 0.2, 97)
        } else {
          return prev // hold around 97% until success
        }
      })
    }, 500)
  
    return () => {
      clearInterval(progressInterval)
    }
  }, [status])

  useEffect(() => {
    if (status !== 'submitting') return
  
    const steps = LOADING_MESSAGES.length
    // Map 0–100% to 0..steps-1
    const index = Math.min(
      steps - 1,
      Math.floor((progress / 100) * steps)
    )
  
    setLoadingStep((prev) => (index > prev ? index : prev))
  }, [progress, status])
  

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      institution: '',
      role: '',
      country: '',
      schoolSize: '',
      heardAbout: '',
      wantsUpdates: false,
    })
    setTurnstileToken(null)
  }

  const closeModal = () => {
    setIsOpen(false)
    setStatus('idle')
    resetForm()
    setErrorMessage(null)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!turnstileToken) {
      setErrorMessage("Please confirm you're not a robot before submitting.")
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, turnstileToken }),
      })
      console.log("response.ok:",response.ok)
      console.log("response.status:",response.status)
      const payload = await response.json()
      if (!response.ok || !payload?.success) {
        setStatus('error')
        setErrorMessage(
          'Something went wrong while sending your request. Please try again or contact us directly.'
        )
        return
      }

      // Smooth animation to 100%
    let finalProgress = 97
    const smooth = setInterval(() => {
      finalProgress += 1
      setProgress(finalProgress)

      if (finalProgress >= 100) {
        clearInterval(smooth)
      }
    }, 40)
      setStatus('success')
      resetForm()
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      setErrorMessage('Network error. Please try again or contact us directly.')
    }
  }

  if (!isOpen) return null

  return ( 
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur"
      onClick={closeModal}
    >
      <div
        className="bg-slate-950 text-slate-50 rounded-3xl shadow-[0_40px_120px_rgba(2,6,23,0.85)] border border-slate-800/80 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {status === 'success' ? (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/60 shadow-lg shadow-emerald-500/30 animate-pulse">
        <span className="text-3xl">✨</span>
      </div>
      <h3 className="text-2xl font-semibold text-slate-50">
        Demo request sent!
      </h3>
      <p className="text-slate-300 max-w-md">
        Thank you for your interest in Classify. We’ve registered your demo request and will
        reach out soon with your demo access!
      </p>
      <button
        type="button"
        onClick={closeModal}
        className="mt-4 rounded-full bg-slate-50 px-6 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-colors"
      >
        Close
      </button>
    </div>
  ) : (
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                ✨ Get your personalized AI demo
              </h2>
              <p className="text-slate-300 mt-1">
                We&apos;ll tailor your experience to your school — tell us a bit about you.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="text-slate-500 hover:text-slate-200 transition-colors"
              aria-label="Close modal"
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
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}

              {/* Fields (unchanged) */}
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                />
              </div>

              {/* Institution */}
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-slate-200 mb-2">
                  Institution name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  required
                  value={formData.institution}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                />
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-200 mb-2">
                  Role / Position <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g., Exam Coordinator, Principal, IT Admin"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-200 mb-2">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                />
              </div>

              {/* School size */}
              <div>
                <label htmlFor="schoolSize" className="block text-sm font-medium text-slate-200 mb-2">
                  School size <span className="text-red-500">*</span>
                </label>
                <select
                  id="schoolSize"
                  name="schoolSize"
                  required
                  value={formData.schoolSize}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                >
                  <option value="">Select school size</option>
                  <option value="small">Small (&lt; 500)</option>
                  <option value="medium">Medium (500–1,000)</option>
                  <option value="large">Large (1,000–2,000)</option>
                  <option value="very-large">Very large (2,000–5,000)</option>
                </select>
              </div>

              {/* Heard about */}
              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-slate-200 mb-2">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  id="heardAbout"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                />
              </div>

              {/* Updates */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="wantsUpdates"
                  name="wantsUpdates"
                  checked={formData.wantsUpdates}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="mt-1 mr-3 w-4 h-4 text-amber-200 bg-slate-900 border-slate-700 rounded focus:ring-amber-300 disabled:opacity-60"
                />
                <label htmlFor="wantsUpdates" className="text-sm text-slate-300">
                  ✅ I&apos;d like to receive early-access updates or offers.
                </label>
              </div>

              {/* Turnstile */}
              <div className="mt-4 flex justify-center">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken(null)}
                  options={{ theme: 'dark' }}
                />
              </div>

          
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <p className="text-sm text-rose-400 bg-rose-500/10 border border-rose-400/40 rounded-lg px-4 py-3">
                  {errorMessage}
                </p>
              )}
              {/* Submit button with PS4-style loader */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-slate-50 px-6 py-4 text-base font-semibold text-slate-900 hover:bg-slate-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-slate-900 animate-bounce [animation-delay:-0.2s]" />
                      <span className="h-2 w-2 rounded-full bg-slate-900 animate-bounce [animation-delay:0s]" />
                      <span className="h-2 w-2 rounded-full bg-slate-900 animate-bounce [animation-delay:0.2s]" />
                    </span>
                    <span>Initializing your AI demo…</span>
                  </span>
                ) : (
                  '👉 Generate My Demo'
                )}
              </button>

              {/* Animated progress + rotating text */}
              {status === 'submitting' && (
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded-full bg-slate-900/70 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300 transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-center text-xs font-mono tracking-widest uppercase text-[#7da2ff] animate-pulse">
                    {LOADING_MESSAGES[loadingStep]}
                  </p>

                  <p className="text-center text-[10px] text-slate-500">
                    Please don&apos;t close this window – your secure demo link is being prepared…
                  </p>
                  <p className="text-center text-[15px] text-slate-500">
                    This might take a couple of minutes to prepare your demo space
                  </p>
                  <p className="text-center text-[15px] text-slate-500">
                  If it takes more than 2 minutes, close this window and try again or contact us directly
                  </p>
                </div>
              )}
            </form>
        </div>)}
      </div>
    </div>)}
