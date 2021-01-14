import React from "react"
import { graphql } from "gatsby"
import Link from "../components/Link"

import Layout from "../components/layout"
// import ArticleCard from "../components/ArticleCard"
import Avatar from "../images/avatar.png"
import VigetCard from "../images/viget-card.png"
import HothouseCard from "../images/hothouse-card.png"
import CadentCard from "../images/cadent-card.png"

import SEO from "../components/seo"

const IndexPage = ({ location, data }) => {
  const posts = data.allMdx.edges
  // const listItems = posts.map(({ node }) => {
  //   const { fields, frontmatter } = node
  //   return (
  //     <ArticleCard
  //       as="li"
  //       className="bg-transparent hover-bg-white"
  //       link={`work-journal${fields.slug}`}
  //       isExternal={false}
  //       title={frontmatter.title}
  //       preview={frontmatter.description}
  //     />
  //   )
  // })

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
          <div className="bg-gray-50 rounded-sm shadow relative pt-64 pb-32 px-24 max-w-lg mx-auto">
            <img
              src={Avatar}
              alt=""
              className="w-80 h-80 rounded-full border-4 border-white absolute right-0 lg-right-auto mr-24 lg--ml-96 -mt-96"
            />
            <h1 className="font-serif font-normal text-48 text-gray-800 -mt-80 absolute leading-none">
              Ben Modayil
            </h1>
            <p className="text-24 max-w-md">
              I’m a freelance Front-End Engineer living in Philadelphia, PA.
            </p>
            <h2 className="font-serif text-18 text-gray-800 mt-32">
              I Provide Services in Design & Development
            </h2>
            <p className="mt-12 text-16 leading-relaxed">
              I work across the spectrum between design and development to
              bridge the gap that traditional organizations suffer from.
            </p>

            {/* <div className="flex flex-col">
              <Link
                to="#"
                styleType="cta"
                className="self-end cursor-not-allowed"
              >
                learn more
              </Link>
            </div> */}
          </div>

          <div className="bg-gray-50 rounded-sm shadow relative pt-64 pb-32 px-24 max-w-md lg-px-48 lg-max-w-xl flex flex-col mt-128 lg-mt-0 mx-auto lg-mx-0">
            <h1 className="font-serif font-normal text-30 text-gray-800 -mt-80 absolute leading-none">
              Some recent updates
            </h1>
            <ul className="list-disc list-inside text-14 font-medium max-w-md">
              <li>
                Added a{" "}
                <Link to="/uses" styleType="underline">
                  /uses
                </Link>{" "}
                page to track gear/equipment I use.
              </li>
            </ul>
            {/* <Link
              to="/work-journal"
              styleType="cta"
              className="self-right self-end mb-24"
            >
              learn more
            </Link>

            <ul className="list-reset text-left w-full mx-auto">{listItems}</ul> */}
          </div>
        </header>
      </main>

      <section className="mt-128 mb-64 lg-my-128 px-24">
        <h2 className="font-serif text-center font-bold text-18 lg-text-24">
          Some companies I’ve worked at in the past years.
        </h2>
        <ul className="flex flex-col items-center lg-flex-row justify-between w-full max-w-4xl mx-auto mt-36 lg-space-x-24 space-y-24 lg-space-y-0">
          <li>
            <a
              href="https://viget.com"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img src={VigetCard} alt="Viget" className="rounded-lg" />
            </a>
          </li>
          <li>
            <a
              href="https://hothouseinc.com"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img src={HothouseCard} alt="Hothouse" className="rounded-lg" />
            </a>
          </li>
          <li>
            <a
              href="https://cadent.tv"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img src={CadentCard} alt="Cadent" className="rounded-lg" />
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage

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
`
