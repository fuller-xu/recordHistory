# 项目添加校验规则

> 开发工具vscode 

### `ESLint` & `Prettier` 的工作描述

- `Prettier` 负责代码风格，代码样式的调整。
- `ESLint` 负责代码规则校验，检查代码是否符合代码规范的工具。

只使用`eslint -fix` 调整风格，其中的缺点如下：

1. 每种编辑器会有不一样的代码格式，而且配置会比较麻烦。
2. `prettier` 已经逐渐成为业界主流的代码风格格式化工具。
3. 减轻 `eslint` 等工具的校验规则，因为将代码样式校验交给了 `prettier`，所以可以将代码校验的规则更准确地应用到代码真正的规范上面。


### 安装依赖

```bash
// eslint-config-alloy-vue 
npm i -D  eslint babel-eslint vue-eslint-parser@5.0.0 eslint-plugin-vue eslint-config-alloy

//prettier
npm i -D prettier prettier-eslint-cli eslint-plugin-prettier eslint-config-prettier

// other dependences
npm i -D babel-plugin-import eslint-loader eslint-plugin-html eslint-plugin-import
```

### 项目根目录创建`.eslintrc.js`文件，代码如下：
```js
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

```

### 项目根目录创建`.prettierrc.js`文件，代码如下：

```javascript
// 放在项目根目录的 .prettierrc.js 文件
module.exports = {
  // 单行最大长度
  printWidth: 100,
  // 设置编辑器每一个水平缩进的空格数
  tabWidth: 2,
  // 在句尾添加分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 在任何可能的多行中输入尾逗号。
  trailingCommas: 'es5',
  // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
  bracketSpacing: true,
  // 为单行箭头函数的参数添加圆括号。
  alwaysParens: 'always'
}
```
