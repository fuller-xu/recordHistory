const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackBaseConfig = require("./webpack.base");

module.exports = Object.assign(webpackBaseConfig, {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})]
  },
  plugins: [
    ...webpackBaseConfig.plugins,
    // 构建之前清理 /dist 文件夹
    new CleanWebpackPlugin()
  ]
});
