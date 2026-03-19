# Backend - Portfolio API

Node.js REST API with PostgreSQL database and Prisma ORM.

## ✨ Features

- 🚀 REST API with Express
- 🗄️ PostgreSQL with Prisma ORM
- 📊 Skills with categories & proficiency
- 📁 Projects with categories & dates
- 🎮 XP & badge tracking
- 📧 Contact form submission
- 🔐 CORS enabled

## 🚀 Setup

```bash
# Install
npm install

# Create .env
cp .env.example .env

# Set DATABASE_URL
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db"
PORT=4000

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Seed database
node prisma/seed.js

# Start server
npm run dev
```

✅ Runs on `http://localhost:4000`

## 📡 API Endpoints

### Skills
```
GET /api/skills
```
Returns all skills with categories & proficiency levels.

### Projects
```
GET /api/projects
```
Returns all projects with categories, dates, featured flag.

### About
```
GET /api/about
```
Returns about section content.

### Contact
```
POST /api/contact
Body: { name, email, message }
```
Submits contact form.

## 🗄️ Database Schema

### Skill
```
id (int)          - Primary key
name (string)     - Unique skill name
level (string)    - Expert, Advanced, Intermediate, Familiar
category (string) - Frontend, Backend, AI/ML, DevOps
proficiency (int) - 1-100 scale
```

### Project
```
id (int)                 - Primary key
title (string)           - Unique project name
description (string)     - Short description
long_description (string)- Detailed description
tech_stack (string)      - Comma-separated technologies
github_url (string)      - Repository link
live_url (string)        - Live demo link
category (string)        - Web, AI/ML, Hackathon
featured (boolean)       - Featured project flag
date (datetime)          - Completion date
```

### About
```
id (int)      - Primary key
content (string) - About section text
```

### Contact
```
id (int)        - Primary key
name (string)   - Sender name
email (string)  - Sender email
message (string)- Message content
createdAt (datetime) - Submission time
```

## 🔧 Environment

Required in `.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db"
PORT=4000
```

## 📊 Database Management

```bash
# Generate Prisma client
npx prisma generate

# Create migrations
npx prisma migrate dev --name migration_name

# Deploy migrations
npx prisma migrate deploy

# Seed data
node prisma/seed.js

# GUI database editor
npx prisma studio
```

## 📝 Data Management

### Update Skills
Edit `prisma/seed.js` and run:
```bash
node prisma/seed.js
```

### Update Projects
Edit `prisma/seed.js` or use Prisma Studio:
```bash
npx prisma studio
```

## 🌐 Deployment

1. Push code to GitHub
2. Connect to hosting (Render, Railway, etc.)
3. Set environment variables
4. Use Supabase/Railway/Render for PostgreSQL
5. Deploy

## 📦 Scripts

```bash
npm run dev      # Dev server with nodemon
npm start        # Production server
```

## 🔗 Related

- **[Frontend](../frontend/README.md)** - React UI
- **[Main README](../README.md)** - Full project

---

**Backend for [Portfolio](../README.md)**
