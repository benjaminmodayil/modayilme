import React from 'react'
// import Link from 'gatsby-link'
// Gatsby Link is invalid on 404 pages at the moment. Track here: https://github.com/gatsbyjs/gatsby/issues/1838

const NotFoundPage = () => (
  <div className="four-oh-four wrapper wrapper--medium margin-center section-padding--extra-heavy color--white u-text-align--center">
    <h1 className="font-size--56 margin-top-and-bottom--32">
      Whoopsy
      <span role="img" aria-label="shrugging emoji">
        🤷
      </span>
    </h1>
    <p className="margin-bottom--14">You just hit a route that doesn&#39;t exist...</p>
    <p className="margin-bottom--14">
      Go back to the <a href="/">homepage?</a>
    </p>
    <p className="margin-bottom--14">
      Possibly help me out and <a href="/contact">let me know</a>?
    </p>
  </div>
)

export default NotFoundPage
