import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { google } from 'googleapis'
import path from "path";
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY
import fs from 'fs';


interface DemoRequestData {
  name: string
  email: string
  institution: string
  role: string
  country: string
  schoolSize: string
  heardAbout: string
  wantsUpdates: boolean
}
type DemoRequestIncoming = DemoRequestData & {
  hearAbout?: string;       // legacy / alternative key
  receiveUpdates?: boolean; // legacy / alternative key
  turnstileToken?: string;
};
export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as Partial<DemoRequestIncoming>
    const token = data.turnstileToken


    if (!token) {
      return NextResponse.json(
        { success: false, error: 'MISSING_CAPTCHA' },
        { status: 400 }
      )
    }

    // 1) Verify Turnstile
    const captchaRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(
          TURNSTILE_SECRET_KEY || ''
        )}&response=${encodeURIComponent(token)}`,
      }
    )

    const captchaJson = await captchaRes.json()

    if (!captchaJson.success) {
      console.error('Turnstile failed:', captchaJson)
      return NextResponse.json(
        { success: false, error: 'CAPTCHA_FAILED' },
        { status: 400 }
      )
    }


    const payload: DemoRequestData = {
      name: data.name?.trim() ?? '',
      email: data.email?.trim() ?? '',
      institution: data.institution?.trim() ?? '',
      role: data.role?.trim() ?? '',
      country: data.country?.trim() ?? '',
      schoolSize: data.schoolSize?.trim() ?? '',
      heardAbout: data.heardAbout?.trim() ?? data.hearAbout?.trim() ?? '',
      wantsUpdates: Boolean(  
        typeof data.wantsUpdates !== 'undefined' 
        ? data.wantsUpdates 
        : data.receiveUpdates
),
    }; 

    const requiredFields: Array<keyof DemoRequestData> = ['name', 'email', 'institution', 'role', 'country', 'schoolSize']
    const missingFields = requiredFields.filter((field) => !payload[field])
    if (missingFields.length > 0) {
      return NextResponse.json({ success: false, error: 'MISSING_FIELDS', missingFields }, { status: 400 })
    }

    const requiredEnv = ['DEMO_REQUEST_TO_EMAIL', 'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SENDGRID_API_KEY']
    const missingEnv = requiredEnv.filter((key) => !process.env[key])
    if (missingEnv.length > 0) {
      console.error('Missing environment variables:', missingEnv)
      return NextResponse.json({ success: false, error: 'SERVER_MISCONFIGURED' }, { status: 500 })
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

    // const smtpPort = Number(process.env.SMTP_PORT || 587)
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: smtpPort,
    //   secure: smtpPort === 465,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })

    const adminHtml = `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Institution:</strong> ${payload.institution}</p>
      <p><strong>Role:</strong> ${payload.role}</p>
      <p><strong>Country / Region:</strong> ${payload.country}</p>
      <p><strong>School Size:</strong> ${payload.schoolSize}</p>
      <p><strong>How did they hear about us?</strong> ${payload.heardAbout || 'Not specified'}</p>
      <p><strong>Wants updates:</strong> ${payload.wantsUpdates ? 'Yes' : 'No'}</p>
    `

    await sgMail.send({
      to: process.env.DEMO_REQUEST_TO_EMAIL!,
      from: process.env.SMTP_USER!,
      subject: `New Demo Request from ${payload.name} - ${payload.institution}`,
      html: adminHtml,
    })

    const userHtml = `
<!DOCTYPE html>
<html lang="en" style="margin:0;padding:0;">
  <head>
    <meta charset="UTF-8" />
    <title>Your Classify Demo Access</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </head>
  <body style="margin:0;padding:0;background-color:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td align="center" style="padding:24px 16px;">
          <!-- Card container -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:600px;background-color:#111827;border-radius:20px;border:1px solid #2d3748;overflow:hidden;box-shadow:0 24px 60px rgba(15,23,42,0.75);">
            
            <!-- Top accent bar -->
            <tr>
              <td style="height:4px;background:linear-gradient(90deg,#1e3a8a,#3b82f6,#60a5fa);"></td>
            </tr>

            <!-- Header -->
            <tr>
              <td style="padding:24px 24px 8px 24px;text-align:left;">
                <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;">
                  Classify – AI Exam Scheduling
                </p>
                <h1 style="margin:8px 0 0 0;font-size:22px;line-height:1.3;color:#f9fafb;font-weight:700;">
                  Your Classify demo is ready
                </h1>
              </td>
            </tr>

            <!-- Greeting & intro -->
            <tr>
              <td style="padding:8px 24px 0 24px;text-align:left;">
                <p style="margin:0 0 12px 0;font-size:14px;line-height:1.6;color:#d1d5db;">
                  Dear <strong style="color:#f3f4f6;">${payload.name}</strong>,
                </p>
                <p style="margin:0 0 10px 0;font-size:14px;line-height:1.6;color:#d1d5db;">
                  Welcome to your <strong style="color:#f3f4f6;">Exam Scheduling Management tool</strong> with Classify.
                </p>
                <p style="margin:0 0 10px 0;font-size:14px;line-height:1.6;color:#d1d5db;">
                  Thank you for trying our <strong style="color:#f3f4f6;">AI exam scheduler</strong>! We've received your demo request, and you can start exploring Classify AI from today.
                </p>
                <p style="margin:0 0 12px 0;font-size:14px;line-height:1.6;color:#d1d5db;">
                  Below are the quick steps to get started. The whole setup takes <strong style="color:#f3f4f6;">less than 2 minutes</strong>.
                </p>
              </td>
            </tr>

            <!-- Step 1 -->
            <tr>
              <td style="padding:16px 24px 0 24px;text-align:left;">
                <h2 style="margin:0 0 4px 0;font-size:16px;color:#f9fafb;font-weight:600;">
                  Step 1 – Open the demo template (read-only)
                </h2>
                <p style="margin:4px 0 10px 0;font-size:13px;line-height:1.6;color:#d1d5db;">
                  This is a <strong style="color:#f3f4f6;">template only</strong>. Please do not enter real data here.
                </p>
                <p style="margin:0 0 14px 0;">
                  <a href="https://docs.google.com/spreadsheets/d/15xfNhqq5_VMNSfokh1kO4PXhFOnRHIln7mtp1JBdDtQ/edit?usp=drive_link"
                     style="display:inline-block;padding:9px 16px;border-radius:999px;background:linear-gradient(90deg,#2563eb,#3b82f6);color:#f9fafb;text-decoration:none;font-size:13px;font-weight:600;">
                    Open the template Google Sheet
                  </a>
                </p>
              </td>
            </tr>

            <!-- Step 2 -->
            <tr>
              <td style="padding:12px 24px 0 24px;text-align:left;">
                <h2 style="margin:0 0 4px 0;font-size:16px;color:#f9fafb;font-weight:600;">
                  Step 2 – Make your own editable copy
                </h2>
                <ol style="margin:4px 0 10px 20px;padding:0;font-size:13px;line-height:1.6;color:#d1d5db;">
                  <li>Open the template sheet (link above).</li>
                  <li>In the menu, click <strong>File → Make a copy…</strong></li>
                  <li>Choose a name and a folder in <strong>your own Google Drive</strong>.</li>
                  <li>Work only in <strong>your own copy</strong> — this is where you will enter all exam data.</li>
                </ol>
                <p style="margin:0 0 14px 0;font-size:13px;line-height:1.6;color:#9ca3af;">
                  🔒 <strong style="color:#f3f4f6;">Privacy note:</strong> your data stays in <strong>your</strong> Google Drive.  
                  Our team cannot see the data in your copy unless you explicitly share it with us.
                </p>
              </td>
            </tr>

            <!-- Step 3 -->
            <tr>
              <td style="padding:12px 24px 0 24px;text-align:left;">
                <h2 style="margin:0 0 4px 0;font-size:16px;color:#f9fafb;font-weight:600;">
                  Step 3 – Connect your sheet to the web app
                </h2>
                <p style="margin:4px 0 8px 0;font-size:13px;line-height:1.6;color:#d1d5db;">
                  When you run the <strong>Initial settings</strong> in the front-end (from your copied sheet), you’ll be asked for the <strong>Web App URL</strong>.
                </p>
                <p style="margin:0 0 8px 0;font-size:13px;line-height:1.6;color:#d1d5db;">
                  Please paste the following URL exactly:
                </p>
                <p style="margin:0 0 14px 0;font-size:13px;line-height:1.6;color:#facc15;font-weight:600;">
                  Web App URL:<br />
                  <span style="word-break:break-all;color:#f3f4f6;">
                    https://script.google.com/macros/s/AKfycbx_2BHwZDhXu3FUxOJsEQbexhuSRdxHZ0UAnAmRpvaS67i7r0c_LFG64uyPb7-WSoMT/exec
                  </span>
                </p>
                <p style="margin:0 0 14px 0;font-size:13px;line-height:1.6;color:#d1d5db;">
                  Once this is done, the web application will be linked to your copy of the sheet, and all exam scheduling data will remain private to your institution.
                </p>
              </td>
            </tr>

            <!-- Non-Google emails -->
            <tr>
              <td style="padding:8px 24px 0 24px;text-align:left;">
                <h3 style="margin:0 0 4px 0;font-size:14px;color:#f9fafb;font-weight:600;">
                  Using a non-Google email address?
                </h3>
                <p style="margin:4px 0 16px 0;font-size:13px;line-height:1.6;color:#d1d5db;">
                  To open the sheet and use the web app, you may be asked to sign in with a Google account.  
                  You can quickly create a Google account using this same email address if you don’t already have one.
                </p>
              </td>
            </tr>

            <!-- Outro -->
            <tr>
              <td style="padding:0 24px 20px 24px;text-align:left;">
                <p style="margin:0 0 8px 0;font-size:13px;line-height:1.6;color:#d1d5db;">
                  If you’d like help setting things up or want a guided walkthrough, simply reply to this email and we’ll be happy to assist.
                </p>
                <p style="margin:0;font-size:13px;line-height:1.6;color:#d1d5db;">
                  Best regards,<br />
                  <strong style="color:#f3f4f6;">The Classify Team</strong><br />
                  <span style="color:#9ca3af;">Making exam organization feel effortless.</span>
                </p>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:0 24px;">
                <hr style="border:none;border-top:1px solid #1f2937;margin:12px 0;" />
              </td>
            </tr>

            <!-- Footer with logo -->
            <tr>
              <td style="padding:8px 24px 18px 24px;text-align:center;">
                <img
                  src="cid:classify-logo"
                  alt="Classify Solutions"
                  width="180"
                  style="max-width:100%;height:auto;display:block;margin:0 auto 8px auto;"
                />
                <p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.5;">
                  © ${new Date().getFullYear()} Classify Solutions. All rights reserved.
                </p>
                <p style="margin:4px 0 0 0;font-size:11px;color:#6b7280;">
                  You are receiving this email because you requested a demo of the Classify AI exam scheduler.
                </p>
                <p style="margin:8px 0 0 0;font-size:11px;color:#6b7280;line-height:1.5;">
                  If you didn’t request this email, you can
                  <a href="mailto:support@classifyservices.com?subject=Report%20unauthorized%20Classify%20email"
                     style="color:#60a5fa;text-decoration:underline;">
                    report it here
                  </a>
                  or simply ignore it.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
const filePath = path.join(process.cwd(), 'public', 'images', 'classify-logo.png');

// Read the file content and convert it to base64 (this is already correct)
const fileContent = fs.readFileSync(filePath, { encoding: 'base64' });

    await sgMail.send({
      from: process.env.SMTP_USER!,
      to: payload.email,
      subject: 'Your Classify AI demo access - getting started',
      html: userHtml,
      attachments: [
        {
          filename: 'classify-logo.png',
          content: fileContent,
          type: 'image/png',
          // disposition: 'inline',
          // content_id: 'classify-logo',
        },
      ],
    }).then((response) => {
      console.log('Email sent successfully!', response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      console.error('Error response body:', error.response?.body);
    });

    try {
      const sheetId = process.env.GOOGLE_SHEET_ID
      const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
      const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, '\n')

      if (sheetId && clientEmail && privateKey) {
        const jwt = new google.auth.JWT(clientEmail, undefined, privateKey, ['https://www.googleapis.com/auth/spreadsheets'])
        const sheets = google.sheets({ version: 'v4', auth: jwt })

        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: 'A:H',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [
              [
                payload.name,
                payload.email,
                payload.institution,
                payload.role,
                payload.country,
                payload.schoolSize,
                payload.heardAbout || '',
                payload.wantsUpdates ? 'Yes' : 'No',
              ],
            ],
          },
        })
      } else {
        console.warn('Google Sheets env vars missing; skipping sheet append.')
      }
    } catch (error) {
      console.error('Error storing lead in Google Sheet:', error)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Demo request error:', error)
    return NextResponse.json({ success: false, error: 'INTERNAL_ERROR' }, { status: 500 })
  }
}

