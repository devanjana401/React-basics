import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    return (
      <div>
        <h1>Hi {this.props.name}!</h1>
        <p>Welcome to {this.props.course} class.</p>
      </div>
    )
  }
}
