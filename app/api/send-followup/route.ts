// app/api/send-followup/route.ts
//import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { verifySignatureAppRouter } from '@upstash/qstash/nextjs'

interface FollowupPayload {
  schoolName: string
  contactName: string
  contactEmail: string
  pricing: {
    semester: number
    month: number
    year: number
    zeta: number
  }
}

async function handler(req: Request) {
  const body = (await req.json()) as FollowupPayload

  const { schoolName, contactName, contactEmail, pricing } = body
  const { semester, month, year } = pricing

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  function buildFollowupEmailHtml(args: {
    contactName: string
    schoolName: string
    semester: number
    month: number
    year: number
    contactEmail: string
  }) {
    return `
    <html>
  <body style="margin:0;padding:0;background-color:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
      
      <div style="background-color:#111827;border-radius:16px;border:1px solid #1f2937;padding:24px;">
        
        <h1 style="margin:0 0 12px 0;font-size:20px;color:#f9fafb;">
          We're here if you need any guidance
        </h1>

        <p style="margin:0 0 8px 0;font-size:14px;color:#d1d5db;">
          ${"Dear " + args.contactName},
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          I hope you're doing well. This is just a quick check-in in case you need anything from our side while reviewing the material we shared. 
          Every institution has its own internal steps when exploring new academic technologies, so we’re here to support you at whatever pace works best for ${schoolName}.
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          If you have any questions about how Classify AI fits into your exam workflow, how to test certain features inside the demo, 
          or anything related to the Letter of Intent, feel free to reach out — we’re glad to help.
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          In the meantime, you can continue exploring the demo environment at your convenience. 
          Many institutions find it useful to simulate one or two exam scenarios inside the demo to see how the platform adapts to their workflow.
        </p>

        <p style="margin:0 0 0 0;font-size:14px;color:#d1d5db;">
          If a short call would be easier, you can simply reply to this email and we’ll set everything up for you.
        </p>

        <p style="margin:16px 0 0 0;font-size:13px;color:#9ca3af;">
          Thank you again for taking the time to evaluate Classify AI.  
          We remain fully available to assist you whenever you’re ready.
        </p>

      </div>

      <p style="margin:12px 0 0 0;font-size:11px;color:#6b7280;text-align:center;">
        Classify Solutions – AI-powered exam scheduling and academic assessment automation.
      </p>
    </div>
  </body>
</html>
`
  }
  

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: contactEmail,
    bcc: process.env.SMTP_USER,
    subject: `Any questions about your Classify AI quote for ${schoolName}?`,
    html: buildFollowupEmailHtml({
      contactName,
      schoolName,
      semester,
      month,
      year,
      contactEmail
    }),
  })

  return Response.json({ ok: true })
}

export const POST = verifySignatureAppRouter(handler)
