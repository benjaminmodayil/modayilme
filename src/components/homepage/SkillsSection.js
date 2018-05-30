import React, { Component } from 'react'

export default class SkillsSection extends Component {
  render() {
    let { meta } = this.props
    return (
      <section className="section-2 max-w-lg mx-auto mt-32">
        <h2 className="screenreader-only">Skills Toolset</h2>
        <p className="text-lg md-text-xl lg-text-2xl leading-loose mb-8">
          I work using the best of the web:
        </p>
        <ul className="list-reset flex justify-between -mx-4 flex-wrap">
          {meta && meta}
        </ul>
      </section>
    )
  }
}
