const path = require('path');
class CustomPlugin {
  apply(compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.hooks.afterResolvers.tap('webpacksEventHook', function(comp) {
      console.log(comp === compiler);
      console.log(path.join(__dirname), process.cwd(), path.resolve());
      console.log('This is an example plugin!!!');
    });
  }
}

module.exports = CustomPlugin;
