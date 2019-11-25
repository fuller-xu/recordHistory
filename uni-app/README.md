# 使用UNI-APP开发遇到的坑

## 1.时间格式
`new Date(formatStr)` 中 `formatStr` 默认时间格式在IOS端不支持`YYYY-MM-DD HH:mm:ss`，需要变更`YYYY/MM/DD HH:mm:ss`，在安卓端两者都兼容。

## 