import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <SEO title="Blog | Benjamin Modayil" />
        <header className="mt-64 mb-32 mx-auto px-4 flex justify-center flex-col max-w-xl xl-max-w-6xl">
          <div>
            <div className="mb-32 lg-mb-0 text-center">
              <h1 className="block font-special text-red-500 text-6xl text-center">
                {post.frontmatter.title}
              </h1>
              <p className="text-xl lg-text-2xl font-light leading-normal mt-8 max-w-md mx-auto">
                {post.frontmatter.date}
              </p>
            </div>
          </div>
        </header>

        <main className="post__page leading-normal mt-32 pb-16">
          <MDXRenderer>{post.body}</MDXRenderer>
        </main>
        <hr />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
