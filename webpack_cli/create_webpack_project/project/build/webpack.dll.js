const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { path, rootPath, relativeRootPath } = require('./utils/path');
const { mode } = require('./utils/mode');
const { alias } = require('./utils/alias');
const { relativeDllLibraryPath } = require('./utils/dll');
module.exports = {
  mode,
  resolve: {
    alias
  },
  entry: {
    // 基础库
    library: ['vue'],
    // 业务基础库
    business: ['@/utils/content.js']
  },
  output: {
    filename: '[name]_[chunkhash:8].dll.js',
    path: relativeDllLibraryPath(),
    library: '[name]_[chunkhash:8]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      context: rootPath,
      name: '[name]_[chunkhash:8]',
      path: relativeDllLibraryPath('[name].json')
    })
  ]
};
