import React from 'react';
import Link from '../components/Link';

import Layout from '../components/layout';
import ArticleCard from '../components/ArticleCard';
import Avatar from '../images/avatar.png';

import SEO from '../components/seo';

const IndexPage = ({ location, data }) => {
  const posts = data.allMdx.edges;
  const listItems = posts.map(({ node }) => {
    const { fields, frontmatter } = node;
    return (
      <ArticleCard
        as="li"
        className="mb-24 px-8 py-4 border-b-2 border-transparent rounded-sm hover-border-gray-300"
        link={`work-journal${fields.slug}`}
        isExternal={false}
        title={frontmatter.title}
        preview={frontmatter.description}
      />
    );
  });

  return (
    <Layout path={location.pathname}>
      <SEO
        title="Home"
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
      <main className="lg-px-24">
        <header className="py-16 lg-py-64 mt-128 grid grid-cols-1 lg-grid-cols-2 gap-24 max-w-5xl mx-auto">
          <div className="bg-gray-100 rounded-sm shadow relative pt-64 pb-32 px-24 max-w-lg mx-auto">
            <img
              src={Avatar}
              alt=""
              className="w-80 h-80 rounded-full border-4 border-white absolute right-0 lg-right-auto mr-24 lg--ml-96 -mt-96"
            />
            <h1 className="font-normal text-48 text-gray-800 -mt-80 absolute leading-none">
              Ben Modayil
            </h1>
            <p className="text-24 max-w-md">
              I’m a freelance Front-End Engineer living in Philadelphia, PA.
            </p>
            <h2 className="font-serif text-18 text-gray-800 mt-32">
              I Provide Services in Design & Development
            </h2>
            <p className="mt-12 text-16 leading-relaxed">
              I work across the spectrum between design and development to bridge the gap
              that traditional organizations suffer from.
            </p>

            <div className="flex flex-col">
              <Link to="#" style="cta" className="self-end cursor-not-allowed">
                learn more
              </Link>
            </div>
          </div>

          <div className="bg-gray-100 rounded-sm shadow relative pt-64 pb-32 px-24 max-w-md lg-px-48 lg-max-w-xl flex flex-col mt-128 lg-mt-0 mx-auto lg-mx-0">
            <h1 className="font-normal text-30 text-gray-800 -mt-80 absolute leading-none">
              Logbook
            </h1>
            <p className="text-18 max-w-md italic">
              Just logging things I've been able to get done during the week.
            </p>
            <Link to="/work-journal" style="cta" className="self-right self-end mb-24">
              learn more
            </Link>

            <ul className="list-reset text-left max-w-sm mx-auto">{listItems}</ul>
          </div>
        </header>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/work-journal/" } }
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
