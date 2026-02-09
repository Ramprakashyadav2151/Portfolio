import React from 'react'

export default function Hero(){
  return (
    <section className="hero site-bg-anim" id="home">
      <div className="container hero-grid">
        <div className="accent-blob blob-1" aria-hidden></div>
        <div className="hero-intro">
          <div className="hero-name">
            <h2 className="glow">Hi, I'm Ram</h2>
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
            <a className="btn ghost" href="/resume.pdf" download>Download Resume</a>
            <a className="btn ghost" href="https://github.com/Ramprakashyadav2151" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="hero-card">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGA8amNJMe5RA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698259827753?e=1772064000&v=beta&t=4zOfySB2nAHKfCyJjPMnd84Gq8oX9cqCUHYug93Qgzo" alt="Ram Prakash Yadav" className="profile-photo animated animate-pop" />
          <h3>Quick Info</h3>
          <ul>
            <li><strong>Languages:</strong> Python, JavaScript, C, C++, Java, SQL</li>
            <li><strong>Frameworks:</strong> React, NodeJS, Express</li>
            <li><strong>Tools:</strong> Oracle, AutoCAD</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
