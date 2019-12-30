const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { devMode } = require('./mode');

// MiniCssExtractPlugin.loader options
const MiniCssOptions = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    //   enable hot in development
    hmr: devMode,
    //   if hmr does not work, this is a forceful method.
    reloadAll: true
  }
};
const vueStyleOrMiniCssLoader = devMode ? 'vue-style-loader' : MiniCssOptions;
const px2remLoader = {
  loader: 'px2rem-loader',
  options: {
    remUnit: 75, // 1rem = 75px
    remPrecision: 8 // 转换成rem，保留8位小数
  }
};
const threadLoader = {
  loader: 'thread-loader',
  options: {
    workers: 3 // 开启3个线程
  }
};
const fileLoader = {
  loader: 'file-loader',
  options: {
    esModule: false,
    name: '[name]_[hash:8].[ext]'
  }
};
module.exports = {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      //   use: [threadLoader, 'babel-loader']
      use: [threadLoader, 'babel-loader?cacheDirectory=true']
    },
    {
      test: /\.vue$/,
      use: [threadLoader, 'vue-loader']
    },
    {
      test: /\.css$/,
      use: [vueStyleOrMiniCssLoader, 'css-loader', 'postcss-loader', px2remLoader]
    },
    {
      test: /\.s[ac]ss$/i,
      use: [vueStyleOrMiniCssLoader, 'css-loader', 'postcss-loader', 'sass-loader', px2remLoader]
    },
    {
      test: /\.less$/,
      use: [vueStyleOrMiniCssLoader, 'css-loader', 'postcss-loader', 'less-loader', px2remLoader]
    },
    // 图片
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: {
              ...fileLoader,
              options: {
                ...fileLoader.options,
                outputPath: 'img/',
                publicPath: './img'
              }
            }
          }
        }
      ]
    },
    // 字体
    {
      test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: {
              ...fileLoader,
              options: {
                ...fileLoader.options,
                outputPath: 'fonts/',
                publicPath: '../fonts' // 因为css是单独提取到css目录下，所以fonts目录，只能在上一级中找到
              }
            }
          }
        }
      ]
    },
    // 媒体文件
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240,
            fallback: {
              ...fileLoader,
              options: {
                ...fileLoader.options,
                outputPath: 'media/',
                publicPath: './media'
              }
            }
          }
        }
      ]
    }
  ]
};
