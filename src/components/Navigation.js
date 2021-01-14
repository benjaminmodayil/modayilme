import React from "react"
import Link from "../components/Link"
import SocialLinks from "../components/SocialLinks"

let links = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog" },
  // { name: "Work Journal", to: "/work-journal" },
  { name: "Uses", to: "/uses" },
  { name: "Contact", to: "/contact" },
]

export default function Navigation({ location }) {
  return (
    <nav className="lowercase flex flex-col lg-flex-row items-center lg-justify-start text-14 font-medium container max-w-5xl">
      <div className="py-1 flex-1">
        <div className="border-b inline-flex justify-between w-192 mb-32 lg-mb-0">
          {links.map(({ name, to, isExternal }) => {
            return (
              <Link
                to={to}
                isExternal={isExternal}
                className="hover-border-b-2 border-gray-600"
              >
                {name}
              </Link>
            )
          })}
        </div>
      </div>
      <SocialLinks />
    </nav>
  )
}
