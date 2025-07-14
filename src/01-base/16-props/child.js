import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class Child extends Component {
    
    static propTypes  = {
        name:PropTypes.string,
        age:PropTypes.number,
        showName:PropTypes.bool
    }
    static defaultProps = {
        name:"张三",
        age:18,
        showName:true
    }
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

