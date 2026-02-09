import React from 'react'

export default function Skills(){
  const skills = {
    languages: ['Python 🐍', 'JavaScript 💛', 'C ⚙️', 'C++ 🔧', 'Java ☕', 'SQL 📊'],
    web: ['HTML5 🏗️', 'CSS3 🎨', 'ReactJS ⚛️', 'NodeJS 🟢', 'ExpressJS 🚀'],
    tools: ['Oracle 🗄️', 'AutoCAD 🏛️', 'Git 📝', 'Vite ⚡']
  }
  return (
    <section className="section container" id="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h4>🧠 Languages</h4>
          <div className="skill-tags">
            {skills.languages.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="skill-card">
          <h4>🌐 Web Technologies</h4>
          <div className="skill-tags">
            {skills.web.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="skill-card">
          <h4>🛠️ Tools & Platforms</h4>
          <div className="skill-tags">
            {skills.tools.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
          </div>
        </div>
      </div>
      <div className="certifications">
        <h3>📜 Certifications</h3>
        <ul>
          <li><span className="cert-badge">✓</span> Basic Python — CSE Pathshala (Dec 2023)</li>
          <li><span className="cert-badge">✓</span> Privacy and Security in Online Social Media — NPTEL (Mar 2024)</li>
          <li><span className="cert-badge">✓</span> C++ with OOP — LPU Skills (Jun 2025)</li>
        </ul>
      </div>
    </section>
  )
}
