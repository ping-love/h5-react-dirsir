/*
 * @Author: wangshengxian
 * @Date: 2020-08-12 17:09:58
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 17:46:47
 * @Desc: 全局设置--action
 */
import * as constant from "../config/actionType";

export const setFooterFlagAction = (data) => ({
  type: constant.FOOTER_FLAG,
  data,
});

export const setFooterFlagDispatch = (params) => {
  return (dispatch) => {
    console.log("-dispatch-", params);
    dispatch(setFooterFlagAction(params));
  };
};
