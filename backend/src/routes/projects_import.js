const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')
const fetch = require('node-fetch')

// POST /api/projects/import { url: 'https://github.com/owner/repo' }
router.post('/', async (req, res) => {
  try {
    const { url } = req.body
    if (!url) return res.status(400).json({ error: 'Missing url' })

    // extract owner/repo
    const m = url.match(/github\.com\/([^\/]+)\/([^\/]+)(?:\/|$)/i)
    if (!m) return res.status(400).json({ error: 'Invalid GitHub URL' })
    const owner = m[1]
    const repo = m[2].replace(/\.git$/, '')

    const api = `https://api.github.com/repos/${owner}/${repo}`
    const r = await fetch(api, { headers: { 'User-Agent': 'portfolio-importer' } })
    if (!r.ok) return res.status(502).json({ error: 'Failed fetching GitHub' })
    const data = await r.json()

    const projectData = {
      title: data.name || repo,
      description: data.description || '',
      tech_stack: data.language || '',
      github_url: data.html_url,
      live_url: data.homepage || null
    }

    // upsert-like behavior: find by github_url or title
    let existing = null
    if (projectData.github_url) {
      existing = await prisma.project.findFirst({ where: { github_url: projectData.github_url } })
    }
    if (!existing) {
      existing = await prisma.project.findFirst({ where: { title: projectData.title } })
    }

    if (existing) {
      const updated = await prisma.project.update({ where: { id: existing.id }, data: projectData })
      return res.json(updated)
    }

    const created = await prisma.project.create({ data: projectData })
    res.status(201).json(created)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to import project' })
  }
})

module.exports = router
