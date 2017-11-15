import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <main className="contact__page">
    <section className="wrapper wrapper--tablet margin-center color--white">
      <h1 className="h-1 color--white font-weight--bold margin-bottom--16 margin-bottom--32">
        contact me
      </h1>
      <p>Have anything to say? Maybe 👋🏽, 😠, 💼, or 👍?</p>
      <p>
        I would love to get in touch with you, feel free to message me below and include
        your email if you wish for a response.
      </p>
      <p className="">
        This form isn't setup at the moment. It will be soon! Send emails and inquiries to{' '}
        <a href="mailto:modayilme@gmail.com">modayilme@gmail.com</a>
      </p>

      <form action="">
        <label for="email">email</label>

        <input type="email" name="email" id="email" disabled />
        <label for="message">message</label>

        <textarea name="message" id="message" disabled />
      </form>
      <button className="btn--bg">submit</button>
    </section>
  </main>
)

export default Contact
