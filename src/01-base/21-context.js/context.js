import React, { Component } from "react";

const GlobalContext = React.createContext();
export default class App extends Component {
  state = {
    desc: "我是爹",
    childInfo: { name: "xiaoming", gender: "male" },
  };
  setChildInfo = (info) => {
this.setState({
    childInfo:{
        ...this.state.childInfo,
        ...info        
    }
})
    
  };
  setDesc = (desc) => {
   this.setState(desc)
    
  };
  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state.childInfo,
          desc:this.state.desc,
          setChildInfo: this.setChildInfo,
          setDesc: this.setDesc,
        }}
      >
        <div>
          {this.state.desc}
          <Child />
        </div>
      </GlobalContext.Provider>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => (
          <div>
            <div>
              姓名
              <input
                type="text"
                value={value.name}
                onChange={(e) =>
                  value.setChildInfo({
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div>
              性别 <input type="text" value={value.gender}
              onChange={(e) =>
                value.setChildInfo({
                  gender: e.target.value,
                })
              } />
            </div>
            <div>
              描述 <input type="text" value={value.desc} 
              onChange={(e) =>
                value.setDesc({
                  desc: e.target.value,
                })
              }
              />
            </div>
            我是崽 获取来自父组件的名字:{value.name},性别:{value.gender}
          </div>
        )}
      </GlobalContext.Consumer>
    );
  }
}
