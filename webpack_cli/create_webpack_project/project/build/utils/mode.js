const currentEnvironment = process.env.NODE_ENV;

module.exports = {
  mode: currentEnvironment,
  devMode: currentEnvironment === 'development'
};
