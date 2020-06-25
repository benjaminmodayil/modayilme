import React from 'react';

const Quote = ({ testimonial }) => {
  const { name, title, company, URL, projectURL, quotation } = testimonial;
  return (
    <a
      href={projectURL}
      target="_blank"
      className="no-underline px-2 py-6 lg-p-6 block"
      rel="noopener noreferrer"
    >
      <blockquote cite={URL}>
        <p className="mb-2 text-16 italic leading-normal text-gray-900">{quotation}</p>
        <footer className="text-right text-14">
          <span className="block font-semibold">{name}</span>
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
