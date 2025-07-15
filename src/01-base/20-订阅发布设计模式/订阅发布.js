import React, { Component } from "react";
import SP from "./util";

// 订阅者

class Child1 extends Component {
  state = {
    content: "",
  };
  render() {
    return <div>{this.state.content}</div>;
  }
  componentDidMount() {
    SP.subscribe((content) => this.setState({ content }));
  }
}

// 发布者
function Child2(props) {
  return (
    <div>
      <input
        type="text"
        value={props.content}
        onChange={(e) => props.set_cotent(e.target.value)}
      />
      <button onClick={() => SP.publish(props.content)}>发布该内容</button>
    </div>
  );
}

export default class App extends Component {
  state = {
    content: "你好",
  };
  render() {
    return (
      <div>
        <Child1 />
        <hr />
        <Child2
          content={this.state.content}
          set_cotent={(content) => this.setState({ content })}
        />
      </div>
    );
  }
}
