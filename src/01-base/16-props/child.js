import React, { Component } from 'react'

export default class Child extends Component {
    state={
        
    }
  render() {
    return (
      <div>
       { this.props.showName && <span >{this.props.name}</span>}
       - <span>{this.props.age}</span>
      </div>
    )
  }
}
