import Link from 'gatsby-link'
import React from 'react'
// Gatsby Link is invalid on 404 pages at the moment. Track here: https://github.com/gatsbyjs/gatsby/issues/1838

const NotFoundPage = () => (
  <div className="max-w-sm">
    <h1 className="">
      Whoopsy
      <span role="img" aria-label="shrugging emoji" alt="shrugging emoji">
        🤷
      </span>
    </h1>
    <p className="">You just hit a route that doesn&#39;t exist...</p>
    <p className="">
      Go back to the <Link to="/">homepage?</Link>
    </p>
    <p className="">
      Possibly help me out and <Link to="/contact">let me know</Link>?
    </p>
  </div>
)

export default NotFoundPage
