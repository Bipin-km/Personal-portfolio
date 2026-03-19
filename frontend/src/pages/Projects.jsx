import React, { useEffect, useState } from 'react'
import { addXP, addBadge } from '../utils/xp'
import BadgePopup from '../components/BadgePopup'

const TECH_ICONS = {
  React: '⚛️',
  'Node.js': '🟢',
  Python: '🐍',
  PostgreSQL: '🐘',
  Pygame: '🎮',
  TensorFlow: '🔶',
  PyTorch: '🔥',
  Docker: '🐳',
  JavaScript: '🟨',
  HTML: '🟧',
  CSS: '🎨'
}

function renderTechIcons(techString){
  if(!techString) return null
  const parts = techString.split(',').map(s=>s.trim())
  return parts.map((p,i)=>(<span key={i} style={{marginRight:8}}>{TECH_ICONS[p]||'•'} {p}</span>))
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [popup, setPopup] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    document.title = 'Projects — Portfolio'
    const base = import.meta.env.VITE_API_URL || '/api'
    fetch(`${base}/projects`)
      .then((r) => r.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load projects')
        setLoading(false)
      })
  }, [])

  const categories = ['all', 'Web', 'AI/ML', 'Hackathon']
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  if (loading) return <p>Loading projects...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ margin: 0 }}>Projects</h2>
        <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Click projects to open repos or explore details</div>
      </div>

      <div className="tabs">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === 'all' ? '✨ All' : cat}
          </button>
        ))}
      </div>

      <div className="cards">
        {filteredProjects.map((p) => (
          <article key={p.id} className={p.featured ? 'card featured' : 'card'} style={{ cursor: p.github_url && p.github_url !== 'https://github.com/Bipin-km' ? 'pointer' : 'default' }} onClick={() => {
            if(p.github_url && p.github_url !== 'https://github.com/Bipin-km'){
              addXP(10)
              const gotBadge = addBadge(p.title)
              if(gotBadge) setPopup(`Badge: ${p.title}`)
              else setPopup(`+10 XP`)
              window.open(p.github_url, '_blank')
              setTimeout(()=>setPopup(null),1200)
            }
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <h3 style={{ margin: 0, flex: 1 }}>{p.title}</h3>
              {p.category && <span style={{ background: 'var(--accent)', color: 'white', padding: '4px 10px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 8 }}>{p.category}</span>}
            </div>
            <p>{p.description}</p>
            <div className="meta" style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>{renderTechIcons(p.tech_stack)}</div>
            {p.date && <div style={{ marginTop: 12, fontSize: '0.85rem', color: 'var(--muted)' }}>📅 {new Date(p.date).getFullYear()}</div>}
            <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {p.github_url && p.github_url !== 'https://github.com/Bipin-km' && (
                <a className="btn" href={p.github_url} target="_blank" rel="noreferrer" onClick={(e)=>{e.stopPropagation(); addXP(10); setPopup('+10 XP'); setTimeout(()=>setPopup(null),1200)}}>GitHub</a>
              )}
              {p.live_url && (
                <a className="btn btn-secondary" href={p.live_url} target="_blank" rel="noreferrer">Live Demo</a>
              )}
            </div>
          </article>
        ))}
      </div>
      {popup && <BadgePopup text={popup} onDone={()=>setPopup(null)} />}
    </section>
  )
}
