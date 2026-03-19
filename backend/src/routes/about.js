const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.get('/', async (req, res) => {
  try {
    const about = await prisma.about.findFirst()
    res.json(about || { content: '' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch about content' })
  }
})

module.exports = router
