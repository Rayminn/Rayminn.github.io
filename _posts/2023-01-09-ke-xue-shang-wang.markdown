---
layout:     post
title:      "正向代理服务器搭建"
subtitle:   " \"不再受限于人！\""
date:       2023-01-09 22:39:00
author:     "Rayminn"
header-img: "img/post-bg-os-metro.jpg"
catalog: true
tags:
    - ecs应用
---

# 0x00 前言

举个例子解释正向代理：

我是一个用户，我访问不了某网站，但是我能访问一个代理服务器，这个代理服务器呢能访问那个我不能访问的网站，于是我先连上代理服务器，告诉他我需要那个无法访问网站的内容，代理服务器去取回来，然后返回给我。

本篇比较新手向，采用了简单安全的开源应用程序，读者只需要了解一点点基础知识即可。

# 0x01 准备

- vps服务器一台，CentOS 7+，Ubuntu 16+，Debian 8+均可；
- 域名（非必要，套用CDN用）。

首先需要在服务器上安装curl：

```shell
sudo apt install curl # Ubuntu/Debian
sudo yum install curl # CentOS
```

# 0x02 安装

笔者使用的是BBR内核，用一键脚本安装即可：

```shell
bash <(curl -Ls https://www.github.com/vaxilu/x-ui/master/install.sh)
#如果代理服务器访问github受阻可以用镜像站：
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
```

![啊哦！图片跑丢了，快联系笔者修复吧！](img/zheng-xiang-dai-li-1.png)

# 0x03 节点添加

点击入站列表里的加号就能添加节点啦各种参数均可自行设置~~笔者不懂，遂默认~~。

![啊哦！图片跑丢了，快联系笔者修复吧！](img/zheng-xiang-dai-li-2.png)

添加完成后点击操作，即可扫描二维码添加节点啦~

推荐使用V2ray链接哦~（教程暂鸽）
