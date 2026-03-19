# Frontend - Portfolio UI

Modern React application with premium design, dark mode, and smooth interactions.

## ✨ Features

- 🎨 Modern gradient design with dark mode
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Category filtering for skills & projects
- 📊 Visual proficiency bars
- 🎮 Gamification with XP & badges
- 🔄 Smooth animations & transitions

## 🚀 Setup

```bash
# Install
npm install

# Create .env
cp .env.example .env

# Edit .env with API URL
VITE_API_URL=http://localhost:4000/api

# Start dev server
npm run dev
```

✅ Runs on `http://localhost:5173`

## 📦 Build

```bash
# Production build
npm run build

# Preview build
npm run preview
```

## 📁 Structure

```
src/
├── pages/
│   ├── Home.jsx       🎯 Hero + badges
│   ├── About.jsx      📋 Timeline + achievements  
│   ├── Skills.jsx     🛠️  Filters + proficiency bars
│   ├── Projects.jsx   📁 Filters + dates
│   └── Contact.jsx    📧 Form + notifications
├── components/
│   ├── Navbar.jsx
│   ├── ParticlesCanvas.jsx
│   └── BadgePopup.jsx
├── utils/
│   └── xp.js          🎮 Gamification
├── App.jsx
├── index.css          🎨 All styling
└── main.jsx
```

## 🎨 Customization

### Colors
Edit `src/index.css`:
```css
:root {
  --accent: #06b6d4;              /* Primary cyan */
  --accent-dark: #0891b2;
  --grad-primary: linear-gradient(...);  /* Buttons */
  --grad-accent: linear-gradient(...);   /* Secondary */
}
```

### Content
Update API calls in page components:
```javascript
const base = import.meta.env.VITE_API_URL || '/api'
fetch(`${base}/projects`)
```

## 🔧 Environment

Required in `.env`:
```
VITE_API_URL=http://localhost:4000/api
```

Defaults to `/api` if not set.

## 📊 Category Filters

**Skills**: Frontend, Backend, AI/ML, DevOps
**Projects**: Web, AI/ML, Hackathon

## 💡 Tips

- Dark mode auto-detects system preference
- Add more pages in `src/pages/`
- Reuse components from `src/components/`
- Style with Tailwind-like CSS or inline styles

## 🌐 Deployment

Deploy to Vercel, Netlify, or any static host:

```bash
npm run build
# Upload dist/ folder
```

---

**Frontend for [Portfolio](../README.md)**
