import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
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
