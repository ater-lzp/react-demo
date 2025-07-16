import React, { Component } from "react";
import SP from "./util";

// 订阅者
class Child1 extends Component {
  state = {
    content: "",
  };

  componentDidMount() {
    // 订阅事件
    this.subscription = SP.subscribe((content) => {
      if (content !== undefined) {
        this.setState({ content });
      } else {
        console.error("接收到的内容是 undefined");
      }
    });
    console.log(this.subscription);
    
  }

  componentWillUnmount() {
    // 取消订阅，防止内存泄漏
    if (this.subscription) {
      SP.unsubscribe(this.subscription);
    }
  }

  render() {
    return <div>{this.state.content}</div>;
  }
}

// 发布者
function Child2(props) {
  return (
    <div>
      <input
        type="text"
        value={props.content}
        onChange={(e) => props.setContent(e.target.value)}
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
          setContent={(content) => {
            if (typeof content === "string") {
              this.setState({ content });
            } else {
              console.error("设置的内容不是字符串");
            }
          }}
        />
      </div>
    );
  }
}
