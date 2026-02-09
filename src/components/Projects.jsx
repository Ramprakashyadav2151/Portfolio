import React from 'react'

const projectData = [
  {
    title: 'Student Scorecard Generator',
    desc: 'Built a C++ console application to efficiently generate and manage student scorecards. Implemented file handling for persistent storage, used data structures for organized record management, and automated grade calculations.',
    tech: ['C++', 'File I/O', 'Data Structures'],
    icon: '📋',
    date: 'Jun 2025 - Jul 2025'
  },
  {
    title: 'Sports Awareness Website',
    desc: 'Developed a responsive web app to promote sports awareness with structured multi-page layouts and reusable templates for consistent UI.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: '⚽',
    date: 'May 2024 - Jun 2024'
  },
  {
    title: 'Student Management System',
    desc: 'Designed a web-based academic activity management system with modules for attendance, marks, assignment uploads, and performance overview for students and teachers.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '📚',
    date: 'Oct 2023 - Dec 2023'
  }
]

export default function Projects(){
  return (
    <section className="section container" id="projects">
      <h2>Featured Projects</h2>
      <div className="cards">
        {projectData.map((proj, i) => (
          <article className="card animated" key={i} style={{animationDelay: `${i * 140 + 120}ms`}}>
            <div className="card-icon">{proj.icon}</div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="card-tech">
              {proj.tech.map((t, j) => <span key={j} className="tech-badge">{t}</span>)}
            </div>
            <p className="meta">📅 {proj.date}</p>
            <div className="card-actions"><a className="btn ghost" href="https://github.com/Ramprakashyadav2151" target="_blank" rel="noreferrer">View Code →</a></div>
          </article>
        ))}
      </div>
    </section>
  )
}
