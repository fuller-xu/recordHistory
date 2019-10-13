## 在项目中使用 ESLint 与 Prettier

> 前端开发工具推荐：WebStorm VSCode

###### `ESLint` & `Prettier` 的工作描述

- `Prettier` 负责代码风格，代码样式的调整。
- `ESLint` 负责代码规则校验，检查代码是否符合代码规范的工具。

只使用`eslint -fix` 调整风格，其中的缺点如下：

1. 每种编辑器会有不一样的代码格式，而且配置会比较麻烦。
2. `prettier` 已经逐渐成为业界主流的代码风格格式化工具。
3. 减轻 `eslint` 等工具的校验规则，因为将代码样式校验交给了 `prettier`，所以可以将代码校验的规则更准确地应用到代码真正的规范上面。

###### 1. 安装 `eslint` 和 `prettier` （`vue-cli`项目举例）

```javascript
{
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-config-prettier": "^6.3.0",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^3.0.2",
    "eslint-plugin-html": "^6.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-vue": "^5.2.3",
    "prettier": "^1.18.2",
    "prettier-eslint-cli": "^5.0.0",
}
```

>

```bash
npm install --save-dev eslint
npm install --save-dev eslint-config-airbnb-base
npm install --save-dev eslint-loader
npm install --save-dev eslint-friendly-formatter
npm install --save-dev eslint-plugin-html
npm install --save-dev eslint-plugin-import
npm install --save-dev eslint-plugin-vue
npm install --save-dev prettier
npm install --save-dev prettier-eslint-cli
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-prettier
```

###### 2. 项目根目录创建`.prettierrc.js`文件，代码如下：

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

###### 3. 项目根目录创建`.eslintrc.js`文件，代码如下：

```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  //add your custom rules
  rules: {}
}
```
