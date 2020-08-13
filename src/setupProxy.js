/*
 * @Author: wangshengxian
 * @Date: 2020-08-12 15:25:47
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 15:39:44
 * @Desc:配置代理（模块名setupProxy.js）
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://192.168.91.21:8181",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
      // cookieDomainRewrite: "http://localhost:3000"
    })
  );
};
