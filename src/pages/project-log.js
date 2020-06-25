import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';
import ArticleCard from '../components/ArticleCard';

const ProjectLog = ({ location, data }) => {
  const posts = data.allMdx.edges;
  const listItems = posts.map(({ node }) => {
    const { fields, frontmatter } = node;
    return (
      <ArticleCard
        as="li"
        className="mb-24 p-4"
        link={`project-log${fields.slug}`}
        isExternal={false}
        title={frontmatter.title}
        preview={frontmatter.description}
      />
    );
  });
  return (
    <Layout path={location.pathname}>
      <SEO title="Project Log | Benjamin Modayil" />
      <Header
        primary={'Project Log'}
        secondary={'A side-hustle/project for better Project Management.'}
      />
      <main>
        <ul className="list-reset text-left max-w-sm mx-auto">{listItems}</ul>
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
