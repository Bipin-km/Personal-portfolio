const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.get('/', async (req, res) => {
  try {
    console.log('Fetching skills...')
    const skills = await prisma.skill.findMany({ orderBy: { id: 'asc' } })
    console.log(`Found ${skills.length} skills`)
    res.json(skills)
  } catch (err) {
    console.error('Skills error:', err.message)
    console.error('Full error:', err)
    res.status(500).json({ error: 'Failed to fetch skills', details: err.message })
  }
})

module.exports = router
