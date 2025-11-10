import React, { Component } from 'react'

export default class Should extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  shouldComponentUpdate(_, nextState) {
    // Allow re-render only when count is a multiple of 5
    if (nextState.count % 5 === 0) {
      console.log("Component updated at count:", nextState.count);
      return true;
    }
    console.log("Update skipped at count:", nextState.count);
    return false;
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
