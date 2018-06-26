import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class List extends Component {
  render() {
    if (this.props.items != null) {
      const listItems = this.props.items.map((i, index) => {
        if (!i.siteLink) {
          return (
            <li className="list-special mb-8 leading-normal" key={index}>
              <div>
                <p className="text-base mb-2">
                  <span className="font-semibold">{i.title}</span> at{' '}
                  <a className="no-underline" href={i.companyLink} target="_blank">
                    {i.company}
                  </a>
                </p>
                <p className="italic text-sm">{i.bottomline}</p>
              </div>
            </li>
          )
        } else {
          let company = i.company && (
            <React.Fragment>
              with{' '}
              <a className="no-underline" href={i.companyLink} target="_blank">
                {i.company}
              </a>
            </React.Fragment>
          )

          return (
            <li className="list-special mb-8 leading-normal" key={index}>
              <div>
                <p className="text-base mb-2">
                  <a
                    href={i.siteLink}
                    className="font-semibold no-underline"
                    target="_blank"
                  >
                    {i.title}
                  </a>{' '}
                  {company}
                </p>
                <p className="italic text-sm">{i.bottomline}</p>
              </div>
            </li>
          )
        }
      })

      const link = this.props.linkText && (
        <Link
          to={this.props.linkPath}
          className="text-white tracking-wide text-sm no-underline mx-auto md-mx-0 font-semibold text-md text-center float-right"
        >
          {this.props.linkText}
        </Link>
      )

      return (
        <div className="px-4 md-px-0 mx-auto text-shadow clearfix max-w-xs mb-16 md-mb-0">
          {this.props.heading && (
            <h2 className="font-normal mb-4">
              Previous <span className="font-semibold">{this.props.heading}</span>
            </h2>
          )}
          <ul>{listItems}</ul>
          {link}
        </div>
      )
    } else if (this.props.basicList != null) {
      let listItems = this.props.basicList.map((i, index) => (
        <li className="list-special mb-8 leading-normal" key={index}>
          <div>
            <p className="text-base mb-2">
              <span className="font-semibold">{i.title}</span>
            </p>
            <p
              className="italic text-sm"
              dangerouslySetInnerHTML={{
                __html: i.bottomline ? i.bottomline : i.skills.join(', ')
              }}
            />
          </div>
        </li>
      ))
      return (
        <div className="px-4 md-px-0 mx-auto text-shadow clearfix max-w-xs mb-16 md-mb-0">
          {this.props.heading && (
            <h2 className="font-normal mb-4">
              Previous <span className="font-semibold">{this.props.heading}</span>
            </h2>
          )}
          <ul>{listItems}</ul>
        </div>
      )
    }
  }
}
