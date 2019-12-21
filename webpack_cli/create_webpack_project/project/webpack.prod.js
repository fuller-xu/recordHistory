const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackBaseConfig = require("./webpack.base");

module.exports = Object.assign(webpackBaseConfig, {
  mode: "production",
  plugins: [
    // 构建之前清理 /dist 文件夹
    new CleanWebpackPlugin()
  ]
});
