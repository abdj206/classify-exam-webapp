'use client'

import Image from 'next/image'
import React from 'react'

export default function BeforeAfter() {
  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-classify-blue">
          Before Classify vs. After Classify
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-600 mb-6">BEFORE</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">✗</span>
                <p className="text-gray-700">Manually creating schools' timetables</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">✗</span>
                <p className="text-gray-700">Messy spreadsheets, emails & last-minute changes</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">✗</span>
                <p className="text-gray-700">10–15 days of scheduling and corrections</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">✗</span>
                <p className="text-gray-700">Gap sessions increasing electricity, supervision costs and responsibility</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-inner">
              <Image
                src="/images/OrgExam-before.png"
                alt="OrgExam workflow before Classify"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* After Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-classify-teal">
            <h3 className="text-2xl font-bold text-classify-teal mb-6">AFTER</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-classify-teal mr-3 text-xl">✓</span>
                <p className="text-gray-700">AI-generated timetables respecting all constraints & clashes using <strong>Google Sheets</strong></p>
              </div>
              <div className="flex items-start">
                <span className="text-classify-teal mr-3 text-xl">✓</span>
                <p className="text-gray-700">Organized single-spreadsheet and automatic PDF export</p>
                  {/* Automatic updates to <strong>Google Calendar</strong>, inform proctors by <strong>Gmail</strong>, and store PDF&apos;s in <strong>Google Drive</strong></p> */}
              </div>
              <div className="flex items-start">
                <span className="text-classify-teal mr-3 text-xl">✓</span>
                <p className="text-gray-700">
                  <strong>~30 minutes</strong> of total work time
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-classify-teal mr-3 text-xl">✓</span>
                <p className="text-gray-700">
                  Almost no gap sessions, students leave earlier, saving money and time
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-classify-teal/40 shadow-inner">
              <Image
                src="/images/OrgExam-after.png"
                alt="OrgExam workflow after Classify automation"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

