const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV === "development";

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
module.exports = {
  entry: {
    home: "./src/main.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name]_[hash:8].js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssOptions, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssOptions, "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssOptions, "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          esModule: false,
          name: "[name]_[hash:8].[ext]",
          outputPath: "img/",
          publicPath: "./img"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: "file-loader",
        options: {
          name: "[name]_[hash:8].[ext]",
          outputPath: "fonts/",
          publicPath: "../fonts" // 因为css是单独提取到css目录下，所以fonts目录，只能在上一级中找到
        }
      }
    ]
  },
  plugins: [
    // 使用vue模板 ，请确保引入这个插件！
    new VueLoaderPlugin(),

    // html 模板,及压缩html
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
        collapseWhitespace: true,
        preserveLineBreaks: false
      }
    }),
    // 提取css,
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:8].css",
      chunkFilename: "css/[id]_[contenthash:8].css"
    })
    // 热更新(可省略)
    // new webpack.HotModuleReplacementPlugin()
  ]
};
