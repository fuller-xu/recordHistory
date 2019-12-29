const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackBaseConfig = require('./webpack.base');
const { path, rootPath, relativeRootPath } = require('./utils/path');
const { mode } = require('./utils/mode');
const { multipleDLLEntryConfigure } = require('./utils/multiple_dll_entry');
const { relativeDllLibraryPath } = require('./utils/dll');
const { DllReferencePlugins, HtmlWebpackTagsPlugins } = multipleDLLEntryConfigure();
module.exports =
  // smp.wrap(
  webpackMerge(webpackBaseConfig, {
    mode,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: 4 // Boolean/Number
        })
      ],
      // 提取模块
      splitChunks: {
        minSize: 0, // 最小脚本大小
        cacheGroups: {
          // 基础库分离
          //   vendors: {
          //     test: /(vue|vuex|vue-router)/,
          //     name: 'vendors',
          //     chunks: 'all'
          //   },
          // 公共基本分离
          commons: {
            name: 'commons',
            chunks: 'all', // 同步引入和异步引入的脚本都会被分离
            minChunks: 2 // 引用两次以上
          }
        }
      }
    },
    plugins: [
      // 构建之前清理 /dist 文件夹
      new CleanWebpackPlugin(),
      new OptimizeCssAssetsPlugin(),
      new CopyWebpackPlugin([{ from: relativeDllLibraryPath(), to: relativeRootPath('dist/lib') }]),
      ...DllReferencePlugins,
      ...HtmlWebpackTagsPlugins
      //   new HtmlWebpackExternalsPlugin({
      //     externals: [
      //       {
      //         module: 'vue',
      //         entry: '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
      //         global: 'Vue'
      //       },
      //       {
      //         module: 'vuex',
      //         entry: '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
      //         global: 'Vuex'
      //       },
      //       {
      //         module: 'vue-router',
      //         entry: '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
      //         global: 'VueRouter'
      //       },
      //       {
      //         module: 'axios',
      //         entry: '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
      //         global: 'axios'
      //       },
      //       {
      //         module: 'loadsh',
      //         entry: '//cdn.jsdelivr.net/npm/loadsh@0.0.4/lodash.min.js',
      //         global: '_'
      //       },
      //       {
      //         module: 'moment',
      //         entry: '//cdn.jsdelivr.net/npm/moment@2.24.0/moment.min.js',
      //         global: 'moment'
      //       },
      //       {
      //         module: 'zh-cn',
      //         entry: '//cdn.jsdelivr.net/npm/moment@2.24.0/locale/zh-cn.js',
      //         global: 'moment'
      //       }
      //     ]
      //   })
      // new BundleAnalyzerPlugin()
    ]
  });
// );
