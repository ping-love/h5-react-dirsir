/*
 * @Author: wangshengxian
 * @Date: 2020-08-12 18:02:19
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 18:16:26
 * @Desc: 全局配置文件(参考小程序的全局配置)
 */
export default {
  // 页面地址
  pages: ["/Home", "/Classify"],
  tabBar: {
    activeColor: "#d81e06",
    noActiveColor: "#999",
    backgroundColor: "#fff",
    borderColor: "#FCFCFC",
    position: "bottom",
    list: [
      {
        text: "首页",
        pagePath: "/Home",
        activeIcon: require("./assets/iconfont/icon-home-sel.png"),
        noActiveIcon: require("./assets/iconfont/icon-home-unsel.png"),
      },
      {
        text: "分类",
        pagePath: "/Classify",
        activeIcon: require("./assets/iconfont/icon-classify-sel.png"),
        noActiveIcon: require("./assets/iconfont/icon-classify-unsel.png"),
      },
      {
        text: "购物车",
        pagePath: "/Cart",
        activeIcon: require("./assets/iconfont/icon-cart-sel.png"),
        noActiveIcon: require("./assets/iconfont/icon-cart-unsel.png"),
      },
      {
        text: "我的",
        pagePath: "/My",
        activeIcon: require("./assets/iconfont/icon-my-sel.png"),
        noActiveIcon: require("./assets/iconfont/icon-my-unsel.png"),
      },
    ],
  },
};
