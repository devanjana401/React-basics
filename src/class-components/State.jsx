import React, { Component } from 'react'

export default class State extends Component {
    //initialize state
    //constructor is used to initialize the state of the component
    constructor(){
        super();
        this.state = {count:0};
    }                
    increment = () =>{
        this.setState({count:this.state.count+1})     //used to set states for updating
        
    }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2><br />
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
