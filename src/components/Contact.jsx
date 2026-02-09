import React from 'react'

export default function Contact(){
  return (
    <section className="section container" id="contact">
      <h2>Contact</h2>
      <p>Want to collaborate or see code? Reach out — I respond quickly to email.</p>
      <form className="contact-form" action="mailto:ramprakashyadav2151@gmail.com" method="get" encType="text/plain">
        <label>Name<input type="text" name="name" required/></label>
        <label>Email<input type="email" name="email" required/></label>
        <label>Message<textarea name="message" rows="4" required></textarea></label>
        <div><button className="btn" type="submit">Send</button></div>
      </form>
      <p className="muted">Also: <a href="https://github.com/Ramprakashyadav2151" target="_blank" rel="noreferrer">GitHub</a> • <a href="https://linkedin.com/in/ramprakashyadav2151" target="_blank" rel="noreferrer">LinkedIn</a></p>
    </section>
  )
}
