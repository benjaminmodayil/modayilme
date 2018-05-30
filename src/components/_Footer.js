import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    let links = this.props.data.map((i, index) => {
      return (
        <a
          className="flex justify-center w-1-4 text-white hover-text-red no-underline hover-underline"
          href={i.URL}
          key={index}
        >
          <span className="social__icon mr-1">
            <img src={i.svgURL} alt="" />
          </span>
          <span className="social__text ml-1">{i.title}</span>
        </a>
      )
    })

    return (
      <footer className="bg-black text-white py-16">
        <h2 className="h2 font-thin text-3xl text-center mb-4">Send me something.</h2>
        <form
          action="https://formspree.io/modayilme@gmail.com"
          method="POST"
          className="flex flex-col max-w-xs md-max-w-sm mx-auto"
        >
          <label htmlFor="email" className="screenreader-only">
            email
          </label>
          <input
            className="text-black bg-white w-full mb-4 rounded h-10 p-2"
            type="email"
            name="_replyto"
            id="email"
            placeholder="email"
            required
          />

          <label htmlFor="message" className="screenreader-only">
            message
          </label>
          <textarea
            className="text-black bg-white w-full mb-4 rounded h-32 p-2"
            name="message"
            id="message"
            placeholder="message"
            required
          />
          <input
            className="bg-red rounded px-8 py-2 w-32 self-end hover-bg-red-dark"
            type="submit"
            defaultValue="send"
          />

          <input type="hidden" name="_next" value="//site.io/thanks.html" />
        </form>

        <nav className="mt-32 max-w-xs md-max-w-sm mx-auto" role="Social Navigation">
          <p className="mb-8 text-xl text-center font-thin">
            … or get in contact with me on social media{' '}
            <span role="img" aria-label="" alt="">
              👇
            </span>
          </p>
          <div className="social-nav__links flex justify-center">{links}</div>
        </nav>
      </footer>
    )
  }
}
