# Mobola Physiotherapy & Gym Center

Premium, production-ready website for Mobola Physiotherapy & Gym Center in Abeokuta, Ogun State, Nigeria.

## Features

- 5 Pages: Home, Services, About, Contact, Booking
- Admin Panel at `/admin.html` (hidden route)
- Client-side content management via localStorage
- Netlify Forms integration
- WhatsApp integration
- Responsive design (mobile, tablet, desktop)
- SEO optimized with structured data
- Accessibility compliant (ARIA, keyboard nav, semantic HTML)

## Deployment to Netlify

1. Drag and drop the entire `mobola-website` folder to Netlify
2. Forms will be automatically detected by Netlify
3. Update the Google Maps embed in `contact.html` with your actual coordinates
4. Update WhatsApp numbers throughout the site

## Admin Access

- Navigate to `https://yoursite.netlify.app/admin.html`
- Default password: `MobolaAdmin2024!`
- Change the password by modifying the hash in `js/main.js` (search for `7a3f8e2d`)

## Customizing Images

Replace placeholder images in the `images/` folder:
- `hero-video.mp4` — Add your 10-second hero video
- `physiotherapy.jpg`, `massage.jpg`, `gym.jpg`, etc.
- `mobola-portrait.jpg` — Founder photo
- `about-mobola.jpg` — About section photo

## Form Handling

Forms use Netlify's built-in form handling. Submissions appear in your Netlify dashboard.
To use Formspree instead, change the `action` attribute on forms.

## Color Palette

- Primary: #1E4D3B (Deep Forest Green)
- Secondary: #F9F7F2 (Warm Ivory)
- Accent: #B88646 (Burnished Bronze)
- Highlight: #A8C9B0 (Soft Sage)
- Background: #FCFCFA (Off-White)