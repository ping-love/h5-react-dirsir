/*
 * @Author: wangshengxian
 * @Date: 2020-08-11 09:51:25
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 18:11:47
 * @Desc: 全局footer组件
 */

import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import "./FooterBar.css";

class FooterBarUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavIdx: 0,
      currPath: "/Home",
    };
  }
  onSwitchNav = (index, path) => {
    console.log(index, path);
    if (this.state.currPath === path) return;
    this.setState({
      activeNavIdx: index,
      currPath: path,
    });
    console.log(this.props);
    this.props.history.push(path);
  };
  componentDidMount() {
    console.log("组件挂载完成");
  }
  componentDidUpdate() {
    console.log("数据更新完毕");
  }
  render() {
    const { activeNavIdx } = this.state;
    const { list } = this.props;
    const navBoxEl = list.map((item, index) => {
      let actStyle = {
        background: `url(${item.activeIcon}) no-repeat center / cover`,
      };
      let noActStyle = {
        background: `url(${item.noActiveIcon}) no-repeat center / cover`,
      };
      return (
        <div
          className="item"
          key={index}
          onClick={this.onSwitchNav.bind(this, index, item.pagePath)}
        >
          {activeNavIdx === index ? (
            <span className="itemIcon" style={actStyle}></span>
          ) : (
            <span className="itemIcon" style={noActStyle}></span>
          )}
          <p
            className={`itemTitle ${
              activeNavIdx === index ? "activeColor" : "noActiveColor"
            }`}
          >
            {item.text}
          </p>
        </div>
      );
    });
    return (
      <div className="footer">
        <div className="navWrap">{navBoxEl}</div>
      </div>
    );
  }
}

const FooterBar = FooterBarUI;

export default withRouter(FooterBar);
