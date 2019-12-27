const path = require("path");
const webpackBaseConfig = require("./webpack.base");

module.exports = Object.assign(webpackBaseConfig, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: 8089,
    compress: true //启用gzip压缩：
  },
  devtool: "source-map"
});
