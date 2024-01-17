const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8889, // 端口号
    open: false, // 配置是否自动启动浏览器
    https: false, // 是否启用https
    proxy: {
      //代理
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8080`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
  },
  configureWebpack: (config) => {},
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("static", resolve("src/static"))
      .set("utils", resolve("src/utils"));
  },
};
