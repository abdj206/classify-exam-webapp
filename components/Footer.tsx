'use client'

import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-classify-blue-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <Logo
              className="mb-6"
              imageClassName="w-[100px] md:w-[170px] lg:w-[210px] object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
            />
            <p className="text-gray-300 leading-relaxed">
              Classify exists to make exam organization feel effortless — so educators can focus on learning, not logistics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#why"
                  className="text-gray-300 hover:text-classify-gold transition-colors"
                >
                  Why Classify
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-classify-gold transition-colors"
                >
                  Features
                </a>
              </li>
              {/* <li>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-classify-gold transition-colors"
                >
                  Pricing
                </a>
              </li> */}
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-classify-gold transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@classifyservices.com"
                  className="text-gray-300 hover:text-classify-gold transition-colors"
                >
                  info@classifyservices.com
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/classify-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-classify-gold transition-colors"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Classify Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-classify-gold transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-gray-400 hover:text-classify-gold transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

