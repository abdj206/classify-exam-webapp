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
          <strong>optimized timetables</strong> for your school. It connects with{' '}
          <strong>Google Workspace</strong>, builds{' '}
          <strong>professionally formatted PDF timetables</strong>, all in just a few minutes
          {/* syncs everything with <strong>Google Calendar</strong> — all in just a few minutes. */}
        </>
      ),
    },
    {
      question: '🏫 Does it work for schools of any size?',
      answer: (
        <>
          Yes! Whether you&apos;re managing a small private school or a large university, our AI adapts
          automatically. It can handle anything from a few dozen students to{' '}
          <strong>thousands</strong>, ensuring{' '}
          <strong>conflict-free, balanced timetables</strong> no matter the scale. The app has
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
          <strong>principals</strong>, and <strong>teachers</strong> who use Google
          Workspace and want to save time, reduce stress, and simplify management.
        </>
      ),
    },
    {
      question: '🧪 What exactly is included in the demo?',
      answer: (
        <>
          The demo allows your school to fully explore for free how Classify works using the full environment
          limited for <strong>24 hours</strong> upon registration{' '}. You can upload a spreadsheet, run the{' '}
          <strong>AI scheduling engine</strong>, and generate a complete{' '}
          <strong>conflict-free timetable</strong>. You will also be able to preview{' '}
          <strong>exported PDFs</strong>, 
          {/* test <strong>Google Drive outputs</strong>, and observe */}
          {/* how <strong>Calendar syncing</strong> works  */}
          — all within a safe, isolated demo space. It’s
          a practical, hands-on way to experience the full workflow from data import to final school's
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
          You upload your class, subject, and teacher data in Google Sheets and our AI intelligently
          arranges subjects to <strong>minimize conflicts</strong> and <strong>gap sessions</strong>.
          It then automatically formats the schedule into <strong> downloadable PDFs & editable Google Docs</strong>.
          {/* with a one-click option to <strong>update students&apos; calendars</strong> and{' '} */}
          {/* <strong>notify proctors via email</strong>. */}
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
      question: '🕐 How long does it take to create a timetable?',
      answer: (
        <>
          Just a few minutes of processing once your data is connected. What used to take {' '}
          <strong>days or weeks</strong> of back-and-forth with gaps and potential sheduling conflicts can now be reduced to{' '}
          <strong>roughly 30 minutes end-to-end with minimal gaps and zero conflicts</strong>.
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
          <strong>time zone</strong>.
           {/* and <strong>calendar settings</strong>. */}
        </>
      ),
    },
    {
      question: '💰 How much does it cost?',
      answer: (
        <>
          You can get started immediately with our <strong>free demo</strong>, which lets you explore all key features for <strong>24 hours only</strong>—no commitment required.

For full access, pricing varies based on your institution’s size. To receive accurate information tailored to your needs, simply click <strong>“Get Custom Quote.”</strong> Our team will provide a personalized estimate and help you determine the best setup for your school.

Important : Schools who join during the early-access phase (before 3<sup>rd</sup> of March  2026) receive a <strong>lifetime discounted rate of 50%</strong> and more support especially during the upcoming semester/trimester.
        </>
      ),
    },
    {
      question: '📩 Is there any other related cost?',
      answer: (
        <>
          If your institution already uses <strong>Google Workspace</strong>, there are{' '}
          <strong>no additional Google fees</strong> — the app uses your existing Workspace quota.
          Outside of Google Workspace, you can still use core features but{' '}
          {/* with Google Forms/PDF exports
          or a regular Google account, but some automations (email volume, calendar events, Drive
          quotas)  */}
          may be limited by <strong>Google’s free-tier limits</strong>.
        </>
      ),
    },
    {
      question: '🏢 Is a Google Workspace account required?',
      answer: (
        <>
        As for this version, you can use Classify Timetable and generate timetables and download as PDFs without a Google Worksapce environment. Some future integrations such as Google Drive exports, updating students' and teachers' google calendar may require a Google Worksapce account or otherwise may be limited to Google free-tier limits. 
          {/* It&apos;s not strictly required, but it&apos;s <strong>strongly recommended</strong>. With
          Google Workspace, all features are available.
          : automated <strong>Calendar events</strong>,{' '}
          <strong>Drive exports</strong>, <strong>Slides formatting</strong>, <strong>Forms</strong>,
          and <strong>bulk email sending</strong> — all under your school&apos;s domain. 
          Without Workspace, the AI engine still builds schedules and PDFs, but some future automations may be
          reduced or depend on personal-account limits. */}
        </>
      ),
    },
    // {
    //   question: '👩‍🏫 Can teachers or students access the timetable?',
    //   answer: (
    //     <>
    //       Yes. Once generated, the schedule can be shared with <strong>proctors</strong> and{' '}
    //       <strong>students</strong> through <strong>Google Calendar</strong> (only for Google Workspace users) and{' '}
    //       <strong>PDF exports</strong>. You stay in full control of who receives what.
    //     </>
    //   ),
    // },
    {
      question: '🚀 How do I get started?',
      answer: (
        <>
          Click <strong>&quot;Launch Free Demo&quot;</strong> below, once your demo environment is ready, you can connect your Google account, fill in
          the sample spreadsheets, and let the AI do the rest. You will see how a complete,{' '}
          <strong>optimized timetable</strong> can be generated in minutes.
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
