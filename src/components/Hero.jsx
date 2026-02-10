import React from 'react'

export default function Hero(){
  return (
    <section className="hero site-bg-anim" id="home">
      <div className="container hero-grid">
        <div className="accent-blob blob-1" aria-hidden></div>
        <div className="hero-intro">
          <div className="hero-name">
            <h2 className="glow">Hi, I'm Ram Prakash Yadav</h2>
            <p className="muted small">B.Tech Computer Science • Developer</p>
          </div>
          <p className="lead">I build clean, accessible web experiences and efficient console applications. Skilled in Python, C++, JavaScript, and web frameworks.</p>
          <p className="contact-row">
            <a href="mailto:ramprakashyadav2151@gmail.com">ramprakashyadav2151@gmail.com</a>
            <span>•</span>
            <a href="tel:+91918037602">+91 918037602</a>
          </p>
          <div className="hero-actions">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn ghost" href="/Prakash_Updated_CV_.pdf" download>Download Resume</a>
            <a className="btn ghost" href="https://github.com/Ramprakashyadav2151" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        
        <div className="hero-card">
          <div className="profile-frame">
            <img src="https://raw.githubusercontent.com/Ramprakashyadav2151/Portfolio/main/formal%20pic.jpeg" alt="Ram Prakash Yadav" className="profile-photo animated animate-pop" />
          </div>
          <h3>Full Stack Web Developer</h3>
        </div>
      </div>
    </section>
  )
}
