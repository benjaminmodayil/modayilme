import React, { Component } from 'react'
import IconKeurig from '../../assets/work-images/IconKeurig'

class WorkPostHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  svgRender() {
    if (this.props.data.markdownRemark.frontmatter.svgName == IconKeurig.name) {
      return true
    }
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
            <h1 className="h-1">{posts.frontmatter.title}</h1>
            <p className="font-size--16 font-style--italic">{posts.frontmatter.tldr}</p>
          </div>
          {this.state.svgHeader == IconKeurig.name ? (
            <div className="work__header-inner--right">
              <IconKeurig />
            </div>
          ) : null}
        </div>
      </header>
    )
  }
}

export default WorkPostHeader
