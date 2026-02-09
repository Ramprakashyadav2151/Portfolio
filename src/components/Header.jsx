import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-grid">
        <div className="brand animated animate-pop">
          <div className="header-accent" aria-hidden></div>
          <div className="avatar">RP</div>
          <div>
            <h1>Ram Prakash Yadav</h1>
            <p className="muted">B.Tech Computer Science — Developer</p>
          </div>
        </div>
        <nav className={`nav ${open? 'open' : ''}`} onClick={()=>setOpen(false)}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact" className="cta">Contact</a>
        </nav>
        <button className="mobile-nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(s=>!s)}>☰</button>
      </div>
    </header>
  )
}
