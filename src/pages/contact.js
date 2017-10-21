import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <main className="contact__page">
    <section>
      <h1 className="heading-level-1">
        <span>contact</span> me
      </h1>
      <p>Have anything to say? Maybe 👋🏽, 😠, 💼, or 👍?</p>
      <p>
        I would love to get in touch with you, feel free to message me below and include
        your email if you wish for a response.
      </p>

      <form action="">
        <label for="email">email</label>

        <input type="email" name="email" id="email" />
        <label for="message">message</label>

        <textarea name="message" id="message" />
      </form>
      <button className="btn--bg">submit</button>
    </section>
  </main>
)

export default Contact
