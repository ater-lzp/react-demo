/**
 * @Author: ater
 * @Date:   2025-07-08 14:43:49
 * @Last Modified by:   ater
 * @Last Modified time: 2025-07-09 10:36:59
 */
"use strict";
import React, { Component, createRef } from "react";

export default class App extends Component {
  handleClick = () => {
    this.setState({
      dataList: [...this.state.dataList, this.inp.current.value],
    });
    this.inp.current.value = "";
  };
  handleDel = (i)=>{
    this.setState({
      dataList: this.state.dataList.filter((item, index) => index !== i),
    });
  }
  inp = createRef();
  state = {
    dataList: [],
  };
  render() {
    return (
      <div>
        <div>
          <input type="text" ref={this.inp}></input>
          <button onClick={this.handleClick}>添加</button>
        </div>
        <ul>
          {this.state.dataList.map((item, i) => (
            <li key={i}><span>{item}</span><button onClick={()=>this.handleDel(i)}>删除</button></li> 
          ))}
        </ul>
      </div>
    );
  }
}
