/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 14:56:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 18:33:24
 * @Desc: 页面级应用组件的入口根组件
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import AppConfig from "./app.config.js";

import Page from "./pages/importPage";
import FooterBar from "./components/FooterBar/FooterBar";

function getFooterData() {
  let { list } = AppConfig.tabBar;
  // console.log(list);
  return list;
}

class RouterConfigUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerFlag: false,
    };
  }
  render() {
    console.log(this.props);
    const { footerFlag } = this.props;
    let footerList = getFooterData();
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/Home"></Redirect>}
          ></Route>
          <Route path="/Home" component={Page.Home}></Route>
          <Route path="/Classify" component={Page.Classify}></Route>
          <Route path="/Withdraw" component={Page.Withdraw}></Route>
          <Route path="/InviteDivi" component={Page.InviteDivi}></Route>
          <Route path="/Task/:id" component={Page.Task}></Route>
          <div className="layout-footer">
            {footerFlag && <FooterBar list={footerList} />}
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("-global-state-", state);
  return {
    footerFlag: state.globalSet.footerFlag,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatch1: () => {
    //   dispatch(actionCreator)
    // }
  };
};

const RouterConfig = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterConfigUI);

export default RouterConfig;
