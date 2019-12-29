const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { path, rootPath, relativeRootPath } = require('./utils/path');
const { rules } = require('./utils/rules');
const { alias } = require('./utils/alias');
const { relativeDllLibraryPath } = require('./utils/dll');
// 多入口配置
// const { multiplePagesConfigure } = require('./utils/multiple_pages_entry');
// const { entry, htmlWebpackPlugins } = multiplePagesConfigure();

console.log('当前环境----->', process.env.NODE_ENV);
module.exports = {
  stats: 'errors-warnings',
  //   stats: 'verbose',
  // 多页面
  //   entry: entry,
  // 单页面
  entry: {
    index: relativeRootPath('src/main.js')
  },
  output: {
    path: relativeRootPath('dist'),
    filename: 'js/[name]_[hash:8].js'
  },
  resolve: {
    alias
  },
  module: {
    rules
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    // 使用vue模板 ，请确保引入这个插件！
    new VueLoaderPlugin(),
    // 多页面
    // ...htmlWebpackPlugins,
    // 单页面
    new HtmlWebpackPlugin({
      template: relativeRootPath(`public/index.html`),
      filename: `index.html`,
      //   chunks: ['vendors', 'commons', 'index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyJS: true,
        minifyCSS: true,
        removeComments: false
      }
    }),

    // 提取css,
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:8].css',
      chunkFilename: 'css/[id]_[contenthash:8].css'
    })
  ]
};
