module.exports = {
   env: {
      browser: true,
      es6: true,
      node: true
   },
   //eslint推荐配置
   //    extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
   //腾讯AlloyTeam配置
   extends: ['alloy', 'alloy/vue', 'plugin:vue/essential', 'plugin:prettier/recommended'],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
   },
   parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
   },
   plugins: ['vue', 'prettier'],
   rules: {}
};
