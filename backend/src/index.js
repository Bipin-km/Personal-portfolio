require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

// Log environment
console.log('DB Host:', process.env.DATABASE_URL ? 'SET' : 'NOT SET')
console.log('PORT:', process.env.PORT || 4000)

const skillsRoute = require('./routes/skills')
const projectsRoute = require('./routes/projects')
const aboutRoute = require('./routes/about')
const contactRoute = require('./routes/contact')

app.use(cors())
app.use(express.json())

app.use('/api/skills', skillsRoute)
app.use('/api/projects', projectsRoute)
app.use('/api/about', aboutRoute)
app.use('/api/contact', contactRoute)

// Simple health
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
