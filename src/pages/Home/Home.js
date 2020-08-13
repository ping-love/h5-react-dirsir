/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 17:42:09
 * @Desc: 首页
 */
// 容器组件,只处理逻辑
import React, { Component } from "react";
import { BrowserRouter as Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setFooterFlagDispatch } from "../../redux/actions/globalSet";
import "./Home.css";

import HeaderBar from "../../components/HeaderBar/HeaderBar";

class HomeUI extends Component {
  constructor(props) {
    super(props);
    this.onPageTask = this.onPageTask.bind(this);
  }
  onPageTask() {
    let id = "10098";
    this.props.history.push(`/Task/${id}`);
  }
  onPageWithdraw = (path) => {
    // console.log(path);
    // this.props.history.push({ pathname: path, state: { name: "btnPage" } });
  };
  render() {
    let id = "99099";

    return (
      <div className="home">
        <HeaderBar title="首页" children={<span>右边slot</span>} />
        <div className="main">
          <div className="link-state-params">
            <NavLink
              to={{
                pathname: "/Withdraw",
                state: { name: "name1", type: "state" },
              }}
            >
              去提现state传参
            </NavLink>
          </div>
          <div className="link-query-params">
            <NavLink
              to={{
                pathname: "/Withdraw",
                query: { name: "name1", type: "query" },
              }}
            >
              去提现query传参
            </NavLink>
          </div>
          <div>
            <NavLink to="/InviteDivi">邀请分红</NavLink>
          </div>
          <div>
            <NavLink to={"/Task/" + id}>任务</NavLink>
          </div>
          <div>
            <button onClick={this.onPageTask}>任务</button>
          </div>
          <div className="btnPage">
            <button onClick={this.props.onPageWithdraw}>去提现</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: 10,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPageWithdraw: (params) => {
      console.log("-this-props-", ownProps, "-params-", params);
      dispatch(setFooterFlagDispatch(false));
      ownProps.history.push({
        pathname: "/Withdraw",
        state: { name: "btnPage" },
      });
    },
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);

export default withRouter(Home);
