/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 17:22:14
 * @Desc: reducers配置文件
 */
import { combineReducers } from "redux";
import globalSet from "./globalSet";
import login from "./login";
import number from "./number";

const reducers = combineReducers({
  globalSet,
  login,
  number,
});

export default reducers;
