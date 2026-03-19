import React, { useEffect } from 'react'

export default function BadgePopup({ text = '+10 XP', onDone }){
  useEffect(()=>{
    const t = setTimeout(()=> onDone && onDone(), 1200)
    return ()=>clearTimeout(t)
  },[])

  return (
    <div style={{ position:'fixed',right:20,top:80,zIndex:60 }}>
      <div style={{ background:'linear-gradient(90deg,#06b6d4,#7c3aed)',color:'white',padding:'10px 14px',borderRadius:999,boxShadow:'0 8px 30px rgba(2,6,23,0.2)',transform:'translateY(0)',animation:'pop 1.1s ease'}}>
        {text}
      </div>
      <style>{`@keyframes pop{0%{transform:translateY(-12px) scale(.9);opacity:0}50%{transform:translateY(0) scale(1.06);opacity:1}100%{transform:translateY(-6px) scale(1)} }`}</style>
    </div>
  )
}
