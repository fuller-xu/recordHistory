<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [从零架构webpack + vue 项目](#%e4%bb%8e%e9%9b%b6%e6%9e%b6%e6%9e%84webpack--vue-%e9%a1%b9%e7%9b%ae)
  - [1. 安装 webpack](#1-%e5%ae%89%e8%a3%85-webpack)
  - [2. mode 详解](#2-mode-%e8%af%a6%e8%a7%a3)
  - [3. 安装常用的 Loaders](#3-%e5%ae%89%e8%a3%85%e5%b8%b8%e7%94%a8%e7%9a%84-loaders)
    - [3.1 安装 babel-loader —— 启用 js 新语法的编译](#31-%e5%ae%89%e8%a3%85-babel-loader--%e5%90%af%e7%94%a8-js-%e6%96%b0%e8%af%ad%e6%b3%95%e7%9a%84%e7%bc%96%e8%af%91)
    - [3.2 安装 css-loader](#32-%e5%ae%89%e8%a3%85-css-loader)
    - [3.3 安装 vue-loader](#33-%e5%ae%89%e8%a3%85-vue-loader)
    - [3.4 安装 sass-loader](#34-%e5%ae%89%e8%a3%85-sass-loader)
    - [3.5 安装 less-loader](#35-%e5%ae%89%e8%a3%85-less-loader)
    - [3.6 安装 file-loader](#36-%e5%ae%89%e8%a3%85-file-loader)
    - [3.7 安装 url-loader](#37-%e5%ae%89%e8%a3%85-url-loader)
  - [4. 安装常用的 Plugins](#4-%e5%ae%89%e8%a3%85%e5%b8%b8%e7%94%a8%e7%9a%84-plugins)
    - [4.1 babel 插件 @babel/plugin-transform-runtime](#41-babel-%e6%8f%92%e4%bb%b6-babelplugin-transform-runtime)
    - [4.2 HTML 模板插件 html-webpack-plugin](#42-html-%e6%a8%a1%e6%9d%bf%e6%8f%92%e4%bb%b6-html-webpack-plugin)
    - [4.3 清理插件 clean-webpack-plugin](#43-%e6%b8%85%e7%90%86%e6%8f%92%e4%bb%b6-clean-webpack-plugin)
    - [4.4 热更新 插件 webpack-dev-server](#44-%e7%83%ad%e6%9b%b4%e6%96%b0-%e6%8f%92%e4%bb%b6-webpack-dev-server)
    - [4.5 CSS提取插件 mini-css-extract-plugin](#45-css%e6%8f%90%e5%8f%96%e6%8f%92%e4%bb%b6-mini-css-extract-plugin)
    - [4.6 PostCSS插件 autoprefixer 自动补齐css前缀](#46-postcss%e6%8f%92%e4%bb%b6-autoprefixer-%e8%87%aa%e5%8a%a8%e8%a1%a5%e9%bd%90css%e5%89%8d%e7%bc%80)
    - [4.7 安装cross-env指定当前环境](#47-%e5%ae%89%e8%a3%85cross-env%e6%8c%87%e5%ae%9a%e5%bd%93%e5%89%8d%e7%8e%af%e5%a2%83)
    - [4.8 压缩 css](#48-%e5%8e%8b%e7%bc%a9-css)
    - [4.9 移动端 px2rem-loader插件](#49-%e7%a7%bb%e5%8a%a8%e7%ab%af-px2rem-loader%e6%8f%92%e4%bb%b6)
    - [4.10 友好错误提示插件 friendly-errors-webpack-plugin](#410-%e5%8f%8b%e5%a5%bd%e9%94%99%e8%af%af%e6%8f%90%e7%a4%ba%e6%8f%92%e4%bb%b6-friendly-errors-webpack-plugin)
    - [4.11 合并 webpack config 插件 webpack-merge](#411-%e5%90%88%e5%b9%b6-webpack-config-%e6%8f%92%e4%bb%b6-webpack-merge)
    - [4.12 拷贝资源插件 copy-webpack-plugin](#412-%e6%8b%b7%e8%b4%9d%e8%b5%84%e6%ba%90%e6%8f%92%e4%bb%b6-copy-webpack-plugin)
    - [4.13 HTML 插入 css 或者 js 插件html-webpack-tags-plugin](#413-html-%e6%8f%92%e5%85%a5-css-%e6%88%96%e8%80%85-js-%e6%8f%92%e4%bb%b6html-webpack-tags-plugin)
    - [4.14 tree shaking CSS 插件 purgecss-webpack-plugin (vue 文件暂不可用)](#414-tree-shaking-css-%e6%8f%92%e4%bb%b6-purgecss-webpack-plugin-vue-%e6%96%87%e4%bb%b6%e6%9a%82%e4%b8%8d%e5%8f%af%e7%94%a8)
  - [5.性能优化篇](#5%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%af%87)
    - [5.1 文件指纹策略](#51-%e6%96%87%e4%bb%b6%e6%8c%87%e7%ba%b9%e7%ad%96%e7%95%a5)
    - [5.2 静态资源内联](#52-%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90%e5%86%85%e8%81%94)
    - [5.3 多页面打包通用方案](#53-%e5%a4%9a%e9%a1%b5%e9%9d%a2%e6%89%93%e5%8c%85%e9%80%9a%e7%94%a8%e6%96%b9%e6%a1%88)
    - [5.4 开启 source-map](#54-%e5%bc%80%e5%90%af-source-map)
    - [5.5 提取公共基础库和公共脚本](#55-%e6%8f%90%e5%8f%96%e5%85%ac%e5%85%b1%e5%9f%ba%e7%a1%80%e5%ba%93%e5%92%8c%e5%85%ac%e5%85%b1%e8%84%9a%e6%9c%ac)
    - [5.6 tree shaking](#56-tree-shaking)
    - [5.7 scope hoisting](#57-scope-hoisting)
    - [5.8 代码分割与动态 import](#58-%e4%bb%a3%e7%a0%81%e5%88%86%e5%89%b2%e4%b8%8e%e5%8a%a8%e6%80%81-import)
    - [5.9 初级分析](#59-%e5%88%9d%e7%ba%a7%e5%88%86%e6%9e%90)
    - [5.10 速度分析](#510-%e9%80%9f%e5%ba%a6%e5%88%86%e6%9e%90)
    - [5.11 体积分析](#511-%e4%bd%93%e7%a7%af%e5%88%86%e6%9e%90)
    - [5.12 提高构建速度](#512-%e6%8f%90%e9%ab%98%e6%9e%84%e5%bb%ba%e9%80%9f%e5%ba%a6)
      - [5.12.1 使用高版本的 webpack 和 node.js](#5121-%e4%bd%bf%e7%94%a8%e9%ab%98%e7%89%88%e6%9c%ac%e7%9a%84-webpack-%e5%92%8c-nodejs)
      - [5.12.2 使用多进程/多实例构建](#5122-%e4%bd%bf%e7%94%a8%e5%a4%9a%e8%bf%9b%e7%a8%8b%e5%a4%9a%e5%ae%9e%e4%be%8b%e6%9e%84%e5%bb%ba)
      - [5.12.3 使用多进程/多实例压缩代码](#5123-%e4%bd%bf%e7%94%a8%e5%a4%9a%e8%bf%9b%e7%a8%8b%e5%a4%9a%e5%ae%9e%e4%be%8b%e5%8e%8b%e7%bc%a9%e4%bb%a3%e7%a0%81)
      - [5.12.4 DllPlugin 和 DllReferencePlugin 的分包](#5124-dllplugin-%e5%92%8c-dllreferenceplugin-%e7%9a%84%e5%88%86%e5%8c%85)
      - [5.12.5 利用缓存机制提升二次构建速度](#5125-%e5%88%a9%e7%94%a8%e7%bc%93%e5%ad%98%e6%9c%ba%e5%88%b6%e6%8f%90%e5%8d%87%e4%ba%8c%e6%ac%a1%e6%9e%84%e5%bb%ba%e9%80%9f%e5%ba%a6)
      - [5.12.6 减少文件搜索范围](#5126-%e5%87%8f%e5%b0%91%e6%96%87%e4%bb%b6%e6%90%9c%e7%b4%a2%e8%8c%83%e5%9b%b4)
  - [6. 扩展篇](#6-%e6%89%a9%e5%b1%95%e7%af%87)
    - [6.1 项目配置 ESlint 和 Prettier](#61-%e9%a1%b9%e7%9b%ae%e9%85%8d%e7%bd%ae-eslint-%e5%92%8c-prettier)
    - [6.2 在npm上发布基础库或者组件](#62-%e5%9c%a8npm%e4%b8%8a%e5%8f%91%e5%b8%83%e5%9f%ba%e7%a1%80%e5%ba%93%e6%88%96%e8%80%85%e7%bb%84%e4%bb%b6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 从零架构`webpack` + `vue` 项目

[toc]

> 前提条件：需要安装`node`,这里是使用`nvm`安装`node`，当然你也可以用其他方式安装。
>
> 1. 安装 `nvm`，[(macOS 下载)](https://github.com/nvm-sh/nvm)，[(windows 下载)](https://github.com/coreybutler/nvm-windows/releases)
> 2. 安装 `node`
>
>    e.g. `nvm install v12.13.1`

## 1. 安装 webpack

```bash
# 创建项目文件夹
mkdir project && cd project
# 快速初始化npm，默认配置
npm init -y
# 安装webpack、webpack-cli 至 devDependencies
npm i webpack webpack-cli -D
# 验证webpack安装成功
./node_modules/.bin/webpack -v
```

## 2. mode 详解

![mode_comments](https://jeno.oss-cn-shanghai.aliyuncs.com/web/webpack/mode_comments.png)

## 3. 安装常用的 Loaders

![loaders](https://jeno.oss-cn-shanghai.aliyuncs.com/web/webpack/css_loaders.png)

### 3.1 安装 babel-loader —— 启用 js 新语法的编译

> [参考官网 - Setup - Build systems - Webpack](https://babeljs.io/setup#installation)

3.1.1 安装 babel 所需依赖

> [参考配置@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

```bash
npm i @babel/core @babel/preset-env babel-loader -D
```

3.1.2 webpack.config 添加规则

```js
module: {
  rules: [{ test: /\.js$/, loader: "babel-loader" }];
}
```

3.1.3 创建 babel 配置文件

> 在项目根目录中创建一个`.babelrc`文件配置，使用默认配置，开启`ES2015+`的语法转换

```js
{
  "presets": ["@babel/preset-env"]
}
```

### 3.2 安装 css-loader

3.2.1 安装 css-loader 所需依赖

> 通常`style-loader`和`css-loader`一起使用

```bash
npm i style-loader css-loader -D
```

3.2.2 css-loader 规则配置

> loader 执行时链式调用，是从右到左一次调用，因此

```js
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ];
  }
}
```

### 3.3 安装 vue-loader

3.3.1 安装 vue-loader 所需依赖

> [参考官网](https://vue-loader.vuejs.org/zh/guide/)

安装开发依赖

```bash
npm i -D vue-loader vue-template-compiler
```

安装生产依赖

```bash
npm i vue -S
```

3.3.2 使用

> Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 vue-loader 应用到所有扩展名为 .vue 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件：

```js
// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
};
```

3.3.3 创建 App.vue 文件

```js
// App.vue
<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!"
    };
  }
};
</script>
```

3.3.4 修改 webpack 对应的入口文件(main.js)

```js
// main.js
import Vue from "vue";
import App from "./App.vue";

export default new Vue({
  render: h => h(App)
}).$mount("#app");
```

3.3.5 模板文件(index.html)中添加 DOM 节点 id="app"

```html
<div id="app"></div>
```

### 3.4 安装 sass-loader

3.4.1 安装 sass-loader 所需依赖

```bash
npm i sass-loader node-sass -D
```

3.4.2 sass-loader 规则配置

```js
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ];
  }
}
```

### 3.5 安装 less-loader

3.5.1 安装 less-loader 所需依赖

```bash
npm i less less-loader -D
```

3.5.2 less-loader 规则配置

```js
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      }
    ];
  }
}
```

### 3.6 安装 file-loader

3.6.1 安装 file-loader 所需依赖

```bash
npm i file-loader -D
```

3.6.2 file-loader 规则配置

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
        loader: "file-loader",
        options: {
          esModule: false, // 解决引入图片为Object[Module]的问题
          name: "[name].[ext]", // 设置原来的文件名、后缀，默认是hash+后缀
          outputPath: "images/", // 打包后存放的目录名
          publicPath: "./images" // 引入的前缀目录名，和outputPath一致
        }
      }
    ]
  }
};
```

### 3.7 安装 url-loader

> `url-loader` 工作类似于 `file-loader` ,在 f`ile-loader` 基础上多了额外的功能，根据文件字节的大小，是否使用 `DateURL`(文件内联)

3.7.1 安装

```bash
npm i url-loader -D
```

3.7.2 使用

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
        loader: "url-loader",
        options: {
          limit: 8192, // 单位字节
          // 超出limit后的备用加载程序，默认是file-loader
          fallback: {
            loader: "file-loader"
          }
        }
      }
    ]
  }
};
```

## 4. 安装常用的 Plugins

### 4.1 babel 插件 `@babel/plugin-transform-runtime`

[参考官网](https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs)

> 你也可以使用`@babel/polyfill`,但是会出现一些副作用，比如：添加了一些全局对象、修改了一些原型链、还会覆盖你自定义的`Array.from`方法  
> 该插件作用是将 `es6` 语法转译的方法，单独抽出来，作为模块导入，避免了出现覆盖的情况，因此这个插件完全替代了`@babel/polyfill`，

4.1.1 安装开发环境依赖

```bash
npm i @babel/plugin-transform-runtime -D
```

4.1.2 安装生产环境依赖

从`corejs3`开始才有`Array.includes`的`polyfill`，所以最好安装`corejs3`

```bash
npm i @babel/runtime @babel/runtime-corejs3 -S
```

4.1.3 用法

在`.babelrc`配置文件中，添加 `@babel/plugin-transform-runtime`，并指定`corejs` 为 3。

```js
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3,
      }
    ]
  ]
}
```

### 4.2 HTML 模板插件 `html-webpack-plugin`

4.2.1 安装开发环境依赖

```bash
npm i html-webpack-plugin -D
```

4.2.2 用法

```js
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
{
  plugins: [
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
    })
  ];
}
```

### 4.3 清理插件 `clean-webpack-plugin`

4.3.1 安装开发环境依赖

```bash
npm i clean-webpack-plugin -D
```

4.3.2 用法

```js
// webpack.config.js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
{
  plugins: [new CleanWebpackPlugin()];
}
```

### 4.4 热更新 插件 `webpack-dev-server`

> [参考链接 1](https://webpack.js.org/configuration/dev-server/)  
> [参考链接 2](https://webpack.js.org/guides/hot-module-replacement/)  
> 提示：另一种实现热更新的方式，可以使用`webpack-dev-middleware` 结合 `node` 服务器(`express`或者`koa`)来实现，这里就跳过了。

4.4.1 安装开发环境依赖

```bash
npm i webpack-dev-server -D
```

4.4.2 配置 package.json

```json
{
  "scripts": {
    "dev": "webpack-dev-server --open"
  }
}
```

4.4.3 配置 webpack.config.js

```js
{
  plugins: [
    // 开启热更新 (可省略不要)
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: 8080,
    compress: true //启用gzip压缩：
  }
};
```

4.4.4 使用

```bash
npm run dev
```

### 4.5 `CSS`提取插件 `mini-css-extract-plugin`

4.5.1 安装开发环境依赖

```bash
npm i mini-css-extract-plugin -D
```

4.5.2 用法

> 该插件是将 css 样式提取出独立的 css 文件，而`style-loader`是将 css 样式直接插入到`head`中，所以需要替换`style-loader`  
> [参考链接](https://webpack.js.org/plugins/mini-css-extract-plugin/)

```js
// webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
{
 module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // 在开发模式中开启MiniCssExtractPlugin.loader
                hmr: process.env.NODE_ENV === "development",
                // if hmr does not work, this is a forceful method.
                reloadAll: true
              }
            },
            "css-loader"
        ]
      }
    ]
  },
  plugins: [
    // 提取css
    // 文件名前加文件前缀，就可以指定放在文件夹内
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:8].css"
    })
  ]
}
```

### 4.6 `PostCSS`插件 `autoprefixer` 自动补齐`css`前缀

4.6.1 安装开发环境依赖

```bash
npm i postcss-loader autoprefixer -D
```

4.6.2 使用

配置 webpack.config.js

```js
{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      }
    ];
  }
}
```

根目录下添加 `postcss.config.js` 文件，给`postcss`添加插件`autoprefixer`

```js
module.exports = {
  plugins: {
    autoprefixer: {}
  }
};
```

根目录下添加 `.browserslistrc` 文件 或者在 `package.json` 文件中添加 `key` 为 `browserslist`，内容为 `String` 数组。用来配置浏览器兼容版本，兼容性是依据网站[caniuse](https://caniuse.com/)，兼容配置参数[参考链接](https://github.com/browserslist/browserslist#queries)

```bash
# .browserslistrc
> 1%
last 2 versions
not ie <= 8
```

### 4.7 安装`cross-env`指定当前环境

> 安装了`cross-env`，就可以在 webpack 编译期间指定开发环境或者是生成环境的处理  
> e.g. if(process.env.NODE_ENV === "development") { // TODO }

4.7.1 安装开发环境依赖

```bash
npm i cross-env -D
```

4.7.2 使用

package.json

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config webpack.prod.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.dev.js --open"
  }
}
```

### 4.8 压缩 css

4.8.1 安装开发环境依赖

```bash
npm i -D optimize-css-assets-webpack-plugin
```

4.8.2 用法

webpack.config.js

```js
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

{
  plugins: [new OptimizeCssAssetsPlugin()];
}
```

### 4.9 移动端 `px2rem-loader`插件

4.9.1 安装开发环境依赖

```bash
npm i -D px2rem-loader
```

4.9.2 安装生产环境依赖

根据设备宽高计算根元素的 fontSize 的大小，这里是手淘的一套成熟的方案。

```bash
npm i -S lib-flexible
```

4.9.3 使用

webpack.config.js

```js
{
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
          {
            loader: "px2rem-loader",
            options: {
              remUnit: 75, // 1rem = 75px
              remPrecision: 8 // 转换成rem，保留8位小数
            }
          }
        ]
      }
    ];
  }
}
```

在模板文件 `index.html` 中手动复制 `flexible.js` 的内容到 `script` 标签中，后面性能优化中会有更优雅的方式导入。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script>
      /* 这里是 flexible.js 的文本内容 */
    </script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### 4.10 友好错误提示插件 `friendly-errors-webpack-plugin`

4.10.1 安装

```bash
npm i -D friendly-errors-webpack-plugin
```

4.10.2 使用

```js
//webpack.config.js
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  plugins: [new FriendlyErrorsWebpackPlugin()]
};
```

### 4.11 合并 `webpack config` 插件 `webpack-merge`

4.11.1 安装

```bash
npm i -D webpack-merge
```

4.11.2 使用

```js
//webpack.dev.js
const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("webpack.base.js");

module.exports = webpackMerge(webpackBaseConfig, {
  mode: "development",
  plugins: [
    //...
  ]
});
```

### 4.12 拷贝资源插件 `copy-webpack-plugin`

4.12.1 安装

```bash
npm i copy-webpack-plugin -D
```

4.12.2 使用

```js
// webpack.config.js
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  plugins: [
    // 将依赖包直接拷贝到打包目录中
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "node_modules/lib.js"),
        to: path.join(__dirname, "dist/lib.js")
      }
    ])
  ]
};
```

### 4.13 `HTML` 插入 `css` 或者 `js` 插件`html-webpack-tags-plugin`

> 该插件依赖于 `html-webpack-plugin`，因此必须在 `html-webpack-plugin` 实例化之后再调用。

4.13.1 安装

```bash
npm i html-webpack-tags-plugin -D
```

4.13.2 使用

```js
//webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackTagsPlugin({
      tags: ["lib/lib.js"], // 默认资源路径是webpack输出目录(dist) 添加到script 标签的 src
      append: false // 在入口js之前插入,如果为true，会在之后插入
    })
  ]
};
```

### 4.14 tree shaking CSS 插件 `purgecss-webpack-plugin` (`vue` 文件暂不可用)

1. 安装

```bash
npm i purgecss-webpack-plugin -D
```

2. 使用

```js
// webpack.config.js
const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src")
};
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
  ]
};
```

## 5.性能优化篇

### 5.1 文件指纹策略

> webpack 中有三种文件指纹：`hash`，`chunkhash`，`contenthash`，它们都是`md5`生成的。

1. `hash`——文件内容哈希，只要文件内容修改，哈希值就会改变。
2. `chunkhash`——如果 `webpack` 配置有多个入口，如果一个入口内的文件内容被修改，那么所有的输出文件的哈希都会被修改，这时候就会用到`chunkhash`。
3. `contenthash`——`webpack` 在打包的时候，会在 `js` 中导入 `css` 文件，如果改了 `js` 内容，抽出来的 `css` 文件的哈希也会改变，这时候就会用到`contenthash`

> 总结：(大部分情况下)  
> `file-loader`输出的文件名使用`hash`  
> `webpack`输出 `js` 文件名使用`chunkhash`  
> `css`文件名使用`contenthash`

### 5.2 静态资源内联

> 使用案例，页面基础样式、初始化脚本、抽取多页面中公共的 `meta` 信息，优点如下：  
> 减少 `HTTP` 网络请求  
> `css` 内联避免页面闪动

安装 `raw-loader`，指定版本 0.5.1，因为 0.5.1 之后的版本导出方式不一样(`export default`)

```bash
npm i -D raw-loader@0.5.1
```

在模板文件中使用：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script>
      ${ require('raw-loader!babel-loader!../node_modules/data-pick/index.js')}
    </script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### 5.3 多页面打包通用方案

1. 首先将每个页面的资源放在各自的文件夹下面

```txt
project
├─src
|  ├─pages
|  |   ├─mine
|  |   |  ├─Mine.vue
|  |   |  ├─index.html
|  |   |  └index.js
|  |   ├─index
|  |   |   ├─Index.vue
|  |   |   ├─index.html
|  |   |   └index.js
```

2. 安装 `glob` 工具

```bash
npm i -D glob
```

3. `glob`的使用

webpack.config.js

```js
const glob = require("glob");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    //配置入口文件对象
    entry[pathname] = entryFil;
    //配置html-webpack-plugin
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/pages/${pathname}/index.html`),
        filename: `pages/${pathname}.html`,
        chunks: [pathname],
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
};

const { entry, htmlWebpackPlugins } = setMpa();
module.exports = {
  // other
  entry,
  plugins: [].concat(htmlWebpackPlugins)
};
```

### 5.4 开启 source-map

> 在开发环境中开启`source-map`，方便开发调试，快速定位。

webpack.config.js

```js
{
  devtool: "source-map";
}
```

### 5.5 提取公共基础库和公共脚本

1. 安装插件 `html-webpack-externals-plugin`

> 抽离基础库，可以指定本地资源库 或者 是 `cdn`

```bash
npm i html-webpack-externals-plugin -D
```

2. 使用插件

webpack.config.js

```js
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

{
  plugins: [
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: "vue",
          entry: "//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js",
          global: "Vue"
        }
      ]
    })
  ];
}
```

3. 公共脚本分离

webpack.config.js

```js
{
  optimization: {
    splitChunks: {
      minSize: 0, // 最小脚本大小
      cacheGroups: {
        // 基础库分离
        vendors: {
          test: /(vue|vuex|vue-router)/,
          name: "vendors",
          chunks: "all"
        },
        // 公共脚本分离
        commons: {
          name: "commons",
          chunks: "all", // 同步引入和异步引入的脚本都会被分离
          minChunks: 2 // 引用两次以上
        }
      }
    }
  }
}
```

4. 将抽离出来的公共脚本插入到 `html` 中

```js
{
  plugins: [
    // html 模板,及压缩html
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["vendors", "commons", "index"]
    })
  ];
}
```

### 5.6 tree shaking

> 如果一个模块中只用到了一个方法，就只要打包这一个方法。  
> 如果遇到 `Dead code`，e.g. `if(false) console.log('这里不会被打包')`，那么也不需要打包。  
> `webpack4` 开始，只要设置`mode = production` 默认开启。  
> 注意：只有使用 `es6` 语法，`webpack` 才能作 `tree shaking` 的处理  
> [参考文献](https://webpack.js.org/guides/tree-shaking/#root)

### 5.7 scope hoisting

> 避免 `webpack` 打包出现多层函数作用域的问题(多层闭包)，导致内存开销变大。  
> `scope hoisting`是将所有模块的代码按照引⽤顺序放在⼀一个函数作用域里，减少闭包和内存开销。  
> `webpack4` 开始，只要设置`mode = production` 默认开启。  
> 注意：只适用 `es6` 语法  
> [参考文献](https://webpack.js.org/plugins/module-concatenation-plugin/#root)

### 5.8 代码分割与动态 `import`

后续在添加路由的时候补充。

### 5.9 初级分析

> webpack 提供打包阶段的分析输出，通过 `stats` 选项配置来指定输出内容

```js
// webpack.confign.js
{
  stats: "error-only";
}
```

选项参数配置

|       设置        | 替代设置 | 描述                 |
| :---------------: | :------: | :------------------- |
|   'errors-only'   |    无    | 仅当错误时输出       |
| 'errors-warnings' |    无    | 仅当警告和错误时输出 |
|     'minimal'     |    无    | 仅当编译和错误时输出 |
|      'none'       |  false   | 没有任何输出         |
|     'normal'      |   true   | 标准输出             |
|     'verbose'     |   none   | 输出所有             |

### 5.10 速度分析

> 使用插件 `speed-measure-webpack-plugin` 帮助我们分析每个 `plugin` 和 `loader` 的执行时间

安装

```bash
npm i -D speed-measure-webpack-plugin
```

使用

```js
// webpack.config.js
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap({
  plugins: [new MyPlugin(), new MyOtherPlugin()]
});
```

### 5.11 体积分析

> 使用插件 `webpack-bundle-analyzer`，帮助我们分析第三方模块的大小和业务组件的大小。

> 体积过大的解决方案有：
>
> 1. 代码压缩
> 2. 抽取公共代码
> 3. 拆包，没有用到的资源不需要打包
> 4. 采取基础库按需加载
> 5. 采取组件懒加载
> 6. 使用基础库 `cdn`

安装

```bash
npm i -D webpack-bundle-analyzer
```

使用

```js
//webpack.config.js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [new BundleAnalyzerPlugin()]
};
```

### 5.12 提高构建速度

#### 5.12.1 使用高版本的 `webpack` 和 `node.js`

#### 5.12.2 使用多进程/多实例构建

> 使用`thread-loader`来开启多线程

安装

```bash
npm i -D thread-loader
```

使用

```js
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: 3 //开启3个线程
            }
          },
          "babel-loader"
        ]
      }
    ];
  }
}
```

#### 5.12.3 使用多进程/多实例压缩代码

> 使用 `terser-webpack-plugin` 来压缩代码并通过参数配置开启多线程

安装

```bash
npm i -D terser-webpack-plugin
```

使用

```js
// webpack.config.js
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 开启线程
        parallel: 4 // Boolean/Number
      })
    ]
  }
};
```

#### 5.12.4 `DllPlugin` 和 `DllReferencePlugin` 的分包

> 使用 `DllPlugin` 和 `DllReferencePlugin` 进行分包处理，将必不可少的第三方基础库或者业务基础库先打包出来，然后项目在构建打包的时候，就不用再打包基础库，只要打包相关业务代码即可，大大提高构建速度。  
> 因为 `DllPlugin` 和 `DllReferencePlugin` 两个插件是 `webpack` 自带的，所以无需安装下载  
> 缺点：全量打包引入，不能移除未引用的代码(tree shaking)

1. 根目录创建 `webpack.dll.js`

> 首先通过 `DllPlugin` 生成基础库 `xxx.dll.js` 和 `manifest.json`

```js
// webpack.dll.js
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    library: {
      // 必不可少的基础库
      library: ["vue"],
      // 必不可少的业务基础库(例如初始化脚本等等)
      business: ["./src/utils/base.js"]
    }
  },
  output: {
    filename: "[name]_[chunkhash:8].dll.js",
    path: path.join(__dirname, "build/lib"),
    library: "[name]_[chunkhash:8]"
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.join(__dirname, "build/lib"),
      name: "[name]_[chunkhash:8]", // 需要与输入的全局变量名称一样(output-library)
      path: path.join(__dirname, "build/lib", "[name].json")
    })
  ]
};
```

2. 生产构建使用`DllReferencePlugin` 声明 `manifest.json` 指向

```js
// webpack.prod.js
module.exports = {
  plugins: [
    // 有几个入口，就对应几个 DllReferencePlugin 实例
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, "build/lib"), // 这里的上下文必须与DllPlugin的上下文统一
      manifest: require(path.join(__dirname, "build/lib", "library.json"))
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, "build/lib"),
      manifest: require(path.join(__dirname, "build/lib", "business.json"))
    })
  ]
};
```

#### 5.12.5 利用缓存机制提升二次构建速度

1. 开启 `babel-loader` 缓存

```js
//webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: ["babel-loader?cacheDirectory=true"]
      }
    ]
  }
};
```

2. 开启 `terser-webpack-plugin` 压缩缓存

```js
//webpack.config.js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        cache: true // 开启构建缓存
      })
    ]
  }
};
```

3. 使用插件 `hard-source-webpack-plugin` 缓存

安装

```bash
npm i -D hard-source-webpack-plugin
```

使用

```js
// webpack.config.js
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  plugins: [new HardSourceWebpackPlugin()]
};
```

#### 5.12.6 减少文件搜索范围

1. `babel-loader` 解析缩小范围
2. 优化 `resolve.modules` 配置(减少模块搜索层级)
3. 优化 `resolve.mainFields` 配置
4. 优化 `resolve.extensions` 配置
5. 合理使用 `alias`

```js
//webpack.config.js
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // 只编译src目录下的文件
        include: path.join(__dirname, "src"),
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      // 指定vue的路径
      vue: path.resolve(__dirname, "./node_modules/vue/dist/vue.min.js")
    },
    // 第三方模块 指定在node_modules目录中查找
    modules: [path.resolve(__dirname, "node_modules")],
    // 后缀名只查找.js的文件
    extensions: [".js"],
    // 入口文件名包含main的文件
    mainFields: ["main"]
  }
};
```

## 6. 扩展篇

### 6.1 项目配置 `ESlint` 和 `Prettier`

> `ESLint` & `Prettier` 的工作描述

- `ESLint` 负责代码规则校验，检查代码是否符合代码规范的工具。
- `Prettier` 负责代码风格，代码样式的调整。

只使用`eslint -fix` 调整风格，其中的缺点如下：

1. 每种编辑器会有不一样的代码格式，而且配置会比较麻烦。
2. `prettier` 已经逐渐成为业界主流的代码风格格式化工具。
3. 减轻 `eslint` 等工具的校验规则，因为将代码样式校验交给了 `prettier`，所以可以将代码校验的规则更准确地应用到代码真正的规范上面。

> 这里使用的是腾讯团队 `AlloyTeam` 出版的 `eslint-config-alloy`  
> [参考链接](https://github.com/AlloyTeam/eslint-config-alloy)

1. 安装 `ESlint` 相关依赖

```bash
npm i -D eslint babel-eslint vue-eslint-parser@5.0.0 eslint-plugin-vue eslint-config-alloy
```

2. 安装 `prettier` 相关插件

> eslint-config-alloy do not include all style-related rules in v3, so there is no need to install eslint-config-prettier. Just install prettier and related VSCode plugins.

```bash
npm i -D prettier prettier-eslint-cli eslint-plugin-prettier
```

3. 在根目录创建 `.eslintrc.js`，添加插件

```js
module.exports = {
  plugins: ['vue', 'prettier'],
  extends: extends: ['alloy', 'alloy/vue', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
  }
};
```

4. 在根目录下创建 `.prettierrc.js`

```js
// 根据个人审美，自己配置
module.exports = {
  // max 100 characters per line
  printWidth: 100,
  // use 4 spaces for indentation
  tabWidth: 4,
  // use spaces instead of indentations
  useTabs: false,
  // semicolon at the end of the line
  semi: true,
  // use single quotes
  singleQuote: true,
  // object's key is quoted only when necessary
  quoteProps: "as-needed",
  // use double quotes instead of single quotes in jsx
  jsxSingleQuote: false,
  // no comma at the end
  trailingComma: "none",
  // spaces are required at the beginning and end of the braces
  bracketSpacing: true,
  // end tag of jsx need to wrap
  jsxBracketSameLine: false,
  // brackets are required for arrow function parameter, even when there is only one parameter
  arrowParens: "always",
  // format the entire contents of the file
  rangeStart: 0,
  rangeEnd: Infinity,
  // no need to write the beginning @prettier of the file
  requirePragma: false,
  // No need to automatically insert @prettier at the beginning of the file
  insertPragma: false,
  // use default break criteria
  proseWrap: "preserve",
  // decide whether to break the html according to the display style
  htmlWhitespaceSensitivity: "css",
  // lf for newline
  endOfLine: "lf"
};
```

5. 其他可选依赖

```bash
npm i -D babel-plugin-import eslint-loader eslint-plugin-html eslint-plugin-import
```

### 6.2 在`npm`上发布基础库或者组件

1. 初始化项目结构

```bash
npm init -y
```

2. 安装 `webpack` `webpack-cli`

```bash
npm i -D webpack webpack-cli
```

3. 安装压缩插件 `terser-webpack-plugin`

```bash
npm i -D terser-webpack-plugin
```

4. 编写基础库代码

根目录创建 `src` 目录，接着在 `src` 目录创建 `index.js` 文件(用作基础库的入口文件)，导出基础库

5. 配置 webpack

根目录创建 webpack.config.js

> 这里 `output` 的配置，兼容多规范的使用，比如 `RequireJS` , `CommonJs` , `ES module` , `HTML`中都可以引入使用

```js
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: {
    "data-pick": "./src/index.js",
    "data-pick.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    library: "DataPick",
    libraryTarget: "umd",
    libraryExport: "default",
    // 解决 node environment (commonjs) 的问题  见 issues https://github.com/webpack/webpack/issues/6784
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};
```

6. 创建入口文件

`npm` 包默认入口文件是根目录下的 `index.js`(这里是 `npm` 项目的入口文件)，因此在根目录创建 index.js, 导出打包后的基础库压缩文件

```js
// index.js
module.exports = require("./dist/data-pick.min.js");
```

7. 增加执行脚本和入口文件

package.json

```json
{
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "prepublish": "webpack"
  }
}
```

8. 发布

```bash
npm publish
```
