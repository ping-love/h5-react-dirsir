/*
 * @Author: wangshengxian
 * @Date: 2020-08-12 17:17:07
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 17:47:02
 * @Desc: 全局设置--reducer
 */
import * as constant from "../config/actionType";

const initStates = {
  footerFlag: true,
};

export default (state = initStates, action) => {
  console.log(action);
  switch (action.type) {
    case constant.FOOTER_FLAG:
      return {
        ...state,
        footerFlag: action.data,
      };
    default:
      return state;
  }
};
