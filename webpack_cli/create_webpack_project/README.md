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
  - [最后性能优化篇](#%e6%9c%80%e5%90%8e%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%af%87)
    - [1. babel 插件 @babel/plugin-transform-runtime](#1-babel-%e6%8f%92%e4%bb%b6-babelplugin-transform-runtime)
      - [1.1 安装开发环境依赖](#11-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [1.2 安装生产环境依赖](#12-%e5%ae%89%e8%a3%85%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [1.3 用法](#13-%e7%94%a8%e6%b3%95)
    - [2. HTML 模板插件 html-webpack-plugin](#2-html-%e6%a8%a1%e6%9d%bf%e6%8f%92%e4%bb%b6-html-webpack-plugin)
      - [2.1 安装开发环境依赖](#21-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [2.2 用法](#22-%e7%94%a8%e6%b3%95)
    - [3. 清理插件 clean-webpack-plugin](#3-%e6%b8%85%e7%90%86%e6%8f%92%e4%bb%b6-clean-webpack-plugin)
      - [3.1 安装开发环境依赖](#31-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [3.2 用法](#32-%e7%94%a8%e6%b3%95)
    - [4. 热更新 插件 webpack-dev-server](#4-%e7%83%ad%e6%9b%b4%e6%96%b0-%e6%8f%92%e4%bb%b6-webpack-dev-server)
      - [4.1 安装开发环境依赖](#41-%e5%ae%89%e8%a3%85%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%be%9d%e8%b5%96)
      - [4.2 配置 package.json](#42-%e9%85%8d%e7%bd%ae-packagejson)
      - [4.3 配置 webpack.config.js](#43-%e9%85%8d%e7%bd%ae-webpackconfigjs)

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

![plugins](https://jeno.oss-cn-shanghai.aliyuncs.com/web/webpack/plugins.png)

## 最后性能优化篇

### 1. babel 插件 `@babel/plugin-transform-runtime`

[参考官网](https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs)

> 你也可以使用`@babel/polyfill`,但是会出现一些副作用，比如：添加了一些全局对象、修改了一些原型链、还会覆盖你自定义的`Array.from`方法  
> 该插件作用是将 `es6` 语法转译的方法，单独抽出来，作为模块导入，避免了出现覆盖的情况，因此这个插件完全替代了`@babel/polyfill`，

#### 1.1 安装开发环境依赖

```bash
npm i @babel/plugin-transform-runtime -D
```

#### 1.2 安装生产环境依赖

从`corejs3`开始才有`Array.includes`的`polyfill`，所以最好安装`corejs3`

```bash
npm i @babel/runtime @babel/runtime-corejs3 -S
```

#### 1.3 用法

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

### 2. HTML 模板插件 `html-webpack-plugin`

#### 2.1 安装开发环境依赖

```bash
npm i html-webpack-plugin -D
```

#### 2.2 用法

```js
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
{
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ];
}
```

### 3. 清理插件 `clean-webpack-plugin`

#### 3.1 安装开发环境依赖

```bash
npm i clean-webpack-plugin -D
```

#### 3.2 用法

```js
// webpack.config.js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
{
  plugins: [new CleanWebpackPlugin()];
}
```

### 4. 热更新 插件 `webpack-dev-server`

> [参考链接 1](https://webpack.js.org/configuration/dev-server/)  
> [参考链接 2](https://webpack.js.org/guides/hot-module-replacement/)

#### 4.1 安装开发环境依赖

```bash
npm i webpack-dev-server -D
```

#### 4.2 配置 package.json

```json
{
  "scripts": {
    "dev": "webpack-dev-server --open"
  }
}
```

#### 4.3 配置 webpack.config.js

```js
{
  plugins: [
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
```
