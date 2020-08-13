/*
 * @Author: wangshengxian
 * @Date: 2020-08-12 13:45:37
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 18:32:01
 * @Desc: 页面结构组件
 */
import React, { Component } from "react";
import RouterConfig from "../router";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextprops) {
    console.log("路由改变了", nextprops);
  }
  render() {
    return (
      <div className="layout">
        <div className="layoutWrap">
          <div className="layout-router">
            <RouterConfig />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
