const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");
const devMode = process.env.NODE_ENV === "development";

const setMpa = () => {
  const entry = {}; //入口对象
  const htmlWebpackPlugins = []; //html-webpack-plugin配置
  //获取入口文件
  const entryFiles = glob.sync(path.join(__dirname, "./src/pages/*/index.js"));

  Object.keys(entryFiles).map(index => {
    const entryFil = entryFiles[index];
    //获取文件夹名称
    const match = entryFil.match(/src\/pages\/(.*)\/index\.js/);
    const pathname = match && match[1];
    console.log(pathname);
    //配置入口文件对象
    entry[pathname] = entryFil;
    //配置html-webpack-plugin
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/pages/${pathname}/index.html`),
        filename: `pages/${pathname}.html`,
        chunks: ["vendors", "commons", pathname],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyJS: true,
          minifyCSS: true,
          removeComments: false
        }
      })
    );
  });

  return {
    entry,
    htmlWebpackPlugins
  };
};

const { entry, htmlWebpackPlugins } = setMpa();
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
const vueStyleOrMiniCssLoader = devMode ? "vue-style-loader" : MiniCssOptions;
const px2remLoader = {
  loader: "px2rem-loader",
  options: {
    remUnit: 75, // 1rem = 75px
    remPrecision: 8 // 转换成rem，保留8位小数
  }
};
console.log("当前环境----->", process.env.NODE_ENV);
module.exports = {
  //   stats: "errors-only",
  //   entry: entry,
  entry: {
    index: "./src/pages/index/index.js"
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
        use: [
          vueStyleOrMiniCssLoader,
          "css-loader",
          "postcss-loader",
          px2remLoader
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          vueStyleOrMiniCssLoader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
          px2remLoader
        ]
      },
      {
        test: /\.less$/,
        use: [
          vueStyleOrMiniCssLoader,
          "css-loader",
          "postcss-loader",
          "less-loader",
          px2remLoader
        ]
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
    // ...htmlWebpackPlugins,
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `src/pages/index/index.html`),
      filename: `pages/index.html`,
      chunks: ["vendors", "commons", "index"],
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
      filename: "css/[name]_[contenthash:8].css",
      chunkFilename: "css/[id]_[contenthash:8].css"
    })
  ]
};
