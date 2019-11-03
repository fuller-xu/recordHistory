- [VMware Workstation Pro 15.5 安装 MacOS 10.14](#vmware-workstation-pro-155-%e5%ae%89%e8%a3%85-macos-1014)
    - [1.首先做好提前准备的安装包](#1%e9%a6%96%e5%85%88%e5%81%9a%e5%a5%bd%e6%8f%90%e5%89%8d%e5%87%86%e5%a4%87%e7%9a%84%e5%ae%89%e8%a3%85%e5%8c%85)
    - [2.安装VMware](#2%e5%ae%89%e8%a3%85vmware)
    - [3.解压UnLocker工具](#3%e8%a7%a3%e5%8e%8bunlocker%e5%b7%a5%e5%85%b7)
    - [4.创建虚拟机，修改虚拟系统文件设置](#4%e5%88%9b%e5%bb%ba%e8%99%9a%e6%8b%9f%e6%9c%ba%e4%bf%ae%e6%94%b9%e8%99%9a%e6%8b%9f%e7%b3%bb%e7%bb%9f%e6%96%87%e4%bb%b6%e8%ae%be%e7%bd%ae)
    - [5.修改虚拟机设置](#5%e4%bf%ae%e6%94%b9%e8%99%9a%e6%8b%9f%e6%9c%ba%e8%ae%be%e7%bd%ae)
    - [6.启动虚拟机](#6%e5%90%af%e5%8a%a8%e8%99%9a%e6%8b%9f%e6%9c%ba)

# VMware Workstation Pro 15.5 安装 MacOS 10.14

### 1.首先做好提前准备的安装包

* [VMware Workstation Pro 15.5 安装包](https://pan.baidu.com/s/1O5R2CXVqTHs65n9Nkpp90g)——**提取码：hnzq**
* [MacOS 10.14 镜像文件](https://pan.baidu.com/s/1QnGRwCY3pCQ5aF4FctENOQ)——**提取码：n4wy**
* [UnLocker 工具](https://pan.baidu.com/s/19m9NqAFD8IWAGV0HfBCjBw)——**提取码：3phg**

### 2.安装VMware

这里就不展示安装过程了，直接安装就好。安装好了之后在网上找个注册码破解一下。

### 3.解压UnLocker工具

在这之前，不要运行`VMware Workstation`，在解压后的文件夹中找到 `win-install.cmd` 文件双击运行，会在当前目录中生成`backup`和`tools`文件夹，最后将所需要的文件自动拷贝到`VMware Workstation`安装目录中，所以不用我们去操心，等待运行完毕就好。

### 4.创建虚拟机，修改虚拟系统文件设置

在虚拟系统保存的路径下找到`虚拟机文件.vmx`，用记事本打开编辑，在最后一行添加
```
smc.version = "0"
```

### 5.修改虚拟机设置

* 硬件，USB控制器，兼容性改为2.0，不然可能在mac里连接不到真机
* 选项，增强型虚拟键盘：在可用时使用
* 选项，VMware Tools：将客户机时间与主机同步
* 高级，抓取的输入内容：高；收集调试信息：无；勾选禁用页面内存调整

### 6.启动虚拟机