# webpack 打包 优化

##### 通过cdn引入，减少代码的打包
使用插件`html-webpack-externals-plugin`,自动将cdn文件引入模板中。
```js
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
new HtmlWebpackExternalsPlugin({
    externals: [
        {
            module: 'vue',
            entry: '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',//可以是本地、网络文件
            global: 'Vue'
        },
    ]
})
```
##### 提取公共的js，避免重复代码
通过webpack自身的配置属性`splitChunks`，配置提取公共文件
```js
 optimization: {
    splitChunks: {
        maxSize: 200000, // 文件最大200k
        minSize: 0, // 超过这个size,就会额外打包
        cacheGroups: {
            commons: {
                name: 'commons', // 提取出来的文件名
                chunks: 'all', // 包括同步异步的js
                minChunks: 2 // 引用2次以上，就会额外提取出来这个公用的js
            }
        }
    }
}
```

##### 开启多线程打包
1. 在vue.config.js中，用法如下，（在vue-cli3中`parallel`属性默认为`require('os').cpus().length > 1`,表示该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建）
```js
{
     chainWebpack: config => {
         config.module
            .rule('js')
            .use('thread-loader')
            .loader('thread-loader')
            .tap((options = {}) => {
                // 修改线程数量
                return Object.assign(options, { worker: 10 });
            })
            .end();
     }
}
```
2. 在webpack.prod.js中，用法如下，
```js
{
    module:{
        rules:[
            {
                test:/.js$/,
                loader:'thread-loader',
                options:{
                    worker:10
                }
            }
        ]
    }
}
```

##### 开启多线程代码压缩，并开启二次缓存
使用插件`terser-webpack-plugin`
```js
const TerserPlugin = require('terser-webpack-plugin');
{
    optimization: {
        minimizer: [
            // 开启多线程代码压缩,开启缓存
            new TerserPlugin({
                parallel: true,
                cache: true
            })
        ],
    }
}
```

##### 另外一个二次缓存插件 `hard-source-webpack-plugin`
```js
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
{
    plugins:[
        new HardSourceWebpackPlugin()
    ]
}
```

##### 自动将打包的文件压缩成zip包
使用插件 `zip-webpack-plugin`
```js
const ZipPlugin = require('zip-webpack-plugin');
const zipPlugin = [];
//只在生产构建的时候使用zip压缩
process.env.NODE_ENV === 'production'
    && zipPlugin.push(
        new ZipPlugin({
            path: './', // dist目录下
            filename: 'dist.zip'
        })
    );

{
    plugins:[].concat(zipPlugin)
}
```

##### 查看打包构建速度，细分至每个文件的打包时间
使用插件`speed-measure-webpack-plugin`
```js
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
//在 vue.config.js中
{
    configureWebpack: smp.wrap({})
}
//在 webpack.prod.js/webpack.dev.js中
module.exports = smp.wrap({})
```

##### 查看打包的体积，可以看到每个文件的所占大小比率
使用插件`webpack-bundle-analyzer`
```js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

{
    plugins:[
        new BundleAnalyzerPlugin()
    ]
}
```

> 还有分包管理的构建，更新中