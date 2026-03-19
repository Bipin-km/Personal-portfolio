import React, { useState, useEffect } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    document.title = 'Contact — Portfolio'
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_API_URL || '/api'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setToast({ type: 'success', message: '✅ Message sent successfully! Thanks for reaching out.' })
      setTimeout(() => {
        setStatus(null)
        setToast(null)
      }, 4000)
    } catch (err) {
      setStatus('error')
      setToast({ type: 'error', message: '❌ Failed to send message. Please try again.' })
      setTimeout(() => {
        setStatus(null)
        setToast(null)
      }, 3000)
    }
  }

  return (
    <section>
      <h2>Get in Touch</h2>
      <p style={{ color: 'var(--secondary)', marginBottom: 28, fontSize: '1.05rem' }}>Have a question or want to collaborate? Feel free to reach out — I'll get back to you as soon as possible.</p>
      
      <div className="card" style={{ maxWidth: 600 }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: 'var(--primary)' }}>Name</label>
              <input 
                name="name" 
                placeholder="Your name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: 10, background: 'var(--bg)', color: 'var(--primary)', fontSize: '0.95rem', transition: 'all 0.2s', boxSizing: 'border-box' }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)' }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: 'var(--primary)' }}>Email</label>
              <input 
                name="email" 
                type="email"
                placeholder="your@email.com" 
                value={form.email} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: 10, background: 'var(--bg)', color: 'var(--primary)', fontSize: '0.95rem', transition: 'all 0.2s', boxSizing: 'border-box' }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)' }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
              />
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: 'var(--primary)' }}>Message</label>
            <textarea 
              name="message" 
              placeholder="Tell me about your project or question..." 
              value={form.message} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', minHeight: 160, padding: '12px', border: '1px solid var(--border)', borderRadius: 10, background: 'var(--bg)', color: 'var(--primary)', fontSize: '0.95rem', fontFamily: 'inherit', transition: 'all 0.2s', resize: 'vertical', boxSizing: 'border-box' }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)' }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
              {status === 'loading' && '⏳ Sending…'}
              {status === 'success' && '✅ Sent!'}
              {status === 'error' && '❌ Error'}
            </div>
            <button 
              className="btn" 
              type="submit"
              disabled={status === 'loading'}
              style={{ opacity: status === 'loading' ? '0.6' : '1', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      {/* Toast notification */}
      {toast && (
        <div className="toast" style={{ background: toast.type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
          {toast.message}
        </div>
      )}

      <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)', marginBottom: 12 }}>Or connect with me on social media:</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="https://github.com/Bipin-km" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/bipin-k-marasini-75795b334/" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
