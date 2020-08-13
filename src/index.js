/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-11 18:00:46
 * @Desc: 项目入口模块
 */
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store/index";
import { Provider } from "react-redux";

import App from "./App";

// import * as Rtest from "react-router-dom";
// console.log(Rtest);

import "./assets/styles/reset.css";
import "./index.css";

// (<React.StrictMode></React.StrictMode>) 开启严格模式
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
