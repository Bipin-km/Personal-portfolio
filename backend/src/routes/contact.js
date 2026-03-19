const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const contact = await prisma.contact.create({ data: { name, email, message } })
    res.status(201).json(contact)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to save contact' })
  }
})

module.exports = router
