'use client'

import React, { useState, useMemo } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

type SchoolSize = 'small' | 'medium' | 'large' | 'very-large'

interface QuoteFormData {
  schoolName: string
  country: string
  schoolSize: SchoolSize | ''
  contactName: string
  contactEmail: string
  phone: string
  examsPerYear: string
  notes: string
}

const COUNTRIES = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'The Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde (Cape Verde)',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Democratic Republic of the Congo',
    'Republic of the Congo',
    'Cook Islands',
    'Costa Rica',
    "Côte d’Ivoire",
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor-Leste)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini (Swaziland)',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'Gabon',
    'The Gambia',
    'Gaza Strip',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'North Korea',
    'South Korea',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar (Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'North Macedonia',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn Island',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Réunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint-Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'South Sudan',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Turks and Caicos Islands',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'United States Virgin Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Wallis and Futuna',
    'West Bank',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ]
  

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false)

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const [formData, setFormData] = useState<QuoteFormData>({
    schoolName: '',
    country: '',
    schoolSize: '',
    contactName: '',
    contactEmail: '',
    phone: '',
    examsPerYear: '',
    notes: '',
  })

  const [countryQuery, setCountryQuery] = useState('')

  const filteredCountries = useMemo(() => {
    if (!countryQuery) return COUNTRIES.slice(0, 236)
    const q = countryQuery.toLowerCase()
    return COUNTRIES.filter((c) => c.toLowerCase().includes(q)).slice(0, 236)
  }, [countryQuery])

  const openModal = () => {
    setIsOpen(true)
    setStatus('idle')
    setErrorMessage(null)
  }

  const closeModal = () => {
    if (status === 'submitting') return
    setIsOpen(false)
    setTurnstileToken(null)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setStatus('submitting')

    if (!turnstileToken) {
      setErrorMessage("Please confirm you're not a robot before submitting.")
      return
    }

    try {
      const response = await fetch('/api/request-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      })

      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        setStatus('error')
        setErrorMessage(
          payload?.message ||
            'Something went wrong while sending your quote request. Please try again or contact us directly.'
        )
        return
      }

      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMessage(
        'Network error while sending your quote request. Please try again or email us directly.'
      )
    }
  }

  return (
    <>
      {/* Trigger button */}
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="rounded-full bg-classify-blue px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-classify-blue-dark shadow-lg shadow-classify-blue/30 transition-all"
        >
          Get a Custom Quote
        </button>
      </div>

      {!isOpen ? null : (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur"
          onClick={closeModal}
        >
          <div
            className="bg-slate-950 text-slate-50 rounded-3xl shadow-[0_40px_120px_rgba(2,6,23,0.85)] border border-slate-800/80 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Get a custom quote for your school
                  </h2>
                  <p className="text-slate-300 mt-1 text-sm md:text-base">
                    Tell us a few details and we&apos;ll calculate a tailored offer based on your
                    context and exam workload.
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-slate-500 hover:text-slate-200 transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {status === 'success' ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/60 shadow-lg shadow-emerald-500/30">
                    <span className="text-3xl">📨</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-50">
                    Quote request received
                  </h3>
                  <p className="text-slate-300 max-w-md text-sm md:text-base">
                    We&apos;ve sent you a confirmation email. We&apos;ll review your context and
                    follow up with a tailored quote and next steps shortly.
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
                <form onSubmit={handleSubmit} className="space-y-6 px-4 py-6">
                  {errorMessage && (
                    <p className="text-sm text-rose-400 bg-rose-500/10 border border-rose-400/40 rounded-lg px-4 py-3">
                      {errorMessage}
                    </p>
                  )}

                  {/* School name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      School / Institution name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      required
                      value={formData.schoolName}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60 mb-4"
                    />
                  </div>

{/* Country (searchable + arrow toggles dropdown) */}
<div>
  <label className="block text-sm font-medium mb-2">
    Country <span className="text-red-500">*</span>
  </label>

  <div className="relative">

    {/* INPUT */}
    <input
      type="text"
      placeholder="Start typing your country…"
      value={countryQuery || formData.country}
      onFocus={() => setCountryDropdownOpen(true)}
      onChange={(e) => {
        setCountryQuery(e.target.value)
        setFormData((prev) => ({ ...prev, country: '' }))
        setCountryDropdownOpen(true)
      }}
      disabled={status === 'submitting'}
      className="w-full px-4 py-2 pr-10 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
    />

    {/* ARROW: CLICK TO TOGGLE */}
    <button
      type="button"
      onClick={() => setCountryDropdownOpen((o) => !o)}
      className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 transition-transform duration-200 ${
          countryDropdownOpen ? 'rotate-180' : 'rotate-0'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </button>

    {/* DROPDOWN */}
    {(countryDropdownOpen && filteredCountries.length > 0) && (
      <div className="absolute z-20 mt-1 max-h-52 w-full overflow-y-auto rounded-lg border border-slate-700 bg-slate-900 text-sm shadow-lg">
        {filteredCountries.map((c) => (
          <button
            type="button"
            key={c}
            className="w-full text-left px-3 py-2 hover:bg-slate-800"
            onClick={() => {
              setFormData((prev) => ({ ...prev, country: c }))
              setCountryQuery(c)
              setCountryDropdownOpen(false)
            }}
          >
            {c}
          </button>
        ))}
      </div>
    )}

  </div>
</div>


                  {/* School size */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      School size <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="schoolSize"
                      required
                      value={formData.schoolSize}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                    >
                      <option value="">Select an option</option>
                      <option value="small">Small (&lt; 1,000 students)</option>
                      <option value="medium">Medium (1,000–2,000 students)</option>
                      <option value="large">Large (2,000–3,000 students)</option>
                      <option value="very-large">Very Large / University (3,000+ students)</option>
                    </select>
                  </div>

                  {/* Exams per year */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Approx. number of exam sessions per year <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="examsPerYear"
                      min={1}
                      required
                      value={formData.examsPerYear}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                    />
                  </div>

                  {/* Contact name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Contact person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      required
                      value={formData.contactEmail}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone number (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Anything we should know? (optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 focus:ring-2 focus:ring-amber-300 focus:border-transparent disabled:opacity-60"
                      placeholder="E.g. multiple campuses, special exam formats, accreditation constraints…"
                    />
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
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full rounded-full bg-slate-50 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending your quote request…' : 'Request my custom quote'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
