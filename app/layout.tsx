/**
 * Classify Solutions Landing Page
 * 
 * Framework: Next.js 14 (App Router)
 * Key Dependencies:
 * - next, react, react-dom
 * - typescript
 * - tailwindcss, postcss, autoprefixer
 * - nodemailer (for email functionality)
 * 
 * Environment Variables Required (create .env.local):
 * - DEMO_REQUEST_TO_EMAIL: Email address where demo requests are sent
 * - SMTP_HOST: SMTP server hostname
 * - SMTP_PORT: SMTP server port (usually 587 or 465)
 * - SMTP_USER: SMTP username
 * - SMTP_PASS: SMTP password
 * - GOOGLE_SHEET_ID: Google Sheet ID for lead storage (optional, stubbed with TODO)
 */

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Classify Solutions - AI-Powered Exam Scheduling',
  description: 'Transform exam organization from 14 days to 2 hours with AI-powered scheduling integrated with Google Workspace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

