import React, { useEffect, useState } from 'react'

export default function About() {
  const [about, setAbout] = useState('')

  useEffect(() => {
    document.title = 'About — Portfolio'
    const base = import.meta.env.VITE_API_URL || '/api'
    fetch(`${base}/about`)
      .then((r) => r.json())
      .then((data) => setAbout(data.content || ''))
      .catch(() => setAbout(''))
  }, [])

  return (
    <section>
      <h2>About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 32 }}>
        <div>
          <h3 style={{ marginBottom: 16 }}>Background</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>{about || 'Full-stack developer with a passion for building elegant solutions to complex problems. Specializing in web applications, AI/ML, and cloud infrastructure.'}</p>
          <div className="timeline">
            <div className="timeline-item">
              <h4 style={{ marginBottom: 4 }}>Computer Engineering Student</h4>
              <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 8 }}>Currently pursuing BE</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--secondary)' }}>Building practical experience through internships and personal projects.</p>
            </div>
            <div className="timeline-item">
              <h4 style={{ marginBottom: 4 }}>DevOps @ iTechnopad</h4>
              <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 8 }}>2025 — Present</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--secondary)' }}>Working on infrastructure and deployment for StayNMeal platform.</p>
            </div>
            <div className="timeline-item">
              <h4 style={{ marginBottom: 4 }}>Awards & Recognition</h4>
              <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 8 }}>ICT Day 2025</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--secondary)' }}>Selected as National Nominee for innovation in tech.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: 16 }}>Highlighted Projects</h3>
          <div className="card featured" style={{ marginBottom: 16 }}>
            <h4 style={{ marginBottom: 8, color: 'white' }}>🧠 Optimizing GRU Networks</h4>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 12, fontSize: '0.95rem' }}>Applied advanced compression techniques including Lottery Ticket Hypothesis, attention-based feature distillation, and Quantization-Aware Training.</p>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>📊 90% model size reduction • Negligible accuracy drop</div>
          </div>
          <div className="card featured" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', marginBottom: 16 }}>
            <h4 style={{ marginBottom: 8, color: 'white' }}>🏆 PragyaBin Hackathon Winner</h4>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 12, fontSize: '0.95rem' }}>Led EcoLoop team to 1st place building an AI-powered smart bin and real-time waste-tracking ecosystem.</p>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>🥇 1st Place • Real-time waste tracking</div>
          </div>

          <div className="card" style={{ borderTop: '3px solid var(--grad-primary)', paddingTop: 16 }}>
            <h4 style={{ marginBottom: 12 }}>Connect & Follow</h4>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/bipin-k-marasini-75795b334/" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
              <a href="https://github.com/Bipin-km" target="_blank" rel="noreferrer" className="btn">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
