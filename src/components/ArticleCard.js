import React from "react"
import Link from "../components/Link"
import IconArrowRight from "../images/IconArrowRight.js"

export default function ArticleCard({
  className,
  as: Component = "li",
  link,
  isExternal,
  title,
  preview,
  date,
  ...restProps
}) {
  return (
    <Component
      {...restProps}
      className={`${className} duration-150 ease-in mb-24 p-4 bg-white hover-shadow-md rounded`}
    >
      <Link
        // isExternal={frontmatter.isExternal}
        to={link}
        className="no-underline px-4 py-8 block h-full"
      >
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center w-full">
            <h3
              className="text-16 font-bold text-gray-800 mb-8 leading-none font-sans"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className="text-14 text-gray-800 font-medium mb-12 leading-normal"
              dangerouslySetInnerHTML={{ __html: preview }}
            ></p>
            <span className="text-12 text-gray-800 font-thin leading-none">
              {date}
            </span>
          </div>
          <IconArrowRight />
        </div>
      </Link>
    </Component>
  )
}
