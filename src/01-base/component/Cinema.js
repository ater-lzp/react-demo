import React, { Component } from "react";
import { request } from "../../tools/request";
import  "../css/12-children/cinema.css";
export default class Cinema extends Component {
  state = {
    cinemaList: [],
    input_ref: React.createRef(),
  };
  constructor(props) {
    super(props);
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
  handleChange = (keyWord)=>{
    console.log('a');
    
this.setState({
    cinemaList : [...this.state.cinemaList.filter(x=>(x.name.toUpperCase()).includes(keyWord.toUpperCase()))]
})

if (keyWord==="") 
    this.getCinemaList()


  }
  render() {
    const dom = this.state.cinemaList.map((x) => (        
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
          ref={this.state.input_ref}
          onInput={ ()=> this.handleChange(this.state.input_ref.current.value  )}
        />
        <ul>{dom}</ul>
      </div>
    );
  }
}
