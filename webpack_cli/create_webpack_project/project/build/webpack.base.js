const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { path, rootPath, relativeRootPath } = require('./utils/path');
const { rules } = require('./utils/rules');
const { alias } = require('./utils/alias');
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
    // 第三方模块 指定在node_modules目录中查找
    // modules: [path.resolve(__dirname, 'node_modules')],
    // 后缀名只查找.js的文件
    // extensions: ['.js', '.vue', '.json'],
    // 入口文件名包含main的文件
    // mainFields: ['main', 'index']
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
    }),
    new PurgecssPlugin({
      paths: glob.sync(relativeRootPath('src/**/*'), { nodir: true })
    })
  ]
};
