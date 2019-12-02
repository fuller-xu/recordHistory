# 项目开发技巧集锦1

## 日期转时间戳的转换

```js
const date = new Date();
console.log(date.getTime());            // 1572616484875
console.log(+date);                     // 1572616484875
console.log(date * 1);                  // 1572616484875
console.log(Number(date));              // 1572616484875
```

## 根据数字生成对应长度的数组

```js
console.log(Array.from({ length: 100 }));
console.log(Array.from(new Array(100)));
```
