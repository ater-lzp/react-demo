import React, { Component } from 'react'
import Child from "./child";
export default class DefineProps extends Component {
  render() {
    return (
      <div>
       <Child name="张三" age="18" showName={true} />
      </div>
    )
  }
}
