/*
 * @Author: wangshengxian
 * @Date: 2020-08-11 11:34:59
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 11:38:18
 * @Desc: 邀请分红
 */
import React, { Component } from "react";

import { BrowserRouter as withRouter } from "react-router-dom";

import HeaderBar from "../../components/HeaderBar/HeaderBar";

class InviteDiviUI extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="inviteDivi">
        <HeaderBar title="邀请分红"></HeaderBar>
      </div>
    );
  }
}

const InviteDivi = InviteDiviUI;

export default InviteDivi;
