const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/data",
    createProxyMiddleware({
      target: "http://www.naver.com",
      changeOrigin: true,
    })
  );
};
