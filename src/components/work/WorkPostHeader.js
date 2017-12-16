import React, { Component } from 'react'
import SVG from 'react-inlinesvg'

class WorkPostHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({
      svgHeader: 'IconKeurig'
    })
  }

  render() {
    const { posts } = this.props
    return (
      <header className="work__header">
        <div className="work__header-inner wrapper wrapper--wide margin-center">
          <div className="work__header-inner--left container--medium-to-small ">
            <h1
              className="h-1"
              dangerouslySetInnerHTML={{ __html: posts.frontmatter.title }}
            />
            <p className="font-size--16 font-style--italic">{posts.frontmatter.tldr}</p>
          </div>
          {!posts.frontmatter.svgName ? null : (
            <div className="work__header-inner--right">
              <SVG
                src={`../../static/work-images/${posts.frontmatter.svgName}.svg`}
                uniquifyIDs={false}
              />
            </div>
          )}
        </div>
      </header>
    )
  }
}

export default WorkPostHeader
