const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
const { path, rootPath, relativeRootPath } = require('./utils/path');
const { mode } = require('./utils/mode');

module.exports = webpackMerge(webpackBaseConfig, {
  mode,
  devServer: {
    contentBase: relativeRootPath('dist'),
    disableHostCheck: true, // 不使用白名单的原因是多人开发，每个人都需要绑定 Host 不方便，因此关闭 Host 检查
    hot: true, // 开启热更新
    port: 8089,
    // host: '0.0.0.0',
    open: true,
    compress: true, // 启用gzip压缩：
    proxy: {}
  },
  devtool: 'source-map'
});
