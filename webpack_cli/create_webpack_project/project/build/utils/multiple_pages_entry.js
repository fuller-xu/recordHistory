const { path, rootPath, relativeRootPath } = require('./path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * 获取多页面打包的入口和页面配置
 */
const multiplePagesConfigure = () => {
  const entry = {}; // 入口对象
  const htmlWebpackPlugins = []; // html-webpack-plugin配置
  // 获取入口文件
  const entryFiles = glob.sync(relativeRootPath('src/pages/*/index.js'));

  Object.keys(entryFiles).forEach((index) => {
    const entryFil = entryFiles[index];
    // 获取文件夹名称
    const match = entryFil.match(/src\/pages\/(.*)\/index\.js/);
    const pathname = match && match[1];
    console.log(pathname);
    // 配置入口文件对象
    entry[pathname] = entryFil;
    // 配置html-webpack-plugin
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: relativeRootPath(`src/pages/${pathname}/index.html`),
        filename: `pages/${pathname}.html`,
        // splitChunks 的 key
        chunks: ['vendors', 'commons', pathname],
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

module.exports = {
  multiplePagesConfigure
};
