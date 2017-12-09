import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Contact = () => (
  <main className="contact__page">
    <Helmet
      title="Contact | 📱"
      meta={[
        {
          name: 'description',
          content: 'H.M.U. (Contact Me)'
        }
      ]}
    />
    <section className="wrapper wrapper--tablet margin-center color--white">
      <h1 className="h-1 color--white font-weight--bold margin-bottom--16 margin-bottom--32">
        contact me
      </h1>
      <p>Have anything to say? Maybe 👋🏽, 😠, 💼, or 👍?</p>
      <p>
        I would love to get in touch with you, feel free to message me below and include
        your email if you wish for a response.
      </p>

      <form action="https://formspree.io/modayilme@gmail.com" method="POST">
        <label for="email">email</label>
        <input type="email" name="_replyto" id="email" />

        <label for="message">message</label>
        <textarea name="message" id="message" />
        <input
          className="link --btn --bg-red --wide margin-top--32 wrapper wrapper--small"
          type="submit"
          defaultValue="Send"
        />

        <input type="hidden" name="_next" value="//site.io/thanks.html" />
      </form>
    </section>
  </main>
)

export default Contact
