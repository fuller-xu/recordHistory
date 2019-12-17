const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  //   mode: "production",
  mode: "development",
  entry: {
    home: "./src/main.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name][hash:8].js"
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
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
        loader: "file-loader",
        options: {
          esModule: false,
          name: "[name]-[hash:8].[ext]",
          outputPath: "images/",
          publicPath: "./images"
        }
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    // 构建之前清理 /dist 文件夹
    new CleanWebpackPlugin(),
    // html 模板
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html"
    }),

    // 热更新
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: 8080,
    compress: true //启用gzip压缩：
  }
};
