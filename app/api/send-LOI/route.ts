
import { verifySignatureAppRouter } from '@upstash/qstash/nextjs'
import sgMail from '@sendgrid/mail'  // Import SendGrid
import { generateLetterOfIntentPdf } from '@/lib/generateLetterOfIntentPdf'

interface SendLoiJobPayload {
  institutionName: string
  contactName: string
  contactEmail: string

  contactTitle?: string
  country?: string

  capacityLabel?: string
  maxStudentsText?: string

  developerName: string
  developerTitle?: string
}

function formatDateISO(date: Date): string {
  return date.toISOString().slice(0, 10) // "YYYY-MM-DD"
}

function buildEvaluationPackageEmailHtml(args: {
  contactName: string
  institutionName: string
  capacityLabel?: string
  developerName: string
  developerTitle?: string
}) {
  const { contactName, institutionName, capacityLabel, developerName, developerTitle } = args

  return `
<html>
  <body style="margin:0;padding:0;background-color:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">

      <div style="background-color:#111827;border-radius:16px;border:1px solid #1f2937;padding:24px;">
        
        <h1 style="margin:0 0 12px 0;font-size:20px;color:#f9fafb;">
          Your Classify AI evaluation package is ready
        </h1>

        <p style="margin:0 0 8px 0;font-size:14px;color:#d1d5db;">
          ${'Dear ' + contactName},
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          Thank you again for your interest in Classify AI and for requesting a custom quote for 
          <strong style="color:#f9fafb;">${institutionName}</strong>. We appreciate the time you’ve taken to explore the platform and see how it could support your exam management process.
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          Before preparing a formal proposal, our standard approach is to begin with a short Letter of Intent. This document is 
          <strong style="color:#f9fafb;">not a contract</strong>, does <strong style="color:#f9fafb;">not create any obligation</strong>, and simply confirms your interest in continuing the evaluation in a structured way.
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          You will find the Letter of Intent attached to this email. Once it is signed and returned to us, we will enable your 
          <strong style="color:#f9fafb;">30-day full-access evaluation</strong>, with a usage capacity aligned with the profile of your institution 
          ${
            capacityLabel
              ? `<span style="color:#9ca3af;">(${capacityLabel})</span>`
              : ''
          }. We will also provide simple instructions on how to request and activate this full licence directly from within your current demo environment, so the setup remains straightforward for your team.
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          As many institutions are approaching their upcoming examination period, we recommend completing this step within the next few days. This allows us to activate your extended access promptly and ensures your staff has enough time to test the platform in realistic conditions, should you wish to.
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          In the meantime, you can continue exploring the demo environment at your own pace. If you need any assistance—whether to simulate exam scenarios, clarify specific features, or better understand how the platform adapts to your workflow—we’re here to support you.
        </p>

        <p style="margin:0 0 0 0;font-size:14px;color:#d1d5db;">
          If a short call would make things easier, you can simply reply to this email and we’ll arrange it at a time that suits you.
        </p>

        <p style="margin:16px 0 0 0;font-size:13px;color:#9ca3af;">
          Thank you again for taking the time to evaluate Classify AI. We remain fully available for any questions or guidance you may need.
        </p>

        <p style="margin:12px 0 0 0;font-size:14px;color:#d1d5db;">
          ${developerName}<br/>
          <span style="color:#9ca3af;">${developerTitle ?? ''}</span><br/>
          <span style="color:#9ca3af;">Classify Solutions</span><br/>
          <a href="mailto:sales@classifyservices.com" style="color:#60a5fa;text-decoration:none;">sales@classifyservices.com</a>
        </p>

      </div>

      <p style="margin:12px 0 0 0;font-size:11px;color:#6b7280;text-align:center;">
        Classify Solutions – AI-powered exam scheduling and academic assessment automation.
      </p>
    </div>
  </body>
</html>
`;
}

async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    const body = (await req.json()) as SendLoiJobPayload

    const {
      institutionName,
      contactName,
      contactEmail,
      contactTitle,
      country,
      capacityLabel,
      developerName,
      developerTitle,
      maxStudentsText,
    } = body

    const issueDate = new Date()
    const issueDateStr = formatDateISO(issueDate)

    // 1) Generate LOI PDF
    const pdfBuffer = await generateLetterOfIntentPdf({
      institutionName,
      contactName,
      contactTitle,
      developerName,
      developerTitle,
      maxStudentsText: maxStudentsText ?? capacityLabel ?? 'up to 3,000 students',
      country,
      issueDate: issueDateStr,
    })

    // 2) Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)  // Set SendGrid API key

    // 3) Build email HTML content
    const html = buildEvaluationPackageEmailHtml({
      contactName,
      institutionName,
      capacityLabel,
      developerName,
      developerTitle,
    })

    // 4) Send email using SendGrid with PDF attached
    await sgMail.send({
      from: process.env.SMTP_USER!,
      to: process.env.SMTP_USER!,
      subject: `Your Classify AI evaluation package for ${institutionName}`,
      html,
      attachments: [
        {
          filename: `Classify-LOI-${institutionName}.pdf`,  // Ensure filename is provided
          content: pdfBuffer.toString('base64'),  // Convert buffer to base64
          type: 'application/pdf',  // Ensure correct MIME type
          disposition: 'attachment',
        },
        {
          filename: 'contact-email.txt',  // Add a dummy filename to avoid error
          content: contactEmail,  // Attach the contact email as a string
          type: 'text/plain',  // Use text/plain MIME type for this attachment
          disposition: 'inline',
        }
      ],
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (error) {
    console.error('send-LOI error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

// QStash verifies the request and then calls handler
export const POST = verifySignatureAppRouter(handler)
