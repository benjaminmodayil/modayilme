import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import ThankYouSVG from '../images/ThankYou';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Contact() {
  const [status, showThankYou] = useState('form');
  useEffect(() => {
    require('../../node_modules/mailtoui/dist/mailtoui-min.js').run();
  });

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `gatsby`,
          `front-end`,
          `react`,
          `developer`,
          `engineer`,
          `full-stack`,
          `mixer`,
          `streamer`,
          `video games`
        ]}
      />
      <Header
        primary={'Contact Me'}
        secondary={
          'Reach out to me below or send a message to my <a class="link mailtoui" href="mailto:modayilme@gmail.com" target="_blank" rel="noopener noreferrer"> email</a>.'
        }
      />
      ;
      <div className="flex flex-col mx-auto relative bg-gray-100 pt-16 pb-32 lg-pt-32 px-4">
        {status === 'form' && (
          <form
            className="flex flex-col max-w-md mx-auto max-w-xs bg-white w-full shadow-md p-8 rounded"
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit={e => {
              const { email, subject, message } = e.target;
              fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                  'form-name': 'contact',
                  email: email.value,
                  subject: subject.value,
                  message: message.value
                })
              })
                .then(() => showThankYou('thank-you'))
                .catch(error => alert(error));

              e.preventDefault();
            }}
          >
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              className="form-input text-sm p-1 mb-4"
              type="email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="subject" className="text-sm mb-1">
              Subject
            </label>
            <input
              className="form-input text-sm p-1 mb-4"
              type="text"
              name="subject"
              id="subject"
              required
            />
            <label htmlFor="message" className="text-sm mb-1">
              Message
            </label>
            <textarea
              className="form-textarea text-sm p-1 min-h-32 mb-4"
              type="text"
              name="message"
              id="message"
              required
            />
            <button
              className="bg-purple-600 hover-bg-purple-700 text-purple-200 px-4 mx-auto rounded text-sm transition-all duration-200 ease-in"
              type="submit"
            >
              Send
            </button>

            <input
              value="clear form"
              className="bg-transparent text-purple-500 text-sm italic underline hover-font-semibold cursor-pointer mt-4"
              type="reset"
            />
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
