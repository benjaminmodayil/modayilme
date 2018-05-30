import React, { Component } from 'react'

export default class Border extends Component {
  styles = `border-t-8 border-${this.props.color}`
  render() {
    return <div className={this.styles} />
  }
}
