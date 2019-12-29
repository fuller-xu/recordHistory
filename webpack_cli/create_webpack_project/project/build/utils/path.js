const path = require('path');
// export const rootPath = __dirname;
const rootPath = process.cwd();

/**
 * 相对于根目录
 * @param  {...any} paths
 */
const relativeRootPath = (...paths) => {
  return path.join(rootPath, ...paths);
};
module.exports = {
  path,
  rootPath,
  relativeRootPath
};
