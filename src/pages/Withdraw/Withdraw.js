/*
 * @Author: wangshengxian
 * @Date: 2020-08-11 10:46:14
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 17:54:20
 * @Desc: 提现
 */
import React, { Component } from "react";
import { connect } from "react-redux";

import { setFooterFlagDispatch } from "../../redux/actions/globalSet";

class WithdrawUI extends Component {
  render() {
    console.log(this.props);
    // console.log(this.props);
    return (
      <div>
        提现
        <button onClick={this.props.onPage}>去其它页</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPage: () => {
      dispatch(setFooterFlagDispatch(true));
      console.log(ownProps);
      ownProps.history.push("/InviteDivi");
    },
  };
};

const Withdraw = connect(mapStateToProps, mapDispatchToProps)(WithdrawUI);

export default Withdraw;
