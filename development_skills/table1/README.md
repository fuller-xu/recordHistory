# 项目开发技巧集锦1

### 日期转时间戳的转换

```js
const curr = new Date();
console.log(curr.getTime());            // 1572616484875
console.log(+curr);                     // 1572616484875
console.log(curr * 1);                  // 1572616484875
console.log(Number(curr));              // 1572616484875
```


匿名函数中报错，必须要捕获，否则会报错