'use client'

import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Connect your Google Workspace',
      icon: '🔐',
      content: (
        <>
          <p>
            Securely connect your school&apos;s Google account — everything stays{" "}
            <strong>inside your domain</strong>, with no extra tools to install.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><strong>Full data privacy</strong> by design</li>
            <li><strong>No third-party dashboards</strong> to manage</li>
            <li><strong>Setup in under 30 seconds</strong></li>
          </ul>
          <p className="mt-3 text-xs italic text-gray-500">
            <span className="font-semibold">You stay in control.</span> Classify never owns or stores your data.
          </p>
        </>
      ),
    },
    {
      number: 2,
      title: 'Import your exam data',
      icon: '📊',
      content: (
        <>
          <p>
            Start from our <strong>ready-made templates</strong> or your own spreadsheet and plug in everything the AI needs.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Classes, subjects &amp; programs</li>
            <li>Teachers, proctors &amp; students</li>
            <li>Rooms &amp; capacities (optional)</li>
            <li>
              Special rules:
              <ul className="mt-1 ml-5 space-y-0.5 text-[13px] text-gray-600 list-[circle]">
                <li><em>No clashes</em> between subjects</li>
                <li><em>Same-day limits</em> for students</li>
                <li><em>Proctoring constraints</em> &amp; availability</li>
              </ul>
            </li>
          </ul>
          <p className="mt-3 text-xs italic text-gray-500">
            The engine reads every constraint and prepares the data for scheduling.
          </p>
        </>
      ),
    },
    {
      number: 3,
      title: 'AI schedules everything',
      icon: '✨',
      content: (
        <>
          <p>
            Our AI engine builds an <strong>optimized, conflict-free exam timetable</strong> that respects all your rules.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><strong>Eliminates clashes</strong> between exams</li>
            <li><strong>Balances workloads</strong> across staff</li>
            <li>
              <strong>Reduces proctoring days</strong> — instructors come in on as few separate
              days as possible
            </li>
            <li><strong>Honours every constraint</strong> you&apos;ve defined</li>
          </ul>
          <p className="mt-3 text-xs italic text-gray-500">
            Once optimized, Classify generates a clean, ready-to-share{" "}
            <strong>master timetable PDF</strong>.
          </p>
        </>
      ),
    },
    {
      number: 4,
      title: 'Export & share',
      icon: '🚀',
      content: (
        <>
          <p>
            Turn the final plan into <strong>live tools</strong> for your team in just a few clicks.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Push events directly into <strong>Google Calendar</strong> for students and proctors</li>
            {/* <li>One-Click Create <strong>Google Forms</strong> for electronic attendance</li> */}
            <li>
              Export as Google Docs &amp; PDFs to <strong>Google Drive:</strong>
              <ul className="mt-1 ml-5 space-y-0.5 text-[13px] text-gray-600 list-[circle]">
                <li>Exam timetables</li>
                <li>Attendance sheets</li>
                <li>Exam envelope headers</li>
              </ul>
            </li>
          </ul>
          <p className="mt-3 text-xs italic text-gray-500">
            Everything stays neatly organized in your Drive by session, program, or date.
          </p>
        </>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-classify-blue">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          A simple, secure process that transforms your exam data into a{" "}
          <span className="font-semibold">perfectly optimized, share-ready timetable.</span>
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out transform opacity-0 translate-y-3"
              style={{
                animation: 'howItWorksFadeUp 0.6s ease-out forwards',
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-classify-teal transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-classify-teal border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-classify-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-classify-blue mb-3">
                  {step.title}
                </h3>
                <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {step.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reinforcement line */}
        <div className="max-w-4xl mx-auto bg-classify-gold/10 border-l-4 border-classify-gold p-6 rounded-lg relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-classify-gold/60 to-transparent animate-pulse" />
          <p className="text-lg font-semibold text-classify-blue pl-2">
            <strong>Core feature:</strong>{" "}
            <span className="font-normal">
              Turn a simple spreadsheet into a conflict-free, rule-aware, fully formatted{" "}
              <em>master exam timetable PDF</em> — automatically.
            </span>
          </p>
        </div>
      </div>

      {/* Local keyframes for fade/stagger */}
      <style jsx>{`
        @keyframes howItWorksFadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
    
  )
}
