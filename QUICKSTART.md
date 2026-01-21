# Quick Start Guide

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `env.example` to `.env.local`
   - Fill in your email and SMTP credentials:
     ```
     DEMO_REQUEST_TO_EMAIL=your-email@example.com
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-password
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Gmail SMTP Setup

If using Gmail, you'll need to:
1. Enable 2-factor authentication on your Google account
2. Generate an "App Password" at https://myaccount.google.com/apppasswords
3. Use that app password as `SMTP_PASS` (not your regular password)

## Customization

- **Logo**: Edit `components/Logo.tsx` to modify the golden bird SVG
- **Colors**: Update `tailwind.config.js` for brand colors
- **Content**: All copy is in component files - edit directly
- **Video**: Replace placeholder in `components/VideoDemo.tsx` with YouTube embed code
- **Calendly**: Update booking URL in `components/VideoDemo.tsx` and `components/Footer.tsx`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The app is production-ready and optimized for conversion.

