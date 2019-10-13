# 使用NVM包管理器来管理node版本

##### window下安装nvm
1. 首先下载安装包[nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases)
2. 在`nvm`安装目录下找到`settings.txt`文件
3. 在文件末尾添加

```txt
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
4. 在终端运行`nvm version` 是否正常

```bash
nvm version
1.1.7
```

##### 使用nvm命令来安装node

```bash
nvm ls    //查看nvm下安装了哪些node版本
nvm install 10.16.3 //安装指定版本的node
nvm uninstall 10.16.3 //卸载指定版本的node
nvm use 10.16.3 //用指定版本的node环境
nvm install lastest // 升级到最新版
nvm install stable // 升级到稳定版
```



