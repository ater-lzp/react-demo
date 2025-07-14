import React, { Component } from 'react'
import Child from "./child";
import SideBar from "./sideBar";
export default class DefineProps extends Component {
  render() {
    const obj = {
        name:"刘志鹏",
        age:"22" ,
        showName:false
    }
    return (
      <div>
       <Child  {...obj} />
       <SideBar position="right" width="200px" bgColor="black" textColor="#fff" />
      </div>
    )
  }
}
