import React, { useRef, useEffect } from 'react'

export default function ParticlesCanvas(){
  const ref = useRef(null)

  useEffect(()=>{
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w, h, raf
    const particles = []

    function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = 220 }
    function rand(min,max){ return Math.random()*(max-min)+min }

    function init(){
      particles.length = 0
      for(let i=0;i<40;i++) particles.push({ x: rand(0,w), y: rand(0,h), vx: rand(-0.3,0.3), vy: rand(-0.2,0.6), r: rand(2,6), hue: rand(160,290) })
    }

    function frame(){
      ctx.clearRect(0,0,w,h)
      for(const p of particles){
        p.x += p.vx; p.y += p.vy
        if(p.x<0) p.x = w
        if(p.x>w) p.x = 0
        if(p.y>h) p.y = 0
        ctx.beginPath()
        ctx.fillStyle = `hsla(${p.hue},70%,60%,0.9)`
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    resize(); init(); frame()
    window.addEventListener('resize', resize)
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  },[])

  return <canvas ref={ref} style={{ width:'100%', display:'block' }} />
}
