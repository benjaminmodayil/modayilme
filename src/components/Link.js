import React from 'react';
import { Link as InternalLink } from 'gatsby';

export default function Link({
  className = '',
  isExternal = false,
  to,
  title,
  children
}) {
  const linkToRender = isExternal ? (
    <a
      className={className}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </a>
  ) : (
    <InternalLink className={className} to={to} title={title}>
      {children}
    </InternalLink>
  );
  return linkToRender;
}
