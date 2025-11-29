'use client'

import React from 'react'

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-classify-blue">
        The heart of Classify: transforming your exam data into a flawless schedule.
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Everything else is built to elevate that experience — simplifying coordination, eliminating stress, and giving your team valuable time back.
        </p>

        {/* Main Feature - Large and Prominent */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-classify-blue to-classify-teal rounded-2xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-classify-gold text-classify-blue-dark px-4 py-2 rounded-full text-sm font-bold">
                MAIN FEATURE
              </span>
            </div>

            <div className="relative z-10 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Main function:
              </h3>
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                Upload or connect a simple spreadsheet of your exams (classes, subjects, teachers, rooms, constraints), and Classify&apos;s AI add-on extension on Google Sheets turns it into a <strong>conflict-free, constraint-aware exam timetable PDF</strong> — ready to print and share.
              </p>
              <p className="text-xl md:text-2xl font-bold mb-6 text-classify-gold">
                No more manual juggling: just <strong>one source sheet → one perfectly structured timetable</strong>, in about <strong>2 hours instead of 14 days</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-sm">Handles clashes, same-day limits, room capacities and special constraints</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl mb-2">📄</div>
                  <p className="text-sm">Generates a clear master timetable layout</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl mb-2">🏫</div>
                  <p className="text-sm">Built for schools and universities of all sizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Features */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-classify-blue">
            Bonus Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bonus #1 */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-classify-teal/30 hover:border-classify-teal transition-colors">
              <div className="flex items-center mb-4">
                <span className="bg-classify-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  1
                </span>
                <h4 className="text-xl font-bold text-classify-blue">Bonus #1 – Google Calendar sync</h4>
              </div>
              <p className="text-gray-700">
                Automatically creates and updates calendar events with reminders for each exam in <strong>Google Calendar</strong> — so proctors and students always see the latest schedule.
              </p>
            </div>

            {/* Bonus #2 */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-classify-teal/30 hover:border-classify-teal transition-colors">
              <div className="flex items-center mb-4">
                <span className="bg-classify-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  2
                </span>
                <h4 className="text-xl font-bold text-classify-blue">Bonus #2 – Editable Google Docs & Drive exports</h4>
              </div>
              <p className="text-gray-700">
                Generate beautifully formatted timetables as PDFs and Google Docs stored <strong>directly in Google Drive</strong> — organized and ready to print.
              </p>
            </div>

            {/* Bonus #3 */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-classify-teal/30 hover:border-classify-teal transition-colors">
              <div className="flex items-center mb-4">
                <span className="bg-classify-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  3
                </span>
                <h4 className="text-xl font-bold text-classify-blue">Bonus #3 – Proctor emails</h4>
              </div>
              <p className="text-gray-700">
                Send automated emails to proctors with their exam schedules (date/ time, rooms, and courses). 
              </p>
            </div>

            {/* Bonus #4 */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-classify-teal/30 hover:border-classify-teal transition-colors">
              <div className="flex items-center mb-4">
                <span className="bg-classify-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  4
                </span>
                <h4 className="text-xl font-bold text-classify-blue">Bonus #4 – Printable headers & envelopes</h4>
              </div>
              <p className="text-gray-700">
                Auto-generate <strong>electronic attendance Google Form</strong>, <strong>PDF timetables</strong>, and <strong>printable header sheets & envelopes for exams</strong> to simplify on-the-day logistics.
              </p>
            </div>

            {/* Bonus #5 */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-classify-teal/30 hover:border-classify-teal transition-colors md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <span className="bg-classify-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  5
                </span>
                <h4 className="text-xl font-bold text-classify-blue">Bonus #5 – Email Attendance To <strong>Instructors</strong></h4>
              </div>
              <p className="text-gray-700">
              One click automatically sends instructors a complete and clean attendance list for all their classes once the exam session is over.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-classify-teal/30 hover:border-classify-teal transition-colors md:col-span-2 lg:col-span-1">
  <div className="flex items-center mb-4">
    <span className="bg-classify-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
      6
    </span>
    <h4 className="text-xl font-bold text-classify-blue">
      Bonus #6 – Smart attendance analytics
    </h4>
  </div>
  <p className="text-gray-700">
  Automatic attendance report statistics — General, by class, course, instructor, 
  and exam session — helping you spot patterns and flag issues early in just one click.
  </p>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}

