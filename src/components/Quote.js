import React from 'react';

const Quote = ({ testimonial }) => {
  const { name, title, company, URL, projectURL, quotation } = testimonial;
  return (
    <a
      href={projectURL}
      target="_blank"
      className="no-underline text-black px-2 py-6 lg-p-6 block"
    >
      <blockquote cite={URL}>
        <p className="mb-2 text-base italic leading-normal">{quotation}</p>
        <footer className="text-right text-sm">
          <span className="block font-bold">{name}</span>
          <span className="block italic">
            {company !== null || company !== undefined || company.length !== 0
              ? title + ' at ' + company
              : title}
          </span>
          {projectURL && (
            <a className="link link--obvious my-2 inline-block" href={projectURL}>
              view project
            </a>
          )}
        </footer>
      </blockquote>
    </a>
  );
};

export default Quote;
