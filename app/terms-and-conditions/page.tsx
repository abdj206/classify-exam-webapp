export default function TermsPage() {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        {/* Hero / Header */}
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
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 max-w-2xl text-center text-sm text-slate-300">
              Last updated: <span className="font-medium text-slate-100">28/11/2025</span>
            </p>
            <p className="mt-3 max-w-3xl text-center text-sm sm:text-base text-slate-300">
              These Terms govern your use of the Classify AI website and Google Sheets-based exam
              management web app. Relax, grab a coffee and please read them carefully. It will take approximatly 10 minutes to read.
            </p>
          </div>
        </section>
  
        {/* Content */}
        <section className="bg-slate-950 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <article className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-[0_32px_120px_rgba(15,23,42,0.8)] sm:p-10">
              <p className="text-sm text-slate-300">
                By accessing or using the Classify AI website (the &quot;Site&quot;) or the Classify
                exam management web app integrated with Google Sheets (the &quot;Web App&quot; or
                &quot;Service&quot;), you agree to be bound by these Terms &amp; Conditions
                (&quot;Terms&quot;). These Terms form a binding agreement between you (the
                &quot;Customer&quot;, &quot;User&quot;, or &quot;Institution&quot;) and Classify AI
                (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              </p>
  
              {/* 1 */}
              <SectionTitle number="1" title="Introduction" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  These Terms govern your access to and use of the Site and the Web App. The Service
                  is intended primarily for educational institutions and their authorized staff. By
                  using the Service, you confirm that you have the authority to enter into this
                  agreement on behalf of your institution.
                </p>
              </div>
  
              {/* 2 */}
              <SectionTitle number="2" title="Eligibility" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  You must be at least 18 years old and acting as an authorized representative of a
                  school, university, or educational institution to use the Service. By using the
                  Service, you represent and warrant that you meet these requirements and have the
                  authority to bind your institution to these Terms.
                </p>
              </div>
  
              {/* 3 */}
              <SectionTitle number="3" title="Description of the Service" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  Classify AI provides a Google Sheets–based web application (implemented using Google
                  Apps Script) that assists institutions with exam management tasks, including:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Generating exam timetables using data you provide.</li>
                  <li>
                    Constraint-based scheduling logic, including detecting overlapping exams for the
                    same student group, allocation based on instructor availability, room capacity
                    checks, and prevention of double-booking based on your inputs.
                  </li>
                  <li>Assigning or suggesting proctoring schedules.</li>
                  <li>Synchronizing exam events with Google Calendar.</li>
                  <li>
                    Generating documents in Google Drive, such as attendance sheets, envelopes, or
                    exam session summaries.
                  </li>
                  <li>Automating selected notifications and email templates, where configured.</li>
                </ul>
                <p>
                  All exam data (students, instructors, rooms, subjects, constraints, schedules, etc.)
                  remains stored in your own Google Workspace environment (Sheets, Drive, Calendar).
                  Classify AI does not host or permanently store your internal academic data on its
                  own servers.
                </p>
              </div>
  
              {/* 4 */}
              <SectionTitle number="4" title="License Grant & Usage Scope" />
              <div className="space-y-4 text-sm leading-relaxed text-slate-200">
                <p>
                  Upon purchase or activation, and subject to these Terms, Classify AI grants your
                  institution a limited, revocable, non-exclusive, non-transferable, non-sublicensable
                  license to use the Web App for internal exam management purposes only.
                </p>
  
                <SubTitle>4.1 Tier A – Standard Schools (&lt; 3,000 students)</SubTitle>
                <ul className="ml-5 list-disc space-y-1">
                  <li>License applies to a single educational institution (single school/campus).</li>
                  <li>Unlimited internal users within that institution are allowed.</li>
                  <li>
                    You may not use one institution&apos;s license for another institution or external
                    client.
                  </li>
                  <li>
                    You may not use the Service as a separate commercial offering to other schools or
                    organizations.
                  </li>
                  <li>
                    Copying, redistributing, or attempting to reverse-engineer the Web App or its
                    code is strictly prohibited.
                  </li>
                </ul>
  
                <SubTitle>4.2 Tier B – Consultants / Multi-School Operators</SubTitle>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    Consultants or service providers may assist multiple schools using Classify AI,
                    but each school must have its own valid license.
                  </li>
                  <li>
                    A single institutional license cannot be used to service multiple distinct
                    institutions that are not part of the licensed entity.
                  </li>
                  <li>
                    Resale, white-labeling, or bundling of Classify AI as part of another commercial
                    product requires explicit written agreement with Classify AI.
                  </li>
                </ul>
  
                <SubTitle>4.3 Tier C – Large Universities (≥ 3,000 students)</SubTitle>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    One license may cover an entire university (including multiple faculties or
                    campuses) under the same legal entity, as specified in the contract.
                  </li>
                  <li>Unlimited internal users within that university are allowed.</li>
                  <li>
                    The license may not be used to provide services to institutions that are not part
                    of the same university entity.
                  </li>
                </ul>
  
                <SubTitle>4.4 Student Volume Limit</SubTitle>
                <p>
                  Each license includes a specific maximum number of students, defined in the purchase
                  agreement, order form, or invoice. This student volume limit defines the scope of
                  permitted usage under the license. If your institution exceeds this student limit,
                  you agree to upgrade the license or obtain additional licensing as required.
                </p>
              </div>
  
              {/* 5 */}
              <SectionTitle number="5" title="Ownership & Intellectual Property" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  All rights, title, and interest in and to the Web App, underlying code, scripts,
                  workflows, algorithms, documentation, branding, logos, and the Site remain the
                  exclusive property of Classify AI and its licensors.
                </p>
                <p>
                  You receive only limited usage rights under these Terms and do not acquire any
                  ownership interest in the Service or related intellectual property.
                </p>
                <p>
                  Reverse-engineering, decompiling, copying, or creating derivative works based on the
                  Web App is strictly prohibited.
                </p>
              </div>
  
              {/* 6 */}
              <SectionTitle number="6" title="Registration & Security" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  When you submit demo requests, quote requests, or similar forms on the Site, you
                  agree to provide accurate, complete, and up-to-date information. This may include
                  your name, institutional email, role, school name, and estimated student volume.
                </p>
                <p>
                  Your institution is responsible for managing access to its Google Workspace accounts
                  and ensuring that only authorized staff can use the Web App. Classify AI is not
                  responsible for issues arising from misconfigured Google Workspace permissions,
                  shared credentials, or compromised accounts.
                </p>
                <p>
                  Any activation keys, setup links, or onboarding instructions provided by Classify AI
                  must be treated as confidential by your institution.
                </p>
              </div>
  
              {/* 7 */}
              <SectionTitle number="7" title="Acceptable Use Policy" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>You agree not to use the Service to:</p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Engage in any unlawful, fraudulent, or harmful activity.</li>
                  <li>
                    Process data for which your institution does not have the necessary rights or
                    legal basis (e.g. FERPA/GDPR compliance remains your responsibility).
                  </li>
                  <li>Attempt to bypass licensing, student volume limitations, or technical controls.</li>
                  <li>Scrape, copy, or attempt to reverse-engineer the functionality of the Web App.</li>
                  <li>Resell access or provide the Service to third parties without authorization.</li>
                  <li>
                    Deliberately overload or abuse the underlying Google APIs or Apps Script execution
                    environment.
                  </li>
                </ul>
                <p>
                  Sharing screenshots or non-sensitive demonstration videos is generally permitted, but
                  you remain responsible for any sensitive or confidential information you choose to
                  share publicly. Classify AI is not liable for information that you or your staff
                  disclose on your own initiative.
                </p>
              </div>
  
              {/* 8 */}
              <SectionTitle number="8" title="Payments, Billing & Refunds" />
              <div className="space-y-4 text-sm leading-relaxed text-slate-200">
                <SubTitle>8.1 Payment Processor</SubTitle>
                <p>
                  Payments for the Service are processed securely through Stripe or another reputable
                  payment provider designated by Classify AI. We do not store full credit card
                  numbers on our own systems.
                </p>
  
                <SubTitle>8.2 Billing Options</SubTitle>
                <p>We may offer the following billing options:</p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>One-time payments per semester.</li>
                  <li>One-time payments per academic year.</li>
                  <li>
                    Monthly recurring subscriptions, cancellable at any time with at least 48 hours
                    notice before the next billing cycle.
                  </li>
                </ul>
  
                <SubTitle>8.3 Refund Policy</SubTitle>
                <p>
                  Classify AI offers a full refund within <span className="font-semibold">7 days</span>{' '}
                  of the initial payment in the following situations:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    The institution is not satisfied with the Service and requests cancellation within
                    7 days of payment.
                  </li>
                  <li>
                    The institution is unable to complete onboarding due to technical limitations not
                    caused by misconfiguration of its own Google Workspace environment.
                  </li>
                  <li>
                    A legitimate issue prevents use of the Service and cannot reasonably be resolved
                    by Classify AI within the 7-day period.
                  </li>
                </ul>
                <p>
                  Before issuing a refund, Classify AI may invite you to complete a short, optional
                  feedback survey, which is used only to improve the Service.
                </p>
                <p>
                  After the 7-day window, refunds are generally not available.{/*, including in cases
                  such as:*/}
                </p>
                {/*<ul className="ml-5 list-disc space-y-1">
                  <li>Incorrect or incomplete data entered by your institution.</li>
                  <li>Misconfiguration of your Google Workspace or Google Sheets environment.</li>
                  <li>Institutional policy changes unrelated to Classify AI.</li>
                  <li>Lack of usage despite successful onboarding and activation.</li>
                  <li>Exceeding the licensed student volume without purchasing an upgrade.</li>
                </ul>*/}
                <p>
                  Billing errors or duplicate charges, if any, will be corrected promptly upon
                  verification.
                </p>
  
                <SubTitle>8.4 Pricing Lock & Custom Features</SubTitle>
                <p>
                  If your agreement or invoice specifies &quot;locked-in pricing&quot; for a defined
                  term, that pricing will not change during the specified term, provided usage stays
                  within the agreed scope (including student volume and included features).
                </p>
                <p>
                  Pricing may be adjusted for additional features, integrations, or significantly
                  increased complexity that is not covered by the original agreement, unless expressly
                  stated otherwise in writing.
                </p>
              </div>
  
              {/* 9 */}
              <SectionTitle number="9" title="Price Changes" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  Classify AI reserves the right to change its prices for new or renewing customers.
                  For existing customers on non-locked plans, we will provide at least{' '}
                  <span className="font-semibold">30 days&apos; notice</span> before any price
                  increase takes effect.
                </p>
                <p>
                  Contracts that explicitly state a fixed or &quot;locked-in&quot; price for a
                  specific term will remain at that price for the duration of the term, subject to the
                  agreed usage limits.
                </p>
              </div>
  
              {/* 10 */}
              <SectionTitle number="10" title="Support" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  Classify AI provides support through email and, where applicable, scheduled calls
                  and priority onboarding for paid institutions. Support availability and response
                  times may vary based on your subscription or agreement.
                </p>
              </div>
  
              {/* 11 */}
              <SectionTitle number="11" title="Data & Privacy" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  All exam-related data processed by the Web App resides within your institution&apos;s
                  own Google Workspace environment (Sheets, Drive, Calendar). Classify AI does not
                  host or permanently store your internal exam data.
                </p>
                <p>
                  Our handling of personal data provided through the Site (e.g. demo and quote
                  requests) is described in our separate Privacy Policy. By using the Service, you
                  also agree to the terms of that Privacy Policy.
                </p>
              </div>
  
              {/* 12 */}
              <SectionTitle number="12" title="Service Availability & Google Dependencies" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  The Web App depends on Google infrastructure and APIs, including Google Sheets,
                  Drive, Calendar, and Apps Script. Classify AI is not responsible for interruptions
                  or limitations caused by:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Google Sheets outages or degraded performance.</li>
                  <li>Google Drive downtime or access issues.</li>
                  <li>Google Calendar synchronization issues originating from Google.</li>
                  <li>Misconfiguration of your Google Workspace or admin policies.</li>
                </ul>
                <p>
                  If a problem originates from our Web App itself, we will provide support and work
                  diligently to diagnose and resolve the issue.
                </p>
                <p>
                  While we aim to provide a reliable experience, we do not guarantee uninterrupted
                  access to the Service.
                </p>
              </div>
  
              {/* 13 */}
              <SectionTitle number="13" title="Disclaimer of Warranties" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  The Service is provided on an <span className="italic">&quot;as is&quot;</span> and{' '}
                  <span className="italic">&quot;as available&quot;</span> basis, without warranties
                  of any kind, whether express, implied, or statutory.
                </p>
                <p>
                  Classify AI does not warrant that the Service will be error-free, fully compatible
                  with all custom configurations, or sufficient to satisfy all institutional
                  requirements.
                </p>
                <p>
                  The Web App is designed and tested to operate reliably within the student volume and
                  configuration defined in your contract. However, rare or unexpected errors may still
                  occur, including due to unusual or changing behaviors in Google Workspace.
                </p>
                <p>
                  We do not guarantee the complete absence of errors, but if issues are caused by our
                  Web App, we will provide support and attempt to resolve them within reasonable
                  limits.
                </p>
              </div>
  
              {/* 14 */}
              <SectionTitle number="14" title="Limitation of Liability" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  To the maximum extent permitted by applicable law, Classify AI&apos;s total
                  liability for any claim arising out of or relating to the Service or these Terms is
                  limited to the total amount paid by your institution to Classify AI in the{' '}
                  <span className="font-semibold">twelve (12) months</span> preceding the event giving
                  rise to the claim.
                </p>
                <p>
                  Classify AI shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including lost profits, data loss, exam
                  disruptions, or reputational damage, even if advised of the possibility of such
                  damages.
                </p>
                <p>
                  Your institution remains responsible for reviewing and validating timetables and
                  outputs before they are finalized or communicated to students or staff.
                </p>
              </div>
  
              {/* 15 */}
              <SectionTitle number="15" title="Indemnification" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  You agree to indemnify and hold harmless Classify AI, its officers, directors,
                  employees, and agents from and against any claims, damages, losses, liabilities, and
                  expenses (including reasonable legal fees) arising out of:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Your misuse of the Service.</li>
                  <li>
                    Your violation of any applicable laws, including but not limited to FERPA, GDPR,
                    or local data protection regulations.
                  </li>
                  <li>Inaccurate, incomplete, or unlawful data entered into your Google Sheets.</li>
                  <li>Any breach of these Terms or of your licensing limitations.</li>
                </ul>
              </div>
  
              {/* 16 */}
              <SectionTitle number="16" title="Termination" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  Classify AI may suspend or terminate your access to the Service, in whole or in
                  part, with immediate effect if:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Required payments are not made when due.</li>
                  <li>You exceed your licensed usage or student volume and fail to correct it.</li>
                  <li>You engage in illegal activity or violate the Acceptable Use Policy.</li>
                  <li>You attempt to reverse-engineer, copy, or redistribute the Web App.</li>
                  <li>
                    You otherwise materially breach these Terms and do not cure the breach within a
                    reasonable period after notice (where applicable).
                  </li>
                </ul>
                <p>
                  Termination does not entitle you to a refund, except as explicitly provided under
                  the Refund Policy section.
                </p>
              </div>
  
              {/* 17 */}
              <SectionTitle number="17" title="DMCA Notice" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  If you believe that content on the Site or the Web App infringes your copyright,
                  you may submit a notice under the Digital Millennium Copyright Act (DMCA) by
                  emailing:
                </p>
                <p className="font-semibold text-amber-200">terms@classifyservices.com</p>
                <p>
                  Please include the following information in your notice (to the extent required by
                  law):
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Your name, address, and contact information.</li>
                  <li>
                    A description of the copyrighted work you believe has been infringed and the
                    location of the allegedly infringing material.
                  </li>
                  <li>
                    A statement that you have a good-faith belief that the use is not authorized by
                    the copyright owner, its agent, or the law.
                  </li>
                  <li>
                    A statement that the information in the notice is accurate and, under penalty of
                    perjury, that you are authorized to act on behalf of the copyright owner.
                  </li>
                  <li>Your physical or electronic signature.</li>
                </ul>
              </div>
  
              {/* 18 */}
              <SectionTitle number="18" title="Updates to These Terms" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  We may update or modify these Terms from time to time to reflect changes in the
                  Service, legal requirements, or business practices. When we do, we will update the
                  &quot;Last updated&quot; date at the top of this page and may provide additional
                  notice where appropriate.
                </p>
                <p>
                  Your continued use of the Service after updated Terms become effective constitutes
                  your acceptance of those changes.
                </p>
              </div>
  
              {/* 19 */}
              <SectionTitle number="19" title="Governing Law" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  These Terms are governed by and construed in accordance with the laws of the State
                  of California, USA, without regard to its conflict-of-laws principles.
                </p>
                <p>
                  This governing law clause applies to the maximum extent permitted by applicable law.
                  Users located in jurisdictions with mandatory consumer protection or data protection
                  rights will retain any non-waivable rights granted to them under those laws.
                </p>
              </div>
  
              {/* 20 */}
              <SectionTitle number="20" title="Dispute Resolution" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <p>
                  Any dispute, claim, or controversy arising out of or relating to these Terms or the
                  Service shall be brought exclusively in the state or federal courts located in
                  California, USA, unless applicable law requires a different forum.
                </p>
              </div>
  
              {/* 21 */}
              <SectionTitle number="21" title="Miscellaneous" />
              <div className="space-y-3 text-sm leading-relaxed text-slate-200">
                <SubTitle>21.1 Entire Agreement</SubTitle>
                <p>
                  These Terms constitute the entire agreement between you and Classify AI regarding
                  the Service and supersede all prior or contemporaneous agreements, proposals, or
                  communications.
                </p>
  
                <SubTitle>21.2 Severability</SubTitle>
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable, the
                  remaining provisions will continue in full force and effect.
                </p>
  
                <SubTitle>21.3 No Waiver</SubTitle>
                <p>
                  The failure of Classify AI to enforce any right or provision of these Terms will not
                  be deemed a waiver of such right or provision.
                </p>
  
                <SubTitle>21.4 Assignment</SubTitle>
                <p>
                  You may not assign or transfer your rights or obligations under these Terms without
                  our prior written consent. Classify AI may assign its rights or obligations in
                  connection with a merger, acquisition, or sale of assets.
                </p>
  
                <SubTitle>21.5 Headings</SubTitle>
                <p>
                  Section titles and headings in these Terms are for convenience only and have no
                  legal or contractual effect.
                </p>
  
                <SubTitle>21.6 Force Majeure</SubTitle>
                <p>
                  Classify AI will not be liable for any failure or delay in performance caused by
                  events beyond its reasonable control, including but not limited to natural
                  disasters, wars, government actions, strikes, internet failures, or outages of
                  Google Workspace or other third-party services.
                </p>
  
                <SubTitle>21.7 Survival</SubTitle>
                <p>
                  Provisions relating to intellectual property, payments due, limitations of
                  liability, indemnification, and governing law will survive the termination or
                  expiration of these Terms.
                </p>
  
                <SubTitle>21.8 Language</SubTitle>
                <p>
                  These Terms may be provided in multiple languages. In the event of any inconsistency
                  or dispute, the English version shall prevail.
                </p>
              </div>
  
              {/* Contact */}
              <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Questions?</p>
                <p>
                  If you have any questions about these Terms &amp; Conditions, you can contact us at:{' '}
                  <span className="font-semibold text-amber-200">terms@classifyservices.com</span>
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
  