/*
 * @Author: wangshengxian
 * @Date: 2020-08-11 09:51:25
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 11:33:01
 * @Desc: 全局header组件
 */
import React, { Component } from "react";

import "./HeaderBar.css";

class HeaderBarUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      statusHeight: 20, // 设备状态栏高度，不同的设备高度不固定
    };
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    console.log("后退");
    console.log(this);
    // window.history.go(-1);
  }
  render() {
    console.log("-private-state-", this.state, "-props-", this.props);
    let { title, statusHeight } = this.state;
    let { children } = this.props;

    let headerHeight = statusHeight + 41 + "px";
    let headerGlobalPT = statusHeight + "px";
    let leftIconTop = statusHeight + 10.5 + "px";
    let rightTop = statusHeight + "px";
    return (
      <header className="header" style={{ height: headerHeight }}>
        <div className="header-global" style={{ paddingTop: headerGlobalPT }}>
          <span
            className="header-left-icon"
            style={{ top: leftIconTop }}
            onClick={this.goBack}
          ></span>
          <div className="header-title">{title}</div>
          <div className="header-right" style={{ top: rightTop }}>
            {/* 类似与vue中的插槽slot，后续再优化，再封装 */}
            {children}
          </div>
        </div>
      </header>
    );
  }
}

const HeaderBar = HeaderBarUI;

export default HeaderBar;
