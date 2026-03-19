# 🚀 Premium Portfolio (Full-Stack)

A modern, responsive full-stack portfolio website with premium design and smooth interactions.

**Live Demo**: [Coming Soon]
**GitHub**: [@Bipin-km](https://github.com/Bipin-km)

## ✨ Features

### 🎨 Design
- Modern gradient color system (cyan, pink, purple)
- Dark mode support (automatic system detection)
- Smooth animations & transitions
- Mobile-first responsive design
- Professional typography & spacing

### 🎯 Functionality
- Skills with categories & proficiency bars (4 categories)
- Projects with filtering & dates (3 categories)
- Professional about section with timeline
- Contact form with toast notifications
- Sticky navigation with smooth scrolling
- Gamification with XP & badges

### 💾 Data
- 11 skills with proficiency levels
- 6 projects with metadata
- Professional about content
- Contact submissions tracking

## 🛠️ Tech Stack

**Frontend**
- React 18 + Vite
- Modern CSS with gradients & animations
- Responsive design (mobile, tablet, desktop)

**Backend**
- Node.js + Express
- Prisma ORM
- PostgreSQL database

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- PostgreSQL 12+

### Setup

```bash
# Clone repository
git clone <your-repo-url>
cd portfolio

# Backend
cd backend
cp .env.example .env
# Edit .env with your DATABASE_URL
npm install
npx prisma generate
npx prisma migrate deploy
node prisma/seed.js
npm run dev

# Frontend (new terminal)
cd frontend
cp .env.example .env
npm install
npm run dev
```

**Frontend**: http://localhost:5173
**Backend**: http://localhost:4000

## 📁 Project Structure

```
portfolio/
├── frontend/               React + Vite
│   ├── src/
│   │   ├── pages/         (5 page components)
│   │   ├── components/    (Navbar, Canvas, Popup)
│   │   ├── utils/         (XP tracking)
│   │   ├── App.jsx
│   │   ├── index.css      (All styling)
│   │   └── main.jsx
│   └── package.json
├── backend/                Express + Prisma
│   ├── src/
│   │   ├── routes/        (API endpoints)
│   │   ├── prismaClient.js
│   │   └── index.js
│   ├── prisma/
│   │   ├── schema.prisma  (Database schema)
│   │   ├── seed.js        (Sample data)
│   │   └── migrations/
│   └── package.json
├── README.md
└── sql.init
```

## 📚 Documentation

- **[Frontend README](./frontend/README.md)** - Frontend setup & customization
- **[Backend README](./backend/README.md)** - Backend API & database

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Render/Railway/Heroku)
- Push to GitHub
- Connect repository to platform
- Set environment variables
- Deploy

### Database
- PostgreSQL (Supabase, Railway, or Render)

## 📖 Environment Variables

**Backend** (.env)
```
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db"
PORT=4000
```

**Frontend** (.env)
```
VITE_API_URL=http://localhost:4000/api
```

## 🎓 Customization

**Colors**: Edit CSS variables in `frontend/src/index.css`

**Content**: Update `backend/prisma/seed.js` with your data

**Features**: Modify React components in `frontend/src/pages/`

## 📧 Contact & Links

- **GitHub**: [@Bipin-km](https://github.com/Bipin-km)
- **LinkedIn**: [Bipin K. Marasini](https://www.linkedin.com/in/bipin-k-marasini-75795b334/)
- **Portfolio**: [Coming Soon]

---

**Built with ❤️ by Bipin Kumar Marasini**
