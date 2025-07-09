/**
 * @Author: ater
 * @Date:   2025-07-08 14:43:49
 * @Last Modified by:   ater
 * @Last Modified time: 2025-07-08 17:05:22
 */
"use strict";
import React, { Component } from "react";

export default class App extends Component {
  handleClick = () => {
    this.#dataList.push(document.getElementById("inp").value);
  };
  #dataList = [];
  render() {
    return (
      <div>
        <div>
          <input type="text" id="inp"></input>{" "}
          <button onClick={this.handleClick}>添加</button>
        </div>
        <ul>
          {this.#dataList.forEach((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
