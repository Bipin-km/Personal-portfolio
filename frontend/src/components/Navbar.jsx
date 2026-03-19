import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getXP } from '../utils/xp'

export default function Navbar() {
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL || '/api'

    fetch(`${base}/skills`)
      .then((r) => r.json())
      .then(setSkills)
      .catch(() => setSkills([]))

    fetch(`${base}/projects`)
      .then((r) => r.json())
      .then(setProjects)
      .catch(() => setProjects([]))
  }, [])

  const scroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const [xp, setXp] = useState(0)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(()=>{
    setXp(getXP())
  },[])

  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a className="logo" href="#home" onClick={(e) => { e.preventDefault(); scroll('home') }}>B</a>
      </div>
      <div className="links">
        <a href="#home" onClick={(e) => { e.preventDefault(); scroll('home') }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scroll('about') }}>About</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scroll('skills') }}>Skills</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scroll('projects') }}>Projects</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scroll('contact') }}>Contact</a>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ background:'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',color:'white',padding:'6px 12px',borderRadius:999,fontWeight:700,boxShadow:'0 4px 12px rgba(245, 87, 108, 0.3)', fontSize: '0.9rem' }} title="XP">⚡ {xp}</div>
        <a href="https://github.com/Bipin-km" target="_blank" rel="noreferrer" title="GitHub" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', transition: 'color 0.2s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}><path d="M12 .5A12 12 0 0 0 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 2 2.9 1.4 3.6 1 .1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C18 4.9 19 5.2 19 5.2c.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/bipin-k-marasini-75795b334/" target="_blank" rel="noreferrer" title="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', transition: 'color 0.2s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}><path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.6v1.7h.1c.5-.9 1.6-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.6V21h-4v-5.2c0-1.2 0-2.7-1.7-2.7-1.7 0-2 1.4-2 2.6V21H9z"/></svg>
        </a>
      </div>
    </nav>
  )
}
