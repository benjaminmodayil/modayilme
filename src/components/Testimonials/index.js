import React, { useState } from 'react';
import Quote from '../Quote';
import HappyFace from '../../images/emoji-happy.svg';
import ExcitedFace from '../../images/emoji-excited.svg';

const Testimonials = () => {
  const data = [
    {
      name: 'Andrew Harrison',
      title: 'VP of Technology',
      company: 'Hothouse Inc.',
      URL: 'https://hothouseinc.com',
      projectURL: null,
      quotation:
        'Ben has been a great asset to our team and he has helped us tackle some very tough projects. His skills and thoughtfulness make big tech challenges much more manageable. In addition to being a reliable team player, he has also introduced new technologies and methodologies to our team that have significantly improved the quality and efficiency of our work.'
    },
    {
      name: 'Nancy Evbuomwan',
      title: 'Founder',
      company: 'Hacktopia',
      URL: 'https://hacktopia.io',
      // projectURL: 'https://hacktopia.io',
      quotation:
        'When we initially spoke to Ben about working on a project for Hacktopia, we were blown away with his detailed account on how to best approach the project. His account focused both on high quality and speedy delivery. Throughout the actual process where the work was done, he managed our expectations and showed to be very reliable.'
    },
    {
      name: 'Jennifer Moore',
      title: 'Speech Pathologist',
      company: 'Brave Wings Therapy',
      URL: 'https://www.bravewingstherapy.com',
      projectURL: 'https://www.bravewingstherapy.com',
      quotation:
        'Our experience with using his service for both of our websites was seamless, stress-free, and extremely productive! Users reported easy and quick access to the information they needed. During the process, Ben listened to our ideas and asked questions about what our business needs so he can design a site which reflects our business vision. He works efficiently and timely. He also responds very quickly to emails so we did not have to stress about waiting for the revisions or answers to our questions.'
    }
  ];
  const [active, setActive] = useState(0);

  const cycle = index => {
    setActive(index);
  };

  return (
    <div className="bg-white max-w-3xl mx-auto py-8">
      <h2 className="sr-only">Testimonials</h2>
      <p className="text-xl md-text-2xl lg-text-3xl font-medium font-sans leading-normal text-center mb-4 lg-mb-8 px-4 lg-px-0">
        Hear what others have <br className="lg-hidden" /> to say about me
      </p>
      <div
        className="list-reset flex max-w-4xl mx-auto h-72 items-center justify-center"
        aria-live="polite"
      >
        <article className="max-w-2xl px-2 lg-px-4 mb-8 bg-white rounded shadow-md flex-0">
          <Quote testimonial={data[active]} />
        </article>
      </div>
      <div className="flex justify-between mx-auto w-48">
        {data.map((item, index) => {
          if (index === active) {
            return (
              <button onClick={() => cycle(index)} key={item.title}>
                <img src={ExcitedFace} alt="" />{' '}
                <span className="sr-only">Active Testimonial</span>
              </button>
            );
          }
          return (
            <button
              onClick={() => cycle(index)}
              className="opacity-50 hover-opacity-90 transition duration-150 ease-in"
              key={item.title}
            >
              <img src={HappyFace} alt="" />{' '}
              <span className="sr-only">Other Testimonial</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
