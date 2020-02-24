import React from 'react';
import Link from '../components/Link';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

const ProjectLog = ({ data }) => {
  const posts = data.allMdx.edges;
  const listItems = posts.map(({ node }) => {
    const { fields, frontmatter } = node;
    return (
      <li className="bg-white shadow-md hover-shadow-xl rounded transition duration-150 ease-in">
        <Link
          // isExternal={frontmatter.isExternal}
          to={`project-log${fields.slug}`}
          className="no-underline p-4 block h-full"
        >
          <div className="flex flex-col justify-center">
            <h3
              className="text-lg font-semibold text-gray-700 mb-1"
              dangerouslySetInnerHTML={{ __html: frontmatter.title }}
            ></h3>
            <p
              className="text-base text-red-dark font-medium mb-2"
              dangerouslySetInnerHTML={{ __html: frontmatter.description }}
            ></p>
            <span className="text-sm text-purple-500 font-semibold self-end">
              Read more
            </span>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <Layout>
      <SEO title="Project Log | Benjamin Modayil" />
      <Header
        primary={'Project Log'}
        secondary={'A side-hustle/project for better Project Management.'}
      />
      <main>
        <ul className="list-reset text-left grid-container">{listItems}</ul>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
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
`;
export default ProjectLog;
