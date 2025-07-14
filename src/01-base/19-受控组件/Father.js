/**
 * @Author: ater
 * @Date:   2025-07-14 15:40:42
 * @Last Modified by:   ater
 * @Last Modified time: 2025-07-14 15:57:51
 */
"use strict";
import React, { Component } from "react";

export default class Father extends Component {
  state = {
    username: "你好",
    password: "123456",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("用户名：" + this.state.username + " 密码：" + this.state.password)
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label form="userName">
            用户名：
            <input
              type="text"
              id="userName"
              name="username"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <br />
          <label form="password">
            密码：
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}
