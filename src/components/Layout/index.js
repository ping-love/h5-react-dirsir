/*
 * @Author: wangshengxian
 * @Date: 2020-08-10 17:23:29
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-11 09:48:26
 * @Desc:
 */
import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import RouterConfig from "../../router";

import Details from "../../pages/Details/Details";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Page404 from "../../pages/Page404/Page404";

function Layout() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/Home">首页</NavLink>
            </li>
            <li>
              <NavLink to="/Login">登录页</NavLink>
            </li>
            <li>
              <NavLink to="/Page404">错误页</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Details}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/Home" component={Home}></Route>
            <Route path="/Page404" component={Page404}></Route>
            {/* <Redirect to="/Page404" /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
