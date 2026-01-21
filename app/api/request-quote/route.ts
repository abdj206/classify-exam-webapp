// app/api/request-quote/route.ts

import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'  // Import SendGrid
// import { qstashClient } from '../../../lib/qstash'
import { calculateFullPricing, getZetaForCountry, SchoolSize } from '../../../lib/pricing'
// import { mapSchoolSizeToCapacity } from '@/lib/mapSchoolSizeToCapacity'

const ISO2_TO_COUNTRY: Record<string, string> = {
  // A
  AF: 'Afghanistan',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AG: 'Antigua and Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',

  // B
  BS: 'The Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia and Herzegovina',
  BW: 'Botswana',
  BR: 'Brazil',
  VG: 'British Virgin Islands',
  BN: 'Brunei',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',

  // C
  CV: 'Cabo Verde (Cape Verde)',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CD: 'Democratic Republic of the Congo',
  CG: 'Republic of the Congo',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  CI: 'Côte d’Ivoire',
  HR: 'Croatia',
  CU: 'Cuba',
  CW: 'Curaçao',
  CY: 'Cyprus',
  CZ: 'Czech Republic',

  // D, E, F
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  TL: 'East Timor (Timor-Leste)',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  SZ: 'Eswatini (Swaziland)',
  ET: 'Ethiopia',
  FK: 'Falkland Islands',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',

  // G, H
  GA: 'Gabon',
  GM: 'The Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',

  // I, J, K
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KP: 'North Korea',
  KR: 'South Korea',
  XK: 'Kosovo',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',

  // L, M
  LA: 'Laos',
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macau',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia',
  MD: 'Moldova',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar (Burma)',

  // N, O, P, Q
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  MK: 'North Macedonia',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn Island',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',

  // R, S
  RE: 'Réunion',
  RO: 'Romania',
  RU: 'Russia',
  RW: 'Rwanda',
  SH: 'Saint Helena',
  KN: 'Saint Kitts and Nevis',
  LC: 'Saint Lucia',
  PM: 'Saint-Pierre and Miquelon',
  VC: 'Saint Vincent and the Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome and Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SX: 'Sint Maarten',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SS: 'South Sudan',
  SD: 'Sudan',
  SR: 'Suriname',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syria',

  // T, U, V, W, Y, Z
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania',
  TH: 'Thailand',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad and Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TV: 'Tuvalu',
  TC: 'Turks and Caicos Islands',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
  VI: 'United States Virgin Islands',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VA: 'Vatican City',
  VE: 'Venezuela',
  VN: 'Vietnam',
  WF: 'Wallis and Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
}

function detectCountryFromRequest(req: NextRequest): string {
  const vercelCode = req.headers.get('x-vercel-ip-country')
  const cfCode = req.headers.get('cf-ipcountry')
  const cloudfrontCode = req.headers.get('cloudfront-viewer-country')
  const customCode = req.headers.get('x-country-code')

  const iso2 = (vercelCode || cfCode || cloudfrontCode || customCode || '')
    .trim()
    .toUpperCase()

  if (iso2 && ISO2_TO_COUNTRY[iso2]) {
    return ISO2_TO_COUNTRY[iso2]
  }

  const fullName = req.headers.get('x-country-name')
  if (fullName) return fullName

  return ''
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      schoolName: string
      country: string
      schoolSize: SchoolSize | ''
      contactName: string
      contactEmail: string
      phone?: string
      examsPerYear: string
      notes?: string
    }

    const {
      schoolName,
      country,
      schoolSize,
      contactName,
      contactEmail,
      phone,
      examsPerYear,
      notes,
    } = body

    if (!schoolName || !schoolSize || !contactName || !contactEmail || !examsPerYear) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const detectedCountry = detectCountryFromRequest(req) || country || ''
    const zeta = getZetaForCountry(detectedCountry)

    const { semester, month, year } = calculateFullPricing(schoolSize, zeta)

    // Setup SendGrid transporter
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)  // Set the SendGrid API key

    // 1) Confirmation email (always)
    await sgMail.send({
      from: process.env.SMTP_USER!,
      to: contactEmail,
      bcc: process.env.SMTP_USER!,
      subject: 'We’ve received your Classify quote request',
      html: buildConfirmationEmailHtml({
        contactName,
        schoolName,
        schoolSize: schoolSize as SchoolSize,
        notes,
      }),
    })

    // 2) Special case: Very Large / University => internal email only, no auto quote
    if (schoolSize) {
      await sgMail.send({
        from: process.env.SMTP_USER!,
        to: process.env.SMTP_USER!,
        subject: `New quote request – ${schoolName}`,
        text: buildInternalText({
          schoolName,
          country,
          detectedCountry,
          schoolSize: schoolSize as SchoolSize,
          contactName,
          contactEmail,
          phone,
          examsPerYear,
          notes,
        }),
      })

      return NextResponse.json({ success: true })
    }

    // 3) For small/medium/large: queue custom quote, follow-up, and LOI
    if (semester && month && year) {
      const baseUrl = process.env.BASE_URL
      if (!baseUrl) {
        console.error('BASE_URL is not set')
        return NextResponse.json(
          { success: false, message: 'Server configuration error.' },
          { status: 500 }
        )
      }

      // random 5–10 minutes delay in seconds
      // const randomMinutes = 5 + Math.floor(Math.random() * 6) // 5..10
      // const quoteDelaySeconds = randomMinutes
      // const followupDelaySeconds = 1 * 1 * 30

      // const quotePayload = {
      //   schoolName,
      //   schoolSize,
      //   contactName,
      //   contactEmail,
      //   phone: phone || '',
      //   country,
      //   detectedCountry,
      //   examsPerYear,
      //   notes: notes || '',
      //   pricing: { semester, month, year, zeta },
      // }

      // Schedule follow-up email (48h later)
      // await qstashClient.publishJSON({
      //   url: `${baseUrl}/api/send-followup`,
      //   body: quotePayload,
      //   delay: followupDelaySeconds,
      // })

      // // Build LOI payload (evaluation package email)
      // const capacity = mapSchoolSizeToCapacity(schoolSize)

      // const loiPayload = {
      //   institutionName: schoolName,
      //   contactName,
      //   contactEmail,
      //   country,
      //   capacityLabel: capacity,
      //   maxStudentsText: capacity,
      //   developerName: 'Abderrahmen', // <-- put your real name
      //   developerTitle: 'Founder & Developer',
      // }

      // // Schedule LOI email (you can add delay if you want)
      // await qstashClient.publishJSON({
      //   url: `${baseUrl}/api/send-LOI`,
      //   body: loiPayload,
      //   delay: quoteDelaySeconds, // uncomment if you want it also delayed
      // })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { success: false, message: 'Unexpected error while processing your request.' },
      { status: 500 }
    )
  }
}

// ----------------- EMAIL BUILDERS -----------------

function buildConfirmationEmailHtml(args: {
  contactName: string
  schoolName: string
  schoolSize: SchoolSize
  notes?: string
}) {
  const sizeLabel =
    args.schoolSize === 'small'
      ? 'Small (< 1,000 students)'
      : args.schoolSize === 'medium'
      ? 'Medium (1,000–2,000 students)'
      : args.schoolSize === 'large'
      ? 'Large (2,000–3,000 students)'
      : 'Very Large / University (3,000+ students)'

  return `
  <html>
  <body style="margin:0;padding:0;background-color:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
      <div style="background-color:#111827;border-radius:16px;border:1px solid #1f2937;padding:24px;">
        
        <h1 style="margin:0 0 12px 0;font-size:20px;color:#f9fafb;">
          Thank you for your quote request
        </h1>

        <p style="margin:0 0 8px 0;font-size:14px;color:#d1d5db;">
          ${'Dear ' + args.contactName},
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          We’ve received your request for a customized pricing quote for 
          <strong style="color:#f9fafb;">${args.schoolName}</strong> (${sizeLabel}).
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          Our team is currently reviewing your academic context and exam management needs. 
          We’re evaluating your context and will follow up with suggestions to help you fully test and experience Classify AI.
        </p>

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          In the meantime, you may continue exploring the demo version of Classify AI. As every institution follows its own examination procedures and internal workflows, we always make sure that Classify AI adapts smoothly to your specific context.
        </p> 

        ${args.notes ? `<p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          For that purpose, we will take into consideration your specified comments: <div>${args.notes}</div>
        </p>` : ''}

        <p style="margin:0 0 12px 0;font-size:14px;color:#d1d5db;">
          Our team will use this information to guide you more effectively during your evaluation period, and to ensure the platform aligns with how your institution already operates.
        </p>

        <p style="margin:16px 0 0 0;font-size:13px;color:#9ca3af;">
          If you have any questions or would like to schedule a call, simply reply to this email or contact us at 
          <a href="mailto:demo@classifyservices.com" style="color:#60a5fa;">demo@classifyservices.com</a>.
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

function buildInternalText(args: {
  schoolName: string
  country: string
  detectedCountry: string
  schoolSize: SchoolSize
  contactName: string
  contactEmail: string
  phone?: string
  examsPerYear: string
  notes?: string
}) {
  return `
New quote request:

School: ${args.schoolName}
Reported country: ${args.country}
Detected country (for pricing): ${args.detectedCountry || 'N/A'}
Size: ${args.schoolSize}
Exams per year: ${args.examsPerYear}

Contact:
- Name: ${args.contactName}
- Email: ${args.contactEmail}
- Phone: ${args.phone || 'n/a'}

Notes:
${args.notes || '(none)'}

Please prepare a manual, high-touch quote and follow up personally.
`
}
