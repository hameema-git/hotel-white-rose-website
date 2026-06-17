# 🌹 Hotel White Rose — Website

Premium, mobile-first hotel website for **Hotel White Rose, Fort Kochi, Kerala**.

---

## Tech Stack

- **React 18** + Vite
- **Bootstrap 5** (layout/grid only)
- **Framer Motion** (animations)
- **React Icons** (icon set)
- **React Router DOM** (client-side routing)
- **React Helmet Async** (SEO metadata)
- **Deployed on Vercel**

---

## Folder Structure

```
src/
├── components/
│   ├── Navbar/           Sticky transparent → solid navbar
│   ├── Hero/             Fullscreen animated hero
│   ├── About/            Two-column about section
│   ├── WhyChooseUs/      6-card feature grid on green bg
│   ├── Rooms/            4 room type cards with lightbox
│   ├── Facilities/       Icon grid + Ayurvedic band
│   ├── Gallery/          Masonry gallery with lightbox
│   ├── Location/         Google Maps + nearby attractions
│   ├── Contact/          Contact cards + WhatsApp CTA panel
│   ├── Footer/           4-col footer with social links
│   ├── FloatingWhatsApp/ Pulsing floating WhatsApp button
│   └── SEO/              React Helmet + JSON-LD structured data
├── pages/
│   └── Home.jsx          Assembles all sections
├── data/
│   └── hotelData.js      All hotel info, rooms, facilities
├── styles/
│   └── global.css        Design system, CSS variables, typography
└── main.jsx              App entry point
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Vercel Deployment

### Option A — Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — no config needed
5. Set **Framework Preset** → `Vite`
6. Click **Deploy**

### Environment Variables
No environment variables are required. This is a fully static site.

---

## Customisation Guide

### 1. Update Hotel Information
Edit `src/data/hotelData.js`:
- Change `HOTEL.phone`, `HOTEL.whatsapp`, `HOTEL.email`
- Update `HOTEL.address` and Google Maps embed URL
- Modify room descriptions, facilities, nearby attractions

### 2. Replace WhatsApp Number
In `src/data/hotelData.js`:
```js
whatsapp: '919847000000',  // Format: country code + number, no + or spaces
```

### 3. Replace Hero Image
In `src/components/Hero/Hero.jsx`, update the `src` of the `<img>` tag.
For best performance, use a WebP image hosted on Cloudinary or similar CDN.

### 4. Add Real Hotel Photos
Replace Unsplash URLs in `src/data/hotelData.js` under `ROOMS` and `GALLERY_IMAGES`
with your actual hotel photography.

### 5. Update Google Maps
In `src/components/Location/Location.jsx`, replace the `src` of the `<iframe>` with
your actual Google Maps embed URL.
Go to: Google Maps → Share → Embed a map → Copy HTML → grab the `src` URL.

### 6. Update SEO
In `src/components/SEO/SEO.jsx`:
- Update `structuredData` with real phone, address, coordinates
- Update Open Graph image URL with your actual og-image.jpg

---

## Performance Checklist

- [x] All images use `loading="lazy"` (except hero which uses `fetchPriority="high"`)
- [x] Fonts loaded via Google Fonts with `preconnect`
- [x] CSS variables for consistent theming
- [x] Framer Motion `useInView` for scroll-triggered animations (only animate what's visible)
- [x] Vite code splitting: vendor, motion, router in separate chunks
- [x] `vercel.json` sets long cache headers on static assets
- [x] No unused dependencies

---

## Local SEO Keywords Targeted

- Hotel in Fort Kochi
- Budget Hotel Fort Kochi
- Affordable Hotel Fort Kochi
- Fort Kochi Accommodation
- Heritage Hotel Kochi
- Hotel near Chinese Fishing Nets
- Fort Kochi Kerala stay

---

## Color Palette

| Token         | Value     | Usage                    |
|---------------|-----------|--------------------------|
| `--green`     | `#1F4D3A` | Primary brand / headings |
| `--gold`      | `#D4A373` | Accent / CTA buttons     |
| `--cream`     | `#F8F5F0` | Background               |
| `--text-dark` | `#222222` | Body text                |

---

## License
Built for Hotel White Rose, Fort Kochi. All rights reserved.
