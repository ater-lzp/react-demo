import React, { Component, createRef } from "react";

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6],
    PrevScroll: 0,
  };
  ulRef = createRef();

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    const currentScroll = this.ulRef.current.scrollHeight;
    if (prevState.PrevScroll !== currentScroll)
      return {
        PrevScrollHight: currentScroll,
      };
    return null;
  };
  componentDidUpdate = (prevProps, prevState,snapsHot) => {
    const currentScroll = this.ulRef.current.scrollHeight;
    if (snapsHot?.PrevScrollHight !== currentScroll) {
     this.ulRef.current.scrollTop+= (currentScroll - snapsHot?.PrevScrollHight);
    }
  };
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              list: [...[7, 8, 9, 10, 11, 12, 13], ...this.state.list],
            })
          }
        >
          接收邮件
        </button>
        <ul
          ref={this.ulRef}
          style={{ maxHeight: "200px", overflow: "auto", background: "red" }}
        >
          {this.state.list.map((item,index) => (
            <li style={{ height: "50px" }} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
