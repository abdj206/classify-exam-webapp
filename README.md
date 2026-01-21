# Classify Solutions Landing Page

A high-converting landing page for Classify Solutions, an AI-powered exam scheduling tool integrated with Google Workspace.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Nodemailer
- **Deployment**: Vercel-ready

## Features

- 🎨 Beautiful, premium design with golden origami bird logo
- ⏰ Countdown timer to January 1, 2026
- 📧 Demo request form with email notifications
- 📊 Google Sheets integration (stubbed, ready for implementation)
- 📱 Fully responsive design
- ♿ Accessible components with ARIA attributes
- 🚀 Optimized for conversion

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy the environment variables template:
```bash
cp .env.local.example .env.local
```

3. Configure your environment variables in `.env.local`:
   - `DEMO_REQUEST_TO_EMAIL`: Email where demo requests are sent
   - `SMTP_HOST`: Your SMTP server (e.g., smtp.gmail.com)
   - `SMTP_PORT`: SMTP port (usually 587 or 465)
   - `SMTP_USER`: Your SMTP username
   - `SMTP_PASS`: Your SMTP password or app password
   - `GOOGLE_SHEET_ID`: (Optional) For Google Sheets integration

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── demo-request/
│   │       └── route.ts          # API endpoint for demo requests
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles
├── components/
│   ├── Navigation.tsx            # Sticky navigation
│   ├── Logo.tsx                  # Logo with golden bird
│   ├── Hero.tsx                  # Hero section
│   ├── BeforeAfter.tsx           # Before/After comparison
│   ├── Features.tsx              # Main feature + bonuses
│   ├── HowItWorks.tsx            # Process explanation
│   ├── Pricing.tsx               # Pricing section
│   ├── CountdownTimer.tsx        # Countdown to Jan 1, 2026
│   ├── FAQ.tsx                   # FAQ accordion
│   ├── VideoDemo.tsx             # Video demo section
│   ├── DemoModal.tsx             # Demo request modal
│   └── Footer.tsx                # Footer
└── public/                       # Static assets
```

## Google Sheets Integration

The Google Sheets integration is currently stubbed with TODO comments. To implement:

1. Install Google APIs client:
```bash
npm install googleapis
```

2. Set up authentication (OAuth2 or Service Account)
3. Update the `storeLeadInSheet` function in `app/api/demo-request/route.ts`
4. Add your `GOOGLE_SHEET_ID` to `.env.local`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Your own server with Node.js

## Customization

- **Colors**: Edit `tailwind.config.js` to customize the color palette
- **Content**: All copy is in the component files - edit directly
- **Logo**: Modify the SVG in `components/Logo.tsx`
- **Video**: Replace the placeholder in `components/VideoDemo.tsx` with your YouTube embed code

## License

Private - All rights reserved

