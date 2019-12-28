<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [从零架构webpack + vue 项目](#%e4%bb%8e%e9%9b%b6%e6%9e%b6%e6%9e%84webpack--vue-%e9%a1%b9%e7%9b%ae)
  - [1. 安装 webpack](#1-%e5%ae%89%e8%a3%85-webpack)
  - [2. mode 详解](#2-mode-%e8%af%a6%e8%a7%a3)
  - [3. 安装常用的 Loaders](#3-%e5%ae%89%e8%a3%85%e5%b8%b8%e7%94%a8%e7%9a%84-loaders)
    - [3.1 安装 babel-loader —— 启用 js 新语法的编译](#31-%e5%ae%89%e8%a3%85-babel-loader--%e5%90%af%e7%94%a8-js-%e6%96%b0%e8%af%ad%e6%b3%95%e7%9a%84%e7%bc%96%e8%af%91)
      - [3.1.1 安装 babel 所需依赖](#311-%e5%ae%89%e8%a3%85-babel-%e6%89%80%e9%9c%80%e4%be%9d%e8%b5%96)
      - [3.1.2 webpack.config 添加规则](#312-webpackconfig-%e6%b7%bb%e5%8a%a0%e8%a7%84%e5%88%99)
      - [3.1.3 创建 babel 配置文件](#313-%e5%88%9b%e5%bb%ba-babel-%e9%85%8d%e7%bd%ae%e6%96%87%e4%bb%b6)
    - [3.2 安装 css-loader](#32-%e5%ae%89%e8%a3%85-css-loader)
      - [3.2.1 安装 css-loader 所需依赖](#321-%e5%ae%89%e8%a3%85-css-loader-%e6%89%80%e9%9c%80%e4%be%9d%e8%b5%96)
      - [3.2.2 css-loader 规则配置](#322-css-loader-%e8%a7%84%e5%88%99%e9%85%8d%e7%bd%ae)
    - [3.3 安装 vue-loader](#33-%e5%ae%89%e8%a3%85-vue-loader)
      - [3.3.1 安装 vue-loader 所需依赖](#331-%e5%ae%89%e8%a3%85-vue-loader-%e6%89%80%e9%9c%80%e4%be%9d%e8%b5%96)
      - [3.3.2 使用](#332-%e4%bd%bf%e7%94%a8)
      - [3.3.2 创建 App.vue 文件](#332-%e5%88%9b%e5%bb%ba-appvue-%e6%96%87%e4%bb%b6)
      - [3.3.3 修改 webpack 对应的入口文件(main.js)](#333-%e4%bf%ae%e6%94%b9-webpack-%e5%af%b9%e5%ba%94%e7%9a%84%e5%85%a5%e5%8f%a3%e6%96%87%e4%bb%b6mainjs)
      - [3.3.4 模板文件(index.html)中添加 DOM 节点 id=&quot;app&quot;](#334-%e6%a8%a1%e6%9d%bf%e6%96%87%e4%bb%b6indexhtml%e4%b8%ad%e6%b7%bb%e5%8a%a0-dom-%e8%8a%82%e7%82%b9-idquotappquot)
    - [3.4 安装 sass-loader](#34-%e5%ae%89%e8%a3%85-sass-loader)
      - [3.4.1 安装 sass-loader 所需依赖](#341-%e5%ae%89%e8%a3%85-sass-loader-%e6%89%80%e9%9c%80%e4%be%9d%e8%b5%96)
      - [3.4.2 sass-loader 规则配置](#342-sass-loader-%e8%a7%84%e5%88%99%e9%85%8d%e7%bd%ae)
    - [3.5 安装 less-loader](#35-%e5%ae%89%e8%a3%85-less-loader)
      - [3.5.1 安装 less-loader 所需依赖](#351-%e5%ae%89%e8%a3%85-less-loader-%e6%89%80%e9%9c%80%e4%be%9d%e8%b5%96)
      - [3.5.2 less-loader 规则配置](#352-less-loader-%e8%a7%84%e5%88%99%e9%85%8d%e7%bd%ae)
    - [3.6 安装 file-loader](#36-%e5%ae%89%e8%a3%85-file-loader)
      - [3.6.1 安装 file-loader 所需依赖](#361-%e5%ae%89%e8%a3%85-file-loader-%e6%89%80%e9%9c%80%e4%be%9d%e8%b5%96)
      - [3.6.2 file-loader 规则配置](#362-file-loader-%e8%a7%84%e5%88%99%e9%85%8d%e7%bd%ae)
  - [4. 安装常用的 Plugins](#4-%e5%ae%89%e8%a3%85%e5%b8%b8%e7%94%a8%e7%9a%84-plugins)
    - [4.1 babel 插件 @babel/plugin-transform-runtime](#41-babel-%e6%8f%92%e4%bb%b6-babelplugin-transform-runtime)
      - [4.1.1 安装开发环境依赖](#411-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.1.2 安装生产环境依赖](#412-%e5%ae%89%e8%a3%85%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.1.3 用法](#413-%e7%94%a8%e6%b3%95)
    - [4.2 HTML 模板插件 html-webpack-plugin](#42-html-%e6%a8%a1%e6%9d%bf%e6%8f%92%e4%bb%b6-html-webpack-plugin)
      - [4.2.1 安装开发环境依赖](#421-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.2.2 用法](#422-%e7%94%a8%e6%b3%95)
    - [4.3 清理插件 clean-webpack-plugin](#43-%e6%b8%85%e7%90%86%e6%8f%92%e4%bb%b6-clean-webpack-plugin)
      - [4.3.1 安装开发环境依赖](#431-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.3.2 用法](#432-%e7%94%a8%e6%b3%95)
    - [4.4 热更新 插件 webpack-dev-server](#44-%e7%83%ad%e6%9b%b4%e6%96%b0-%e6%8f%92%e4%bb%b6-webpack-dev-server)
      - [4.4.1 安装开发环境依赖](#441-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.4.2 配置 package.json](#442-%e9%85%8d%e7%bd%ae-packagejson)
      - [4.4.3 配置 webpack.config.js](#443-%e9%85%8d%e7%bd%ae-webpackconfigjs)
      - [4.4.4 使用](#444-%e4%bd%bf%e7%94%a8)
    - [4.5 CSS提取插件 mini-css-extract-plugin](#45-css%e6%8f%90%e5%8f%96%e6%8f%92%e4%bb%b6-mini-css-extract-plugin)
      - [4.5.1 安装开发环境依赖](#451-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.5.2 用法](#452-%e7%94%a8%e6%b3%95)
    - [4.6 PostCSS插件 autoprefixer 自动补齐css前缀](#46-postcss%e6%8f%92%e4%bb%b6-autoprefixer-%e8%87%aa%e5%8a%a8%e8%a1%a5%e9%bd%90css%e5%89%8d%e7%bc%80)
      - [4.6.1 安装开发环境依赖](#461-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.6.2 使用](#462-%e4%bd%bf%e7%94%a8)
    - [4.7 安装cross-env指定当前环境](#47-%e5%ae%89%e8%a3%85cross-env%e6%8c%87%e5%ae%9a%e5%bd%93%e5%89%8d%e7%8e%af%e5%a2%83)
      - [4.7.1 安装开发环境依赖](#471-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.7.2 使用](#472-%e4%bd%bf%e7%94%a8)
    - [4.8 压缩 css](#48-%e5%8e%8b%e7%bc%a9-css)
      - [4.8.1 安装开发环境依赖](#481-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.8.2 用法](#482-%e7%94%a8%e6%b3%95)
    - [4.9 移动端 px2rem-loader插件](#49-%e7%a7%bb%e5%8a%a8%e7%ab%af-px2rem-loader%e6%8f%92%e4%bb%b6)
      - [4.9.1 安装开发环境依赖](#491-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.9.2 安装生产环境依赖](#492-%e5%ae%89%e8%a3%85%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.9.3 使用](#493-%e4%bd%bf%e7%94%a8)
  - [5.性能优化篇](#5%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%af%87)
    - [5.1 文件指纹策略](#51-%e6%96%87%e4%bb%b6%e6%8c%87%e7%ba%b9%e7%ad%96%e7%95%a5)
    - [5.2 静态资源内联](#52-%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90%e5%86%85%e8%81%94)
    - [5.3 多页面打包通用方案](#53-%e5%a4%9a%e9%a1%b5%e9%9d%a2%e6%89%93%e5%8c%85%e9%80%9a%e7%94%a8%e6%96%b9%e6%a1%88)
    - [5.4 开启 source-map](#54-%e5%bc%80%e5%90%af-source-map)
    - [5.5 提取公共基础库和公共脚本](#55-%e6%8f%90%e5%8f%96%e5%85%ac%e5%85%b1%e5%9f%ba%e7%a1%80%e5%ba%93%e5%92%8c%e5%85%ac%e5%85%b1%e8%84%9a%e6%9c%ac)
    - [5.6 tree shaking](#56-tree-shaking)
    - [5.7 scope hoisting](#57-scope-hoisting)
    - [5.8 代码分割与动态 import](#58-%e4%bb%a3%e7%a0%81%e5%88%86%e5%89%b2%e4%b8%8e%e5%8a%a8%e6%80%81-import)
  - [6. 扩展篇](#6-%e6%89%a9%e5%b1%95%e7%af%87)
    - [6.1 项目配置 ESlit 和 Prettier](#61-%e9%a1%b9%e7%9b%ae%e9%85%8d%e7%bd%ae-eslit-%e5%92%8c-prettier)
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

#### 3.1.1 安装 babel 所需依赖

> [参考配置@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

```bash
npm i @babel/core @babel/preset-env babel-loader -D
```

#### 3.1.2 webpack.config 添加规则

```js
module: {
  rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }];
}
```

#### 3.1.3 创建 babel 配置文件

> 在项目根目录中创建一个`.babelrc`文件配置，使用默认配置，开启`ES2015+`的语法转换

```js
{
  "presets": ["@babel/preset-env"]
}
```

### 3.2 安装 css-loader

#### 3.2.1 安装 css-loader 所需依赖

> 通常`style-loader`和`css-loader`一起使用

```bash
npm i style-loader css-loader -D
```

#### 3.2.2 css-loader 规则配置

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

#### 3.3.1 安装 vue-loader 所需依赖

> [参考官网](https://vue-loader.vuejs.org/zh/guide/)

安装开发依赖

```bash
npm i -D vue-loader vue-template-compiler
```

安装生产依赖

```bash
npm i vue -S
```

#### 3.3.2 使用

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

#### 3.3.2 创建 App.vue 文件

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

#### 3.3.3 修改 webpack 对应的入口文件(main.js)

```js
// main.js
import Vue from "vue";
import App from "./App.vue";

export default new Vue({
  render: h => h(App)
}).$mount("#app");
```

#### 3.3.4 模板文件(index.html)中添加 DOM 节点 id="app"

```html
<div id="app"></div>
```

### 3.4 安装 sass-loader

#### 3.4.1 安装 sass-loader 所需依赖

```bash
npm i sass-loader node-sass -D
```

#### 3.4.2 sass-loader 规则配置

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

#### 3.5.1 安装 less-loader 所需依赖

```bash
npm i less less-loader -D
```

#### 3.5.2 less-loader 规则配置

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

#### 3.6.1 安装 file-loader 所需依赖

```bash
npm i file-loader -D
```

#### 3.6.2 file-loader 规则配置

```js
// webpack.config.js
{
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
    ];
  }
}
```

## 4. 安装常用的 Plugins

### 4.1 babel 插件 `@babel/plugin-transform-runtime`

[参考官网](https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs)

> 你也可以使用`@babel/polyfill`,但是会出现一些副作用，比如：添加了一些全局对象、修改了一些原型链、还会覆盖你自定义的`Array.from`方法  
> 该插件作用是将 `es6` 语法转译的方法，单独抽出来，作为模块导入，避免了出现覆盖的情况，因此这个插件完全替代了`@babel/polyfill`，

#### 4.1.1 安装开发环境依赖

```bash
npm i @babel/plugin-transform-runtime -D
```

#### 4.1.2 安装生产环境依赖

从`corejs3`开始才有`Array.includes`的`polyfill`，所以最好安装`corejs3`

```bash
npm i @babel/runtime @babel/runtime-corejs3 -S
```

#### 4.1.3 用法

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

#### 4.2.1 安装开发环境依赖

```bash
npm i html-webpack-plugin -D
```

#### 4.2.2 用法

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

#### 4.3.1 安装开发环境依赖

```bash
npm i clean-webpack-plugin -D
```

#### 4.3.2 用法

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

#### 4.4.1 安装开发环境依赖

```bash
npm i webpack-dev-server -D
```

#### 4.4.2 配置 package.json

```json
{
  "scripts": {
    "dev": "webpack-dev-server --open"
  }
}
```

#### 4.4.3 配置 webpack.config.js

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

#### 4.4.4 使用

```bash
npm run dev
```

### 4.5 `CSS`提取插件 `mini-css-extract-plugin`

#### 4.5.1 安装开发环境依赖

```bash
npm i mini-css-extract-plugin -D
```

#### 4.5.2 用法

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

#### 4.6.1 安装开发环境依赖

```bash
npm i postcss-loader autoprefixer -D
```

#### 4.6.2 使用

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

#### 4.7.1 安装开发环境依赖

```bash
npm i cross-env -D
```

#### 4.7.2 使用

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

#### 4.8.1 安装开发环境依赖

```bash
npm i -D optimize-css-assets-webpack-plugin
```

#### 4.8.2 用法

webpack.config.js

```js
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

{
  plugins: [new OptimizeCssAssetsPlugin()];
}
```

### 4.9 移动端 `px2rem-loader`插件

#### 4.9.1 安装开发环境依赖

```bash
npm i -D px2rem-loader
```

#### 4.9.2 安装生产环境依赖

根据设备宽高计算根元素的 fontSize 的大小，这里是手淘的一套成熟的方案。

```bash
npm i -S lib-flexible
```

#### 4.9.3 使用

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

## 6. 扩展篇

### 6.1 项目配置 `ESlit` 和 `Prettier`

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

2. 在根目录创建 `.eslintrc.js`，添加插件

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

3. 安装 `prettier` 相关插件

> eslint-config-alloy do not include all style-related rules in v3, so there is no need to install eslint-config-prettier. Just install prettier and related VSCode plugins.

```bash
npm i -D prettier prettier-eslint-cli eslint-plugin-prettier
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

根目录创建 `src` 目录，接着创建 `index.js` 入口文件，导出基础库

6. 配置 webpack

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

1. 创建入口文件

`npm` 包默认入口文件是根目录下的 `index.js`，因此在根目录创建 index.js, 导出打包后的基础库压缩文件

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
