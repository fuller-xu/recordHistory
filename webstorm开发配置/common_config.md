### **Webstorm** 开发常见配置 

##### 1. 配置`webpack`中的路径`@`
1. 在项目根目录中，创建文件，命名`alias.config.js`,添加如下代码即可。
```javascript
const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
}
```
2. 然后在`Webstorm`中打开设置，路劲如下，
`File -> Settings -> Languages & Frameworks -> JavaScript -> Webpack`
添加该文件即可。


##### 2. 配置`ESLint`
1. 在`Webstorm`中打开设置，路劲如下，
`File -> Settings -> Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint`
2. 选择手动配置，选择eslint文件夹路径，然后选择eslint配置文件.eslintrc.js即可

##### 3. 配置`ESLint` `Fix ESLint Problems`快捷键
1. 在`Webstorm`中打开设置，路劲如下，
`File -> Settings -> Keymap`
2. 添加`Fix ESLint Problems`快捷键即可




