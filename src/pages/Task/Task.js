/*
 * @Author: wangshengxian
 * @Date: 2020-08-12 10:27:59
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 10:32:46
 * @Desc: 任务
 */
import React, { Component } from "react";

class TaskUI extends Component {
  render() {
    console.log(this.props.match.params);
    return <div className="task">任务</div>;
  }
}

const Task = TaskUI;

export default Task;
