import React from 'react';
import { Link as InternalLink } from 'gatsby';
import IconLink from '../images/IconArrowLink';

export default function Link({
  className = '',
  isExternal = false,
  to,
  title,
  style = 'link',
  children,
}) {
  const button = `bg-blue`;
  const link = `text-gray-800 text-14 font-sans font-medium transition duration-200 ease-in`;
  const ctaLink = `${link} border-b-2 border-gray-400 hover-border-gray-600`;
  const underline = `${link} border-b-2 border-transparent hover-border-gray-600`;
  const styleType = // TODO: I'm sickened with myself
    style === 'button'
      ? button
      : style === 'cta'
      ? ctaLink
      : style === 'underline'
      ? underline
      : link;
  const linkToRender = isExternal ? (
    <a
      className={`${styleType} ${className} `}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </a>
  ) : (
    <InternalLink className={`${className} ${styleType}`} to={to} title={title}>
      <span className={style === 'cta' ? 'inline-block mr-4 ' : ''}>{children}</span>
      {style === 'cta' && (
        <IconLink className={style === 'cta' ? 'inline-block ml-4 ' : ''} />
      )}
    </InternalLink>
  );
  return linkToRender;
}
