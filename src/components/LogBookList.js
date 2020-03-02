import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from '../components/Link';

function LogBookList() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/project-log/" } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              isExternal
            }
          }
        }
      }
    }
  `);
  const iterable = data.allMdx.edges;
  const list = iterable.map(({ node }) => {
    const { frontmatter, fields } = node;
    return (
      <li>
        <Link
          className="text-gray-800 block leading-none p-6 hover-shadow group hover-bg-purple-200 hover-text-purple-800 transition duration-100 ease-in"
          to={`project-log${fields.slug}`}
        >
          <h4 className="text-base font-semibold mb-2">{frontmatter.title}</h4>
          <span className="text-sm block">{frontmatter.date}</span>
          <span className="text-purple-500 group-hover-text-purple-800 text-sm block text-right font-semibold">
            Read
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div className="shadow-md max-w-lg mx-auto bg-white relative z-10">
      <h3 className="font-special text-3xl font-semibold italic text-center text-purple-100 bg-purple-600 rounded py-4 relative z-10">
        Ben's (b)Logbook
      </h3>
      <ul className="relative z-10 bg-white">{list}</ul>
      <span className="triangle absolute top-0 left-0 -ml-12 z-0"></span>
      <span className="absolute bottom-0 left-0 -mb-32 -ml-32 w-64 h-64 bg-red-200 rounded-full z-0"></span>
      <span className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-200 rounded z-0 transform rotate-22"></span>
    </div>
  );
}

export default LogBookList;
