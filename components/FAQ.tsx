'use client'

import React, { useState, ReactNode } from 'react'

type FAQItem = {
  question: string
  answer: ReactNode
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: '🧠 What does this app do?',
      answer: (
        <>
          Our AI-powered scheduler automatically creates{' '}
          <strong>optimized exam timetables</strong> for your school. It connects with{' '}
          <strong>Google Workspace</strong>, builds{' '}
          <strong>professionally formatted PDF timetables</strong> exported to Google Drive, and
          syncs everything with <strong>Google Calendar</strong> — all in just a few minutes.
        </>
      ),
    },
    {
      question: '🏫 Does it work for schools of any size?',
      answer: (
        <>
          Yes! Whether you&apos;re managing a small private school or a large university, our AI adapts
          automatically. It can handle anything from a few dozen students to{' '}
          <strong>thousands of exam entries</strong>, ensuring{' '}
          <strong>conflict-free, balanced timetables</strong> no matter the scale. The software has
          been <strong>tested on a university database with over 3,000 students</strong>. 
          {/* And if you
          slightly exceed a quota (for example, 550 students exceeding the limit of 500 for the
          small-school plan), just send us a message —{' '}
          <em>we&apos;ll adapt it to your school size with no extra fees.</em> */}
        </>
      ),
    },
    {
      question: '🏫 Who is this app for?',
      answer: (
        <>
          It&apos;s designed for <strong>school administrators</strong>,{' '}
          <strong>exam coordinators</strong>, and <strong>teachers</strong> who use Google
          Workspace and want to save time, reduce stress, and simplify exam management.
        </>
      ),
    },
    {
      question: '🧪 What exactly is included in the demo?',
      answer: (
        <>
          The demo allows your school to fully explore for free how Classify works using a sample environment
          limited to <strong>50 students</strong>, and for {' '}<strong>15 days</strong>. You can upload a spreadsheet, run the{' '}
          <strong>AI scheduling engine</strong>, and generate a complete{' '}
          <strong>conflict-free timetable</strong>. You will also be able to preview{' '}
          <strong>exported PDFs</strong>, test <strong>Google Drive outputs</strong>, and observe
          how <strong>Calendar syncing</strong> works — all within a safe, isolated demo space. It’s
          a practical, hands-on way to experience the full workflow from data import to final exam
          schedule.{' '}
          <strong>
            Click on the “Launch Free Demo” button below — we’ll email you your demo access with simple
            instructions, or you can schedule a call if you’d prefer guided onboarding.
          </strong>
        </>
      ),
    },
    {
      question: '⚙️ How does the AI scheduling work?',
      answer: (
        <>
          You upload your class, subject, students and teacher data in Google Sheets and our AI intelligently
          arranges exams to <strong>minimize conflicts</strong> and <strong>balance workloads</strong>.
          It then automatically formats the schedule into <strong>PDFs & editable Google Docs stored in Google Drive</strong>,
          with a one-click option to <strong>update students&apos; calendars</strong> and{' '}
          <strong>notify proctors via email</strong>.
        </>
      ),
    },
    {
      question: "🔒 Is my school's data secure?",
      answer: (
        <>
          Absolutely. We never resell or share your data. The app works privately within your{' '}
          <strong>Google Workspace</strong>, using your own account permissions. All processing is
          designed to remain <strong>secure and confidential</strong>.
        </>
      ),
    },
    {
      question: '🕐 How long does it take to create an exam timetable?',
      answer: (
        <>
          Just a few minutes of processing once your data is connected. What used to take around{' '}
          <strong>14 days</strong> of back-and-forth can now be reduced to{' '}
          <strong>roughly 2 hours end-to-end</strong>.
        </>
      ),
    },
    {
      question: '💻 Do we need to install anything?',
      answer: (
        <>
          No installation is required. The tool runs in your browser and connects seamlessly to your{' '}
          <strong>Google Workspace</strong>.
        </>
      ),
    },
    {
      question: '🌍 Does it work for schools worldwide?',
      answer: (
        <>
          Yes — it&apos;s built for schools worldwide. The system adapts to your{' '}
          <strong>time zone</strong> and <strong>calendar settings</strong>.
        </>
      ),
    },
    {
      question: '💰 How much does it cost?',
      answer: (
        <>
          You can get started immediately with our <strong>free demo</strong>, which lets you explore all key features with up to <strong>50 students</strong>—no commitment required.

For full access, pricing varies based on your institution’s size. To receive accurate information tailored to your needs, simply click <strong>“Get Custom Quote.”</strong> Our team will provide a personalized estimate and help you determine the best setup for your school.

Important : Schools who join during the early-access phase (before January 1<sup>st</sup> 2026) receive a <strong>lifetime discounted rate of 50%</strong> and more support especially during the upcoming exam sessions.
        </>
      ),
    },
    {
      question: '📩 Is there any other related cost?',
      answer: (
        <>
          If your institution already uses <strong>Google Workspace</strong>, there are{' '}
          <strong>no additional Google fees</strong> — the app uses your existing Workspace quota.
          Outside of Google Workspace, you can still use core features with Google Forms/PDF exports
          or a regular Google account, but some automations (email volume, calendar events, Drive
          quotas) may be limited by <strong>Google’s free-tier limits</strong>.
        </>
      ),
    },
    {
      question: '🏢 Is a Google Workspace account required?',
      answer: (
        <>
          It&apos;s not strictly required, but it&apos;s <strong>strongly recommended</strong>. With
          Google Workspace, all features are available: automated <strong>Calendar events</strong>,{' '}
          <strong>Drive exports</strong>, <strong>Slides formatting</strong>, <strong>Forms</strong>,
          and <strong>bulk email sending</strong> — all under your school&apos;s domain. Without
          Workspace, the AI engine still builds schedules and PDFs, but some automations may be
          reduced or depend on personal-account limits.
        </>
      ),
    },
    {
      question: '👩‍🏫 Can teachers or students access the timetable?',
      answer: (
        <>
          Yes. Once generated, the schedule can be shared with <strong>proctors</strong> and{' '}
          <strong>students</strong> through <strong>Google Calendar</strong> and{' '}
          <strong>PDF exports</strong>. You stay in full control of who receives what.
        </>
      ),
    },
    {
      question: '🚀 How do I get started?',
      answer: (
        <>
          Click <strong>&quot;Launch Free Demo&quot;</strong> below, connect your Google account, fill in
          the sample spreadsheets, and let the AI do the rest. You will see how a complete,{' '}
          <strong>optimized exam timetable</strong> can be generated in minutes.
        </>
      ),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const openDemoModal = () => {
    const event = new CustomEvent('openDemoModal')
    window.dispatchEvent(event)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-classify-blue">
          ❓ Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-classify-blue pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-classify-blue flex-shrink-0 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={openDemoModal}
            className="px-8 py-4 bg-classify-blue text-white rounded-lg hover:bg-classify-blue-dark transition-colors font-bold text-lg"
          >
            Launch Free Demo
          </button>
        </div>

        
      </div>
    </section>
  )
}
