# 使用urm 来管理 npm registry

[TOC]

> 使用nrm能够查看和切换当前的registry，应对不同的区域下载问题。

##### 首先安装nrm
```bash
npm install -g nrm
```

##### 查看所有registry源，前面的*表示当前的registry
```bash
nrm ls
* npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

##### 切换当前的registry
```bash
nrm use cnpm


   Registry has been set to: http://r.cnpmjs.org/
```

##### 可以通过npm查询当前的registry
```bash
npm get registry
https://registry.npmjs.org/
```