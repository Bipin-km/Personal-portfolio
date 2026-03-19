const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.get('/', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({ orderBy: { id: 'asc' } })
    res.json(skills)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch skills' })
  }
})

module.exports = router
