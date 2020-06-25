import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import ThankYouSVG from '../images/ThankYou';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Contact({ location }) {
  const [status, showThankYou] = useState('form');
  useEffect(() => {
    require('../../node_modules/mailtoui/dist/mailtoui-min.js').run();
  });

  return (
    <Layout path={location.pathname}>
      <SEO
        title="Contact"
        keywords={[
          `gatsby`,
          `front-end`,
          `react`,
          `developer`,
          `engineer`,
          `full-stack`,
          `twitch`,
          `streamer`,
          `video games`,
        ]}
      />
      <Header
        primary={'Contact Me'}
        secondary={
          'Reach out to me below or send a message to my <a class="link text-18 mailtoui" href="mailto:modayilme@gmail.com" target="_blank" rel="noopener noreferrer"> email</a>.'
        }
      />
      <div className="flex flex-col mx-auto relative pt-16 pb-32 lg-pt-32 px-4">
        {status === 'form' && (
          <form
            className="flex flex-col max-w-ch-12 mx-auto bg-gray-100 py-24 w-full shadow-md px-16 rounded -mt-64"
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit={(e) => {
              const { email, subject, message } = e.target;
              fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                  'form-name': 'contact',
                  email: email.value,
                  subject: subject.value,
                  message: message.value,
                }),
              })
                .then(() => showThankYou('thank-you'))
                .catch((error) => alert(error));

              e.preventDefault();
            }}
          >
            <label htmlFor="email" className="text-14 mb-1">
              Email
            </label>
            <input
              className="form-input text-14 p-1 mb-16"
              type="email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="subject" className="text-14 mb-1">
              Subject
            </label>
            <input
              className="form-input text-14 p-1 mb-16"
              type="text"
              name="subject"
              id="subject"
              required
            />
            <label htmlFor="message" className="text-14 mb-1">
              Message
            </label>
            <textarea
              className="form-textarea text-14 p-1 min-h-32 mb-16"
              type="text"
              name="message"
              id="message"
              required
            />
            <input
              value="clear form"
              className="bg-transparent text-gray-500 text-12 italic underline hover-font-semibold cursor-pointer mt-8 self-end"
              type="reset"
            />
            <button
              className="text-gray-800 px-4 rounded text-14 transition-all duration-200 ease-in self-end mt-16"
              type="submit"
            >
              Send
            </button>
          </form>
        )}

        {status === 'thank-you' && (
          <div className="flex flex-col max-w-md mx-auto max-w-xs bg-white w-full shadow-md p-8 rounded justify-center items-center min-h-64">
            <ThankYouSVG />
            <p className="mt-4">I'll reach out as soon as possible to your message!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
