const { relativeRootPath } = require('./path');

module.exports = {
  alias: {
    '@': relativeRootPath('src/')
    // 指定vue的路径
    // vue: relativeRootPath('./node_modules/vue/dist/vue.min.js')
  }
};
