const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({ orderBy: { id: 'asc' } })
    res.json(projects)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

module.exports = router
