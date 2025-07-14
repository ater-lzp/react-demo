/**
 * @Author: ater
 * @Date:   2025-07-10 10:46:50
 * @Last Modified by:   ater
 * @Last Modified time: 2025-07-14 16:15:01
 * desc: 使用受控组件
 */
import React, { Component } from "react";
import { request } from "../../tools/request";
import  "../css/12-children/cinema.css";
export default class Cinema extends Component {
  state = {
    cinemaList: [],
    input_ref: React.createRef(),
    keyWord:""
  };
  componentDidMount=()=>{
    this.getCinemaList()
  }
  getCinemaList =  ()=>{
     //  发送请求
     request("/gateway?cityId=440300&ticketFlag=1&k=1275004", "GET")
     .then((res) => {
       this.setState({
           cinemaList: [...res.data.cinemas]
       })
     })
     .catch((err) => {
       console.log(err);
     });
  }
  handleChange = (event)=>{    
this.setState({
  [event.target.name]:event.target.value
})
  }
fillterCinemaList = (keyWord)=>{
 return this.state.cinemaList.filter(x=>(x.name.toUpperCase()).includes(keyWord.toUpperCase()))
}
  render() {
    const dom = this.fillterCinemaList(this.state.keyWord).map((x) => (        
      <li className="CinemaItem" key={x.cinemaId}>
        <div className="left">
          <p className="cinema_name">{x.name}</p>
          <span className="address">{x.address}</span>
        </div>
        <div className="right">
          <span className="price">
            ￥<span className="price_num">{x.lowPrice}</span> 起
          </span>
          <span className="range"></span>
        </div>
      </li>
    ));
    return (
      <div id="Cinemas">
        <input
          type="text"
          placeholder="请输入影院名称"
          className="search"
          name="keyWord"
          value={this.state.keyWord}
          onChange={this.handleChange.bind(this)}
        />
        <ul>{dom}</ul>
      </div>
    );
  }
}
