import React from 'react'

export default function Education(){
  return (
    <section className="section container" id="education">
      <h2>🎓 Education</h2>
      <div className="edu-grid">
        <div className="edu-card active">
          <div className="edu-icon">🏫</div>
          <h4>Lovely Professional University</h4>
          <p className="edu-degree">B.Tech — Computer Science and Engineering</p>
          <p className="edu-date">Aug 2023 - Present</p>
        </div>
        <div className="edu-card">
          <div className="edu-icon">🏛️</div>
          <h4>St. Michael Convent School, Mankapur</h4>
          <p className="edu-degree">Intermediate</p>
          <p className="edu-date">Apr 2020 - Mar 2022</p>
        </div>
        <div className="edu-card">
          <div className="edu-icon">🎒</div>
          <h4>St. Michael Convent School, Mankapur</h4>
          <p className="edu-degree">Matriculation</p>
          <p className="edu-date">Apr 2018 - Mar 2020</p>
        </div>
      </div>
    </section>
  )
}
