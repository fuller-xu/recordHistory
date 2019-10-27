- [自动生成Github markdown文件目录（Windows版）](#%e8%87%aa%e5%8a%a8%e7%94%9f%e6%88%90github-markdown%e6%96%87%e4%bb%b6%e7%9b%ae%e5%bd%95windows%e7%89%88)
    - [下载`gh-md-toc`工具](#%e4%b8%8b%e8%bd%bdgh-md-toc%e5%b7%a5%e5%85%b7)
    - [使用方式](#%e4%bd%bf%e7%94%a8%e6%96%b9%e5%bc%8f)

# 自动生成Github markdown文件目录（Windows版）

> 生成目录结构的方式有多种，这里只介绍一种`gh-md-toc`工具，可以在`Windows`平台上使用，用法简单，其他Linux、Mac平台也有类似的工具。

### 下载`gh-md-toc`工具

`github-markdown-toc.go`[下载地址](https://github.com/ekalinin/github-markdown-toc.go/releases)

虽然下载下来的是tgz压缩文件，解压出来的文件，其实是exe执行文件，手动加上`exe`扩展名后，就可以用了。

### 使用方式

1. 将`Markdown`文件复制到`exe`执行文件一个目录下。

2. 打开终端，执行指令
    ```bash
    ./gh-md-toc.exe README.md
    ```
    ![图片]()
3. 将内容复制到原来的README.md文件的头部即可
   ![图片](https://jeno.oss-cn-shanghai.aliyuncs.com/web/github/auto_generate_md_toc.png)