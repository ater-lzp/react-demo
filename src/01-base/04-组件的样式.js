/**
 * @Author: ater
 * @Date:   2025-07-08 14:09:30
 * @Last Modified by:   ater
 * @Last Modified time: 2025-07-08 14:28:41
 */
"use strict";
import React, { Component } from "react";
import "./css/01.css"
export default class App extends Component {
  render() {
    const info = {
      name: "ater",
      age: 18,
      sex: "male",
      height: 1.8,
    };
    const style = { 
        backgroundColor:'red',
        border:'1px solid blue',
        color:'white'
    };
    return (
      <div>
        <table style={style}  >
          <tbody>
            <tr>
              <td className="active">姓名</td>
              <td>{info.name}</td>
            </tr>
            <tr>
              <td>年龄</td>
              <td>{info.age}</td>
            </tr>
            <tr>
              <td>性别</td>
              <td>{info.sex}</td>
            </tr>
            <tr>
              <td>身高</td>
              <td>{info.height}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
