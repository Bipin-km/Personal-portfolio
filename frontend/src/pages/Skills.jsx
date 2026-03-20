import React, { useEffect, useState, useRef } from 'react'
import { addXP, addBadge } from '../utils/xp'
import { mockSkills } from '../utils/mockData'
import BadgePopup from '../components/BadgePopup'

const SKILL_ICON = {
  React: '⚛️',
  'Node.js': '🟢',
  Python: '🐍',
  PostgreSQL: '🐘',
  'C++': '👨‍💻',
  TensorFlow: '🔶',
  PyTorch: '🔥',
  Docker: '🐳',
  JavaScript: '🟨',
  HTML: '🟧',
  CSS: '🎨'
}

export default function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [popup, setPopup] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const seenRef = useRef(false)

  useEffect(() => {
    document.title = 'Skills — Portfolio'
    const base = import.meta.env.VITE_API_URL || '/api'
    fetch(`${base}/skills`)
      .then((r) => r.json())
      .then((data) => {
        setSkills(data && data.length > 0 ? data : mockSkills)
        setLoading(false)
      })
      .catch((e) => {
        console.warn('Failed to load skills from backend, using mock data:', e)
        setSkills(mockSkills)
        setLoading(false)
      })
  }, [])

  useEffect(()=>{
    const el = document.getElementById('skills')
    if(!el) return
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting && !seenRef.current){
          seenRef.current = true
          addXP(5)
          const got = addBadge('Skill Explorer')
          setPopup(got ? 'Badge: Skill Explorer' : '+5 XP')
          setTimeout(()=>setPopup(null),1400)
        }
      })
    }, { threshold: 0.3 })
    io.observe(el)
    return ()=>io.disconnect()
  },[])

  const categories = ['all', 'Frontend', 'Backend', 'AI/ML', 'DevOps']
  const skillsByCategory = {
    Frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
    Backend: ['Node.js', 'Python', 'PostgreSQL', 'C++'],
    'AI/ML': ['Python', 'TensorFlow', 'PyTorch'],
    DevOps: ['Docker', 'PostgreSQL']
  }

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => skillsByCategory[activeCategory]?.includes(s.name))

  if (loading) return <p>Loading skills...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      <h2>Technical Skills</h2>
      
      <div className="tabs" style={{ marginTop: 20 }}>
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
        {filteredSkills.map((s) => (
          <div key={s.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 28 }}>{SKILL_ICON[s.name] || '🔹'}</div>
              <div>
                <h3 style={{ margin: 0 }}>{s.name}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 500 }}>{s.level}</div>
              </div>
            </div>
            
            {/* Proficiency bar */}
            <div className="skill-bar">
              <div className="bar">
                <div 
                  className="fill" 
                  style={{ 
                    width: s.level === 'Expert' ? '95%' : s.level === 'Advanced' ? '80%' : '60%'
                  }}
                />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', minWidth: 30 }}>
                {s.level === 'Expert' ? '95%' : s.level === 'Advanced' ? '80%' : '60%'}
              </span>
            </div>
          </div>
        ))}
      </div>
      {popup && <BadgePopup text={popup} onDone={() => setPopup(null)} />}
    </section>
  )
}
