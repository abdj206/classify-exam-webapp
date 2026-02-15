

import React from 'react'


export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
            Legal & Compliance
          </p>
          <h1 className="mt-3 bg-gradient-to-r from-amber-300 via-amber-100 to-sky-200 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-center text-sm text-slate-300">
            Last updated: <span className="font-medium text-slate-100">28/11/2025</span>
          </p>
          <p className="mt-3 max-w-3xl text-center text-sm sm:text-base text-slate-300">
            Classify Services LLC is committed to protecting your privacy and ensuring transparency in how we
            handle personal information. This Privacy Policy explains what data we collect, how it is
            used, and the rights you have as a user.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-[0_32px_120px_rgba(15,23,42,0.8)] sm:p-10">
            <p className="text-sm text-slate-300">
              This policy applies to our public website, our demo request and quote request forms,
              our communication emails, and our Google Sheets web application powered by Google Apps
              Script. It does <span className="font-semibold">not</span> apply to the data you
              store inside your own Google Sheets; that data is fully controlled by your
              institution.

              When we say “Classify”, "Classify Services", "Classify AI", “we”, “us”, and “our” in these terms we mean Classify Services LLC.
              When we say "instituion's data," "school's data", "your internal data," in this policy, we mean your instituion's internal data used inside our products.
              When we say “you” or “your,” we mean you. If you’re accessing our services on behalf of a legal entity (like your instituion's legal representative), you agree that you have the authority to bind that entity to these terms, and “you” and “your” will refer to that entity.
            </p>

            {/* 1. What the app does */}
            <SectionTitle number="1" title="What Our Google Sheets Web App Does" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                Classify AI is a Google Sheets web application that helps schools manage their
                organization. From within Google Sheets, our Apps Script-based tools can generate optimized timetables with minimal gap sessions.
              </p>
              {/* <ul className="ml-5 list-disc space-y-1 text-slate-200"> */}
                {/* <li>Generate optimized timetables based on your constraints.</li> */}
                {/* <li>Synchronize sessions with Google Calendar.</li> */}
                {/* <li>Create exam-related documents in Google Drive (attendance sheets, envelopes, etc.).</li> */}
                {/* <li>Automate exam-related workflows inside your Google Workspace.</li> */}
              {/* </ul> */}
              <p className="mt-3 font-semibold text-amber-200">
                Your instituion's data (students, instructors, rooms, classes, constraints, schedules, etc.)
                stays entirely inside your school&apos;s Google Workspace.
              </p>
              <p>
                We do <span className="font-semibold">not</span> store, access, or copy this internal data on our own servers. All processing happens inside your Google Sheets, Drive,
                and Calendar using Google Apps Script running under your account.
              </p>
            </div>

            {/* 2. Data we collect */}
            <SectionTitle number="2" title="Data We Collect" />

            <div className="space-y-4 text-sm leading-relaxed text-slate-200">
              <p>
                We only collect the personal data that you voluntarily submit on our website, plus
                minimal technical data for regional adaptation.
              </p>

              <SubTitle>2.1 Data You Provide Directly</SubTitle>
              <p>
                When you fill out a form on our website (demo request, quote request, contact form),
                we may collect:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>School name and school size</li>
                <li>Role / position (e.g. headteacher, administrator)</li>
                {/* <li>Number of exams per year (if provided)</li> */}
                <li>Notes or comments you choose to include</li>
                <li>Your choice to opt-in or not to updates and offers</li>
              </ul>

              <SubTitle>2.2 Data Automatically Collected</SubTitle>
              <p>We collect minimal technical data:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <span className="font-semibold">Country detection</span> based on your IP address,
                  used only to adapt pricing and communication to your region.
                </li>
              </ul>
              <p>We do not use analytics cookies, tracking pixels, or behavioral tracking tools.</p>

              <SubTitle>2.3 Data We Do Not Collect</SubTitle>
              <p>We do not collect or have access to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Institution's data stored in your Google Sheets</li>
                <li>Student or instructor names and contact details</li>
                <li>Room, subject, or schedule details from your Sheets</li>
                <li>Contents of your Google Drive files</li>
                <li>Your Google Calendar event details</li>
                <li>Google Workspace domain configuration or admin data</li>
                <li>Website browsing behavior, analytics, or advertising identifiers</li>
              </ul>
            </div>

            {/* 3. OAuth scopes */}
            <SectionTitle number="3" title="OAuth Scopes We Request" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                Our Google Sheets web app requires OAuth permissions so that your own Google account
                can perform automated actions inside your Google Workspace. Typical scopes may
                include:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <code className="rounded bg-slate-900 px-1.5 py-0.5 text-[0.75rem] text-amber-200">
                    https://www.googleapis.com/auth/spreadsheets
                  </code>
                </li>
                <li>
                  <code className="rounded bg-slate-900 px-1.5 py-0.5 text-[0.75rem] text-amber-200">
                    https://www.googleapis.com/auth/script.external_request
                  </code>
                </li>
              </ul>
              <p>
                These scopes are used only to operate the features you trigger, such as reading and

                writing to Sheets and generating documents and also to access the Google Workspace UI to perform actions.
              </p>
              <p className="font-semibold text-amber-200">
                We never use these permissions to transmit your internal data to our own
                servers, nor to any external analytics or advertising tool.
              </p>
              <p>
                Google Apps Script may internally store execution logs (e.g. for errors), but these
                logs are not visible to us unless you explicitly share access to the script project.
              </p>
            </div>

            {/* 4. How we use website data */}
            <SectionTitle number="4" title="How We Use Website-Submitted Personal Data" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>Personal data submitted through our website may be used to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Generate and send custom quotes and pricing.</li>
                <li>Send confirmation emails and follow-up messages about your requests.</li>
                <li>Provide demo access instructions and onboarding communication.</li>
                <li>Respond to your questions and support requests.</li>
                <li>
                  Send product updates or offers <span className="font-semibold">only</span> if you
                  have explicitly opted in.
                </li>
                <li>Maintain basic accounting records for paid subscriptions (via Stripe).</li>
              </ul>
              <p>
                We do not sell your personal data or share it with third-party advertisers or data
                brokers.
              </p>
            </div>

            {/* 5. Storage & security */}
            <SectionTitle number="5" title="Where and How Your Data Is Stored" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-200">
              <SubTitle>5.1 Institution's Data</SubTitle>
              <p>
                The instituion's data (students, classes, rooms, constraints, timetables, etc.) is
                stored in your institution&apos;s Google Workspace:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>You remain the controller and owner of this data.</li>
                <li>Google provides encryption, authentication, and backups.</li>
                <li>
                  We do not have access to this data unless you voluntarily share a file or project
                  with us.
                </li>
              </ul>

              <SubTitle>5.2 Website Form Data</SubTitle>
              <p>Data you submit via website forms is stored securely in:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Our email infrastructure for
                  communication.
                </li>
                <li>
                  Internal tools used to track conversations, quotes, and onboarding (no third-party
                  marketing platforms).
                </li>
                <li>
                  Stripe for payment-related metadata only; card data is handled directly by
                  Stripe.
                </li>
              </ul>
            </div>

            {/* 6. Security */}
            <SectionTitle number="6" title="Data Security" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                We follow best practices to protect the personal data you share with us via the
                website, including secure hosting, encrypted email transmission, and restricted
                internal access.
              </p>
              <p>
                For data inside Google Sheets, Drive, and Calendar, Google&apos;s security and
                compliance standards apply, including encryption at rest and in transit, OAuth-based
                access, and Google Workspace administrative controls.
              </p>
            </div>

            {/* 7. Rights */}
            <SectionTitle number="7" title="Your Rights" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Request access to the personal data you have provided to us.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Request deletion of personal data we store from website forms.</li>
                <li>
                  Object to or restrict certain types of processing, such as marketing emails.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <span className="font-semibold text-amber-200">
                  privacy@classifyservices.com
                </span>
                .
              </p>
              <p>
                Your internal data remains entirely under your control inside Google
                Workspace—you can modify or delete it at any time directly in your Sheets, Drive,
                and Calendar.
              </p>
            </div>

            {/* 8. Retention */}
            <SectionTitle number="8" title="Data Retention" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                We retain only the personal data you provide through our website and only for as long
                as necessary to:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Process your requests and communicate with you, and</li>
                <li>Maintain minimal records required for accounting and compliance.</li>
              </ul>
              <p>
                You can request deletion of your personal data at any time. Once your request is
                processed, we will remove your data from our systems, except where retention is
                required by law (for example, billing records).
              </p>
              <p>
                Internal data managed via the web app remains entirely in your Google Workspace and is
                governed by Google&apos;s own retention and deletion policies.
              </p>
            </div>

            {/* 9. Third-party services */}
            <SectionTitle number="9" title="Third-Party Services" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>We rely on a small number of trusted third-party services:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <span className="font-semibold">Google Workspace</span> – for all operations
                  performed by the web app inside your Sheets, Drive, and Calendar.
                </li>
                <li>
                  <span className="font-semibold">Email infrastructure</span> (via Nodemailer and an
                  SMTP provider) – to send confirmations, quotes, updates, and support responses.
                </li>
                <li>
                  <span className="font-semibold">Stripe</span> (planned) – to process subscription
                  payments securely. Stripe&apos;s own privacy policy applies to payment data.
                </li>
              </ul>
              <p>
                We do not use Google Analytics, Hotjar, advertising networks, or third-party
                tracking pixels on our marketing site.
              </p>
            </div>

            {/* 10. Cookies */}
            <SectionTitle number="10" title="Cookies" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                We do not use cookies or similar tracking technologies on our marketing site. The
                only automatic processing we perform is a one-time IP-based country lookup to adapt
                pricing and communication to your region.
              </p>
            </div>

            {/* 11. International transfers */}
            <SectionTitle number="11" title="International Data Transfers" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                Depending on your location and the infrastructure used by our providers, your
                website-submitted personal data may be processed in countries other than your own,
                including the United States or the European Union.
              </p>
              <p>
                We work only with reputable vendors that implement appropriate safeguards for
                international data transfers, such as encryption and standardized contractual
                clauses where required.
              </p>
              <p>
                Your school's data inside Google Workspace is stored and processed according to
                Google&apos;s infrastructure and data center locations.
              </p>
            </div>

            {/* 12. Contact */}
            <SectionTitle number="12" title="Contact Information" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                For privacy questions, access requests, or deletion requests, you can contact us at:
              </p>
              <p className="font-semibold text-amber-200">privacy@classifyservices.com</p>
              <p>
                If you are located in the European Union or another region with dedicated data
                protection authorities, you may also have the right to file a complaint with your
                local supervisory authority.
              </p>
            </div>

            {/* 13. Updates */}
            <SectionTitle number="13" title="Updates to This Privacy Policy" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in technology,
                regulation, or our services. When we do, we will update the “Last updated” date at
                the top of this page and, where appropriate, notify you by email or in-app notices.
              </p>
            </div>

            {/* 14. Governing law */}
            <SectionTitle number="14" title="Governing Law" />
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                This Privacy Policy is governed by the laws of the <strong>United Arab Emirates</strong>. Any disputes shall be  resolved through binding arbitration in Dubai, UAE, under the rules of the <strong>Dubai International Arbitration Centre</strong> except where applicable consumer protection or data protection laws require a different forum.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

type SectionProps = {
  number: string
  title: string
}

function SectionTitle({ number, title }: SectionProps) {
  return (
    <div className="mt-10 mb-4 flex items-center gap-3 border-b border-slate-800/80 pb-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 text-xs font-semibold text-amber-300">
        {number}
      </div>
      <h2 className="text-base font-semibold tracking-wide text-slate-50 sm:text-lg">
        {title}
      </h2>
    </div>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-3 text-sm font-semibold text-slate-100">
      {children}
    </h3>
  )
}



