const { relativeRootPath } = require('./path');

module.exports = {
  alias: {
    '@': relativeRootPath('src/')
  }
};
