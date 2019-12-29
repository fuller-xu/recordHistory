const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
const { path, rootPath, relativeRootPath } = require('./utils/path');
const { mode } = require('./utils/mode');

module.exports = webpackMerge(webpackBaseConfig, {
  mode,
  devServer: {
    contentBase: relativeRootPath('dist'),
    hot: true,
    port: 8089,
    compress: true // 启用gzip压缩：
  },
  devtool: 'source-map'
});
