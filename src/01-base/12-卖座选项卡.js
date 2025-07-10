/**
 * @Author: ater
 * @Date:   2025-07-09 11:12:46
 * @Last Modified by:   ater
 * @Last Modified time: 2025-07-09 12:37:46
 */
"use strict";
import React, { Component } from "react";
import "./css/12.css";
import Center from "./component/Center";
import Cinema from "./component/Cinema";
import Film from "./component/Film";
export default class App extends Component {
  state = {
    tabbars: [
      { id: 1, title: "电影" },
      { id: 2, title: "影院" },
      { id: 3, title: "商城" },
      { id: 4, title: "我的" },
    ],
    currentIndex: 0,
  };
  render() {
    let tabs = this.state.tabbars.map((x, index) => (
      <li
        className={index === this.state.currentIndex ? "active" : ""}
        onClick={() => this.setState({ currentIndex: index })}
        key={x.id}
      >
        {x.title}
      </li>
    ));
    let cards = (index)=>{
        switch(index){
            case 0:
                return <Film className="card"></Film>
            case 1:
                return <Cinema className="card"></Cinema>
            case 2:
                return <div className="card">商城</div>
            case 3:
                return <Center className="card"></Center>
                default:
                return <Film className="card"></Film>
        }
    }
    return <div className="box">
       {cards(this.state.currentIndex)}
        <ul className="tabbar">{tabs}</ul>
    </div>;
  }
}
