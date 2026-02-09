import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  useEffect(() => {
    // Track mouse position for subtle card hover effect
    const handleMouseMove = (e) => {
      document.querySelectorAll('.card').forEach(card => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      })
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <section className="section container" id="about">
          <h2>About</h2>
          <p>I am a hardworking, adaptable developer with strong problem-solving skills and leadership experience. I enjoy building web apps and efficient back-end systems.</p>
        </section>
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
