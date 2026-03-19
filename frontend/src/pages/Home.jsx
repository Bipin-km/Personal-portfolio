import React, { useEffect, useState } from 'react'
import ParticlesCanvas from '../components/ParticlesCanvas'
import { addXP, addBadge } from '../utils/xp'
import BadgePopup from '../components/BadgePopup'

export default function Home() {
  const [badges, setBadges] = useState(() => Array.from({length:4}).map((_,i)=>({ id:i, x: 10+Math.random()*70, y: 10+Math.random()*40 })))
  const [popup, setPopup] = useState(null)

  function collect(id){
    setBadges(bs=>bs.filter(b=>b.id!==id))
    addXP(15)
    const got = addBadge('Collector')
    setPopup(got ? 'Badge: Collector' : '+15 XP')
    setTimeout(()=>setPopup(null),1400)
  }

  useEffect(() => {
    document.title = 'Bipin K. Marasini — Portfolio'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Bipin Kumar Marasini — Computer Engineering student and full-stack developer')
  }, [])

  return (
    <section>
      <ParticlesCanvas />
      <div className="hero">
        <div className="intro">
          <h1>Hi, I'm Bipin</h1>
          <p>Computer Engineering student & full-stack developer — building fast, accessible web and AI-powered applications.</p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <p style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', color: 'white', padding: '12px 16px', borderRadius: 10, fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>🔬 Minor Project: Optimizing GRU Networks</p>
            <p style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', padding: '12px 16px', borderRadius: 10, fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>🏆 National Nominee, ICT Day 2025</p>
          </div>
          <div style={{ marginTop: 20 }}>
            <a className="btn" href="#projects" onClick={(e)=>{e.preventDefault();document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}}>See My Work</a>
            <a className="btn btn-secondary" href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} style={{ marginLeft: 12 }}>Get in Touch</a>
          </div>
        </div>
        <div className="profile-card">
          <div className="card featured">
            <h3 style={{ color: 'white', marginBottom: 4 }}>🚀 Current Role</h3>
            <p style={{ color: 'rgba(255,255,255,0.95)', marginBottom: 12 }}>DevOps @ <strong>iTechnopad</strong></p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', marginBottom: 12 }}>Building <a href="https://staynmeal.com/" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,1)', textDecoration: 'underline' }}>StayNMeal</a> — a hospitality platform</p>
            <div style={{ paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>📍 Bhaktapur, Nepal</div>
          </div>
        </div>
      </div>
      <div style={{ position:'relative', marginTop:40, minHeight:100 }}>
        <h3 style={{ marginBottom: 20, color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>✨ Collect badges while you explore</h3>
        {badges.map(b=> (
          <button key={b.id} onClick={()=>collect(b.id)} style={{ position:'absolute', left:`${b.x}%`, top:`${b.y}%`, borderRadius:999, border:'2px solid var(--accent)', padding:14, background:'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color:'#fff', boxShadow:'0 8px 20px rgba(245, 87, 108, 0.3)', cursor:'pointer', fontSize: '1.2rem', transition: 'all 0.3s', fontWeight: 600 }} title="Collect" onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(245, 87, 108, 0.4)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 87, 108, 0.3)' }}>⭐</button>
        ))}
      </div>
      {popup && <BadgePopup text={popup} onDone={()=>setPopup(null)} />}
    </section>
  )
}
