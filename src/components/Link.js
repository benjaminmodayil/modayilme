import React from "react"
import { Link as InternalLink } from "gatsby"
import IconLink from "../images/IconArrowLink"

export default function Link({
  className = "",
  isExternal = false,
  to,
  title,
  styleType = "link",
  children,
}) {
  const button = `bg-blue`
  const link = `text-gray-800 text-14 font-sans font-medium transition duration-200 ease-in`
  const ctaLink = `${link} border-b-2 border-gray-400 hover-border-gray-600`
  const underline = `${link} border-b-2 border-gray-400 hover-border-gray-600`
  const styleClass = // TODO: I'm sickened with myself
    styleType === "button"
      ? button
      : styleType === "cta"
      ? ctaLink
      : styleType === "underline"
      ? underline
      : link
  const linkToRender = isExternal ? (
    <a
      className={`${styleClass} ${className} `}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </a>
  ) : (
    <InternalLink
      className={`${className} ${styleClass}`}
      to={to}
      title={title}
    >
      <span className={styleType === "cta" ? "inline-block mr-4 " : ""}>
        {children}
      </span>
      {styleType === "cta" && (
        <IconLink className={styleType === "cta" ? "inline-block ml-4 " : ""} />
      )}
    </InternalLink>
  )
  return linkToRender
}
