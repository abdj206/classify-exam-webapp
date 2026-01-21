'use client'

import React from 'react'
import Cal from './BookCallbutton'

export default function VideoDemo() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-classify-blue">
          See it in action
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Demo */}
          <div>
            <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-lg font-semibold">Video Demo Coming Soon</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Watch how Classify transforms exam scheduling
                  </p>
                </div>
              </div>
              {/* YouTube embed placeholder - replace with actual embed code */}
              {/* <iframe
                className="w-full h-full"
                src="YOUR_YOUTUBE_EMBED_URL"
                title="Classify Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
            <button
              onClick={() => {
                // Placeholder - replace with actual video link
                //window.open('#', '_blank')
              }}
              className="mt-4 w-full px-6 py-3 bg-classify-blue text-white rounded-lg hover:bg-classify-blue-dark transition-colors font-medium"
            >
              Watch this full video demo
            </button>
          </div>

          {/* Contact & Questions */}
          <div className="bg-gradient-to-br from-classify-blue/5 to-classify-teal/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-classify-blue mb-4">
              Got any questions?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Want to see how we can make this system work for your specific institution ? We&apos;re happy to walk you through your own context. 
            </p>
            <div className="space-y-4">
              {/* <button
                onClick={() => {
                  // Placeholder - replace with actual Calendly URL
                  //window.open('https://calendly.com/classify-solutions', '_blank')
                }}
                className="w-full px-6 py-3 bg-classify-gold text-classify-blue-dark rounded-lg hover:bg-classify-gold-light transition-colors font-bold"
              >
                Book a call
              </button> */}
              <Cal/>
              <button
                onClick={() => {
                  window.location.href = 'mailto:info@classifyservices.com?subject=Question about Classify Solutions'
                }}
                className="w-full px-6 py-3 border-2 border-classify-blue text-classify-blue rounded-lg hover:bg-classify-blue hover:text-white transition-colors font-medium"
              >
                Ask by email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

