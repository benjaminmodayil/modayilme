import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';
import ArticleCard from '../components/ArticleCard';

const Blog = ({ location, data }) => {
  const posts = data.allMdx.edges;
  const listItems = posts.map(({ node }) => {
    const { fields, frontmatter } = node;
    return (
      <ArticleCard
        as="li"
        className="mb-24 p-4"
        link={`blog${fields.slug}`}
        isExternal={false}
        title={frontmatter.title}
        preview={frontmatter.description}
      />
    );
  });
  return (
    <Layout path={location.pathname}>
      <SEO title="Blog | Benjamin Modayil" />
      <Header primary={'Blog'} secondary={'Just some thoughts on Code and Life.'} />
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
      filter: { fileAbsolutePath: { regex: "/blog/" } }
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
export default Blog;
