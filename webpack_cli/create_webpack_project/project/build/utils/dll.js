const { relativeRootPath } = require('./path');
const dllLibraryPath = 'build/lib';
const relativeDllLibraryPath = (...paths) => {
  return relativeRootPath(dllLibraryPath, ...paths);
};
module.exports = {
  dllLibraryPath,
  relativeDllLibraryPath
};
