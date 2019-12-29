const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const { rootPath, relativeRootPath } = require('./path');
const { dllLibraryPath, relativeDllLibraryPath } = require('./dll');
/**
 * 获取dll多入口配置
 */
const multipleDLLEntryConfigure = () => {
  let DllReferencePlugins = [];
  let HtmlWebpackTagsPlugins = [];
  // 获取所有 manifest.json
  const jsonFiles = glob.sync(relativeRootPath(dllLibraryPath, '*.json'));
  jsonFiles.forEach((filePath) => {
    // 获取json文件夹名称
    const match = filePath.match(new RegExp(`${dllLibraryPath}/(.*)\.json`));
    const pathname = match && match[1];
    DllReferencePlugins.push(
      new webpack.DllReferencePlugin({
        context: rootPath, // 这里的上下文必须与DllPlugin的上下文统一
        manifest: require(relativeDllLibraryPath(`${pathname}.json`))
      })
    );
  });

  const jsFiles = glob.sync(relativeRootPath(dllLibraryPath, '*.js'));
  jsFiles.forEach((filePath) => {
    // 获取json文件夹名称
    const match = filePath.match(new RegExp(`${dllLibraryPath}/(.*)\.js`));
    const pathname = match && match[1];
    HtmlWebpackTagsPlugins.push(
      new HtmlWebpackTagsPlugin({
        tags: [`lib/${pathname}.js`],
        append: false // 在之前插入
      })
    );
  });
  return { DllReferencePlugins, HtmlWebpackTagsPlugins };
};

module.exports = {
  multipleDLLEntryConfigure
};
